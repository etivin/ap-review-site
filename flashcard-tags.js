/* flashcard-tags.js: AP theme + region tags for every flashcard term, used by
   the Flashcard Hub (flashcards.html) for custom study. Keyed by the card's
   term text exactly as it appears in flashcard-data.js.

   Value format: "<themes> <regions>"
     themes  (AP course themes, one letter each):
       G = Governance            E = Economic Systems
       S = Social Interactions   C = Cultural Developments
       T = Technology            N = Humans & Environment
     regions (comma-separated):
       EA East Asia · SA South Asia · SEA Southeast Asia · ME Middle East
       AF Africa · EU Europe · AM Americas · CA Central Asia · GL Global
   A term with no row here still works; it just has only its topic tag. */
window.FC_TAGS = {
/* Unit 1 */
'Civil Service Exam':'GS EA','Scholar-gentry':'SG EA','Neo-Confucianism':'CS EA','Champa Rice':'NE EA,SEA',
'Grand Canal':'ET EA','Foot binding':'S EA','Tributary System':'GE EA',
'Abbasid Caliphate':'GC ME','House of Wisdom':'CT ME','Seljuk Turks':'G ME,CA','Mamluks':'GS ME',
'Delhi Sultanate':'G SA','Sufism':'C ME,SA','Jizya':'GC ME,SA',
'Bhakti Movement':'C SA','Vijayanagara Empire':'G SA','Srivijaya':'GE SEA','Majapahit':'GE SEA',
'Khmer Empire (Angkor)':'GC SEA','Urdu':'C SA',
'Maya':'GC AM','Tenochtitlan':'GN AM','Chinampas':'NT AM','Mit’a System':'GE AM','Quipu':'GT AM','Carpa Ñan':'GT AM',
'Mansa Musa':'GEC AF','Sundiata':'G AF','Swahili City-States':'EC AF','Great Zimbabwe':'GE AF','Griots':'C AF',
'Feudalism':'GS EU','Manorialism':'ES EU','Great Schism':'C EU','Black Death':'NS EU,ME,EA','Bourgeoisie':'SE EU','Magna Carta':'G EU',
/* Unit 2 */
'Silk Roads':'EC CA,EA,ME','Caravanserai':'ET CA,ME','Flying Cash':'ET EA','Money Economy':'E EA,EU',
'Samarkand':'EC CA','Kashgar':'E CA','Junk Ship':'TE EA',
'Genghis Khan':'G CA','Pax Mongolica':'GE CA,EA','Yuan Dynasty':'G EA','Il-Khanate':'G ME,CA','Golden Horde':'G CA,EU',
'Kublai Khan':'G EA','White Lotus Society':'GC EA',
'Monsoon Winds':'NT SA,SEA,AF','Lateen Sail':'T ME,EU','Astrolabe':'TC ME,EU','Stern Rudder':'T EA',
'Diasporic Communities':'SC SA,SEA,AF','Zheng He':'GT EA,SA,AF','Melaka (Malacca)':'EG SEA',
'Trans-Saharan Trade':'E AF','Camel Saddle':'TN AF','Mali Empire':'GE AF','Timbuktu':'CE AF',
'Ibn Battuta':'C AF,ME,SA','Marco Polo':'C EU,EA','Margery Kempe':'CS EU',
'Bubonic Plague':'NS GL','Bananas':'NE AF,SEA','Urbanization':'SN GL',
/* Unit 3 */
'Gunpowder Empires':'GT ME,SA','Ottoman Empire':'G ME,EU','Safavid Empire':'G ME','Mughal Empire':'G SA',
'Qing (Manchu) Dynasty':'G EA','Fall of Constantinople (1453)':'GT ME,EU','Battle of Chaldiran (1514)':'GC ME',
'Songhai Empire':'GE AF','Devshirme':'GS ME,EU','Janissaries':'G ME','Zamindars':'GE SA','Tax Farming':'GE ME,SA',
'Bureaucracy':'G GL','Salaried Samurai':'GS EA','Tribute System':'GE EA',
'Divine Right':'GC EU','Sunni-Shia Rivalry':'CG ME','Akbar':'GC SA','Aurangzeb':'GC SA','Sikhism':'C SA',
'Protestant Reformation':'CG EU','Catholic Counter-Reformation':'C EU','Art and Architecture as Legitimacy':'GC ME,SA,EU',
'Absolutism':'G EU','Methods of Legitimizing Power':'GC GL','Comparison of Land-Based Empires':'G ME,SA,EA',
/* Unit 4 */
'Caravel':'T EU','Magnetic Compass':'T EA,EU','Christopher Columbus':'GE EU,AM','Ferdinand Magellan':'T EU,GL',
'Treaty of Tordesillas (1494)':'G EU,AM','Motives for Exploration':'EGC EU',
'Columbian Exchange':'NE AM,EU,AF','Smallpox':'NS AM','Cash Crops':'EN AM','New World Crops':'NE AM,GL',
'Trading Post Empire':'EG AF,SA,SEA','Atlantic Slave Trade':'ES AF,AM','Middle Passage':'S AF,AM',
'Encomienda':'ES AM','Mit\'a / Coerced Labor':'ES AM','Mercantilism':'EG EU','Joint-Stock Company':'E EU',
'Silver Trade':'E AM,EA','Triangular Trade':'E AF,AM,EU',
'Indigenous Resistance':'GS AM','Maroon Communities':'S AM','Fronde':'G EU','Queen Nzinga':'G AF',
'Casta System':'S AM','Peninsulares':'S AM','Mestizo':'S AM','Syncretic Religions':'C AM,AF','New Global Economy':'E GL',
/* Unit 5 */
'The Enlightenment':'CG EU','John Locke':'CG EU','Natural Rights':'CG EU','Social Contract':'CG EU',
'American Revolution':'G AM','French Revolution':'GS EU','Haitian Revolution':'GS AM','Latin American Revolutions':'G AM',
'Nationalism':'GC GL','Unification of Germany and Italy':'G EU',
'Industrial Revolution':'TE EU','Why Britain First':'ENT EU','Agricultural Revolution':'NT EU',
'Industrialization Spreads':'ET GL','Meiji Restoration':'GTE EA','Steam Engine':'T EU','Second Industrial Revolution':'TE EU,AM',
'Laissez-faire':'E EU','Adam Smith':'EC EU','State-Sponsored Industrialization':'GE EA,EU',
'Capitalism':'E GL','Transnational Corporation':'E GL','Stock Market':'E EU,AM',
'Karl Marx':'CE EU','Communism / Marxism':'CEG EU','Labor Unions':'SE EU,AM','Utopian Socialism':'CS EU',
'Middle Class':'S EU','Tenements':'SN EU,AM','Global Economic Integration':'E GL',
/* Unit 6 */
'Social Darwinism':'CS EU','White Man\'s Burden':'C EU','Civilizing Mission':'CG EU,AF','Scientific Racism':'CS EU',
'Jules Ferry':'G EU,AF','Cecil Rhodes':'GE AF',
'Berlin Conference (1884–85)':'G EU,AF','Scramble for Africa':'G AF','Meiji Restoration (1868)':'GTE EA',
'Protectorate':'G GL','Sphere of Influence':'GE EA','Extraterritoriality':'G EA','Indirect Rule':'G AF,SA','Settler Colony':'GS AF',
'Indian Rebellion of 1857':'G SA','Battle of Adwa (1896)':'G AF','Zulu Wars (1879)':'G AF','Boxer Rebellion (1900)':'GC EA',
'Self-Strengthening Movement':'GT EA','Maji Maji Rebellion (1905–07)':'G AF','Accommodation':'G GL',
'Industrial Capitalism':'E EU','Free Trade Imperialism':'EG AM,EA','Railroad Imperialism':'ET AF,SA,AM',
'Monoculture':'EN AF,AM','Commodity Crops':'EN AF,AM','Export Enclave Economy':'E AM,AF',
'Opium Wars':'GE EA','Treaty of Nanjing (1842)':'G EA','Most-Favored Nation Status':'E EA','Unequal Treaties':'G EA',
'Gunboat Diplomacy':'G EA','Informal Empire':'GE GL','Lin Zexu':'G EA',
'Push Factors':'SN GL','Pull Factors':'SE GL','Indentured Servitude':'ES SA,EA,AM','Coolie Labor':'ES EA,SA',
'Chain Migration':'S GL','Great Famine (1845–52)':'NS EU','Chinese Exclusion Act (1882)':'GS AM,EA','Nativism':'SC AM',
'Diaspora':'SC GL','Cultural Syncretism':'C GL','Remittances':'E GL','New Imperialism':'GE GL','Formal vs. Informal Empire':'G GL',
/* Unit 7 */
'Qing Dynasty Decline':'G EA','Racial Equality Proposal (1919)':'GS EA','MAIN (WWI Causes)':'G EU',
'Triple Entente':'G EU','Assassination of Franz Ferdinand':'G EU','Treaty of Versailles (1919)':'G EU','Fourteen Points':'G AM,EU',
'Total War':'GT EU','Trench Warfare':'T EU','WWI Propaganda':'CG EU','Russian Revolution (1917)':'GS EU',
'Great Depression':'E GL','Keynesian Economics':'EG EU,AM','Five Year Plans':'EG EU','Economic Nationalism':'EG GL',
'Indian National Congress':'G SA','Salt March (1930)':'G SA','Ho Chi Minh':'G SEA','Mandate System':'G ME',
'Mustafa Kemal (Ataturk)':'GC ME','Fascism':'G EU','Appeasement':'G EU','Blitzkrieg':'T EU','Lebensraum':'G EU',
'Munich Agreement (1938)':'G EU','Atomic Bomb (1945)':'T EA,AM','Holocaust':'S EU','Stab-in-the-Back Legend':'CG EU',
'Armenian Genocide':'S ME','Khmer Rouge':'GS SEA','British Press Censorship (WWI)':'GC EU','Soviet Propaganda Posters':'CG EU',
'Total War Mobilization (WWII)':'GS GL','UNESCO Statement on Race (1949)':'CS GL',
/* Unit 8 */
'Truman Doctrine':'G AM,EU','Iron Curtain':'G EU','Yalta Conference':'G EU','Containment':'G GL','Marshall Plan':'EG EU,AM',
'Superpowers':'G GL','Non-Aligned Movement':'G SA,AF,SEA','Bandung Conference':'G SEA,AF,SA',
'NATO':'G EU,AM','Warsaw Pact':'G EU','Proxy War':'G GL','Korean War':'G EA',
'Great Leap Forward':'EG EA','Chinese Communist Revolution':'G EA','Land Redistribution':'ES EA,AM',
'Muslim League':'GC SA','Negotiated Independence':'G SA,AF','Armed Struggle for Independence':'G AF,SEA',
'Partition of India':'GS SA','Newly Independent States':'G AF,SA','State-Guided Economic Development':'EG SA,AF',
'Postcolonial Migration':'S GL','Nonviolent Resistance':'GC SA,AM','Military-Industrial Complex':'ET AM',
'Perestroika':'E EU','Glasnost':'GC EU','Soviet-Afghan War':'G CA,ME','Fall of the Soviet Union':'G EU',
/* Unit 9 */
'Globalization':'EC GL','Internet':'T GL','Communication Revolution':'T GL','Containerization':'TE GL','Air Travel':'T GL',
'Green Revolution':'NT SA,AM','Commercial Agriculture':'NE GL',
'Antibiotics':'T GL','Vaccines':'T GL','Eradication of Smallpox':'TN GL','HIV/AIDS':'NS AF','1918 Influenza Pandemic':'NS GL',
'Diseases of Poverty':'NS GL','Diseases of Longevity':'NS GL','Ebola':'NS AF','Life Expectancy':'NS GL',
'Climate Change':'N GL','Greenhouse Gases':'N GL','Deforestation':'N AM,SEA','Desertification':'N AF','Kyoto Protocol (1997)':'NG GL','Paris Agreement (2015)':'NG GL',
'Free-Market Economics':'E GL','Neoliberalism':'EG GL','Privatization':'E GL','Deng Xiaoping':'EG EA','Special Economic Zones':'E EA',
'Asian Tigers':'E EA','Knowledge Economy':'ET GL','Outsourcing':'E GL','Multinational Corporations':'E GL',
'Universal Declaration of Human Rights (1948)':'GS GL','Human Rights':'SG GL','Feminism':'S GL','Tiananmen Square (1989)':'G EA',
'Green Belt Movement':'NS AF','Environmental Movement':'NS GL','Anti-Apartheid Movement':'SG AF',
'Global Culture':'C GL','Consumerism':'CE GL','Bollywood':'C SA','K-pop':'C EA','Reggae':'C AM','Social Media':'CT GL','Global Sports':'C GL',
'Anti-Globalization Movement':'SE GL','Religious Fundamentalism':'C ME,GL','Terrorism':'G GL','World Social Forum':'S GL',
'World Trade Organization (WTO)':'EG GL','NAFTA':'E AM','European Union':'GE EU','ASEAN':'GE SEA','Mercosur':'E AM',
'International Monetary Fund (IMF)':'E GL','World Bank':'E GL','NGOs':'SG GL','Microfinance':'ES SA',
'Margaret Sanger':'ST AM','The Pill':'TS GL','ARPANET':'T AM','Polio Vaccine':'TN GL','Greenpeace':'NS GL',
'Chicago Boys':'EG AM','Production Economy':'E GL','USMCA':'E AM','Civil Rights Act of 1964':'GS AM',
'Caste Reservation':'SG SA',"Women's Suffrage":'SG GL','International Criminal Court':'G GL'
};
