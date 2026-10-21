/* walkthrough-data.js: step-by-step walkthroughs for stimulus questions in mcq-bank.js.
   Shown on each unit's MCQ Walkthrough tab (sbmcq.js renderWalk) after the unit's
   worked examples, and from MCQ Practice ("Walk me through it" once a question is graded).

   Keyed by the MCQ id u{n}_{topic}_{idx}. The stimulus, source line, stem, options,
   answer and explanation come from the bank verbatim; this file adds only the coaching:
     type    : 'bestillustrates' | 'context' | 'causation' | 'purpose' | 'similar'
     hq      : exact words in the stem to underline (the trigger)
     hs      : exact phrases in the stimulus to highlight (omit for image sources)
     look    : for image sources, what to look at (used where the highlight would be quoted)
     src     : since / therefore rows for the source line [{tag, since, therefore}]
     read    : Work it step 1 choices, the right reading first (shown shuffled)
     plain   : Work it step 3 choices, the right plain-English question first (shown shuffled)
     meaning : a sentence or two after the plain-English question
     trapIdx : the classic wrong option (0-3), trap: why it is wrong
   Keep the right read/plain choice from being the longest one (CLAUDE.md rule 4).
   Append entries; ids follow the bank, so never reorder bank questions. */
window.WALKTHROUGH = window.WALKTHROUGH || {};
(function (W) {
  /* ============ UNIT 1 ============ */
  W['u1_1.1_4'] = {
    type: 'causation',
    hq: 'most directly contributed to',
    hs: ['governed by a civil bureaucracy recruited through competitive written examinations', 'rise to the highest office by his own talent and effort'],
    src: [
      { tag: 'WHO', since: 'it is a modern historian, not someone living in Song China', therefore: 'it is a secondary source that sums up how the system worked' },
      { tag: 'WHAT', since: 'it describes how the Song chose the people who governed', therefore: 'the answer will be about government and the people who ran it' }
    ],
    read: ['A modern historian explaining how Song China chose officials', 'A Song emperor announcing new exam rules to his court officials', 'A poor peasant describing his own climb into government office'],
    plain: ['What new group did the exam system create in Song society?', 'Why did the Song dynasty decide to stop using Confucian ideas?', 'How did the exams change the families of Song peasants?'],
    meaning: 'The exams picked officials by talent, so the people who passed became a new educated ruling class.',
    trapIdx: 3,
    trap: 'D grabs the line about the poorest peasant’s son rising. But the passage says "in theory," and the exams built a new elite, the scholar-gentry. They did not end hierarchy. A choice that goes further than the source is a trap.'
  };

  W['u1_1.2_0'] = {
    type: 'causation',
    hq: 'most directly led to',
    hs: ['The adoption of the mamluk* institutions by the Abbasids', 'the disintegration of the state'],
    src: [
      { tag: 'WHO', since: 'Crone is a historian of Islam writing in 1980', therefore: 'this is an expert’s argument about why the Abbasid state fell apart' },
      { tag: 'WHAT', since: 'the book is called Slaves on Horses', therefore: 'her focus is the Turkic slave soldiers (mamluks) and the power they gained' }
    ],
    read: ['A historian tying the Abbasid collapse to Turkic slave soldiers', 'An Abbasid caliph describing the loyal soldiers who defended him', 'A Shi’ite rebel calling for Muslims to rise against the caliph'],
    plain: ['Who took power once the Abbasid state broke into pieces?', 'Which outside empire was the first to conquer the Abbasids?', 'How did the Abbasid collapse affect Silk Road merchants?'],
    meaning: 'The passage links the breakup to Turkic slave soldiers. Follow that thread: who ruled the pieces afterward?',
    trapIdx: 2,
    trap: 'C borrows the Shi’ite revolutionaries from the passage. They promised a recovery, but most of the Islamic world stayed Sunni. The mamluks in the passage are Turkic soldiers, and Turkic states (the Seljuks, the Delhi Sultanate, the Mamluks) are what followed.'
  };

  W['u1_1.6_5'] = {
    type: 'context',
    hq: 'best be understood in the context of',
    hs: ['shall be vested permanently in our son [son-in-law], King Henry [of England]', 'the two kingdoms shall be governed'],
    src: [
      { tag: 'WHEN', since: 'it is dated 1420', therefore: 'any war from the 1600s or 1700s is ruled out right away' },
      { tag: 'WHAT', since: 'it is a treaty', therefore: 'it settles a conflict, and the question is which one' },
      { tag: 'WHO', since: 'it hands the French crown to the English king', therefore: 'the conflict is between England and France' }
    ],
    read: ['A 1420 deal settling who would wear the crown of France', 'A 1420 trade agreement opening French ports to English merchants', 'A 1420 church ruling on which king the pope would recognize'],
    plain: ['Which war between England and France was going on in 1420?', 'Which religious war split France between Catholics and Protestants?', 'Which war in the 1600s made England a republic?'],
    meaning: 'A context question wants the bigger situation the treaty came out of. The date and the two kingdoms do most of the work.',
    trapIdx: 2,
    trap: 'C is English, and it is a war, but it happened in the 1640s. Check the date on the source line first: 1420 rules out A, B and C, which all come after 1600.'
  };

  W['u1_1.1_6'] = {
    type: 'context',
    hq: 'in the wake of',
    hs: ['the Yuan [Mongol] dynasty had risen from the desert', 'We have then been engaged in war for fourteen years', 'restored the old boundaries of Zhongguo'],
    src: [
      { tag: 'WHO', since: 'it is the first Ming emperor announcing his own rise', therefore: 'he tells the story in a way that makes his rule look rightful' },
      { tag: 'WHEN', since: 'it is from 1372', therefore: 'it comes just after the Ming replaced the Mongol Yuan dynasty in 1368' },
      { tag: 'WHAT', since: 'it is a manifesto sent abroad', therefore: 'it is official messaging aimed at foreign rulers' }
    ],
    read: ['A new Ming emperor announcing that he now rules China', 'A Mongol khan warning the Byzantines about a rebellion', 'A Song official mourning the loss of his dynasty’s throne'],
    plain: ['What had just happened in China before this was written?', 'Why did the Byzantine emperor write to China in 1372?', 'Which earlier dynasty was the Ming emperor trying to restore?'],
    meaning: '"In the wake of" means right after. The emperor tells you: Mongol rule, disorder, fourteen years of war, then a new dynasty.',
    trapIdx: 1,
    trap: 'B sounds calm and official, like the tone of the letter. But the emperor says he was "engaged in war for fourteen years." Do not let a polite tone hide what the source says actually happened.'
  };

  W['u1_1.1_9'] = {
    type: 'purpose',
    hq: 'the Ming Emperor’s interest in writing',
    hs: ['We cannot but let the world know Our intention to maintain peace within the four seas', 'It is on this ground alone that We have issued this Manifesto'],
    src: [
      { tag: 'WHO', since: 'the writer had just won the throne by war', therefore: 'he wants foreign rulers to see him as legitimate and not as a threat' },
      { tag: 'WHAT', since: 'it is a manifesto, a public announcement', therefore: 'its purpose is to tell the world something, not to make a private deal' },
      { tag: 'TO WHOM', since: 'it went to the Byzantine emperor, far from China', therefore: 'it cannot be a warning to a neighbor on China’s border' }
    ],
    read: ['The new emperor wants distant kings to see his rule as legitimate', 'The new emperor wants Byzantine soldiers to help guard his borders', 'The new emperor wants to buy Byzantine goods with Chinese silver'],
    plain: ['What reason does the emperor give for sending the letter?', 'What trade goods did China want from the Byzantine Empire?', 'How did the Mongols treat Byzantine merchants in China?'],
    meaning: 'For purpose, look for the author saying why. This emperor says it outright near the end.',
    trapIdx: 3,
    trap: 'D mentions borders, and the emperor does say he "restored the old boundaries." But he never threatens anyone. Stay inside the source: the only reason he gives is to let the world know he will "maintain peace."'
  };

  W['u1_1.5_1'] = {
    type: 'purpose',
    hq: 'background as a Muslim legal scholar',
    hs: ['a greater abhorrence of injustice than any other people', 'There is complete security in their country'],
    src: [
      { tag: 'WHO', since: 'he was a Muslim scholar trained in Islamic law', therefore: 'he judges places by how well they follow Islamic ideas of justice' },
      { tag: 'WHAT', since: 'it is an account of his own visit', therefore: 'it is firsthand, but shaped by what he cared about' },
      { tag: 'WHERE', since: 'he was a visitor from Morocco', therefore: 'he compares Mali to the wider Muslim world he knew' }
    ],
    read: ['A Muslim legal scholar judging Mali by Islamic ideas of justice', 'A West African griot singing the praises of the mansa at court', 'A Moroccan merchant reporting gold and salt prices in Mali’s markets'],
    plain: ['What would a Muslim judge notice and praise about Mali?', 'What did Mali’s army conquer while he was visiting?', 'Which traditional religions did the mansa practice at court?'],
    meaning: 'This is point of view: how the author’s background shapes what he notices. A legal scholar notices justice and order.',
    trapIdx: 3,
    trap: 'D is about ordinary people and taxes, a real topic, but the passage praises Mali. The question asks how his background shaped his view, so the answer has to connect to being a Muslim legal scholar: justice and order.'
  };

  W['u1_1.7_3'] = {
    type: 'similar',
    hq: 'a similarity between the belief systems',
    hs: ['loyalty to the emperor, respect for elders, and the obedience of wives to husbands', 'assigned people to hereditary social groups with distinct duties'],
    src: [
      { tag: 'WHAT', since: 'it is a short modern summary, not a primary source', therefore: 'all the evidence you need is in the two sentences' },
      { tag: 'WHEN', since: 'it covers 1200 to 1450', therefore: 'Europeans are not yet active in Asia, which rules out any choice about them' }
    ],
    read: ['A modern summary comparing two belief systems before 1450', 'A Confucian scholar’s letter criticizing the Hindu caste system', 'A European missionary’s report on religions he saw in Asia'],
    plain: ['What do both systems do to the way society is ordered?', 'Which of the two systems spread farther across Asia by 1450?', 'How did Europeans react to these two belief systems?'],
    meaning: 'Strip away the names. Both describe who obeys whom and who has which duty. That is the shared method.',
    trapIdx: 2,
    trap: 'C is the exact opposite of the passage. Both systems kept people in their place: obedience in the family, duties by caste. Match what the two have in common (they keep the social order), not a choice that only sounds like a comparison.'
  };

  W['u1_1.2_4'] = {
    type: 'bestillustrates',
    hq: 'best illustrates',
    hs: ['the Abbasid caliph still sat in Baghdad', 'real power had passed to Turkic sultans'],
    src: [
      { tag: 'WHO', since: 'it is a historian looking back', therefore: 'it sums up a long trend rather than one event' },
      { tag: 'WHAT', since: 'it is about the later Abbasid period', therefore: 'it describes the caliphate after its peak, as it weakened' }
    ],
    read: ['A historian summing up a shift of power in the late Abbasid era', 'A Turkic sultan boasting that he defeated the caliph’s army in battle', 'An Abbasid caliph ordering his governors to send more tax money'],
    plain: ['What does a caliph with a title but no power show?', 'How did the caliph keep total control over the empire?', 'Why did trade stop moving through the Islamic world?'],
    meaning: 'Say the source in one sentence: the caliph kept his title, the sultans took the power. Then find the choice that matches.',
    trapIdx: 2,
    trap: 'C is the reverse of the passage: the caliph "still sat in Baghdad," but real power was gone. The caliph kept the title and the shared faith while the sultans held power. That split is what the source illustrates.'
  };

  W['u1_1.4_2'] = {
    type: 'bestillustrates',
    hq: 'most clearly illustrate',
    hs: ['What are you doing to our ruler?', 'All the people of this land are so distressed by your actions'],
    src: [
      { tag: 'WHO', since: 'Titu Cusi was an Inca ruler himself', therefore: 'he wants to show how much the Inca valued their king' },
      { tag: 'TO WHOM', since: 'the letter went to the king of Spain', therefore: 'he is complaining about abuses and asking for better treatment' },
      { tag: 'WHEN', since: 'it was written in 1570, decades after the conquest', therefore: 'it is a memory shaped by the purpose of the letter' }
    ],
    read: ['An Inca ruler protesting Spanish abuses to the king of Spain', 'A Spanish soldier bragging about how he captured the Inca ruler', 'A Catholic priest reporting new Inca converts back to the pope'],
    plain: ['What does the people’s reaction to the jailed ruler show?', 'How did new technology help the Inca expand their huge empire?', 'How many different peoples lived inside the vast Inca Empire?'],
    meaning: 'Wila Uma says the whole land is in distress because the ruler is in prison. What does that say about the ruler’s place in the state?',
    trapIdx: 0,
    trap: 'A and D are true facts about the Inca, but the passage is not about them. Wila Uma talks only about the ruler and how his capture hurts "all the people." Stay inside the source.'
  };

  W['u1_1.6_7'] = {
    type: 'causation',
    hq: 'a consequence of the treaty',
    hs: ['will never treat for peace or amity with the said Charles'],
    src: [
      { tag: 'WHEN', since: 'it is from 1420, in the middle of a long war', therefore: 'its effects show up in the decades after, up to 1453' },
      { tag: 'WHO', since: 'it was made by the French king, Henry of England, and the duke of Burgundy', therefore: 'someone was left out: Charles, the king’s own son' },
      { tag: 'WHAT', since: 'it is a treaty that disinherits the Dauphin', therefore: 'expect the people it cut out to fight back' }
    ],
    read: ['A 1420 deal that cut out the French heir and gave England the crown', 'A 1420 deal that ended the war with a French victory over England', 'A 1420 deal that divided France between Catholics and the Protestants'],
    plain: ['What happened after the French heir was cut out of the crown?', 'Why did the French king want peace with the duke of Burgundy?', 'How did this treaty bring the French monarchy to an end for good?'],
    meaning: 'A consequence is what happened next. The treaty shut out Charles, so ask what Charles and his supporters did about it.',
    trapIdx: 0,
    trap: 'A sounds like what the treaty wanted, but a treaty on paper is not what happened. The left-out Dauphin, with Joan of Arc, kept fighting and drove the English out by 1453. A consequence question asks what came next, not what the document hoped for.'
  };

  /* ============ UNIT 2 ============ */
  W['u2_2.1_4'] = {
    type: 'causation',
    hq: 'most directly contributed to',
    hs: ['an inn where caravans could find water, food, and shelter'],
    src: [
      { tag: 'WHAT', since: 'it is an account of overland trade in Central Asia', therefore: 'it is about the Silk Roads' },
      { tag: 'WHERE', since: 'the route crosses "the wastes," meaning desert and steppe', therefore: 'travelers needed places to rest and resupply' }
    ],
    read: ['An account of merchants crossing Central Asia on the Silk Roads', 'A ship captain’s log describing a voyage across the Indian Ocean', 'A ruler’s order closing his roads to all foreign merchant caravans'],
    plain: ['What did rest stops along the way do for trade?', 'Why did the Silk Roads fall out of use by 1450?', 'How did Central Asian cities cut themselves off?'],
    meaning: 'Inns every hundred miles meant water, food and rest. Ask what that does for merchants crossing a desert.',
    trapIdx: 1,
    trap: 'B is a real later trend, but the passage shows something that helped trade, not hurt it. The effect has to follow from what the source describes: safer, easier trips mean more trade.'
  };

  W['u2_2.3_3'] = {
    type: 'causation',
    hq: 'were significant because',
    hs: ['only when they blew toward the west could he make the crossing', 'returning months later when they reversed'],
    src: [
      { tag: 'WHAT', since: 'it is about an Indian Ocean voyage', therefore: 'the winds in it are the monsoons' },
      { tag: 'WHO', since: 'it follows a ship’s captain', therefore: 'it shows how sailors actually planned their trips' }
    ],
    read: ['A record of how a captain timed an Indian Ocean crossing', 'A European explorer’s journal from a voyage around Africa', 'A Swahili ruler’s complaint about foreign ships at his port'],
    plain: ['Why did predictable winds matter to sea traders?', 'Why did the winds keep Islam out of East Africa?', 'How did the winds stop ships from crossing at all?'],
    meaning: 'The winds blew one way, then reversed months later. If you know when, you can plan a trip out and a trip back.',
    trapIdx: 0,
    trap: 'A says the winds made travel impossible, but the captain does cross, and comes back. Read what the source says happens, not just that the winds were a limit.'
  };

  W['u2_2.3_7'] = {
    type: 'causation',
    hq: 'led directly to the development of',
    look: 'Large vessels come to Aden from Cambay, Quilon, Calicut "and many other Malabar ports," and Indian and Egyptian merchants live there. Ships crossing the ocean on a regular schedule is the system.',
    src: [
      { tag: 'WHO', since: 'Ibn Battuta was a Muslim traveler who visited ports all around the Indian Ocean', therefore: 'he describes trade he saw firsthand' },
      { tag: 'WHEN', since: 'it is from 1325 to 1354', therefore: 'Europeans are not in the Indian Ocean yet (they arrive in 1498), which rules out C' }
    ],
    read: ['A Muslim traveler describing a busy Indian Ocean port he visited', 'A European merchant describing his company’s trading post in Aden', 'An Indian ruler ordering his merchants to trade only with Egypt'],
    plain: ['What natural force made ocean trade like this possible?', 'Which army conquered Aden and then organized all of its trade?', 'Which European trading rivals forced Aden to build up its port?'],
    meaning: 'Meteorological means weather. The monsoon winds let ships sail from India to Aden and back every year.',
    trapIdx: 3,
    trap: 'D is tempting because the passage is about a port city. But the port is part of the system, not what caused it. The question asks what led to the system, and in the Indian Ocean that is the monsoon winds.'
  };

  W['u2_2.2_8'] = {
    type: 'context',
    hq: 'during which of the following dynasties',
    hs: ['since they were conquered by the Great Kaan', 'Since the Great Kaan occupied the city'],
    src: [
      { tag: 'WHO', since: 'Marco Polo was a Venetian merchant who traveled to China', therefore: 'he reports what he saw as an outsider' },
      { tag: 'WHEN', since: 'it is from about 1300', therefore: 'it rules out the Ming (1368) and the Qing (1644)' }
    ],
    read: ['A European visitor describing a Chinese city around 1300', 'A Chinese official’s report to the Ming emperor on Kinsay', 'A Song historian looking back at his dynasty’s old capital'],
    plain: ['Who ruled China when the "Great Kaan" held this city?', 'Which dynasty first built Kinsay up as its own capital city?', 'Which later dynasty drove the Mongols back out of China for good?'],
    meaning: 'The "Great Kaan" is Khubilai Khan. A Mongol khan ruling China means the Yuan dynasty.',
    trapIdx: 0,
    trap: 'A is the trap: Kinsay was the Song capital, so the name feels right. But Polo says the city was "conquered by the Great Kaan." The Song had fallen to the Mongols, and the Yuan ruled when he visited.'
  };

  W['u2_2.2_10'] = {
    type: 'context',
    hq: 'an ongoing historical trend that benefited Marco Polo',
    hs: ['the imports by traders from other provinces', 'he has ordained that each of the 12,000 bridges should be provided with a guard of ten men'],
    src: [
      { tag: 'WHO', since: 'Polo was a European merchant deep inside China', therefore: 'something had to make that long trip possible' },
      { tag: 'WHEN', since: 'it is from about 1300, under Mongol rule', therefore: 'think about what the Mongols did for travel across Eurasia' }
    ],
    read: ['A European merchant reporting on a city ruled by the Mongols', 'A Chinese merchant writing home about trade in Venice', 'A Mongol governor reporting to the khan about his city guards'],
    plain: ['What big trend made it safe for a European to reach China?', 'What deadly disease cut Europe off from all of Asia around 1300?', 'How did trade across the Atlantic lead Europeans to explore Asia?'],
    meaning: 'Polo describes order, guards and trade under the Great Kaan. One empire ruling from China to Russia made his trip possible.',
    trapIdx: 2,
    trap: 'C is close, but it skips the cause. The roads were safe because one Mongol empire controlled them (the Pax Mongolica). A names that connection directly, and it is what let Polo travel and trade.'
  };

  W['u2_2.3_0'] = {
    type: 'purpose',
    hq: 'The primary purpose of the voyages',
    hs: ['fleets of large ships and thousands of sailors', 'local rulers were urged to send tribute and envoys to the Ming emperor'],
    src: [
      { tag: 'WHAT', since: 'it is a short modern summary', therefore: 'the clue to purpose is in what the voyages actually did' },
      { tag: 'WHO', since: 'the voyages were sent by the Ming emperor', therefore: 'their purpose served the emperor and the state' }
    ],
    read: ['A modern summary of where Zheng He’s fleets went and what they did', 'Zheng He’s own diary listing the trade goods he bought for himself', 'A Swahili king’s letter asking China to build a colony on his coast'],
    plain: ['What did the emperor want from sending fleets abroad?', 'Where did China plan to build its first colonies?', 'Which religion did China want Indian Ocean kings to adopt?'],
    meaning: 'Huge fleets plus requests for tribute: the emperor was showing off Ming power and pulling rulers into China’s tributary system.',
    trapIdx: 0,
    trap: 'A sounds like what European fleets did later. Zheng He visited and left; he did not found colonies. Do not judge Ming voyages by what Europeans did after 1500.'
  };

  W['u2_2.2_13'] = {
    type: 'purpose',
    hq: 'can best be described as',
    look: 'Rubruck measures Karakorum against "the village of Saint Denis" back home in France, then lists the districts, temples and markets he saw.',
    src: [
      { tag: 'WHO', since: 'Rubruck was a European friar sent east by the French king', therefore: 'he is a visitor, not someone who lives in the city' },
      { tag: 'WHEN', since: 'it is from 1254, early in Mongol rule', therefore: 'few Europeans had ever seen the Mongol capital' },
      { tag: 'WHAT', since: 'it is an account of a journey', therefore: 'it reports what he saw on his trip' }
    ],
    read: ['A European friar describing a city he saw on a long journey', 'A Mongol official writing an account of his own capital city', 'A modern historian’s study of how Karakorum was governed'],
    plain: ['Who is writing, and how does he know about this city?', 'How did the khans organize and run their government in Karakorum?', 'Which religion did most of the people in Karakorum follow?'],
    meaning: 'Use the source line: a friar from France, on a journey. Comparing the city to Saint Denis is something only an outsider would do.',
    trapIdx: 0,
    trap: 'A gets the author wrong. Rubruck was not a historian studying the past; he was there in 1254. Always check the source line before picking a description of the source.'
  };

  W['u2_2.3_9'] = {
    type: 'similar',
    hq: 'LEAST similar',
    look: 'Ibn Battuta is far from home, describing the port of Aden and the merchants he meets there.',
    src: [
      { tag: 'WHO', since: 'Ibn Battuta traveled across the Muslim world and beyond', therefore: 'his experience is long-distance travel and recording what he saw' },
      { tag: 'WHEN', since: 'it is from 1325 to 1354', therefore: 'compare him with other travelers on the same networks' }
    ],
    read: ['A Muslim traveler recording what he saw far from home', 'A Yemeni ruler describing the busy port city that he governs', 'An Indian merchant writing about his own ship and its cargo'],
    plain: ['Which person did not make a long journey across Afro-Eurasia?', 'Which traveler visited the most ports in the whole Indian Ocean?', 'Which other person also wrote an account of the port of Aden?'],
    meaning: 'LEAST similar flips the usual question. Three choices were long-distance travelers like him; find the one who was not.',
    trapIdx: 3,
    trap: 'D, Xuanzang, may be the least familiar name, so it can feel like the odd one out. He was a Chinese monk who traveled to India, a long journey like Ibn Battuta’s. Lorenzo de’ Medici stayed in Florence. Match the method (long travel), not how famous the name is.'
  };

  W['u2_2.2_15'] = {
    type: 'bestillustrates',
    hq: 'illustrates',
    look: 'The Polos are "honorably and graciously received," the khan says Marco "is welcome," and Marco learns four languages at the court.',
    src: [
      { tag: 'WHO', since: 'this comes from Marco Polo’s own travel account', therefore: 'it may make the Polos look important' },
      { tag: 'WHEN', since: 'it is from about 1300, under Mongol rule', therefore: 'Europeans could reach the khan’s court' },
      { tag: 'WHAT', since: 'it describes a meeting at court', therefore: 'it shows how Europeans and the Mongols treated each other' }
    ],
    read: ['A European’s account of being welcomed at the Mongol court', 'A Mongol khan’s order banning all foreign merchants from court', 'A pope’s letter refusing to send envoys to the Mongols'],
    plain: ['What kind of contact does this meeting show?', 'Which empire controlled trade between Europe and Asia?', 'Why did major powers refuse to work together in this era?'],
    meaning: 'Gifts from the pope, a feast, and Marco learning four languages. In one line: Europeans and the Mongol court got along.',
    trapIdx: 1,
    trap: 'B is about religion moving into South Asia, which is not in the source. Sum up the passage in one sentence first, then match it: a friendly meeting between Europeans and the khan.'
  };

  W['u2_2.6_4'] = {
    type: 'bestillustrates',
    hq: 'best supports',
    hs: ['The pestilence traveled with the caravans and the ships'],
    src: [
      { tag: 'WHAT', since: 'it describes the spread of the Black Death', therefore: 'it is about the plague of the 1340s' },
      { tag: 'WHERE', since: 'it runs "from Cathay to the shores of Europe"', therefore: 'it follows the trade routes across Eurasia' }
    ],
    read: ['A description of how plague moved along trade routes', 'A doctor’s guide to treating the plague with herbs and medicine', 'A merchant’s list of the goods carried on his caravans and ships'],
    plain: ['What else moved on trade routes besides goods?', 'Which cities did the plague leave untouched?', 'How did trade routes protect cities from disease?'],
    meaning: 'The plague traveled "with the caravans and the ships." The same routes that carried goods carried disease.',
    trapIdx: 0,
    trap: 'A is the opposite of the passage: the source says the disease traveled with the caravans. When a choice says "only," check whether the source allows that limit.'
  };
  /* ============ UNIT 3 ============ */
  W['u3_3.1_4'] = {
    type: 'causation',
    hq: 'directly contributed to',
    hs: ['Ottoman armies with cannons attacking the city walls', 'the Ottoman army encamped outside a fortified city'],
    src: [
      { tag: 'WHAT', since: 'both images show Ottoman sieges', therefore: 'the "practice" is gunpowder warfare against walled cities' },
      { tag: 'WHEN', since: 'they show 1453 and Süleyman’s reign (1520–1566)', therefore: 'the question is about Ottoman power at its height, before 1600' }
    ],
    read: ['Two images showing the Ottoman army besieging cities with cannon', 'Two Ottoman court paintings of the sultan’s palace and its gardens', 'Two European maps of the trade routes that passed through Ottoman lands'],
    plain: ['What did cannon-armed Ottoman armies win before 1600?', 'Why did the Ottoman economy fall behind industrial Europe?', 'Which branch of Islam did the Ottomans make the official faith?'],
    meaning: 'Gunpowder armies that could break city walls let the Ottomans conquer. Pick the result that comes before 1600.',
    trapIdx: 2,
    trap: 'C is a real Ottoman problem, but it came after 1750, with industrialization. The question says "before 1600." Run the time period test: losses to Russia and falling behind Europe both come later.'
  };

  W['u3_3.3_2'] = {
    type: 'causation',
    hq: 'best explains why',
    hs: ['no Muslim architect would ever be able to build a mosque whose dome even approaches in size that of the Hagia Sophia', 'a dome that is about 10 feet higher and 6 feet wider than the dome of the Hagia Sophia'],
    src: [
      { tag: 'WHO', since: 'it was written by an Ottoman court official about the sultan’s architect', therefore: 'it celebrates the Ottoman state' },
      { tag: 'WHEN', since: 'it was written around 1600, long after the Ottomans took Constantinople in 1453', therefore: 'the Hagia Sophia had become a symbol the Ottomans now owned' },
      { tag: 'WHAT', since: 'it is a biography', therefore: 'it praises Sinan’s achievements' }
    ],
    read: ['An Ottoman official praising the sultan’s architect', 'A Byzantine priest describing the building of the Hagia Sophia', 'A Christian architect mocking the size of Ottoman mosques'],
    plain: ['Why did beating the Hagia Sophia matter to the Ottoman state?', 'Why did the Ottomans lack any building traditions of their own?', 'How small had the Byzantine Empire become by 1450?'],
    meaning: 'The Hagia Sophia was the great church of Byzantine Constantinople. Outbuilding it showed the Ottomans as the rightful heirs of that imperial city.',
    trapIdx: 0,
    trap: 'A uses an outside idea to explain the rivalry, but the passage points at Constantinople and its great church. Topping the Hagia Sophia mattered because ruling Constantinople was the core of Ottoman legitimacy.'
  };

  W['u3_3.2_5'] = {
    type: 'context',
    hq: 'best understood in the context of',
    hs: ['kings are not only God’s lieutenants upon earth, and sit upon God’s throne', 'even by God himself are called gods'],
    src: [
      { tag: 'WHO', since: 'James I was king of England', therefore: 'he has every reason to make royal power sound unlimited' },
      { tag: 'TO WHOM', since: 'he was speaking to Parliament', therefore: 'he is pushing back against people who wanted a share of power' },
      { tag: 'WHEN', since: 'it is 1610', therefore: 'this is the age of divine right and absolute monarchs in Europe' }
    ],
    read: ['An English king claiming his power comes straight from God', 'A member of Parliament arguing for strict limits on the king’s power', 'A bishop explaining why the church should rank above the king'],
    plain: ['What bigger trend does a king calling himself godlike fit?', 'Which Islamic ideas reached England after the Crusades?', 'Why did England treat Protestants and Catholics differently?'],
    meaning: 'A king saying God gave him his power is divine right. The context: European monarchs kept using religion to justify their rule.',
    trapIdx: 2,
    trap: 'C mentions religion and rule, but a theocracy is a state run by religious leaders. James is a king using God to back his own power. Do not pick a choice just because it shares a word with the source.'
  };

  W['u3_3.2_14'] = {
    type: 'context',
    hq: 'best understood in the context of',
    look: 'Machiavelli says it is "much safer to be feared than loved," because men "turn against you" when danger comes. He is advising a prince who has to survive in a dangerous political world.',
    src: [
      { tag: 'WHO', since: 'Machiavelli was a Florentine official who had been pushed out of power', therefore: 'he writes from hard experience of Italian politics' },
      { tag: 'WHEN', since: 'it is from about 1513', therefore: 'Italy was split into rival city-states and invaded by France and Spain' },
      { tag: 'WHAT', since: 'The Prince is advice for a ruler', therefore: 'it is about how to gain and keep power' }
    ],
    read: ['A Florentine writer giving a ruler advice on keeping power', 'A priest teaching young princes to rule with Christian love and mercy', 'An Italian banker explaining how a prince can grow his city’s wealth'],
    plain: ['What in Italy made being feared seem safer than love?', 'Why were the lower classes in Italy growing rich around 1500?', 'Why did Italian scholars become much more devoted to religion?'],
    meaning: 'Advice this harsh fits a violent time. Italian city-states were fighting each other and foreign invaders.',
    trapIdx: 3,
    trap: 'D describes peace and cooperation, the opposite of the world Machiavelli is writing for. His warning that men "turn against you" only makes sense in a time of intense conflict.'
  };

  W['u3_3.3_3'] = {
    type: 'purpose',
    hq: 'Based on the intended purpose of Sinan’s biography',
    hs: ['The difficulty of putting three staircases in such slender structures should be obvious to anyone', 'I was able to build a dome'],
    src: [
      { tag: 'WHO', since: 'the story is told in Sinan’s own voice inside a court biography', therefore: 'it is written to make him look great' },
      { tag: 'WHAT', since: 'it is a biography celebrating a famous architect', therefore: 'it will stress how hard and impressive his work was' },
      { tag: 'WHEN', since: 'it was written around 1600, after his death', therefore: 'it is shaping his reputation for later readers' }
    ],
    read: ['A court biography written to celebrate Sinan’s great work', 'A building inspector’s report listing the mosque’s flaws', 'A Christian architect’s honest review of the Selimiye mosque'],
    plain: ['What would a book praising Sinan likely exaggerate?', 'How much money did the sultan give to build the mosque?', 'Did Christian architects help design the Selimiye mosque?'],
    meaning: 'A work meant to celebrate someone tends to make his challenges sound bigger. Sinan even says the difficulty "should be obvious to anyone."',
    trapIdx: 1,
    trap: 'B goes the wrong direction. The passage thanks "His Majesty the Sultan" for his support, and a court biography would play up royal support, not hide it. Ask what the purpose would push the author to exaggerate.'
  };

  W['u3_3.2_1'] = {
    type: 'purpose',
    hq: 'most increase historians’ confidence in the reliability',
    hs: ['The Mughal emperor is not as wealthy as he might appear', 'Nothing is crueler and more oppressive than the manner in which they exercise their authority'],
    src: [
      { tag: 'WHO', since: 'Bernier was a French traveler', therefore: 'he is an outsider who might judge India by European standards' },
      { tag: 'TO WHOM', since: 'he wrote to France’s finance minister', therefore: 'he may shape his report for French trade interests' },
      { tag: 'WHAT', since: 'it is a letter describing Mughal government', therefore: 'the real question is how much he saw for himself' }
    ],
    read: ['A French visitor reporting on Mughal rule to a minister', 'A Mughal tax collector explaining his duties to the emperor', 'A Hindu merchant’s complaint about officials taking his money'],
    plain: ['What fact would show Bernier saw these things himself?', 'Why did Bernier first train for a career in the Catholic Church?', 'Where else in Europe did Bernier travel before he reached India?'],
    meaning: 'Reliability goes up when the author saw it firsthand. Years as an official at the Mughal court means he watched the system work.',
    trapIdx: 3,
    trap: 'D is a true fact, but it lowers confidence: writing for the founder of the French East India Company gives Bernier a reason to slant his report. A fact about who asked for the source raises questions about purpose, not reliability.'
  };

  W['u3_3.4_3'] = {
    type: 'similar',
    hq: 'most similar to',
    hs: ['his companions meeting a group of Hindu holy men (sadhus)', 'the Mughal court’s engagement with Hindu religious figures'],
    src: [
      { tag: 'WHAT', since: 'Source 1 is a Mughal painting of an official meeting Hindu holy men', therefore: 'it shows a Muslim court engaging with its Hindu subjects' },
      { tag: 'WHEN', since: 'it is from about 1635, after Akbar’s reign', therefore: 'it reflects Akbar’s policy of tolerating and including Hindus' }
    ],
    read: ['A Mughal painting of an official meeting Hindu holy men', 'A Mughal painting of soldiers forcing Hindus to convert to Islam', 'A Hindu painting mocking the Mughal emperor and his court'],
    plain: ['Which empire also used people of other faiths to help rule?', 'Which empire forced one single faith on everyone that it ruled?', 'Which empire made all of its subjects follow the rulers’ customs?'],
    meaning: 'Strip away the topic. The method is a Muslim empire using its non-Muslim subjects instead of forcing them to change. Find the same method elsewhere.',
    trapIdx: 2,
    trap: 'C matches by topic: another Islamic empire. But the Safavids forced conversion, the opposite of Akbar’s method. Match the how (bringing other faiths into the state), not the what (a Muslim empire).'
  };

  W['u3_3.4_6'] = {
    type: 'similar',
    hq: 'most similar to',
    look: 'A zamindar "who paid revenue to the Mogul was clearly in a position of dependence." Local rulers kept their land but answered to a stronger central government.',
    src: [
      { tag: 'WHO', since: 'Moreland was a British historian writing in 1920', therefore: 'this is a secondary source, written while Britain ruled India' },
      { tag: 'WHAT', since: 'it describes zamindars and the revenue they paid', therefore: 'it is about how the Mughals controlled local landholders' }
    ],
    read: ['A historian describing how Mughals controlled local landholders', 'A zamindar’s own letter to Akbar refusing to pay any more of his taxes', 'A Mughal law that gave every zamindar full independence from the throne'],
    plain: ['Who else were local lords placed under a stronger ruler?', 'Which peasants were tied to the land by their powerful rulers?', 'Which group of warriors kept their own lands and private armies?'],
    meaning: 'Zamindars kept their lands but had to pay the Mughal throne and depend on it. Look for local lords pulled under a central ruler.',
    trapIdx: 0,
    trap: 'A matches the label "feudal lords," but Holy Roman Empire princes grew more independent, not less. Match what happened to the group (brought under central control), not just what kind of group it was.'
  };

  W['u3_3.1_7'] = {
    type: 'bestillustrates',
    hq: 'interpret the rhetoric in the passage as evidence',
    hs: ['the Caliph of God Most High in this world', 'the possessor of the land of tyranny and wickedness', 'it is my obligation to extinguish and extirpate the evil heresy that you represent'],
    src: [
      { tag: 'WHO', since: 'Selim I was the Sunni Ottoman sultan', therefore: 'he presents himself as the true defender of Islam' },
      { tag: 'TO WHOM', since: 'it is addressed to Shah Ismail, the Shi’a Safavid ruler', therefore: 'it attacks a rival’s faith and his right to rule' },
      { tag: 'WHEN', since: 'it is from about 1514, just before the Battle of Chaldiran', therefore: 'it is a message sent on the edge of war' }
    ],
    read: ['A Sunni sultan attacking a Shi’a rival’s faith and rule', 'A Safavid shah offering the Ottomans a peaceful trade treaty', 'A Muslim scholar explaining Sunni and Shi’a beliefs to students'],
    plain: ['How does Selim use religion against his rival?', 'Did empires in this era prefer war over diplomacy?', 'How did rulers lead religious ceremonies in this era?'],
    meaning: 'Selim calls himself "Caliph of God" and calls Ismail a heretic. Religion is his weapon, both for his own legitimacy and against his enemy’s.',
    trapIdx: 1,
    trap: 'B is tempting because the letter threatens war, and the Battle of Chaldiran followed. But the question is about the rhetoric, the words. Every title and insult is religious, so the answer is about using religion for legitimacy.'
  };

  W['u3_3.2_11'] = {
    type: 'bestillustrates',
    hq: 'can best be seen as evidence of',
    look: 'Separate laws written just for "military men": they must study literature, practice "archery and horsemanship," and stay ready even in peacetime.',
    src: [
      { tag: 'WHO', since: 'these are laws issued by the Tokugawa shogunate', therefore: 'they show how the government wanted society organized' },
      { tag: 'WHAT', since: 'the laws are only for military households', therefore: 'each group in Japan had its own rules' },
      { tag: 'WHEN', since: 'it is 1615, right after the Tokugawa unified Japan', therefore: 'they are setting up a new, tightly controlled order' }
    ],
    read: ['Laws from the shogun telling warrior families how to behave', 'A samurai’s diary describing a battle against a rival daimyo’s army', 'A Dutch trader’s report describing how Japanese soldiers trained'],
    plain: ['What does having special laws for warrior families show?', 'How did feudal lords gain more and more power under the shogun?', 'Why did Japan open its doors to Western traders and their ideas?'],
    meaning: 'One set of laws for one class of people points to a society sorted into fixed classes, each with its own rules.',
    trapIdx: 1,
    trap: 'B gets the direction backward. Laws like these limited the daimyo and their samurai; the shogun was taking power, not giving it away. Ask who is making the rules and who has to follow them.'
  };
  /* ============ UNIT 4 ============ */
  W['u4_4.5_0'] = {
    type: 'causation',
    hq: 'primarily the result of',
    hs: ['so crowded that each had scarcely room to turn himself'],
    src: [
      { tag: 'WHO', since: 'Equiano had been enslaved', therefore: 'he survived the Middle Passage himself' },
      { tag: 'WHEN', since: 'it was published in London in 1789', therefore: 'British readers were arguing about the slave trade' }
    ],
    read: ['A survivor describing the crowded conditions of a slave ship', 'A ship captain’s report on the cargo he carried to Jamaica', 'A British law setting rules for how captives were transported'],
    plain: ['Why did traders pack so many captives into one ship?', 'Why were there not enough ships for the crossing during wartime?', 'Why was the Atlantic voyage too short to bother with comfort?'],
    meaning: 'Ask who decided how many people went on each ship, and why. More captives per voyage meant more profit.',
    trapIdx: 1,
    trap: 'B invents a law that is not in the source. The crowding came from a business choice: traders squeezed in as many captives as they could to make more money.'
  };

  W['u4_4.5_14'] = {
    type: 'causation',
    hq: 'most directly contributed to',
    look: 'The quicksilver mines of Huancavelica and "the silver mines of Potosi" worked Indians to death. Now ask where all that silver went.',
    src: [
      { tag: 'WHO', since: 'Guaman Poma was an Andean noble writing to the Spanish king', therefore: 'he wants the king to stop the abuses in the mines' },
      { tag: 'WHEN', since: 'it is from about 1610', therefore: 'silver from Potosí was flowing to Spain at its peak' },
      { tag: 'WHAT', since: 'it is a chronicle criticizing colonial rule', therefore: 'it shows the harm to Indians, not where the silver ended up' }
    ],
    read: ['An Andean writer protesting abuse of Indians in the mines', 'A Spanish mine owner bragging about his profits to the king', 'A priest’s report on how many Indians had converted in Peru'],
    plain: ['What did Spain do with all the silver from these mines?', 'How did Spain’s own merchants grow rich from all the silver?', 'Why did the Spanish kings stop paying for religious activities?'],
    meaning: 'The passage is about the mines; the question is about what their silver paid for. Spain’s Habsburg kings spent it on wars across Europe and beyond.',
    trapIdx: 1,
    trap: 'B sounds logical: silver should make merchants rich. But most of it went to pay for wars and debts, and much of it left Spain. A choice that sounds reasonable still has to match what actually happened.'
  };

  W['u4_4.2_8'] = {
    type: 'context',
    hq: 'best understood in the context of',
    look: 'Spain and Portugal draw a line "from pole to pole" and split all lands "discovered" on each side of it between them.',
    src: [
      { tag: 'WHEN', since: 'it is 1494, two years after Columbus’s first voyage', therefore: 'new lands were just being found' },
      { tag: 'WHO', since: 'it is between Spain and Portugal, the two leading sea powers', therefore: 'it settles their race for new territory' }
    ],
    read: ['A 1494 deal dividing newly found lands between two kingdoms', 'A 1494 peace treaty ending a land war between Spain and Portugal', 'A 1494 trade deal setting prices for Spanish and Portuguese goods'],
    plain: ['What era of history were new lands being "discovered" in?', 'When did Europe go through its time of new scientific reason?', 'When did new factories first change everyday life in Europe?'],
    meaning: 'Lands "discovered" across the ocean, in 1494. That is the Age of Exploration.',
    trapIdx: 0,
    trap: 'A, the Dark Ages, is a vague label for Europe centuries earlier. Check the date on the source line first: 1494 lines up with Columbus and the start of ocean exploration.'
  };

  W['u4_4.5_15'] = {
    type: 'context',
    hq: 'best understood in the context of',
    look: 'Barbot writes of slaves "we transport from Guinea to America" and of his "own slaves both aboard and at Guadalupe." People are being moved across the Atlantic.',
    src: [
      { tag: 'WHO', since: 'Barbot was an agent of the French Royal African Company', therefore: 'he took part in the slave trade himself' },
      { tag: 'WHEN', since: 'it is 1732', therefore: 'the Atlantic slave trade was at its height' },
      { tag: 'WHERE', since: 'he moves people from Guinea in West Africa to the Caribbean', therefore: 'this is the Atlantic world' }
    ],
    read: ['A slave trader describing captives carried to the Americas', 'A Caribbean planter describing the crops he grew in Guadeloupe', 'A North African merchant describing caravans across the Sahara'],
    plain: ['What larger Atlantic system was moving these people?', 'Which European country ruled most of the colonies in the Americas?', 'How did the trade routes across North Africa first develop?'],
    meaning: 'Captives carried from West Africa to the Caribbean were one part of a wider exchange of people, crops, goods and animals across the Atlantic.',
    trapIdx: 2,
    trap: 'C picks up the word "French" from the source line. France had Caribbean islands, but it did not dominate the Americas. Pick the context that covers what the source shows: people moving across the Atlantic.'
  };

  W['u4_4.5_1'] = {
    type: 'purpose',
    hq: 'published in order to',
    hs: ['so crowded that each had scarcely room to turn himself', 'almost suffocated us'],
    src: [
      { tag: 'WHO', since: 'Equiano had been enslaved and later freed', therefore: 'he speaks as a witness against the trade' },
      { tag: 'WHERE', since: 'it was published in London', therefore: 'it was aimed at British readers' },
      { tag: 'WHEN', since: 'it is 1789', therefore: 'the British campaign to abolish the slave trade was growing' }
    ],
    read: ['A freed African writing to British readers about slavery', 'A plantation owner writing to attract investors to the Caribbean', 'A Spanish official defending the encomienda labor system'],
    plain: ['What did Equiano want British readers to do?', 'Why did Equiano want more workers to move to the Caribbean?', 'How did Equiano defend Spain’s labor system?'],
    meaning: 'A firsthand account of horror, published in London in 1789, during the abolition campaign. He wants readers to end the trade.',
    trapIdx: 1,
    trap: 'B goes against everything in the passage. Equiano describes suffering, not opportunity. For purpose, ask what the author wants readers to feel and do after reading.'
  };

  W['u4_4.4_3'] = {
    type: 'purpose',
    hq: 'A likely purpose for including the religious figure',
    hs: ['the Christ Child standing on a sailing ship'],
    src: [
      { tag: 'WHO', since: 'it was made in Portuguese Goa', therefore: 'it reflects how the Portuguese saw their role in Asia' },
      { tag: 'WHEN', since: 'it is from 1600 to 1625', therefore: 'Portugal’s sea empire in the Indian Ocean was well established' },
      { tag: 'WHAT', since: 'it is a religious art object', therefore: 'it carries a message about faith' }
    ],
    read: ['A Portuguese religious carving joining Christ with a ship', 'A Hindu carving of a god who protects the fishermen of India', 'A Muslim merchant’s seal used to stamp his cargo of trade goods'],
    plain: ['What does Christ on a ship say about Portugal’s voyages?', 'How could Portuguese settlers living in Goa ever reach salvation?', 'Why would the Muslims of Goa accept these Christian ideas?'],
    meaning: 'Christ standing on the ship blesses the ship. The message: God is on the side of Portuguese sea power.',
    trapIdx: 3,
    trap: 'D reads the image too literally. Christ is not promising new technology; his presence on the ship says the whole enterprise has God’s approval. Look for the claim the image makes, not a literal story.'
  };

  W['u4_4.5_4'] = {
    type: 'similar',
    hq: 'differed from European attempts to promote Christianity in South and East Asia',
    hs: ['the hut was opened and torn down', 'a tall cross was raised over the seat'],
    src: [
      { tag: 'WHO', since: 'Estete was a Spanish soldier', therefore: 'he describes religion spread by armed men' },
      { tag: 'WHEN', since: 'it is 1532, during the conquest of the Inca', therefore: 'Spain was winning wars in the Andes' },
      { tag: 'WHAT', since: 'it is his own account of the expedition', therefore: 'it shows the Spanish acting by force, without asking permission' }
    ],
    read: ['A Spanish soldier describing his men wrecking an Andean shrine', 'A Jesuit priest describing peaceful talks with a Chinese emperor', 'An Inca priest describing how he welcomed the Spanish gods'],
    plain: ['Why could the Spanish use force in Peru but not in Asia?', 'Why did Europeans in Asia give up on spreading Christianity?', 'How did Europeans convert all of Asia by peaceful means?'],
    meaning: 'Compare the method. In Peru, soldiers tear down a shrine and raise a cross. In Mughal India or Ming China, Europeans had no army strong enough to do that.',
    trapIdx: 3,
    trap: 'D gets half of it right: missionaries in Asia did use persuasion. But they never converted "entire populations." Watch for a choice that takes a true idea and stretches it too far.'
  };

  W['u4_4.4_10'] = {
    type: 'bestillustrates',
    hq: 'illustrates',
    look: 'Cortés keeps coming back to "houses for their idols" and chapels "dedicated to a particular idol." Idol is a Christian word for a false god.',
    src: [
      { tag: 'WHO', since: 'Cortés was the Spanish conquistador', therefore: 'he sees the Aztec world as a Catholic soldier' },
      { tag: 'TO WHOM', since: 'he wrote to King Charles V', therefore: 'he describes Tenochtitlan in terms a Catholic king would understand' },
      { tag: 'WHEN', since: 'it is from about 1520, during the conquest', therefore: 'he describes the city before the Spanish destroyed it' }
    ],
    read: ['A Spanish conquistador describing Aztec temples to his king', 'An Aztec priest explaining his many gods to the Spanish visitors', 'A modern archaeologist describing a model of the Great Temple'],
    plain: ['What clash does the word "idols" reveal?', 'How did Spanish and Aztec economies differ?', 'Which side valued learning more than pleasure?'],
    meaning: 'Idols means false gods. A believer in one God is looking at temples to many gods, so the clash is religious.',
    trapIdx: 1,
    trap: 'B brings in economic systems, but the passage is all temples, priests and idols. Sum up the source first (religion, religion, religion), then pick the conflict that matches.'
  };

  W['u4_4.4_13'] = {
    type: 'bestillustrates',
    hq: 'most clearly demonstrates',
    look: 'The legend: a fort, a Dutch East India Company administration building, garrison barracks, a marketplace, and residence blocks laid out in a planned grid.',
    src: [
      { tag: 'WHO', since: 'Batavia was the capital of the Dutch East India Company', therefore: 'a trading company, not a king, built and ran it' },
      { tag: 'WHEN', since: 'it is 1667', therefore: 'European trading companies were spreading across the Indian Ocean' },
      { tag: 'WHAT', since: 'it is a city plan', therefore: 'its layout shows what the city was built for' }
    ],
    read: ['A plan of a port city built by a Dutch trading company', 'A map showing the royal capital of an old Javanese kingdom', 'A sketch of a Chinese walled town on the coast of Java'],
    plain: ['What does a company-built city show?', 'How did New World crops raise populations?', 'How did cities protect people from disease?'],
    meaning: 'A fort, company offices and barracks around a market. A European trading company built its own city where it traded.',
    trapIdx: 3,
    trap: 'D is close because Batavia was busy with trade, but the map shows offices, a fort and a market, not workshops. The point is who built the city: a European trade company.'
  };

  W['u4_4.3_4'] = {
    type: 'context',
    hq: 'best explained by',
    hs: ['approximately 25 million in 1519 to roughly 1.2 million by 1600'],
    src: [
      { tag: 'WHAT', since: 'it is population data for central Mexico', therefore: 'look for something that killed people on a huge scale' },
      { tag: 'WHEN', since: 'the drop starts in 1519, the year Cortés arrived', therefore: 'it is tied to contact with the Spanish' }
    ],
    read: ['Data showing central Mexico’s population collapse after 1519', 'A Spanish census counting the silver miners working in New Spain', 'A tax record from the Aztec lands from before the Spanish came'],
    plain: ['What killed most of Mexico’s people after 1519?', 'Why did sugar farms spread so quickly across Mexico?', 'How did silver mining change the economy of New Spain?'],
    meaning: 'From about 25 million to about 1.2 million in eighty years. Only epidemic disease explains a drop that fast and that big.',
    trapIdx: 1,
    trap: 'B is a real part of New Spain’s history, and mining was deadly for workers. But nothing else explains a loss of over 90 percent across a whole region. Match the size of the change to the size of the cause.'
  };
  /* ============ UNIT 5 ============ */
  W['u5_5.3_6'] = {
    type: 'causation',
    hq: 'a consequence of the technology targeted in this petition',
    look: 'The workers say the Scribbling-Machines "have thrown thousands of your petitioners out of employ," and one machine does the work of "twenty men." Hand work done at home is being replaced.',
    src: [
      { tag: 'WHO', since: 'the petitioners are woolen workers who did the work by hand', therefore: 'they are the people the machines were replacing' },
      { tag: 'WHEN', since: 'it is 1786', therefore: 'this is the early Industrial Revolution in Britain' },
      { tag: 'WHAT', since: 'it is a petition to merchants and clothiers', therefore: 'they are asking employers to stop using the machines' }
    ],
    read: ['Hand workers asking employers to stop using new machines', 'Factory owners asking Parliament to pay for new machines', 'Merchants asking the king to ban wool imports from abroad'],
    plain: ['What happened to hand work done at home?', 'How did British politics change after 1786?', 'How did Britain lose its place in the world economy?'],
    meaning: 'Before machines, families spun and wove at home: the domestic system. Machines in mills replaced it.',
    trapIdx: 2,
    trap: 'C is the opposite of what the petition says: machines threw "thousands" out of work. Factories did hire people later, but the consequence of this technology was the end of home-based hand work.'
  };

  W['u5_5.8_0'] = {
    type: 'causation',
    hq: 'most directly a response to',
    hs: ['the history of class struggles'],
    src: [
      { tag: 'WHO', since: 'Marx and Engels were socialist thinkers', therefore: 'they criticize how society is divided' },
      { tag: 'WHEN', since: 'it is 1848', therefore: 'industrial capitalism was spreading across Europe and workers lived in harsh conditions' },
      { tag: 'WHAT', since: 'it is a manifesto', therefore: 'it is a call to action, not a neutral history' }
    ],
    read: ['Two socialist thinkers calling society a story of class conflict', 'A factory owner praising all of the benefits of industrial growth', 'A medieval lord describing the duties owed to him by his serfs'],
    plain: ['What were Marx and Engels reacting to?', 'Why did serfdom spread in early modern Europe?', 'Why did factories start moving overseas?'],
    meaning: 'Class struggle in 1848 means workers against factory owners. The Manifesto answers the inequality of industrial capitalism.',
    trapIdx: 0,
    trap: 'A picks up "class" and history, but serfdom belongs to an earlier age. Run the time period test: in 1848 the class struggle Marx cared about was between workers and owners.'
  };

  W['u5_5.3_5'] = {
    type: 'context',
    hq: 'best understood in the context of',
    look: 'One machine "will do as much work in one day as would otherwise employ twenty men," and there are "no less than one hundred and seventy" of them near Leeds.',
    src: [
      { tag: 'WHO', since: 'the petitioners are cloth workers', therefore: 'they feel the change directly, in their jobs' },
      { tag: 'WHEN', since: 'it is 1786', therefore: 'Britain is just starting to mechanize' },
      { tag: 'WHAT', since: 'the complaint is about Scribbling-Machines', therefore: 'the issue is machines doing human work' }
    ],
    read: ['Cloth workers complaining that machines are taking their jobs', 'Farmers complaining that the common land is being fenced off from them', 'Voters complaining that Parliament keeps ignoring the common people'],
    plain: ['What change were the machines in this petition part of?', 'When did the English crown lose its power to Parliament?', 'Which political revolutions swept across Europe in this era?'],
    meaning: 'Machines doing the work of twenty men each: the specific context is labor being automated.',
    trapIdx: 0,
    trap: 'A is true about England in this period, so it is very tempting. But it is broader than the source. The petition is about one thing, machines replacing workers, and D names that exactly. When two choices fit, pick the one closest to the source.'
  };

  W['u5_5.1_6'] = {
    type: 'context',
    hq: 'written in the context of',
    look: 'Hobbes says the weakest man "has strength enough to kill the strongest." People are equal enough that anyone can kill anyone, so life without strong government is dangerous.',
    src: [
      { tag: 'WHEN', since: 'it is 1651', therefore: 'England had just been through a civil war that ended with the king executed in 1649' },
      { tag: 'WHO', since: 'Hobbes was an English political thinker', therefore: 'he is reacting to events in England' },
      { tag: 'WHAT', since: 'Leviathan is about government', therefore: 'it argues for the kind of rule that prevents chaos' }
    ],
    read: ['An English thinker explaining why people need strong rule', 'A Catholic priest defending the Church against Protestant reformers', 'A Spanish noble arguing about who should inherit the throne'],
    plain: ['What war in England shaped Hobbes’s ideas?', 'What was the Church doing to fight Protestantism?', 'Who fought over the Spanish throne after 1700?'],
    meaning: 'Anyone can kill anyone, so people need a strong ruler. Ideas like that came out of the chaos of the English Civil War.',
    trapIdx: 2,
    trap: 'C, the Glorious Revolution, is English and about government too, but it came in 1688, after Leviathan. Check the date: 1651 points to the Civil War that had just ended.'
  };

  W['u5_5.4_3'] = {
    type: 'purpose',
    hq: 'the purpose of the ‘new legislation’',
    hs: ['the empire’s former strength and prosperity have changed into weakness and poverty', 'introduce new legislation in order to achieve effective administration of the Ottoman government and provinces'],
    src: [
      { tag: 'WHO', since: 'the decree comes from the Ottoman foreign minister', therefore: 'it shows how the government saw its own problems' },
      { tag: 'WHEN', since: 'it is 1839', therefore: 'industrial European powers were pressing the Ottomans hard' },
      { tag: 'WHAT', since: 'it is a decree announcing reforms', therefore: 'it explains why the state must change' }
    ],
    read: ['An Ottoman decree admitting decline and announcing reforms', 'A sultan’s order sending his armies to conquer lands in southern Europe', 'A religious ruling calling for an end to all new laws in the empire'],
    plain: ['Why did a weakened empire need new laws in 1839?', 'Where did the Ottomans plan to set up colonies?', 'Which lands did the Ottomans want back from the Safavids?'],
    meaning: 'The decree admits "weakness and poverty." In 1839 the threat was industrial Europe, so the new laws were meant to modernize the state to keep up.',
    trapIdx: 2,
    trap: 'C names old rivals. By 1839 the Safavid and Mughal empires were gone or powerless. Run the time period test: the danger then came from industrializing Europe.'
  };

  W['u5_5.8_4'] = {
    type: 'purpose',
    hq: 'the purpose of Trotsky’s statement',
    hs: ['depends immediately not on the level of the productive forces', 'In a country which is economically more backward, the proletariat can come to power sooner than in an advanced capitalist country'],
    src: [
      { tag: 'WHO', since: 'Trotsky was a Russian communist leader', therefore: 'he wanted a revolution in Russia' },
      { tag: 'WHEN', since: 'it is 1906, just after the failed revolution of 1905', therefore: 'he is arguing that revolution is still possible' },
      { tag: 'WHAT', since: 'it is an article', therefore: 'it makes an argument to other socialists' }
    ],
    read: ['A Russian communist arguing Russia is ready for revolution', 'A factory owner warning Russia’s tsar about rising worker unrest', 'A British economist describing why factories grew in England'],
    plain: ['What is Trotsky trying to convince people of?', 'Does Marx’s theory work outside Europe?', 'Do single people drive history more than big forces?'],
    meaning: 'Orthodox Marxists said a backward country had to industrialize first. Trotsky says no: Russia could have its revolution sooner.',
    trapIdx: 2,
    trap: 'C picks up "subjective factors," which sound like individuals. But Trotsky is not making a general claim about history; he is making a case for revolution in Russia. For purpose, tie the claim to who is writing and what he wants.'
  };

  W['u5_5.2_6'] = {
    type: 'similar',
    hq: 'Ideas similar to those expressed in the passage',
    look: 'The song defines Germany as wherever "is heard the German tongue" and where "truth lives in each eye of blue." The nation is defined by language and by physical traits.',
    src: [
      { tag: 'WHO', since: 'Arndt was a German nationalist writer', therefore: 'the song celebrates German identity' },
      { tag: 'WHEN', since: 'it was popular in the late nineteenth century', therefore: 'it fits the era of German unification in 1871' },
      { tag: 'WHAT', since: 'it is a folk song', therefore: 'it spread nationalist feeling to ordinary people' }
    ],
    read: ['A popular song defining the German nation and its people', 'A church hymn asking God to forgive the sins of the German people', 'A treaty setting the official borders of the new German state'],
    plain: ['Where does defining a nation by blood and looks lead?', 'Why did Germans become more religious?', 'Why did many nations try to cut off contact with all the others?'],
    meaning: 'A nation defined by "the German tongue" and "each eye of blue" is a nation defined by blood. That fed beliefs in racial superiority.',
    trapIdx: 0,
    trap: 'A grabs the hymns and prayers to God in the song. But the line that matters is "each eye of blue": a nation defined by physical traits. Match the idea that grew out of the song, not the words it uses.'
  };

  W['u5_5.5_5'] = {
    type: 'similar',
    hq: 'most similar to',
    look: 'Rows of power looms, driven by belts from overhead shafts, with a few workers tending many machines.',
    src: [
      { tag: 'WHAT', since: 'it is an image of power looms in a textile mill', therefore: 'it shows machines doing work people once did by hand' },
      { tag: 'WHEN', since: 'it is from 1835', therefore: 'this is the Industrial Revolution in Britain, built on cotton textiles' }
    ],
    read: ['An image of machines weaving cloth in a factory', 'A painting of a family spinning and weaving cloth at home', 'A diagram of a ship built to carry cotton across the ocean'],
    plain: ['Which other machine sped up the cotton industry?', 'Which tool did the Inca use to keep their records?', 'Which invention spread printed books across Europe?'],
    meaning: 'Strip away the topic and name the process: a machine that greatly raised textile output. The cotton gin did the same for cotton.',
    trapIdx: 2,
    trap: 'C, movable type, was a world-changing invention too, so it feels similar. But it changed printing, not textiles and labor. Match the process (a machine that sped up cotton production), not just "important invention."'
  };

  W['u5_5.1_0'] = {
    type: 'bestillustrates',
    hq: 'best supports which of the following conclusions about the author’s motives',
    hs: ['being forbidden to grow European crops', 'the exclusive trading privileges', 'the barriers between American provinces, designed to prevent all exchange of trade'],
    src: [
      { tag: 'WHO', since: 'Bolívar was a creole leader of independence', therefore: 'he speaks for American-born elites' },
      { tag: 'WHEN', since: 'it is 1815, during the wars of independence', therefore: 'he is explaining why Spanish America must break away' },
      { tag: 'WHAT', since: 'it is a letter', therefore: 'it lays out his grievances to win support' }
    ],
    read: ['An independence leader listing Spain’s limits on trade', 'A Spanish governor defending trade rules for the colonies', 'A plantation owner asking Spain for more enslaved workers'],
    plain: ['Which Spanish policies does Bolívar complain about?', 'Why did Bolívar oppose the use of forced labor in the colonies?', 'Why did Bolívar dislike how much people were buying?'],
    meaning: 'Every complaint is about trade: banned crops, banned factories, trade monopolies, barriers between provinces. That is Spanish mercantilism.',
    trapIdx: 2,
    trap: 'C grabs the word "consumers" from the passage. But Bolívar complains that colonists are only consumers, kept from producing and trading. Read the word in its sentence before you match it.'
  };

  W['u5_5.8_3'] = {
    type: 'bestillustrates',
    hq: 'best illustrate',
    hs: ['Without a revolutionary theory there can be no revolutionary movement', 'The theory of socialism'],
    src: [
      { tag: 'WHO', since: 'Lenin was a Russian revolutionary in exile', therefore: 'he is planning how to overthrow the system' },
      { tag: 'WHEN', since: 'it is 1902', therefore: 'industrial capitalism was spreading into Russia' },
      { tag: 'WHAT', since: 'the title asks "What Is to Be Done?"', therefore: 'it is a plan for action' }
    ],
    read: ['A Russian revolutionary planning how to lead the workers', 'A Russian factory owner explaining how unions hurt business', 'A professor teaching the economic ideas of Adam Smith'],
    plain: ['What big trend do socialist plans like Lenin’s belong to?', 'How did universities change Adam Smith’s ideas?', 'How did the middle class grow in new industrial countries?'],
    meaning: 'Lenin is building a new vision of society, socialism led by a party, as an answer to industrial capitalism.',
    trapIdx: 1,
    trap: 'B mixes up the direction. Lenin is not trying to keep old ways of production; he wants a new society built on socialist theory. Say the source in one line first: a plan for revolution against capitalism.'
  };
  /* ============ UNIT 6 ============ */
  W['u6_6.2_5'] = {
    type: 'causation',
    hq: 'resulted from which of the following events',
    hs: ['The recent annexation of Korea by Japan', 'since Japan assumed the protectorate of the Korean Empire'],
    src: [
      { tag: 'WHO', since: 'Komatsu Midori was a Japanese official', therefore: 'he presents Japan’s takeover of Korea in the best light' },
      { tag: 'WHEN', since: 'it is 1912, two years after Japan annexed Korea', therefore: 'he is justifying something that just happened' },
      { tag: 'WHAT', since: 'he calls the takeover a "reunion" of one nation', therefore: 'the passage is propaganda for empire' }
    ],
    read: ['A Japanese official justifying Japan’s takeover of Korea', 'A Korean king asking China to protect his kingdom from Japan', 'A British diplomat criticizing Japan’s growing navy'],
    plain: ['Which event first opened the way for Japan to take Korea?', 'When did Japan first begin to modernize its own government?', 'Which treaty first opened Japan’s ports to American ships?'],
    meaning: 'Japan controls Korea by 1912. Trace it back: which event pushed China out of Korea and let Japan in?',
    trapIdx: 1,
    trap: 'B, the Meiji Restoration, made Japan strong enough to expand, so it is a cause in the background. But the event that handed Korea to Japan was the treaty ending the Sino-Japanese War. "Resulted from" wants the direct cause.'
  };

  W['u6_6.2_22'] = {
    type: 'causation',
    hq: 'an important long-term effect',
    look: 'China recognizes "the full and complete independence" of Korea and gives Japan southern Fengtien and "the island of Formosa" (Taiwan).',
    src: [
      { tag: 'WHO', since: 'it is a treaty between China and Japan', therefore: 'it ends a war between them' },
      { tag: 'WHEN', since: 'it is 1895, after the Sino-Japanese War', therefore: 'the winner sets the terms' },
      { tag: 'WHAT', since: 'China gives up land and its hold on Korea', therefore: 'Japan is the winner gaining territory' }
    ],
    read: ['A peace treaty in which a defeated China gives land to Japan', 'A trade deal opening all of Japan’s ports to Chinese merchants', 'An alliance between China and Japan against Western powers'],
    plain: ['What did gaining Taiwan and Korea start for Japan?', 'When and why was Korea split into two separate countries?', 'Why did China close itself off from all foreign trade?'],
    meaning: 'Taiwan was Japan’s first colony, and Korea came next. In the long run, this started Japan’s empire in Asia and the Pacific.',
    trapIdx: 1,
    trap: 'B is the opposite of the source: Article II hands "the island of Formosa" to Japan. When the source answers a choice directly, trust the source.'
  };

  W['u6_6.7_5'] = {
    type: 'context',
    hq: 'best understood in the context of',
    look: 'The sign at the "Golden Gate of Liberty" welcomes communists, nihilists and socialists "but no admittance to Chinamen." A Chinese man with bags marked Industry and Order sits shut outside.',
    src: [
      { tag: 'WHEN', since: 'it is from 1882, the year of the Chinese Exclusion Act', therefore: 'it reacts to that law' },
      { tag: 'WHERE', since: 'it appeared in an American newspaper', therefore: 'its audience is Americans arguing about immigration' },
      { tag: 'WHAT', since: 'it is a political cartoon', therefore: 'it uses irony to make its point' }
    ],
    read: ['An 1882 cartoon mocking the ban on Chinese immigrants', 'An 1882 cartoon praising new limits on European radicals', 'An 1882 cartoon about American trade deals with China'],
    plain: ['What trend led to this fight over entry?', 'Why did the United States want colonies abroad?', 'Why did trade between countries slow down?'],
    meaning: 'A fight over who gets in only happens when lots of people are arriving. The late 1800s saw huge migration, including Chinese workers to the American West.',
    trapIdx: 0,
    trap: 'A sounds big and American, but the cartoon is about who may come in, not about the U.S. taking lands abroad. Pick the context that matches the cartoon’s subject: immigration.'
  };

  W['u6_6.2_15'] = {
    type: 'context',
    hq: 'historical backdrops',
    look: 'Auclert says "the French administration" closed Arab girls’ schools that existed before "the [1830] conquest." France is ruling Algeria.',
    src: [
      { tag: 'WHO', since: 'Auclert was a Parisian feminist', therefore: 'she cares about how women and girls are treated' },
      { tag: 'WHEN', since: 'it is 1896', therefore: 'France had ruled Algeria since the conquest of 1830' },
      { tag: 'WHAT', since: 'it was published in a French newspaper', therefore: 'she is criticizing her own government’s policy' }
    ],
    read: ['A French feminist criticizing French rule over Algerian girls', 'An Algerian father asking France to open more schools for his sons', 'A French general writing home to report on the conquest of Algeria'],
    plain: ['What system put France in charge of Algerian schools?', 'Which perfect society were reformers in France trying to build?', 'How did factories change women’s lives in France?'],
    meaning: 'A French government deciding what happens to Arab girls in Algeria after a conquest: that is colonialism.',
    trapIdx: 2,
    trap: 'C, industrialism, is the big story of the 1800s, so it is an easy guess. But nothing in the passage is about factories. "French administration" and "conquest" point to colonial rule.'
  };

  W['u6_6.7_8'] = {
    type: 'purpose',
    hq: 'would the cartoonist argue is an undesirable characteristic',
    look: 'The gate welcomes "Communist, Nihilist, Socialist, Fenian & Hoodlum," while the Chinese man sitting on bags marked Industry and Order is the only one kept out.',
    src: [
      { tag: 'WHO', since: 'the cartoonist titled it "The Only One Barred Out"', therefore: 'he thinks barring the Chinese is unfair' },
      { tag: 'WHAT', since: 'it is satire', therefore: 'it means the opposite of what the "Enlightened American Statesman" says' },
      { tag: 'WHEN', since: 'it is 1882', therefore: 'many Americans feared radical political movements from Europe' }
    ],
    read: ['A cartoon using irony to attack the ban on Chinese immigrants', 'A cartoon warning Americans about cheap and hardworking Chinese labor', 'A cartoon praising the government for drawing a firm line at the gate'],
    plain: ['Which migrants does the cartoonist really fear?', 'Why does the cartoonist think the Chinese should be kept out?', 'Why does the cartoonist dislike people who avoid alcohol?'],
    meaning: 'Satire flips the message. The cartoonist shows radicals walking in while a peaceful worker is shut out. To him, the radicals are the real problem.',
    trapIdx: 1,
    trap: 'B is what the law said, not what the cartoonist thinks. The title "The Only One Barred Out" mocks the rule. For point of view, decide whether the author agrees with what he shows.'
  };

  W['u6_6.3_7'] = {
    type: 'purpose',
    hq: 'serves to do which of the following',
    look: 'Right after his £2,000 house and his 50-acre farm, he says he is "suing the Government for damages done by a contingent of 1,500 natives."',
    src: [
      { tag: 'WHO', since: 'he is a British settler in South Africa', therefore: 'his main concern is his property' },
      { tag: 'TO WHOM', since: 'he is writing to his sister', therefore: 'he can speak openly about his own losses' },
      { tag: 'WHEN', since: 'it is 1879, during the Anglo-Zulu War', therefore: 'the fighting is close to his land' }
    ],
    read: ['A British settler telling his sister about his losses', 'A British general reporting on battles against the Zulu army', 'A Zulu chief protesting British settlers on his people’s land'],
    plain: ['Why does he mention suing the government?', 'Is he writing to show he is against the war?', 'Does he blame both Britain and the Zulus?'],
    meaning: 'He lists a house, a farm, and then a lawsuit. Each detail adds to how much he has lost.',
    trapIdx: 1,
    trap: 'B reads too much into the lawsuit. Suing for damages is about his property, not about the war being wrong. Ask what the detail does in the letter, right where it appears.'
  };

  W['u6_6.7_6'] = {
    type: 'similar',
    hq: 'most similar to the one depicted in the cartoon',
    look: 'The gate is open to everyone "but no admittance to Chinamen." The policy keeps out immigrants of one race.',
    src: [
      { tag: 'WHAT', since: 'the cartoon shows Chinese immigrants barred at the gate', therefore: 'the policy is a race-based limit on immigration' },
      { tag: 'WHEN', since: 'it is 1882', therefore: 'look for a policy from the same era' }
    ],
    read: ['A cartoon about barring immigrants because of their race', 'A cartoon about opening China’s ports to trade with every nation', 'A cartoon about Japan copying Western styles of government'],
    plain: ['Which other country also limited immigration by race?', 'Which policy kept trade in China open to all the powers?', 'Which policy forced Russian culture on minorities?'],
    meaning: 'Name the method: a country keeping out immigrants by race. Australia did the same with its White Australia Policy.',
    trapIdx: 0,
    trap: 'A matches by topic: it is also about China and the United States. But the Open Door was about trade, not immigration. Match the method (racial limits on who may enter), not the countries involved.'
  };

  W['u6_6.1_2'] = {
    type: 'bestillustrates',
    hq: 'most directly reflects which ideology',
    hs: ['Your new-caught, sullen peoples', 'Half-devil and half-child'],
    src: [
      { tag: 'WHO', since: 'Kipling was a British writer who celebrated empire', therefore: 'the poem supports imperialism' },
      { tag: 'WHEN', since: 'it is 1899, as the United States took the Philippines', therefore: 'he is urging Americans to join the imperial mission' },
      { tag: 'WHAT', since: 'it is a poem', therefore: 'it uses emotional images rather than facts' }
    ],
    read: ['A British poet urging Western nations to rule other peoples', 'A missionary’s report on converting people in the Philippines', 'A colonized writer protesting the cruelty of Western rule'],
    plain: ['What does "half-devil and half-child" reveal?', 'What economic benefits did the colonies give to Europe?', 'Why did nations want overseas military bases?'],
    meaning: 'Calling people "half-devil and half-child" says they are inferior and need to be ruled. That is racist, Social Darwinist thinking.',
    trapIdx: 3,
    trap: 'D is a real justification for empire, and "burden" can sound like a religious duty. But the poem never mentions faith; it describes people as inferior. Match the language actually in the source.'
  };

  W['u6_6.1_3'] = {
    type: 'bestillustrates',
    hq: 'illustrates which combination of factors',
    hs: ['The superior races have a right, because they have a duty', 'Colonial policy is the daughter of industrial policy'],
    src: [
      { tag: 'WHO', since: 'Ferry was the French prime minister', therefore: 'he is defending his government’s policy' },
      { tag: 'WHEN', since: 'it is 1884, the year the Berlin Conference opened', therefore: 'France was racing other powers for colonies' },
      { tag: 'WHAT', since: 'it is a speech', therefore: 'he is trying to win support at home' }
    ],
    read: ['A French leader arguing for colonies on two grounds', 'A French priest calling for missions to convert Africans', 'A French general explaining a battle plan in Indochina'],
    plain: ['Which two reasons for empire does Ferry give?', 'How did empires help colonized people?', 'What did international groups want from France?'],
    meaning: 'Two reasons in one speech: "superior races" with a duty to civilize, and an industrial economy that needs markets and investments.',
    trapIdx: 0,
    trap: 'A puts a kind face on Ferry’s words. A "duty to civilize the inferior races" is a belief in superiority, not humanitarian concern. Name what the words actually say.'
  };

  W['u6_6.2_2'] = {
    type: 'bestillustrates',
    hq: 'most directly illustrates which aspect',
    hs: ['Any new occupation of territory on the coasts of Africa must be notified to the signatory powers', 'a power claiming territory must demonstrate actual governance'],
    src: [
      { tag: 'WHO', since: 'the General Act was signed by European powers and the United States', therefore: 'it reflects what they wanted' },
      { tag: 'WHEN', since: 'it is 1885, during the Scramble for Africa', therefore: 'it sets rules for claiming land' },
      { tag: 'WHAT', since: 'it is an official agreement', therefore: 'it shows who was at the table, and who was not' }
    ],
    read: ['European powers setting rules for claiming African land', 'African kings setting borders to protect their own kingdoms', 'The United States settling a war between France and Britain'],
    plain: ['Who made the rules, and who was left out?', 'How did battles fought in Africa decide its borders?', 'What part did the United States play in these talks?'],
    meaning: 'European powers told each other how to claim African coasts and land. No Africans signed it.',
    trapIdx: 1,
    trap: 'B gets the key fact wrong: no African rulers took part. A source that only lists "signatory powers" from Europe is telling you who decided Africa’s future.'
  };
  /* ============ UNIT 7 ============ */
  W['u7_7.2_4'] = {
    type: 'causation',
    hq: 'would prove to be',
    hs: ['there must inevitably break out in the defeated country a social revolution', 'War with Germany will create exceptionally favorable conditions for such agitations'],
    src: [
      { tag: 'WHO', since: 'Durnovo was Russia’s interior minister, in charge of the police', therefore: 'he knew how much unrest already existed' },
      { tag: 'TO WHOM', since: 'he wrote to Tsar Nicholas II', therefore: 'he is warning the tsar privately' },
      { tag: 'WHEN', since: 'it is February 1914, months before the war', therefore: 'it is a prediction you can check against what happened' }
    ],
    read: ['A Russian official warning the tsar that war could bring revolution', 'A German general urging the kaiser to attack Russia as fast as he can', 'A Russian revolutionary calling on the workers to welcome a coming war'],
    plain: ['Did the war cause revolution in Russia?', 'Did the war end up making both sides more democratic?', 'Did only the side that won the war have a revolution?'],
    meaning: 'Check the prediction against what happened: the war brought huge losses and hunger to Russia, and revolution came in 1917.',
    trapIdx: 1,
    trap: 'B sounds right because Germany had a revolution in 1918 too. But both countries lost, so "regardless of which side won" was never tested. D is the part of his prediction that history clearly proved.'
  };

  W['u7_7.4_7'] = {
    type: 'causation',
    hq: 'most strongly influenced by',
    look: 'Stalin says Russia was beaten "because of her backwardness," calls this "the jungle law of capitalism," and speaks to the leaders of "Socialist Industry."',
    src: [
      { tag: 'WHO', since: 'Stalin led the Soviet Union', therefore: 'he speaks for the Communist Party' },
      { tag: 'TO WHOM', since: 'he spoke to managers of socialist industry', therefore: 'he is pushing them to industrialize faster' },
      { tag: 'WHEN', since: 'it is 1931, during the first Five-Year Plan', therefore: 'the state is forcing rapid industrial growth' }
    ],
    read: ['The Soviet leader pushing managers to build industry fast', 'A Russian tsar remembering wars his country lost to its enemies', 'A Western banker warning that Russia is falling behind'],
    plain: ['Which ideology shapes this speech?', 'Which policy let Hitler take land without a fight?', 'Which hidden deals divided Europe before 1914?'],
    meaning: 'He attacks "the jungle law of capitalism" and talks to "Socialist Industry." The speech comes from communist ideas.',
    trapIdx: 1,
    trap: 'B, fascism, was also a strong-state ideology of the 1930s, so it can look similar. But Stalin attacks capitalism and speaks for socialist industry. That is communism, not fascism.'
  };

  W['u7_7.3_7'] = {
    type: 'context',
    hq: 'best understood as evidence of',
    hs: ['over 800,000 women have entered industry in Britain alone, replacing men who have gone to fight', 'Women are driving ambulances, working in munitions factories'],
    src: [
      { tag: 'WHO', since: 'these are British wartime publications', therefore: 'they present women’s work as patriotic' },
      { tag: 'WHEN', since: 'it is 1916 to 1917, the middle of World War I', therefore: 'millions of men were at the front' },
      { tag: 'WHAT', since: 'it links women’s work to the vote', therefore: 'it is also making a political argument' }
    ],
    read: ['British wartime writing praising women’s war work', 'A German report on women soldiers fighting at the front', 'A factory owner complaining that women cannot do men’s jobs'],
    plain: ['Why did the war pull women into factories and services?', 'Did governments already believe in equal pay for women?', 'Did new machines make physical strength unnecessary at work?'],
    meaning: 'Men "have gone to fight," so women replaced them. Total war needed every worker a nation had.',
    trapIdx: 0,
    trap: 'A reverses cause and effect. Women entered these jobs because the war needed them, not because governments already believed in equality. The source even says the vote was "long denied."'
  };

  W['u7_7.6_8'] = {
    type: 'context',
    hq: 'best understood in the context of',
    look: 'Hitler marches off with Czechoslovakia "in the bag" while Mussolini says, "I planned it that way and Adolf carried it out!"',
    src: [
      { tag: 'WHO', since: 'Berryman was an American cartoonist', therefore: 'he is mocking the dictators for American readers' },
      { tag: 'WHEN', since: 'it is 1938', therefore: 'look for an event that year involving Hitler, Mussolini and Czechoslovakia' },
      { tag: 'WHAT', since: 'it is a cartoon', therefore: 'it exaggerates to make fun of Mussolini’s claim' }
    ],
    read: ['An American cartoon mocking Mussolini and Hitler', 'A German cartoon celebrating an alliance with Japan', 'An Italian cartoon praising Mussolini as Europe’s peacemaker'],
    plain: ['Which 1938 deal gave Hitler Czech land?', 'Which treaty took Russia out of World War I in 1918?', 'Which pact joined Germany, Italy and Japan in 1940?'],
    meaning: 'Czechoslovakia "in the bag" in 1938 is the Munich Agreement, which Mussolini helped arrange.',
    trapIdx: 1,
    trap: 'B joins Hitler and Mussolini too, but the Tripartite Pact came in 1940 and added Japan. The year and Czechoslovakia in the bag point to Munich.'
  };

  W['u7_7.6_1'] = {
    type: 'purpose',
    hq: 'The point of view Hitler expresses in the first three paragraphs',
    hs: ['That colonial empire was taken away from us unreasonably', 'But who asked them?'],
    src: [
      { tag: 'WHO', since: 'Hitler was the Nazi leader of Germany', therefore: 'he wants to stir up German anger at the postwar order' },
      { tag: 'TO WHOM', since: 'he spoke to the Reichstag', therefore: 'the speech was public, aimed at Germans and the world' },
      { tag: 'WHEN', since: 'it is 1937', therefore: 'Germany was rearming and making demands' }
    ],
    read: ['A German leader angry that Germany lost its colonies', 'A colonial official reporting on how Germany ran its colonies', 'A League of Nations report on former German colonies in Africa'],
    plain: ['Which treaty took Germany’s colonies?', 'How did colonial independence movements start a war?', 'How did radio help start the Second World War?'],
    meaning: 'The colonies were "taken away from us." The Treaty of Versailles did that, and Nazi anger over Versailles helped lead to war.',
    trapIdx: 1,
    trap: 'B was a real tension of the 1930s, but nothing in these paragraphs is about communism. Hitler’s complaint is about lost colonies, which points straight to Versailles.'
  };

  W['u7_7.2_2'] = {
    type: 'purpose',
    hq: "the newspaper's national origin",
    hs: ['Not only will its whole commercial fleet be confiscated', 'Germany is reduced to economic bondage'],
    src: [
      { tag: 'WHO', since: 'it is a Dutch newspaper', therefore: 'it speaks from a country that stayed neutral in the war' },
      { tag: 'WHEN', since: 'it is June 1919, as the treaty was signed', therefore: 'it is reacting to the terms right away' },
      { tag: 'WHAT', since: 'it stresses Germany’s trade and economy', therefore: 'look for an economic reason the Dutch cared' }
    ],
    read: ['A neutral Dutch paper calling the treaty too harsh on Germany', 'A French newspaper cheering that Germany must now pay for the war', 'A German newspaper calling on all Germans to refuse the treaty'],
    plain: ['Why would a Dutch paper worry about Germany’s economy?', 'Did the Dutch also rule an overseas empire like Germany did?', 'Was the Netherlands also a constitutional monarchy back then?'],
    meaning: 'The editorial worries most about Germany’s trade and fleet. The neutral Dutch had made money trading with Germany, so a ruined Germany hurt them too.',
    trapIdx: 2,
    trap: 'C notices the fleet in the passage and matches it to the Dutch fleet. But owning ships does not explain the view. The Dutch had profited from trade with Germany during the war; that is why they cared about its economy.'
  };

  W['u7_7.3_3'] = {
    type: 'similar',
    hq: 'the difference between the British and German approaches',
    hs: ['Exaggerated atrocity stories appeared in the press', 'Important losses or battles often went completely unmentioned'],
    src: [
      { tag: 'WHO', since: 'both are historians writing long after the war', therefore: 'they compare methods using evidence' },
      { tag: 'WHAT', since: 'Source 1 is about Germany and Source 2 is about Britain', therefore: 'the question is how each government shaped what people knew' }
    ],
    read: ['Two historians comparing wartime news control', 'Two soldiers writing letters home from opposite sides of the front', 'Two newspapers from 1914 reporting the start of the war'],
    plain: ['How did Germany add stories while Britain cut news?', 'Which country let its press print freely during the war?', 'Whose wartime propaganda worked better on the public?'],
    meaning: 'Both governments managed what people knew, by different methods. Germany pushed out exaggerated stories; Britain kept bad news quiet.',
    trapIdx: 2,
    trap: 'C goes too far on both sides. Britain did not allow full freedom of the press; Source 2 says news was controlled "at the source." Compare the methods the sources describe, and watch for words like "all" and "full."'
  };

  W['u7_7.7_1'] = {
    type: 'similar',
    hq: 'differences between the Nazi program of genocide and other acts of genocide',
    hs: ['smoke emanates from a chimney in a crematorium that connects to a gas chamber'],
    src: [
      { tag: 'WHO', since: 'Olere was a Jewish prisoner forced to work at Auschwitz', therefore: 'he painted what he saw himself' },
      { tag: 'WHEN', since: 'he painted it around 1950, after the war', therefore: 'it is a survivor’s memory' },
      { tag: 'WHAT', since: 'it shows a crematorium connected to a gas chamber', therefore: 'it shows how the killing was organized' }
    ],
    read: ['A survivor’s painting of what he saw inside Auschwitz', 'A Nazi official’s photograph showing a prison camp at work', 'A wartime newspaper drawing of soldiers at the front'],
    plain: ['What made the Nazi killing different in method?', 'Which ethnic and religious groups did the Nazis target?', 'Did the Nazis try to hide their crimes from the world?'],
    meaning: 'Gas chambers connected to crematoria are factory methods applied to murder. That is what set the Holocaust apart in scale.',
    trapIdx: 1,
    trap: 'B is true of the Nazis, but it is also true of other genocides, like the Armenian Genocide. The question asks for a difference. Pick what the painting shows that others did not have: industrial killing.'
  };

  W['u7_7.3_1'] = {
    type: 'bestillustrates',
    hq: 'Watson uses the Berlin newspaper quote to support the claim that',
    hs: ['it did not want this war', 'it will not allow the soil of the Fatherland to be overrun'],
    src: [
      { tag: 'WHO', since: 'Watson is a British historian writing in 2008', therefore: 'he is analyzing German propaganda from the outside' },
      { tag: 'WHAT', since: 'he quotes a Berlin newspaper', therefore: 'he is using a primary source as evidence for his claim' }
    ],
    read: ['A historian using a newspaper to explain German propaganda', 'A German soldier describing why he joined the army in 1914', 'A Russian general describing his invasion of eastern Germany'],
    plain: ['How did the newspaper make the war sound like self-defense?', 'Did Russian troops really commit attacks on German civilians?', 'How much of eastern Germany did Russian troops occupy?'],
    meaning: 'Germany "did not want this war" but will not let Russians overrun the Fatherland. That frames the war as defending the homeland.',
    trapIdx: 1,
    trap: 'B confuses the claim with the propaganda. Watson says the atrocity stories were "exaggerated"; he is not claiming they were true. Read what the historian uses the quote to prove.'
  };

  W['u7_7.8_7'] = {
    type: 'bestillustrates',
    hq: 'is best seen as evidence for',
    look: 'Young soldiers with rifles march under a huge "1917," and the caption calls on young men and women to defend the "Motherland" won by their fathers.',
    src: [
      { tag: 'WHAT', since: 'it is a Soviet poster', therefore: 'it is government propaganda' },
      { tag: 'WHEN', since: 'it is from the World War II era', therefore: 'it is meant to rally people against the German invasion' },
      { tag: 'TO WHOM', since: 'it speaks to "young men and women"', therefore: 'it is recruiting the next generation to fight' }
    ],
    read: ['A Soviet poster calling young people to defend the Motherland', 'A Soviet poster celebrating a record harvest on a collective farm', 'A Soviet poster warning about American spies in the Cold War'],
    plain: ['How did the Soviet state rally people for World War II?', 'Why did the Soviets grow hostile to Americans after 1945?', 'Did Russians regret their country leaving World War I?'],
    meaning: 'Soldiers, the "Motherland," and the pride of 1917: the poster uses patriotism to get young people to fight in World War II.',
    trapIdx: 2,
    trap: 'C grabs the big "1917" on the poster. But the poster uses 1917 as a proud memory of the Revolution, not as regret. Ask what the poster wants viewers to do: defend the country now.'
  };
  /* ============ UNIT 8 ============ */
  W['u8_8.1_1'] = {
    type: 'causation',
    hq: 'most directly contributed to',
    hs: ['an iron curtain has descended across the Continent', 'a very high and in many cases increasing measure of control from Moscow'],
    src: [
      { tag: 'WHO', since: 'Churchill was Britain’s wartime leader', therefore: 'Americans listened when he warned about the Soviets' },
      { tag: 'WHERE', since: 'he spoke in Missouri, with President Truman there', therefore: 'he wanted the United States to act' },
      { tag: 'WHEN', since: 'it is March 1946, right after World War II', therefore: 'the wartime alliance with the Soviets was breaking down' }
    ],
    read: ['A British leader warning about Soviet control of Europe', 'A Soviet leader promising free elections across Eastern Europe', 'An American general calling for all the troops to come home'],
    plain: ['What did a Europe split in two lead to?', 'Why did the U.S. shrink its army after 1945?', 'How did the Soviets help rebuild Western Europe?'],
    meaning: 'A line divides Europe, with Moscow controlling the east. Two sides facing off led to rival military alliances: NATO and the Warsaw Pact.',
    trapIdx: 3,
    trap: 'D is a real Cold War event, but Churchill’s speech is about Europe. Mao won in China because of a civil war there. A cause and its effect should be about the same place and the same problem.'
  };

  W['u8_8.5_14'] = {
    type: 'causation',
    hq: 'most strongly influenced by',
    look: 'Fanon says "the colonial world is a world cut in two" and contrasts "the capitalist countries," where teachers "separate the exploited from those in power," with colonies run by force.',
    src: [
      { tag: 'WHO', since: 'Fanon was a psychiatrist from Martinique who joined Algeria’s fight for independence', therefore: 'he writes as a revolutionary' },
      { tag: 'WHEN', since: 'it is 1961, during the Algerian War', therefore: 'decolonization was at its peak' },
      { tag: 'WHAT', since: 'it is a book of political theory', therefore: 'look at the ideas he uses to explain colonialism' }
    ],
    read: ['A revolutionary explaining colonialism as exploitation', 'A French colonial official defending French rule in Algeria', 'A historian describing how India won its independence peacefully'],
    plain: ['Which theory of exploiters and exploited does Fanon use?', 'What goal was Fanon trying to achieve for colonized people?', 'Which idea ranked the races of the world by strength?'],
    meaning: 'Society "cut in two" between "the exploited" and "those in power," with capitalism in the picture: that is Marxist class analysis, applied to colonies.',
    trapIdx: 1,
    trap: 'B, anticolonialism, is what Fanon argues for, so it feels right. But the question asks what shaped his interpretation, his lens. The language of exploited versus exploiters and capitalism comes from Marxism.'
  };

  W['u8_8.2_7'] = {
    type: 'context',
    hq: 'in the wake of',
    look: 'Khrushchev protests "the deliberate violation of the Soviet Union’s national frontiers by American planes," and Eisenhower defends "the distasteful necessity of espionage activities."',
    src: [
      { tag: 'WHO', since: 'these are the Soviet and American leaders', therefore: 'each one blames the other' },
      { tag: 'WHEN', since: 'both are dated May 16, 1960, at a summit', therefore: 'something had just happened that blew up the meeting' },
      { tag: 'WHAT', since: 'both statements mention spying', therefore: 'the incident involves espionage' }
    ],
    read: ['Two Cold War leaders arguing after a spying incident', 'Two allies agreeing to cut back their nuclear weapons in 1960', 'Two leaders signing the treaty that ended the war in Korea'],
    plain: ['What spying incident had just happened in 1960?', 'Where did the Soviet spies get caught inside America?', 'When did the Soviets openly threaten a nuclear war?'],
    meaning: '"American planes" crossing Soviet frontiers plus "espionage": the Soviets had shot down an American U-2 spy plane.',
    trapIdx: 0,
    trap: 'A has spying, but backward: the spying here was American, over Soviet land. Read whose planes Khrushchev is complaining about.'
  };

  W['u8_8.5_13'] = {
    type: 'context',
    hq: 'best understood in the context of',
    look: 'Fanon describes colonies where "the policeman and the soldier" keep the native in line "by means of rifle butts and napalm."',
    src: [
      { tag: 'WHO', since: 'Fanon was a revolutionary in Algeria’s war for independence', therefore: 'he describes colonial rule from the side of the colonized' },
      { tag: 'WHEN', since: 'it is 1961', therefore: 'European empires were still fighting to keep colonies in Africa and Asia' },
      { tag: 'WHAT', since: 'he contrasts colonies with "the capitalist countries"', therefore: 'he is describing colonial rule as it still existed in his time' }
    ],
    read: ['A revolutionary describing how colonial rule is kept by force', 'A Paris police chief describing how his officers keep order in the city', 'A diplomat describing the rising tension between the two superpowers'],
    plain: ['What ongoing pattern does rule by "pure force" belong to?', 'Why couldn’t colonial officials speak the local languages?', 'How did the Cold War shape what happened in the colonies?'],
    meaning: 'Police and soldiers holding people down with rifles and napalm is colonial rule. In 1961, empires were still trying to hold on to their colonies.',
    trapIdx: 1,
    trap: 'B reads "language" literally. Fanon means officials communicate through force, not that they cannot speak the local language. Read figurative words in context.'
  };

  W['u8_8.6_7'] = {
    type: 'purpose',
    hq: 'why the author references the United States',
    hs: ['the Founding Fathers saw beyond the petty wranglings of the separate states and created a Union', 'This is our chance. We must act now.'],
    src: [
      { tag: 'WHO', since: 'Nkrumah was the first leader of independent Ghana', therefore: 'he wants a united Africa' },
      { tag: 'WHEN', since: 'it is 1961, as many African nations became independent', therefore: 'it is the moment to decide how they will be organized' },
      { tag: 'WHAT', since: 'it is a statement of African ideology', therefore: 'it argues for Pan-African unity' }
    ],
    read: ['Ghana’s leader arguing for African states to unite as one', 'An American president praising Africa’s newly independent nations', 'A colonial governor warning Africans against forming any union'],
    plain: ['Why point to states that once united into one country?', 'Why does Nkrumah want to attack America as an imperial power?', 'Why does he think it is already too late for Africa?'],
    meaning: 'Separate states joined into one union once before. Nkrumah uses that to show Africa’s union can be done.',
    trapIdx: 0,
    trap: 'A assumes any mention of the U.S. in 1961 must be a criticism. Nkrumah praises the Founding Fathers. Read the tone of the reference, not just who it is about.'
  };

  W['u8_8.7_9'] = {
    type: 'purpose',
    hq: 'is intended to do which of the following',
    look: 'Mandela says the African National Congress "has spent half a century fighting against racialism" and calls its struggle "a truly national one."',
    src: [
      { tag: 'WHO', since: 'Mandela was an ANC leader', therefore: 'he speaks for the movement' },
      { tag: 'WHEN', since: 'it is 1964, at his trial', therefore: 'he is explaining his cause in public' },
      { tag: 'WHAT', since: 'he describes the ANC’s fifty-year history', therefore: 'he is placing his own fight inside a longer one' }
    ],
    read: ['An ANC leader explaining his long struggle for equal rights', 'A South African judge defending the country’s apartheid laws', 'A foreign leader offering support to South Africa'],
    plain: ['Why mention the ANC’s fifty years of struggle?', 'Is he presenting the view of the people he opposes?', 'Is he defending the way things are?'],
    meaning: '"Half a century" of fighting shows this is not a new or sudden cause. It gives his struggle a history.',
    trapIdx: 3,
    trap: 'D sounds supportive, but Mandela talks about the ANC inside South Africa, not about other nations. The detail about fifty years points to history, not to other countries.'
  };

  W['u8_8.5_10'] = {
    type: 'similar',
    hq: 'most similar to',
    look: 'The anthem praises Pakistan as a "citadel of faith" under the "Flag of the Crescent and Star." Pakistan was created in 1947 as a separate Muslim state when British India was partitioned.',
    src: [
      { tag: 'WHAT', since: 'it is Pakistan’s national anthem', therefore: 'it presents the nation as defined by Islam' },
      { tag: 'WHEN', since: 'it was approved in 1954, soon after partition', therefore: 'it reflects a new state split off from India by religion' }
    ],
    read: ['A national anthem for a new state founded on a shared faith', 'A treaty dividing all of India between two rival European powers', 'A British law granting India self-rule as a dominion'],
    plain: ['Where else was a British territory split by religion?', 'Which alliance joined two partner countries during the war?', 'How did France rule its colonies in Asia?'],
    meaning: 'India and Pakistan split a British territory along religious lines in 1947. Palestine was divided between Jews and Muslims the same way.',
    trapIdx: 1,
    trap: 'B is also from the start of the Cold War, so the timing feels right. But Soviet control of Poland was not a division by religion. Match the method (splitting a land by faith), not the date.'
  };

  W['u8_8.4_9'] = {
    type: 'similar',
    hq: 'different from the Soviet Union’s Five-Year Plan',
    look: 'Farmers, workers, soldiers and children rush forward with a tractor and even a rocket, under the slogan "Brave the wind and the waves." The poster promises a huge leap ahead.',
    src: [
      { tag: 'WHO', since: 'it is a Chinese government poster', therefore: 'it shows the goals the state wanted, not the results' },
      { tag: 'WHEN', since: 'it is 1958, the start of the Great Leap Forward', therefore: 'it promises rapid industrial growth' }
    ],
    read: ['A Chinese poster urging everyone to leap ahead together', 'A Soviet poster celebrating the opening of a finished steel mill', 'A Chinese photograph showing the damage from a crop failure'],
    plain: ['Which plan actually succeeded at building industry?', 'Which plan ignored farming completely in favor of industry?', 'Which of the two plans used collective farms to grow food?'],
    meaning: 'Both plans used collective farms and both caused famine. The difference is the result: Stalin’s plans built heavy industry, and the Great Leap failed to.',
    trapIdx: 2,
    trap: 'C gets the facts wrong: Stalin used collectivization too. When a question asks for a difference, cross off any choice that describes something both sides did.'
  };

  W['u8_8.2_4'] = {
    type: 'bestillustrates',
    hq: 'most directly reflects which Cold War doctrine',
    hs: ['seeks to impose its absolute authority over the rest of the world', 'a defeat of free institutions anywhere is a defeat everywhere'],
    src: [
      { tag: 'WHO', since: 'NSC-68 came from the U.S. National Security Council', therefore: 'it is secret government planning' },
      { tag: 'WHEN', since: 'it is April 1950, after the Soviet atomic bomb and China going communist', therefore: 'American leaders felt threatened' },
      { tag: 'WHAT', since: 'it calls Soviet communism a "fanatic faith"', therefore: 'it treats the Cold War as a total struggle' }
    ],
    read: ['A secret U.S. plan treating every Soviet gain as a threat', 'A Soviet plan to spread revolution to Western Europe', 'An American speech calling for friendlier ties with Moscow'],
    plain: ['Which idea says one loss to communism leads to more?', 'Which idea said nuclear weapons would replace armies?', 'Which idea tried to ease Cold War tensions?'],
    meaning: 'A loss "anywhere is a defeat everywhere": if one country falls to communism, others follow. That is the domino theory.',
    trapIdx: 3,
    trap: 'D is a real Cold War doctrine, but it covered only the Middle East. The source says "anywhere," which means the whole world. Match the scope of the source.'
  };

  W['u8_8.4_10'] = {
    type: 'bestillustrates',
    hq: 'best reflect which of the following ambitions',
    look: 'Peasants, workers, soldiers and children all charge forward together, with a tractor, tools, and a rocket overhead.',
    src: [
      { tag: 'WHO', since: 'it is a government poster from the People’s Republic of China', therefore: 'it shows what the Communist Party wanted people to do' },
      { tag: 'WHEN', since: 'it is 1958, the Great Leap Forward', therefore: 'the goal was to industrialize very fast' },
      { tag: 'WHAT', since: 'everyone in the poster is moving together', therefore: 'the message is that all citizens take part' }
    ],
    read: ['A poster calling on all Chinese citizens to build the nation', 'A Chinese poster warning against contact with foreigners', 'A Chinese poster honoring Red Guards in the Cultural Revolution'],
    plain: ['Who does the poster want to take part?', 'Why did China cut off non-communist countries?', 'How did China plan to make friends with Taiwan?'],
    meaning: 'Everyone, from farmers to children, rushes forward with machines. The goal: the whole population working to industrialize China.',
    trapIdx: 2,
    trap: 'C is another Mao campaign, but the Cultural Revolution started in 1966, eight years later. Run the time period test: a 1958 poster belongs to the Great Leap Forward.'
  };
  /* ============ UNIT 9 ============ */
  W['u9_9.1_1'] = {
    type: 'causation',
    hq: 'resulted most directly from',
    hs: ["The green revolution has won a temporary success in man's war against hunger"],
    src: [
      { tag: 'WHO', since: 'Borlaug was the crop scientist who bred new high-yield wheat', therefore: 'he knows exactly what caused the green revolution' },
      { tag: 'WHEN', since: 'it is 1970', therefore: 'crop yields in Mexico, India and Pakistan had jumped' },
      { tag: 'WHAT', since: 'it is a Nobel Peace Prize lecture', therefore: 'he links food to peace and warns about the future' }
    ],
    read: ['A crop scientist warning his win over hunger may not last', 'A Soviet official praising collective farms for ending famine', 'An organic farmer arguing against using any chemical fertilizers'],
    plain: ['What made the green revolution happen?', 'How did collective farms raise harvests?', 'Why did small farmers get their land back?'],
    meaning: 'Borlaug was a crop scientist. The green revolution came from science: high-yield seeds, fertilizer and irrigation.',
    trapIdx: 3,
    trap: 'D is the opposite: the green revolution depended on synthetic fertilizers and pesticides. Know what the term means before you match a cause to it.'
  };

  W['u9_9.5_1'] = {
    type: 'causation',
    hq: 'most directly a response to',
    hs: ['All human beings are born free and equal in dignity and rights', 'without distinction of any kind, such as race, colour, sex, language, religion'],
    src: [
      { tag: 'WHO', since: 'it came from the United Nations General Assembly', therefore: 'it speaks for many nations at once' },
      { tag: 'WHEN', since: 'it is 1948, three years after World War II', therefore: 'the horrors of the war were fresh' },
      { tag: 'WHAT', since: 'it is a declaration of rights', therefore: 'it sets out what no government should take away' }
    ],
    read: ['A UN statement of rights that belong to every person', 'A treaty ending World War II and setting new borders', 'A national constitution for a newly independent state'],
    plain: ['What made the world write this in 1948?', 'What happened when the Soviet Union fell?', 'How did the Green Revolution end famine?'],
    meaning: 'Rights for everyone "without distinction of any kind," written in 1948: an answer to the Holocaust and the mass killing of World War II.',
    trapIdx: 1,
    trap: 'B came more than forty years later, in 1991. Check the date on the source line first: 1948 points straight back to World War II.'
  };

  W['u9_9.3_2'] = {
    type: 'context',
    hq: 'best understood in the context of',
    hs: ['Holding the increase in the global average temperature to well below 2°C above pre-industrial levels'],
    src: [
      { tag: 'WHO', since: 'it was adopted by 196 parties', therefore: 'almost every country agreed to it' },
      { tag: 'WHEN', since: 'it is 2015', therefore: 'decades of climate science had built up' },
      { tag: 'WHAT', since: 'it sets limits on warming', therefore: 'it assumes human activity is causing the warming' }
    ],
    read: ['A global agreement to limit warming caused by human activity', 'A scientific report blaming volcanic eruptions for climate change', 'A treaty forcing an end to industrial growth in developing nations'],
    plain: ['What did scientists agree was warming the planet by 2015?', 'Why did developing countries all stop industrializing at once?', 'When did the world stop burning so much coal and oil after 1945?'],
    meaning: 'Limiting warming "above pre-industrial levels" means industry and fossil fuels caused it. By 2015 scientists broadly agreed on that.',
    trapIdx: 2,
    trap: 'C gets the trend backward. Fossil fuel use rose sharply after 1945, which is why an agreement was needed. If fuel use had been falling, there would be nothing to limit.'
  };

  W['u9_9.5_4'] = {
    type: 'context',
    hq: 'best understood in the context of',
    hs: ['a sense of dissatisfaction, a yearning that women suffered'],
    src: [
      { tag: 'WHO', since: 'Friedan was an American writer', therefore: 'she speaks to American women' },
      { tag: 'WHEN', since: 'it is 1963', therefore: 'it comes at the start of a new wave of women’s activism' },
      { tag: 'WHAT', since: 'it names a problem "buried, unspoken"', therefore: 'she wants women to speak up and change things' }
    ],
    read: ['A writer naming women’s unhappiness with limited roles', 'A government poster asking women to join the armed forces', 'An advertiser describing what postwar housewives want to buy'],
    plain: ['What movement did women’s dissatisfaction feed into?', 'Why did all American women leave paid work after 1945?', 'Why did Americans buy less after the war?'],
    meaning: 'A "sense of dissatisfaction" among women, put into words in 1963. It fed the movements demanding more rights and opportunities for women.',
    trapIdx: 0,
    trap: 'A overstates. Many women did leave factory jobs after 1945, but women never stopped working for pay. A choice that says something "ended" needs to be checked against what really happened.'
  };

  W['u9_9.7_0'] = {
    type: 'purpose',
    hq: 'The timing of the declaration',
    hs: ['to avoid being absorbed by North American imperialism', 'ENOUGH IS ENOUGH'],
    src: [
      { tag: 'WHO', since: 'the EZLN was a movement of indigenous peasants in Chiapas', therefore: 'it speaks for poor farmers' },
      { tag: 'WHEN', since: 'it was issued January 1, 1994, the day NAFTA took effect', therefore: 'the date itself is part of the message' },
      { tag: 'WHAT', since: 'it is a declaration of rebellion', therefore: 'it announces resistance' }
    ],
    read: ['Indigenous rebels rising up on the day NAFTA began', 'A Mexican president celebrating a new trade deal with the U.S.', 'A Catholic bishop calling for peace in southern Mexico'],
    plain: ['What does the NAFTA date say they feared?', 'Why did the Zapatistas fear Soviet influence in Mexico?', 'Why did the Zapatistas dislike films from India?'],
    meaning: 'The date is the clue. Rebelling the day NAFTA took effect says free trade was the threat, to poor indigenous farmers.',
    trapIdx: 0,
    trap: 'A fits an older idea of Latin American rebels, but the Soviet Union was gone by 1994. The question is about timing: the day NAFTA started.'
  };

  W['u9_9.5_2'] = {
    type: 'purpose',
    hq: 'most likely used documents like this one to',
    hs: ['without distinction of any kind, such as race, colour, sex'],
    src: [
      { tag: 'WHO', since: 'it came from the United Nations', therefore: 'it carried the weight of the world’s nations' },
      { tag: 'WHEN', since: 'it is 1948, before most colonies were free and before many civil rights laws', therefore: 'many governments still denied these rights' },
      { tag: 'WHAT', since: 'it promises rights to everyone', therefore: 'people denied rights could point to it' }
    ],
    read: ['A UN statement promising rights to all people equally', 'A colonial charter explaining who may rule overseas lands', 'A wealthy nation’s law limiting rights to its own citizens'],
    plain: ['How could people denied rights use this?', 'How did empires justify taking more colonies?', 'How did South Africa defend apartheid?'],
    meaning: 'A promise of rights "without distinction of any kind" is a tool for anyone being denied rights: women, minorities, colonized peoples.',
    trapIdx: 3,
    trap: 'D turns the document upside down. A promise of equal rights regardless of race was used against apartheid, not for it. Ask who would want to point to this document.'
  };

  W['u9_9.4_2'] = {
    type: 'similar',
    hq: 'most consistent with which economic policies',
    hs: ['there is no such thing as society', 'people look to themselves first'],
    src: [
      { tag: 'WHO', since: 'Thatcher was the British prime minister', therefore: 'her words match her government’s policies' },
      { tag: 'WHEN', since: 'it is 1987', therefore: 'this is the era of free-market reform in Britain and the United States' },
      { tag: 'WHAT', since: 'she stresses individuals over government', therefore: 'look for policies that shrink the state' }
    ],
    read: ['A British leader saying individuals matter more than government', 'A Labour politician calling for more industries to be run by the state', 'A Soviet planner explaining the targets of a new five-year plan'],
    plain: ['Which policies match her view?', 'Which policies grew the welfare state?', 'Which policies set state production targets?'],
    meaning: 'Less government, more individual responsibility. That matches free-market reforms: cutting spending and selling off state industries.',
    trapIdx: 1,
    trap: 'B is the exact opposite of her view: nationalization and a bigger welfare state mean more government. Match the direction of the source, not just the topic of economics.'
  };

  W['u9_9.5_9'] = {
    type: 'similar',
    hq: 'do both Source 1 AND Source 2 identify as obstacles',
    look: 'NOW wants "a fully equal partnership of the sexes." The Gay Liberation Front attacks "institutionalized sexism" and the "gender-role system."',
    src: [
      { tag: 'WHO', since: 'Source 1 is NOW and Source 2 is the Gay Liberation Front', therefore: 'both are activist groups of the 1960s and 70s' },
      { tag: 'WHEN', since: 'they are from 1966 and 1971', therefore: 'both belong to the rights movements of that era' },
      { tag: 'WHAT', since: 'the question asks what "both" identify', therefore: 'the answer must appear in both sources' }
    ],
    read: ['Two activist groups stating their goals for equality', 'Two government reports describing the status of American women', 'Two newspapers reporting on the same protest march in 1971'],
    plain: ['What problem do both groups say stands in their way?', 'Which group talks about male chauvinism and privilege?', 'Which of the groups wants to form new alliances?'],
    meaning: 'Find the obstacle in both. NOW wants equality of the sexes; the Gay Liberation Front fights sexism and gender roles. Both name inequality between the sexes.',
    trapIdx: 2,
    trap: 'C appears only in Source 2. A "both sources" question means checking every choice against each source; a phrase from just one of them is a trap.'
  };

  W['u9_9.2_1'] = {
    type: 'bestillustrates',
    hq: 'best illustrates',
    hs: ['the world and all its peoples have won freedom from smallpox'],
    src: [
      { tag: 'WHO', since: 'it came from the World Health Organization', therefore: 'it is an international body speaking for many nations' },
      { tag: 'WHEN', since: 'it is 1980', therefore: 'it marks the end of a long global vaccination campaign' },
      { tag: 'WHAT', since: 'it declares smallpox gone', therefore: 'it celebrates a medical victory' }
    ],
    read: ['A world health body announcing smallpox is gone', 'A doctor warning that a new smallpox epidemic is spreading', 'A government closing its borders to stop a disease'],
    plain: ['What larger trend does wiping out smallpox belong to?', 'Did international groups get weaker after World War II?', 'Did all diseases of poverty disappear?'],
    meaning: 'A global health organization ended a disease worldwide. That fits a bigger trend: medicine and global institutions raising life expectancy.',
    trapIdx: 1,
    trap: 'B goes too far. Ending one disease is not ending "all diseases linked to poverty"; malaria and tuberculosis remained. Watch for "all" and other words that stretch the source.'
  };

  W['u9_9.4_1'] = {
    type: 'bestillustrates',
    hq: 'best reflects which approach to economic policy',
    hs: ["It doesn't matter whether a cat is black or white, as long as it catches mice"],
    src: [
      { tag: 'WHO', since: 'Deng was a Chinese Communist Party leader', therefore: 'he kept the party in power' },
      { tag: 'WHEN', since: 'he repeated it after 1978, during his reforms', therefore: 'it explains his new economic direction' },
      { tag: 'WHAT', since: 'it is a saying about results', therefore: 'he cares whether policies work, not whether they are communist' }
    ],
    read: ['A Communist leader saying results matter more than labels', 'A farmer’s proverb about choosing the right cat for a barn', 'A Western banker praising the growth of democracy in China'],
    plain: ['What kind of economic policy cares only about results?', 'Did Deng bring back Mao’s collective farms and old plans?', 'Did Deng end Communist rule?'],
    meaning: 'The cat is the economic system. Capitalist or communist does not matter if it grows the economy, so Deng used market reforms while the party kept power.',
    trapIdx: 1,
    trap: 'B goes a step too far. Deng opened the economy, but the Communist Party kept full political control. Market reforms are not the same as democracy.'
  };

  /* ================================================================
     BATCH 2 (2026-10-21): 10 more per unit, so a wrong answer in
     MCQ Practice offers "Walk me through it" on more questions.
     ================================================================ */

  /* ============ UNIT 1 ============ */
  W['u1_1.1_2'] = {
    type: 'bestillustrates',
    hq: 'most directly supports the claim that the examination system strengthened the Chinese state',
    hs: ['When an old dynasty was replaced by a new, the latter usually undertook an early revival of the examination system practically unchanged'],
    src: [
      { tag: 'WHO', since: 'Miyazaki was a historian writing in 1963', therefore: 'this is a secondary source weighing the exam system’s strengths and weaknesses' },
      { tag: 'WHAT', since: 'the book is called China’s Examination Hell', therefore: 'he knows the exams were brutal, so his praise of the system carries weight' }
    ],
    read: ['A historian weighing what the Chinese exam system did well', 'A Song student complaining that he failed the exams yet again', 'An emperor ordering officials to end the exam system'],
    plain: ['Which line shows rulers found the exams worth keeping?', 'Which line shows poor students could not afford to study?', 'Which line shows the exams were fair for their time?'],
    meaning: 'A claim about strengthening the state needs evidence about the state. Every new dynasty brought the exams back, which shows rulers needed them.',
    trapIdx: 1,
    trap: 'B is a true line from the passage and it sounds positive, but it is about fairness, not about the state getting stronger. Match the evidence to the exact claim in the question.'
  };

  W['u1_1.1_5'] = {
    type: 'causation',
    hq: 'most directly supported which of the following',
    hs: ['two harvests a year became possible in the south', 'The population of China roughly doubled'],
    src: [
      { tag: 'WHO', since: 'it is a secondary source on the Song economy', therefore: 'it explains causes and effects, not one person’s experience' },
      { tag: 'WHAT', since: 'it is about a new kind of rice', therefore: 'the effects will start with food and spread from there' }
    ],
    read: ['A modern summary of how new rice changed Song China', 'A Song farmer’s diary about a bad harvest in the north', 'A merchant’s list of rice prices in a Song market'],
    plain: ['What did more food and people lead to?', 'Why did Chinese cities shrink in the Song era?', 'Why did the Song stop using the Grand Canal?'],
    meaning: 'Two harvests a year means more food, and more food means more people. More people means bigger cities and more workers for making goods.',
    trapIdx: 0,
    trap: 'A gets the direction backward. A doubled population means cities grew, not shrank. Follow the chain the source starts: more rice, more people, more production.'
  };

  W['u1_1.2_1'] = {
    type: 'causation',
    hq: 'primarily because of which of the following',
    hs: ['it seemed at times as if the very venture of Islam was coming to an end'],
    src: [
      { tag: 'WHO', since: 'Crone is a historian of Islam', therefore: 'she describes the political collapse of the caliphate' },
      { tag: 'WHAT', since: 'the passage is about the state falling apart', therefore: 'the question asks what spread Islam without a strong state behind it' }
    ],
    read: ['A historian describing how the Abbasid state broke apart', 'A Sufi teacher describing his long travels to win new converts', 'A caliph ordering his armies to spread Islam by force'],
    plain: ['Who spread Islam once the caliphate could no longer do it?', 'Which army took back the Crusader States from Christians?', 'Which Muslim admiral sailed fleets across the Indian Ocean?'],
    meaning: 'The caliphate is collapsing, yet Islam keeps spreading. Something other than the state must be carrying it: Sufi missionaries traveling with traders.',
    trapIdx: 2,
    trap: 'C sounds like spreading across Afro-Eurasia, and Zheng He was Muslim. But he sailed for the Ming emperor to show Chinese power, not to spread Islam. A true fact about a Muslim is not the same as a cause of Islam spreading.'
  };

  W['u1_1.2_3'] = {
    type: 'causation',
    hq: 'most significant because it',
    hs: ['translate the works of the Greeks, Aristotle, Galen, Euclid, into Arabic', 'adding their own commentaries in mathematics, medicine, and astronomy'],
    src: [
      { tag: 'WHAT', since: 'it describes the Abbasid Golden Age', therefore: 'it shows Baghdad as a center of learning' },
      { tag: 'WHERE', since: 'it is set in Baghdad’s House of Wisdom', therefore: 'scholars from many backgrounds worked together there' }
    ],
    read: ['Scholars in Baghdad translating Greek works', 'A caliph’s order banning Greek ideas from Islamic lands', 'A merchant’s report on the silk trade through Baghdad'],
    plain: ['Why did saving Greek learning matter later?', 'How did translation force Christians to convert?', 'How did scholars end trade with Asia?'],
    meaning: 'Greek books were saved in Arabic and improved with new work. Later, that knowledge reached Europe and helped spark the Renaissance.',
    trapIdx: 3,
    trap: 'D goes too far. Scholars added Greek ideas to Islamic learning; they did not replace Islamic law. A choice that says "replaced" needs proof in the source.'
  };

  W['u1_1.3_1'] = {
    type: 'bestillustrates',
    hq: 'a claim made in the first paragraph',
    hs: ['for the benefit and salvation and happiness of all creatures'],
    src: [
      { tag: 'WHO', since: 'a Buddhist teacher wrote it on the king’s orders', therefore: 'it praises both the faith and the king' },
      { tag: 'WHAT', since: 'it is carved on a statue', therefore: 'it is public, official, and meant to last' },
      { tag: 'WHERE', since: 'it is from Sumatra, around 1350', therefore: 'it shows Buddhism spreading through Southeast Asia' }
    ],
    read: ['A Buddhist inscription praising a king and a holy statue', 'A king’s law ordering all of his subjects to become Buddhist', 'A merchant’s record of jewels taken from rival kings'],
    plain: ['What does paragraph one say the statue does?', 'Does the first paragraph say the king is a bodhisattva?', 'Does the first paragraph say the king is a teacher?'],
    meaning: 'The question limits you to the first paragraph. Its claim: the statue was made for the benefit of "all creatures."',
    trapIdx: 0,
    trap: 'A mixes up two people. The statue is of a bodhisattva; the king only ordered it. Read who did what in the sentence before you match a claim.'
  };

  W['u1_1.3_4'] = {
    type: 'causation',
    hq: 'most directly help explain',
    hs: ['The path to god is open to all, whatever their birth'],
    src: [
      { tag: 'WHAT', since: 'it is a bhakti devotional poem', therefore: 'it is about loving devotion to a god, not rituals or rank' },
      { tag: 'WHERE', since: 'it comes from South Asia', therefore: 'the caste system is the background it is speaking to' }
    ],
    read: ['A poem saying anyone can reach god through love', 'A priest’s rule saying only high castes may worship', 'A king’s order closing temples to traders'],
    plain: ['Why would this appeal to people of low birth?', 'How did this poem make the caste system stronger?', 'Why did people in South Asia reject religion?'],
    meaning: '"Whatever their birth" speaks straight to caste. A faith open to everyone would draw people the caste system held down.',
    trapIdx: 0,
    trap: 'A is the opposite. A poem saying god is open to all, "whatever their birth," pushes against caste, not for it.'
  };

  W['u1_1.4_0'] = {
    type: 'bestillustrates',
    hq: 'most strongly supports the author’s argument about the quality of the highways',
    hs: ['great, splendid highways', 'his heir would build his road larger and broader'],
    src: [
      { tag: 'WHO', since: 'Cieza de León was a Spanish soldier and historian', therefore: 'his praise of an Inca achievement is striking, since he served the conquerors' },
      { tag: 'WHEN', since: 'it is 1553, soon after the conquest', therefore: 'he saw the roads himself' }
    ],
    read: ['A Spanish soldier praising the roads the Inca built', 'An Inca ruler ordering his officials to build a new road to Quito', 'A Spanish king planning a road across Peru'],
    plain: ['Which detail shows the roads were truly impressive?', 'Which detail shows who built the roads?', 'Which detail shows government officials ran the building work?'],
    meaning: 'The argument is about quality. The best evidence describes the roads themselves: very broad, and running across the whole kingdom.',
    trapIdx: 1,
    trap: 'B is true and in the passage, but it is about how the roads were organized, not how good they were. Match the evidence to the argument the question names.'
  };

  W['u1_1.5_3'] = {
    type: 'bestillustrates',
    hq: 'best illustrate',
    hs: ['Chinese porcelain, Persian pottery, and glass beads from South Asia'],
    src: [
      { tag: 'WHAT', since: 'it is a summary of archaeology at Great Zimbabwe', therefore: 'the objects found there are the evidence' },
      { tag: 'WHERE', since: 'Great Zimbabwe is inland in southern Africa', therefore: 'goods from Asia had to come through a trade network' }
    ],
    read: ['A summary of what archaeologists found at Great Zimbabwe', 'A Chinese governor’s report on ruling his lands in southern Africa', 'A European sailor’s log from a trip around Africa'],
    plain: ['How did Asian goods reach an inland African city?', 'Which foreign empire sent governors to rule Great Zimbabwe?', 'Which Persians founded the city?'],
    meaning: 'Porcelain from China and beads from South Asia in southern Africa means trade. It came through the Swahili coast and the Indian Ocean.',
    trapIdx: 0,
    trap: 'A turns trade goods into rule. Owning Chinese porcelain shows contact through trade, not control by China. Ask what the objects actually prove.'
  };

  W['u1_1.6_8'] = {
    type: 'causation',
    hq: 'a long-term consequence of this conflict',
    hs: ['the crown and kingdom of France'],
    src: [
      { tag: 'WHEN', since: 'the treaty is from 1420, in the middle of the Hundred Years’ War', therefore: 'the long-term effects come after the war ended in 1453' },
      { tag: 'WHAT', since: 'the war was fought over who would hold the French crown', therefore: 'look for what happened to the French monarchy' }
    ],
    read: ['A treaty from a long war over the crown of France', 'A trade deal between the merchants of France and England', 'A church ruling on how kings should be chosen'],
    plain: ['How did the long war change the French monarchy?', 'Did both countries move toward stronger parliaments?', 'Did the war weaken the English king for good?'],
    meaning: 'To win, French kings built a standing army and collected regular taxes. That weakened the nobles and made royal power more central.',
    trapIdx: 1,
    trap: 'B fits England, where Parliament grew, but not France, where kings gained power. A choice that is half true is still wrong.'
  };

  W['u1_1.7_4'] = {
    type: 'context',
    hq: 'best explained by',
    hs: ['merchants exchanged gold, ivory, porcelain, silk, and spices across the Indian Ocean'],
    src: [
      { tag: 'WHAT', since: 'it is a short modern summary', therefore: 'the answer is in what both regions have in common' },
      { tag: 'WHEN', since: 'it is the 1300s', therefore: 'the Atlantic trade has not started yet' }
    ],
    read: ['Two regions that grew rich from the same trade', 'A Swahili king’s letter asking China for an alliance', 'A Chinese law banning trade with East Africa'],
    plain: ['What made both regions prosper?', 'Did the Mongols conquer both of these regions?', 'Did both rely on enslaved Atlantic labor?'],
    meaning: 'Both regions traded the same goods across the same ocean. Their wealth came from the growing Indian Ocean trade network.',
    trapIdx: 3,
    trap: 'D is from the wrong era: the Atlantic slave trade began after 1500. Check the date in the source before picking a cause.'
  };

  /* ============ UNIT 2 ============ */
  W['u2_2.1_0'] = {
    type: 'causation',
    hq: 'most directly contributed to',
    hs: ["a paper certificate, called 'flying cash,' that could be redeemed in another city", 'bills of exchange, called sakk'],
    src: [
      { tag: 'WHAT', since: 'it is a summary of commercial practices on the Silk Roads', therefore: 'it is about how merchants moved money' },
      { tag: 'WHERE', since: 'it covers both Song China and Muslim merchants', therefore: 'the same idea worked across the whole network' }
    ],
    read: ['A summary of moving money without coins', 'A Song law banning paper money in Chinese markets', 'A merchant’s complaint about robbers on the Silk Roads'],
    plain: ['What did paper credit do for long-distance trade?', 'Why did merchants stop trading over long distances?', 'Why did China go back to copper coins?'],
    meaning: 'Carrying heavy coins across dangerous routes was risky. Paper credit let merchants move wealth safely, so more trade happened.',
    trapIdx: 1,
    trap: 'B flips the effect. These practices made merchants less afraid of losing money, not more. Follow what the innovation was designed to fix.'
  };

  W['u2_2.2_6'] = {
    type: 'causation',
    hq: 'resulted in which of the following states in Russia',
    hs: ['another the lands of the Rus'],
    src: [
      { tag: 'WHAT', since: 'it describes how the Mongol empire was split among heirs', therefore: 'each piece became its own khanate' },
      { tag: 'WHERE', since: 'it names China, Persia and the lands of the Rus', therefore: 'the question wants the piece that ruled Russia' }
    ],
    read: ['The Mongol empire being split among heirs', 'A Russian prince’s letter asking the khan for peace', 'A Chinese record of the Yuan emperor’s court'],
    plain: ['Which Mongol khanate ruled the Russian lands?', 'Which Mongol state ruled China after the split?', 'Which Mongol state ruled Persia after the split?'],
    meaning: 'Three heirs, three regions. Match the region the question asks about, the lands of the Rus, to the khanate that ruled it: the Golden Horde.',
    trapIdx: 3,
    trap: 'D, the Il-Khanate, is a real Mongol khanate, so it looks right. But it ruled Persia, not Russia. Match the place, not just the people.'
  };

  W['u2_2.2_9'] = {
    type: 'bestillustrates',
    hq: 'evidence of which of the following insights about Kinsay’s occupiers',
    hs: ['for the most part clothe themselves in silk, so vast is the supply of that material'],
    src: [
      { tag: 'WHO', since: 'Marco Polo was a European visitor', therefore: 'he notices how the local people live under their new rulers' },
      { tag: 'WHEN', since: 'it is about 1300, after the Mongols took the city', therefore: 'the "occupiers" are the Mongols' }
    ],
    read: ['A European describing a city under Mongol rule', 'A Mongol law forcing Chinese people to wear Mongol clothing', 'A Song weaver describing how she made silk at home'],
    plain: ['What does local silk say about the rulers?', 'Did the Mongols build new factories in China?', 'Did the Mongols learn to weave silk themselves?'],
    meaning: 'After the conquest, people still wear the silk made in their own district. The Mongols left local customs and production alone.',
    trapIdx: 2,
    trap: 'C invents a detail. The passage never says the Mongols learned to make fabric; it says the locals kept wearing local silk. Stay inside the source.'
  };

  W['u2_2.2_18'] = {
    type: 'bestillustrates',
    hq: 'best be used as evidence for which of the following trends',
    look: 'The invaders take Samarqand, Bukhara and other cities, "destroying, and slaying, and plundering," in less than a year. These were major Silk Road trading cities.',
    src: [
      { tag: 'WHO', since: 'ibn al-Athir was a Muslim historian', therefore: 'he writes about the invasion from the side of the people attacked' },
      { tag: 'WHEN', since: 'it is about 1230, during the Mongol invasions', therefore: 'the invaders from China are the Mongols' }
    ],
    read: ['A Muslim historian describing cities destroyed', 'A Mongol general bragging about spreading his culture', 'A Persian merchant describing new trade routes to China'],
    plain: ['What happens to trade when cities fall?', 'How did conquest spread new cultures?', 'Did the invaders attack religious practice?'],
    meaning: 'Samarqand and Bukhara were trade hubs. Destroying them and killing their people broke the trade that ran through them, at least for a while.',
    trapIdx: 1,
    trap: 'B assumes the invaders targeted religion, but the passage describes cities destroyed and people killed, not faith suppressed. The Mongols in fact tolerated many religions.'
  };

  W['u2_2.3_4'] = {
    type: 'bestillustrates',
    hq: 'best illustrates the development of',
    hs: ['merchants married local women and settled in the port', 'spoke both tongues and worshipped in new ways'],
    src: [
      { tag: 'WHAT', since: 'it describes an Indian Ocean port city', therefore: 'it shows what happened where traders met' },
      { tag: 'WHO', since: 'it follows foreign merchants who stayed', therefore: 'it is about communities that formed far from home' }
    ],
    read: ['Foreign merchants settling in a port city', 'A port governor’s order expelling all foreign merchants', 'A sailor’s log of a short voyage between two ports'],
    plain: ['What do settled foreign merchants create?', 'How did camel caravans manage to cross the Sahara?', 'How did the Mongols divide up their huge empire?'],
    meaning: 'Merchants who settle abroad, marry locally and blend languages form a diaspora community.',
    trapIdx: 1,
    trap: 'B is a trade network, but the wrong one: this is a port on the Indian Ocean, not a desert route. Match the setting in the source.'
  };

  W['u2_2.4_0'] = {
    type: 'bestillustrates',
    hq: 'best illustrates how',
    hs: ['grew rich by taxing the gold and salt carried by merchants across the Sahara'],
    src: [
      { tag: 'WHAT', since: 'it is a summary about Ghana and Mali', therefore: 'it explains where their wealth came from' },
      { tag: 'WHEN', since: 'it covers 800 to 1400', therefore: 'Europeans are not trading in West Africa yet' }
    ],
    read: ['How West African kingdoms grew rich from trade', 'A Mali king’s order ending trade across the Sahara', 'A Portuguese merchant’s report on West African gold'],
    plain: ['How did desert trade help these kingdoms?', 'Did the Sahara stop trade between the regions?', 'Did Europeans run West African trade by then?'],
    meaning: 'Taxing gold and salt crossing the Sahara made the rulers rich, and riches made their states powerful.',
    trapIdx: 0,
    trap: 'A is the opposite of the source. Merchants were carrying goods across the Sahara, so the desert did not cut off trade.'
  };

  W['u2_2.4_1'] = {
    type: 'context',
    hq: 'best explained by',
    hs: ['a center of Islamic scholarship', 'merchants traded manuscripts as well as gold and salt'],
    src: [
      { tag: 'WHAT', since: 'it describes Timbuktu as a place of learning and trade', therefore: 'the two are connected' },
      { tag: 'WHEN', since: 'it is the 1300s', therefore: 'the Portuguese have not reached West Africa yet' }
    ],
    read: ['Timbuktu as a center of learning and trade', 'A Portuguese priest describing a school he founded', 'A Mongol governor’s report on ruling Mali'],
    plain: ['What brought Islamic learning to Timbuktu?', 'Did the Mongols conquer Mali?', 'Did Portuguese missionaries build schools there?'],
    meaning: 'Merchants carried manuscripts along with gold and salt. Islam and its scholarship spread along the trans-Saharan routes.',
    trapIdx: 0,
    trap: 'A names a big conqueror of the era, but the Mongols never reached West Africa. Check whether a choice fits the place before you pick it.'
  };

  W['u2_2.5_0'] = {
    type: 'bestillustrates',
    hq: 'best illustrate',
    hs: ['translated Arabic works of philosophy, mathematics, astronomy, and medicine', 'into Latin for European readers'],
    src: [
      { tag: 'WHERE', since: 'it is set in Toledo, Spain', therefore: 'it is a place where the Christian and Islamic worlds met' },
      { tag: 'WHEN', since: 'it is the 1100s and 1200s', therefore: 'this is before the Renaissance' }
    ],
    read: ['Scholars translating Arabic books for Europe', 'A Spanish king’s order banning Arabic books', 'A monk’s complaint that no one in Europe can read'],
    plain: ['Which way was knowledge moving?', 'Did Christian Europe stop contact with Muslims?', 'Did Buddhist ideas reach Spain this way?'],
    meaning: 'Arabic into Latin, for European readers: knowledge moving from the Islamic world into Europe.',
    trapIdx: 1,
    trap: 'B is the opposite. Translating Arabic books shows close contact between the two worlds, not an end to it.'
  };

  W['u2_2.6_2'] = {
    type: 'causation',
    hq: 'most directly contributed to',
    hs: ['fast-ripening, drought-resistant rice seed'],
    src: [
      { tag: 'WHO', since: 'the Song emperor ordered the seed handed out', therefore: 'the government was trying to grow more food' },
      { tag: 'WHAT', since: 'the rice ripened fast and resisted drought', therefore: 'farmers could grow more each year' }
    ],
    read: ['A summary of a Song emperor handing out new rice seed', 'A farmer’s complaint about a failed harvest in Vietnam', 'A tax record of rice sent to the Song capital'],
    plain: ['What did more rice lead to?', 'Did Chinese trade and money use decline?', 'Did the policy cause the Mongol conquest?'],
    meaning: 'Rice that ripened fast allowed two harvests a year. More food fed more people, so the population grew.',
    trapIdx: 2,
    trap: 'C is a real event, but it came more than 250 years later and had other causes. A cause and its effect should connect directly.'
  };

  W['u2_2.7_1'] = {
    type: 'similar',
    hq: 'which similarity between the two trade networks',
    hs: ['Muslim merchants crossing the Sahara helped spread Islam', 'Muslim merchants sailing the Indian Ocean helped spread Islam'],
    src: [
      { tag: 'WHAT', since: 'it compares the Sahara routes and the Indian Ocean routes', therefore: 'the answer is what they have in common' },
      { tag: 'WHO', since: 'both sentences are about Muslim merchants', therefore: 'the shared method is merchants carrying their faith' }
    ],
    read: ['How Islam spread along two trade routes', 'A sultan’s order sending soldiers to convert West Africa', 'A Chinese official’s report on taxing ocean trade'],
    plain: ['What did both networks carry besides goods?', 'Did the Chinese government tax both networks directly?', 'Did European ships and merchants run both networks?'],
    meaning: 'Both sentences follow the same pattern: merchants on a trade route spread Islam. The networks carried religion along with goods.',
    trapIdx: 2,
    trap: 'C brings in Europeans, who are not in the source at all. Find the pattern both sentences share, then pick the choice that names it.'
  };

  /* ============ UNIT 3 ============ */
  W['u3_3.1_11'] = {
    type: 'causation',
    hq: 'a consequence of the event portrayed in the image',
    hs: ['a campaign by Suleiman I against the city of Esztergom'],
    src: [
      { tag: 'WHAT', since: 'the painting shows Ottoman cannons and cavalry attacking a city in Hungary', therefore: 'it shows Ottoman armies pushing into Central Europe' },
      { tag: 'WHEN', since: 'the siege was in 1543, under Suleiman', therefore: 'this is the height of the Ottoman Empire' }
    ],
    read: ['A painting of Suleiman’s army attacking a city in Hungary', 'A painting of Hungarian knights driving the Turks out of Europe', 'A painting of a peace treaty signed between two emperors'],
    plain: ['What did this conquest mean for Ottoman power?', 'How did Eastern Europe split between two religions?', 'Why did Suleiman give up his throne after a loss?'],
    meaning: 'Under Suleiman, Ottoman armies took Hungarian cities like Esztergom. That push into Central Europe was the high point of Ottoman power.',
    trapIdx: 2,
    trap: 'C invents a defeat. Suleiman won at Esztergom and ruled until 1566. Check whether a choice matches what the image shows: Ottoman cannons winning.'
  };

  W['u3_3.1_15'] = {
    type: 'causation',
    hq: 'why Constantinople was a desirable city to control',
    look: 'The fresco shows a walled city on the water, surrounded by the sea. Constantinople sits on the strait where Europe meets Asia.',
    src: [
      { tag: 'WHAT', since: 'it is a Byzantine fresco of the Turkish attack on Constantinople', therefore: 'it shows the city at the moment it fell in 1453' },
      { tag: 'WHERE', since: 'the city sits on the water between two continents', therefore: 'whoever held it controlled land and sea routes' }
    ],
    read: ['A Byzantine painting of the Turks attacking Constantinople', 'An Ottoman map of trade routes across the Indian Ocean', 'A pope’s letter calling Constantinople the center of Christianity'],
    plain: ['What made the city’s location so valuable?', 'Was it the one center of all of Christianity?', 'Did it lead Indian Ocean trade?'],
    meaning: 'Constantinople guards the strait between Europe and Asia and between the Black Sea and the Mediterranean. That brings trade and military strength.',
    trapIdx: 1,
    trap: 'B overstates. Constantinople led Orthodox Christianity, but Rome led the West, so it did not hold influence over "all of Europe." Watch for "all."'
  };

  W['u3_3.2_3'] = {
    type: 'context',
    hq: 'best understood in the context of',
    hs: ['forcibly enlisting boys from the empire’s Christian subjects in the Balkans'],
    src: [
      { tag: 'WHO', since: 'it comes from a manuscript celebrating Sultan Suleiman', therefore: 'it presents the devshirme as a strength of the sultan’s rule' },
      { tag: 'WHAT', since: 'it shows boys taken to serve the army and government', therefore: 'it is about building a loyal state service' }
    ],
    read: ['Officials taking boys for state service', 'A Christian painting of Balkan families defeating the Turks', 'An Ottoman map showing where new mosques were built'],
    plain: ['Why want soldiers loyal only to him?', 'Was this about growing the economy?', 'Was this about stopping religious conflict?'],
    meaning: 'Boys taken from their families owed everything to the sultan. Soldiers and officials like that helped rulers centralize power.',
    trapIdx: 1,
    trap: 'B sounds peaceful, but forcibly taking Christian boys did not prevent religious conflict. Ask what the practice gave the ruler: people loyal only to him.'
  };

  W['u3_3.2_7'] = {
    type: 'causation',
    hq: 'most responsible for',
    hs: ['built in the European Baroque style to serve as Russia’s new western-facing capital'],
    src: [
      { tag: 'WHO', since: 'Peter the Great founded the city in 1703', therefore: 'it reflects his goals for Russia' },
      { tag: 'WHAT', since: 'it shows European-style palaces and avenues', therefore: 'Russia was copying Western Europe' }
    ],
    read: ['A Russian capital built in European style', 'An image of a Russian village after a harvest', 'An image of an Orthodox monastery from the 1400s'],
    plain: ['What process made a Russian city look European?', 'Did the spread of disease shape how the city looks?', 'Did voting shape the city?'],
    meaning: 'A capital built in European style, facing west, by Peter the Great: that is Westernization.',
    trapIdx: 3,
    trap: 'D sounds modern and Western, but Peter ruled as an absolute tsar. Westernizing the look of Russia did not make it a democracy.'
  };

  W['u3_3.2_9'] = {
    type: 'bestillustrates',
    hq: 'could be used as evidence for which of the following conclusions',
    look: 'Bernier says there are "sundry nations which the Mogul is not full master of," many "retaining their particular sovereigns" who pay little or no tribute.',
    src: [
      { tag: 'WHO', since: 'Bernier was a French visitor to India', therefore: 'he describes the empire as an outsider' },
      { tag: 'WHEN', since: 'it is from 1655, at the height of the Mughal Empire', therefore: 'he describes how a strong empire actually worked' }
    ],
    read: ['A visitor describing loose Mughal rule', 'A Mughal emperor’s order demanding full tribute from all', 'A Pathan leader’s letter swearing loyalty to the emperor'],
    plain: ['How did the Mughals keep order?', 'Did the Mughals control everyone fully?', 'Did Hindus avoid paying tribute?'],
    meaning: 'Many local rulers kept their power and paid little. The Mughals kept order by leaving minority groups mostly alone.',
    trapIdx: 0,
    trap: 'A is the opposite. Bernier says the Mughal "is not full master" of many peoples. Watch for "total" in a choice.'
  };

  W['u3_3.3_1'] = {
    type: 'causation',
    hq: 'Sufis contributed most directly to',
    hs: ['The common people flock to the Sufis'],
    src: [
      { tag: 'WHO', since: 'Çelebi was an Ottoman official and scholar', therefore: 'he describes a religious argument he watched' },
      { tag: 'WHAT', since: 'it shows Sufis popular with ordinary people', therefore: 'their appeal could win new believers' }
    ],
    read: ['A scholar describing a fight over Sufi rituals', 'A Sufi leader’s rule banning music in worship', 'A sultan’s order expelling Sufis from his empire'],
    plain: ['What did Sufis do beyond Ottoman lands?', 'Did Sufis lead the science exchanges of the era?', 'Did Sufis spread Arabic in theology?'],
    meaning: 'Sufis drew common people with music and personal faith. Outside the empire, that appeal spread Islam to new places like Southeast Asia.',
    trapIdx: 0,
    trap: 'A sounds like a real exchange of the era, but Sufis are known for spreading faith, not science. Tie the answer to what the source says Sufis were good at: winning people over.'
  };

  W['u3_3.3_7'] = {
    type: 'causation',
    hq: 'most strongly influenced by Protestant desires to',
    hs: ['because Christ taught that Christians shall not resist evil with violence or take revenge', 'as not only Holy Scripture, but their own canon law teaches and requires'],
    src: [
      { tag: 'WHO', since: 'Luther started the Protestant Reformation', therefore: 'his views come from his reading of the Bible' },
      { tag: 'TO WHOM', since: 'he addressed a German prince', therefore: 'he is advising a ruler on war and the clergy' },
      { tag: 'WHEN', since: 'it is 1528, early in the Reformation', therefore: 'he is still building his case against the Church' }
    ],
    read: ['A reformer arguing from the Bible', 'A pope calling Christians to fight the Turks', 'A German prince planning a war against the Ottomans'],
    plain: ['What goal shapes this argument?', 'Did Luther want war with other Christians?', 'Did Luther want a united Germany?'],
    meaning: 'Luther keeps pointing to what "Christ taught" and "Holy Scripture." He wants Christian life to follow the Bible more closely.',
    trapIdx: 2,
    trap: 'C is a real Protestant idea, predestination, but it belongs to Calvin and is not in this passage. Match the idea the source actually uses: following scripture.'
  };

  W['u3_3.3_8'] = {
    type: 'context',
    hq: 'in the context of Protestant claims that the Catholic Church',
    hs: ['The popes and bishops called for war against the Turks in the name of Christ', 'I would encourage my bishops and priests to stay at home and mind the duties of their office'],
    src: [
      { tag: 'WHO', since: 'Luther had been banned by the pope', therefore: 'he is hostile to the Church’s leaders' },
      { tag: 'WHAT', since: 'he criticizes the clergy for joining wars', therefore: 'he thinks they chase worldly power instead of their duties' }
    ],
    read: ['A reformer criticizing the clergy', 'A bishop praising the clergy for leading armies', 'A pope explaining why he banned Luther'],
    plain: ['What does this say about the Church?', 'Did the Church fail to back the Crusades?', 'Was the Church too Humanist?'],
    meaning: 'Popes calling for war and priests marching with armies: Luther says the Church has been corrupted by worldly power.',
    trapIdx: 0,
    trap: 'A gets it backward. Luther complains the Church pushed war too much, not too little. Read which direction the criticism runs.'
  };

  W['u3_3.3_12'] = {
    type: 'causation',
    hq: 'led to an easing of tensions between Muslims and Hindus',
    look: 'Bernier describes a huge empire full of "sundry nations" with their own rulers. Ruling that many Hindu subjects needed policies that kept peace.',
    src: [
      { tag: 'WHO', since: 'Bernier was a French visitor', therefore: 'he describes Mughal rule from outside' },
      { tag: 'WHEN', since: 'the question covers the mid-1500s to mid-1600s', therefore: 'that is Akbar’s reign and the decades after' }
    ],
    read: ['A visitor describing Mughal peoples', 'A Mughal law ordering all Hindus to convert', 'A British trader’s report on the East India Company'],
    plain: ['Which policy eased life for Hindus?', 'Did Akbar’s death ease tensions?', 'Did Aurangzeb’s reforms ease tensions?'],
    meaning: 'Akbar ended the jizya, the tax on non-Muslims. Taking away a tax that singled out Hindus eased tension.',
    trapIdx: 3,
    trap: 'D names a Mughal ruler, but Aurangzeb brought the jizya back and increased tension. Know which emperor did what before you pick a name.'
  };

  W['u3_3.2_16'] = {
    type: 'context',
    hq: 'best understood as which of the following',
    look: 'Busbecq calls the Janissaries "the infantry of the royal guard," 12,000 strong, stationed across the empire.',
    src: [
      { tag: 'WHO', since: 'Busbecq was a Flemish ambassador to the Ottomans', therefore: 'he is an outsider describing their army' },
      { tag: 'WHEN', since: 'it is about 1554, under Suleiman', therefore: 'the Janissaries were at their strongest' }
    ],
    read: ['An ambassador describing elite soldiers', 'An Ottoman soldier describing life in his village', 'A Janissary leader planning to overthrow the sultan'],
    plain: ['Who were the Janissaries?', 'Were they part-time volunteers?', 'Were they hired foreign fighters?'],
    meaning: 'The royal guard infantry came from the devshirme: Christian boys taken, converted and trained as the sultan’s elite army.',
    trapIdx: 2,
    trap: 'C describes a later event: Janissaries did overthrow sultans, but not in 1554. Match the description in the source, not their later history.'
  };

  /* ============ UNIT 4 ============ */
  W['u4_4.1_4'] = {
    type: 'causation',
    hq: 'best explains why',
    hs: ['We agreed to leave the coast of Peru and sail for Japan'],
    src: [
      { tag: 'WHO', since: 'Adams was an English navigator', therefore: 'he knows how ships actually crossed the oceans' },
      { tag: 'WHEN', since: 'it is 1611', therefore: 'Pacific crossings from the Americas to Asia were already a regular route' }
    ],
    read: ['An English sailor describing his voyage from Peru to Japan', 'A Spanish governor’s order closing his American ports to all English ships', 'A Japanese official’s report on foreign ships arriving in his port'],
    plain: ['Why start an Asia voyage from the Americas?', 'Did a treaty force English ships to use Spanish ports?', 'Could English ships not cross the Atlantic Ocean at all?'],
    meaning: 'Winds and currents in the Pacific carried ships west from the Americas to Asia. Sailing from Peru used them.',
    trapIdx: 1,
    trap: 'B is impossible on its face: Adams’s ship had already crossed the Atlantic to reach Peru. Test a choice against what the source tells you happened.'
  };

  W['u4_4.2_3'] = {
    type: 'context',
    hq: 'best explains the conflicts referred to in the passage',
    hs: ['He demanded also to know about the conflicts between Spain and Portugal and England'],
    src: [
      { tag: 'WHO', since: 'Adams was an English merchant in Japan', therefore: 'he is one of several Europeans trying to trade there' },
      { tag: 'WHAT', since: 'he says the English seek to "trade with all countries"', therefore: 'trade is what the Europeans are competing over' }
    ],
    read: ['An English merchant describing his arrival in Japan', 'A Portuguese priest complaining about English pirates near China', 'A Mughal official describing a war with Portugal over India'],
    plain: ['What were Europeans competing for in Asia?', 'Were European powers fighting over land in Africa?', 'Was the Mughal Empire expanding into these seas?'],
    meaning: 'Spain, Portugal and England were all sailing to Asia to trade. Their conflicts came from competing for that trade.',
    trapIdx: 0,
    trap: 'A is a real era of European expansion, but the conflict here is about trade in Asia, where Adams is. Keep the answer in the source’s setting.'
  };

  W['u4_4.3_2'] = {
    type: 'bestillustrates',
    hq: 'pieces of evidence does the author use',
    hs: ['Before the coming of the Spaniards', 'they were ignorant of the word and the commandments of God'],
    src: [
      { tag: 'WHO', since: 'the author was Maya, writing after the conquest', therefore: 'he describes the change from inside his own society' },
      { tag: 'WHEN', since: 'it covers 1519 and after', therefore: 'disease and the Spanish arrived in the same years' }
    ],
    read: ['A Maya writer recording disease, conquest and conversion', 'A Spanish friar bragging about how many Maya he had baptized', 'A Maya king’s law ordering his people to welcome the Spanish'],
    plain: ['What evidence shows Maya beliefs changed?', 'Did the friars speak the Maya language well?', 'Did the Spanish kill the king’s eldest son?'],
    meaning: 'A cultural change needs evidence about culture. The author says the Maya did not know Christian teaching before, then were converted.',
    trapIdx: 2,
    trap: 'C is about money, which the passage never mentions. Find the line in the source that matches the claim, here a change in religion.'
  };

  W['u4_4.4_8'] = {
    type: 'purpose',
    hq: 'the primary motivation of the Spanish conquest',
    look: 'Cortés describes temples, priests and idols in close detail for King Charles V. Ask what the conquistadors most wanted from Mexico.',
    src: [
      { tag: 'WHO', since: 'Cortés led the conquest and wrote to his king', therefore: 'he wants Charles V to keep backing him' },
      { tag: 'WHEN', since: 'it is about 1520', therefore: 'Spain had sailed west looking for the wealth of Asia' }
    ],
    read: ['A conquistador describing Tenochtitlan to his king', 'An Aztec ruler welcoming Spanish traders to his capital', 'A Spanish farmer describing land he planned to plant'],
    plain: ['What did the Spanish most want from the conquest?', 'Did the Spanish want new trade routes in South America?', 'Did the Spanish want farmland to settle for good?'],
    meaning: 'Religion mattered, but the main driver was wealth: gold, and the spices and riches Spain first sailed west to find.',
    trapIdx: 0,
    trap: 'A is a real motive, and the passage is full of temples and idols. But the conquistadors came mainly for riches. A motive that appears in the source is not always the primary one.'
  };

  W['u4_4.5_3'] = {
    type: 'causation',
    hq: 'failed to fully achieve their goals',
    hs: ['defended the honor of their god'],
    src: [
      { tag: 'WHO', since: 'Estete was a Spanish soldier', therefore: 'he presents the destruction of the shrine as a victory' },
      { tag: 'WHEN', since: 'it is 1532, but the question asks about 1550 to 1700', therefore: 'look for what happened to Andean religion over time' }
    ],
    read: ['A soldier describing a shrine torn down', 'An Inca priest describing how the Spanish gods won him over', 'A bishop reporting that all old beliefs had vanished by 1600'],
    plain: ['What shows the old beliefs survived?', 'How did Andean silver build a global economy?', 'How did American foods spread across Eurasia?'],
    meaning: 'The goal was to wipe out the old religion. Syncretism, Catholic and indigenous beliefs blended, shows the old faith survived inside the new one.',
    trapIdx: 3,
    trap: 'D is a real long-term change in Spanish America, but it is about labor, not religion. The question asks what shows the conversion effort fell short.'
  };

  W['u4_4.5_9'] = {
    type: 'causation',
    hq: 'most likely a response to',
    look: 'Rodney says the imperialist system drained "African wealth" and blames "the capitalists of Western Europe." Think of what Europe took from Africa from 1450 to 1750.',
    src: [
      { tag: 'WHO', since: 'Rodney was a Guyanese historian writing in 1974', therefore: 'he argues from the side of formerly colonized peoples' },
      { tag: 'WHAT', since: 'the book is How Europe Underdeveloped Africa', therefore: 'he blames Europe for draining Africa' }
    ],
    read: ['A historian blaming Europe for draining African wealth', 'A European trader praising the profits of African trade', 'An African king inviting Europeans to colonize inland'],
    plain: ['What drained Africa of people then?', 'Did Europeans colonize the African interior by 1750?', 'Did Christianity spread across Sub-Saharan Africa?'],
    meaning: 'From 1450 to 1750, the biggest drain on Africa was the Atlantic slave trade, which carried millions of Africans to the Americas.',
    trapIdx: 0,
    trap: 'A fits Rodney’s anger at imperialism, but Europeans did not colonize Africa’s interior until the late 1800s. Check the dates in the question.'
  };

  W['u4_4.6_3'] = {
    type: 'context',
    hq: 'evidence of reactions against which of the following global trends',
    hs: ['makes a treaty with the rebellious Blacks'],
    src: [
      { tag: 'WHO', since: 'the treaty is between British officials and Maroons', therefore: 'the British had to bargain with people who escaped slavery' },
      { tag: 'WHERE', since: 'it is in Jamaica, a sugar colony', therefore: 'slavery and plantations are the background' }
    ],
    read: ['A treaty Britain made with escaped slaves', 'A trade deal between Britain and Spain over Jamaica', 'A plantation owner’s list of slaves he bought in 1739'],
    plain: ['What were the Maroons rebelling against?', 'Did epidemic disease spread to Jamaica?', 'Were rival states fighting over trade routes?'],
    meaning: 'The Maroons were people who escaped plantation slavery. Their fight was a reaction to the Atlantic slave trade and the plantation system.',
    trapIdx: 2,
    trap: 'C is a real trend of the era, but this treaty is between Britain and rebels, not between rival states. Ask who is fighting whom in the source.'
  };

  W['u4_4.6_4'] = {
    type: 'bestillustrates',
    hq: 'Article 4 of the treaty is best explained as evidence of how states',
    hs: ['Captain Quao and his people shall destroy all other rebellious Blacks in any part of Jamaica'],
    src: [
      { tag: 'WHO', since: 'British officials wrote the terms', therefore: 'the treaty serves British goals' },
      { tag: 'WHAT', since: 'Article 4 pays the Maroons to hunt other rebels', therefore: 'Britain turns one rebel group against the rest' }
    ],
    read: ['A treaty paying one rebel group to stop all the others', 'A treaty freeing every enslaved person in Jamaica', 'A treaty giving the Maroons seats in the colony’s government'],
    plain: ['How did Britain use one group to stop other rebels?', 'Did Britain give the Maroons military titles to win loyalty?', 'Did Britain promote marriage between groups to end conflict?'],
    meaning: 'Britain made a deal with one group of rebels and hired them to stop the others. That is co-opting a local group to suppress resistance.',
    trapIdx: 1,
    trap: 'B notices that Quao is a "Captain," but the treaty does not grant titles. Article 4 is about hunting other rebels. Read the article the question names.'
  };

  W['u4_4.7_3'] = {
    type: 'context',
    hq: 'best understood as evidence of which of the following developments',
    hs: ['neither mulattoes nor mestizos can serve in those positions', 'Mestizos and mulattoes make up most of the membership'],
    src: [
      { tag: 'WHO', since: 'creoles and mixed-race members give two sides of a dispute', therefore: 'each group is defending its place' },
      { tag: 'WHERE', since: 'it is in New Spain around 1640', therefore: 'it reflects the colonial casta system of ranking by ancestry' }
    ],
    read: ['A dispute over who may lead a brotherhood', 'A Spanish law setting fixed prices for sugar in Mexico', 'A priest describing a new religious festival he created'],
    plain: ['What does this leadership fight show?', 'Was this a fight between landowners and peasants?', 'Did a new mixed religion appear in this town?'],
    meaning: 'Mestizos and mulattoes push back against creoles who want to shut them out. New mixed identities were challenging the old ranking.',
    trapIdx: 1,
    trap: 'B is tempting because it is a religious brotherhood, but the dispute is about who may vote and lead, not about beliefs. Find what the two sides are actually arguing over.'
  };

  W['u4_4.8_3'] = {
    type: 'bestillustrates',
    hq: 'best demonstrates which of the following',
    hs: ['the Christ Child standing on a sailing ship'],
    src: [
      { tag: 'WHERE', since: 'it was made in Portuguese Goa, in India', therefore: 'Christian art is appearing far from Europe' },
      { tag: 'WHAT', since: 'it joins Christ to a ship', therefore: 'it links faith with ocean voyages' }
    ],
    read: ['A carving joining Christ with a ship', 'A Hindu carving of a god protecting Indian traders at sea', 'A Portuguese map of the sea routes to India around Africa'],
    plain: ['What does this art show about voyages?', 'Did the Church say all religions should be protected?', 'Did a new blended religion form in Goa?'],
    meaning: 'Christian art made in India, showing Christ on a ship: ocean voyages carried an existing religion to new places.',
    trapIdx: 2,
    trap: 'C sounds like cultural mixing, but the plaque shows Christianity itself, not a new blended faith. Match what the image shows, not a bigger idea it brings to mind.'
  };

  /* ============ UNIT 5 ============ */
  W['u5_5.1_3'] = {
    type: 'causation',
    hq: 'most directly influenced the arguments',
    hs: ['Men are born and remain free and equal in rights', 'the writings of the philosophes have spread over the surface of the globe'],
    src: [
      { tag: 'WHO', since: 'both authors are French, writing in 1792 and 1793', therefore: 'they write in the middle of the French Revolution' },
      { tag: 'WHERE', since: 'both are about Saint-Domingue', therefore: 'they apply revolutionary ideas to slavery in the colony' }
    ],
    read: ['Two French writers applying revolutionary ideals to slavery', 'Two plantation owners defending slavery to the National Assembly', 'Two royal officials urging the king to keep colonial rule unchanged'],
    plain: ['Whose ideas about equality do both use?', 'Which economic thinkers wanted colonies for trade?', 'Which thinkers backed kings with total power?'],
    meaning: '"Born free and equal in rights" and "the writings of the philosophes" point to one source: Enlightenment thinkers.',
    trapIdx: 2,
    trap: 'C, laissez-faire, is an Enlightenment-era economic idea, so it sits close. But both sources argue about rights and equality, not markets. Match the kind of argument the authors make.'
  };

  W['u5_5.1_5'] = {
    type: 'purpose',
    hq: 'Kersaint is NOT calling for the unconditional and immediate abolition of slavery',
    hs: ['The other Black slaves may enjoy a conditional liberty', 'This Black individual is free'],
    src: [
      { tag: 'WHO', since: 'Kersaint was a nobleman and a deputy in the Assembly', therefore: 'his own interests may shape how far he will go' },
      { tag: 'WHAT', since: 'he wants freedom with conditions, while Saint-Maurice wants it now', therefore: 'the question asks what explains the difference' }
    ],
    read: ['A deputy proposing partial freedom', 'A formerly enslaved man demanding freedom for all at once', 'A French king ordering every slave freed without delay'],
    plain: ['What personal stake would make Kersaint go slowly?', 'Did he want Africans to migrate to the colonies freely?', 'Did his navy service against Britain shape his view?'],
    meaning: 'Point of view: Kersaint owned plantations in the Caribbean. Freeing slaves at once would cost him, so he proposes conditions.',
    trapIdx: 3,
    trap: 'D is a true fact that makes him sound like a reformer, but it does not explain why he holds back on slavery. Pick the fact that explains the specific difference the question asks about.'
  };

  W['u5_5.2_1'] = {
    type: 'context',
    hq: 'best understood in the context of',
    hs: ['Liberals emphasized education, particularly women’s education'],
    src: [
      { tag: 'WHO', since: 'Bayly is a British historian writing in 2012', therefore: 'he is explaining nineteenth-century Indian thinkers' },
      { tag: 'WHEN', since: 'it describes the 1800s', therefore: 'women’s rights movements were growing around the world' }
    ],
    read: ['A historian explaining Indian liberal ideas', 'A British governor describing new factories built in India', 'An Indian woman’s diary describing her work in a cotton mill'],
    plain: ['What movement did this belong to?', 'How did factories change women’s work in India?', 'Did Indian men migrating overseas change gender roles?'],
    meaning: 'Indian liberals pushed for women’s education in the same century that women’s rights and suffrage movements grew worldwide.',
    trapIdx: 0,
    trap: 'A sounds like a cause of changing gender roles, but the passage is about liberal ideas and education, not factories. Pick the context that matches the source’s topic.'
  };

  W['u5_5.2_3'] = {
    type: 'causation',
    hq: 'most clearly influenced by',
    hs: ['a desire to re-empower India’s people with personal freedom', 'They demanded a free press, freedom of assembly and public comment'],
    src: [
      { tag: 'WHO', since: 'Bayly is a historian of Indian political thought', therefore: 'he traces where these ideas came from' },
      { tag: 'WHAT', since: 'it lists freedoms like a free press and representation', therefore: 'these are the rights the Enlightenment named' }
    ],
    read: ['A historian describing what Indian liberals demanded', 'A British official describing laws he passed in India', 'An Indian priest describing ancient Hindu teachings'],
    plain: ['Where did these ideas come from?', 'Did these ideas come from India’s ancient religious texts?', 'Did these ideas come from Marx’s theory of class struggle?'],
    meaning: 'Personal freedom, a free press, freedom of assembly, representation: these are Enlightenment ideas of natural rights.',
    trapIdx: 1,
    trap: 'B, Marxism, is about workers versus owners. The passage lists individual rights and accepts property rights, which points to the Enlightenment, not Marx.'
  };

  W['u5_5.2_14'] = {
    type: 'causation',
    hq: 'most directly responsible for the creation of these constitutions',
    look: 'Source 1 unites Venezuela and New Granada as a new republic; Source 2 declares Brazil "a free and independent nation." Both are new states writing their first laws.',
    src: [
      { tag: 'WHO', since: 'Source 1 comes from a congress called by Simón Bolívar', therefore: 'creole leaders of the independence wars wrote it' },
      { tag: 'WHEN', since: 'they are from 1819 and 1824', therefore: 'they come right after the Latin American wars of independence' }
    ],
    read: ['Two constitutions written by newly independent Latin American states', 'Two colonial charters written by Spain and Portugal for their colonies', 'Two peace treaties ending wars between Brazil and Colombia'],
    plain: ['Who led the break from Spain and Portugal?', 'Did a pan-American movement unite the whole hemisphere?', 'Did Spain and Portugal prepare their colonies for freedom?'],
    meaning: 'Creole elites like Bolívar led revolts against Spain and Portugal, won independence, and wrote these constitutions.',
    trapIdx: 3,
    trap: 'D sounds orderly, but Spain fought to keep its colonies. Independence was won by revolt, not handed over. Know who was trying to keep power.'
  };

  W['u5_5.3_8'] = {
    type: 'bestillustrates',
    hq: 'A historian would most likely use this passage to illustrate',
    look: 'The workers say the Scribbling-Machines "have thrown thousands of your petitioners out of employ," and one machine does the work of "twenty men."',
    src: [
      { tag: 'WHO', since: 'the petition comes from woolen workers', therefore: 'it shows how the machines looked to the people they replaced' },
      { tag: 'WHEN', since: 'it is 1786', therefore: 'this is the early Industrial Revolution' }
    ],
    read: ['Cloth workers protesting machines that took their jobs', 'Merchants praising the new machines for saving money', 'Members of Parliament reporting on children in factories'],
    plain: ['What does this show about early machines?', 'How did machines make life better for English society?', 'Why did Parliament start looking into child labor?'],
    meaning: 'A petition against textile machines in 1786 shows the early Industrial Revolution hitting the cloth industry and its workers.',
    trapIdx: 1,
    trap: 'B is the opposite point of view. The petition is a complaint about automation, not praise for it. Ask whose voice the source carries.'
  };

  W['u5_5.4_4'] = {
    type: 'purpose',
    hq: 'an attempt to appeal to',
    hs: ['the lofty principles of the Qur’an and the rules of the Shari’a were always perfectly preserved'],
    src: [
      { tag: 'WHO', since: 'the decree came from reformers in the Ottoman government', therefore: 'they needed support for big changes' },
      { tag: 'WHAT', since: 'it announces new laws but praises the Shari’a', therefore: 'it wraps modern reform in religious language' }
    ],
    read: ['A decree framing reform in religious terms', 'A religious scholar’s ruling against all new laws', 'A sultan’s order closing the empire to European trade'],
    plain: ['Who would religious language reassure about reform?', 'Which soldiers wanted the Janissaries disbanded?', 'Which merchants wanted a freer economy in the empire?'],
    meaning: 'Praising the Shari’a reassures the Sunni religious elite, who feared that modern reforms would weaken Islam and their own power.',
    trapIdx: 1,
    trap: 'B names a real group that gained from reform, but Christian and Jewish merchants would not be won over by praise of Islamic law. Ask who the religious wording is aimed at.'
  };

  W['u5_5.4_7'] = {
    type: 'causation',
    hq: 'As an effect of the increased industrialization',
    look: 'Coal production climbs from almost nothing in 1875 to about 13,000 thousand tons by 1905, and steamships jump to about 800. Japan is industrializing fast.',
    src: [
      { tag: 'WHAT', since: 'both charts show coal and steamships rising sharply', therefore: 'Japan was building a modern industrial economy' },
      { tag: 'WHEN', since: 'they cover the 1870s to 1905', therefore: 'this is the Meiji era of rapid modernization' }
    ],
    read: ['Two charts showing Japan’s rapid industrial growth', 'Two charts showing Japan’s rice harvests falling', 'Two charts comparing Japan’s trade with China and Korea'],
    plain: ['What old class lost its role as Japan modernized?', 'Did Japan grow aggressive toward the United States?', 'Did Japan’s imperial traditions grow weaker?'],
    meaning: 'Modernizing Japan built a conscript army along Western lines, which ended the samurai as a warrior class.',
    trapIdx: 0,
    trap: 'A is from the wrong time: conflict with the United States came decades later. Run the time period test against the dates on the charts.'
  };

  W['u5_5.7_0'] = {
    type: 'causation',
    hq: 'most directly supported which economic policy',
    hs: ['from their regard to their own interest'],
    src: [
      { tag: 'WHO', since: 'Adam Smith was a Scottish economist', therefore: 'he is writing economic theory' },
      { tag: 'WHEN', since: 'it is 1776', therefore: 'he is arguing against mercantilism and heavy government control' }
    ],
    read: ['An economist praising self-interest', 'A king ordering bakers to sell bread at fixed prices', 'A socialist calling for state control of farms'],
    plain: ['Which policy lets markets run freely?', 'Should the state own railroads and big industries?', 'Should the government set the price of bread?'],
    meaning: 'If people serving their own interest feed everyone, the government should mostly stay out of markets. That is laissez-faire.',
    trapIdx: 3,
    trap: 'D picks up the baker from the passage, but price controls are the opposite of Smith’s idea. A choice that reuses a word from the source can still be wrong.'
  };

  W['u5_5.8_6'] = {
    type: 'causation',
    hq: 'in reaction to which of the following issues',
    look: 'Bismarck says the worker is "not sure that he will always have work," fears illness and old age, and is "completely helpless" if he falls into poverty, worst "in large cities."',
    src: [
      { tag: 'WHO', since: 'Bismarck was Germany’s chancellor', therefore: 'he is explaining a government policy' },
      { tag: 'WHEN', since: 'it is 1884', therefore: 'Germany was industrializing fast and socialism was growing' }
    ],
    read: ['A leader describing workers’ insecurity', 'A factory owner praising long hours for child workers', 'A merchant complaining about taxes on German imports'],
    plain: ['What problem is Bismarck answering?', 'Was he reacting to people accepting child labor?', 'Was he reacting to criticism of trade tariffs?'],
    meaning: 'Workers who can lose their jobs, fall ill or grow old with nothing: these are problems of industrial capitalism, which his welfare laws answered.',
    trapIdx: 0,
    trap: 'A is a real problem of the era, but Bismarck never mentions children. Match the specific worries in the source: work, health, old age.'
  };

  /* ============ UNIT 6 ============ */
  W['u6_6.1_0'] = {
    type: 'bestillustrates',
    hq: 'best illustrates',
    hs: ['we are the finest race in the world'],
    src: [
      { tag: 'WHO', since: 'Rhodes was a British businessman and colonial politician in Africa', therefore: 'he profited from empire and wanted it to grow' },
      { tag: 'WHEN', since: 'it is 1877', therefore: 'Social Darwinist ideas about race were spreading' }
    ],
    read: ['A British empire builder claiming his race is the finest', 'A British merchant arguing against taking more colonies', 'An African chief asking Britain to protect his kingdom’s freedom'],
    plain: ['How does Rhodes use race to argue for empire?', 'Did British business leaders oppose taking colonies?', 'Did Rhodes want Africans to govern themselves?'],
    meaning: '"The finest race," so the more land it holds, the better for everyone: a racial idea used to justify expanding the empire.',
    trapIdx: 2,
    trap: 'C dresses empire up as protection, but Rhodes says nothing about African self-government. Summarize what he actually claims: his race should spread.'
  };

  W['u6_6.1_5'] = {
    type: 'context',
    hq: 'best understood contextually',
    hs: ['a small minority of white men, officials, traders, and industrial organisers, exercising political and economic sway'],
    src: [
      { tag: 'WHO', since: 'Hobson was an English economist who criticized imperialism', therefore: 'he describes empire as rule by a few over many' },
      { tag: 'WHEN', since: 'it is 1902, at the peak of the new imperialism', therefore: 'he describes colonies in Africa and Asia' }
    ],
    read: ['An economist describing a few ruling many', 'A colonial governor praising the settlers who farm his colony', 'A missionary describing churches he built in Africa'],
    plain: ['Who are the few white men?', 'Were they rebels against their own home countries?', 'Were they settlers who faced oppression in the colonies?'],
    meaning: 'Officials, traders and business organizers from the colonizing country hold political and economic power over huge populations.',
    trapIdx: 2,
    trap: 'C gets the power backward. Hobson says these men hold "sway" over the colonized; they are not the oppressed ones. Read who is ruling whom.'
  };

  W['u6_6.1_8'] = {
    type: 'bestillustrates',
    hq: 'most clearly reflects the concept of',
    look: 'Queen Victoria stands above a kneeling African chief and hands him a Bible. The painting is titled The Secret of England’s Greatness.',
    src: [
      { tag: 'WHO', since: 'a British painter made it in 1863', therefore: 'it shows how the British wanted to see their empire' },
      { tag: 'WHAT', since: 'the queen gives a kneeling chief a Bible', therefore: 'it presents empire as a gift of faith and civilization' }
    ],
    read: ['The queen giving a Bible to a chief', 'An African carving of a chief defeating British soldiers', 'A British map of the trade routes of the empire'],
    plain: ['Which idea called empire a duty?', 'Which idea framed empire as survival of the fittest?', 'Which policy kept trade with China open to all?'],
    meaning: 'A ruler handing faith and civilization to a kneeling colonized man is the "White Man’s Burden": the idea that empire was a duty to "civilize."',
    trapIdx: 0,
    trap: 'A, Social Darwinism, is also a racial idea behind empire, so it sits close. But it framed empire as the strong winning, not as a gift. The Bible and the kneeling chief point to the "civilizing" duty.'
  };

  W['u6_6.2_6'] = {
    type: 'purpose',
    hq: 'best be used as evidence for which of the following trends',
    hs: ['the reunion of two sections of the one and same nation', 'In developing the industry of an infantile nation'],
    src: [
      { tag: 'WHO', since: 'Komatsu Midori was a Japanese official', therefore: 'he presents Japan’s rule in the best light' },
      { tag: 'WHEN', since: 'it is 1912, just after Japan annexed Korea', therefore: 'he is justifying a new takeover' }
    ],
    read: ['An official calling a takeover natural', 'A Korean leader calling on his people to resist Japan', 'A Chinese diplomat warning about Western power in Asia'],
    plain: ['How is Japan trying to make its rule look acceptable?', 'How did Western nations win spheres of influence in Asia?', 'Did Japan and Korea both distrust China’s new government?'],
    meaning: 'Calling annexation a "reunion" and Korea an "infantile nation" is propaganda, meant to make Japanese rule look natural and kind.',
    trapIdx: 0,
    trap: 'A is a real trend in Asia, but this passage is about Japan and Korea, not Western powers. Match the actors in the source.'
  };

  W['u6_6.2_7'] = {
    type: 'context',
    hq: 'best understood in the context of',
    hs: ['since Japan assumed the protectorate of the Korean Empire'],
    src: [
      { tag: 'WHO', since: 'the author is a Japanese official in Korea', therefore: 'he speaks for an empire that now rules Korea' },
      { tag: 'WHEN', since: 'it is 1912', therefore: 'Japan had already taken Taiwan and beaten Russia' }
    ],
    read: ['A Japanese official defending Japan’s rule over Korea', 'A Korean scholar celebrating his country’s independence', 'An American trader describing Japan opening its ports'],
    plain: ['What bigger change does this show?', 'When did Japan first open to Western contact?', 'Did Korea work for a long time to join Japan?'],
    meaning: 'Taking over Korea in 1910 was one step in Japan’s rise to imperial power after the Meiji reforms.',
    trapIdx: 2,
    trap: 'C repeats the propaganda as if it were fact. Komatsu claims a "reunion," but most Koreans resisted. Do not take a biased source’s claim as the context.'
  };

  W['u6_6.2_19'] = {
    type: 'causation',
    hq: 'explains why European citizens moved in large numbers',
    look: 'The writer has an insured house in the city and a 50-acre farm. British settlers had moved into the region and built property there.',
    src: [
      { tag: 'WHO', since: 'he is a British settler in South Africa', therefore: 'he is one of the Europeans who came to the region' },
      { tag: 'WHEN', since: 'the question asks about 1867', therefore: 'look for something that happened that year to draw settlers' }
    ],
    read: ['A settler writing about his property', 'A Zulu king inviting European traders to his ports', 'A British law granting free land to new settlers'],
    plain: ['What discovery in 1867 drew Europeans to the region?', 'Did the British crown offer settlers free homesteads?', 'Did the Berlin Conference make moving there easier?'],
    meaning: 'Diamonds were discovered in South Africa in 1867, and the rush brought large numbers of Europeans.',
    trapIdx: 2,
    trap: 'C is a real event, but the Berlin Conference came in 1884, years after 1867. Check the date in the question against the event in the choice.'
  };

  W['u6_6.3_5'] = {
    type: 'bestillustrates',
    hq: 'a fear held by French officials',
    look: 'Officials were "alarmed" that educated girls would "no longer want to stay at home in seclusion."',
    src: [
      { tag: 'WHO', since: 'Auclert was a French feminist living in Algeria', therefore: 'she is criticizing French officials' },
      { tag: 'WHAT', since: 'she says the French closed schools for Arab girls', therefore: 'she is pointing to what officials were afraid of' }
    ],
    read: ['A feminist reporting officials’ fears', 'A French official praising new schools for Algerian girls', 'An Algerian father asking France to close the girls’ schools'],
    plain: ['What did officials fear educated girls would do?', 'Did officials fear religious diversity in Algeria?', 'Did officials fear the French would mix with locals?'],
    meaning: 'Educated girls would not accept staying home. Officials feared education would lead people to challenge the system.',
    trapIdx: 1,
    trap: 'B names a fear that is not in the passage. Find the line where Auclert says what officials feared, then match it.'
  };

  W['u6_6.5_3'] = {
    type: 'bestillustrates',
    hq: 'most directly illustrates which aspect',
    hs: ["China was required to open five 'treaty ports' to British trade and residence", 'extraterritoriality'],
    src: [
      { tag: 'WHAT', since: 'it summarizes the Treaty of Nanjing', therefore: 'it lists what China had to give up' },
      { tag: 'WHEN', since: 'it is 1842, after the First Opium War', therefore: 'China signed after losing a war' }
    ],
    read: ['What China gave Britain after a war', 'A Chinese law opening China to free trade by choice', 'A British report on failed trade talks with China'],
    plain: ['Who held the power in this treaty?', 'Did China open its economy freely, by choice?', 'Was it a fair compromise between equals?'],
    meaning: 'Land given up, forced ports, British courts on Chinese soil: an unequal treaty that broke Chinese sovereignty.',
    trapIdx: 2,
    trap: 'C sounds balanced, but every term in the source benefits Britain. A treaty signed after a defeat is not a compromise between equals.'
  };

  W['u6_6.6_4'] = {
    type: 'bestillustrates',
    hq: 'most directly illustrates which historical continuity',
    hs: ['signed contracts binding them to five-year terms'],
    src: [
      { tag: 'WHAT', since: 'it summarizes indentured labor after 1833', therefore: 'it describes what replaced slavery on plantations' },
      { tag: 'WHEN', since: 'it starts right after Britain abolished slavery', therefore: 'look for what stayed the same' }
    ],
    read: ['A summary of how plantations replaced enslaved workers', 'A plantation owner praising free and equal wages for all', 'A law shutting down plantations across the empire'],
    plain: ['What stayed the same after slavery?', 'Did Britain give equal opportunity to all its workers?', 'Was labor migration in the empire truly voluntary?'],
    meaning: 'Slavery ended, but plantations still bound workers with contracts they could not break. Coerced labor continued in a new form.',
    trapIdx: 2,
    trap: 'C takes the contracts at face value. Workers signed, but they were often deceived and could not leave. "Continuity" asks what kept going: forced labor.'
  };

  W['u6_6.7_7'] = {
    type: 'causation',
    hq: 'For which reason does the cartoonist imply',
    look: 'The Chinese man sits on bags marked Industry and Order. The cartoonist shows him as a hard worker, the kind other workers saw as competition.',
    src: [
      { tag: 'WHO', since: 'the cartoonist mocks the exclusion law', therefore: 'he hints at the real reason behind it' },
      { tag: 'WHEN', since: 'it is 1882', therefore: 'Chinese workers had been building railroads and working mines' }
    ],
    read: ['A cartoon of a worker barred at the gate', 'A cartoon praising the government for keeping out communists', 'A cartoon about Chinese rebels attacking foreigners'],
    plain: ['Why were Chinese workers seen as a threat?', 'Did Americans fear the country was too crowded?', 'Did Americans fear Chinese communists?'],
    meaning: 'The bag marked Industry is the clue. Chinese workers worked hard for low pay, and other workers wanted that competition gone.',
    trapIdx: 1,
    trap: 'B is from the wrong era: Chinese communism came decades later. The gate even welcomes communists. Run the time period test.'
  };

  /* ============ UNIT 7 ============ */
  W['u7_7.1_0'] = {
    type: 'purpose',
    hq: 'point of view regarding Western attitudes toward Japan',
    hs: ['Japan has taken the lead in adopting the best parts of European civilization', 'they are discriminated against because of the color of the skin'],
    src: [
      { tag: 'WHO', since: 'Okuma Shigenobu was a former Japanese prime minister', therefore: 'he speaks for Japan’s place among the great powers' },
      { tag: 'WHEN', since: 'it is 1921, after Versailles rejected racial equality', therefore: 'he is angry that the West will not treat Japan as an equal' }
    ],
    read: ['A Japanese leader angry at Western racism', 'A Western diplomat praising Japan as a full equal at Versailles', 'A Chinese writer warning his country about Japanese expansion'],
    plain: ['What did later leaders use this grievance to justify?', 'Did it justify the earlier war with Russia over Manchuria?', 'Did it justify overthrowing the Tokugawa shoguns in 1868?'],
    meaning: 'The complaint: Japan matched the West but was still treated as inferior. In the 1930s, leaders used that to justify building a military empire in Asia.',
    trapIdx: 1,
    trap: 'B is a real Japanese war, but it came in 1904, before this 1921 speech. The question asks about the interwar period, so run the time period test.'
  };

  W['u7_7.1_4'] = {
    type: 'bestillustrates',
    hq: 'most directly reflects which broader pattern',
    hs: ['Sovereignty is not given, it is taken', 'Henceforth the Turkish state will belong to the Turks'],
    src: [
      { tag: 'WHO', since: 'Kemal founded the Republic of Turkey', therefore: 'he speaks for a new nation built from the old Ottoman Empire' },
      { tag: 'WHEN', since: 'it is the 1920s, after World War I', therefore: 'the victors had tried to carve up Turkish lands' }
    ],
    read: ['A Turkish leader claiming full national sovereignty', 'An Ottoman sultan asking Britain to protect his empire', 'A League of Nations official dividing Turkish lands among the winners'],
    plain: ['What interwar trend does this demand belong to?', 'Did communism spread as an answer to Western capitalism?', 'Did military alliances balance European powers?'],
    meaning: 'A nation saying sovereignty "is taken," not given: a nationalist movement demanding self-determination after the war.',
    trapIdx: 2,
    trap: 'C sounds positive for a new republic, but Kemal’s words are about national power and independence, not democracy. Match the idea in the source: sovereignty for the nation.'
  };

  W['u7_7.1_6'] = {
    type: 'context',
    hq: 'best understood in light of which of the following',
    look: 'Nicholas speaks of "a great struggle against a foreign enemy" for three years and "internal troubles" that threatened the war effort, then gives up the crown.',
    src: [
      { tag: 'WHO', since: 'Nicholas II was the tsar giving up his throne', therefore: 'he presents his choice as service to the war effort' },
      { tag: 'WHEN', since: 'it is March 1917, three years into World War I', therefore: 'Russia had suffered huge losses at the front' }
    ],
    read: ['A tsar giving up the throne during the war', 'A tsar celebrating a great victory over Germany', 'A tsar promising to share his power with an elected parliament'],
    plain: ['What pressures forced the tsar to give up the throne?', 'Did rising wealth make Russians resent the nobility?', 'Were people angry that he tolerated his political critics?'],
    meaning: 'Three years of war, huge losses, food shortages and angry workers: the "internal troubles" that pushed Nicholas off the throne.',
    trapIdx: 1,
    trap: 'B gets the tsar backward. Nicholas was known for repressing critics, not tolerating them. Check a choice against what you know about the person.'
  };

  W['u7_7.2_6'] = {
    type: 'causation',
    hq: 'most directly explained by the fact that',
    hs: ["it will be a people's war", 'will not give up before the strength of its entire people has been broken'],
    src: [
      { tag: 'WHO', since: 'Moltke was a German general writing to the kaiser', therefore: 'he is giving a military warning, not making a speech' },
      { tag: 'WHEN', since: 'it is 1905', therefore: 'France still wanted back the land Germany took in 1871' }
    ],
    read: ['A German general warning of a long war with France', 'A French general bragging about his new factories', 'A German official planning a quick victory over Britain'],
    plain: ['Why would the whole French nation fight to the end?', 'Was France’s army stronger because it had industrialized?', 'Did France have a much bigger population than Germany?'],
    meaning: 'A "people’s war" means a whole nation fighting. After 1871, French nationalism and the wish to win back Alsace-Lorraine meant France would never quit.',
    trapIdx: 3,
    trap: 'D is from the wrong era: fascism did not exist in 1905. Run the time period test before anything else.'
  };

  W['u7_7.3_2'] = {
    type: 'bestillustrates',
    hq: 'most directly supports her claim',
    hs: ['the loss was simply never announced', 'not one civilian knew about it'],
    src: [
      { tag: 'WHO', since: 'Goldfarb is a U.S. historian writing in 1978', therefore: 'she backs her claim with evidence' },
      { tag: 'WHAT', since: 'she argues the British press hid war news', therefore: 'the best support is a specific case of news being hidden' }
    ],
    read: ['A historian showing how Britain hid war news', 'A British editor bragging about printing every battle report', 'A German officer describing censorship in his own army'],
    plain: ['Which examples prove news was hidden?', 'Did soldiers write letters complaining about their leaders?', 'Did the government reward journalists for their silence?'],
    meaning: 'Specific cases prove the claim: a battleship sinking never announced, and a major battle no civilian knew about.',
    trapIdx: 2,
    trap: 'C is in the passage, but it compares Britain to Germany. It does not prove that British news was hidden. Pick the evidence that proves the exact claim.'
  };

  W['u7_7.3_5'] = {
    type: 'purpose',
    hq: 'the likely intent of the poster',
    hs: ['Raise the Flag of Lenin, It Gives Us Victory!', 'Comrade Stalin'],
    src: [
      { tag: 'WHO', since: 'it was made for the Communist Party Congress', therefore: 'it is official government propaganda' },
      { tag: 'WHEN', since: 'it is 1934, as the second Five-Year Plan began', therefore: 'the party was pushing state-run industrial growth' }
    ],
    read: ['A party poster rallying support for Stalin', 'A protest poster calling on workers to overthrow the party', 'A trade poster advertising Soviet goods to foreign buyers'],
    plain: ['What program was the party rallying support for?', 'Did the poster push to join the League of Nations?', 'Did the poster promote free markets and open trade?'],
    meaning: 'Praise for Lenin and Stalin at the 1934 Congress links the party’s leaders to its Five-Year Plans for state-run modernization.',
    trapIdx: 3,
    trap: 'D is the opposite: an official party poster would never call for resistance to the party. For purpose, start with who made the source.'
  };

  W['u7_7.3_8'] = {
    type: 'causation',
    hq: 'long-term consequences of World War I',
    hs: ["The question of women's suffrage, long denied, must now be reconsidered"],
    src: [
      { tag: 'WHO', since: 'these are British wartime publications', therefore: 'they present women’s work as patriotic' },
      { tag: 'WHAT', since: 'they link women’s war work to the vote', therefore: 'they are making a case for suffrage' }
    ],
    read: ['British wartime writing tying war work to the vote', 'A factory owner’s plan to replace every man with a woman', 'A Marxist pamphlet calling women workers to revolution'],
    plain: ['What did women’s war work help them win?', 'Did women permanently take over most industrial jobs?', 'Did Marxism spread among working women in the West?'],
    meaning: 'The passage says suffrage "must now be reconsidered." After the war, Britain, the United States and others gave women the vote.',
    trapIdx: 2,
    trap: 'C goes too far. Many women left factory jobs when men came home; the lasting change was the vote. Watch for "permanent" and "most."'
  };

  W['u7_7.4_1'] = {
    type: 'causation',
    hq: 'is significant because it shows that',
    hs: ['to protect the working classes through the betterment of their working conditions', 'Paid vacations are mandatory'],
    src: [
      { tag: 'WHO', since: 'it comes from Vargas’s government, which took power through a coup', therefore: 'it is not a socialist government' },
      { tag: 'WHAT', since: 'it proudly lists unions, minimum wages and paid vacations', therefore: 'it borrows ideas that socialists had pushed for' }
    ],
    read: ['A government boasting about workers’ rights', 'A union leader complaining that Brazil ignores workers', 'A factory owner protesting a new eight-hour day'],
    plain: ['What do these rights show?', 'Did governments need the army’s help to take power?', 'Did governments use nationalism to prepare for war?'],
    meaning: 'A right-leaning government adopting minimum wages, unions and paid vacations shows socialist ideas shaping governments across the spectrum.',
    trapIdx: 1,
    trap: 'B is true of Vargas, who came to power by coup, but this document is about workers’ rights, not the military. Match what the source lists.'
  };

  W['u7_7.5_6'] = {
    type: 'context',
    hq: 'best understood in the context of',
    look: 'Gandhi asks every Indian to "completely boycott foreign cloth," calls the arrest "a prelude to Swaraj," and urges them to "fulfil the Swadeshi programme."',
    src: [
      { tag: 'WHO', since: 'Gandhi led the Indian independence movement', therefore: 'his calls serve the goal of self-rule' },
      { tag: 'WHEN', since: 'it is 1921, during the Non-Cooperation Movement', therefore: 'Indians were refusing to support British rule' }
    ],
    read: ['Gandhi urging Indians to boycott foreign cloth', 'A British official ordering Indians to buy English cloth', 'An Indian merchant asking for higher taxes on imported goods'],
    plain: ['What goal did the boycott serve?', 'Was this mainly about protecting Indian factories?', 'Was this about staying neutral in the Cold War?'],
    meaning: 'Swaraj means self-rule. Boycotting British cloth was a way to pressure Britain and move toward independence.',
    trapIdx: 3,
    trap: 'D is decades too late: the Cold War began after 1945. Check the date on the source line first.'
  };

  W['u7_7.6_3'] = {
    type: 'bestillustrates',
    hq: 'suggests that he believed appeasement',
    hs: ['appeasing an aggressor only encourages further demands'],
    src: [
      { tag: 'WHO', since: 'it is a CBS radio report from London', therefore: 'it reports what both sides said' },
      { tag: 'WHEN', since: 'it is September 30, 1938, the day after Munich', therefore: 'Hitler had just been given the Sudetenland' }
    ],
    read: ['A radio report on the Munich deal and its critics', 'A German broadcast celebrating peace with Britain', 'A Czech leader thanking Britain for protecting his country'],
    plain: ['Why did Churchill call Munich a defeat?', 'Did he think Britain was too weak to resist in 1938?', 'Did he think giving Hitler land would bring lasting peace?'],
    meaning: 'Churchill’s critics argued that giving in "only encourages further demands." Appeasement showed Hitler he would not be stopped.',
    trapIdx: 1,
    trap: 'B is Chamberlain’s view, "peace for our time," not Churchill’s. Read whose words the question asks about.'
  };

  /* ============ UNIT 8 ============ */
  W['u8_8.1_0'] = {
    type: 'causation',
    hq: 'was significant primarily because it',
    hs: ['an iron curtain has descended across the Continent'],
    src: [
      { tag: 'WHO', since: 'Churchill had led Britain in the war alongside the Soviets', therefore: 'his warning about them carried weight' },
      { tag: 'WHEN', since: 'it is March 1946, less than a year after the war', therefore: 'the wartime allies were turning into rivals' }
    ],
    read: ['A British leader naming the split in Europe', 'A Soviet leader praising the wartime friendship with the West', 'An American general announcing that all troops are coming home'],
    plain: ['What did "iron curtain" make public?', 'Did the speech declare war on the Soviet Union?', 'Did the speech launch the Marshall Plan’s aid?'],
    meaning: 'Churchill said out loud that the wartime alliance was over and Europe was split between East and West: the Cold War, named in public.',
    trapIdx: 1,
    trap: 'B overstates. A speech by a former prime minister could not declare war, and the Cold War never became a declared war between the two powers.'
  };

  W['u8_8.1_3'] = {
    type: 'bestillustrates',
    hq: 'primarily reflects which Cold War strategy',
    hs: ['we must assist free peoples who are resisting attempted subjugation by armed minorities or by outside pressures'],
    src: [
      { tag: 'WHO', since: 'Truman was the U.S. president speaking to Congress', therefore: 'he is asking for money and support for a policy' },
      { tag: 'WHEN', since: 'it is March 1947', therefore: 'Greece and Turkey were under communist pressure' }
    ],
    read: ['A president promising aid to resist communism', 'A president offering friendship and trade to Moscow', 'A president ordering troops to free Eastern Europe'],
    plain: ['Which strategy stops communism spreading?', 'Which strategy tried to ease tensions with the Soviets?', 'Which strategy tried to undo communist gains in Europe?'],
    meaning: 'Helping countries resist "outside pressures" means stopping communism where it is, not pushing it back. That is containment.',
    trapIdx: 2,
    trap: 'C, rollback, sounds like resisting communism too, but it means reversing gains already made. Truman talks about helping peoples still resisting, which is containment.'
  };

  W['u8_8.2_0'] = {
    type: 'bestillustrates',
    hq: 'most directly reflects which broader historical development',
    hs: ['We are united by a common detestation of colonialism in whatever form it appears'],
    src: [
      { tag: 'WHO', since: 'Sukarno led newly independent Indonesia', therefore: 'he speaks for nations that just broke free of empire' },
      { tag: 'WHEN', since: 'it is 1955, ten years after World War II', therefore: 'European empires had been weakened by the war' }
    ],
    read: ['An Asian leader uniting new nations against colonialism', 'A Soviet leader inviting Asia to join the communist bloc', 'A European leader defending his country’s remaining colonies'],
    plain: ['What postwar trend does this show?', 'Did communism spread from Moscow to these new nations?', 'Did the United Nations give these nations a voice?'],
    meaning: 'Peoples of Asia and Africa united against colonialism after World War II, as weakened European empires were losing their colonies.',
    trapIdx: 1,
    trap: 'B assumes these nations were following Moscow, but Bandung was about staying out of both Cold War blocs. Sukarno talks about colonialism and race, not communism.'
  };

  W['u8_8.2_12'] = {
    type: 'causation',
    hq: 'best explains why the North Atlantic Treaty was signed',
    look: 'Article 5: "an armed attack against one or more of them in Europe or North America shall be considered an attack against them all."',
    src: [
      { tag: 'WHO', since: 'the members are the United States, Canada and Western Europe', therefore: 'they are the countries facing the Soviet bloc' },
      { tag: 'WHEN', since: 'it is April 1949', therefore: 'the Berlin Blockade had just shown the Soviet threat' }
    ],
    read: ['A treaty promising to defend each other from attack', 'A trade deal lowering tariffs across the North Atlantic', 'A treaty dividing up the colonies lost in World War II'],
    plain: ['Why would nations promise to defend each other?', 'Did newly enfranchised voters demand an alliance?', 'Did they ally to take back lost colonies?'],
    meaning: 'An attack on one is an attack on all: countries afraid of Soviet expansion joined together for protection.',
    trapIdx: 3,
    trap: 'D twists a real fact. The U.S. had the only atomic bomb until August 1949, which made members want U.S. protection; it did not frighten them into joining. Read what the treaty itself says the goal is.'
  };

  W['u8_8.4_0'] = {
    type: 'purpose',
    hq: 'deliberate use of language from the American Declaration of Independence',
    hs: ['All men are created equal', 'the French imperialists, abusing the standard of Liberty, Equality, and Fraternity'],
    src: [
      { tag: 'WHO', since: 'Ho Chi Minh was a communist leading Vietnam’s independence movement', therefore: 'quoting America was a choice, not his own ideology' },
      { tag: 'WHEN', since: 'it is September 1945, as World War II ended', therefore: 'he hoped the United States would back independence over France' }
    ],
    read: ['A leader quoting America for independence', 'A French governor promising Vietnam more rights', 'An American president praising Vietnam’s new government'],
    plain: ['Why would he quote the Americans?', 'Was he a sincere believer in liberal democracy?', 'Had the Vietnamese taken on American culture?'],
    meaning: 'A communist quoting the American Declaration was making a strategic appeal, hoping the U.S. would support Vietnam against France.',
    trapIdx: 1,
    trap: 'B takes the quote at face value. Ho Chi Minh was a communist; borrowing American words was a strategy. For purpose, ask what the author gains from the choice.'
  };

  W['u8_8.4_3'] = {
    type: 'causation',
    hq: 'was most directly significant because it',
    hs: ['The era in which the Chinese people were regarded as uncivilized is now ended', 'no imperialists will ever again be allowed to invade our land'],
    src: [
      { tag: 'WHO', since: 'Mao had just won the civil war', therefore: 'he is announcing a new China to the world' },
      { tag: 'WHEN', since: 'it is October 1949', therefore: 'it closes a century of foreign domination since the Opium Wars' }
    ],
    read: ['Mao announcing an end to foreign domination', 'Mao signing a military treaty with the Soviet Union', 'Mao ordering an immediate invasion of Taiwan'],
    plain: ['What history is Mao saying China has ended?', 'Did this speech sign an alliance with the Soviet Union?', 'Did this speech announce China’s plan for nuclear arms?'],
    meaning: '"No longer regarded as uncivilized" and "no imperialists will ever again invade": nationalism ending the Century of Humiliation.',
    trapIdx: 0,
    trap: 'A is a real development, but the speech never mentions the Soviet Union. Match what Mao actually says: China has stood up to foreign powers.'
  };

  W['u8_8.5_3'] = {
    type: 'bestillustrates',
    hq: 'most directly reflects which development',
    hs: ['We shall either free India or die in the attempt'],
    src: [
      { tag: 'WHO', since: 'Gandhi led the Indian National Congress', therefore: 'he speaks for the main independence movement' },
      { tag: 'WHEN', since: 'it is August 1942, during World War II', therefore: 'Britain had brought India into the war without asking Indian leaders' }
    ],
    read: ['Gandhi demanding India be freed now', 'Gandhi calling Indians to take up arms against Britain', 'Gandhi thanking Britain for its promise of independence'],
    plain: ['What does "Do or Die" show?', 'Did Gandhi give up nonviolence for armed struggle?', 'Did Britain promise freedom in exchange for war help?'],
    meaning: '"Free India or die in the attempt" during the war: frustration with British rule had grown into a demand for immediate independence.',
    trapIdx: 1,
    trap: 'B reads "Do or Die" too literally. Gandhi stayed committed to nonviolence; the phrase means total commitment, not taking up weapons.'
  };

  W['u8_8.6_0'] = {
    type: 'bestillustrates',
    hq: 'most directly reflects which historical transformation',
    hs: ['when we step out from the old to the new', 'the soul of a nation, long suppressed, finds utterance'],
    src: [
      { tag: 'WHO', since: 'Nehru became India’s first prime minister', therefore: 'he speaks as the leader of a new state' },
      { tag: 'WHEN', since: 'it is the night of August 14, 1947', therefore: 'British rule is ending at midnight' }
    ],
    read: ['India’s first leader marking the moment of freedom', 'A British viceroy announcing a delay in independence', 'A Hindu leader declaring India a religious state'],
    plain: ['What change does "from the old to the new" mark?', 'Did Nehru plan to cut every tie with Britain at once?', 'Did India join the Western Cold War alliance?'],
    meaning: 'A long struggle against colonial rule turns into a sovereign state taking charge of its own future.',
    trapIdx: 3,
    trap: 'D is the opposite of Nehru’s goal: he wanted a secular India. Nothing in the speech mentions religious law.'
  };

  W['u8_8.7_0'] = {
    type: 'bestillustrates',
    hq: 'most directly reflects which aspect of the anti-apartheid movement',
    hs: ['I have fought against white domination, and I have fought against black domination'],
    src: [
      { tag: 'WHO', since: 'Mandela was an ANC leader on trial', therefore: 'he is explaining his cause to the court and the world' },
      { tag: 'WHEN', since: 'it is 1964, under apartheid', therefore: 'the white minority ruled South Africa by law' }
    ],
    read: ['Mandela describing his goal of a society for all races', 'Mandela calling for Black South Africans to rule over whites', 'Mandela giving up the struggle against apartheid'],
    plain: ['What kind of society did the movement want?', 'Did Mandela reject the ANC’s armed resistance in public?', 'Did Marxist ideas shape the movement’s final goals?'],
    meaning: 'Rejecting both white and Black domination means the goal was a democracy for everyone, not flipping who is on top.',
    trapIdx: 2,
    trap: 'C is a real factor in ending apartheid, but this statement is about Mandela’s own goal, not outside pressure. Match the idea in his words.'
  };

  W['u8_8.8_0'] = {
    type: 'causation',
    hq: 'most directly contributed to which development',
    hs: ['the comprehensive development of democracy', 'more glasnost, criticism and self-criticism in all spheres of our society'],
    src: [
      { tag: 'WHO', since: 'Gorbachev led the Soviet Union', therefore: 'he meant these reforms to save the system' },
      { tag: 'WHEN', since: 'it is 1987', therefore: 'the Soviet economy had been stagnating for years' }
    ],
    read: ['A Soviet leader calling for openness and reform', 'A Soviet leader ordering tighter control of the press', 'An American president announcing the end of the Cold War'],
    plain: ['What did loosening control lead to in the end?', 'Did the reforms win the war in Afghanistan?', 'Did the reforms restart strong Soviet economic growth?'],
    meaning: 'Openness let people criticize the system and loosened central control. Instead of saving the Soviet Union, it helped it fall apart.',
    trapIdx: 1,
    trap: 'B is what Gorbachev hoped for, not what happened. A causation question asks for the real result, not the intended one.'
  };

  /* ============ UNIT 9 ============ */
  W['u9_9.1_2'] = {
    type: 'bestillustrates',
    hq: 'most directly reflects concern about',
    hs: ['the frightening power of human reproduction must also be curbed'],
    src: [
      { tag: 'WHO', since: 'Borlaug developed the high-yield crops himself', therefore: 'he knows exactly what they can and cannot do' },
      { tag: 'WHEN', since: 'it is 1970', therefore: 'world population was growing faster than ever' }
    ],
    read: ['A crop scientist warning about population growth', 'A farmer celebrating that hunger has ended for good', 'A trade minister reporting a collapse in grain exports'],
    plain: ['What could undo the gains in food production?', 'Did grain trade collapse during the Second World War?', 'Did Cold War rules block sending farm technology abroad?'],
    meaning: 'More food bought "a breathing space," but if population keeps growing faster, hunger comes back.',
    trapIdx: 2,
    trap: 'C sounds like a real Cold War obstacle, but Borlaug names population, not politics. Match the worry he actually states.'
  };

  W['u9_9.2_0'] = {
    type: 'causation',
    hq: 'was made possible mainly by',
    hs: ['the global program on smallpox eradication'],
    src: [
      { tag: 'WHO', since: 'it comes from the World Health Organization', therefore: 'an international body ran the effort' },
      { tag: 'WHAT', since: 'it refers to a "global program"', therefore: 'many countries worked together' }
    ],
    read: ['A world health body announcing smallpox is gone', 'A doctor announcing a new antibiotic for smallpox', 'A government closing its borders until a disease ends'],
    plain: ['What kind of effort wiped out smallpox?', 'Did antibiotics like penicillin cure smallpox?', 'Did travel bans make the disease disappear?'],
    meaning: 'A "global program" run by the WHO: vaccination and tracking cases in country after country.',
    trapIdx: 0,
    trap: 'A names a real medical advance, but smallpox is a virus and antibiotics only fight bacteria. Know what a cure can and cannot do before you match it.'
  };

  W['u9_9.3_0'] = {
    type: 'causation',
    hq: 'contributed most directly to',
    hs: ['Then a strange blight crept over the area and everything began to change'],
    src: [
      { tag: 'WHO', since: 'Carson was a biologist', therefore: 'she writes about harm to living things' },
      { tag: 'WHAT', since: 'the book is about pesticides like DDT', therefore: 'the "blight" is chemical damage to nature' }
    ],
    read: ['A biologist warning about harm from pesticides', 'A chemical company praising DDT for saving crops', 'A farmer describing a good harvest in a small town'],
    plain: ['What did a warning about pesticides help start?', 'Did the book spread chemical farming further?', 'Did people worry less about chemicals afterward?'],
    meaning: 'A famous warning about pesticides poisoning nature helped launch the environmental movement and new pollution laws.',
    trapIdx: 0,
    trap: 'A is the opposite of Carson’s message. Her book warned against chemical pesticides; it did not push for more of them.'
  };

  W['u9_9.3_1'] = {
    type: 'causation',
    hq: 'most likely a response to',
    hs: ['meets the needs of the present without compromising the ability of future generations to meet their own needs'],
    src: [
      { tag: 'WHO', since: 'it is a report to the United Nations', therefore: 'it speaks to rich and poor nations at once' },
      { tag: 'WHEN', since: 'it is 1987', therefore: 'developing nations wanted growth as warnings about pollution grew' }
    ],
    read: ['A UN report defining growth that protects the future', 'A factory owner arguing pollution does not matter', 'A Soviet planner praising state industry for the land'],
    plain: ['What debate does this try to settle?', 'Did command economies protect the environment well?', 'Had industrial pollution ended in rich countries?'],
    meaning: 'Meeting today’s needs without ruining the future: an answer to how poorer countries could grow while limiting harm to the planet.',
    trapIdx: 1,
    trap: 'B overstates. Pollution did not end in wealthy countries in the 1970s, and the report exists because the problem continued.'
  };

  W['u9_9.3_3'] = {
    type: 'bestillustrates',
    hq: 'A historian could best use the agreement as evidence of',
    hs: ['pursuing efforts to limit the temperature increase to 1.5°C above pre-industrial levels'],
    src: [
      { tag: 'WHO', since: 'it was adopted by 196 parties', therefore: 'nearly every country signed on' },
      { tag: 'WHAT', since: 'it sets a shared goal for global temperature', therefore: 'it treats climate as a problem for everyone' }
    ],
    read: ['A global treaty setting a shared climate goal', 'A single superpower ordering others to cut emissions', 'A treaty rejecting climate science as uncertain'],
    plain: ['What does a 196-nation treaty show about global problems?', 'Did nation-states stop being the main players in politics?', 'Did one superpower control world climate policy?'],
    meaning: 'Climate change crosses every border, so nearly every country signed one treaty to tackle a problem no state could solve alone.',
    trapIdx: 0,
    trap: 'A goes too far. Countries are the parties to the agreement, so it shows states cooperating, not states disappearing.'
  };

  W['u9_9.5_3'] = {
    type: 'causation',
    hq: 'was brought about in part by',
    hs: ['the indignity of being the skunk of the world'],
    src: [
      { tag: 'WHO', since: 'Mandela had spent 27 years in prison', therefore: 'he speaks for the long resistance to apartheid' },
      { tag: 'WHEN', since: 'it is 1994, at his inauguration', therefore: 'apartheid had just ended' }
    ],
    read: ['Mandela celebrating the end of apartheid', 'A South African general announcing a military defeat', 'A UN official taking control of South Africa'],
    plain: ['What pressures brought apartheid to an end?', 'Did a Soviet-backed army defeat South Africa?', 'Did the UN vote to take over South Africa’s government?'],
    meaning: '"The skunk of the world" points to how isolated South Africa was. Resistance at home plus sanctions and boycotts abroad ended apartheid.',
    trapIdx: 0,
    trap: 'A invents a war. South Africa was not defeated militarily; apartheid ended through resistance, pressure and negotiation.'
  };

  W['u9_9.8_1'] = {
    type: 'causation',
    hq: 'most directly a response to',
    hs: ['the scourge of war, which twice in our lifetime has brought untold sorrow to mankind'],
    src: [
      { tag: 'WHO', since: 'it is the founding charter of the United Nations', therefore: 'it states why the UN was created' },
      { tag: 'WHEN', since: 'it is 1945, as World War II ended', therefore: '"twice in our lifetime" means the two world wars' }
    ],
    read: ['A charter founding the UN to prevent war', 'A treaty ending the Cold War between two superpowers', 'An agreement creating a common market in Europe'],
    plain: ['What failure did the UN try to fix?', 'Did the Cold War end before the UN was founded?', 'Did the 1973 oil crisis lead to the UN?'],
    meaning: 'Two world wars in one lifetime meant the League of Nations had failed. The UN was built to do better.',
    trapIdx: 0,
    trap: 'A is decades too late: the Cold War ended in 1991, and the UN was founded in 1945. Check the date on the source line first.'
  };

  W['u9_9.4_3'] = {
    type: 'similar',
    hq: 'most similar to the economic strategy described',
    hs: ['producing manufactured goods such as textiles, ships, and electronics for export to wealthy markets'],
    src: [
      { tag: 'WHAT', since: 'it is a summary of the Asian Tigers’ growth', therefore: 'the strategy is making goods to sell abroad' },
      { tag: 'WHEN', since: 'it covers the 1960s to the 1990s', therefore: 'look for a strategy from the same era' }
    ],
    read: ['A summary of four economies growing through exports', 'A Soviet plan to build heavy industry for use at home', 'A Latin American law limiting imported goods'],
    plain: ['Who else grew by making goods to sell abroad?', 'Which plan built heavy industry only for home use?', 'Which policy tried to replace imports with local goods?'],
    meaning: 'Strip away the region: the method is export-led manufacturing. China’s Special Economic Zones used the same method.',
    trapIdx: 1,
    trap: 'B also involves government support for industry, but import substitution tried to stop imports instead of selling exports. Match the method, not just government involvement.'
  };

  W['u9_9.7_3'] = {
    type: 'causation',
    hq: 'most directly led to',
    hs: ['al-Qaeda, a transnational terrorist network'],
    src: [
      { tag: 'WHAT', since: 'it summarizes the September 11 attacks', therefore: 'look for what the United States did next' },
      { tag: 'WHO', since: 'al-Qaeda was based in Afghanistan', therefore: 'the response would target that region' }
    ],
    read: ['A summary of the September 11 attacks', 'A NATO statement dissolving the alliance', 'A report on the end of Middle Eastern oil sales'],
    plain: ['What did the United States do after the attacks?', 'Did NATO break up after the attacks?', 'Did the global oil trade with the Middle East end?'],
    meaning: 'The United States answered with a "war on terror": invading Afghanistan, where al-Qaeda was based, and later Iraq.',
    trapIdx: 0,
    trap: 'A is the opposite: NATO invoked Article 5 for the first time and stood with the United States. A consequence has to match what actually happened.'
  };

  W['u9_9.6_0'] = {
    type: 'bestillustrates',
    hq: 'best illustrates',
    hs: ["the first McDonald's restaurant in the Soviet Union"],
    src: [
      { tag: 'WHEN', since: 'it is January 1990, in the last years of the Soviet Union', therefore: 'Western companies were reaching communist countries' },
      { tag: 'WHAT', since: 'thousands lined up for hours', therefore: 'Soviet people were eager for Western goods' }
    ],
    read: ['A summary of McDonald’s opening in Moscow', 'A Soviet report on record production of consumer goods', 'A Soviet company opening restaurants in the West'],
    plain: ['What does a McDonald’s in Moscow show about culture?', 'Did Soviet factories make plenty of consumer goods?', 'Did the Soviets export socialist culture to the West?'],
    meaning: 'An American company opening in the Soviet capital: Western consumer culture spreading through multinational corporations.',
    trapIdx: 0,
    trap: 'A misreads the long lines. People waited for hours because Soviet stores had so little, not because the government made plenty.'
  };
})(window.WALKTHROUGH);
