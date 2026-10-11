/* review-games-data.js: the content for each unit's in-page review games
   (Jeopardy, Narrative Matching, Sort It, Speed Quiz, Timeline Builder,
   Asteroid Blaster), drawn by review-games.js on the unit's Games tab.
   Edit a unit's games here. Shape of each unit: see the top of review-games.js.
   Units 2-4 leave out "matching" because their Games tab already has its own
   Narrative Matching game. Units 5-8 keep their games inline in their pages. */
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
      { q: "The Bhakti movement emphasized", o: ["Strict caste rules","Personal devotion to a Hindu god","Conversion to Islam","Buddhist monasticism"], c: 1, e: "Bhakti welcomed devotees of all castes and stressed love for a god such as Vishnu or Shiva." },
      { q: "Cahokia was a city built by the", o: ["Aztecs","Maya","Inca","Mississippian culture"], c: 3, e: "Cahokia, near modern St. Louis, was the largest Mississippian city." }
    ],
    timeline: [
      { title: "Song dynasty founded in China", year: 960 },
      { title: "First Crusade begins", year: 1095 },
      { title: "Delhi Sultanate founded", year: 1206 },
      { title: "Magna Carta limits the English king", year: 1215 },
      { title: "Mongols sack Baghdad", year: 1258 },
      { title: "Mansa Musa's pilgrimage to Mecca", year: 1324 },
      { title: "Aztecs found Tenochtitlan", year: 1325 },
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
      { q: "Caravanserai were", o: ["Roadside inns for traveling merchants","Chinese paper money","Mongol relay riders","Arab sailing ships"], c: 0, e: "Caravanserai gave caravans safe places to rest, trade, and exchange ideas." },
      { q: "The Pax Mongolica refers to", o: ["A Mongol religious code","Stability under Mongol rule that made Eurasian trade safer","A peace treaty between China and Japan","Mongol laws against trade"], c: 1, e: "Mongol control of Eurasia protected merchants and revived the Silk Roads." },
      { q: "Zheng He's voyages were sponsored by the", o: ["Yuan dynasty","Song dynasty","Ming dynasty","Qing dynasty"], c: 2, e: "The Ming emperor Yongle sent Zheng He's fleets between 1405 and 1433." },
      { q: "Indian Ocean trade was shaped above all by", o: ["The Gulf Stream","Ice-free northern ports","Caravan routes","Seasonal monsoon winds"], c: 3, e: "Merchants timed their voyages to the monsoons." },
      { q: "Trans-Saharan gold came mainly from", o: ["West Africa","Egypt","Persia","East Africa's Swahili coast"], c: 0, e: "Gold from West African fields was traded north across the Sahara for salt." },
      { q: "The camel saddle was important because it", o: ["Allowed cavalry charges in Europe","Made large-scale trade across the Sahara possible","Was used to carry silk to China","Replaced ships in the Indian Ocean"], c: 1, e: "Better saddles let camels carry heavy loads across the desert." },
      { q: "The Black Death spread mainly through", o: ["Contaminated water","Mosquitoes","Fleas on rats traveling trade routes","Volcanic ash"], c: 2, e: "Plague bacteria spread through fleas carried along Eurasian trade networks." },
      { q: "The Yuan dynasty was founded by", o: ["Genghis Khan","Zheng He","Hongwu","Kublai Khan"], c: 3, e: "Kublai Khan, Genghis Khan's grandson, founded the Yuan dynasty in China." },
      { q: "Mansa Musa's pilgrimage to Mecca", o: ["Displayed Mali's wealth so lavishly that gold lost value in Cairo","Converted Mali to Christianity","Ended the trans-Saharan trade","Was cut short by the Black Death"], c: 0, e: "His spending spread Mali's fame across the Mediterranean world." },
      { q: "The Swahili city-states were located on", o: ["The West African coast","The East African coast","The Red Sea coast of Arabia","The Malabar coast of India"], c: 1, e: "Cities like Kilwa and Mombasa thrived on Indian Ocean trade." },
      { q: "Ibn Battuta was a", o: ["Chinese admiral","Venetian merchant","Moroccan Muslim traveler and scholar","Mongol khan"], c: 2, e: "Ibn Battuta traveled across Africa, the Middle East, and Asia in the 1300s." },
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
      { q: "The Janissaries were", o: ["Persian tax collectors","Elite Ottoman infantry recruited through the devshirme","Russian nobles","Mughal court poets"], c: 1, e: "Christian boys taken through the devshirme were trained as loyal soldiers." },
      { q: "The Safavid Empire's state religion was", o: ["Sunni Islam","Sikhism","Shia Islam","Zoroastrianism"], c: 2, e: "Ismail I made Shia Islam official, sharpening conflict with the Sunni Ottomans." },
      { q: "At the Battle of Chaldiran (1514)", o: ["The Mughals defeated the Safavids","The Russians defeated the Ottomans","The Safavids captured Istanbul","The Ottomans defeated the Safavids"], c: 3, e: "Ottoman firearms and artillery overwhelmed Safavid cavalry." },
      { q: "Akbar is known for", o: ["Religious tolerance and abolishing the jizya","Destroying Hindu temples","Building St. Petersburg","Conquering Constantinople"], c: 0, e: "Akbar sought the support of his Hindu majority through tolerance." },
      { q: "The Taj Mahal was built by", o: ["Akbar","Shah Jahan","Babur","Aurangzeb"], c: 1, e: "Shah Jahan built it as a tomb for his wife Mumtaz Mahal." },
      { q: "Aurangzeb weakened the Mughal Empire by", o: ["Converting to Hinduism","Ending all wars","Imposing strict Islamic rule and reinstating the jizya","Moving the capital to Persia"], c: 2, e: "His policies alienated Hindus and Sikhs and provoked revolts." },
      { q: "The Qing dynasty was founded by the", o: ["Mongols","Han Chinese","Koreans","Manchus"], c: 3, e: "The Manchus took Beijing in 1644 and ruled China until 1912." },
      { q: "Peter the Great is best known for", o: ["Westernizing Russia","Ending serfdom","Converting Russia to Catholicism","Conquering China"], c: 0, e: "He modernized the army and government and built St. Petersburg." },
      { q: "Martin Luther posted his Ninety-Five Theses in", o: ["1453","1517","1648","1700"], c: 1, e: "His protest began the Protestant Reformation." },
      { q: "Sikhism was founded by", o: ["Akbar","Kabir","Guru Nanak","Ismail I"], c: 2, e: "Guru Nanak founded Sikhism in the Punjab around 1500." },
      { q: "Divine right is the belief that", o: ["The people choose their rulers","Religious leaders should rule","Kings must obey parliaments","A monarch's authority comes from God"], c: 3, e: "Absolute monarchs like Louis XIV used divine right to justify their power." },
      { q: "The jizya was", o: ["A tax on non-Muslims","A Mughal palace","A Safavid army unit","An Ottoman legal code"], c: 0, e: "Muslim rulers taxed non-Muslim subjects through the jizya." },
      { q: "The Council of Trent was part of", o: ["The Protestant Reformation","The Counter-Reformation","The Ottoman millet system","Peter the Great's reforms"], c: 1, e: "The Catholic Church met at Trent to reform abuses and reaffirm its doctrines." },
      { q: "Land-based empires of this era are often called 'gunpowder empires' because they", o: ["Traded mostly in gunpowder","Banned firearms","Used cannons and firearms to expand and hold power","Invented gunpowder"], c: 2, e: "Firearms and artillery helped the Ottomans, Safavids, and Mughals conquer and control territory." }
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
      { q: "The caravel was", o: ["A small, maneuverable Portuguese ship","A Chinese treasure ship","An Arab navigation tool","A Spanish silver coin"], c: 0, e: "Caravels could sail against the wind, making long voyages possible." },
      { q: "The astrolabe helped sailors find", o: ["Wind speed","Latitude","Ocean depth","Longitude"], c: 1, e: "The astrolabe measured the angle of the sun or stars to find latitude." },
      { q: "Columbus's 1492 voyage was sponsored by", o: ["Portugal","England","Spain","The Netherlands"], c: 2, e: "Ferdinand and Isabella of Spain funded his voyage." },
      { q: "Vasco da Gama reached India by sea in", o: ["1453","1488","1492","1498"], c: 3, e: "Da Gama's voyage opened a direct sea route from Europe to Asia." },
      { q: "The Treaty of Tordesillas (1494) divided new lands between", o: ["Spain and Portugal","England and France","Spain and England","Portugal and the Netherlands"], c: 0, e: "The pope-brokered line gave Brazil to Portugal and most of the Americas to Spain." },
      { q: "The leading cause of Native American population decline after 1492 was", o: ["Famine","Epidemic diseases such as smallpox","Volcanic eruptions","Migration to Europe"], c: 1, e: "Native peoples had no immunity to Afro-Eurasian diseases." },
      { q: "Potosí was famous for its", o: ["Sugar plantations","Spice markets","Silver mine","Shipyards"], c: 2, e: "Potosí, in today's Bolivia, produced enormous amounts of silver." },
      { q: "The Manila galleons linked", o: ["Portugal and Brazil","England and India","The Netherlands and Indonesia","The Americas and Asia"], c: 3, e: "Galleons carried American silver to Manila to buy Chinese silk and porcelain." },
      { q: "The VOC was", o: ["The Dutch East India Company","A Spanish labor system","A Portuguese fort","An Inca road"], c: 0, e: "The VOC was a Dutch joint-stock company that dominated the spice trade." },
      { q: "The encomienda system", o: ["Freed enslaved Africans","Gave Spanish colonists the labor and tribute of Native people","Divided land between Spain and Portugal","Organized Indian Ocean trade"], c: 1, e: "Encomenderos were supposed to protect and convert Native people but often abused them." },
      { q: "The Middle Passage was", o: ["A sea route to India","A Spanish mountain road","The forced Atlantic voyage of enslaved Africans","A treaty line"], c: 2, e: "The Middle Passage was the deadly crossing at the center of the Atlantic slave trade." },
      { q: "At the top of the Spanish American casta system were", o: ["Mestizos","Creoles","Mulattoes","Peninsulares"], c: 3, e: "Spanish-born peninsulares held the highest positions in colonial society." },
      { q: "The Pueblo Revolt of 1680", o: ["Drove the Spanish out of New Mexico for twelve years","Ended the Atlantic slave trade","Created an independent Brazil","Overthrew the Inca Empire"], c: 0, e: "Pueblo peoples rose against forced labor and religious suppression." },
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
      { q: 'The main goal of the 2015 Paris Agreement was to', o: ['Limit global warming by reducing greenhouse gas emissions','Create a single global currency','Ban the use of nuclear energy','End all international trade in oil'], c: 0, e: 'Nearly every country pledged to hold warming well below 2°C, setting its own emissions targets.' },
      { q: "China's Special Economic Zones were designed to", o: ['Restore Maoist collective farming','Close China to Western influence','Attract foreign investment and boost exports','Train soldiers for the People\'s Liberation Army'], c: 2, e: 'Zones such as Shenzhen offered market rules and tax breaks to foreign firms, powering China\'s export boom after 1980.' },
      { q: 'Neoliberal economic policies of the 1980s emphasized', o: ['Nationalizing key industries','Privatization, deregulation, and free trade','Five-year plans for heavy industry','High tariffs to protect local industry'], c: 1, e: 'Thatcher, Reagan, and international lenders promoted shrinking the state\'s role in the economy and opening markets.' },
      { q: 'The Asian Tigers grew rich mainly through', o: ['Export-led manufacturing','Oil exports','Subsistence agriculture','Colonial expansion'], c: 0, e: 'South Korea, Taiwan, Hong Kong, and Singapore made textiles, ships, and electronics for export to wealthy markets.' },
      { q: 'The Universal Declaration of Human Rights was adopted in 1948 by', o: ['The League of Nations','NATO','The United Nations','The European Union'], c: 2, e: 'The UN General Assembly adopted it in response to the atrocities of the Second World War.' },
      { q: 'Apartheid ended in South Africa with the 1994 election of', o: ['Kwame Nkrumah','Nelson Mandela','Jomo Kenyatta','Robert Mugabe'], c: 1, e: 'After 27 years in prison, Mandela won the first election in which all South Africans could vote.' },
      { q: 'The 1999 protests in Seattle targeted a meeting of', o: ['The United Nations','OPEC','The World Trade Organization','The World Health Organization'], c: 2, e: 'Protesters argued that WTO trade rules favored multinational corporations over workers and the environment.' },
      { q: 'The 1979 Iranian Revolution', o: ['Established a communist state allied with the USSR','Established an Islamic republic led by Ayatollah Khomeini','Restored the shah to power','Made Iran a member of NATO'], c: 1, e: 'The revolution rejected the shah\'s Western-style modernization and both American and Soviet influence.' },
      { q: 'NAFTA (1994) created a free-trade zone among', o: ['The United States, Canada, and Mexico','Brazil, Argentina, and Uruguay','Britain, France, and Germany','Japan, China, and South Korea'], c: 0, e: 'NAFTA removed most tariffs among the three North American countries and was replaced by the USMCA in 2020.' },
      { q: 'The Grameen Bank in Bangladesh pioneered', o: ['Structural adjustment','Microfinance','Outsourcing','The euro'], c: 1, e: 'Muhammad Yunus\'s bank made small loans without collateral to poor villagers, most of them women.' },
      { q: 'The 2008 global financial crisis began with', o: ['The OPEC oil embargo','The collapse of the U.S. housing market','The fall of the Berlin Wall','The COVID-19 pandemic'], c: 1, e: 'Bad American mortgages held by banks worldwide turned a U.S. housing bust into a global recession after Lehman Brothers collapsed.' }
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
