/* ============================================================
   daily-tivin-data.js: content for the Daily Tivin (daily-tivin.js).
   Plain global, no build step. Written by Claude (2026-11-10) for Units 1-4.

   DAILY_TIVIN.units      units covered so far. The two daily MCQs come from
                          these units of mcq-bank.js. Add 5 when the class gets there.
   DAILY_TIVIN.deep       Deep Cut prompts (type one answer in 25 seconds; rarer
                          answers score more). answers: [tier, 'Shown name', 'alias', ...]
                          tiers: 1 = 10 pts, 2 = 30, 3 = 60, 4 = 85, 5 = 100.
                          Matching ignores case, spaces, accents and punctuation.
   DAILY_TIVIN.groups     Four Links puzzles: 4 groups of 4. level 1 (easiest) to 4.
   DAILY_TIVIN.words      Tivin Word: [WORD, unit, clue, after], 5 letters only. Guesses must be
                          real words (daily-tivin-words.js) or AP names in extraWords.
   Each day picks from these lists by date, so everyone gets the same set.
   Add new entries at the end of a list.
   ============================================================ */
window.DAILY_TIVIN = {
  units: [1, 2, 3, 4],
  deepPerDay: 5,

  deep: [
    { p: 'Name an innovation or invention of Song China.', u: 1, a: [
      [1,'Gunpowder'], [1,'Compass','magnetic compass'], [2,'Movable type','moveable type','movable type printing'],
      [2,'Woodblock printing','woodblock print','block printing','printing'], [2,'Paper money','paper currency'],
      [3,'Champa rice'], [3,'Junks','junk','junk ships'], [3,'Porcelain'], [4,'Iron and steel production','steel','iron smelting','coke smelting','iron'],
      [5,'Flying cash','flying money'], [4,'Fire lance','fire lances'] ] },

    { p: 'Name a land-based empire from 1450 to 1750.', u: 3, a: [
      [1,'Ottoman Empire','ottoman','ottomans'], [1,'Mughal Empire','mughal','mughals','mogul'], [2,'Safavid Empire','safavid','safavids'],
      [2,'Qing dynasty','qing'], [3,'Ming dynasty','ming'], [3,'Russian Empire','russia','russian','romanov'],
      [4,'Songhai Empire','songhai'], [4,'Tokugawa Shogunate','tokugawa','tokugawa japan'], [5,'Habsburgs','habsburg','hapsburg','holy roman empire'] ] },

    { p: 'Name a good traded on the Silk Roads.', u: 2, a: [
      [1,'Silk'], [2,'Porcelain'], [2,'Spices','spice'], [3,'Horses','horse'], [3,'Paper'], [3,'Tea'], [3,'Cotton','cotton textiles'],
      [4,'Jade'], [4,'Glass','glassware'], [4,'Gold'], [5,'Lapis lazuli'], [5,'Furs','fur'], [4,'Silver'] ] },

    { p: 'Name a trading city on the Indian Ocean, 1200 to 1450.', u: 2, a: [
      [2,'Calicut'], [2,'Malacca','melaka'], [3,'Mombasa'], [3,'Kilwa'], [3,'Zanzibar'], [3,'Guangzhou','canton'],
      [4,'Aden'], [4,'Hormuz','ormuz'], [4,'Quanzhou'], [4,'Mogadishu'], [5,'Sofala'], [5,'Cambay','khambhat'], [5,'Muscat'], [4,'Gujarat'] ] },

    { p: 'Name a Muslim state or empire, 1200 to 1750.', u: 1, a: [
      [1,'Ottoman Empire','ottoman','ottomans'], [1,'Mughal Empire','mughal','mughals'], [2,'Delhi Sultanate','delhi'], [2,'Mali','mali empire'],
      [2,'Safavid Empire','safavid','safavids'], [3,'Abbasid Caliphate','abbasid','abbasids'], [3,'Songhai','songhai empire'],
      [4,'Mamluk Sultanate','mamluk','mamluks','mameluke'], [4,'Sultanate of Malacca','malacca'], [4,'Ilkhanate','ilkhan'],
      [4,'Seljuk Empire','seljuk','seljuks','seljuq'], [5,'Timurid Empire','timurid','timurids'], [5,'Golden Horde'], [5,'Ayyubid','ayyubids'] ] },

    { p: 'Name a technology that made European ocean exploration possible.', u: 4, a: [
      [1,'Caravel'], [1,'Magnetic compass','compass'], [1,'Astrolabe'], [2,'Lateen sail','lateen sails','triangular sail'],
      [3,'Cartography','maps','mapmaking','map making'], [3,'Carrack'], [3,'Sternpost rudder','rudder'], [3,'Cannons','cannon','gunpowder','guns'],
      [4,'Printing press'], [4,'Quadrant'], [5,'Portolan charts','portolan','portolan chart'], [5,'Fluyt'], [5,'Mercator projection','mercator'] ] },

    { p: 'Name a European explorer or conquistador, 1450 to 1750.', u: 4, a: [
      [1,'Christopher Columbus','columbus'], [1,'Ferdinand Magellan','magellan'], [2,'Vasco da Gama','da gama','vasco de gama'],
      [3,'Bartolomeu Dias','dias','bartholomew dias','diaz'], [3,'Hernan Cortes','cortes','cortez','hernando cortes'], [3,'Francisco Pizarro','pizarro'],
      [3,'Amerigo Vespucci','vespucci'], [4,'Pedro Cabral','cabral','pedro alvares cabral'], [4,'John Cabot','cabot'], [4,'Jacques Cartier','cartier'],
      [4,'Henry Hudson','hudson'], [4,'Francis Drake','drake'], [4,'Vasco Nunez de Balboa','balboa'], [5,'Samuel de Champlain','champlain'],
      [5,'Hernando de Soto','de soto'], [5,'Abel Tasman','tasman'], [5,'Juan Sebastian Elcano','elcano'] ] },

    { p: 'Name a crop, animal, or disease that crossed the Atlantic in the Columbian Exchange.', u: 4, a: [
      [1,'Smallpox'], [1,'Potatoes','potato'], [1,'Maize','corn'], [1,'Horses','horse'], [2,'Tomatoes','tomato'], [2,'Sugar','sugarcane','sugar cane'],
      [2,'Tobacco'], [2,'Cattle','cows','cow'], [2,'Pigs','pig','hogs','swine'], [2,'Wheat'], [3,'Measles'], [3,'Cacao','cocoa','chocolate'],
      [3,'Malaria'], [3,'Rice'], [3,'Coffee'], [3,'Influenza','flu'], [3,'Beans'], [3,'Squash'], [3,'Chickens','chicken'],
      [4,'Cassava','manioc'], [4,'Syphilis'], [4,'Chili peppers','chili','chilies','peppers'], [4,'Yellow fever'], [4,'Bananas','banana'],
      [4,'Sweet potatoes','sweet potato'], [4,'Sheep'], [5,'Quinine','cinchona'], [5,'Peanuts','peanut'], [5,'Turkeys','turkey'], [5,'Vanilla'] ] },

    { p: 'Name a ruler of the Ottoman, Safavid, or Mughal Empire.', u: 3, a: [
      [1,'Suleiman the Magnificent','suleiman','suleyman'], [1,'Akbar','akbar the great'], [2,'Mehmed II','mehmed','mehmed the conqueror','mehmet'],
      [2,'Aurangzeb'], [2,'Shah Abbas','abbas','abbas i','abbas the great'], [3,'Babur'], [3,'Shah Jahan'], [3,'Shah Ismail','ismail','ismail i'],
      [3,'Osman','osman i'], [4,'Selim I','selim','selim the grim'], [4,'Jahangir'], [4,'Humayun'], [5,'Tahmasp','shah tahmasp'],
      [5,'Bayezid','bayezid i','bayezid ii'], [5,'Murad','murad ii'], [5,'Orhan'], [5,'Nur Jahan'] ] },

    { p: 'Name a religion or belief system from Units 1 to 4.', u: 1, a: [
      [1,'Christianity','christian'], [1,'Islam','muslim'], [1,'Buddhism','buddhist'], [1,'Hinduism','hindu'], [2,'Confucianism'],
      [2,'Judaism','jewish'], [2,'Protestantism','protestant'], [2,'Catholicism','catholic','roman catholic'], [3,'Neo-Confucianism','neoconfucianism'],
      [3,'Daoism','taoism'], [3,'Sikhism','sikh'], [3,'Sufism','sufi'], [3,'Shia Islam','shia','shiite'], [3,'Sunni Islam','sunni'], [3,'Lutheranism','lutheran'],
      [4,'Shinto'], [4,'Zoroastrianism'], [4,'Bhakti','bhakti movement'], [4,'Jainism'], [4,'Theravada Buddhism','theravada'],
      [4,'Mahayana Buddhism','mahayana'], [4,'Zen Buddhism','zen'], [4,'Calvinism','calvinist'], [4,'Anglicanism','anglican','church of england'],
      [5,'Vodun','vodou','voodoo'], [5,'Santeria'], [5,'Din-i Ilahi','din i ilahi'], [5,'Tibetan Buddhism'] ] },

    { p: 'Name a state or empire in Africa, 1200 to 1750.', u: 1, a: [
      [1,'Mali','mali empire'], [2,'Songhai','songhai empire'], [2,'Great Zimbabwe','zimbabwe'], [2,'Ethiopia','ethiopian empire','abyssinia'],
      [2,'Swahili city-states','swahili','swahili coast'], [3,'Kongo','kingdom of kongo'], [3,'Kilwa'], [3,'Ghana'], [4,'Benin','kingdom of benin'],
      [4,'Asante','ashanti'], [4,'Dahomey'], [4,'Ndongo'], [5,'Hausa states','hausa','hausa kingdoms'], [5,'Kanem-Bornu','kanem','bornu'],
      [5,'Oyo','oyo empire'], [5,'Mutapa','mwenemutapa','monomotapa'], [5,'Mamluk Egypt','mamluks','mamluk'] ] },

    { p: 'Name a state, civilization, or people of the Americas before 1500.', u: 1, a: [
      [1,'Aztecs','aztec','aztec empire'], [1,'Inca','incas','inca empire'], [2,'Maya','mayans','mayan'], [3,'Mexica'],
      [3,'Mississippian culture','mississippian','mississippians','cahokia'], [4,'Ancestral Puebloans','puebloans','pueblo','anasazi','chaco canyon'],
      [4,'Haudenosaunee','iroquois','iroquois confederacy'], [4,'Toltecs','toltec'], [4,'Taino','tainos'], [5,'Chimu'], [5,'Zapotec','zapotecs'],
      [5,'Tlaxcala','tlaxcalans'], [5,'Mixtec','mixtecs'], [5,'Purepecha','tarascans','tarascan'] ] },

    { p: 'Name a labor system used from 1450 to 1750.', u: 4, a: [
      [1,'Slavery','chattel slavery','slaves','enslaved labor'], [2,'Encomienda'], [2,'Mit’a','mita','mit a'], [2,'Indentured servitude','indentured servants','indentured labor'],
      [3,'Hacienda','haciendas'], [3,'Serfdom','serfs'], [3,'Plantation labor','plantations','plantation'], [3,'Wage labor','wage'],
      [4,'Devshirme'], [4,'Peasant labor','peasants'], [5,'Repartimiento'], [5,'Corvee','corvee labor'], [5,'Debt peonage','peonage'] ] },

    { p: 'Name a Mongol khanate or Mongol leader.', u: 2, a: [
      [1,'Genghis Khan','chinggis khan','genghis','temujin'], [1,'Kublai Khan','kublai','khubilai'], [2,'Golden Horde'], [2,'Yuan dynasty','yuan'],
      [3,'Ilkhanate','ilkhan','ilkhanate of persia'], [3,'Chagatai Khanate','chagatai','chaghatai'], [4,'Ogedei','ogedei khan'], [4,'Hulagu','hulegu'],
      [4,'Batu','batu khan'], [4,'Timur','tamerlane','tamburlaine'], [5,'Mongke','mongke khan'], [5,'Tolui'], [5,'Guyuk'] ] },

    { p: 'Name a Chinese dynasty.', u: 1, a: [
      [1,'Song','sung'], [1,'Ming'], [1,'Qing','ching','manchu'], [2,'Tang'], [2,'Han'], [2,'Yuan'], [2,'Qin','chin'], [3,'Sui'], [3,'Zhou','chou'],
      [4,'Shang'], [4,'Jin','jurchen'], [5,'Liao'], [5,'Xia'], [5,'Northern Song'], [5,'Southern Song'] ] },

    { p: 'Name a joint-stock company or royal trading company.', u: 4, a: [
      [1,'Dutch East India Company','voc','dutch east india'], [1,'British East India Company','english east india company','east india company','eic','british east india'],
      [3,'Hudson’s Bay Company','hudsons bay company','hudson bay company'], [3,'Dutch West India Company','dutch west india','wic'],
      [3,'French East India Company','french east india'], [4,'Virginia Company'], [4,'Royal African Company'], [4,'Massachusetts Bay Company'],
      [5,'Muscovy Company'], [5,'Levant Company'], [5,'Danish East India Company'], [5,'Casa de Contratacion'] ] },

    { p: 'Name a European colony, port, or trading post, 1450 to 1750.', u: 4, a: [
      [1,'New Spain','mexico'], [1,'Brazil'], [2,'Goa'], [2,'Macau','macao'], [2,'Manila','philippines'], [2,'Jamestown','virginia'], [2,'Hispaniola'],
      [2,'Peru'], [2,'Cuba'], [3,'Batavia','jakarta'], [3,'Elmina'], [3,'Cape Colony','cape town'], [3,'Malacca'], [3,'Jamaica'], [3,'Saint-Domingue','haiti'],
      [3,'Quebec','new france'], [3,'New Amsterdam','new netherland'], [3,'Plymouth'], [3,'Potosi'], [4,'Luanda','angola'], [4,'Calcutta','kolkata'],
      [4,'Bombay','mumbai'], [4,'Madras','chennai'], [4,'Ceylon','sri lanka'], [4,'Hormuz'], [4,'Barbados'], [4,'Mombasa'], [5,'Cartagena'],
      [5,'Curacao'], [5,'Dejima','deshima'], [5,'Mozambique'], [5,'Pondicherry'] ] },

    { p: 'Name a revolt or resistance to state power, 1450 to 1750.', u: 4, a: [
      [1,'Pueblo Revolt','popes rebellion'], [2,'Queen Nzinga','nzinga','ana nzinga'], [2,'Fronde','the fronde'], [3,'Maroon communities','maroons','maroon'],
      [3,'Maratha resistance','marathas','maratha'], [3,'Pugachev Rebellion','pugachev','cossack revolt','cossacks'], [4,'English Civil War'],
      [4,'King Philip’s War','king philips war','metacoms war','metacom'], [4,'Glorious Revolution'], [5,'Stenka Razin','razin'],
      [5,'Celali revolts','celali','jelali'], [5,'Palmares'], [5,'Sikh resistance','sikhs'], [5,'Morisco Revolt','moriscos'] ] },

    { p: 'Name a building or monument built by an empire, 1450 to 1750.', u: 3, a: [
      [1,'Taj Mahal'], [1,'Palace of Versailles','versailles'], [2,'Forbidden City'], [2,'Machu Picchu'], [2,'Great Wall','great wall of china'],
      [3,'Blue Mosque','sultan ahmed mosque'], [3,'Red Fort'], [3,'Topkapi Palace','topkapi'], [3,'Hagia Sophia (as a mosque)','hagia sophia'],
      [4,'Suleymaniye Mosque','suleymaniye','suleimaniye'], [4,'Fatehpur Sikri'], [4,'Shah Mosque','imam mosque'], [4,'St. Basil’s Cathedral','st basils','saint basils cathedral'],
      [5,'El Escorial','escorial'], [5,'Naqsh-e Jahan Square','naqsh e jahan','imam square'], [5,'Ali Qapu'], [5,'Peterhof'], [5,'Humayun’s Tomb','humayuns tomb'] ] },

    { p: 'Name a city of the Islamic world, 1200 to 1450.', u: 1, a: [
      [1,'Baghdad'], [1,'Cairo'], [1,'Mecca','makkah'], [2,'Timbuktu'], [2,'Cordoba'], [2,'Damascus'], [2,'Constantinople','istanbul'], [2,'Medina'],
      [3,'Delhi'], [3,'Samarkand'], [3,'Granada'], [3,'Bukhara'], [4,'Isfahan'], [4,'Fez','fes'], [4,'Kilwa'], [4,'Gao'], [4,'Djenne','jenne'],
      [4,'Basra'], [5,'Tabriz'], [5,'Herat'], [5,'Tunis'], [5,'Marrakesh','marrakech'], [5,'Aleppo'] ] },

    { p: 'Name something that moved along the trans-Saharan trade routes.', u: 2, a: [
      [1,'Gold'], [1,'Salt'], [2,'Islam'], [2,'Camels','camel'], [2,'Enslaved people','slaves','slavery'], [3,'Ivory'], [3,'Copper'], [3,'Textiles','cloth','cotton'],
      [3,'Arabic','arabic language'], [4,'Books','manuscripts','scholarship'], [4,'Horses'], [4,'Camel saddles','saddles','camel saddle'], [5,'Kola nuts','kola nut','kola'],
      [5,'Dates'], [5,'Ostrich feathers'] ] },

    { p: 'Name a person or group from the Reformation or Counter-Reformation.', u: 3, a: [
      [1,'Martin Luther','luther'], [2,'John Calvin','calvin'], [2,'Henry VIII','henry 8','henry the eighth'], [3,'Ignatius of Loyola','loyola','ignatius loyola'],
      [3,'Jesuits','society of jesus'], [3,'Council of Trent'], [4,'Pope Leo X','leo x'], [4,'Ulrich Zwingli','zwingli'], [4,'Erasmus'], [4,'Charles V'],
      [4,'Huguenots'], [5,'William Tyndale','tyndale'], [5,'John Knox','knox'], [5,'Johann Tetzel','tetzel'], [5,'Anabaptists'] ] },

    { p: 'Name a cash crop grown on plantations in the Americas, 1450 to 1750.', u: 4, a: [
      [1,'Sugar','sugarcane','sugar cane'], [1,'Tobacco'], [2,'Cotton'], [2,'Coffee'], [3,'Rice'], [3,'Indigo'], [3,'Cacao','cocoa'],
      [5,'Ginger'], [5,'Cochineal'] ] },

    { p: 'Name a person, place, or idea from Japan, 1200 to 1750.', u: 1, a: [
      [1,'Samurai'], [1,'Shogun','shogunate'], [1,'Tokugawa','tokugawa shogunate'], [2,'Daimyo'], [2,'Shinto'], [3,'Bushido'], [3,'Zen','zen buddhism'],
      [3,'Kamakura','kamakura shogunate'], [3,'Edo','tokyo'], [3,'Nagasaki'], [4,'Ashikaga','ashikaga shogunate'], [4,'Sakoku'], [4,'Kabuki'],
      [4,'Oda Nobunaga','nobunaga'], [4,'Toyotomi Hideyoshi','hideyoshi'], [4,'Tokugawa Ieyasu','ieyasu'], [5,'Dejima','deshima'], [5,'Bunraku'], [5,'Haiku'] ] },

    { p: 'Name something from Ming or Qing China.', u: 3, a: [
      [1,'Zheng He voyages','zheng he'], [1,'Forbidden City'], [1,'Great Wall','great wall of china'], [2,'Civil service exam','civil service examination','exams'],
      [2,'Manchus','manchu'], [3,'Kangxi Emperor','kangxi'], [3,'Yongle Emperor','yongle'], [3,'Porcelain','blue and white porcelain'], [4,'Qianlong Emperor','qianlong'],
      [4,'Queue','queue hairstyle'], [4,'Canton System','canton'], [4,'Eight Banners','banner system','banners'], [5,'Yongle Encyclopedia'], [5,'Single Whip Tax','single whip'],
      [5,'Hongwu Emperor','hongwu'] ] },

    { p: 'Name a city on the Silk Roads.', u: 2, a: [
      [1,'Samarkand'], [2,'Baghdad'], [2,'Constantinople','istanbul'], [2,'Chang’an','changan','xian','xi an'], [3,'Bukhara'], [3,'Kashgar'],
      [3,'Merv'], [3,'Damascus'], [4,'Dunhuang'], [4,'Herat'], [4,'Tabriz'], [4,'Aleppo'], [4,'Antioch'], [5,'Turpan','turfan'], [5,'Khotan'],
      [5,'Karakorum'], [5,'Balkh'] ] },

    { p: 'Name a reason Europeans explored the oceans after 1450.', u: 4, a: [
      [1,'Gold','wealth','money','riches'], [1,'God','spread christianity','christianity','religion','missionaries'], [2,'Glory','fame'],
      [2,'Spices','spice trade','spice'], [3,'Ottoman control of trade','ottomans','ottoman empire','avoid the ottomans'], [3,'New technology','technology'],
      [3,'Mercantilism'], [3,'Rivalry between states','competition','rivalry'], [4,'Fall of Constantinople','constantinople'], [4,'Reconquista'],
      [4,'Joint-stock companies','joint stock companies'], [4,'Henry the Navigator','prince henry'], [5,'Prester John'], [5,'Renaissance curiosity','curiosity','renaissance'] ] },

    { p: 'Name a group of people in the Ottoman Empire.', u: 3, a: [
      [1,'Janissaries','janissary'], [2,'Millets','millet'], [2,'Christians'], [2,'Jews','jewish community'], [2,'Turks'], [3,'Ulama','ulema'],
      [3,'Viziers','vizier','grand vizier'], [3,'Devshirme boys','devshirme'], [3,'Harem','women of the harem'], [3,'Arabs'], [4,'Sipahis','sipahi'],
      [4,'Greeks'], [4,'Armenians'], [4,'Timar holders','timariots','timar'], [5,'Phanariots'], [5,'Kurds'], [5,'Mamluks'] ] },

    { p: 'Name an innovation or practice of the Aztecs or Inca.', u: 1, a: [
      [1,'Human sacrifice','sacrifice'], [1,'Pyramids','temples'], [2,'Chinampas','chinampa','floating gardens'], [2,'Quipu','khipu'],
      [2,'Terrace farming','terraces','terrace'], [2,'Tribute','tribute system'], [2,'Roads','inca roads','road system'], [2,'Calendar'],
      [3,'Mit’a','mita','mit a'], [3,'Llamas','llama'], [4,'Suspension bridges','rope bridges'], [4,'Cacao beans as money','cacao money','cacao'],
      [4,'Templo Mayor'], [4,'Ball game','ullamaliztli'], [5,'Freeze-dried potatoes','chuno'], [5,'Ayllu'], [5,'Pochteca'] ] },

    { p: 'Name a cause or effect of the Black Death.', u: 2, a: [
      [1,'Fleas','rats','flea'], [1,'Population decline','deaths','depopulation'], [2,'Trade routes','trade','silk roads'], [2,'Mongols','mongol empire'],
      [3,'Labor shortage','labor shortages'], [3,'Higher wages','wages'], [4,'Decline of serfdom','end of serfdom','serfdom'],
      [4,'Persecution of Jews','pogroms','antisemitism'], [4,'Peasant revolts','peasant revolt'], [5,'Flagellants'], [5,'Siege of Caffa','caffa','kaffa'],
      [5,'Loss of faith in the Church','religious doubt'] ] },

    { p: 'Name a good carried in the Indian Ocean trade.', u: 2, a: [
      [1,'Spices','spice'], [2,'Pepper'], [2,'Cotton textiles','cotton','textiles','cloth'], [2,'Porcelain'], [2,'Silk'], [2,'Gold'], [3,'Ivory'],
      [3,'Cinnamon'], [3,'Cloves'], [3,'Enslaved people','slaves'], [4,'Nutmeg'], [4,'Horses'], [4,'Timber','teak'], [4,'Coffee'], [4,'Rice'],
      [5,'Frankincense','incense'], [5,'Myrrh'], [5,'Tortoiseshell'], [5,'Sandalwood'] ] },

    { p: 'Name a European state that built a maritime empire, 1450 to 1750.', u: 4, a: [
      [1,'Spain'], [1,'Portugal'], [2,'England','britain','great britain'], [2,'France'], [2,'Dutch Republic','netherlands','dutch','holland'],
      [4,'Denmark','denmark norway'], [5,'Sweden'], [5,'Courland'] ] },

    { p: 'Name something the Mongol Empire spread across Eurasia.', u: 2, a: [
      [1,'Bubonic plague','black death','plague'], [1,'Trade'], [2,'Gunpowder'], [3,'Paper'], [3,'Yam system','yam','postal relay'],
      [4,'Paper money'], [4,'Printing'], [4,'Islam'], [4,'Tibetan Buddhism'], [5,'Astronomy'], [5,'Chinese medicine','medicine'],
      [5,'Persian miniature painting','miniature painting'], [5,'Cotton'] ] },

    { p: 'Name a Christian church or religious order, 1450 to 1750.', u: 3, a: [
      [1,'Catholic Church','catholic','catholicism'], [2,'Lutherans','lutheran','lutheranism'], [2,'Calvinists','calvinist','calvinism'],
      [3,'Anglican Church','anglican','church of england'], [3,'Jesuits','society of jesus'], [3,'Orthodox Church','orthodox','russian orthodox'],
      [4,'Franciscans'], [4,'Dominicans'], [4,'Huguenots'], [4,'Puritans'], [5,'Anabaptists'], [5,'Presbyterians'], [5,'Quakers'] ] },

    { p: 'Name a way rulers showed they had the right to rule, 1450 to 1750.', u: 3, a: [
      [1,'Divine right','divine right of kings'], [1,'Religion'], [2,'Monumental architecture','monuments','architecture'], [2,'Mandate of Heaven'],
      [3,'Art','paintings'], [3,'Military victories','military'], [3,'Palace of Versailles','versailles'], [3,'Tribute'], [4,'Court rituals','court ceremonies','rituals'],
      [4,'Human sacrifice'], [4,'Taj Mahal'], [4,'Coronations','coronation'], [5,'Hall of Mirrors'], [5,'Patronage of the arts','patronage'], [5,'Kowtow'] ] }
  ],

  groups: [
    [ { t:'Innovations of Song China', w:['Champa rice','Movable type','Paper money','Gunpowder'], lv:1 },
      { t:'Mongol khanates', w:['Yuan','Golden Horde','Ilkhanate','Chagatai'], lv:2 },
      { t:'Indian Ocean ports', w:['Calicut','Malacca','Kilwa','Mombasa'], lv:3 },
      { t:'Goods carried across the Sahara', w:['Gold','Salt','Ivory','Kola nuts'], lv:4 } ],

    [ { t:'Feudal Europe', w:['Serf','Manor','Vassal','Fief'], lv:1 },
      { t:'Japan', w:['Shogun','Daimyo','Samurai','Bushido'], lv:2 },
      { t:'The Aztecs', w:['Tenochtitlan','Chinampas','Huitzilopochtli','Tribute'], lv:3 },
      { t:'The Inca', w:['Mit’a','Quipu','Cuzco','Terraces'], lv:4 } ],

    [ { t:'Technology of ocean exploration', w:['Caravel','Astrolabe','Lateen sail','Magnetic compass'], lv:1 },
      { t:'The casta system', w:['Peninsulares','Creoles','Mestizos','Mulattoes'], lv:2 },
      { t:'Labor systems', w:['Encomienda','Hacienda','Indentured servitude','Chattel slavery'], lv:3 },
      { t:'Sent from Europe to the Americas', w:['Horses','Smallpox','Wheat','Pigs'], lv:4 } ],

    [ { t:'Sailed or fought for Spain', w:['Columbus','Magellan','Cortés','Pizarro'], lv:1 },
      { t:'Sailed for Portugal', w:['Dias','da Gama','Cabral','Henry the Navigator'], lv:2 },
      { t:'Sailed for France', w:['Cartier','Champlain','La Salle','Marquette'], lv:3 },
      { t:'Sailed for England', w:['Drake','Cabot','Hudson','Raleigh'], lv:4 } ],

    [ { t:'Began in South Asia', w:['Hinduism','Buddhism','Sikhism','Jainism'], lv:1 },
      { t:'The Protestant Reformation', w:['Luther','Calvin','Ninety-Five Theses','Henry VIII'], lv:2 },
      { t:'The Counter-Reformation', w:['Jesuits','Council of Trent','Ignatius of Loyola','Inquisition'], lv:3 },
      { t:'Blends of belief (syncretism)', w:['Vodun','Santería','Our Lady of Guadalupe','Din-i Ilahi'], lv:4 } ],

    [ { t:'Ottoman Empire', w:['Janissaries','Devshirme','Millet','Suleiman'], lv:1 },
      { t:'Mughal Empire', w:['Akbar','Taj Mahal','Zamindars','Fatehpur Sikri'], lv:2 },
      { t:'Safavid Empire', w:['Shah Abbas','Isfahan','Qizilbash','Shah Ismail'], lv:3 },
      { t:'Qing China', w:['Manchus','Kangxi','Queue','Eight Banners'], lv:4 } ],

    [ { t:'Mali', w:['Mansa Musa','Timbuktu','Sundiata','Griots'], lv:1 },
      { t:'Swahili Coast cities', w:['Kilwa','Zanzibar','Sofala','Mogadishu'], lv:2 },
      { t:'Indian Ocean sailing', w:['Dhow','Monsoon winds','Junk','Stern-post rudder'], lv:3 },
      { t:'Other African states', w:['Great Zimbabwe','Ethiopia','Kongo','Benin'], lv:4 } ],

    [ { t:'Titles for rulers', w:['Shah','Khan','Mansa','Sultan'], lv:1 },
      { t:'Famous travelers', w:['Ibn Battuta','Marco Polo','Zheng He','Margery Kempe'], lv:2 },
      { t:'Diseases spread by contact and trade', w:['Bubonic plague','Smallpox','Measles','Malaria'], lv:3 },
      { t:'Abbasid golden age', w:['House of Wisdom','Baghdad','Algebra','Ibn Sina'], lv:4 } ],

    [ { t:'Joint-stock companies', w:['VOC','British East India','Hudson’s Bay','Dutch West India'], lv:1 },
      { t:'Ming China', w:['Forbidden City','Yongle','Great Wall','Hongwu'], lv:2 },
      { t:'The silver trade', w:['Potosí','Manila galleons','Acapulco','Single Whip tax'], lv:3 },
      { t:'Mercantilism', w:['Tariffs','Colonies','Favorable balance of trade','Bullion'], lv:4 } ],

    [ { t:'Russia', w:['Peter the Great','Ivan IV','St. Petersburg','Boyars'], lv:1 },
      { t:'Absolutism in France', w:['Louis XIV','Versailles','Divine right','Intendants'], lv:2 },
      { t:'Revolts against state power', w:['Pueblo Revolt','Queen Nzinga','Maroons','Pugachev'], lv:3 },
      { t:'England', w:['Glorious Revolution','Elizabeth I','Anglican Church','Parliament'], lv:4 } ],

    [ { t:'Cash crops', w:['Sugar','Tobacco','Cotton','Indigo'], lv:1 },
      { t:'From the Americas to Afro-Eurasia', w:['Potatoes','Maize','Tomatoes','Cacao'], lv:2 },
      { t:'From Afro-Eurasia to the Americas', w:['Cattle','Pigs','Wheat','Bananas'], lv:3 },
      { t:'The Atlantic slave trade', w:['Middle Passage','Triangular trade','Elmina','Royal African Company'], lv:4 } ],

    [ { t:'Song China', w:['Neo-Confucianism','Foot binding','Civil service exam','Grand Canal'], lv:1 },
      { t:'Dar al-Islam states', w:['Delhi Sultanate','Abbasids','Seljuks','Mamluks'], lv:2 },
      { t:'Southeast Asia', w:['Khmer','Angkor Wat','Majapahit','Srivijaya'], lv:3 },
      { t:'South Asia', w:['Vijayanagara','Rajputs','Bhakti','Chola'], lv:4 } ],

    [ { t:'The Mongol Empire', w:['Pax Mongolica','Yam system','Genghis Khan','Kublai Khan'], lv:1 },
      { t:'Silk Road cities', w:['Samarkand','Kashgar','Bukhara','Chang’an'], lv:2 },
      { t:'Ways to trade on credit and in safety', w:['Caravanserai','Bills of exchange','Flying cash','Banking houses'], lv:3 },
      { t:'Environmental effects of trade (2.6)', w:['Champa rice','Bananas to Africa','Citrus','Black Death'], lv:4 } ]
  ],

  // Tivin Word answers: 5 letters only. [WORD, unit, clue, after]
  words: [
    ['AZTEC', 1, 'Empire with its capital at Tenochtitlan', 'The Mexica built the Aztec Empire on tribute from conquered peoples.'],
    ['QUIPU', 1, 'Knotted cords the Inca used to keep records', 'Inca officials recorded taxes, labor and census counts on quipus.'],
    ['KHMER', 1, 'Southeast Asian empire that built Angkor Wat', 'The Khmer Empire mixed Hindu and Buddhist traditions.'],
    ['CASTE', 1, 'South Asian social hierarchy tied to birth', 'The caste system shaped work and marriage in Hindu society.'],
    ['GUILD', 1, 'Association of craftsmen or merchants', 'Guilds set prices and quality standards in medieval towns.'],
    ['MANOR', 1, 'Self-sufficient estate of a lord in feudal Europe', 'Serfs farmed the manor in return for the lord’s protection.'],
    ['MANSA', 1, 'Title of the kings of Mali', 'Mansa Musa’s hajj in 1324 showed Mali’s gold to the world.'],
    ['BANTU', 1, 'Language family that spread across sub-Saharan Africa', 'Swahili is a Bantu language with many Arabic words.'],
    ['TITHE', 1, 'A tenth of income paid to the Church', 'Tithes made the Church one of the richest powers in medieval Europe.'],
    ['NOBLE', 1, 'Landholding elite in feudal Europe and Japan', 'Nobles owed military service to the king in return for land.'],
    ['DELHI', 1, 'Capital of a Muslim sultanate in northern India', 'The Delhi Sultanate held off the Mongols in the 1200s.'],
    ['CUZCO', 1, 'Capital of the Inca Empire', 'Roads from Cuzco tied the Inca Empire together.'],
    ['ANDES', 1, 'Mountains where the Inca farmed on terraces', 'Terraces and llamas let the Inca thrive in the Andes.'],
    ['CAMEL', 2, 'Animal that made trans-Saharan trade possible', 'The camel saddle let traders cross the Sahara in large caravans.'],
    ['HORDE', 2, 'The Golden ___: Mongol khanate in Russia', 'The Golden Horde collected tribute from Russian princes.'],
    ['OASIS', 2, 'Watered stop on a desert trade route', 'Oasis towns grew rich supplying Silk Road caravans.'],
    ['GRIOT', 2, 'West African keeper of oral history', 'Griots kept the story of Sundiata and the founding of Mali.'],
    ['KILWA', 2, 'Swahili city-state that traded gold', 'Kilwa traded gold from Great Zimbabwe across the Indian Ocean.'],
    ['PAPER', 2, 'Chinese invention that spread west along trade routes', 'Papermaking reached the Islamic world in the 700s.'],
    ['SPICE', 2, 'Pepper, cloves, or nutmeg from the Indian Ocean world', 'The spice trade drew Europeans into the Indian Ocean.'],
    ['TIMUR', 2, 'Turkic conqueror of the late 1300s, also called Tamerlane', 'Timur sacked Delhi in 1398 and built up Samarkand.'],
    ['MECCA', 2, 'Holy city every Muslim faces in prayer', 'The hajj to Mecca brought pilgrims together from across Afro-Eurasia.'],
    ['AKBAR', 3, 'Mughal emperor known for religious tolerance', 'Akbar ended the jizya and welcomed scholars of many faiths.'],
    ['BABUR', 3, 'Founder of the Mughal Empire', 'Babur used gunpowder weapons to win at Panipat in 1526.'],
    ['JIZYA', 3, 'Tax on non-Muslims', 'Akbar ended the jizya; Aurangzeb brought it back.'],
    ['SUNNI', 3, 'Largest branch of Islam, followed by the Ottomans', 'The Sunni Ottomans fought the Shia Safavids.'],
    ['QUEUE', 3, 'Hairstyle the Qing forced on Han men', 'The queue showed loyalty to the Manchu Qing dynasty.'],
    ['TRENT', 3, 'The Council of ___ answered the Reformation', 'The Council of Trent restated Catholic teaching, 1545 to 1563.'],
    ['BOYAR', 3, 'Russian noble', 'Peter the Great made boyars shave their beards and serve the state.'],
    ['LOUIS', 3, 'French king who built Versailles', 'Louis XIV kept nobles at Versailles to watch over them.'],
    ['OSMAN', 3, 'Founder of the Ottoman dynasty', 'The Ottoman Empire takes its name from Osman.'],
    ['SUGAR', 4, 'Cash crop that drove the Atlantic slave trade', 'Sugar plantations in Brazil and the Caribbean used enslaved labor.'],
    ['MAIZE', 4, 'American crop that spread to Africa and China', 'Maize helped populations grow across Afro-Eurasia.'],
    ['HORSE', 4, 'Animal that changed life on the Great Plains', 'Horses arrived in the Americas with the Spanish.'],
    ['CACAO', 4, 'Mesoamerican bean that became chocolate', 'Europeans sweetened cacao with plantation sugar.'],
    ['CLOVE', 4, 'Spice from the Moluccas that the Dutch controlled', 'The VOC destroyed clove trees outside its own islands to keep prices high.'],
    ['DUTCH', 4, 'Nationality of the VOC', 'The Dutch East India Company was the first joint-stock company to sell shares.'],
    ['BENIN', 4, 'West African kingdom known for bronze sculptures', 'Benin traded with the Portuguese on its own terms.'],
    ['KONGO', 4, 'Central African kingdom whose king became Catholic', 'Afonso I of Kongo protested the Portuguese slave trade.'],
    ['TAINO', 4, 'Caribbean people Columbus met in 1492', 'Disease and forced labor destroyed most of the Taino within decades.'],
    ['PRESS', 4, 'Gutenberg’s printing ___', 'The printing press spread maps, Bibles and new ideas across Europe.'],
    ['FLEET', 4, 'Spain sent its silver home in a treasure ___', 'Spanish treasure fleets carried American silver across the Atlantic.']
  ],
  // AP names a student might guess that are not in the dictionary
  extraWords: 'aztec quipu khmer mansa bantu hindu mayan cuzco andes taino kilwa griot timur mecca cairo akbar babur jizya sunni trent boyar louis delhi osman dutch benin kongo peter selim incas mayas sikhs shahs tsars czars khans yuans islam china japan korea'
};
