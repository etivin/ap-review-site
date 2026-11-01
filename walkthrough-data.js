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

  /* ================================================================
     BATCH 3 (2026-10-21): 10 more per unit, all with typed sources.
     ================================================================ */

  /* ============ UNIT 1 ============ */
  W['u1_1.1_0'] = {
    type: 'bestillustrates',
    hq: 'best illustrates which of the following',
    hs: ['This fast-ripening, drought-resistant strain allowed two harvests a year'],
    src: [
      { tag: 'WHAT', since: 'it is a short summary about a new kind of rice', therefore: 'the point is what the new crop did' },
      { tag: 'WHEN', since: 'it is the eleventh century, in Song China', therefore: 'this is an era of fast economic growth' }
    ],
    read: ['A summary of how new rice boosted farming', 'A Vietnamese king’s letter asking China to buy his rice', 'A Song merchant’s report on falling factory output'],
    plain: ['What does better rice show?', 'Did China depend on importing food from abroad?', 'Was Vietnam central to the world economy then?'],
    meaning: 'A new crop strain is a technological innovation. It doubled harvests, so innovation stimulated agriculture.',
    trapIdx: 1,
    trap: 'B reads too much into where the rice came from. The passage is about what the rice did for Chinese farming, not about Vietnam’s place in the world.'
  };

  W['u1_1.1_3'] = {
    type: 'bestillustrates',
    hq: 'the author’s claim about the Chinese examination system in the second paragraph',
    hs: ['open to all qualified applicants regardless of social background', 'simply not available to poor people'],
    src: [
      { tag: 'WHO', since: 'Miyazaki is a historian weighing the system', therefore: 'he gives both strengths and limits' },
      { tag: 'WHAT', since: 'the question points to the second paragraph only', therefore: 'the claim is in those few lines' }
    ],
    read: ['A historian weighing the exam system’s limits', 'A Song official boasting that anyone could pass the exams', 'A poor student describing how he became a top minister'],
    plain: ['Can people rise, per paragraph two?', 'Did the exams lock nobles and commoners apart?', 'Did the exams open office to women scholars?'],
    meaning: 'Open to all "in principle," but poor students could rarely afford it. A real chance to rise, but a limited one.',
    trapIdx: 1,
    trap: 'B overcorrects. The author admits limits, but he calls the system "unusually democratic" and "forward-looking." Do not swing to the opposite of the claim.'
  };

  W['u1_1.1_8'] = {
    type: 'purpose',
    hq: 'the author’s tone in the passage',
    hs: ['We have established peace in the Empire', 'Our intention to maintain peace within the four seas'],
    src: [
      { tag: 'WHO', since: 'the first Ming emperor is announcing his reign', therefore: 'he wants to sound strong and settled' },
      { tag: 'TO WHOM', since: 'it went to a foreign ruler', therefore: 'he presents China as stable and peaceful' }
    ],
    read: ['A new emperor calmly announcing peace', 'A Mongol khan angrily vowing revenge for his losses', 'A Ming general warning that rebels still threaten the throne'],
    plain: ['How does the emperor sound?', 'Is he angry about fourteen years of war?', 'Is he worried that his new empire will fall?'],
    meaning: 'He says peace is established and he will maintain it. The tone is calm confidence.',
    trapIdx: 0,
    trap: 'A grabs the "fourteen years" of war, but he mentions it calmly, as something finished. Tone comes from how the author speaks, not just the topics he names.'
  };

  W['u1_1.2_2'] = {
    type: 'bestillustrates',
    hq: 'best reflected in which of the following',
    hs: ['The adoption of the mamluk* institutions by the Abbasids'],
    src: [
      { tag: 'WHO', since: 'Crone is a historian of the Islamic state', therefore: 'she studies how religion and power fit together' },
      { tag: 'WHAT', since: 'the question asks about religion and politics combined', therefore: 'look for one office that held both' }
    ],
    read: ['A historian explaining the Abbasid state', 'A caliph’s letter granting a governor full independence', 'A Sunni scholar’s complaint against the caliph’s laws'],
    plain: ['Who held both kinds of power?', 'Did religious scholars clash with the state?', 'Did local rulers have a lot of freedom?'],
    meaning: 'The caliph was both the supreme religious leader and the head of state. One office joined religion and politics.',
    trapIdx: 2,
    trap: 'C shows a state supporting religion, but building mosques is not the same as one leader holding both kinds of power. Match the exact idea: religion and politics combined in one office.'
  };

  W['u1_1.3_0'] = {
    type: 'bestillustrates',
    hq: 'best illustrates',
    hs: ['for more than two centuries it resisted the expansion of Muslim sultanates from the north'],
    src: [
      { tag: 'WHAT', since: 'it summarizes a Hindu kingdom in southern India', therefore: 'it shows Hindu power continuing' },
      { tag: 'WHEN', since: 'it lasted from 1336 to 1565', therefore: 'this is while Islamic sultanates ruled the north' }
    ],
    read: ['A summary of a strong Hindu kingdom', 'A Delhi sultan’s report on conquering all of southern India', 'A Buddhist monk describing new temples across India'],
    plain: ['What does its survival show?', 'Did the Delhi Sultanate conquer all of southern India?', 'Did Buddhism replace Hinduism in South Asia?'],
    meaning: 'A Hindu kingdom stayed strong and resisted Muslim sultanates for two centuries. Islamic rule spread, but Hindu states endured.',
    trapIdx: 0,
    trap: 'A is the opposite: the passage says Vijayanagara resisted the sultanates. Watch for "complete" in a choice.'
  };

  W['u1_1.3_3'] = {
    type: 'bestillustrates',
    hq: 'an argument in the second paragraph',
    hs: ['an ocean of all virtues practiced by the followers of the Buddha', 'taken them from the hands of his enemies among the other rulers of this world'],
    src: [
      { tag: 'WHO', since: 'a Buddhist teacher wrote it on the king’s orders', therefore: 'it praises the king' },
      { tag: 'WHAT', since: 'paragraph two lists the king’s qualities', therefore: 'it argues why he deserves to rule' }
    ],
    read: ['An inscription praising a king’s faith and power', 'A rival king’s letter mocking Adityawarman’s defeats', 'A merchant’s list of jewels bought at a royal market'],
    plain: ['What makes the king legitimate?', 'Does it praise him for caring for every subject?', 'Does it praise him for his knowledge of ships?'],
    meaning: 'Paragraph two pairs spiritual virtues with worldly power, like skill in war and jewels taken from rivals.',
    trapIdx: 1,
    trap: 'B sounds like a good king, but the inscription never mentions his subjects’ welfare. It praises virtue and conquest. Stay inside the paragraph the question names.'
  };

  W['u1_1.4_1'] = {
    type: 'bestillustrates',
    hq: 'support his argument about the pride of Inca rulers',
    hs: ['were so full of pride that when one ruler died, his heir would build his road larger and broader'],
    src: [
      { tag: 'WHO', since: 'Cieza de León was a Spanish soldier and historian', therefore: 'he describes the Inca from the outside' },
      { tag: 'WHAT', since: 'the question names the second paragraph', therefore: 'the evidence about pride is there' }
    ],
    read: ['A Spanish writer describing proud Inca rulers', 'An Inca ruler explaining how his heir would be chosen', 'A priest describing ceremonies held to bless the roads'],
    plain: ['Which detail shows the rulers were proud?', 'How did power pass from one ruler to the next?', 'Who assigned the workers who built the roads?'],
    meaning: 'Each new ruler built his road bigger and broader than the last. That is the evidence of pride.',
    trapIdx: 2,
    trap: 'C is true and in the same paragraph, but it shows how roads were organized, not pride. Match the evidence to the exact argument named.'
  };

  W['u1_1.5_0'] = {
    type: 'causation',
    hq: 'most directly benefited which of the following',
    hs: ['Neither traveller nor inhabitant in it has anything to fear from robbers'],
    src: [
      { tag: 'WHO', since: 'Ibn Battuta traveled to Mali himself', therefore: 'he felt the safety firsthand' },
      { tag: 'WHEN', since: 'it is 1352–1353', therefore: 'the Portuguese have not reached West Africa yet' }
    ],
    read: ['A traveler praising how safe Mali felt', 'A Portuguese captain describing trade on Mali’s coast', 'A Mongol general planning a march across Africa'],
    plain: ['Who needed safe roads across Mali’s lands?', 'Did Portuguese ships trade on this coast yet?', 'Did Mongol armies cross North Africa?'],
    meaning: 'Mali grew rich from caravans carrying gold and salt across the Sahara. Safe roads helped those caravans most.',
    trapIdx: 0,
    trap: 'A is from the wrong time: the Portuguese reached West Africa in the 1400s. Check the date on the source line.'
  };

  W['u1_1.6_6'] = {
    type: 'purpose',
    hq: 'The intended outcome of the treaty',
    hs: ['shall be vested permanently in our son [son-in-law], King Henry [of England], and his heirs'],
    src: [
      { tag: 'WHO', since: 'it was agreed by the French king and Henry of England', therefore: 'it sets out what Henry wins' },
      { tag: 'WHAT', since: 'Article 6 hands the French crown to Henry’s heirs', therefore: 'the goal is about who rules France' }
    ],
    read: ['A treaty giving England the French crown', 'A treaty ordering England to leave all French lands', 'A treaty making the French king ruler of England'],
    plain: ['What was planned for the crown?', 'Did England plan to withdraw from France?', 'Did France plan to rule over England?'],
    meaning: 'The French crown goes "permanently" to the English king and his heirs. The intent: England controls the French monarchy.',
    trapIdx: 3,
    trap: 'D undersells it. The treaty gives the whole crown "permanently," not limited control of some land. Read how much the article actually hands over.'
  };

  W['u1_1.7_2'] = {
    type: 'similar',
    hq: 'The actions of rulers in both regions',
    hs: ['presenting themselves as divinely supported kings', 'converted to Islam, built mosques, and made pilgrimages to Mecca'],
    src: [
      { tag: 'WHAT', since: 'it compares Khmer and Mali rulers', therefore: 'the answer is what they both did' },
      { tag: 'WHEN', since: 'it covers 1200 to 1450', therefore: 'Christianity is not spreading in these regions' }
    ],
    read: ['A summary comparing how two sets of rulers used faith', 'A Khmer king’s order banning all religion in his empire', 'A Mali king’s letter refusing to build any mosques'],
    plain: ['How did both use religion?', 'Did Christianity spread to both regions?', 'Did powerful states reject religion?'],
    meaning: 'Temples in one place, mosques and pilgrimage in the other: both used religion to back up their power.',
    trapIdx: 0,
    trap: 'A brings in Christianity, which neither region is about. Find the pattern the two examples share, then match it.'
  };

  /* ============ UNIT 2 ============ */
  W['u2_2.1_3'] = {
    type: 'bestillustrates',
    hq: 'best identified as',
    hs: ['received a paper note that could be redeemed in distant cities'],
    src: [
      { tag: 'WHAT', since: 'it describes a Song Chinese commercial innovation', therefore: 'the answer is a Chinese invention for trade' },
      { tag: 'WHO', since: 'it is about merchants on long roads', therefore: 'the invention solved a merchant’s problem' }
    ],
    read: ['A description of a Song paper-money idea', 'A Song emperor’s order about tribute from foreign kings', 'A sailor’s account of a tool for steering by the stars'],
    plain: ['What is this invention?', 'Which system had foreign rulers send gifts to China?', 'Which tool helped sailors find their position?'],
    meaning: 'Deposit coins, carry a paper note, cash it far away: that is flying cash, early paper credit.',
    trapIdx: 0,
    trap: 'A, the tribute system, is also Chinese and about trade, so it feels close. But it is about foreign rulers sending gifts, not merchants carrying paper notes.'
  };

  W['u2_2.2_5'] = {
    type: 'bestillustrates',
    hq: 'most directly describes which of the following',
    hs: ['the roads were made so safe that a maiden bearing a nugget of gold might travel from one end of the empire to the other'],
    src: [
      { tag: 'WHO', since: 'it is a traveler’s account', therefore: 'the writer cares about safe roads' },
      { tag: 'WHAT', since: 'it is about the Mongol Empire under the Great Khan', therefore: 'it describes Mongol rule across Eurasia' }
    ],
    read: ['A traveler praising safe roads under the khans', 'A merchant complaining that the Mongols stopped all trade', 'A scholar describing China’s civil service exams'],
    plain: ['What do safe roads describe?', 'Did trade collapse under the Mongols?', 'Were merchants forced to convert?'],
    meaning: 'A person could carry gold across the whole empire safely. That is the Pax Mongolica, which protected trade routes.',
    trapIdx: 1,
    trap: 'B is the opposite. Safe roads helped trade grow. Read what the source says happened, not what you might expect from conquerors.'
  };

  W['u2_2.2_7'] = {
    type: 'bestillustrates',
    hq: 'governed with an emphasis on which of the following',
    hs: ['each of the 12,000 bridges should be provided with a guard of ten men', 'keeping always wide awake and on the look out'],
    src: [
      { tag: 'WHO', since: 'Marco Polo was a European visitor', therefore: 'he notices how the city was run' },
      { tag: 'WHAT', since: 'the second paragraph is all guards and watches', therefore: 'it shows what the rulers cared most about' }
    ],
    read: ['A visitor describing guards on every bridge', 'A Mongol official boasting about Kinsay’s booming markets', 'A Song scholar describing the city closing its gates to outsiders'],
    plain: ['What did the khan’s rule focus on in Kinsay?', 'Did the rulers focus mainly on the economy?', 'Did the rulers make everyone’s culture the same?'],
    meaning: 'Ten guards on each of 12,000 bridges, watching all night for treason: the focus is security.',
    trapIdx: 0,
    trap: 'A fits the first paragraph, which mentions silk and paper money. But the question asks how the city was governed, and the second paragraph is all about guards.'
  };

  W['u2_2.5_4'] = {
    type: 'bestillustrates',
    hq: 'most useful to a historian as evidence of',
    hs: ['everywhere found brothers in the faith who welcomed me and honored the law of Islam'],
    src: [
      { tag: 'WHO', since: 'Ibn Battuta traveled across the Muslim world', therefore: 'he can compare many regions' },
      { tag: 'WHEN', since: 'it is the 1300s', therefore: 'Islam had spread far along trade routes' }
    ],
    read: ['A traveler finding fellow Muslims everywhere', 'A traveler complaining that no one would host him', 'A traveler describing Islam fading in Asia'],
    plain: ['What does his welcome show?', 'Was Islam declining across Afro-Eurasia?', 'Were Muslim communities cut off from each other?'],
    meaning: 'Turks, Persians and Indians all welcomed him as a fellow Muslim. A shared Islamic culture stretched across the trade networks.',
    trapIdx: 2,
    trap: 'C is the opposite. Being welcomed in many lands shows Muslim communities were connected, not isolated.'
  };

  W['u2_2.6_0'] = {
    type: 'causation',
    hq: 'most directly made possible by',
    hs: ['Genoese ships arriving in Sicily from the Black Sea port of Caffa carried the plague'],
    src: [
      { tag: 'WHAT', since: 'it describes the Black Death', therefore: 'look for how the disease traveled' },
      { tag: 'WHEN', since: 'it is 1347', therefore: 'the Atlantic voyages have not happened yet' }
    ],
    read: ['A summary of how plague spread by ship and trade', 'A Crusader’s letter about returning home from Jerusalem', 'A Ming admiral’s log from a voyage to Africa'],
    plain: ['What carried the plague west?', 'Did returning Crusader armies spread it?', 'Did the Columbian Exchange carry it?'],
    meaning: 'Ships from a Black Sea trade port brought the plague. Trade routes from Central Asia to the Mediterranean carried it west.',
    trapIdx: 2,
    trap: 'C is from the wrong century: the Columbian Exchange began after 1492. Check the date before picking a cause.'
  };

  W['u2_2.6_1'] = {
    type: 'causation',
    hq: 'a common consequence in western Europe',
    hs: ['killing an estimated one-third or more of the population in many regions'],
    src: [
      { tag: 'WHAT', since: 'it describes the Black Death', therefore: 'the effects follow from losing so many people' },
      { tag: 'WHEN', since: 'the question asks about the decades after 1351', therefore: 'look for what changed once the plague passed' }
    ],
    read: ['A summary of how many people the plague killed', 'A lord’s report on adding new serfs to his estate', 'A merchant’s complaint that all Asian trade has stopped'],
    plain: ['What happened to workers?', 'Did the number of serfs grow quickly?', 'Did trade with Asia stop for a century?'],
    meaning: 'With so many dead, workers were scarce. Surviving peasants could demand higher wages.',
    trapIdx: 0,
    trap: 'A gets it backward. Fewer workers gave peasants more power, which weakened serfdom instead of growing it.'
  };

  W['u2_2.6_3'] = {
    type: 'bestillustrates',
    hq: 'The diffusion described best illustrates',
    hs: ['carried crops such as sugarcane, citrus fruits, cotton, and rice', 'along with new irrigation techniques'],
    src: [
      { tag: 'WHAT', since: 'it describes crops moving across Dar al-Islam', therefore: 'it is about trade and expansion moving farming' },
      { tag: 'WHEN', since: 'it covers 700 to 1400', therefore: 'the Columbian Exchange is centuries later' }
    ],
    read: ['A summary of crops spreading through Muslim lands', 'A Mongol law banning farming on the steppe', 'A Spanish record of crops brought from the Americas'],
    plain: ['How did crops spread?', 'Was this the Columbian Exchange?', 'Did farming decline in Muslim lands?'],
    meaning: 'Muslim farmers and merchants carried crops and irrigation across a huge, connected region. Trade and expanding states spread farming.',
    trapIdx: 0,
    trap: 'A is a famous crop exchange, but it began after 1492 and involved the Americas. Check the dates and places in the source.'
  };

  W['u2_2.7_0'] = {
    type: 'context',
    hq: 'The difference described is best explained by',
    hs: ['moving goods overland by caravan was slow and expensive', 'Ships in the Indian Ocean could carry much heavier cargoes'],
    src: [
      { tag: 'WHAT', since: 'it compares two trade networks', therefore: 'the answer explains why they carried different goods' },
      { tag: 'WHEN', since: 'it covers 1200 to 1450', therefore: 'both networks were busy at once' }
    ],
    read: ['A summary comparing land and sea trade', 'A Mongol order banning trade on the Silk Roads', 'A sailor’s log listing silk as his only cargo'],
    plain: ['Why did ships carry bulk goods?', 'Did the Mongols ban Silk Road trade?', 'Did the Indian Ocean trade lack luxury goods?'],
    meaning: 'Caravans were slow and costly, so they carried light luxuries. Ships carried big loads cheaply, so bulk goods went by sea.',
    trapIdx: 0,
    trap: 'A is the opposite of what the Mongols did: they protected Silk Road trade. The source explains the difference by cost, not by a ban.'
  };

  W['u2_2.7_3'] = {
    type: 'bestillustrates',
    hq: 'The growth of these cities best illustrates',
    hs: ['all grew into wealthy cities between 1200 and 1450'],
    src: [
      { tag: 'WHAT', since: 'it lists cities on four different trade routes', therefore: 'the common thread is trade' },
      { tag: 'WHEN', since: 'it covers 1200 to 1450', therefore: 'factories do not exist yet' }
    ],
    read: ['A summary of cities that grew rich on trade routes', 'A report on cities shrinking after the Mongol conquests', 'A list of factories built in Asian port cities'],
    plain: ['Why did cities on trade routes grow rich?', 'Did city life decline after the Mongol conquests?', 'Did factories spread to Asian ports?'],
    meaning: 'Samarkand, Timbuktu, Kilwa and Malacca sat on different trade routes. Expanding trade made commercial cities grow.',
    trapIdx: 2,
    trap: 'C is from the wrong era: factories and machines came with industrialization, centuries later.'
  };

  W['u2_2.3_2'] = {
    type: 'bestillustrates',
    hq: 'demonstrates which of the following about the Indian Ocean trade',
    hs: ['sea lanes linking East Africa, Arabia, Persia, India, Southeast Asia, and China'],
    src: [
      { tag: 'WHAT', since: 'it is a map of Indian Ocean trade routes', therefore: 'the routes show who was connected' },
      { tag: 'WHEN', since: 'it covers 1200 to 1450', therefore: 'Europeans have not entered the Indian Ocean yet' }
    ],
    read: ['A map of sea lanes across the Indian Ocean', 'A map of European ships ruling the Indian Ocean', 'A map of trade routes that avoid East Africa'],
    plain: ['How many regions did the trade connect?', 'Did monsoons block trade with East Africa?', 'Were Europeans the main carriers of goods?'],
    meaning: 'Sea lanes link East Africa, Arabia, Persia, India, Southeast Asia and China. Most regions around the ocean took part.',
    trapIdx: 1,
    trap: 'B is from the wrong era: Europeans did not reach the Indian Ocean until 1498. Check the dates on the source line.'
  };

  /* ============ UNIT 3 ============ */
  W['u3_3.1_2'] = {
    type: 'bestillustrates',
    hq: 'supported by the map',
    hs: ['Multiple routes converge through the Middle East and Anatolia'],
    src: [
      { tag: 'WHAT', since: 'it is a map of trade routes around 1500', therefore: 'the answer has to be visible on the map' },
      { tag: 'WHERE', since: 'routes meet in the Middle East and Anatolia', therefore: 'whoever ruled there sat at the crossroads' }
    ],
    read: ['A map of where Afro-Eurasian trade routes met', 'A map of Indian Ocean ports that left out the Middle East', 'A map of West African trade with eastern Europe'],
    plain: ['Which empire sat where the routes came together?', 'Did Middle Eastern states skip Indian Ocean trade?', 'Did the Delhi Sultanate mainly trade silk by sea?'],
    meaning: 'Routes converge in Anatolia and the Middle East, which the Ottomans ruled by 1500. The Ottomans sat at the crossroads.',
    trapIdx: 0,
    trap: 'A contradicts the map, which shows Middle Eastern routes linking to the Indian Ocean. Check each choice against what the map actually shows.'
  };

  W['u3_3.1_3'] = {
    type: 'causation',
    hq: 'contributed most directly to the Mughal Empire’s territorial expansion',
    look: 'Neither source is about war. The question says "based on your knowledge," so you need outside knowledge: how did the Mughals conquer so much of South Asia?',
    src: [
      { tag: 'WHAT', since: 'the sources show Mughal religious life', therefore: 'they do not answer a question about conquest' },
      { tag: 'WHEN', since: 'the Mughals rose in the 1500s', therefore: 'this is the age of gunpowder empires' }
    ],
    read: ['Sources about Mughal and Sikh religious life', 'A Mughal general’s report on cannons in battle', 'A Safavid treaty of friendship with the Mughals'],
    plain: ['What helped the Mughals expand?', 'Did the Mughals convert to Sikhism?', 'Did friendly neighbors help them grow?'],
    meaning: 'The Mughals were a gunpowder empire. Cannons and firearms let them conquer across the subcontinent.',
    trapIdx: 1,
    trap: 'B borrows Sikhism from Source 2, but the Mughals never adopted it. When a question asks for outside knowledge, do not force an answer out of the sources.'
  };

  W['u3_3.2_0'] = {
    type: 'bestillustrates',
    hq: 'an example of',
    hs: ['he would rather bury it in the ground and continue to appear poor'],
    src: [
      { tag: 'WHO', since: 'Bernier was a French visitor writing to a minister', therefore: 'he describes Mughal taxes as harsh' },
      { tag: 'WHAT', since: 'the third paragraph shows people hiding wealth', therefore: 'they are dodging the tax collectors' }
    ],
    read: ['People hiding wealth from officials', 'A Mughal emperor praising his fair tax collectors', 'A merchant describing how he grew rich in Delhi'],
    plain: ['Why bury your money?', 'Were they fighting over religion?', 'Were they rising in society?'],
    meaning: 'Burying money and pretending to be poor keeps it away from tax collectors. It is quiet resistance to the state taking revenue.',
    trapIdx: 2,
    trap: 'C is the opposite. Bernier says success only "provokes the greed" of officials, so people hide wealth instead of rising.'
  };

  W['u3_3.3_0'] = {
    type: 'causation',
    hq: 'most directly strengthened Sunni religious scholars’ role',
    hs: ['have pronounced them forbidden, branding those who approve of them as infidels'],
    src: [
      { tag: 'WHO', since: 'Çelebi was an Ottoman official', therefore: 'he describes a religious dispute inside the empire' },
      { tag: 'WHAT', since: 'Sunni scholars are enforcing strict rules', therefore: 'something pushed the empire to stress Sunni orthodoxy' }
    ],
    read: ['A scholar describing Sunni clerics policing Sufis', 'A Sufi leader’s letter thanking the Sunni scholars', 'A sultan’s order freeing all religious practice'],
    plain: ['What rivalry made Sunni rules stricter?', 'Did the founding of the Mughal Empire strengthen them?', 'Did conquering Constantinople strengthen them?'],
    meaning: 'The Ottomans’ rival, the Safavids, were Shi’a. That rivalry pushed the empire to enforce Sunni orthodoxy, and scholars gained power.',
    trapIdx: 1,
    trap: 'B is a huge Ottoman event, but it happened in 1453 and has nothing to do with Sunni versus Shi’a. Look for a cause tied to religious rivalry.'
  };

  W['u3_3.3_4'] = {
    type: 'bestillustrates',
    hq: 'often relied on',
    hs: ['Sinan himself was born into an Ottoman Greek Christian family, but was converted to Islam'],
    src: [
      { tag: 'WHO', since: 'Sinan was the empire’s greatest architect', therefore: 'his career shows how the state found talent' },
      { tag: 'WHAT', since: 'the note says he was born Christian and recruited as a boy', therefore: 'the devshirme is behind his career' }
    ],
    read: ['A biography of a Christian-born Ottoman architect', 'A sultan’s order drafting every man into the army', 'A priest describing his duties in an Ottoman court'],
    plain: ['Whom did empires recruit?', 'Did empires break up old noble families?', 'Did empires draft huge armies of commoners?'],
    meaning: 'A Christian-born boy rose to be the sultan’s architect. Empires drew officials from their diverse peoples.',
    trapIdx: 3,
    trap: 'D is a real role in empires, but Sinan was an architect, not a cleric. Match the example in the source: a recruited outsider who served the state.'
  };

  W['u3_3.3_5'] = {
    type: 'causation',
    hq: 'most directly helps to explain the presence of the scholars',
    hs: ['three Jesuit missionaries and scholars who served at the courts of Chinese emperors'],
    src: [
      { tag: 'WHO', since: 'Du Halde was a French Jesuit', therefore: 'he celebrates Jesuit work in China' },
      { tag: 'WHAT', since: 'the scholars are Jesuit missionaries', therefore: 'ask why the Catholic Church sent them abroad' }
    ],
    read: ['An engraving of Jesuit missionaries in China', 'A Chinese emperor’s order expelling all foreigners', 'A Protestant pamphlet attacking the Jesuits'],
    plain: ['Why send missionaries abroad?', 'Did the Inquisition expel them from Europe?', 'Did wars of religion make Europe give up on faith?'],
    meaning: 'After the Protestant Reformation cost the Church followers, Catholic orders like the Jesuits looked for new converts overseas.',
    trapIdx: 0,
    trap: 'A misreads the Inquisition, which targeted the Church’s enemies. The Jesuits were the Church’s own missionaries, sent out by choice.'
  };

  W['u3_3.3_6'] = {
    type: 'purpose',
    hq: 'question the objectivity of his portrayal',
    hs: ['depicted as men of faith, science, and learning'],
    src: [
      { tag: 'WHO', since: 'Du Halde was a Jesuit himself', therefore: 'he had reason to make Jesuits look good' },
      { tag: 'WHAT', since: 'the scholars are shown as men of faith and science', therefore: 'the portrayal is very flattering' }
    ],
    read: ['A Jesuit’s flattering image of Jesuit scholars', 'A Chinese painter’s portrait of court astronomers', 'A Protestant cartoon mocking Catholic missionaries'],
    plain: ['Which fact suggests bias?', 'Does serving a French noble cast doubt on him?', 'Does never visiting China cast doubt on him?'],
    meaning: 'A Jesuit writing from Jesuit reports about Jesuits has a clear reason to make them look good. That is a bias problem.',
    trapIdx: 1,
    trap: 'B raises a real question about accuracy, since he never went to China. But objectivity is about bias, and the bias comes from being a Jesuit.'
  };

  W['u3_3.3_9'] = {
    type: 'bestillustrates',
    hq: 'the audience of the sermon is an illustration of the fact that',
    hs: ['If I were an emperor, a king, or a prince in a campaign against the Turks'],
    src: [
      { tag: 'WHO', since: 'Luther had been banned by the pope', therefore: 'he needed protectors' },
      { tag: 'TO WHOM', since: 'he addressed a German prince', therefore: 'a powerful noble was willing to hear him' }
    ],
    read: ['A reformer advising a German prince', 'A pope warning German nobles to obey him', 'A prince ordering Luther’s arrest'],
    plain: ['What does a prince listening to Luther show?', 'Did papal alliances cause persecution in Germany?', 'Did Protestant nobles refuse to fight without Catholics?'],
    meaning: 'A prince receiving advice from a banned reformer shows German nobles protecting and supporting early Protestants.',
    trapIdx: 3,
    trap: 'D overreads Luther’s view of holy war. He advises a prince on how to fight, which is not pacifism. Read what the source actually says the prince should do.'
  };

  W['u3_3.3_11'] = {
    type: 'causation',
    hq: 'all of the following were likely factors contributing to Sikhism’s popularity in India EXCEPT',
    hs: ['We human beings are neither Hindus nor Muslims', 'Worthless is caste and worthless an exalted name'],
    src: [
      { tag: 'WHO', since: 'the sayings come from Guru Nanak, Sikhism’s founder', therefore: 'they show what drew people to the new faith' },
      { tag: 'WHEN', since: 'it is about 1500', therefore: 'the British had not yet arrived in India' }
    ],
    read: ['Sayings of Sikhism’s founder', 'A Mughal law banning the Sikh faith', 'A British officer describing Sikh soldiers'],
    plain: ['Which was NOT a reason?', 'Did it blend Hindu and Muslim ideas?', 'Did it reject the caste system?'],
    meaning: 'EXCEPT means find the false one. Three choices match the sayings. Resisting the British cannot be a reason in 1500.',
    trapIdx: 0,
    trap: 'A is a true reason, shown in "neither Hindus nor Muslims." In an EXCEPT question, every true choice is a trap. Look for the one that does not fit: the British came much later.'
  };

  W['u3_3.4_1'] = {
    type: 'purpose',
    hq: 'likely important to Golkonda rulers mostly because it',
    hs: ['the wedding of the Muslim ruler of Golkonda and his Hindu bride'],
    src: [
      { tag: 'WHO', since: 'it was painted in the rulers’ own palace', therefore: 'it shows what they wanted to be seen' },
      { tag: 'WHAT', since: 'it shows a Muslim ruler marrying a Hindu bride', therefore: 'it joins the two faiths' }
    ],
    read: ['A palace painting of a Muslim-Hindu royal wedding', 'A painting celebrating Muslim armies conquering India', 'A painting of farm laborers working for the court'],
    plain: ['Why show this wedding?', 'Did it remind Muslims of the conquests?', 'Did it end patriarchy in India?'],
    meaning: 'A Muslim ruling class over a mostly Hindu population. The wedding symbolized unity between the rulers and the people.',
    trapIdx: 1,
    trap: 'B would divide the kingdom, not unite it. A painting of an interfaith wedding with attendants of both religions points toward unity.'
  };

  /* ============ UNIT 4 ============ */
  W['u4_4.1_1'] = {
    type: 'causation',
    hq: 'most directly made possible by the technologies described',
    hs: ['combined square sails with triangular lateen sails'],
    src: [
      { tag: 'WHAT', since: 'it lists the caravel, the compass and the astrolabe', therefore: 'these are tools for sailing far from land' },
      { tag: 'WHEN', since: 'it is the 1400s, in Portugal', therefore: 'look for Portuguese voyages' }
    ],
    read: ['A summary of new sailing tools', 'A Mongol general’s plan to invade Song China by sea', 'A Persian ruler’s order to build inns along the roads'],
    plain: ['What did these tools let sailors do?', 'Did these tools help the Mongols conquer China?', 'Did these tools help Buddhism reach Japan?'],
    meaning: 'Ships that could sail against the wind and tools to find your position far from land made long Portuguese voyages possible.',
    trapIdx: 3,
    trap: 'D is about overland travel, not sailing. Ship designs and navigation tools point to ocean voyages.'
  };

  W['u4_4.2_0'] = {
    type: 'purpose',
    hq: 'Columbus\'s emphasis on gold and spices most directly reflects',
    hs: ['claimed that it held many spices and great mines of gold'],
    src: [
      { tag: 'WHO', since: 'Columbus wrote to win more support', therefore: 'he describes what his backers wanted most' },
      { tag: 'WHEN', since: 'it is 1493', therefore: 'Europeans wanted Asian goods without paying middlemen' }
    ],
    read: ['Columbus promoting his voyage', 'A Spanish priest planning to convert Asia to Protestantism', 'A Taíno chief asking for European cloth and tools'],
    plain: ['Why stress gold and spices?', 'Did Spain want to spread Protestant Christianity?', 'Did Native Americans want European goods most?'],
    meaning: 'Spices and gold were what Europeans craved from Asia. Columbus stressed them because his backers wanted direct access to that trade.',
    trapIdx: 0,
    trap: 'A has a factual error: Spain was Catholic, not Protestant. One wrong word makes a choice wrong.'
  };

  W['u4_4.2_2'] = {
    type: 'bestillustrates',
    hq: 'This episode best illustrates that',
    hs: ['were unimpressed by the goods he offered, such as cloth, hats, and washbasins'],
    src: [
      { tag: 'WHO', since: 'da Gama was the first Portuguese captain to reach India by sea', therefore: 'this is Europe’s first direct trade attempt there' },
      { tag: 'WHEN', since: 'it is 1498', therefore: 'Asian markets were rich and long established' }
    ],
    read: ['Indian traders shrugging at Portuguese goods', 'A Portuguese captain seizing all trade in the Indian Ocean', 'An Indian ruler closing every port to foreign ships'],
    plain: ['What did Europeans lack at first?', 'Did Portugal quickly take over all Indian Ocean trade?', 'Did Asian merchants depend on European goods?'],
    meaning: 'Indian merchants did not want what da Gama brought. Europeans had few goods to sell, so they turned to force and later American silver.',
    trapIdx: 2,
    trap: 'C is the opposite of the source: the merchants were "unimpressed" by European goods. Read the reaction the source describes.'
  };

  W['u4_4.3_0'] = {
    type: 'causation',
    hq: 'most directly contributed to',
    hs: ['maize and sweet potatoes could be grown on hillsides that were unsuitable for rice'],
    src: [
      { tag: 'WHAT', since: 'it is about American crops spreading after 1492', therefore: 'it is part of the Columbian Exchange' },
      { tag: 'WHERE', since: 'the crops grew where rice could not', therefore: 'they added new farmland, not replaced old crops' }
    ],
    read: ['A summary of American crops spreading', 'A Chinese farmer’s complaint that rice no longer grows', 'A doctor’s report on smallpox reaching Europe'],
    plain: ['What did more food do?', 'Did rice farming collapse in China?', 'Did smallpox spread from the Americas to Europe?'],
    meaning: 'New crops grew on land that could not grow rice. More food meant more people across Afro-Eurasia.',
    trapIdx: 0,
    trap: 'A gets the direction wrong. The new crops added food on top of rice, so population grew instead of falling.'
  };

  W['u4_4.3_3'] = {
    type: 'bestillustrates',
    hq: 'NOT used as evidence',
    hs: ['[Years later] the Dominican friars arrived, and thereafter our lord the Spaniards conquered all the towns'],
    src: [
      { tag: 'WHO', since: 'the author was Maya, writing about his own people', therefore: 'he records what he saw, not modern science' },
      { tag: 'WHAT', since: 'the plague comes first and the Spanish come "years later"', therefore: 'he does not connect the two' }
    ],
    read: ['A Maya writer recording plague, then conquest', 'A Spanish doctor explaining how disease spread to the Maya', 'A friar blaming the Maya for the epidemic'],
    plain: ['Why isn’t it linked to the plague?', 'Was the king’s death part of the evidence?', 'Was the loss of priests part of the evidence?'],
    meaning: 'In the passage, the Spanish arrive "years later," and the author never says they brought the disease. So he does not use them as evidence of its toll.',
    trapIdx: 2,
    trap: 'C is evidence the author does use: the elders and priests died. The question asks what is NOT used, so cross off everything he does use.'
  };

  W['u4_4.4_0'] = {
    type: 'causation',
    hq: 'most directly resulted from',
    hs: ['carrying silver mined in Mexico and Peru to buy Chinese silk and porcelain'],
    src: [
      { tag: 'WHAT', since: 'galleons carried silver to Manila to buy Chinese goods', therefore: 'China is the buyer of the silver' },
      { tag: 'WHEN', since: 'it began in 1571', therefore: 'Ming China was switching its taxes to silver' }
    ],
    read: ['A summary of silver crossing the Pacific', 'A Spanish general’s report on conquering southern China', 'A Dutch report on taking over Mexico’s silver mines'],
    plain: ['Why did silver flow to China?', 'Did Spain conquer southern China?', 'Did the Dutch control the American mines?'],
    meaning: 'Ming China ran its economy and taxes on silver, so it paid well for it. American silver crossed the Pacific to meet that demand.',
    trapIdx: 0,
    trap: 'A invents a conquest. Spain traded with China through Manila; it never conquered southern China. Check whether a choice really happened.'
  };

  W['u4_4.4_1'] = {
    type: 'bestillustrates',
    hq: 'The powers of the company described best illustrate',
    hs: ['could raise money from shareholders, build forts, keep armies, and sign treaties'],
    src: [
      { tag: 'WHAT', since: 'it describes the Dutch East India Company', therefore: 'it is a private company acting almost like a state' },
      { tag: 'WHEN', since: 'it was chartered in 1602', therefore: 'Europeans were building trading empires in Asia' }
    ],
    read: ['A summary of a company’s state-like powers', 'A report on European trade shrinking in Asia', 'A Mughal admiral describing his royal navy'],
    plain: ['What kind of company was this?', 'Was European overseas trade declining?', 'Did the Mughal navy control the Indian Ocean?'],
    meaning: 'Shareholders funded it, and it had forts, armies and treaties. A joint-stock company expanded European trade and control.',
    trapIdx: 0,
    trap: 'A is the opposite. A company that controlled the spice islands shows European trade growing, not shrinking.'
  };

  W['u4_4.6_1'] = {
    type: 'bestillustrates',
    hq: 'Nzinga\'s actions best illustrate',
    hs: ['negotiated with the Portuguese, allied with the Dutch, and fought wars'],
    src: [
      { tag: 'WHO', since: 'Nzinga ruled Ndongo and Matamba', therefore: 'she was defending an African kingdom' },
      { tag: 'WHEN', since: 'it is the 1620s to 1650s', therefore: 'the Portuguese were expanding slave raiding in Angola' }
    ],
    read: ['A summary of a queen resisting Portugal', 'A Portuguese governor praising a loyal African queen', 'An Ottoman envoy describing an alliance with Angola'],
    plain: ['How did Nzinga resist?', 'Did she adopt Islam to gain Ottoman allies?', 'Did the slave trade end in Central Africa?'],
    meaning: 'She negotiated, made alliances and went to war. African states used diplomacy and force to resist European encroachment.',
    trapIdx: 3,
    trap: 'D is the opposite: Nzinga fought to keep the Portuguese out of the interior. A choice that credits the colonizer misses the source’s point.'
  };

  W['u4_4.7_2'] = {
    type: 'causation',
    hq: 'seen as a challenge to social conventions',
    hs: ['free women of mixed racial ancestry with their children and servants'],
    src: [
      { tag: 'WHERE', since: 'it is set in Dominica, a British Caribbean colony', therefore: 'society was ranked by race' },
      { tag: 'WHAT', since: 'it shows mixed-race women with servants of their own', therefore: 'it shows people of color in an elite position' }
    ],
    read: ['Mixed-race women shown as elites', 'A painting of enslaved workers in a sugar field', 'A painting of a British governor and his family'],
    plain: ['Why would this upset people?', 'Were women rarely painted then?', 'Were children rarely painted then?'],
    meaning: 'Caribbean society kept elite status for Europeans. Showing women of color with servants challenged that racial ranking.',
    trapIdx: 0,
    trap: 'A is not true: women were common subjects in European art. The challenge came from the race of the women, not from their being women.'
  };

  W['u4_4.8_2'] = {
    type: 'similar',
    hq: 'differed from earlier forms of slavery',
    hs: ['about 12.5 million enslaved Africans were forced onto ships bound for the Americas'],
    src: [
      { tag: 'WHAT', since: 'it gives the size and purpose of the Atlantic slave trade', therefore: 'compare it with earlier slavery' },
      { tag: 'WHEN', since: 'it ran from 1501 to 1866', therefore: 'it was tied to plantations in the Americas' }
    ],
    read: ['A summary of the Atlantic slave trade’s scale', 'A record of war captives held by one African kingdom', 'A Roman law describing how slaves won freedom'],
    plain: ['What made Atlantic slavery different?', 'Was it limited to prisoners of war?', 'Did most enslaved people win freedom quickly?'],
    meaning: 'Millions of people, enslaved for life and their children too, on plantations, justified by race. That scale and form were new.',
    trapIdx: 1,
    trap: 'B describes some earlier slavery, not Atlantic slavery, where freedom was rare and slavery was inherited. Read which system the choice describes.'
  };

  /* ============ UNIT 5 ============ */
  W['u5_5.1_1'] = {
    type: 'purpose',
    hq: 'Bolívar expresses which of the following',
    hs: ['being forbidden to grow European crops', 'or to establish factories of a type the Peninsula itself does not possess'],
    src: [
      { tag: 'WHO', since: 'Bolívar led the fight for independence from Spain', therefore: 'he lists Spain’s wrongs' },
      { tag: 'WHEN', since: 'it is 1815', therefore: 'Spain still ran its colonies for its own benefit' }
    ],
    read: ['Bolívar listing Spain’s trade limits', 'A Spanish official praising free trade in the colonies', 'A socialist attacking government spending in Venezuela'],
    plain: ['What policy angers Bolívar?', 'Was he upset about too few limits on investment?', 'Was he upset about socialist governments spending?'],
    meaning: 'Banned crops, banned factories, trade monopolies: colonies kept as suppliers for Spain. That is mercantilism.',
    trapIdx: 3,
    trap: 'D picks up "serfs" from the passage, but Bolívar uses it as a comparison. His complaints are about trade and production rules, which is mercantilism, not feudalism.'
  };

  W['u5_5.2_0'] = {
    type: 'similar',
    hq: 'unique among the Atlantic revolutions because it',
    hs: ['enslaved people in the French colony of Saint-Domingue revolted', 'became the independent nation of Haiti'],
    src: [
      { tag: 'WHAT', since: 'it summarizes the Haitian Revolution', therefore: 'compare it with the American, French and Latin American revolutions' },
      { tag: 'WHO', since: 'enslaved people led the revolt', therefore: 'this is what set it apart' }
    ],
    read: ['A summary of an uprising of enslaved people', 'A French general’s report restoring royal rule in Haiti', 'A European revolutionary spreading ideas to the colonies'],
    plain: ['What made Haiti different?', 'Was it the only revolution shaped by the Enlightenment?', 'Did it restore the French monarchy in the Caribbean?'],
    meaning: 'Enslaved people overthrew their masters and founded a nation. No other Atlantic revolution did that.',
    trapIdx: 1,
    trap: 'B is false: Enlightenment ideas shaped the American and French revolutions too. Watch for "only" in a choice.'
  };

  W['u5_5.2_2'] = {
    type: 'purpose',
    hq: 'would likely have objected to Bayly’s characterization',
    hs: ['Indian liberal ideas, I argue, were foundational to all forms of Indian nationalism'],
    src: [
      { tag: 'WHO', since: 'Bayly is a British historian', therefore: 'he traces Indian ideas partly to European liberalism' },
      { tag: 'WHAT', since: 'the question asks how Indian historians would push back', therefore: 'think about their point of view on their own nation’s roots' }
    ],
    read: ['A British historian on Indian liberal roots', 'An Indian rebel’s call to restore the Mughal emperor', 'A French critic’s theory of how nations form'],
    plain: ['What would Indian historians stress instead?', 'Did environmental concerns drive nationalism?', 'Were French theories key to Indian nationalism?'],
    meaning: 'Bayly ties nationalism to liberal ideas from Europe. Indian historians would stress India’s own cultural and political traditions.',
    trapIdx: 3,
    trap: 'D names a real event, the 1857 rebellion, but the objection is about where nationalist ideas came from. The answer has to answer Bayly’s claim about ideas.'
  };

  W['u5_5.3_2'] = {
    type: 'causation',
    hq: 'most directly explained by',
    hs: ['Germany developed newer industries, while Britain continued to stress textile production', 'in the chemical industries, Germany has for some time occupied a leading place'],
    src: [
      { tag: 'WHO', since: 'Baron is a British historian writing in 1909', therefore: 'he explains how Germany passed Britain' },
      { tag: 'WHAT', since: 'it describes chemical labs, electricity and steam', therefore: 'these are new science-based industries' }
    ],
    read: ['A historian on Germany’s new industries', 'An American engineer selling car engines in Germany', 'A British mill owner praising textile output'],
    plain: ['What new industry did Germany build?', 'Did American car engines spread to Germany?', 'Did coal become important as a fuel?'],
    meaning: 'Chemicals, electricity and science-run labs were the second industrial revolution. New production methods built Germany’s new industries.',
    trapIdx: 3,
    trap: 'D is true of the first industrial revolution and already old by 1900. Germany pulled ahead with new methods, not with coal.'
  };

  W['u5_5.4_0'] = {
    type: 'causation',
    hq: 'most directly contributed to the overall trend',
    hs: ['1890 | 57 | 9.8% | 12.1%', '1938 | 225 | 34.5% | 63.2%'],
    src: [
      { tag: 'WHAT', since: 'the table shows industry growing from 1890 to 1938', therefore: 'look for a long-running cause' },
      { tag: 'WHEN', since: 'the growth starts by 1890', therefore: 'the cause began before that' }
    ],
    read: ['A table of Japan’s industrial growth', 'A table of Japan’s farm output falling', 'A table of Japan’s trade with Russia'],
    plain: ['What set off this growth?', 'Did taking Manchuria start it?', 'Did beating Russia start it?'],
    meaning: 'Industry and heavy industry rise steadily from 1890. The Meiji reforms, starting in 1868, set that growth in motion.',
    trapIdx: 0,
    trap: 'A came in 1931, long after the growth began in 1890. A cause has to come before the trend starts.'
  };

  W['u5_5.4_2'] = {
    type: 'context',
    hq: 'part of which of the following',
    hs: ['adopt Western technology but not the values and philosophies that produced it'],
    src: [
      { tag: 'WHO', since: 'Yuan is a historian of China writing in 2010', therefore: 'he describes Qing policy' },
      { tag: 'WHEN', since: 'it is the late 1800s', therefore: 'China was trying to resist Western pressure' }
    ],
    read: ['A historian on Qing reform plans', 'A rebel leader predicting the end of the world', 'A Qing official welcoming foreign colonies'],
    plain: ['Which movement is this?', 'Was this a millenarian movement?', 'Was China welcoming colonial rule?'],
    meaning: 'Take Western technology, keep Chinese values: that is the Self-Strengthening Movement.',
    trapIdx: 3,
    trap: 'D is from the wrong era: communism grew in China in the 1920s. Check the date the passage describes.'
  };

  W['u5_5.5_2'] = {
    type: 'bestillustrates',
    hq: 'best supported by the data in the table',
    hs: ['Loans to Indian or Chinese merchants in India or China'],
    src: [
      { tag: 'WHO', since: 'the data comes from English banks and lenders', therefore: 'it shows where British money went' },
      { tag: 'WHAT', since: 'it lists loans and voyages across Asia', therefore: 'British money funded trade around the world' }
    ],
    read: ['A table of British investments across Asia', 'A table of taxes collected by the British state', 'A table of goods made in British factories'],
    plain: ['What does lending across Asia show?', 'Did old elites invent these practices?', 'Did governments do this lending?'],
    meaning: 'British banks lent money for trade in India, China and Southeast Asia. Finance tied the world economy more closely together.',
    trapIdx: 3,
    trap: 'D misreads the source: these are private banks and lenders, not governments. Check who is doing the lending.'
  };

  W['u5_5.6_1'] = {
    type: 'causation',
    hq: 'in part dependent on which of the following',
    hs: ['In founding the British South Africa Company, the shareholders undertook the occupation and development of a considerable extent of valuable territory'],
    src: [
      { tag: 'WHO', since: 'the chairman is speaking to shareholders', therefore: 'the company runs on investors’ money' },
      { tag: 'WHEN', since: 'it is 1895', therefore: 'new banking and stock practices let companies raise huge sums' }
    ],
    read: ['A chairman reporting to shareholders', 'An Asian worker describing indentured labor', 'A shopkeeper describing new goods for sale'],
    plain: ['How did the company raise money?', 'Did it depend on workers from Asia?', 'Did it depend on more consumer goods?'],
    meaning: 'Shareholders funded the company. New banking and finance practices let it raise money from thousands of investors.',
    trapIdx: 2,
    trap: 'C is in the passage, since telegraph lines are mentioned, but they came after the company was already successful. The success depended on raising money from shareholders.'
  };

  W['u5_5.7_1'] = {
    type: 'context',
    hq: 'developed most directly in opposition to',
    hs: ['from their regard to their own interest'],
    src: [
      { tag: 'WHO', since: 'Smith was a Scottish economist', therefore: 'he argues about how economies should work' },
      { tag: 'WHEN', since: 'it is 1776', therefore: 'governments still ran mercantilist systems' }
    ],
    read: ['An economist praising self-interest', 'A worker calling for revolution against owners', 'A minister praising Britain’s free-trade laws'],
    plain: ['What system was Smith arguing against?', 'Was he answering Karl Marx’s call for revolution?', 'Was Britain already free trade?'],
    meaning: 'If self-interest in free markets feeds everyone, government monopolies and trade limits are the problem. Smith was arguing against mercantilism.',
    trapIdx: 1,
    trap: 'B is from the wrong time: Marx wrote decades after Smith. Run the time period test.'
  };

  W['u5_5.9_2'] = {
    type: 'context',
    hq: 'best understood as',
    hs: ['working twelve or more hours a day and being beaten for falling asleep at their machines'],
    src: [
      { tag: 'WHO', since: 'Parliament heard testimony from child workers', therefore: 'the government was looking into factory conditions' },
      { tag: 'WHEN', since: 'the law came the next year, in 1833', therefore: 'it was a response to what Parliament heard' }
    ],
    read: ['A summary of child workers’ testimony', 'A factory owner’s plan to hire more children', 'A treaty sharing technology with France'],
    plain: ['What kind of law was this?', 'Did it shut down most British industry?', 'Did owners want more child workers?'],
    meaning: 'Parliament heard about children beaten and overworked, then passed a law. Government reform in response to factory conditions.',
    trapIdx: 0,
    trap: 'A goes far too far. The law limited children’s hours; it did not end industry. Watch for extreme choices.'
  };

  /* ============ UNIT 6 ============ */
  W['u6_6.1_1'] = {
    type: 'purpose',
    hq: 'most often used to',
    hs: ['arguing that spreading Christianity and Western education was a moral duty'],
    src: [
      { tag: 'WHO', since: 'the arguments came from Western missionary societies', therefore: 'they saw their work as helping others' },
      { tag: 'WHEN', since: 'it is the 1800s', therefore: 'this is the age of the new imperialism' }
    ],
    read: ['A summary of the missionaries’ "moral duty" claim', 'An African king calling his people to resist by force', 'A colonial law closing every mission school'],
    plain: ['What did the "duty" argument justify?', 'Did it oppose all expansion into Africa and Asia?', 'Did it push colonized people to fight back?'],
    meaning: 'Calling empire a moral duty made colonial rule look like a gift to the colonized. That was the civilizing mission.',
    trapIdx: 0,
    trap: 'A is the opposite. Missionaries who saw spreading Christianity as a duty were part of expansion, not against it.'
  };

  W['u6_6.1_6'] = {
    type: 'similar',
    hq: 'a distinction between colonization and imperialism',
    hs: ['where white colonists carry with them the modes of government', 'incapable of exercising any considerable rights of self-government'],
    src: [
      { tag: 'WHO', since: 'Hobson was an economist who criticized imperialism', therefore: 'he contrasts it with older settler colonies' },
      { tag: 'WHAT', since: 'he compares two kinds of expansion', therefore: 'the answer is the difference he draws' }
    ],
    read: ['An economist contrasting colonies and empire', 'A governor praising tropical colonies for their settlers', 'A settler describing life in a temperate colony'],
    plain: ['How does Hobson tell them apart?', 'Is colonization in the tropics?', 'Does colonization happen where whites won’t settle?'],
    meaning: 'Colonists carry their own government with them; the new imperialism rules people it denies self-government.',
    trapIdx: 0,
    trap: 'A flips Hobson’s geography: he puts imperialism in the tropics and colonization in temperate zones. Check each detail against the source.'
  };

  W['u6_6.2_0'] = {
    type: 'causation',
    hq: 'led most directly to',
    hs: ['punished those who failed to meet quotas with violence, including mutilation'],
    src: [
      { tag: 'WHO', since: 'the Congo was King Leopold’s personal possession', therefore: 'no government oversaw it' },
      { tag: 'WHEN', since: 'it ran from 1885 to 1908', therefore: 'look for what changed in 1908' }
    ],
    read: ['A summary of abuses in Leopold’s Congo', 'A Congolese leader declaring independence', 'A record of the Berlin Conference’s rules'],
    plain: ['What did the outrage change?', 'Did the Congo become independent?', 'Did the outrage cause the Berlin Conference?'],
    meaning: 'International outrage forced Leopold to give up the Congo, and the Belgian government took it over as a colony in 1908.',
    trapIdx: 2,
    trap: 'C came before the abuses, in 1884–85. A cause cannot come after its effect. Check the order of events.'
  };

  W['u6_6.2_4'] = {
    type: 'causation',
    hq: 'most directly resulted from',
    hs: ['transferred sovereignty over India from the British East India Company to the British Crown'],
    src: [
      { tag: 'WHAT', since: 'it describes a change in who ruled India', therefore: 'something showed the old system had failed' },
      { tag: 'WHEN', since: 'the change came in 1858', therefore: 'look at what happened in 1857' }
    ],
    read: ['A summary of the Crown taking over India', 'An Indian leader demanding self-rule in 1858', 'A French diplomat warning Britain out of Asia'],
    plain: ['What event in 1857 caused the change?', 'Did Indian nationalists demand self-rule?', 'Did European rivals force the change?'],
    meaning: 'The Rebellion of 1857 showed the company could not keep control, so the British Crown took over in 1858.',
    trapIdx: 0,
    trap: 'A is too early: organized nationalist demands came later, with the Indian National Congress in 1885. Run the time period test.'
  };

  W['u6_6.3_2'] = {
    type: 'context',
    hq: 'best understood as',
    hs: ['But this was only the spark. Behind it lay decades of resentment'],
    src: [
      { tag: 'WHO', since: 'it is a secondary source', therefore: 'it explains both the trigger and the deeper causes' },
      { tag: 'WHAT', since: 'it calls the cartridges "only the spark"', therefore: 'there were bigger causes underneath' }
    ],
    read: ['A summary of the 1857 rebellion’s causes', 'A sepoy’s letter praising the new Enfield rifle', 'A British officer’s report on peace in India'],
    plain: ['Was it one cause or many?', 'Was it a unified independence movement?', 'Was it caused only by the cartridges?'],
    meaning: 'The cartridges were "only the spark." Behind them lay many old grievances against British rule.',
    trapIdx: 1,
    trap: 'B is the passage’s spark without its fuel. The author says the cartridges were "only the spark." Watch for "solely."'
  };

  W['u6_6.3_3'] = {
    type: 'causation',
    hq: 'most significant because it',
    hs: ['Ethiopian forces surrounded and destroyed an Italian army of 18,000 men'],
    src: [
      { tag: 'WHAT', since: 'it describes an African army beating a European one', therefore: 'that was rare in the Scramble for Africa' },
      { tag: 'WHEN', since: 'it is 1896', therefore: 'most of Africa had just been colonized' }
    ],
    read: ['A summary of Ethiopia’s win at Adwa', 'An Italian general reporting a victory in Ethiopia', 'A treaty giving Ethiopia to Italy'],
    plain: ['Why did beating Italy matter so much?', 'Did all European powers leave Africa?', 'Did it spark resistance everywhere at once?'],
    meaning: 'An African kingdom with modern weapons beat a European army and stayed free. It became a symbol for anti-colonial movements.',
    trapIdx: 1,
    trap: 'B goes far too far. Other powers kept their colonies for decades. Watch for "all" and "immediately."'
  };

  W['u6_6.4_4'] = {
    type: 'bestillustrates',
    hq: 'best illustrates which pattern of economic imperialism',
    hs: ['Egyptian farmers who once grew food were shifted to cotton monoculture'],
    src: [
      { tag: 'WHAT', since: 'it describes Egypt growing cotton for British mills', therefore: 'Egypt’s economy served Britain’s industry' },
      { tag: 'WHEN', since: 'it is around 1880', therefore: 'this is the height of economic imperialism' }
    ],
    read: ['A summary of Egypt growing cotton for Britain', 'A British plan to stop Egypt from farming at all', 'An Egyptian factory owner growing rich from free trade'],
    plain: ['Whose needs did Egypt’s economy serve?', 'Did Britain suppress Egyptian farming?', 'Did free trade help Egypt industrialize?'],
    meaning: 'Farmers switched from food to cotton for British mills and became dependent on world prices they could not control.',
    trapIdx: 0,
    trap: 'A is the opposite: Britain wanted more Egyptian cotton, not less farming. Read what the source says Egypt was pushed to grow.'
  };

  W['u6_6.5_0'] = {
    type: 'context',
    hq: 'best understood as an example of',
    hs: ['seized and destroyed more than 20,000 chests of British opium', 'Britain responded with war'],
    src: [
      { tag: 'WHO', since: 'Lin Zexu was a Chinese official', therefore: 'China was trying to stop the opium trade' },
      { tag: 'WHEN', since: 'it is 1839', therefore: 'this starts the First Opium War' }
    ],
    read: ['A summary of how the Opium War began', 'A British letter supporting China’s opium ban', 'A Qing plan to build Western-style factories'],
    plain: ['Why did Britain go to war?', 'Did Britain back China’s ban?', 'Was this the Self-Strengthening Movement?'],
    meaning: 'China destroyed British opium, and Britain went to war to keep the trade open. Force used to protect merchants’ markets.',
    trapIdx: 0,
    trap: 'A is the opposite: Britain went to war against the ban. Read what Britain actually did in the source.'
  };

  W['u6_6.6_1'] = {
    type: 'causation',
    hq: 'best understood as a response to',
    hs: ['After Britain abolished slavery in 1833–1834'],
    src: [
      { tag: 'WHAT', since: 'plantation owners recruited workers from India', therefore: 'they needed workers' },
      { tag: 'WHEN', since: 'it came right after slavery ended', therefore: 'the plantations had lost their enslaved workforce' }
    ],
    read: ['Plantations hiring Indian workers', 'A report on too many people in the Caribbean', 'A merchant selling Caribbean sugar in India'],
    plain: ['Why were workers needed?', 'Was the Caribbean overcrowded?', 'Did India want Caribbean sugar?'],
    meaning: 'When slavery ended, plantations lost their workers. They filled the gap with indentured laborers from India.',
    trapIdx: 1,
    trap: 'B gets the problem backward: plantations had too few workers, not too many people. Ask what the recruiting was meant to fix.'
  };

  W['u6_6.7_3'] = {
    type: 'causation',
    hq: 'most directly resulted from which development',
    hs: ['The Chinese must go!', 'the first major federal law restricting immigration by nationality and race'],
    src: [
      { tag: 'WHAT', since: 'it opens with a rally cry against the Chinese', therefore: 'anti-immigrant anger drove the law' },
      { tag: 'WHEN', since: 'it is 1882', therefore: 'Chinese workers competed with white workers in the West' }
    ],
    read: ['A summary of how the Exclusion Act passed', 'A Chinese official asking America to stop migration', 'A study showing Chinese immigrants committed more crime'],
    plain: ['What fueled the law?', 'Did crime statistics support it?', 'Did China ask for it?'],
    meaning: '"The Chinese must go!" at rally after rally: nativist anger over jobs, race and culture produced the law.',
    trapIdx: 0,
    trap: 'A takes the prejudice at face value. The law came from nativist fear, not real evidence. Do not mistake a bias for a fact.'
  };

  /* ============ UNIT 7 ============ */
  W['u7_7.1_3'] = {
    type: 'context',
    hq: 'best explained in the context of',
    hs: ['The Turkish nation is not a nation that lives by begging from others'],
    src: [
      { tag: 'WHO', since: 'Kemal founded the Turkish Republic', therefore: 'he speaks for a nation that fought for its land' },
      { tag: 'WHEN', since: 'it is the 1920s', therefore: 'the Allies had tried to carve up Turkey after World War I' }
    ],
    read: ['Kemal insisting Turkey answers to no one', 'A Soviet agent spreading Marxism in Turkey', 'A League official ruling Arab mandates'],
    plain: ['What threat was Kemal answering?', 'Was this about Marxism spreading from Moscow?', 'Was this about the Great Depression?'],
    meaning: 'After the Ottoman collapse, the Allies tried to divide Turkish land. Kemal’s claim that sovereignty "is taken" answers that.',
    trapIdx: 1,
    trap: 'B is close in time and place, but the mandates covered Arab lands, not Anatolia. Kemal is defending Turkish territory itself.'
  };

  W['u7_7.2_0'] = {
    type: 'purpose',
    hq: 'most directly significant to understanding the editorial',
    hs: ["This 'peace' offered to Germany is a mockery of President Wilson's principles"],
    src: [
      { tag: 'WHO', since: 'it is a neutral Dutch newspaper', therefore: 'it judges the treaty from outside the war' },
      { tag: 'WHEN', since: 'it is June 1919', therefore: 'Wilson’s Fourteen Points had promised a fair peace' }
    ],
    read: ['A Dutch paper calling the treaty unfair', 'An American paper praising the treaty’s harsh terms', 'A German general demanding revenge on France'],
    plain: ['What promise did this break?', 'Did Wilson want a world organization?', 'Did Wilson want to stop Bolshevism?'],
    meaning: 'Wilson promised a peace without revenge. The editorial says punishing Germany so harshly mocks that promise.',
    trapIdx: 0,
    trap: 'A is a real Wilson goal, the League of Nations, but it does not explain the editorial’s complaint. The paper is angry about revenge, so match that.'
  };

  W['u7_7.2_5'] = {
    type: 'context',
    hq: 'can best be explained in the context of',
    hs: ['Russia and Germany are representatives of the conservative principle in the civilized world'],
    src: [
      { tag: 'WHO', since: 'Durnovo was a conservative Russian minister', therefore: 'he worries about old regimes falling' },
      { tag: 'WHAT', since: 'he means rule by monarchs and landowners', therefore: 'look for a revolt against that kind of order' }
    ],
    read: ['A minister fearing that old regimes will fall', 'A socialist celebrating revolution in the Balkans', 'A British general describing the Boer War'],
    plain: ['Which revolt toppled an old order?', 'Did Balkan socialists end Austria-Hungary by 1910?', 'Was this about the Boer War?'],
    meaning: 'The "conservative principle" means rule by old elites. Mexico’s revolution, which ousted dictator Díaz in 1910, weakened exactly that.',
    trapIdx: 1,
    trap: 'B is from the wrong time: Austria-Hungary collapsed in 1918, not in the first decade of the century. Check the dates in the question.'
  };

  W['u7_7.2_7'] = {
    type: 'causation',
    hq: 'most directly explained by which development in Europe',
    hs: ['a Balkan war provokes a clash between the two power blocs'],
    src: [
      { tag: 'WHO', since: 'Giolitti was Italy’s prime minister', therefore: 'he weighs the risks of war for all of Europe' },
      { tag: 'WHEN', since: 'it is 1911', therefore: 'Europe was split into two alliances' }
    ],
    read: ['Italy’s leader fearing a chain reaction', 'A Balkan leader calling for a quick local war', 'A French general praising new weapons'],
    plain: ['Why could one small war spread?', 'Would ethnic mix alone spark civil wars?', 'Was it fear of deadlier weapons?'],
    meaning: 'The "two power blocs" were alliances that bound countries to defend each other. One small war could pull them all in.',
    trapIdx: 2,
    trap: 'C was a real worry, but Giolitti’s fear is a chain reaction between "power blocs." That points to alliances, not weapons.'
  };

  W['u7_7.3_0'] = {
    type: 'bestillustrates',
    hq: 'types of evidence does Watson cite',
    hs: ['Examination of muster rolls and letters demonstrates that a broad cross-section of urban society enlisted'],
    src: [
      { tag: 'WHO', since: 'Watson is a British historian', therefore: 'he supports claims with evidence' },
      { tag: 'WHAT', since: 'the claim is that support was not limited to the young', therefore: 'look for evidence about who enlisted' }
    ],
    read: ['A historian on who joined Germany’s army', 'A German officer’s diary from the front', 'A propaganda chief’s report on his posters'],
    plain: ['What evidence shows who joined?', 'Did he use newspaper articles for this?', 'Did he use propaganda records?'],
    meaning: 'Muster rolls list who enlisted, and letters show why. Together they show a broad mix of people, not just the young.',
    trapIdx: 1,
    trap: 'B is in the passage, but Watson uses the newspaper to show propaganda, not who enlisted. Match the evidence to the specific claim.'
  };

  W['u7_7.4_0'] = {
    type: 'bestillustrates',
    hq: 'best explains the historical significance of views such as those',
    hs: ["it is the government's responsibility to guarantee the fulfillment of this duty"],
    src: [
      { tag: 'WHO', since: 'it comes from Vargas’s government in Brazil', therefore: 'it describes state policy' },
      { tag: 'WHEN', since: 'it is around 1940', therefore: 'this follows the Great Depression' }
    ],
    read: ['A government taking charge of workers’ welfare', 'A government promising to keep out of the economy', 'A government using race to drive the economy'],
    plain: ['What role did governments take on?', 'Did leaders use the crisis to repress people?', 'Did states return to liberal economics?'],
    meaning: 'A government guaranteeing wages, hours and vacations is taking an active role in the economy, a common response to the Depression.',
    trapIdx: 3,
    trap: 'D is the opposite: laissez-faire liberal policy keeps government out, and this document puts government in charge. Read what role the state claims.'
  };

  W['u7_7.6_0'] = {
    type: 'causation',
    hq: 'the arguments that Hitler makes in the last paragraph',
    hs: ['Germany has never demanded colonies for military purposes, but exclusively for economic purposes', 'our demand for colonies for our densely populated country will be put forward again and again'],
    src: [
      { tag: 'WHO', since: 'Hitler led Nazi Germany', therefore: 'his demands shaped German policy' },
      { tag: 'WHEN', since: 'it is 1937', therefore: 'Germany was preparing for expansion' }
    ],
    read: ['Hitler demanding colonies for Germany', 'A British leader giving Germany its colonies back', 'An economist praising free trade in 1937'],
    plain: ['What drove fascist expansion?', 'Did the Depression let fascists seize all production?', 'Did fascists use colonies to raise soldiers?'],
    meaning: 'Demanding colonies "again and again" for food and raw materials: imperialist ambitions drove fascist policy.',
    trapIdx: 2,
    trap: 'C shifts the blame to Western Europe’s trade policies, which the last paragraph never mentions. Stick to what Hitler argues there: Germany needs colonies.'
  };

  W['u7_7.7_0'] = {
    type: 'causation',
    hq: 'most directly explained by which of the following aspects of Nazi ideology',
    hs: ['a crematorium that connects to a gas chamber'],
    src: [
      { tag: 'WHO', since: 'Olere was a Jewish prisoner at Auschwitz', therefore: 'he painted the killing he witnessed' },
      { tag: 'WHAT', since: 'it shows gas chambers and crematoria', therefore: 'the question asks what idea drove extermination' }
    ],
    read: ['A survivor’s painting of the death camp', 'A Nazi poster about "living space" in the East', 'A German official’s plan to Germanize minorities'],
    plain: ['Which Nazi idea blamed Jews for the war?', 'Was it the idea of an "Aryan" master race?', 'Was it the idea of "living space"?'],
    meaning: 'The Nazis blamed Jews for Germany’s defeat in World War I, the "stab in the back" myth, and used it to justify genocide.',
    trapIdx: 3,
    trap: 'D, "living space," drove Nazi conquest, not the killing in the camps. Pick the idea that targeted a group inside Germany as a threat.'
  };

  W['u7_7.7_6'] = {
    type: 'similar',
    hq: 'most similar to the Holocaust in that both',
    hs: ['Ottoman leaders claimed Armenians were a fifth column supporting Russia'],
    src: [
      { tag: 'WHAT', since: 'it summarizes the Armenian Genocide', therefore: 'compare its method with the Holocaust' },
      { tag: 'WHEN', since: 'it happened during World War I', therefore: 'it came about 25 years before the Holocaust' }
    ],
    read: ['A summary of the Armenian Genocide', 'A peace treaty ending a border war', 'A report praising the world’s quick response'],
    plain: ['What method did both share?', 'Were both just military strategy?', 'Did the world condemn both at once?'],
    meaning: 'In both, a state organized mass killing of one ethnic and religious group it called a threat.',
    trapIdx: 2,
    trap: 'C is false for both: neither was quickly recognized as genocide. Match the shared method, not a hopeful claim about the world’s response.'
  };

  W['u7_7.9_0'] = {
    type: 'causation',
    hq: 'most directly contributed to',
    hs: ['blamed Germany for the First World War, required it to pay large reparations'],
    src: [
      { tag: 'WHAT', since: 'it lists the treaty’s harsh terms for Germany', therefore: 'look for how Germans reacted' },
      { tag: 'WHEN', since: 'it is 1919', therefore: 'the Nazis rose in the 1920s and 1930s' }
    ],
    read: ['A summary of Versailles’s terms', 'A German alliance with the Soviets in 1919', 'A plan for a European union in 1919'],
    plain: ['How did Germans react to the treaty?', 'Did Germany ally with the Soviets at once?', 'Did nationalism end in Europe?'],
    meaning: 'Blame, reparations and lost land humiliated Germans. The Nazis later exploited that resentment.',
    trapIdx: 3,
    trap: 'D is from the wrong era: the European Union came after World War II. Run the time period test.'
  };

  /* ============ UNIT 8 ============ */
  W['u8_8.1_4'] = {
    type: 'context',
    hq: 'The historical context that most directly explains',
    hs: ['resisting attempted subjugation by armed minorities or by outside pressures'],
    src: [
      { tag: 'WHO', since: 'Truman was asking Congress for aid', therefore: 'something urgent needed money now' },
      { tag: 'WHEN', since: 'it is March 1947', therefore: 'Britain had just stopped aiding Greece and Turkey' }
    ],
    read: ['Truman asking Congress to aid free peoples', 'A Soviet leader announcing an atomic bomb test', 'A Chinese general reporting a civil war victory'],
    plain: ['Which crisis was Truman answering?', 'Was it the 1949 Soviet atomic bomb?', 'Was it the blockade of West Berlin?'],
    meaning: 'In 1947, communist pressure threatened Greece and Turkey just as Britain pulled out. Truman asked for aid to stop them falling.',
    trapIdx: 0,
    trap: 'A came in 1949, two years after this 1947 speech. A context has to come before the source.'
  };

  W['u8_8.2_1'] = {
    type: 'causation',
    hq: 'represented a challenge to Cold War bipolarity primarily because it',
    hs: ['The peoples of Asia and Africa wield little physical power', 'We cannot indulge in power politics'],
    src: [
      { tag: 'WHO', since: 'Sukarno spoke for newly independent nations', therefore: 'they did not want to be pulled into either bloc' },
      { tag: 'WHAT', since: 'he says they "cannot indulge in power politics"', therefore: 'they planned to stay out of the superpower contest' }
    ],
    read: ['Sukarno speaking for nations outside both blocs', 'A Soviet envoy signing up Asian nations as allies', 'An American diplomat forming an Asian military pact'],
    plain: ['How did Bandung break the mold?', 'Did these nations side with the Soviets?', 'Did they form a military alliance?'],
    meaning: 'Bipolarity means two sides. Bandung nations chose neither: they wanted to stay neutral.',
    trapIdx: 0,
    trap: 'A would fit inside the two-bloc pattern, not challenge it. Choosing a side is the opposite of non-alignment.'
  };

  W['u8_8.2_3'] = {
    type: 'bestillustrates',
    hq: 'most directly reflects which Cold War dynamic',
    hs: ['is animated by a new fanatic faith, antithetical to our own'],
    src: [
      { tag: 'WHO', since: 'NSC-68 was secret U.S. planning', therefore: 'it shows how leaders saw the Soviets' },
      { tag: 'WHAT', since: 'it calls communism a "fanatic faith"', therefore: 'it frames the conflict in moral, all-or-nothing terms' }
    ],
    read: ['A plan casting the Cold War as a crusade', 'An intelligence report counting Soviet tanks', 'A report on Soviet troops invading France'],
    plain: ['How does this frame the conflict?', 'Is it a careful count of Soviet weapons?', 'Did the Soviets invade Western Europe?'],
    meaning: 'Calling the enemy a "fanatic faith" makes the Cold War a global struggle between two systems that cannot both win.',
    trapIdx: 0,
    trap: 'A reads ideology as data. "Fanatic faith" is emotional framing, not a measured count of military strength.'
  };

  W['u8_8.3_3'] = {
    type: 'bestillustrates',
    hq: 'most directly demonstrates which aspect of Cold War nuclear dynamics',
    hs: ['the world stood at the brink of nuclear war', 'the Soviets agreed to remove the missiles'],
    src: [
      { tag: 'WHAT', since: 'it summarizes thirteen days of nuclear standoff', therefore: 'it shows how close war came' },
      { tag: 'HOW', since: 'it ended with a trade of promises', therefore: 'negotiation, not force, solved it' }
    ],
    read: ['A summary of the Cuban Missile Crisis', 'A Cuban leader choosing the outcome himself', 'A UN ruling that ended the standoff'],
    plain: ['What did the crisis show?', 'Did U.S. technology scare the Soviets off?', 'Did the UN settle the crisis?'],
    meaning: 'The world came to "the brink of nuclear war," and a negotiated deal pulled it back. Nuclear danger forced direct diplomacy.',
    trapIdx: 0,
    trap: 'A ignores the deal. The Soviets left Cuba in exchange for U.S. promises, not because they were outmatched.'
  };

  W['u8_8.4_2'] = {
    type: 'context',
    hq: 'The historical context that best explains why Ho Chi Minh issued this declaration',
    hs: ['for more than eighty years, the French imperialists'],
    src: [
      { tag: 'WHO', since: 'Ho Chi Minh led the Viet Minh', therefore: 'he moved when the chance appeared' },
      { tag: 'WHEN', since: 'it is September 2, 1945', therefore: 'Japan had just surrendered' }
    ],
    read: ['Ho Chi Minh declaring Vietnam free', 'A U.S. official promising Vietnam independence', 'A French general surrendering to the Viet Minh'],
    plain: ['What opening let him act?', 'Had the U.S. promised independence?', 'Had the Viet Minh beaten France already?'],
    meaning: 'Japan had pushed France out, then surrendered. In that gap, before France returned, Ho Chi Minh declared independence.',
    trapIdx: 2,
    trap: 'C is from later: the Viet Minh beat France at Dien Bien Phu in 1954. Check the date on the source line.'
  };

  W['u8_8.5_1'] = {
    type: 'context',
    hq: 'was most significant in the context of African decolonization because it',
    hs: ['Ghana, your beloved country, is free forever!', 'There is a new African in the world!'],
    src: [
      { tag: 'WHO', since: 'Nkrumah led Ghana to independence', therefore: 'he speaks for the first new nation in the region' },
      { tag: 'WHEN', since: 'it is March 1957', therefore: 'most of Africa was still colonized' }
    ],
    read: ['Nkrumah celebrating Ghana’s freedom', 'A British governor announcing Britain will leave all of Africa', 'A rebel general declaring victory over British troops'],
    plain: ['Why was Ghana a turning point?', 'Did Ghana win by armed revolution?', 'Did Ghana unite West Africa into one state?'],
    meaning: 'Ghana was the first sub-Saharan colony to win independence. Its success inspired the wave that followed.',
    trapIdx: 1,
    trap: 'B misreads "the battle has ended." Ghana won independence through political organizing, not an armed war. Read figurative words carefully.'
  };

  W['u8_8.6_3'] = {
    type: 'causation',
    hq: 'were most directly caused by',
    hs: ['borders drawn by colonial powers divided ethnic groups', 'economies were structured to export raw materials to Europe'],
    src: [
      { tag: 'WHAT', since: 'it lists problems new African nations inherited', therefore: 'look for where those problems came from' },
      { tag: 'WHO', since: 'it is a summary of scholarship', therefore: 'it weighs causes, not one person’s view' }
    ],
    read: ['A summary of problems left by colonial rule', 'A leader admitting he failed to plan for freedom', 'A report blaming only ancient tribal wars'],
    plain: ['Who created most of these problems?', 'Did new leaders simply fail to plan?', 'Did old tribal wars cause them all?'],
    meaning: 'Colonial borders, export economies and limited education were all built by colonial rule to serve Europe.',
    trapIdx: 2,
    trap: 'C is real, but it is only one item on the list. Pick the cause that explains all the challenges: colonial policies.'
  };

  W['u8_8.7_3'] = {
    type: 'bestillustrates',
    hq: 'most directly reflects which historical lesson',
    hs: ['Injustice anywhere is a threat to justice everywhere', "the white moderate, who is more devoted to 'order' than to justice"],
    src: [
      { tag: 'WHO', since: 'King wrote from jail during a protest campaign', therefore: 'he defends direct action' },
      { tag: 'TO WHOM', since: 'he answers moderates who told him to wait', therefore: 'he argues that waiting does not work' }
    ],
    read: ['King defending protest against calls to wait', 'A senator urging patient, slow reform', 'A UN official promising to protect civil rights'],
    plain: ['What does King say it takes to win freedom?', 'Does slow negotiation with moderates win rights?', 'Does the world force governments to act?'],
    meaning: 'The oppressor never gives up power willingly, so freedom takes active, nonviolent pressure.',
    trapIdx: 0,
    trap: 'A is the view King argues against. He criticizes the moderate who prefers "order" to justice. Know which side the author is on.'
  };

  W['u8_8.8_1'] = {
    type: 'context',
    hq: 'The context that most directly explains why Gorbachev pursued these reforms',
    hs: ['Perestroika means overcoming the stagnation process'],
    src: [
      { tag: 'WHO', since: 'Gorbachev led the Soviet Union', therefore: 'he saw its problems from the top' },
      { tag: 'WHEN', since: 'it is 1987', therefore: 'the economy had stalled and the Afghan War dragged on' }
    ],
    read: ['Gorbachev on fixing a stalled system', 'Reagan announcing a missile defense plan', 'A Polish worker leading a strike in 1989'],
    plain: ['Why did the system need fixing?', 'Did U.S. defense plans force reform?', 'Did uprisings in Eastern Europe force it?'],
    meaning: 'He names "stagnation." A stalled economy, a costly war and a system that could not meet people’s needs pushed reform.',
    trapIdx: 2,
    trap: 'C is from the wrong time: the big Eastern European uprisings came in 1989, after this 1987 book. A context comes before the source.'
  };

  W['u8_8.9_1'] = {
    type: 'causation',
    hq: 'best explained by',
    hs: ['but never fought each other directly'],
    src: [
      { tag: 'WHAT', since: 'it lists wars where each superpower backed a side', therefore: 'these are proxy wars' },
      { tag: 'WHEN', since: 'they happened during the Cold War', therefore: 'both sides had nuclear weapons' }
    ],
    read: ['A summary of superpower proxy wars', 'A treaty making the superpowers allies', 'A report on the Soviet bloc collapsing'],
    plain: ['Why avoid direct war?', 'Were they secretly allies?', 'Had the Cold War already ended?'],
    meaning: 'A direct war risked nuclear destruction, so the superpowers fought through others.',
    trapIdx: 3,
    trap: 'D is false: their ideologies were deeply opposed. That is why they kept backing opposite sides.'
  };

  /* ============ UNIT 9 ============ */
  W['u9_9.1_0'] = {
    type: 'causation',
    hq: 'most directly contributed to which of the following',
    hs: ['approved Enovid, the first oral contraceptive pill', 'average births per woman fell sharply'],
    src: [
      { tag: 'WHAT', since: 'it describes the first birth-control pill', therefore: 'the effects are about families and women' },
      { tag: 'WHEN', since: 'it starts in 1960', therefore: 'look at the decades that followed' }
    ],
    read: ['A summary of the pill and falling birth rates', 'A report on families growing larger after 1960', 'A study of women leaving school and work'],
    plain: ['What did the pill give women?', 'Did families grow larger?', 'Did women leave school and paid work?'],
    meaning: 'Reliable birth control let women decide when to have children. Birth rates fell.',
    trapIdx: 0,
    trap: 'A is the opposite of the source, which says births per woman "fell sharply." Read the trend the source gives.'
  };

  W['u9_9.1_4'] = {
    type: 'causation',
    hq: 'a consequence of the developments described',
    hs: ['rose from fewer than 20 million in 1995 to more than 4 billion by 2019'],
    src: [
      { tag: 'WHAT', since: 'it describes the internet and phones spreading worldwide', therefore: 'communication became cheap and instant' },
      { tag: 'WHEN', since: 'it covers 1995 to 2019', therefore: 'this is the height of globalization' }
    ],
    read: ['A summary of the internet’s spread', 'A report on companies losing global reach', 'A law ending all trade agreements'],
    plain: ['What did this speed up?', 'Did trade deals become unnecessary?', 'Did global companies lose influence?'],
    meaning: 'Cheap, instant contact let companies work across continents and let people share culture worldwide. Globalization sped up.',
    trapIdx: 1,
    trap: 'B is the opposite: easier coordination made multinational companies stronger, not weaker.'
  };

  W['u9_9.2_3'] = {
    type: 'bestillustrates',
    hq: 'best illustrates which of the following',
    hs: ['remained out of reach for most African patients'],
    src: [
      { tag: 'WHAT', since: 'it compares HIV care in rich and poor regions', therefore: 'it is about who got the medicine' },
      { tag: 'WHEN', since: 'it is the early 2000s', therefore: 'the drugs already existed in rich countries' }
    ],
    read: ['A summary of unequal access to HIV drugs', 'A report that HIV was wiped out in Africa', 'A study of Africans living longer than ever'],
    plain: ['What does the drug gap show?', 'Did global groups wipe out the disease?', 'Did health cooperation end after 1990?'],
    meaning: 'The drugs worked in rich countries but stayed out of reach in Africa. Medical advances were shared unequally.',
    trapIdx: 1,
    trap: 'B is the opposite: the source describes a disease killing millions. Read what the source says happened.'
  };

  W['u9_9.3_4'] = {
    type: 'bestillustrates',
    hq: 'best illustrate a tension between',
    hs: ['largely to create cattle pasture and fields for soybeans grown for export'],
    src: [
      { tag: 'WHAT', since: 'it describes clearing the Amazon for exports', therefore: 'growth and nature are in conflict' },
      { tag: 'WHO', since: 'Brazil’s government promoted it', therefore: 'it was official development policy' }
    ],
    read: ['Forest cleared for export farming', 'A report on a military coup in Brazil', 'A study of religion and global media'],
    plain: ['What two goals clash here?', 'Is it democracy against dictatorship?', 'Is it religion against secular culture?'],
    meaning: 'Clearing forest for beef and soy brought income but destroyed the rainforest. Development pulls against protecting the environment.',
    trapIdx: 0,
    trap: 'A names a real tension in Latin America, but the passage is about forests and farming, not government type. Match the source’s subject.'
  };

  W['u9_9.4_0'] = {
    type: 'bestillustrates',
    hq: 'The policies described best illustrate',
    hs: ['cut government spending, privatized state-owned companies, and lowered barriers to foreign trade and investment'],
    src: [
      { tag: 'WHO', since: 'the economists were trained in Chicago', therefore: 'they followed free-market ideas' },
      { tag: 'WHEN', since: 'it is 1973 to 1990', therefore: 'free-market reform was spreading worldwide' }
    ],
    read: ['Chile’s free-market reforms', 'A Soviet plan for Chile’s economy', 'A law taking over foreign copper mines'],
    plain: ['What kind of economics is this?', 'Was this Soviet-style planning?', 'Was this nationalizing industry?'],
    meaning: 'Cutting spending, selling state companies and opening trade are free-market policies, spreading in the late 1900s.',
    trapIdx: 3,
    trap: 'D protects home industry from imports, the opposite of "lowered barriers to foreign trade." Match the direction of the policies.'
  };

  W['u9_9.5_0'] = {
    type: 'context',
    hq: 'best understood as part of',
    hs: ['reserve a share of public-sector jobs, university seats, and seats in legislatures for Scheduled Castes'],
    src: [
      { tag: 'WHO', since: 'it is written into India’s 1950 constitution', therefore: 'the new nation chose this policy' },
      { tag: 'WHAT', since: 'it reserves places for groups once treated as "untouchables"', therefore: 'it challenges the caste system' }
    ],
    read: ['A summary of India’s caste reservations', 'A British order dividing Indian communities', 'A plan to raise farm output in India'],
    plain: ['What larger movement is this part of?', 'Was it a British divide-and-rule plan?', 'Was it meant to strengthen caste?'],
    meaning: 'Reserving jobs and seats for lower castes uses law to challenge an old social hierarchy, like civil rights movements elsewhere.',
    trapIdx: 1,
    trap: 'B is the opposite: the policy was meant to weaken caste divisions, not deepen them. Ask what the reserved seats were for.'
  };

  W['u9_9.6_2'] = {
    type: 'bestillustrates',
    hq: 'best illustrates',
    hs: ['gained audiences across Europe, the United States, and Africa'],
    src: [
      { tag: 'WHO', since: 'Marley was a Jamaican musician', therefore: 'he came from a former colony' },
      { tag: 'WHAT', since: 'his music reached three continents', therefore: 'global media carried it' }
    ],
    read: ['A summary of reggae reaching the world', 'A government banning reggae on the radio', 'A record label refusing political songs'],
    plain: ['What does reggae’s reach show?', 'Did governments suppress popular music?', 'Did the music industry reject politics?'],
    meaning: 'A musician from a small former colony reached worldwide audiences through records, radio and tours.',
    trapIdx: 2,
    trap: 'C is the opposite: Marley’s songs called for liberation and still reached huge audiences.'
  };

  W['u9_9.7_1'] = {
    type: 'context',
    hq: 'best understood as part of',
    hs: ['global trade rules favored multinational corporations over workers, the environment, and poor countries'],
    src: [
      { tag: 'WHO', since: 'unions, environmental groups and students protested together', therefore: 'it was a broad coalition' },
      { tag: 'WHEN', since: 'it is 1999, at a WTO meeting', therefore: 'free-market globalization was at its peak' }
    ],
    read: ['Protests against trade rules', 'A Cold War rally against communism', 'A march for a colony’s independence'],
    plain: ['What were they resisting?', 'Was this part of the Cold War?', 'Was this a decolonization movement?'],
    meaning: 'Protesters said trade rules favored corporations over workers and the environment. They were resisting free-market globalization.',
    trapIdx: 0,
    trap: 'A is from the wrong time: the Cold War ended about ten years earlier. Check the date on the source line.'
  };

  W['u9_9.8_3'] = {
    type: 'bestillustrates',
    hq: 'The development of the European Union best illustrates',
    hs: ['allowing goods, services, money, and people to move freely among member states'],
    src: [
      { tag: 'WHAT', since: 'it describes a single market and a shared currency', therefore: 'members gave up control over trade and money' },
      { tag: 'WHEN', since: 'it is 1992 to 2002', therefore: 'the Cold War had just ended' }
    ],
    read: ['The EU’s single market', 'A plan to rebuild Europe’s empires', 'A pact splitting Europe into blocs'],
    plain: ['What did members give up?', 'Did colonial empires return?', 'Was Europe split into Cold War blocs?'],
    meaning: 'Members gave up control over trade and, for euro countries, their own money, in exchange for a big shared market.',
    trapIdx: 1,
    trap: 'B is from the wrong era: the EU formed after the Cold War ended. Check the dates in the source.'
  };

  W['u9_9.9_0'] = {
    type: 'causation',
    hq: 'best explained by',
    hs: ['rose from about 32 years in 1900 to more than 70 years by 2015'],
    src: [
      { tag: 'WHAT', since: 'it shows life expectancy more than doubling', therefore: 'something improved health and food a great deal' },
      { tag: 'WHEN', since: 'it covers 1900 to 2015', therefore: 'this is the century of vaccines and the Green Revolution' }
    ],
    read: ['A summary of longer, better lives', 'A report on global trade collapsing', 'A study saying inequality has ended'],
    plain: ['What made people live longer?', 'Did international groups collapse?', 'Did global trade decline?'],
    meaning: 'Vaccines, antibiotics, the Green Revolution and economic growth more than doubled life expectancy.',
    trapIdx: 2,
    trap: 'C goes too far. Living standards rose, but inequality between rich and poor countries did not end. Watch for "almost all."'
  };

  /* ================================================================
     BATCH 4 (2026-10-21): 10 more per unit.
     ================================================================ */

  /* ============ UNIT 1 ============ */
  W['u1_1.1_7'] = {
    type: 'similar',
    hq: 'differ from the previous ruling dynasty',
    hs: ['Heaven, wearied of their misgovernment and debauchery'],
    src: [
      { tag: 'WHO', since: 'the first Ming emperor wrote it', therefore: 'he presents the Yuan as bad rulers' },
      { tag: 'WHEN', since: 'it is 1372, just after the Mongols fell', therefore: 'the Ming were rebuilding Chinese rule' }
    ],
    read: ['A new emperor condemning the Yuan', 'A Mongol khan praising Confucian scholars', 'A Ming admiral describing his ocean voyages'],
    plain: ['How did the Ming rule differently?', 'Were the Yuan the isolationists while the Ming expanded?', 'Did the Ming ignore Confucian learning?'],
    meaning: 'The Yuan sidelined the exams and Confucian officials. The Ming brought back the exams and Confucian government.',
    trapIdx: 2,
    trap: 'C flips the facts: the Ming, not the Yuan, sent Zheng He’s fleets abroad. Know which dynasty did what before matching.'
  };

  W['u1_1.1_10'] = {
    type: 'bestillustrates',
    hq: 'a reference to which traditional Chinese ruling concept',
    hs: ['it pleased the Creator to grant'],
    src: [
      { tag: 'WHO', since: 'a new emperor is explaining his right to rule', therefore: 'he points to Heaven’s approval' },
      { tag: 'WHAT', since: 'Heaven "cut off" the Song and ruined the Yuan', therefore: 'Heaven gives and takes the right to rule' }
    ],
    read: ['An emperor saying Heaven chose him', 'A scholar explaining duty to one’s parents', 'A minister praising strict laws and punishments'],
    plain: ['Which idea says Heaven picks rulers?', 'Is it about duty to parents?', 'Is it about strict laws and harsh punishment?'],
    meaning: 'Heaven took power from bad dynasties and gave it to the new emperor. That is the Mandate of Heaven.',
    trapIdx: 3,
    trap: 'D, Neo-Confucianism, is Chinese and from this era, so it sits close. But the idea of Heaven granting and removing power is the Mandate of Heaven.'
  };

  W['u1_1.3_2'] = {
    type: 'bestillustrates',
    hq: 'can best be understood to mean that',
    hs: ['He is free from all physical desire'],
    src: [
      { tag: 'WHO', since: 'a Buddhist teacher wrote it', therefore: 'the praise uses religious ideals' },
      { tag: 'WHAT', since: 'it calls the king "an ocean of all virtues"', therefore: 'being free of desire is one of those virtues' }
    ],
    read: ['An inscription praising a king', 'A tax record of the king’s jewels', 'A law setting duties for each caste'],
    plain: ['Why is this praise?', 'Does it show rulers were rich?', 'Does it describe caste duties?'],
    meaning: 'In Buddhism and Hinduism, giving up worldly desire to seek spiritual perfection is a virtue. The phrase praises the king that way.',
    trapIdx: 2,
    trap: 'C is close, since monks lived without luxuries, but the phrase describes the king, not monks. Read who the claim is about.'
  };

  W['u1_1.4_4'] = {
    type: 'context',
    hq: 'most characteristic of which society',
    hs: ['a fixed amount of maize, cloth, and captives for sacrifice'],
    src: [
      { tag: 'WHAT', since: 'it describes provinces paying tribute to a capital', therefore: 'it is a tribute empire' },
      { tag: 'WHERE', since: 'it is an American empire around 1400', therefore: 'it is the Aztecs or the Inca' }
    ],
    read: ['Tribute paid to a capital', 'A Song official’s report on exam results', 'A Mali merchant’s list of gold sales'],
    plain: ['Which empire demanded captives?', 'Was this the Inca Empire of the Andes?', 'Was this Song China?'],
    meaning: 'Tribute of goods and captives for sacrifice, sent to the capital: the Aztec tribute system.',
    trapIdx: 0,
    trap: 'A is the other American empire, so it is tempting. But the Inca collected labor (mit’a), not captives for sacrifice. The sacrifice detail points to the Aztecs.'
  };

  W['u1_1.4_5'] = {
    type: 'context',
    hq: 'best identified as',
    hs: ['knotted strings recording the counts of the storehouses'],
    src: [
      { tag: 'WHERE', since: 'it is an Andean empire', therefore: 'it is the Inca' },
      { tag: 'WHAT', since: 'the strings record counts', therefore: 'they are a record-keeping tool' }
    ],
    read: ['An account of Inca roads and records', 'A Maya scribe carving glyphs on stone', 'An Aztec farmer building floating gardens'],
    plain: ['What are these strings?', 'Were these Aztec farm plots?', 'Were these Maya writing signs?'],
    meaning: 'Knotted strings that recorded counts in the Andes are quipu, the Inca record-keeping system.',
    trapIdx: 2,
    trap: 'C is also a record system, but Maya glyphs were written signs, not knotted strings, and the Maya were not in the Andes.'
  };

  W['u1_1.5_2'] = {
    type: 'causation',
    hq: 'based primarily on',
    hs: ['Kilwa is one of the most beautiful and well-constructed towns in the world'],
    src: [
      { tag: 'WHO', since: 'Ibn Battuta visited Kilwa himself', therefore: 'he saw its wealth firsthand' },
      { tag: 'WHERE', since: 'Kilwa is on the East African coast', therefore: 'it faces the Indian Ocean' }
    ],
    read: ['A traveler praising a rich Swahili town', 'A caravan leader crossing the Sahara', 'A silk maker selling to the Mediterranean'],
    plain: ['Where did its wealth come from?', 'Did it tax Sahara caravans?', 'Did it mine silver on the coast?'],
    meaning: 'Kilwa sat on the Indian Ocean coast and shipped gold and ivory from the interior to Arabia, India and China.',
    trapIdx: 1,
    trap: 'B is the wrong side of Africa. Sahara caravans ran through West Africa, but Kilwa is on the east coast. Check the place in the source line.'
  };

  W['u1_1.6_0'] = {
    type: 'bestillustrates',
    hq: 'The development described best illustrates',
    hs: ['representatives of towns and counties', 'so that he could win their consent for new taxes'],
    src: [
      { tag: 'WHO', since: 'King Edward I called the Parliament', therefore: 'he needed something from his subjects' },
      { tag: 'WHAT', since: 'he needed their consent for taxes', therefore: 'his power had limits' }
    ],
    read: ['An early English Parliament', 'A decree ending the English monarchy', 'A report on manors after the plague'],
    plain: ['What does needing consent show?', 'Did England become a republic?', 'Did the manors collapse after the plague?'],
    meaning: 'A king who needed towns and counties to agree to taxes was sharing power. Institutions like Parliament limited royal power.',
    trapIdx: 0,
    trap: 'A goes much too far: England still had a king. Parliament shared power with him; it did not replace him.'
  };

  W['u1_1.6_4'] = {
    type: 'similar',
    hq: 'best contrasted with Song China’s government',
    hs: ['The lord grants land to his vassal, who swears loyalty and military service in return'],
    src: [
      { tag: 'WHAT', since: 'it describes European feudalism', therefore: 'power rests on land and personal loyalty' },
      { tag: 'WHO', since: 'the comparison is with Song China', therefore: 'think of the exam-based bureaucracy' }
    ],
    read: ['A description of European feudalism', 'A Song official passing his exams', 'A king running a central bureaucracy'],
    plain: ['How did Europe differ?', 'Was Europe more centralized?', 'Did Europe use civil-service exams?'],
    meaning: 'Europe’s power was spread among lords bound by personal oaths and land. Song China ran a central, exam-based bureaucracy.',
    trapIdx: 0,
    trap: 'A flips the comparison: Song China was the centralized, bureaucratic one. Keep straight which side is which.'
  };

  W['u1_1.7_0'] = {
    type: 'similar',
    hq: 'a difference between the two systems',
    hs: ['chosen through examinations on the Confucian classics', 'these lords passed their lands and titles to their sons'],
    src: [
      { tag: 'WHAT', since: 'it compares Song China and medieval Europe', therefore: 'the answer is the key difference' },
      { tag: 'HOW', since: 'one uses exams and the other inheritance', therefore: 'that is the contrast to find' }
    ],
    read: ['A summary comparing two ways of governing', 'A European law requiring exams for knights', 'A Song law letting officials pass on their jobs'],
    plain: ['How did the two pick their rulers?', 'Did Europe use exams?', 'Did religious leaders hold most power?'],
    meaning: 'Song officials passed exams and served the emperor; European lords inherited land and shared power with kings.',
    trapIdx: 2,
    trap: 'C swaps the two systems. Song China used exams; Europe used inheritance. Read carefully which side each detail belongs to.'
  };

  W['u1_1.7_1'] = {
    type: 'similar',
    hq: 'the Inca differed from the Aztecs mainly in that the Inca',
    hs: ["required subject communities to provide rotating labor through the mit'a system", 'sometimes resettled entire communities'],
    src: [
      { tag: 'WHAT', since: 'it compares how the two empires ruled', therefore: 'the answer is the difference in control' },
      { tag: 'HOW', since: 'the Aztecs left local rulers in place', therefore: 'look at what the Inca did instead' }
    ],
    read: ['A summary comparing Aztec and Inca rule', 'An Inca order freeing all conquered peoples', 'An Aztec admiral’s report on his fleet'],
    plain: ['How did Inca control differ?', 'Did the Inca collect nothing?', 'Did the Inca rule by sea?'],
    meaning: 'The Aztecs took tribute and left local rulers alone. The Inca used labor, roads and resettlement: more direct control.',
    trapIdx: 0,
    trap: 'A ignores the mit’a: the Inca did collect labor. Read the whole description before deciding what an empire did not do.'
  };

  /* ============ UNIT 2 ============ */
  W['u2_2.5_3'] = {
    type: 'bestillustrates',
    hq: 'most directly indicates that the city',
    hs: ['ringed by massive land and sea walls, with numerous towers and fortified gates'],
    src: [
      { tag: 'WHAT', since: 'it is a map of Constantinople', therefore: 'the answer has to show on the map' },
      { tag: 'WHEN', since: 'it is from the 1200s', therefore: 'the city faced many sieges' }
    ],
    read: ['A map showing a walled, guarded city', 'A map showing Constantinople on an island', 'A map of markets the city refused to allow'],
    plain: ['What do walls and towers show?', 'Was the city on an island?', 'Did the city look down on trade?'],
    meaning: 'Massive walls, towers and fortified gates: the city was heavily defended against attack.',
    trapIdx: 0,
    trap: 'A misreads "sea walls." Constantinople sat on a peninsula, with walls on land and sea. Stay with what the map shows: defenses.'
  };

  W['u2_2.7_2'] = {
    type: 'similar',
    hq: 'best supports which conclusion about networks of exchange',
    hs: ['Caravans crossing the Sahara depended on camels and on oasis towns for water', 'knowledge of the seasonal monsoon winds'],
    src: [
      { tag: 'WHAT', since: 'it compares desert trade and ocean trade', therefore: 'the answer is what both had in common' },
      { tag: 'HOW', since: 'each used different tools', therefore: 'the shared idea is fitting tools to the setting' }
    ],
    read: ['A summary of trade adapted to each setting', 'A report that trade ignored the environment', 'A study of Chinese junks crossing the Sahara'],
    plain: ['What did both do to succeed?', 'Did routes ignore the environment?', 'Did both use the same ships?'],
    meaning: 'Camels and oases in the desert, monsoon knowledge at sea: each network used tools fitted to its environment.',
    trapIdx: 1,
    trap: 'B is the opposite: both networks depended on their environments. Find the pattern both examples share.'
  };

  W['u2_2.7_4'] = {
    type: 'similar',
    hq: 'Taken together, these examples best support which claim',
    hs: ['The Mongol Empire protected merchants on the Silk Roads', 'the Sultanate of Malacca policed the strait'],
    src: [
      { tag: 'WHAT', since: 'it gives three states on three trade routes', therefore: 'the claim must fit all three' },
      { tag: 'WHEN', since: 'it covers 1200 to 1450', therefore: 'Europeans did not control these routes yet' }
    ],
    read: ['A summary of states protecting trade routes', 'A report that merchants traded with no states involved', 'A study of European control of Asian trade'],
    plain: ['What did it bring them?', 'Did states stay out of trade?', 'Did only nomads trade?'],
    meaning: 'The Mongols, Mali and Malacca all protected trade, and all grew rich and strong from it.',
    trapIdx: 0,
    trap: 'A is the opposite: every example shows a state protecting or taxing trade. A claim has to fit all the examples.'
  };

  W['u2_2.2_11'] = {
    type: 'context',
    hq: 'the group governing the city of Karacorum',
    look: 'Rubruck mentions "the [Khan’s] palace," the Saracens’ quarter and the Cathayans’ district. The khan’s palace marks who rules.',
    src: [
      { tag: 'WHO', since: 'Rubruck visited in 1254', therefore: 'this is early in Mongol rule' },
      { tag: 'WHERE', since: 'Karakorum was the Mongol capital', therefore: 'the khans governed it' }
    ],
    read: ['A friar describing the Mongol capital', 'A Muslim governor ruling Karakorum', 'A Chinese emperor’s palace in Karakorum'],
    plain: ['Who ruled Karakorum?', 'Did Muslims govern it?', 'Did the Chinese govern it?'],
    meaning: 'Karakorum was the capital of the Mongol Empire, seat of the Great Khan. The Mongols governed it.',
    trapIdx: 1,
    trap: 'B notices the Muslim quarter in the passage, but living in a city is not governing it. The khan’s palace shows who was in charge.'
  };

  W['u2_2.2_12'] = {
    type: 'bestillustrates',
    hq: 'best describes a policy of this city',
    look: 'Rubruck counts "twelve pagan [Buddhist] temples," "two mosques," and "one church" in the same city.',
    src: [
      { tag: 'WHO', since: 'Rubruck was a Christian friar', therefore: 'he notices other religions with interest' },
      { tag: 'WHAT', since: 'temples, mosques and a church stand side by side', therefore: 'many faiths were allowed' }
    ],
    read: ['Many faiths in one city', 'A khan’s order closing all temples', 'A tax list for every household'],
    plain: ['What does this show?', 'Were minorities persecuted?', 'Did the state run the economy?'],
    meaning: 'Buddhist temples, mosques and a church all in one city: the khans tolerated many religions.',
    trapIdx: 0,
    trap: 'A is the opposite of what Rubruck saw. Many religions worshipping openly shows tolerance.'
  };

  W['u2_2.2_14'] = {
    type: 'context',
    hq: 'achieved most of their territory gains through which of the following methods',
    look: 'The passage describes Karakorum’s districts, temples and markets. The question needs outside knowledge: how did the Mongols win their empire?',
    src: [
      { tag: 'WHO', since: 'Rubruck describes the khans’ capital', therefore: 'it shows the empire at its height' },
      { tag: 'WHAT', since: 'the question is about how they gained land', therefore: 'think about how the Mongols expanded' }
    ],
    read: ['A friar describing the khans’ capital', 'A khan’s trade deal with his neighbors', 'A farmer describing new crops on the steppe'],
    plain: ['How did the Mongols win land?', 'Was it mostly economic influence?', 'Was it mostly diplomacy?'],
    meaning: 'The Mongols built the largest land empire in history by conquest, with mounted archers and siege warfare.',
    trapIdx: 3,
    trap: 'D sounds peaceful, but the Mongols mostly took land by war. A city full of trade and temples does not mean the empire was won peacefully.'
  };

  W['u2_2.2_16'] = {
    type: 'similar',
    hq: 'very different from the other major empires',
    look: 'Marco Polo "adopted the manners of the Tartars" and learned four languages at a court full of foreigners.',
    src: [
      { tag: 'WHO', since: 'Polo served at Khubilai Khan’s court', therefore: 'he saw how the Mongols ruled' },
      { tag: 'WHAT', since: 'the question compares the Mongols with other empires', therefore: 'look for something unusual about them' }
    ],
    read: ['Polo welcomed at court', 'A khan forcing his religion on China', 'A khan closing trade with neighbors'],
    plain: ['How did they treat local cultures?', 'Did they conquer without bloodshed?', 'Did they force their religion on others?'],
    meaning: 'Unlike many empires, the Mongols rarely imposed their own culture. They left local ways alone and often adopted them.',
    trapIdx: 1,
    trap: 'B is false: Mongol conquests were famously bloody. A friendly court scene does not mean the conquests were peaceful.'
  };

  W['u2_2.2_17'] = {
    type: 'causation',
    hq: 'went on to create which of the following Chinese dynasties',
    look: 'The invaders are "a people who emerged from the confines of China" and swept through Central Asia around 1220. These are the Mongols.',
    src: [
      { tag: 'WHO', since: 'ibn al-Athir was a Muslim historian', therefore: 'he describes invaders from the east' },
      { tag: 'WHEN', since: 'it is about 1230', therefore: 'these invaders are the Mongols under Chinggis Khan' }
    ],
    read: ['Invaders from the east', 'A Song emperor’s report on a peace treaty', 'A Ming general describing a new dynasty'],
    plain: ['Which dynasty did the Mongols found?', 'Was it the Song, which ruled before them?', 'Was it the Ming, which came after them?'],
    meaning: 'The invaders were the Mongols. Khubilai Khan later founded the Yuan dynasty in China.',
    trapIdx: 0,
    trap: 'A is the dynasty the Mongols overthrew, not the one they founded. Keep the order straight: Song, then Yuan, then Ming.'
  };

  W['u2_2.3_8'] = {
    type: 'bestillustrates',
    hq: 'The tone of the passage best reflects',
    look: 'Ibn Battuta admires Aden: "Indian merchants living there, as well as Egyptian merchants," who are pious, generous and "treat strangers well."',
    src: [
      { tag: 'WHO', since: 'Ibn Battuta was a traveler', therefore: 'he notices how different people live together' },
      { tag: 'WHAT', since: 'his tone is admiring', therefore: 'he sees the mixing as a good thing' }
    ],
    read: ['A traveler admiring a mixed trading port', 'A merchant complaining he cannot be understood', 'A farmer growing too much of one crop'],
    plain: ['What does trade bring?', 'Were Arabian ports the best?', 'Did language barriers grow?'],
    meaning: 'Indian, Egyptian and Arab merchants living and trading together: commerce spreading and mixing cultures.',
    trapIdx: 1,
    trap: 'B reads his praise of Aden as a ranking of ports. His point is the mix of peoples trade brought together.'
  };

  W['u2_2.5_5'] = {
    type: 'bestillustrates',
    hq: 'best seen as evidence of',
    look: '"In spite of" their great wealth, the merchants are "pious, humble, upright, and generous," and "pay in full the tithes due to God."',
    src: [
      { tag: 'WHO', since: 'Ibn Battuta was a Muslim scholar', therefore: 'he judges people by their faith' },
      { tag: 'WHAT', since: 'he praises piety over riches', therefore: 'piety is the value he puts first' }
    ],
    read: ['Praise for pious merchants', 'A traveler attacked by hostile locals', 'A trader who could not find work'],
    plain: ['What does he value most?', 'Was there no religious orthodoxy?', 'Were locals hostile to outsiders?'],
    meaning: 'He praises the merchants for piety "in spite of" their wealth. Faith ranks above riches.',
    trapIdx: 1,
    trap: 'B is the opposite: he says they "treat strangers well." Read the source’s exact words before you match.'
  };

  /* ============ UNIT 3 ============ */
  W['u3_3.4_2'] = {
    type: 'causation',
    hq: 'the fate of the Golkonda state after 1650',
    hs: ['The newlyweds are surrounded by attendants of both religions'],
    src: [
      { tag: 'WHERE', since: 'Golkonda was a state in southern India', therefore: 'it bordered the expanding Mughal Empire' },
      { tag: 'WHEN', since: 'it is around 1650', therefore: 'the Mughals were pushing south' }
    ],
    read: ['A royal wedding in Golkonda', 'A Portuguese map of forts in Golkonda', 'An Ottoman report on India'],
    plain: ['Who conquered Golkonda later?', 'Did Golkonda take over most of India?', 'Did the Portuguese conquer it?'],
    meaning: 'The Mughals expanded across almost all of India and conquered Golkonda in 1687.',
    trapIdx: 1,
    trap: 'B names a European power in India, but the Portuguese held only coastal posts like Goa. The big land empire pushing south was the Mughals.'
  };

  W['u3_3.1_5'] = {
    type: 'causation',
    hq: 'many states responded to threats of the type depicted',
    hs: ['The fresco shows Ottoman armies with cannons attacking the city walls'],
    src: [
      { tag: 'WHAT', since: 'both images show cannon-armed Ottoman armies', therefore: 'the threat was gunpowder warfare' },
      { tag: 'WHEN', since: 'it covers the 1500s and 1600s', therefore: 'states everywhere were adopting guns' }
    ],
    read: ['Gunpowder armies attacking cities', 'A ruler’s order forcing Muslims to convert', 'A merchant’s boycott of Ottoman goods'],
    plain: ['How did states respond?', 'Did they force Muslims to convert?', 'Did they hire Ottoman advisors?'],
    meaning: 'Guns and cannons were expensive and needed trained soldiers. States raised taxes and built professional armies.',
    trapIdx: 3,
    trap: 'D is a peaceful response, but a boycott does not stop an army with cannons. Match the response to the kind of threat.'
  };

  W['u3_3.1_6'] = {
    type: 'purpose',
    hq: 'explains the inclusion of Image 2 in a court history',
    hs: ['The image was produced for an official history of the Ottoman Empire compiled circa 1585'],
    src: [
      { tag: 'WHO', since: 'an Ottoman court painter made it', therefore: 'it serves the sultan' },
      { tag: 'WHEN', since: 'it was made around 1585 but shows Süleyman’s reign', therefore: 'it looks back on a glorious past' }
    ],
    read: ['A court painting of a siege', 'A Persian painting of a royal garden', 'A list of all the peoples at court'],
    plain: ['Why include this image?', 'Was it to stress the sultan as caliph?', 'Was it to show Persian influence?'],
    meaning: 'An official history showing Süleyman’s conquests glorifies imperial power by recalling a celebrated era.',
    trapIdx: 0,
    trap: 'A is a real title the sultans claimed, but the image shows a siege, not religious leadership. Ask what the image itself celebrates.'
  };

  W['u3_3.1_9'] = {
    type: 'context',
    hq: 'in the context of which of the following Islamic empires',
    hs: ['a campaign by Suleiman I against the city of Esztergom'],
    src: [
      { tag: 'WHO', since: 'Suleiman I led the campaign', therefore: 'the empire is his' },
      { tag: 'WHERE', since: 'Esztergom is in Hungary', therefore: 'the empire pushed into Europe' }
    ],
    read: ['Suleiman’s army in Hungary', 'A Safavid shah’s army in Persia', 'A Mughal emperor’s army in India'],
    plain: ['Whose empire was this?', 'Was it the Safavid Empire?', 'Was it the Mughal Empire?'],
    meaning: 'Suleiman the Magnificent was the Ottoman sultan who pushed into Hungary.',
    trapIdx: 3,
    trap: 'D, the Abbasids, is an Islamic empire, but it fell in 1258, long before 1543. Run the time period test.'
  };

  W['u3_3.1_14'] = {
    type: 'causation',
    hq: 'a consequence of the event portrayed in the image',
    look: 'The fresco shows the Turks invading Constantinople in 1453, the city that had led Orthodox Christianity.',
    src: [
      { tag: 'WHAT', since: 'it shows Constantinople falling to the Ottomans', therefore: 'Orthodox Christianity lost its capital' },
      { tag: 'WHEN', since: 'it is 1453', therefore: 'look for what changed for the Orthodox world after that' }
    ],
    read: ['A fresco of Constantinople falling to the Turks', 'A fresco of Christians retaking the city', 'A fresco of Muslims and Christians sharing the city'],
    plain: ['Which city led Orthodoxy?', 'Did Orthodox Christianity disappear?', 'Was Byzantine art lost?'],
    meaning: 'With Constantinople under Ottoman rule, Moscow claimed to lead the Orthodox world as the "Third Rome."',
    trapIdx: 0,
    trap: 'A goes far too far. Orthodox Christianity survived and Moscow became its leading city. Watch for "ceased to exist."'
  };

  W['u3_3.2_4'] = {
    type: 'purpose',
    hq: 'The inclusion of the image in the manuscript best illustrates',
    hs: ['Illustration in a manuscript written to celebrate the achievements of the Ottoman Sultan Suleiman the Magnificent'],
    src: [
      { tag: 'WHO', since: 'the manuscript celebrated Suleiman', therefore: 'it presents his rule as glorious' },
      { tag: 'WHAT', since: 'even forced recruitment is shown as an achievement', therefore: 'the art serves the sultan’s image' }
    ],
    read: ['Art celebrating the sultan', 'A teacher’s book for teaching reading', 'A war map planning new conquests'],
    plain: ['Why include this image?', 'Was it to reach people who could not read?', 'Was it to grow the empire?'],
    meaning: 'A manuscript celebrating the sultan’s achievements used art to show his rule as legitimate.',
    trapIdx: 0,
    trap: 'A sounds reasonable, but a fancy court manuscript was not made for illiterate subjects. Ask who made it and why.'
  };

  W['u3_3.2_10'] = {
    type: 'bestillustrates',
    hq: 'the military must adhere to which of the following characteristics',
    look: 'The edict says "war is a curse," and "it is resorted to only when it is inevitable." Warriors must study literature as well as archery.',
    src: [
      { tag: 'WHO', since: 'the shogun issued these laws', therefore: 'he wanted control over the warrior class' },
      { tag: 'WHEN', since: 'it is 1615, after years of civil war', therefore: 'the shogun wanted peace kept' }
    ],
    read: ['Laws calling for restraint', 'Laws urging warriors to attack rivals', 'Laws ordering warriors into temples'],
    plain: ['What do the laws ask for?', 'Do they ask for aggression?', 'Do they ask for brutality?'],
    meaning: 'War only when "inevitable" and study alongside arms: the shogun wanted warriors to show restraint.',
    trapIdx: 0,
    trap: 'A ignores the line that "war is a curse." The laws want warriors ready but restrained. Read the whole edict, not just the military parts.'
  };

  W['u3_3.2_13'] = {
    type: 'purpose',
    hq: 'the author’s attitude in the passage',
    look: 'Machiavelli calls men "ungrateful, fickle, false, cowardly, covetous" and says they "turn against you" when danger comes.',
    src: [
      { tag: 'WHO', since: 'Machiavelli had lost power in Florence', therefore: 'he had seen loyalty fail' },
      { tag: 'WHAT', since: 'he says fear is safer than love', therefore: 'he does not trust people’s loyalty' }
    ],
    read: ['A writer who distrusts people’s loyalty', 'A writer praising fair political leaders', 'A writer attacking the Church'],
    plain: ['How does he see loyalty?', 'Is he hopeful about leaders?', 'Is he criticizing the Church?'],
    meaning: '"Ungrateful, fickle, false": he is cynical about how loyal a ruler’s subjects really are.',
    trapIdx: 1,
    trap: 'B is the opposite of his tone. Nothing in the passage is hopeful. Tone comes from the author’s word choices.'
  };

  W['u3_3.2_19'] = {
    type: 'causation',
    hq: 'largely due to the Mughal Empire’s policy of',
    look: 'A zamindar "who paid revenue to the Mogul was clearly in a position of dependence," and refusing to pay was "the first step" to sovereignty.',
    src: [
      { tag: 'WHO', since: 'Moreland was a historian of Mughal India', therefore: 'he explains how revenue worked' },
      { tag: 'WHAT', since: 'paying revenue marked dependence', therefore: 'refusing it marked independence' }
    ],
    read: ['A historian on Mughal revenue and power', 'A Mughal law granting religious freedom', 'A Mughal order placing provinces under army rule'],
    plain: ['Which policy explains this?', 'Was it religious toleration?', 'Was it martial law?'],
    meaning: 'Everyone owed the Mughals revenue, so refusing to pay was how a zamindar claimed independence.',
    trapIdx: 0,
    trap: 'A is a famous Mughal policy, but the passage is about revenue, not religion. Match the policy the source is actually about.'
  };

  W['u3_3.2_20'] = {
    type: 'bestillustrates',
    hq: 'best seen as evidence for which of the following generalizations',
    look: 'Chiefs in "Rajputana, Central India, and Chota Nagpur" sometimes paid, sometimes rebelled, and were sometimes left alone because coercion was "inconvenient."',
    src: [
      { tag: 'WHO', since: 'Moreland was a historian', therefore: 'he describes patterns, not one event' },
      { tag: 'WHERE', since: 'he names remote hill and forest regions', therefore: 'place affected who paid' }
    ],
    read: ['A historian on uneven tax collection', 'A Mughal law taxing only one religion', 'A report calling Rajputana a typical case'],
    plain: ['What affected who paid?', 'Did only some religions pay?', 'Was revenue the only source of funds?'],
    meaning: 'Remote regions often avoided paying because forcing them was "inconvenient." Geography shaped who paid.',
    trapIdx: 3,
    trap: 'D contradicts the source, which calls these cases an "anomalous position." Read how the author describes the examples.'
  };

  /* ============ UNIT 4 ============ */
  W['u4_4.1_0'] = {
    type: 'bestillustrates',
    hq: 'best illustrate that European maritime expansion',
    hs: ['lateen sails adapted from ships used in the Indian Ocean and Mediterranean', 'the magnetic compass, which originated in China'],
    src: [
      { tag: 'WHAT', since: 'it lists where each sailing tool came from', therefore: 'the origins are the point' },
      { tag: 'WHEN', since: 'it is the 1400s', therefore: 'this is before Europeans reached the Americas' }
    ],
    read: ['Where sailing tools came from', 'A Portuguese claim that Europe invented every sailing tool', 'A report on steam-powered ships built in Lisbon'],
    plain: ['Where did the tools come from?', 'Were the tools all invented in Portugal and Spain?', 'Did steamships make these voyages possible?'],
    meaning: 'Lateen sails from the Indian Ocean, the compass from China, the astrolabe from the Islamic world: Europe borrowed from all of Afro-Eurasia.',
    trapIdx: 0,
    trap: 'A is the opposite of the source, which traces each tool to another region. Watch for "almost entirely."'
  };

  W['u4_4.1_2'] = {
    type: 'bestillustrates',
    hq: 'best understood as evidence of',
    hs: ['labeled the newly encountered lands in the Western Hemisphere'],
    src: [
      { tag: 'WHO', since: 'a German mapmaker drew it', therefore: 'news of the voyages had spread across Europe' },
      { tag: 'WHEN', since: 'it is 1507, fifteen years after Columbus', therefore: 'the map shows new geographic knowledge' }
    ],
    read: ['A map naming new lands', 'A report that printing declined after the Reformation', 'A Ming sailor’s chart of the Pacific coast'],
    plain: ['What does a new world map show?', 'Did printing decline in Europe after 1517?', 'Did Ming ships explore the Americas?'],
    meaning: 'A map labeling new lands "America" shows how ocean voyages grew European knowledge of the world.',
    trapIdx: 3,
    trap: 'D invents a voyage: the Ming never explored the Americas. The source is a European map of lands Europeans reached.'
  };

  W['u4_4.2_1'] = {
    type: 'causation',
    hq: 'The treaty most directly explains why',
    hs: ['lands to the west would go to Spain, and lands to the east to Portugal'],
    src: [
      { tag: 'WHAT', since: 'it draws a line between Spanish and Portuguese claims', therefore: 'it decides who gets which lands' },
      { tag: 'WHERE', since: 'eastern South America falls east of the line', therefore: 'that land went to Portugal' }
    ],
    read: ['A treaty splitting new lands', 'An English charter for colonies in North America', 'A Dutch plan for the Indonesian spice trade'],
    plain: ['Why is Brazil Portuguese?', 'Why could England colonize North America?', 'Why did the Dutch control the spice trade?'],
    meaning: 'The line put the eastern bulge of South America on Portugal’s side. That is why Brazil speaks Portuguese.',
    trapIdx: 0,
    trap: 'A is about England, which ignored the treaty. Ask what the treaty itself decided: Spanish versus Portuguese lands.'
  };

  W['u4_4.3_1'] = {
    type: 'bestillustrates',
    hq: 'The adoption of horses best illustrates',
    hs: ['adopted them for hunting bison and for warfare'],
    src: [
      { tag: 'WHAT', since: 'horses came from Spain to the Americas', therefore: 'this is part of the Columbian Exchange' },
      { tag: 'WHO', since: 'the Comanche and Lakota took them up', therefore: 'Native peoples changed how they lived' }
    ],
    read: ['Plains peoples adopting horses', 'A Spanish missionary riding across the Plains', 'A farmer bringing llamas to Spain'],
    plain: ['What did horses change?', 'Did Plains peoples grow weaker?', 'Did llamas spread to Europe?'],
    meaning: 'Horses from the Columbian Exchange changed how Plains peoples hunted and fought.',
    trapIdx: 0,
    trap: 'A is the opposite: horses made peoples like the Comanche stronger. Read what the source says horses were used for.'
  };

  W['u4_4.4_2'] = {
    type: 'context',
    hq: 'best understood in the immediate context of',
    hs: ['produced in Portuguese Goa'],
    src: [
      { tag: 'WHERE', since: 'Goa was a Portuguese port in India', therefore: 'Portugal held trading posts, not a land empire' },
      { tag: 'WHEN', since: 'it is 1600 to 1625', therefore: 'Portugal’s Indian Ocean posts were well established' }
    ],
    read: ['Art from Portuguese Goa', 'A sugar plantation owner in Brazil', 'A printer setting type in Lisbon'],
    plain: ['Why was Portugal in Goa?', 'Was it building plantations there?', 'Was it spreading printing presses?'],
    meaning: 'Portugal controlled ports like Goa to run its trade. Art made there reflects its trading-post empire.',
    trapIdx: 0,
    trap: 'A fits the Americas, not Goa. In Asia the Portuguese held ports for trade. Match the place in the source line.'
  };

  W['u4_4.5_2'] = {
    type: 'bestillustrates',
    hq: 'best illustrates how Spain',
    hs: ['send one-seventh of their adult men each year to work in the silver mines of Potosí'],
    src: [
      { tag: 'WHAT', since: 'the mit’a was an Inca labor system', therefore: 'Spain took over something that already existed' },
      { tag: 'WHERE', since: 'the work was in the silver mines of Potosí', therefore: 'it served Spain’s search for wealth' }
    ],
    read: ['Spain forcing Andean men into mines', 'The Church ending forced labor in Peru', 'A mine owner paying high wages to workers'],
    plain: ['What did Spain do with the mit’a?', 'Did Spain end forced labor?', 'Did Spain rely on enslaved Africans here?'],
    meaning: 'Spain took the Inca mit’a and used it to force Andean men into deadly silver mines.',
    trapIdx: 3,
    trap: 'D is the opposite: the workers were forced, and many died. Read the source’s description of the conditions.'
  };

  W['u4_4.6_0'] = {
    type: 'context',
    hq: 'The revolt is best understood as',
    hs: ['Spanish officials had punished Pueblo religious leaders and demanded labor and tribute'],
    src: [
      { tag: 'WHO', since: 'Popé led the Pueblo peoples', therefore: 'it was a Native uprising' },
      { tag: 'WHAT', since: 'the Spanish punished religious leaders and demanded labor', therefore: 'those were the grievances' }
    ],
    read: ['Pueblo peoples driving out the Spanish', 'Two Spanish officials fighting over New Mexico', 'Escaped Caribbean slaves rising in New Mexico'],
    plain: ['What were the Pueblo resisting?', 'Was it a fight between Spanish officials?', 'Was it an alliance against the English?'],
    meaning: 'The Spanish demanded labor and punished Pueblo religion. The revolt resisted both.',
    trapIdx: 2,
    trap: 'C reverses the sides: the Pueblo fought the Spanish, not alongside them. Read who rose up against whom.'
  };

  W['u4_4.6_2'] = {
    type: 'context',
    hq: 'best understood in the context of',
    hs: ['English colonists who were expanding onto their lands'],
    src: [
      { tag: 'WHO', since: 'Metacom led a coalition of Native peoples', therefore: 'they were defending their lands' },
      { tag: 'WHERE', since: 'it was in New England', therefore: 'the colonists were English settlers' }
    ],
    read: ['A war against settlers', 'A dispute between Spain and Portugal', 'A religious war spreading from Germany'],
    plain: ['What caused this war?', 'Was it Spain and Portugal’s rivalry?', 'Was it part of the Reformation wars?'],
    meaning: 'English settlers kept taking Wampanoag land. The war came from settler colonial expansion.',
    trapIdx: 1,
    trap: 'B is a real European conflict of the era, but the source names English colonists taking Native land. Match the actors in the source.'
  };

  W['u4_4.7_0'] = {
    type: 'bestillustrates',
    hq: 'best used as evidence of',
    hs: ['each labeled with a racial category such as mestizo or mulatto and arranged in ranked order'],
    src: [
      { tag: 'WHAT', since: 'the paintings label families by ancestry', therefore: 'they sort people into categories' },
      { tag: 'HOW', since: 'the categories are "arranged in ranked order"', therefore: 'they show a hierarchy' }
    ],
    read: ['Paintings ranking families by ancestry', 'A law making all ancestry groups equal', 'A painting of Mexico’s independence day'],
    plain: ['What do ranked labels show?', 'Were all groups equal under the law?', 'Were there no mixed-race people?'],
    meaning: 'Labeling families by ancestry and ranking them shows a colonial hierarchy based on birth and race.',
    trapIdx: 0,
    trap: 'A is the opposite: the paintings rank the groups. "Ranked order" in the source rules out equality.'
  };

  W['u4_4.8_1'] = {
    type: 'bestillustrates',
    hq: 'The situation described best illustrates',
    hs: ['most trade there continued to be carried by Arab, Indian, Malay, and Chinese merchants'],
    src: [
      { tag: 'WHEN', since: 'it describes the years after 1498', therefore: 'it asks what changed when Europeans arrived' },
      { tag: 'WHAT', since: 'Asian merchants kept carrying most trade', therefore: 'much stayed the same' }
    ],
    read: ['Asian traders keeping most of the trade', 'A report of Europe taking over all Asian trade', 'A study of the monsoon trade collapsing'],
    plain: ['What stayed the same?', 'Did Europe take over all trade?', 'Did Islam end in Southeast Asia?'],
    meaning: 'Even with some ports seized, Asian merchants still carried most of the trade. That is continuity.',
    trapIdx: 0,
    trap: 'A goes too far. The Portuguese seized some ports, but "most trade" stayed with Asian merchants. Watch for "complete."'
  };

  /* ============ UNIT 5 ============ */
  W['u5_5.1_4'] = {
    type: 'similar',
    hq: 'most different from the arguments of those nationalists who claimed that',
    hs: ['The free men of color demand justice, and they should be granted the same rights of citizenship as other Frenchmen'],
    src: [
      { tag: 'WHO', since: 'both authors argue for Black citizenship', therefore: 'they define citizens by rights, not origin' },
      { tag: 'WHEN', since: 'it is the 1790s', therefore: 'later nationalists defined nations by birth and shared history' }
    ],
    read: ['Two writers backing Black citizenship', 'Two planters denying citizenship to free people of color', 'Two officials limiting citizenship to the French-born'],
    plain: ['Which view of citizens is opposite?', 'Is it language and religion over land?', 'Is it power through the people’s will?'],
    meaning: 'These authors would make people in the colonies citizens. The opposite view limited citizenship to those born in the nation with a shared origin.',
    trapIdx: 3,
    trap: 'D is close to what these authors believe, so it is not "most different." Read the question’s direction: you want the opposite view.'
  };

  W['u5_5.3_0'] = {
    type: 'causation',
    hq: 'The factors described best explain why',
    hs: ['large deposits of coal and iron ore, many navigable rivers and canals'],
    src: [
      { tag: 'WHAT', since: 'it lists Britain’s resources and money', therefore: 'these are causes of industrialization' },
      { tag: 'WHEN', since: 'it is the 1700s', therefore: 'this is just before the Industrial Revolution' }
    ],
    read: ['Britain’s advantages in the 1700s', 'A Qing official describing China’s first factories', 'A British law ending the monarchy'],
    plain: ['Why did it start in Britain?', 'Did China industrialize first?', 'Did Britain avoid colonies?'],
    meaning: 'Coal, iron, rivers, workers and money to invest: everything needed for the Industrial Revolution to begin in Britain.',
    trapIdx: 2,
    trap: 'C is the opposite: the source says merchants had capital "from overseas trade and colonies." Read every factor listed.'
  };

  W['u5_5.3_3'] = {
    type: 'causation',
    hq: 'British factories were the first to',
    hs: ['while Britain continued to stress textile production'],
    src: [
      { tag: 'WHAT', since: 'the first paragraph names British textiles', therefore: 'the question asks how that industry began' },
      { tag: 'WHEN', since: 'it asks about the late 1700s and early 1800s', therefore: 'this is the first industrial revolution' }
    ],
    read: ['British versus German industry', 'A British mill using enslaved workers', 'A merchant protected by trade laws'],
    plain: ['What did British factories do first?', 'Did they use colonial resources first?', 'Did they use forced labor first?'],
    meaning: 'British textile mills were the first to use steam-powered machines for large-scale production.',
    trapIdx: 1,
    trap: 'B is true of many empires long before Britain. The question asks what British factories did first: steam power.'
  };

  W['u5_5.4_5'] = {
    type: 'similar',
    hq: 'would most likely have been shared by members of which of the following governments',
    hs: ['the empire’s former strength and prosperity have changed into weakness and poverty'],
    src: [
      { tag: 'WHO', since: 'the Ottoman government admits decline', therefore: 'look for another empire feeling weak' },
      { tag: 'WHEN', since: 'it is the 1800s', therefore: 'industrial Europe pressured many empires' }
    ],
    read: ['An empire admitting it has declined', 'A victorious Russian general after Napoleon', 'A Japanese leader after beating China'],
    plain: ['Who else felt weakened?', 'Russia after beating Napoleon?', 'Japan after beating China?'],
    meaning: 'Like the Ottomans, the Qing were humbled by the West and forced into unequal treaties. They shared that sense of decline.',
    trapIdx: 2,
    trap: 'C describes a winner, not a declining empire. Japan felt strong after 1895. Match the feeling in the source: weakness.'
  };

  W['u5_5.5_0'] = {
    type: 'causation',
    hq: 'The steam engine most directly contributed to',
    hs: ['soon steam engines powered textile mills, mines'],
    src: [
      { tag: 'WHAT', since: 'steam engines replaced water power', therefore: 'factories could be built anywhere' },
      { tag: 'WHEN', since: 'it is the 1760s to 1800s', therefore: 'this is early industrialization' }
    ],
    read: ['How steam engines spread', 'A mine closing because coal was no longer needed', 'A weaver returning to work at home'],
    plain: ['What did steam change?', 'Did coal mining decline?', 'Did the textile industry end?'],
    meaning: 'Before steam, mills needed rivers for water power. Steam engines let factories be built anywhere.',
    trapIdx: 1,
    trap: 'B is the opposite: steam engines burned coal, so mining grew. Using less coal per engine is not the same as needing no coal.'
  };

  W['u5_5.5_3'] = {
    type: 'causation',
    hq: 'explains the differences in the perceived risk',
    hs: ['Land in Great Britain | 3–6% per year | Low', 'Land in India | 12% per year | Low-Moderate'],
    src: [
      { tag: 'WHO', since: 'English lenders made the table', therefore: 'risk is judged by British investors' },
      { tag: 'WHEN', since: 'it is 1750 to 1800', therefore: 'Britain was still taking control of India' }
    ],
    read: ['British investment risks', 'A table of Indian rainfall', 'A table of British city sizes'],
    plain: ['Why was Indian land riskier?', 'Did Britain have cottage industry?', 'Did India’s climate ruin farming?'],
    meaning: 'British land was safe and settled. In India, Britain was still fighting for control, so land there was riskier.',
    trapIdx: 3,
    trap: 'D blames India’s climate, which the table never mentions. The risk comes from politics: Britain had not yet secured India.'
  };

  W['u5_5.6_3'] = {
    type: 'context',
    hq: 'can most directly be explained in relation to which of the following arguments',
    hs: ['The perfectly legitimate objections of some people to chartered companies like ours'],
    src: [
      { tag: 'WHO', since: 'the chairman runs a government-chartered company', therefore: 'he admits some people object to companies like his' },
      { tag: 'WHAT', since: 'the question names laissez-faire economists', therefore: 'they opposed government favors to companies' }
    ],
    read: ['A chairman defending his company', 'A union leader demanding protections', 'A banker praising free trade'],
    plain: ['Why would free-market thinkers object?', 'Did charters allow too much free trade?', 'Did charters remove protections?'],
    meaning: 'Laissez-faire economists said government-chartered monopolies distorted competition and hurt consumers.',
    trapIdx: 1,
    trap: 'B gets laissez-faire backward. Free-market thinkers wanted more free trade, not less. Know what the school of thought believed.'
  };

  W['u5_5.7_2'] = {
    type: 'bestillustrates',
    hq: 'Businesses like those described best illustrate',
    hs: ['financed trade between China, Europe, and the Americas', 'ran plantations, railroads, and ports across Central America'],
    src: [
      { tag: 'WHAT', since: 'both companies worked in many countries', therefore: 'they crossed borders' },
      { tag: 'WHEN', since: 'they were founded in 1865 and 1899', therefore: 'this is the age of industrial capitalism' }
    ],
    read: ['Companies working across borders', 'A government running Latin American exports', 'A report on global trade falling'],
    plain: ['What kind of business is this?', 'Did global trade decline?', 'Did governments run these exports?'],
    meaning: 'A bank financing trade on three continents and a company running plantations in several countries: transnational businesses.',
    trapIdx: 0,
    trap: 'A is the opposite: companies financing worldwide trade show trade growing.'
  };

  W['u5_5.8_2'] = {
    type: 'causation',
    hq: 'some governments responded to the growing popularity of ideas such as the ones expressed',
    hs: ['strive to compel the government to pass necessary labor legislation'],
    src: [
      { tag: 'WHO', since: 'Lenin was a revolutionary', therefore: 'governments feared ideas like his' },
      { tag: 'WHEN', since: 'it is 1902', therefore: 'socialism was growing across Europe' }
    ],
    read: ['A plan to lead workers', 'A banker opening new financial markets', 'A minister expanding colonies'],
    plain: ['How did governments respond?', 'Did they create new financial tools?', 'Did they expand colonies?'],
    meaning: 'To take the wind out of socialism, some governments passed reforms that improved workers’ conditions.',
    trapIdx: 1,
    trap: 'B was happening too, but it was not a response to socialist ideas. Ask what a government would do to win workers away from revolution.'
  };

  W['u5_5.9_3'] = {
    type: 'causation',
    hq: 'most directly a response to',
    hs: ['traced a deadly cholera outbreak to a single contaminated public water pump'],
    src: [
      { tag: 'WHAT', since: 'cholera spread through dirty water in a crowded city', therefore: 'cities had grown faster than their services' },
      { tag: 'WHEN', since: 'it is 1854', therefore: 'industrial cities were packed with new workers' }
    ],
    read: ['Tracing cholera to dirty water', 'A report on industry ending in Britain', 'A study of crops in European farms'],
    plain: ['What problem did sewers fix?', 'Had industry ended in Britain?', 'Did cities lose people?'],
    meaning: 'Crowded industrial cities had dirty water and disease. Sewers and clean water answered the health problems of fast urban growth.',
    trapIdx: 2,
    trap: 'C misreads the result. Cities kept growing; the fix was clean water, not fewer people.'
  };

  /* ============ UNIT 6 ============ */
  W['u6_6.2_1'] = {
    type: 'bestillustrates',
    hq: 'The developments described best illustrate',
    hs: ['taking land from Aboriginal Australians and Māori'],
    src: [
      { tag: 'WHO', since: 'British settlers moved in large numbers', therefore: 'they came to stay, not just to trade' },
      { tag: 'WHAT', since: 'they took Indigenous land and set up their own governments', therefore: 'they replaced the people already there' }
    ],
    read: ['Settlers taking Indigenous land', 'Investors buying shares in Pacific mines', 'Farmers in Britain resisting factories'],
    plain: ['What kind of colony is this?', 'Was it investment without settlement?', 'Was it about ending slavery?'],
    meaning: 'Large numbers of settlers took Indigenous land and ran their own governments: settler colonialism.',
    trapIdx: 0,
    trap: 'A describes the opposite kind of empire: influence without settling. The source is all about settlers moving in.'
  };

  W['u6_6.2_3'] = {
    type: 'bestillustrates',
    hq: 'most directly challenges which assumption',
    hs: ['the deliberate adoption of Western techniques to preserve Japanese independence'],
    src: [
      { tag: 'WHAT', since: 'it lists Japan’s railways, ships and modern army', therefore: 'Japan industrialized fast' },
      { tag: 'WHEN', since: 'it is about 1890', therefore: 'Western powers were colonizing much of Asia' }
    ],
    read: ['Japan modernizing to stay free', 'A missionary saying only Christians can industrialize', 'A governor saying Asia needs colonizers to develop'],
    plain: ['What did Japan prove was possible?', 'Did industry need Protestant roots?', 'Did Asia need colonizers to develop?'],
    meaning: 'Japan adopted Western technology on its own terms and stayed independent. Non-Western nations could modernize and resist colonization.',
    trapIdx: 1,
    trap: 'B is a real assumption Japan also disproved, but the passage’s point is broader: Japan modernized to keep from being colonized. D says that fully.'
  };

  W['u6_6.2_10'] = {
    type: 'similar',
    hq: 'a key distinction between European imperialism in sub-tropical lands and the European spheres of influence',
    hs: ['Politically, the new Imperialism is an expansion of autocracy'],
    src: [
      { tag: 'WHO', since: 'Hobson criticized the new imperialism', therefore: 'he describes direct rule over colonies' },
      { tag: 'WHAT', since: 'China was split into spheres of influence', therefore: 'Europeans there sought trade more than rule' }
    ],
    read: ['An economist on imperial rule', 'A report on balanced trade with China', 'A merchant losing money in China'],
    plain: ['How did spheres differ?', 'Was trade with China balanced?', 'Did merchants profit little in China?'],
    meaning: 'In China’s spheres, Europeans mostly wanted profit. In colonies they ruled directly and tried to change the culture.',
    trapIdx: 0,
    trap: 'A is false: trade with China was unequal, forced open by war and unequal treaties. Know the history behind the spheres.'
  };

  W['u6_6.3_0'] = {
    type: 'context',
    hq: 'The Ghost Dance is best understood as',
    hs: ['Followers believed the ritual would restore their lands, bring back the bison, and remove white settlers'],
    src: [
      { tag: 'WHO', since: 'Native peoples of the western U.S. took part', therefore: 'it is a Native response' },
      { tag: 'WHEN', since: 'it is 1889–1890', therefore: 'they had lost most of their land and the bison' }
    ],
    read: ['A ritual to restore lost lands', 'A government school for Native children', 'A settlers’ plan for farm reform'],
    plain: ['What was the Ghost Dance?', 'Was it a government program?', 'Was it led by settlers?'],
    meaning: 'A ritual meant to bring back land and bison: a religious response to losing land and a way of life.',
    trapIdx: 1,
    trap: 'B is a real policy of the era, but it was imposed on Native peoples. The Ghost Dance came from them.'
  };

  W['u6_6.3_4'] = {
    type: 'bestillustrates',
    hq: 'which type of indigenous response to imperialism',
    hs: ['sought to adopt Western military technology without altering Chinese political or cultural institutions'],
    src: [
      { tag: 'WHO', since: 'Qing officials led the movement', therefore: 'it came from inside the government' },
      { tag: 'WHAT', since: 'it took Western tools but kept Chinese ways', therefore: 'it was selective' }
    ],
    read: ['Borrowing Western tools', 'Rebels vowing to expel all foreigners', 'Reformers copying Western government'],
    plain: ['What response is this?', 'Was it armed resistance?', 'Was it full Westernization?'],
    meaning: 'Western technology, Chinese institutions: selective modernization.',
    trapIdx: 1,
    trap: 'B goes too far: the movement kept Chinese political and cultural institutions. "Western learning for practical use" only.'
  };

  W['u6_6.4_2'] = {
    type: 'causation',
    hq: 'most directly driven by',
    hs: ['for bicycle and automobile tires, insulation for electrical wires, and machinery belts'],
    src: [
      { tag: 'WHAT', since: 'rubber went into tires, wires and machines', therefore: 'new industries needed it' },
      { tag: 'WHEN', since: 'it is the late 1800s', therefore: 'this is the second industrial revolution' }
    ],
    read: ['Why industry wanted rubber', 'A report on world trade shrinking', 'A Ming tax record paid in silver'],
    plain: ['What drove demand for rubber?', 'Did global trade decline?', 'Was it the Columbian Exchange?'],
    meaning: 'Tires, electric wires and machine belts were new industrial products. Industrialization drove the rubber boom.',
    trapIdx: 2,
    trap: 'C is centuries too early: the Columbian Exchange began in the 1500s. Check the date in the source.'
  };

  W['u6_6.5_4'] = {
    type: 'bestillustrates',
    hq: 'most directly demonstrates',
    hs: ['Foreign troops were permanently stationed in Beijing'],
    src: [
      { tag: 'WHAT', since: 'China fought foreigners and lost', therefore: 'look at what the peace terms did' },
      { tag: 'WHEN', since: 'it is 1900–1901', therefore: 'China was already under heavy foreign pressure' }
    ],
    read: ['A failed uprising and harsh peace terms', 'A Chinese victory restoring full sovereignty', 'A modern Qing army beating eight nations'],
    plain: ['What did the uprising lead to?', 'Did China win back its sovereignty?', 'Did China’s new army succeed?'],
    meaning: 'A huge indemnity, an arms ban and foreign troops in Beijing: fighting back deepened foreign control.',
    trapIdx: 0,
    trap: 'A is the opposite of what the source describes. China lost, paid a huge indemnity, and had to accept foreign troops.'
  };

  W['u6_6.6_0'] = {
    type: 'causation',
    hq: 'The migration described is best explained by',
    hs: ['About one million people died, and more than a million emigrated'],
    src: [
      { tag: 'WHAT', since: 'a blight destroyed the potato crop', therefore: 'people lost their main food' },
      { tag: 'WHEN', since: 'it is 1845–1852', therefore: 'Ireland was poor and under British rule' }
    ],
    read: ['Famine pushing people to leave', 'Free land drawing settlers to Australia', 'Catholics fleeing persecution in America'],
    plain: ['Why did people leave?', 'Did free land pull them away?', 'Was it religious persecution?'],
    meaning: 'A crop disaster caused famine on top of poverty. Environmental disaster plus hardship pushed people out.',
    trapIdx: 0,
    trap: 'A is a pull factor for a different place. Most Irish went to the United States, pushed out by famine.'
  };

  W['u6_6.7_1'] = {
    type: 'context',
    hq: 'The law is best understood as part of',
    hs: ['used a dictation test to keep out non-European migrants, especially from Asia'],
    src: [
      { tag: 'WHO', since: 'Australia had just federated', therefore: 'its new government set immigration rules' },
      { tag: 'WHEN', since: 'it is 1901', therefore: 'the U.S. had already passed Chinese exclusion' }
    ],
    read: ['A law keeping out Asian migrants', 'Employers welcoming Asian workers', 'Australia winning full independence'],
    plain: ['What larger pattern does this fit?', 'Did employers welcome Asian workers?', 'Was this about independence?'],
    meaning: 'Like U.S. Chinese exclusion, Australia’s law kept out Asian migrants. It was part of a wider pattern.',
    trapIdx: 2,
    trap: 'C misreads federation. Australia united in 1901 but stayed in the British Empire. The law is about immigration, not independence.'
  };

  W['u6_6.8_2'] = {
    type: 'bestillustrates',
    hq: 'expansion best illustrates',
    hs: ['Japan built railroads, factories, and a modern army and navy', 'took control of Taiwan and, later, Korea'],
    src: [
      { tag: 'WHAT', since: 'Japan industrialized, then won wars', therefore: 'industry made expansion possible' },
      { tag: 'WHEN', since: 'it covers 1868 to 1905', therefore: 'this is the Meiji era' }
    ],
    read: ['Industry, then expansion', 'Japan closing itself to trade', 'Western powers colonizing Japan'],
    plain: ['What did Japan become?', 'Did industry fail outside the West?', 'Was Japan colonized?'],
    meaning: 'Railroads, factories and a modern military, then victories and colonies: industrialization made Japan an imperial power.',
    trapIdx: 0,
    trap: 'A is the opposite: Japan is the example of industrialization succeeding outside the West.'
  };

  /* ============ UNIT 7 ============ */
  W['u7_7.1_1'] = {
    type: 'purpose',
    hq: 'it shows that advocates of Japanese imperialism',
    hs: ['Japan has taken the lead in adopting the best parts of European civilization'],
    src: [
      { tag: 'WHO', since: 'Shigenobu was a former prime minister', therefore: 'his views shaped Japanese policy' },
      { tag: 'WHAT', since: 'he says Japan leads the "non-white countries"', therefore: 'he casts Japan as the civilized leader of Asia' }
    ],
    read: ['A leader casting Japan as Asia’s guide', 'A Japanese liberal praising representative government', 'A Japanese leader accepting Western racial rankings'],
    plain: ['What attitude did Japan borrow?', 'Did they share Enlightenment ideas?', 'Did they accept Western racial rankings?'],
    meaning: 'Japan claimed to lead and "civilize" Asia, the same attitude Europe used. Imperialists borrowed the civilizing mission.',
    trapIdx: 1,
    trap: 'B is the opposite: Shigenobu rejects Western racial rankings. But he ranks Japan above other Asian nations, which is the civilizing mission.'
  };

  W['u7_7.2_1'] = {
    type: 'causation',
    hq: 'the historical significance of the harsh conditions',
    hs: ['Germany is reduced to economic bondage'],
    src: [
      { tag: 'WHO', since: 'a neutral Dutch paper wrote it', therefore: 'it warns the treaty is too harsh' },
      { tag: 'WHEN', since: 'it is 1919', therefore: 'look at what Germany faced in the 1920s and 1930s' }
    ],
    read: ['A paper warning the treaty is too harsh', 'A German communist celebrating a revolution', 'A report on Germans leaving for America'],
    plain: ['What did harsh terms lead to?', 'Did communists take over Germany?', 'Did Germany lose all its industry?'],
    meaning: 'Humiliation and economic hardship fed anger that extremist parties, like the Nazis, used to win support.',
    trapIdx: 0,
    trap: 'A names a real attempt, but communist uprisings in Germany failed. The lasting effect was the rise of extremism, especially the Nazis.'
  };

  W['u7_7.2_8'] = {
    type: 'causation',
    hq: 'any attempt to acquire colonies in Africa could',
    hs: ['Italy must not be the country that bears the responsibility of putting a match to the powder keg'],
    src: [
      { tag: 'WHO', since: 'Giolitti was Italy’s prime minister', therefore: 'he weighs the risks of taking Libya' },
      { tag: 'WHEN', since: 'it is 1911', therefore: 'European powers competed hard for colonies' }
    ],
    read: ['Italy’s leader fearing a wider war', 'An African king uniting his neighbors', 'A Japanese admiral eyeing Italian colonies'],
    plain: ['What could a grab for colonies set off?', 'Would African states unite against Europe?', 'Would Japan attack Italy’s colonies?'],
    meaning: 'Taking new colonies could inflame rivalries between European powers already competing for land and resources.',
    trapIdx: 0,
    trap: 'A was not the danger Giolitti feared. His "powder keg" is a war among European powers. Read what he says could go wrong.'
  };

  W['u7_7.3_4'] = {
    type: 'causation',
    hq: 'directly enabled the establishment of the government that produced the poster',
    hs: ['Long live the invincible party of Lenin!'],
    src: [
      { tag: 'WHO', since: 'the Soviet Communist Party made it', therefore: 'the question asks how that government began' },
      { tag: 'WHEN', since: 'the Soviet state was born in 1917', therefore: 'look at what happened to Russia then' }
    ],
    read: ['A Soviet party poster', 'A peace treaty redrawing borders', 'A tsar’s decree freeing the serfs'],
    plain: ['What let them take power?', 'Did new borders create it?', 'Did freeing the serfs create it?'],
    meaning: 'World War I broke the Russian Empire. In that collapse, Lenin’s party seized power in 1917.',
    trapIdx: 2,
    trap: 'C happened in 1861, long before. A cause should directly lead to the effect, not come decades earlier.'
  };

  W['u7_7.4_2'] = {
    type: 'purpose',
    hq: 'a potentially significant limitation of using the document',
    hs: ['the Brazilian government has been undertaking a social policy'],
    src: [
      { tag: 'WHO', since: 'the Vargas government wrote it about itself', therefore: 'it will show its policies in a good light' },
      { tag: 'WHAT', since: 'it lists benefits and nothing else', therefore: 'it may leave out problems' }
    ],
    read: ['A government praising its own reforms', 'A union leader criticizing the reforms', 'An economist measuring the reforms’ costs'],
    plain: ['What might a government leave out?', 'Would it inflate gains for the rich?', 'Would it inflate a court’s role?'],
    meaning: 'A government describing its own reforms will skip any economic problems they caused. That limits the source.',
    trapIdx: 0,
    trap: 'A misreads the slant. The document brags about helping workers, not the middle and upper classes. Ask what the author would want to hide.'
  };

  W['u7_7.4_4'] = {
    type: 'causation',
    hq: 'how the Great Depression contributed to the outbreak of World War II',
    hs: ['could not withstand the economic shock'],
    src: [
      { tag: 'WHAT', since: 'it gives the Depression’s numbers', therefore: 'economies collapsed worldwide' },
      { tag: 'WHO', since: 'it names Germany’s Weimar Republic', therefore: 'democracy there was failing' }
    ],
    read: ['The Depression breaking economies', 'Germany booming in the early 1930s', 'Nations forming peaceful alliances'],
    plain: ['How did the Depression lead to war?', 'Did Germany prosper?', 'Did trade collapse create alliances?'],
    meaning: 'Economic ruin weakened democracies like Weimar Germany and helped extremists who promised radical fixes.',
    trapIdx: 0,
    trap: 'A is the opposite of the source: the Depression devastated Germany. Read the numbers in the passage.'
  };

  W['u7_7.5_1'] = {
    type: 'context',
    hq: 'best understood as an example of',
    hs: ['Gandhi led followers 240 miles to the sea to make salt in defiance of British colonial law'],
    src: [
      { tag: 'WHO', since: 'Gandhi led the Indian National Congress', therefore: 'he used satyagraha, nonviolent resistance' },
      { tag: 'WHAT', since: 'they made salt against British law', therefore: 'they broke an unjust law openly' }
    ],
    read: ['Gandhi breaking an unjust law', 'Indian rebels attacking British troops', 'Indian diplomats in London'],
    plain: ['What kind of protest was this?', 'Was it violent revolution?', 'Was it a boycott of British goods?'],
    meaning: 'Marching to the sea to make salt against British law: nonviolent civil disobedience that drew mass participation.',
    trapIdx: 2,
    trap: 'C is close, since Gandhi also led boycotts, but the Salt March broke a law rather than refusing goods. Match the specific action.'
  };

  W['u7_7.6_2'] = {
    type: 'causation',
    hq: 'most directly reflects which of the following factors',
    hs: ['The Czechoslovak government was not consulted'],
    src: [
      { tag: 'WHO', since: 'it is a radio report from London', therefore: 'it gives Chamberlain’s view and his critics’' },
      { tag: 'WHEN', since: 'it is September 1938', therefore: 'Hitler had just been given the Sudetenland' }
    ],
    read: ['A report on giving Hitler land', 'A report on fascists fighting communists', 'A League ruling on a border dispute'],
    plain: ['What did Munich show?', 'Was war inevitable from ideology?', 'Was it caused by the Depression?'],
    meaning: 'Britain and France gave in to Hitler to avoid war. Appeasement failed to stop Axis aggression.',
    trapIdx: 3,
    trap: 'D is a real failure of the 1930s, but Munich was a deal between Britain, France, Germany and Italy, not a League decision.'
  };

  W['u7_7.6_6'] = {
    type: 'bestillustrates',
    hq: 'most directly demonstrates that',
    hs: ['which condemned but took no military action', 'Hitler then occupied the rest of Czechoslovakia in March 1939'],
    src: [
      { tag: 'WHAT', since: 'it lists aggression from 1931 to 1939', therefore: 'look for the pattern across the timeline' },
      { tag: 'HOW', since: 'each act met little resistance', therefore: 'aggressors kept going' }
    ],
    read: ['A timeline of unchecked aggression', 'A timeline of quick Western responses', 'A timeline of the League stopping wars'],
    plain: ['What pattern is shown?', 'Was each act met with force?', 'Did the League stop expansion?'],
    meaning: 'Condemned "but took no military action," over and over. Unchallenged aggression encouraged more.',
    trapIdx: 0,
    trap: 'A is the opposite of the timeline. Each step went largely unchallenged until Poland.'
  };

  W['u7_7.9_3'] = {
    type: 'bestillustrates',
    hq: 'The events described best illustrate how',
    hs: ['hoping to avoid war'],
    src: [
      { tag: 'WHAT', since: 'Britain and France gave Hitler land', therefore: 'this is appeasement' },
      { tag: 'WHEN', since: 'Germany took more in 1939', therefore: 'the deal did not work' }
    ],
    read: ['Appeasement, then conquest', 'The League preventing war in Europe', 'Germany trading land for colonies'],
    plain: ['Did appeasement work?', 'Did the League prevent war?', 'Did Germany stop expanding?'],
    meaning: 'They gave Hitler land "hoping to avoid war," and he took more anyway. Appeasement failed.',
    trapIdx: 1,
    trap: 'B is the opposite: Germany invaded Poland and the war began. Read what happened after the deal.'
  };

  /* ============ UNIT 8 ============ */
  W['u8_8.1_5'] = {
    type: 'similar',
    hq: 'represented a significant departure from which earlier American foreign policy tradition',
    hs: ['One of the primary objectives of the foreign policy of the United States'],
    src: [
      { tag: 'WHO', since: 'Truman asked Congress to aid countries abroad', therefore: 'the U.S. was taking on a global role' },
      { tag: 'WHEN', since: 'it is 1947', therefore: 'before the world wars the U.S. mostly stayed out of Europe' }
    ],
    read: ['Truman pledging aid to free peoples', 'A U.S. plan for loans to Latin America', 'A U.S. alliance with European armies before 1940'],
    plain: ['What did this break?', 'Was it dollar diplomacy?', 'Was it the Monroe Doctrine?'],
    meaning: 'For most of its history the U.S. avoided European affairs. Pledging aid to resist communism abroad broke with that isolationism.',
    trapIdx: 1,
    trap: 'B gets history backward: before 1945 the U.S. avoided European alliances. The Truman Doctrine broke from isolation, not from alliances.'
  };

  W['u8_8.2_2'] = {
    type: 'causation',
    hq: 'most directly explains which strategy these nations pursued',
    hs: ['Even their economic strength is dispersed and slight'],
    src: [
      { tag: 'WHO', since: 'Sukarno spoke for weak new nations', therefore: 'they lacked military and economic power' },
      { tag: 'WHAT', since: 'he says they "cannot indulge in power politics"', therefore: 'they needed another tool' }
    ],
    read: ['A leader admitting new nations lack power', 'A general forming alliances with both superpowers', 'A minister demanding reparations from Europe'],
    plain: ['What tool did weak nations use?', 'Did they ally with both superpowers?', 'Did they demand reparations?'],
    meaning: 'Without armies or wealth, the new nations used what they had: acting together and claiming moral authority.',
    trapIdx: 0,
    trap: 'A contradicts Sukarno, who says they "cannot indulge in power politics." Alliances with superpowers are power politics.'
  };

  W['u8_8.3_4'] = {
    type: 'causation',
    hq: 'most directly contributed to which subsequent development',
    hs: ['brought the superpowers into direct confrontation'],
    src: [
      { tag: 'WHAT', since: 'the superpowers nearly went to nuclear war', therefore: 'both wanted to avoid a repeat' },
      { tag: 'WHEN', since: 'it is October 1962', therefore: 'the effect comes after 1962' }
    ],
    read: ['The superpowers at the nuclear brink', 'Castro joining the Soviet side in 1959', 'Soviet tanks entering Hungary in 1956'],
    plain: ['What came afterward?', 'Did it cause the Cuban Revolution?', 'Did it cause the invasion of Hungary?'],
    meaning: 'After nearly blundering into nuclear war, Washington and Moscow set up a direct hotline to talk in a crisis.',
    trapIdx: 2,
    trap: 'C came before the crisis, in 1959. An effect must come after the cause. Check the dates.'
  };

  W['u8_8.4_5'] = {
    type: 'causation',
    hq: 'most directly responds to which historical experience',
    hs: ['The era in which the Chinese people were regarded as uncivilized is now ended'],
    src: [
      { tag: 'WHO', since: 'Mao had just won the civil war', therefore: 'he speaks for a new China' },
      { tag: 'WHAT', since: 'he says China was "regarded as uncivilized"', therefore: 'he means how foreign powers treated China' }
    ],
    read: ['Mao saying China has stood up', 'A Qing emperor closing China to trade', 'A Soviet leader mocking Chinese communists'],
    plain: ['What is Mao answering?', 'Was it China’s own isolation?', 'Was it Soviet criticism?'],
    meaning: 'Foreign powers had forced unequal treaties on China and treated it as backward. Mao declares that era over.',
    trapIdx: 3,
    trap: 'D flips the direction: Confucian tradition saw China as superior. Mao is answering foreigners who called China uncivilized.'
  };

  W['u8_8.5_2'] = {
    type: 'causation',
    hq: 'why so many African colonies achieved independence',
    hs: ['We must realize that from now on we are no longer a colonial people'],
    src: [
      { tag: 'WHO', since: 'Nkrumah led Ghana to independence in 1957', therefore: 'Ghana was the first of many' },
      { tag: 'WHEN', since: 'the question asks about the late 1950s and 1960s', therefore: 'think about Europe after World War II' }
    ],
    read: ['Ghana’s leader declaring freedom', 'A UN order freeing every colony at once', 'An African army defeating Britain'],
    plain: ['Why did colonies win freedom?', 'Did the UN order it?', 'Did African armies win big wars?'],
    meaning: 'Europe was weakened by World War II, and nationalist movements grew. Holding colonies became too costly.',
    trapIdx: 1,
    trap: 'B is false for most of Africa: most colonies won independence through politics and negotiation, not major wars.'
  };

  W['u8_8.6_4'] = {
    type: 'causation',
    hq: 'most directly contributed to which post-independence pattern',
    hs: ['borders drawn by colonial powers divided ethnic groups or united historically hostile peoples'],
    src: [
      { tag: 'WHAT', since: 'colonial borders ignored ethnic lines', therefore: 'new nations inherited divisions' },
      { tag: 'WHEN', since: 'it describes the years after independence', therefore: 'look for what happened inside new states' }
    ],
    read: ['Borders splitting groups', 'Nations asking to rejoin their empires', 'A union erasing colonial borders'],
    plain: ['What did those borders lead to?', 'Did nations rejoin their empires?', 'Did Pan-African unity erase borders?'],
    meaning: 'Borders that split some groups and forced rivals together led to ethnic and religious conflict, sometimes civil war.',
    trapIdx: 2,
    trap: 'C was a hope, not the result. Pan-African union never replaced the colonial borders.'
  };

  W['u8_8.6_6'] = {
    type: 'bestillustrates',
    hq: 'most directly advocates a belief in which of the following ideologies',
    hs: ['the African race, united under one federal government'],
    src: [
      { tag: 'WHO', since: 'Nkrumah led independent Ghana', therefore: 'he hoped to unite Africa' },
      { tag: 'WHAT', since: 'he calls for one federal government for Africa', therefore: 'the idea is continental unity' }
    ],
    read: ['A call for one united Africa', 'A call for workers to seize factories', 'A call to cut government and free markets'],
    plain: ['Which idea is this?', 'Is it Marxism?', 'Is it neoliberalism?'],
    meaning: 'One federal government for the whole "African race" is Pan-Africanism.',
    trapIdx: 3,
    trap: 'D, nationalism, is close, but it means loyalty to one nation. Nkrumah wants all of Africa united, which is Pan-Africanism.'
  };

  W['u8_8.7_5'] = {
    type: 'similar',
    hq: 'most directly parallels which argument',
    hs: ["the white moderate, who is more devoted to 'order' than to justice"],
    src: [
      { tag: 'WHO', since: 'King is criticizing people who claim to be allies', therefore: 'his target is half-way supporters' },
      { tag: 'WHAT', since: 'they prefer "order" to justice', therefore: 'they accept an unfair situation to keep things calm' }
    ],
    read: ['King criticizing half-hearted allies', 'Gandhi rejecting Western institutions', 'Mandela calling nonviolence a failure'],
    plain: ['Who made a similar complaint?', 'Was it Gandhi on Western institutions?', 'Was it Mandela on nonviolence?'],
    meaning: 'King criticizes those who accept injustice for calm. Nkrumah criticized leaders who accepted neocolonial deals for formal independence.',
    trapIdx: 1,
    trap: 'B also targets moderates, but Ho Chi Minh called them traitors to independence. King’s point is accepting an unfair system to keep order, like neocolonial deals.'
  };

  W['u8_8.8_4'] = {
    type: 'causation',
    hq: 'most directly contributed to the rapid collapse of communist governments',
    hs: ['as border guards stood aside'],
    src: [
      { tag: 'WHAT', since: 'guards let crowds through the Wall', therefore: 'no one was using force to stop them' },
      { tag: 'WHEN', since: 'it is 1989', therefore: 'Gorbachev led the Soviet Union' }
    ],
    read: ['Guards standing aside', 'NATO troops pushing into East Germany', 'Western money funding mass protests'],
    plain: ['Why no crackdown?', 'Did NATO pressure force it?', 'Did U.S. money fund it?'],
    meaning: 'Gorbachev signaled the Soviets would not send troops to save these governments. Without that threat, they fell fast.',
    trapIdx: 0,
    trap: 'A invents a military threat. NATO did not push into Eastern Europe; the key change was that Moscow would no longer use force.'
  };

  W['u8_8.9_3'] = {
    type: 'causation',
    hq: 'best understood as a result of',
    hs: ['independence from both Cold War blocs'],
    src: [
      { tag: 'WHO', since: 'leaders of newly independent nations met', therefore: 'decolonization had created them' },
      { tag: 'WHAT', since: 'they wanted independence from both blocs', therefore: 'the Cold War was pulling at them' }
    ],
    read: ['New nations avoiding both blocs', 'Former empires forming a European union', 'The Soviet Union breaking apart'],
    plain: ['What two trends met at Bandung?', 'Was it the European Union forming?', 'Was it the Cold War ending?'],
    meaning: 'Decolonization created the new nations, and the Cold War pushed them to pick sides. Bandung grew from both.',
    trapIdx: 1,
    trap: 'B is from the wrong time: the European Union came in 1992. Run the time period test.'
  };

  /* ============ UNIT 9 ============ */
  W['u9_9.1_3'] = {
    type: 'causation',
    hq: 'most directly contributed to which of the following',
    hs: ['cut the cost of loading cargo dramatically'],
    src: [
      { tag: 'WHAT', since: 'containers moved straight from ships to trucks and trains', therefore: 'shipping got much cheaper' },
      { tag: 'WHEN', since: 'it covers 1956 to the 1990s', therefore: 'this fed late-1900s globalization' }
    ],
    read: ['How containers cut shipping costs', 'A report on East Asian factories closing', 'A study of ocean shipping falling'],
    plain: ['What did it make possible?', 'Did East Asian manufacturing decline?', 'Did ocean shipping shrink?'],
    meaning: 'Cheap shipping let companies make parts in many countries and assemble them elsewhere: global supply chains.',
    trapIdx: 3,
    trap: 'D is the opposite: cheaper containers made ocean shipping grow. Read the trend the source gives.'
  };

  W['u9_9.2_2'] = {
    type: 'causation',
    hq: 'the speed with which the pandemic described spread',
    hs: ['spread rapidly along the routes taken by soldiers returning from the First World War'],
    src: [
      { tag: 'WHAT', since: 'the virus followed soldiers, ships and railways', therefore: 'movement spread it' },
      { tag: 'WHEN', since: 'it is 1918–1920', therefore: 'World War I had just ended' }
    ],
    read: ['How the 1918 flu spread', 'A doctor testing new antibiotics in 1918', 'A report on world shipping collapsing'],
    plain: ['Why did it spread so fast?', 'Did antibiotics fail against it?', 'Did trade collapse after the war?'],
    meaning: 'Troops coming home and connected ships and railways carried the virus around the world quickly.',
    trapIdx: 0,
    trap: 'A is from the wrong time: antibiotics were not in use until the 1940s, and they do not work on viruses anyway.'
  };

  W['u9_9.4_4'] = {
    type: 'bestillustrates',
    hq: 'The events described best illustrate',
    hs: ['cut production and embargoed oil shipments', 'the price of oil roughly quadrupled'],
    src: [
      { tag: 'WHO', since: 'oil-producing states acted together', therefore: 'they used oil as a weapon' },
      { tag: 'WHAT', since: 'the West’s economy suffered', therefore: 'it depended on their oil' }
    ],
    read: ['Oil states using an embargo', 'The West ending its need for Middle East oil', 'The Soviets seizing Middle East oil'],
    plain: ['What power did oil states have?', 'Did the West stop needing imported oil?', 'Did the Soviets control the oil?'],
    meaning: 'Because the West depended on their oil, producing states could cut supply and cause a recession. They used interdependence as leverage.',
    trapIdx: 0,
    trap: 'A is the opposite: the crisis shows how much the West depended on Middle East oil.'
  };

  W['u9_9.5_5'] = {
    type: 'bestillustrates',
    hq: 'the events described best illustrate',
    hs: ['the Chinese government sent soldiers and tanks to clear the square'],
    src: [
      { tag: 'WHAT', since: 'protesters asked for political reform', therefore: 'the government crushed them' },
      { tag: 'WHEN', since: 'it is 1989, after market reforms began in 1978', therefore: 'the economy was opening' }
    ],
    read: ['A crackdown on calls for reform', 'China holding multiparty elections', 'A new Cultural Revolution in the 1980s'],
    plain: ['What did the Party allow and refuse?', 'Did China become a multiparty democracy?', 'Did Maoist campaigns return?'],
    meaning: 'China opened its economy after 1978 but sent tanks against calls for political reform in 1989.',
    trapIdx: 1,
    trap: 'B is the opposite: the government crushed calls for political reform. Read what the source says happened.'
  };

  W['u9_9.6_4'] = {
    type: 'bestillustrates',
    hq: 'best illustrate how',
    hs: ['used Facebook, Twitter, and mobile phone videos to organize demonstrations'],
    src: [
      { tag: 'WHO', since: 'protesters used social media', therefore: 'ordinary people had new tools' },
      { tag: 'WHAT', since: 'they organized protests and shared images worldwide', therefore: 'technology helped them challenge governments' }
    ],
    read: ['Protesters organizing online', 'Governments shutting down all protest', 'Young people losing interest in politics'],
    plain: ['How did new tools help protesters?', 'Did governments end the protests online?', 'Did youth lose interest?'],
    meaning: 'Protesters used social media to organize and to show the world government violence. New technology helped challenge authority.',
    trapIdx: 0,
    trap: 'A flips who used the tools. The source shows protesters, not governments, using the internet.'
  };

  W['u9_9.7_2'] = {
    type: 'bestillustrates',
    hq: 'The revolution described best illustrates',
    hs: ['overthrew the Western-backed shah', 'established an Islamic republic, enforced religious law'],
    src: [
      { tag: 'WHAT', since: 'it replaced a secular shah with religious rule', therefore: 'it rejected Western-style change' },
      { tag: 'WHEN', since: 'it is 1979', therefore: 'globalization was spreading Western culture' }
    ],
    read: ['A revolt against the shah', 'Soviet communists taking over Iran', 'Free markets succeeding under the shah'],
    plain: ['What did it reject?', 'Did communism spread to Iran?', 'Did the shah’s reforms succeed?'],
    meaning: 'Overthrowing a Western-backed, secular shah and imposing religious law: a religious movement rejecting Western culture.',
    trapIdx: 1,
    trap: 'B is false: the new government "rejected both American and Soviet influence." Read the source’s last line.'
  };

  W['u9_9.8_0'] = {
    type: 'bestillustrates',
    hq: 'The creation of the court best illustrates',
    hs: ['can prosecute individuals for genocide, war crimes, and crimes against humanity'],
    src: [
      { tag: 'WHAT', since: 'it is an international court', therefore: 'it goes beyond any one country' },
      { tag: 'WHO', since: 'it tries individual leaders', therefore: 'people can be held responsible' }
    ],
    read: ['A court for atrocities', 'A report on cooperation collapsing', 'A U.S. alliance punishing governments'],
    plain: ['What does this court show?', 'Did cooperation decline?', 'Did nations give up their courts?'],
    meaning: 'A court that can try individuals for genocide shows the growth of institutions holding people accountable for abuses.',
    trapIdx: 2,
    trap: 'C goes too far: countries kept their own courts. The ICC adds a place to try the worst crimes.'
  };

  W['u9_9.8_2'] = {
    type: 'purpose',
    hq: 'Critics of the policies described most likely argued that they',
    hs: ['reduce subsidies on food and fuel'],
    src: [
      { tag: 'WHO', since: 'the IMF set the loan conditions', therefore: 'poor countries had little choice' },
      { tag: 'WHAT', since: 'they cut subsidies and opened markets', therefore: 'the poor lost help while investors gained' }
    ],
    read: ['Loan rules cutting food subsidies', 'A plan giving nations more control', 'A plan expanding welfare quickly'],
    plain: ['Who did critics say paid the price?', 'Did it give nations too much control?', 'Did it grow welfare too fast?'],
    meaning: 'Cutting food and fuel subsidies hurt the poor, while open markets helped foreign investors. That was the critics’ complaint.',
    trapIdx: 2,
    trap: 'C is the opposite: the policies cut spending and subsidies. Read the direction of the changes.'
  };

  W['u9_9.9_2'] = {
    type: 'bestillustrates',
    hq: 'best illustrates which change after 1900',
    hs: ['grew rapidly after its market reforms began in 1978'],
    src: [
      { tag: 'WHAT', since: 'China became the largest manufacturer', therefore: 'economic weight moved toward Asia' },
      { tag: 'WHEN', since: 'it covers 1978 to the 2010s', therefore: 'this is recent globalization' }
    ],
    read: ['China’s rise as a manufacturer', 'The Qing dynasty returning to power', 'China leaving world trade'],
    plain: ['Where did power shift?', 'Did the Qing return?', 'Did China leave world trade?'],
    meaning: 'China became the largest manufacturer and a top trader: global economic power shifting toward Asia.',
    trapIdx: 3,
    trap: 'D is the opposite: after 1978 China became a leading trading nation.'
  };

  W['u9_9.5_7'] = {
    type: 'bestillustrates',
    hq: 'Source 1 suggests that which of the following was true',
    look: 'NOW calls for "a new movement toward true equality for all women in America" and names "the conditions that now prevent women from enjoying the equality of opportunity."',
    src: [
      { tag: 'WHO', since: 'NOW was founded in 1966', therefore: 'it is just starting its work' },
      { tag: 'WHAT', since: 'it says conditions "now prevent" equality', therefore: 'equality had not been reached' }
    ],
    read: ['A new group seeking full equality', 'A group celebrating that it won everything', 'A group refusing to include men'],
    plain: ['What does NOW say is missing?', 'Had it achieved all its goals?', 'Did men refuse to support it?'],
    meaning: 'A group calling for a "new movement toward true equality" means full equality had not yet been reached.',
    trapIdx: 2,
    trap: 'C is the opposite: the statement opens, "We, men and women." Check the source’s own words.'
  };

  /* ============ BATCH 5: every remaining bank question (2026-10-31) ============ */
  /* ============ UNIT 1 ============ */
  W['u1_1.1_1'] = {
    type: 'causation',
    hq: 'EXCEPT',
    hs: ['an increase in China’s productive power and the consequent accumulation of wealth'],
    src: [
      { tag: 'WHO', since: 'Miyazaki is a modern historian of the exams', therefore: 'he is explaining causes, looking back' },
      { tag: 'WHAT', since: 'he says wealth came from "productive power"', therefore: 'look for what China itself produced' }
    ],
    read: ['A historian tying Song exams to new wealth', 'A Song official complaining about the exams', 'A merchant describing his Indian Ocean voyages'],
    plain: ['Which one did NOT build Song wealth?', 'Which one ended the exam system?', 'Which one made the Song much poorer over time?'],
    meaning: 'EXCEPT flips the question: three choices really did build Song wealth at home. Find the one that did not drive it.',
    trapIdx: 3,
    trap: 'D sounds unlike wealth, but Song inventions (better iron smelting, printing, the compass) fed production. Song growth came from farming, crafts and technology at home, not from Indian Ocean trade.'
  };

  W['u1_1.1_11'] = {
    type: 'context',
    hq: 'changes to Chinese policies regarding trade occurred under the Ming',
    look: 'Ibn Battuta, writing under the Mongol Yuan, finds a Muslim town in every province and Jews, Christians and Turks living in their own walled district of Hangzhou.',
    src: [
      { tag: 'WHEN', since: 'Ibn Battuta wrote in the 1330s and 1340s', therefore: 'China was still under the Mongol Yuan, before the Ming took over in 1368' },
      { tag: 'WHAT', since: 'foreign merchants already live in set districts', therefore: 'the Ming change will be about controlling foreigners even more' }
    ],
    read: ['A traveler describing foreigners in Yuan China', 'A Ming emperor banning all foreign religions in China', 'A Chinese merchant planning his own voyage abroad'],
    plain: ['How did the Ming handle foreign trade?', 'Did the Ming drop Confucian ideas for merchants?', 'Did the Ming invent state salt and iron monopolies?'],
    meaning: 'The source shows an open Yuan China full of foreign merchants. The Ming tightened that, limiting private trade and keeping foreigners to a few official ports.',
    trapIdx: 2,
    trap: 'C sounds like the Zheng He voyages, but those were state tribute missions, and the Ming then banned private overseas trade (haijin). The Ming did not send merchants abroad on their behalf.'
  };

  W['u1_1.4_3'] = {
    type: 'similar',
    hq: 'were similar in that both',
    look: 'No source here. The stem asks for one thing true of both the Inca and the Aztec.',
    src: [
      { tag: 'WHAT', since: 'it compares two American empires', therefore: 'the answer must be true of both, not just one' },
      { tag: 'WHEN', since: 'both rose in the 1400s', therefore: 'think of how they grew so fast in one century' }
    ],
    read: ['A comparison of how two empires were built', 'A question about the Mayan city-states of Yucatán', 'A question about Spanish colonies after the conquest'],
    plain: ['How did both empires get so big?', 'Which empire came from the Maya?', 'Which empire used iron weapons?'],
    meaning: 'Both the Aztec and the Inca grew in the 1400s by conquering their neighbors and collecting tribute or labor from them.',
    trapIdx: 3,
    trap: 'D sounds right because neither had a full alphabet, but the Inca kept records on quipus and the Aztec used pictographic writing. "Entirely" is the word that sinks it.'
  };

  W['u1_1.4_6'] = {
    type: 'bestillustrates',
    hq: 'governmental structure of the Inca',
    look: 'Village rulers bring quipus to Cuzco listing births, deaths, widows, taxpayers and "how many men they could count on in the event of war."',
    src: [
      { tag: 'WHO', since: 'Cieza de León is a Spanish chronicler in 1540', therefore: 'he is reporting how the Inca system worked' },
      { tag: 'WHAT', since: 'local rulers report to governors in the capital', therefore: 'it shows layers of officials keeping records' }
    ],
    read: ['A Spaniard describing Inca record keeping', 'An Inca ruler writing down his own new law code', 'A Catholic priest describing the temples of Cuzco'],
    plain: ['What does the passage show about Inca rule?', 'How many people died in the empire each year?', 'Which crime was most common among the Inca?'],
    meaning: 'Villages report counts up to governors in Cuzco: that is a layered bureaucracy collecting information.',
    trapIdx: 0,
    trap: 'A grabs the births and deaths, but those counts are the tool, not the point. A historian of government cares that officials collected them for the capital.'
  };

  W['u1_1.4_7'] = {
    type: 'bestillustrates',
    hq: 'refers to which of the following technologies',
    look: 'The quipus "told how many births there had been during the year, and how many deaths."',
    src: [
      { tag: 'WHAT', since: 'rulers bring quipus that tell counts', therefore: 'the quipu stores numbers' },
      { tag: 'WHO', since: 'village rulers carry them to Cuzco', therefore: 'it is a record for the government' }
    ],
    read: ['A Spaniard naming an Inca counting tool', 'A doctor describing a medicine used by the Inca', 'A priest describing a holy object kept in temples'],
    plain: ['What did a quipu do?', 'Was it used to deliver babies?', 'Was it a gift to the ruler?'],
    meaning: 'A quipu is a set of knotted cords: the knots stood for numbers.',
    trapIdx: 3,
    trap: 'D is close but too narrow: quipus counted births, deaths, widows and soldiers, not "primarily" taxes, and they were cords, not a new kind of math.'
  };

  W['u1_1.4_8'] = {
    type: 'causation',
    hq: 'environmental constraints',
    look: 'The passage is about Inca record keeping. The stem asks you to bring in what you know about farming in the Andes.',
    src: [
      { tag: 'WHERE', since: 'Cuzco sits high in the Andes', therefore: 'think about farming on steep slopes' },
      { tag: 'WHAT', since: 'the question asks about the land', therefore: 'the answer is geography, not technology' }
    ],
    read: ['A Spaniard describing Inca records', 'A farmer describing a dry coastal desert', 'A trader describing the fertile river valleys'],
    plain: ['What made Andean farming so hard?', 'Did the Inca lack a steady water supply?', 'Did the Inca lack any animals to carry loads?'],
    meaning: 'Farming in the Andes meant building and working terraces on steep mountains, which took the labor of whole families.',
    trapIdx: 0,
    trap: 'A is a fact about the Americas in general, but the Inca had llamas to carry loads. The mountains are what made the work so heavy.'
  };

  W['u1_1.4_9'] = {
    type: 'bestillustrates',
    hq: 'reference to military preparedness',
    look: 'The quipus told the Inca "how many men they could count on in the event of war."',
    src: [
      { tag: 'WHAT', since: 'the state counts its possible soldiers', therefore: 'war was a planned, regular part of Inca rule' },
      { tag: 'WHEN', since: 'the Inca grew fast in the 1400s', therefore: 'connect the soldiers to conquest' }
    ],
    read: ['A Spaniard noting the Inca counted soldiers', 'A soldier describing a battle fought with gunpowder', 'A priest describing the gods the Inca worshiped'],
    plain: ['Why did the Inca track their soldiers?', 'Did the Inca use gunpowder weapons in their wars?', 'Were the Inca often invaded by their neighbors?'],
    meaning: 'The Inca kept count of fighting men because they built their empire by conquest along the Andes.',
    trapIdx: 1,
    trap: 'B reads preparedness as fear of attack, but the Inca were the ones expanding. They counted soldiers to conquer, not because they were weak.'
  };

  W['u1_1.5_4'] = {
    type: 'bestillustrates',
    hq: 'best illustrates which of the following about Mali',
    hs: ['the price of gold fell and did not recover for many years'],
    src: [
      { tag: 'WHO', since: 'it is an account of Mansa Musa’s hajj', therefore: 'a Muslim king of Mali traveling to Mecca' },
      { tag: 'WHAT', since: 'his gifts crashed the price of gold in Cairo', therefore: 'Mali had huge amounts of gold' }
    ],
    read: ['A report of a Mali king’s rich pilgrimage', 'A Cairo ruler begging the king of Mali for help', 'A Cairo trader complaining about Mali’s high taxes'],
    plain: ['Where did Mali’s gold come from?', 'Was Mali poor and cut off from world trade?', 'Did Mali reject Islam and its pilgrimages?'],
    meaning: 'A king who could crash gold prices on a pilgrimage ruled a very rich state: Mali taxed the trans-Saharan gold and salt trade.',
    trapIdx: 3,
    trap: 'D names a real trade system, but it is the wrong one. Mali’s trade crossed the Sahara by camel, not the Indian Ocean by monsoon.'
  };

  W['u1_1.6_1'] = {
    type: 'similar',
    hq: 'were most like',
    look: 'No source here. Match the role samurai played in Japan to a role in Europe.',
    src: [
      { tag: 'WHAT', since: 'samurai were warriors who served a lord', therefore: 'look for European warriors who served a lord' },
      { tag: 'HOW', since: 'both followed a code (bushido, chivalry)', therefore: 'the match is the role, not the rank' }
    ],
    read: ['A comparison of two warrior classes', 'A question about the leaders of the church', 'A question about peasant farmers on manors'],
    plain: ['Who fought for a lord in Europe?', 'Who owned and ruled the manor in Europe?', 'Who farmed the land of the manor in Europe?'],
    meaning: 'Samurai were mounted warriors bound to a lord and a code of honor, just like European knights.',
    trapIdx: 0,
    trap: 'A is tempting because samurai were elite, but the lord of the manor matches the daimyo, the lord they served.'
  };

  W['u1_1.6_2'] = {
    type: 'similar',
    hq: 'in both feudal Japan and medieval Europe usually included',
    look: 'No source here. Find a job that aristocratic women did in both places.',
    src: [
      { tag: 'WHO', since: 'both are elite women in warrior societies', therefore: 'men were often away fighting' },
      { tag: 'WHAT', since: 'women had little formal power', therefore: 'look for a job inside the household' }
    ],
    read: ['A comparison of noblewomen’s roles', 'A question about women serving as priests', 'A question about women serving as judges'],
    plain: ['What did noblewomen run at home?', 'Did they lead religious rites?', 'Did they speak for families in court?'],
    meaning: 'In both societies noblewomen ran the household, its supplies and money, especially while the men were away at war.',
    trapIdx: 2,
    trap: 'C gives women a public legal role they rarely had in either place. Their power was real but stayed inside the estate.'
  };

  W['u1_1.6_3'] = {
    type: 'similar',
    hq: 'accurate comparison of the political systems',
    look: 'No source here. Compare how Europe and Song China were governed between 1000 and 1300.',
    src: [
      { tag: 'WHERE', since: 'western Europe was split among many kings and lords', therefore: 'Europe was divided' },
      { tag: 'WHERE', since: 'Song China had one emperor and a bureaucracy', therefore: 'China was unified' }
    ],
    read: ['A comparison of Europe and China’s governments', 'A question about overseas empires in Asia and Africa', 'A question about the start of early democracy'],
    plain: ['Was each place unified or divided?', 'Did both build overseas empires by sea?', 'Did both become representative democracies?'],
    meaning: 'Europe was many competing feudal kingdoms; China was one empire run by exam-chosen officials.',
    trapIdx: 3,
    trap: 'D sounds like progress, but neither became a representative democracy in 1000 to 1300. That came centuries later.'
  };

  /* ============ UNIT 2 ============ */
  W['u2_2.1_1'] = {
    type: 'causation',
    hq: 'helps explain the rise of urban centers and the increase in trade',
    look: 'No source here. The date, the second half of the 1200s, is the clue: that is when the Mongols ruled most of Eurasia.',
    src: [
      { tag: 'WHEN', since: 'it is the late 1200s', therefore: 'the Mongol Empire is at its height' },
      { tag: 'WHAT', since: 'cities and trade both grew', therefore: 'look for something that made trade easier' }
    ],
    read: ['A question about why trade grew after 1250', 'A question about why Mongol cities were abandoned', 'A question about the Ming voyages of the 1400s'],
    plain: ['What made land trade safer then?', 'Did the Mongol khanates collapse in this period?', 'Did Chinese fleets reopen the Indian Ocean?'],
    meaning: 'Under Mongol rule (the Pax Mongolica) the land routes were safe and reliable, so caravans and the cities along them grew.',
    trapIdx: 2,
    trap: 'C is a real event, but the Zheng He voyages came in the 1400s, and Indian Ocean trade had never closed. Check the date in the stem.'
  };

  W['u2_2.1_2'] = {
    type: 'causation',
    hq: 'tended to encourage trade along the Silk Roads primarily by',
    look: 'No source here. Think about what changed for a caravan once one empire ruled the whole route.',
    src: [
      { tag: 'WHAT', since: 'one empire now held most of the Silk Roads', therefore: 'fewer borders and fewer tolls' },
      { tag: 'HOW', since: 'Mongol soldiers patrolled the roads', therefore: 'bandits were less of a danger' }
    ],
    read: ['A question about how the Mongols helped trade', 'A question about how the Mongols ended trade', 'A question about Mongol armies buying weapons'],
    plain: ['Why was a caravan trip safer and cheaper?', 'Did Mongol armies buy most of the goods?', 'Did the Mongols block trade by sea on purpose?'],
    meaning: 'One ruler meant fewer local rulers taking tolls, and Mongol patrols meant fewer bandits. Safer and cheaper trips meant more trade.',
    trapIdx: 0,
    trap: 'A sounds like more trade, but Central Asia was a route, not a big new market. The Mongols helped by making the trip safe, not by being the buyers.'
  };

  W['u2_2.2_0'] = {
    type: 'bestillustrates',
    hq: 'shows which of the following empires at its greatest extent',
    hs: ['stretching from Korea and China in the east across Central Asia to Persia and the edge of eastern Europe'],
    src: [
      { tag: 'WHEN', since: 'it is the thirteenth century', therefore: 'only empires of the 1200s count' },
      { tag: 'WHERE', since: 'it runs from China to eastern Europe', therefore: 'one empire held all of that land' }
    ],
    read: ['A map of a huge 1200s land empire', 'A map of an ancient Greek empire in Asia', 'A map of the modern Russian state in 1900'],
    plain: ['Which empire held China and Persia?', 'Which empire did Alexander build in 330 BCE?', 'Which empire ruled from Constantinople?'],
    meaning: 'Only one empire held China, Central Asia, Persia and the edge of Europe in the 1200s: the Mongols.',
    trapIdx: 2,
    trap: 'C covers a lot of the same land, but the Russian Empire grew from the 1500s on and never ruled China or Persia.'
  };

  W['u2_2.2_1'] = {
    type: 'causation',
    hq: 'resulted from the fragmentation of the Mongol Empire',
    look: 'No source here. Ask what happened to Genghis Khan’s lands once his heirs split them.',
    src: [
      { tag: 'WHAT', since: 'the empire was split among his heirs', therefore: 'the pieces became separate states' },
      { tag: 'WHERE', since: 'the pieces were in China, Persia, Russia and Central Asia', therefore: 'look for a Mongol state in one of those regions' }
    ],
    read: ['A question about how the Mongol Empire split', 'A question about the fall of the Byzantine Empire', 'A question about Islam reaching East Asia'],
    plain: ['What did the empire break into?', 'Did the split bring down Constantinople?', 'Did the split end Africa and Asia trade?'],
    meaning: 'The heirs divided the empire into khanates: the Yuan, the Chagatai, the Ilkhanate and the Golden Horde.',
    trapIdx: 0,
    trap: 'A is a real collapse, but the Ottomans took Constantinople in 1453. The Mongols never conquered it.'
  };

  W['u2_2.2_2'] = {
    type: 'bestillustrates',
    hq: 'is true',
    look: 'No source here. Test each choice against what you know about the Mongols.',
    src: [
      { tag: 'WHAT', since: 'the Mongols were mostly tolerant of religions', therefore: 'cross out any choice about persecution' },
      { tag: 'WHERE', since: 'the Mongols were horsemen, not sailors', therefore: 'their attacks by sea went badly' }
    ],
    read: ['A true or false test on the Mongols', 'A question about Mongol religious beliefs only', 'A question about the Ottoman conquests'],
    plain: ['Which Mongol fact is true?', 'Did Buddhists and Muslims decline under them?', 'Did the Mongols take Constantinople?'],
    meaning: 'The Mongols tried to invade Japan twice, in 1274 and 1281, and typhoons wrecked both fleets.',
    trapIdx: 2,
    trap: 'C is half right: the Yuan pushed scholar-officials aside. But "permanently" is wrong. The Ming brought back the exams and the scholar-gentry.'
  };

  W['u2_2.2_3'] = {
    type: 'bestillustrates',
    hq: 'accurate statement about the Mongol Empire',
    look: 'No source here. Remember the Pax Mongolica: what the Mongols did for trade.',
    src: [
      { tag: 'WHAT', since: 'the Mongols taxed trade', therefore: 'they wanted merchants to keep moving' },
      { tag: 'HOW', since: 'they tolerated many faiths', therefore: 'cross out choices about forcing beliefs' }
    ],
    read: ['A question testing facts about the Mongols', 'A question about Mongol religious laws and temples', 'A question about Mongol rules for choosing a khan'],
    plain: ['What did the Mongols do for the Silk Road?', 'Did they force their religion on everyone?', 'Did they have clear rules for succession?'],
    meaning: 'The Mongols reopened and protected the Silk Road, linking East Asia and Europe again.',
    trapIdx: 3,
    trap: 'D is the opposite. The Mongols had no fixed succession rule, and fights between heirs split the empire.'
  };

  W['u2_2.2_4'] = {
    type: 'causation',
    hq: 'fail to conquer, and why',
    look: 'No source here. Two parts must both be right: the place and the reason.',
    src: [
      { tag: 'WHAT', since: 'the Mongols took Russia and Baghdad', therefore: 'those choices fail on the place' },
      { tag: 'WHERE', since: 'Japan is an island', therefore: 'they had to attack by sea' }
    ],
    read: ['A question about where the Mongols lost', 'A question about Mongol trade with Japan', 'A question about Timur’s conquests in India'],
    plain: ['Where did the Mongols fail, and why?', 'Did Russian winters stop the Mongols?', 'Did floods save the Abbasid caliph?'],
    meaning: 'Both Mongol fleets sent to Japan were wrecked by typhoons, the "divine winds."',
    trapIdx: 0,
    trap: 'A borrows the story of Napoleon and Hitler. The Mongols actually attacked Russia in winter, using frozen rivers as roads, and won.'
  };

  W['u2_2.2_19'] = {
    type: 'bestillustrates',
    hq: 'long-term threat to Islamic culture',
    look: 'Ibn al-Athir describes a people from China "destroying, and slaying, and plundering" from Bukhara to Iraq, "all this in less than a year."',
    src: [
      { tag: 'WHO', since: 'a Muslim historian writing around 1230', therefore: 'he is living through the Mongol attack and is horrified' },
      { tag: 'WHAT', since: 'the stem asks about a long-term threat', therefore: 'you need evidence over centuries, not one year' }
    ],
    read: ['A Muslim historian describing the Mongol attack', 'A Mongol general bragging about his own victory', 'A Chinese official describing a trade mission'],
    plain: ['What would show if Islam shrank over time?', 'How did Islamic armies fight off attacks?', 'How did Islamic empires run their provinces?'],
    meaning: 'To test a long-term threat, you need numbers over centuries. Counting Muslims from the 1200s on shows that Islam kept growing; many Mongols even converted.',
    trapIdx: 1,
    trap: 'B fits the battles in the passage, but military tactics show only the short run. "Long-term" asks what happened over centuries.'
  };

  W['u2_2.2_20'] = {
    type: 'bestillustrates',
    hq: 'best seen as evidence for which of the following in Yuan China',
    look: 'Muslims have towns, mosques and colleges "made much of by the Kings of China," and Jews, Christians and Turks live in Hangzhou.',
    src: [
      { tag: 'WHO', since: 'Ibn Battuta is a Muslim traveler from Morocco', therefore: 'he notices how Muslims are treated' },
      { tag: 'WHAT', since: 'many faiths live openly in one city', therefore: 'the rulers allowed many religions' }
    ],
    read: ['A Muslim visitor describing faiths in China', 'A Chinese monk attacking all of the foreign religions', 'A Mongol khan ordering all his subjects to convert'],
    plain: ['How did the Yuan treat other religions?', 'Did foreigners govern all the provinces?', 'Did the Mongols become fully Chinese?'],
    meaning: 'Muslims, Jews and Christians all worship openly and the kings honor the Muslims: the Yuan tolerated many religions.',
    trapIdx: 1,
    trap: 'B is a real Yuan habit (foreigners did serve as officials), but the passage shows religious communities, not who ran the provinces.'
  };

  W['u2_2.2_21'] = {
    type: 'bestillustrates',
    hq: 'most directly supported by the passage',
    look: 'A traveler from Morocco finds Muslim merchants and a Muslim town in every province of China, under a "Tartar" king descended from Genghis Khan.',
    src: [
      { tag: 'WHO', since: 'the writer comes from North Africa', therefore: 'he crossed all of Eurasia to get to China' },
      { tag: 'WHAT', since: 'the king of China descends from Genghis Khan', therefore: 'steppe nomads rule the route he traveled' }
    ],
    read: ['A Moroccan meeting Muslims in China', 'A Chinese traveler visiting Muslim Morocco', 'A merchant saying all the trade has stopped'],
    plain: ['What made the long trip possible?', 'Did contact between civilizations stall?', 'Did new faiths wipe out all older ones?'],
    meaning: 'A Moroccan could reach China and find Muslim merchants there because the Mongols, steppe nomads, linked trade across Eurasia.',
    trapIdx: 3,
    trap: 'D is true of the period, but the passage shows people and religions moving, not any technology. Stick to what the source supports.'
  };

  W['u2_2.2_22'] = {
    type: 'similar',
    hq: 'differed in that it',
    look: 'In China the Mongol king rules directly, with towns, guards and officials in every province. Compare that with how the Golden Horde ruled Russia.',
    src: [
      { tag: 'WHERE', since: 'in China the Yuan ran the government', therefore: 'Mongol rule there was direct' },
      { tag: 'WHERE', since: 'in Russia the Golden Horde used Russian princes', therefore: 'Mongol rule there was indirect' }
    ],
    read: ['A comparison of Mongol rule in two places', 'A question about trade from Russia to China', 'A question about Russian revolts in 1300'],
    plain: ['How did ruling Russia differ from China?', 'Was Mongol Russia loved by its subjects?', 'Did Mongol Russia allow only Orthodoxy?'],
    meaning: 'The Golden Horde let Russian princes rule and just collected tribute. The Yuan ran China directly through a Chinese-style bureaucracy.',
    trapIdx: 0,
    trap: 'A gets Russia wrong. The Golden Horde tolerated religions too (and later became Muslim); its key difference was ruling through tribute.'
  };

  W['u2_2.3_1'] = {
    type: 'bestillustrates',
    hq: 'best describes Middle Eastern trade',
    look: 'No source here. Picture where the Middle East sits on the map: between the Silk Roads, the Indian Ocean and the Sahara.',
    src: [
      { tag: 'WHERE', since: 'the region sits where three trade networks meet', therefore: 'it traded in every direction' },
      { tag: 'WHEN', since: 'it is 1000 to 1450', therefore: 'the Ottomans are only just starting' }
    ],
    read: ['A question about Middle East trade partners', 'A question about one united Islamic empire in 1200', 'A question about long Ottoman wars against India'],
    plain: ['Who did the Middle East trade with?', 'Did one empire end all of its tariffs?', 'Did it stop trading with Europe?'],
    meaning: 'The Middle East was the crossroads: it traded with China, India and sub-Saharan Africa by land and sea.',
    trapIdx: 0,
    trap: 'A sounds like the early caliphate, but after 1000 the Islamic world was split among many states. No single empire held it.'
  };

  W['u2_2.3_5'] = {
    type: 'causation',
    hq: 'significant effect of the Indian Ocean trade',
    look: 'On the east side of the map, dotted dhow routes link Mombasa, Zanzibar, Kilwa and Sofala across the Indian Ocean.',
    src: [
      { tag: 'WHERE', since: 'the dhow routes run along the East African coast', therefore: 'look at the Swahili city-states' },
      { tag: 'WHO', since: 'Arab and Persian sailors traded with Bantu speakers', therefore: 'the two cultures mixed' }
    ],
    read: ['A map of African trade by land and sea', 'A map of European voyages around Africa', 'A map of Christian missions across Africa'],
    plain: ['What did contact on the coast create?', 'Did many Africans move to South Asia?', 'Did the East African coast turn Christian?'],
    meaning: 'Bantu speakers mixed with Arab and Persian traders, creating the Swahili language and a Muslim coastal culture.',
    trapIdx: 3,
    trap: 'D runs the gold the wrong way. Gold went out of East Africa from Great Zimbabwe through Sofala; it was not brought in from Arabia.'
  };

  W['u2_2.3_6'] = {
    type: 'causation',
    hq: 'broader processes from 600 to 1450',
    look: 'The legend lists a Muslim mosque, a Calvinist chapel and a Buddhist stupa inside Dutch Batavia on Java.',
    src: [
      { tag: 'WHERE', since: 'Batavia is a port on Java', therefore: 'it sits on the Indian Ocean trade routes' },
      { tag: 'WHAT', since: 'the stem asks about 600 to 1450', therefore: 'the mosque and stupa came long before the Dutch' }
    ],
    read: ['A Dutch city plan with many faiths','A map of a Mongol camp on the island of Java', 'A map of a Crusader castle in the Holy Land'],
    plain: ['How did Buddhism and Islam reach Java?', 'Did the Mongols conquer Java?', 'Did the Crusades bring Christians there?'],
    meaning: 'Merchants carried Buddhism and then Islam along the Indian Ocean routes to Java. The Dutch only added the chapel.',
    trapIdx: 3,
    trap: 'D sounds possible because the Mongols did attack Java, but the 1293 invasion failed. Trade, not conquest, brought these religions.'
  };

  W['u2_2.4_2'] = {
    type: 'causation',
    hq: 'led most directly to the development of the trading network',
    hs: ['a network of caravan routes crossing the Sahara Desert'],
    src: [
      { tag: 'WHERE', since: 'the routes cross the Sahara', therefore: 'merchants needed ways to survive the desert' },
      { tag: 'WHAT', since: 'they link gold fields to the Mediterranean', therefore: 'the goods were worth the dangerous trip' }
    ],
    read: ['A map of caravan routes across the Sahara', 'A map of slave ships crossing the Atlantic', 'A map of Swahili ports on the Indian Ocean'],
    plain: ['What made crossing the desert possible?', 'Did the Swahili coast cities cause it?', 'Did the Silk Roads decline at this time?'],
    meaning: 'Camel saddles, caravans and caravanserai and oasis stops let merchants cross the Sahara reliably.',
    trapIdx: 1,
    trap: 'B is in West Africa but in the wrong century. The Atlantic slave trade began in the 1500s, long after these caravan routes.'
  };

  W['u2_2.4_3'] = {
    type: 'bestillustrates',
    hq: 'best exemplifies which of the following historical processes',
    hs: ['a large mud-brick mosque in the West African country of Mali'],
    src: [
      { tag: 'WHERE', since: 'Djenné was a trading city in Mali', therefore: 'Muslim merchants passed through it' },
      { tag: 'HOW', since: 'it is built of local mud brick', therefore: 'Islam was adopted in a West African style' }
    ],
    read: ['A photo of a West African-style mosque', 'A photo of a mosque built by Arab armies', 'A photo of a European colonial church'],
    plain: ['How did Islam come to West Africa?', 'Did an army force Islam on West Africa?', 'Did colonizers wipe out local styles?'],
    meaning: 'Islam came to West Africa with traders crossing the Sahara, and local people built mosques in their own style.',
    trapIdx: 1,
    trap: 'B fits the early Arab conquests in North Africa, but Islam reached Mali through merchants and teachers, not armies.'
  };

  W['u2_2.4_4'] = {
    type: 'bestillustrates',
    hq: 'best illustrates which of the following about Mali',
    hs: ['the price of gold fell and did not recover for many years'],
    src: [
      { tag: 'WHO', since: 'it describes Mansa Musa on hajj', therefore: 'a Muslim king of Mali on his way to Mecca' },
      { tag: 'WHAT', since: 'his gifts crashed the gold price in Cairo', therefore: 'Mali had an enormous supply of gold' }
    ],
    read: ['A report of a Mali king’s rich pilgrimage', 'A Cairo ruler begging the king of Mali for help', 'A Cairo trader complaining about Mali’s taxes'],
    plain: ['Where did Mali’s wealth come from?', 'Was Mali poor and cut off from world trade?', 'Did Mali reject Islam and its pilgrimages?'],
    meaning: 'A king who could crash gold prices on a pilgrimage ruled a rich state: Mali taxed the trans-Saharan gold and salt trade.',
    trapIdx: 3,
    trap: 'D names the wrong trade system. Mali’s trade crossed the Sahara by camel, not the Indian Ocean by monsoon.'
  };

  W['u2_2.4_5'] = {
    type: 'bestillustrates',
    hq: 'primary groups traversing the Sahara Desert',
    look: 'Solid caravan routes run from Fez, Tunis, Tripoli and Cairo across the Sahara to Timbuktu, Gao and Djenné.',
    src: [
      { tag: 'WHERE', since: 'the routes start in North African cities', therefore: 'the traders came from the Muslim north' },
      { tag: 'WHEN', since: 'the map shows about 1400', therefore: 'Europeans had not yet sailed down the coast' }
    ],
    read: ['A map of caravans crossing the Sahara', 'A map of European forts on the Gold Coast', 'A map of Mongol routes into Africa'],
    plain: ['Who led caravans across the Sahara?', 'Did Europeans cross the desert to trade?', 'Did Chinese traders cross it by camel?'],
    meaning: 'Muslim Berber and Arab merchants from North Africa ran the camel caravans to West Africa.',
    trapIdx: 1,
    trap: 'B is tempting because of El Mina on the map, but Europeans reached West Africa by sea in the late 1400s. They did not cross the Sahara.'
  };

  W['u2_2.4_6'] = {
    type: 'causation',
    hq: 'main reason that there were no significant trade routes in the central portion',
    look: 'The middle of the map, around the Congo River and Luba, has almost no routes, while the Sahara and the coasts are full of them.',
    src: [
      { tag: 'WHERE', since: 'the empty area is the Congo rainforest', therefore: 'think about the land itself' },
      { tag: 'HOW', since: 'tsetse flies killed pack animals there', therefore: 'caravans could not get through' }
    ],
    read: ['A map showing where trade routes went', 'A map of the languages spoken in Africa', 'A map of the mineral resources of Africa'],
    plain: ['Why did routes avoid central Africa?', 'Did central Africa have no resources?', 'Did hostile tribes keep outsiders away?'],
    meaning: 'Rainforest, river rapids and the tsetse fly made it nearly impossible to move goods through central Africa.',
    trapIdx: 1,
    trap: 'B is false: central Africa had copper and ivory. The land made travel hard, not a lack of goods.'
  };

  W['u2_2.5_1'] = {
    type: 'bestillustrates',
    hq: 'effects of the Crusades on the diffusion of technology',
    look: 'No source here. Pick the source that would show knowledge moving from the Islamic world to Europe.',
    src: [
      { tag: 'WHAT', since: 'the topic is technology spreading', therefore: 'the source must be about learning, not religion or marriages' },
      { tag: 'WHO', since: 'monks translated Arabic books into Latin', therefore: 'their work shows the knowledge crossing over' }
    ],
    read: ['A question about the best source to use', 'A question about crusader battle tactics', 'A question about who won the Crusades'],
    plain: ['Which source shows ideas moving to Europe?', 'Which source shows Islamic worship practices?', 'Which source shows royal marriages?'],
    meaning: 'Translations of Arabic math and science texts show exactly how Islamic knowledge spread into Europe.',
    trapIdx: 0,
    trap: 'A is a crusader source, so it feels right, but it is about religion. The question is about technology spreading.'
  };

  W['u2_2.5_2'] = {
    type: 'bestillustrates',
    hq: 'would most likely cite which of the following as evidence',
    look: 'No source here. The claim is that the world was tied together by 1300. Pick evidence from before 1300.',
    src: [
      { tag: 'WHEN', since: 'the end of the 1200s', therefore: 'cross out anything from the Atlantic era or later' },
      { tag: 'WHAT', since: 'integration means connection', therefore: 'look for trade networks growing' }
    ],
    read: ['Evidence for world links by 1300','A question about the Atlantic slave trade', 'A question about modern global capitalism'],
    plain: ['What tied Afro-Eurasia together by 1300?', 'Did one ruler unite the Mediterranean and China?', 'Did Atlantic plantations exist yet?'],
    meaning: 'After the Mongol conquests, the Silk Roads, the Indian Ocean and the Saharan routes carried more goods, people and ideas than ever.',
    trapIdx: 3,
    trap: 'D is real global integration, but it is from after 1500. Check the date before you pick.'
  };

  /* ============ UNIT 3 ============ */
  W['u3_3.1_0'] = {
    type: 'bestillustrates',
    hq: 'Taken together, the two images best support',
    hs: ['soldiers with cannons storming a fortified city', 'elephants, cavalry, and artillery besieging a great fortress'],
    src: [
      { tag: 'WHAT', since: 'both images show an army attacking a fortress', therefore: 'look for what the two attacks share' },
      { tag: 'HOW', since: 'both armies bring cannons and artillery', therefore: 'the common thread is gunpowder' }
    ],
    read: ['Two empires using cannons on forts', 'Two empires signing a peace treaty together', 'Two European armies defending their cities'],
    plain: ['What helped both empires grow?', 'Did Europe have weaker weapons than Asia?', 'Did rulers always lead armies themselves?'],
    meaning: 'Both the Ottomans and the Mughals took fortresses with cannons. Gunpowder helped land empires expand.',
    trapIdx: 1,
    trap: 'B fits Image 2, where Aurangzeb leads, but Image 1 shows no ruler. "Taken together" means the answer must fit both images.'
  };

  W['u3_3.1_1'] = {
    type: 'similar',
    hq: 'most similar to those of the Ottoman and Mughal Empires',
    hs: ['Ottoman soldiers reconquering a fortress', 'Mughal forces led by Emperor Aurangzeb'],
    src: [
      { tag: 'HOW', since: 'the Ottomans and Mughals grew over land with cavalry and guns', therefore: 'look for another land empire' },
      { tag: 'WHO', since: 'both came from Central Asian horse warriors', therefore: 'a group from the steppe frontier fits best' }
    ],
    read: ['Two land empires taking forts with guns', 'Two sea empires building overseas trading posts', 'Two European armies fighting in America'],
    plain: ['Which other empire grew over land?', 'Which empire grew by sea in Brazil?', 'Which empire built trading posts in Asia?'],
    meaning: 'Match the method: the Manchus also came from the frontier and built a huge land empire with cavalry and guns.',
    trapIdx: 2,
    trap: 'C is a gunpowder empire too, but Spain grew by sailing overseas. The Ottomans and Mughals grew over land, like the Manchu Qing.'
  };

  W['u3_3.1_8'] = {
    type: 'causation',
    hq: 'contributed most to the emergence of Russia',
    look: 'No source here. Think about what Russia borrowed: the faith and title of tsar from Byzantium, and armies and ships from western Europe.',
    src: [
      { tag: 'WHEN', since: 'it is 1450 to 1750', therefore: 'think of Ivan III and Peter the Great' },
      { tag: 'HOW', since: 'Peter copied western Europe on purpose', therefore: 'Russia grew by borrowing' }
    ],
    read: ['A question about why Russia grew', 'A question about Russia losing land in Asia', 'A question about Russian revolutions after 1900'],
    plain: ['What did Russia borrow to grow strong?', 'Did Russia wipe out Islam in Central Asia?', 'Did Poland and Prussia collapse first?'],
    meaning: 'Russia took Orthodoxy and the idea of the tsar from Byzantium and armies and technology from western Europe.',
    trapIdx: 1,
    trap: 'B sounds like real wars with the Ottomans, but Russia mostly fought the Turks on its own. Its rise came from what it borrowed.'
  };

  W['u3_3.1_10'] = {
    type: 'causation',
    hq: 'was able to successfully invade Esztergom due to',
    hs: ['against the Holy Roman Empire'],
    src: [
      { tag: 'WHEN', since: 'the siege was in 1543', therefore: 'this is during the Protestant Reformation' },
      { tag: 'WHO', since: 'the enemy was the Holy Roman Empire', therefore: 'ask what was weakening that empire' }
    ],
    read: ['An Ottoman siege in Hungary', 'A painting of a Venetian fleet at sea', 'A painting of a Habsburg victory parade'],
    plain: ['What weakened the defenders in 1543?', 'Was the city easy to attack from the sea?', 'Did local Muslims welcome the Turks?'],
    meaning: 'In 1543 the Holy Roman Empire was split by the Reformation, so it could not fully defend Hungary.',
    trapIdx: 2,
    trap: 'C sounds logical, but the Ottomans failed to take Vienna in 1529 and never held Austria.'
  };

  W['u3_3.1_12'] = {
    type: 'context',
    hq: 'important continuity underlying the conflict',
    hs: ['a campaign by Suleiman I'],
    src: [
      { tag: 'WHO', since: 'the Ottomans and Habsburgs were land empires', therefore: 'both wanted more territory' },
      { tag: 'WHAT', since: 'the stem asks for a continuity', therefore: 'look for something that kept happening' }
    ],
    read: ['A painting of a war between two empires', 'A painting of a forced mass conversion', 'A painting of a naval battle over trade'],
    plain: ['What kept these empires fighting?', 'Did the Turks force their religion on others?', 'Was this war over overseas trade?'],
    meaning: 'Land empires kept fighting to expand. Suleiman pushing into Hungary is one example of that pattern.',
    trapIdx: 1,
    trap: 'B assumes a holy war, but the Ottomans did not force conversions on Christian subjects. The goal was territory.'
  };

  W['u3_3.1_13'] = {
    type: 'bestillustrates',
    hq: 'best illustrates which of the following trends',
    look: 'A sixteenth-century Byzantine fresco of the Turks breaking into walled Constantinople, with smoke rising along the walls.',
    src: [
      { tag: 'WHEN', since: 'the siege was in 1453', therefore: 'it marks the Ottoman rise' },
      { tag: 'HOW', since: 'Mehmed II broke the walls with huge cannons', therefore: 'gunpowder made it possible' }
    ],
    read: ['The Turks taking Constantinople', 'A fresco of the Crusaders taking Jerusalem', 'A fresco of a Byzantine victory over Turks'],
    plain: ['What let Islamic empires dominate?', 'Did contact between Islam and Europe stop?', 'Did Islam fail to spread into Europe?'],
    meaning: 'Ottoman cannons broke the walls of Constantinople. Gunpowder let the Islamic empires expand and dominate.',
    trapIdx: 3,
    trap: 'D sounds right for 1453, but Christianity did not decline overall; it spread worldwide in this era. The image is about gunpowder power.'
  };

  W['u3_3.1_16'] = {
    type: 'causation',
    hq: 'drew the ire of Islamic empires',
    look: 'Selim I calls on the "consensus of the Sunni community" to justify the "expulsion of evil innovation," meaning Ismail’s rule.',
    src: [
      { tag: 'WHERE', since: 'Safavid Persia sat between the Ottomans and Mughals', therefore: 'all three wanted the same borderlands' },
      { tag: 'WHO', since: 'the Safavids were Shi’a, not anti-Islam', therefore: 'cross out "rejected Islam"' }
    ],
    read: ['A sultan threatening a rival Muslim ruler', 'A sultan making peace with a Christian king', 'A shah asking the Ottomans for help'],
    plain: ['Why did neighbors oppose them?', 'Did the Safavids reject Islam itself?', 'Did Ismail claim to be the caliph?'],
    meaning: 'The Safavids were squeezed between two expanding empires, and all three fought over the land between them.',
    trapIdx: 1,
    trap: 'B overreads "evil innovation." Selim attacks Shi’a beliefs, but the Safavids were Muslims, not rejecting Islam.'
  };

  W['u3_3.2_2'] = {
    type: 'similar',
    hq: 'most similar to which broader method',
    hs: ['forcibly enlisting boys from the empire’s Christian subjects'],
    src: [
      { tag: 'HOW', since: 'the state takes boys from conquered Christians', therefore: 'it collects people the way a ruler collects tribute' },
      { tag: 'WHO', since: 'the book celebrates Suleiman', therefore: 'it shows the system as a source of strength' }
    ],
    read: ['An image of the Ottomans taking boys', 'An image of Christians freely joining the army', 'An image of a sultan freeing his slaves'],
    plain: ['What else took from the conquered?', 'Did it force one religion on everyone?', 'Did it end the privileges of nobles?'],
    meaning: 'The devshirme took boys from conquered lands for the state, like tribute paid in people instead of goods.',
    trapIdx: 1,
    trap: 'B fits the boys being converted, but the empire did not force Islam on all subjects. Match the method: taking resources from the conquered.'
  };

  W['u3_3.2_6'] = {
    type: 'context',
    hq: 'important continuity from the Ming Dynasty to the Qing dynasty',
    look: 'No source here. The Qing were Manchu outsiders who kept what worked in China.',
    src: [
      { tag: 'WHO', since: 'the Qing were Manchus, not Han Chinese', therefore: 'they needed Chinese elites to accept them' },
      { tag: 'HOW', since: 'they kept the Confucian exams', therefore: 'the scholar-officials kept their place' }
    ],
    read: ['A question about what the Qing kept', 'A question about what the Qing destroyed', 'A question about Qing voyages across the seas'],
    plain: ['What did the Qing keep from the Ming?', 'Did the Ming adopt Manchu traditions?', 'Did the Qing pay for Zheng He-style trips?'],
    meaning: 'The Qing kept the Confucian exams and bureaucracy, which helped them win over Chinese scholars.',
    trapIdx: 3,
    trap: 'D is wrong for both: the Ming stopped the Zheng He voyages in the 1430s, and the Qing never restarted them.'
  };

  W['u3_3.2_8'] = {
    type: 'bestillustrates',
    hq: 'relationship between the Pathans',
    look: 'Bernier says many nations "neither obey him nor pay him tribute but from constraint," some even "receive tribute from him," and the Pathans are "fierce and warlike."',
    src: [
      { tag: 'WHO', since: 'Bernier is a French doctor at the Mughal court', therefore: 'he sees the limits of Mughal power up close' },
      { tag: 'WHAT', since: 'he says the Mogul is not "full master" of many peoples', therefore: 'the emperor must handle some groups carefully' }
    ],
    read: ['A visitor showing limits on Mughal power', 'A Mughal ruler bragging about total control', 'A Pathan leader asking for Mughal help'],
    plain: ['How did the Mughals treat the Pathans?', 'Did the Pathans pay tribute to the Mughals?', 'Did religion keep the two groups apart?'],
    meaning: 'The Pathans were fierce and powerful, so the Mughal emperor avoided fights with them instead of forcing tribute.',
    trapIdx: 3,
    trap: 'D says religion separated them, but Bernier calls the Pathans "a Mohammedan people." Both were Muslim.'
  };

  W['u3_3.2_12'] = {
    type: 'context',
    hq: 'focused primarily on',
    look: 'The 1615 laws tell warrior households to study literature and train in archery and horsemanship: "In time of peace, do not forget the possibility of disturbances."',
    src: [
      { tag: 'WHO', since: 'the shogun is writing rules for the samurai', therefore: 'he wants order and control at home' },
      { tag: 'WHEN', since: 'it is 1615', therefore: 'Christianity and foreign trade are about to be restricted' }
    ],
    read: ['A shogun’s rules for warrior families', 'A merchant’s plan for new factories in Edo', 'An emperor calling for war overseas'],
    plain: ['What was the Tokugawa’s big goal?', 'Did the Tokugawa build factories?', 'Did the Tokugawa conquer neighbors?'],
    meaning: 'The Tokugawa wanted stability. They banned Christianity and limited foreign trade to a few Dutch and Chinese ships at Nagasaki.',
    trapIdx: 2,
    trap: 'C misreads the archery and horsemanship. The edict says war is used "only when it is inevitable." The Tokugawa kept peace and closed Japan.'
  };

  W['u3_3.2_15'] = {
    type: 'purpose',
    hq: 'different from those of the medieval period',
    look: 'Machiavelli says "it is much safer to be feared than loved," because men are "ungrateful, fickle, false."',
    src: [
      { tag: 'WHO', since: 'Machiavelli was a Florentine official', therefore: 'he writes from real politics' },
      { tag: 'WHAT', since: 'he asks what works, not what is good', therefore: 'his ideas are practical, not religious' }
    ],
    read: ['A writer on how a ruler keeps power', 'A priest on how a ruler pleases God', 'A noble on why kings must share power'],
    plain: ['What was new about his advice?', 'Did he say kings could rule?', 'Did he look back to Greece and Rome?'],
    meaning: 'Medieval writers judged rulers by Christian virtue. Machiavelli judged them by results.',
    trapIdx: 0,
    trap: 'A is true of Machiavelli, but medieval writers also accepted royal authority. The question asks what was different.'
  };

  W['u3_3.2_17'] = {
    type: 'bestillustrates',
    hq: 'most likely use this passage',
    look: 'At Buda, Busbecq finds Janissaries "scattered through every part of the empire," garrisoning forts and protecting Christians and Jews.',
    src: [
      { tag: 'WHERE', since: 'he is writing from Buda in Hungary', therefore: 'the Ottomans had conquered it in 1541' },
      { tag: 'WHAT', since: 'troops guard forts and minorities everywhere', therefore: 'it shows how the Ottomans held conquered land' }
    ],
    read: ['A diplomat describing Ottoman troops', 'A Janissary describing his own training', 'A Hungarian noble describing a rebellion'],
    plain: ['What does it show about Ottoman Hungary?', 'Did the Turks attack Christians and Jews?', 'How were Janissaries trained as boys?'],
    meaning: 'The Janissary garrisons show how the Ottomans held Hungary after conquering it.',
    trapIdx: 1,
    trap: 'B is the opposite: the Janissaries protect Christians and Jews from the mob. Read the passage’s own words.'
  };

  W['u3_3.2_18'] = {
    type: 'context',
    hq: 'most accurately defines the “zamindar[s]”',
    look: 'A zamindar "who paid revenue to the Mogul was clearly in a position of dependence," and some chiefs in Rajputana refused or rebelled.',
    src: [
      { tag: 'WHO', since: 'zamindars paid revenue to the Muslim Mughals', therefore: 'they were local landholders under the emperor' },
      { tag: 'WHERE', since: 'they are tied to Rajputana', therefore: 'many were Hindu Rajput chiefs' }
    ],
    read: ['A historian on Mughal tax collectors', 'An emperor describing Muslim generals', 'A traveler describing Buddhist monks'],
    plain: ['Who were the zamindars?', 'Were they Muslim landowners?', 'Were they Buddhist peasants?'],
    meaning: 'Zamindars were mostly Hindu landholding elites who collected taxes and paid revenue to the Mughals.',
    trapIdx: 0,
    trap: 'A is tempting because the Mughals were Muslim, but most zamindars were Hindu. The Mughals ruled through local Hindu elites.'
  };

  W['u3_3.3_10'] = {
    type: 'bestillustrates',
    hq: 'is an example of which of the following',
    hs: ['The building reflects the blending of two distinct architectural traditions'],
    src: [
      { tag: 'WHO', since: 'Akbar built it', therefore: 'he wanted to unite Muslims and Hindus' },
      { tag: 'HOW', since: 'it mixes Persian and Indian styles', therefore: 'two cultures blend in one building' }
    ],
    read: ['A mosque mixing Persian and Indian styles', 'A Hindu temple destroyed by Mughal soldiers', 'A European church built in Mughal India'],
    plain: ['What does the mixed style show?', 'Did capitalism emerge in Mughal India?', 'Did forced labor systems expand?'],
    meaning: 'A mosque that blends Persian Islamic and Indian styles is cultural syncretism.',
    trapIdx: 2,
    trap: 'C is about trade networks, and the mosque shows nothing about trade. The building is about cultures mixing.'
  };

  W['u3_3.3_13'] = {
    type: 'bestillustrates',
    hq: 'the “second wall,”',
    look: 'Luther’s second wall: "no one may interpret the Scriptures but the Pope." He asks, if that were true, "where were the need and use of the Holy Scriptures?"',
    src: [
      { tag: 'WHO', since: 'Luther is a Reformer attacking the papacy', therefore: 'each wall is a papal claim to power' },
      { tag: 'WHAT', since: 'the second wall is about the Scriptures', therefore: 'it is about who reads the Bible' }
    ],
    read: ['A Reformer attacking the pope’s claims', 'A pope defending his right to rule kings', 'A council voting on a new kind of baptism'],
    plain: ['Who gets to interpret the Bible?', 'What is the meaning of the Holy Ghost?', 'What is the right way to baptize?'],
    meaning: 'The second wall is the pope’s claim that only he can interpret Scripture. Luther says every believer can read it.',
    trapIdx: 0,
    trap: 'A grabs the words "Holy Ghost" from the passage, but Luther uses them to mock the pope’s claim. The wall is about Scripture.'
  };

  W['u3_3.3_14'] = {
    type: 'context',
    hq: 'the “temporal power”',
    look: 'The first wall: the Romanists say "the temporal power has no jurisdiction over them" and "the spiritual power is above the temporal."',
    src: [
      { tag: 'WHO', since: 'Luther writes to the German nobility', therefore: 'he is asking princes to act' },
      { tag: 'WHAT', since: 'temporal is set against spiritual', therefore: 'temporal means worldly rulers' }
    ],
    read: ['Luther asking princes to reform the Church', 'Luther asking bishops to punish the princes', 'Luther asking merchants to stop paying'],
    plain: ['What does "temporal" mean here?', 'Does it mean the bishops and priests?', 'Does it mean the lawyers and scholars?'],
    meaning: 'Temporal means worldly. The temporal power is the princes and nobles, the state, as opposed to the Church.',
    trapIdx: 0,
    trap: 'A is the spiritual power, the other side. Luther sets the temporal power against it.'
  };

  W['u3_3.3_15'] = {
    type: 'context',
    hq: 'policy the Turks had towards non-Islamic religious groups',
    look: 'The fresco shows the Turks taking Christian Constantinople. The question asks how they then ruled its Christians and Jews.',
    src: [
      { tag: 'WHAT', since: 'the Ottomans now ruled many Christians', therefore: 'they needed a way to keep them loyal' },
      { tag: 'HOW', since: 'the millet system let faiths run their own affairs', therefore: 'tolerance kept the peace' }
    ],
    read: ['A fresco of the Ottoman conquest of 1453', 'A fresco of Christians retaking their city', 'A fresco of a Byzantine church council'],
    plain: ['How were non-Muslims ruled?', 'Were non-Muslims forced to convert?', 'Were minorities later persecuted?'],
    meaning: 'Under the millet system, Christians and Jews kept their faith and leaders, paid the jizya and stayed loyal.',
    trapIdx: 0,
    trap: 'A fits the conquest scene, but the Ottomans did not force conversion. They taxed non-Muslims instead.'
  };

  W['u3_3.3_16'] = {
    type: 'bestillustrates',
    hq: 'most clearly an example of',
    look: 'Selim, citing the "consensus of the Sunni community," calls Ismail’s faith "evil innovation" that "must be expelled."',
    src: [
      { tag: 'WHO', since: 'Selim is the Sunni Ottoman sultan', therefore: 'Ismail is the Shi’a Safavid shah' },
      { tag: 'WHEN', since: 'it is 1514', therefore: 'the battle of Chaldiran came weeks later' }
    ],
    read: ['A Sunni sultan threatening a Shi’a shah', 'A sultan offering peace to his neighbor', 'A shah calling for an end to all wars'],
    plain: ['What split shows in the letter?', 'Is Selim keeping power at any cost?', 'Is this a peace offer between empires?'],
    meaning: 'Selim attacks Ismail’s Shi’a faith in Sunni terms: rising tension between the two branches of Islam.',
    trapIdx: 2,
    trap: 'C jumps centuries ahead. In 1514 the Ottomans were rising; they won at Chaldiran and lasted until 1922.'
  };

  W['u3_3.3_17'] = {
    type: 'context',
    hq: 'best characterized by which religious tradition',
    look: 'Selim calls Ismail’s faith "evil innovation" against the "Sunni community," so Ismail was not Sunni.',
    src: [
      { tag: 'WHO', since: 'Selim speaks for the Sunnis', therefore: 'Ismail is on the other side' },
      { tag: 'WHAT', since: 'Ismail made it the state religion in 1501', therefore: 'Iran is still mostly Shi’a today' }
    ],
    read: ['A sultan attacking a rival’s faith', 'A Sikh guru writing to a Mughal emperor', 'A Sunni scholar praising the shah'],
    plain: ['Which faith did Ismail’s empire hold?', 'Was it the Sunni faith of the Ottomans?', 'Was it the Sikh faith of the Punjab?'],
    meaning: 'Ismail made Shi’a Islam the religion of Safavid Persia. The letter calls it an innovation because Selim was Sunni.',
    trapIdx: 0,
    trap: 'A is half true: the Safavids began as a Sufi order. But the empire was defined by Shi’a Islam.'
  };

  W['u3_3.4_0'] = {
    type: 'purpose',
    hq: 'most useful in evaluating the message',
    hs: ['capital of a rival Muslim Indian state'],
    src: [
      { tag: 'WHO', since: 'it is a Mughal victory painting', therefore: 'it shows Aurangzeb as the rightful winner' },
      { tag: 'WHAT', since: 'Golconda was also Muslim', therefore: 'ask what divided two Muslim states' }
    ],
    read: ['A painting celebrating a Mughal victory', 'A painting mourning the fall of the Mughals', 'A painting of peace between rival kings'],
    plain: ['Why fight Golconda?', 'How did Aurangzeb become emperor?', 'How big was India’s economy then?'],
    meaning: 'Aurangzeb was a strict Sunni and Golconda’s rulers were Shi’a. That religious angle shapes the painting’s message.',
    trapIdx: 3,
    trap: 'D is true and about religion, but it is about Hindus and taxes inside the empire. It does not explain a war against a Muslim state.'
  };

  W['u3_3.4_4'] = {
    type: 'similar',
    hq: 'true of both the Ottoman Empire and the Mughal Empire',
    look: 'No source here. Both empires began with Turkic or Mongol horsemen from Central Asia.',
    src: [
      { tag: 'WHO', since: 'Osman’s Turks and Babur came from Central Asia', therefore: 'both founders were horse warriors' },
      { tag: 'HOW', since: 'neither used Chinese-style exams', therefore: 'cross out the exam choice' }
    ],
    read: ['A comparison of two Muslim empires', 'A question about Chinese civil service exams', 'A question about banning Christianity'],
    plain: ['Where were both founders from?', 'Did both pick their officials by exams?', 'Did both ban Christianity?'],
    meaning: 'Both empires were founded by cavalry warriors from Central Asia.',
    trapIdx: 1,
    trap: 'B describes China. The Ottomans used the devshirme and the Mughals used mansabdars, not exams.'
  };

  W['u3_3.4_5'] = {
    type: 'similar',
    hq: 'true about both the Mughal and the Ottoman empires',
    look: 'No source here. Test each choice on both empires.',
    src: [
      { tag: 'WHO', since: 'most Mughal subjects were Hindu', therefore: 'cross out "majority Muslim"' },
      { tag: 'HOW', since: 'both built strong systems of officials and taxes', therefore: 'the match is administration' }
    ],
    read: ['A comparison of two empires’ governments', 'A question about naval battles with Europe', 'A question about peaceful foreign policy'],
    plain: ['What did both build well?', 'Were most people in both Muslim?', 'Did both have strong navies?'],
    meaning: 'The Ottomans (timars, devshirme) and Mughals (mansabdars, zamindars) both built efficient administrations.',
    trapIdx: 0,
    trap: 'A fits the Ottomans but not the Mughals, who were Muslim rulers over a mostly Hindu population.'
  };

  /* ============ UNIT 4 ============ */
  W['u4_4.1_3'] = {
    type: 'causation',
    hq: 'most directly facilitated the voyage',
    hs: ['We agreed to leave the coast of Peru and sail for Japan'],
    src: [
      { tag: 'WHO', since: 'Adams is an English navigator', therefore: 'he sailed a European ship' },
      { tag: 'WHERE', since: 'he crossed the Pacific from Peru to Japan', therefore: 'only strong ships and good navigation make that trip' }
    ],
    read: ['An Englishman sailing to Japan to trade', 'A shogun sending ships to conquer England', 'A Spanish priest sailing to convert Peru'],
    plain: ['What made a Pacific crossing possible?', 'Did Europeans borrow Arab and Indian ships?', 'Did Europeans copy Chinese maps to sail?'],
    meaning: 'European ship design (caravels, lateen sails) and navigation tools (astrolabe, compass) made ocean crossings possible.',
    trapIdx: 0,
    trap: 'A sounds like borrowing technology, but Adams sailed a European ship. The lateen sail and compass were adopted earlier and built into European designs.'
  };

  W['u4_4.2_4'] = {
    type: 'causation',
    hq: 'primary motivation for Portuguese maritime exploration',
    hs: ['This route bypassed overland Silk Road networks controlled by Ottoman and other intermediaries'],
    src: [
      { tag: 'WHERE', since: 'da Gama sailed around Africa to India', therefore: 'the goal was Asia, not Africa or America' },
      { tag: 'WHY', since: 'the route skipped Ottoman middlemen', therefore: 'Portugal wanted spices without paying them' }
    ],
    read: ['Portugal finding a sea route to India', 'Portugal sailing west to find the Americas', 'Portugal sending a crusade into Africa'],
    plain: ['Why did Portugal sail around Africa?', 'Did Portugal want settler colonies in America?', 'Did Portugal want to rule Indian Ocean cities?'],
    meaning: 'Portugal wanted to reach Asian spices directly and skip the Ottoman and Italian middlemen.',
    trapIdx: 2,
    trap: 'C has some truth (Portugal did see itself as fighting Islam), but the main goal was spices. The passage stresses bypassing trade routes.'
  };

  W['u4_4.2_5'] = {
    type: 'bestillustrates',
    hq: 'most clearly demonstrates which of the following developments',
    hs: ['across the Indian Ocean to Calicut in India, and back'],
    src: [
      { tag: 'WHEN', since: 'it is a late 1400s voyage', therefore: 'Portugal is leading European exploration' },
      { tag: 'WHERE', since: 'it goes from Lisbon to India and back', therefore: 'it shows Portugal’s skill at sea' }
    ],
    read: ['A map of a Portuguese voyage to India', 'A map of Spanish voyages to the Americas', 'A map of Ottoman fleets in the Red Sea'],
    plain: ['What does this voyage show about Portugal?', 'Did Portugal ignore the New World?', 'Were Muslim lands closed to all Europeans then?'],
    meaning: 'Sailing from Lisbon around Africa to India and back shows Portugal leading the way at sea.',
    trapIdx: 0,
    trap: 'A jumps ahead. The map shows one voyage of exploration, not strong European businesses already running in India.'
  };

  W['u4_4.2_6'] = {
    type: 'bestillustrates',
    hq: 'most directly supported by the map',
    hs: ['around the southern tip of Africa past Natal, up the East African coast to Malindi'],
    src: [
      { tag: 'WHERE', since: 'the route hugs Africa and ends in India', therefore: 'Portugal’s focus was the African and Asian coasts' },
      { tag: 'WHAT', since: 'it shows one voyage', therefore: 'do not stretch it to all of Europe' }
    ],
    read: ['A map of one voyage along Africa to India', 'A map of every European voyage of the 1500s', 'A map of Europeans settling new lands'],
    plain: ['Where was Portugal looking?', 'Was da Gama the first European at sea?', 'Did Europeans move abroad in large numbers?'],
    meaning: 'The route hugs Africa and ends at an Indian port: Portugal was focused on the African and Asian coasts.',
    trapIdx: 2,
    trap: 'C is true of the period, but one Portuguese map cannot prove what all European nations did. "Most directly supported" means stay close to the map.'
  };

  W['u4_4.2_7'] = {
    type: 'context',
    hq: 'accurate statement concerning Asian nations’ interactions',
    hs: ['Malindi, across the Indian Ocean to Calicut in India'],
    src: [
      { tag: 'WHEN', since: 'the stem covers the whole 1500s', therefore: 'think of what happened after da Gama' },
      { tag: 'WHERE', since: 'the Portuguese reached Japan in 1543', therefore: 'Japan traded with them for guns and silk' }
    ],
    read: ['A map of the voyage that opened Asian trade', 'A map of the voyage that ended trade with Asia for good', 'A map of a Chinese fleet reaching Lisbon'],
    plain: ['How did Asian states treat Europeans?', 'Did India keep all Europeans off its coast?', 'Did the Ming fully block European trade?'],
    meaning: 'In the 1500s Japan welcomed Portuguese traders and Jesuit missionaries. Japan closed itself only in the 1600s.',
    trapIdx: 1,
    trap: 'B is wrong: Portugal took Goa in 1510 and built forts on the Indian coast. Japan’s closing came in the 1600s, not the 1500s.'
  };

  W['u4_4.2_9'] = {
    type: 'context',
    hq: 'refers to which geographic region',
    look: 'Lands "on the western side of the said bound" go to the King and Queen of Spain; lands on the eastern side go to Portugal.',
    src: [
      { tag: 'WHEN', since: 'it is 1494, two years after Columbus', therefore: 'Spain had just claimed lands to the west' },
      { tag: 'WHERE', since: 'the line runs pole to pole in the Atlantic', therefore: 'west of it is the Americas' }
    ],
    read: ['A treaty splitting new lands in two', 'A treaty ending a long war in Europe', 'A treaty opening ports in East Asia'],
    plain: ['What lay west of the line?', 'Did Spain get the coast of Africa?', 'Did Spain get India and its ports?'],
    meaning: 'West of the line meant the Americas, which went to Spain. Portugal got Africa and the route to India.',
    trapIdx: 1,
    trap: 'B is on the wrong side. Africa lay east of the line, and Portugal already had forts there.'
  };

  W['u4_4.2_10'] = {
    type: 'purpose',
    hq: 'The purpose of this treaty',
    look: 'The treaty exists because "a certain controversy exists" over new lands, "for the sake of peace and concord."',
    src: [
      { tag: 'WHO', since: 'Spain and Portugal both claimed new lands', therefore: 'they might fight over them' },
      { tag: 'WHY', since: 'it says "for the sake of peace and concord"', therefore: 'the goal is to prevent a war' }
    ],
    read: ['Spain and Portugal dividing new lands', 'Spain and Portugal ending a long war', 'Spain and Portugal joining against England'],
    plain: ['Why draw a line at all?', 'Were they ending a long war?', 'Were they forming a military alliance?'],
    meaning: 'The treaty drew a line so the two kingdoms would not fight over newly found lands.',
    trapIdx: 1,
    trap: 'B misreads "controversy" as war. Spain and Portugal had not been at war for centuries; the treaty heads off a future fight.'
  };

  W['u4_4.3_5'] = {
    type: 'bestillustrates',
    hq: 'most directly supported by the passage',
    look: 'Guaman Poma repeats that in the mines "so many Indians die," and that they are sent to the plains "and the Indians die."',
    src: [
      { tag: 'WHO', since: 'Guaman Poma is an Andean noble', therefore: 'he speaks for the native people' },
      { tag: 'WHAT', since: 'he keeps saying the Indians die', therefore: 'the native population is falling' }
    ],
    read: ['An Andean writer on deaths in the mines', 'A Spanish miner bragging about his profits', 'A priest describing a happy mission'],
    plain: ['What happened to the native population?', 'Where did the silver end up going?', 'Did mixed marriages bring equality between races?'],
    meaning: 'Overwork, abuse and disease in the mines caused the native population of the Americas to fall.',
    trapIdx: 1,
    trap: 'B is true about silver, but the passage never says where it went. "Most directly supported" means what the passage itself shows.'
  };

  W['u4_4.4_4'] = {
    type: 'similar',
    hq: 'key difference between European trade in the Americas and European trade in Asia',
    hs: ['European trade in Asia took a different form'],
    src: [
      { tag: 'WHERE', since: 'in the Americas Europeans conquered empires', therefore: 'they took land and colonized' },
      { tag: 'WHERE', since: 'in Asia strong empires already existed', therefore: 'Europeans mostly carried goods and kept trading posts' }
    ],
    read: ['A comparison of European trade in two regions', 'A question about free trade between European states', 'A question about the Aztec and Inca'],
    plain: ['How did Europeans act in each region?', 'Was Asia trade free of mercantilism?', 'Was trade in the Americas mostly peaceful?'],
    meaning: 'Europeans conquered and settled the Americas. In Asia they mostly ran trading posts and moved goods between Asian ports.',
    trapIdx: 1,
    trap: 'B finishes the source sentence but gets Asia wrong: silver was the main currency in Asia, especially in China.'
  };

  W['u4_4.4_5'] = {
    type: 'bestillustrates',
    hq: 'best characterizes the activities that Cortés references',
    look: 'Cortés describes "the great extent of this noble city" and "the government and dominions of Moctezuma" for his king.',
    src: [
      { tag: 'WHO', since: 'Cortés is a conquistador writing to Charles V', therefore: 'he is reporting on a land he wants to take' },
      { tag: 'WHEN', since: 'it is 1520, during the conquest', therefore: 'his activity is expanding Spain’s empire' }
    ],
    read: ['A conquistador reporting to his king', 'A priest writing to the pope about converts', 'An Aztec noble writing to Moctezuma'],
    plain: ['What was Cortés doing in Mexico?', 'Was he making peace with nearby tribes?', 'Was he setting up shared property?'],
    meaning: 'Cortés was marching inland to bring Moctezuma’s empire under Spanish rule: expansion.',
    trapIdx: 0,
    trap: 'A misreads the admiring tone. Cortés did make allies, but to conquer the Aztecs. His activity was expanding Spain’s empire.'
  };

  W['u4_4.4_6'] = {
    type: 'purpose',
    hq: 'most likely followed up this excerpt',
    look: 'Cortés promises to describe "the many rare and wonderful objects" the city contains, so amazing they will seem "scarcely worthy of credit."',
    src: [
      { tag: 'WHO', since: 'Cortés led an expedition without permission', therefore: 'he needed the king to back him' },
      { tag: 'WHY', since: '"rare and wonderful objects" impress a king', therefore: 'he would stress the treasure' }
    ],
    read: ['Cortés setting up a report of riches', 'Cortés asking the king to let him come home', 'Cortés apologizing for his failures'],
    plain: ['What would win the king’s support?', 'Would he describe Aztec labor?', 'Would he describe the mountains and lakes around it?'],
    meaning: 'To win the king’s support, Cortés would stress the gold and treasure of Moctezuma’s empire.',
    trapIdx: 2,
    trap: 'C fits "wonderful," but scenery would not win a king. Conquistadors sought "God, gold, and glory," and gold mattered most to Charles V.'
  };

  W['u4_4.4_7'] = {
    type: 'context',
    hq: 'highly disturbed the Spanish conquistadors',
    look: 'Source 1 shows the twin-shrine Great Temple of Tenochtitlan; Source 2 describes priests serving idols in its chapels.',
    src: [
      { tag: 'WHAT', since: 'the temples were for the gods', therefore: 'look for a religious ritual' },
      { tag: 'WHO', since: 'the Spanish were Catholic', therefore: 'the practice shocked them' }
    ],
    read: ['A temple and a Spaniard’s description of it', 'A market and a merchant’s description of it', 'A palace and a king’s description of it'],
    plain: ['What happened at the top of the temple?', 'Was grain stored in the temples for hard times?', 'Was trade done in the temples?'],
    meaning: 'Aztec priests sacrificed people, often war captives, at the top of the temple pyramids.',
    trapIdx: 2,
    trap: 'C comes from Source 2 ("the burial places of the nobles"), but burial would not shock the Spanish. Human sacrifice did.'
  };

  W['u4_4.4_9'] = {
    type: 'bestillustrates',
    hq: 'indicates that which of the following was true of Aztec society',
    look: 'Cortés says one temple is taller than the main tower of Seville’s church, with stone and wood "so well wrought in every part," carved and painted.',
    src: [
      { tag: 'WHO', since: 'a Spaniard who saw Seville is amazed', therefore: 'the building is truly impressive' },
      { tag: 'WHAT', since: 'he praises the stonework and carving', therefore: 'many skilled artisans built it' }
    ],
    read: ['A Spaniard praising the Aztec temples', 'A Spaniard mocking poor Aztec buildings', 'An Aztec priest describing a Spanish church'],
    plain: ['What do the temples show about the Aztecs?', 'Did the Aztecs depend on long-distance ocean trade?', 'Did they treat women as equals?'],
    meaning: 'Huge, finely carved temples show a complex society with many skilled craftsmen.',
    trapIdx: 3,
    trap: 'D is the opposite: the Aztecs were a warring empire that took captives from neighbors.'
  };

  W['u4_4.4_11'] = {
    type: 'causation',
    hq: 'most strongly influenced which of the following developments',
    look: 'All lands west of the line go to Spain "forever," and all lands east go to Portugal.',
    src: [
      { tag: 'WHAT', since: 'two kingdoms divide lands they have not even seen', therefore: 'it sets up empires overseas' },
      { tag: 'WHEN', since: 'it is 1494', therefore: 'the answer must start soon after' }
    ],
    read: ['Two kingdoms dividing new lands', 'Two kingdoms building national pride', 'Two kingdoms reviving Greek learning'],
    plain: ['What did dividing the lands lead to?', 'Did it spark nationalism?', 'Did it start the ideas of Social Darwinism?'],
    meaning: 'The treaty shaped colonial empires: Spain took most of the Americas and Portugal took Brazil.',
    trapIdx: 0,
    trap: 'A is about kingdoms, but nationalism is a later idea about a people and their nation. Dividing lands overseas is colonialism.'
  };

  W['u4_4.4_12'] = {
    type: 'causation',
    hq: 'likely encouraged the development of the city of Batavia',
    look: 'The plan shows a fort (1), walls all the way around, garrison barracks (8) and a VOC administration building (3).',
    src: [
      { tag: 'WHO', since: 'the Dutch East India Company built it', therefore: 'it was a business and military base' },
      { tag: 'WHAT', since: 'it has a fort, walls and barracks', therefore: 'defense was a top concern' }
    ],
    read: ['A walled Dutch trading base on Java', 'A Dutch mission town for converting Muslims', 'A Javanese city that the Dutch never ruled'],
    plain: ['Why build Batavia there?', 'Did the Dutch come to convert people?', 'Did Batavia itself grow the spices?'],
    meaning: 'The VOC built Batavia as a walled, easily defended base to control the spice trade.',
    trapIdx: 3,
    trap: 'D sounds right for the spice trade, but the spices came from other islands, like the Moluccas. Batavia was the fort that controlled them.'
  };

  W['u4_4.5_5'] = {
    type: 'causation',
    hq: 'impact of the trade relationship between the Portuguese and Africans',
    hs: ['past the Cape Verde Islands, around the southern tip of Africa'],
    src: [
      { tag: 'WHERE', since: 'the route hugs the African coast', therefore: 'Portugal set up posts along it' },
      { tag: 'WHAT', since: 'Portugal bought captives at those posts from the 1440s', therefore: 'the impact was the slave trade' }
    ],
    read: ['A voyage along Africa’s coast to India', 'A voyage that avoided the African coast entirely', 'A voyage carrying gold to Africa'],
    plain: ['What did Portugal take from Africa?', 'Did Portugal ignore trade in Africa?', 'Did Portugal refuse to trade slaves?'],
    meaning: 'Portugal bought enslaved Africans at coastal posts and shipped them to Europe, the Atlantic islands and later Brazil.',
    trapIdx: 1,
    trap: 'B is the opposite. Portugal was the leading slave-trading nation of the period.'
  };

  W['u4_4.5_6'] = {
    type: 'context',
    hq: 'reflects the concerns of which of the following groups',
    look: 'Wesley asks the slave trader, "Are you a man? Then you should have an human heart," and warns that "the great GOD" will judge him.',
    src: [
      { tag: 'WHO', since: 'Wesley founded Methodism', therefore: 'he was part of the Evangelical revival' },
      { tag: 'WHAT', since: 'he attacks slavery as a sin', therefore: 'it is a religious argument against slavery' }
    ],
    read: ['A preacher attacking slave traders', 'A slave trader defending his profits', 'A king ordering an end to slavery'],
    plain: ['Which religious group led abolition?', 'Was it the Puritans of the early 1600s in England?', 'Was it the Freemasons?'],
    meaning: 'Wesley’s moral and religious attack on slavery reflects the Evangelicals who led the abolition campaign.',
    trapIdx: 0,
    trap: 'A is a Protestant group, but the Puritans peaked in the 1600s. Wesley, writing in 1774, was an Evangelical.'
  };

  W['u4_4.5_7'] = {
    type: 'context',
    hq: 'historical context of the movements of goods and people',
    look: 'Source 1 shows captives packed into a ship’s hold; Source 2 describes "fellow-creatures" squeezed "down in the ship."',
    src: [
      { tag: 'WHERE', since: 'the ship carries captives', therefore: 'they went from Africa to the Americas' },
      { tag: 'HOW', since: 'plantations grew sugar and cotton', therefore: 'those crops went to Europe' }
    ],
    read: ['A slave ship and an attack on slavery', 'A merchant ship carrying sugar to Africa', 'A warship guarding the Atlantic'],
    plain: ['Which way did each thing move?', 'Did captives go from the Americas to Africa?', 'Did sugar go to Africa?'],
    meaning: 'Captives went to the Americas, plantation crops went to Europe, and goods, guns and rum went to Africa.',
    trapIdx: 3,
    trap: 'D gets the first leg right, then swaps the other two. Cash crops went to Europe, and manufactured goods went to Africa.'
  };

  W['u4_4.5_8'] = {
    type: 'causation',
    hq: 'consequence of the layout of transatlantic slave ships',
    look: 'The diagram shows rows of captives packed side by side across every deck, with almost no space between them.',
    src: [
      { tag: 'WHAT', since: 'people are packed tightly', therefore: 'disease spread fast' },
      { tag: 'HOW', since: 'the ship is a sailing ship', therefore: 'captives did not row' }
    ],
    read: ['A diagram of a crowded slave ship', 'A diagram of a navy ship’s gun decks', 'A diagram of a galley with rowers'],
    plain: ['What did crowding cause?', 'Did ships sink from the weight?', 'Did captives row the ships?'],
    meaning: 'Packed together in the hold, many captives died of dysentery, smallpox and other diseases.',
    trapIdx: 1,
    trap: 'B sounds like a result of overcrowding, but it was not common. Disease in the packed hold was the deadly result.'
  };

  W['u4_4.5_10'] = {
    type: 'causation',
    hq: 'best support the author’s assertion',
    look: 'Rodney says "the capitalists of Western Europe were the ones who actively extended their exploitation from inside Europe to cover the whole of Africa."',
    src: [
      { tag: 'WHO', since: 'Rodney is a historian from Guyana writing in 1974', therefore: 'he blames European capitalism' },
      { tag: 'WHAT', since: 'the claim is about Western European capitalists', therefore: 'the evidence must involve them' }
    ],
    read: ['A historian blaming Europe for Africa’s losses', 'A historian praising European trade with African states', 'A historian blaming Arab traders for slavery'],
    plain: ['What evidence ties Europe to Africa’s loss?', 'Did Arab traders sell African captives too?', 'Did Europe trade with Ethiopia?'],
    meaning: 'European planters expanding the slave trade for Caribbean sugar links capitalism directly to Africa’s loss of people.',
    trapIdx: 1,
    trap: 'B is true, but it is about Arab merchants, not Western European capitalists. It does not support Rodney’s claim.'
  };

  W['u4_4.5_11'] = {
    type: 'context',
    hq: 'importance of trading contacts with Europeans',
    look: 'Rodney blames the imperialist system for "draining African wealth," and names "agents or unwitting accomplices" of that system.',
    src: [
      { tag: 'WHO', since: 'some Africans were "agents" in the trade', therefore: 'African states took part and gained something' },
      { tag: 'WHAT', since: 'Europeans paid in guns', therefore: 'coastal kingdoms grew stronger with them' }
    ],
    read: ['A historian on Europe’s role in Africa', 'A European merchant listing his customers', 'An African king praising the Portuguese'],
    plain: ['What did African states gain?', 'Were Europeans the only slave buyers?', 'Did Africans and Europeans expel Arabs?'],
    meaning: 'States like Dahomey and Asante traded captives for European guns and used them to expand.',
    trapIdx: 2,
    trap: 'C overstates it. The trans-Saharan and Indian Ocean slave trades kept going, so Europeans were not the only buyers.'
  };

  W['u4_4.5_12'] = {
    type: 'bestillustrates',
    hq: 'best seen as evidence for',
    look: 'Mine owners make workers buy corn, meat and chicha and "deduct the price from their labor," so "the Indians end up very poor and deep in debt."',
    src: [
      { tag: 'WHO', since: 'Guaman Poma is an Andean writing to the king', therefore: 'he is exposing abuses' },
      { tag: 'HOW', since: 'workers are charged until they owe more than they earn', therefore: 'debt keeps them working' }
    ],
    read: ['An Andean exposing abuses in the mines', 'A Spanish official praising the mine owners', 'A Spanish king writing new laws'],
    plain: ['What trap do the workers fall into?', 'Were the elites free of corruption?', 'Did the king ignore the natives?'],
    meaning: 'Workers charged for food until they were "deep in debt" were caught in debt slavery (debt peonage).',
    trapIdx: 1,
    trap: 'B is the opposite: Guaman Poma says the owners "join forces in bribing" every official.'
  };

  W['u4_4.5_13'] = {
    type: 'causation',
    hq: 'changes to the Spanish policies towards Native Americans',
    look: 'Guaman Poma complains that no official warns "Your Majesty" about "the harms done to the poor Indians."',
    src: [
      { tag: 'WHO', since: 'critics wrote to the Spanish king', therefore: 'the change came from the Crown' },
      { tag: 'WHEN', since: 'Las Casas protested in the 1500s', therefore: 'the New Laws came in 1542' }
    ],
    read: ['An Andean asking the king to stop abuses', 'A mine owner asking for more workers', 'A viceroy reporting peace and order in the Andes'],
    plain: ['How did the Crown respond to abuse?', 'Did Africans replace all native miners?', 'Did natives get the vote?'],
    meaning: 'Reports of abuse led the Crown to issue decrees, like the New Laws of 1542, calling for better treatment. Many were ignored.',
    trapIdx: 0,
    trap: 'A happened in the Caribbean and Brazil, but the Andean silver mines kept using native mita labor.'
  };

  W['u4_4.5_16'] = {
    type: 'causation',
    hq: 'need for human labor during the Age of Exploration',
    look: 'Barbot describes captives carried "from Guinea to America" who refuse food and starve, including at Guadeloupe, a sugar island.',
    src: [
      { tag: 'WHERE', since: 'the captives go to Guadeloupe in the Caribbean', therefore: 'they will work sugar plantations' },
      { tag: 'WHY', since: 'sugar takes huge amounts of labor', therefore: 'planters wanted many workers' }
    ],
    read: ['A slave trader describing his captives', 'An abolitionist describing a slave revolt', 'A planter describing his sugar fields'],
    plain: ['Why did planters need so many workers?', 'Were crops hard to grow in the soil of the Americas?', 'Was gold found in the Americas?'],
    meaning: 'Sugar was extremely labor-intensive, so planters in Brazil and the Caribbean imported millions of enslaved Africans.',
    trapIdx: 3,
    trap: 'D is real, but gold mining did not drive the mass slave trade. Sugar plantations used far more enslaved workers.'
  };

  W['u4_4.5_17'] = {
    type: 'context',
    hq: 'important continuity underlying the interaction',
    look: 'Captives are "compelled and even beaten" to make them eat; some starve to death rather than go on.',
    src: [
      { tag: 'WHAT', since: 'captives are beaten to keep them alive for sale', therefore: 'force is how the trade works' },
      { tag: 'WHEN', since: 'it is 1732', therefore: 'organized abolition had not started yet' }
    ],
    read: ['A trader describing force used on captives', 'A captive describing a fair and paid labor deal', 'A priest describing peaceful colonies'],
    plain: ['What kept European colonies going?', 'Did many people oppose the slave trade then?', 'Did workers and owners both gain?'],
    meaning: 'From conquest to the slave trade, European colonies were built and kept by force.',
    trapIdx: 1,
    trap: 'B is too early. Widespread opposition to the slave trade grew only in the late 1700s.'
  };

  W['u4_4.5_18'] = {
    type: 'bestillustrates',
    hq: 'representative of most examples of human trafficking',
    look: 'Barbot describes captives who starve themselves, "several instances in my own slaves." That is one trader’s experience.',
    src: [
      { tag: 'WHO', since: 'it is one agent’s account', therefore: 'it may not be typical' },
      { tag: 'WHAT', since: 'it is about how captives fared', therefore: 'you need data on many voyages' }
    ],
    read: ['One trader’s account of his captives', 'A study of every slave voyage across the Atlantic', 'A law banning the slave trade'],
    plain: ['How did most voyages compare?', 'Which ports did the ships use?', 'What laws were passed?'],
    meaning: 'To test whether one account was typical, compare it with survival rates across many voyages.',
    trapIdx: 3,
    trap: 'D shows where ships sailed, not how captives were treated. Barbot’s account is about suffering and death, so you need survival data.'
  };

  W['u4_4.7_1'] = {
    type: 'causation',
    hq: 'most directly contributed to',
    hs: ['the highest offices in government and the Church were usually reserved for peninsulares', 'often held great wealth in land and mines'],
    src: [
      { tag: 'WHO', since: 'creoles were rich but shut out of top jobs', therefore: 'they resented Spanish rule' },
      { tag: 'WHEN', since: 'this held through the 1700s', therefore: 'the result came around 1800' }
    ],
    read: ['Rich creoles shut out of top offices', 'Peninsulares losing their land to creoles', 'Native rulers taking back Spanish lands'],
    plain: ['What did shutting out creoles lead to?', 'Did the encomienda system spread back to Spain?', 'Did it cause the Pueblo Revolt?'],
    meaning: 'Rich creoles shut out of power resented Spain, and that resentment fed the independence movements of the early 1800s.',
    trapIdx: 2,
    trap: 'C is a real revolt against Spain, but it was led by Pueblo people against missionaries, not by creoles.'
  };

  W['u4_4.7_4'] = {
    type: 'bestillustrates',
    hq: 'economic hierarchy in San Juan Peribán',
    hs: ['owner of the hacienda and sugar mill there', 'Mulatto and mestizo brothers had donated land'],
    src: [
      { tag: 'WHO', since: 'the creole candidate owns a hacienda and sugar mill', therefore: 'creoles hold the most wealth' },
      { tag: 'WHAT', since: 'mulattoes and mestizos donated land', therefore: 'they had some resources too' }
    ],
    read: ['A dispute over who could lead a brotherhood', 'A dispute in court over who owned the sugar mill', 'A dispute between priests and the king'],
    plain: ['Who had wealth in this town?', 'Did mestizos own no property at all?', 'Were creoles losing economically?'],
    meaning: 'Mulattoes and mestizos could donate land, so they had some wealth, but creoles owned the hacienda and mill and stayed on top.',
    trapIdx: 0,
    trap: 'A is contradicted by the source: mulatto and mestizo brothers donated land that earned rent. They owned property.'
  };

  W['u4_4.7_5'] = {
    type: 'similar',
    hq: 'differed in that they',
    look: 'The mine owners "keep Indian cooking women" and "use cooking as a pretext for taking concubines." Spanish and native lives mixed closely.',
    src: [
      { tag: 'WHO', since: 'Spanish men often took native women', therefore: 'a large mestizo population grew' },
      { tag: 'WHO', since: 'English settlers came as families', therefore: 'they kept apart from natives' }
    ],
    read: ['An Andean on Spanish abuse of natives', 'An English settler writing on trade with Native peoples', 'A Spanish priest on mixed marriages'],
    plain: ['How did the English differ?', 'Did the English see natives as equals?', 'Did they use natives for cash crops?'],
    meaning: 'Spanish colonists mixed with native people. English settlers mostly kept apart and pushed natives off the land.',
    trapIdx: 3,
    trap: 'D describes the wrong workforce. English tobacco and cotton farms relied on indentured servants and enslaved Africans.'
  };

  W['u4_4.8_0'] = {
    type: 'bestillustrates',
    hq: 'best illustrates which change',
    hs: ['Much of it eventually flowed to China in exchange for silk, porcelain, and tea'],
    src: [
      { tag: 'WHERE', since: 'silver went from the Americas to China', therefore: 'trade now crossed the whole world' },
      { tag: 'WHAT', since: 'China sold silk, porcelain and tea', therefore: 'Asian trade grew, not shrank' }
    ],
    read: ['American silver flowing to China', 'European trade with Asia shrinking', 'Chinese factories shutting down'],
    plain: ['What did silver tie together?', 'Did Europe-Asia trade decline?', 'Did Chinese manufacturing end?'],
    meaning: 'Silver from the Americas paid for Chinese goods: one global trade network linking every continent.',
    trapIdx: 1,
    trap: 'B is the opposite: silver flowed to China because Europeans were buying more Asian goods.'
  };

  W['u4_4.8_4'] = {
    type: 'bestillustrates',
    hq: 'best understood as evidence of',
    hs: ['westward across the Pacific on Manila Galleons to China'],
    src: [
      { tag: 'WHERE', since: 'silver went east across the Atlantic and west across the Pacific', therefore: 'it linked three continents' },
      { tag: 'WHEN', since: 'the Manila galleons began in 1571', therefore: 'this was the first time trade circled the globe' }
    ],
    read: ['Silver crossing two oceans to China', 'Silver staying inside Spain’s colonies', 'Silver ending the Silk Roads'],
    plain: ['What did the silver routes create?', 'Did the overland Silk Roads decline because of Ottomans?', 'Did Ming China collapse?'],
    meaning: 'Silver moving across the Atlantic and Pacific created the first truly global trade network.',
    trapIdx: 3,
    trap: 'D has a kernel of truth (silver problems hurt the late Ming), but the passage shows a network forming, not an empire falling.'
  };

  /* ============ UNIT 5 ============ */
  W['u5_5.1_2'] = {
    type: 'purpose',
    hq: 'EXCEPT',
    hs: ['neither the nation nor the Supreme Being created slaves', 'He is your equal, because he is a man'],
    src: [
      { tag: 'WHO', since: 'Saint-Maurice is a journalist in Saint-Domingue', therefore: 'he is arguing with the colonists around him' },
      { tag: 'HOW', since: 'writers often quote the other side to answer it', therefore: 'one quote may be the colonists’ claim, not his' }
    ],
    read: ['A journalist arguing for abolition', 'A planter arguing to keep slavery forever', 'A king ordering slaves back to work'],
    plain: ['Which line is not his own argument?', 'Which line calls all men equal before God?', 'Which line says slavery is ending now?'],
    meaning: 'Three lines argue for freedom. The odd one out is a colonist argument Saint-Maurice quotes so he can knock it down.',
    trapIdx: 3,
    trap: 'D sounds religious rather than political, but it is a direct argument against slavery: no one was created a slave.'
  };

  W['u5_5.1_7'] = {
    type: 'context',
    hq: 'central argument for which Enlightenment-era development',
    look: 'Hobbes says nature made men "so equal" that "the weakest has strength enough to kill the strongest."',
    src: [
      { tag: 'WHO', since: 'Hobbes wrote during England’s civil war', therefore: 'he wants to explain why people accept a ruler' },
      { tag: 'WHAT', since: 'everyone is equally able to kill', therefore: 'people agree to a ruler for safety' }
    ],
    read: ['A thinker on why people need rulers', 'An economist on how markets set prices', 'A king on why God chose him to rule'],
    plain: ['What deal do equal people make?', 'Is it about free markets setting prices?', 'Is it about kings chosen by God?'],
    meaning: 'Equal people afraid of each other agree to give up some freedom to a ruler for security: the social contract.',
    trapIdx: 2,
    trap: 'C sounds right because Hobbes backed strong rulers, but he bases power on an agreement among equals, not on God.'
  };

  W['u5_5.1_8'] = {
    type: 'causation',
    hq: 'emerged in large part due to the ideas outlined in Leviathan',
    look: 'Hobbes builds government on the equality of men, not on God’s choice of a king.',
    src: [
      { tag: 'WHEN', since: 'Leviathan came out in 1651', therefore: 'the effect must come after, so cross out the English Civil War' },
      { tag: 'HOW', since: 'Locke and Rousseau built on the idea of a contract', therefore: 'revolutionaries used it against kings' }
    ],
    read: ['A thinker basing government on equality', 'A worker describing his first day in a new factory', 'A king defending divine right'],
    plain: ['What did contract ideas lead to?', 'Did they start the English Civil War?', 'Did they start the Industrial Revolution?'],
    meaning: 'If government rests on a contract, people can break it. Later thinkers used that idea to justify revolutions against monarchs.',
    trapIdx: 1,
    trap: 'B happened first. The English Civil War began in 1642, before Leviathan was published in 1651.'
  };

  W['u5_5.2_4'] = {
    type: 'context',
    hq: 'most likely influenced Fukuzawa’s views',
    hs: ['whether a treaty is honored or not depends entirely on the financial and military powers', 'If others are violent, then I too must become violent'],
    src: [
      { tag: 'WHO', since: 'Fukuzawa is a Meiji-era reformer', therefore: 'he lived through Japan being forced open' },
      { tag: 'WHAT', since: 'he says force, not virtue, rules nations', therefore: 'something taught him that lesson' }
    ],
    read: ['A Japanese thinker saying force rules nations', 'A missionary saying all people are brothers before God', 'A shogun saying Japan must stay closed'],
    plain: ['What taught Japan that force rules?', 'Did the shogun’s isolation shape his view?', 'Did Buddhist ideas of peace shape it?'],
    meaning: 'American warships forced Japan to open its markets. That taught Fukuzawa that power, not law, decides world affairs.',
    trapIdx: 3,
    trap: 'D is a bloody event of the period, but it was a Chinese civil war. The passage is about how strong nations treat weaker ones.'
  };

  W['u5_5.2_5'] = {
    type: 'context',
    hq: 'final verse of this song is most clearly a reference to',
    look: 'The last verse calls on God "to shield the land, the one true land, One Deutschland and one fatherland!"',
    src: [
      { tag: 'WHAT', since: 'it longs for "one Deutschland"', therefore: 'Germany is not yet one country' },
      { tag: 'WHEN', since: 'it was popular in the late 1800s', therefore: 'think of unification in 1871' }
    ],
    read: ['A song calling for one united Germany', 'A song calling for German colonies abroad', 'A song mourning a lost German war'],
    plain: ['Which event made Germany one land?', 'Did it call for colonies overseas?', 'Did it praise the Frankfurt Parliament?'],
    meaning: '"One Deutschland" points to unification in 1871, when Prussia brought the southern Catholic states into one empire.',
    trapIdx: 3,
    trap: 'D did try to unite Germany in 1848, but it failed. Unification came under Prussia, so the song points to that.'
  };

  W['u5_5.2_7'] = {
    type: 'context',
    hq: 'categorize this song as part of',
    look: 'Germany is "wherever is heard the German tongue," a land where "truth lives in each eye of blue."',
    src: [
      { tag: 'WHAT', since: 'it defines Germany by language and blood', therefore: 'it is about the German "folk"' },
      { tag: 'WHERE', since: 'it is a German song', therefore: 'cross out Chinese and Russian movements' }
    ],
    read: ['A song defining Germans by language and blood', 'A song attacking the Catholic Church and its bishops', 'A song calling for a Russian revolution'],
    plain: ['Which movement praised the German folk?', 'Was it China’s reform movement?', 'Was it Bismarck’s fight with Catholics?'],
    meaning: 'A Germany defined by language and "eyes of blue" fits the Völkisch movement, which celebrated the German people.',
    trapIdx: 2,
    trap: 'C is German and from the same era, but the Kulturkampf was Bismarck’s campaign against the Catholic Church. The song never mentions it.'
  };

  W['u5_5.2_8'] = {
    type: 'context',
    hq: 'historical context for the rebellion',
    look: 'The 1791 print, titled "France Militaire," shows enslaved people rising against white colonists as the plantations of the Plaine du Cap burn.',
    src: [
      { tag: 'WHEN', since: 'it is 1791', therefore: 'France is in the middle of its revolution' },
      { tag: 'WHERE', since: 'Haiti was the French colony Saint-Domingue', therefore: 'events in France shaped it' }
    ],
    read: ['A print of the 1791 revolt in Saint-Domingue', 'A print of a French army victory parade in Paris', 'A print of a British raid in the Caribbean'],
    plain: ['What was happening in France in 1791?', 'Was it the Congress of Vienna of 1815?', 'Was it the Seven Years’ War of the 1750s?'],
    meaning: 'The revolt began in 1791, inspired by the Rights of Man and helped by the chaos of the French Revolution.',
    trapIdx: 2,
    trap: 'C is a French and British war in the colonies, but it ended in 1763, almost thirty years before this revolt.'
  };

  W['u5_5.2_9'] = {
    type: 'causation',
    hq: 'grew out of which of the following',
    look: 'The print shows enslaved people with axes and guns attacking colonists, with fires in the distance.',
    src: [
      { tag: 'WHO', since: 'the rebels are enslaved people', therefore: 'independence began as a slave revolt' },
      { tag: 'WHEN', since: 'the fighting ran from 1791 to 1804', therefore: 'it took many uprisings and battles' }
    ],
    read: ['A print of enslaved people rising up', 'A print of colonists writing a constitution', 'A print of a revolt against Dessalines'],
    plain: ['How did Haiti become independent?', 'Did a convention write it into being?', 'Was it a revolt against Dessalines?'],
    meaning: 'A series of slave revolts, led by Toussaint L’Ouverture and Dessalines, defeated France and won independence in 1804.',
    trapIdx: 3,
    trap: 'D flips the story. Dessalines led the fight and declared independence; he was not the one rebelled against.'
  };

  W['u5_5.2_10'] = {
    type: 'context',
    hq: 'best understood in the context of',
    look: 'Bolívar says creoles are "struggling to maintain ourselves in the country that gave us birth against the opposition of the invaders."',
    src: [
      { tag: 'WHO', since: 'Bolívar led armies against Spain', therefore: 'the invaders are the Spanish' },
      { tag: 'WHERE', since: 'Angostura is in Venezuela', therefore: 'the movement is in South America' }
    ],
    read: ['A rebel leader on fighting Spain', 'A union leader on factory wages', 'A Filipino leader on American rule'],
    plain: ['What was Bolívar fighting for?', 'Was it workers’ rights in Central America?', 'Was it self-rule in the Philippines?'],
    meaning: 'Bolívar spoke in 1819 during the wars for independence from Spain in South America.',
    trapIdx: 3,
    trap: 'D is another fight against Spain, but it came in the 1890s and in Asia. Angostura is in Venezuela.'
  };

  W['u5_5.2_11'] = {
    type: 'bestillustrates',
    hq: 'requirements for a properly functioning legal system',
    look: 'Bolívar ends: "proper morals, and not force, are the bases of law; and that to practice justice is to practice liberty."',
    src: [
      { tag: 'WHAT', since: 'he names "proper morals" as the base of law', therefore: 'morality is one part' },
      { tag: 'WHAT', since: 'he says "to practice justice is to practice liberty"', therefore: 'justice is the other' }
    ],
    read: ['A leader naming what law rests on', 'A priest naming what faith rests on', 'A general naming what victory rests on'],
    plain: ['What does law rest on, per Bolívar?', 'Is it truth and religion together?', 'Is it freedom and democracy together?'],
    meaning: 'Bolívar names morals and justice as the bases of law.',
    trapIdx: 1,
    trap: 'B uses words that sound like Bolívar, and he does mention liberty, but as a result of justice. His two bases are morals and justice.'
  };

  W['u5_5.2_12'] = {
    type: 'context',
    hq: 'accomplished which of the following',
    look: 'Bolívar speaks to the Congress of Angostura, which created a new republic in 1819.',
    src: [
      { tag: 'WHO', since: 'Bolívar led independence in northern South America', therefore: 'look for what he founded' },
      { tag: 'WHAT', since: 'the congress united Venezuela and New Granada', therefore: 'he built Gran Colombia' }
    ],
    read: ['A leader speaking to a new congress', 'A general reporting on the War of 1812', 'A soldier writing during the 1898 war'],
    plain: ['What did Bolívar build?', 'Did he win the War of 1812?', 'Did he win the Spanish-American War?'],
    meaning: 'Bolívar created Gran Colombia, the first union of independent Latin American states.',
    trapIdx: 3,
    trap: 'D sounds bold, but Bolívar was a creole, and the first mixed-race leaders to win power were in Haiti. His achievement was Gran Colombia.'
  };

  W['u5_5.2_13'] = {
    type: 'bestillustrates',
    hq: 'Taken together, the two sources best illustrate',
    look: 'Gran Colombia gives power to a President and Congress; Brazil’s government is "a Hereditary Monarchy, constitutional, and Representative."',
    src: [
      { tag: 'WHAT', since: 'both are written founding laws', therefore: 'they are constitutions' },
      { tag: 'HOW', since: 'both set up representatives', therefore: 'the shared idea is representative government' }
    ],
    read: ['Two new nations writing constitutions', 'Two generals taking power by force from congress', 'Two kings claiming power from God'],
    plain: ['What do both governments share?', 'Did both give power to a monarch?', 'Did generals overthrow both?'],
    meaning: 'A republic and a constitutional monarchy both set up written, representative government.',
    trapIdx: 1,
    trap: 'B fits Brazil but not Gran Colombia, which had a president. "Taken together" means it must fit both.'
  };

  W['u5_5.2_15'] = {
    type: 'causation',
    hq: 'most undermine the expectations expressed in Article 1',
    look: 'Article 1: "The Republics of Venezuela and New Granada are from this day on united in a single one."',
    src: [
      { tag: 'WHAT', since: 'Article 1 expects lasting unity', therefore: 'look for what split it apart' },
      { tag: 'WHEN', since: 'Gran Colombia broke up by 1831', therefore: 'regional leaders pulled away' }
    ],
    read: ['A law uniting two republics into one', 'A law splitting one country into two', 'A law ending slavery in Venezuela'],
    plain: ['What would break the union apart?', 'Would nationalism push for more unity?', 'Did slave revolts split the new states?'],
    meaning: 'Local elites wanted to rule their own regions, so Gran Colombia split into Venezuela, Colombia and Ecuador.',
    trapIdx: 0,
    trap: 'A sounds like a threat, but outside powers did not break up Gran Colombia. Regional leaders inside it did.'
  };

  W['u5_5.2_16'] = {
    type: 'bestillustrates',
    hq: 'inferences about religion',
    look: 'Article 5: Catholicism stays the religion of the Empire, but "followers of all other religions are allowed to worship" in private.',
    src: [
      { tag: 'WHAT', since: 'other religions may worship privately', therefore: 'Brazil allowed limited toleration' },
      { tag: 'WHO', since: 'the emperor rules by a constitution', therefore: 'it is not divine right' }
    ],
    read: ['A constitution allowing private worship', 'A constitution banning all other faiths', 'A constitution ending the state church'],
    plain: ['How did Brazil treat other faiths?', 'Did it demand one religion for all?', 'Did kings rule by divine right?'],
    meaning: 'Brazil kept a state church but let other faiths worship in private: religious toleration was spreading.',
    trapIdx: 0,
    trap: 'A reads only the first line of Article 5. The second line allows other religions, so uniformity was not required.'
  };

  W['u5_5.3_1'] = {
    type: 'causation',
    hq: 'most directly contributed to industrialization by',
    hs: ['raising food production while pushing many small farmers off the land'],
    src: [
      { tag: 'WHAT', since: 'more food was grown', therefore: 'the population could grow' },
      { tag: 'WHO', since: 'small farmers lost their land', therefore: 'they moved to towns looking for work' }
    ],
    read: ['New farming that pushed farmers off land', 'New laws that gave small farmers more of their own land', 'A famine that emptied the countryside'],
    plain: ['How did enclosure help factories?', 'Did it end trade with the colonies?', 'Did it shrink Britain’s population?'],
    meaning: 'Enclosure grew more food and pushed farmers off the land: food for a bigger population and workers for factories.',
    trapIdx: 3,
    trap: 'D is the opposite: the passage says small farmers were pushed off the land.'
  };

  W['u5_5.3_4'] = {
    type: 'causation',
    hq: 'help explain the size and composition of the workforce',
    hs: ['Bayer employs 3,500 people alone at its plant in Leverkusen'],
    src: [
      { tag: 'WHERE', since: 'Leverkusen was a small inland town', therefore: 'workers had to come from somewhere else' },
      { tag: 'HOW', since: 'railroads linked inland towns', therefore: 'people could move to the factory' }
    ],
    read: ['A historian describing a huge German plant', 'A worker describing a small family shop in Britain', 'A farmer describing a quiet village'],
    plain: ['How did workers reach an inland town?', 'Did colonial subjects move to Germany?', 'Did electricity draw the rich to farms?'],
    meaning: 'Railroads carried workers and chemists from farms and villages to inland factories like Bayer’s.',
    trapIdx: 2,
    trap: 'C sounds modern, but the telegraph sent messages, not people. Most of the 3,500 workers were local laborers, not recruits from across the world.'
  };

  W['u5_5.3_7'] = {
    type: 'causation',
    hq: 'deprived them of the opportunity of bringing up their children to labour',
    look: 'Machines have "thrown thousands of your petitioners out of employ"; one machine "will do as much work in one day as would otherwise employ twenty men."',
    src: [
      { tag: 'WHO', since: 'hand workers are writing the petition', therefore: 'they are losing their trade to machines' },
      { tag: 'HOW', since: 'parents trained children in the family trade', therefore: 'no trade means nothing to pass on' }
    ],
    read: ['Hand workers protesting new machines', 'Factory owners praising new machines', 'Lawmakers banning child labor'],
    plain: ['Why can’t parents train their kids?', 'Did workers choose to have fewer kids?', 'Did new laws ban child labor?'],
    meaning: 'Children learned their parents’ trade. If machines make hand-scribbling obsolete, there is no trade to teach.',
    trapIdx: 3,
    trap: 'D jumps ahead. Child labor laws came decades later, and early factories hired many children.'
  };

  W['u5_5.4_1'] = {
    type: 'similar',
    hq: 'most similar to those for Japan',
    hs: ['1890 | 57 | 9.8% | 12.1%', '1910 | 88 | 23.1% | 31.9%'],
    src: [
      { tag: 'WHAT', since: 'industry jumps from 9.8% to 23.1% of output', therefore: 'Japan industrialized fast' },
      { tag: 'HOW', since: 'heavy industry nearly triples', therefore: 'look for another fast, state-backed industrializer' }
    ],
    read: ['A table of Japan’s fast industrial growth', 'A table of Japan’s farming output falling', 'A table of Japan’s trade with China'],
    plain: ['Who else industrialized fast then?', 'Did Qing China industrialize quickly?', 'Did the Ottomans industrialize quickly?'],
    meaning: 'Japan industrialized rapidly from 1890 to 1910. Newly united Germany did the same in those years.',
    trapIdx: 0,
    trap: 'A is Japan’s neighbor, but Qing China’s Self-Strengthening efforts were small and slow. Germany matched Japan’s speed.'
  };

  W['u5_5.4_6'] = {
    type: 'context',
    hq: 'best contextualizes the dramatic increases',
    look: 'Coal output rises from under 1,000 to about 13,000 thousand tons, and steamships from about 25 to 800, between the 1870s and 1905.',
    src: [
      { tag: 'WHEN', since: 'the growth runs from 1875 to 1905', therefore: 'it starts just after 1868' },
      { tag: 'WHAT', since: 'coal and steamships are industrial', therefore: 'look for the era of state-led industry' }
    ],
    read: ['Charts of Japan’s coal and ships rising', 'Charts of Japan’s coal and ships falling', 'Charts of Japan’s rice harvests'],
    plain: ['Which era drove this growth?', 'Was it the Tokugawa era before 1868?', 'Was it the Heian era of the 1100s?'],
    meaning: 'After 1868 the Meiji government built mines, shipyards and railways, so coal and steamships shot up.',
    trapIdx: 0,
    trap: 'A ended in 1868. The charts start in the 1870s, the Meiji years.'
  };

  W['u5_5.4_8'] = {
    type: 'similar',
    hq: 'different from industrialization in Europe',
    look: 'Both lines barely rise until the 1880s or 1890s, then climb steeply by 1905.',
    src: [
      { tag: 'WHEN', since: 'Japan’s rise takes about 30 years', therefore: 'compare that with Britain’s century and more' },
      { tag: 'HOW', since: 'Japan had few raw materials', therefore: 'cross out "did not need to import"' }
    ],
    read: ['Charts of Japan growing very fast', 'Charts of Europe growing very fast', 'Charts of Japan’s trade with Europe'],
    plain: ['How was Japan’s speed different?', 'Did Japan make very different goods than Europe?', 'Did Japan need no imports?'],
    meaning: 'Japan built in about thirty years an industrial economy that took Europe more than a century.',
    trapIdx: 3,
    trap: 'D is the opposite: Japan had little coal, iron or oil and had to import them, which later pushed it to expand.'
  };

  W['u5_5.4_9'] = {
    type: 'causation',
    hq: 'long-term effect of the rapid growth of Japanese shipbuilding',
    look: 'The steamship chart climbs from about 170 ships in 1894 to about 800 in 1905.',
    src: [
      { tag: 'WHEN', since: 'the chart ends in 1905', therefore: 'that is the year Japan beat Russia at sea' },
      { tag: 'WHAT', since: 'shipbuilding builds navies', therefore: 'Japan could match Western fleets' }
    ],
    read: ['A chart of Japan building many ships', 'A chart of Japan’s navy shrinking', 'A chart of Japan selling ships abroad'],
    plain: ['What could all those ships do?', 'Did Japan invent unmatched ships?', 'Did Japan defend German colonies?'],
    meaning: 'Shipbuilding gave Japan a modern navy that beat Russia at Tsushima in 1905.',
    trapIdx: 2,
    trap: 'C flips history. In World War I Japan fought Germany and seized its Pacific islands.'
  };

  W['u5_5.5_1'] = {
    type: 'bestillustrates',
    hq: 'best illustrates how industrial technology',
    hs: ['in minutes rather than weeks'],
    src: [
      { tag: 'WHAT', since: 'a cable crossed the Atlantic in 1866', therefore: 'Britain and the US could talk in minutes' },
      { tag: 'HOW', since: 'weeks became minutes', therefore: 'communication got much faster' }
    ],
    read: ['A cable making messages much faster', 'A cable making messages much slower', 'A cable ending Atlantic trade'],
    plain: ['What did the telegraph change?', 'Did it slow down communication?', 'Did it end trade with the Americas?'],
    meaning: 'The telegraph cut message time from weeks to minutes.',
    trapIdx: 0,
    trap: 'A twists the idea of older systems becoming obsolete. The new system made communication faster, not slower.'
  };

  W['u5_5.5_4'] = {
    type: 'causation',
    hq: 'Over the course of the nineteenth century, the risks',
    hs: ['18–50% per voyage | High'],
    src: [
      { tag: 'WHEN', since: 'the table covers 1750 to 1800', therefore: 'ships were still wooden sailing ships' },
      { tag: 'WHAT', since: 'voyages to Asia were high risk', therefore: 'ask what made sea travel safer after 1800' }
    ],
    read: ['A table of risky voyages to Asia', 'A table of safe voyages along the coast', 'A table of British land prices rising'],
    plain: ['What made voyages safer after 1800?', 'Did Asian navies threaten European ships?', 'Did new colonial powers raise the danger?'],
    meaning: 'Steamships did not depend on the wind, so trips were faster and more predictable. Lower danger meant lower risk for investors.',
    trapIdx: 3,
    trap: 'D has the right direction but the wrong reason. No international group wiped out piracy in the 1800s; steam power made the difference.'
  };

  W['u5_5.5_6'] = {
    type: 'bestillustrates',
    hq: 'long-term change to the English economy',
    look: 'The 1835 print shows a long mill hall of power looms driven by overhead belts, worked mostly by women.',
    src: [
      { tag: 'WHAT', since: 'one mill holds dozens of machines', therefore: 'work has moved into factories' },
      { tag: 'HOW', since: 'a long-term change shows across the whole country', therefore: 'look for evidence about where people lived and worked' }
    ],
    read: ['A print of women working power looms', 'A print of a family weaving cloth by hand at home', 'A print of farmers harvesting wheat'],
    plain: ['What shows a lasting national change?', 'Which companies made the most money from looms?', 'How did a power loom actually work?'],
    meaning: 'If people moved from farms to factory cities across England, factory work changed the whole economy for good.',
    trapIdx: 3,
    trap: 'D fits the women in the picture, but it is about one mill. A long-term change to the economy shows up in nationwide shifts.'
  };

  W['u5_5.6_0'] = {
    type: 'bestillustrates',
    hq: 'The policies described best illustrate',
    hs: ['the Japanese government built railroads and telegraph lines, set up model factories'],
    src: [
      { tag: 'WHO', since: 'the government built the railroads and factories', therefore: 'the state led the way' },
      { tag: 'HOW', since: 'it later sold factories to private firms', therefore: 'the state started industry, then handed it on' }
    ],
    read: ['A government building Japan’s industry', 'Foreign companies taking over Japan’s economy', 'Japan turning back to old crafts'],
    plain: ['Who drove Japan’s industry?', 'Did foreign firms lead it entirely?', 'Did Japan reject Western tools?'],
    meaning: 'The Meiji state built railways and factories itself: a government directly promoting industry.',
    trapIdx: 0,
    trap: 'A grabs the "foreign experts," but Japan hired them and kept control. "Entirely" makes it wrong.'
  };

  W['u5_5.6_2'] = {
    type: 'similar',
    hq: 'most directly differed from',
    hs: ['The perfectly legitimate objections of some people to chartered companies like ours'],
    src: [
      { tag: 'WHAT', since: 'the BSAC is a chartered company holding a huge territory', therefore: 'it works like an old mercantilist company' },
      { tag: 'WHY', since: 'he has to answer "objections" to chartered companies', therefore: 'the trend was toward free markets' }
    ],
    read: ['A chairman defending a chartered company', 'A worker attacking a railroad company over wages', 'A king granting land to farmers'],
    plain: ['Which trend does a charter go against?', 'Did Africa shift to resource extraction?', 'Did business become transnational?'],
    meaning: 'A government-chartered monopoly is a mercantilist model, unlike the century’s shift toward free trade.',
    trapIdx: 0,
    trap: 'A is a real trend, and the BSAC fits it: it was extracting African resources. The question asks what it differed from.'
  };

  W['u5_5.6_4'] = {
    type: 'causation',
    hq: 'contributed most directly to a change in Safavid production and export patterns',
    hs: ['Persia exports to the Indies an abundance of tobacco, all sorts of fruit, marmalade, wines, horses, ceramics'],
    src: [
      { tag: 'WHEN', since: 'it is 1686', therefore: 'Persia still exports its own crafts' },
      { tag: 'WHAT', since: 'the stem asks about a change after 1750', therefore: 'ask what undercut handmade goods' }
    ],
    read: ['A merchant listing Persia’s many exports', 'A shah banning all of Persia’s trade with Europe', 'A Persian buying British factory cloth'],
    plain: ['What undercut Persian crafts after 1750?', 'Did economic liberalization in Persia change it?', 'Did the silver trade change it?'],
    meaning: 'European factories made cloth, ceramics and metal far cheaper, undercutting Persian exports.',
    trapIdx: 3,
    trap: 'D is a real global process, but it began in the 1500s, before Chardin wrote. The change after 1750 was industrialization.'
  };

  W['u5_5.7_3'] = {
    type: 'causation',
    hq: 'These changes most directly encouraged',
    hs: ['investors could lose only the money they had put in'],
    src: [
      { tag: 'WHAT', since: 'investors risked only what they put in', therefore: 'investing became safer' },
      { tag: 'HOW', since: 'more people bought shares', therefore: 'companies could raise huge sums' }
    ],
    read: ['New laws making investing less risky', 'New laws banning private investment in industry', 'New laws taxing all stock trades'],
    plain: ['What did lower risk let companies do?', 'Did mercantilism return?', 'Did investors turn back to buying land instead?'],
    meaning: 'Lower risk drew more investors, so companies could raise the huge sums railroads and factories needed.',
    trapIdx: 0,
    trap: 'A is the opposite: these laws opened private investment, while mercantilism had restricted it.'
  };

  W['u5_5.7_4'] = {
    type: 'bestillustrates',
    hq: 'The developments described best illustrate',
    hs: ['department stores in Paris, London, and New York sold mass-produced clothing'],
    src: [
      { tag: 'WHAT', since: 'stores sell mass-produced goods', therefore: 'factories made goods cheap' },
      { tag: 'HOW', since: 'newspapers advertise brands', therefore: 'people are urged to buy more' }
    ],
    read: ['Stores and ads selling factory goods', 'A government rationing goods in wartime', 'Craft shops closing for lack of buyers'],
    plain: ['What new culture is forming?', 'Was the middle class shrinking?', 'Did advertising come to an end?'],
    meaning: 'Department stores and brand ads show a consumer culture built on mass production.',
    trapIdx: 1,
    trap: 'B is the opposite. The middle class was growing, and it was the main customer of department stores.'
  };

  W['u5_5.8_1'] = {
    type: 'bestillustrates',
    hq: 'The developments described best illustrate',
    hs: ['formed labor unions and organized strikes', 'Some governments responded with laws limiting working hours'],
    src: [
      { tag: 'WHO', since: 'workers formed unions and struck', therefore: 'workers organized' },
      { tag: 'HOW', since: 'governments passed laws in response', therefore: 'reform followed pressure' }
    ],
    read: ['Workers organizing and states reforming', 'Workers quitting factories to go back to farms', 'Factories using enslaved workers'],
    plain: ['How did workers and states respond?', 'Did industrialization come to an end?', 'Did the working class shrink?'],
    meaning: 'Workers organized unions and strikes, and governments answered with reforms like Bismarck’s insurance.',
    trapIdx: 3,
    trap: 'D overstates it. Some wages rose, but unions formed because conditions were harsh, and the working class grew.'
  };

  W['u5_5.8_5'] = {
    type: 'causation',
    hq: 'led to the creation of laws',
    look: 'Bismarck says the worker’s "real grievance" is insecurity: he may be sick, and "he will one day be old and unfit to work."',
    src: [
      { tag: 'WHO', since: 'Bismarck is Germany’s chancellor', therefore: 'he can turn the speech into law' },
      { tag: 'WHAT', since: 'he names illness and old age', therefore: 'the laws will cover health and old age' }
    ],
    read: ['A chancellor on workers’ insecurity', 'A union leader calling for a strike', 'A factory owner cutting wages'],
    plain: ['What laws answer illness and old age?', 'Did they limit factory hours?', 'Did they force older workers into early retirement?'],
    meaning: 'Bismarck created health insurance, accident insurance and old-age pensions.',
    trapIdx: 0,
    trap: 'A is a real reform of the era, but Bismarck’s speech names sickness and old age, not long hours.'
  };

  W['u5_5.8_7'] = {
    type: 'causation',
    hq: 'long-term effects of Otto von Bismarck’s speech',
    look: 'Bismarck says society "does not currently recognize any real obligation" to a sick or old worker beyond poor relief.',
    src: [
      { tag: 'WHAT', since: 'Germany created the first social insurance', therefore: 'other states could copy it' },
      { tag: 'WHEN', since: 'long-term means decades later', therefore: 'think of the welfare state' }
    ],
    read: ['A chancellor calling for worker insurance', 'A chancellor calling for a new war with France', 'A chancellor calling for lower taxes'],
    plain: ['What did Germany’s model spread to?', 'Did the German states split up again into pieces?', 'Did German output fall?'],
    meaning: 'Germany’s social insurance became a model for pensions and health insurance across Europe.',
    trapIdx: 2,
    trap: 'C confuses social insurance with communism. East Germany’s communist rule came after 1945 and had nothing to do with this speech.'
  };

  W['u5_5.9_0'] = {
    type: 'causation',
    hq: 'most directly a result of',
    hs: ['crowded, filthy, and unhealthy, with families packed into damp cellars'],
    src: [
      { tag: 'WHERE', since: 'Manchester was a booming factory city', therefore: 'people poured in for work' },
      { tag: 'WHAT', since: 'streets lacked drains and sewers', therefore: 'the city grew faster than it could build' }
    ],
    read: ['A writer on slums in a factory city', 'A writer on empty farms in Ireland after the famine', 'A writer on new government housing'],
    plain: ['Why were the cities so crowded?', 'Was English industry moving abroad?', 'Did new diseases cause it?'],
    meaning: 'Workers crowded into factory towns faster than housing and sewers could be built.',
    trapIdx: 2,
    trap: 'C is the opposite. There was almost no public housing in 1845; workers rented whatever they could afford.'
  };

  W['u5_5.9_1'] = {
    type: 'bestillustrates',
    hq: 'best illustrates which development of the industrial age',
    hs: ['Many working-class women, however, worked long hours in textile mills'],
    src: [
      { tag: 'WHO', since: 'middle-class women stayed home', therefore: 'one class followed "separate spheres"' },
      { tag: 'WHO', since: 'working-class women worked in mills', therefore: 'another class could not afford to' }
    ],
    read: ['Women’s work differing by class', 'Women winning equal pay in mills', 'Men and women sharing all work'],
    plain: ['How did class shape women’s roles?', 'Did differences between classes disappear?', 'Did women gain equal pay?'],
    meaning: 'Middle-class women stayed home while working-class women took factory jobs: class shaped gender roles.',
    trapIdx: 0,
    trap: 'A is the opposite: the passage is built on a difference between classes.'
  };

  W['u5_5.9_4'] = {
    type: 'bestillustrates',
    hq: 'The Reform Act of 1832 best illustrates',
    hs: ['gave many middle-class men in Britain the right to vote'],
    src: [
      { tag: 'WHO', since: 'middle-class men got the vote', therefore: 'the new industrial class gained power' },
      { tag: 'WHAT', since: 'working-class men still could not vote', therefore: 'it was a limited reform' }
    ],
    read: ['A law giving middle-class men votes', 'A law giving all adult men and women the vote', 'A law ending the British monarchy'],
    plain: ['Which class gained political power?', 'Did all men and women in Britain get to vote?', 'Did the monarchy end?'],
    meaning: 'The industrial middle class won the vote: its political power was growing.',
    trapIdx: 0,
    trap: 'A ignores the second half of the source: most working-class men still could not vote, and no women could.'
  };

  W['u5_5.9_5'] = {
    type: 'bestillustrates',
    hq: 'Source 1 suggests that which of the following was true',
    look: 'Pankhurst tells "American men in this meeting" that England must choose: "either women are to be killed or women are to have the vote."',
    src: [
      { tag: 'WHO', since: 'a British leader speaks to Americans', therefore: 'suffrage is an issue in more than one country' },
      { tag: 'WHEN', since: 'it is 1913', therefore: 'several nations had already given women the vote' }
    ],
    read: ['A British suffragist speaking in America', 'An American senator rejecting votes for women', 'A queen granting women the vote'],
    plain: ['How widespread was the suffrage fight?', 'Did Britain grant the vote first?', 'Did the United States go to civil war over it?'],
    meaning: 'A British leader rallying Americans shows that suffrage was a live fight across Western democracies.',
    trapIdx: 3,
    trap: 'D takes "our civil war" literally. Pankhurst means the militant campaign in Britain, not a war in the United States.'
  };

  W['u5_5.9_6'] = {
    type: 'context',
    hq: 'most directly influenced by which of the following ideologies',
    look: 'Capetillo tells the hacienda owner’s wife to visit "her peons, who produce the wealth she and her husband possess."',
    src: [
      { tag: 'WHO', since: 'Capetillo was a Puerto Rican labor organizer', therefore: 'she thinks in terms of workers and owners' },
      { tag: 'WHAT', since: 'workers "produce the wealth" owners keep', therefore: 'that is a Marxist idea' }
    ],
    read: ['A labor organizer on workers and owners', 'A nationalist on Puerto Rican pride and independence', 'A banker on profits and growth'],
    plain: ['Which ideology sees workers making wealth?', 'Is it nationalism, love of one’s own nation?', 'Is it capitalism, private ownership for profit?'],
    meaning: 'The idea that workers produce the wealth the owners keep comes from Marxism.',
    trapIdx: 2,
    trap: 'C fits Puerto Rico’s history, but Capetillo never mentions colonial rule. She writes about class: peons and owners.'
  };

  W['u5_5.9_7'] = {
    type: 'similar',
    hq: 'key distinction between the two sources',
    look: 'Capetillo writes about peons’ homes, wealth and "traditional customs"; Pankhurst says "you must give those women the vote."',
    src: [
      { tag: 'WHAT', since: 'Capetillo covers living conditions and customs', therefore: 'she writes about economic and social obstacles' },
      { tag: 'WHAT', since: 'Pankhurst asks for one thing', therefore: 'her focus is the vote' }
    ],
    read: ['Two women’s rights writers compared', 'Two writers who both oppose women’s votes', 'Two writers on factory safety'],
    plain: ['How do their focuses differ?', 'Does Capetillo say it can wait?', 'Is Pankhurst the cautious one?'],
    meaning: 'Capetillo writes about economic and social obstacles; Pankhurst argues specifically for the vote.',
    trapIdx: 3,
    trap: 'D gets Pankhurst wrong. She called herself a "Militant Suffragist" and talks of civil war; she was not a gradualist.'
  };

  W['u5_5.10_0'] = {
    type: 'bestillustrates',
    hq: 'best illustrates which change',
    hs: ['most British textiles were produced by machines in factories'],
    src: [
      { tag: 'WHERE', since: 'cloth was first made in rural homes', therefore: 'that is the starting point' },
      { tag: 'WHERE', since: 'by the 1800s it was made in factories', therefore: 'that is the change' }
    ],
    read: ['Cloth making moving into factories', 'Cloth making moving back into homes', 'Cloth making ending in Britain'],
    plain: ['Where did production move?', 'Did the textile trade decline?', 'Did global trade end?'],
    meaning: 'Textile work moved from homes (the putting-out system) into machine-filled factories.',
    trapIdx: 1,
    trap: 'B is the opposite: British textiles boomed. Production moved, it did not shrink.'
  };

  W['u5_5.10_1'] = {
    type: 'causation',
    hq: 'The change described is best explained by',
    hs: ['their combined share had fallen to well under one-tenth'],
    src: [
      { tag: 'WHEN', since: 'China and India led in 1750', therefore: 'something changed by 1900' },
      { tag: 'WHO', since: 'Britain, Germany and the US took over', therefore: 'they had industrialized' }
    ],
    read: ['Asia’s share of manufacturing collapsing', 'Asia’s share of world manufacturing growing fast', 'Europe’s factories closing down'],
    plain: ['Why did the West take the lead?', 'Did Chinese mills beat Britain’s?', 'Did Europe stop trading with Asia?'],
    meaning: 'Industrialization in the West made goods so cheaply that it took over world manufacturing: the Great Divergence.',
    trapIdx: 0,
    trap: 'A is the opposite: China’s share fell because British factory cloth outcompeted handmade goods.'
  };

  W['u5_5.10_2'] = {
    type: 'bestillustrates',
    hq: 'The passage best illustrates',
    hs: ['the great majority of people in Asia, Africa, and Latin America still made their living by farming'],
    src: [
      { tag: 'WHERE', since: 'factories spread in only a few regions', therefore: 'industry was uneven' },
      { tag: 'WHAT', since: 'most people still farmed', therefore: 'that did not change' }
    ],
    read: ['Most of the world still farming in 1900', 'Every country building factories by 1900', 'Farming ending around the world'],
    plain: ['What stayed the same?', 'Was the world fully industrial?', 'Did agriculture end?'],
    meaning: 'Most people still farmed: a continuity alongside the big changes in a few regions.',
    trapIdx: 0,
    trap: 'A is the opposite: the passage says most of the world still farmed.'
  };

  W['u5_5.10_3'] = {
    type: 'bestillustrates',
    hq: 'The developments described best illustrate',
    hs: ['plantation owners in many regions turned to indentured laborers from India and China'],
    src: [
      { tag: 'WHAT', since: 'slavery was abolished', therefore: 'that is a change' },
      { tag: 'HOW', since: 'indentured workers took their place under harsh terms', therefore: 'coerced labor continued' }
    ],
    read: ['Slavery ending, but forced labor going on', 'Slavery spreading to new factories and mines in Europe', 'All forced labor ending by 1900'],
    plain: ['What changed, and what stayed?', 'Did all coerced labor end by the late 1800s?', 'Did plantations decline?'],
    meaning: 'Slavery ended (change), but plantations kept using coerced indentured labor (continuity).',
    trapIdx: 1,
    trap: 'B fits the end of slavery but ignores the second half: indentured labor replaced it. The answer needs both.'
  };

  W['u5_5.10_4'] = {
    type: 'bestillustrates',
    hq: 'best supports which conclusion',
    hs: ['Russia remained an absolute monarchy ruled by tsars throughout the 1800s', 'emancipated the serfs in 1861'],
    src: [
      { tag: 'WHAT', since: 'the tsars kept absolute power', therefore: 'traditional rule continued' },
      { tag: 'HOW', since: 'the serfs were freed in 1861', therefore: 'there was some reform' }
    ],
    read: ['Russia keeping tsars but freeing serfs', 'Russia becoming a constitutional republic in 1861', 'Russia’s serfs staying unfree'],
    plain: ['What did Russia keep, and change?', 'Did revolution change every state?', 'Did Russia become a republic?'],
    meaning: 'Russia kept autocracy but made a limited reform by freeing the serfs.',
    trapIdx: 3,
    trap: 'D ignores the second half of the passage: Alexander II freed the serfs in 1861.'
  };

  /* ============ UNIT 6 ============ */
  W['u6_6.1_4'] = {
    type: 'similar',
    hq: 'differed from Charles Darwin\'s actual scientific theory',
    hs: ['took Darwin\'s insights about natural selection and applied them to human societies and nations'],
    src: [
      { tag: 'WHAT', since: 'Darwin studied plants and animals', therefore: 'his theory was biology' },
      { tag: 'HOW', since: 'Spencer applied it to nations and races', therefore: 'Social Darwinism used it to justify conquest' }
    ],
    read: ['A summary of a misuse of Darwin', 'A summary of Darwin’s own field work on islands', 'A summary of a religious attack on evolution'],
    plain: ['What did it add to Darwin?', 'Did it deny that species change over time?', 'Did it say technology decides which nations win?'],
    meaning: 'Darwin wrote about species. Social Darwinism applied his ideas to nations and races to justify conquest.',
    trapIdx: 0,
    trap: 'A is the opposite: Social Darwinists embraced natural selection. They just misapplied it to people.'
  };

  W['u6_6.1_7'] = {
    type: 'purpose',
    hq: 'suggests which of the following about England',
    look: 'Barker’s 1863 painting, titled The Secret of England’s Greatness, shows Queen Victoria handing a Bible to a kneeling African ruler.',
    src: [
      { tag: 'WHAT', since: 'the title calls the Bible England’s "secret"', therefore: 'it claims empire rests on faith' },
      { tag: 'WHO', since: 'the African ruler kneels to receive it', therefore: 'empire is shown as a gift' }
    ],
    read: ['A painting of empire as a moral gift', 'A painting of a queen at war in Africa', 'A painting of an African king in London on trade business'],
    plain: ['How does it justify empire?', 'Did Victorians reject all other religions?', 'Did Britain depend on the slave trade then?'],
    meaning: 'The queen handing a Bible to a kneeling ruler presents empire as spreading Christianity: a moral justification.',
    trapIdx: 3,
    trap: 'D is out of date. Britain abolished its slave trade in 1807, more than fifty years before this painting.'
  };

  W['u6_6.1_9'] = {
    type: 'purpose',
    hq: 'reflect which of the following attitudes',
    look: 'Ferry says "the superior races have a right because they have a duty. They have the duty to civilize the inferior races."',
    src: [
      { tag: 'WHO', since: 'Ferry was a French prime minister', therefore: 'he is defending French colonies' },
      { tag: 'WHAT', since: 'he talks of a "civilizing duty"', therefore: 'he says colonies gain from French culture' }
    ],
    read: ['A French leader on a duty to "civilize"', 'An African leader asking France for schools', 'A French merchant counting profits from colonies'],
    plain: ['What does "civilize" claim?', 'Is this line about profits for European nations?', 'Is this line about ports for French ships?'],
    meaning: 'The racial language claims Africans would benefit from European culture: the "civilizing mission."',
    trapIdx: 1,
    trap: 'B is in Source 2 (Ferry wants harbors), but that is a separate argument. The "superior races" line is about civilizing.'
  };

  W['u6_6.2_8'] = {
    type: 'purpose',
    hq: 'best support the author’s assertion',
    hs: ['the Japanese and Korean peoples formed for a long time one and the same nation'],
    src: [
      { tag: 'WHO', since: 'a Japanese official writes in 1912', therefore: 'he is justifying the annexation of Korea' },
      { tag: 'WHAT', since: 'he claims the two were one nation', therefore: 'support would show a shared people' }
    ],
    read: ['An official justifying the Korea annexation', 'A Korean leader protesting the Japanese takeover', 'A historian listing wars between Japan and Korea'],
    plain: ['What would show one shared people?', 'Would a list of language differences help?', 'Would records of war casualties help?'],
    meaning: 'To support "one nation," you need evidence of a shared people, like names common to both.',
    trapIdx: 0,
    trap: 'A is about language, which sounds relevant, but differences between the languages would weaken the claim, not support it.'
  };

  W['u6_6.2_9'] = {
    type: 'causation',
    hq: 'accelerated by which of the following',
    hs: ['tropical or sub-tropical lands in which white men will not settle with their families'],
    src: [
      { tag: 'WHO', since: 'Hobson blamed financial interests for empire', therefore: 'look for an economic prize' },
      { tag: 'WHERE', since: 'the Boer Transvaal held huge gold deposits', therefore: 'Britain wanted control of them' }
    ],
    read: ['An economist criticizing the new empires', 'A soldier praising the empire in South Africa', 'A missionary praising the work of colonial schools'],
    plain: ['What made South Africa so valuable?', 'Were there fears of rebellion in British colonies?', 'Did Britain need bases for World War I?'],
    meaning: 'Gold found in the Boer republics in 1886 drew British miners and investors and led to the Boer War.',
    trapIdx: 3,
    trap: 'D sounds possible because Germany held South-West Africa, but gold was the driving force behind British moves in South Africa.'
  };

  W['u6_6.2_11'] = {
    type: 'context',
    hq: 'best understood in the context of',
    hs: ['Politically, the new Imperialism is an expansion of autocracy'],
    src: [
      { tag: 'WHEN', since: 'it was published in 1902', therefore: 'look for an event right then' },
      { tag: 'WHO', since: 'Hobson reported on the war in South Africa', therefore: 'the Boer War shaped his views' }
    ],
    read: ['A 1902 critic attacking British empire', 'An 1884 diplomat dividing Africa at a conference', 'A 1914 general planning a world war'],
    plain: ['Which war was ending in 1902?', 'Was it the Berlin Conference of 1884?', 'Was it World War I, starting in 1914?'],
    meaning: 'Hobson wrote as the Boer War ended, arguing that financiers had pushed Britain into it.',
    trapIdx: 0,
    trap: 'A divided Africa among Europeans, but it was in 1884 to 1885. Hobson wrote in 1902, as the Boer War ended.'
  };

  W['u6_6.2_12'] = {
    type: 'context',
    hq: 'Queen Victoria’s reign can best be characterized by',
    look: 'The painting shows Victoria as the face of empire, handing a Bible to an African ruler while her ministers watch.',
    src: [
      { tag: 'WHEN', since: 'she reigned from 1837 to 1901', therefore: 'Parliament widened the vote twice' },
      { tag: 'WHO', since: 'elected ministers governed', therefore: 'the monarch’s real power shrank' }
    ],
    read: ['A painting of Victoria as empire’s symbol', 'A painting of Victoria losing her colonies abroad', 'A painting of a queen leading her army'],
    plain: ['How did Britain change under her?', 'Did Britain lose much of its empire then?', 'Did the British economy stagnate under her?'],
    meaning: 'Under Victoria, reforms widened the vote and the monarch became a figurehead while ministers governed.',
    trapIdx: 3,
    trap: 'D is half right. The empire grew in Africa, but it also grew in Asia: India became a Crown colony in 1858.'
  };

  W['u6_6.2_13'] = {
    type: 'causation',
    hq: 'boundary lines on the map',
    look: 'Source 1 shows Africa carved into British, French, Portuguese, Belgian, Italian and Spanish colonies, some with straight-line borders.',
    src: [
      { tag: 'WHO', since: 'each area is labeled by a European power', therefore: 'Europeans drew the lines' },
      { tag: 'HOW', since: 'many borders are straight lines', therefore: 'they ignore rivers and peoples on the ground' }
    ],
    read: ['A map of Africa split by Europe', 'A map of Africa’s rivers and mountain ranges', 'A map of the African kingdoms before 1800'],
    plain: ['Whose interests drew these lines?', 'Did the lines follow rivers and mountains?', 'Did the lines follow tribal divisions?'],
    meaning: 'Europeans drew Africa’s borders for their own economic and political claims, often in straight lines.',
    trapIdx: 1,
    trap: 'B fits a few borders, but the straight lines show the borders were drawn on maps in Europe, not by nature.'
  };

  W['u6_6.2_14'] = {
    type: 'causation',
    hq: 'effect of Japanese industrial and military strength',
    look: 'Japan’s coal output and steamship numbers both climb steeply from the 1880s to 1905.',
    src: [
      { tag: 'WHEN', since: 'the charts run to 1905', therefore: 'look for wars before then' },
      { tag: 'WHERE', since: 'Japan’s neighbors were China, Korea and Russia', therefore: 'cross out France and Britain' }
    ],
    read: ['Charts of Japan’s growing industrial power', 'Charts of Japan’s shrinking industry and trade', 'Charts of Japan’s rice harvests over time'],
    plain: ['Which war did Japan win early on?', 'Did Japan win Siberia from Russia?', 'Did Japan take Indochina from France?'],
    meaning: 'Japan defeated Qing China in 1894 to 1895 over influence in Korea.',
    trapIdx: 0,
    trap: 'A is close: Japan did beat Russia in 1905, but the fight was over Manchuria and Korea, not Siberia.'
  };

  W['u6_6.2_16'] = {
    type: 'context',
    hq: 'conflict between France and which of the following entities',
    look: 'Auclert says schools for girls existed "prior to the [1830] conquest" of Algeria.',
    src: [
      { tag: 'WHEN', since: 'the conquest began in 1830', therefore: 'the Mughal, Safavid and Songhai empires were gone' },
      { tag: 'WHO', since: 'Algiers was ruled by a dey under the sultan', therefore: 'it was part of the Ottoman Empire' }
    ],
    read: ['A feminist on French rule in Algeria', 'A French general on conquering Egypt', 'An Algerian ruler on his alliance with France'],
    plain: ['Who ruled Algeria before 1830?', 'Was it the Safavid Empire of Persia?', 'Was it the Songhai Empire of West Africa?'],
    meaning: 'Algiers was an Ottoman regency when France invaded in 1830.',
    trapIdx: 3,
    trap: 'D is African and Muslim, but Songhai fell in 1591, more than two centuries before the French invaded.'
  };

  W['u6_6.2_17'] = {
    type: 'causation',
    hq: 'contributed LEAST',
    look: 'Rodney says European capitalists "actively extended their exploitation from inside Europe to cover the whole of Africa."',
    src: [
      { tag: 'WHAT', since: 'LEAST flips the question', therefore: 'three choices really helped conquest' },
      { tag: 'HOW', since: 'Europeans used quinine, a medicine, not a vaccine', therefore: 'no malaria vaccine existed' }
    ],
    read: ['A historian blaming Europe for Africa’s state', 'A historian praising Europe’s medicine in Africa', 'An explorer describing a river trip in Africa'],
    plain: ['Which one did NOT help conquest?', 'Did the machine gun help Europeans conquer?', 'Did steamships help Europeans move inland?'],
    meaning: 'Machine guns, steamships and chartered companies all helped. There were no vaccines for tropical diseases.',
    trapIdx: 2,
    trap: 'C sounds like a business detail, but companies like the Royal Niger Company ran whole colonies. It did help.'
  };

  W['u6_6.2_18'] = {
    type: 'causation',
    hq: 'used by the British government to do which of the following',
    look: 'The settler is suing the government over damage "by a contingent of 1,500 natives" camped near his farm.',
    src: [
      { tag: 'WHO', since: 'British settlers complained of threats', therefore: 'officials could point to them' },
      { tag: 'WHEN', since: 'Britain sent the Zulu king an ultimatum in 1878', therefore: 'the threats justified the war' }
    ],
    read: ['A settler describing damage near his farm', 'A Zulu chief describing a British attack', 'An official reporting peace with the Zulu'],
    plain: ['What did such incidents justify?', 'Did Britain tax the Zulu for the damage?', 'Did Britain free the Zulu from colonialism?'],
    meaning: 'Britain pointed to threats to settlers as a casus belli, a reason to go to war with the Zulu kingdom.',
    trapIdx: 1,
    trap: 'B sounds like a fix for damages, but Britain did not tax the Zulu; it invaded them in 1879.'
  };

  W['u6_6.2_20'] = {
    type: 'causation',
    hq: 'direct effect of the expanding British presence in South Africa',
    look: 'A British settler in 1879 describes the war with the Zulu reaching his town and farm.',
    src: [
      { tag: 'WHERE', since: 'Britain pushed inland in South Africa', therefore: 'it collided with the Boer republics' },
      { tag: 'WHO', since: 'Boers were descendants of Dutch settlers', therefore: 'the war was the Boer War' }
    ],
    read: ['A settler’s letter during a colonial war', 'A Boer farmer’s letter about the gold rush', 'A diplomat’s letter from Berlin about Africa'],
    plain: ['Which war did British expansion cause?', 'Did Britain lose land at the Berlin Conference?', 'Did British settlers form their own nation?'],
    meaning: 'British expansion toward the gold-rich Boer republics led to the Boer War against the Afrikaners.',
    trapIdx: 0,
    trap: 'A overstates it. South Africa was rich, but nothing shows it was the most successful colony. The war is the direct effect.'
  };

  W['u6_6.2_21'] = {
    type: 'bestillustrates',
    hq: 'most likely the outcome of the conflict',
    look: 'China recognizes "the full and complete independence" of Korea and "cedes to Japan in perpetuity" southern Fengtien and Formosa.',
    src: [
      { tag: 'WHAT', since: 'China gives up land and its hold on Korea', therefore: 'China is the loser' },
      { tag: 'WHO', since: 'Japan gains everything', therefore: 'Japan won the war' }
    ],
    read: ['A treaty where China gives up land', 'A treaty where Japan gives up land to China', 'A treaty where both sides trade islands equally'],
    plain: ['Who won, judging by the terms?', 'Did the war end in a stalemate?', 'Did China defeat the Japanese army?'],
    meaning: 'China gives up Korea, Taiwan and land in Manchuria: the terms of a loser. Japan won.',
    trapIdx: 1,
    trap: 'B misreads the polite opening ("desiring to restore the blessings of peace"). The terms show one clear winner.'
  };

  W['u6_6.2_23'] = {
    type: 'context',
    hq: 'continuities of nineteenth-century Chinese history',
    look: 'China "cedes to Japan in perpetuity" territory "together with all fortifications, arsenals, and public property."',
    src: [
      { tag: 'WHAT', since: 'China gives up land again', therefore: 'look for a pattern across the century' },
      { tag: 'WHEN', since: 'it began with Nanjing in 1842', therefore: 'Shimonoseki in 1895 continues it' }
    ],
    read: ['A treaty forcing China to give up land', 'A treaty expanding China’s empire in Asia', 'A treaty making China a communist state'],
    plain: ['What kept happening to China?', 'Was China expanding its military power?', 'Was China moving toward communism?'],
    meaning: 'From 1842 to 1895, a weak Qing China kept giving land and spheres of influence to foreign powers.',
    trapIdx: 2,
    trap: 'C is far too early. The Communists took over China in 1949.'
  };

  W['u6_6.3_1'] = {
    type: 'bestillustrates',
    hq: 'Samori Touré\'s actions best illustrate',
    hs: ['resisted French conquest for nearly two decades'],
    src: [
      { tag: 'WHO', since: 'Samori built an army with firearms', therefore: 'he fought with modern weapons' },
      { tag: 'WHAT', since: 'he held off France for twenty years', therefore: 'it is armed resistance' }
    ],
    read: ['A West African leader fighting France', 'A West African king working with France', 'A missionary opening schools in Africa'],
    plain: ['What did Samori do?', 'Did he work with the French against Britain?', 'Did he spread Christianity in West Africa?'],
    meaning: 'Samori built a modern army and resisted French conquest for nearly twenty years.',
    trapIdx: 0,
    trap: 'A is the opposite: the passage says he resisted French conquest.'
  };

  W['u6_6.3_6'] = {
    type: 'bestillustrates',
    hq: 'useful source for information about',
    look: 'The settler’s insured house would not be covered, "as the insurance companies will not make good that which is destroyed by the Queen’s enemies."',
    src: [
      { tag: 'WHO', since: 'he is a British settler', therefore: 'he is not an Afrikaner' },
      { tag: 'WHAT', since: 'his property is uninsured and damaged', therefore: 'empire brought costs he did not expect' }
    ],
    read: ['A settler surprised by war’s costs', 'An Afrikaner describing his daily farm work', 'A merchant boasting about colonial profits'],
    plain: ['What does the letter reveal?', 'Does it show the culture spreading in Africa?', 'Does it show daily life for Afrikaners?'],
    meaning: 'The letter shows unexpected costs of empire, even for the settlers themselves.',
    trapIdx: 2,
    trap: 'C misreads the writer. He is a British citizen writing to his sister, not an Afrikaner.'
  };

  W['u6_6.4_0'] = {
    type: 'causation',
    hq: 'most directly contributed to',
    hs: ['cut the sea route from London to Bombay by about 40 percent', 'undersea telegraph cables linked Britain to India'],
    src: [
      { tag: 'WHAT', since: 'ships and messages moved much faster', therefore: 'trade and control got easier' },
      { tag: 'WHERE', since: 'it linked Britain to India', therefore: 'it tied an empire together' }
    ],
    read: ['Faster links between Britain and India', 'Slower trade routes between Europe and Asia', 'India breaking away from British rule'],
    plain: ['What did faster links make easier?', 'Did British trade with Asia decline after?', 'Did India become independent in the 1800s?'],
    meaning: 'Faster shipping and instant messages tied colonies more closely to the empire and to world markets.',
    trapIdx: 2,
    trap: 'C is decades off. India won independence in 1947, and these links made British control stronger, not weaker.'
  };

  W['u6_6.4_1'] = {
    type: 'bestillustrates',
    hq: 'Economies like these are best described as',
    hs: ['mostly to industrial Europe and the United States'],
    src: [
      { tag: 'WHAT', since: 'they export beef, coffee, rubber and nitrates', therefore: 'these are raw materials' },
      { tag: 'WHO', since: 'industrial nations buy them', therefore: 'Latin America depends on those buyers' }
    ],
    read: ['Latin America exporting raw goods', 'Latin America exporting factory-made goods', 'Latin America closing its ports to trade'],
    plain: ['What did these economies depend on?', 'Were they highly industrialized exporters?', 'Were they closed off by high tariffs?'],
    meaning: 'They depended on selling raw materials to industrial nations and buying their manufactured goods.',
    trapIdx: 0,
    trap: 'A is the opposite. Beef, wheat, coffee and nitrates are raw materials, not finished goods.'
  };

  W['u6_6.4_3'] = {
    type: 'causation',
    hq: 'most directly contributed to',
    hs: ['The railroads transported cotton, rubber, and minerals outward; they carried manufactured goods inward'],
    src: [
      { tag: 'WHAT', since: 'raw goods went out and factory goods came in', therefore: 'railroads served the empires' },
      { tag: 'HOW', since: 'interiors were "opened to commercial exploitation"', therefore: 'colonies were tied into a global economy' }
    ],
    read: ['Railroads moving raw goods out of colonies', 'Railroads helping colonies trade with each other', 'Railroads spreading democracy in colonies'],
    plain: ['What system did railroads build?', 'Did railroads make colonies economically independent?', 'Did colonial goods undercut European factories?'],
    meaning: 'Railroads pulled raw materials out of colonies and pushed factory goods in, deepening the gap between them.',
    trapIdx: 0,
    trap: 'A sounds like a benefit, but the passage says the lines ran outward to ports, not between local markets.'
  };

  W['u6_6.5_1'] = {
    type: 'bestillustrates',
    hq: 'The events best illustrate',
    hs: ['Heavily in debt to European banks', 'Britain occupied Egypt, in part to protect the canal and European creditors'],
    src: [
      { tag: 'WHAT', since: 'Egypt sold its canal shares to pay debts', therefore: 'debt gave Britain a foothold' },
      { tag: 'HOW', since: 'Britain then occupied Egypt', therefore: 'debt opened the door to control' }
    ],
    read: ['Debt leading to British control of Egypt', 'Egypt defeating Britain in battle', 'Egypt buying back the Suez Canal from Britain'],
    plain: ['How did debt lead to empire?', 'Did Egypt successfully resist Europe?', 'Did the Ottomans seize British posts?'],
    meaning: 'Egypt’s debts gave Britain leverage, and Britain ended up occupying the country.',
    trapIdx: 1,
    trap: 'B names a real Egyptian ruler, but Muhammad Ali died in 1849. By 1882 Egypt was occupied, not resisting successfully.'
  };

  W['u6_6.5_2'] = {
    type: 'bestillustrates',
    hq: 'This situation is best described as',
    hs: ['even though Argentina was politically independent'],
    src: [
      { tag: 'WHO', since: 'British investors owned railroads and ports', therefore: 'Britain had economic power' },
      { tag: 'WHAT', since: 'Argentina was independent', therefore: 'there was no formal colony' }
    ],
    read: ['British investors owning Argentine railroads', 'British governors ruling Argentina directly', 'British farmers settling the Argentine plains'],
    plain: ['What kind of influence is this?', 'Is it formal rule by appointed governors?', 'Is it settler colonialism by farmers?'],
    meaning: 'Britain held economic power in Argentina without ruling it: economic imperialism.',
    trapIdx: 1,
    trap: 'B ignores the key phrase: Argentina was politically independent, so there were no British governors.'
  };

  W['u6_6.5_5'] = {
    type: 'causation',
    hq: 'negative short-term effect',
    look: 'Ferry claims Europeans fulfill their "civilizing duty" with "generosity" and "sincerity," while Source 1 shows Africa divided among them.',
    src: [
      { tag: 'WHAT', since: 'the stem asks for a negative effect', therefore: 'cross out the claimed benefits' },
      { tag: 'HOW', since: 'colonial taxes forced farmers to grow cash crops', therefore: 'less food was grown' }
    ],
    read: ['A map of colonies and a defense of them', 'A map of trade routes and a merchant’s diary', 'A map of independent states and a treaty'],
    plain: ['What harm did colonization cause?', 'Did Europeans build roads and railways?', 'Did missionaries build schools in Africa?'],
    meaning: 'Farmers forced to grow export crops grew less food, which led to famines.',
    trapIdx: 1,
    trap: 'B really happened, but it is often listed as a benefit. The stem asks for a negative effect.'
  };

  W['u6_6.6_2'] = {
    type: 'causation',
    hq: 'Which pull factor most directly explains this migration',
    hs: ['to work in the gold mines and to build the Central Pacific Railroad'],
    src: [
      { tag: 'WHAT', since: 'they came for mines and railroads', therefore: 'jobs pulled them' },
      { tag: 'HOW', since: 'a pull factor draws people to a place', therefore: 'look at what California offered' }
    ],
    read: ['Chinese workers coming for jobs in America', 'Chinese students coming to American colleges', 'Chinese monks fleeing to American temples'],
    plain: ['What drew them to California?', 'Did they come for religious freedom as Buddhists?', 'Did they come for free land under the Homestead Act?'],
    meaning: 'Gold mining and railroad building created a demand for workers and the chance to earn wages.',
    trapIdx: 3,
    trap: 'D is a push factor, and it is in the wrong decade. The Qing dynasty did not fall until 1911.'
  };

  W['u6_6.6_3'] = {
    type: 'causation',
    hq: 'best explained by which combination of push and pull factors',
    hs: ['fleeing the potato famine that killed approximately one million more', 'Irish immigrants provided labor for the eastern transcontinental railroad'],
    src: [
      { tag: 'WHAT', since: 'the Irish fled famine', therefore: 'the push was economic disaster' },
      { tag: 'WHAT', since: 'railroads needed workers', therefore: 'the pull was labor demand' }
    ],
    read: ['Famine and jobs driving migration', 'Religious refugees seeking freedom', 'Political exiles seeking asylum'],
    plain: ['What pushed and pulled them?', 'Was it religious persecution at home?', 'Did the US government recruit them directly?'],
    meaning: 'Disaster at home (famine, poverty) pushed people out; huge demand for labor in the United States pulled them in.',
    trapIdx: 3,
    trap: 'D sounds plausible because the railroads needed workers, but the companies recruited them, not the US government.'
  };

  W['u6_6.7_0'] = {
    type: 'bestillustrates',
    hq: 'Neighborhoods like these best illustrate',
    hs: ['had their own newspapers, temples or churches, shops, and mutual-aid societies'],
    src: [
      { tag: 'WHO', since: 'migrants kept their own temples and newspapers', therefore: 'they preserved their culture' },
      { tag: 'WHERE', since: 'they lived together in one area', therefore: 'it is an ethnic enclave' }
    ],
    read: ['Migrant neighborhoods keeping old ways', 'Migrants fully blending into US culture', 'Governments closing migrant businesses'],
    plain: ['What did these neighborhoods do?', 'Did migrants assimilate completely?', 'Did migration from Asia and Europe decline?'],
    meaning: 'Migrants formed ethnic enclaves that kept their languages, religions and customs alive.',
    trapIdx: 0,
    trap: 'A is the opposite. Their own newspapers and temples show they kept their cultures, not that they fully assimilated.'
  };

  W['u6_6.7_2'] = {
    type: 'causation',
    hq: 'The pattern described best illustrates',
    hs: ['women took on more responsibility for farming and family businesses at home'],
    src: [
      { tag: 'WHO', since: 'mostly young men left', therefore: 'women stayed behind' },
      { tag: 'WHAT', since: 'women ran farms and businesses', therefore: 'gender roles changed at home' }
    ],
    read: ['Migration changing women’s roles at home', 'Whole villages leaving southern Italy at once', 'Mostly women leaving their villages'],
    plain: ['How did migration change home?', 'Did family farming end as villages emptied?', 'Were most of the migrants women?'],
    meaning: 'With the men gone, women took over farms and businesses: migration changed gender roles at home.',
    trapIdx: 3,
    trap: 'D is the opposite: the passage says most migrants were young men.'
  };

  W['u6_6.7_4'] = {
    type: 'bestillustrates',
    hq: 'most directly illustrate which effect',
    hs: ['Diaspora communities simultaneously preserved home cultures and created hybrid new ones'],
    src: [
      { tag: 'WHAT', since: 'Indians kept temples and Diwali', therefore: 'they preserved their culture' },
      { tag: 'HOW', since: 'shopkeepers mixed Creole and Cantonese', therefore: 'they also made new hybrid cultures' }
    ],
    read: ['Diasporas keeping and mixing cultures', 'Migrants losing their cultures completely', 'Migrants all returning home'],
    plain: ['What two things did diasporas do?', 'Did migrants assimilate fully and quickly?', 'Were diaspora cultures destroyed by force?'],
    meaning: 'Diaspora communities kept their home cultures and also made new mixed ones.',
    trapIdx: 0,
    trap: 'A is the opposite. Temples, festivals and mixed languages show the communities kept their cultures.'
  };

  W['u6_6.8_0'] = {
    type: 'causation',
    hq: 'These technologies most directly contributed to',
    hs: ['used quinine to protect themselves from malaria and used machine guns'],
    src: [
      { tag: 'WHAT', since: 'quinine let Europeans survive malaria', therefore: 'they could go inland' },
      { tag: 'HOW', since: 'machine guns gave huge firepower', therefore: 'they could defeat African armies' }
    ],
    read: ['Medicine and guns helping Europe conquer', 'African armies using machine guns on Europeans', 'Britain patrolling for slave ships'],
    plain: ['What did these tools make possible?', 'Did Africans conquer European coastal colonies?', 'Did these tools end the Atlantic slave trade?'],
    meaning: 'Quinine and machine guns let Europeans conquer most of Africa quickly.',
    trapIdx: 1,
    trap: 'B is the reverse. Europeans used the machine guns against African armies.'
  };

  W['u6_6.8_1'] = {
    type: 'causation',
    hq: 'most directly encouraged',
    hs: ['much of which came from tropical regions'],
    src: [
      { tag: 'WHAT', since: 'factories needed cotton, palm oil and rubber', therefore: 'they needed steady supplies' },
      { tag: 'WHERE', since: 'those came from the tropics', therefore: 'Europe wanted to control those lands' }
    ],
    read: ['Factories needing tropical raw goods', 'Factories growing their own raw goods', 'Colonies becoming useless to Europe'],
    plain: ['What did factory needs push Europe to do?', 'Did European demand for imports fall?', 'Did colonialism end because colonies weren’t needed?'],
    meaning: 'Factories needed tropical raw materials, so European states tried to control the lands that produced them.',
    trapIdx: 2,
    trap: 'C is the opposite: industry made colonies more valuable, not less.'
  };

  W['u6_6.8_3'] = {
    type: 'causation',
    hq: 'most directly supports which argument',
    hs: ['It was the factory', 'European industry had outgrown European markets'],
    src: [
      { tag: 'WHAT', since: 'it says empire was driven by "the factory"', therefore: 'the cause is economic' },
      { tag: 'HOW', since: 'industry needed coal, cotton, ore and markets', therefore: 'industry pushed expansion' }
    ],
    read: ['A historian tying empire to industry', 'A historian tying empire to missionaries', 'A historian tying empire to European workers'],
    plain: ['What drove expansion, per the passage?', 'Was it mainly religious missionary work?', 'Did workers back empire for higher wages?'],
    meaning: 'Industry needed raw materials, markets and places to invest, and that drove territorial expansion.',
    trapIdx: 3,
    trap: 'D sounds economic, but the passage says Europe wanted colonies for raw materials and markets, not to industrialize them.'
  };

  W['u6_6.8_4'] = {
    type: 'similar',
    hq: 'best used to support which historical claim',
    hs: ['the underlying relationship showed a disturbing continuity'],
    src: [
      { tag: 'WHEN', since: 'it compares the 1440s and the 1880s', therefore: 'it is a continuity and change argument' },
      { tag: 'WHAT', since: 'the tools changed but extraction did not', therefore: 'the continuity is economic exploitation' }
    ],
    read: ['A comparison across 400 years of contact', 'A history of one Portuguese voyage to West Africa', 'A study of African resistance only'],
    plain: ['What stayed the same over 400 years?', 'Were the two eras exactly the same?', 'Was Portuguese colonialism worse than British rule?'],
    meaning: 'Tools changed, but extracting African resources and labor for Europe stayed the same.',
    trapIdx: 0,
    trap: 'A goes too far. The passage says the tools changed. It argues for continuity in one relationship, not that nothing differed.'
  };

  /* ============ UNIT 7 ============ */
  W['u7_7.1_2'] = {
    type: 'causation',
    hq: 'were significant in the period 1918-1945 in contributing to',
    hs: ['When the proposal to proclaim the equality of races was rejected', 'they are discriminated against because of the color of the skin'],
    src: [
      { tag: 'WHO', since: 'a former Japanese prime minister writes in 1921', therefore: 'he speaks for an Asian power treated as unequal' },
      { tag: 'WHAT', since: 'Western powers rejected racial equality', therefore: 'Asians had reason to resist Western rule' }
    ],
    read: ['A Japanese leader attacking Western racism', 'A Japanese leader praising Western ideas of race', 'A European diplomat defending the Versailles treaty'],
    plain: ['What did rejecting equality feed?', 'Did more Asians convert to Christianity?', 'Did Asian states adopt laissez-faire economics?'],
    meaning: 'When the West refused racial equality, anti-imperial resistance and independence movements grew stronger.',
    trapIdx: 3,
    trap: 'D is the reverse of the trend. European settlement in Asia was not growing; resistance to European rule was.'
  };

  W['u7_7.1_5'] = {
    type: 'causation',
    hq: 'most directly a response to',
    hs: ['the Holocaust (1941-45) killed approximately 6 million Jews and 6 million others', 'dehumanizing propaganda preceded and accompanied the violence'],
    src: [
      { tag: 'WHEN', since: 'the UNESCO statement came in 1949', therefore: 'it follows right after World War II' },
      { tag: 'WHAT', since: 'it calls race a social myth', therefore: 'it rejects Nazi racial ideas' }
    ],
    read: ['A list of 20th-century genocides', 'A list of colonial wars in Africa and Asia', 'A list of new nations formed after 1945'],
    plain: ['What made the world reject "race"?', 'Did the UN mainly want to celebrate diversity?', 'Did genetics prove race sets culture?'],
    meaning: 'After the Holocaust, UNESCO declared race a myth to reject the Nazi racial ideas behind the killing.',
    trapIdx: 0,
    trap: 'A sounds like UNESCO’s style, but the statement was a direct answer to Nazi racial science, not a celebration.'
  };

  W['u7_7.1_7'] = {
    type: 'context',
    hq: 'principal philosophical underpinning of Lenin’s call to power',
    look: 'Lenin urges revolutionaries to seize power "on behalf of" the Soviets and promises "the transfer of the land to the peasants."',
    src: [
      { tag: 'WHO', since: 'Lenin led the Bolsheviks', therefore: 'he was a Marxist revolutionary' },
      { tag: 'WHAT', since: 'he calls for workers’ councils to rule', therefore: 'it is a class revolution' }
    ],
    read: ['A revolutionary urging a seizure of power', 'A tsar giving up his crown to help win the war', 'A general calling for a war of conquest'],
    plain: ['Which ideology drove Lenin?', 'Was it capitalism and private property?', 'Was it fascism and extreme nationalism?'],
    meaning: 'Lenin’s Bolsheviks were Marxists calling for a workers’ revolution against the Provisional Government.',
    trapIdx: 2,
    trap: 'C is another 20th-century ideology of seizing power, but fascism was anti-communist and came after 1919.'
  };

  W['u7_7.2_3'] = {
    type: 'context',
    hq: 'best explained in the context of',
    hs: ['A general European war is mortally dangerous to both Russia and Germany', 'there are countless agitators telling the peasant'],
    src: [
      { tag: 'WHAT', since: 'he fears war abroad', therefore: 'there is an external threat' },
      { tag: 'WHAT', since: 'he fears agitators at home', therefore: 'there is an internal threat too' }
    ],
    read: ['A minister warning of war and revolution', 'A general eager for a quick victory over Germany', 'A revolutionary planning to seize power'],
    plain: ['What threatened the empires?', 'Was the Western-led order declining?', 'Were ethnic nation-states forming?'],
    meaning: 'Durnovo sees two threats to the Russian Empire: a war abroad and revolution at home.',
    trapIdx: 3,
    trap: 'D is a real feature of WWI, but Durnovo does not discuss propaganda. He warns of outside war and inside revolt.'
  };

  W['u7_7.3_6'] = {
    type: 'purpose',
    hq: 'EXCEPT',
    hs: ['Long live the great guide of the international proletarian revolution, Comrade Stalin!'],
    src: [
      { tag: 'WHO', since: 'the Communist Party made the poster', therefore: 'it promotes Soviet goals' },
      { tag: 'WHAT', since: 'it praises Lenin and Stalin', therefore: 'it would never promote the West' }
    ],
    read: ['A Soviet poster praising the Party', 'An American poster praising free markets', 'A Western ad selling consumer goods'],
    plain: ['Which use would the USSR never allow?', 'Did posters rally people for World War II?', 'Did posters back anti-colonial movements?'],
    meaning: 'Soviet posters served the state. They never encouraged citizens to embrace Western culture.',
    trapIdx: 1,
    trap: 'B sounds like Cold War diplomacy, but the Soviets did promote the Warsaw Pact. EXCEPT asks for the one they never did.'
  };

  W['u7_7.3_9'] = {
    type: 'causation',
    hq: 'most significant in explaining which of the following consequences',
    hs: ['required mobilizing the entire civilian population and economy for the war effort'],
    src: [
      { tag: 'WHAT', since: 'whole nations were mobilized', therefore: 'the losses touched everyone' },
      { tag: 'HOW', since: 'millions died for little gain', therefore: 'people turned against war' }
    ],
    read: ['A summary of total war in WWI', 'A summary of colonies gaining freedom', 'A summary of US economic power'],
    plain: ['How did total war change attitudes?', 'Did all colonial empires collapse right away?', 'Did every colony get independence at once?'],
    meaning: 'Total war touched every family, and the slaughter left many people disillusioned and against war.',
    trapIdx: 2,
    trap: 'C has some truth over time, but "permanent shift" after 1918 overstates it. The passage is about mobilizing whole populations.'
  };

  W['u7_7.4_3'] = {
    type: 'similar',
    hq: 'example of which broader interwar response',
    hs: ['through centralized government control'],
    src: [
      { tag: 'WHO', since: 'Stalin ran the economy from the center', therefore: 'the state controlled industry' },
      { tag: 'HOW', since: 'output rose while millions died', therefore: 'an authoritarian state pushed growth at any cost' }
    ],
    read: ['Stalin’s state-run push to industrialize', 'A free market fixing a broken economy on its own', 'The League of Nations rebuilding trade'],
    plain: ['What kind of response is this?', 'Was it a free-market fix?', 'Was it colonies feeding home industry?'],
    meaning: 'An authoritarian state used central planning to industrialize fast and strengthen its power.',
    trapIdx: 1,
    trap: 'B is the opposite: the Five Year Plans replaced markets with state planning.'
  };

  W['u7_7.4_5'] = {
    type: 'causation',
    hq: 'together most directly illustrate',
    hs: ['Germany\'s Weimar Republic, already weakened by hyperinflation in 1923, could not withstand the economic shock'],
    src: [
      { tag: 'WHEN', since: 'crises hit in 1923 and again in 1929', therefore: 'look for a repeated pattern' },
      { tag: 'WHAT', since: 'Weimar could not withstand the shock', therefore: 'economic crisis led to political instability' }
    ],
    read: ['Two crises weakening German democracy', 'Two booms making German democracy strong', 'The League rescuing Germany’s economy'],
    plain: ['What did repeated crises lead to?', 'Did crises stay inside one country?', 'Did the League coordinate recovery?'],
    meaning: 'Repeated economic crises created instability that extremists like the Nazis exploited.',
    trapIdx: 0,
    trap: 'A is the opposite: trade collapsed by over 50 percent worldwide, so crises spread between countries.'
  };

  W['u7_7.4_6'] = {
    type: 'context',
    hq: 'speech as a whole is best understood in the context of',
    look: 'Stalin says "to slacken the tempo would mean falling behind" and lists Russia’s defeats because of "industrial backwardness."',
    src: [
      { tag: 'WHEN', since: 'it is February 1931', therefore: 'the first Five-Year Plan is underway' },
      { tag: 'WHO', since: 'he speaks to leaders of industry', therefore: 'he is pushing faster industrial growth' }
    ],
    read: ['Stalin urging faster industrial growth', 'Stalin preparing his army for an attack on Finland', 'Stalin announcing an atomic bomb test'],
    plain: ['What was Stalin pushing in 1931?', 'Was it the Winter War with Finland?', 'Was it a nuclear weapons program?'],
    meaning: 'In 1931 Stalin was driving the first Five-Year Plan for rapid heavy industry.',
    trapIdx: 3,
    trap: 'D happened in the 1930s too, but the speech is about industry and "tempo," not political enemies.'
  };

  W['u7_7.4_8'] = {
    type: 'causation',
    hq: 'How would twentieth-century economist John Maynard Keynes suggest',
    look: 'Bismarck says the worker is "completely helpless" when ill, old or out of work, and poor relief "leaves a lot to be desired."',
    src: [
      { tag: 'WHO', since: 'Keynes wrote in the 1930s', therefore: 'he lived through the Depression' },
      { tag: 'HOW', since: 'he said governments should spend in downturns', therefore: 'he backed government action' }
    ],
    read: ['A chancellor on workers’ insecurity', 'A union leader demanding a general strike', 'A factory owner cutting wages and jobs'],
    plain: ['What would Keynes have the state do?', 'Would he keep the state out of workers’ lives?', 'Would he help only the elderly?'],
    meaning: 'Keynes would have the government step in and spend to keep demand and jobs up.',
    trapIdx: 2,
    trap: 'C describes laissez-faire, the view Keynes argued against.'
  };

  W['u7_7.5_0'] = {
    type: 'similar',
    hq: 'most similar to which earlier justification for imperialism',
    hs: ['Despite promises of eventual self-governance, these arrangements often continued colonial exploitation'],
    src: [
      { tag: 'WHAT', since: 'mandates promised "eventual self-governance"', therefore: 'Westerners claimed to be guiding others' },
      { tag: 'HOW', since: 'that is a duty to "civilize"', therefore: 'it echoes the White Man’s Burden' }
    ],
    read: ['Mandates continuing colonial rule', 'Mandates ending colonial rule at once', 'Mandates sharing power equally'],
    plain: ['Which old idea do mandates echo?', 'Is it the Monroe Doctrine?', 'Is it mercantilism, colonies built for wealth?'],
    meaning: 'Mandates claimed Western powers were guiding peoples toward self-rule: the old "civilizing mission."',
    trapIdx: 3,
    trap: 'D fits the exploitation, but mercantilism is an economic system. The mandate idea was a moral duty to guide.'
  };

  W['u7_7.5_2'] = {
    type: 'bestillustrates',
    hq: 'most directly demonstrates that',
    hs: ['He was completely ignored'],
    src: [
      { tag: 'WHO', since: 'Ho cited Wilson’s own Fourteen Points', therefore: 'he took Wilson at his word' },
      { tag: 'WHAT', since: 'he was ignored', therefore: 'self-determination was not for colonies' }
    ],
    read: ['Ho Chi Minh ignored at Versailles', 'Ho Chi Minh winning freedom at Versailles', 'France offering Vietnam self-rule'],
    plain: ['Who were the Fourteen Points for?', 'Was self-determination for everyone?', 'Did France grant Vietnam autonomy?'],
    meaning: 'Wilson’s self-determination applied to Europeans, not to Asian or African colonies.',
    trapIdx: 0,
    trap: 'A is the opposite. If self-determination were universal, Ho would not have been ignored.'
  };

  W['u7_7.5_3'] = {
    type: 'bestillustrates',
    hq: 'best understood as an example of',
    hs: ['This policy aimed to erase Korean cultural identity'],
    src: [
      { tag: 'WHAT', since: 'Koreans had to take Japanese names', therefore: 'Korean culture was being erased' },
      { tag: 'WHY', since: 'it served the expanding empire', therefore: 'culture became a tool of control' }
    ],
    read: ['Japan erasing Korean names', 'Japan celebrating Korean culture', 'Korea trading equally with Japan'],
    plain: ['What tool of control is this?', 'Was it a response to an uprising?', 'Was it a progressive reform?'],
    meaning: 'Forcing Japanese names on Koreans was cultural suppression used to control a conquered people.',
    trapIdx: 2,
    trap: 'C repeats Japan’s own claim to be modernizing, but the policy’s aim was to erase Korean identity.'
  };

  W['u7_7.5_4'] = {
    type: 'context',
    hq: 'drew most directly on which of the following intellectual traditions',
    hs: ['drew directly on Enlightenment ideas of natural rights and self-determination'],
    src: [
      { tag: 'WHAT', since: 'the passage names the source', therefore: 'Enlightenment natural rights' },
      { tag: 'HOW', since: 'colonized people turned the West’s own ideas against it', therefore: 'look for natural rights' }
    ],
    read: ['Anti-colonial leaders citing natural rights', 'Colonial rulers citing Social Darwinism to stay', 'Communists rejecting all nationalism'],
    plain: ['Which ideas did they draw on?', 'Was it Marxist class struggle?', 'Was it Social Darwinism?'],
    meaning: 'They used Enlightenment ideas of natural rights and self-determination against the powers that preached them.',
    trapIdx: 0,
    trap: 'A is tempting because Ho Chi Minh was a communist, but the passage says the League drew on Enlightenment ideas.'
  };

  W['u7_7.5_5'] = {
    type: 'similar',
    hq: 'shared which of the following common factors in their rise to power',
    look: 'Berryman’s 1938 cartoon shows a small Mussolini boasting "I planned it that way and Adolf carried it out!" while Hitler marches off with Austria "in the bag."',
    src: [
      { tag: 'WHO', since: 'both were fascist dictators', therefore: 'look for what put both in power' },
      { tag: 'WHEN', since: 'Italy had postwar crisis and Germany had the Depression', therefore: 'bad economies helped both' }
    ],
    read: ['A cartoon mocking two dictators', 'A cartoon praising two elected leaders', 'A cartoon of two kings at peace'],
    plain: ['What helped both men rise?', 'Were both democratically elected?', 'Did both court socialist parties?'],
    meaning: 'Both rose as weak economies made people turn to strongmen.',
    trapIdx: 1,
    trap: 'B is a common myth. Mussolini was appointed after the March on Rome, and Hitler was appointed chancellor; neither won a majority vote.'
  };

  W['u7_7.5_7'] = {
    type: 'causation',
    hq: 'instructions indicated in the fourth paragraph to remain nonviolent',
    look: 'Gandhi writes that the arrest is "a prelude to Swaraj... if we can remain non-violent," and adds, "Let us earn imprisonment."',
    src: [
      { tag: 'WHAT', since: 'Gandhi calls for nonviolence and accepting jail', therefore: 'it is satyagraha' },
      { tag: 'WHO', since: 'Martin Luther King Jr. studied Gandhi', therefore: 'nonviolence spread to the US' }
    ],
    read: ['Gandhi urging nonviolent resistance', 'Gandhi calling for an armed revolt against Britain', 'Gandhi asking Britain for mercy'],
    plain: ['Who later used Gandhi’s methods?', 'Did Southeast Asia win freedom this way?', 'Did Cuba’s communists use them?'],
    meaning: 'Gandhi’s nonviolent resistance inspired the American civil rights movement.',
    trapIdx: 1,
    trap: 'B fits "independence," but Vietnam and Indonesia won through armed struggle, not nonviolence.'
  };

  W['u7_7.5_8'] = {
    type: 'causation',
    hq: 'most inspired the instructions indicated in the fifth paragraph to boycott foreign cloth',
    look: 'Gandhi hopes "every Indian, man or woman, will completely boycott foreign cloth and take up spinning or weaving."',
    src: [
      { tag: 'WHAT', since: 'foreign cloth meant British cloth', therefore: 'trace how Britain came to control India’s trade' },
      { tag: 'WHEN', since: 'the stem asks about 1450 to 1750', therefore: 'the East India Company was chartered in 1600' }
    ],
    read: ['Gandhi calling for a cloth boycott', 'Gandhi praising British factory cloth', 'Gandhi calling for new trade deals'],
    plain: ['What began British control of India?', 'Was it the conquest of India by a Muslim empire?', 'Was it New World food crops?'],
    meaning: 'The East India Company, a joint-stock company, gained control of India’s trade. British cloth later ruined Indian weavers.',
    trapIdx: 0,
    trap: 'A is the Mughal conquest, but the boycott targets British cloth, so trace British control, which began with a joint-stock company.'
  };

  W['u7_7.6_4'] = {
    type: 'context',
    hq: 'culmination of which broader twentieth century development',
    hs: ['It did not distinguish between soldiers and children'],
    src: [
      { tag: 'WHO', since: 'the survivors describe civilian deaths', therefore: 'civilians were the targets' },
      { tag: 'WHEN', since: 'it caps WWI gas and WWII bombing', therefore: 'it is the end of a long trend' }
    ],
    read: ['Survivors on a bomb that killed civilians', 'Soldiers describing a battle between two navies', 'Generals on a new kind of tank warfare'],
    plain: ['What trend did the bomb complete?', 'Was it naval blockades?', 'Was it the rise of mechanized tank warfare?'],
    meaning: 'The bomb was the extreme end of a century of war that blurred the line between soldiers and civilians.',
    trapIdx: 3,
    trap: 'D is a real feature of modern war, but not "all major powers" used chemical and biological weapons in WWII. The bomb fits the civilian-targeting trend.'
  };

  W['u7_7.6_5'] = {
    type: 'causation',
    hq: 'most directly reflected',
    hs: ['Britain and France gave Hitler the Sudetenland in exchange for a promise of no further expansion'],
    src: [
      { tag: 'WHO', since: 'Britain and France gave in again and again', therefore: 'they wanted to avoid war' },
      { tag: 'WHEN', since: 'it was the 1930s', therefore: 'they were still hurting from WWI and the Depression' }
    ],
    read: ['Democracies giving in to Axis demands', 'Democracies standing firm against Hitler', 'Democracies allying with fascists'],
    plain: ['Why did democracies give in?', 'Did they sympathize with fascism?', 'Did they want war with the USSR?'],
    meaning: 'Worn out by WWI and the Depression, the democracies gave in to avoid another war.',
    trapIdx: 2,
    trap: 'C is a conspiracy theory with little support. Appeasement came from exhaustion and fear of war.'
  };

  W['u7_7.6_7'] = {
    type: 'bestillustrates',
    hq: 'most directly connects the atomic bombing to which broader historical pattern',
    hs: ['It did not distinguish between soldiers and children'],
    src: [
      { tag: 'WHAT', since: 'the bomb killed everyone in its path', therefore: 'civilians were part of the target' },
      { tag: 'HOW', since: 'Dresden and Tokyo were firebombed first', therefore: 'it fits total war strategy' }
    ],
    read: ['A survivor on a bomb killing civilians', 'A soldier on a battle far from any city', 'A diplomat on laws protecting civilians'],
    plain: ['What strategy does it reflect?', 'Was it secret weapons outside command?', 'Was it laws protecting civilians?'],
    meaning: 'Killing soldiers and children alike reflects total war: deliberately targeting civilians.',
    trapIdx: 2,
    trap: 'C is the opposite. Laws of war aimed to protect civilians; the bombing ignored them.'
  };

  W['u7_7.6_9'] = {
    type: 'similar',
    hq: 'In contrast to Hitler, Mussolini focused on',
    look: 'The cartoon shows Mussolini taking credit while Hitler carries off Austria; the question asks where Mussolini himself looked to expand.',
    src: [
      { tag: 'WHERE', since: 'Hitler looked east into Europe', therefore: 'Mussolini looked elsewhere' },
      { tag: 'WHAT', since: 'Mussolini wanted a new Roman empire', therefore: 'he looked across the Mediterranean' }
    ],
    read: ['A cartoon of Mussolini and Hitler', 'A cartoon of Mussolini defeating Hitler', 'A cartoon of Italy at peace with Ethiopia'],
    plain: ['Where did Mussolini expand?', 'Did he sign pacts with great powers?', 'Did he control the news media?'],
    meaning: 'Mussolini expanded into North and East Africa, holding Libya and invading Ethiopia in 1935.',
    trapIdx: 1,
    trap: 'B fits Hitler better: he signed the Nazi-Soviet Pact. Both dictators used propaganda, so it is no contrast.'
  };

  W['u7_7.6_10'] = {
    type: 'context',
    hq: 'historical background for Adolf Hitler’s condemnation of the Treaty of Versailles',
    look: 'Hitler calls Versailles a "Diktat" that "is not law to us," a signature "forced out of us with pistols at our head."',
    src: [
      { tag: 'WHEN', since: 'he spoke the day Germany invaded Poland', therefore: 'he is justifying the attack' },
      { tag: 'WHAT', since: 'he says the treaty was forced on Germany', therefore: 'he taps a widely shared German grievance' }
    ],
    read: ['Hitler calling Versailles unfair', 'Hitler praising the Versailles treaty as just', 'Churchill attacking the Versailles treaty'],
    plain: ['Why did Germans resent Versailles?', 'Did Hitler respect Poland’s borders?', 'Was he teaming up with Mussolini here?'],
    meaning: 'Many Germans felt Versailles treated them unfairly, and Hitler used that anger to justify invading Poland.',
    trapIdx: 1,
    trap: 'B is the opposite. Hitler spoke on the day he invaded Poland.'
  };

  W['u7_7.6_11'] = {
    type: 'context',
    hq: 'best understood in the context of',
    look: 'Churchill vows "we shall defend our island, whatever the cost may be. We shall fight on the beaches."',
    src: [
      { tag: 'WHEN', since: 'it is June 4, 1940, just after Dunkirk', therefore: 'France is falling' },
      { tag: 'WHAT', since: 'he talks of beaches and landing grounds', therefore: 'Britain expects an invasion' }
    ],
    read: ['Churchill vowing to defend Britain', 'Churchill offering peace terms to Hitler', 'Churchill planning an attack on Moscow'],
    plain: ['What did Britain fear in 1940?', 'Was Britain still appeasing the Axis?', 'Was Britain backing Eastern European rebels?'],
    meaning: 'After Dunkirk, Britain expected a German invasion, and Churchill vowed to fight on.',
    trapIdx: 2,
    trap: 'C ended when Churchill replaced Chamberlain in May 1940. "We shall never surrender" is the opposite of appeasement.'
  };

  W['u7_7.6_12'] = {
    type: 'causation',
    hq: 'vindicated by which of the following historical events',
    look: 'Stalin lists Russia’s defeats, all "because of her backwardness," and says "we must no longer lag behind."',
    src: [
      { tag: 'WHAT', since: 'he warns that the backward get beaten', therefore: 'he expects another attack' },
      { tag: 'WHEN', since: 'Germany invaded in 1941', therefore: 'the new factories helped the USSR survive' }
    ],
    read: ['Stalin warning that the weak get beaten', 'Stalin promising lasting peace with the West', 'Stalin praising Russia’s old kings'],
    plain: ['Which attack proved Stalin right?', 'Was it the later Space Race?', 'Was it the Polish-Soviet War of 1920?'],
    meaning: 'Germany invaded ten years later, and the industry built under the Five-Year Plans helped the USSR win.',
    trapIdx: 2,
    trap: 'C was a real foreign attack, but it came before 1931. Something that happened earlier cannot vindicate a warning about the future.'
  };

  W['u7_7.6_13'] = {
    type: 'causation',
    hq: 'changes illustrated in the table from 1937 to 1942',
    look: 'Japan’s GDP climbs from 19,949 million yen in 1937 to 23,445 in 1942.',
    src: [
      { tag: 'WHEN', since: 'war with China began in 1937', therefore: 'war spending started then' },
      { tag: 'WHAT', since: 'GDP rose', therefore: 'the cause must have boosted output' }
    ],
    read: ['A table of Japan’s wartime growth', 'A table of Japan’s economy in collapse', 'A table of Japan’s trade with America'],
    plain: ['What raised output in those years?', 'Did U.S. embargoes boost Japan’s economy?', 'Was it the conquest of Manchuria in 1931?'],
    meaning: 'Spending on the wars with China and then the Allies drove Japan’s output up.',
    trapIdx: 3,
    trap: 'D would shrink the economy, not grow it. Embargoes cut off oil and steel.'
  };

  W['u7_7.6_14'] = {
    type: 'causation',
    hq: 'changes illustrated in the table from 1942 to 1946',
    look: 'GDP falls from 23,445 million yen in 1942 to 13,083 in 1946.',
    src: [
      { tag: 'WHEN', since: 'it covers the end of the war', therefore: 'Japan was being bombed' },
      { tag: 'WHAT', since: 'output fell by almost half', therefore: 'factories and cities were destroyed' }
    ],
    read: ['A table of Japan’s output collapsing', 'A table of Japan’s fast postwar boom', 'A table of Japanese trade surging'],
    plain: ['What cut output in half?', 'Did trade with Pacific allies cause it?', 'Did nationwide strikes cause it?'],
    meaning: 'American bombing and a submarine blockade destroyed Japan’s factories and cut off supplies.',
    trapIdx: 3,
    trap: 'D would add workers, not cut output. Japan did use forced labor, but that does not explain the collapse.'
  };

  W['u7_7.7_2'] = {
    type: 'causation',
    hq: 'most directly explains the Nazis\' ability to carry out the policies of extermination',
    hs: ['forced to work in a unit responsible for disposing of the bodies of those killed in Auschwitz'],
    src: [
      { tag: 'WHO', since: 'Olere was a survivor of Auschwitz', therefore: 'he saw the camp system firsthand' },
      { tag: 'HOW', since: 'Jews were rounded up all over Europe', therefore: 'the Nazis needed local help' }
    ],
    read: ['A survivor’s painting of Auschwitz', 'A Nazi poster calling for new workers', 'A painting of Jews moving to Palestine'],
    plain: ['Who helped the Nazis do it?', 'Did old ghetto rules make it possible?', 'Did Jews leaving for Palestine matter?'],
    meaning: 'Across occupied Europe, local people helped out of prejudice, fear or greed.',
    trapIdx: 3,
    trap: 'D sounds like propaganda, but many people in occupied lands saw the Nazis as conquerors. They helped out of prejudice, fear or greed.'
  };

  W['u7_7.7_3'] = {
    type: 'bestillustrates',
    hq: 'best understood as an example of',
    hs: ['This myth was historically false', 'Jews, communists, and traitors had sabotaged Germany from within'],
    src: [
      { tag: 'WHO', since: 'Goebbels’ propaganda office spread it', therefore: 'it was government-sponsored' },
      { tag: 'WHAT', since: 'it blamed Jews and communists falsely', therefore: 'it dehumanized minorities' }
    ],
    read: ['A false Nazi myth blaming minorities', 'A true account of how Germany lost the war', 'A soldier’s memoir of fighting at the front'],
    plain: ['What kind of myth is this?', 'Was it a true account of sabotage?', 'Did the Nazis have no part in it?'],
    meaning: 'The legend was state propaganda that blamed minorities and helped justify persecution.',
    trapIdx: 2,
    trap: 'C is half true (the myth began after 1918), but the passage says Goebbels’ propaganda machine built it up. The Nazis spread it.'
  };

  W['u7_7.7_4'] = {
    type: 'similar',
    hq: 'continuity across twentieth century mass atrocities',
    hs: ['In all cases, dehumanizing propaganda preceded and accompanied the violence'],
    src: [
      { tag: 'WHEN', since: 'they range from 1915 to 1994', therefore: 'not just WWII or fascism' },
      { tag: 'WHAT', since: 'propaganda came first every time', therefore: 'that is the continuity' }
    ],
    read: ['A list of genocides with one shared pattern', 'A list of genocides with no shared pattern at all', 'A list of wars won by the League'],
    plain: ['What came before every genocide?', 'Were all of them caused only by fascism?', 'Was economic collapse the only trigger?'],
    meaning: 'In every case, extremist ideas and dehumanizing propaganda came before the killing.',
    trapIdx: 0,
    trap: 'A is contradicted by the list: Armenia, Cambodia and Rwanda were not fascist and not during WWII.'
  };

  W['u7_7.7_5'] = {
    type: 'similar',
    hq: 'most similar to the Holocaust in that both',
    hs: ['executions of educated professionals'],
    src: [
      { tag: 'WHO', since: 'the Khmer Rouge was a communist government', therefore: 'it was not fascist' },
      { tag: 'HOW', since: 'it killed groups it saw as enemies', therefore: 'state-run, ideological killing is the match' }
    ],
    read: ['A communist regime killing millions', 'A fascist regime conquering Europe', 'A regime stopped by the United States'],
    plain: ['What do the two share?', 'Were both governments fascist?', 'Did the US stop both of them?'],
    meaning: 'Both were state-sponsored, ideology-driven mass killings of people the government saw as enemies.',
    trapIdx: 0,
    trap: 'A is wrong about the Khmer Rouge, a communist party. The ideologies differed, but the method matched.'
  };

  W['u7_7.8_0'] = {
    type: 'similar',
    hq: 'Which best describes what both sources agree on',
    hs: ['its success in blaming the war on Russia was a masterstroke', 'Important losses or battles often went completely unmentioned'],
    src: [
      { tag: 'HOW', since: 'Germany spread atrocity stories', therefore: 'one used false stories' },
      { tag: 'HOW', since: 'Britain hid its losses', therefore: 'the other hid true ones' }
    ],
    read: ['Two historians on wartime media control', 'Two soldiers describing life in the trenches', 'Two editors praising a free press'],
    plain: ['What did both governments understand?', 'Did both use the very same methods of control?', 'Did both rely on outright lies?'],
    meaning: 'Different methods, same idea: both governments managed news of the war to keep public support.',
    trapIdx: 0,
    trap: 'A ignores the contrast: Germany spread false stories while Britain hid true ones. The methods differed.'
  };

  W['u7_7.8_1'] = {
    type: 'similar',
    hq: 'most directly illustrate',
    hs: ['requiring governments to mobilize all available resources through propaganda, nationalism, and state control'],
    src: [
      { tag: 'WHO', since: 'democracies, the USSR and the Nazis all used media', therefore: 'every type of state did it' },
      { tag: 'HOW', since: 'methods ranged from speeches to rallies', therefore: 'the tools differed but the goal matched' }
    ],
    read: ['Every type of state mobilizing for war', 'Only dictators using propaganda in war', 'Only democracies rallying their people'],
    plain: ['What did all of them do?', 'Were democracies simply more effective?', 'Did dictators skip propaganda?'],
    meaning: 'Democracies and dictatorships alike used every tool they had to aim civilian life at the war.',
    trapIdx: 1,
    trap: 'B is the opposite: the passage lists Nazi films, radio and rallies. Totalitarian states used propaganda heavily.'
  };

  W['u7_7.8_2'] = {
    type: 'context',
    hq: 'most directly illustrates which of the following continuities',
    hs: ['governments across the political spectrum, democratic, fascist, and communist'],
    src: [
      { tag: 'WHO', since: 'every kind of government used propaganda', therefore: 'it was not one system’s trick' },
      { tag: 'HOW', since: 'modern war needed whole populations', therefore: 'states used mass media to rally them' }
    ],
    read: ['All governments using mass media in war', 'Only democracies using propaganda well in war', 'Nationalism fading in modern war'],
    plain: ['What power did modern states share?', 'Did democracies fail to communicate?', 'Did nationalism stop mattering?'],
    meaning: 'Modern states of every type used mass media to shape opinion and mobilize civilians.',
    trapIdx: 3,
    trap: 'D overstates it. Propaganda often hid losses, but "all states" and "complete victories" go far beyond the passage.'
  };

  W['u7_7.8_3'] = {
    type: 'similar',
    hq: 'most directly significant in helping to explain',
    hs: ['utilized centralized government economic control and systematic propaganda'],
    src: [
      { tag: 'WHO', since: 'Stalin and Hitler had opposite ideologies', therefore: 'the match is in methods' },
      { tag: 'HOW', since: 'both ran the economy from the top', therefore: 'both built state power for war' }
    ],
    read: ['Two dictators using the same tools', 'Two democracies building institutions', 'Two allies signing a lasting pact'],
    plain: ['What methods did both share?', 'Did both build democratic institutions?', 'Did the Depression make them allies?'],
    meaning: 'Despite opposite ideologies, both used central economic control and propaganda to build power for war.',
    trapIdx: 2,
    trap: 'C twists the 1939 Nazi-Soviet Pact. It was a brief deal, not a lasting alliance, and it did not come from the Depression.'
  };

  W['u7_7.8_4'] = {
    type: 'bestillustrates',
    hq: 'most directly illustrate which of the following patterns',
    hs: ['using propaganda to recruit soldiers and vilify enemies, censoring media'],
    src: [
      { tag: 'WHAT', since: 'governments used propaganda and censorship', therefore: 'they controlled the media' },
      { tag: 'HOW', since: 'they directed factories, food and workers', therefore: 'whole societies served the war' }
    ],
    read: ['States aiming whole societies at war', 'States stepping back from the economy', 'States leaving news to free papers'],
    plain: ['What did mass media let states do?', 'Did governments leave the economy?', 'Did the League replace propaganda?'],
    meaning: 'Mass media let modern states direct whole civilian societies toward winning the war.',
    trapIdx: 0,
    trap: 'A is the opposite: governments directed factories and rationed food. They took over more of the economy.'
  };

  W['u7_7.8_5'] = {
    type: 'purpose',
    hq: 'implies which of the following claims about Mussolini',
    look: 'Under the title "Telling the Italians!", a small Mussolini boasts, "I planned it that way and Adolf carried it out!"',
    src: [
      { tag: 'WHO', since: 'an American cartoonist drew it', therefore: 'he is mocking Mussolini' },
      { tag: 'WHAT', since: 'Mussolini takes credit for Hitler’s move', therefore: 'he is spinning the story at home' }
    ],
    read: ['A cartoon mocking Mussolini’s boasts', 'A cartoon praising Mussolini’s plans', 'A cartoon showing Italy beating Hitler'],
    plain: ['What does the cartoon say he does?', 'Was he behind Germany’s military success?', 'Did he start World War II?'],
    meaning: 'The cartoonist shows Mussolini telling his people a false story to look important: propaganda.',
    trapIdx: 0,
    trap: 'A takes Mussolini’s boast at face value. The title "Telling the Italians!" shows the cartoonist does not believe him.'
  };

  W['u7_7.8_6'] = {
    type: 'context',
    hq: 'draws directly on its audience’s experiences of',
    look: 'The poster shows young soldiers marching under a huge "1917," telling them to defend the freedom "won by your Fathers."',
    src: [
      { tag: 'WHAT', since: '"1917" fills the top of the poster', therefore: 'it points to the revolution' },
      { tag: 'WHO', since: 'their fathers "won" freedom', therefore: 'the parents fought for the Soviet state' }
    ],
    read: ['A WWII poster recalling 1917', 'A poster celebrating Stalin’s purges', 'A poster honoring the Tsar’s army'],
    plain: ['What did the fathers win?', 'Was it the Great Purge of the 1930s?', 'Was it the Yalta Conference?'],
    meaning: 'The freedom "won by your Fathers" in 1917 means the Russian Revolution.',
    trapIdx: 2,
    trap: 'C was going on in 1917, but Soviet leaders called World War I an imperialist war, not a fight for freedom. They honored the Revolution.'
  };

  W['u7_7.8_8'] = {
    type: 'similar',
    hq: 'contrasts to Marx’s view of communism',
    look: 'The poster calls on Soviet youth to defend the "Motherland" and its honor, not workers everywhere.',
    src: [
      { tag: 'WHO', since: 'Marx said workers have no country', therefore: 'he saw communism as international' },
      { tag: 'HOW', since: 'Stalin backed "socialism in one country"', therefore: 'Soviet communism leaned on the nation' }
    ],
    read: ['A Soviet poster calling for national pride', 'A Marxist poster calling all workers to unite', 'A poster calling for peace with Germany'],
    plain: ['How did the USSR break with Marx?', 'Was Marx the peaceful one?', 'Did Marx run a communist state himself?'],
    meaning: 'Marx saw communism as international; the USSR built "socialism in one country" and leaned on patriotism.',
    trapIdx: 1,
    trap: 'B is wrong about Marx, who expected a violent revolution by workers.'
  };

  W['u7_7.9_1'] = {
    type: 'causation',
    hq: 'best supports which claim about the causes of the Second World War',
    hs: ['many people turned to leaders who promised national revival through strong government and territorial expansion'],
    src: [
      { tag: 'WHAT', since: 'the Depression caused mass unemployment', therefore: 'people wanted strong leaders' },
      { tag: 'HOW', since: 'those leaders promised expansion', therefore: 'aggression followed' }
    ],
    read: ['The Depression helping aggressive leaders', 'The Depression making states more peaceful', 'The Cold War causing World War II'],
    plain: ['What did the Depression lead to?', 'Were colonial rivalries the only cause?', 'Did states rearm less after 1929?'],
    meaning: 'The Depression helped bring aggressive, expansionist governments to power.',
    trapIdx: 1,
    trap: 'B is the opposite: Japan invaded Manchuria in 1931 and the fascist states rearmed.'
  };

  W['u7_7.9_2'] = {
    type: 'causation',
    hq: 'The rapid spread of the war is best explained by',
    hs: ['Within weeks, Russia, Germany, France, and Britain had joined the conflict'],
    src: [
      { tag: 'WHAT', since: 'one assassination drew in many powers', therefore: 'they were tied together' },
      { tag: 'HOW', since: 'alliances pulled each power in', therefore: 'a local war became a world war' }
    ],
    read: ['Alliances spreading a Balkan war', 'The League failing to stop a war', 'The Depression causing a world war'],
    plain: ['Why did so many join so fast?', 'Did the League fail to act in 1914?', 'Did the Great Depression cause it?'],
    meaning: 'Alliance commitments turned a Balkan conflict into a general European war.',
    trapIdx: 1,
    trap: 'B is impossible: the League of Nations was created after World War I.'
  };

  W['u7_7.9_4'] = {
    type: 'causation',
    hq: 'most directly contributed to',
    hs: ['Britain and France were economically exhausted', 'colonized peoples who had fought or worked for the Allies demanded independence'],
    src: [
      { tag: 'WHO', since: 'the empires were worn out', therefore: 'they could not hold their colonies' },
      { tag: 'WHO', since: 'colonized peoples demanded freedom', therefore: 'pressure came from both sides' }
    ],
    read: ['Weak empires facing independence demands', 'Strong empires growing even larger after the war', 'The Ottoman Empire coming back'],
    plain: ['What did weak empires lead to?', 'Did European empires expand?', 'Did nationalism fade in the colonies?'],
    meaning: 'Exhausted empires and growing independence movements led to decolonization in Asia and Africa.',
    trapIdx: 0,
    trap: 'A is the opposite: the empires were exhausted and could not expand.'
  };

  /* ============ UNIT 8 ============ */
  W['u8_8.1_2'] = {
    type: 'context',
    hq: 'best understood in the context of which wartime agreement',
    hs: ['all these famous cities and the populations around them lie in what I must call the Soviet sphere'],
    src: [
      { tag: 'WHEN', since: 'it is March 1946', therefore: 'look for a wartime deal about Europe' },
      { tag: 'WHAT', since: 'Eastern Europe is in the "Soviet sphere"', therefore: 'a deal let Soviet power stay there' }
    ],
    read: ['Churchill on Soviet control of the East', 'Churchill praising Soviet free elections', 'Churchill planning to invade Soviet lands'],
    plain: ['Which deal left the East to Moscow?', 'Was it the Atlantic Charter of 1941?', 'Was it the Bretton Woods money system?'],
    meaning: 'At Yalta in 1945, the Allies left Eastern Europe in the Soviet sphere. Churchill describes the result.',
    trapIdx: 1,
    trap: 'B promised self-determination, the opposite of what Churchill describes. It explains his complaint, not how the East fell under Soviet control.'
  };

  W['u8_8.2_5'] = {
    type: 'causation',
    hq: 'most directly contribute to',
    hs: ['a defeat of free institutions anywhere is a defeat everywhere'],
    src: [
      { tag: 'WHO', since: 'the National Security Council wrote it', therefore: 'it is a plan for US defense policy' },
      { tag: 'WHAT', since: 'it sees a threat "anywhere"', therefore: 'the US must be strong everywhere' }
    ],
    read: ['A US plan to confront the Soviets', 'A US plan to make peace with Moscow', 'A Soviet plan to spread revolution'],
    plain: ['What policy did NSC-68 drive?', 'Did it lead to the Marshall Plan in 1948?', 'Did it lead to détente in the 1970s?'],
    meaning: 'NSC-68 called for a huge military buildup, and US defense spending tripled in three years.',
    trapIdx: 0,
    trap: 'A came first: the Marshall Plan began in 1948, two years before NSC-68. It was economic aid, not a military buildup.'
  };

  W['u8_8.2_6'] = {
    type: 'context',
    hq: 'most clearly an example of',
    look: 'Khrushchev says "the Soviet Union is not abandoning its efforts for agreement," and Eisenhower answers at the same summit.',
    src: [
      { tag: 'WHAT', since: 'both leaders are at a summit conference', therefore: 'it was meant to ease tensions' },
      { tag: 'HOW', since: 'the U-2 spy flights were real', therefore: 'the spying was not hypothetical' }
    ],
    read: ['A summit meant to ease tension', 'A war council planning an attack', 'A treaty ending the Cold War for good'],
    plain: ['What was the summit for?', 'Was it a debate over missile sites?', 'Was it the build-up to a war?'],
    meaning: 'The 1960 Paris Summit was meant to ease Cold War tensions, though it collapsed over the U-2 affair.',
    trapIdx: 2,
    trap: 'C gets the spying wrong. The U-2 flights were real: a plane had just been shot down over the USSR.'
  };

  W['u8_8.2_8'] = {
    type: 'similar',
    hq: 'disagree in which of the following ways',
    look: 'Khrushchev calls them "aggressive intelligence flights" made "with a view to starting war"; Eisenhower says they "had no aggressive intent."',
    src: [
      { tag: 'WHO', since: 'Khrushchev sees the flights as a threat', therefore: 'he calls them aggressive' },
      { tag: 'WHO', since: 'Eisenhower sees them as protection', therefore: 'he calls them preventive' }
    ],
    read: ['Two leaders clash over spy flights', 'Two leaders agree to end all spying', 'Two leaders plan a joint space flight'],
    plain: ['How do they see the flights?', 'Does Khrushchev want the Cold War over?', 'Does Khrushchev defend Soviet spying?'],
    meaning: 'Khrushchev calls the flights aggression; Eisenhower calls them protection against surprise attack.',
    trapIdx: 1,
    trap: 'B gets it backward. The flights were American; Eisenhower is the one defending the "necessity of espionage."'
  };

  W['u8_8.2_9'] = {
    type: 'purpose',
    hq: 'maintains which of the following viewpoints about capitalism',
    look: 'Khrushchev says "there is no other solution than peaceful co-existence of the two systems, the capitalist and the socialist."',
    src: [
      { tag: 'WHO', since: 'Khrushchev led the USSR after Stalin', therefore: 'he backed "peaceful coexistence"' },
      { tag: 'WHAT', since: 'he names both systems side by side', therefore: 'he accepts that both will exist' }
    ],
    read: ['Khrushchev calling for coexistence', 'Khrushchev calling for world revolution now', 'Khrushchev praising capitalist markets'],
    plain: ['How should the systems relate?', 'Must capitalism be wiped out now?', 'Is capitalism the key to world peace?'],
    meaning: 'Khrushchev says capitalism and socialism must coexist peacefully, or face war.',
    trapIdx: 0,
    trap: 'A is a classic communist view, but Khrushchev says the opposite here: the only choice is "peaceful co-existence."'
  };

  W['u8_8.2_10'] = {
    type: 'causation',
    hq: 'most directly supports which of the following decisions in later Soviet foreign policy',
    look: 'Stalin lists invaders who beat Russia: Mongols, Turks, Swedes, Poles, British, French and Japanese.',
    src: [
      { tag: 'WHAT', since: 'Russia was invaded again and again', therefore: 'Soviet leaders wanted protection' },
      { tag: 'HOW', since: 'after 1945 they built a buffer in the East', therefore: 'they tied it together in the Warsaw Pact' }
    ],
    read: ['Stalin on Russia’s history of invasions', 'Stalin on Russia’s easy victories abroad', 'Stalin on Russia’s alliance with Britain'],
    plain: ['What would guard against invasion?', 'Was it the war in Afghanistan?', 'Was it declaring war on Japan in 1945?'],
    meaning: 'Fear of invasion led to a buffer of satellite states bound together in the Warsaw Pact in 1955.',
    trapIdx: 2,
    trap: 'C fits Soviet anger at the 1968 protests, but crushing protests is not about defense against invasion. The Warsaw Pact is the defensive alliance.'
  };

  W['u8_8.2_11'] = {
    type: 'context',
    hq: 'most clearly an example of',
    look: 'Article 3 says members will build their "capacity to resist armed attack"; Article 5 makes an attack on one an attack on all.',
    src: [
      { tag: 'WHEN', since: 'it is April 1949', therefore: 'the Berlin Blockade was underway' },
      { tag: 'WHAT', since: 'it prepares to "resist armed attack"', therefore: 'it answers an outside threat' }
    ],
    read: ['A treaty to resist armed attack', 'A treaty lowering tariffs between nations', 'A plan to rebuild Europe’s factories'],
    plain: ['What threat does the treaty answer?', 'Is it a secret balance of power deal?', 'Is it about rebuilding after the war?'],
    meaning: 'NATO answered Soviet aggression after the takeover of Eastern Europe and the Berlin Blockade.',
    trapIdx: 2,
    trap: 'C was the Marshall Plan. NATO is about defending against attack, not rebuilding.'
  };

  W['u8_8.2_13'] = {
    type: 'bestillustrates',
    hq: 'most clearly supports which of the following concepts',
    look: 'Article 5: "an armed attack against one or more of them in Europe or North America shall be considered an attack against them all."',
    src: [
      { tag: 'WHAT', since: 'an attack on one is an attack on all', therefore: 'members defend each other' },
      { tag: 'WHEN', since: 'it is 1949', therefore: 'MAD came later, with big nuclear arsenals' }
    ],
    read: ['A treaty where allies defend each other', 'A treaty sharing nuclear bombs with all', 'A treaty spreading free markets abroad'],
    plain: ['What idea is in Article 5?', 'Is it mutually assured destruction?', 'Is it capitalism and free trade?'],
    meaning: 'An attack on one member is an attack on all: collective defense.',
    trapIdx: 2,
    trap: 'C sounds like the Cold War, but MAD came later, when both sides had huge nuclear arsenals. Article 5 is about allies.'
  };

  W['u8_8.3_0'] = {
    type: 'context',
    hq: 'most directly an example of which Cold War development',
    hs: ['shall be considered an attack against them all'],
    src: [
      { tag: 'WHO', since: 'the US and Western Europe signed it', therefore: 'it is a Western alliance' },
      { tag: 'WHY', since: 'it came after Soviet moves in the East', therefore: 'it answers the Soviet threat' }
    ],
    read: ['Allies pledging to defend each other', 'Allies pledging to restore their colonies', 'The UN sending troops to Asia'],
    plain: ['What does Article 5 create?', 'Is it nuclear deterrence and MAD?', 'Is it UN peacekeeping missions?'],
    meaning: 'Article 5 formed a military alliance as a joint response to the Soviet threat.',
    trapIdx: 1,
    trap: 'B is a real Cold War pattern, but Article 5 says nothing about nuclear weapons. It is a pledge of mutual defense.'
  };

  W['u8_8.3_1'] = {
    type: 'causation',
    hq: 'most directly contributed to which Soviet response',
    hs: ['an armed attack against one or more of them in Europe or North America'],
    src: [
      { tag: 'WHAT', since: 'NATO was a Western military alliance', therefore: 'Moscow felt surrounded' },
      { tag: 'HOW', since: 'the Soviets built a mirror alliance in 1955', therefore: 'that was the Warsaw Pact' }
    ],
    read: ['A Western alliance alarming Moscow', 'A Western treaty calming Soviet fears', 'A Soviet plan to join NATO'],
    plain: ['How did Moscow answer NATO?', 'Was it the Berlin Blockade?', 'Did Soviet troops leave Eastern Europe?'],
    meaning: 'The Soviets answered with their own alliance, the Warsaw Pact of 1955.',
    trapIdx: 1,
    trap: 'B came first: the Berlin Blockade began in 1948 and helped cause NATO, so it cannot be a response to it.'
  };

  W['u8_8.3_2'] = {
    type: 'bestillustrates',
    hq: 'most directly reflects which aspect of postwar Western European relations',
    hs: ['will assist the Party or Parties so attacked'],
    src: [
      { tag: 'WHO', since: 'Western Europe was exhausted by the war', therefore: 'it needed protection' },
      { tag: 'WHAT', since: 'the US promised to defend it', therefore: 'Europe accepted US leadership' }
    ],
    read: ['Europe trading loyalty for US protection', 'The US reviving Europe’s colonial empires', 'France and Britain splitting over NATO'],
    plain: ['What deal did Europe make?', 'Did the US revive colonialism?', 'Did the UN fail in Korea?'],
    meaning: 'Western Europe accepted American leadership in return for protection and help rebuilding.',
    trapIdx: 3,
    trap: 'D is about Korea, which came in 1950, after NATO. The treaty is about Europe and North America.'
  };

  W['u8_8.3_5'] = {
    type: 'bestillustrates',
    hq: 'best understood as evidence of which broader Cold War pattern',
    hs: ['the world stood at the brink of nuclear war', 'Ultimately, the Soviets agreed to remove the missiles'],
    src: [
      { tag: 'WHAT', since: 'nuclear missiles caused the crisis', therefore: 'the weapons created danger' },
      { tag: 'HOW', since: 'both sides backed down', therefore: 'fear of nuclear war held them back' }
    ],
    read: ['Nukes causing a crisis, then restraint', 'A proxy war turning into direct war', 'The US proving it had total superiority'],
    plain: ['What role did nukes play?', 'Did proxy wars always escalate?', 'Was US power simply superior?'],
    meaning: 'Nuclear weapons created the crisis, but fear of using them pushed both sides to back down.',
    trapIdx: 0,
    trap: 'A is contradicted by the ending: the crisis was settled, so escalation was not unavoidable.'
  };

  W['u8_8.3_6'] = {
    type: 'causation',
    hq: 'changes illustrated in the table after 1946',
    look: 'Japan’s GDP rises from 13,083 million yen in 1946 to 25,399 in 1955.',
    src: [
      { tag: 'WHO', since: 'the US occupied Japan after 1945', therefore: 'America rebuilt it as an ally' },
      { tag: 'WHEN', since: 'the Korean War ran from 1950 to 1953', therefore: 'US orders boosted Japanese industry' }
    ],
    read: ['A table of Japan’s postwar recovery', 'A table of Japan’s postwar collapse', 'A table of Japan’s war spending'],
    plain: ['What drove recovery after 1946?', 'Was it democracy returning under a new constitution?', 'Was it communist agents?'],
    meaning: 'American occupation and Korean War orders set off a boom in Japanese industry.',
    trapIdx: 0,
    trap: 'A is true (Japan got a new constitution in 1947), but a constitution alone does not explain a doubled GDP. US spending does.'
  };

  W['u8_8.3_7'] = {
    type: 'bestillustrates',
    hq: 'best supported by the data presented in the table',
    look: 'GDP per capita is 282 in 1937 and 282 again in 1955, after falling to 173 in 1946.',
    src: [
      { tag: 'WHAT', since: 'per capita output matches in 1937 and 1955', therefore: 'it returned to the old level' },
      { tag: 'HOW', since: 'a table gives numbers, not motives', therefore: 'cross out claims about war goals' }
    ],
    read: ['A table of Japan’s output over time', 'A table of Japan’s war goals in Asia', 'A table of Japan’s trade partners'],
    plain: ['What do the numbers show?', 'Did the economy only grow?', 'Did war only help the economy?'],
    meaning: 'Output per person was 282 in 1937 and 282 again in 1955: it had returned to its 1937 level.',
    trapIdx: 3,
    trap: 'D is true history, but a table of numbers cannot show what the government wanted. Stick to the data.'
  };

  W['u8_8.4_1'] = {
    type: 'bestillustrates',
    hq: 'most significant as evidence of which broader historical pattern',
    hs: ['This immortal statement was made in the Declaration of Independence of the United States of America in 1776', 'abusing the standard of Liberty, Equality, and Fraternity'],
    src: [
      { tag: 'WHO', since: 'Ho quotes Jefferson and the French Revolution', therefore: 'he uses Western ideals' },
      { tag: 'WHAT', since: 'he turns them against French rule', therefore: 'he uses them to win independence' }
    ],
    read: ['Ho using Western ideals against France', 'Ho rejecting all Western ideas as foreign', 'Ho asking France for more aid'],
    plain: ['How does Ho use Western ideas?', 'Is Marxism his only framework here?', 'Did the US push decolonization here?'],
    meaning: 'Ho turned the West’s own ideals of liberty and equality against Western colonial rule.',
    trapIdx: 0,
    trap: 'A fits Ho, who was a communist, but this declaration quotes Jefferson and the French Revolution, not Marx.'
  };

  W['u8_8.4_4'] = {
    type: 'causation',
    hq: 'most directly contributed to which Cold War development',
    hs: ['The Chinese people, comprising one quarter of humanity, have now stood up'],
    src: [
      { tag: 'WHAT', since: 'a quarter of humanity became communist', therefore: 'Americans feared communism spreading' },
      { tag: 'HOW', since: 'the US fought in Korea a year later', therefore: 'it began containing communism in Asia' }
    ],
    read: ['Mao declaring a communist China', 'Mao joining the Western alliance', 'Mao asking the US for protection'],
    plain: ['How did the US react to 1949?', 'Did the US pull out of East Asia?', 'Did Moscow control China for decades?'],
    meaning: 'The "loss of China" made Americans fear communism was spreading, and the US intervened in Korea and Vietnam.',
    trapIdx: 1,
    trap: 'B misreads Mao’s "stood up." China had its own leaders, and by 1960 it split with the Soviet Union.'
  };

  W['u8_8.4_6'] = {
    type: 'similar',
    hq: 'differs most strongly from the social structure of',
    look: 'Ho’s program calls to "overthrow French imperialism, feudalism, and the reactionary Vietnamese capitalist class" and give land to poor peasants.',
    src: [
      { tag: 'WHAT', since: 'Ho wants a communist state', therefore: 'look for an anti-communist one' },
      { tag: 'WHO', since: 'South Korea was US-backed and capitalist', therefore: 'it is the opposite' }
    ],
    read: ['Ho calling for a communist Vietnam', 'Ho calling for free markets in Vietnam', 'Ho calling for French rule to continue'],
    plain: ['Which state was anti-communist?', 'Was Castro’s Cuba anti-communist?', 'Was Romania anti-communist?'],
    meaning: 'South Korea was a capitalist, US-backed state, the opposite of Ho’s communist program.',
    trapIdx: 2,
    trap: 'C is Vietnam’s neighbor, but Laos became communist in 1975, just like Ho’s Vietnam.'
  };

  W['u8_8.4_7'] = {
    type: 'context',
    hq: 'Which economic philosopher most influenced the message of this poster',
    look: 'The 1958 poster shows workers, farmers and soldiers charging through the waves with a tractor, tools and a rocket: "Brave the wind and the waves."',
    src: [
      { tag: 'WHEN', since: 'it is from the Great Leap Forward', therefore: 'Mao’s China was communist' },
      { tag: 'WHO', since: 'workers and peasants are the heroes', therefore: 'it praises collective labor' }
    ],
    read: ['A Chinese poster praising mass labor', 'A Chinese ad for private businesses', 'A Chinese poster praising free trade'],
    plain: ['Whose ideas shaped Mao’s China?', 'Was it Adam Smith’s free markets?', 'Was it David Ricardo’s trade theory?'],
    meaning: 'The poster celebrates collective labor in a communist state built on the ideas of Karl Marx.',
    trapIdx: 0,
    trap: 'A was a liberal thinker who supported free markets and individual rights, the opposite of Mao’s collective economy.'
  };

  W['u8_8.4_8'] = {
    type: 'causation',
    hq: 'NOT a result',
    look: 'The poster shows heroic workers charging ahead with a tractor and a rocket: the Great Leap’s promise of fast growth.',
    src: [
      { tag: 'WHAT', since: 'NOT flips the question', therefore: 'three choices really did follow' },
      { tag: 'WHEN', since: 'Soviet advisers left China in 1960', therefore: 'relations with Moscow got worse' }
    ],
    read: ['A poster promising a great leap', 'A poster honoring Soviet advisers', 'A poster advertising capitalist reform'],
    plain: ['Which one did NOT happen after?', 'Did the Cultural Revolution follow it?', 'Did China later adopt market reforms?'],
    meaning: 'After the Great Leap, China moved further from the Soviet Union, not closer.',
    trapIdx: 2,
    trap: 'C sounds unlike Mao, but after his death leaders like Deng Xiaoping turned to market reforms. It did happen.'
  };

  W['u8_8.5_0'] = {
    type: 'purpose',
    hq: 'most directly responds to which historical ideology',
    hs: ['the black man is capable of managing his own affairs'],
    src: [
      { tag: 'WHO', since: 'Nkrumah led Ghana to independence', therefore: 'he is answering colonial rulers' },
      { tag: 'WHAT', since: 'he insists Africans can rule themselves', therefore: 'someone had claimed they could not' }
    ],
    read: ['Nkrumah answering colonial claims', 'Nkrumah thanking Britain for its rule', 'Nkrumah asking Moscow for leaders'],
    plain: ['Which idea is he refuting?', 'Is he answering Soviet claims?', 'Is he answering civil rights leaders?'],
    meaning: 'Colonial ideology said Africans needed European rule. Nkrumah says Africans can manage their own affairs.',
    trapIdx: 1,
    trap: 'B misses the target. Colonial rule, not Soviet claims, had told Africans they could not govern themselves.'
  };

  W['u8_8.5_4'] = {
    type: 'context',
    hq: 'historical context that most directly explains Gandhi\'s \'Quit India\' call',
    hs: ['We shall either free India or die in the attempt'],
    src: [
      { tag: 'WHEN', since: 'it is August 1942', therefore: 'the Cripps Mission had just failed' },
      { tag: 'WHAT', since: 'Gandhi calls for "Do or Die"', therefore: 'talks had failed and he wanted confrontation' }
    ],
    read: ['Gandhi demanding Britain leave India now', 'Gandhi thanking Britain for its promises', 'Gandhi urging Indians to fight Japan'],
    plain: ['What made talks seem pointless?', 'Did Britain offer full dominion now?', 'Did the US force Britain to leave?'],
    meaning: 'The Cripps Mission offered too little, too late, so Gandhi concluded Britain would not leave unless pushed.',
    trapIdx: 1,
    trap: 'B is close to Cripps’s offer but wrong on timing. Dominion was promised only after the war, which is why Gandhi rejected it.'
  };

  W['u8_8.5_5'] = {
    type: 'context',
    hq: 'represents which broader historical pattern',
    hs: ['we shall not live to see the perpetuation of our slavery'],
    src: [
      { tag: 'WHEN', since: 'it is 1942, during World War II', therefore: 'the war shaped the demand' },
      { tag: 'WHAT', since: 'Britain fought for freedom while ruling India', therefore: 'colonized people questioned its authority' }
    ],
    read: ['Gandhi using the war to demand freedom', 'Gandhi calling for an armed revolution', 'Gandhi accepting British rule for now'],
    plain: ['How did the war shape his demand?', 'Did violence radicalize Gandhi?', 'Did Britain grant freedom freely?'],
    meaning: 'World War II made colonized peoples question empires that fought for "freedom" abroad but denied it at home.',
    trapIdx: 0,
    trap: 'A fits some movements, but Gandhi stayed nonviolent. "Do or Die" is a call for mass protest, not armed revolution.'
  };

  W['u8_8.5_6'] = {
    type: 'bestillustrates',
    hq: 'useful as a source of information about',
    hs: ['the African race, united under one federal government', 'the hope of free Africa’s survival'],
    src: [
      { tag: 'WHO', since: 'Nkrumah led Ghana to independence', therefore: 'he is a decolonization leader' },
      { tag: 'WHAT', since: 'he wants African states united', therefore: 'it shows his view of other African nations’ role' }
    ],
    read: ['Nkrumah calling for African unity', 'Nkrumah defending separate nations', 'Nkrumah praising US aid to Africa'],
    plain: ['What does he say other states should do?', 'Does he stress each nation’s sovereignty?', 'Does he discuss US influence in Africa?'],
    meaning: 'Nkrumah argues that free African states must unite: his view of other African nations’ role.',
    trapIdx: 0,
    trap: 'A is the opposite. Nkrumah calls for "one federal government" and warns against the "petty wranglings of the separate states."'
  };

  W['u8_8.5_7'] = {
    type: 'context',
    hq: 'reference to which of the following',
    look: 'The anthem calls Pakistan a "citadel of faith" under "the Flag of the Crescent and Star," and its strength "the brotherhood of the People."',
    src: [
      { tag: 'WHAT', since: 'it praises a "citadel of faith"', therefore: 'religion defines the nation' },
      { tag: 'WHEN', since: 'Pakistan formed in 1947 for Muslims', therefore: 'the brotherhood is Muslim' }
    ],
    read: ['An anthem for a Muslim homeland', 'An anthem for all of South Asia', 'An anthem praising Britain'],
    plain: ['Who is the "brotherhood"?', 'Is it all colonized peoples?', 'Is it everyone in South Asia?'],
    meaning: 'Pakistan was founded as a homeland for the Muslims of British India, so the brotherhood is the Muslim community.',
    trapIdx: 1,
    trap: 'B misses partition. Pakistan split from India in 1947 because Muslim leaders wanted their own nation.'
  };

  W['u8_8.5_8'] = {
    type: 'causation',
    hq: 'most acutely attributed to',
    look: 'The anthem praises Pakistan as a "citadel of faith" under the crescent and star: a nation founded on religion.',
    src: [
      { tag: 'WHO', since: 'Jinnah’s Muslim League demanded a Muslim state', therefore: 'it pushed for Pakistan' },
      { tag: 'WHAT', since: 'Gandhi opposed partition', therefore: 'cross out Gandhi' }
    ],
    read: ['An anthem for a new Muslim nation', 'An anthem written by the British crown', 'An anthem for a united India'],
    plain: ['Who pushed hardest for Pakistan?', 'Did Gandhi push for partition?', 'Did the United Nations create it?'],
    meaning: 'Jinnah’s Muslim League demanded a separate Muslim state and got it in 1947.',
    trapIdx: 2,
    trap: 'C is partly true, since Britain drew the border. But the British agreed to partition only at the end; the Muslim League pushed for it.'
  };

  W['u8_8.5_9'] = {
    type: 'causation',
    hq: 'result of the establishment of Pakistan and India as two separate countries',
    look: 'The anthem names a "brotherhood of the People" bound by faith, which is why Hindus, Sikhs and Muslims found themselves on the "wrong" side of the new border.',
    src: [
      { tag: 'WHAT', since: 'the border split peoples by religion', therefore: 'millions were on the "wrong" side' },
      { tag: 'HOW', since: 'violence broke out in 1947', therefore: 'people fled in huge numbers' }
    ],
    read: ['An anthem for a state born in partition', 'An anthem for a peaceful union of states', 'An anthem shared by India and Pakistan'],
    plain: ['What happened at partition?', 'Did a common government form?', 'Did Kashmir become a free passage?'],
    meaning: 'Partition set off religious violence and the migration of 10 to 15 million people.',
    trapIdx: 2,
    trap: 'C fits Pakistan but not India, which became officially secular. The direct result was mass migration and violence.'
  };

  W['u8_8.5_11'] = {
    type: 'causation',
    hq: 'directly contributed to the development of which of the following aspects',
    look: 'Ho’s program calls for "a worker-peasant and soldier government" and to give plantations "to poor peasants."',
    src: [
      { tag: 'WHO', since: 'Ho founded a Communist Party', therefore: 'he mixed nationalism and communism' },
      { tag: 'WHAT', since: 'later movements in Angola and Mozambique did too', therefore: 'communism drew anti-colonial fighters' }
    ],
    read: ['Ho mixing communism and independence', 'Ho calling for free markets in Indochina', 'Ho praising French rule in Indochina'],
    plain: ['What did later movements borrow?', 'Did they adopt free-market ideas?', 'Did they build national congresses?'],
    meaning: 'Many later independence movements, like Ho’s, appealed to communism and took Soviet or Chinese help.',
    trapIdx: 2,
    trap: 'C fits India’s Congress Party, but Ho’s program is about class revolution. The idea that spread was communism.'
  };

  W['u8_8.5_12'] = {
    type: 'causation',
    hq: 'most assisted the ultimate success of the boycott',
    look: 'Gandhi asks every Indian to "completely boycott foreign cloth" as part of the struggle for Swaraj (self-rule).',
    src: [
      { tag: 'WHAT', since: 'the goal was self-rule', therefore: 'success means independence in 1947' },
      { tag: 'WHEN', since: 'Britain was exhausted by 1945', therefore: 'it could not hold India' }
    ],
    read: ['Gandhi calling for a boycott and Swaraj', 'Gandhi calling Indians to join the army', 'Gandhi asking Britain for lower taxes'],
    plain: ['What finally weakened Britain?', 'Was it Soviet pressure on empires?', 'Was it decolonization in Africa?'],
    meaning: 'World War II left Britain too exhausted to hold India, which became independent in 1947.',
    trapIdx: 2,
    trap: 'C has the order backward. Most African colonies won independence after India, in the 1950s and 1960s.'
  };

  W['u8_8.5_15'] = {
    type: 'causation',
    hq: 'most accelerated by',
    look: 'Fanon says in the colonies "the policeman and the soldier" rule with "rifle butts and napalm": the language of pure force.',
    src: [
      { tag: 'WHO', since: 'leaders like Nkrumah spread Pan-Africanism', therefore: 'Africans united against colonial rule' },
      { tag: 'WHEN', since: 'seventeen nations won freedom in 1960', therefore: 'independence spread fast' }
    ],
    read: ['Fanon on force in the colonies', 'Fanon praising stable colonial rule', 'Fanon describing wealthy colonies'],
    plain: ['What sped up decolonization?', 'Was it treaties with Europe?', 'Was it new wealth in colonies?'],
    meaning: 'Pan-Africanism and nationalist movements united Africans, and independence spread fast after 1957.',
    trapIdx: 0,
    trap: 'A fits some cases, but treaties came after pressure. The driving force was nationalism uniting Africans against colonial rule.'
  };

  W['u8_8.5_16'] = {
    type: 'purpose',
    hq: 'most likely informs Fanon’s view of the two worlds',
    look: 'Fanon compares "the capitalist countries," ruled by "moral teachers," with "the colonial countries," ruled by soldiers.',
    src: [
      { tag: 'WHAT', since: 'he compares two worlds', therefore: 'he must know both' },
      { tag: 'WHO', since: 'he grew up in Martinique and lived in France and Algeria', therefore: 'he saw both firsthand' }
    ],
    read: ['Fanon comparing colony and metropole', 'Fanon describing only life in France', 'Fanon praising French rule in Algeria'],
    plain: ['What let him compare both worlds?', 'Was it helping Algerians fight?', 'Was it racism in the Free French?'],
    meaning: 'Having lived in both the colonies and France, Fanon could compare the two worlds.',
    trapIdx: 0,
    trap: 'A is true and shaped his anger, but it explains only one world. To compare the two, he needed to know both.'
  };

  W['u8_8.6_1'] = {
    type: 'context',
    hq: 'most complicated by which development',
    hs: ['India will awake to life and freedom'],
    src: [
      { tag: 'WHEN', since: 'it is August 14, 1947', therefore: 'Pakistan was created the same day' },
      { tag: 'WHAT', since: 'British India split by religion', therefore: 'millions were displaced' }
    ],
    read: ['Nehru greeting Indian independence', 'Nehru mourning a British victory over India', 'Nehru declaring war on Pakistan'],
    plain: ['What came with independence?', 'Did Britain withhold recognition?', 'Did Soviet agents complicate it?'],
    meaning: 'Independence came with partition, which displaced millions and killed many in religious violence.',
    trapIdx: 1,
    trap: 'B is a real problem of 1947, since the princely states had to be brought in. But most joined quickly, while partition displaced millions.'
  };

  W['u8_8.6_2'] = {
    type: 'bestillustrates',
    hq: 'most significant as evidence of which broader historical process',
    hs: ['when we step out from the old to the new, when an age ends'],
    src: [
      { tag: 'WHO', since: 'Nehru led the independence movement', therefore: 'now he must govern' },
      { tag: 'WHAT', since: 'he speaks of "the challenge of the future"', therefore: 'the movement becomes a government' }
    ],
    read: ['Nehru turning a movement into a state', 'Nehru joining the Soviet bloc', 'Nehru asking the US for a model of government'],
    plain: ['What shift does the speech mark?', 'Did socialism spread everywhere?', 'Is this the start of Non-Alignment?'],
    meaning: 'The speech marks the moment an anti-colonial movement had to become the government of a new nation.',
    trapIdx: 1,
    trap: 'B is a later Nehru policy, but this speech says nothing about the Cold War. It is about a new nation beginning.'
  };

  W['u8_8.6_5'] = {
    type: 'bestillustrates',
    hq: 'most directly describes which aspect of the situation',
    hs: ['economies were structured to export raw materials to Europe rather than develop domestic industry'],
    src: [
      { tag: 'WHAT', since: 'economies still exported raw goods to Europe', therefore: 'they stayed dependent' },
      { tag: 'WHO', since: 'Nkrumah coined "neocolonialism"', therefore: 'it means economic control after independence' }
    ],
    read: ['A study of problems after independence', 'A study of new African factories', 'A study of colonies wanting rulers back'],
    plain: ['What is neocolonialism?', 'Is it troops restoring colonies?', 'Is it using European languages?'],
    meaning: 'Neocolonialism means economic dependence on former rulers that limits a new state’s real independence.',
    trapIdx: 2,
    trap: 'C is a real colonial legacy, but neocolonialism is about economic control, not language.'
  };

  W['u8_8.6_8'] = {
    type: 'causation',
    hq: 'saw his vision most closely achieved by',
    hs: ['the African race, united under one federal government'],
    src: [
      { tag: 'WHAT', since: 'he wants African unity', therefore: 'look for a continental organization' },
      { tag: 'WHEN', since: 'Nkrumah died in 1972', therefore: 'he could only see what came before then' }
    ],
    read: ['Nkrumah calling for African unity', 'Nkrumah calling for separate states', 'Nkrumah praising US aid to Africa'],
    plain: ['What came closest in his lifetime?', 'Was it joining the United Nations?', 'Was it the African Union of 2002?'],
    meaning: 'Nkrumah helped found the Organization of African Unity in 1963, the closest thing to his vision in his lifetime.',
    trapIdx: 2,
    trap: 'C is a closer union, but it came in 2002, thirty years after Nkrumah died. He "saw" only the OAU.'
  };

  W['u8_8.6_9'] = {
    type: 'causation',
    hq: 'experienced difficulty building stable, independent countries',
    look: 'Fanon calls the colonial world "a world cut in two," ruled by "the language of pure force."',
    src: [
      { tag: 'WHO', since: 'Europeans drew the borders', therefore: 'they ignored peoples and languages' },
      { tag: 'WHAT', since: 'rivals were grouped and groups were split', therefore: 'civil wars followed' }
    ],
    read: ['Fanon on force in colonial rule', 'Fanon on colonies rich in factories', 'Fanon on colonies that never left'],
    plain: ['Why were new states unstable?', 'Did they fail to win independence?', 'Did they lack natural resources?'],
    meaning: 'European-drawn borders ignored languages and cultures, which fed civil wars after independence.',
    trapIdx: 2,
    trap: 'C is false for most colonies, which were rich in resources. The problem was borders and who controlled the wealth.'
  };

  W['u8_8.7_1'] = {
    type: 'context',
    hq: 'historical context most directly relevant',
    hs: ['I have fought against white domination, and I have fought against black domination'],
    src: [
      { tag: 'WHO', since: 'Mandela was on trial in South Africa', therefore: 'he fought the government’s racial laws' },
      { tag: 'WHEN', since: 'it is 1964', therefore: 'apartheid was the law of the land' }
    ],
    read: ['Mandela on trial fighting apartheid', 'Mandela thanking the UN for sanctions', 'Mandela asking Moscow for weapons'],
    plain: ['What system was Mandela fighting?', 'Were UN sanctions in place in 1964?', 'Is this about Cold War rivalry?'],
    meaning: 'Mandela was fighting apartheid, which legally separated races and denied rights to non-white citizens.',
    trapIdx: 1,
    trap: 'B came later: the UN arms embargo was in 1977, and broad sanctions in the 1980s.'
  };

  W['u8_8.7_2'] = {
    type: 'bestillustrates',
    hq: 'most significant as evidence of which broader historical pattern',
    hs: ['a democratic and free society in which all persons live together in harmony and with equal opportunities'],
    src: [
      { tag: 'WHAT', since: 'he wants equality for "all persons"', therefore: 'he appeals to universal rights' },
      { tag: 'WHO', since: 'Gandhi and King made the same kind of appeal', therefore: 'it is a global pattern' }
    ],
    read: ['Mandela appealing to universal rights', 'Mandela calling for communist revolution', 'Mandela asking for UN troops'],
    plain: ['What do Mandela, Gandhi and King share?', 'Did African movements all turn communist?', 'Did the UN send troops to end it?'],
    meaning: 'Mandela challenged an oppressive system by appealing to universal human rights and dignity.',
    trapIdx: 3,
    trap: 'D is half true, since the movements knew of each other. But Mandela’s ideals came from his own struggle, not borrowed American tactics.'
  };

  W['u8_8.7_4'] = {
    type: 'context',
    hq: 'most significant in the context of',
    hs: ['Injustice anywhere is a threat to justice everywhere'],
    src: [
      { tag: 'WHEN', since: 'it is 1963', therefore: 'decolonization was at its peak' },
      { tag: 'WHAT', since: '"anywhere" and "everywhere" link struggles', therefore: 'movements were connected worldwide' }
    ],
    read: ['King linking all struggles for justice', 'King praising white moderates', 'King writing about the Soviet Union and its allies'],
    plain: ['What does "anywhere" connect?', 'Is it the spread of US democracy?', 'Is it Cold War competition?'],
    meaning: 'King saw civil rights, anti-colonial and anti-apartheid struggles as connected around the world.',
    trapIdx: 3,
    trap: 'D shares King’s ideals, but the UDHR came in 1948, and King writes about a struggle happening now, linked to others worldwide.'
  };

  W['u8_8.7_6'] = {
    type: 'causation',
    hq: 'sounds revolutionary to the whites in this country',
    look: 'Mandela says equal political rights sound revolutionary "because the majority of voters will be Africans. This makes the white man fear democracy."',
    src: [
      { tag: 'WHO', since: 'Black South Africans were the majority', therefore: 'equal votes would end white rule' },
      { tag: 'WHAT', since: 'whites already had a parliament', therefore: 'democracy itself was not new to them' }
    ],
    read: ['Mandela on why whites fear equal votes', 'Mandela on why whites love democracy for all', 'Mandela on why whites wanted Britain'],
    plain: ['Why would whites fear it?', 'Were whites still ruled by Britain?', 'Was democracy unknown to whites?'],
    meaning: 'With one person, one vote, the Black majority would outvote white citizens and end minority rule.',
    trapIdx: 2,
    trap: 'C is wrong: white South Africans voted for their own parliament. They feared sharing democracy, not democracy itself.'
  };

  W['u8_8.7_7'] = {
    type: 'context',
    hq: 'characteristic of South Africa at the time of Mandela’s speech',
    look: 'Mandela demands "equal political rights, because without them our disabilities will be permanent."',
    src: [
      { tag: 'WHEN', since: 'it is 1964, under apartheid', therefore: 'Black citizens lacked basic rights' },
      { tag: 'HOW', since: 'pass laws controlled movement', therefore: 'Black citizens carried passbooks' }
    ],
    read: ['Mandela demanding equal rights', 'Mandela praising open elections', 'Mandela praising Rwanda’s president'],
    plain: ['Which apartheid policy fits?', 'Was there universal adult voting?', 'Was there loyalty to Habyarimana?'],
    meaning: 'Under apartheid, pass laws forced Black South Africans to carry identification in white areas.',
    trapIdx: 2,
    trap: 'C is the goal Mandela is fighting for, not the reality. Universal voting came only in 1994.'
  };

  W['u8_8.7_8'] = {
    type: 'purpose',
    hq: 'most clearly an example of',
    look: 'Mandela says "above all, we want equal political rights" and defends the ANC’s fight against racialism.',
    src: [
      { tag: 'WHO', since: 'Mandela is on trial, speaking to the court', therefore: 'he is making his case' },
      { tag: 'WHAT', since: 'he asks for equal political rights', therefore: 'he wants a policy changed' }
    ],
    read: ['Mandela asking to end apartheid', 'Mandela attacking capitalism', 'Mandela calling for African union'],
    plain: ['What is Mandela asking for?', 'Is it about failed unification?', 'Is it opposing capitalism?'],
    meaning: 'Mandela is pleading to end apartheid and win equal political rights: a change in government policy.',
    trapIdx: 2,
    trap: 'C sounds like Nkrumah. Mandela’s demand is about rights inside South Africa, not Africa’s place in the world.'
  };

  W['u8_8.7_10'] = {
    type: 'purpose',
    hq: 'most clearly opposes which of the following ideologies',
    look: 'Mandela says "political division, based on colour, is entirely artificial" and fights "against white domination."',
    src: [
      { tag: 'WHAT', since: 'he attacks division by color', therefore: 'he opposes racial segregation' },
      { tag: 'WHERE', since: 'South Africa’s system was apartheid', therefore: 'that is his target' }
    ],
    read: ['Mandela against racial division', 'Mandela against African unity', 'Mandela against workers’ rights'],
    plain: ['Which ideology does he oppose?', 'Is it communism, as his accusers claimed?', 'Is it Pan-Africanism, African unity?'],
    meaning: 'Mandela opposes apartheid, South Africa’s system of racial segregation and white minority rule.',
    trapIdx: 3,
    trap: 'D is something Mandela shared, since he fought for "the African people." He opposed racial division, not African unity.'
  };

  W['u8_8.8_2'] = {
    type: 'causation',
    hq: 'most directly challenged which feature of the Soviet system',
    hs: ['more glasnost, criticism and self-criticism in all spheres of our society'],
    src: [
      { tag: 'WHAT', since: 'glasnost means openness', therefore: 'it targets censorship' },
      { tag: 'WHO', since: 'the Party controlled all information', therefore: 'openness challenged that control' }
    ],
    read: ['Gorbachev calling for openness', 'Gorbachev calling for more censorship', 'Gorbachev calling for a new army'],
    plain: ['What did glasnost challenge?', 'Was it the military’s power?', 'Was it the Brezhnev Doctrine?'],
    meaning: 'Glasnost challenged the Party’s monopoly on information and public debate.',
    trapIdx: 2,
    trap: 'C is what perestroika (restructuring) aimed at. The question asks about glasnost and criticism.'
  };

  W['u8_8.8_3'] = {
    type: 'bestillustrates',
    hq: 'most significant as evidence of which historical development',
    hs: ['communist governments across Eastern Europe collapsed in rapid succession'],
    src: [
      { tag: 'WHO', since: 'East Germans crossed while guards stood aside', therefore: 'the regime lost control from within' },
      { tag: 'HOW', since: 'governments fell one after another', therefore: 'communist rule had lost support' }
    ],
    read: ['Communist rule collapsing from within', 'US troops pushing into East Berlin by force', 'The UN rebuilding Eastern Europe'],
    plain: ['Why did communist rule fall?', 'Did US military force push them out?', 'Did German unity cause it all?'],
    meaning: 'Communist systems collapsed because of economic failure and people rejecting Soviet authority.',
    trapIdx: 0,
    trap: 'A is a common claim, but the passage shows guards standing aside as crowds crossed. The collapse came from within.'
  };

  W['u8_8.8_5'] = {
    type: 'context',
    hq: 'best understood in the context of which broader historical development',
    hs: ['By December 1991, the Soviet Union itself had dissolved into 15 independent republics'],
    src: [
      { tag: 'WHAT', since: 'the planned economy left shortages', therefore: 'people compared it with Western prosperity' },
      { tag: 'HOW', since: 'republics broke away', therefore: 'the system lost legitimacy' }
    ],
    read: ['The USSR breaking into 15 states', 'The USSR adding new republics to its union', 'NATO invading the USSR'],
    plain: ['Why did the USSR fall apart?', 'Did capitalism prove the only model?', 'Did NATO expansion force it?'],
    meaning: 'Planned economies could not keep up with Western prosperity, so communist rule lost legitimacy.',
    trapIdx: 0,
    trap: 'A overstates it. "The only viable model" goes beyond the evidence; the passage shows an internal collapse.'
  };

  W['u8_8.9_0'] = {
    type: 'causation',
    hq: 'best explains the timing',
    hs: ['Britain, France, and the Netherlands were weakened by war'],
    src: [
      { tag: 'WHEN', since: 'it all began after 1945', therefore: 'the war is the key' },
      { tag: 'WHAT', since: 'empires weakened as nationalists grew stronger', therefore: 'both sides changed at once' }
    ],
    read: ['Weak empires and strong movements', 'Strong empires growing stronger after the war', 'The League freeing all colonies'],
    plain: ['Why did it happen after 1945?', 'Did Marshall aid strengthen empires?', 'Did the US take the colonies?'],
    meaning: 'World War II weakened the colonial powers and strengthened independence movements.',
    trapIdx: 1,
    trap: 'B misreads the Marshall Plan. It rebuilt Europe, but it did not make the empires strong enough to hold their colonies.'
  };

  W['u8_8.9_2'] = {
    type: 'causation',
    hq: 'most directly contributed to',
    hs: ['failed to revive the economy and allowed open criticism of the system'],
    src: [
      { tag: 'WHEN', since: 'it is the 1980s', therefore: 'look for a result after that' },
      { tag: 'WHAT', since: 'the economy failed and criticism opened up', therefore: 'the system lost its hold' }
    ],
    read: ['The USSR weakening in the 1980s', 'The USSR growing richer in the 1980s', 'The USSR winning in Afghanistan'],
    plain: ['What did these problems lead to?', 'Did they cause the Cuban crisis?', 'Did they cause the Korean War?'],
    meaning: 'A failing economy, the Afghan war and open criticism led to the Soviet collapse in 1991.',
    trapIdx: 1,
    trap: 'B happened in 1962. A crisis in the 1980s cannot cause something twenty years earlier.'
  };

  W['u8_8.9_4'] = {
    type: 'bestillustrates',
    hq: 'The choices described best illustrate how',
    hs: ['accepted aid from both superpowers'],
    src: [
      { tag: 'WHO', since: 'Nasser took aid from both sides', therefore: 'he played the superpowers off each other' },
      { tag: 'WHAT', since: 'others joined one bloc', therefore: 'each state chose for itself' }
    ],
    read: ['New states choosing their own path', 'New states all turning communist', 'New states ignored by both of the superpowers'],
    plain: ['How did new states act?', 'Did all of them turn communist?', 'Did superpowers ignore them?'],
    meaning: 'New states like Egypt chose their own path, taking aid from both sides to serve their own interests.',
    trapIdx: 0,
    trap: 'A is contradicted by the passage: Egypt took aid from both sides, and other states joined different blocs.'
  };

  /* ============ UNIT 9 ============ */
  W['u9_9.1_5'] = {
    type: 'causation',
    hq: 'most likely an unintended consequence',
    hs: ['airlines carried more than three billion passengers a year'],
    src: [
      { tag: 'WHAT', since: 'billions of people fly each year', therefore: 'people cross the world in hours' },
      { tag: 'HOW', since: 'unintended means nobody planned it', therefore: 'look for a side effect' }
    ],
    read: ['Air travel linking the world', 'Air travel shrinking in the 2000s', 'Air travel ending migration'],
    plain: ['What side effect did flying bring?', 'Did tourism and business travel decline?', 'Did it end international labor migration?'],
    meaning: 'People could carry diseases across the world in hours, so outbreaks like SARS and COVID-19 spread along airline routes.',
    trapIdx: 1,
    trap: 'B reverses the real effect: tourism and business travel boomed because of jets.'
  };

  W['u9_9.2_4'] = {
    type: 'causation',
    hq: 'The shift described is best explained by',
    hs: ['shifted away from infectious diseases such as tuberculosis and toward heart disease, cancer'],
    src: [
      { tag: 'WHAT', since: 'life expectancy more than doubled', therefore: 'fewer people died young' },
      { tag: 'HOW', since: 'older people get heart disease and cancer', therefore: 'people now lived long enough to get them' }
    ],
    read: ['Longer lives changing causes of death', 'Shorter lives from more wars', 'Infections spreading in rich countries'],
    plain: ['Why did causes of death change?', 'Did infectious disease vanish completely?', 'Did more people die in wars and violence?'],
    meaning: 'Sanitation, vaccines and antibiotics let more people reach old age, when heart disease and cancer strike.',
    trapIdx: 0,
    trap: 'A goes too far. Infectious diseases declined in wealthy countries but did not disappear.'
  };

  W['u9_9.4_5'] = {
    type: 'bestillustrates',
    hq: 'best illustrates which feature of the global economy after 1980',
    hs: ['turned a crisis in the United States housing market into a worldwide financial panic'],
    src: [
      { tag: 'WHERE', since: 'European banks held American mortgages', therefore: 'markets were tied together' },
      { tag: 'HOW', since: 'one bank’s fall spread worldwide', therefore: 'a crisis could travel fast' }
    ],
    read: ['A US crisis spreading worldwide', 'A US crisis staying inside America', 'Asian banks taken over by the state'],
    plain: ['Why did the crisis spread?', 'Were national economies isolated?', 'Did the gold standard come back?'],
    meaning: 'Financial markets were so connected that a US housing crisis became a global recession.',
    trapIdx: 0,
    trap: 'A is the opposite: the passage shows a crisis jumping from the US to Europe and the world.'
  };

  W['u9_9.5_6'] = {
    type: 'bestillustrates',
    hq: 'most important way to achieve the goals',
    look: 'The goal "can only be achieved by eliminating the social pressures on men and women to conform to narrowly defined gender roles."',
    src: [
      { tag: 'WHAT', since: '"can only be achieved by" names the main method', therefore: 'that line is the key' },
      { tag: 'HOW', since: 'the alliance comes later, as a support', therefore: 'it is a means, not the main way' }
    ],
    read: ['A manifesto against gender roles', 'A manifesto against women’s rights', 'A manifesto for traditional roles'],
    plain: ['What does it say is the only way?', 'Is it an alliance with women’s liberation?', 'Is it men giving up their privilege?'],
    meaning: 'The manifesto says its goal can only be reached by lifting the pressure to conform to gender roles.',
    trapIdx: 1,
    trap: 'B is in the source, but as support: "we cannot carry out this revolutionary change alone." The main way comes in the line before.'
  };

  W['u9_9.5_8'] = {
    type: 'bestillustrates',
    hq: 'see which of the following as an obstacle',
    look: 'The manifesto calls "the gender-role system" the thing "at the root of our oppression."',
    src: [
      { tag: 'WHAT', since: 'it names the root of oppression', therefore: 'that is the obstacle' },
      { tag: 'WHO', since: 'it seeks an alliance with women’s liberation', therefore: 'it sees no conflict there' }
    ],
    read: ['A manifesto naming gender roles', 'A manifesto attacking feminists', 'A manifesto about equal pay'],
    plain: ['What is the root of oppression?', 'Is it conflict with women’s rights groups?', 'Is it unequal pay between workers?'],
    meaning: 'The Gay Liberation Front names rigid gender roles as the root of its oppression.',
    trapIdx: 1,
    trap: 'B is the opposite: the manifesto wants an alliance with the women’s liberation movement.'
  };

  W['u9_9.6_1'] = {
    type: 'bestillustrates',
    hq: 'best support which claim about cultural globalization',
    hs: ['sold more tickets each year than Hollywood', 'K-pop'],
    src: [
      { tag: 'WHERE', since: 'Bollywood is Indian and K-pop is Korean', therefore: 'they are not Western' },
      { tag: 'HOW', since: 'both spread around the world', therefore: 'culture flows in many directions' }
    ],
    read: ['Indian and Korean culture going global', 'American culture taking over the world', 'Governments banning foreign music'],
    plain: ['Which way did culture flow?', 'Did global culture become all American?', 'Did local cultures disappear completely?'],
    meaning: 'Bollywood and K-pop spreading worldwide show culture flowing in many directions, not just from the West.',
    trapIdx: 0,
    trap: 'A is the "Americanization" claim, and the passage argues against it: Bollywood outsold Hollywood.'
  };

  W['u9_9.6_3'] = {
    type: 'causation',
    hq: 'made possible mainly by',
    hs: ['Hundreds of millions of people around the world watched at least part of the final match on television'],
    src: [
      { tag: 'WHAT', since: 'hundreds of millions watched live', therefore: 'satellite TV was needed' },
      { tag: 'HOW', since: 'teams flew in from every continent', therefore: 'air travel was needed' }
    ],
    read: ['A World Cup watched across the globe', 'A World Cup watched only by the host nation', 'A World Cup ending national teams'],
    plain: ['What made global events possible?', 'Did nationalism and national teams fade?', 'Did competition between states end?'],
    meaning: 'Satellite TV let the world watch live, and jets brought teams and fans together.',
    trapIdx: 1,
    trap: 'B is wrong: the World Cup is played by national teams, and national pride stayed strong.'
  };

  W['u9_9.7_4'] = {
    type: 'purpose',
    hq: 'most likely intended to',
    hs: ['deliberately scheduled to coincide with the World Economic Forum', 'Another world is possible'],
    src: [
      { tag: 'WHO', since: 'activists met at the same time as Davos', therefore: 'they were challenging the business leaders' },
      { tag: 'WHAT', since: 'the slogan says "another world is possible"', therefore: 'they offered an alternative' }
    ],
    read: ['Activists challenging global elites', 'Activists supporting the WTO and its expansion', 'Activists restoring communism'],
    plain: ['What were the activists offering?', 'Did they want the WTO to expand?', 'Did they back multinational companies?'],
    meaning: 'Meeting at the same time as Davos, activists offered an alternative to elite free-market globalization.',
    trapIdx: 2,
    trap: 'C overreads "another world." The activists challenged free-market globalization, not the end of the Soviet bloc.'
  };

  W['u9_9.8_4'] = {
    type: 'bestillustrates',
    hq: 'The Grameen Bank best illustrates',
    hs: ['to make very small loans to poor villagers, most of them women'],
    src: [
      { tag: 'WHO', since: 'an economist founded a private bank', therefore: 'it was not a government program' },
      { tag: 'WHAT', since: 'it lent to the poor, mostly women', therefore: 'it was a new way to fight poverty' }
    ],
    read: ['A bank lending to poor villagers', 'A government seizing all banks', 'The IMF cutting a country’s budget'],
    plain: ['What new approach is this?', 'Was banking nationalized in South Asia?', 'Did women’s economic roles decline?'],
    meaning: 'Microloans were a new, non-government way to reduce poverty, especially for women.',
    trapIdx: 3,
    trap: 'D is the opposite: the bank lent mostly to women, increasing their economic role.'
  };

  W['u9_9.8_5'] = {
    type: 'similar',
    hq: 'differ from the United Nations and the International Monetary Fund primarily in that they',
    hs: ['funded largely by private donations rather than by governments'],
    src: [
      { tag: 'WHO', since: 'the UN and IMF are made up of states', therefore: 'they are intergovernmental' },
      { tag: 'WHAT', since: 'MSF is privately funded', therefore: 'it is independent of governments' }
    ],
    read: ['A private group working across borders', 'A government agency working in only one country', 'A bank lending to governments'],
    plain: ['How are NGOs different?', 'Does the Security Council control them?', 'Do they work only in one country?'],
    meaning: 'NGOs like Doctors Without Borders are private and independent of governments, unlike the UN and IMF.',
    trapIdx: 2,
    trap: 'C describes the IMF itself, the organization the question compares NGOs against.'
  };

  W['u9_9.8_6'] = {
    type: 'context',
    hq: 'the United Nations mentioned in the first paragraph',
    look: 'Article 1: the parties will "settle any international dispute... by peaceful means," as "set forth in the Charter of the United Nations."',
    src: [
      { tag: 'WHAT', since: 'the UN Charter calls for peaceful settlement', therefore: 'the UN is a forum for disputes' },
      { tag: 'HOW', since: 'Article 5 still allows self-defense', therefore: 'the UN does not ban force in every case' }
    ],
    read: ['A treaty citing the UN on disputes', 'A treaty rejecting the United Nations', 'A treaty about free trade zones'],
    plain: ['What role does the UN play here?', 'Does the UN spread one ideology?', 'Does the UN ban force in every case?'],
    meaning: 'The UN gives nations ways to settle disputes peacefully, like the Security Council and the World Court.',
    trapIdx: 1,
    trap: 'B goes too far. The same treaty uses the UN Charter’s right of self-defense, so the UN does not ban force "in any situation."'
  };

  W['u9_9.9_1'] = {
    type: 'bestillustrates',
    hq: 'The passage best illustrates',
    hs: ['remain a small fraction of those in Western Europe and North America'],
    src: [
      { tag: 'WHEN', since: 'growth has been rapid since 1950', therefore: 'something still did not change' },
      { tag: 'WHAT', since: 'the income gap remains', therefore: 'it is a continuity' }
    ],
    read: ['A lasting gap between rich and poor', 'The gap between nations closing', 'Every African state industrializing'],
    plain: ['What stayed the same?', 'Did rich and poor countries become equal?', 'Did every African country industrialize?'],
    meaning: 'The gap between rich and poor regions has lasted: a continuity in global inequality.',
    trapIdx: 1,
    trap: 'B is the opposite: the passage says the gap remains.'
  };

  W['u9_9.9_3'] = {
    type: 'bestillustrates',
    hq: 'The developments described best illustrate',
    hs: ['promising to restore national control over borders and trade'],
    src: [
      { tag: 'WHAT', since: 'Britain left the EU', therefore: 'national control won out' },
      { tag: 'HOW', since: 'nationalist parties grew in many countries', therefore: 'nationalism stayed powerful' }
    ],
    read: ['Nationalism rising against globalization', 'The EU growing larger and stronger with new members', 'Communism spreading again'],
    plain: ['What force stayed powerful?', 'Did the EU gain new members?', 'Did nation-states stop mattering?'],
    meaning: 'Nationalism stayed powerful and even grew in reaction to globalization.',
    trapIdx: 0,
    trap: 'A is the opposite: Britain left the EU.'
  };

  W['u9_9.9_4'] = {
    type: 'bestillustrates',
    hq: 'The passage best illustrates',
    hs: ['much as they did in the era of imperialism'],
    src: [
      { tag: 'WHAT', since: 'they still export oil, copper, coffee and cocoa', therefore: 'they still rely on raw materials' },
      { tag: 'WHEN', since: 'just as under imperialism', therefore: 'it is a continuity' }
    ],
    read: ['Economies still exporting raw goods', 'Economies fully diversified into many industries', 'Africa leading world manufacturing'],
    plain: ['What stayed the same?', 'Did developing economies fully diversify?', 'Did raw material trade end?'],
    meaning: 'Many economies still depend on exporting raw materials, just as in the age of imperialism.',
    trapIdx: 1,
    trap: 'B is the opposite: the passage says these economies still depend heavily on raw materials.'
  };
})(window.WALKTHROUGH);

/* ============ IMAGE SOURCES: "Look at the source" step + "Look here" boxes ============
   For questions whose source is an image (a scanned page, map, chart, painting, object),
   sbmcq.js adds a step after the source line: the student picks what the source shows,
   then (Work it) taps where the evidence is, and boxes appear over that part of the image.
     kind  : text | map | chart | table | art | photo (sets the prompt and the checklist)
     see   : Work it choices describing the source, the right one first (shown shuffled);
             keep the right one from being the longest
     spots : boxes [left, top, width, height] in percent of the image, plus an optional
             5th number = which image, for questions with several (simgs)
   One description per image is shared by its questions; the boxes are per question. */
(function (W) {
  function VIS(id, kind, see, spots) {
    if (W[id]) { W[id].kind = kind; W[id].see = see; W[id].spots = spots; }
  }

  /* ---------- UNIT 4 ---------- */
  var DAGAMA = ['One voyage from Lisbon around Africa to India', 'A land route from Europe across Africa to the Indian Ocean', 'A voyage from Spain west across the Atlantic to the Americas'];
  VIS('u4_4.2_5', 'map', DAGAMA, [[50, 7, 15, 11], [84, 35, 16, 17]]);
  VIS('u4_4.2_6', 'map', DAGAMA, [[62, 46, 22, 46], [84, 35, 16, 17]]);
  VIS('u4_4.2_7', 'map', DAGAMA, [[84, 28, 16, 24]]);
  VIS('u4_4.5_5', 'map', DAGAMA, [[39, 29, 15, 15], [63, 76, 13, 14], [72, 47, 14, 13]]);

  var TORDESILLAS = ['Spain and Portugal split newly found lands', 'Spain and Portugal agree to trade freely in Asian ports', 'Spain and Portugal end a long war over land in Europe'];
  VIS('u4_4.2_8', 'text', TORDESILLAS, [[1, 1, 98, 16.4]]);
  VIS('u4_4.2_9', 'text', TORDESILLAS, [[1, 64.8, 98, 16.4]]);
  VIS('u4_4.2_10', 'text', TORDESILLAS, [[1, 1, 98, 24.4]]);
  VIS('u4_4.4_11', 'text', TORDESILLAS, [[1, 49, 98, 32.2]]);

  VIS('u4_4.3_4', 'chart', ['Native population of Mexico falling sharply', 'Spanish settlers in Mexico growing steadily in number', 'Silver output in Mexico rising year after year'], [[19, 12, 34, 60]]);

  var GUAMAN = ['Native miners are abused, cheated and killed', 'Native miners are well paid and fairly treated by owners', 'Spanish officials closely inspect and protect the mines'];
  VIS('u4_4.3_5', 'text', GUAMAN, [[1, 0.3, 98, 12.2], [1, 33.8, 98, 6.6]]);
  VIS('u4_4.5_12', 'text', GUAMAN, [[1, 44.9, 98, 12.2]]);
  VIS('u4_4.5_13', 'text', GUAMAN, [[1, 56.2, 98, 17.5]]);
  VIS('u4_4.5_14', 'text', GUAMAN, [[1, 11.3, 98, 6.6]]);
  VIS('u4_4.7_5', 'text', GUAMAN, [[1, 39.2, 98, 6.6]]);

  var GOA = ['Christ standing above a Portuguese sailing ship', 'A Hindu god guarding a fleet of Indian fishing boats', 'A Portuguese king leading his navy into a sea battle'];
  VIS('u4_4.4_2', 'photo', GOA, [[10, 60, 84, 32]]);
  VIS('u4_4.4_3', 'photo', GOA, [[26, 11, 46, 51]]);
  VIS('u4_4.8_3', 'photo', GOA, [[26, 11, 46, 48], [9, 62, 85, 30]]);

  var CORTES1 = ['Cortés amazed by a great Aztec city', 'Cortés apologizing to the king for losing a battle', 'Cortés describing a small and poor fishing village'];
  VIS('u4_4.4_5', 'text', CORTES1, [[1, 0.9, 98, 15.2]]);
  VIS('u4_4.4_6', 'text', CORTES1, [[1, 8.8, 98, 7.3]]);

  var TEMPLE = ['A model of the Great Temple and Cortés on it', 'A Spanish church in Mexico and a priest’s sermon about it', 'A map of Tenochtitlan and an Aztec king’s laws for it'];
  VIS('u4_4.4_7', 'photo', TEMPLE, [[35, 8.5, 19, 8]]);
  VIS('u4_4.4_8', 'photo', TEMPLE, [[1, 57.4, 98, 3.2]]);
  VIS('u4_4.4_9', 'photo', TEMPLE, [[1, 83.6, 98, 8.2]]);
  VIS('u4_4.4_10', 'photo', TEMPLE, [[1, 57.4, 98, 3.2], [1, 92.2, 98, 2.9]]);

  var BATAVIA = ['A walled Dutch company town on Java', 'A Javanese royal palace before the Dutch arrived', 'A plan of Amsterdam drawn for Dutch merchants'];
  VIS('u4_4.4_12', 'map', BATAVIA, [[27, 25, 10, 12], [56, 48, 8, 8]]);
  VIS('u4_4.4_13', 'map', BATAVIA, [[22, 44, 8, 9], [43, 81, 56, 18]]);

  var SHIP = ['A packed slave ship and a preacher’s attack', 'A warship plan and an admiral’s report on a battle', 'A trading ship and a merchant’s list of its cargo'];
  VIS('u4_4.5_6', 'art', SHIP, [[1, 65.6, 98, 3.7], [1, 84.5, 98, 6.4]]);
  VIS('u4_4.5_7', 'art', SHIP, [[24, 11.5, 54, 43.5]]);
  VIS('u4_4.5_8', 'art', SHIP, [[24, 33, 54, 21.6]]);

  var RODNEY = ['A historian blaming Europe for Africa’s poverty', 'An explorer praising the wealth of African kingdoms', 'A trader explaining how to profit in West Africa'];
  VIS('u4_4.5_9', 'text', RODNEY, [[1, 15.9, 98, 25.9]]);
  VIS('u4_4.5_10', 'text', RODNEY, [[1, 42.3, 98, 26]]);
  VIS('u4_4.5_11', 'text', RODNEY, [[1, 42.3, 98, 12.4]]);

  var BARBOT = ['A slave trader on captives who refuse food', 'A freed captive describing his voyage home to Guinea', 'A planter describing the crops grown on Guadeloupe'];
  VIS('u4_4.5_15', 'text', BARBOT, [[1, 1.8, 98, 10.8]]);
  VIS('u4_4.5_16', 'text', BARBOT, [[1, 47, 32, 9]]);
  VIS('u4_4.5_17', 'text', BARBOT, [[1, 24.7, 98, 10.8]]);
  VIS('u4_4.5_18', 'text', BARBOT, [[1, 35.6, 98, 20.3]]);

  VIS('u4_4.7_2', 'art', ['Wealthy free women of color with servants', 'Enslaved field workers cutting sugar cane at harvest', 'A British governor and his family at their estate'], [[44, 36, 24, 50], [72, 52, 26, 34]]);
})(window.WALKTHROUGH);
