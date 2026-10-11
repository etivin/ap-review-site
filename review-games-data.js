/* review-games-data.js: the content for each unit's in-page review games
   (Jeopardy, Narrative Matching, Sort It, Speed Quiz, Timeline Builder,
   Asteroid Blaster), drawn by review-games.js on the unit's Games tab.
   Edit a unit's games here. Shape of each unit: see the top of review-games.js.
   Units 2-4 leave out "matching" because their Games tab already has its own
   Narrative Matching game. Units 6 and 7 add the Source Line Warm-up ("warmup"). */
window.GAME_DATA = {
  1: {
    jeopardy: [
      { name: "Song China", questions: [
        { clue: "Merit-based test on the Confucian classics used to choose Song government officials", answer: "The civil service examination", explanation: "The exams created a scholar-gentry class and allowed limited social mobility, though years of study favored wealthy families." },
        { clue: "Fast-ripening, drought-resistant rice from Vietnam that allowed two harvests a year", answer: "Champa rice", explanation: "Champa rice boosted food supply and helped China's population grow rapidly during the Song dynasty." },
        { clue: "Revived Confucian philosophy that blended in Buddhist and Daoist ideas", answer: "Neo-Confucianism", explanation: "Neo-Confucianism reinforced filial piety and social hierarchy, including the subordination of women." },
        { clue: "Practice of tightly binding elite girls' feet, a symbol of status and of women's restricted roles", answer: "Foot binding", explanation: "Foot binding spread among the elite during the Song and limited women's mobility and work outside the home." },
        { clue: "The Song became the first government in the world to issue this, easing large-scale commerce", answer: "Paper money", explanation: "Government paper money supported Song China's highly commercialized economy." }
      ]},
      { name: "Dar al-Islam", questions: [
        { clue: "Baghdad center of learning where scholars translated Greek, Persian, and Indian texts", answer: "The House of Wisdom", explanation: "The translation movement preserved and expanded classical knowledge in mathematics, medicine, and astronomy." },
        { clue: "Turkic group that took real power from the Abbasids in the eleventh century while the caliph stayed on as a figurehead", answer: "The Seljuk Turks", explanation: "The Seljuks show how the Abbasid caliphate fragmented as new Turkic Muslim states rose." },
        { clue: "Mystical branch of Islam whose missionaries helped spread the faith", answer: "Sufism", explanation: "Sufis blended Islam with local traditions, helping it spread in South and Southeast Asia and Africa." },
        { clue: "Muslim state in northern India founded in 1206", answer: "The Delhi Sultanate", explanation: "It brought Islamic rule to northern India, though most of the population remained Hindu." },
        { clue: "The Mongols destroyed this Abbasid capital in 1258", answer: "Baghdad", explanation: "The sack of Baghdad ended the Abbasid caliphate in its traditional form." }
      ]},
      { name: "South & SE Asia", questions: [
        { clue: "Vast temple complex built by the Khmer Empire, first Hindu and later Buddhist", answer: "Angkor Wat", explanation: "Angkor Wat shows the influence of Indian religions in Southeast Asia." },
        { clue: "Hindu devotional movement that stressed a personal bond with a god and was open to all castes", answer: "The Bhakti movement", explanation: "Bhakti made Hinduism more accessible and helped it hold its ground against Buddhism and Islam." },
        { clue: "Sea-based Buddhist empire that grew rich by controlling the Strait of Malacca", answer: "Srivijaya", explanation: "Srivijaya taxed the ships passing between the Indian Ocean and the South China Sea." },
        { clue: "South Indian Hindu kingdom founded in 1336 that resisted the Delhi Sultanate", answer: "Vijayanagara", explanation: "Vijayanagara became a powerful Hindu state in southern India." },
        { clue: "South Indian Hindu kingdom with a powerful navy that traded across the Indian Ocean (c. 850–1279)", answer: "The Chola", explanation: "The Chola used sea power to dominate trade and raid as far as Srivijaya." }
      ]},
      { name: "The Americas", questions: [
        { clue: "Aztec capital built on an island in Lake Texcoco", answer: "Tenochtitlan", explanation: "Tenochtitlan was one of the largest cities in the world in the 1400s." },
        { clue: "Inca system of mandatory public labor owed to the state", answer: "Mit'a", explanation: "Mit'a workers built Inca roads, terraces, and fortresses." },
        { clue: "Floating gardens the Aztecs built to farm in shallow lake water", answer: "Chinampas", explanation: "Chinampas produced enough food to feed Tenochtitlan's large population." },
        { clue: "The Inca connected their empire with a network of these, more than 20,000 miles long", answer: "Roads", explanation: "Roads and relay runners let the Inca move armies, goods, and messages across the Andes." },
        { clue: "Mississippian city near modern St. Louis known for its large earthen mounds", answer: "Cahokia", explanation: "Cahokia was the largest city in North America north of Mexico around 1100." }
      ]},
      { name: "Africa", questions: [
        { clue: "Mali ruler whose 1324 pilgrimage to Mecca displayed enormous wealth", answer: "Mansa Musa", explanation: "He gave away so much gold in Cairo that its value fell, spreading Mali's fame." },
        { clue: "East African coastal trading cities whose language blended Bantu and Arabic", answer: "The Swahili city-states", explanation: "Cities like Kilwa and Mombasa grew rich from Indian Ocean trade, and many residents converted to Islam." },
        { clue: "Ethiopian Christian king who ordered churches carved out of solid rock", answer: "Lalibela", explanation: "The rock-hewn churches show the strength of Christianity in the Ethiopian kingdom." },
        { clue: "Mali city famous as a center of Islamic learning", answer: "Timbuktu", explanation: "Timbuktu's mosques and libraries drew scholars from across the Muslim world." },
        { clue: "Southern African state known for massive stone enclosures, wealthy from the gold trade", answer: "Great Zimbabwe", explanation: "Great Zimbabwe traded gold to the Swahili coast, linking it to Indian Ocean networks." }
      ]},
      { name: "Medieval Europe", questions: [
        { clue: "Political system in which lords granted land to vassals in exchange for military service", answer: "Feudalism", explanation: "Feudalism decentralized political power among lords and knights." },
        { clue: "Unfree peasants bound to the land they farmed", answer: "Serfs", explanation: "Serfs owed labor and goods to their lords under the manorial system." },
        { clue: "1215 English document that limited the king's power", answer: "The Magna Carta", explanation: "English barons forced King John to accept limits on royal authority." },
        { clue: "Religious wars, beginning in 1095, to take control of the Holy Land", answer: "The Crusades", explanation: "The Crusades increased European contact with and demand for goods from the Islamic world." },
        { clue: "Pandemic of the mid-1300s that killed roughly a third of Europe's population", answer: "The Black Death", explanation: "The plague spread along trade routes and caused labor shortages that weakened serfdom." }
      ]}
    ],
    matching: { success: "From Song China to the Swahili coast, you connected all the pieces.", pairs: [
      { left: "Champa rice introduced to China", right: "Population growth and expanding commercial agriculture in Song China" },
      { left: "Song civil service examinations", right: "Created a scholar-gentry class of Confucian-educated officials" },
      { left: "Spread of Neo-Confucianism", right: "Reinforced filial piety and a patriarchal family hierarchy" },
      { left: "Translation work at the House of Wisdom", right: "Preserved and expanded Greek, Persian, and Indian learning" },
      { left: "Sufi missionaries", right: "Spread Islam by blending it with local religious practices" },
      { left: "Delhi Sultanate rule in northern India", right: "Brought Islamic rule to India while most people remained Hindu" },
      { left: "Control of the Strait of Malacca", right: "Made Srivijaya wealthy by taxing sea trade" },
      { left: "Chinampa farming", right: "Fed the large urban population of Tenochtitlan" },
      { left: "The Inca mit'a labor system", right: "Built roads, terraces, and fortresses across the Andes" },
      { left: "Swahili city-states' Indian Ocean trade", right: "Blended Bantu and Arabic language and spread Islam along the East African coast" },
      { left: "Mansa Musa's pilgrimage to Mecca", right: "Spread Mali's fame and drew Muslim scholars to Timbuktu" },
      { left: "Feudal obligations between lords and vassals", right: "Decentralized political power in medieval Europe" }
    ]},
    sortit: [
      { text: "Ibn Battuta, a Muslim legal scholar from Morocco, wrote his account of Mali for a Muslim audience, which means he likely praises Malians' devotion to Islam but criticizes customs that differed from his idea of proper Islamic practice.", earns: true, explain: "<strong>Earns the point.</strong> Uses the author's background and audience and explains how they shape what he praises and criticizes." },
      { text: "The account of Mansa Musa's pilgrimage was written in the fourteenth century.", earns: false, explain: "<strong>Doesn't earn the point.</strong> Gives a date but never explains why that historical situation matters for the source." },
      { text: "Because the Song civil service rules were issued by the imperial government, their purpose was to recruit loyal, educated officials, which means they present the system as open to talent while leaving out how few poor families could afford years of study.", earns: true, explain: "<strong>Earns the point.</strong> Identifies the purpose and explains what the source emphasizes and leaves out as a result." },
      { text: "This source is from Song China, so it shows the Chinese point of view.", earns: false, explain: "<strong>Doesn't earn the point.</strong> \"Shows the Chinese point of view\" is vague and circular. It never says whose view or how it shapes the source." },
      { text: "Since the Magna Carta was forced on King John by rebellious barons in 1215, it may protect nobles' rights more than ordinary people's, which means it shows that early limits on royal power were won by and for the elite.", earns: true, explain: "<strong>Earns the point.</strong> Uses the historical situation and explains its consequence for whose rights the document protects." },
      { text: "Zhou Daguan's account of Angkor is a primary source, so it is reliable.", earns: false, explain: "<strong>Doesn't earn the point.</strong> Being a primary source does not make a document reliable. No HAPP feature is analyzed." },
      { text: "Because the Chinese official Zhou Daguan visited Angkor with a Yuan dynasty embassy in 1296, he may describe Khmer customs as strange compared with Chinese norms, which means his account reveals Chinese attitudes as well as Khmer life.", earns: true, explain: "<strong>Earns the point.</strong> Uses point of view and explains how it shapes the description." },
      { text: "This document is important because it tells us a lot about Mali.", earns: false, explain: "<strong>Doesn't earn the point.</strong> Says nothing about who made the source, why, when, or for whom." }
    ],
    speedquiz: [
      { q: "Champa rice came to China from", o: ["Vietnam","Japan","India","Korea"], c: 0, e: "Champa rice came from the kingdom of Champa in what is now Vietnam." },
      { q: "Song dynasty officials were chosen mainly through", o: ["Inherited noble titles","Civil service examinations","Popular elections","Military victories"], c: 1, e: "The exams on the Confucian classics created a merit-based bureaucracy." },
      { q: "The House of Wisdom was located in", o: ["Cairo","Córdoba","Baghdad","Delhi"], c: 2, e: "The Abbasid capital of Baghdad was the center of the translation movement." },
      { q: "Angkor Wat was built by the", o: ["Srivijaya Empire","Chola kingdom","Delhi Sultanate","Khmer Empire"], c: 3, e: "The Khmer Empire of Cambodia built Angkor Wat in the 1100s." },
      { q: "The Delhi Sultanate was founded in", o: ["1066","1206","1453","1526"], c: 1, e: "Turkic Muslim rulers founded the Delhi Sultanate in 1206." },
      { q: "The Inca mit'a system required people to provide", o: ["Labor for state projects","Silver for the emperor","Soldiers for the Crusades","Tribute in cacao beans"], c: 0, e: "Mit'a was a rotating labor obligation used for roads, farms, and buildings." },
      { q: "The Aztec capital of Tenochtitlan was built", o: ["High in the Andes","On the Yucatán coast","On an island in a lake","Along the Mississippi River"], c: 2, e: "Tenochtitlan stood on an island in Lake Texcoco, fed by chinampa farms." },
      { q: "Mansa Musa ruled the empire of", o: ["Ghana","Songhai","Ethiopia","Mali"], c: 3, e: "Mansa Musa ruled Mali and made his famous pilgrimage to Mecca in 1324." },
      { q: "The Swahili language blended", o: ["Bantu and Arabic","Latin and Greek","Persian and Turkish","Chinese and Malay"], c: 0, e: "Swahili grew from Bantu languages with heavy Arabic influence through Indian Ocean trade." },
      { q: "Great Zimbabwe grew wealthy mainly from", o: ["The silk trade","The slave trade to the Americas","The gold trade","Spice plantations"], c: 2, e: "Great Zimbabwe controlled gold exported through the Swahili coast." },
      { q: "The Magna Carta (1215)", o: ["Created the English Parliament as a democracy","Limited the power of the English king","Started the Crusades","Ended feudalism in England"], c: 1, e: "English barons forced King John to accept limits on his authority." },
      { q: "Under feudalism, vassals received land in exchange for", o: ["Military service","Paying taxes in silver","Religious conversion","Votes in elections"], c: 0, e: "Lords granted fiefs to vassals who owed them military service and loyalty." },
      { q: "Sufism is best described as", o: ["A Hindu devotional movement","A school of Confucian thought","A mystical form of Islam","A Christian monastic order"], c: 2, e: "Sufi mystics sought a personal experience of God and helped spread Islam." },
      { q: "The Bhakti movement emphasized", o: ["Strict caste rules set by Brahmin priests","Personal devotion to a god","Conversion to Islam through Sufi preachers","Buddhist monasticism"], c: 1, e: "Bhakti welcomed devotees of all castes and stressed love for a god such as Vishnu or Shiva." },
      { q: "Cahokia was a city built by the", o: ["Aztec Empire","Maya city-states","Inca Empire","Mississippians"], c: 3, e: "Cahokia, near modern St. Louis, was the largest Mississippian city." }
    ],
    timeline: [
      { title: "Song dynasty founded in China", year: 960 },
      { title: "First Crusade begins", year: 1095 },
      { title: "Delhi Sultanate founded", year: 1206 },
      { title: "Magna Carta limits the English king", year: 1215 },
      { title: "Mongols sack Baghdad", year: 1258 },
      { title: "Mansa Musa's pilgrimage to Mecca", year: 1324 },
      { title: "Aztecs found Tenochtitlan", year: 1345, label: "c. 1345" },
      { title: "Vijayanagara kingdom founded", year: 1336 },
      { title: "Black Death reaches Europe", year: 1347 },
      { title: "Pachacuti begins expanding the Inca Empire", year: 1438 }
    ],
    asteroid: [
      { q: "Champa rice came from:", o: ["Japan","Vietnam","Korea","India"], c: 1 },
      { q: "The Aztec capital was:", o: ["Tenochtitlan","Cuzco","Cahokia","Timbuktu"], c: 0 },
      { q: "The Inca labor system was the:", o: ["Encomienda","Hacienda","Mit'a","Jizya"], c: 2 },
      { q: "Mali king famous for his 1324 pilgrimage:", o: ["Sundiata","Ezana","Askia","Mansa Musa"], c: 3 },
      { q: "Khmer temple complex:", o: ["Angkor Wat","Borobudur","Taj Mahal","Hagia Sophia"], c: 0 },
      { q: "Abbasid center of learning:", o: ["Forbidden City","House of Wisdom","Alhambra","Topkapi Palace"], c: 1 },
      { q: "1215 document limiting the English king:", o: ["Domesday Book","Bill of Rights","Magna Carta","Edict of Nantes"], c: 2 },
      { q: "Mystical branch of Islam:", o: ["Bhakti","Daoism","Legalism","Sufism"], c: 3 },
      { q: "Stone city in southern Africa:", o: ["Great Zimbabwe","Kilwa","Axum","Djenné"], c: 0 },
      { q: "Empire controlling the Strait of Malacca:", o: ["Khmer","Srivijaya","Vijayanagara","Champa"], c: 1 },
      { q: "Song philosophy blending Confucianism and Buddhism:", o: ["Legalism","Shinto","Neo-Confucianism","Daoism"], c: 2 },
      { q: "Mississippian mound city:", o: ["Cuzco","Tikal","Machu Picchu","Cahokia"], c: 3 }
    ]
  },

  2: {
    jeopardy: [
      { name: "Silk Roads", questions: [
        { clue: "Roadside inns that sheltered caravans and merchants along trade routes", answer: "Caravanserai", explanation: "Caravanserai made long-distance trade safer and helped spread goods and ideas." },
        { clue: "Chinese paper credit that let merchants deposit money in one city and withdraw it in another", answer: "Flying cash", explanation: "Flying cash meant merchants did not have to carry heavy coins over long distances." },
        { clue: "Central Asian merchant people who dominated early Silk Road trade", answer: "The Sogdians", explanation: "Sogdian merchant communities stretched from Central Asia into China." },
        { clue: "Luxury cloth from China that gave the Silk Roads their name", answer: "Silk", explanation: "Because transport was costly, mostly high-value luxury goods traveled the land routes." },
        { clue: "Chinese manufactured good prized for its fine white glaze and exported in huge quantities", answer: "Porcelain", explanation: "Chinese porcelain was in demand from the Middle East to East Africa." }
      ]},
      { name: "Mongol Empire", questions: [
        { clue: "He united the Mongol tribes and was proclaimed their ruler in 1206", answer: "Genghis (Chinggis) Khan", explanation: "His conquests began the largest contiguous land empire in history." },
        { clue: "Period of Mongol-enforced stability that made Eurasian trade safer", answer: "The Pax Mongolica", explanation: "Mongol protection of the Silk Roads revived trade and cultural exchange." },
        { clue: "Mongol khanate in Russia that collected tribute from Russian princes", answer: "The Golden Horde", explanation: "Russian princes ruled locally but paid tribute to the Mongols for over two centuries." },
        { clue: "Mongol dynasty that ruled China, founded by Kublai Khan", answer: "The Yuan dynasty", explanation: "The Yuan ruled China until 1368, when the Ming dynasty replaced it." },
        { clue: "Mongol relay system of stations and riders that carried messages across the empire", answer: "The yam", explanation: "The yam sped communication and helped hold the vast empire together." }
      ]},
      { name: "Indian Ocean", questions: [
        { clue: "Seasonal winds that made Indian Ocean sailing predictable", answer: "The monsoon winds", explanation: "Sailors timed voyages to the monsoons, which reversed direction with the seasons." },
        { clue: "Ming admiral who led huge treasure fleets from 1405 to 1433", answer: "Zheng He", explanation: "His voyages displayed Ming power and collected tribute as far as East Africa." },
        { clue: "Sailing ship with triangular sails used by Arab and Swahili merchants", answer: "The dhow", explanation: "Dhows carried goods across the western Indian Ocean." },
        { clue: "This sultanate controlled the key strait between the Indian Ocean and South China Sea and grew rich in the 1400s", answer: "Malacca (Melaka)", explanation: "Malacca's rulers converted to Islam, and the city became a hub of Indian Ocean trade." },
        { clue: "Communities of merchants living far from home, such as Arab traders in Chinese ports", answer: "Diasporic communities", explanation: "Diasporic merchants spread their religions, languages, and customs to new places." }
      ]},
      { name: "Trans-Saharan", questions: [
        { clue: "Animal whose use, with improved saddles, made crossing the Sahara possible", answer: "The camel", explanation: "Camel caravans could carry heavy loads across long stretches of desert." },
        { clue: "West Africa traded this precious metal for this mineral from the Sahara", answer: "Gold for salt", explanation: "The gold-salt trade made West African kingdoms like Ghana and Mali rich." },
        { clue: "West African kingdom before Mali, known as the 'land of gold'", answer: "Ghana", explanation: "Ancient Ghana taxed the gold trade passing through its territory." },
        { clue: "Moroccan traveler who visited Mali in 1352 and described it", answer: "Ibn Battuta", explanation: "His travels across Dar al-Islam show how connected the Muslim world had become." },
        { clue: "Mali city famous for its mud-brick Great Mosque", answer: "Djenné", explanation: "Djenné was a major trade and Islamic learning center in West Africa." }
      ]},
      { name: "Cultural Exchange", questions: [
        { clue: "Venetian merchant whose account of Kublai Khan's China fascinated Europeans", answer: "Marco Polo", explanation: "His stories of Chinese wealth increased European interest in Asian trade." },
        { clue: "Religion that spread from India to East Asia along the Silk Roads", answer: "Buddhism", explanation: "Buddhism adapted to local cultures as it spread to China, Korea, and Japan." },
        { clue: "Deadly pandemic that spread along trade routes in the 1340s", answer: "The Black Death", explanation: "The same networks that carried goods also carried disease." },
        { clue: "Two Chinese inventions that traveled west and changed warfare and record-keeping", answer: "Gunpowder and paper", explanation: "Both spread through the Islamic world to Europe." },
        { clue: "Language of the East African coast that blended Bantu and Arabic", answer: "Swahili", explanation: "Swahili shows how Indian Ocean trade blended cultures." }
      ]},
      { name: "Environmental Effects", questions: [
        { clue: "Fast-ripening crop that spread from Vietnam to China", answer: "Champa rice", explanation: "It raised China's food supply and population." },
        { clue: "Disease carried by fleas on rats along trade routes", answer: "Bubonic plague", explanation: "Bubonic plague caused the Black Death of the 1340s and 1350s." },
        { clue: "Crop that spread across the Indian Ocean to East Africa and supported population growth", answer: "Bananas", explanation: "Bananas from Southeast Asia became a staple in parts of Africa." },
        { clue: "Muslim traders spread this sweet crop from South Asia to the Middle East and the Mediterranean", answer: "Sugarcane", explanation: "Sugar spread with Islamic agricultural knowledge long before the Atlantic plantations." },
        { clue: "Approximate share of Europe's population killed by the Black Death", answer: "About one-third", explanation: "The massive death toll caused labor shortages and social upheaval." }
      ]}
    ],
    sortit: [
      { text: "Because Ibn Battuta was a Muslim legal scholar traveling across Dar al-Islam, he judged the societies he visited by Islamic law, which means his accounts of places like Mali emphasize how well people followed Islam.", earns: true, explain: "<strong>Earns the point.</strong> Uses the author's background and explains how it shapes what he emphasizes." },
      { text: "Marco Polo wrote a book about his travels to China.", earns: false, explain: "<strong>Doesn't earn the point.</strong> Describes the source but explains nothing about why its author or context matters." },
      { text: "Since Marco Polo's account was written down by a writer of romances while Polo was in prison in Genoa, it may exaggerate the wonders of Kublai Khan's court, which means historians should use it carefully as evidence of China's wealth.", earns: true, explain: "<strong>Earns the point.</strong> Uses the historical situation of the writing and explains its effect on reliability." },
      { text: "This source is about the Mongols, so it shows how the Mongols lived.", earns: false, explain: "<strong>Doesn't earn the point.</strong> Restates the topic. No HAPP feature is named or explained." },
      { text: "Because the Chinese official Zhao Rugua wrote about foreign lands while overseeing maritime trade for the Song government, his purpose was to inform officials about trading partners, which means he focuses on goods and ports more than on local customs.", earns: true, explain: "<strong>Earns the point.</strong> Identifies the purpose and explains how it shapes the content." },
      { text: "The author is biased because he is from Europe.", earns: false, explain: "<strong>Doesn't earn the point.</strong> \"Biased\" alone is not analysis. It never explains how being European shapes the source." },
      { text: "Since the Persian historian Juvaini served the Mongol rulers he wrote about, he may soften Mongol violence, which means his account of the conquests could be less critical than those by people the Mongols conquered.", earns: true, explain: "<strong>Earns the point.</strong> Uses point of view and explains its likely effect on the account." },
      { text: "This document was written in the fourteenth century, during the time period.", earns: false, explain: "<strong>Doesn't earn the point.</strong> A date is not historical situation. It needs to explain what was happening and why it matters." }
    ],
    speedquiz: [
      { q: "Caravanserai were", o: ["Roadside inns for merchants","Chinese paper money notes","Mongol postal relay riders","Arab ships for monsoon trade"], c: 0, e: "Caravanserai gave caravans safe places to rest, trade, and exchange ideas." },
      { q: "The Pax Mongolica refers to", o: ["A Mongol religious code that all subjects had to follow","Stability under Mongol rule that made trade safer","A peace treaty between China and Japan","Mongol laws that limited trade with China"], c: 1, e: "Mongol control of Eurasia protected merchants and revived the Silk Roads." },
      { q: "Zheng He's voyages were sponsored by the", o: ["Yuan dynasty","Song dynasty","Ming dynasty","Qing dynasty"], c: 2, e: "The Ming emperor Yongle sent Zheng He's fleets between 1405 and 1433." },
      { q: "Indian Ocean trade was shaped above all by", o: ["The Gulf Stream","Ice-free northern ports","Caravan routes","Seasonal monsoon winds"], c: 3, e: "Merchants timed their voyages to the monsoons." },
      { q: "Trans-Saharan gold came mainly from", o: ["West Africa","Egypt","Persia","East Africa's Swahili coast"], c: 0, e: "Gold from West African fields was traded north across the Sahara for salt." },
      { q: "The camel saddle was important because it", o: ["Allowed cavalry charges in Europe","Made large-scale trade across the Sahara possible","Was used to carry silk to China","Replaced ships in the Indian Ocean"], c: 1, e: "Better saddles let camels carry heavy loads across the desert." },
      { q: "The Black Death spread mainly through", o: ["Contaminated drinking water in cities","Mosquitoes in warm, wet climates","Fleas on rats along trade routes","Volcanic ash from Asian eruptions"], c: 2, e: "Plague bacteria spread through fleas carried along Eurasian trade networks." },
      { q: "The Yuan dynasty was founded by", o: ["Genghis Khan","Zheng He","Hongwu","Kublai Khan"], c: 3, e: "Kublai Khan, Genghis Khan's grandson, founded the Yuan dynasty in China." },
      { q: "Mansa Musa's pilgrimage to Mecca", o: ["Displayed Mali's wealth so lavishly that gold lost value","Converted Mali's rulers and people to Christianity","Ended the trans-Saharan gold and salt trade for good","Was cut short by the Black Death in Egypt"], c: 0, e: "His spending spread Mali's fame across the Mediterranean world." },
      { q: "The Swahili city-states were located on", o: ["The West African coast","The East African coast","The Red Sea coast of Arabia","The Malabar coast of India"], c: 1, e: "Cities like Kilwa and Mombasa thrived on Indian Ocean trade." },
      { q: "Ibn Battuta was a", o: ["Chinese admiral of the Ming fleet","Venetian merchant at the Mongol court","Moroccan traveler and scholar","Mongol khan of the Golden Horde"], c: 2, e: "Ibn Battuta traveled across Africa, the Middle East, and Asia in the 1300s." },
      { q: "'Flying cash' was", o: ["Mongol tribute","Gold coins from Mali","Arab bills of exchange","Chinese paper credit"], c: 3, e: "Merchants deposited money in one place and withdrew it in another." },
      { q: "Marco Polo served at the court of", o: ["Kublai Khan","Mansa Musa","The Ottoman sultan","The Abbasid caliph"], c: 0, e: "Marco Polo said he spent years in the service of Kublai Khan." },
      { q: "Champa rice spread from Vietnam to", o: ["Japan","China","India","Africa"], c: 1, e: "Champa rice allowed multiple harvests and fueled population growth in China." },
      { q: "Malacca became important because it", o: ["Produced most of the world's silk","Was the capital of the Mongol Empire","Controlled a key strait for Indian Ocean trade","Was the starting point of the trans-Saharan trade"], c: 2, e: "Malacca's rulers taxed and protected the shipping passing through the strait." }
    ],
    timeline: [
      { title: "Genghis Khan proclaimed ruler of the Mongols", year: 1206 },
      { title: "Mongols sack Baghdad", year: 1258 },
      { title: "Kublai Khan founds the Yuan dynasty", year: 1271 },
      { title: "Marco Polo reaches Kublai Khan's court", year: 1275 },
      { title: "Mansa Musa's pilgrimage to Mecca", year: 1324 },
      { title: "Black Death reaches Europe", year: 1347 },
      { title: "Ibn Battuta visits Mali", year: 1352 },
      { title: "Ming dynasty replaces the Yuan", year: 1368 },
      { title: "Zheng He's first voyage", year: 1405 },
      { title: "Zheng He's voyages end", year: 1433 }
    ],
    asteroid: [
      { q: "Inns along the Silk Roads:", o: ["Madrasas","Caravanserai","Pagodas","Dhows"], c: 1 },
      { q: "Founder of the Mongol Empire:", o: ["Genghis Khan","Zheng He","Mansa Musa","Marco Polo"], c: 0 },
      { q: "Ming admiral of the treasure fleets:", o: ["Kublai Khan","Ibn Battuta","Zheng He","Marco Polo"], c: 2 },
      { q: "Winds that drove Indian Ocean trade:", o: ["Trade winds","Westerlies","Jet stream","Monsoons"], c: 3 },
      { q: "Pack animal of the Sahara trade:", o: ["Camel","Horse","Llama","Elephant"], c: 0 },
      { q: "Traded for West African gold:", o: ["Silk","Salt","Spices","Tea"], c: 1 },
      { q: "Mongol dynasty in China:", o: ["Ming","Song","Yuan","Qing"], c: 2 },
      { q: "Pandemic of the 1340s:", o: ["Smallpox","Influenza","Cholera","Black Death"], c: 3 },
      { q: "Language of the East African coast:", o: ["Swahili","Amharic","Hausa","Yoruba"], c: 0 },
      { q: "Moroccan traveler of the 1300s:", o: ["Marco Polo","Ibn Battuta","Zheng He","Xuanzang"], c: 1 },
      { q: "Sultanate on the strait to the South China Sea:", o: ["Hormuz","Gibraltar","Malacca","Bosporus"], c: 2 },
      { q: "Mongol khanate in Russia:", o: ["Ilkhanate","Chagatai","Yuan","Golden Horde"], c: 3 }
    ]
  },

  3: {
    jeopardy: [
      { name: "Ottomans", questions: [
        { clue: "Ottoman sultan who conquered Constantinople in 1453", answer: "Mehmed II", explanation: "The conquest ended the Byzantine Empire, and the city became the Ottoman capital, Istanbul." },
        { clue: "Ottoman levy that took Christian boys, converted them, and trained them as soldiers or officials", answer: "The devshirme", explanation: "The devshirme created a corps of servants loyal only to the sultan." },
        { clue: "Elite Ottoman infantry recruited through the devshirme", answer: "The Janissaries", explanation: "The Janissaries were among the first standing armies to use firearms on a large scale." },
        { clue: "Ottoman sultan known as 'the Lawgiver,' who ruled at the empire's height", answer: "Suleiman the Magnificent", explanation: "Suleiman expanded the empire and reorganized its legal system in the 1500s." },
        { clue: "System that let religious communities govern their own internal affairs under Ottoman rule", answer: "The millet system", explanation: "It allowed Christians and Jews limited self-government in exchange for loyalty and taxes." }
      ]},
      { name: "Safavids & Mughals", questions: [
        { clue: "Shia empire in Persia founded by Ismail I in 1501", answer: "The Safavid Empire", explanation: "The Safavids made Shia Islam the state religion, setting them against the Sunni Ottomans." },
        { clue: "Mughal emperor who promoted religious tolerance and abolished the jizya", answer: "Akbar", explanation: "Akbar won support from his Hindu majority through tolerance and alliances." },
        { clue: "Tomb built by Shah Jahan for his wife Mumtaz Mahal", answer: "The Taj Mahal", explanation: "It is a famous example of monumental architecture used to display a ruler's power." },
        { clue: "1514 battle in which Ottoman cannons and muskets defeated the Safavids", answer: "The Battle of Chaldiran", explanation: "Chaldiran set the Ottoman-Safavid border and showed the power of gunpowder." },
        { clue: "Mughal emperor whose strict Islamic rule and reimposed jizya alienated many Hindus", answer: "Aurangzeb", explanation: "His policies sparked revolts that weakened the empire after his death in 1707." }
      ]},
      { name: "China & Russia", questions: [
        { clue: "Manchu dynasty that conquered China in 1644", answer: "The Qing dynasty", explanation: "The Qing were a minority ruling group that used Confucian institutions to govern the Han majority." },
        { clue: "Russian tsar who westernized Russia and built St. Petersburg", answer: "Peter the Great", explanation: "He modernized the army and bureaucracy along Western European lines." },
        { clue: "Qing emperor whose long reign (1661–1722) expanded and stabilized the empire", answer: "Kangxi", explanation: "Kangxi consolidated Qing rule and supported Confucian scholarship." },
        { clue: "Unfree Russian peasants bound to the land", answer: "Serfs", explanation: "Serfdom grew stronger in Russia even as it faded in Western Europe." },
        { clue: "Qing rulers required Han men to wear this hairstyle as a sign of loyalty", answer: "The queue", explanation: "The queue was a visible symbol of submission to Manchu rule." }
      ]},
      { name: "Ruling an Empire", questions: [
        { clue: "Tax on non-Muslims in Muslim-ruled states", answer: "The jizya", explanation: "Akbar abolished it in the Mughal Empire, and Aurangzeb brought it back." },
        { clue: "Local landholders who collected taxes for the Mughal state", answer: "Zamindars", explanation: "Zamindars kept a share of the revenue, which made them powerful local elites." },
        { clue: "Using grand buildings like Versailles or the Taj Mahal to display a ruler's power", answer: "Monumental architecture", explanation: "Rulers used architecture to legitimize and display their authority." },
        { clue: "Belief that a monarch's right to rule comes directly from God", answer: "Divine right", explanation: "European absolute monarchs used divine right to justify centralized power." },
        { clue: "French king who built Versailles and kept nobles at court to control them", answer: "Louis XIV", explanation: "Louis XIV is the classic example of an absolute monarch." }
      ]},
      { name: "Belief Systems", questions: [
        { clue: "Division in Islam that began over who should succeed Muhammad", answer: "The Sunni-Shia split", explanation: "The split shaped the rivalry between the Sunni Ottomans and the Shia Safavids." },
        { clue: "Monotheistic religion founded by Guru Nanak in the Punjab", answer: "Sikhism", explanation: "Sikhism drew on elements of both Hinduism and Islam." },
        { clue: "Form of Islam the Safavids made their state religion", answer: "Shia Islam", explanation: "Ismail I imposed Twelver Shi'ism on Persia." },
        { clue: "Akbar's blended faith combining elements of several religions", answer: "Din-i Ilahi", explanation: "It reflected Akbar's interest in religious tolerance but attracted few followers." },
        { clue: "Ottoman sultans claimed this title as leaders of the whole Muslim community after conquering Egypt in 1517", answer: "Caliph", explanation: "The title strengthened Ottoman claims to religious legitimacy." }
      ]},
      { name: "Reformations", questions: [
        { clue: "German monk who posted his Ninety-Five Theses in 1517", answer: "Martin Luther", explanation: "Luther's challenge to the Church began the Protestant Reformation." },
        { clue: "The Catholic Church's sale of these angered Luther", answer: "Indulgences", explanation: "Luther argued salvation came through faith, not purchased pardons." },
        { clue: "Catholic Church's response to Protestantism, including the Council of Trent", answer: "The Counter-Reformation", explanation: "The Church reformed abuses while reaffirming its doctrines." },
        { clue: "Reformer in Geneva who taught predestination", answer: "John Calvin", explanation: "Calvinism spread to Switzerland, the Netherlands, Scotland, and beyond." },
        { clue: "English king who broke with Rome so his marriage could be annulled", answer: "Henry VIII", explanation: "He created the Church of England with himself as its head." }
      ]}
    ],
    sortit: [
      { text: "Since Ogier Ghiselin de Busbecq was an ambassador from the Habsburgs, the Ottomans' main rivals, he may praise Ottoman promotion by merit in order to criticize his own aristocratic society, which means his admiration is also an argument about Europe.", earns: true, explain: "<strong>Earns the point.</strong> Uses point of view and purpose and explains how they shape the account." },
      { text: "Busbecq's letter was written in the 1500s.", earns: false, explain: "<strong>Doesn't earn the point.</strong> A date alone is not sourcing. It needs to explain why the context matters." },
      { text: "Because Abul Fazl was Akbar's court historian, his purpose was to glorify the emperor, which means his history likely presents Akbar's religious tolerance as wise policy and leaves out opposition to it.", earns: true, explain: "<strong>Earns the point.</strong> Identifies purpose and explains what it leads the source to emphasize and omit." },
      { text: "This source shows the Mughal point of view.", earns: false, explain: "<strong>Doesn't earn the point.</strong> Vague and circular. Whose view, and how does it shape the source?" },
      { text: "Since Martin Luther wrote the Ninety-Five Theses in 1517 to protest the sale of indulgences, the document focuses on abuses of Church authority, which means it challenges the Church's practices rather than Christianity itself.", earns: true, explain: "<strong>Earns the point.</strong> Uses historical situation and explains its consequence for the document's argument." },
      { text: "François Bernier's letter is biased because he was French.", earns: false, explain: "<strong>Doesn't earn the point.</strong> Calling a source biased is not analysis. How does his background shape what he writes?" },
      { text: "Because François Bernier wrote his account of the Mughal Empire for Colbert, the French finance minister, he focuses on the emperor's revenue and land system, which means the source is shaped by an audience interested in how a state raises money.", earns: true, explain: "<strong>Earns the point.</strong> Uses audience and explains how it shapes the content." },
      { text: "This picture of the Ottoman army is useful because it shows soldiers.", earns: false, explain: "<strong>Doesn't earn the point.</strong> Describes the image without any HAPP analysis." }
    ],
    speedquiz: [
      { q: "The Ottomans conquered Constantinople in", o: ["1453","1492","1517","1526"], c: 0, e: "Mehmed II's cannons broke the city's walls in 1453." },
      { q: "The Janissaries were", o: ["Persian tax collectors for the Safavid shah","Elite Ottoman infantry drawn from the devshirme","Russian nobles who served the tsar","Mughal court poets and painters"], c: 1, e: "Christian boys taken through the devshirme were trained as loyal soldiers." },
      { q: "The Safavid Empire's state religion was", o: ["Sunni Islam","Sikhism","Shia Islam","Zoroastrianism"], c: 2, e: "Ismail I made Shia Islam official, sharpening conflict with the Sunni Ottomans." },
      { q: "At the Battle of Chaldiran (1514)", o: ["The Mughals defeated the Safavids","The Russians defeated the Ottomans","The Safavids captured Istanbul","The Ottomans defeated the Safavids"], c: 3, e: "Ottoman firearms and artillery overwhelmed Safavid cavalry." },
      { q: "Akbar is known for", o: ["Religious tolerance and ending the jizya","Destroying Hindu temples across India","Building a new capital at St. Petersburg","Conquering Constantinople from the Byzantines"], c: 0, e: "Akbar sought the support of his Hindu majority through tolerance." },
      { q: "The Taj Mahal was built by", o: ["Akbar","Shah Jahan","Babur","Aurangzeb"], c: 1, e: "Shah Jahan built it as a tomb for his wife Mumtaz Mahal." },
      { q: "Aurangzeb weakened the Mughal Empire by", o: ["Converting to Hinduism and closing mosques","Ending all wars and disbanding the army","Imposing strict Islamic rule and the jizya","Moving the Mughal capital to Isfahan in Persia"], c: 2, e: "His policies alienated Hindus and Sikhs and provoked revolts." },
      { q: "The Qing dynasty was founded by the", o: ["Mongols","Han Chinese","Koreans","Manchus"], c: 3, e: "The Manchus took Beijing in 1644 and ruled China until 1912." },
      { q: "Peter the Great is best known for", o: ["Westernizing Russia","Ending serfdom","Converting Russia to Catholicism","Conquering China"], c: 0, e: "He modernized the army and government and built St. Petersburg." },
      { q: "Martin Luther posted his Ninety-Five Theses in", o: ["1453","1517","1648","1700"], c: 1, e: "His protest began the Protestant Reformation." },
      { q: "Sikhism was founded by", o: ["Akbar","Kabir","Guru Nanak","Ismail I"], c: 2, e: "Guru Nanak founded Sikhism in the Punjab around 1500." },
      { q: "Divine right is the belief that", o: ["The people choose their rulers","Religious leaders should rule","Kings must obey parliaments","A monarch's authority comes from God"], c: 3, e: "Absolute monarchs like Louis XIV used divine right to justify their power." },
      { q: "The jizya was", o: ["A tax on non-Muslims","A Mughal palace","A Safavid army unit","An Ottoman legal code"], c: 0, e: "Muslim rulers taxed non-Muslim subjects through the jizya." },
      { q: "The Council of Trent was part of", o: ["The Protestant Reformation","The Counter-Reformation","The Ottoman millet system","Peter the Great's reforms"], c: 1, e: "The Catholic Church met at Trent to reform abuses and reaffirm its doctrines." },
      { q: "Land-based empires of this era are often called 'gunpowder empires' because they", o: ["Traded mostly in gunpowder with Europe","Banned firearms to keep nobles weak","Used firearms to expand and hold power","Invented gunpowder in their own workshops"], c: 2, e: "Firearms and artillery helped the Ottomans, Safavids, and Mughals conquer and control territory." }
    ],
    timeline: [
      { title: "Ottomans conquer Constantinople", year: 1453 },
      { title: "Ismail I founds the Safavid Empire", year: 1501 },
      { title: "Battle of Chaldiran", year: 1514 },
      { title: "Luther's Ninety-Five Theses", year: 1517 },
      { title: "Babur founds the Mughal Empire", year: 1526 },
      { title: "Akbar becomes Mughal emperor", year: 1556 },
      { title: "Construction of the Taj Mahal begins", year: 1632 },
      { title: "Qing dynasty takes Beijing", year: 1644 },
      { title: "Aurangzeb takes the Mughal throne", year: 1658 },
      { title: "Peter the Great becomes tsar", year: 1682 }
    ],
    asteroid: [
      { q: "Elite Ottoman infantry:", o: ["Samurai","Janissaries","Cossacks","Mamluks"], c: 1 },
      { q: "Shia empire in Persia:", o: ["Safavid","Mughal","Ottoman","Qing"], c: 0 },
      { q: "Built the Taj Mahal:", o: ["Akbar","Babur","Shah Jahan","Aurangzeb"], c: 2 },
      { q: "Founder of Sikhism:", o: ["Akbar","Kabir","Ismail I","Guru Nanak"], c: 3 },
      { q: "Wrote the Ninety-Five Theses:", o: ["Martin Luther","John Calvin","Henry VIII","Erasmus"], c: 0 },
      { q: "Tax on non-Muslims:", o: ["Tithe","Jizya","Tribute","Corvée"], c: 1 },
      { q: "Manchu dynasty in China:", o: ["Ming","Yuan","Qing","Song"], c: 2 },
      { q: "Tsar who built St. Petersburg:", o: ["Ivan the Terrible","Nicholas II","Alexander II","Peter the Great"], c: 3 },
      { q: "City conquered by the Ottomans in 1453:", o: ["Constantinople","Vienna","Baghdad","Delhi"], c: 0 },
      { q: "King who built Versailles:", o: ["Henry VIII","Louis XIV","Philip II","Charles V"], c: 1 },
      { q: "Ottoman sultan called 'the Lawgiver':", o: ["Osman","Mehmed II","Suleiman","Selim I"], c: 2 },
      { q: "Akbar's blended faith:", o: ["Sikhism","Sufism","Bhakti","Din-i Ilahi"], c: 3 }
    ]
  },

  4: {
    jeopardy: [
      { name: "Ships & Navigation", questions: [
        { clue: "Small, fast Portuguese ship that could sail into the wind", answer: "The caravel", explanation: "Caravels combined square and lateen sails for long ocean voyages." },
        { clue: "Instrument for finding latitude from the position of the sun or stars", answer: "The astrolabe", explanation: "The astrolabe was refined by Islamic scholars and adopted by European navigators." },
        { clue: "Portuguese prince who sponsored voyages down the West African coast", answer: "Prince Henry the Navigator", explanation: "His patronage launched Portugal's age of exploration." },
        { clue: "Triangular sail, borrowed from Indian Ocean sailors, that let ships tack against the wind", answer: "The lateen sail", explanation: "European explorers adopted this Arab and Indian Ocean technology." },
        { clue: "Chinese invention that showed direction and spread to European sailors", answer: "The magnetic compass", explanation: "The compass let sailors navigate far from land." }
      ]},
      { name: "Explorers", questions: [
        { clue: "Genoese sailor who reached the Caribbean in 1492 for Spain", answer: "Christopher Columbus", explanation: "His voyages began sustained contact between the Eastern and Western Hemispheres." },
        { clue: "Portuguese explorer who reached India by sea in 1498", answer: "Vasco da Gama", explanation: "He opened a direct sea route from Europe to the Indian Ocean." },
        { clue: "Expedition that first sailed around the globe (1519–1522), though its leader died on the way", answer: "Magellan's expedition", explanation: "Magellan was killed in the Philippines; the survivors completed the voyage." },
        { clue: "Portuguese explorer who rounded the Cape of Good Hope in 1488", answer: "Bartolomeu Dias", explanation: "Dias proved ships could sail from the Atlantic into the Indian Ocean." },
        { clue: "1494 treaty dividing newly claimed lands between Spain and Portugal", answer: "The Treaty of Tordesillas", explanation: "The line explains why Brazil became Portuguese while most of the Americas went to Spain." }
      ]},
      { name: "Columbian Exchange", questions: [
        { clue: "Disease brought by Europeans that killed huge numbers of Native Americans", answer: "Smallpox", explanation: "Native peoples had no immunity, and epidemics killed a large majority of the population." },
        { clue: "American crop that boosted population growth in Europe, especially Ireland", answer: "The potato", explanation: "Potatoes produced many calories on small plots of land." },
        { clue: "Animal brought by the Spanish that transformed the lives of Plains peoples", answer: "The horse", explanation: "Horses changed hunting and warfare on the Great Plains." },
        { clue: "Cash crop grown on Caribbean and Brazilian plantations with enslaved African labor", answer: "Sugar", explanation: "Sugar plantations drove the demand that expanded the Atlantic slave trade." },
        { clue: "Term for the transfer of plants, animals, diseases, and people between the hemispheres after 1492", answer: "The Columbian Exchange", explanation: "It reshaped diets, populations, and environments around the world." }
      ]},
      { name: "Maritime Empires", questions: [
        { clue: "Spanish conquistador who conquered the Aztec Empire in 1521", answer: "Hernán Cortés", explanation: "Cortés was aided by Native allies and by smallpox." },
        { clue: "Mountain in the Andes that became the Spanish Empire's richest silver mine", answer: "Potosí", explanation: "Potosí silver flowed to Europe and across the Pacific to China." },
        { clue: "Spanish galleons carried American silver from Acapulco to this Philippine city to buy Chinese goods", answer: "Manila", explanation: "The Manila galleons created the first regular trade route linking the Americas and Asia." },
        { clue: "Dutch joint-stock company that dominated the Indonesian spice trade", answer: "The Dutch East India Company (VOC)", explanation: "Joint-stock companies spread risk among investors and acted almost like states." },
        { clue: "System of passes Portugal forced Indian Ocean merchants to buy, backed by armed ships", answer: "The cartaz system", explanation: "Portugal used naval power to tax and control existing Indian Ocean trade." }
      ]},
      { name: "Labor Systems", questions: [
        { clue: "Spanish grant that gave colonists the labor and tribute of Native people", answer: "The encomienda", explanation: "Encomiendas led to severe abuses of Native laborers." },
        { clue: "Inca labor draft that the Spanish adapted to force Native men to work in silver mines", answer: "The mit'a", explanation: "Spanish mit'a labor at Potosí was brutal and deadly." },
        { clue: "Workers who agreed to labor for several years in exchange for passage to the colonies", answer: "Indentured servants", explanation: "Many early English colonists came as indentured servants." },
        { clue: "Name for the forced voyage of enslaved Africans across the Atlantic", answer: "The Middle Passage", explanation: "Crowded, deadly conditions killed many captives during the crossing." },
        { clue: "Large estates in Spanish America that produced food and goods with dependent laborers", answer: "Haciendas", explanation: "Haciendas concentrated land and power in the hands of a small elite." }
      ]},
      { name: "Society & Resistance", questions: [
        { clue: "Social hierarchy in Spanish America based on birthplace and ancestry", answer: "The casta system", explanation: "Peninsulares sat at the top, with creoles, mestizos, and others below." },
        { clue: "People of Spanish descent born in the Americas", answer: "Creoles (criollos)", explanation: "Creoles resented the power of Spanish-born peninsulares." },
        { clue: "1680 Native revolt in New Mexico that drove out the Spanish for twelve years", answer: "The Pueblo Revolt", explanation: "Pueblo peoples rose against forced labor and the suppression of their religion." },
        { clue: "Queen of Ndongo and Matamba who resisted Portuguese expansion in Angola", answer: "Queen Nzinga (Njinga)", explanation: "Nzinga used diplomacy and war to resist Portuguese control for decades." },
        { clue: "Communities of people who escaped slavery, such as Palmares in Brazil", answer: "Maroon communities", explanation: "Maroons resisted slavery by building independent settlements." }
      ]}
    ],
    sortit: [
      { text: "Since Bartolomé de las Casas was a Spanish priest who wanted the Crown to protect Native people, he may exaggerate the cruelty of the conquistadors, which means his account is strong evidence of Spanish abuses but less reliable for exact death tolls.", earns: true, explain: "<strong>Earns the point.</strong> Uses point of view and purpose and explains the effect on reliability." },
      { text: "Christopher Columbus wrote a letter in 1493.", earns: false, explain: "<strong>Doesn't earn the point.</strong> Identifies the source but never explains why the author or date matters." },
      { text: "Because Columbus's 1493 letter was written to persuade his royal sponsors to fund more voyages, he emphasizes gold and how easily the Taíno could be converted, which means he plays down the difficulties of the voyage.", earns: true, explain: "<strong>Earns the point.</strong> Identifies purpose and audience and explains what the letter emphasizes as a result." },
      { text: "This painting of the Middle Passage is sad, so it shows that slavery was bad.", earns: false, explain: "<strong>Doesn't earn the point.</strong> An emotional reaction is not sourcing. No HAPP feature is analyzed." },
      { text: "Since Olaudah Equiano published his narrative in London in 1789 to support the abolition movement, his description of the Middle Passage emphasizes its horrors, which means it reflects both his experience and his political goal of ending the slave trade.", earns: true, explain: "<strong>Earns the point.</strong> Uses historical situation and purpose and explains how they shape the account." },
      { text: "The source from Mexico shows the Aztec point of view.", earns: false, explain: "<strong>Doesn't earn the point.</strong> Vague. Who made it, and how does their perspective shape the source?" },
      { text: "Because the Florentine Codex was compiled after the conquest by a Spanish friar working with Nahua informants, its account blends Aztec memories with a Spanish religious framework, which means historians must separate the two perspectives.", earns: true, explain: "<strong>Earns the point.</strong> Uses point of view and historical situation and explains the consequence for interpretation." },
      { text: "Las Casas was against the Spanish, which is why he wrote it.", earns: false, explain: "<strong>Doesn't earn the point.</strong> Circular, and inaccurate: Las Casas was Spanish. It never explains how his view shapes the source." }
    ],
    speedquiz: [
      { q: "The caravel was", o: ["A small, nimble Portuguese ship","A large Chinese treasure ship","An Arab tool for finding latitude","A Spanish silver coin from Potosí"], c: 0, e: "Caravels could sail against the wind, making long voyages possible." },
      { q: "The astrolabe helped sailors find", o: ["Wind speed","Latitude","Ocean depth","Longitude"], c: 1, e: "The astrolabe measured the angle of the sun or stars to find latitude." },
      { q: "Columbus's 1492 voyage was sponsored by", o: ["Portugal","England","Spain","The Netherlands"], c: 2, e: "Ferdinand and Isabella of Spain funded his voyage." },
      { q: "Vasco da Gama reached India by sea in", o: ["1453","1488","1492","1498"], c: 3, e: "Da Gama's voyage opened a direct sea route from Europe to Asia." },
      { q: "The Treaty of Tordesillas (1494) divided new lands between", o: ["Spain and Portugal","England and France","Spain and England","Portugal and the Netherlands"], c: 0, e: "The pope-brokered line gave Brazil to Portugal and most of the Americas to Spain." },
      { q: "The leading cause of Native American population decline after 1492 was", o: ["Famine caused by the loss of farmland","Epidemic diseases such as smallpox","Volcanic eruptions in the Andes","Migration of Native peoples to Europe"], c: 1, e: "Native peoples had no immunity to Afro-Eurasian diseases." },
      { q: "Potosí was famous for its", o: ["Sugar plantations","Spice markets","Silver mine","Shipyards"], c: 2, e: "Potosí, in today's Bolivia, produced enormous amounts of silver." },
      { q: "The Manila galleons linked", o: ["Portugal and Brazil","England and India","The Netherlands and Indonesia","The Americas and Asia"], c: 3, e: "Galleons carried American silver to Manila to buy Chinese silk and porcelain." },
      { q: "The VOC was", o: ["The Dutch East India Company","A Spanish labor system in Peru","A Portuguese fort on the Gold Coast","An Inca road through the Andes"], c: 0, e: "The VOC was a Dutch joint-stock company that dominated the spice trade." },
      { q: "The encomienda system", o: ["Freed enslaved Africans in New Spain","Gave colonists the labor and tribute of Native people","Divided the Americas between Spain and Portugal","Organized Spanish trade in the Indian Ocean"], c: 1, e: "Encomenderos were supposed to protect and convert Native people but often abused them." },
      { q: "The Middle Passage was", o: ["A sea route to India around Africa","A Spanish road over the Andes to Potosí","The forced voyage of enslaved Africans","A treaty line dividing Spanish and Portuguese claims"], c: 2, e: "The Middle Passage was the deadly crossing at the center of the Atlantic slave trade." },
      { q: "At the top of the Spanish American casta system were", o: ["Mestizos","Creoles","Mulattoes","Peninsulares"], c: 3, e: "Spanish-born peninsulares held the highest positions in colonial society." },
      { q: "The Pueblo Revolt of 1680", o: ["Drove the Spanish out of New Mexico for years","Ended the Atlantic slave trade to Spanish America","Created an independent kingdom in Brazil","Overthrew the Inca Empire in the Andes"], c: 0, e: "Pueblo peoples rose against forced labor and religious suppression." },
      { q: "Queen Nzinga resisted the expansion of", o: ["Spain","Portugal","The Netherlands","England"], c: 1, e: "Nzinga fought Portuguese expansion in what is now Angola." },
      { q: "Which moved from the Eastern to the Western Hemisphere in the Columbian Exchange?", o: ["Potatoes and maize","Tomatoes and cacao","Horses, cattle, and wheat","Tobacco and turkeys"], c: 2, e: "Europeans brought horses, cattle, pigs, and wheat to the Americas." }
    ],
    timeline: [
      { title: "Dias rounds the Cape of Good Hope", year: 1488 },
      { title: "Columbus reaches the Caribbean", year: 1492 },
      { title: "Treaty of Tordesillas", year: 1494 },
      { title: "Vasco da Gama reaches India", year: 1498 },
      { title: "Cortés conquers Tenochtitlan", year: 1521 },
      { title: "Magellan's expedition completes the first circumnavigation", year: 1522 },
      { title: "Silver discovered at Potosí", year: 1545 },
      { title: "Spanish found Manila", year: 1571 },
      { title: "Dutch East India Company founded", year: 1602 },
      { title: "Pueblo Revolt", year: 1680 }
    ],
    asteroid: [
      { q: "Sailed for Spain in 1492:", o: ["Vasco da Gama","Columbus","Magellan","Dias"], c: 1 },
      { q: "Tool for finding latitude:", o: ["Astrolabe","Telescope","Abacus","Sundial"], c: 0 },
      { q: "Andean silver mine:", o: ["Cuzco","Lima","Potosí","Havana"], c: 2 },
      { q: "Dutch joint-stock company:", o: ["Hudson's Bay Co.","British East India Co.","Virginia Company","VOC"], c: 3 },
      { q: "Disease that devastated Native Americans:", o: ["Smallpox","Polio","Scurvy","Rickets"], c: 0 },
      { q: "Conquered the Aztecs:", o: ["Pizarro","Cortés","Magellan","Columbus"], c: 1 },
      { q: "Conquered the Inca:", o: ["Cortés","Columbus","Pizarro","Balboa"], c: 2 },
      { q: "1494 treaty dividing new lands:", o: ["Westphalia","Versailles","Paris","Tordesillas"], c: 3 },
      { q: "Spanish grant of Native labor:", o: ["Encomienda","Jizya","Devshirme","Cartaz"], c: 0 },
      { q: "Queen who resisted Portugal in Angola:", o: ["Isabella I","Nzinga","Elizabeth I","Catherine II"], c: 1 },
      { q: "Americas-born people of Spanish descent:", o: ["Peninsulares","Mestizos","Creoles","Mulattoes"], c: 2 },
      { q: "Main cargo of the Manila galleons to Asia:", o: ["Sugar","Tobacco","Furs","Silver"], c: 3 }
    ]
  },

  9: {
    jeopardy: [
      { name: 'Technology & Exchange', questions: [
        { clue: "Shipping goods in standardized metal boxes that move straight from ships to trucks and trains, which made global trade far cheaper", answer: "Containerization", explanation: "Container shipping began in 1956 and cut loading costs so sharply that companies could build supply chains spanning many countries." },
        { clue: "High-yield seeds, chemical fertilizers, and irrigation that boosted crop output in Mexico, India, and Pakistan", answer: "The Green Revolution", explanation: "It raised food production dramatically from the 1950s to the 1970s but increased the use of water and chemicals and favored farmers who could afford the inputs." },
        { clue: "This global computer network became widely public through the World Wide Web in 1991", answer: "The Internet", explanation: "The internet made communication nearly instant and nearly free, speeding both economic and cultural globalization." },
        { clue: "This American agricultural scientist won the 1970 Nobel Peace Prize for his high-yield wheat", answer: "Norman Borlaug", explanation: "Borlaug is called the father of the Green Revolution. In his Nobel lecture he warned that population growth could undo its gains." },
        { clue: "Moving jobs or production to countries with cheaper labor, made easier by cheap shipping and communication", answer: "Outsourcing", explanation: "Outsourcing shifted manufacturing and service jobs to countries such as China, India, and Mexico, a key feature of the global economy after 1980." }
      ]},
      { name: 'Disease & Environment', questions: [
        { clue: "The World Health Organization declared this disease eradicated in 1980", answer: "Smallpox", explanation: "A coordinated global vaccination campaign from 1967 to 1980 ended smallpox, the only human disease ever eradicated." },
        { clue: "Rachel Carson's 1962 book warning about the dangers of pesticides such as DDT", answer: "Silent Spring", explanation: "Silent Spring helped launch the modern environmental movement and contributed to the U.S. ban on DDT in 1972." },
        { clue: "This pandemic, first identified in the 1980s, hit sub-Saharan Africa hardest", answer: "HIV/AIDS", explanation: "By the early 2000s about two-thirds of people living with HIV were in sub-Saharan Africa, where expensive drugs were long out of reach." },
        { clue: "This 2015 agreement had nearly every country pledge to limit global warming to well below 2°C", answer: "The Paris Agreement", explanation: "Unlike the Kyoto Protocol, which bound only wealthy nations, the Paris Agreement asked every country to set its own emissions targets." },
        { clue: "Kenyan movement founded by Wangari Maathai that planted millions of trees and empowered women", answer: "The Green Belt Movement", explanation: "Maathai linked environmental protection, women's rights, and democracy, and she won the Nobel Peace Prize in 2004." }
      ]},
      { name: 'Global Economy', questions: [
        { clue: "This Chinese leader's reforms after 1978 opened China to markets while keeping Communist Party rule", answer: "Deng Xiaoping", explanation: "Deng allowed private enterprise and foreign investment: 'It doesn't matter whether a cat is black or white, as long as it catches mice.'" },
        { clue: "Late-twentieth-century free-market policies of privatization, deregulation, and free trade, associated with Thatcher and Reagan", answer: "Neoliberalism", explanation: "Neoliberal policies spread worldwide in the 1980s and 1990s, often through IMF and World Bank loan conditions." },
        { clue: "South Korea, Taiwan, Hong Kong, and Singapore, which industrialized rapidly through exports", answer: "The Asian Tigers", explanation: "The Tigers used export-led manufacturing growth, often with active government support, to become wealthy economies within a generation." },
        { clue: "The 1973 action by Arab oil producers that quadrupled oil prices and helped trigger recession in the West", answer: "The OPEC oil embargo", explanation: "The embargo punished supporters of Israel in the Yom Kippur War and showed how resource producers could use global interdependence as leverage." },
        { clue: "Zones such as Shenzhen where China allowed free-market rules to attract foreign investment", answer: "Special Economic Zones", explanation: "Beginning in 1980, these zones offered tax breaks and fewer regulations, turning coastal China into a global manufacturing center." }
      ]},
      { name: 'Rights & Reform', questions: [
        { clue: "This 1948 UN document begins: 'All human beings are born free and equal in dignity and rights'", answer: "The Universal Declaration of Human Rights", explanation: "Written in response to the atrocities of WWII, it gave activists a global standard for challenging discrimination." },
        { clue: "He became South Africa's first Black president in 1994 after 27 years in prison", answer: "Nelson Mandela", explanation: "Mandela's election marked the end of apartheid, brought about by internal resistance and international sanctions." },
        { clue: "Site of the 1989 pro-democracy protests in Beijing crushed by the Chinese army", answer: "Tiananmen Square", explanation: "The crackdown showed that China's Communist Party would open the economy but not allow political liberalization." },
        { clue: "Her 1963 book The Feminine Mystique helped launch second-wave feminism in the United States", answer: "Betty Friedan", explanation: "Friedan described women's frustration with limited domestic roles, and the movement she helped spark pushed for workplace equality and equal pay." },
        { clue: "This economist founded the Grameen Bank in Bangladesh to make small loans to poor villagers", answer: "Muhammad Yunus", explanation: "Yunus pioneered microfinance, lending mostly to women without collateral, and shared the 2006 Nobel Peace Prize with the bank." }
      ]},
      { name: 'Culture & Resistance', questions: [
        { clue: "Nickname for India's Hindi-language film industry, popular across Asia, Africa, and beyond", answer: "Bollywood", explanation: "Bollywood shows that cultural globalization flowed in many directions, not just from the West." },
        { clue: "South Korean pop music that became a worldwide phenomenon in the 2010s", answer: "K-pop", explanation: "Spread through YouTube and social media, K-pop filled stadiums from Latin America to the United States." },
        { clue: "In 1999, tens of thousands protested the World Trade Organization in this U.S. city", answer: "Seattle", explanation: "The 'Battle of Seattle' became a symbol of the anti-globalization movement uniting labor, environmental, and student activists." },
        { clue: "Mexican rebels who rose up in Chiapas on January 1, 1994, the day NAFTA took effect", answer: "The Zapatistas (EZLN)", explanation: "The Zapatistas argued that free trade would ruin poor indigenous farmers: 'today, we say ENOUGH IS ENOUGH.'" },
        { clue: "This 1979 revolution created an Islamic republic led by Ayatollah Khomeini", answer: "The Iranian Revolution", explanation: "It overthrew the Western-backed shah and rejected both American and Soviet influence, a major example of religious resistance to Westernization." }
      ]},
      { name: 'Global Institutions', questions: [
        { clue: "Founded in 1945 'to save succeeding generations from the scourge of war'", answer: "The United Nations", explanation: "The UN replaced the failed League of Nations, with a Security Council whose five permanent members hold veto power." },
        { clue: "This 1994 agreement created a free-trade zone among the United States, Canada, and Mexico", answer: "NAFTA (North American Free Trade Agreement)", explanation: "NAFTA removed most tariffs among the three countries and was replaced in 2020 by the USMCA." },
        { clue: "Founded in 1995 to set and enforce the rules of global trade, replacing GATT", answer: "The World Trade Organization (WTO)", explanation: "The WTO became a target of anti-globalization protests that argued its rules favored corporations over workers." },
        { clue: "This lender required 'structural adjustment' (spending cuts and privatization) from borrowing countries", answer: "The International Monetary Fund (IMF)", explanation: "IMF loans in the 1980s and 1990s came with austerity conditions that critics said hurt the poor in Latin America and Africa." },
        { clue: "Created by the 1992 Maastricht Treaty, this union of European states adopted the euro", answer: "The European Union", explanation: "The EU built a single market and, for many members, a shared currency, the leading example of regional economic integration." }
      ]}
    ]
    ,
    matching: { success: 'From the Green Revolution to a global pandemic, you connected all the pieces.', pairs: [
      { left: "The Green Revolution (1950s–1970s)", right: "Raised crop yields in Asia and Latin America but increased the use of water and chemicals" },
      { left: "Containerized shipping", right: "Cut shipping costs and made global supply chains possible" },
      { left: "WHO vaccination campaign (1967–1980)", right: "Eradicated smallpox, the only human disease ever eliminated" },
      { left: "Rachel Carson's Silent Spring (1962)", right: "Helped launch the modern environmental movement and the U.S. ban on DDT" },
      { left: "The 1973 OPEC oil embargo", right: "Quadrupled oil prices and caused inflation and recession in the industrialized West" },
      { left: "Deng Xiaoping's reforms (1978)", right: "Opened China to markets and foreign investment while keeping Communist Party rule" },
      { left: "Neoliberal reforms under Thatcher and Reagan", right: "Privatized state industries and promoted deregulation and free trade" },
      { left: "Universal Declaration of Human Rights (1948)", right: "Gave activists a global standard for challenging discrimination and oppression" },
      { left: "Internal resistance plus international sanctions", right: "Ended apartheid and led to Nelson Mandela's election in 1994" },
      { left: "NAFTA takes effect (1994)", right: "Created a North American free-trade zone and sparked the Zapatista uprising" },
      { left: "Interconnected global financial markets", right: "Spread the 2008 U.S. housing crisis into a worldwide recession" },
      { left: "Jet travel and global networks", right: "Carried COVID-19 to nearly every country within months in 2020" }
    ]
    },
    sortit: [
      { text: 'Doc 3 is an interview with Margaret Thatcher, a prime minister committed to free-market reform, which means she likely downplays the role of government in order to justify her privatization and spending cuts.', earns: true, explain: '<strong>Earns the point.</strong> Identifies the author\'s position, explains the consequence (downplays government), and connects it to an argument about her policies.' },
      { text: 'Doc 1 was written by the United Nations in 1948.', earns: false, explain: '<strong>Doesn\'t earn the point.</strong> Names the author and date but stops there. There is no "which means": nothing explains why the UN or 1948 matters for an argument.' },
      { text: 'Because Doc 6 was issued by the Zapatistas on the day NAFTA took effect, its purpose was to rally opposition to free trade, which means it presents globalization as a new form of conquest rather than an economic opportunity.', earns: true, explain: '<strong>Earns the point.</strong> Identifies the purpose (rally opposition), ties it to the historical moment, and explains how that purpose shapes what the document says.' },
      { text: 'Doc 2 shows Deng Xiaoping\'s point of view about the economy.', earns: false, explain: '<strong>Doesn\'t earn the point.</strong> "Shows his point of view" is circular. It never says what his position was or how it shapes the source.' },
      { text: 'Doc 5 was written by a biologist for a general audience, which means Carson uses an alarming story rather than data in order to persuade ordinary readers that pesticides must be regulated.', earns: true, explain: '<strong>Earns the point.</strong> Uses audience (general readers) and explains the consequence: the story-like, alarming style chosen to move public opinion.' },
      { text: 'Doc 7 is a speech, so it is biased and cannot be trusted.', earns: false, explain: '<strong>Doesn\'t earn the point.</strong> Calling a source "biased" is not sourcing. It never names a HAPP feature or explains how it shapes what Mandela says.' },
      { text: 'Since Doc 4 was written by a UN commission that included members from both wealthy and developing nations, it may seek a compromise, which means it supports both economic growth and environmental protection instead of strict limits on industry.', earns: true, explain: '<strong>Earns the point.</strong> Identifies point of view (a mixed international commission) and explains its consequence for the document\'s balanced definition.' },
      { text: 'The author of Doc 6 is angry about NAFTA. This helps explain why the document was written.', earns: false, explain: '<strong>Doesn\'t earn the point.</strong> "Helps explain why it was written" is vague and circular. It needs to say what the anger leads the document to emphasize or argue.' }
    ]
    ,
    speedquiz: [
      { q: 'The Green Revolution increased food production mainly through', o: ['Collective farms run by the state','High-yield seeds, chemical fertilizers, and irrigation','Returning land to small subsistence farmers','Organic methods that avoided synthetic chemicals'], c: 1, e: 'New seed varieties, fertilizers, pesticides, and irrigation raised yields, especially for wheat and rice in Mexico, India, and Pakistan.' },
      { q: 'The World Health Organization declared smallpox eradicated in', o: ['1918','1945','1980','2001'], c: 2, e: 'A global vaccination and case-tracing campaign from 1967 to 1980 ended smallpox for good.' },
      { q: 'Which pandemic devastated sub-Saharan Africa beginning in the 1980s?', o: ['Smallpox','HIV/AIDS','The 1918 influenza','Bubonic plague'], c: 1, e: 'By the early 2000s about two-thirds of people living with HIV lived in sub-Saharan Africa, and life expectancy fell sharply in some countries.' },
      { q: "Rachel Carson's Silent Spring (1962) warned about the dangers of", o: ['Nuclear weapons testing','Pesticides such as DDT','Overfishing in the oceans','Air travel'], c: 1, e: 'Carson showed how pesticides poisoned wildlife and food chains, helping spark the modern environmental movement.' },
      { q: 'The main goal of the 2015 Paris Agreement was to', o: ['Limit global warming by cutting emissions','Create a single global currency for trade','Ban the use of nuclear energy worldwide','End all international trade in oil'], c: 0, e: 'Nearly every country pledged to hold warming well below 2°C, setting its own emissions targets.' },
      { q: "China's Special Economic Zones were designed to", o: ['Restore Maoist collective farming','Close China to Western influence','Attract foreign investment and boost exports','Train soldiers for the People\'s Liberation Army'], c: 2, e: 'Zones such as Shenzhen offered market rules and tax breaks to foreign firms, powering China\'s export boom after 1980.' },
      { q: 'Neoliberal economic policies of the 1980s emphasized', o: ['Nationalizing key industries','Privatization, deregulation, and free trade','Five-year plans for heavy industry','High tariffs to protect local industry'], c: 1, e: 'Thatcher, Reagan, and international lenders promoted shrinking the state\'s role in the economy and opening markets.' },
      { q: 'The Asian Tigers grew rich mainly through', o: ['Export-led manufacturing','Oil exports','Subsistence agriculture','Colonial expansion'], c: 0, e: 'South Korea, Taiwan, Hong Kong, and Singapore made textiles, ships, and electronics for export to wealthy markets.' },
      { q: 'The Universal Declaration of Human Rights was adopted in 1948 by', o: ['The League of Nations','NATO','The United Nations','The European Union'], c: 2, e: 'The UN General Assembly adopted it in response to the atrocities of the Second World War.' },
      { q: 'Apartheid ended in South Africa with the 1994 election of', o: ['Kwame Nkrumah','Nelson Mandela','Jomo Kenyatta','Robert Mugabe'], c: 1, e: 'After 27 years in prison, Mandela won the first election in which all South Africans could vote.' },
      { q: 'The 1999 protests in Seattle targeted a meeting of', o: ['The United Nations','OPEC','The World Trade Organization','The World Health Organization'], c: 2, e: 'Protesters argued that WTO trade rules favored multinational corporations over workers and the environment.' },
      { q: 'The 1979 Iranian Revolution', o: ['Established a communist state allied with the Soviet Union','Established an Islamic republic led by Khomeini','Restored the shah to power with U.S. support','Made Iran a member of NATO and the Baghdad Pact'], c: 1, e: 'The revolution rejected the shah\'s Western-style modernization and both American and Soviet influence.' },
      { q: 'NAFTA (1994) created a free-trade zone among', o: ['The United States, Canada, and Mexico','Brazil, Argentina, and Uruguay','Britain, France, and Germany','Japan, China, and South Korea'], c: 0, e: 'NAFTA removed most tariffs among the three North American countries and was replaced by the USMCA in 2020.' },
      { q: 'The Grameen Bank in Bangladesh pioneered', o: ['Structural adjustment','Microfinance','Outsourcing','The euro'], c: 1, e: 'Muhammad Yunus\'s bank made small loans without collateral to poor villagers, most of them women.' },
      { q: 'The 2008 global financial crisis began with', o: ['The OPEC oil embargo on the West','The collapse of the U.S. housing market','The fall of the Berlin Wall in 1989','The COVID-19 pandemic and lockdowns'], c: 1, e: 'Bad American mortgages held by banks worldwide turned a U.S. housing bust into a global recession after Lehman Brothers collapsed.' }
    ]
    ,
    timeline: [
      { title: 'United Nations founded', year: 1945 },
      { title: 'Universal Declaration of Human Rights adopted', year: 1948 },
      { title: "Rachel Carson publishes Silent Spring", year: 1962 },
      { title: 'OPEC oil embargo quadruples oil prices', year: 1973 },
      { title: "Deng Xiaoping begins China's market reforms", year: 1978 },
      { title: 'WHO declares smallpox eradicated', year: 1980 },
      { title: 'Tiananmen Square protests crushed', year: 1989 },
      { title: 'NAFTA takes effect; Zapatista uprising', year: 1994 },
      { title: 'Global financial crisis', year: 2008 },
      { title: 'Paris Agreement on climate change', year: 2015 }
    ]
    ,
    asteroid: [
      { q: 'Which disease was eradicated worldwide by 1980?', o: ['Polio','Smallpox','Malaria','Ebola'], c: 1 },
      { q: "Who led China's market reforms after 1978?", o: ['Mao Zedong','Chiang Kai-shek','Deng Xiaoping','Sun Yat-sen'], c: 2 },
      { q: 'Wangari Maathai founded the:', o: ['Green Belt Movement','Grameen Bank','ANC','World Social Forum'], c: 0 },
      { q: 'Which organization sets the rules of global trade?', o: ['NATO','WHO','OPEC','WTO'], c: 3 },
      { q: 'The 1973 oil embargo was led by members of:', o: ['NAFTA','OPEC','The EU','ASEAN'], c: 1 },
      { q: "South Africa's first Black president was:", o: ['Kwame Nkrumah','Robert Mugabe','Nelson Mandela','Jomo Kenyatta'], c: 2 },
      { q: "India's Hindi-language film industry is called:", o: ['Bollywood','Nollywood','K-pop','Hollywood'], c: 0 },
      { q: 'The 2015 global climate accord is the:', o: ['Kyoto Protocol','Montreal Protocol','Rio Declaration','Paris Agreement'], c: 3 },
      { q: 'Small loans to poor entrepreneurs are called:', o: ['Outsourcing','Microfinance','Privatization','Tariffs'], c: 1 },
      { q: 'The trade bloc of the U.S., Canada, and Mexico was:', o: ['Mercosur','ASEAN','NAFTA','The EU'], c: 2 },
      { q: 'Which 1979 revolution created an Islamic republic?', o: ['Iranian','Cuban','Chinese','Russian'], c: 0 },
      { q: 'Which is a South American trade bloc?', o: ['ASEAN','Mercosur','NAFTA','OPEC'], c: 1 }
    ]
  }
};

/* Units 5-8 (moved here from their pages' inline game code, 2026-10-11).
   Units 6 and 7 also have the Source Line Warm-up ("warmup"). */
GAME_DATA[5] = {
  jeopardy: [
    { name: "Enlightenment Ideas", questions: [
      {"clue":"This philosopher argued that governments derive authority from the 'consent of the governed' and that individuals have natural rights to life, liberty, and property","answer":"John Locke","explanation":"Locke's Two Treatises of Government (1689) became the philosophical foundation for the American and French Revolutions. Jefferson drew directly from Locke in the Declaration of Independence."},
      {"clue":"Rousseau's idea that legitimate government rests on an agreement between rulers and the ruled, with power derived from popular sovereignty","answer":"Social Contract","explanation":"Rousseau argued in The Social Contract (1762) that government authority derives from a voluntary agreement with the people, and that people may overthrow governments that break this contract."},
      {"clue":"French philosopher who argued for separation of powers in 'The Spirit of the Laws,' directly influencing the U.S. Constitution","answer":"Montesquieu","explanation":"Montesquieu studied English constitutional arrangements and argued that dividing government into legislative, executive, and judicial branches would prevent tyranny."},
      {"clue":"The principle that individuals possess rights by nature, life, liberty, property, that governments cannot legitimately take away","answer":"Natural Rights","explanation":"Natural rights theory, developed by Locke, argued that rights exist independently of government and are the basis for evaluating whether government is legitimate."},
      {"clue":"The Enlightenment ideal that human reason, not tradition or religious authority, should guide all aspects of human life and government","answer":"Reason / Rationalism","explanation":"Enlightenment thinkers applied the scientific method's empirical reasoning to society: if Newton could discover laws of nature, reason could discover laws of good government."}
    ]},
    { name: "Atlantic Revolutions", questions: [
      {"clue":"The 1776 document that declared American independence invoked Locke's natural rights theory to justify separation from Britain","answer":"Declaration of Independence","explanation":"Jefferson's Declaration, grounded in Locke's natural rights theory, became a model for subsequent revolutions worldwide, directly inspiring French revolutionaries and Latin American independence leaders."},
      {"clue":"Led by Toussaint Louverture, this was the only successful slave revolution in history, creating the first Black republic in 1804","answer":"Haitian Revolution","explanation":"Enslaved people in Saint-Domingue used French revolutionary language of liberty and equality to demand their own freedom, defeating Napoleon's army in 1803 and establishing Haiti."},
      {"clue":"Called the 'Liberator,' this South American leader commanded independence movements across Venezuela, Colombia, Ecuador, Peru, and Bolivia","answer":"Simón Bolívar","explanation":"Bolívar drew on Enlightenment ideals to argue that Creole elites deserved self-governance free from Spanish mercantile restrictions. His military campaigns liberated most of Spanish South America."},
      {"clue":"The French Revolution's declaration of this motto captured the Enlightenment ideals driving the revolution","answer":"Liberty, Equality, Fraternity","explanation":"The French revolutionaries translated Enlightenment philosophy into political action, dismantling the monarchy and declaring the rights of citizens, inspiring revolutions across Europe and the Americas."},
      {"clue":"American-born descendants of European settlers who led Latin American independence movements, motivated by Enlightenment ideas and resentment of Spanish control","answer":"Creole Elites","explanation":"Creoles (born in the Americas to Spanish parents) resented trade restrictions and political exclusion. Enlightenment ideas gave them an intellectual framework to justify independence."}
    ]},
    { name: "Industrial Revolution", questions: [
      {"clue":"Scottish inventor whose improved steam engine in the 1760s–70s powered factories, mines, and eventually railways across Britain","answer":"James Watt","explanation":"Watt's rotary steam engine was far more efficient than earlier designs and could power a wide range of industrial machinery, becoming the symbol and engine of the Industrial Revolution."},
      {"clue":"The centralized system of production using machines and wage labor that replaced cottage industries during the Industrial Revolution","answer":"Factory System","explanation":"The factory system concentrated workers in large buildings with machines, imposing new work disciplines (fixed hours, supervised labor) and severing the connection between production and the home."},
      {"clue":"The Industrial Revolution began here first due to coal deposits, canal networks, colonial markets, and a culture of commercial innovation","answer":"Britain","explanation":"Britain had all the prerequisites: coal and iron nearby, water power from rivers, a canal system for cheap transport, colonial raw materials and markets, and legal protections for inventors."},
      {"clue":"Mass movement from rural areas to industrial cities that accompanied the Industrial Revolution; Manchester grew from 25,000 to 300,000 in 80 years","answer":"Urbanization","explanation":"Industrial cities grew faster than infrastructure could support: overcrowding, pollution, contaminated water, and disease made early industrial cities dangerous, fueling social reform movements."},
      {"clue":"Economic philosophy advocating minimal government intervention in markets, associated with Adam Smith's 'Wealth of Nations'","answer":"Laissez-Faire","explanation":"Smith argued that free competition and the 'invisible hand' of the market allocate resources more efficiently than government planning, becoming the dominant ideology of industrial capitalism."}
    ]},
    { name: "Industrialization Spreads", questions: [
      {"clue":"Japan's 1868 political transformation that launched rapid state-directed industrialization, making Japan the first non-Western industrial power","answer":"Meiji Restoration","explanation":"The Meiji government built railroads, established state-owned factories, sent thousands of students abroad, and reformed legal and educational systems in a deliberate campaign to industrialize."},
      {"clue":"Chinese modernization effort (1861–1895) that adopted Western military technology while preserving Confucian values, ultimately unsuccessful","answer":"Self-Strengthening Movement","explanation":"Chinese reformers argued they could adopt Western military technology ('Western function') while keeping Chinese culture ('Chinese essence'): but China's defeat in the Sino-Japanese War (1895) exposed its failure."},
      {"clue":"The series of Ottoman reforms beginning in 1839 that aimed to modernize the military and government and grant legal equality to non-Muslims","answer":"Tanzimat Reforms","explanation":"Tanzimat ('reorganization') reformers sought to strengthen the empire by adopting Western administrative models, reducing clerical authority, and creating secular courts and schools."},
      {"clue":"American naval commander who forced Japan to open to Western trade in 1853 under threat of bombardment, catalyzing the Meiji Restoration","answer":"Commodore Matthew Perry","explanation":"Perry's 'Black Ships' arrived in Tokyo Bay with overwhelming firepower, forcing Japan to sign the Convention of Kanagawa. The humiliation exposed the weakness of the Tokugawa shogunate and accelerated regime change."},
      {"clue":"Large Japanese family-owned industrial conglomerates that drove Meiji industrialization under close government direction and support","answer":"Zaibatsu","explanation":"Companies like Mitsubishi and Mitsui formed close partnerships with the Meiji government, receiving preferential contracts and capital to build steel mills, shipyards, and railroads."}
    ]},
    { name: "Reactions & Resistance", questions: [
      {"clue":"German philosopher who argued that industrial capitalism creates class conflict between bourgeoisie and proletariat destined to end in socialist revolution","answer":"Karl Marx","explanation":"Marx's historical materialism argued that economic conditions (the 'base') determine political and cultural life (the 'superstructure'). The Communist Manifesto (1848) called workers to unite and overthrow capitalism."},
      {"clue":"Marx and Engels published this 1848 manifesto calling on workers of the world to unite against capitalist exploitation","answer":"The Communist Manifesto","explanation":"Published during the Revolutions of 1848, the Manifesto called for workers to overthrow capitalism and establish collective ownership. It became the foundational text of socialist and communist movements worldwide."},
      {"clue":"German Chancellor who introduced state health insurance, accident insurance, and old-age pensions in the 1880s to undercut socialist appeals among German workers","answer":"Bismarck","explanation":"Bismarck's 'state socialism' recognized that unaddressed industrial misery would fuel radical socialism. By giving workers benefits through the state, he aimed to make them loyal to the German empire rather than to socialist parties."},
      {"clue":"Worker organizations that collectively negotiated for better wages, hours, and conditions, growing rapidly in the late 19th century despite opposition","answer":"Labor Unions (Trade Unions)","explanation":"Unions translated socialist ideas into practical action: collective bargaining gave workers power they lacked individually. Factory acts, minimum wages, and limits on child labor all emerged from union pressure."},
      {"clue":"Russian Marxist who argued that a disciplined revolutionary party must lead the proletariat; adapted Marxism to Russian conditions and led the 1917 Bolshevik Revolution","answer":"Vladimir Lenin","explanation":"Lenin argued in 'What Is to Be Done?' that workers needed a vanguard party of professional revolutionaries to lead them, because the proletariat would not spontaneously develop revolutionary consciousness on their own."}
    ]}
  ],
  matching: {
    success: "From the Enlightenment to industrial revolution and global capitalism, you connected all the pieces.",
    pairs: [
      {"left":"Locke's natural rights theory (1689)","right":"Became the philosophical foundation for American and French revolutionary declarations"},
      {"left":"Haitian Revolution (1791–1804)","right":"The only successful slave revolution in history, produced the first Black republic"},
      {"left":"Simón Bolívar's independence campaigns","right":"Liberated Venezuela, Colombia, Ecuador, Peru, and Bolivia from Spanish colonial rule"},
      {"left":"James Watt's improved steam engine (1769)","right":"Powered factories and railways: became the central technology of the Industrial Revolution"},
      {"left":"Meiji Restoration (1868)","right":"Japan's state-directed rapid industrialization: first non-Western industrial power"},
      {"left":"Self-Strengthening Movement (China, 1861–1895)","right":"Failed to modernize China effectively; exposed by defeat in the Sino-Japanese War"},
      {"left":"Suez Canal (1869)","right":"Cut Europe-to-Asia voyage by weeks; became a key artery of British imperial trade"},
      {"left":"Adam Smith's 'Wealth of Nations' (1776)","right":"Argued free markets and the invisible hand allocate resources better than government planning"},
      {"left":"Karl Marx's Communist Manifesto (1848)","right":"Called workers to unite against capitalism; foundational text for socialist and communist movements"},
      {"left":"Bismarck's welfare legislation (1880s)","right":"Introduced state health and old-age insurance to undercut radical socialist appeal among workers"},
      {"left":"British East India Company","right":"Controlled trade with India and deployed its own army, model of how capitalism and colonialism reinforced each other"},
      {"left":"Labor unions in industrial nations","right":"Collectively negotiated wages and hours, driving factory acts, minimum wage laws, and child labor restrictions"}
    ]
  },
  sortit: [
    {"text":"Doc 1 was written by Simón Bolívar in 1819 to a congress of South American republicans, which means the source likely exaggerates Enlightenment ideals and downplays the economic interests of Creole elites in order to build political legitimacy for independence.","earns":true,"explain":"<strong>Earns the point.</strong> Identifies the audience (South American republicans), explains the consequence (exaggerates ideals, downplays economic interests), and connects to the argument about independence movements."},
    {"text":"Doc 2 is a speech by Bolívar written during the independence period.","earns":false,"explain":"<strong>Doesn't earn the point.</strong> Names the author and time period but stops there. No 'which means': no explanation of why Bolívar's role or audience matters for interpreting the source."},
    {"text":"Because Doc 4 is a British parliamentary report on factory conditions written for members of Parliament, its purpose was to evaluate reform legislation, which means it likely emphasizes the worst abuses to persuade legislators to act.","earns":true,"explain":"<strong>Earns the point.</strong> Identifies purpose (evaluate reform legislation), explains the consequence (emphasizes worst abuses), and connects to how the source argues for legislative action."},
    {"text":"The author of Doc 3 is Karl Marx, so this document shows the communist perspective on industrial capitalism.","earns":false,"explain":"<strong>Doesn't earn the point.</strong> 'Shows the communist perspective' is circular and vague. No explanation of what consequences Marx's position has for what the source emphasizes, omits, or argues."},
    {"text":"Doc 5 was produced by the Japanese Meiji government at the height of state-directed industrialization, which means it likely projects an image of successful modernization, making it an unreliable source for understanding Japanese workers' actual experience of industrial transformation.","earns":true,"explain":"<strong>Earns the point.</strong> Names the historical situation (Meiji industrialization), explains the consequence (projects success, hides hardship), and connects to reliability and the argument."},
    {"text":"This Enlightenment text uses ideas about natural rights and popular sovereignty. It was written to persuade readers.","earns":false,"explain":"<strong>Doesn't earn the point.</strong> 'Written to persuade readers' is too vague: no specific HAPP feature identified, and 'persuasion' is a generic purpose that doesn't connect to an argument."},
    {"text":"Doc 6 is an Adam Smith lecture transcript delivered at Glasgow University for students of moral philosophy, which means it likely presents free market theory as ethically superior to mercantilism, in order to convince an educated audience of capitalism's moral legitimacy.","earns":true,"explain":"<strong>Earns the point.</strong> Identifies audience (moral philosophy students), explains the consequence (presents capitalism as morally superior), and connects to the argument about economic ideology."},
    {"text":"The point of view of Doc 7 is that the author supports industrialization. This helps us understand why the document was written.","earns":false,"explain":"<strong>Doesn't earn the point.</strong> 'This helps us understand why the document was written' is circular. No explanation of what consequences support for industrialization has for what the source emphasizes, omits, or argues."}
  ],
  speedquiz: [
    {"q":"Which philosopher argued that governments derive authority from the 'consent of the governed'?","o":["Voltaire","Montesquieu","John Locke","Rousseau"],"c":2,"e":"Locke's natural rights theory became the foundation for the American Declaration of Independence, the French Declaration of Rights, and Latin American independence movements."},
    {"q":"The Haitian Revolution (1791–1804) was historically significant because it was","o":["The first revolution to use guerrilla warfare","The only successful slave revolution in history","The first to establish a constitutional republic","The first revolution inspired by Enlightenment ideas"],"c":1,"e":"Enslaved people in Saint-Domingue used French revolutionary language of liberty to demand their own freedom, defeating Napoleon's army and creating the first Black republic."},
    {"q":"The Industrial Revolution began in Britain first because of","o":["Its empire providing unlimited slave labor","Coal and iron deposits, canal networks, colonial markets, and legal protections for inventors","British government ownership of all factories","The French Revolution spreading industrial ideas"],"c":1,"e":"Britain had all prerequisites: coal and iron nearby, water power, a canal system, colonial raw materials and markets, and patent law protecting inventors."},
    {"q":"Adam Smith's concept of the 'invisible hand' argues that","o":["Government must direct industrial investment","Secret cartels control prices","Free markets self-regulate through competition to allocate resources efficiently","Colonial trade is necessary for prosperity"],"c":2,"e":"Smith argued in 'The Wealth of Nations' (1776) that individuals pursuing self-interest in free markets inadvertently produce outcomes beneficial to society."},
    {"q":"The Meiji Restoration (1868) was Japan's response to","o":["Chinese military conquest","Western imperial pressure and the humiliation of unequal treaties","A domestic peasant revolution against the emperor","American annexation of Japanese territory"],"c":1,"e":"Commodore Perry's forced opening of Japan (1853) exposed the weakness of the Tokugawa shogunate. The Meiji government replaced it and launched state-directed industrialization."},
    {"q":"Karl Marx argued that industrial capitalism inevitably produces conflict between the bourgeoisie (owners) and the","o":["Clergy","Nobility","Proletariat (wage workers)","Peasantry"],"c":2,"e":"Marx argued that capitalists (who own means of production) and workers (who own only their labor) have irreconcilable interests, a conflict that would end in socialist revolution."},
    {"q":"The Self-Strengthening Movement in China (1861–1895) failed primarily because","o":["China refused to adopt any Western technology","The Qing government was overthrown by Boxer rebels","It tried to adopt Western military technology without deeper social and institutional reform","American trade sanctions blocked Chinese industrialization"],"c":2,"e":"China's defeat in the Sino-Japanese War (1895) exposed that adopting Western weapons without reforming the economy, government, and education was insufficient."},
    {"q":"Simón Bolívar is known as the 'Liberator' because he","o":["Led the Haitian Revolution against France","Wrote the first Latin American constitution","Led independence movements across Venezuela, Colombia, Ecuador, Peru, and Bolivia","Founded the first democratic republic in South America"],"c":2,"e":"Bolívar's military campaigns liberated most of Spanish South America, drawing on Enlightenment arguments against Spanish mercantile restrictions and political exclusion of Creole elites."},
    {"q":"Which economic philosophy advocates minimal government intervention, letting competition and price systems determine outcomes?","o":["Mercantilism","Laissez-faire","Socialism","Keynesianism"],"c":1,"e":"Laissez-faire ('let it be') became the dominant ideology of 19th-century industrial capitalism, associated with Adam Smith, David Ricardo, and British free trade policy."},
    {"q":"The Tanzimat Reforms in the Ottoman Empire (beginning 1839) primarily aimed to","o":["Convert the empire to a republic","Expel all European merchants from Ottoman territory","Modernize the military and government to strengthen the empire against Western pressure","Establish a constitutional monarchy based on British parliamentary models"],"c":2,"e":"Tanzimat reformers sought to strengthen the empire by adopting Western administrative models, granting legal equality to non-Muslims, and creating secular courts."},
    {"q":"The steam engine's improvement by James Watt was significant primarily because it","o":["Made sailing ships obsolete overnight","Was the first machine ever to use energy to do work","Made factories, mines, and railways economically viable, powering the Industrial Revolution","Was invented specifically to solve the problem of flooding in British textile mills"],"c":2,"e":"Watt's rotary steam engine was efficient enough to power a wide range of industrial machinery, transforming production, transportation, and energy use across the economy."},
    {"q":"Bismarck introduced state welfare programs in Germany (1880s) primarily to","o":["Compete economically with Britain","Fulfill Marx's vision of a workers' state","Undercut radical socialist appeal by giving workers benefits through the conservative state","Comply with international labor conventions negotiated in Geneva"],"c":2,"e":"Bismarck's 'state socialism' aimed to make German workers loyal to the empire rather than to the Social Democratic Party, health, accident, and old-age insurance created dependency on the state."},
    {"q":"The Suez Canal (1869) was historically significant because it","o":["Connected the Atlantic and Pacific Oceans through Central America","Created a direct water route between the Mediterranean and the Red Sea, cutting the Europe-to-Asia voyage by weeks","Allowed steam-powered ships to cross the Sahara Desert","Was the first engineering project completed with industrial machinery"],"c":1,"e":"The Suez Canal transformed global trade by cutting the Europe-India voyage from months to weeks. Britain bought a controlling interest in 1875, making it a key imperial asset."},
    {"q":"The British East India Company's significance in AP World History lies in how it demonstrates the connection between","o":["Democratic governance and economic development","Capitalism and colonialism: how private profit motive drove imperial expansion","Free trade ideology and military conquest","Industrial technology and colonial administration"],"c":1,"e":"The East India Company shows how capitalism and colonialism reinforced each other: private profit motive drove territorial expansion; imperial control enforced favorable trade conditions."},
    {"q":"Lenin's adaptation of Marxism argued that workers needed a 'vanguard party' because","o":["Workers could not vote and needed political representation","The proletariat would not spontaneously develop revolutionary consciousness without organized party leadership","Russia lacked an industrial working class large enough for Marxist theory to apply","European socialist parties had already achieved workers' rights through parliamentary means"],"c":1,"e":"Lenin argued in 'What Is to Be Done?' that professional revolutionaries must lead the proletariat, workers focused on immediate economic demands, not the revolutionary transformation of society."}
  ],
  timeline: [
    {"title":"Locke's Two Treatises: natural rights theory","year":1689},
    {"title":"American Declaration of Independence","year":1776},
    {"title":"French Revolution begins","year":1789},
    {"title":"Haitian Revolution begins","year":1791},
    {"title":"Latin American independence movements peak (Bolívar)","year":1819},
    {"title":"Marx & Engels publish The Communist Manifesto","year":1848},
    {"title":"Commodore Perry opens Japan to trade","year":1853},
    {"title":"Self-Strengthening Movement begins in China","year":1861},
    {"title":"Meiji Restoration: Japan industrializes","year":1868},
    {"title":"Suez Canal opens","year":1869}
  ],
  asteroid: [
    {"q":"Which philosopher argued that governments derive authority from the 'consent of the governed'?","o":["Voltaire","Rousseau","John Locke","Montesquieu"],"c":2},
    {"q":"The Haitian Revolution (1791) was historically unique because it was:","o":["The first revolution to use guerrilla warfare","The only successful slave revolution in history","The first revolution inspired by Enlightenment ideas","The first to establish a constitutional republic"],"c":1},
    {"q":"The Industrial Revolution began in which country?","o":["France","Germany","United States","Britain"],"c":3},
    {"q":"The Meiji Restoration (1868) was Japan's response to:","o":["Chinese military invasion","Western imperial pressure and unequal treaties","A domestic peasant revolution","American annexation of Japanese territory"],"c":1},
    {"q":"Adam Smith's concept of the 'invisible hand' refers to:","o":["Government regulation of trade","The secret power of monopolies","The self-regulating nature of free markets","Colonial economic exploitation"],"c":2},
    {"q":"Karl Marx argued that all of history is driven by:","o":["Great leaders and their decisions","Technological innovation","Class struggle between economic groups","Religious belief systems"],"c":2},
    {"q":"Simón Bolívar is known as the:","o":["Father of the American Revolution","Liberator of South America","Architect of the French Constitution","Leader of the Haitian Revolution"],"c":1},
    {"q":"Which reform program did the Ottoman Empire launch in 1839 to modernize its government?","o":["Meiji Restoration","Self-Strengthening Movement","Tanzimat Reforms","Young Turk Revolution"],"c":2},
    {"q":"The term 'laissez-faire' describes which economic philosophy?","o":["Government ownership of major industries","Free trade with minimal government intervention","Mercantilism and trade protections","Socialist redistribution of wealth"],"c":1},
    {"q":"The steam engine was significantly improved for industrial use by:","o":["Thomas Edison","George Stephenson","Richard Arkwright","James Watt"],"c":3},
    {"q":"Which company, chartered by the British government, controlled much of India's trade and territory?","o":["British South Africa Company","Royal African Company","British East India Company","Hudson's Bay Company"],"c":2},
    {"q":"Which intellectual argued for separation of powers in government in 'The Spirit of the Laws'?","o":["Locke","Voltaire","Montesquieu","Rousseau"],"c":2}
  ]
};
GAME_DATA[6] = {
  jeopardy: [
    { name: "Rationales", questions: [
      {"clue":"Rudyard Kipling's 1899 poem that framed colonialism as a moral duty of 'superior' races to govern 'inferior' peoples","answer":"The White Man's Burden","explanation":"Kipling's poem captured the paternalistic 'civilizing mission' ideology: framing imperial exploitation as humanitarian obligation."},
      {"clue":"The misapplication of Darwin's natural selection to human societies, used to justify racial hierarchy and conquest","answer":"Social Darwinism","explanation":"Social Darwinism gave pseudoscientific legitimacy to imperial conquest, claiming 'inferior' races would naturally be dominated by 'superior' ones."},
      {"clue":"French Prime Minister who called colonial expansion the 'daughter of industrial policy' in his 1884 parliamentary speech","answer":"Jules Ferry","explanation":"Ferry combined economic justification (markets, raw materials) with racial ideology ('superior races have a duty') to defend French colonialism."},
      {"clue":"British imperialist who dreamed of a Cape-to-Cairo railway through unbroken British territory","answer":"Cecil Rhodes","explanation":"Rhodes controlled Southern Africa's diamond and gold industries and embodied the fusion of personal profit and nationalist imperial ideology."},
      {"clue":"French name for the ideological justification for colonialism, the duty to spread French civilization to 'backward' peoples","answer":"Mission civilisatrice (Civilizing Mission)","explanation":"The civilizing mission framed colonialism as humanitarian service, bringing Christianity, Western education, and 'civilization' to mask economic exploitation."}
    ]},
    { name: "State Expansion", questions: [
      {"clue":"1884–85 meeting of 14 European powers that established rules for claiming African territory, without inviting a single African","answer":"Berlin Conference","explanation":"Established 'effective occupation' as the standard for colonial claims and accelerated the partition of Africa."},
      {"clue":"Japan's 1868 political transformation that launched rapid industrialization to avoid Western colonization","answer":"Meiji Restoration","explanation":"Japan modernized its military, economy, and government using Western models, successfully avoiding colonization and becoming an imperial power itself."},
      {"clue":"Form of colonial control in which existing local leaders governed as intermediaries on behalf of the colonial power","answer":"Indirect Rule","explanation":"Britain used indirect rule in Nigeria, Uganda, and Malaya, cheaper than direct rule and creating local collaborators who maintained traditional hierarchies."},
      {"clue":"The form of colonial governance imposed on India after the 1857 Rebellion, when the Crown replaced the East India Company","answer":"Crown Rule (British Raj)","explanation":"Victoria was named Empress of India in 1877; direct Crown rule meant more coordinated British control and direct extraction of Indian resources."},
      {"clue":"Region Japan formally colonized in 1910 after defeating Russia in the 1904–05 war","answer":"Korea","explanation":"Japan's annexation of Korea demonstrated that non-Western nations could become imperial powers, challenging European racial ideology."}
    ]},
    { name: "Indigenous Responses", questions: [
      {"clue":"1896 Ethiopian military victory: the only complete defeat of a European colonial army during the Scramble for Africa","answer":"Battle of Adwa","explanation":"Menelik II destroyed an Italian army of 18,000; Ethiopia remained independent and Adwa became a global symbol of anti-colonial resistance."},
      {"clue":"Late Qing dynasty strategy: 'Chinese learning for the essence; Western learning for practical use'","answer":"Self-Strengthening Movement","explanation":"China tried to modernize its military while preserving Chinese culture, ultimately failing when Japan defeated China in 1895."},
      {"clue":"1857 uprising beginning with Indian soldiers who refused rifle cartridges but rooted in decades of accumulated grievances","answer":"Indian Rebellion of 1857","explanation":"Drew on land annexation, cultural suppression, and displacement of traditional elites, forcing the British Crown to assume direct rule."},
      {"clue":"1900 Chinese uprising that targeted foreign missionaries but ultimately deepened foreign control through the Boxer Protocol","answer":"Boxer Rebellion","explanation":"The eight-nation military response imposed massive indemnities and expanded foreign military presence, worsening China's sovereign position."},
      {"clue":"East African uprising where rebels believed magic water would protect them from German bullets; suppressed by deliberate famine killing ~250,000","answer":"Maji Maji Rebellion","explanation":"The Maji Maji Rebellion (1905–07) against German rule in Tanganyika was crushed through scorched-earth tactics and deliberate starvation."}
    ]},
    { name: "Economic Imperialism", questions: [
      {"clue":"1842 treaty ending the First Opium War that gave Britain Hong Kong, five treaty ports, and exemption from Chinese law","answer":"Treaty of Nanjing","explanation":"The first 'unequal treaty': forced on China after military defeat, establishing extraterritoriality, most-favored-nation status, and the treaty-port system."},
      {"clue":"Provision giving foreign nationals the right to be tried under their own national laws on Chinese soil","answer":"Extraterritoriality","explanation":"Bitterly resented as proof that China had lost control of its own territory, central to China's 'Century of Humiliation' narrative."},
      {"clue":"The economic relationship where colonial territories supplied raw materials and purchased manufactured goods, creating dependency","answer":"Free Trade Imperialism / Informal Empire","explanation":"Britain forced open foreign markets through diplomacy and military threat, controlling Latin American and Chinese economies without formal annexation."},
      {"clue":"The conversion of diverse agriculture to a single cash crop for export, creating vulnerability to global commodity price swings","answer":"Monoculture","explanation":"Egyptian cotton, Indian tea, Cuban sugar all created colonial dependency on global prices controlled by distant markets, not local producers."},
      {"clue":"Use of naval force or its threat to compel weaker states to accept British economic terms","answer":"Gunboat Diplomacy","explanation":"The military enforcement mechanism behind informal empire, forcing China, Ottoman Turkey, and Latin American states to accept British commercial demands."}
    ]},
    { name: "Migration", questions: [
      {"clue":"The 1845–52 Irish catastrophe that killed ~1 million and drove ~2 million to emigrate, primarily to the United States","answer":"Irish Potato Famine (Great Famine)","explanation":"The famine is the textbook push factor: economic catastrophe driving mass emigration to industrializing destination economies needing unskilled labor."},
      {"clue":"Post-abolition labor system binding Indian and Chinese workers to 5-year contracts on Caribbean and South African plantations","answer":"Indentured Servitude","explanation":"Often called 'a new system of slavery': while technically voluntary, coercive conditions and criminal penalties maintained plantation labor after chattel slavery ended."},
      {"clue":"The 1882 U.S. law: the first federal immigration restriction by race, targeting Chinese laborers","answer":"Chinese Exclusion Act","explanation":"Driven by nativist backlash, racial prejudice, and economic competition, this established the precedent of racially-based immigration restriction."},
      {"clue":"The blending of cultural elements from different societies, seen in Caribbean Creole languages and Indo-Caribbean hybrid practices","answer":"Cultural Syncretism","explanation":"Diaspora communities simultaneously preserved home cultures and created hybrid new ones, neither fully original nor fully assimilated."},
      {"clue":"Money sent by migrants back to families in home countries, representing a major economic flow in the late 19th century","answer":"Remittances","explanation":"Italian migrants in Argentina, Chinese workers in California, Indian laborers in Trinidad all sent money home, funding development in sending regions."}
    ]},
    { name: "Causation", questions: [
      {"clue":"Historian J.A. Hobson's argument: surplus industrial capital needing overseas investment drove European imperial expansion","answer":"Economic Causation of Imperialism","explanation":"Hobson's 1902 Imperialism argued industrial capitalism created economic pressures, surplus capital, surplus goods, raw material demand, that required colonial expansion."},
      {"clue":"Historians' term for the post-1870 wave of colonialism distinguished by its scale, speed, and industrial character","answer":"New Imperialism","explanation":"Claimed ~20% of Earth's land in ~40 years, far faster than earlier colonialism, driven by industrial competition and nationalist rivalry."},
      {"clue":"The technological advantage: Maxim machine gun, quinine, steam gunboats, that made rapid African colonization militarily feasible","answer":"Technological Gap","explanation":"Industrial military technology allowed small European forces to defeat large African armies; quinine made interior Africa accessible for the first time."},
      {"clue":"Economic control through commerce, debt, and trade rather than direct annexation, British Latin America is the classic example","answer":"Informal Empire","explanation":"British banks, merchants, and railroads controlled Latin American economies without formal annexation, proving empire didn't require direct political rule."},
      {"clue":"The element of continuity from the early modern era (1440s) to the 19th century in European-African relations","answer":"Resource and Labor Extraction","explanation":"Despite changing technologies and ideologies, the fundamental relationship, European extraction of African resources and labor, showed continuity from the slave trade to 19th-century colonialism."}
    ]}
  ],
  matching: {
    success: "From the steam engine to the Scramble for Africa, you connected all the pieces.",
    pairs: [
      {"left":"Industrial Revolution in Britain (1760s)","right":"Created demand for raw materials and overseas markets → New Imperialism"},
      {"left":"Berlin Conference (1884–85)","right":"Partitioned Africa among European powers without African representation"},
      {"left":"Indian Rebellion of 1857","right":"Led to transfer of India from East India Company to British Crown rule"},
      {"left":"Meiji Restoration (1868)","right":"Japan modernized rapidly, avoided colonization, became an imperial power"},
      {"left":"First Opium War (1839–42)","right":"China forced to sign Treaty of Nanjing, the first unequal treaty"},
      {"left":"Abolition of Atlantic slave trade","right":"Created plantation labor shortage → emergence of indentured servitude"},
      {"left":"Irish Potato Famine (1845–52)","right":"Drove ~2 million Irish to emigrate, mostly to the United States"},
      {"left":"Chinese Exclusion Act (1882)","right":"First U.S. federal immigration restriction by race, nativist backlash"},
      {"left":"Battle of Adwa (1896)","right":"Italy defeated by Ethiopia: only complete African military victory in Scramble for Africa"},
      {"left":"Social Darwinism and scientific racism","right":"Provided pseudoscientific justification for racial hierarchy and conquest"},
      {"left":"Boxer Rebellion (1900)","right":"Eight-nation invasion → Boxer Protocol imposed massive indemnities on China"},
      {"left":"Monoculture and export enclave economies","right":"Colonial territories became dependent on global commodity prices they could not control"}
    ]
  },
  sortit: [
    {"text":"According to Jules Ferry, a French Prime Minister, colonial expansion was the 'daughter of industrial policy,' which means that Ferry, as a politician advocating for French imperial interests, likely emphasized economic justifications to win parliamentary support.","earns":true,"explain":"<strong>Earns the point.</strong> Identifies the source (Jules Ferry as French PM), explains why his position affects his argument (advocating for imperial interests), and connects to significance (shaped argument for parliamentary support)."},
    {"text":"Rudyard Kipling was a British writer who wrote 'The White Man's Burden' in 1899.","earns":false,"explain":"<strong>Does NOT earn the point.</strong> It merely restates who wrote the source without explaining how the author's background affects the argument or why that matters for using the source."},
    {"text":"Since Menelik II was the Emperor of Ethiopia who mobilized against Italy, his account of the Battle of Adwa would emphasize Ethiopian strength and sovereignty, the exact qualities he needed to project to internal and external audiences.","earns":true,"explain":"<strong>Earns the point.</strong> Explains how Menelik's specific role (emperor defending sovereignty) would shape what his account emphasized, and connects to the broader context of audience."},
    {"text":"The Boxer Rebellion was a Chinese uprising in 1900 that targeted foreigners and Chinese Christians. It shows that Chinese people were angry at foreign influence.","earns":false,"explain":"<strong>Does NOT earn the point.</strong> It describes what happened but doesn't perform sourcing analysis, no identification of author/creator, no explanation of how that affects the source's content or reliability."},
    {"text":"This political cartoon from an American newspaper in 1899 depicting the Philippines as a child being civilized by Uncle Sam should be understood as reflecting American public anxiety about whether imperialism contradicted democratic ideals, exactly the debate Americans were having after the Spanish-American War.","earns":true,"explain":"<strong>Earns the point.</strong> Identifies the source context (American newspaper, 1899), connects it to the historical situation (post-Spanish-American War debate), and explains how that context shapes the argument."},
    {"text":"The Chinese government signed the Treaty of Nanjing after losing the First Opium War. The treaty gave Britain Hong Kong and forced China to open five treaty ports.","earns":false,"explain":"<strong>Does NOT earn the point.</strong> It describes the treaty's terms but doesn't analyze the source through HIPP, no author identification, no explanation of purpose, historical context, or point of view."},
    {"text":"This document was produced by the British East India Company, a profit-driven corporation, so we should expect it to downplay the economic exploitation of India and overstate the benefits of British governance to justify continued Company rule.","earns":true,"explain":"<strong>Earns the point.</strong> Identifies the creator (East India Company), explains its purpose (justify continued rule), and predicts how those factors shape the document's content in a historically grounded way."},
    {"text":"The source says that Social Darwinism justified imperialism because it claimed superior races would naturally dominate inferior ones. This is important because it shows Europeans believed in racial hierarchy.","earns":false,"explain":"<strong>Does NOT earn the point.</strong> It summarizes the source's content rather than analyzing the source itself. Sourcing requires examining author, audience, purpose, or historical context, not restating what the document says."}
  ],
  warmup: [
    {"type":"Government Speech","sourceLine":"Jules Ferry, French Prime Minister, speech to the French Chamber of Deputies, July 28, 1883","excerpt":"The superior races have a right, because they have a duty. They have the duty to civilize the inferior races. Colonial policy is the daughter of industrial policy.","models":{"pov":"As French Prime Minister, Ferry had to justify imperial spending to parliament, so he combines both civilizational duty and economic necessity, framing colonialism as both morally obligatory and economically essential.","purpose":"Ferry's purpose is to persuade parliament to fund colonial expansion, so the speech overemphasizes mutual benefit while minimizing the violence and exploitation of the colonial enterprise.","audience":"Ferry's audience is French legislators who control the budget, which means he must appeal to both nationalist pride and economic self-interest to win the necessary votes.","hist":"Produced during the peak of the Scramble for Africa (1880s), when French politicians debated the costs and benefits of empire, Ferry's argument won the debate and France massively expanded its African colonies."}},
    {"type":"Poem (Literary Source)","sourceLine":"Rudyard Kipling, 'The White Man's Burden,' McClure's Magazine, February 1899","excerpt":"Take up the White Man's burden, Send forth the best ye breed, Go bind your sons to exile, To serve your captives' need.","models":{"pov":"Kipling was a British writer who grew up in India and celebrated empire, so his poem reflects the genuine belief of many imperial-era Britons that colonialism was service, not exploitation.","purpose":"Kipling wrote this to urge the United States to accept responsibility for governing the Philippines, his purpose was to frame American imperialism as moral duty, not conquest.","audience":"Written for an American audience debating whether to annex the Philippines, which means Kipling frames the colonial mission in American democratic and Christian values, not purely British imperial ones.","hist":"Published in 1899 amid American debate about the Philippines, this poem shaped global discourse on imperialism, becoming both the defining statement of the 'civilizing mission' and its most criticized example."}},
    {"type":"Treaty (Legal Document)","sourceLine":"Treaty of Nanjing, Article II, signed between Britain and the Qing Dynasty, August 29, 1842","excerpt":"His Majesty the Emperor of China agrees, that British Subjects shall be allowed to reside and carry on their mercantile pursuits at the Cities and Towns of Canton, Amoy, Fuchow-fu, Ningpo, and Shanghai.","models":{"pov":"As the victor in the First Opium War, Britain dictated the Treaty of Nanjing, its point of view is that of a powerful industrial state imposing its commercial interests on a weaker state through military force.","purpose":"The treaty's purpose is to formalize British commercial dominance in China by forcing open ports and establishing legal protection for British merchants, serving British industrial capitalism's need for new markets.","audience":"This legal document addresses both governments but primarily speaks to British commercial interests, guaranteeing specific legal rights to British merchants operating in Chinese cities.","hist":"Signed after China's defeat in the First Opium War, this treaty began China's 'Century of Humiliation': a series of unequal treaties that stripped away Chinese sovereignty and created the extraterritoriality system."}},
    {"type":"Newspaper Editorial","sourceLine":"San Francisco Chronicle editorial, 'The Chinese Must Go,' March 4, 1879","excerpt":"The time has come to make clear that the American laborer will not compete with the Chinese coolie. The white workingman demands protection from the degradation of cheap Chinese competition.","models":{"pov":"As a California newspaper representing white working-class interests, the Chronicle reflects the nativist and racial anxieties of workers threatened by economic competition, not evidence-based policy analysis.","purpose":"The editorial's purpose is to build public and political pressure for Chinese exclusion legislation, deliberately using inflammatory racial language to mobilize readers' economic anxieties and racial prejudices.","audience":"Written for white working-class San Francisco readers who competed with Chinese immigrants for jobs, the editorial frames immigration as a racial threat rather than an economic policy question.","hist":"Published during intense political pressure that produced the Chinese Exclusion Act of 1882, demonstrating how nativist journalism shaped immigration policy and how migration created backlash in receiving societies."}},
    {"type":"Eyewitness Account / Nationalist Writing","sourceLine":"Dadabhai Naoroji, 'Poverty and Un-British Rule in India,' 1901","excerpt":"Britain is bleeding India dry. Every year, a vast 'drain' of wealth flows from India to Britain, in salaries paid to British officials, profits remitted home, and the costs of wars fought for British interests.","models":{"pov":"As an Indian nationalist and Britain's first Indian-born MP, Naoroji argues from a colonized perspective, his 'drain theory' directly challenges British claims that empire benefited India.","purpose":"Naoroji's purpose is to use economic evidence to make the British case for Indian self-governance, arguing not that empire is immoral but that it is economically destructive, a pragmatic strategy for a British political audience.","audience":"Written for British political audiences who controlled Indian policy, Naoroji frames his critique in British economic language, appealing to British self-interest in a stable India rather than making a purely moral argument.","hist":"Naoroji's 'drain theory' became the foundation of Indian economic nationalism, the argument that British rule impoverished India through systematic wealth extraction rather than developing it."}},
    {"type":"Imperial Government Report","sourceLine":"Lord Curzon, Viceroy of India, addressing the Indian Civil Service, 1900","excerpt":"The British Empire is, under Providence, the greatest instrument for good that the world has seen. India without British rule would be rent asunder by the mutual hatreds and jealousies of its countless races.","models":{"pov":"As British Viceroy: the highest British official in India, Curzon's statement reflects the self-serving ideological justification of those directly profiting from colonial rule.","purpose":"Curzon's purpose is to motivate British civil servants by framing their work as moral duty, essential for maintaining morale in a massive and difficult imperial project.","audience":"Addressed to British colonial officials in India, Curzon assumes his audience shares British racial assumptions, framing Indian governance as a providential mission, not as occupation.","hist":"Produced at the height of British imperial confidence (1900), this exemplifies the 'civilizing mission' in practice: used daily to justify the apparatus of colonial rule and its massive economic extraction."}}
  ],
  speedquiz: [
    {"q":"The Berlin Conference of 1884–85 was significant primarily because it","o":["Invited African rulers to negotiate borders protecting their sovereignty","Established European rules for claiming African territory without African participation","Created the League of Nations to govern colonial territories","Set limits on how much territory each power could claim"],"c":1,"e":"The Berlin Conference established 'effective occupation' as the standard for colonial claims and partitioned Africa among 14 European powers with no African representation."},
    {"q":"The Indian Rebellion of 1857 resulted most directly in","o":["Indian independence from British rule","Transfer of India from the East India Company to British Crown rule","Abolition of the British colonial system in Asia","Greater Indian participation in British colonial governance"],"c":1,"e":"The Rebellion proved corporate governance inadequate; the British Crown assumed direct rule, with Queen Victoria named Empress of India in 1877."},
    {"q":"Japan's Meiji Restoration (1868) is best understood as","o":["A revolution that abolished the emperor and established a republic","A conservative reaction rejecting all Western influence","A deliberate program of selective modernization to prevent colonization","A religious movement uniting Japan under Buddhist governance"],"c":2,"e":"Japan deliberately modernized military, economy, and government using Western models while maintaining Japanese political control, successfully avoiding colonization."},
    {"q":"The Treaty of Nanjing (1842) established which pattern repeated in subsequent 'unequal treaties'?","o":["Mutual tariff reduction and free trade between equal partners","China's right to trade in European ports on equal terms","Western nations gaining extraterritoriality, treaty ports, and most-favored-nation status","European nations paying China for the right to trade within its territory"],"c":2,"e":"The Treaty of Nanjing established the template: extraterritoriality, forced-open ports, and legal privileges that violated Chinese sovereignty."},
    {"q":"The Battle of Adwa (1896) was historically significant because it","o":["Demonstrated that African armies could never defeat European forces","Was the only complete African military defeat of a European colonial army during the Scramble for Africa","Led all European powers to immediately abandon their African colonies","Proved Ethiopia could build its own African empire"],"c":1,"e":"Menelik II destroyed an Italian army of 18,000, keeping Ethiopia independent, the only complete African military victory against a European colonial army during the Scramble for Africa."},
    {"q":"Indentured servitude in the 19th century is most accurately described as","o":["A genuinely voluntary migration system offering equal opportunities","A coercive labor system that replaced chattel slavery while maintaining plantation agriculture","A government program providing free transportation and guaranteed wages","A system used exclusively by Britain in the Caribbean"],"c":1,"e":"Indentured workers were often deceived about conditions, couldn't break contracts, and faced criminal penalties, maintaining plantation labor through contract and legal coercion after slavery's abolition."},
    {"q":"The Chinese Exclusion Act (1882) was most directly caused by","o":["Evidence that Chinese immigrants were statistically more likely to commit crimes","Diplomatic pressure from the Chinese government","Nativist backlash driven by economic competition and racial prejudice","A Supreme Court ruling that Chinese workers could not become citizens"],"c":2,"e":"The Act was driven by nativist politics: white workers used racial ideology to win federal immigration restriction, the first U.S. law restricting immigration by race."},
    {"q":"The 'Civilizing Mission' ideology justified imperialism by arguing that","o":["European nations had an economic obligation to develop colonial infrastructure","European races had a racial and moral duty to govern and 'uplift' non-Western peoples","Colonized peoples had requested European governance to provide peace and order","Industrial technology gave Europeans the right to claim underpopulated territories"],"c":1,"e":"The Civilizing Mission framed imperial conquest as humanitarian service, bringing Christianity, Western education, and 'civilization' to 'backward' peoples, disguising economic exploitation as moral obligation."},
    {"q":"Which best describes the economic relationship established by 'railroad imperialism' in colonial territories?","o":["Railroads connected domestic markets, generating local economic development","Railroads extracted raw materials from interiors to coastal ports for export, creating dependent economies","Railroad profits were shared equally between colonial and local governments","Railroads primarily served military purposes with minimal economic impact"],"c":1,"e":"Colonial railroads were built to extract resources for export, creating 'export enclave' economies structurally oriented to distant industrial markets, not local development."},
    {"q":"Social Darwinism differed from Darwin's actual scientific theory most significantly by","o":["Claiming that species changed through natural selection and competition","Applying biological concepts to human societies to justify racial hierarchy","Arguing the fittest individuals were those with the highest intelligence","Claiming all civilizations followed an identical evolutionary path"],"c":1,"e":"Darwin's theory addressed biological evolution; Social Darwinism misapplied it to human societies, using 'survival of the fittest' to claim imperial conquest was natural and morally justified."},
    {"q":"Dadabhai Naoroji's 'drain of wealth' theory argued that","o":["India's poverty resulted from overpopulation and traditional agriculture","British rule systematically extracted wealth from India through salaries, profits, and imperial taxation","Indian princes and landlords were responsible for India's poverty","Free trade policies benefited India by connecting it to global markets"],"c":1,"e":"Naoroji's drain theory argued British rule extracted Indian wealth through official salaries, remitted profits, and war costs, the economic foundation of Indian nationalist arguments against British rule."},
    {"q":"The pattern of diaspora communities in the late 19th century most directly illustrates","o":["The complete assimilation of immigrant communities into receiving societies within one generation","The creation of hybrid cultural identities that preserved home cultures while adapting to new environments","The failure of migrant communities to establish permanent settlements","The suppression of all non-European cultural practices in receiving societies"],"c":1,"e":"Diaspora communities showed consistent cultural retention (language, religion, festivals) alongside adaptation, creating hybrid identities neither fully original nor fully assimilated."},
    {"q":"The Boxer Rebellion (1900) ultimately demonstrated which historical pattern?","o":["Armed resistance against imperialism always succeeded in restoring sovereignty","Accommodation was always more effective than armed resistance","Armed resistance could sometimes deepen foreign control and worsen conditions for colonized peoples","Western powers always negotiated rather than using military force against popular uprisings"],"c":2,"e":"The Boxer Rebellion drew an eight-nation invasion; the Boxer Protocol imposed massive indemnities and expanded foreign military presence, armed resistance actually deepened China's subordination."},
    {"q":"Which combination of factors most directly explains the speed of the Scramble for Africa (1880–1914)?","o":["African resistance was negligible, allowing European powers to claim territory without opposition","Industrial military technology, quinine, and steam power combined with nationalist rivalry among European powers","African states invited European powers to establish colonial governance to resolve internal conflicts","The Berlin Conference required European powers to claim all unclaimed territory within 30 years"],"c":1,"e":"The Maxim machine gun, quinine, and steam-powered gunboats made rapid conquest feasible; nationalist rivalry meant no power could allow competitors to gain a strategic advantage."},
    {"q":"The concept of 'informal empire' best illustrates which historical argument?","o":["Military occupation was necessary for effective economic exploitation","Political independence from Spain made Latin American nations economically independent","Economic dominance through trade and investment could control a nation without formal annexation","Britain had no economic interest in Latin America after abolition of the slave trade"],"c":2,"e":"British banks, merchants, and railroads controlled Latin American economies after independence, proving that economic domination through 'free trade' could extract wealth as effectively as direct colonial rule."}
  ],
  timeline: [
    {"title":"Watt's Steam Engine","year":1765},
    {"title":"British Textile Revolution","year":1780,"label":"1780s–1800s"},
    {"title":"Abolition of Slavery in the British Empire","year":1833},
    {"title":"Communist Manifesto &amp; European Revolutions","year":1848},
    {"title":"Indian Sepoy Mutiny","year":1857,"label":"1857–58"},
    {"title":"Meiji Restoration: Japan Industrializes","year":1868},
    {"title":"Suez Canal Opens","year":1869},
    {"title":"Berlin Conference: Scramble for Africa","year":1884,"label":"1884–85"},
    {"title":"Indian National Congress Founded","year":1885},
    {"title":"Boer War: Limits of Empire Exposed","year":1899,"label":"1899–1902"}
  ],
  asteroid: [
    {"q":"The 1884–85 Berlin Conference established rules for which process?","o":["Dividing India into British provinces","Claiming African territory without African participation","Establishing free trade zones in Asia","Creating the League of Nations mandate system"],"c":1},
    {"q":"Social Darwinism applied Darwin's natural selection to","o":["Plant breeding and agriculture","Ocean exploration","Human societies to justify racial hierarchy and conquest","Factory management and efficiency"],"c":2},
    {"q":"What did the Treaty of Nanjing (1842) establish?","o":["Chinese sovereignty over Hong Kong","Extraterritoriality for Western citizens in China","Chinese right to trade in British ports","Joint British-Chinese rule of Shanghai"],"c":1},
    {"q":"Emperor Menelik II of Ethiopia defeated which European power at Adwa (1896)?","o":["France","Britain","Italy","Germany"],"c":2},
    {"q":"Japan's Meiji Restoration was primarily motivated by","o":["A desire to spread Japanese culture globally","The need to modernize militarily to avoid Western colonization","Religious reform led by Buddhist priests","Economic pressure from Chinese merchants"],"c":1},
    {"q":"Indentured servitude emerged primarily as a response to","o":["Demand for skilled industrial workers in Europe","Labor shortages on plantations after abolition of chattel slavery","The Irish Potato Famine forcing emigration","Chinese demand for foreign workers"],"c":1},
    {"q":"The Chinese Exclusion Act (1882) was the first U.S. law to restrict immigration by","o":["Age and health status","Political affiliation","Race and nationality","Educational attainment"],"c":2},
    {"q":"The 'White Man's Burden' ideology most directly argued that","o":["White Europeans had a duty to govern and 'civilize' non-Western peoples","White workers deserved higher wages than Asian workers","European nations had a right to any territory they could defend","Western science proved European biological superiority"],"c":0},
    {"q":"Colonial railroads in Africa and Asia were primarily built to","o":["Connect cities for passenger transportation","Extract raw materials from interiors to coastal ports for export","Facilitate communication between indigenous communities","Demonstrate European technological superiority"],"c":1},
    {"q":"The Boxer Rebellion (1900) resulted in","o":["China successfully expelling all foreign powers","The Boxer Protocol imposing massive indemnities and deepening foreign control","Reform of the Qing dynasty with Western assistance","Japan gaining control of Manchuria"],"c":1},
    {"q":"'Informal empire' most closely describes Britain's relationship with","o":["India after 1858","Latin America in the 19th century","Australia in the colonial period","South Africa under apartheid"],"c":1},
    {"q":"Diaspora communities in the late 19th century typically demonstrated","o":["Complete assimilation within one generation","Rejection of all elements of their new homeland","Cultural syncretism: preserving home culture while adapting to new environments","Rapid return to their homelands after accumulating wealth"],"c":2}
  ]
};
GAME_DATA[7] = {
  jeopardy: [
    { name: "Shifting Power", questions: [
      {"clue":"This 1868 transformation modernized Japan by adopting Western institutions, industry, and military organization","answer":"Meiji Restoration","explanation":"The Meiji Restoration transformed Japan from a feudal state into an industrial and military power, enabling it to become a major world player by the early 1900s."},
      {"clue":"Japan's stunning 1905 victory over this European country shocked the world and proved Japan was a major power","answer":"Russia (Russo-Japanese War)","explanation":"Japan's defeat of Russia in the Russo-Japanese War (1904-05) was the first time a non-Western nation defeated a European power in modern warfare."},
      {"clue":"Japan proposed this clause at the 1919 Paris Peace Conference, rejected by Western powers, fueling deep resentment","answer":"Racial Equality Clause","explanation":"Japan's proposal was blocked largely by the U.S., Britain, and Australia, humiliating Japan and fueling the ultranationalism that drove later militarism."},
      {"clue":"These three empires all collapsed between 1911 and 1922: one in China, one in Russia, one centered in Istanbul","answer":"Qing, Russian, and Ottoman Empires","explanation":"The fall of these three empires reshaped the world map and created the power vacuums that contributed to WWII instability."},
      {"clue":"Japan formally colonized this neighboring peninsula in 1910, beginning decades of harsh military rule","answer":"Korea","explanation":"Japan's annexation of Korea in 1910 followed its victory in the Russo-Japanese War; Korean culture and language were suppressed under colonial rule until 1945."}
    ]},
    { name: "Causes of WWI", questions: [
      {"clue":"The acronym historians use for the four long-term causes of World War I","answer":"MAIN (Militarism, Alliances, Imperialism, Nationalism)","explanation":"MAIN captures the structural tensions that made Europe a powder keg: military buildups, interlocking alliances, colonial rivalry, and ethnic nationalism."},
      {"clue":"This Austro-Hungarian heir was assassinated in Sarajevo on June 28, 1914, igniting WWI","answer":"Archduke Franz Ferdinand","explanation":"His assassination by Gavrilo Princip set off a chain of ultimatums and mobilizations that pulled all major European powers into war within six weeks."},
      {"clue":"Britain and Germany competed fiercely in this pre-WWI arms race, building ever-larger warships","answer":"Naval arms race (Dreadnought race)","explanation":"Germany's attempt to challenge British naval supremacy alarmed Britain and pushed it closer to France and Russia, tightening the alliance system."},
      {"clue":"This 1919 treaty ended WWI, forced Germany to accept sole blame, pay reparations, and lose territory","answer":"Treaty of Versailles","explanation":"The Treaty's harsh terms: especially the War Guilt Clause and massive reparations, created the economic and political instability that Hitler later exploited."},
      {"clue":"This Russian minister's 1914 memo eerily predicted that war would produce revolution in the losing nation","answer":"Pyotr Durnovo (Durnovo Memo)","explanation":"Durnovo warned Tsar Nicholas II that war against Germany would devastate Russia and lead to social revolution, a remarkably accurate prediction of 1917."}
    ]},
    { name: "Conducting WWI", questions: [
      {"clue":"This type of warfare defined the Western Front, creating a bloody stalemate in miles of dug-out positions","answer":"Trench warfare","explanation":"Trenches stretched from Belgium to Switzerland; new defensive weapons (machine guns, barbed wire) far outpaced offensive tactics, causing millions of casualties."},
      {"clue":"A conflict in which entire nations, civilians, factories, and economies, are fully mobilized for the war effort","answer":"Total war","explanation":"WWI was the first major total war: governments rationed food, conscripted workers, controlled industry, and used propaganda to sustain the home front."},
      {"clue":"Germany's introduction of this weapon in WWI horrified the world and was later banned by the 1925 Geneva Protocol","answer":"Poison gas (chemical weapons)","explanation":"Germany first used chlorine gas at Ypres in 1915; later phosgene and mustard gas caused devastating casualties and lasting psychological trauma."},
      {"clue":"Women entered these workplaces in massive numbers during WWI, producing shells, weapons, and war materials","answer":"Munitions factories","explanation":"Women's wartime industrial labor fundamentally changed their social roles and directly contributed to post-war suffrage movements in Britain and the U.S."},
      {"clue":"Germany's secret proposal for a military alliance with Mexico, intercepted by Britain, helped pull the U.S. into WWI","answer":"Zimmermann Telegram","explanation":"The 1917 Zimmermann Telegram: offering Mexico Texas, New Mexico, and Arizona for attacking the U.S. outraged American public opinion and accelerated U.S. entry into the war."}
    ]},
    { name: "Interwar Period", questions: [
      {"clue":"This worldwide economic crisis of the 1930s created fertile conditions for the rise of fascist dictators","answer":"Great Depression","explanation":"The Depression destroyed savings, created mass unemployment, and discredited liberal democracies, making populations desperate for authoritarian leaders who promised order and national revival."},
      {"clue":"This Italian dictator coined the term 'fascism' and seized power in 1922 by marching on Rome","answer":"Benito Mussolini (Il Duce)","explanation":"Mussolini's March on Rome forced King Victor Emmanuel III to appoint him prime minister; he then dismantled democracy and established the first fascist state, a model Hitler studied."},
      {"clue":"Gandhi's famous 1930 act of civil disobedience, a 240-mile protest march: targeted this British colonial policy","answer":"Salt tax (Salt March)","explanation":"The Salt March defied British law by making salt from seawater; it galvanized the Indian independence movement and demonstrated the global power of nonviolent resistance."},
      {"clue":"Britain and France gave Hitler the Sudetenland in 1938, hoping to prevent war, the defining act of this failed policy","answer":"Appeasement (Munich Agreement)","explanation":"Chamberlain declared 'peace for our time,' but Hitler invaded the rest of Czechoslovakia within months, proving appeasement only emboldened aggression."},
      {"clue":"Japan invaded this northeastern Chinese region in 1931, beginning its aggressive military expansion in Asia","answer":"Manchuria","explanation":"The Manchurian Incident (1931) was staged by Japanese officers; the League of Nations condemned it but took no action, revealing the League's fatal weakness."}
    ]},
    { name: "WWII", questions: [
      {"clue":"The German military strategy of rapid, combined air and armored attacks that defeated France in just six weeks","answer":"Blitzkrieg ('lightning war')","explanation":"Blitzkrieg bypassed France's Maginot Line through the Ardennes forest, encircling Allied forces at Dunkirk and forcing France's surrender in June 1940."},
      {"clue":"Hitler's invasion of this country on September 1, 1939 officially started WWII in Europe","answer":"Poland","explanation":"Germany's invasion triggered British and French declarations of war; Poland was then divided between Nazi Germany and the Soviet Union under the Molotov-Ribbentrop Pact."},
      {"clue":"Japan's surprise attack on this U.S. naval base on December 7, 1941 brought America into WWII","answer":"Pearl Harbor","explanation":"Japan's attack killed over 2,400 Americans and destroyed much of the U.S. Pacific Fleet; FDR called it 'a date which will live in infamy.'"},
      {"clue":"The Nazi concept of 'living space': used to justify conquering and colonizing Eastern Europe with Germanic settlers","answer":"Lebensraum","explanation":"Hitler compared Lebensraum to American westward expansion; it drove the invasion of the Soviet Union and the brutal occupation of Poland and Eastern Europe."},
      {"clue":"The United States dropped atomic bombs on these two Japanese cities in August 1945, ending WWII","answer":"Hiroshima and Nagasaki","explanation":"The bombs killed approximately 200,000 people; they remain the only use of nuclear weapons in warfare and ushered in the Cold War arms race."}
    ]},
    { name: "Atrocities & Propaganda", questions: [
      {"clue":"The Nazi systematic murder of approximately 6 million Jews and 6 million others using industrialized killing methods","answer":"The Holocaust","explanation":"The Holocaust used gas chambers, crematoria, and death camps to murder Jews, Roma, disabled people, and others the Nazis deemed racially inferior."},
      {"clue":"The Ottoman Empire's mass killing and forced deportation of up to 1.5 million of these people during WWI","answer":"Armenians (Armenian Genocide)","explanation":"Beginning in 1915, Ottoman leaders ordered deportation and massacre of Armenian Christians, widely recognized as one of the first modern genocides."},
      {"clue":"The Nazi propaganda myth that Germany lost WWI because Jews and communists betrayed the war effort from within","answer":"Stab-in-the-Back Legend (Dolchstosslegende)","explanation":"This false myth denied Germany's military defeat and scapegoated Jews; Hitler used it to build antisemitism into a mass political movement that justified the Holocaust."},
      {"clue":"Governments used this type of mass communication, posters, film, and radio, to mobilize populations and justify war","answer":"Propaganda","explanation":"Both World Wars saw states weaponize mass media: Britain suppressed naval defeats, Soviets promoted heroic worker imagery, and Nazi Germany produced history's most effective political propaganda."},
      {"clue":"This radical Cambodian communist regime killed roughly 25% of Cambodia's entire population between 1975 and 1979","answer":"Khmer Rouge (Pol Pot)","explanation":"The Khmer Rouge evacuated cities, abolished money and religion, and sent people to forced labor camps; approximately 1.5-2 million died from execution, starvation, and disease."}
    ]}
  ],
  matching: {
    success: "From shifting empires to the atomic age, you connected all the pieces.",
    pairs: [
      {"left":"Assassination of Archduke Franz Ferdinand","right":"Triggered the alliance system and started WWI"},
      {"left":"Trench warfare and new weapons (machine guns, poison gas)","right":"Created a brutal stalemate on the Western Front"},
      {"left":"Treaty of Versailles and the War Guilt Clause","right":"Humiliated Germany and fueled resentment leading to WWII"},
      {"left":"Russian Revolution of 1917","right":"Bolsheviks seized power and established a communist state"},
      {"left":"Great Depression and global economic collapse","right":"Created conditions for the rise of fascist dictators"},
      {"left":"Gandhi's Salt March and civil disobedience","right":"Challenged British colonial rule through nonviolent resistance"},
      {"left":"Hitler's invasion of Poland (September 1939)","right":"Triggered the start of World War II in Europe"},
      {"left":"Japanese militarism and the Greater East Asia Co-Prosperity Sphere","right":"Justified imperial expansion across Asia and the Pacific"},
      {"left":"Nazi ideology of racial superiority and Lebensraum","right":"Led to the Holocaust and systematic genocide of 6 million Jews"},
      {"left":"Total war: the Blitz, firebombing, and civilian targeting","right":"Blurred the line between soldiers and civilians in modern warfare"},
      {"left":"Atomic bombs dropped on Hiroshima and Nagasaki","right":"Ended WWII and demonstrated the terrifying power of nuclear weapons"},
      {"left":"Government propaganda and state-controlled media","right":"Used mass communication to mobilize and manipulate populations"}
    ]
  },
  sortit: [
    {"text":"Doc 3 was written by a Japanese military official, which means the source likely downplays the human costs of imperial expansion in order to persuade government leaders to authorize further military action.","earns":true,"explain":"<strong>Earns the point.</strong> Identifies the author's role (military official), explains the consequence (downplays human costs), and connects to an argument about persuasion and imperial authorization."},
    {"text":"Doc 1 was written by a Japanese business newspaper.","earns":false,"explain":"<strong>Doesn't earn the point.</strong> Identifies the source but stops there. No \"which means\": no explanation of why a business newspaper matters for any argument."},
    {"text":"Because Doc 5 is a U.S. government advertisement produced during WWII, its purpose was to maintain public morale, which means it overstates Allied military progress to encourage continued civilian support for the war.","earns":true,"explain":"<strong>Earns the point.</strong> Identifies the purpose (maintain morale), explains the consequence (overstates progress), and connects to the argument about state propaganda during total war."},
    {"text":"The author of Doc 4 is a Korean nationalist, so this document shows a Korean perspective.","earns":false,"explain":"<strong>Doesn't earn the point.</strong> Identifies that the author is Korean, but \"shows a Korean perspective\" is circular and vague. No explanation of what that means for the argument or what the source emphasizes or omits."},
    {"text":"Doc 7 was produced at the height of Stalin's industrialization campaign, which means it reflects intense pressure to project confidence in Soviet economic policy, making it an unreliable measure of actual worker conditions.","earns":true,"explain":"<strong>Earns the point.</strong> Names the historical situation (Stalin's industrialization), explains the consequence (pressure to project confidence), and connects to the argument about source reliability and state control."},
    {"text":"This propaganda poster has a purpose of convincing people. It uses strong imagery to make its point.","earns":false,"explain":"<strong>Doesn't earn the point.</strong> \"Convincing people\" is too vague to name a specific purpose, and describing the imagery is not HAPP analysis. No connection to an argument."},
    {"text":"Doc 2 is a photograph taken by a British War Office photographer on the Western Front, which means the image was likely curated to avoid showing British casualties, supporting the argument that governments used propaganda to maintain domestic support during total war.","earns":true,"explain":"<strong>Earns the point.</strong> Identifies the source type and producer (British War Office), explains the consequence (curated to avoid casualties), and connects explicitly to the argument about wartime propaganda."},
    {"text":"The point of view of Doc 6 is that the author supports imperialism. This helps understand the document.","earns":false,"explain":"<strong>Doesn't earn the point.</strong> \"This helps understand the document\" is not an explanation of relevance to an argument. The analysis must say what consequence the POV has for what the source emphasizes, omits, or why it was produced."}
  ],
  warmup: [
    {"type":"Photograph","sourceLine":"Photograph taken by an official British War Office photographer, Western Front, France, 1916","excerpt":"Image shows British soldiers walking single-file through a muddy trench system; no bodies or wounds are visible.","models":{"pov":"The point of view of this photograph is that of an official British War Office photographer, which means the image was selected and approved by the government, making it likely that scenes of mass casualties or failed offensives were excluded to maintain public support for the war.","purpose":"The purpose of this photograph was to document the war for a domestic British audience in a way that showed discipline and resolve, which means the image downplays the horrific conditions of trench warfare, supporting the argument that governments used visual media to control public perception during WWI.","audience":"Because this photograph was produced for a British domestic audience on the home front, it avoids images of death or defeat, which means the source cannot be used as reliable evidence of actual battlefield conditions but is strong evidence of how states managed civilian morale.","hist":"This photograph was taken during the prolonged stalemate of WWI trench warfare in 1916, which means the British government had strong reasons to prevent images of mass casualties from reaching the public, making this source reflect the total war strategy of controlling information as much as controlling territory."}},
    {"type":"Advertisement","sourceLine":"U.S. Treasury Department War Bonds advertisement, published in Life Magazine, United States, 1943","excerpt":"\"Every bond you buy is a bullet aimed at the enemy. Do your part: buy war bonds today.\"","models":{"pov":"The point of view of this advertisement is that of the U.S. government's Treasury Department, which means the source is designed to frame financial investment as a patriotic duty, making it reflect the argument that WWII-era states mobilized civilian populations through appeals to nationalism and shared sacrifice.","purpose":"The purpose of this advertisement was to persuade American civilians to finance the war effort by purchasing government bonds, which means it deliberately links personal spending to military victory, supporting the argument that states used mass communication to extract economic resources from civilian populations during total war.","audience":"Because this advertisement was directed at American civilian readers of a popular magazine, it uses emotionally charged language (\"aimed at the enemy\") rather than economic arguments, which means the source demonstrates how governments translated the abstract costs of war into personal moral obligations.","hist":"This advertisement was produced in 1943, during the height of U.S. involvement in WWII when government spending vastly exceeded tax revenue, which means the state was under pressure to fund the war through civilian debt, making this source evidence of how total war transformed the relationship between government and the domestic economy."}},
    {"type":"Official Report","sourceLine":"Report of the Committee on Alleged German Outrages (Bryce Report), British government publication, London, 1915","excerpt":"The report documents alleged atrocities committed by German forces in Belgium, including the killing of civilians and the destruction of Leuven.","models":{"pov":"The point of view of this official report reflects the British government's wartime need to justify intervention and sustain public and Allied support, which means the report likely amplifies or selectively presents German atrocities, making it evidence of wartime propaganda rather than a neutral account of events in Belgium.","purpose":"The purpose of this report was to build domestic and international support for Britain's war against Germany by documenting alleged German war crimes, which means the source systematically frames German actions as uniquely barbaric, supporting the argument that states used official publications to manufacture consent for total war.","audience":"Because this report was produced for a British public audience as well as neutral nations (including the United States), it needed to be credible enough to influence international opinion, which means the report uses legal and bureaucratic language to give official weight to accounts that served a clear propaganda purpose.","hist":"This report was published in 1915, when Britain needed to maintain civilian morale and encourage the United States to abandon neutrality, which means the historical situation of Allied military uncertainty shaped the report's emphasis on German brutality, making it a primary source for the study of state information control during WWI."}},
    {"type":"Personal Testimony","sourceLine":"Diary of Sgt. Shōhei Ōoka, Imperial Japanese Army, written during the Nanjing Campaign, China, December 1937","excerpt":"Entry describes the chaos of entering the city and difficulty maintaining unit discipline; makes no direct mention of civilian killings.","models":{"pov":"The point of view of this diary is that of a Japanese Imperial Army soldier writing in a war zone under military authority, which means the source may self-censor accounts of violence against civilians, making the absence of mentions of civilian killings itself significant evidence of how soldiers managed personal documentation under wartime conditions.","purpose":"Although a personal diary does not have an official purpose, the author wrote within a military context where personal documents could be examined, which means the source likely omits or minimizes accounts of atrocities, making it unreliable as a complete record but valuable as evidence of the pressures soldiers faced in documenting their own actions.","audience":"Because this diary was written for the author's personal record in a military context, the audience includes the author's future self and potentially military censors, which means the source's silence on civilian violence may reflect fear of punishment rather than an absence of knowledge, supporting the argument that states suppressed documentation of wartime atrocities.","hist":"This diary was written during the Nanjing Campaign of December 1937, a period of intense Japanese military pressure to consolidate control over China, which means soldiers operated under orders that prioritized speed and intimidation, making the diary's omissions consistent with the broader pattern of institutional suppression surrounding the Nanjing Massacre."}},
    {"type":"Government Article","sourceLine":"\"Dizzy with Success,\" by Joseph Stalin, published in Pravda (Soviet state newspaper), USSR, March 2, 1930","excerpt":"Stalin criticizes \"excesses\" in the collectivization campaign, blaming local party officials for moving too fast and using coercion, while defending the collective farm policy itself as a success.","models":{"pov":"The point of view of this article reflects Stalin's position as both the architect of collectivization and the leader of the Soviet state, which means the source deflects blame for violent coercion onto local officials in order to protect his own authority, making it evidence of how authoritarian states managed internal criticism to maintain ideological legitimacy.","purpose":"The purpose of this article was to reduce peasant resistance to collectivization by appearing to moderate the policy, while preserving the collective farm system itself, which means Stalin used state media not to reverse course but to stabilize a policy causing mass disruption, supporting the argument that Soviet economic control relied on managing popular perception as much as on force.","audience":"Because this article was published in Pravda and directed at Soviet party members and the broader public, Stalin needed to maintain the appearance of controlled, rational policy, which means the source admits limited \"excesses\" while attributing them to individual officials rather than the system, making it a model of how authoritarian leaders use official communication to contain dissent.","hist":"This article was written in early 1930 during a period of widespread peasant unrest and famine caused by rapid forced collectivization, which means the Soviet state faced the risk of losing control of rural areas, making Stalin's public \"correction\" a political tool to reduce resistance while preserving the fundamental policy of state economic control."}},
    {"type":"Propaganda Poster","sourceLine":"Nazi Party election poster, \"Hitler: Our Last Hope,\" Germany, 1932","excerpt":"The poster shows a long line of dejected, unemployed workers beneath bold text reading: \"Hitler: Our Last Hope.\"","models":{"pov":"The point of view of this poster reflects the Nazi Party's urgent need to win electoral support during Germany's economic crisis, which means the image frames mass unemployment as a crisis that only Hitler can resolve, making it evidence of how political movements used mass communication to translate economic despair into electoral mobilization.","purpose":"The purpose of this poster was to persuade unemployed German voters that Hitler represented their only solution to economic collapse, which means it deliberately connects individual suffering to a single political figure, supporting the argument that the Nazi rise to power was enabled by the political exploitation of post-WWI economic conditions.","audience":"Because this poster was aimed at unemployed German workers in 1932, it uses visual imagery of suffering rather than policy arguments, which means the source reflects the Nazi strategy of emotional appeal over substance, making it evidence of how economic desperation created conditions for authoritarian political movements.","hist":"This poster was produced in 1932 during the Great Depression, when German unemployment had reached approximately 30%, which means the historical situation of economic catastrophe created a political opening for extremist movements promising radical solutions, making this source a direct illustration of the connection between economic instability and the collapse of democratic governance in the interwar period."}}
  ],
  speedquiz: [
    {"q":"Which event directly triggered the alliance system and started World War I?","o":["The sinking of the Lusitania","The assassination of Archduke Franz Ferdinand","Germany's invasion of Belgium","Austria-Hungary's annexation of Bosnia"],"c":1,"e":"Gavrilo Princip assassinated Franz Ferdinand in Sarajevo on June 28, 1914, setting off a cascade of alliance obligations that drew every major European power into war within weeks."},
    {"q":"What does the acronym MAIN stand for as the long-term causes of WWI?","o":["Militarism, Alliances, Imperialism, Nationalism","Mobilization, Aggression, Industrialization, Nationalism","Military Alliances, Imperial Nations","Monarchism, Annexation, Industrialization, Nationalism"],"c":0,"e":"MAIN = Militarism (arms race), Alliances (Triple Entente vs. Triple Alliance), Imperialism (colonial rivalry), Nationalism (Pan-Slavism, German nationalism). These tensions made war explosive once the trigger was pulled."},
    {"q":"The War Guilt Clause (Article 231) of the Treaty of Versailles required Germany to","o":["Surrender all overseas colonies immediately","Accept sole responsibility for WWI and pay reparations","Disband its military permanently","Join the League of Nations as a probationary member"],"c":1,"e":"Article 231 forced Germany to accept sole war guilt and pay massive reparations. The economic devastation and national humiliation it caused fueled the resentment that Hitler exploited to rise to power."},
    {"q":"The Great Depression began in what year?","o":["1925","1927","1929","1933"],"c":2,"e":"The U.S. stock market crashed in October 1929, triggering a global economic collapse. By 1933, U.S. unemployment hit 25%, GDP fell ~27%, and world trade dropped by half."},
    {"q":"FDR's Keynesian economic recovery program during the Great Depression was called","o":["The Five Year Plans","Import Substitution","The New Deal","The Marshall Plan"],"c":2,"e":"FDR's New Deal (1933) used government spending on public works, relief programs, and financial regulation to stimulate recovery, a practical application of Keynesian deficit spending."},
    {"q":"Japan's 1905 victory in the Russo-Japanese War was historically significant primarily because","o":["It gave Japan permanent control of Korea","It was the first time a non-European nation defeated a European power in modern warfare","It directly caused WWI","It collapsed the Qing Dynasty"],"c":1,"e":"Japan's defeat of Russia shocked the world, demonstrating that a non-Western nation could defeat a European great power using industrialization and modern military tactics, signaling the end of automatic European dominance."},
    {"q":"Gandhi's Salt March (1930) was a protest against","o":["British control of the Indian army","The partition of Bengal","British colonial taxation and monopoly on salt","The deportation of Indian workers"],"c":2,"e":"The British Salt Acts prohibited Indians from making or selling salt. Gandhi's 240-mile march to the sea to make salt was a defining act of nonviolent civil disobedience that galvanized the Indian independence movement."},
    {"q":"Which technology was most responsible for the stalemate on the WWI Western Front?","o":["Airplanes","Poison gas","Machine guns and barbed wire","Naval submarines"],"c":2,"e":"Machine guns firing hundreds of rounds per minute made infantry advances across open ground nearly suicidal. Combined with barbed wire, artillery, and trenches, they created the deadlock that defined WWI."},
    {"q":"Stalin's centrally directed Soviet economic modernization program was called","o":["The New Economic Policy","The Five Year Plans","Collectivization Reform","The Comintern Agenda"],"c":1,"e":"Stalin's Five Year Plans (beginning 1928) set industrial production quotas and forced collectivization of agriculture, transforming the USSR into a major industrial power at the cost of millions of lives."},
    {"q":"The Munich Agreement (1938) is primarily remembered as an example of","o":["Successful collective security","The policy of appeasement toward Hitler","The League of Nations' military enforcement","Allied deterrence of fascism"],"c":1,"e":"Britain and France handed Hitler the Sudetenland at Munich, hoping to avoid war. Churchill called it 'a total defeat.' Six months later Hitler seized all of Czechoslovakia, proving appeasement had catastrophically failed."},
    {"q":"The Holocaust resulted in the systematic killing of approximately","o":["1 million people total","3 million Jews only","6 million Jews and 6 million others","20 million soldiers and civilians combined"],"c":2,"e":"Nazi Germany used industrial methods, gas chambers, crematoria, deportation networks, to murder approximately 6 million Jews and 6 million others including Roma, disabled people, Soviet POWs, and political prisoners."},
    {"q":"Which economic policy did Latin American governments use during the Great Depression to reduce dependence on foreign imports?","o":["Keynesian austerity","Import substitution industrialization","Gold standard currency pegging","Export-led growth"],"c":1,"e":"Import substitution industrialization (ISI) encouraged domestic manufacturing of goods previously imported from Europe and the U.S. Mexico nationalized its oil industry (Pemex, 1938) as part of this broader shift."},
    {"q":"Total war in WWI and WWII is best described as","o":["A strategy targeting only military combatants","The complete mobilization of a nation's economy and civilian population for warfare","A peace treaty requiring unconditional surrender","An alliance that obligated all members to join any conflict"],"c":1,"e":"Total war blurred the soldier/civilian line. Governments controlled industries, rationed goods, used propaganda, conscripted workers, and deliberately targeted civilian infrastructure, making the home front as critical as the battlefield."},
    {"q":"Which development most directly explains the rise of fascism in Germany and Italy during the 1930s?","o":["WWI military generals who refused to accept civilian government's authority","Economic devastation and national humiliation following WWI and the Great Depression","Communist revolutions that forced moderate parties to adopt radical nationalism","The collapse of the League of Nations military enforcement"],"c":1,"e":"Versailles's punishing terms left Germany economically destroyed and nationally humiliated. The Great Depression deepened the crisis. Desperate populations turned to authoritarian leaders promising national restoration and economic solutions."},
    {"q":"The atomic bombs dropped on Hiroshima and Nagasaki (1945) are historically significant because they","o":["Were the first use of chemical weapons in warfare","Ended WWI and established U.S. military supremacy","Ended WWII and introduced a new era of nuclear deterrence","Destroyed military bases with minimal civilian casualties"],"c":2,"e":"The bombs killed ~200,000 people and forced Japan's surrender, ending WWII. They also inaugurated the nuclear age, a world where cities could be annihilated in an instant, permanently transforming war and international relations."}
  ],
  timeline: [
    {"title":"World War I Begins","year":1914},
    {"title":"Russian Revolution","year":1917},
    {"title":"Treaty of Versailles","year":1919},
    {"title":"The Great Depression","year":1929},
    {"title":"Gandhi's Salt March","year":1930},
    {"title":"Hitler Becomes Chancellor","year":1933},
    {"title":"Munich Agreement","year":1938},
    {"title":"The Holocaust","year":1941,"label":"1941–45"},
    {"title":"Atomic Bomb & WWII Ends","year":1945}
  ],
  asteroid: [
    {"q":"Which technology caused the WWI Western Front stalemate?","o":["Poison gas","Machine guns & barbed wire","Fighter planes","Tank warfare"],"c":1},
    {"q":"MAIN stands for Militarism, Alliances, Imperialism, and…","o":["Nationalism","Navigation","Neutrality","Naval power"],"c":0},
    {"q":"What did the War Guilt Clause require Germany to do?","o":["Accept sole blame & pay reparations","Surrender the Rhine","Divide the country","Disarm permanently"],"c":0},
    {"q":"Gandhi’s 1930 Salt March protested…","o":["Partition of Bengal","British salt monopoly","British conscription","The Bengal famine"],"c":1},
    {"q":"Japan’s Russo-Japanese War victory (1905) proved…","o":["Europe ruled Asia forever","Non-Europeans could defeat European powers","Japan needed more colonies","Russia was invincible"],"c":1},
    {"q":"FDR’s U.S. Depression recovery program was called…","o":["Five Year Plans","The New Deal","Import Substitution","The Marshall Plan"],"c":1},
    {"q":"Stalin’s Soviet economic program was called…","o":["New Economic Policy","Five Year Plans","Collectivization Reform","Comintern Agenda"],"c":1},
    {"q":"The Munich Agreement (1938) gave Hitler…","o":["Poland","Austria","The Sudetenland","The Rhineland"],"c":2},
    {"q":"The Great Depression began in…","o":["1925","1927","1929","1933"],"c":2},
    {"q":"Total war means…","o":["Target soldiers only","Full mobilization of economy & civilians","No peace treaties allowed","All allies must fight"],"c":1},
    {"q":"Which event directly triggered WWI?","o":["Sinking of Lusitania","Assassination of Franz Ferdinand","German invasion of Belgium","Zimmermann Telegram"],"c":1},
    {"q":"Latin American import substitution industrialization meant…","o":["Free trade zones","Build domestic industry to replace imports","Nationalize only oil","Export-led growth only"],"c":1}
  ]
};
GAME_DATA[8] = {
  jeopardy: [
    { name: "Cold War Origins", questions: [
      {"clue":"Churchill's 1946 speech coined this two-word metaphor for the Soviet division of Europe","answer":"Iron Curtain","explanation":"Churchill's 'Sinews of Peace' speech in Fulton, Missouri publicly named the emerging East-West division, crystallizing Cold War rhetoric for Western audiences."},
      {"clue":"This 1947 American policy committed the U.S. to supporting 'free peoples' resisting communist subjugation, starting with Greece and Turkey","answer":"Truman Doctrine","explanation":"The Truman Doctrine replaced British support in Greece and Turkey and set the precedent for decades of American Cold War intervention globally."},
      {"clue":"George Kennan's strategy of preventing Soviet expansion without direct military confrontation","answer":"Containment","explanation":"Kennan's 'Long Telegram' and 'X Article' argued that patient, firm resistance to Soviet expansion, not rollback: was the correct American strategy."},
      {"clue":"The American economic recovery program that provided $13 billion to rebuild Western European economies after WWII","answer":"Marshall Plan","explanation":"The Marshall Plan simultaneously rebuilt Western Europe, created markets for American goods, and anchored Western European nations to the American-led democratic bloc."},
      {"clue":"This 1949 military alliance committed its members to treat an attack on one as an attack on all","answer":"NATO (North Atlantic Treaty Organization)","explanation":"NATO's Article 5 collective defense commitment bound the United States to European defense for the first time in peacetime, forming the Western military alliance."}
    ]},
    { name: "Cold War Conflicts", questions: [
      {"clue":"This October 1962 confrontation brought the world to the brink of nuclear war over Soviet missiles 90 miles from Florida","answer":"Cuban Missile Crisis","explanation":"Kennedy's naval blockade and Khrushchev's eventual agreement to remove missiles, in exchange for a U.S. pledge not to invade Cuba, averted nuclear war."},
      {"clue":"The Cold War strategy of maintaining enough nuclear weapons to guarantee mutual destruction if either side attacked first","answer":"MAD: Mutually Assured Destruction","explanation":"MAD made direct superpower war irrational, neither side could strike first without facing annihilation. This nuclear standoff paradoxically stabilized the Cold War."},
      {"clue":"The 1955 Soviet counterpart to NATO, which formalized the Soviet military alliance with Eastern European satellite states","answer":"Warsaw Pact","explanation":"Formed in response to West Germany joining NATO, the Warsaw Pact institutionalized Soviet military control over Eastern Europe for the duration of the Cold War."},
      {"clue":"The theory that if one country fell to communism, neighboring countries would follow, used to justify Vietnam intervention","answer":"Domino Theory","explanation":"Eisenhower articulated the domino theory in 1954; it became the primary justification for massive American military involvement in Vietnam."},
      {"clue":"The expensive Soviet-American competition to develop ever more powerful nuclear weapons and delivery systems","answer":"Nuclear Arms Race","explanation":"The arms race consumed enormous resources and produced thousands of warheads, enough to destroy civilization many times over, while making both superpowers existentially vulnerable."}
    ]},
    { name: "Communism Spreads", questions: [
      {"clue":"Ho Chi Minh's 1945 declaration quoted this American founding document to argue for Vietnamese independence","answer":"The Declaration of Independence","explanation":"Ho Chi Minh strategically invoked Jefferson's 'all men are created equal' to appeal to American anti-colonial ideals, a gamble that failed when Cold War logic prevailed."},
      {"clue":"Mao Zedong's communist guerrilla strategy described warfare as: 'The enemy advances, we retreat; the enemy camps, we harass'","answer":"People's War (guerrilla warfare / Maoist strategy)","explanation":"Mao's strategy of mobilizing peasants in prolonged guerrilla warfare defeated the Nationalist KMT and became a model for communist insurgencies worldwide."},
      {"clue":"The communist victory in China in 1949 was won by this political party, led by Mao Zedong","answer":"Chinese Communist Party (CCP)","explanation":"The CCP's victory shocked the West and contributed to 'Who lost China?' debates in the U.S., intensifying McCarthyism and hardening Cold War anti-communist policies."},
      {"clue":"The 1950–1953 war that divided a peninsula between a communist north and an American-backed south at the 38th parallel","answer":"Korean War","explanation":"The Korean War was the first major armed proxy conflict of the Cold War, ending in stalemate along the original partition line but costing over 3 million lives."},
      {"clue":"The conflict in which the U.S. deployed 500,000+ troops to prevent communist North Vietnam from unifying the country","answer":"Vietnam War","explanation":"The Vietnam War lasted from 1955–1975; despite massive American military force, North Vietnam won unification in 1975, a major Cold War defeat for the United States."}
    ]},
    { name: "Decolonization", questions: [
      {"clue":"This 1955 conference in Indonesia launched the Non-Aligned Movement as newly independent Asian and African nations rejected Cold War alignment","answer":"Bandung Conference","explanation":"Twenty-nine nations gathered at Bandung under leaders like Sukarno, Nehru, Nkrumah, and Nasser to chart an independent path between the US and Soviet blocs."},
      {"clue":"India's independence leader who pioneered nonviolent civil disobedience against British colonial rule","answer":"Mahatma Gandhi","explanation":"Gandhi's satyagraha (nonviolent resistance) tactics: the Salt March, civil disobedience campaigns, hunger strikes, forced Britain to grant Indian independence in 1947."},
      {"clue":"Ghana's independence leader and first president, who became a symbol of African decolonization in 1957","answer":"Kwame Nkrumah","explanation":"Nkrumah led the Gold Coast to become independent Ghana in 1957, the first sub-Saharan African colony to gain independence, inspiring decolonization across Africa."},
      {"clue":"Algeria's brutal independence war (1954–1962) was fought against this European colonial power","answer":"France","explanation":"The Algerian War claimed over 300,000 lives, brought down France's Fourth Republic, and became a defining example of violent decolonization, in contrast to India's peaceful transfer of power."},
      {"clue":"African independence leader who articulated Pan-Africanism and rejected superpower alignment: 'Africa must unite'","answer":"Kwame Nkrumah (Pan-Africanism)","explanation":"Nkrumah argued that African nations must cooperate economically and politically to resist neocolonialism, the continuation of Western economic control after formal independence."}
    ]},
    { name: "Resistance & Reform", questions: [
      {"clue":"Nelson Mandela's organization, which fought apartheid in South Africa through protest, sabotage, and international pressure","answer":"African National Congress (ANC)","explanation":"The ANC: founded 1912, banned 1960, unbanned 1990, led the anti-apartheid struggle. Mandela served 27 years in prison before becoming South Africa's first Black president in 1994."},
      {"clue":"This American civil rights leader organized the 1963 March on Washington and delivered the 'I Have a Dream' speech","answer":"Martin Luther King Jr.","explanation":"King's nonviolent strategy: inspired by Gandhi: produced landmark legislation: the Civil Rights Act (1964) and Voting Rights Act (1965), dismantling legal segregation in the U.S."},
      {"clue":"The system of racial segregation and white minority rule in South Africa, formally established in 1948","answer":"Apartheid","explanation":"Apartheid classified South Africans by race and denied Black citizens basic rights; it ended through international sanctions, internal resistance, and negotiated transition in 1994."},
      {"clue":"Feminist leader and author of 'The Feminine Mystique' (1963) who challenged the limitation of women's roles to domestic life","answer":"Betty Friedan","explanation":"Friedan articulated 'the problem that has no name': women's dissatisfaction with domestic confinement, and helped launch second-wave feminism in the United States."},
      {"clue":"Gandhi's key term for nonviolent resistance, meaning 'truth-force' or 'soul-force'","answer":"Satyagraha","explanation":"Gandhi developed satyagraha as a principled alternative to violent resistance: by accepting suffering without retaliation, resisters demonstrated moral superiority and exposed colonial injustice."}
    ]},
    { name: "End of Cold War", questions: [
      {"clue":"Gorbachev's policy of economic restructuring, which loosened state control of the Soviet economy in the late 1980s","answer":"Perestroika","explanation":"Perestroika (restructuring) allowed limited market reforms and private enterprise but created economic chaos and political instability, contributing to the Soviet collapse."},
      {"clue":"Gorbachev's policy of 'openness,' which allowed public criticism of the Soviet government for the first time","answer":"Glasnost","explanation":"Glasnost unleashed decades of suppressed grievances about corruption, inefficiency, and Soviet crimes. Rather than strengthening the system, it revealed its fundamental illegitimacy."},
      {"clue":"The barrier dividing East and West Berlin fell on this date in 1989, symbolizing the end of the Cold War","answer":"November 9, 1989","explanation":"East German authorities accidentally announced that citizens could cross the border; crowds gathered and began dismantling the Wall, one of history's most dramatic moments of political change."},
      {"clue":"The Soviet Union formally dissolved on this date, ending the Cold War","answer":"December 25, 1991","explanation":"Gorbachev resigned on Christmas Day 1991 as the USSR officially dissolved into 15 independent republics, ending the superpower confrontation that had defined world politics since 1947."},
      {"clue":"Reagan's challenge to Gorbachev at the Brandenburg Gate: 'Mr. Gorbachev, ______ this wall!'","answer":"Tear down","explanation":"Reagan's 1987 speech at the Berlin Wall challenged Soviet legitimacy and aligned American rhetoric with democratic aspirations across Eastern Europe. The wall fell two years later."}
    ]}
  ],
  matching: {
    success: "From the Iron Curtain to the fall of the Berlin Wall, you connected all the pieces.",
    pairs: [
      {"left":"Churchill's 'Iron Curtain' speech (1946)","right":"Publicly named the East-West division and crystallized Cold War rhetoric"},
      {"left":"Truman Doctrine (1947): aid to Greece and Turkey","right":"Operationalized containment and committed the U.S. to resisting communist expansion globally"},
      {"left":"Marshall Plan ($13 billion to Western Europe)","right":"Rebuilt Western economies, anchored Europe to the American bloc, and denied Soviet influence"},
      {"left":"Soviet development of nuclear weapons (1949)","right":"Ended the American nuclear monopoly and intensified the arms race"},
      {"left":"Cuban Missile Crisis (1962)","right":"Brought superpowers to the brink of nuclear war; led to the hotline and arms control talks"},
      {"left":"Ho Chi Minh's independence declaration quoting Jefferson","right":"Demonstrated anti-colonial movements adapting Western ideals against Western imperial domination"},
      {"left":"Bandung Conference and the Non-Aligned Movement (1955)","right":"Challenged Cold War bipolarity by asserting newly independent nations' right to neutrality"},
      {"left":"Gandhi's nonviolent civil disobedience against Britain","right":"Won Indian independence in 1947 and inspired global movements for civil rights and decolonization"},
      {"left":"Decolonization of Africa (1950s–1970s)","right":"Created 50+ newly independent states that struggled with Cold War pressure and neocolonialism"},
      {"left":"Apartheid in South Africa","right":"Provoked global anti-apartheid movements; ended through sanctions, resistance, and the ANC's 1994 electoral victory"},
      {"left":"Gorbachev's glasnost and perestroika reforms","right":"Undermined the legitimacy of Soviet communism and accelerated the USSR's collapse"},
      {"left":"Fall of the Berlin Wall (November 9, 1989)","right":"Symbolized the end of the Cold War and precipitated the reunification of Germany"}
    ]
  },
  sortit: [
    {"text":"Doc 2 was written by an NSC official in 1950, which means the source likely exaggerates the Soviet threat in order to persuade Congress to dramatically increase the defense budget.","earns":true,"explain":"<strong>Earns the point.</strong> Identifies the author's role and institutional position, explains the consequence (exaggerates threat), and connects to the argument about budget justification."},
    {"text":"Doc 1 was written by Winston Churchill in 1946.","earns":false,"explain":"<strong>Doesn't earn the point.</strong> Names the author but stops there. No \"which means\": no explanation of why Churchill's role or the historical situation matters for any argument."},
    {"text":"Because Doc 5 is a decolonization speech delivered by Sukarno at an international conference of newly independent nations, its purpose was to build solidarity, which means it overstates unity and downplays internal divisions among Asian and African states.","earns":true,"explain":"<strong>Earns the point.</strong> Identifies the purpose (build solidarity), explains the consequence (overstates unity), and connects to the argument about Non-Aligned Movement rhetoric."},
    {"text":"The author of Doc 3 is Ho Chi Minh, so this document shows the communist point of view on Vietnamese independence.","earns":false,"explain":"<strong>Doesn't earn the point.</strong> \"Shows the communist point of view\" is circular and vague. No explanation of what consequences that perspective has for what the document emphasizes or how it argues."},
    {"text":"Doc 6 was produced at the height of the Soviet arms buildup, which means it reflects pressure to project military confidence, making it an unreliable source for actual Soviet military capacity.","earns":true,"explain":"<strong>Earns the point.</strong> Names the historical situation (Soviet arms buildup), explains the consequence (pressure to project confidence), and connects to reliability and the argument."},
    {"text":"This independence speech uses emotional language and appeals to people's feelings. It was clearly trying to convince its audience.","earns":false,"explain":"<strong>Doesn't earn the point.</strong> \"Emotional language\" and \"convince its audience\" are too vague: no specific HAPP feature identified, and \"convincing people\" is a generic purpose that doesn't connect to an argument."},
    {"text":"Doc 4 is a British Colonial Office report written for a London audience, which means the source likely minimizes African agency and resistance in order to justify continued British control over colonial territories.","earns":true,"explain":"<strong>Earns the point.</strong> Identifies audience (London policymakers), explains the consequence (minimizes African agency), and connects explicitly to the argument about colonial justification."},
    {"text":"The point of view of Doc 7 is that the author supports decolonization. This helps us understand why the document was written.","earns":false,"explain":"<strong>Doesn't earn the point.</strong> \"This helps us understand why the document was written\" is circular. No explanation of what consequences the author's support for decolonization has for what the source emphasizes, omits, or argues."}
  ],
  speedquiz: [
    {"q":"Churchill's 1946 'Iron Curtain' speech named the division between","o":["Western and Eastern Europe under Soviet domination","Britain and France","NATO and the Warsaw Pact","The United States and China"],"c":0,"e":"Churchill described Soviet-dominated Eastern Europe as behind an 'iron curtain': a metaphor that defined Cold War geography."},
    {"q":"The Truman Doctrine (1947) committed the U.S. to supporting free peoples resisting","o":["Fascist military coups","Communist subjugation by armed minorities or outside pressure","Economic inequality and poverty","Colonial rule by European empires"],"c":1,"e":"Truman asked Congress for $400 million to support Greece and Turkey, operationalizing containment as American foreign policy."},
    {"q":"George Kennan's Cold War strategy, which called for firm resistance to Soviet expansion without direct military confrontation, was called","o":["Rollback","Détente","Containment","Massive Retaliation"],"c":2,"e":"Kennan's 'Long Telegram' and 'X Article' argued that patient, firm containment would eventually cause the Soviet system to collapse from within."},
    {"q":"The Cuban Missile Crisis of 1962 was resolved when","o":["The U.S. invaded Cuba and destroyed the missiles","The Soviet Union agreed to remove missiles in exchange for a U.S. pledge not to invade Cuba","The United Nations deployed peacekeepers to Cuba","Cuba chose to align with the United States"],"c":1,"e":"Kennedy imposed a naval blockade; Khrushchev agreed to remove missiles. The U.S. privately promised not to invade Cuba and quietly withdrew missiles from Turkey."},
    {"q":"The Non-Aligned Movement, launched at the 1955 Bandung Conference, represented newly independent nations that chose to","o":["Align with the Soviet Union against Western imperialism","Join both NATO and the Warsaw Pact","Remain neutral rather than align with either Cold War superpower","Form a military alliance to challenge American and Soviet power"],"c":2,"e":"Nations including India, Indonesia, Ghana, and Egypt asserted their right to navigate between the superpowers, challenging Cold War bipolarity."},
    {"q":"Gandhi's tactic of refusing to obey unjust laws and accepting punishment without violence is called","o":["Guerrilla warfare","Non-cooperation movement","Civil disobedience (satyagraha)","Parliamentary resistance"],"c":2,"e":"Gandhi's satyagraha (truth-force) held that accepting suffering without retaliation exposed the moral illegitimacy of colonial rule and pressured oppressors to reform."},
    {"q":"Kwame Nkrumah led which African nation to independence in 1957, the first in sub-Saharan Africa?","o":["Nigeria","Kenya","Ghana","Algeria"],"c":2,"e":"The Gold Coast became independent Ghana in 1957 under Nkrumah, inspiring a wave of African decolonization that produced 17 new African nations in 1960 alone."},
    {"q":"Mao Zedong's strategy that mobilized peasants through prolonged guerrilla warfare to defeat the Nationalists in China was called","o":["Blitzkrieg","People's War","The Long March","The Great Leap Forward"],"c":1,"e":"Mao's People's War strategy used rural peasants as the revolutionary base, 'the enemy advances, we retreat': and became a model for communist insurgencies globally."},
    {"q":"Ho Chi Minh's 1945 declaration of Vietnamese independence strategically quoted which document?","o":["The French Declaration of the Rights of Man","The Atlantic Charter","The American Declaration of Independence","The Soviet Constitution"],"c":2,"e":"Ho Chi Minh quoted Jefferson's 'all men are created equal' to appeal to American anti-colonial ideals, a gamble that failed when Cold War anti-communism overrode such considerations."},
    {"q":"The Berlin Wall was constructed in 1961 primarily to","o":["Protect East Germany from NATO invasion","Stop the flow of East Germans fleeing to the West","Divide West Germany into occupation zones","Prevent nuclear missiles from entering East Berlin"],"c":1,"e":"By 1961, 3 million East Germans had fled west through Berlin. The Wall stopped this embarrassing population exodus but became the Cold War's most visible symbol."},
    {"q":"Gorbachev's policy of 'openness' that allowed public criticism of Soviet government was called","o":["Perestroika","Détente","Glasnost","Solidarity"],"c":2,"e":"Glasnost (openness) unleashed suppressed criticism of Soviet corruption and inefficiency. Rather than strengthening the system, it exposed its fundamental illegitimacy."},
    {"q":"The system of racial segregation and white minority rule in South Africa was called","o":["Jim Crow","Apartheid","Colonialism","Segregation"],"c":1,"e":"Apartheid (Afrikaans for 'separateness') classified South Africans by race and denied Black citizens basic rights from 1948 until its dismantling in 1994."},
    {"q":"The Soviet Union formally dissolved in","o":["1989","1990","1991","1993"],"c":2,"e":"On December 25, 1991, Gorbachev resigned and the USSR officially dissolved into 15 independent republics, ending the Cold War that had defined world politics since 1947."},
    {"q":"The Korean War (1950–1953) ended in","o":["North Korean victory and unification of Korea","American nuclear strike on North Korea","Stalemate near the original 38th parallel partition line","South Korean capture of Pyongyang"],"c":2,"e":"After three years of fighting and 3+ million casualties, the armistice restored the pre-war boundary, the 38th parallel: leaving Korea permanently divided."},
    {"q":"Nelson Mandela's organization that led the anti-apartheid struggle in South Africa was the","o":["ANC: African National Congress","ZANU: Zimbabwe African National Union","PAC: Pan Africanist Congress","UDF: United Democratic Front"],"c":0,"e":"The ANC (founded 1912, banned 1960, unbanned 1990) led the anti-apartheid struggle. Mandela served 27 years in prison and became South Africa's first Black president in 1994."}
  ],
  timeline: [
    {"title":"WWII ends; Japan surrenders","year":1945},
    {"title":"Churchill's Iron Curtain speech","year":1946},
    {"title":"Truman Doctrine & Marshall Plan","year":1947},
    {"title":"NATO formed; China falls to communism","year":1949},
    {"title":"Korean War begins","year":1950},
    {"title":"Bandung Conference: Non-Aligned Movement","year":1955},
    {"title":"Ghana becomes independent (first in sub-Saharan Africa)","year":1957},
    {"title":"Berlin Wall constructed","year":1961},
    {"title":"Cuban Missile Crisis","year":1962},
    {"title":"Berlin Wall falls; Eastern Bloc collapses","year":1989}
  ],
  asteroid: [
    {"q":"What was Churchill's metaphor for Soviet domination of Eastern Europe?","o":["Red Curtain","Iron Curtain","Steel Wall","Eastern Barrier"],"c":1},
    {"q":"The Truman Doctrine (1947) operationalized which Cold War strategy?","o":["Rollback","Détente","Containment","Massive Retaliation"],"c":2},
    {"q":"The 1955 Bandung Conference launched the:","o":["Warsaw Pact","Non-Aligned Movement","Organization of African Unity","SEATO"],"c":1},
    {"q":"Ho Chi Minh quoted which founding document in his 1945 independence declaration?","o":["The Magna Carta","The French Declaration of Rights","The U.S. Declaration of Independence","The Atlantic Charter"],"c":2},
    {"q":"Gorbachev's policy of political 'openness' was called:","o":["Perestroika","Solidarity","Glasnost","Détente"],"c":2},
    {"q":"The Cuban Missile Crisis ended when the Soviets agreed to:","o":["Abandon Cuba entirely","Remove missiles in exchange for a U.S. pledge not to invade Cuba","Dismantle all Soviet nuclear weapons","Join the Non-Aligned Movement"],"c":1},
    {"q":"Kwame Nkrumah led which nation to become the first independent sub-Saharan African state?","o":["Nigeria","Algeria","Kenya","Ghana"],"c":3},
    {"q":"The Berlin Wall was built in 1961 primarily to stop:","o":["NATO military advances","Nuclear missile deployment","East Germans fleeing to the West","American spy operations"],"c":2},
    {"q":"The theory that communist victory in one country would trigger neighboring countries to fall was called:","o":["Containment","Domino Theory","MAD","Détente"],"c":1},
    {"q":"South Africa's system of racial segregation was called:","o":["Jim Crow","Colonialism","Apartheid","Segregation"],"c":2},
    {"q":"Mao Zedong's guerrilla strategy mobilized which social class as the revolutionary base?","o":["Urban workers","Military officers","Peasants","Intellectuals"],"c":2},
    {"q":"The Soviet Union formally dissolved in which year?","o":["1989","1990","1991","1992"],"c":2}
  ]
};
