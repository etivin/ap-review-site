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
   Each day takes the next unused items in list order (see start below), so everyone gets
   the same set and nothing repeats until a list runs out (Nov 13 to Dec 20, 2026 as written).
   Add new entries at the end of a list.
   ============================================================ */
window.DAILY_TIVIN = {
  // Units 1 through the class's unit (class-unit.js; falls back to 4).
  units: (function () { var n = +window.CLASS_UNIT || 4, a = []; for (var i = 1; i <= n; i++) a.push(i); return a; })(),
  deepPerDay: 5,

  // Day-by-day calendar (daily-tivin.js): from this date, each day takes the next unused
  // items in list order, so add new entries only at the END of a list. shown = what each
  // day showed before the calendar began; those days replay it, and those items go last.
  start: '2026-11-13',
  shown: {
    '2026-11-10': { deep:[20,5,19,28,30], groups:9, words:'BENIN' },
    '2026-11-11': { deep:[12,13,9,14,21], groups:3, words:'BABUR' },
    '2026-11-12': { deep:[11,13,16,29,15], groups:0, words:'BANTU' }
  },

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
      [4,'Human sacrifice'], [4,'Taj Mahal'], [4,'Coronations','coronation'], [5,'Hall of Mirrors'], [5,'Patronage of the arts','patronage'], [5,'Kowtow'] ] },

    // ---- added 2026-11-12 for the day-by-day calendar (Nov 13 onward) ----
    { p: 'Name a belief, god, or practice of Hinduism.', u: 1, a: [
      [1,'Reincarnation','samsara','rebirth'], [1,'Karma'], [1,'Caste system','caste','castes'], [2,'Dharma'], [2,'Vishnu'], [2,'Shiva','siva'],
      [2,'Brahma'], [3,'Moksha'], [3,'Brahman'], [3,'Vedas','veda'], [3,'Krishna'], [3,'Bhakti','bhakti movement'], [4,'Upanishads'],
      [4,'Bhagavad Gita','gita'], [4,'Ganesha','ganesh'], [4,'Lakshmi'], [4,'Puja'], [4,'Ganges River','ganges','ganga'], [5,'Ramayana'], [5,'Mahabharata'],
      [5,'Avatar','avatars'], [5,'Durga'] ] },

    { p: 'Name a technology or tool that made long-distance trade easier, 1200 to 1450.', u: 2, a: [
      [1,'Compass','magnetic compass'], [2,'Astrolabe'], [2,'Camel saddle','camel saddles','saddle'], [2,'Caravanserai','caravanserais','caravansary'],
      [2,'Dhow','dhows'], [2,'Junk','junks'], [3,'Lateen sail','lateen sails'], [3,'Paper money','paper currency'], [3,'Bills of exchange','bill of exchange'],
      [3,'Banking','banks','banking houses'], [3,'Credit','letters of credit'], [4,'Flying cash','flying money'], [4,'Sternpost rudder','stern post rudder','rudder'],
      [4,'Maps','cartography'], [4,'Monsoon knowledge','monsoon winds','monsoons'], [5,'Yam system','yam'], [5,'Paiza','paiza passport','paizi'] ] },

    { p: 'Name a gunpowder weapon or military tactic used from 1450 to 1750.', u: 3, a: [
      [1,'Cannon','cannons','artillery'], [1,'Musket','muskets'], [2,'Janissaries','janissary'], [2,'Siege guns','siege cannons','siege artillery','bombard','bombards'],
      [3,'Arquebus','harquebus','arquebuses'], [3,'Matchlock','matchlocks'], [3,'Gunpowder','gun powder'], [3,'Galleons','galleon','warships'],
      [4,'Flintlock','flintlocks'], [4,'Bayonet','bayonets'], [4,'Volley fire','volleys','countermarch'], [4,'Pike and shot'], [4,'Star fort','star forts','trace italienne'],
      [5,'Wagon fort','tabor','wagenburg'], [5,'Orban’s great bombard','orban','great bombard','basilica'], [5,'Grenades','grenade'], [5,'Mortar','mortars'] ] },

    { p: 'Name a person from the Spanish conquest of the Aztecs or the Inca.', u: 4, a: [
      [1,'Hernan Cortes','cortes','cortez','hernando cortes'], [1,'Francisco Pizarro','pizarro'], [1,'Moctezuma','montezuma','moctezuma ii','motecuhzoma'],
      [2,'Atahualpa'], [2,'Malinche','la malinche','dona marina','malintzin'], [3,'Cuauhtemoc'], [3,'Huascar'], [3,'Bartolome de las Casas','las casas'],
      [4,'Pedro de Alvarado','alvarado'], [4,'Diego de Almagro','almagro'], [4,'Tupac Amaru'], [4,'Manco Inca','manco capac ii','manco'],
      [4,'Huayna Capac'], [5,'Guaman Poma','felipe guaman poma'], [5,'Bernal Diaz','bernal diaz del castillo'], [5,'Hernando de Soto','de soto'], [5,'Cuitlahuac'] ] },

    { p: 'Name a mountain range, desert, or river that shaped history in Units 1 to 4.', u: 1, a: [
      [1,'Sahara','sahara desert'], [1,'Andes','andes mountains'], [1,'Himalayas','himalaya'], [2,'Nile','nile river'], [2,'Gobi','gobi desert'],
      [2,'Yangtze','yangzi','chang jiang','yangtze river'], [2,'Niger River','niger'], [2,'Ganges','ganga','ganges river'], [3,'Indus','indus river'], [3,'Tigris'],
      [3,'Euphrates'], [3,'Amazon','amazon river'], [3,'Mississippi','mississippi river'], [3,'Yellow River','huang he'], [4,'Hindu Kush'], [4,'Ural Mountains','urals'],
      [4,'Volga','volga river'], [4,'Taklamakan','taklamakan desert'], [4,'Alps'], [5,'Zambezi','zambezi river'], [5,'Kalahari'], [5,'Pamirs','pamir mountains'], [5,'Tian Shan'] ] },

    { p: 'Name a belief or practice of Buddhism.', u: 1, a: [
      [1,'Nirvana'], [1,'Meditation'], [2,'Four Noble Truths'], [2,'Eightfold Path','noble eightfold path'], [2,'Reincarnation','rebirth','samsara'],
      [2,'Karma'], [3,'Monks','monasteries','monastery','monasticism'], [3,'Middle Way'], [3,'Bodhisattva','bodhisattvas'], [3,'Dharma'],
      [4,'Stupas','stupa','pagodas','pagoda'], [4,'Sangha'], [4,'Mantras','chanting'], [4,'Pure Land','amida'], [5,'Koans','koan'], [5,'Ahimsa','nonviolence'], [5,'Pilgrimage to Bodh Gaya','bodh gaya'] ] },

    { p: 'Name a traveler, merchant, or envoy who crossed Afro-Eurasia, 1200 to 1450.', u: 2, a: [
      [1,'Ibn Battuta'], [1,'Marco Polo','polo'], [2,'Zheng He','cheng ho'], [2,'Mansa Musa'], [3,'Margery Kempe','kempe'], [3,'Rabban Sauma','sauma'],
      [4,'William of Rubruck','rubruck'], [4,'John of Plano Carpini','carpini','plano carpini'], [4,'Niccolo Polo','maffeo polo'], [4,'Ma Huan'],
      [5,'Ibn Jubayr'], [5,'Odoric of Pordenone','odoric'], [5,'Niccolo de Conti','de conti'], [5,'Ruy Gonzalez de Clavijo','clavijo'] ] },

    { p: 'Name a person who ruled Russia, or a Russian policy, 1450 to 1750.', u: 3, a: [
      [1,'Peter the Great','peter i','peter'], [2,'Ivan the Terrible','ivan iv','ivan 4'], [2,'Catherine the Great','catherine ii','catherine'],
      [2,'Westernization','westernize'], [3,'Ivan III','ivan the great','ivan 3'], [3,'Serfdom','serfs'], [3,'Expansion into Siberia','siberia'],
      [3,'Beard tax','shaving beards'], [3,'Table of Ranks'], [4,'Michael Romanov','romanov','romanovs'], [4,'Oprichnina'], [4,'Founding St. Petersburg','st petersburg','saint petersburg'],
      [4,'Tsar title','tsar','czar'], [5,'Third Rome'], [5,'Time of Troubles'], [5,'Boris Godunov','godunov'], [5,'Sofia Alekseyevna','sophia'] ] },

    { p: 'Name a reason the Spanish conquered the Aztecs and the Inca so quickly.', u: 4, a: [
      [1,'Smallpox','disease','diseases'], [1,'Guns','firearms','gunpowder'], [2,'Horses','horse'], [2,'Steel swords','steel','swords'],
      [2,'Native allies','allies','tlaxcalans','tlaxcala'], [3,'Inca civil war','civil war'], [3,'Armor','steel armor'], [3,'Malinche as translator','malinche','translators'],
      [4,'Capture of Atahualpa','atahualpa captured','kidnapping atahualpa'], [4,'Cannons','cannon'], [4,'War dogs','dogs'], [5,'Moctezuma’s hesitation','moctezuma'],
      [5,'Resentment of Aztec tribute','tribute'], [5,'Ships','brigantines'] ] },

    { p: 'Name a modern country that was once part of the Ottoman Empire.', u: 3, a: [
      [1,'Turkey','turkiye'], [1,'Egypt'], [2,'Greece'], [2,'Syria'], [2,'Iraq'], [2,'Saudi Arabia'], [2,'Israel'], [3,'Bulgaria'], [3,'Serbia'], [3,'Hungary'],
      [3,'Lebanon'], [3,'Jordan'], [3,'Libya'], [3,'Palestine'], [4,'Algeria'], [4,'Tunisia'], [4,'Romania'], [4,'Bosnia','bosnia and herzegovina'], [4,'Albania'],
      [4,'Cyprus'], [4,'Yemen'], [4,'Kuwait'], [5,'North Macedonia','macedonia'], [5,'Montenegro'], [5,'Kosovo'], [5,'Moldova'], [5,'Ukraine'], [5,'Croatia'], [5,'Qatar'] ] },

    { p: 'Name a Southeast Asian state or empire, 1200 to 1450.', u: 1, a: [
      [1,'Khmer Empire','khmer','angkor','cambodia'], [2,'Majapahit'], [2,'Srivijaya'], [3,'Dai Viet','vietnam','annam'], [3,'Malacca','sultanate of malacca','melaka'],
      [3,'Champa'], [4,'Ayutthaya','siam'], [4,'Pagan','bagan'], [4,'Sukhothai'], [5,'Singhasari'], [5,'Ava'], [5,'Pegu','hanthawaddy'], [5,'Lan Xang'] ] },

    { p: 'Name a way the Mongols ruled or kept order in their empire.', u: 2, a: [
      [1,'Religious tolerance','tolerance'], [1,'Yam system','yam','postal relay','relay stations'], [2,'Protecting trade','protected merchants','trade'],
      [2,'Fear','terror'], [2,'Using local officials','local bureaucrats','local elites'], [3,'Tribute','tribute payments'], [3,'Taxes','taxation','tax farming'],
      [3,'Paiza passports','paiza','paizi'], [3,'Yassa','yasa','law code'], [4,'Census','censuses'], [4,'Khanates','dividing into khanates'], [4,'Intermarriage','marriage alliances'],
      [5,'Darughachi','governors'], [5,'Kurultai','khuriltai','quriltai'] ] },

    { p: 'Name a way rulers collected money from their people, 1450 to 1750.', u: 3, a: [
      [1,'Taxes','taxation'], [1,'Tribute'], [2,'Zamindars','zamindar'], [2,'Tax farming','tax farmers'], [2,'Jizya'], [3,'Land tax','land taxes'],
      [3,'Tariffs','customs duties','customs'], [3,'Single Whip tax','single whip'], [3,'Timar system','timar'], [4,'Royal fifth','quinto','quinto real'],
      [4,'Salt tax','gabelle'], [4,'Sale of offices','selling offices'], [4,'Encomienda tribute','encomienda'], [5,'Iqta'], [5,'Taille'], [5,'Poll tax','head tax'] ] },

    { p: 'Name a place, group, or good tied to the Atlantic slave trade.', u: 4, a: [
      [1,'Middle Passage'], [1,'Triangular trade'], [2,'Sugar'], [2,'Slave ships','slave ship'], [2,'Elmina','elmina castle'], [3,'Royal African Company'],
      [3,'Rum'], [3,'Guns','firearms'], [3,'Dahomey'], [3,'Brazil'], [3,'Caribbean','west indies'], [4,'Goree Island','goree'], [4,'Ouidah','whydah'], [4,'Asiento'],
      [4,'Luanda'], [4,'Asante','ashanti'], [4,'Olaudah Equiano','equiano'], [5,'Manillas','manilla'], [5,'Cowrie shells','cowries','cowrie'], [5,'Bight of Benin'] ] },

    { p: 'Name a language that spread through empire or trade, 1200 to 1750.', u: 2, a: [
      [1,'Arabic'], [1,'Spanish'], [2,'Persian','farsi'], [2,'Swahili','kiswahili'], [2,'Portuguese'], [2,'English'], [3,'Turkish','ottoman turkish'],
      [3,'Latin'], [3,'French'], [3,'Chinese','mandarin'], [3,'Quechua'], [4,'Nahuatl'], [4,'Urdu'], [4,'Malay'], [4,'Russian'], [4,'Dutch'], [5,'Mongolian'], [5,'Tagalog'] ] },

    { p: 'Name an idea or practice of Confucianism or Neo-Confucianism.', u: 1, a: [
      [1,'Filial piety','respect for parents'], [2,'Civil service exam','civil service exams','examination system'], [2,'Ancestor veneration','ancestor worship'],
      [2,'Five relationships','five key relationships'], [2,'Hierarchy','social hierarchy','social order'], [3,'Patriarchy','male authority'], [3,'Education','scholarship'],
      [3,'Ren','benevolence','humaneness'], [3,'Li','ritual','propriety'], [3,'Analects'], [4,'Zhu Xi'], [4,'Scholar-gentry','scholar officials','gentry'],
      [4,'Meritocracy','merit'], [5,'Foot binding'], [5,'Junzi','gentleman','superior man'], [5,'Mandate of Heaven'] ] },

    { p: 'Name a place the Mongols attacked or conquered.', u: 2, a: [
      [1,'China'], [1,'Russia'], [2,'Baghdad'], [2,'Persia','iran'], [2,'Kievan Rus','kiev','kyiv'], [2,'Korea','goryeo'], [3,'Japan'], [3,'Central Asia'],
      [3,'Hungary'], [3,'Poland'], [3,'Samarkand'], [3,'Bukhara'], [4,'Khwarazm','khwarezmia'], [4,'Song China','song dynasty','southern song'],
      [4,'Jin','jin dynasty','jurchen'], [4,'Vietnam','dai viet'], [4,'Java'], [4,'Syria'], [4,'Tibet'], [5,'Xi Xia','western xia','tangut'], [5,'Georgia'],
      [5,'Delhi Sultanate','india'], [5,'Burma','pagan','myanmar'] ] },

    { p: 'Name a way rulers controlled their nobles or elites, 1450 to 1750.', u: 3, a: [
      [1,'Palace of Versailles','versailles'], [2,'Devshirme'], [2,'Alternate attendance','sankin kotai','sankin-kotai'], [2,'Table of Ranks'],
      [3,'Civil service exams','civil service exam','exams'], [3,'Intendants'], [3,'Timar system','timar'], [3,'Zamindars'], [3,'Eight Banners','banners'],
      [4,'Mansabdar system','mansabdars','mansabdar'], [4,'Beard tax'], [4,'Hostages','hostage system'], [4,'Oprichnina'], [5,'Court etiquette','etiquette'],
      [5,'Confiscating land','land grants revoked'] ] },

    { p: 'Name a resource or product Europeans took from the Americas, 1450 to 1750.', u: 4, a: [
      [1,'Silver'], [1,'Gold'], [1,'Sugar'], [2,'Tobacco'], [2,'Furs','fur','beaver pelts','beaver'], [3,'Cotton'], [3,'Cacao','cocoa','chocolate'],
      [3,'Cod','codfish','fish'], [3,'Timber','lumber','wood'], [4,'Indigo'], [4,'Cochineal'], [4,'Diamonds'], [4,'Emeralds'], [4,'Rice'], [5,'Brazilwood'],
      [5,'Mercury','quicksilver'], [5,'Logwood'], [5,'Vanilla'] ] },

    { p: 'Name an empire or dynasty that ended between 1200 and 1750.', u: 3, a: [
      [1,'Aztec Empire','aztecs','aztec'], [1,'Inca Empire','inca','incas'], [1,'Byzantine Empire','byzantine','byzantium'], [2,'Ming dynasty','ming'],
      [2,'Abbasid Caliphate','abbasids','abbasid'], [2,'Song dynasty','song'], [2,'Yuan dynasty','yuan'], [3,'Mali','mali empire'], [3,'Songhai','songhai empire'],
      [3,'Delhi Sultanate'], [3,'Mamluk Sultanate','mamluks','mamluk'], [3,'Khmer Empire','khmer'], [4,'Golden Horde'], [4,'Timurid Empire','timurids'],
      [4,'Safavid Empire','safavids','safavid'], [4,'Vijayanagara'], [4,'Kievan Rus'], [5,'Majapahit'], [5,'Ilkhanate'], [5,'Ashikaga shogunate','ashikaga'], [5,'Goryeo'] ] },

    { p: 'Name a Korean dynasty, ruler, or achievement before 1750.', u: 1, a: [
      [1,'Joseon','choson','joseon dynasty'], [2,'Goryeo','koryo'], [2,'Hangul','korean alphabet'], [2,'Movable metal type','metal type','movable type'],
      [3,'Sejong the Great','sejong','king sejong'], [3,'Celadon pottery','celadon'], [3,'Turtle ships','turtle ship','geobukseon'], [3,'Neo-Confucianism'],
      [4,'Admiral Yi Sun-sin','yi sun sin','yi sunsin'], [4,'Civil service exam','civil service exams'], [4,'Tripitaka Koreana'], [5,'Jikji'], [5,'Silla'], [5,'Yangban'] ] },

    { p: 'Name a diasporic merchant community, 1200 to 1750.', u: 2, a: [
      [1,'Chinese merchants','chinese'], [1,'Arab merchants','arabs'], [2,'Jewish merchants','jews'], [2,'Gujarati merchants','gujaratis','gujarat'],
      [2,'Persian merchants','persians'], [3,'Armenian merchants','armenians'], [3,'Swahili merchants','swahili'], [3,'Malay merchants','malays'],
      [3,'Venetians','venetian merchants'], [3,'Genoese','genoese merchants'], [4,'Sogdians'], [4,'Hanseatic merchants','hansa','hanseatic league'],
      [4,'Tamil merchants','tamils'], [5,'Radhanites'], [5,'Sephardic Jews','sephardim'], [5,'Hadrami merchants','hadramis'] ] },

    { p: 'Name an Ottoman building, institution, or law (not a person).', u: 3, a: [
      [1,'Janissary corps','janissaries'], [1,'Topkapi Palace','topkapi'], [2,'Devshirme'], [2,'Millet system','millet','millets'], [2,'Hagia Sophia (as a mosque)','hagia sophia'],
      [2,'Blue Mosque','sultan ahmed mosque'], [3,'Harem'], [3,'Timar system','timar'], [3,'Grand vizier','vizier'], [3,'Suleymaniye Mosque','suleymaniye'],
      [4,'Kanun','kanun law','kanuns'], [4,'Sublime Porte','the porte'], [4,'Divan','imperial council'], [4,'Sharia courts','sharia'], [5,'Madrasas','madrasa','medrese'],
      [5,'Kapikulu','kapi kulu'], [5,'Iznik tile workshops','iznik'] ] },

    { p: 'Name an effect of the Columbian Exchange on people or the environment.', u: 4, a: [
      [1,'Native population decline','population decline','depopulation','native deaths'], [1,'Population growth in Afro-Eurasia','population growth'],
      [2,'Growth of the slave trade','slavery','slave trade'], [2,'New diets','new foods','diet change'], [2,'Horse cultures on the Plains','horse culture','plains horses'],
      [3,'Deforestation'], [3,'Plantations','plantation agriculture'], [3,'Cattle ranching','ranching'], [3,'Soil depletion','soil exhaustion'],
      [4,'Invasive species'], [4,'Mixed-race populations','mestizos','mixed populations'], [4,'Spread of malaria','malaria'], [4,'Overgrazing'],
      [5,'Monoculture'], [5,'Little Ice Age (fewer farmers)','little ice age','reforestation'] ] },

    { p: 'Name a holy city or pilgrimage site of any religion.', u: 1, a: [
      [1,'Mecca','makkah'], [1,'Jerusalem'], [2,'Medina'], [2,'Rome','vatican','vatican city'], [3,'Varanasi','benares'], [3,'Bodh Gaya'], [3,'Amritsar','golden temple'],
      [3,'Karbala'], [3,'Santiago de Compostela','compostela'], [4,'Lhasa'], [4,'Najaf'], [4,'Mashhad'], [4,'Canterbury'], [4,'Constantinople','istanbul'], [4,'Lumbini'],
      [5,'Ise','ise shrine'], [5,'Mount Kailash','kailash'], [5,'Cuzco','coricancha'], [5,'Kyoto'] ] },

    { p: 'Name a feature of feudalism or the manor system in Europe.', u: 1, a: [
      [1,'Serfs','serf','serfdom'], [1,'Lords','lord'], [1,'Knights','knight'], [2,'Vassals','vassal'], [2,'Fiefs','fief'], [2,'Manor','manors'], [2,'Castles','castle'],
      [3,'Oath of fealty','fealty','loyalty oath'], [3,'Chivalry'], [3,'Tithe','tithes'], [3,'Kings','king','monarch'], [4,'Three-field system','three field system','crop rotation'],
      [4,'Heavy plow','heavy plough'], [4,'Labor dues','labor service','corvee'], [5,'Homage'], [5,'Demesne'], [5,'Banalities','mill fees'] ] },

    { p: 'Name a reason the Mongols were such strong conquerors.', u: 2, a: [
      [1,'Horses','horsemanship','cavalry'], [1,'Archery','archers','horse archers'], [2,'Speed','mobility'], [2,'Terror','fear','brutality'],
      [2,'Discipline','organization','decimal system'], [3,'Siege engineers','siege weapons','siege warfare'], [3,'Composite bow','composite bows','bows'],
      [3,'Genghis Khan’s leadership','genghis khan','leadership'], [3,'Meritocracy','promotion by merit'], [4,'Spies','intelligence','scouts'],
      [4,'Feigned retreat','fake retreat'], [4,'Gunpowder'], [4,'Stirrups'], [5,'Adopting local experts','using captured engineers'], [5,'Yam communications','yam'] ] },

    { p: 'Name a Mughal building, art form, or policy (not a ruler).', u: 3, a: [
      [1,'Taj Mahal'], [2,'Red Fort'], [2,'Religious tolerance','tolerance'], [2,'Fatehpur Sikri'], [2,'Din-i Ilahi','din i ilahi'], [3,'Miniature painting','miniatures'],
      [3,'Zamindars','zamindar'], [3,'Ending the jizya','abolishing jizya'], [3,'Mansabdar system','mansabdars'], [3,'Humayun’s Tomb','humayuns tomb'],
      [4,'Peacock Throne'], [4,'Mughal gardens','charbagh','gardens'], [4,'Jama Masjid'], [4,'Badshahi Mosque'], [5,'Akbarnama'], [5,'Ibadat Khana','house of worship'], [5,'Rupee','rupiya'] ] },

    { p: 'Name a mercantilist policy or idea.', u: 4, a: [
      [1,'Colonies','colonization'], [1,'Tariffs','tariff','taxes on imports'], [2,'Favorable balance of trade','balance of trade','more exports than imports'],
      [2,'Bullion','gold and silver','hoarding gold'], [2,'Monopolies','monopoly'], [3,'Navigation Acts'], [3,'Joint-stock companies','joint stock company'],
      [3,'Raw materials from colonies','raw materials'], [3,'Protectionism'], [4,'Subsidies','subsidizing industry'], [4,'Exclusive colonial trade','exclusive trade','colonial trade only'],
      [4,'Jean-Baptiste Colbert','colbert'], [5,'Zero-sum wealth','fixed amount of wealth'], [5,'Sumptuary laws'] ] },

    { p: 'Name a founder of an empire or dynasty, 1200 to 1750.', u: 3, a: [
      [1,'Genghis Khan','chinggis khan','temujin'], [2,'Osman','osman i'], [2,'Babur'], [2,'Shah Ismail','ismail','ismail i'], [2,'Sundiata','sundiata keita'],
      [3,'Hongwu Emperor','hongwu','zhu yuanzhang'], [3,'Tokugawa Ieyasu','ieyasu'], [3,'Pachacuti'], [3,'Timur','tamerlane'], [3,'Kublai Khan','kublai'],
      [4,'Nurhaci'], [4,'Sunni Ali'], [4,'Ivan III'], [4,'Michael Romanov'], [5,'Minamoto Yoritomo','yoritomo'], [5,'Qutb ud-Din Aibak','aibak','qutb al din aibak'],
      [5,'Itzcoatl'], [5,'Taejo','yi seong gye'], [5,'Harihara'] ] },

    { p: 'Name a person who was a scholar, poet, or traveler of the Islamic world, 800 to 1450.', u: 1, a: [
      [1,'Ibn Battuta'], [2,'Ibn Sina','avicenna'], [2,'Rumi'], [2,'Ibn Khaldun'], [2,'Al-Khwarizmi','al khwarizmi','khwarizmi'], [3,'Ibn Rushd','averroes'],
      [3,'Omar Khayyam','khayyam'], [3,'Al-Razi','razi','rhazes'], [4,'Al-Ghazali','ghazali'], [4,'Hafez','hafiz'], [4,'Saadi','sadi'], [4,'Nasir al-Din al-Tusi','al tusi','tusi'],
      [4,'Al-Idrisi','idrisi'], [4,'Ibn al-Haytham','alhazen','ibn al haytham'], [5,'Al-Biruni','biruni'], [5,'Al-Farabi','farabi'], [5,'Ibn Arabi'], [5,'Ulugh Beg'] ] },

    { p: 'Name a body of water that was important to trade, 1200 to 1750.', u: 2, a: [
      [1,'Indian Ocean'], [1,'Mediterranean Sea','mediterranean'], [1,'Atlantic Ocean','atlantic'], [2,'Red Sea'], [2,'Persian Gulf'], [2,'Pacific Ocean','pacific'],
      [2,'South China Sea'], [3,'Arabian Sea'], [3,'Strait of Malacca','straits of malacca'], [3,'Black Sea'], [3,'Baltic Sea','baltic'], [3,'Caribbean Sea','caribbean'],
      [3,'Bay of Bengal'], [4,'Grand Canal'], [4,'Caspian Sea'], [4,'North Sea'], [4,'Strait of Hormuz'], [4,'Yangtze River','yangtze'], [5,'Volga River','volga'], [5,'Gulf of Aden'], [5,'Java Sea'] ] },

    { p: 'Name a cause of the Protestant Reformation.', u: 3, a: [
      [1,'Indulgences','sale of indulgences'], [1,'Church corruption','corruption'], [2,'Printing press'], [2,'Martin Luther','luther','95 theses','ninety five theses'],
      [3,'Simony','selling church offices'], [3,'Wealth of the Church','church wealth'], [3,'Renaissance humanism','humanism','renaissance'], [3,'Bible in the vernacular','vernacular bible','bible translations'],
      [3,'German princes wanting power','german princes','politics'], [4,'Nepotism'], [4,'Johann Tetzel','tetzel'], [4,'Building St. Peter’s Basilica','st peters basilica'],
      [4,'Taxes sent to Rome','church taxes'], [5,'Great Schism','western schism','avignon papacy'], [5,'Jan Hus','hus'], [5,'John Wycliffe','wycliffe'] ] },

    { p: 'Name a person or group in the Spanish casta system.', u: 4, a: [
      [1,'Peninsulares','peninsular'], [1,'Creoles','criollos','creole','criollo'], [1,'Mestizos','mestizo'], [2,'Mulattoes','mulatto','mulattos'],
      [2,'Indigenous peoples','natives','indians','native americans'], [2,'Enslaved Africans','slaves','africans'], [3,'Zambos','zambo'], [4,'Castizos','castizo'],
      [4,'Free people of color'], [5,'Moriscos','morisco'], [5,'Pardos','pardo'], [5,'Ladinos','ladino'] ] },

    { p: 'Name a woman who held power or fame, 1450 to 1750.', u: 3, a: [
      [1,'Queen Elizabeth I','elizabeth i','elizabeth'], [1,'Queen Nzinga','nzinga','njinga'], [2,'Isabella I of Castile','isabella','queen isabella'],
      [2,'Catherine the Great','catherine ii'], [2,'Malinche','la malinche','dona marina'], [3,'Nur Jahan'], [3,'Hurrem Sultan','roxelana','hurrem'], [3,'Mumtaz Mahal'],
      [3,'Mary I','bloody mary','mary tudor'], [4,'Kosem Sultan','kosem'], [4,'Maria Theresa'], [4,'Catherine de Medici'], [4,'Amina of Zazzau','queen amina','amina'],
      [4,'Pocahontas'], [5,'Christina of Sweden','queen christina'], [5,'Sor Juana Ines de la Cruz','sor juana'], [5,'Mary Queen of Scots','mary stuart'], [5,'Anne Boleyn'] ] },

    { p: 'Name a state or kingdom in Europe, 1200 to 1450.', u: 1, a: [
      [1,'England'], [1,'France'], [2,'Holy Roman Empire','hre'], [2,'Byzantine Empire','byzantium','byzantine'], [2,'Venice','venetian republic'], [2,'Portugal'],
      [3,'Castile'], [3,'Aragon'], [3,'Genoa'], [3,'Papal States'], [3,'Poland'], [3,'Hungary'], [3,'Scotland'], [3,'Florence'], [4,'Kievan Rus'],
      [4,'Muscovy','grand duchy of moscow'], [4,'Lithuania'], [4,'Granada','emirate of granada'], [4,'Novgorod'], [4,'Kingdom of Naples','naples','sicily'],
      [5,'Bohemia'], [5,'Burgundy'], [5,'Serbia'], [5,'Navarre'] ] },

    { p: 'Name a crop that spread along trade routes before 1450.', u: 2, a: [
      [1,'Champa rice'], [1,'Rice'], [2,'Bananas','banana'], [2,'Citrus','oranges','lemons','limes'], [2,'Sugarcane','sugar','sugar cane'], [2,'Cotton'],
      [3,'Tea'], [3,'Coconuts','coconut'], [3,'Sorghum'], [3,'Wheat'], [4,'Spinach'], [4,'Eggplant','aubergine'], [4,'Mangoes','mango'], [4,'Taro'], [4,'Coffee'],
      [5,'Durum wheat'], [5,'Watermelon'], [5,'Artichokes','artichoke'] ] },

    { p: 'Name a Safavid place, group, or practice (not a ruler).', u: 3, a: [
      [1,'Shia Islam','shia','shiism','shiite'], [1,'Isfahan'], [2,'Qizilbash','kizilbash'], [2,'Persia','iran'], [2,'Shah Mosque','imam mosque'],
      [3,'Persian carpets','carpets','rugs'], [3,'Battle of Chaldiran','chaldiran'], [3,'Tabriz'], [3,'Naqsh-e Jahan Square','imam square','naqsh e jahan'],
      [3,'Twelver Shiism','twelvers'], [4,'Ghulams','ghulam'], [4,'Silk trade','silk'], [4,'Persian miniatures','miniature painting'], [4,'Ali Qapu'],
      [5,'Qazvin'], [5,'Safaviyya','sufi order'], [5,'Armenian merchants of New Julfa','new julfa'] ] },

    { p: 'Name a disease that spread to the Americas after 1492.', u: 4, a: [
      [1,'Smallpox'], [2,'Measles'], [2,'Influenza','flu'], [3,'Malaria'], [3,'Yellow fever'], [3,'Typhus'], [4,'Mumps'], [4,'Whooping cough','pertussis'],
      [4,'Chickenpox','chicken pox'], [4,'Diphtheria'], [4,'Bubonic plague','plague'], [5,'Scarlet fever'], [5,'Tuberculosis'], [5,'Cholera'] ] },

    { p: 'Name a famous book, letter, or written work from 1200 to 1750.', u: 3, a: [
      [1,'Ninety-Five Theses','95 theses','95 theses','ninety five theses'], [1,'The Travels of Marco Polo','travels of marco polo','marco polos travels'], [2,'The Prince'],
      [2,'Rihla','the rihla'], [2,'Gutenberg Bible'], [3,'Divine Comedy','dantes inferno','inferno'], [3,'Canterbury Tales'], [3,'Leviathan'],
      [3,'Don Quixote'], [3,'Muqaddimah'], [4,'Utopia'], [4,'Akbarnama'], [4,'Popol Vuh'], [4,'Epic of Sundiata','sundiata'], [4,'King James Bible'],
      [5,'Romance of the Three Kingdoms'], [5,'Journey to the West'], [5,'Two Treatises of Government'], [5,'Letter of Afonso I','afonsos letters'], [5,'Hamlet'] ] },

    { p: 'Name a center of learning in the Islamic world or Europe, 800 to 1450.', u: 1, a: [
      [1,'House of Wisdom'], [1,'Timbuktu'], [2,'University of Paris','paris','sorbonne'], [2,'Oxford','university of oxford'], [2,'Baghdad'], [2,'Cordoba'],
      [3,'Sankore Madrasa','sankore','sankore mosque'], [3,'University of Bologna','bologna'], [3,'Al-Azhar','al azhar university'], [3,'Cambridge'], [3,'Cairo'],
      [4,'Al-Qarawiyyin','qarawiyyin','fez'], [4,'Toledo','toledo school of translators'], [4,'Salamanca'], [4,'Nalanda'], [4,'Monasteries','monastery'],
      [5,'Maragheh Observatory','maragheh'], [5,'Padua'], [5,'Samarkand observatory','ulugh beg observatory'] ] },

    { p: 'Name a place where Islam spread through trade or missionaries, 1200 to 1450.', u: 2, a: [
      [1,'West Africa'], [1,'Mali'], [2,'Swahili Coast','east africa'], [2,'Southeast Asia'], [2,'Indonesia'], [2,'India'], [3,'Malacca','melaka'],
      [3,'Java'], [3,'Sumatra'], [3,'Central Asia'], [3,'Anatolia','turkey'], [3,'Songhai'], [4,'Malaysia'], [4,'Kanem-Bornu','kanem','bornu'],
      [4,'Somalia'], [4,'Bengal'], [4,'Philippines','mindanao','sulu'], [5,'Aceh'], [5,'Brunei'], [5,'Hausa states','hausa'], [5,'Golden Horde'] ] },

    { p: 'Name a person from the Spanish, Portuguese, or English courts who backed overseas voyages.', u: 4, a: [
      [1,'Queen Isabella','isabella','isabella i'], [2,'King Ferdinand','ferdinand'], [2,'Henry the Navigator','prince henry'], [3,'Elizabeth I','queen elizabeth'],
      [3,'Charles V','charles i'], [3,'Manuel I','king manuel'], [4,'John II of Portugal','john ii','joao ii'], [4,'Philip II'], [4,'Henry VII'],
      [5,'Sir Walter Raleigh','raleigh'], [5,'James I'] ] }
,
    { p: 'Name a belief or practice of Islam.', u: 1, a: [
      [1,'Five Pillars','five pillars of islam'], [1,'Hajj','pilgrimage to mecca'], [1,'Quran','koran'], [2,'Salat','prayer','praying five times a day'], [2,'Ramadan','fasting','sawm'],
      [2,'Zakat','charity','almsgiving'], [2,'Shahada','declaration of faith'], [2,'Monotheism','allah','one god'], [3,'Sharia','sharia law','islamic law'], [3,'Mosques','mosque'],
      [3,'Hadith'], [3,'Jihad'], [4,'Umma','ummah','community of believers'], [4,'Sunna','sunnah'], [4,'Halal','dietary laws'], [5,'Friday prayer','jumah'], [5,'Waqf','charitable endowments'] ] },

    { p: 'Name a reason the Mongol Empire broke apart or declined.', u: 2, a: [
      [1,'Black Death','plague','bubonic plague'], [1,'Succession disputes','fights over succession','civil war'], [2,'Split into khanates','khanates','divided'],
      [2,'Too big to govern','overextension','too large'], [3,'Assimilation into local cultures','assimilation'], [3,'Rebellions','revolts'],
      [3,'Battle of Ain Jalut','ain jalut','defeat by mamluks'], [3,'Failed invasions of Japan','kamikaze','japan'], [4,'Paper money inflation','inflation'],
      [4,'Red Turban Rebellion','red turbans'], [4,'Conversion to local religions','conversion to islam'], [5,'Death of Mongke','mongke'], [5,'Rise of the Ming','ming'] ] },

    { p: 'Name a battle or siege, 1450 to 1750.', u: 3, a: [
      [1,'Fall of Constantinople','constantinople','siege of constantinople'], [2,'Battle of Chaldiran','chaldiran'], [2,'Battle of Panipat','panipat','first battle of panipat'],
      [2,'Siege of Vienna','vienna'], [2,'Spanish Armada','armada','defeat of the armada'], [2,'Siege of Tenochtitlan','tenochtitlan'], [3,'Battle of Lepanto','lepanto'],
      [3,'Battle of Mohacs','mohacs'], [3,'Battle of Cajamarca','cajamarca'], [3,'Battle of Sekigahara','sekigahara'], [4,'Battle of Diu','diu'], [4,'Battle of Poltava','poltava'],
      [4,'Battle of Talikota','talikota'], [4,'Battle of Tondibi','tondibi'], [5,'Battle of Karnal','karnal'], [5,'Siege of Malacca','malacca'], [5,'Battle of Alcazar','alcacer quibir'] ] },

    { p: 'Name a reason the Atlantic slave trade grew after 1500.', u: 4, a: [
      [1,'Sugar plantations','sugar','plantations'], [1,'Need for labor','labor shortage','labor demand'], [2,'Native population collapse','native deaths','disease killed natives'],
      [2,'Cash crops','cash crop'], [3,'African states selling captives','african rulers','african kingdoms'], [3,'Guns traded for captives','guns','gun slave cycle'],
      [3,'Mercantilism','profit'], [3,'Triangular trade'], [4,'Asiento','asiento contracts'], [4,'Portuguese trading posts','trading posts','forts'],
      [4,'Africans’ resistance to disease','disease resistance','immunity'], [5,'Royal African Company'], [5,'Racism','racial ideas'] ] },

    { p: 'Name a staple food crop grown somewhere in the world, 1200 to 1750.', u: 1, a: [
      [1,'Rice'], [1,'Wheat'], [1,'Maize','corn'], [1,'Potatoes','potato'], [2,'Millet'], [2,'Barley'], [2,'Beans'], [3,'Sorghum'], [3,'Cassava','manioc'], [3,'Yams','yam'],
      [3,'Sweet potatoes','sweet potato'], [3,'Squash'], [4,'Quinoa'], [4,'Rye'], [4,'Oats'], [4,'Bananas','plantains'], [5,'Taro'], [5,'Teff'], [5,'Buckwheat'] ] },

    { p: 'Name a person, place, or thing tied to the Mali Empire.', u: 1, a: [
      [1,'Mansa Musa'], [1,'Timbuktu'], [1,'Gold'], [2,'Sundiata','sundiata keita'], [2,'Salt'], [2,'Islam'], [2,'Hajj of 1324','hajj','mansa musas hajj'],
      [3,'Griots','griot'], [3,'Niger River','niger'], [3,'Sankore','sankore madrasa'], [3,'Djenne','great mosque of djenne'], [4,'Catalan Atlas'], [4,'Niani'],
      [4,'Epic of Sundiata'], [4,'Djinguereber Mosque','djinguereber'], [5,'Mansa Sulayman','sulayman'], [5,'Abu Bakr II','abubakari'], [5,'Walata'], [5,'Gao'] ] },

    { p: 'Name a ruler with a nickname, 1200 to 1750 (like "the Great").', u: 3, a: [
      [1,'Suleiman the Magnificent','suleiman'], [1,'Peter the Great'], [2,'Ivan the Terrible'], [2,'Akbar the Great'], [2,'Catherine the Great'],
      [2,'Henry the Navigator'], [3,'Mehmed the Conqueror','mehmed ii'], [3,'Louis XIV the Sun King','sun king','louis xiv'], [3,'Shah Abbas the Great','abbas the great'],
      [3,'Selim the Grim','selim i'], [4,'Suleiman the Lawgiver','kanuni'], [4,'Ivan the Great','ivan iii'], [4,'Frederick the Great'], [4,'Bloody Mary','mary i'],
      [4,'Lorenzo the Magnificent','lorenzo de medici'], [5,'Sejong the Great'], [5,'Casimir the Great'], [5,'Timur the Lame','tamerlane'], [5,'Ferdinand the Catholic'] ] },

    { p: 'Name something the Portuguese did to control Indian Ocean trade.', u: 4, a: [
      [1,'Built forts','forts','fortified trading posts','trading post empire'], [1,'Used cannons','cannons','naval cannons','guns'], [2,'Captured Goa','goa'],
      [2,'Captured Malacca','malacca'], [2,'Captured Hormuz','hormuz'], [3,'Cartaz passes','cartaz','cartazes','passes'], [3,'Battle of Diu','diu'],
      [3,'Monopoly on pepper','spice monopoly','monopoly'], [3,'Violence against rival traders','violence','attacking ships'], [4,'Tolls','taxed ships'],
      [4,'Alliances with local rulers','alliances'], [4,'Captured Mombasa','mombasa'], [5,'Afonso de Albuquerque','albuquerque'], [5,'Estado da India'] ] },

    { p: 'Name a type of ship or boat used between 1200 and 1750.', u: 2, a: [
      [1,'Caravel','caravels'], [1,'Junk','junks'], [1,'Dhow','dhows'], [2,'Galleon','galleons'], [2,'Carrack','carracks'], [2,'Treasure ship','treasure ships'],
      [3,'Galley','galleys'], [3,'Fluyt','flute'], [3,'Canoe','canoes'], [4,'Cog','cogs'], [4,'Longship','longships'], [4,'Turtle ship','turtle ships'],
      [4,'Outrigger canoe','outrigger'], [5,'Sambuk'], [5,'Sampan'], [5,'Felucca'], [5,'Balsa raft','balsa'] ] },

    { p: 'Name a person, place, or thing tied to Great Zimbabwe or the Swahili Coast.', u: 1, a: [
      [1,'Gold'], [1,'Kilwa'], [2,'Great Enclosure','stone walls','stone enclosures'], [2,'Swahili language','swahili'], [2,'Islam'], [2,'Indian Ocean trade'],
      [2,'Mombasa'], [2,'Zanzibar'], [3,'Ivory'], [3,'Dhows','dhow'], [3,'Shona','shona people'], [3,'Coral stone mosques','coral mosques'], [3,'Sofala'],
      [4,'Monsoon winds','monsoons'], [4,'Mogadishu'], [4,'Great Mosque of Kilwa','husuni kubwa'], [4,'Chinese porcelain','porcelain'], [5,'Zimbabwe Bird','soapstone birds'],
      [5,'Malindi'], [5,'Bantu'] ] },

    { p: 'Name a way the Ming or Qing dealt with Europeans.', u: 3, a: [
      [1,'Canton System','canton','guangzhou'], [2,'Limited trade','restricted trade'], [2,'Jesuits at court','jesuits'], [2,'Demanded silver','silver'],
      [3,'Macau','let portugal use macau'], [3,'Matteo Ricci','ricci'], [3,'Tribute system','tribute'], [3,'Cohong','cohong merchants'],
      [4,'Treaty of Nerchinsk','nerchinsk'], [4,'Banned Christianity','christianity banned'], [4,'Edict of Toleration','kangxi edict'], [5,'Haijin','sea ban'],
      [5,'Macartney mission rejected','macartney'] ] },

    { p: 'Name a good Europeans brought to sell or trade in Africa, 1450 to 1750.', u: 4, a: [
      [1,'Guns','firearms','muskets'], [1,'Cloth','textiles','cotton cloth'], [2,'Rum','alcohol'], [2,'Gunpowder'], [3,'Iron bars','iron'], [3,'Brandy'],
      [3,'Copper','copper manillas','manillas','brass'], [3,'Beads','glass beads'], [3,'Cowrie shells','cowries'], [4,'Horses'], [4,'Tobacco'], [4,'Mirrors'],
      [5,'Knives','swords'], [5,'Indian textiles','indian cloth','calico'] ] },

    { p: 'Name a Silk Road religion.', u: 2, a: [
      [1,'Buddhism'], [1,'Islam'], [2,'Christianity','nestorian christianity','church of the east'], [3,'Zoroastrianism'], [3,'Manichaeism'], [3,'Judaism'],
      [4,'Nestorianism','nestorians'], [4,'Hinduism'], [4,'Confucianism'], [4,'Daoism','taoism'], [5,'Tengrism','tengri','shamanism'] ] },

    { p: 'Name a part of society in medieval Europe.', u: 1, a: [
      [1,'Peasants','peasant'], [1,'Serfs','serf'], [1,'Nobles','nobility','noble'], [1,'Clergy','priests','priest'], [2,'Knights','knight'], [2,'Kings','king','monarchs'],
      [2,'Monks','monk'], [2,'Merchants','merchant'], [3,'Nuns','nun'], [3,'Guilds','guild members','artisans','craftsmen'], [3,'Pope'], [3,'Bishops','bishop'],
      [4,'Burghers','townspeople','bourgeoisie'], [4,'Jews','jewish communities'], [4,'Lords','lord'], [5,'Friars','friar'], [5,'Yeomen'] ] },

    { p: 'Name a modern country that was once part of the Mongol Empire.', u: 2, a: [
      [1,'Mongolia'], [1,'China'], [1,'Russia'], [2,'Iran'], [2,'Korea','north korea','south korea'], [2,'Iraq'], [2,'Afghanistan'], [3,'Kazakhstan'],
      [3,'Uzbekistan'], [3,'Ukraine'], [3,'Turkey'], [3,'Georgia'], [3,'Pakistan'], [4,'Armenia'], [4,'Azerbaijan'], [4,'Turkmenistan'], [4,'Kyrgyzstan'],
      [4,'Tajikistan'], [4,'Syria'], [5,'Belarus'], [5,'Moldova'], [5,'Bulgaria'], [5,'Myanmar','burma'] ] },

    { p: 'Name a challenge the Ottoman Empire faced, 1450 to 1750.', u: 3, a: [
      [1,'Safavid wars','safavids','wars with the safavids'], [2,'Habsburgs','austria','habsburg wars'], [2,'Failed siege of Vienna','vienna'], [2,'Battle of Lepanto','lepanto'],
      [3,'Janissary revolts','janissaries'], [3,'Inflation from silver','inflation'], [3,'Portuguese bypassing trade','portuguese','sea route around africa'],
      [3,'Russia','russian expansion'], [3,'Corruption'], [4,'Celali revolts','celali','jelali'], [4,'Weak sultans','weak rulers'], [4,'Harem politics','sultanate of women'],
      [5,'Treaty of Karlowitz','karlowitz'], [5,'Barbary pirates','barbary states'] ] },

    { p: 'Name a Spanish colonial official, institution, or council.', u: 4, a: [
      [1,'Viceroy','viceroys','viceroyalty'], [2,'Council of the Indies'], [2,'Encomenderos','encomendero','encomienda'], [2,'Missions','mission'],
      [3,'Audiencia','audiencias'], [3,'Corregidor','corregidores'], [3,'Casa de Contratacion','house of trade'], [3,'Catholic Church','church'],
      [3,'Inquisition'], [4,'Cabildo','cabildos'], [4,'Presidio','presidios'], [4,'Haciendas','hacienda'], [5,'Alcalde','alcaldes'], [5,'Real Patronato'] ] },

    { p: 'Name a famous mosque, temple, cathedral, or shrine built 1200 to 1750.', u: 3, a: [
      [1,'Taj Mahal'], [2,'Blue Mosque','sultan ahmed mosque'], [2,'St. Peter’s Basilica','st peters basilica','saint peters'], [2,'Golden Temple','harmandir sahib'],
      [3,'Suleymaniye Mosque','suleymaniye'], [3,'Shah Mosque','imam mosque'], [3,'Notre-Dame de Paris','notre dame'], [3,'St. Basil’s Cathedral','st basils'],
      [3,'Templo Mayor'], [3,'Great Mosque of Djenne','djenne mosque'], [4,'Djinguereber Mosque','djinguereber'], [4,'Temple of Heaven'], [4,'Jama Masjid'],
      [4,'Badshahi Mosque'], [4,'Qutb Minar'], [4,'Chartres Cathedral','chartres'], [4,'Churches of Lalibela','lalibela'], [5,'Kinkaku-ji','golden pavilion'],
      [5,'Sankore Mosque','sankore'], [5,'Hagia Sophia (as a mosque)'] ] },

    { p: 'Name a cause or effect of the Crusades.', u: 1, a: [
      [1,'Capture of Jerusalem','jerusalem','holy land'], [1,'Religious zeal','religion','faith'], [2,'Pope Urban II','urban ii','pope'], [2,'More trade with the east','trade'],
      [2,'Saladin'], [2,'Christian-Muslim hostility','hostility','tension'], [3,'Italian city-states grew rich','venice','genoa','italian city states'],
      [3,'Sack of Constantinople in 1204','sack of constantinople','fourth crusade'], [3,'Persecution of Jews','attacks on jews','pogroms'],
      [3,'Knowledge from the Islamic world','new knowledge','learning'], [4,'Crusader states','kingdom of jerusalem','outremer'], [4,'Indulgences'],
      [4,'Weakened Byzantine Empire','byzantine decline'], [5,'Knights Templar','templars'], [5,'Children’s Crusade','childrens crusade'], [5,'Acre','fall of acre'] ] },

    { p: 'Name a city on the trans-Saharan trade routes.', u: 2, a: [
      [1,'Timbuktu'], [2,'Gao'], [2,'Djenne','jenne'], [2,'Cairo'], [3,'Sijilmasa'], [3,'Marrakesh','marrakech'], [3,'Fez','fes'], [3,'Kano'], [3,'Tunis'],
      [4,'Kumbi Saleh'], [4,'Walata','oualata'], [4,'Agadez'], [4,'Taghaza'], [4,'Tripoli'], [4,'Niani'], [5,'Ghadames'], [5,'Awdaghust'], [5,'Takedda'], [5,'Katsina'] ] },

    { p: 'Name a person, place, or event of the Songhai Empire.', u: 3, a: [
      [1,'Timbuktu'], [1,'Gao'], [2,'Askia Muhammad','askia the great','askia'], [2,'Sunni Ali','sonni ali'], [2,'Islam'], [3,'Niger River','niger'],
      [3,'Moroccan invasion','morocco','moroccans'], [3,'Gold and salt trade','gold','salt'], [3,'Sankore','sankore madrasa'], [4,'Battle of Tondibi','tondibi'],
      [4,'Djenne'], [4,'Askia Daoud','askia dawud'], [5,'Mahmud Kati','tarikh al fattash'], [5,'Ahmed Baba'], [5,'Arquebuses of the Moroccan army','arquebus'] ] },

    { p: 'Name something tied to the North American fur trade.', u: 4, a: [
      [1,'Beaver','beaver pelts','beavers'], [1,'Hudson’s Bay Company','hudsons bay company'], [2,'New France','french'], [2,'Huron','wendat','hurons'],
      [2,'Iroquois','haudenosaunee'], [3,'Quebec'], [3,'Coureurs des bois','coureur des bois'], [3,'Guns','firearms'], [3,'Beaver Wars'], [3,'Montreal'],
      [4,'Great Lakes'], [4,'Metal kettles','kettles','metal tools'], [4,'New Netherland','dutch'], [4,'Alcohol','brandy'], [5,'Wampum'], [5,'Voyageurs'],
      [5,'Felt hats','beaver hats','hats'] ] },

    { p: 'Name a type of government that existed between 1200 and 1750.', u: 1, a: [
      [1,'Monarchy','kingdom'], [1,'Empire'], [2,'Absolute monarchy','absolutism'], [2,'Caliphate'], [2,'Sultanate'], [2,'Shogunate'], [2,'Republic'],
      [3,'City-state','city states'], [3,'Feudalism','feudal system'], [3,'Khanate'], [3,'Theocracy'], [3,'Constitutional monarchy'], [4,'Confederacy','confederation','iroquois confederacy'],
      [4,'Oligarchy'], [4,'Tributary state','tributary system'], [5,'Elective monarchy'], [5,'Merchant republic'], [5,'Bureaucratic state','bureaucracy'] ] },

    { p: 'Name a Chinese invention that reached Europe by 1450.', u: 2, a: [
      [1,'Gunpowder'], [1,'Compass','magnetic compass'], [1,'Paper'], [2,'Printing','woodblock printing','movable type'], [2,'Silk making','sericulture','silk'],
      [3,'Porcelain'], [3,'Sternpost rudder','rudder'], [3,'Cannons','cannon','fire lance'], [4,'Wheelbarrow'], [4,'Blast furnace','cast iron'], [4,'Playing cards'],
      [4,'Paper money idea','paper money'], [5,'Horse collar'], [5,'Crossbow'], [5,'Kites','kite'] ] },

    { p: 'Name a religious group that faced persecution, 1450 to 1750.', u: 3, a: [
      [1,'Jews','jewish people'], [2,'Huguenots'], [2,'Protestants'], [2,'Catholics'], [2,'Muslims in Spain','moriscos','moors'], [3,'Sikhs'],
      [3,'Christians in Japan','japanese christians','kirishitan'], [3,'Anabaptists'], [3,'Puritans'], [3,'Quakers'], [4,'Hindus under Aurangzeb','hindus'],
      [4,'Old Believers'], [4,'Conversos'], [4,'Shia in Ottoman lands','shia'], [5,'Sunni in Safavid Persia','sunni'], [5,'Jesuits (expelled)','jesuits'], [5,'Lollards'] ] },

    { p: 'Name an Atlantic port city, 1450 to 1750.', u: 4, a: [
      [1,'Lisbon'], [1,'Seville'], [2,'Amsterdam'], [2,'London'], [2,'Havana'], [2,'Boston'], [3,'Cadiz'], [3,'Liverpool'], [3,'Bristol'], [3,'Salvador','bahia'],
      [3,'Veracruz'], [3,'Cartagena'], [3,'Elmina'], [3,'Luanda'], [4,'Nantes'], [4,'Charleston','charles town'], [4,'Ouidah'], [4,'Port Royal'], [4,'New York','new amsterdam'],
      [4,'Rio de Janeiro'], [5,'Goree'], [5,'Bordeaux'], [5,'Recife'], [5,'Bridgetown'] ] },

    { p: 'Name a famous animal in the history of Units 1 to 4.', u: 1, a: [
      [1,'Horse','horses'], [1,'Camel','camels'], [1,'Llama','llamas'], [2,'Cattle','cows','cow'], [2,'Pigs','pig'], [2,'Rats','rat'], [2,'Fleas','flea'],
      [2,'Beaver','beavers'], [3,'Sheep'], [3,'Silkworm','silkworms'], [3,'Alpaca','alpacas'], [3,'Elephant','elephants'], [3,'Giraffe','giraffes'],
      [4,'Ox','oxen'], [4,'Chicken','chickens'], [4,'Mule','mules'], [4,'Yak','yaks'], [4,'Guinea pig','guinea pigs'], [5,'Turkey','turkeys'], [5,'Cochineal insect','cochineal'], [5,'Mosquito','mosquitoes'] ] },

    { p: 'Name a place Ibn Battuta visited.', u: 2, a: [
      [1,'Mecca'], [1,'Mali'], [2,'China'], [2,'Delhi','india'], [2,'Cairo','egypt'], [2,'Constantinople'], [3,'Timbuktu'], [3,'Kilwa'], [3,'Mogadishu'],
      [3,'Maldives'], [3,'Damascus'], [3,'Baghdad'], [3,'Persia','iran'], [4,'Tangier','morocco'], [4,'Golden Horde'], [4,'Sumatra'], [4,'Granada'], [4,'Mombasa'],
      [4,'Calicut'], [4,'Medina'], [5,'Sri Lanka','ceylon'], [5,'Quanzhou'], [5,'Anatolia'], [5,'Bukhara'] ] },

    { p: 'Name an effect of the Protestant Reformation.', u: 3, a: [
      [1,'Counter-Reformation','catholic reformation'], [1,'Religious wars','wars of religion'], [2,'Thirty Years’ War','thirty years war'], [2,'Church of England','anglican church'],
      [2,'Council of Trent'], [2,'Jesuits'], [3,'Peace of Augsburg'], [3,'Edict of Nantes'], [3,'Weaker pope','less papal power'], [3,'New Protestant churches','protestant denominations'],
      [3,'Higher literacy','literacy','bibles in vernacular'], [4,'St. Bartholomew’s Day Massacre','st bartholomews day massacre'], [4,'Inquisition expanded','inquisition'],
      [4,'Catholic missions abroad','missionaries'], [4,'Huguenot persecution'], [5,'Peace of Westphalia'], [5,'Index of Forbidden Books','index'] ] },

    { p: 'Name a person, place, or thing tied to the Dutch, 1450 to 1750.', u: 4, a: [
      [1,'Dutch East India Company','voc'], [2,'Amsterdam'], [2,'Batavia','jakarta'], [2,'New Amsterdam','new netherland'], [2,'Cape Colony','cape town'],
      [3,'Stock exchange','amsterdam stock exchange'], [3,'Spice monopoly','spices'], [3,'Dejima','deshima'], [3,'Dutch West India Company','wic'], [3,'Fluyt'],
      [4,'Tulip mania','tulips'], [4,'Banda Islands','banda'], [4,'Ceylon','sri lanka'], [4,'Rembrandt'], [4,'Taiwan','formosa'], [5,'Jan Pieterszoon Coen','coen'],
      [5,'Bank of Amsterdam'], [5,'Hugo Grotius','grotius'], [5,'Curacao'] ] },

    { p: 'Name a weapon, tactic, or group of soldiers from 1200 to 1750.', u: 3, a: [
      [1,'Samurai'], [1,'Knights','knight'], [1,'Janissaries'], [2,'Conquistadors'], [2,'Mamluks'], [2,'Horse archers','mongol horse archers'], [3,'Qizilbash'],
      [3,'Cossacks'], [3,'Eight Banners','bannermen'], [3,'Sipahis','sipahi'], [4,'Streltsy'], [4,'Swiss pikemen','pikemen'], [4,'Condottieri','mercenaries'],
      [4,'Eagle warriors','jaguar warriors','eagle and jaguar warriors'], [4,'Ghulams'], [5,'Musketeers'], [5,'Ronin'], [5,'Hussars','winged hussars'] ] },

    { p: 'Name an idea or tool from Islamic scholars that changed science or math.', u: 1, a: [
      [1,'Algebra'], [1,'Arabic numerals','numerals','hindu arabic numerals'], [2,'Astrolabe','improved astrolabe'], [2,'Medicine','canon of medicine'],
      [2,'Astronomy','observatories'], [3,'Optics'], [3,'Trigonometry'], [3,'Chemistry','alchemy'], [3,'Translating Greek works','translations','translation movement'],
      [3,'Zero'], [4,'Algorithms','algorithm'], [4,'Hospitals','bimaristan'], [4,'Surgery','surgical tools'], [4,'Maps','cartography'], [5,'Scientific method','experimentation'],
      [5,'Camera obscura'], [5,'Tusi couple'] ] },

    { p: 'Name a commercial practice or financial tool used in trade, 1200 to 1450.', u: 2, a: [
      [1,'Paper money'], [1,'Credit'], [2,'Bills of exchange','bill of exchange'], [2,'Banks','banking','banking houses'], [2,'Flying cash','flying money'],
      [3,'Caravanserai','caravanserais'], [3,'Checks','sakk'], [3,'Guilds'], [3,'Coins','coinage','currency'], [4,'Partnerships','commenda'], [4,'Insurance'],
      [4,'Letters of credit'], [4,'Tariffs','customs duties'], [5,'Double-entry bookkeeping','double entry bookkeeping'], [5,'Fondaco','funduq','trading warehouse'] ] },

    { p: 'Name a person who ruled China, 1200 to 1750.', u: 3, a: [
      [1,'Kublai Khan','kublai'], [2,'Hongwu Emperor','hongwu','zhu yuanzhang'], [2,'Yongle Emperor','yongle'], [2,'Kangxi Emperor','kangxi'], [3,'Qianlong Emperor','qianlong'],
      [3,'Yongzheng Emperor','yongzheng'], [3,'Wanli Emperor','wanli'], [4,'Shunzhi Emperor','shunzhi'], [4,'Chongzhen Emperor','chongzhen'], [4,'Nurhaci'],
      [4,'Dorgon'], [5,'Hong Taiji'], [5,'Zhengde Emperor','zhengde'], [5,'Xuande Emperor','xuande'], [5,'Temur Khan','chengzong'] ] },

    { p: 'Name a change in Native American life after European contact.', u: 4, a: [
      [1,'Disease','smallpox','epidemics'], [1,'Population collapse','population decline'], [2,'Horses','horse culture'], [2,'Guns','firearms'],
      [2,'Conversion to Christianity','christianity','missions'], [2,'Forced labor','encomienda','mita'], [3,'Loss of land','displacement'], [3,'Fur trade'],
      [3,'New foods','wheat','cattle'], [3,'Intermarriage','mestizos'], [4,'Alcohol'], [4,'Metal tools','iron tools','trade goods'], [4,'Syncretism','blended religion'],
      [4,'Enslavement','slavery'], [5,'Reducciones','congregaciones','resettlement'], [5,'Beaver Wars'] ] },

    { p: 'Name an Asian or Pacific island Europeans controlled or traded at, 1500 to 1750.', u: 4, a: [
      [1,'Philippines','luzon'], [2,'Java'], [2,'Sri Lanka','ceylon'], [2,'Spice Islands','moluccas','maluku'], [3,'Banda Islands','banda'], [3,'Taiwan','formosa'],
      [3,'Sumatra'], [3,'Dejima','deshima'], [4,'Macau'], [4,'Ambon','amboina'], [4,'Timor','east timor'], [4,'Guam'], [4,'Mauritius'], [4,'Bombay','mumbai'],
      [5,'Ternate'], [5,'Tidore'], [5,'Hormuz'], [5,'Celebes','sulawesi'] ] },

    { p: 'Name a belief or practice of Christianity in medieval Europe.', u: 1, a: [
      [1,'Mass'], [1,'Pilgrimages','pilgrimage'], [2,'Sacraments','sacrament'], [2,'Relics','relic'], [2,'Monasteries','monastery','monasticism'], [2,'Tithe','tithes'],
      [2,'Saints','saint'], [3,'Indulgences','indulgence'], [3,'Confession'], [3,'Baptism'], [3,'Excommunication'], [3,'Cathedrals','cathedral'], [3,'Crusades'],
      [4,'Trinity'], [4,'Purgatory'], [4,'Canon law'], [5,'Interdict'], [5,'Mendicant orders','friars','franciscans','dominicans'] ] },

    { p: 'Name a reason the Ming stopped Zheng He’s voyages.', u: 2, a: [
      [1,'Too expensive','cost','money'], [2,'Confucian dislike of merchants','confucianism','confucian scholars'], [2,'Mongol threat','mongols','northern threat'],
      [2,'Great Wall spending','great wall'], [3,'Yongle Emperor died','emperor died','death of yongle'], [3,'Court rivalry with eunuchs','eunuchs','court politics'],
      [3,'Nothing China needed','no need','china was self sufficient'], [4,'Moving the capital to Beijing','beijing','forbidden city'], [4,'Grand Canal repaired','grand canal'],
      [5,'Haijin sea ban','haijin','sea ban'], [5,'Pirates','wokou'] ] },

    { p: 'Name a person, place, or thing tied to Spain’s rise, 1450 to 1750.', u: 3, a: [
      [1,'Columbus','christopher columbus'], [1,'Ferdinand and Isabella','isabella','ferdinand'], [2,'Reconquista'], [2,'Spanish Inquisition','inquisition'],
      [2,'Silver','american silver'], [2,'Spanish Armada','armada'], [3,'Conquistadors'], [3,'Philip II'], [3,'Charles V'], [3,'Habsburgs','habsburg'],
      [3,'Fall of Granada','granada'], [3,'Treaty of Tordesillas','tordesillas'], [4,'Expulsion of the Jews','1492 expulsion'], [4,'El Escorial','escorial'],
      [4,'Spanish Golden Age','siglo de oro'], [4,'Treasure fleets','treasure fleet'], [5,'Lepanto'], [5,'Cervantes','don quixote'], [5,'Casa de Contratacion'] ] },

    { p: 'Name a change in Africa caused by the Atlantic slave trade.', u: 4, a: [
      [1,'Population loss','depopulation','population decline'], [2,'More wars for captives','warfare','wars'], [2,'Guns spread','guns','firearms'],
      [2,'Rise of Dahomey','dahomey'], [2,'Rise of Asante','asante','ashanti'], [3,'Gender imbalance','fewer men'], [3,'Decline of Kongo','kongo'],
      [3,'New crops from the Americas','maize','cassava','manioc'], [3,'Dependence on European goods','dependence'], [4,'Coastal states grew rich','coastal kingdoms'],
      [4,'Slavery grew inside Africa','more slavery in africa'], [4,'Christianity in Kongo','christianity'], [5,'Cowrie shell inflation','cowries'], [5,'Rise of Oyo','oyo'] ] }
,
    { p: 'Name an Aztec god, ruler, city, or group.', u: 1, a: [
      [1,'Tenochtitlan'], [1,'Moctezuma','montezuma'], [2,'Huitzilopochtli'], [2,'Quetzalcoatl'], [2,'Mexica'], [3,'Tlaloc'], [3,'Triple Alliance'],
      [3,'Pochteca','merchants'], [3,'Cuauhtemoc'], [3,'Tezcatlipoca'], [4,'Texcoco'], [4,'Tlatelolco'], [4,'Tlacopan'], [4,'Itzcoatl'], [4,'Eagle warriors','jaguar warriors'],
      [5,'Calpulli'], [5,'Nezahualcoyotl'], [5,'Tlatoani'], [5,'Coatlicue'] ] },

    { p: 'Name a city or region the Black Death struck.', u: 2, a: [
      [1,'Europe'], [1,'China'], [2,'Constantinople'], [2,'Caffa','kaffa'], [2,'Florence'], [2,'Cairo','egypt'], [2,'Italy'], [3,'Venice'], [3,'Genoa'],
      [3,'Paris'], [3,'London'], [3,'Sicily','messina'], [3,'Damascus'], [3,'Mecca'], [4,'Marseille'], [4,'Avignon'], [4,'Alexandria'], [4,'Baghdad'],
      [4,'Golden Horde','sarai'], [5,'Tabriz'], [5,'Aleppo'], [5,'Tunis'] ] },

    { p: 'Name a capital city of a land-based empire, 1450 to 1750.', u: 3, a: [
      [1,'Istanbul','constantinople'], [1,'Beijing'], [2,'Isfahan'], [2,'Delhi'], [2,'Moscow'], [2,'Agra'], [3,'St. Petersburg','saint petersburg'], [3,'Edo','tokyo'],
      [3,'Tabriz'], [3,'Gao'], [3,'Fatehpur Sikri'], [3,'Vienna'], [3,'Madrid'], [4,'Lahore'], [4,'Nanjing'], [4,'Qazvin'], [4,'Kyoto'], [4,'Cuzco'], [4,'Tenochtitlan'],
      [5,'Edirne','adrianople'], [5,'Bursa'], [5,'Mukden','shenyang'], [5,'Vijayanagara','hampi'] ] },

    { p: 'Name a person or place tied to the Kingdom of Kongo or Ndongo (Angola).', u: 4, a: [
      [1,'Queen Nzinga','nzinga','njinga'], [2,'Afonso I','afonso','nzinga mbemba'], [2,'Portuguese','portugal'], [2,'Luanda'], [3,'Catholicism','christianity'],
      [3,'Mbanza Kongo','sao salvador'], [3,'Ndongo'], [3,'Matamba'], [3,'Slave trade','atlantic slave trade'], [4,'Letters to the king of Portugal','letters'],
      [4,'Imbangala'], [4,'Congo River','congo','kongo river'], [5,'Nzimbu shells','nzimbu'], [5,'Kimpa Vita','dona beatriz'], [5,'Battle of Mbwila','mbwila'] ] },

    { p: 'Name a year that matters in AP World, 1200 to 1750.', u: 1, a: [
      [1,'1492'], [2,'1453'], [2,'1517'], [2,'1324'], [2,'1450'], [3,'1206'], [3,'1258'], [3,'1347','1348'], [3,'1498'], [3,'1521'], [3,'1368'], [3,'1405'],
      [3,'1519'], [3,'1526'], [3,'1588'], [3,'1644'], [3,'1200'], [3,'1750'], [4,'1271'], [4,'1279'], [4,'1433'], [4,'1488'], [4,'1494'], [4,'1514'],
      [4,'1533','1532'], [4,'1571'], [4,'1600'], [4,'1602'], [4,'1683'], [4,'1689'], [4,'1603'], [5,'1215'], [5,'1291'], [5,'1415'], [5,'1555'], [5,'1648'], [5,'1680'], [5,'1591'] ] },

    { p: 'Name an Inca ruler, god, city, or official.', u: 1, a: [
      [1,'Cuzco','cusco'], [1,'Machu Picchu'], [2,'Sapa Inca'], [2,'Atahualpa'], [2,'Pachacuti'], [3,'Inti','sun god'], [3,'Huascar'], [3,'Huayna Capac'],
      [3,'Chasquis','chasqui','runners'], [3,'Quito'], [4,'Viracocha'], [4,'Pachamama'], [4,'Manco Capac'], [4,'Topa Inca','tupac inca yupanqui'], [5,'Coricancha','temple of the sun'],
      [5,'Curaca','kuraka'], [5,'Ollantaytambo'] ] },

    { p: 'Name a European trading city or league, 1200 to 1450.', u: 2, a: [
      [1,'Venice'], [1,'Genoa'], [2,'Florence'], [2,'Hanseatic League','hansa','hanse'], [3,'Bruges'], [3,'Lubeck'], [3,'Milan'], [3,'Pisa'], [3,'Hamburg'],
      [3,'Antwerp'], [3,'Barcelona'], [4,'Cologne'], [4,'Novgorod'], [4,'Danzig','gdansk'], [4,'Bremen'], [4,'Riga'], [4,'Lisbon'], [4,'London'],
      [5,'Bergen'], [5,'Visby'], [5,'Champagne fairs','champagne'], [5,'Ragusa','dubrovnik'] ] },

    { p: 'Name a person, place, or policy tied to France, 1450 to 1750.', u: 3, a: [
      [1,'Louis XIV','louis 14','sun king'], [1,'Versailles','palace of versailles'], [2,'New France'], [2,'Quebec'], [2,'Huguenots'], [3,'Samuel de Champlain','champlain'],
      [3,'Edict of Nantes'], [3,'Divine right'], [3,'Jacques Cartier','cartier'], [3,'Cardinal Richelieu','richelieu'], [3,'Saint-Domingue','haiti'],
      [4,'Jean-Baptiste Colbert','colbert'], [4,'Louisiana'], [4,'La Salle'], [4,'Intendants'], [4,'Fronde'], [4,'French East India Company'], [4,'Henry IV','henri iv'],
      [5,'Pondicherry'], [5,'Estates-General','estates general'], [5,'Code Noir'], [5,'Martinique'] ] },

    { p: 'Name something the Spanish silver trade caused.', u: 4, a: [
      [1,'Inflation','price revolution'], [1,'Global trade','world trade','first global economy'], [2,'Manila galleon trade','manila galleons'], [2,'Spanish wealth','spain got rich'],
      [2,'Silver flowed to China','china','chinese demand'], [3,'Single Whip tax','single whip'], [3,'Potosi boom','potosi'], [3,'Mita labor','mita','mit a'],
      [3,'Spanish debt','spanish bankruptcy','debt'], [4,'Ottoman inflation'], [4,'Ming decline','ming'], [4,'Silver dollars','pieces of eight','spanish dollar'],
      [5,'Mercury mining','huancavelica'], [5,'Rise of Amsterdam banking','banking'] ] },

    { p: 'Name a modern country that Spain colonized, 1450 to 1750.', u: 4, a: [
      [1,'Mexico'], [1,'Peru'], [2,'Cuba'], [2,'Argentina'], [2,'Colombia'], [2,'Philippines'], [2,'Chile'], [3,'Bolivia'], [3,'Venezuela'], [3,'Ecuador'],
      [3,'Guatemala'], [3,'Dominican Republic'], [3,'Puerto Rico'], [3,'Panama'], [4,'Uruguay'], [4,'Paraguay'], [4,'Honduras'], [4,'Nicaragua'], [4,'El Salvador'],
      [4,'Costa Rica'], [4,'United States','florida','california','usa'], [5,'Guam'], [5,'Equatorial Guinea'], [5,'Jamaica'], [5,'Trinidad and Tobago','trinidad'] ] },

    { p: 'Name a writing system or way of keeping records, 1200 to 1750.', u: 1, a: [
      [1,'Chinese characters','chinese writing','kanji'], [1,'Latin alphabet','alphabet'], [1,'Quipu','khipu'], [2,'Arabic script','arabic'], [2,'Maya glyphs','hieroglyphs','glyphs'],
      [3,'Cyrillic'], [3,'Hangul'], [3,'Aztec codices','codex','codices'], [3,'Sanskrit','devanagari'], [4,'Kana','hiragana','katakana'], [4,'Ge’ez','geez'],
      [4,'Persian script','persian'], [4,'Greek alphabet','greek'], [5,'Hebrew script','hebrew'], [5,'Tifinagh'], [5,'Nsibidi'] ] },

    { p: 'Name a way the Yuan or Mongols connected East and West.', u: 2, a: [
      [1,'Silk Roads','silk road'], [1,'Pax Mongolica','mongol peace'], [2,'Protected merchants','safe trade'], [2,'Yam system','yam'], [3,'Paiza passports','paiza'],
      [3,'Hired foreigners','marco polo','foreign officials'], [3,'Moved artisans','artisans','craftsmen'], [3,'Shared technology','technology'], [4,'Sea trade from Quanzhou','quanzhou'],
      [4,'Envoys','ambassadors','rabban sauma'], [4,'Exchanged astronomers','astronomy'], [5,'Persian doctors in China','medicine'], [5,'Tibetan Buddhism at court','tibetan buddhism'] ] },

    { p: 'Name a Sikh guru, practice, text, or place.', u: 3, a: [
      [1,'Guru Nanak','nanak'], [1,'Golden Temple','harmandir sahib'], [2,'Amritsar'], [2,'Punjab'], [2,'Guru Granth Sahib','adi granth'], [2,'Khalsa'],
      [3,'Guru Gobind Singh','gobind singh'], [3,'Langar','community kitchen'], [3,'Turban','turbans','dastar'], [3,'Five Ks','five k s'], [4,'Gurdwara','gurdwaras'],
      [4,'Guru Arjan','arjan'], [4,'Guru Tegh Bahadur','tegh bahadur'], [4,'Kirpan'], [5,'Kesh','uncut hair'], [5,'Ik Onkar'], [5,'Kara'] ] },

    { p: 'Name a person or group that spread Christianity overseas, 1450 to 1750.', u: 4, a: [
      [1,'Jesuits','society of jesus'], [2,'Franciscans'], [2,'Dominicans'], [2,'Missionaries'], [3,'Matteo Ricci','ricci'], [3,'Francis Xavier','xavier'],
      [3,'Bartolome de las Casas','las casas'], [4,'Augustinians'], [4,'Junipero Serra','serra'], [4,'Bernardino de Sahagun','sahagun'], [4,'Antonio Vieira','vieira'],
      [4,'Puritans'], [5,'Jean de Brebeuf','brebeuf'], [5,'Roberto de Nobili','de nobili'], [5,'Adam Schall'], [5,'Moravians'] ] },

    { p: 'Name a part of a Muslim city, 1200 to 1750.', u: 1, a: [
      [1,'Mosque','mosques'], [1,'Bazaar','souk','market'], [2,'Minaret','minarets'], [2,'Madrasa','madrasas','school'], [2,'Palace'], [3,'Caravanserai'],
      [3,'Hammam','bathhouse','public baths'], [3,'Gardens','garden'], [3,'Fountains','fountain'], [3,'Citadel','fortress'], [4,'Mihrab'], [4,'Minbar'],
      [4,'Hospital','bimaristan'], [4,'Courtyard'], [5,'Qanat','qanats'], [5,'Mausoleum','tomb'], [5,'Khanqah','sufi lodge'] ] },

    { p: 'Name a Mongol-era or Turkic people of the steppe and Central Asia.', u: 2, a: [
      [1,'Mongols'], [1,'Turks'], [2,'Tatars','tartars'], [2,'Seljuks','seljuk turks'], [3,'Uighurs','uyghurs'], [3,'Kazakhs'], [3,'Uzbeks'], [3,'Jurchen'],
      [3,'Timurids'], [3,'Manchus'], [4,'Khitan'], [4,'Kipchaks','cumans','polovtsians'], [4,'Huns'], [4,'Xiongnu'], [5,'Kyrgyz'], [5,'Oirats','dzungars'],
      [5,'Tanguts'], [5,'Bulgars','volga bulgars'] ] },

    { p: 'Name a city in the Ottoman Empire, 1450 to 1750.', u: 3, a: [
      [1,'Istanbul','constantinople'], [1,'Cairo'], [2,'Damascus'], [2,'Baghdad'], [2,'Jerusalem'], [2,'Mecca'], [3,'Aleppo'], [3,'Medina'], [3,'Bursa'],
      [3,'Edirne'], [3,'Athens'], [3,'Belgrade'], [3,'Budapest','buda'], [4,'Izmir','smyrna'], [4,'Thessaloniki','salonica'], [4,'Sarajevo'], [4,'Algiers'],
      [4,'Tunis'], [4,'Basra'], [4,'Mosul'], [5,'Trabzon','trebizond'], [5,'Sofia'], [5,'Bucharest'], [5,'Tripoli'] ] },

    { p: 'Name a Caribbean island Europeans colonized.', u: 4, a: [
      [1,'Cuba'], [1,'Hispaniola'], [1,'Jamaica'], [2,'Puerto Rico'], [2,'Barbados'], [2,'Haiti','saint domingue'], [3,'Bahamas','san salvador'], [3,'Martinique'],
      [3,'Guadeloupe'], [3,'Trinidad'], [3,'Curacao'], [4,'Antigua'], [4,'St. Kitts','saint kitts'], [4,'Aruba'], [4,'Tobago'], [4,'Grenada'], [4,'Bermuda'],
      [5,'Nevis'], [5,'St. Lucia','saint lucia'], [5,'Montserrat'], [5,'St. Eustatius','statia'] ] },

    { p: 'Name a famous palace, garden, or royal court, 1200 to 1750.', u: 3, a: [
      [1,'Versailles','palace of versailles'], [1,'Forbidden City'], [2,'Topkapi Palace','topkapi'], [2,'Alhambra'], [2,'Red Fort'], [3,'Fatehpur Sikri'],
      [3,'Hall of Mirrors'], [3,'Kremlin'], [3,'Shalimar Gardens','shalimar'], [3,'Ali Qapu'], [4,'El Escorial','escorial'], [4,'Peterhof'], [4,'Summer Palace'],
      [4,'Dolmabahce','dolmabahce palace'], [4,'Chehel Sotoun'], [5,'Schonbrunn'], [5,'Winter Palace'], [5,'Hampton Court'], [5,'Edo Castle'] ] },

    { p: 'Name something you would find in Venice, 1200 to 1450.', u: 2, a: [
      [1,'Canals','canal'], [1,'Merchants','merchant'], [2,'Doge'], [2,'Galleys','ships'], [2,'Spice trade','spices'], [3,'Marco Polo'], [3,'St. Mark’s Basilica','st marks'],
      [3,'Arsenal','arsenale'], [3,'Glassmaking','murano glass','glass'], [3,'Republic','republic of venice'], [4,'Rialto','rialto bridge'], [4,'Banks','banking'],
      [4,'Gondolas','gondola'], [4,'Trade with the Mamluks','mamluks','alexandria'], [5,'Great Council'], [5,'Ducat','ducats'], [5,'Fondaco dei Tedeschi'] ] },

    { p: 'Name a reason the Mughal Empire weakened after 1700.', u: 3, a: [
      [1,'Aurangzeb’s intolerance','aurangzeb','religious intolerance'], [2,'Marathas','maratha','maratha revolts'], [2,'Jizya brought back','jizya'], [2,'British East India Company','east india company','british'],
      [3,'Sikh revolts','sikhs'], [3,'Too costly wars in the Deccan','deccan wars','costly wars'], [3,'Overexpansion','too large'], [3,'Succession wars','succession disputes'],
      [3,'Nader Shah’s sack of Delhi','nader shah','sack of delhi'], [4,'Rajput revolts','rajputs'], [4,'Weak emperors','weak rulers'], [4,'Corruption'],
      [5,'Zamindar revolts','zamindars'], [5,'Afghan invasions','ahmad shah durrani','durrani'] ] },

    { p: 'Name a person, place, or thing tied to Brazil, 1500 to 1750.', u: 4, a: [
      [1,'Sugar'], [1,'Portugal','portuguese'], [2,'Enslaved Africans','slavery','slaves'], [2,'Pedro Cabral','cabral'], [2,'Rio de Janeiro'], [3,'Salvador','bahia'],
      [3,'Gold rush','gold','minas gerais'], [3,'Jesuits'], [3,'Palmares'], [3,'Brazilwood'], [3,'Tupi','tupi guarani'], [4,'Quilombos','quilombo'], [4,'Diamonds'],
      [4,'Bandeirantes'], [4,'Recife'], [4,'Dutch Brazil','dutch'], [5,'Pernambuco'], [5,'Engenhos','engenho','sugar mills'], [5,'Zumbi'] ] },

    { p: 'Name a sport, game, or pastime played somewhere between 1200 and 1750.', u: 1, a: [
      [1,'Chess'], [2,'Mesoamerican ball game','ball game','ullamaliztli','pok a tok'], [2,'Polo'], [2,'Jousting','tournaments'], [2,'Archery'], [3,'Go','weiqi'],
      [3,'Playing cards','cards'], [3,'Backgammon'], [3,'Falconry','hawking'], [3,'Sumo'], [3,'Mancala'], [4,'Cuju'], [4,'Kemari'], [4,'Lacrosse'], [4,'Tennis','real tennis'],
      [5,'Patolli'], [5,'Buzkashi'], [5,'Cricket'], [5,'Kabaddi'] ] },

    { p: 'Name a place where Buddhism was practiced, 1200 to 1750.', u: 2, a: [
      [1,'China'], [1,'Japan'], [1,'Tibet'], [2,'Korea'], [2,'Sri Lanka','ceylon'], [2,'Thailand','siam'], [2,'Southeast Asia'], [3,'Burma','myanmar'],
      [3,'Cambodia','khmer'], [3,'Mongolia'], [3,'Vietnam'], [3,'Laos'], [4,'Nepal'], [4,'Bhutan'], [4,'Angkor'], [4,'India'], [5,'Ladakh'], [5,'Kalmykia'], [5,'Bagan','pagan'] ] },

    { p: 'Name a European war or conflict, 1450 to 1750.', u: 3, a: [
      [1,'Thirty Years’ War','thirty years war'], [1,'English Civil War'], [2,'French Wars of Religion','wars of religion'], [2,'Hundred Years’ War','hundred years war'],
      [2,'Spanish Armada','armada'], [3,'Eighty Years’ War','dutch revolt','eighty years war'], [3,'War of the Spanish Succession'], [3,'Wars of the Roses'],
      [3,'Italian Wars'], [3,'Great Northern War'], [3,'Glorious Revolution'], [4,'Anglo-Dutch Wars','anglo dutch wars'], [4,'Schmalkaldic War'],
      [4,'Seven Years’ War','seven years war'], [4,'Habsburg-Ottoman wars','ottoman habsburg wars'], [5,'War of the Austrian Succession'], [5,'Livonian War'], [5,'Nine Years’ War'] ] },

    { p: 'Name an African port of the Atlantic slave trade.', u: 4, a: [
      [1,'Elmina'], [2,'Goree','goree island'], [2,'Luanda'], [2,'Ouidah','whydah'], [3,'Lagos'], [3,'Cape Coast','cape coast castle'], [3,'Bonny'], [3,'Benguela'],
      [3,'Calabar'], [4,'Bunce Island'], [4,'Porto-Novo','porto novo'], [4,'Badagry'], [4,'Cabinda'], [4,'Saint-Louis','st louis'], [5,'Anomabu'], [5,'Loango'],
      [5,'James Island','kunta kinteh island'] ] },

    { p: 'Name a famous person from Units 1 to 4 who was not a ruler.', u: 1, a: [
      [1,'Ibn Battuta'], [1,'Marco Polo'], [1,'Martin Luther','luther'], [2,'Zheng He'], [2,'Columbus','christopher columbus'], [2,'Joan of Arc'], [2,'Malinche'],
      [3,'Ibn Khaldun'], [3,'Matteo Ricci'], [3,'Bartolome de las Casas'], [3,'Leonardo da Vinci','da vinci'], [3,'Galileo'], [3,'Copernicus'], [3,'Gutenberg'],
      [4,'Sinan','mimar sinan'], [4,'Rumi'], [4,'Machiavelli'], [4,'Erasmus'], [4,'Guru Nanak'], [4,'Margery Kempe'], [5,'Piri Reis'], [5,'Guaman Poma'],
      [5,'Abul Fazl'], [5,'Zhu Xi'], [5,'Christine de Pizan'] ] },

    { p: 'Name something Europeans learned or borrowed from Asia or the Islamic world by 1500.', u: 2, a: [
      [1,'Gunpowder'], [1,'Compass'], [1,'Paper'], [2,'Arabic numerals','numerals'], [2,'Algebra'], [2,'Astrolabe'], [2,'Printing'], [3,'Lateen sail'],
      [3,'Greek texts saved in Arabic','greek texts','aristotle'], [3,'Medicine','canon of medicine'], [3,'Sugar'], [3,'Cotton'], [3,'Silk making','silk'],
      [4,'Citrus','oranges'], [4,'Optics'], [4,'Chess'], [4,'Coffee'], [5,'Sternpost rudder'], [5,'Bills of exchange'], [5,'Pasta','noodles'] ] },

    { p: 'Name an Ottoman cultural tradition or art form.', u: 3, a: [
      [1,'Coffeehouses','coffee'], [2,'Calligraphy'], [2,'Miniature painting','miniatures'], [2,'Iznik tiles','iznik pottery','tiles'], [3,'Turkish baths','hammam'],
      [3,'Tulips','tulip era'], [3,'Mosque architecture','domes','sinan'], [3,'Carpets','rugs'], [4,'Shadow puppets','karagoz'], [4,'Mehter band','military band','janissary band'],
      [4,'Whirling dervishes','sufi dance','mevlevi'], [4,'Marbled paper','ebru'], [5,'Ottoman Turkish poetry','divan poetry'], [5,'Fountains','sebil'], [5,'Turkish delight','lokum'] ] },

    { p: 'Name a person tied to the English colonies, 1600 to 1750.', u: 4, a: [
      [1,'Pocahontas'], [1,'John Smith'], [2,'Powhatan'], [2,'Squanto','tisquantum'], [2,'Pilgrims'], [3,'John Rolfe','rolfe'], [3,'William Penn','penn'],
      [3,'Metacom','king philip'], [3,'Puritans'], [4,'John Winthrop','winthrop'], [4,'Massasoit'], [4,'Roger Williams'], [4,'Anne Hutchinson'], [4,'Nathaniel Bacon','bacon'],
      [5,'William Bradford','bradford'], [5,'James Oglethorpe','oglethorpe'], [5,'Lord Baltimore','calvert'] ] },

    { p: 'Name a metal, mineral, or gem traded between 1200 and 1750.', u: 2, a: [
      [1,'Gold'], [1,'Silver'], [1,'Salt'], [2,'Copper'], [2,'Iron'], [3,'Jade'], [3,'Tin'], [3,'Diamonds','diamond'], [3,'Mercury'], [3,'Emeralds','emerald'],
      [3,'Lapis lazuli','lapis'], [4,'Rubies','ruby'], [4,'Pearls','pearl'], [4,'Bronze'], [4,'Lead'], [4,'Coral'], [5,'Amber'], [5,'Turquoise'], [5,'Alum'], [5,'Zinc'] ] },

    { p: 'Name a person who served an Ottoman or Mughal ruler.', u: 3, a: [
      [1,'Janissaries'], [2,'Sinan','mimar sinan'], [2,'Grand vizier','vizier'], [2,'Birbal'], [3,'Hurrem Sultan','roxelana'], [3,'Ibrahim Pasha'],
      [3,'Abul Fazl'], [3,'Barbarossa','hayreddin barbarossa'], [3,'Piri Reis'], [4,'Todar Mal'], [4,'Sokollu Mehmed Pasha','sokollu'], [4,'Tansen'], [4,'Man Singh'],
      [5,'Evliya Celebi'], [5,'Kemal Reis'], [5,'Ustad Ahmad Lahori'], [5,'Abdur Rahim Khan-i-Khanan','rahim'] ] },

    { p: 'Name a change in Asia caused by European trade, 1500 to 1750.', u: 4, a: [
      [1,'Silver flowed into China','silver'], [2,'Dutch control of Indonesia','voc control','dutch indonesia'], [2,'Christianity in the Philippines','christianity'],
      [2,'Manila grew','manila'], [2,'New crops','sweet potatoes','maize','chili peppers'], [3,'Japan closed its ports','sakoku'], [3,'Guns in Japan','firearms'],
      [3,'Indian textile exports grew','textiles','cotton cloth'], [3,'Macau','portuguese macau'], [3,'Spice monopolies','spice monopoly'], [4,'Population growth in China','population growth'],
      [4,'Canton System'], [4,'Destruction of clove trees','banda massacre'], [5,'Dutch in Taiwan','taiwan'], [5,'Rise of Bombay and Madras','bombay','madras'] ] },

    { p: 'Name a Chinese thinker or philosopher.', u: 1, a: [
      [1,'Confucius','kongzi'], [2,'Laozi','lao tzu','lao tse'], [2,'Mencius','mengzi'], [3,'Zhu Xi'], [3,'Han Feizi','han fei'], [3,'Zhuangzi','chuang tzu'],
      [4,'Wang Yangming','wang shouren'], [4,'Xunzi'], [4,'Mozi'], [5,'Sunzi','sun tzu'], [5,'Huang Zongxi'], [5,'Dong Zhongshu'] ] },

    { p: 'Name a Sufi order, saint, or practice.', u: 2, a: [
      [1,'Rumi'], [2,'Whirling dervishes','dervishes','mevlevi','mevlevi order'], [2,'Mysticism','mystics'], [3,'Chishti','chishti order'], [3,'Naqshbandi'],
      [3,'Dhikr','zikr','remembrance of god'], [3,'Shrines of saints','shrines','tombs of saints'], [3,'Music and poetry','qawwali','poetry'], [4,'Qadiriyya','qadiri'],
      [4,'Nizamuddin Auliya','nizamuddin'], [4,'Moinuddin Chishti'], [4,'Al-Ghazali'], [4,'Bektashi','bektashi order'], [5,'Safaviyya'], [5,'Rabia al-Adawiyya','rabia'],
      [5,'Ibn Arabi'] ] },

    { p: 'Name a policy that limited foreign contact or trade, 1450 to 1750.', u: 3, a: [
      [1,'Sakoku','closed country'], [1,'Canton System'], [2,'Ban on Christianity','christianity banned'], [2,'Dejima','deshima'], [2,'End of Zheng He’s voyages','end of treasure fleets'],
      [3,'Haijin','sea ban'], [3,'Cohong'], [3,'Tribute system'], [3,'Navigation Acts'], [4,'Korean isolation','hermit kingdom'], [4,'Expelling missionaries','expulsion of missionaries'],
      [4,'Spanish trade monopoly','casa de contratacion'], [5,'Edict of 1635','sakoku edict'], [5,'Japanese travel ban'] ] }
,
    { p: 'Name a person, place, or thing from the Byzantine Empire.', u: 1, a: [
      [1,'Constantinople'], [1,'Hagia Sophia'], [2,'Eastern Orthodox Church','orthodox christianity','orthodox'], [2,'Icons','icon'], [2,'Justinian'],
      [3,'Greek fire'], [3,'Justinian Code','code of justinian'], [3,'Emperor','emperors'], [3,'Mosaics','mosaic'], [3,'Theodora'], [4,'Caesaropapism'],
      [4,'Constantine XI','constantine xi palaiologos'], [4,'Basil II'], [4,'Theodosian Walls','walls of constantinople'], [4,'Cyrillic alphabet','cyrillic'],
      [5,'Patriarch','patriarch of constantinople'], [5,'Varangian Guard'], [5,'Komnenos','comnenus','anna komnene'] ] },

    { p: 'Name something Mansa Musa did or brought on his hajj in 1324.', u: 2, a: [
      [1,'Gold','gave away gold'], [1,'Went to Mecca','mecca'], [2,'Stopped in Cairo','cairo'], [2,'Caused inflation in Cairo','inflation'],
      [2,'Thousands of people','huge caravan','60000 people'], [2,'Camels','camels carrying gold'], [3,'Brought back scholars','scholars'], [3,'Built mosques','mosques'],
      [3,'Enslaved servants','enslaved people','slaves'], [3,'Put Mali on European maps','catalan atlas'], [4,'Brought back architect al-Sahili','al sahili','architect'],
      [4,'Djinguereber Mosque','djinguereber'], [4,'Borrowed money to get home','borrowed gold'], [5,'Books','manuscripts'] ] },

    { p: 'Name a reason gunpowder empires were able to grow, 1450 to 1750.', u: 3, a: [
      [1,'Gunpowder weapons','guns','cannons'], [2,'Bureaucracy','bureaucrats','centralized government'], [2,'Taxes','tax systems'], [2,'Religion','religious legitimacy'],
      [2,'Standing armies','armies','military'], [3,'Trade wealth','trade'], [3,'Janissaries'], [3,'Weak neighbors','weak rivals'], [3,'Cavalry','horses'],
      [3,'Religious tolerance','tolerance'], [4,'Alliances','marriage alliances'], [4,'Siege cannons'], [4,'Monumental architecture'], [5,'Conquering trade routes'], [5,'Loyal elites','timar','mansabdars'] ] },

    { p: 'Name a pirate, privateer, or sea raider, 1450 to 1750.', u: 4, a: [
      [1,'Blackbeard','edward teach'], [1,'Francis Drake','drake'], [2,'Barbarossa','hayreddin barbarossa'], [2,'Henry Morgan','morgan'], [3,'William Kidd','captain kidd','kidd'],
      [3,'Anne Bonny','bonny'], [3,'Mary Read','read'], [3,'Barbary pirates','barbary corsairs'], [3,'Wokou','japanese pirates'], [4,'Koxinga','zheng chenggong'],
      [4,'Bartholomew Roberts','black bart'], [4,'Walter Raleigh','raleigh'], [4,'Buccaneers'], [5,'Piet Hein'], [5,'Calico Jack','jack rackham'], [5,'Henry Every','henry avery'], [5,'Grace O’Malley','grace omalley'] ] },

    { p: 'Name a trade route or trade network, 1200 to 1750.', u: 2, a: [
      [1,'Silk Roads','silk road'], [1,'Indian Ocean trade','indian ocean'], [1,'Trans-Saharan trade','trans saharan'], [2,'Atlantic trade','atlantic'],
      [2,'Triangular trade'], [2,'Mediterranean trade','mediterranean'], [2,'Manila galleon trade','manila galleons'], [3,'Middle Passage'], [3,'Hanseatic League','hansa','baltic trade'],
      [3,'Grand Canal'], [3,'Cape route','cape of good hope'], [4,'Inca roads','qhapaq nan'], [4,'Tea Horse Road'], [4,'Volga trade route','volga'], [5,'Amber Road'], [5,'Carrera de Indias','spanish treasure fleet'] ] },

    { p: 'Name a farming method that helped people grow more food, 1200 to 1750.', u: 1, a: [
      [1,'Irrigation'], [1,'Terrace farming','terraces'], [2,'Chinampas','floating gardens'], [2,'Champa rice'], [2,'Three-field system','three field system','crop rotation'],
      [3,'Heavy plow','heavy plough'], [3,'Fertilizer','manure'], [3,'Water wheels','waterwheel'], [3,'Windmills','windmill'], [3,'Slash and burn','swidden'],
      [4,'Horse collar'], [4,'Qanats','qanat'], [4,'Raised fields','waru waru'], [4,'Three Sisters','maize beans and squash'], [5,'Polders','dikes'], [5,'Seed drill'], [5,'Enclosure'] ] },

    { p: 'Name a person or thing tied to the Delhi Sultanate.', u: 1, a: [
      [1,'Islam'], [1,'Delhi'], [2,'Jizya'], [2,'Qutb Minar'], [2,'Razia Sultana','razia','raziya'], [2,'Turkic rulers','turks'], [3,'Stopped the Mongols','mongol invasions'],
      [3,'Alauddin Khalji','ala ud din khalji','khalji'], [3,'Muhammad bin Tughluq','tughluq'], [3,'Timur’s sack of Delhi','timur','tamerlane'], [3,'Hindu majority','hindus'],
      [4,'Persian culture','persian'], [4,'Urdu','urdu language'], [4,'Iqta','iqta system'], [4,'Sufi saints','sufis'], [4,'Ibn Battuta'], [5,'Lodi dynasty','lodi','ibrahim lodi'],
      [5,'Slave dynasty','mamluk dynasty'], [5,'Qutb ud-Din Aibak','aibak'] ] },

    { p: 'Name a person or place tied to the Reconquista or al-Andalus.', u: 1, a: [
      [1,'Ferdinand and Isabella','isabella','ferdinand'], [1,'Granada'], [2,'Cordoba'], [2,'Moors','muslims'], [2,'Alhambra'], [2,'Castile'], [3,'Aragon'],
      [3,'Toledo'], [3,'El Cid'], [3,'Seville'], [3,'Inquisition'], [3,'Expulsion of the Jews'], [4,'Moriscos'], [4,'Las Navas de Tolosa'], [4,'Nasrid dynasty','nasrids'],
      [4,'Almohads'], [4,'Umayyads of Cordoba','umayyads'], [5,'Boabdil'], [5,'Ibn Rushd','averroes'], [5,'Maimonides'] ] },

    { p: 'Name a drink or drug that spread around the world, 1450 to 1750.', u: 4, a: [
      [1,'Coffee'], [1,'Tea'], [1,'Tobacco'], [2,'Chocolate','hot chocolate','cacao','cocoa'], [2,'Rum'], [3,'Opium'], [3,'Sugar'], [3,'Brandy'],
      [3,'Gin'], [3,'Wine'], [4,'Beer','ale'], [4,'Coca','coca leaves'], [4,'Laudanum'], [5,'Pulque'], [5,'Kava'], [5,'Betel','betel nut'], [5,'Snuff'] ] },

    { p: 'Name a holy book or sacred text.', u: 1, a: [
      [1,'Quran','koran'], [1,'Bible'], [2,'Torah'], [2,'Vedas'], [2,'Bhagavad Gita','gita'], [3,'Guru Granth Sahib','adi granth'], [3,'Analects'],
      [3,'Tao Te Ching','dao de jing','daodejing'], [3,'Upanishads'], [3,'Talmud'], [3,'Hadith'], [4,'Tripitaka','pali canon'], [4,'Avesta'], [4,'Lotus Sutra'],
      [4,'Popol Vuh'], [4,'New Testament'], [5,'Ramayana'], [5,'Kojiki'], [5,'Book of Mormon'] ] },

    { p: 'Name a type of money or currency, 1200 to 1750.', u: 2, a: [
      [1,'Paper money','paper currency'], [1,'Gold coins','gold'], [1,'Silver','silver coins'], [2,'Cowrie shells','cowries'], [2,'Cacao beans','cacao'],
      [2,'Pieces of eight','spanish dollar','silver dollar'], [3,'Flying cash'], [3,'Copper coins','cash coins','copper cash'], [3,'Ducat','ducats'], [3,'Florin','florins'],
      [3,'Dinar','dinars'], [3,'Salt'], [4,'Rupee','rupees'], [4,'Manillas'], [4,'Silver ingots','sycee'], [4,'Bills of exchange'], [4,'Wampum'], [5,'Dirham'],
      [5,'Akce','asper'], [5,'Real','reales'], [5,'Tobacco (Virginia)','tobacco'] ] },

    { p: 'Name a European state that was mostly Protestant by 1650.', u: 3, a: [
      [1,'England'], [2,'Dutch Republic','netherlands','holland','dutch'], [2,'Sweden'], [2,'Scotland'], [3,'Denmark'], [3,'Norway'], [3,'Prussia','brandenburg'],
      [3,'Saxony'], [3,'Switzerland','geneva','zurich'], [4,'Finland'], [4,'Hesse'], [4,'Wales'], [5,'Iceland'], [5,'Estonia','livonia'], [5,'Palatinate'], [5,'Wurttemberg'] ] },

    { p: 'Name a European state that stayed mostly Catholic, 1450 to 1750.', u: 3, a: [
      [1,'Spain'], [1,'France'], [1,'Italy','italian states'], [2,'Portugal'], [2,'Austria','habsburg austria'], [2,'Poland','poland lithuania'], [2,'Ireland'],
      [3,'Papal States'], [3,'Bavaria'], [3,'Venice'], [3,'Spanish Netherlands','belgium'], [3,'Hungary'], [4,'Lithuania'], [4,'Naples','kingdom of naples'],
      [4,'Bohemia'], [4,'Croatia'], [5,'Savoy'], [5,'Tuscany','florence'], [5,'Genoa'], [5,'Milan'] ] },

    { p: 'Name a ship that took part in a famous voyage, 1450 to 1750.', u: 4, a: [
      [1,'Santa Maria'], [1,'Mayflower'], [2,'Nina'], [2,'Pinta'], [3,'Golden Hind'], [3,'Victoria'], [3,'Half Moon','halve maen'], [4,'Trinidad'],
      [4,'Sao Gabriel','san gabriel'], [4,'Susan Constant'], [4,'Mary Rose'], [5,'Concepcion'], [5,'Speedwell'], [5,'Vasa'], [5,'Batavia'], [5,'Matthew'] ] },

    { p: 'Name an Atlantic island Europeans used as a colony or stopover, 1400 to 1750.', u: 4, a: [
      [1,'Canary Islands','canaries'], [2,'Madeira'], [2,'Azores'], [2,'Cape Verde'], [3,'Sao Tome','sao tome and principe'], [3,'Bermuda'], [4,'Saint Helena','st helena'],
      [4,'Goree'], [4,'Bioko','fernando po'], [4,'Principe'], [5,'Ascension Island','ascension'], [5,'Newfoundland'], [5,'Iceland'] ] },

    { p: 'Name a social group in Song or Ming China.', u: 1, a: [
      [1,'Peasants','farmers'], [1,'Merchants'], [2,'Scholar-gentry','scholar officials','gentry','mandarins'], [2,'Emperor'], [2,'Artisans','craftsmen'],
      [3,'Eunuchs'], [3,'Women','foot bound women'], [3,'Soldiers'], [3,'Buddhist monks','monks'], [4,'Concubines'], [4,'Servants','slaves'], [5,'Daoist priests'], [5,'Jinshi degree holders','jinshi'] ] },

    { p: 'Name a social group in Aztec society.', u: 1, a: [
      [1,'Priests'], [1,'Warriors'], [2,'Nobles','pipiltin','nobility'], [2,'Commoners','macehualtin','peasants'], [2,'Merchants','pochteca'],
      [2,'Slaves','enslaved people','tlacotin'], [3,'Emperor','tlatoani','huey tlatoani'], [3,'Eagle warriors','jaguar warriors'], [4,'Calpulli'], [4,'Artisans','craftsmen'],
      [5,'Mayeque','serfs'], [5,'Tlamatinime','scholars'] ] },

    { p: 'Name something from the Ottoman capture of Constantinople in 1453.', u: 3, a: [
      [1,'Mehmed II','mehmed the conqueror','mehmed'], [1,'Cannons','cannon'], [2,'Hagia Sophia became a mosque','hagia sophia'], [2,'Janissaries'], [2,'Byzantines','byzantine empire'],
      [3,'Theodosian Walls','city walls','walls'], [3,'Constantine XI','constantine'], [3,'Orban’s great gun','orban'], [3,'Renamed Istanbul','istanbul'],
      [4,'Ships dragged over land','ships over land'], [4,'Golden Horn chain','golden horn'], [4,'Genoese defenders','giustiniani','genoese'], [5,'Rumeli Hisari'], [5,'Greek scholars fled to Italy','scholars fled'] ] },

    { p: 'Name a city in Mughal India.', u: 3, a: [
      [1,'Delhi'], [1,'Agra'], [2,'Lahore'], [2,'Fatehpur Sikri'], [2,'Bombay','mumbai'], [3,'Surat'], [3,'Calcutta','kolkata'], [3,'Madras','chennai'], [3,'Amritsar'],
      [3,'Hyderabad'], [3,'Goa'], [4,'Dhaka'], [4,'Kabul'], [4,'Ahmedabad'], [4,'Varanasi','benares'], [4,'Patna'], [5,'Aurangabad'], [5,'Ajmer'], [5,'Murshidabad'] ] },

    { p: 'Name a European city important to trade or banking, 1450 to 1750.', u: 4, a: [
      [1,'Amsterdam'], [1,'London'], [2,'Lisbon'], [2,'Seville'], [2,'Venice'], [2,'Antwerp'], [3,'Genoa'], [3,'Florence'], [3,'Paris'], [3,'Cadiz'],
      [3,'Augsburg'], [3,'Hamburg'], [4,'Lyon'], [4,'Bruges'], [4,'Bristol'], [4,'Liverpool'], [4,'Nantes'], [5,'Frankfurt'], [5,'Danzig','gdansk'], [5,'Bordeaux'] ] },

    { p: 'Name a Muslim conqueror or military leader, 1200 to 1750.', u: 3, a: [
      [1,'Babur'], [1,'Mehmed II','mehmed the conqueror'], [2,'Timur','tamerlane'], [2,'Suleiman','suleiman the magnificent'], [2,'Selim I','selim'], [3,'Saladin'],
      [3,'Shah Ismail','ismail'], [3,'Baybars'], [3,'Aurangzeb'], [3,'Nader Shah'], [4,'Alauddin Khalji','khalji'], [4,'Askia Muhammad','askia'], [4,'Barbarossa'],
      [4,'Shah Abbas'], [4,'Sunni Ali'], [5,'Mahmud of Ghazni'], [5,'Muhammad of Ghor','muhammad ghori'], [5,'Ahmad Gran','ahmad ibn ibrahim'], [5,'Idris Alooma'] ] },

    { p: 'Name a maroon community or a leader of escaped enslaved people.', u: 4, a: [
      [1,'Palmares'], [2,'Jamaican Maroons','jamaica'], [2,'Quilombos','quilombo'], [3,'Nanny of the Maroons','queen nanny','nanny'], [3,'Zumbi'], [3,'Suriname maroons','suriname'],
      [3,'Palenques','palenque'], [4,'Great Dismal Swamp'], [4,'San Basilio de Palenque'], [4,'Cudjoe'], [4,'Gaspar Yanga','yanga'], [5,'Benkos Bioho'], [5,'Ganga Zumba'],
      [5,'Fort Mose'], [5,'Mackandal','makandal'] ] },

    { p: 'Name a famous map or mapmaker, 1200 to 1750.', u: 4, a: [
      [1,'Mercator','gerardus mercator'], [2,'Catalan Atlas'], [2,'Piri Reis','piri reis map'], [3,'Waldseemuller map','waldseemuller'], [3,'Al-Idrisi','idrisi'],
      [3,'Ortelius','abraham ortelius'], [3,'Portolan charts','portolan'], [4,'Fra Mauro','fra mauro map'], [4,'Kangnido'], [4,'Juan de la Cosa'], [4,'Ptolemy'],
      [4,'Martellus'], [5,'Blaeu','willem blaeu'], [5,'Matteo Ricci world map','ricci map'], [5,'Cantino planisphere','cantino'] ] },

    { p: 'Name a type of cloth or textile traded between 1200 and 1750.', u: 2, a: [
      [1,'Silk'], [1,'Cotton'], [1,'Wool'], [2,'Linen'], [2,'Calico'], [3,'Muslin'], [3,'Chintz'], [3,'Velvet'], [3,'Kente cloth','kente'], [4,'Brocade'],
      [4,'Damask'], [4,'Felt'], [4,'Cashmere'], [4,'Alpaca wool','alpaca'], [4,'Satin'], [5,'Taffeta'], [5,'Nankeen'], [5,'Ikat'], [5,'Bark cloth','tapa'] ] },

    { p: 'Name a strait, cape, or passage that mattered to sailors, 1450 to 1750.', u: 4, a: [
      [1,'Cape of Good Hope'], [1,'Strait of Magellan'], [2,'Strait of Malacca'], [2,'Strait of Gibraltar','gibraltar'], [2,'Cape Horn'], [3,'Strait of Hormuz'],
      [3,'Bosporus','bosphorus'], [3,'Dardanelles'], [3,'Bab el-Mandeb','bab al mandab'], [4,'Sunda Strait'], [4,'English Channel'], [4,'Northwest Passage'],
      [4,'Cape Bojador'], [5,'Drake Passage'], [5,'Mozambique Channel'], [5,'Bering Strait'], [5,'Danish straits','oresund'] ] },

    { p: 'Name a modern country where Portugal held land or a trading post, 1450 to 1750.', u: 4, a: [
      [1,'Brazil'], [2,'Angola'], [2,'Mozambique'], [2,'India','goa'], [3,'China','macau'], [3,'Malaysia','malacca'], [3,'Ghana','elmina'], [3,'Sri Lanka','ceylon'],
      [3,'Cape Verde'], [3,'Kenya','mombasa'], [4,'Oman','muscat'], [4,'Iran','hormuz'], [4,'Morocco','ceuta'], [4,'Indonesia','timor','moluccas'], [4,'Guinea-Bissau','guinea bissau'],
      [4,'Sao Tome and Principe','sao tome'], [4,'East Timor','timor leste'], [5,'Bahrain'], [5,'Tanzania','kilwa'], [5,'Uruguay','colonia'] ] },

    { p: 'Name an effect of the printing press, 1450 to 1750.', u: 3, a: [
      [1,'Protestant Reformation','reformation'], [1,'More literacy','literacy'], [2,'Cheaper books','books'], [2,'Bibles in local languages','vernacular bibles','bibles'],
      [2,'Spread of ideas','ideas spread'], [3,'Scientific Revolution','science'], [3,'Renaissance spread','renaissance'], [3,'Pamphlets'], [3,'Maps','printed maps'],
      [4,'Newspapers'], [4,'Standard languages','standardized spelling'], [4,'Censorship','index of forbidden books'], [5,'Ottoman ban on Arabic printing','ottoman ban'], [5,'Broadsides'] ] },

    { p: 'Name a cause of the fall of the Ming dynasty.', u: 3, a: [
      [1,'Manchu invasion','manchus','qing'], [2,'Peasant rebellions','rebellions','li zicheng'], [2,'Famine','famines'], [3,'Silver shortage','silver'],
      [3,'Corruption','eunuch corruption'], [3,'High taxes','taxes'], [3,'Little Ice Age','cold weather','climate'], [3,'Weak emperors','weak rulers'],
      [4,'Cost of the Korea war against Japan','imjin war','korea war'], [4,'Epidemics','disease'], [4,'Inflation'], [5,'Wu Sangui opened the pass','wu sangui'], [5,'Factional fights','donglin'] ] },

    { p: 'Name an official or bureaucrat who helped run an empire, 1450 to 1750.', u: 3, a: [
      [1,'Viceroys','viceroy'], [2,'Scholar-officials','mandarins','scholar gentry'], [2,'Viziers','vizier','grand vizier'], [2,'Zamindars','zamindar'], [2,'Intendants'],
      [3,'Eunuchs'], [3,'Mansabdars','mansabdar'], [3,'Boyars','boyar'], [3,'Daimyo'], [3,'Pashas','pasha'], [4,'Corregidors','corregidores','corregidor'],
      [4,'Ghulams'], [4,'Governors'], [4,'Tax collectors'], [5,'Beylerbeys','beylerbey'], [5,'Kuraka','curaca'], [5,'Bakufu officials','bakufu'] ] },

    { p: 'Name something from Japan’s contact with Europeans, 1543 to 1750.', u: 3, a: [
      [1,'Guns','firearms','muskets'], [1,'Christianity','christians'], [2,'Francis Xavier','xavier'], [2,'Nagasaki'], [2,'Sakoku','closed country'],
      [2,'Dejima','deshima'], [3,'Portuguese traders','portuguese'], [3,'Dutch traders','dutch'], [3,'Expelling missionaries','missionaries banned'],
      [3,'Shimabara Rebellion','shimabara'], [4,'Tanegashima','tanegashima guns'], [4,'Dutch learning','rangaku'], [4,'Martyrs of Nagasaki','twenty six martyrs'],
      [5,'Nanban art','nanban'], [5,'Trampling images','fumie'], [5,'William Adams','miura anjin'] ] },

    { p: 'Name an art form or style from 1450 to 1750.', u: 3, a: [
      [1,'Miniature painting','miniatures'], [1,'Renaissance painting','renaissance art'], [2,'Calligraphy'], [2,'Baroque'], [2,'Blue and white porcelain','porcelain'],
      [2,'Persian carpets','carpets'], [3,'Kabuki'], [3,'Iznik tiles','iznik'], [3,'Benin bronzes','bronzes'], [3,'Ukiyo-e','woodblock prints'], [3,'Mughal gardens','gardens'],
      [4,'Oil painting'], [4,'Frescoes','fresco'], [4,'Noh theater','noh'], [4,'Delftware','delft'], [4,'Opera'], [5,'Casta paintings'], [5,'Mannerism'], [5,'Rococo'], [5,'Featherwork'] ] },

    { p: 'Name a treaty, edict, or peace agreement, 1450 to 1750.', u: 3, a: [
      [1,'Treaty of Tordesillas','tordesillas'], [2,'Peace of Westphalia','westphalia'], [2,'Edict of Nantes'], [2,'Peace of Augsburg'], [3,'Treaty of Nerchinsk','nerchinsk'],
      [3,'Treaty of Utrecht','utrecht'], [3,'English Bill of Rights','bill of rights'], [3,'Treaty of Zaragoza','zaragoza','saragossa'], [4,'Treaty of Karlowitz','karlowitz'],
      [4,'Treaty of Amasya','amasya'], [4,'Treaty of Zuhab','zuhab'], [4,'Edict of Toleration (1692)','edict of toleration'], [4,'Inter caetera','papal bull'],
      [5,'Act of Toleration'], [5,'Treaty of Passarowitz'], [5,'Treaty of Nystad'], [5,'Treaty of Alcacovas'] ] },

    { p: 'Name a change in Europe caused by overseas empires, 1450 to 1750.', u: 4, a: [
      [1,'More wealth','wealth','riches'], [1,'New foods','potatoes','maize'], [2,'Inflation','price revolution'], [2,'Mercantilism'], [2,'Joint-stock companies','joint stock'],
      [2,'Population growth'], [3,'Coffeehouses','coffee culture'], [3,'Sugar in the diet','sugar'], [3,'Wars over colonies','colonial wars','rivalry'], [3,'Rise of Atlantic ports','atlantic ports'],
      [3,'Banking','stock exchanges'], [4,'Rise of the merchant class','merchants','middle class'], [4,'Tobacco smoking','tobacco'], [4,'Spain’s decline','spanish decline'],
      [5,'Consumer revolution'], [5,'Insurance','lloyds'] ] },

    { p: 'Name a colonial city in Spanish or Portuguese America.', u: 4, a: [
      [1,'Mexico City'], [1,'Lima'], [2,'Havana'], [2,'Potosi'], [2,'Buenos Aires'], [2,'Rio de Janeiro'], [3,'Cartagena'], [3,'Bogota'], [3,'Quito'], [3,'Salvador','bahia'],
      [3,'Veracruz'], [3,'Santo Domingo'], [3,'Cuzco'], [3,'St. Augustine','saint augustine'], [4,'Puebla'], [4,'Acapulco'], [4,'Panama City','panama'], [4,'Santiago'],
      [4,'Caracas'], [4,'Recife'], [4,'San Juan'], [5,'Asuncion'], [5,'Ouro Preto'], [5,'Guanajuato'], [5,'Zacatecas'], [5,'Santa Fe'] ] },

    { p: 'Name a title for a Muslim ruler, scholar, or official.', u: 1, a: [
      [1,'Sultan'], [1,'Caliph'], [2,'Shah'], [2,'Imam'], [2,'Vizier','grand vizier'], [2,'Ulama','ulema'], [3,'Emir','amir'], [3,'Pasha'], [3,'Qadi','kadi','judge'],
      [3,'Mufti'], [3,'Sheikh','shaykh'], [4,'Mullah'], [4,'Bey'], [4,'Padishah'], [4,'Nawab'], [4,'Khedive'], [5,'Mansa'], [5,'Askia'], [5,'Ayatollah'], [5,'Mirza'] ] },

    { p: 'Name a capital city, 1200 to 1450.', u: 1, a: [
      [1,'Constantinople'], [1,'Baghdad'], [1,'Tenochtitlan'], [2,'Cairo'], [2,'Cuzco'], [2,'Delhi'], [2,'Hangzhou'], [2,'Karakorum'], [2,'Beijing','dadu','khanbaliq'],
      [3,'Kaifeng'], [3,'Paris'], [3,'London'], [3,'Kyoto'], [3,'Samarkand'], [3,'Angkor'], [3,'Niani'], [3,'Moscow'], [4,'Sarai'], [4,'Tabriz'], [4,'Kamakura'],
      [4,'Gao'], [4,'Nanjing'], [4,'Great Zimbabwe'], [4,'Granada'], [5,'Majapahit','trowulan'], [5,'Gondar'], [5,'Vijayanagara','hampi'], [5,'Chan Chan'] ] },

    { p: 'Name an empire that collected tribute from others, 1200 to 1750.', u: 2, a: [
      [1,'Aztec Empire','aztecs','mexica'], [1,'Mongol Empire','mongols'], [2,'Ming dynasty','ming'], [2,'Qing dynasty','qing'], [2,'Golden Horde'], [2,'Inca Empire','inca'],
      [3,'Yuan dynasty','yuan'], [3,'Ottoman Empire','ottomans'], [3,'Mali'], [3,'Song (paid tribute to the Jin)','jin','song'], [4,'Vijayanagara'], [4,'Majapahit'],
      [4,'Spanish Empire','spain'], [4,'Chagatai Khanate'], [5,'Benin'], [5,'Kanem-Bornu','kanem'], [5,'Srivijaya'], [5,'Ayutthaya','siam'] ] },

    { p: 'Name a person, place, or thing tied to Ethiopia, 1200 to 1750.', u: 1, a: [
      [1,'Christianity','ethiopian orthodox church','coptic christianity'], [2,'Lalibela','rock hewn churches'], [2,'Aksum','axum'], [3,'Ge’ez','geez'], [3,'Coffee'],
      [3,'Solomonic dynasty','solomonic'], [3,'Kebra Nagast'], [3,'Prester John','prester john legend'], [4,'Zara Yaqob','zara yaqob'], [4,'Gondar'],
      [4,'Portuguese help against Adal','portuguese','adal sultanate'], [4,'Emperor','negus'], [5,'Ahmad Gran'], [5,'Fasil Ghebbi'], [5,'Amda Seyon'] ] },

    { p: 'Name an African art form or treasure, 1200 to 1750.', u: 4, a: [
      [1,'Benin bronzes','bronzes'], [2,'Ivory carvings','ivory masks','ivory'], [2,'Kente cloth','kente'], [2,'Masks','mask'], [3,'Ife heads','ife bronzes'],
      [3,'Golden Stool'], [3,'Asante gold weights','gold weights'], [3,'Zimbabwe Bird','soapstone birds'], [3,'Mud brick mosques','djenne mosque'], [4,'Rock-hewn churches','lalibela'],
      [4,'Griot epics','epic of sundiata'], [4,'Timbuktu manuscripts','manuscripts'], [5,'Mapungubwe golden rhino','golden rhino'], [5,'Kuba textiles','kuba cloth'], [5,'Nkisi figures','nkisi'] ] },

    { p: 'Name a person or place tied to the Maya after 900.', u: 1, a: [
      [1,'Chichen Itza'], [2,'Mayapan'], [2,'Yucatan'], [2,'Glyphs','hieroglyphs'], [2,'Calendar','maya calendar'], [3,'Tulum'], [3,'Uxmal'], [3,'Codices','dresden codex'],
      [3,'Popol Vuh'], [3,'Ball game'], [4,'Kukulcan','el castillo'], [4,'Guatemala'], [4,'Cacao'], [4,'K’iche’ Maya','kiche','quiche'], [5,'Tayasal'], [5,'Diego de Landa','landa'], [5,'Cocom'] ] },

    { p: 'Name a woman who held power or fame, 1000 to 1450.', u: 1, a: [
      [1,'Joan of Arc'], [2,'Razia Sultana','razia'], [2,'Eleanor of Aquitaine','eleanor'], [3,'Christine de Pizan','pizan'], [3,'Margery Kempe','kempe'],
      [3,'Murasaki Shikibu','lady murasaki','murasaki'], [3,'Hildegard of Bingen','hildegard'], [4,'Sorghaghtani Beki','sorghaghtani'], [4,'Khutulun'], [4,'Queen Tamar','tamar of georgia'],
      [4,'Anna Komnene','anna comnena'], [4,'Hojo Masako','masako'], [4,'Li Qingzhao'], [5,'Shajar al-Durr','shajar al durr'], [5,'Empress Matilda','matilda'], [5,'Margaret I of Denmark','margaret i'] ] }
,
    { p: 'Name a city in China, 1200 to 1450.', u: 1, a: [
      [1,'Beijing','dadu','khanbaliq'], [2,'Hangzhou'], [2,'Nanjing'], [2,'Kaifeng'], [3,'Quanzhou'], [3,'Guangzhou','canton'], [3,'Xi’an','xian','changan'],
      [4,'Yangzhou'], [4,'Suzhou'], [4,'Kashgar'], [4,'Dunhuang'], [5,'Fuzhou'], [5,'Ningbo'], [5,'Shangdu','xanadu'], [5,'Chengdu'] ] },

    { p: 'Name something that moved on Indian Ocean routes besides trade goods.', u: 2, a: [
      [1,'Islam'], [2,'Buddhism'], [2,'Hinduism'], [2,'Merchants','traders'], [2,'Swahili language','swahili'], [3,'Sailors'], [3,'Ideas'], [3,'Technology','lateen sail'],
      [3,'Enslaved people','slaves'], [3,'Crops','bananas'], [4,'Sufis','sufi missionaries'], [4,'Scholars'], [4,'Architecture','mosque styles'], [4,'Arabic script','arabic'],
      [5,'Diseases','disease'], [5,'Chinese envoys','zheng he'] ] },

    { p: 'Name a way Song China’s economy grew, 960 to 1279.', u: 1, a: [
      [1,'Champa rice'], [2,'Grand Canal'], [2,'Paper money'], [2,'Trade','more trade'], [2,'Porcelain exports','porcelain'], [3,'Iron and steel','iron production'],
      [3,'Cities grew','urbanization'], [3,'Junks','ocean trade'], [3,'Merchants','merchant class'], [4,'Proto-industrialization','proto industrialization'],
      [4,'Flying cash'], [4,'Silk production','silk'], [4,'Coal','coal mining'], [5,'Market towns'], [5,'Tea trade','tea'] ] },

    { p: 'Name a Japanese unifier, shogun, or warlord, 1200 to 1750.', u: 3, a: [
      [1,'Tokugawa Ieyasu','ieyasu','tokugawa'], [2,'Oda Nobunaga','nobunaga'], [2,'Toyotomi Hideyoshi','hideyoshi'], [3,'Minamoto Yoritomo','yoritomo'],
      [3,'Ashikaga Takauji','takauji'], [3,'Tokugawa Iemitsu','iemitsu'], [4,'Takeda Shingen','shingen'], [4,'Uesugi Kenshin','kenshin'], [4,'Tokugawa Yoshimune','yoshimune'],
      [4,'Ashikaga Yoshimitsu','yoshimitsu'], [5,'Hojo Tokimune','tokimune'], [5,'Date Masamune','masamune'], [5,'Tokugawa Tsunayoshi','tsunayoshi'] ] },

    { p: 'Name a good that moved across the Pacific on the Manila galleons.', u: 4, a: [
      [1,'Silver'], [1,'Silk'], [1,'Porcelain'], [2,'Spices','spice'], [3,'Lacquerware','lacquer'], [3,'Ivory'], [3,'Cotton cloth','cotton','textiles'], [3,'Gold'],
      [4,'Jade'], [4,'Tea'], [4,'Cochineal'], [4,'Furniture','screens'], [5,'Fans'], [5,'Cacao','chocolate'], [5,'Mangoes'] ] },

    { p: 'Name a religion that blended with another (syncretism), 1200 to 1750.', u: 4, a: [
      [1,'Vodun','vodou','voodoo'], [1,'Santeria'], [2,'Sikhism'], [2,'Our Lady of Guadalupe','guadalupe'], [2,'Din-i Ilahi'], [3,'Candomble'], [3,'Day of the Dead','dia de los muertos'],
      [3,'Sufism','sufis'], [3,'Bhakti','bhakti movement'], [3,'Neo-Confucianism'], [4,'Andean Catholicism','christianity with andean beliefs'], [4,'Chan Buddhism','zen'],
      [4,'Shinto and Buddhism together','shinbutsu shugo'], [5,'Kimpa Vita’s Antonian movement','antonian movement'], [5,'Obeah'] ] },

    { p: 'Name a person or group that defended or resisted the Mongols.', u: 2, a: [
      [1,'Mamluks','mamluk sultanate'], [1,'Japan','japanese','samurai'], [2,'Delhi Sultanate','delhi'], [2,'Song China','song'], [2,'Vietnam','dai viet','tran dynasty'],
      [3,'Battle of Ain Jalut','ain jalut'], [3,'Kamikaze winds','kamikaze'], [3,'Baybars'], [3,'Alauddin Khalji','khalji'], [4,'Tran Hung Dao'], [4,'Java','majapahit'],
      [4,'Alexander Nevsky','nevsky'], [4,'Hojo Tokimune','tokimune'], [5,'Qutuz'], [5,'Dmitry Donskoy','donskoy'] ] },

    { p: 'Name a building or institution of the Catholic Counter-Reformation.', u: 3, a: [
      [1,'Jesuits','society of jesus'], [1,'Council of Trent'], [2,'Inquisition','roman inquisition','spanish inquisition'], [2,'St. Peter’s Basilica','st peters'],
      [3,'Index of Forbidden Books','index'], [3,'Seminaries','seminary'], [3,'Missions','missionaries'], [3,'Baroque churches','baroque'], [4,'Ursulines'],
      [4,'Capuchins'], [4,'Il Gesu','church of the gesu'], [5,'Theatines'], [5,'Congregation for the Propagation of the Faith','propaganda fide'] ] },

    { p: 'Name a European city or region in Asia or Africa that changed hands, 1450 to 1750.', u: 4, a: [
      [1,'Malacca'], [2,'Hormuz'], [2,'Ceylon','sri lanka'], [2,'Goa'], [2,'Mombasa'], [3,'Taiwan','formosa'], [3,'Elmina'], [3,'Cape Colony','cape town'], [3,'Luanda'],
      [3,'Bombay'], [4,'Muscat'], [4,'Spice Islands','moluccas'], [4,'Banda Islands'], [4,'Calcutta'], [5,'Tangier'], [5,'Fort Zeelandia'], [5,'Sao Jorge da Mina'] ] },

    { p: 'Name a dye or color traded between 1200 and 1750.', u: 4, a: [
      [1,'Indigo'], [2,'Cochineal'], [3,'Saffron'], [3,'Brazilwood'], [3,'Tyrian purple','purple'], [3,'Madder'], [4,'Logwood'], [4,'Ultramarine','lapis lazuli'],
      [4,'Kermes'], [5,'Woad'], [5,'Henna'], [5,'Turmeric'], [5,'Annatto'] ] },

    { p: 'Name a ruler who changed his realm’s religion or converted, 1200 to 1750.', u: 3, a: [
      [1,'Henry VIII'], [2,'Shah Ismail','ismail'], [2,'Afonso I of Kongo','afonso i'], [3,'Ghazan Khan','ghazan'], [3,'Ozbeg Khan','ozbeg'], [3,'Akbar'],
      [4,'Henry IV of France','henri iv'], [4,'Berke Khan','berke'], [4,'Altan Khan'], [4,'Parameswara','sultan of malacca'], [5,'Gustav Vasa'], [5,'Elizabeth I'],
      [5,'Christian III of Denmark'] ] },

    { p: 'Name a tool of absolutism used by a European monarch.', u: 3, a: [
      [1,'Divine right','divine right of kings'], [1,'Palace of Versailles','versailles'], [2,'Standing army','army'], [2,'Bureaucracy'], [2,'Intendants'],
      [3,'Mercantilism'], [3,'State church','state religion'], [3,'Taxes','taxation'], [3,'Not calling the Estates-General','no parliament'], [4,'Court etiquette'],
      [4,'Censorship'], [4,'Secret police','oprichnina'], [5,'Lettres de cachet'], [5,'Royal academies'] ] }
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
,
    // ---- added 2026-11-12 for the day-by-day calendar ----
    [ { t:'Five Pillars of Islam', w:['Shahada','Salat','Zakat','Hajj'], lv:1 },
      { t:'Hindu ideas', w:['Karma','Dharma','Moksha','Vedas'], lv:2 },
      { t:'Buddhist ideas', w:['Nirvana','Four Noble Truths','Bodhisattva','Eightfold Path'], lv:3 },
      { t:'Confucian ideas', w:['Filial piety','Analects','Five relationships','Ancestor veneration'], lv:4 } ],

    [ { t:'Aztec gods', w:['Huitzilopochtli','Quetzalcoatl','Tlaloc','Tezcatlipoca'], lv:1 },
      { t:'Inca words', w:['Sapa Inca','Chasqui','Ayllu','Quechua'], lv:2 },
      { t:'Maya sites', w:['Chichen Itza','Tikal','Mayapan','Uxmal'], lv:3 },
      { t:'North American peoples and places', w:['Cahokia','Haudenosaunee','Ancestral Puebloans','Hohokam'], lv:4 } ],

    [ { t:'Mongol leaders', w:['Genghis Khan','Ogedei','Hulagu','Batu'], lv:1 },
      { t:'Mongol tools of rule', w:['Yam','Paiza','Yassa','Census'], lv:2 },
      { t:'Places the Mongols sacked', w:['Baghdad','Kiev','Bukhara','Merv'], lv:3 },
      { t:'Beat back the Mongols', w:['Ain Jalut','Kamikaze','Dai Viet','Delhi Sultanate'], lv:4 } ],

    [ { t:'Ottoman sultans', w:['Osman','Mehmed II','Selim I','Suleiman'], lv:1 },
      { t:'Mughal emperors', w:['Babur','Akbar','Shah Jahan','Aurangzeb'], lv:2 },
      { t:'Safavid shahs', w:['Ismail','Tahmasp','Abbas I','Safi'], lv:3 },
      { t:'Qing emperors', w:['Kangxi','Yongzheng','Qianlong','Shunzhi'], lv:4 } ],

    [ { t:'Spanish conquistadors', w:['Cortés','Pizarro','Alvarado','Almagro'], lv:1 },
      { t:'Rulers the Spanish met', w:['Moctezuma','Atahualpa','Cuauhtemoc','Huascar'], lv:2 },
      { t:'Helped the Spanish win', w:['Smallpox','Horses','Tlaxcalans','Steel'], lv:3 },
      { t:'Critics or resisters of Spanish rule', w:['Las Casas','Montesinos','Guaman Poma','Tupac Amaru'], lv:4 } ],

    [ { t:'Atlantic slave trade', w:['Middle Passage','Elmina','Ouidah','Asiento'], lv:1 },
      { t:'Resistance by the enslaved', w:['Maroons','Palmares','Nanny','Work slowdowns'], lv:2 },
      { t:'African states that sold captives', w:['Dahomey','Asante','Oyo','Imbangala'], lv:3 },
      { t:'Goods Europeans traded in Africa', w:['Guns','Rum','Cowries','Manillas'], lv:4 } ],

    [ { t:'Chinese dynasties', w:['Song','Yuan','Ming','Qing'], lv:1 },
      { t:'Eras of Japanese history', w:['Kamakura','Muromachi','Sengoku','Edo'], lv:2 },
      { t:'Korean kingdoms and dynasties', w:['Goryeo','Joseon','Silla','Baekje'], lv:3 },
      { t:'Vietnamese dynasties', w:['Ly','Tran','Le','Nguyen'], lv:4 } ],

    [ { t:'Protestant churches', w:['Lutheran','Calvinist','Anglican','Presbyterian'], lv:1 },
      { t:'Catholic orders', w:['Jesuits','Franciscans','Dominicans','Ursulines'], lv:2 },
      { t:'Groups within Islam', w:['Sunni','Shia','Sufi','Ismaili'], lv:3 },
      { t:'Branches of Buddhism', w:['Theravada','Mahayana','Zen','Tibetan'], lv:4 } ],

    [ { t:'Explorers who sailed for Spain', w:['Balboa','de Soto','Ponce de León','Elcano'], lv:1 },
      { t:'Explorers who sailed for the Dutch', w:['Tasman','Hudson','Barentsz','Schouten'], lv:2 },
      { t:'Columbus’s first voyage', w:['Niña','Pinta','Santa María','Hispaniola'], lv:3 },
      { t:'Ships of Magellan', w:['Victoria','Trinidad','Concepción','San Antonio'], lv:4 } ],

    [ { t:'Swahili Coast cities', w:['Kilwa','Mombasa','Malindi','Zanzibar'], lv:1 },
      { t:'Trans-Saharan cities', w:['Timbuktu','Gao','Djenne','Sijilmasa'], lv:2 },
      { t:'Silk Road cities', w:['Samarkand','Merv','Dunhuang','Kashgar'], lv:3 },
      { t:'Hanseatic League cities', w:['Lübeck','Hamburg','Danzig','Riga'], lv:4 } ],

    [ { t:'Mercantilism', w:['Tariffs','Bullion','Navigation Acts','Colonies'], lv:1 },
      { t:'Joint-stock companies', w:['VOC','Royal African Company','Virginia Company','Muscovy Company'], lv:2 },
      { t:'Spanish silver', w:['Potosí','Mit’a','Acapulco','Pieces of eight'], lv:3 },
      { t:'Effects of silver in Asia', w:['Single Whip tax','Ming inflation','Manila','Chinese silk exports'], lv:4 } ],

    [ { t:'European absolute monarchs', w:['Louis XIV','Philip II','Peter the Great','Frederick the Great'], lv:1 },
      { t:'Rulers of England', w:['Henry VIII','Elizabeth I','James I','William III'], lv:2 },
      { t:'Women rulers', w:['Isabella I','Catherine the Great','Nzinga','Maria Theresa'], lv:3 },
      { t:'New capitals and royal seats', w:['St. Petersburg','Fatehpur Sikri','Isfahan','Versailles'], lv:4 } ],

    [ { t:'Ways rulers showed legitimacy', w:['Divine right','Mandate of Heaven','Coronation','Monuments'], lv:1 },
      { t:'Ways rulers controlled elites', w:['Devshirme','Sankin kotai','Table of Ranks','Intendants'], lv:2 },
      { t:'Ways rulers collected money', w:['Jizya','Zamindars','Tax farming','Tribute'], lv:3 },
      { t:'Ways rulers dealt with diversity', w:['Millet','Din-i Ilahi','Edict of Nantes','Ibadat Khana'], lv:4 } ],

    [ { t:'Crops from the Americas', w:['Potatoes','Maize','Cassava','Tomatoes'], lv:1 },
      { t:'Animals from Europe', w:['Horses','Cattle','Pigs','Sheep'], lv:2 },
      { t:'Diseases to the Americas', w:['Smallpox','Measles','Influenza','Typhus'], lv:3 },
      { t:'Crops from Africa or Asia to the Americas', w:['Rice','Coffee','Bananas','Sugarcane'], lv:4 } ],

    [ { t:'Inventions of Song China', w:['Movable type','Fire lance','Flying cash','Compass'], lv:1 },
      { t:'Islamic world advances', w:['Algebra','Astrolabe','Optics','Canon of Medicine'], lv:2 },
      { t:'Crossing the Sahara', w:['Camel','Camel saddle','Caravan','Oasis'], lv:3 },
      { t:'Ways to cross the Indian Ocean', w:['Dhow','Monsoon','Lateen sail','Junk'], lv:4 } ],

    [ { t:'Japan under the Tokugawa', w:['Sakoku','Dejima','Daimyo','Edo'], lv:1 },
      { t:'Russia under the tsars', w:['Boyars','Cossacks','Siberia','Serfs'], lv:2 },
      { t:'Persia under the Safavids', w:['Qizilbash','Isfahan','Twelver Shia','Ghulams'], lv:3 },
      { t:'India under the Mughals', w:['Mansabdars','Zamindars','Rajputs','Red Fort'], lv:4 } ],

    [ { t:'Things on a European manor', w:['Serf','Lord','Mill','Strip fields'], lv:1 },
      { t:'Medieval Church', w:['Pope','Tithe','Monastery','Excommunication'], lv:2 },
      { t:'Late medieval crises', w:['Black Death','Hundred Years’ War','Great Schism','Peasant revolts'], lv:3 },
      { t:'Italian city-states', w:['Venice','Genoa','Florence','Milan'], lv:4 } ],

    [ { t:'Gunpowder weapons', w:['Cannon','Musket','Arquebus','Bombard'], lv:1 },
      { t:'Famous sieges', w:['Constantinople','Vienna','Tenochtitlan','Malacca'], lv:2 },
      { t:'Famous battles', w:['Chaldiran','Panipat','Lepanto','Sekigahara'], lv:3 },
      { t:'Elite soldiers', w:['Janissaries','Samurai','Qizilbash','Bannermen'], lv:4 } ],

    [ { t:'Explorers of Africa’s coast', w:['Dias','Henry the Navigator','Cão','Gil Eanes'], lv:1 },
      { t:'Portuguese trading posts', w:['Goa','Macau','Hormuz','Luanda'], lv:2 },
      { t:'Dutch trading posts', w:['Batavia','Cape Town','Dejima','New Amsterdam'], lv:3 },
      { t:'English colonies and posts', w:['Madras','Bombay','Calcutta','Jamestown'], lv:4 } ],

    [ { t:'Religious founders and reformers', w:['Guru Nanak','Martin Luther','John Calvin','Zhu Xi'], lv:1 },
      { t:'Famous travelers', w:['Ibn Battuta','Marco Polo','Rabban Sauma','Zheng He'], lv:2 },
      { t:'Islamic scholars', w:['Ibn Khaldun','Ibn Sina','Al-Ghazali','Rumi'], lv:3 },
      { t:'Missionaries in Asia', w:['Matteo Ricci','Francis Xavier','Adam Schall','Roberto de Nobili'], lv:4 } ],

    [ { t:'Mughal India', w:['Agra','Delhi','Lahore','Shah Jahan'], lv:1 },
      { t:'Ottoman buildings', w:['Topkapi','Suleymaniye','Blue Mosque','Sublime Porte'], lv:2 },
      { t:'Chinese landmarks', w:['Forbidden City','Great Wall','Temple of Heaven','Grand Canal'], lv:3 },
      { t:'European palaces', w:['Versailles','El Escorial','Peterhof','Hampton Court'], lv:4 } ],

    [ { t:'Spanish colonial society', w:['Peninsulares','Creoles','Mestizos','Zambos'], lv:1 },
      { t:'Spanish colonial government', w:['Viceroy','Audiencia','Council of the Indies','Corregidor'], lv:2 },
      { t:'Colonial labor', w:['Encomienda','Hacienda','Mit’a','Repartimiento'], lv:3 },
      { t:'Cities of New Spain and Peru', w:['Mexico City','Lima','Manila','Potosí'], lv:4 } ],

    [ { t:'Sikhism', w:['Guru Nanak','Khalsa','Golden Temple','Langar'], lv:1 },
      { t:'Bhakti', w:['Kabir','Mirabai','Devotion','Krishna'], lv:2 },
      { t:'Sufism', w:['Rumi','Dervishes','Chishti','Dhikr'], lv:3 },
      { t:'Neo-Confucianism', w:['Zhu Xi','Wang Yangming','Civil service exam','Li'], lv:4 } ],

    [ { t:'African states, 1200 to 1450', w:['Mali','Great Zimbabwe','Ethiopia','Kilwa'], lv:1 },
      { t:'African states, 1450 to 1750', w:['Songhai','Kongo','Ndongo','Asante'], lv:2 },
      { t:'Rulers of Mali or Songhai', w:['Sundiata','Mansa Musa','Sunni Ali','Askia Muhammad'], lv:3 },
      { t:'Ethiopia', w:['Lalibela','Ge’ez','Solomonic dynasty','Prester John'], lv:4 } ],

    [ { t:'Fur trade', w:['Beaver','Coureurs des bois','Huron','Hudson’s Bay'], lv:1 },
      { t:'New France', w:['Quebec','Champlain','Montreal','Louisiana'], lv:2 },
      { t:'English colonies', w:['Virginia','Plymouth','Massachusetts Bay','Pennsylvania'], lv:3 },
      { t:'Native leaders who met the English', w:['Powhatan','Pocahontas','Metacom','Massasoit'], lv:4 } ],

    [ { t:'Treaties', w:['Tordesillas','Westphalia','Nerchinsk','Utrecht'], lv:1 },
      { t:'Religious wars and massacres', w:['Thirty Years’ War','St. Bartholomew’s Day','Schmalkaldic War','Eighty Years’ War'], lv:2 },
      { t:'Revolts against rulers', w:['Fronde','Pugachev','Shimabara','Celali'], lv:3 },
      { t:'English political revolution', w:['Civil War','Cromwell','Glorious Revolution','Bill of Rights'], lv:4 } ],

    [ { t:'Ottoman people and groups', w:['Janissaries','Grand vizier','Sipahis','Ulama'], lv:1 },
      { t:'Women of Ottoman and Mughal courts', w:['Hurrem','Kösem','Nur Jahan','Mumtaz Mahal'], lv:2 },
      { t:'Ottoman lands taken by 1566', w:['Egypt','Hungary','Syria','Iraq'], lv:3 },
      { t:'Rivals of the Ottomans', w:['Safavids','Habsburgs','Venice','Russia'], lv:4 } ],

    [ { t:'Southeast Asian states', w:['Khmer','Majapahit','Srivijaya','Ayutthaya'], lv:1 },
      { t:'Southeast Asian ports', w:['Malacca','Batavia','Manila','Aceh'], lv:2 },
      { t:'Spices', w:['Pepper','Cloves','Nutmeg','Cinnamon'], lv:3 },
      { t:'Spice Islands and nearby', w:['Banda','Ternate','Tidore','Ambon'], lv:4 } ]
  ],

  // Tivin Word answers: 5 letters only. [WORD, unit, clue, after]
  words: [
    ['AZTEC', 1, 'Empire with its capital at Tenochtitlan', 'The Mexica built the Aztec Empire on tribute from conquered peoples.'],
    ['CAMEL', 2, 'Animal that made trans-Saharan trade possible', 'The camel saddle let traders cross the Sahara in large caravans.'],
    ['AKBAR', 3, 'Mughal emperor known for religious tolerance', 'Akbar ended the jizya and welcomed scholars of many faiths.'],
    ['SUGAR', 4, 'Cash crop that drove the Atlantic slave trade', 'Sugar plantations in Brazil and the Caribbean used enslaved labor.'],
    ['QUIPU', 1, 'Knotted cords the Inca used to keep records', 'Inca officials recorded taxes, labor and census counts on quipus.'],
    ['HORDE', 2, 'The Golden ___: Mongol khanate in Russia', 'The Golden Horde collected tribute from Russian princes.'],
    ['JIZYA', 3, 'Tax on non-Muslims', 'Akbar ended the jizya; Aurangzeb brought it back.'],
    ['MAIZE', 4, 'American crop that spread to Africa and China', 'Maize helped populations grow across Afro-Eurasia.'],
    ['KHMER', 1, 'Southeast Asian empire that built Angkor Wat', 'The Khmer Empire mixed Hindu and Buddhist traditions.'],
    ['OASIS', 2, 'Watered stop on a desert trade route', 'Oasis towns grew rich supplying Silk Road caravans.'],
    ['SUNNI', 3, 'Largest branch of Islam, followed by the Ottomans', 'The Sunni Ottomans fought the Shia Safavids.'],
    ['HORSE', 4, 'Animal that changed life on the Great Plains', 'Horses arrived in the Americas with the Spanish.'],
    ['CASTE', 1, 'South Asian social hierarchy tied to birth', 'The caste system shaped work and marriage in Hindu society.'],
    ['GRIOT', 2, 'West African keeper of oral history', 'Griots kept the story of Sundiata and the founding of Mali.'],
    ['QUEUE', 3, 'Hairstyle the Qing forced on Han men', 'The queue showed loyalty to the Manchu Qing dynasty.'],
    ['CACAO', 4, 'Mesoamerican bean that became chocolate', 'Europeans sweetened cacao with plantation sugar.'],
    ['GUILD', 1, 'Association of craftsmen or merchants', 'Guilds set prices and quality standards in medieval towns.'],
    ['KILWA', 2, 'Swahili city-state that traded gold', 'Kilwa traded gold from Great Zimbabwe across the Indian Ocean.'],
    ['TRENT', 3, 'The Council of ___ answered the Reformation', 'The Council of Trent restated Catholic teaching, 1545 to 1563.'],
    ['CLOVE', 4, 'Spice from the Moluccas that the Dutch controlled', 'The VOC destroyed clove trees outside its own islands to keep prices high.'],
    ['MANOR', 1, 'Self-sufficient estate of a lord in feudal Europe', 'Serfs farmed the manor in return for the lord’s protection.'],
    ['PAPER', 2, 'Chinese invention that spread west along trade routes', 'Papermaking reached the Islamic world in the 700s.'],
    ['BOYAR', 3, 'Russian noble', 'Peter the Great made boyars shave their beards and serve the state.'],
    ['DUTCH', 4, 'Nationality of the VOC', 'The Dutch East India Company was the first joint-stock company to sell shares.'],
    ['MANSA', 1, 'Title of the kings of Mali', 'Mansa Musa’s hajj in 1324 showed Mali’s gold to the world.'],
    ['SPICE', 2, 'Pepper, cloves, or nutmeg from the Indian Ocean world', 'The spice trade drew Europeans into the Indian Ocean.'],
    ['LOUIS', 3, 'French king who built Versailles', 'Louis XIV kept nobles at Versailles to watch over them.'],
    ['KONGO', 4, 'Central African kingdom whose king became Catholic', 'Afonso I of Kongo protested the Portuguese slave trade.'],
    ['TITHE', 1, 'A tenth of income paid to the Church', 'Tithes made the Church one of the richest powers in medieval Europe.'],
    ['TIMUR', 2, 'Turkic conqueror of the late 1300s, also called Tamerlane', 'Timur sacked Delhi in 1398 and built up Samarkand.'],
    ['OSMAN', 3, 'Founder of the Ottoman dynasty', 'The Ottoman Empire takes its name from Osman.'],
    ['TAINO', 4, 'Caribbean people Columbus met in 1492', 'Disease and forced labor destroyed most of the Taino within decades.'],
    ['NOBLE', 1, 'Landholding elite in feudal Europe and Japan', 'Nobles owed military service to the king in return for land.'],
    ['MECCA', 2, 'Holy city every Muslim faces in prayer', 'The hajj to Mecca brought pilgrims together from across Afro-Eurasia.'],
    ['NANAK', 3, 'Guru who founded Sikhism', 'Guru Nanak taught one God and equality, drawing on Hindu and Muslim ideas.'],
    ['PRESS', 4, 'Gutenberg’s printing ___', 'The printing press spread maps, Bibles and new ideas across Europe.'],
    ['DELHI', 1, 'Capital of a Muslim sultanate in northern India', 'The Delhi Sultanate held off the Mongols in the 1200s.'],
    ['IVORY', 2, 'Elephant tusks traded from the Swahili Coast', 'East African ivory went to India, China and the Islamic world.'],
    ['CUZCO', 1, 'Capital of the Inca Empire', 'Roads from Cuzco tied the Inca Empire together.'],
    ['FLEET', 4, 'Spain sent its silver home in a treasure ___', 'Spanish treasure fleets carried American silver across the Atlantic.'],
    ['LLAMA', 1, 'Andean pack animal that carried Inca goods', 'Llamas carried loads on Inca roads and gave wool and meat.'],
    ['CABOT', 4, 'Explorer who sailed for England to Newfoundland in 1497', 'John Cabot, an Italian sailing for England, gave England a claim in North America.'],
    ['ANDES', 1, 'Mountains where the Inca farmed on terraces', 'Terraces and llamas let the Inca thrive in the Andes.'],
    ['BABUR', 3, 'Founder of the Mughal Empire', 'Babur used gunpowder weapons to win at Panipat in 1526.'],
    ['BENIN', 4, 'West African kingdom known for bronze sculptures', 'Benin traded with the Portuguese on its own terms.'],
    ['BANTU', 1, 'Language family that spread across sub-Saharan Africa', 'Swahili is a Bantu language with many Arabic words.']
  ],
  // AP names a student might guess that are not in the dictionary
  extraWords: 'nanak cabot aztec quipu khmer mansa bantu hindu mayan cuzco andes taino kilwa griot timur mecca cairo akbar babur jizya sunni trent boyar louis delhi osman dutch benin kongo peter selim incas mayas sikhs shahs tsars czars khans yuans islam china japan korea'
};
