/* ============================================================
   sbmcq.js  "Attack the Stimulus MCQ" walkthrough engine + data
   Exposes: renderCheatsheet(el), renderWalk(el, {unit})
   Self-contained (site convention: no build step, no imports).
   Worked examples are pulled verbatim from the real unit tests.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- the 5 question types (from mcq_question_types.docx) ---------- */
  var WT = {
    bestillustrates: { name: 'Best Illustrates', cls: 'wt-bestillustrates',
      cue: '"best illustrates / best represents / supports the claim that..."',
      strat: 'Summarize the source in one plain sentence, then find the choice that matches it. Stay inside the source.',
      trap: 'A choice that is true about the topic but that the source never actually shows.' },
    context: { name: 'In the Context Of', cls: 'wt-context',
      cue: '"best understood in the context of... / best explained in the context of..."',
      strat: 'Ask what had to be happening in the world for this source to exist. You want the backdrop, not the content.',
      trap: 'A choice that just describes what the source is about instead of the larger situation around it.' },
    causation: { name: 'Causation', cls: 'wt-causation',
      cue: '"contributed to / led to / resulted from / best explains why / most directly caused"',
      strat: 'Check the direction first (is the source the cause or the effect?). Then run the remove it test and the time period test.',
      trap: 'A true but adjacent answer: right era, but not actually the cause or the effect.' },
    purpose: { name: 'Purpose / Point of View', cls: 'wt-purpose',
      cue: '"purpose / in order to / point of view / intended audience / an attempt to / reliability"',
      strat: 'Ask who made this and what benefits them. The answer must line up with that person’s interest.',
      trap: 'A choice that is true about the topic but is not tied to who made the source and why.' },
    similar: { name: 'Most Similar', cls: 'wt-similar',
      cue: '"most similar to / methods most similar to"',
      strat: 'Strip away the topic and name the method or process. Match the how, not the what.',
      trap: 'Matching by topic (both about empires, both about workers) instead of by method or process.' }
  };

  var UNIT_TITLES = {
    2: 'Unit 2 &mdash; Networks of Exchange',
    3: 'Unit 3 &mdash; Land-Based Empires',
    4: 'Unit 4 &mdash; Transoceanic Interconnections',
    5: 'Unit 5 &mdash; Revolutions',
    6: 'Unit 6 &mdash; Consequences of Industrialization',
    7: 'Unit 7 &mdash; Global Conflict',
    8: 'Unit 8 &mdash; Cold War &amp; Decolonization'
  };

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* ---------- WORKED EXAMPLES (one per unit for 4-8; verbatim from the tests) ----------
     stim / q may contain <mark class="hs"> (key phrase in the stimulus, revealed at step 3)
     and <mark class="hq"> (trigger words in the stem, revealed at step 2). These are trusted. */
  var WORKED = [
    /* ============ UNIT 4 ============ */
    {
      unit: 4, topic: '4.1', type: 'causation', test: 'Unit 4 Test A, Question 1',
      stim: '"We agreed to leave the coast of Peru and <mark class="hs">sail for Japan</mark>, since we knew that cloth was valuable merchandise there. So we sailed directly for Japan. The shogun, hearing of us, sent five boats to bring me to his court. He demanded to know <mark class="hs">why we had come so far</mark>. I answered: ‘We the English are a people who seek friendship with all nations and trade with all countries, bringing the merchandise that our country produces.’ He demanded also to know about the conflicts between Spain and Portugal and England and the reasons for them."',
      srcline: 'William Adams, English navigator and merchant, description of his voyage to Japan, 1611',
      src: [
        { tag: 'WHEN', since: 'it was written in 1611, the height of European overseas trade', therefore: 'it fits the age when Europeans were pushing sea routes all the way to Asia' },
        { tag: 'WHO', since: 'it was written by an English navigator and merchant', therefore: 'it may show English trade as friendly and welcome, because a merchant is promoting himself' },
        { tag: 'WHAT', since: 'it is a firsthand description of his own voyage', therefore: 'it is probably how the author wants to be seen, so it is one-sided and self-flattering' }
      ],
      q: 'Which of the following <mark class="hq">most directly facilitated the voyage</mark> mentioned in the passage?',
      options: [
        'European access to Arabian and Indian shipping vessels',
        'European access to Chinese mapmaking knowledge',
        'European innovations in ship design and navigation',
        'European contact with Polynesian mariners'
      ],
      answer: 2, trapIdx: 0,
      meaning: 'Strip away the story: an English ship has crossed the ocean all the way from Peru to Japan. The passage never says how. So the question is really asking: what technology made that ocean crossing possible?',
      why: 'C. Long transoceanic voyages like this were made possible by European innovations in ship design (the caravel, the lateen sail) and navigation (the astrolabe and magnetic compass).',
      trap: 'A and B credit borrowed Arab, Indian, or Chinese vessels and maps. Europeans did borrow ideas, but the direct engine of this voyage is European ship and navigation technology. Do not pick a distractor just because it sounds connected to trade.'
    },

    /* ============ UNIT 5 ============ */
    {
      unit: 5, topic: '5.1', type: 'context', test: 'Unit 5 Test, Question 1',
      stim: '"The essence of education, our traditional national aim, is to promote benevolence, justice, loyalty, filial piety, and knowledge and skill. But recently, people have been going to extremes by embracing a foreign civilization whose only values are <mark class="hs">fact-gathering and technical-skill</mark>. These values bring harm to our customary ways. We try to incorporate the best features of foreigners in order to achieve the lofty goals that the Meiji emperor desires. We have tried to abandon the undesirable practices of the past and learn from the outside world. But these policies have had a serious defect. They have reduced benevolence, justice, loyalty, and filial piety to secondary goals. If we indiscriminately imitate foreign ways, our people will forget the great principles governing the relations between ruler and subject and the relations between father and son."',
      srcline: 'Motoda Nagazane, adviser to the Meiji emperor, treatise written following a tour of Japanese schools with the emperor, 1879',
      src: [
        { tag: 'WHEN', since: 'it was written in 1879, early in the Meiji era of rapid Westernization', therefore: 'the whole background is the clash between Japanese tradition and Western learning' },
        { tag: 'WHO', since: 'it was written by an adviser to the Meiji emperor, a court official', therefore: 'it may defend traditional Confucian values and distrust foreign influence' },
        { tag: 'WHAT', since: 'it is a treatise arguing a position about schools', therefore: 'it is persuasive and one-sided, not neutral reporting' }
      ],
      q: 'The values of "foreign civilization" that Nagazane criticized in the passage were <mark class="hq">most directly a product of</mark> the',
      options: [
        'Renaissance',
        'Protestant and Catholic Reformations',
        'Enlightenment',
        'Scientific and Industrial Revolutions'
      ],
      answer: 3, trapIdx: 2,
      meaning: 'The question is asking you to name where those "foreign values" came from. So decode the values first: "fact-gathering" is empirical science, and "technical-skill" is technology. Which big development produced those?',
      why: 'D. Fact-gathering (empiricism) grew out of the Scientific Revolution, and technical skill (machines and applied technology) grew out of the Industrial Revolution.',
      trap: 'C, the Enlightenment, is tempting because it is also a Western import. But the Enlightenment produced political ideas (rights, reason in government), not "fact-gathering and technical-skill." Match the exact values named in the passage.'
    },

    /* ============ UNIT 6 ============ */
    {
      unit: 6, topic: '6.1', type: 'purpose', test: 'Unit 6 Test, Question 4',
      stim: '"Let us take North America, for instance, and the richest portion of it, the Mississippi basin, to compare with the Congo River basin in Africa. When early explorers such as de Soto first navigated the Mississippi and the Indians were the undisputed masters of that enormous river basin, the European spirit of enterprise would have found only a few valuable products there, mainly some furs and timber.\n\nThe Congo River basin is, however, <mark class="hs">much more promising</mark> at the stage of underdevelopment. The forests on the banks of the Congo are filled with precious hardwoods; among the climbing vines in the forest is the one from which rubber is produced (the best of which sells for two shillings per pound), and among its palms are some whose oil is a staple article of commerce and others whose fibers make the best cordage.\n\nBut what is of far more value, the Congo River basin has over 40 million moderately industrious and workable people. It is among them that the European trader may fix his residence for years and develop commerce to his profit with very little risks involved. In dwelling over the advantages possessed by the Congo here, it has been my goal to rouse this spirit of trade. Merchants are the missionaries of commerce adapted for nowhere so well as for the Congo River basin where there are so many idle hands and such abundant opportunities."',
      srcline: 'Henry Morton Stanley, Welsh-American journalist, explorer, and agent for King Leopold of Belgium’s Congo Free State, The Congo and the Founding of Its Free State, book published in 1885',
      src: [
        { tag: 'WHEN', since: 'it was written in 1885, during the Scramble for Africa', therefore: 'it fits the rush of European powers to claim and exploit African land' },
        { tag: 'WHO', since: 'it was written by a paid agent for King Leopold’s Congo Free State', therefore: 'it may talk up the Congo’s riches to attract investors, the way a report for a king glorifies the project' },
        { tag: 'WHAT', since: 'it is a book published to promote the colony', therefore: 'it may exaggerate the profits and hide the harm, because its purpose is to sell the venture' }
      ],
      q: 'Stanley’s description of the riches of the Congo in the first two paragraphs can best be seen as an <mark class="hq">attempt to</mark>',
      options: [
        'place European expansion in the Congo in the context of earlier imperial ventures that had ended in disaster for the native population',
        'place European expansion in the Congo in the context of instances in which inter-European rivalries had prevented economic exploitation of colonies',
        'place European expansion in the Congo in the context of other imperial ventures that seemed difficult at first but turned out to be highly valuable',
        'place European expansion in the Congo in the context of instances in which British imperial policies proved more successful than other Europeans’'
      ],
      answer: 2, trapIdx: 0,
      meaning: 'This is a purpose question: why did Stanley write it this way? He compares the Congo to the Mississippi, which also looked unpromising at first but became hugely valuable. He is arguing that the Congo is a great investment.',
      why: 'C. Stanley points out that the Mississippi basin looked unrewarding to early explorers but became very valuable, then says the Congo is "much more promising." The comparison is meant to make the Congo look like a can’t-miss opportunity.',
      trap: 'A says the earlier ventures ended in disaster. That is the opposite of Stanley’s optimistic sales pitch. When a source is clearly promoting something, the answer should match that promotional purpose.'
    },

    /* ============ UNIT 7 ============ */
    {
      unit: 7, topic: '7.2', type: 'context', test: 'Unit 7 Test A1',
      stim: '"Are we prepared for so stubborn a fight as a future war involving the great powers of Europe will undoubtedly become? The answer, we must say without evasion, is no. It should not be forgotten that Russia and Germany are representatives of the conservative principle in the civilized world, as opposed to the democratic principle represented by England and France. A <mark class="hs">general European war is mortally dangerous to both Russia and Germany</mark>, no matter who wins.\n\nIt is my firm conviction that there must inevitably break out in the defeated country a <mark class="hs">social revolution</mark> that, by the very nature of these things, will inevitably spread to the country of the victor. In our country today, there are countless agitators telling the peasant that he should demand a gratuitous share of somebody else’s land, or the worker that he should be getting hold of the entire capital and profits of the manufacturer. War with Germany will create exceptionally favorable conditions for such agitations."',
      srcline: 'Pyotr Durnovo, Russian Minister of the Interior, memorandum to Tsar Nicholas II, February 1914',
      src: [
        { tag: 'WHEN', since: 'it was written in February 1914, just months before the First World War', therefore: 'the context is an empire bracing for a war that has not started yet' },
        { tag: 'WHO', since: 'it was written by the Russian Minister of the Interior, an officer in charge of internal security', therefore: 'he is focused on threats to the tsar’s state, especially unrest at home' },
        { tag: 'WHAT', since: 'it is a private memorandum to the tsar, not a public speech', therefore: 'it is probably candid and analytical, closer to what the author really thinks, not propaganda' }
      ],
      q: 'The memorandum is <mark class="hq">best explained in the context of</mark> which of the following developments in the early twentieth century?',
      options: [
        'The decline of the Western-dominated global order',
        'The emergence of external and internal challenges that threatened the stability of imperial states',
        'The emergence of new nation-states based on the principle of ethnic self-determination',
        'The use of government propaganda to mobilize national populations for conflict'
      ],
      answer: 1, trapIdx: 2,
      meaning: 'Context question: what bigger situation makes a minister write this? He warns that a war (an external threat) plus revolution and agitators at home (internal threats) could destroy the Russian empire.',
      why: 'B. Durnovo describes exactly the pressures facing imperial states before 1914: dangerous external rivalries and rising internal unrest that together threatened the stability of empires like Russia.',
      trap: 'C, new nation-states from self-determination, is a result of the war (after 1918), not the pre-war context of a 1914 memo. Watch the time period: the backdrop must already exist when the source was written.'
    },

    /* ============ UNIT 8 ============ */
    {
      unit: 8, topic: '8.4', type: 'causation', test: 'Unit 8 Test - a, Question 8',
      stim: '"As a sixteen-year-old schoolgirl, I did not know much about being a freedom fighter, although I read nationalist newspapers and knew about the pronouncements of Jomo Kenyatta. By the time the British declared a state of emergency in Kenya, I had already taken my first oath to the Mau Mau cause. Repeating carefully after the instructor, I swore to:\n\n1. <mark class="hs">Fight for the soil of Kenya, which had been stolen by the Whites.</mark>\n\n2. If possible, get a gun and any other valuables or money to help strengthen the movement.\n\n3. Kill anyone who was against the movement, even if that person was my brother.\n\nDespite the pressure, I felt as determined as ever. In my mind, I had no doubt that I was fighting for a just cause."',
      srcline: 'Wambui Otieno, Kenyan activist, description of her participation in the Mau Mau uprising against British rule in Kenya in the early 1950s, included in an autobiography published in 1998',
      src: [
        { tag: 'WHEN', since: 'it describes the early 1950s, the peak of post-war decolonization', therefore: 'it fits the wave of colonies pushing hard for independence' },
        { tag: 'WHO', since: 'it was written by a Kenyan activist who joined the Mau Mau', therefore: 'she is a participant, so she presents the uprising sympathetically as a just fight for freedom' },
        { tag: 'WHAT', since: 'it is a memoir published in 1998, decades after the events', therefore: 'it is shaped by hindsight and pride in the independence struggle' }
      ],
      q: 'Which of the following <mark class="hq">best explains why</mark> the movement described in the passage began after the Second World War?',
      options: [
        'The settlement of the conflict divided former German and Japanese colonies among the victorious Allied powers.',
        'The racist ideology of the German Nazi regime spread in influence as a result of its early military success.',
        'The defeat of the Axis powers required the Allies to grant political concessions in order to mobilize colonial populations.',
        'The Allied Western European states began to intervene in the economy through the creation of extensive welfare states.'
      ],
      answer: 2, trapIdx: 0,
      meaning: 'The passage is an anti-colonial independence uprising (fighting for "the soil of Kenya... stolen by the Whites"). The question asks the cause: why did movements like this surge right after the Second World War?',
      why: 'C. To win the war, Britain and France leaned heavily on their colonies and promised political concessions in return. When those promises went unmet, resentment fueled independence movements like the Mau Mau.',
      trap: 'A (dividing former German and Japanese colonies) is a true fact about the post-war settlement, but Kenya was a British colony, not a former Axis one, so it does not explain this uprising. Beware true-but-unconnected answers.'
    }
    ,

    /* ============ UNIT 2 (added) ============ */
    {
      unit: 2, topic: '2.4', type: 'causation', test: 'Unit 2 · Topic 2.4',
      simg: 'images/u2-mcq-transsaharan.png',
      stim: 'The map above shows a network of <mark class="hs">caravan routes crossing the Sahara Desert</mark>, linking cities such as Sijilmasa, Timbuktu, Gao, and Djenné with the <mark class="hs">gold fields of West Africa</mark> (Bambuk, Bouré) and the Mediterranean coast.',
      srcline: 'Map of trans-Saharan trade routes in West Africa, c. 1200–1450',
      src: [
        { tag: 'WHEN', since: 'it maps the routes of roughly 1200–1450', therefore: 'it fits the era when trans-Saharan trade was expanding fast' },
        { tag: 'WHO', since: 'it is a modern reference map, not a person’s account', therefore: 'it is a neutral tool showing geography, with no agenda to decode' },
        { tag: 'WHAT', since: 'it plots cities, gold fields, and desert routes', therefore: 'it is about the infrastructure that carried the trade, not any one event' }
      ],
      q: 'Which of the following <mark class="hq">led most directly to</mark> the development of the trading network on the map?',
      options: [
        'The growth of trading cities on the Swahili Coast',
        'Innovations in transportation and commercial technologies such as the caravanserai',
        'The overall decline in the trade of goods along the Silk Roads',
        'The emergence of the trans-Atlantic slave trade in West Africa'
      ],
      answer: 1, trapIdx: 0,
      meaning: 'Strip away the place names: goods had to cross a brutal desert. The question is really asking what made regularly crossing the Sahara possible in the first place.',
      why: 'B. New transport and commercial technology — the camel saddle, organized caravans, and caravanserai rest stops — let merchants cross the Sahara reliably, which is what built the network shown on the map.',
      trap: 'A names the Swahili Coast: right era, wrong side of the continent (that is Indian Ocean trade). In a causation question, do not grab a choice just because it is from the same period — it has to be the actual cause.'
    },
    {
      unit: 2, topic: '2.4', type: 'bestillustrates', test: 'Unit 2 · Topic 2.4',
      stim: '“So generous was the king in his gifts of gold as he passed through Cairo that <mark class="hs">the price of gold fell and did not recover for many years</mark>.”',
      srcline: 'Account of Mansa Musa’s pilgrimage (hajj), fourteenth century',
      src: [
        { tag: 'WHEN', since: 'it describes a fourteenth-century pilgrimage', therefore: 'it fits Mali at the height of its wealth and power' },
        { tag: 'WHO', since: 'it is an outsider’s account of the king passing through Cairo', therefore: 'it records the impression his gold made on foreign observers' },
        { tag: 'WHAT', since: 'it is a short anecdote about giving away gold', therefore: 'it is about a display of wealth, not about religion or war' }
      ],
      q: 'The passage <mark class="hq">best illustrates</mark> which of the following about Mali?',
      options: [
        'Its poverty and isolation from world trade',
        'Its wealth derived from control of the trans-Saharan gold trade',
        'Its rejection of Islam',
        'Its reliance on Indian Ocean monsoon winds'
      ],
      answer: 1, trapIdx: 3,
      meaning: 'The king gives away so much gold that he crashes Cairo’s gold price for years. Only staggering, steady wealth does that — so where did all that gold come from?',
      why: 'B. Mali’s wealth came from controlling and taxing the trans-Saharan trade in gold and salt. Mansa Musa’s gold-soaked hajj is the textbook illustration of that wealth.',
      trap: 'D (Indian Ocean monsoon winds) is a real thing, but it powered East African and Swahili trade, not landlocked Mali — and the passage never mentions it. Stay inside what the source actually shows.'
    },
    {
      unit: 2, topic: '2.6', type: 'bestillustrates', test: 'Unit 2 · Topic 2.6',
      stim: '“The pestilence traveled with the caravans and the ships, carried by the fleas upon the rats, until it had <mark class="hs">emptied whole cities from Cathay to the shores of Europe</mark>.”',
      srcline: 'Description of the spread of the Black Death',
      src: [
        { tag: 'WHEN', since: 'it describes plague spreading from Cathay (China) to Europe', therefore: 'it fits the mid-1300s Black Death that followed the trade routes' },
        { tag: 'WHO', since: 'it is a general description of the pestilence', therefore: 'it is summarizing a hemisphere-wide catastrophe rather than one town' },
        { tag: 'WHAT', since: 'it traces the disease along caravans and ships', therefore: 'it is about what the trade networks carried besides goods' }
      ],
      q: 'The passage best <mark class="hq">supports which of the following conclusions</mark> about trade networks?',
      options: [
        'They spread only goods, not disease',
        'They spread disease as well as goods and ideas',
        'They had no effect on population',
        'They prevented the spread of the plague'
      ],
      answer: 1, trapIdx: 0,
      meaning: 'The same caravans and ships that carried silk and silver also carried the plague from China all the way to Europe. So the networks moved disease, not just merchandise.',
      why: 'B. The connected Silk Road and Indian Ocean networks that carried goods and ideas also carried the Black Death across Eurasia — exactly what the passage describes.',
      trap: 'A says the networks spread “only goods, not disease” — the direct opposite of the passage. Never pick a choice that contradicts the source just because it sounds neat.'
    },
    {
      unit: 2, topic: '2.5', type: 'bestillustrates', test: 'Unit 2 · Topic 2.5',
      stim: '“I, who have traveled through the lands of the Turks, the Persians, and the Indians, <mark class="hs">everywhere found brothers in the faith who welcomed me and honored the law of Islam</mark>.”',
      srcline: 'Ibn Battuta, fourteenth-century Muslim traveler',
      src: [
        { tag: 'WHEN', since: 'Ibn Battuta traveled in the 1300s', therefore: 'it fits an era when Islam had already spread across Afro-Eurasia along the trade routes' },
        { tag: 'WHO', since: 'he was a Muslim scholar and traveler', therefore: 'he notices and values the shared Islamic world (Dar al-Islam) that hosted him' },
        { tag: 'WHAT', since: 'it is a traveler’s firsthand report', therefore: 'it reflects his own experience of being welcomed, not an outside survey' }
      ],
      q: 'The passage is most useful to a historian as <mark class="hq">evidence of</mark> which of the following?',
      options: [
        'The decline of Islam in Afro-Eurasia',
        'The spread of a shared Islamic culture across trade networks',
        'The isolation of Muslim communities',
        'The rejection of travelers in Muslim lands'
      ],
      answer: 1, trapIdx: 0,
      meaning: 'A single traveler is welcomed as a “brother in the faith” everywhere from Anatolia to India. That only happens if one connected Islamic culture already stretches across all those trade routes.',
      why: 'B. Ibn Battuta being hosted by fellow Muslims from Turkey to India is prime evidence of Dar al-Islam — a shared Islamic culture that trade and travel spread across Afro-Eurasia.',
      trap: 'A says the passage shows the decline of Islam — the opposite of a traveler welcomed everywhere by Muslims. Read what the source actually demonstrates, not the reverse.'
    }
    ,

    /* ============ UNIT 3 (added) ============ */
    {
      unit: 3, topic: '3.2', type: 'purpose', test: 'Unit 3 · Topic 3.2',
      stim: '“The Mughal emperor is not as wealthy as he might appear because he grants some of his lands to governors, in place of a salary, on condition that they pay a certain sum annually to the emperor out of any extra revenue that the land may yield. For his other lands, he has contractors collecting the taxes. Like the governors, they are bound to pay him an annual sum.\n\nThese governors and contractors have an almost absolute authority over the peasantry and nearly as much over the artisans and merchants. <mark class="hs">Nothing is crueler and more oppressive than the manner in which they exercise their authority.</mark>\n\nThere is no one before whom the oppressed peasant, artisan, or tradesman can pour out his just complaints. This debasing state of slavery obstructs the progress of trade and influences the manners and mode of life of every individual. If a man manages to obtain wealth, he would rather bury it in the ground and continue to appear poor, than risk being dispossessed by the state.”',
      srcline: 'François Bernier, French traveler, letter to the French finance minister Jean-Baptiste Colbert, 1670',
      src: [
        { tag: 'WHEN', since: 'it was written in 1670', therefore: 'it fits the era of the powerful Mughal Empire near its height' },
        { tag: 'WHO', since: 'it was written by a French traveler to a French finance minister', therefore: 'he is describing Mughal rule for a European patron, so his framing may be shaped to please that reader' },
        { tag: 'WHAT', since: 'it is a private letter reporting what he claims to have seen', therefore: 'its value depends entirely on whether he actually witnessed these conditions' }
      ],
      q: 'All of the following about Bernier are accurate. Which would <mark class="hq">most increase historians’ confidence in the reliability</mark> of his account?',
      options: [
        'He originally studied for a position in the Catholic Church before shifting to a nonreligious education.',
        'He spent several years as an official at the Mughal imperial court.',
        'He made extensive travels in Europe before going to India.',
        'He wrote the description at the request of Colbert, who founded the French East India Company.'
      ],
      answer: 1, trapIdx: 3,
      meaning: 'This is a reliability question. To trust an eyewitness account, you want proof the author was actually there and in a position to see what he describes.',
      why: 'B. If Bernier spent years as an official inside the Mughal court, he witnessed the administration firsthand — exactly the thing that makes an eyewitness account more reliable.',
      trap: 'D (that he wrote it for Colbert, who founded the French East India Company) would make you trust him less, not more — he had a patron to impress. Watch the direction of a reliability question: you want the fact that strengthens the account.'
    },
    {
      unit: 3, topic: '3.2', type: 'context', test: 'Unit 3 · Topic 3.2',
      stim: '“The state of monarchy is the supremest thing upon earth; for kings are not only God’s lieutenants upon earth, and sit upon God’s throne, but even by God himself are called gods. <mark class="hs">In the Scriptures kings are called gods</mark>, and so their power after a certain relation compared to the divine power.”',
      srcline: 'King James I, speech to Parliament, England, 1610',
      src: [
        { tag: 'WHEN', since: 'it was delivered in 1610', therefore: 'it fits the age of centralizing European monarchs claiming ever more absolute power' },
        { tag: 'WHO', since: 'it was spoken by a reigning king to his Parliament', therefore: 'he is defending and expanding his own authority' },
        { tag: 'WHAT', since: 'it is a royal speech', therefore: 'it is a public claim about where a king’s power comes from' }
      ],
      q: 'The passage is <mark class="hq">best understood in the context of</mark> which of the following?',
      options: [
        'European monarchs’ continued use of religion to legitimize political authority',
        'The influence of Islamic political thought on Europe after the Crusades',
        'The establishment of theocracies throughout Eurasia',
        'The differential treatment of Protestants and Catholics in England'
      ],
      answer: 0, trapIdx: 2,
      meaning: 'A king tells Parliament that kings sit on God’s throne and are “called gods.” Ask what bigger development this fits into: rulers of this era justifying their power through religion.',
      why: 'A. James I is making a classic divine-right argument. It fits the broad early-modern pattern of European monarchs using religion to legitimize increasingly absolute political authority.',
      trap: 'C (theocracies across Eurasia) just re-describes the religious content of the quote. A context question wants the larger situation around the source — here, absolutist monarchy — not a restatement of what it says.'
    },
    {
      unit: 3, topic: '3.2', type: 'similar', test: 'Unit 3 · Topic 3.2',
      simg: 'images/u3-vis-3.jpg',
      stim: 'A manuscript illustration made to celebrate the achievements of the Ottoman Sultan Suleiman the Magnificent (c. 1560) shows Ottoman officials <mark class="hs">forcibly enlisting boys from the empire’s Christian subjects in the Balkans</mark> to train them for service in the Ottoman army and bureaucracy — the devshirme system.',
      srcline: 'Manuscript illustration of the Ottoman devshirme system, c. 1560',
      src: [
        { tag: 'WHEN', since: 'it dates to about 1560', therefore: 'it fits the Ottoman Empire at its height under Suleiman' },
        { tag: 'WHO', since: 'it comes from a manuscript celebrating the sultan', therefore: 'it presents the practice as a proud achievement of the state' },
        { tag: 'WHAT', since: 'it depicts officials taking boys for state service', therefore: 'it is about how the empire extracted human resources from its subjects' }
      ],
      q: 'The devshirme is <mark class="hq">most similar to</mark> which broader method rulers used to strengthen their empires in 1450–1750?',
      options: [
        'The collection of tribute',
        'The establishment of religious uniformity',
        'The abolition of feudal privileges',
        'The granting of autonomy to minority groups'
      ],
      answer: 0, trapIdx: 1,
      meaning: 'For a “most similar” question, ignore the topic (soldiers) and name the method. The state is extracting a required resource — here, boys — from subject populations for its own use.',
      why: 'A. The devshirme took a compulsory levy (boys) from conquered peoples for the state — the same method as collecting tribute: extracting resources from subject populations to strengthen the empire.',
      trap: 'B (religious uniformity) matches by topic, since the boys were converted to Islam — but the question asks for the same method, and the method here is a forced levy on subjects, i.e. tribute. Match the process, not the subject matter.'
    },
    {
      unit: 3, topic: '3.3', type: 'causation', test: 'Unit 3 · Topic 3.3',
      stim: '“Many [Ottoman] Sunni religious scholars have labeled the Sufi whirling rituals as ‘dancing,’ and have pronounced them forbidden, branding those who approve of them as infidels. The Sufis counter that these rituals are not dancing, arguing instead that they enliven the soul through a combination of music and movement, which allows them to focus on the spiritual aspects of religion. The common people flock to the Sufis, giving them offerings and gifts. Since their whirling rituals play a big part in their popularity, they will not abandon these practices anytime soon. The Sunni scholars have written many tracts and opinions against them, and <mark class="hs">this tug-of-war between the two parties has brought them into a vicious circle</mark>.”',
      srcline: 'Katip Çelebi, Ottoman official, The Balance of Truth, 1656',
      src: [
        { tag: 'WHEN', since: 'it was written in 1656', therefore: 'it fits an era of sharpening Sunni–Shia and orthodox–Sufi tension in the Ottoman world' },
        { tag: 'WHO', since: 'it was written by an Ottoman official', therefore: 'he is observing a religious dispute inside his own state' },
        { tag: 'WHAT', since: 'it describes a conflict between Sunni scholars and Sufis', therefore: 'it is about a struggle over religious authority' }
      ],
      q: 'Which of the following most directly <mark class="hq">strengthened Sunni scholars’ role</mark> as official interpreters of Islamic doctrine in the Ottoman Empire?',
      options: [
        'The establishment of the Mughal Empire in India',
        'The Ottoman conquest of Constantinople',
        'Ottoman sultans’ extensive conquests in Europe',
        'The Ottoman Empire’s rivalry with the Safavid Empire'
      ],
      answer: 3, trapIdx: 1,
      meaning: 'The passage shows Sunni scholars policing orthodoxy against the Sufis. The question asks what pushed those scholars to enforce strict Sunni doctrine so hard — what was the empire up against?',
      why: 'D. The Ottomans’ rivalry with the neighboring Shia Safavid Empire pushed Ottoman Sunni scholars to enforce strict Sunni orthodoxy, strengthening their role as the guardians of correct doctrine.',
      trap: 'B (the conquest of Constantinople, 1453) is a real, famous Ottoman event, but it is about imperial expansion, not about hardening Sunni orthodoxy against a Shia rival. In causation, reject the true-but-unrelated event.'
    }
    ,

    /* ============ UNIT 4 (added) ============ */
    {
      unit: 4, topic: '4.2', type: 'causation', test: 'Unit 4 · Topic 4.2',
      stim: 'The Portuguese explorer Vasco da Gama reached India in 1498 by <mark class="hs">sailing around the southern tip of Africa</mark>, opening a direct sea route between Europe and Asia. This route bypassed the overland Silk Road networks controlled by Ottoman and other intermediaries.',
      srcline: 'Historical context, Portuguese exploration, c. 1498',
      src: [
        { tag: 'WHEN', since: 'it describes 1498', therefore: 'it fits the opening decades of European transoceanic exploration' },
        { tag: 'WHO', since: 'it is a modern historical-context note', therefore: 'it is a neutral setup, with no viewpoint to decode' },
        { tag: 'WHAT', since: 'it describes a new sea route that bypassed overland middlemen', therefore: 'it is about why Europeans wanted such a route' }
      ],
      q: 'Which of the following best explains the <mark class="hq">primary motivation</mark> for Portuguese maritime exploration along the African coast in the fifteenth century?',
      options: [
        'To find a sea route to the Americas in order to establish settler colonies',
        'To bypass Ottoman-controlled overland trade routes and reach Asian spice markets directly',
        'To spread Christianity to sub-Saharan Africa as part of a crusade against Islam',
        'To establish direct military control over Indian Ocean city-states'
      ],
      answer: 1, trapIdx: 2,
      meaning: 'Da Gama’s route “bypassed the overland Silk Road networks controlled by Ottoman intermediaries.” The question asks why Portugal wanted that — what were they trying to reach, and around whom?',
      why: 'B. Portugal sought to reach Asian spice markets directly, without paying the Ottoman and Italian middlemen who controlled the overland routes. That is the motive the passage points to.',
      trap: 'C (a crusade to spread Christianity) was a real secondary motive of the era, but the passage stresses bypassing intermediaries to reach Asian trade — the economic driver. Match the cause the source actually highlights.'
    },
    {
      unit: 4, topic: '4.6', type: 'context', test: 'Unit 4 · Topic 4.6',
      stim: '“Colonel Robert Bennett, under the authority of the Governor of Jamaica, makes a treaty with the rebellious Blacks. Captain Quao, and several other Black officers under his command, surrendered under the following terms.\n\n1. All hostilities on both sides shall cease forever.\n\n2. Captain Quao and his people shall have a certain quantity of land given to them, in order to raise crops, hogs, fowls, goats, or whatsoever stock they may think proper, with sugarcanes excepted.\n\n3. Four White men shall constantly live and reside with them in their town, in order to keep a good correspondence.\n\n4. Captain Quao and his people shall <mark class="hs">destroy all other rebellious Blacks</mark> in any part of Jamaica. They shall be paid to apprehend any runaway Blacks and return them to their respective owners.”',
      srcline: 'Treaty between British colonial authorities and the Windward Maroons, Jamaica, 1739',
      src: [
        { tag: 'WHEN', since: 'it was signed in 1739', therefore: 'it fits the height of the Atlantic slave and plantation system in the Caribbean' },
        { tag: 'WHO', since: 'it is a treaty the British were forced to make with escaped enslaved people', therefore: 'the Maroons clearly had enough power to compel the colony to negotiate' },
        { tag: 'WHAT', since: 'it is a formal legal treaty', therefore: 'it records a negotiated settlement between the colony and a rebel community' }
      ],
      q: 'The Maroons’ actions that forced this treaty are best understood as a <mark class="hq">reaction against</mark> which global trend of 1450–1750?',
      options: [
        'The persistent spread of epidemic diseases',
        'The continuing impoverishment of indigenous populations from agricultural transfers',
        'The increase in armed conflict resulting from state rivalries over trade routes',
        'The expansion of the Atlantic slave trade and plantation system'
      ],
      answer: 3, trapIdx: 1,
      meaning: 'The Maroons were descendants of Africans enslaved on Jamaica’s sugar plantations, and their armed resistance is a reaction to the system that enslaved them. What larger system is that?',
      why: 'D. The Maroons were escaped enslaved people; their revolt reacts directly against the expanding Atlantic slave trade and plantation system that had brought Africans to Jamaica.',
      trap: 'B (impoverishment of indigenous populations) is about Native Americans, not enslaved Africans. Right era, wrong group — a context question needs the trend that these specific people were reacting to.'
    },
    {
      unit: 4, topic: '4.5', type: 'bestillustrates', test: 'Unit 4 · Topic 4.5',
      stim: '“Seeing how vile and despicable the idol was, we went outside to ask why they cared about so crude and ungainly a thing. But they, astounded at our daring, defended the honor of their god and said that he was Pachacamac, the Maker of the World, who healed their infirmities. Seeing the evil of what was there and the blindness of all those people, we gathered together their leaders and enlightened them. And in the presence of all, the hut was opened and torn down and with much solemnity <mark class="hs">a tall cross was raised over the seat which for so long the devil had claimed as his own</mark>.”',
      srcline: 'Miguel de Estete, Spanish mercenary soldier, account of an expedition to Peru, c. 1532',
      src: [
        { tag: 'WHEN', since: 'it dates to about 1532', therefore: 'it fits the Spanish conquest and forced Christianization of the Andes' },
        { tag: 'WHO', since: 'it was written by a Spanish soldier on the expedition', therefore: 'he presents the destruction of the shrine as a righteous victory' },
        { tag: 'WHAT', since: 'it describes tearing down a shrine and raising a cross', therefore: 'it is about the Spanish attempt to replace Andean religion with Christianity' }
      ],
      q: 'Which long-term change in circa 1550–1700 best demonstrates that the actions described <mark class="hq">failed to fully achieve their goals</mark>?',
      options: [
        'The development of a global economy based on Spanish exports of Andean silver',
        'American foods becoming staple crops across Eurasia',
        'The emergence of syncretic religious practices in the Americas',
        'The growing Spanish dependence on coerced labor in the Americas'
      ],
      answer: 2, trapIdx: 3,
      meaning: 'De Estete’s goal was to replace Andean religion with Christianity by force. The question asks what later development shows that goal was NOT fully met.',
      why: 'C. Indigenous beliefs survived by blending with Catholicism into syncretic practices — proof that the forced conversion de Estete describes never fully erased native religion.',
      trap: 'D (dependence on coerced labor) is true of colonial Peru, but it is about the economy, not about whether religious conversion succeeded. Match the evidence to the specific goal in the passage.'
    },
    {
      unit: 4, topic: '4.3', type: 'bestillustrates', test: 'Unit 4 · Topic 4.3',
      stim: '“In the course of the fifth year the terrible pestilence began. First there was a cough, then blood. The number of deaths at this time was truly terrible. In 1521 my father, the king, died. The elders and the priests died alike from the pestilence.\n\n[Years later] the Dominican friars arrived, and thereafter our lord the Spaniards conquered all the towns. And then they converted the people to the Christian faith. Before the coming of the Spaniards, our ancestors <mark class="hs">were ignorant of the word and the commandments of God</mark>.”',
      srcline: 'Anonymous Maya author, Annals of the Cakchiquels, sixteenth century',
      src: [
        { tag: 'WHEN', since: 'it describes the decades after the Spanish conquest', therefore: 'it fits the era of forced Christianization in the Americas' },
        { tag: 'WHO', since: 'it was written by a Maya author after conversion', therefore: 'it is a convert’s account of change within his own society' },
        { tag: 'WHAT', since: 'it is an annal, a year-by-year record', therefore: 'it is documenting change over time' }
      ],
      q: 'Which evidence does the author use to support his implicit argument that Maya society underwent a <mark class="hq">dramatic cultural change</mark>?',
      options: [
        'Dominican friars knew the Maya language',
        'The Maya were previously ignorant of Christian teachings',
        'Maya people became poor after the Spanish arrived',
        'The Spanish assassinated the king’s eldest son'
      ],
      answer: 1, trapIdx: 2,
      meaning: 'The author’s claim is that Maya culture changed dramatically. Find the line he actually uses as proof — the before-and-after of religion.',
      why: 'B. The author says that before the friars the Maya were “ignorant of the word... of God,” and then were converted. That contrast is the evidence he uses for a dramatic cultural change.',
      trap: 'C (that the Maya became poor) may be true of the conquest, but the author does not use poverty as his evidence for cultural change — he points to religious conversion. Stay with the evidence the source actually uses.'
    }
    ,

    /* ============ UNIT 5 (added) ============ */
    {
      unit: 5, topic: '5.1', type: 'purpose', test: 'Unit 5 · Topic 5.1',
      stim: 'Source 1: “It cannot be denied that when the French nation proclaimed these sacred words, ‘Men are born and remain free and equal in rights,’ it did not break the chains of humankind. The free men of color should be granted the same rights of citizenship as other Frenchmen. The artisan slaves should also be called to freedom on the condition that each slave pays a one-time tax for freedom. The other Black slaves may enjoy a <mark class="hs">conditional liberty, namely that they remain on the land of their masters and work that land for a period ranging between 10 and 20 years</mark>.”\n\nSource 2: “To bring the Blacks of Saint-Domingue back to their original condition of slavery is impossible: the writings of the philosophes have spread over the surface of the globe. This Black individual is free, because neither the nation nor the Supreme Being created slaves. He is your equal, because he is a man. He is a French citizen, because he serves the country.”',
      srcline: 'Source 1: Armand-Guy Kersaint, French deputy in the National Assembly, Paris, 1792. Source 2: H. D. de Saint-Maurice, French journalist, Saint-Domingue, 1793.',
      src: [
        { tag: 'WHEN', since: 'both date to 1792–93', therefore: 'they fit the French and Haitian revolutionary debates over slavery' },
        { tag: 'WHO', since: 'Source 1 is by a French deputy and Source 2 by a journalist in Saint-Domingue', therefore: 'each author’s own position shapes how far he is willing to go on abolition' },
        { tag: 'WHAT', since: 'these are political arguments, not neutral reports', therefore: 'they reveal the interests of the men making them' }
      ],
      q: 'All statements about Kersaint are accurate. Which best explains <mark class="hq">why, unlike Saint-Maurice, Kersaint is NOT calling for immediate abolition</mark>?',
      options: [
        'In his writings he advocated the willing migration of Africans rather than their enslavement.',
        'As a naval officer he had fought the British in the Caribbean and the American Revolution.',
        'At the time of the Revolution he owned plantations and property in the French Caribbean.',
        'Before the Revolution he had called for abolishing the traditional privileges of the nobility.'
      ],
      answer: 2, trapIdx: 3,
      meaning: 'This is a point-of-view question. Kersaint asks only for gradual freedom, while Saint-Maurice demands full abolition. Ask what personal interest would make Kersaint hold back.',
      why: 'C. Kersaint owned Caribbean plantations, so he had a direct economic stake in keeping cheap or unpaid labor — which is why he wanted only gradual emancipation, not immediate abolition.',
      trap: 'D (that he attacked noble privileges) shows he could be a reformer, but it does not explain his caution on slavery. In a POV question, find the interest that pulls the author toward the exact position he takes.'
    },
    {
      unit: 5, topic: '5.2', type: 'causation', test: 'Unit 5 · Topic 5.2',
      stim: 'In theory, all of the peoples of the world are created equal and are brothers before God. As universal love advances, the theory goes, the entire world will soon be at peace. This theory is currently espoused mainly by Western Christian ministers. However, when we leave this fiction and look at the facts regarding international relations today, we find them shockingly different. Do nations honor treaties? We find not the slightest evidence that they do. <mark class="hs">Whether a treaty is honored or not depends entirely on the financial and military powers of the countries involved</mark>. If others are violent, then I too must become violent. International politics is the way of force rather than the way of virtue — and we should accept that.',
      srcline: 'Yukichi Fukuzawa, Japanese intellectual, Commentary on the Current Problems, 1881',
      src: [
        { tag: 'WHEN', since: 'it was written in 1881', therefore: 'it fits Japan’s rapid Meiji-era response to Western pressure' },
        { tag: 'WHO', since: 'it was written by a Japanese intellectual', therefore: 'he is reacting to how the Western powers had treated Japan' },
        { tag: 'WHAT', since: 'it is a commentary arguing a hard-nosed view of world affairs', therefore: 'it is persuasive and shaped by recent experience' }
      ],
      q: 'Which of the following most likely <mark class="hq">influenced Fukuzawa’s views</mark> in the passage?',
      options: [
        'The Tokugawa Shogunate’s policy of limiting contact with the outside world',
        'The emphasis on peaceful conflict resolution in Shinto and Buddhist traditions',
        'The forcible “opening up” of Japanese markets to the West, which led to the Meiji Restoration',
        'The suppression of the Taiping Rebellion in China, which caused great loss of life'
      ],
      answer: 2, trapIdx: 1,
      meaning: 'Fukuzawa concludes that power, not law, rules the world. Ask what recent experience taught Japan that lesson the hard way.',
      why: 'C. The United States used gunboats (Perry’s “Black Ships,” 1853) to force Japan open. That coercion — and the Meiji Restoration that followed — is exactly what taught Fukuzawa that world affairs run on force, not virtue.',
      trap: 'B (peaceful Shinto and Buddhist traditions) points the opposite direction from Fukuzawa’s harsh conclusion. In causation, the cause must actually produce the view expressed, not contradict it.'
    },
    {
      unit: 5, topic: '5.1', type: 'bestillustrates', test: 'Unit 5 · Topic 5.1',
      stim: 'Americans today, who live within the Spanish system, occupy a position in society no better than that of serfs destined for labor... surrounded with galling restrictions, such as being <mark class="hs">forbidden to grow European crops, or to establish factories</mark> of a type the Peninsula itself does not possess. To this add the exclusive trading privileges, even in articles of prime necessity, and the barriers between American provinces designed to prevent all exchange of trade. In short, do you wish to know what our future held? — simply the cultivation of fields, cattle raising, and mining gold.',
      srcline: 'Simón Bolívar, Letter from Jamaica, 1815',
      src: [
        { tag: 'WHEN', since: 'it was written in 1815', therefore: 'it fits the Latin American wars of independence against Spain' },
        { tag: 'WHO', since: 'it was written by Bolívar, a leader of the independence movement', therefore: 'he is building the case against Spanish rule' },
        { tag: 'WHAT', since: 'it is an open letter listing colonial grievances', therefore: 'it is persuasive and one-sided by design' }
      ],
      q: 'The quotation best <mark class="hq">supports which conclusion</mark> about Bolívar’s motives for resisting Spanish rule?',
      options: [
        'Bolívar opposed the use of Native Americans and Africans as forced laborers.',
        'Bolívar rejected Spanish mercantilist policies that restricted free trade.',
        'Bolívar was alarmed by excessive consumerism in the Spanish empire.',
        'Bolívar hoped to undo the effects of the Columbian Exchange.'
      ],
      answer: 1, trapIdx: 0,
      meaning: 'Bolívar lists ban after ban — no European crops, no factories, no trade between provinces. Those are all one kind of policy. Which economic system do they add up to?',
      why: 'B. Every restriction Bolívar names — forbidding crops, factories, and inter-colonial trade — is a feature of Spanish mercantilism, which kept the colony a raw-material supplier. That is the grievance driving him.',
      trap: 'A (opposition to forced labor) is a real Enlightenment cause, but it is not what this passage lists — his complaints are all about trade and manufacturing restrictions. Match the conclusion to the evidence actually given.'
    },
    {
      unit: 5, topic: '5.2', type: 'context', test: 'Unit 5 · Topic 5.2',
      stim: '“Indian liberalism... its common features were a desire to re-empower India’s people with personal freedom. <mark class="hs">Liberals emphasized education, particularly women’s education.</mark> Educated women would help to abolish domestic tyranny and reinstate the ideal of companionate marriage.”',
      srcline: 'Christopher Bayly, British historian, Recovering Liberties, 2012',
      src: [
        { tag: 'WHEN', since: 'it analyzes nineteenth-century Indian liberalism', therefore: 'it fits a global age of liberal and reform movements' },
        { tag: 'WHO', since: 'it was written by a modern British historian', therefore: 'it is a scholarly interpretation, not a primary voice from the period' },
        { tag: 'WHAT', since: 'it argues that liberalism shaped Indian politics', therefore: 'it is placing India inside a wider ideological current' }
      ],
      q: 'The Indian liberal view of women is <mark class="hq">best understood in the context of</mark> which of the following?',
      options: [
        'Changes in gender roles as a result of Indian industrialization',
        'Emerging women’s suffrage and feminist movements',
        'The predominantly male migration of Indian indentured labor overseas',
        'The development of more effective means of birth control'
      ],
      answer: 1, trapIdx: 0,
      meaning: 'Indian liberals push women’s education and new marriage ideals. Ask what wider global movement of the era this belongs to.',
      why: 'B. Just as reformers elsewhere used liberal ideals to argue for women’s rights, Indian liberals’ focus on women’s education fits the era’s emerging women’s suffrage and feminist movements.',
      trap: 'A (gender change from Indian industrialization) sounds related, but India was barely industrialized then and the passage stresses ideas, not factory work. A context question wants the correct surrounding development, not a plausible-sounding one.'
    }
    ,

    /* ============ UNIT 6 (added) ============ */
    {
      unit: 6, topic: '6.2', type: 'bestillustrates', test: 'Unit 6 · Topic 6.2',
      stim: 'The general act establishes freedom of commerce throughout the Congo Basin. Any new occupation of territory on the coasts of Africa must be notified to the signatory powers. The principle of effective occupation is established: <mark class="hs">a power claiming territory must demonstrate actual governance</mark>.',
      srcline: 'General Act of the Berlin Conference, February 26, 1885',
      src: [
        { tag: 'WHEN', since: 'it dates to 1885', therefore: 'it fits the height of the European “Scramble for Africa”' },
        { tag: 'WHO', since: 'it is the joint act of the European powers meeting in Berlin', therefore: 'it reflects European states dividing Africa among themselves' },
        { tag: 'WHAT', since: 'it sets rules for claiming African territory', therefore: 'it treats Africa as available for European acquisition' }
      ],
      q: 'The Berlin Conference <mark class="hq">most directly illustrates</mark> which aspect of European imperialism?',
      options: [
        'European powers competed militarily, with victory in battle determining colonial borders.',
        'African rulers negotiated agreements that protected their existing territories.',
        'European powers collectively organized the partition of Africa without African participation.',
        'The United States played the leading role in mediating disputes between colonial powers.'
      ],
      answer: 2, trapIdx: 0,
      meaning: 'Fourteen European states meet in Berlin and set rules for who gets which parts of Africa — with no Africans in the room. What does that reveal about imperialism?',
      why: 'C. The Berlin Conference is the classic case of European powers collectively carving up Africa among themselves, treating the whole continent as theirs to distribute. No African rulers were invited or consulted.',
      trap: 'A (military competition deciding borders) sounds like imperialism in general, but the Berlin Conference was precisely an attempt to set the rules on paper and avoid war among the Europeans. Match what the source shows, not a generic image of conquest.'
    },
    {
      unit: 6, topic: '6.3', type: 'causation', test: 'Unit 6 · Topic 6.3',
      stim: 'The Government of India Act of 1858 <mark class="hs">transferred sovereignty over India from the British East India Company to the British Crown</mark>. Queen Victoria was proclaimed Empress of India in 1877. The Colonial Secretary noted: “We have 300 million subjects who regard our rule as the guarantee of peace, order, and prosperity they could not provide for themselves.”',
      srcline: 'Secondary source summary of the British Crown’s assumption of Indian governance, 1858',
      src: [
        { tag: 'WHEN', since: 'it dates to 1858', therefore: 'it comes immediately after a major crisis in British India' },
        { tag: 'WHO', since: 'it is a modern summary', therefore: 'it is a neutral explanation of a policy change, with no agenda to decode' },
        { tag: 'WHAT', since: 'it describes power passing from a company to the Crown', therefore: 'it is about a shift in how India was governed' }
      ],
      q: 'The transfer of authority over India in 1858 <mark class="hq">most directly resulted from</mark>',
      options: [
        'Indian nationalist demands for greater self-governance within the empire',
        'the British government’s desire to extract revenue from India more efficiently',
        'the Indian Rebellion of 1857, which showed that corporate governance could not maintain control',
        'diplomatic pressure from European rivals seeking to limit British expansion in Asia'
      ],
      answer: 2, trapIdx: 0,
      meaning: 'In 1858 Britain suddenly takes India away from the East India Company. Something in 1857 must have proven company rule could not hold. What was it?',
      why: 'C. The Indian Rebellion of 1857 showed that the East India Company could no longer keep order, so the British government took over direct rule through the Crown.',
      trap: 'A (organized nationalist demands) is tempting, but a coordinated Indian nationalist movement came decades later. Watch the timeline: in 1857 the trigger was the rebellion, not a mature independence movement.'
    },
    {
      unit: 6, topic: '6.4', type: 'bestillustrates', test: 'Unit 6 · Topic 6.4',
      stim: 'The British cotton textile industry consumed 80% of Egypt’s raw cotton by 1880. Egyptian farmers who once grew food were <mark class="hs">shifted to cotton monoculture</mark> — profitable in good years, catastrophic when British mills reduced orders. When the global cotton price fell in 1873, Egyptian farmers faced bankruptcy while British manufacturers who bought their cotton at lower prices increased profits.',
      srcline: 'Secondary source analysis of Egypt’s cotton economy under British influence, c. 1880',
      src: [
        { tag: 'WHEN', since: 'it describes about 1880', therefore: 'it fits the age of industrial powers reshaping colonial economies' },
        { tag: 'WHO', since: 'it is a modern analysis', therefore: 'it is explaining a structural economic relationship' },
        { tag: 'WHAT', since: 'it shows farmers switched from food to export cotton', therefore: 'it is about an economy remade to feed foreign factories' }
      ],
      q: 'The Egyptian cotton economy <mark class="hq">best illustrates</mark> which pattern of economic imperialism?',
      options: [
        'European nations suppressed colonial agriculture to protect their own farmers.',
        'Colonial economies were restructured to serve metropolitan industry, making colonized peoples dependent on global prices they could not control.',
        'Free-trade policies allowed Egyptian farmers to accumulate capital and industrialize.',
        'British policy in Egypt was driven primarily by concern for Egyptian agricultural workers.'
      ],
      answer: 1, trapIdx: 2,
      meaning: 'Egypt stops growing food and grows cotton for British mills, then gets wrecked when British demand and prices drop. That is a colony remade to serve the industrial center.',
      why: 'B. Egypt’s shift to cotton monoculture illustrates how imperialism restructured colonial economies to feed metropolitan industry, leaving colonized people dependent on global commodity prices set in places like Manchester.',
      trap: 'C (free trade letting farmers build capital) is the opposite of what happened — the farmers lost food security and control. Do not pick the hopeful-sounding option that the source actually contradicts.'
    },
    {
      unit: 6, topic: '6.6', type: 'causation', test: 'Unit 6 · Topic 6.6',
      stim: 'Between 1848 and 1852, more than one million Irish people emigrated to the United States, fleeing the potato famine that killed approximately one million more. They arrived as unskilled laborers concentrated in northeastern cities. By the 1860s, Irish immigrants provided labor for the eastern transcontinental railroad while Chinese workers — <mark class="hs">recruited directly from Guangdong province — built the western half</mark>.',
      srcline: 'Secondary source summary of mid-nineteenth-century labor migration to the United States',
      src: [
        { tag: 'WHEN', since: 'it covers the 1840s–60s', therefore: 'it fits the era of mass global migration and industrialization' },
        { tag: 'WHO', since: 'it is a modern summary', therefore: 'it is describing broad migration patterns, not a single person' },
        { tag: 'WHAT', since: 'it pairs famine and recruitment with railroad labor', therefore: 'it is about why people left home and where they went' }
      ],
      q: 'The migration patterns are <mark class="hq">best explained by</mark> which combination of push and pull factors?',
      options: [
        'Religious persecution in Ireland and China and the religious freedom offered by the United States',
        'Economic catastrophe in the sending countries and massive labor demand in an industrializing destination',
        'Political repression driving refugees to seek asylum in the United States',
        'Active U.S. government programs that transported workers from Ireland and China'
      ],
      answer: 1, trapIdx: 3,
      meaning: 'A famine drives the Irish out; poverty drives Guangdong laborers out; American railroads pull both in. That is push (disaster at home) plus pull (jobs abroad).',
      why: 'B. The Irish famine and hardship in Guangdong are the push factors; booming American demand for railroad labor is the pull. Push–pull is the standard framework for this era’s mass migration.',
      trap: 'D (a U.S. government recruitment program) is wrong: the labor was pulled by private railroad companies and economic demand, not a government scheme. Match the actual mechanism the passage describes.'
    }
    ,

    /* ============ UNIT 7 (added) ============ */
    {
      unit: 7, topic: '7.1', type: 'causation', test: 'Unit 7 · Topic 7.1',
      stim: 'When the proposal to proclaim the equality of races was rejected by the Peace Conference at Versailles, the Japanese representative made it known that Japan would reintroduce the proposal.\n\nOf the non-white countries, Japan has taken the lead in adopting the best parts of European civilization. Japan reformed her laws, her police and judicial systems, and her military and naval forces, placing herself almost on an equal footing with the European countries.\n\nSome whites regard the development of Japan as an unjustifiable encroachment upon their own rights. <mark class="hs">Although most Asiatic nations are fully peers of European nations, yet they are discriminated against because of the color of the skin.</mark>',
      srcline: 'Okuma Shigenobu, Japanese member of parliament and former prime minister, “Illusions of the White Race,” Tokyo, 1921',
      src: [
        { tag: 'WHEN', since: 'it was written in 1921', therefore: 'it fits the interwar period as Japan rose as a great power' },
        { tag: 'WHO', since: 'it was written by a Japanese statesman', therefore: 'he is defending Japan’s standing against Western racism' },
        { tag: 'WHAT', since: 'it is a political essay', therefore: 'it argues a position rather than reporting neutrally' }
      ],
      q: 'Shigenobu’s ideas mattered because Japanese leaders used similar arguments in the interwar period <mark class="hq">to justify</mark>',
      options: [
        'engaging in war with Russia over influence in Manchuria',
        'militarizing the Japanese state and expanding its territories in Asia',
        'overthrowing the Tokugawa Shogunate and establishing the Meiji government',
        'introducing reforms that industrialized Japan’s economy'
      ],
      answer: 1, trapIdx: 0,
      meaning: 'Shigenobu argues Japan is the equal of the West and resents Western racism. The question asks what Japanese leaders built on that idea — how did “Japan deserves equal great-power status” get used?',
      why: 'B. The claim that Japan deserved standing equal to the Western empires was used to justify Japanese militarization and imperial expansion across Asia in the 1930s (Manchuria, then China).',
      trap: 'A (war with Russia over Manchuria) fits the theme of Japanese expansion, but that war was in 1904–05 — before this 1921 essay and before the interwar period the question asks about. Watch the time frame.'
    },
    {
      unit: 7, topic: '7.1', type: 'context', test: 'Unit 7 · Topic 7.1',
      stim: 'The Turkish nation is not a nation that lives by begging from others. The Turkish nation has an honored and elevated character. <mark class="hs">Sovereignty is not given, it is taken. Sovereignty belongs to the Turkish nation unconditionally and without reservation.</mark>\n\nThe Turkish Republic is founded not on sentiment, but on strength. Henceforth the Turkish state will belong to the Turks.',
      srcline: 'Mustafa Kemal Atatürk, founder and first president of the Republic of Turkey, speeches, 1920s',
      src: [
        { tag: 'WHEN', since: 'these are speeches of the early 1920s', therefore: 'they come right after WWI and the fall of the Ottoman Empire' },
        { tag: 'WHO', since: 'they were spoken by the founder of the Turkish Republic', therefore: 'he is rallying a nation to claim its own independence' },
        { tag: 'WHAT', since: 'they are nationalist speeches', therefore: 'they are meant to inspire and legitimize a new state' }
      ],
      q: 'Kemal’s views on sovereignty are <mark class="hq">best explained in the context of</mark> which development?',
      options: [
        'The spread of Marxist-Leninist ideology from the Soviet Union to the Middle East',
        'The collapse of the Ottoman Empire and Allied attempts to partition Turkish territory after World War I',
        'The Great Depression, which caused economic collapse across the Middle East',
        'The League of Nations mandate system over former Ottoman territories in Arabia'
      ],
      answer: 1, trapIdx: 3,
      meaning: 'A leader insists sovereignty must be “taken,” not given. Ask what threat he was responding to — who was trying to take Turkish land after WWI?',
      why: 'B. After WWI the victorious Allies tried to partition Anatolia (the Treaty of Sèvres). Kemal’s insistence on seizing sovereignty is best understood as a response to the Ottoman collapse and that attempted partition.',
      trap: 'D (the mandate system over Arabia) is from the same post-war moment, but the mandates covered former Ottoman Arab lands, not the Turkish heartland Kemal was fighting for. Pick the context that fits his actual situation.'
    },
    {
      unit: 7, topic: '7.2', type: 'purpose', test: 'Unit 7 · Topic 7.2',
      stim: 'The peace conditions imposed upon Germany are so hard, so humiliating, that those who had even the tiniest hope for a “just peace” are bound to be deeply disappointed. But a condemnation of wartime actions must not amount to a lasting condemnation of an entire nation.\n\nThe Entente evidently desires the complete annihilation of Germany; the financial burden is so heavy that Germany is reduced to economic bondage.\n\nThis “peace” offered to Germany is a mockery of <mark class="hs">President Wilson’s principles</mark>. Trusting in these, Germany surrendered and accepted peace. That confidence has been betrayed.',
      srcline: 'Algemeen Handelsblad, Dutch liberal newspaper, editorial on the Treaty of Versailles, June 1919',
      src: [
        { tag: 'WHEN', since: 'it was written in June 1919', therefore: 'it responds directly to the just-signed Treaty of Versailles' },
        { tag: 'WHO', since: 'it is a Dutch (neutral, liberal) newspaper', therefore: 'it can criticize the treaty without defending either side’s war aims' },
        { tag: 'WHAT', since: 'it is an editorial', therefore: 'it is arguing a point of view about the treaty’s fairness' }
      ],
      q: 'The reference to “Wilson’s principles” shapes the editorial’s <mark class="hq">point of view</mark> because Wilson was committed to',
      options: [
        'establishing an international organization to prevent future conflicts',
        'creating nation-states for ethnic minorities that had been under imperial control',
        'brokering a peace on liberal principles that would not be motivated by revenge',
        'resisting the spread of Bolshevism following the Russian Revolution'
      ],
      answer: 2, trapIdx: 0,
      meaning: 'The editorial accuses the treaty of betraying Wilson’s principles. To see the point of view, ask what Wilson had promised — a peace of what kind?',
      why: 'C. Wilson called for “peace without victory” — a settlement not built on punishing the losers. The editorial’s outrage depends on that promise, arguing Versailles betrayed it with a vengeful, crushing peace.',
      trap: 'A (an international organization, the League of Nations) really was a Wilson goal, but it is not what makes this editorial’s complaint work. The argument turns on Wilson’s promise of a non-vengeful peace — match the principle the passage is actually invoking.'
    },
    {
      unit: 7, topic: '7.1', type: 'causation', test: 'Unit 7 · Topic 7.1',
      stim: 'The twentieth century saw multiple mass atrocities: the Armenian Genocide (1915–16) killed 1–1.5 million Armenians; the Holocaust (1941–45) killed approximately 6 million Jews and 6 million others; the Cambodian Genocide (1975–79) killed roughly a quarter of Cambodia’s population; the Rwandan Genocide (1994) killed approximately 800,000 Tutsi in 100 days. In all cases, <mark class="hs">dehumanizing propaganda preceded and accompanied the violence</mark>.',
      srcline: 'Study guide: patterns in twentieth-century mass atrocities',
      src: [
        { tag: 'WHEN', since: 'it surveys twentieth-century genocides', therefore: 'it fits the era of racial and ethnic mass violence' },
        { tag: 'WHO', since: 'it is a study-guide summary', therefore: 'it is drawing a general pattern, not one viewpoint' },
        { tag: 'WHAT', since: 'it stresses dehumanizing propaganda before the violence', therefore: 'it links pseudo-scientific racism to atrocity' }
      ],
      q: 'The 1949 UNESCO statement declaring “race” a social myth was <mark class="hq">most directly a response to</mark>',
      options: [
        'the United Nations’ effort to celebrate racial and cultural diversity worldwide',
        'the scientific community’s discovery that genetics determine cultural achievement',
        'the world’s confrontation with the consequences of Nazi racial ideology and the Holocaust',
        'European colonial powers’ attempt to legitimize continued rule over overseas territories'
      ],
      answer: 2, trapIdx: 3,
      meaning: 'Right after WWII, an international body declares that race is a myth with no scientific basis. Ask what had just happened that made such a declaration urgent.',
      why: 'C. The UNESCO statement came directly out of the post-war reckoning with Nazi racial ideology and the Holocaust — repudiating the pseudo-science that had justified genocide.',
      trap: 'D (colonial powers legitimizing rule) also involved racial thinking, but the 1949 statement was a direct answer to the Holocaust, not a colonial policy tool. Anchor the cause to the specific event driving the response.'
    }
    ,

    /* ============ UNIT 8 (added) ============ */
    {
      unit: 8, topic: '8.1', type: 'bestillustrates', test: 'Unit 8 · Topic 8.1',
      stim: 'From Stettin in the Baltic to Trieste in the Adriatic, <mark class="hs">an iron curtain has descended across the Continent</mark>. Behind that line lie all the capitals of the ancient states of Central and Eastern Europe — Warsaw, Berlin, Prague, Vienna, Budapest, Belgrade, Bucharest and Sofia. All these famous cities and the populations around them lie in what I must call the Soviet sphere, and all are subject not only to Soviet influence but to a very high and in many cases increasing measure of control from Moscow.',
      srcline: 'Winston Churchill, “The Sinews of Peace,” Fulton, Missouri, March 5, 1946',
      src: [
        { tag: 'WHEN', since: 'it was delivered in March 1946', therefore: 'it comes just after WWII, as the wartime Allies split apart' },
        { tag: 'WHO', since: 'it was spoken by Churchill, a leading Western statesman', therefore: 'he is signaling Western alarm at Soviet power' },
        { tag: 'WHAT', since: 'it is a public speech coining a vivid image', therefore: 'it is meant to shape how the West sees the Soviet Union' }
      ],
      q: 'Churchill’s “iron curtain” metaphor was significant primarily because it <mark class="hq">marked</mark>',
      options: [
        'a formal declaration of war between the United States and the Soviet Union',
        'the beginning of public acknowledgment that the wartime alliance had broken down into open East–West rivalry',
        'the ideological justification for the Marshall Plan’s economic aid program',
        'Western support for communist parties in Eastern Europe'
      ],
      answer: 1, trapIdx: 0,
      meaning: 'Churchill draws a line across Europe dividing a Soviet-controlled East from the West. The question asks what that image announced about the former WWII allies.',
      why: 'B. Churchill’s speech publicly named what leaders already sensed: the wartime U.S.–Soviet alliance had collapsed into open East–West rivalry. Naming it helped crystallize the Cold War.',
      trap: 'A (a formal declaration of war) overreads it — a metaphor in a speech is not a war declaration, and the Cold War never became direct war between the superpowers. Do not inflate what the source actually did.'
    },
    {
      unit: 8, topic: '8.3', type: 'causation', test: 'Unit 8 · Topic 8.3',
      stim: 'The Parties agree that <mark class="hs">an armed attack against one or more of them in Europe or North America shall be considered an attack against them all</mark>, and consequently they agree that, if such an armed attack occurs, each of them, in exercise of the right of individual or collective self-defence, will assist the Party or Parties so attacked.',
      srcline: 'North Atlantic Treaty (NATO Charter), Article 5, April 4, 1949',
      src: [
        { tag: 'WHEN', since: 'it was signed in 1949', therefore: 'it fits the early Cold War hardening of rival blocs' },
        { tag: 'WHO', since: 'it is a treaty binding the U.S. and Western Europe', therefore: 'it commits them to collective defense against a common threat' },
        { tag: 'WHAT', since: 'it makes an attack on one an attack on all', therefore: 'it is a mutual-defense military alliance' }
      ],
      q: 'NATO’s formation in 1949 <mark class="hq">most directly contributed to</mark> which Soviet response?',
      options: [
        'The Soviet development and testing of its first nuclear weapon in August 1949',
        'The Soviet blockade of West Berlin to pressure the Western powers',
        'The creation of the Warsaw Pact (1955) as a counterbalancing Soviet-led alliance',
        'The Soviet withdrawal of military forces from Eastern Europe to reduce Western fears'
      ],
      answer: 2, trapIdx: 1,
      meaning: 'The West forms a mutual-defense alliance aimed at the USSR. Ask what the Soviets did in direct response to being encircled by such a bloc.',
      why: 'C. NATO looked like encirclement to Moscow. The Soviets’ institutional answer was the Warsaw Pact (1955) — a mirror-image military alliance binding the Eastern bloc.',
      trap: 'B (the Berlin Blockade) is a real early Cold War clash, but it happened in 1948–49, before and during NATO’s creation — it was a cause of NATO, not a response to it. Check which event came first.'
    },
    {
      unit: 8, topic: '8.4', type: 'purpose', test: 'Unit 8 · Topic 8.4',
      stim: '“All men are created equal. They are endowed by their Creator with certain inalienable rights; among these are Life, Liberty, and the pursuit of Happiness.” <mark class="hs">This immortal statement was made in the Declaration of Independence of the United States of America in 1776.</mark> In a broader sense, this means: all the peoples on the earth are equal from birth, all the peoples have a right to live, to be happy and free. Nevertheless, for more than eighty years, the French imperialists have violated our Fatherland and oppressed our fellow citizens.',
      srcline: 'Ho Chi Minh, Declaration of Independence of the Democratic Republic of Vietnam, September 2, 1945',
      src: [
        { tag: 'WHEN', since: 'it was issued in September 1945', therefore: 'it comes at the moment of Vietnam’s bid for independence after Japan’s defeat' },
        { tag: 'WHO', since: 'it was written by Ho Chi Minh, a communist nationalist', therefore: 'quoting America is a deliberate choice, not an accident of belief' },
        { tag: 'WHAT', since: 'it is a declaration of independence', therefore: 'it is aimed at an audience whose support he wants' }
      ],
      q: 'Ho Chi Minh’s use of language from the American Declaration of Independence primarily reflects <mark class="hq">an attempt to</mark>',
      options: [
        'demonstrate his sincere commitment to liberal democratic institutions',
        'appeal to American anti-colonial ideals and gain U.S. support for Vietnamese independence',
        'show Vietnamese cultural adoption of American values under French rule',
        'reflect the influence of American Protestant missionaries on Vietnamese thought'
      ],
      answer: 1, trapIdx: 0,
      meaning: 'A communist leader opens Vietnam’s independence declaration by quoting Thomas Jefferson. That is a choice with a goal. Ask who he is trying to win over.',
      why: 'B. Ho Chi Minh quoted the American Declaration to appeal to U.S. anti-colonial ideals, hoping to win American backing for Vietnamese independence against France.',
      trap: 'A (a sincere commitment to liberal democracy) misreads a strategic choice as a personal conversion — Ho was a committed communist. In a purpose question, ask what the wording is meant to achieve, not what it professes on the surface.'
    },
    {
      unit: 8, topic: '8.5', type: 'context', test: 'Unit 8 · Topic 8.5',
      stim: 'At long last, the battle has ended! And thus, Ghana, your beloved country, is free forever! There is a new African in the world! That new African is ready to fight his own battles and show that <mark class="hs">the black man is capable of managing his own affairs</mark>. We must change our attitudes, our minds. We must realize that from now on we are no longer a colonial people. We are a free, sovereign people.',
      srcline: 'Kwame Nkrumah, Independence Speech, Accra, Ghana, March 6, 1957',
      src: [
        { tag: 'WHEN', since: 'it was delivered in 1957 at Ghana’s independence', therefore: 'it fits the wave of post-war African decolonization' },
        { tag: 'WHO', since: 'it was spoken by the leader of a newly free nation', therefore: 'he is asserting African capability and national pride' },
        { tag: 'WHAT', since: 'it is an independence speech', therefore: 'it is answering something — the claims used to deny Africans self-rule' }
      ],
      q: 'Nkrumah’s assertion that “the black man is capable of managing his own affairs” <mark class="hq">most directly responds to</mark>',
      options: [
        'Ghanaians who had opposed the independence movement on economic grounds',
        'colonial ideologies that justified European rule by claiming Africans were incapable of self-governance',
        'African American civil rights leaders who doubted that African independence was achievable',
        'Soviet claims that African nations required communist party leadership'
      ],
      answer: 1, trapIdx: 3,
      meaning: 'Nkrumah insists Africans can govern themselves. He is answering a specific claim. Ask what idea European colonizers used to justify ruling Africans in the first place.',
      why: 'B. European colonialism was justified by the paternalistic claim — the “civilizing mission” — that Africans could not govern themselves. Nkrumah is directly refuting that ideology.',
      trap: 'D (Soviet claims that Africa needed communist leadership) drags in the Cold War, but Nkrumah is answering the colonial argument about African capability, not a Soviet one. Match the exact claim he is pushing back against.'
    }
  ];

  window.SBMCQ_WORKED = WORKED;

  /* ---------------------- rendering ---------------------- */
  function letters(i) { return String.fromCharCode(65 + i); }

  function optionsHTML(ex) {
    var h = '<ol class="wk-opts">';
    for (var i = 0; i < ex.options.length; i++) {
      var cls = i === ex.answer ? ' class="is-correct"' : (i === ex.trapIdx ? ' class="is-trap"' : '');
      h += '<li' + cls + '><span class="wk-ol">' + letters(i) + '</span><span class="wk-otext">' + esc(ex.options[i]) + '</span><span class="wk-mark"></span></li>';
    }
    return h + '</ol>';
  }

  function stimHTML(ex) {
    // optional real image, then paragraphs split on blank lines; marks are trusted HTML already inside
    var img = ex.simg ? '<img class="wk-stim-img" src="' + ex.simg + '" alt="" loading="lazy">' : '';
    var paras = ex.stim ? ex.stim.split('\n\n') : [];
    return img + paras.map(function (p) { return '<p>' + p + '</p>'; }).join('');
  }

  var TYPEWHY = {
    causation: 'point at cause and effect, what led to what, so this is a Causation question.',
    context: 'point you to the bigger situation or development behind the source, so this is a Context question.',
    purpose: 'ask about the author’s goal or point of view, so this is a Purpose / Point of View question.',
    bestillustrates: 'ask what the source itself shows, so this is a Best Illustrates question.',
    similar: 'ask you to match the method or process, not the topic, so this is a Most Similar question.'
  };

  // pull the text out of the <mark> spans so we can quote it in the coach panel
  function pullMark(html, cls, joinAll) {
    var re = new RegExp('<mark class="' + cls + '">([\\s\\S]*?)<\\/mark>', joinAll ? 'g' : '');
    if (!joinAll) { var m = html.match(re); return m ? m[1] : ''; }
    var out = [], mm; while ((mm = re.exec(html))) out.push(mm[1]); return out.join(' … ');
  }
  function quoteBox(t) { return '<blockquote class="wk-quote">' + esc(t) + '</blockquote>'; }

  function coachSteps(ex) {
    var T = WT[ex.type];
    var trigger = pullMark(ex.q, 'hq', false);
    var key = pullMark(ex.stim, 'hs', true);

    // step 1: source line, quoted, then since/therefore reasoning
    var s1 = '<div class="wk-coach-h">Step 1 &middot; Read the source line first</div>' +
      '<p class="wk-coach-lead">Start with the small line naming who wrote it, when, and what kind of source it is:</p>' +
      quoteBox(ex.srcline) +
      '<p class="wk-note">Now reason it out, since ... therefore ...</p>';
    ex.src.forEach(function (r) {
      s1 += '<div class="wk-since"><span class="wk-since-k">' + esc(r.tag) + '</span> Since ' + esc(r.since) +
        ', <span class="wk-therefore">therefore</span> ' + esc(r.therefore) + '.</div>';
    });

    // step 2: quote the trigger words, then name the type and why
    var s2 = '<div class="wk-coach-h">Step 2 &middot; Read the question and the choices</div>' +
      '<p class="wk-coach-lead">The underlined words in the question are the giveaway:</p>' +
      quoteBox(trigger) +
      '<p class="wk-note">These words ' + TYPEWHY[ex.type] + '</p>' +
      '<div class="wk-typecard"><span class="walk-badge ' + T.cls + '">' + T.name + '</span>' +
      '<p class="wk-cue">' + esc(T.cue) + '</p>' +
      '<p><b>How to handle it:</b> ' + esc(T.strat) + '</p></div>';

    // step 3: quote the key phrase in the passage, then plain English
    var s3 = '<div class="wk-coach-h">Step 3 &middot; Say what it is really asking</div>' +
      '<p class="wk-coach-lead">Go back to the highlighted words in the passage:</p>' +
      quoteBox(key) +
      '<div class="wk-plain">' + esc(ex.meaning) + '</div>';

    // step 4: quote the proof, answer, then the trap
    var s4 = '<div class="wk-coach-h">Step 4 &middot; Answer, and name the trap</div>' +
      '<p class="wk-coach-lead">The proof is right there in the passage:</p>' +
      quoteBox(key) +
      '<div class="wk-why"><b>Correct: ' + letters(ex.answer) + '.</b> ' + esc(ex.why) + '</div>' +
      '<div class="wk-trap"><b>What NOT to do</b>' + esc(ex.trap) + '</div>';

    return '<div class="wk-coach-step" data-for="1">' + s1 + '</div>' +
      '<div class="wk-coach-step" data-for="2">' + s2 + '</div>' +
      '<div class="wk-coach-step" data-for="3">' + s3 + '</div>' +
      '<div class="wk-coach-step" data-for="4">' + s4 + '</div>';
  }

  function cardHTML(ex, open) {
    var T = WT[ex.type];
    var qplain = esc(String(ex.q).replace(/<[^>]+>/g, '')); // question stem, marks stripped, for the collapsed header
    return '<div class="wk' + (open ? ' is-open' : '') + '" data-step="1">' +
      '<button type="button" class="wk-summary">' +
        '<span class="walk-badge ' + T.cls + '">' + T.name + '</span>' +
        '<span class="wk-sum-topic">Unit ' + ex.unit + ' &middot; ' + esc(ex.test) + '</span>' +
        '<span class="wk-chevron" aria-hidden="true">&#9654;</span>' +
        '<span class="wk-sum-q">' + qplain + '</span>' +
      '</button>' +

      '<div class="wk-detail">' +
        '<div class="wk-body">' +
          '<div class="wk-doc">' +
            '<div class="wk-stim">' + stimHTML(ex) + '</div>' +
            '<div class="wk-srcbar"><span class="wk-srclabel">Source line</span><span class="wk-srctext">' + esc(ex.srcline) + '</span></div>' +
            '<div class="wk-q">' + ex.q + '</div>' +
            optionsHTML(ex) +
          '</div>' +
          '<aside class="wk-coach">' + coachSteps(ex) +
            '<div class="wk-nav"><button type="button" class="wk-prev" disabled>← Back</button>' +
            '<span class="wk-count">Step <b>1</b> of 4</span>' +
            '<button type="button" class="wk-next">Next →</button></div>' +
          '</aside>' +
        '</div>' +

        '<div class="wk-dots">' +
          '<button type="button" class="wk-dot active" data-s="1">1. Source line</button>' +
          '<button type="button" class="wk-dot" data-s="2">2. The question</button>' +
          '<button type="button" class="wk-dot" data-s="3">3. What it asks</button>' +
          '<button type="button" class="wk-dot" data-s="4">4. Answer &amp; trap</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function setStep(card, n) {
    n = Math.max(1, Math.min(4, n));
    card.setAttribute('data-step', n);
    card.querySelectorAll('.wk-dot').forEach(function (d) {
      d.classList.toggle('active', parseInt(d.getAttribute('data-s'), 10) === n);
    });
    var cnt = card.querySelector('.wk-count b'); if (cnt) cnt.textContent = n;
    var prev = card.querySelector('.wk-prev'); if (prev) prev.disabled = (n === 1);
    var next = card.querySelector('.wk-next'); if (next) { next.disabled = (n === 4); next.textContent = n === 3 ? 'See answer →' : 'Next →'; }
  }

  function wire(el) {
    if (el._sbmcqWired) return;
    el._sbmcqWired = true;
    el.addEventListener('click', function (e) {
      var card = e.target.closest('.wk');
      if (!card) return;
      if (e.target.closest('.wk-summary')) { card.classList.toggle('is-open'); return; }
      var cur = parseInt(card.getAttribute('data-step'), 10) || 1;
      if (e.target.closest('.wk-next')) { setStep(card, cur + 1); return; }
      if (e.target.closest('.wk-prev')) { setStep(card, cur - 1); return; }
      var dot = e.target.closest('.wk-dot');
      if (dot) { setStep(card, parseInt(dot.getAttribute('data-s'), 10)); return; }
    });
  }

  /* public: method strip + 5-type cheat sheet */
  function renderCheatsheet(el) {
    if (!el) return;
    var method = '<div class="walk-method">' +
      '<div class="walk-method-step"><div class="walk-method-num">Step 1</div><h4>Read the source line first</h4><p>The small line naming who wrote it, when, and what it is. Ask: since it was written by this person, at this time, therefore what?</p></div>' +
      '<div class="walk-method-step"><div class="walk-method-num">Step 2</div><h4>Read the question and choices</h4><p>Find the trigger words and name which of the 5 types you are dealing with.</p></div>' +
      '<div class="walk-method-step"><div class="walk-method-num">Step 3</div><h4>Say it in plain English</h4><p>Go back to the passage and translate the question: what is it actually asking?</p></div>' +
      '<div class="walk-method-step"><div class="walk-method-num">Step 4</div><h4>Answer, and name the trap</h4><p>Pick the answer, and know the classic wrong choice for that type.</p></div>' +
      '</div>';

    var cheat = '<p class="walk-cheat-label">The 5 stimulus-question types. Most are not really about history, they are about decoding what is asked.</p><div class="walk-cheat">';
    ['bestillustrates', 'context', 'causation', 'purpose', 'similar'].forEach(function (k) {
      var T = WT[k];
      cheat += '<div class="walk-cheat-card"><div class="walk-cheat-hd ' + T.cls + '">' + T.name + '</div>' +
        '<div class="walk-cheat-bd"><p class="walk-cheat-cue">' + esc(T.cue) + '</p>' +
        '<span class="lbl">Strategy</span><p>' + esc(T.strat) + '</p>' +
        '<span class="lbl">Trap</span><p class="trap">' + esc(T.trap) + '</p></div></div>';
    });
    cheat += '</div>';
    el.innerHTML = method + cheat;
  }

  /* public: render worked example(s). opts.unit filters to one unit. */
  function renderWalk(el, opts) {
    if (!el) return;
    opts = opts || {};
    var units = opts.unit ? [opts.unit] : [2, 3, 4, 5, 6, 7, 8];
    var html = '';
    units.forEach(function (u) {
      html += '<section class="walk-group" id="walk-u' + u + '" data-unit="' + u + '">';
      if (!opts.unit) html += '<h2 class="walk-groupttl">' + UNIT_TITLES[u] + '</h2>';
      var items = WORKED.filter(function (w) { return w.unit === u; });
      if (!items.length) {
        html += '<div class="walk-empty">Worked example for this unit is coming soon. Drop the unit test PDF into the repo and it will be added here.</div>';
      } else {
        items.forEach(function (ex, i) { html += cardHTML(ex, i === 0); });
      }
      html += '</section>';
    });
    el.innerHTML = html;
    wire(el);
  }

  window.renderCheatsheet = renderCheatsheet;
  window.renderWalk = renderWalk;
})();
