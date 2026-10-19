/* ============================================================
   Real AP FRQ prompts, mapped to units  (writing-prompts.js)
   ------------------------------------------------------------
   Official College Board prompts from the 2024 (Set 2) and 2023
   (Set 1) World History: Modern free-response exams, split apart
   and attached to the unit whose period/topic each one fits.

   Read by writing-drills.js: each unit's Writing Drills page shows
   a "Real Exam Prompts" section with these, above the skill drills.
   Unit 7's Japanese-imperialism DBQ already lives in unit7.html (FRQ Grader), so
   it is intentionally not repeated here.

   Text is transcribed from the College Board FRQ PDFs. "…" marks
   editors' elisions in the original excerpts.
   ============================================================ */
window.WRITING_PROMPTS = {

  /* ── UNIT 1: The Global Tapestry (c. 1200–1450) ── */
  1: {
    saq: [{
      year: '2023', tag: 'SAQ 2: Secondary/primary source',
      source: 'Ibn Khaldun, Arab scholar and historian writing about the Mamluk dynasty of Egypt, late fourteenth century',
      excerpt: 'It was by the grace of God that He came to the rescue of Islam by reviving its last breath and restoring in Egypt the unity of the Muslims [in the mid-thirteenth century]. He did this by sending the Mamluks to the Muslims as guardian rulers and devoted defenders, who were imported as slaves from the lands of the heathen Qipchaq Turks. The Turkish slaves embrace Islam with the determination of true believers, while retaining their nomadic virtues.\n\nThe slave merchants bring them to Egypt in batch after batch. Then the rulers lodge them in the royal chambers, and give them a careful upbringing, including the study of the Qur’an. Then they train them in the use of the bow and the sword, in riding horses, and in fighting with the lance until they become tough and seasoned soldiers. When the rulers are convinced that they are prepared to defend and die for them, they increase their pay, lands, and incomes. Then they appoint them to high offices of state, and even sultans are chosen from them who direct the affairs of the Muslims.',
      parts: [
        'Identify ONE claim that the author makes about the Mamluks in the first paragraph.',
        'Identify ONE way the passage illustrates the political situation of the Islamic world in the period before circa 1450.',
        'Explain ONE way the passage could be used to illustrate differences in forms of coerced labor in the period before circa 1750.'
      ],
      partExemplars: [
        '<strong>Task = IDENTIFY a claim (1 sentence).</strong> The author claims that the Mamluks were guardian rulers sent to revive and defend Islam in Egypt. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> the Mamluks were chosen by God to save Egypt; the Mamluks were guardian rulers and defended Islam; many Turkish enslaved persons converted to Islam and became true believers even though they remained nomadic.</span>',
        '<strong>Task = IDENTIFY the political situation shown (1 sentence).</strong> The passage illustrates that Islamic rulers invested heavily in training enslaved soldiers and appointing them to high office to strengthen their power. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> the lack of unity among Islamic states; that Islamic rulers invested heavily in soldiers; that rulers patronized religious learning; that rulers used a variety of activities to increase their power (appointing trusted officials, training a powerful military, supporting religious teachings).</span>',
        '<strong>Task = EXPLAIN a difference in coerced labor (2–3 sentences).</strong> Unlike enslaved people in the Americas, who were held mainly for plantation labor, Mamluk slave soldiers could rise to the highest political and military offices, and some even became sultans. This was possible because Islamic rulers valued the Mamluks for their loyalty and military training, so they rewarded them with pay, land, and power. This shows that coerced labor did not always mean permanent low status. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> formerly enslaved Mamluks could rise to high positions such as sultan, unlike enslaved persons in the Americas; slavery in the Americas was mostly economic and plantation-based; because the Mamluks were male they received military training and promotion unlike enslaved women in Islamic societies.</span>'
      ]
    }]
  },

  /* ── UNIT 2: Networks of Exchange (c. 1200–1450) ── */
  2: {
    saq: [{
      year: '2024', tag: 'SAQ 3: No stimulus',
      parts: [
        'Identify ONE development in the period circa 1200–1300 that facilitated the establishment of the Mongol Empire.',
        'Identify ONE development in the period circa 1200–1300 that enabled the Mongol Empire to facilitate Afro-Eurasian trade and/or communications.',
        'Explain ONE reason why the Mongol khanates often facilitated the spread of cultural or religious practices.'
      ],
      partExemplars: [
        '<strong>Task = IDENTIFY a development that helped build the empire (1 sentence).</strong> Genghis Khan&rsquo;s reorganization of Mongol society into a centralized, disciplined military machine allowed the Mongols to rapidly conquer Eurasia. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> the decline of the Song dynasty helped Mongol expansion in East Asia; the fragmentation of the Muslim world after the Abbasid decline; the Mongols&rsquo; superior cavalry tactics; Genghis Khan&rsquo;s reorganization creating a centralized military.</span>',
        '<strong>Task = IDENTIFY a development that helped trade/communication (1 sentence).</strong> The Mongols established the yam, a mounted postal-relay system, which sped communication and protected travel across their vast territory. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> the conquests brought stability and security for trade; they brought new peoples into trade networks; unification increased communication and travel; the yam (postal/relay) system; adoption of trade-friendly practices such as paper money and caravanserais.</span>',
        '<strong>Task = EXPLAIN why the khanates spread culture/religion (2–3 sentences).</strong> Because the Mongols generally practiced religious toleration and often adopted the beliefs of the peoples they conquered, cultural and religious practices could flourish under their rule. The Pax Mongolica also secured the Silk Roads, so merchants, missionaries, and scholars could travel safely between China, Persia, and Europe and carry their beliefs and customs with them. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> the immense size of the empire increased contact among peoples; Mongol rulers adopted subjects&rsquo; religions (Islam, Buddhism), spreading them; general religious toleration let practices flourish along the Silk Roads; toleration was used to demonstrate legitimacy and strengthen the state.</span>'
      ]
    }],
    leq: [{
      year: '2023', tag: 'LEQ 2',
      intro: 'In the period circa 1200 to 1450, the expansion of empires such as the Mongol Empire facilitated trade and communication across Eurasia.',
      prompt: 'Develop an argument that evaluates the extent to which Mongol expansion affected the peoples of Eurasia during this period.',
      rubric: [
        { key: 'thesis', label: 'Thesis / Claim', points: '1 pt',
          requirement: 'Respond to the prompt with a <strong>historically defensible thesis/claim</strong> that establishes a <strong>line of reasoning</strong> (give a reason or set up analytic categories). One place, intro OR conclusion; more than a restatement.',
          exemplar: 'A thesis with analytic categories: <em>&ldquo;The Mongol conquests helped connect China to the rest of Eurasia not only through increased Silk Road trade, but also by creating opportunities for the exchange of religions and scientific knowledge.&rdquo;</em> <br><span class="wd-note-why"><strong>Official guidance:</strong> must take a position on the <em>extent</em> Mongol expansion affected Eurasia and suggest a line of argument. Does NOT earn: a bare claim (&ldquo;The Mongol conquests affected many peoples&rdquo;) or a non-defensible claim (&ldquo;the Mongols spread the Mongol language across Eurasia&rdquo;).</span>' },
        { key: 'context', label: 'Contextualization', points: '1 pt',
          requirement: 'Describe a <strong>broader historical context</strong> relevant to the prompt (developments before, during, or after) in <strong>more than a phrase</strong>.',
          exemplar: '<em>&ldquo;The Mongol empire under Chinggis Khan developed in the context of a Jin dynasty that, while militarily powerful, was beginning to experience internal discord and weak rulership.&rdquo;</em> <br><span class="wd-note-why"><strong>Officially credited context includes:</strong> the spread of technologies and scientific ideas across Eurasia; the continuing spread of religions (Islam, Christianity, Buddhism); the importance of Silk Road trade; the military weakness of the Song or the Abbasid Caliphate; the expansion of nomadic empires; the Crusades.</span>' },
        { key: 'evidence', label: 'Evidence: Two Specific Examples', points: '1 pt',
          requirement: 'Provide <strong>at least TWO specific, relevant historical examples</strong> connected to the topic of the prompt.',
          exemplar: 'Name at least two, e.g.: the <strong>Pax Mongolica</strong> and the reopening of the <strong>Silk Roads</strong> (with passports and the yam system); the spread of <strong>gunpowder and paper money</strong>; the Mongol destruction of <strong>Baghdad</strong> (1258); the spread of the <strong>Black Death</strong>; Mongol <strong>conversions</strong> to Islam or Buddhism. <br><span class="wd-note-why"><strong>Official guidance:</strong> earns 1 pt for two specific examples relevant to the Mongol conquests. Does NOT earn: a single example, or vague/irrelevant evidence.</span>' },
        { key: 'evidence-support', label: 'Evidence: Supports the Argument', points: '2nd pt',
          requirement: 'Use those <strong>two specific examples to support an argument</strong> in response to the prompt (not merely list them).',
          exemplar: '<em>&ldquo;The Islamic world was substantially changed by the Mongol conquests: the Mongols conquered the Abbasid Caliphate, killed the caliph, and destroyed many wealthy and powerful Eurasian trading cities&rdquo;</em>, while much of Europe, invaded only briefly in 1241, saw far less lasting change. <br><span class="wd-note-why"><strong>Official guidance:</strong> the 2nd evidence point requires using the examples to <em>support an argument</em> about the extent of Mongol impact, not just naming them.</span>' },
        { key: 'reasoning', label: 'Historical Reasoning', points: '1 pt',
          requirement: 'Use a <strong>historical reasoning skill, comparison, causation, or continuity &amp; change, to frame and structure</strong> the argument (not a stray transition word).',
          exemplar: 'Structure the essay by <strong>causation</strong>: Mongol conquest &rarr; secured and reopened trans-Eurasian trade &rarr; accelerated the exchange of goods, technologies, religions, <em>and</em> disease. Or by <strong>comparison</strong>: contrast the heavy impact on the Islamic world and China with the lighter impact on Western Europe. <br><span class="wd-note-why"><strong>Official guidance:</strong> the reasoning skill must organize the response; it may be uneven, but it has to frame the argument.</span>' },
        { key: 'complexity', label: 'Complexity', points: '1 pt',
          requirement: 'Demonstrate a <strong>complex understanding</strong>: nuance, multiple causes/effects, similarity <em>and</em> difference, or insightful cross-region/period connections, developed with evidence.',
          exemplar: 'Corroborate across regions to qualify the claim: the Mongol impact was <em>uneven</em>, transformative where the Mongols ruled directly (the Islamic heartland, China) but limited in regions like Western Europe, so &ldquo;the Mongols changed Eurasia&rdquo; is true only with important regional qualifications. <br><span class="wd-note-why"><strong>Official guidance:</strong> complexity must be part of the argument (explaining nuance or corroborating/qualifying with evidence), not a lone &ldquo;it was complicated&rdquo; sentence.</span>' }
      ]
    }]
  },

  /* ── UNIT 3: Land-Based Empires (c. 1450–1750) ── */
  3: {
    saq: [{
      year: '2024', tag: 'SAQ 1: Secondary source',
      source: 'Chase F. Robinson, historian, Islamic Historiography, 2003',
      excerpt: '[A]lready well before the twelfth and thirteenth centuries, an enormous amount of [history] had been written, and Muslims were well on their way to generating a tradition that outstripped in size and quality anything written by … Jews or Christians. The impulse [for so much history writing] was two-fold. [First], the spectacular success of empire building during the seventh and eighth centuries created a market of readers hungry for historical narrative, … which offered lessons and models to rulers, their courts, and urban elites. … Second, … many were enthusiastic about those forms [of history writing] that reinforced traditional religious institutions … and attitudes. In practice, this meant that they wrote a great many [biographies] of religious figures and of the Prophet [Muhammad]. …\n\nMuslim states had a stake in learning in general and [history writing] in particular. Nearly all states [sponsored history writing and art creation] that legitimized their exercise of power, and large-scale learning depended on urban networks of knowledge, reading, teaching, writing, that states cultivated and defended. It is this: the mutual attraction of historians and ambitious states, that explains the [development of Islamic history writing].',
      parts: [
        'Identify ONE argument that the author makes in the first paragraph.',
        'Identify ONE piece of evidence that the author uses to support an argument in the passage.',
        'Explain how ONE development in the period 1200–1750 could be used to support the author’s argument in the second paragraph about history writing and art creation legitimizing states’ exercise of power.'
      ],
      partExemplars: [
        '<strong>Task = IDENTIFY an argument (1 sentence).</strong> The author argues that the success of Islamic empire-building in the seventh and eighth centuries created a large audience of readers hungry for historical narrative, which drove an enormous amount of history writing. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> Muslims wrote more history than Jews and Christians in the 12th–13th centuries; the establishment of the Islamic caliphates led to an enormous amount of history writing; Muslim states and elites promoted history writing; Muslim readers wanted historical narratives about religious and political figures.</span>',
        '<strong>Task = IDENTIFY the author&rsquo;s evidence (1 sentence).</strong> The author points out that many Muslim historians wrote biographies of the Prophet Muhammad and other religious figures to reinforce traditional religious institutions. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> that many historians wrote biographies of the Prophet Muhammad and religious figures; that in the 12th–13th centuries Muslims wrote more histories than Christians or Jews; that rulers, courts, and urban elites were the main audiences. (Note: an answer used for part a cannot also be credited for part b.)</span>',
        '<strong>Task = EXPLAIN a development that supports the 2nd-paragraph argument (2–3 sentences).</strong> Rulers such as the Mughals and Ottomans commissioned court histories, monumental architecture, and religious art that glorified their dynasties. For example, Shah Jahan built the Taj Mahal and Suleiman the Magnificent built the Suleymaniye Mosque. These works legitimized their exercise of power because they presented the rulers as divinely favored and tied their reigns to great achievements their subjects could see. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> rulers sponsored historical writing praising their dynasties to increase legitimacy; the Abbasid Caliphate supported scholars in the House of Wisdom in Baghdad to legitimize their power; rulers used religious ideas, art, and monumental architecture to legitimize rule.</span>'
      ]
    }],
    leq: [
      {
        year: '2024', tag: 'LEQ 2',
        intro: 'In the period circa 1200–1750, religious traditions were used to establish and legitimize rulers and governments throughout Afro-Eurasia.',
        prompt: 'Develop an argument that evaluates the extent to which religion was the main source of political legitimacy for rulers in Afro-Eurasia during this period.',
        rubric: [
          { key: 'thesis', label: 'Thesis / Claim', points: '1 pt',
            requirement: 'Respond to the prompt with a <strong>historically defensible thesis/claim</strong> that establishes a <strong>line of reasoning</strong> (give a reason or set up analytic categories). One place, intro OR conclusion; more than a restatement.',
            exemplar: 'A thesis with analytic categories: <em>&ldquo;Muslim rulers often used religious titles, enforced Islamic law, and promoted Muslim religious practices such as prayer and the hajj to demonstrate the legitimacy of their rule.&rdquo;</em> <br><span class="wd-note-why"><strong>Official guidance:</strong> take a position on the <em>extent</em> religion was the main source of legitimacy and suggest a line of argument. Does NOT earn: restating the prompt, or a bare claim (&ldquo;the Mughals practiced religious tolerance&rdquo;) with no reasoning.</span>' },
          { key: 'context', label: 'Contextualization', points: '1 pt',
            requirement: 'Describe a <strong>broader historical context</strong> relevant to the prompt (before, during, or after) in <strong>more than a phrase</strong>.',
            exemplar: '<em>&ldquo;The Crusades were military campaigns led by Christian rulers to recapture the holy lands from the Muslims&rdquo;</em>, showing how deeply religion and political power were intertwined before this period. <br><span class="wd-note-why"><strong>Officially credited context includes:</strong> the spread of Islam across Eurasia and Africa; the power of the Catholic, Protestant, or Orthodox churches; Confucianism and Neo-Confucianism in East Asia; the Reformations and Wars of Religion; Hindu–Muslim relations in South Asia; the Reconquista; the Crusades.</span>' },
          { key: 'evidence', label: 'Evidence: Two Specific Examples', points: '1 pt',
            requirement: 'Provide <strong>at least TWO specific, relevant historical examples</strong> connected to the topic of the prompt.',
            exemplar: 'Name at least two, e.g.: the Confucian <strong>Mandate of Heaven</strong>; Ottoman sultans using the concept of <strong>jihad</strong> or the title of <strong>Caliph</strong>; <strong>Safavid</strong> rulers patronizing Shi&rsquo;a scholars; <strong>Mughal</strong> emperors applying (or removing) the <strong>jizya</strong>; <strong>Louis XIV</strong> and the divine right of kings. <br><span class="wd-note-why"><strong>Official guidance:</strong> earns 1 pt for two specific examples relevant to religion and political legitimacy, 1200–1750.</span>' },
          { key: 'evidence-support', label: 'Evidence: Supports the Argument', points: '2nd pt',
            requirement: 'Use those <strong>two specific examples to support an argument</strong> in response to the prompt (not merely list them).',
            exemplar: '<em>&ldquo;The primary cause of the Ottoman–Safavid conflict was the schism between Sunni Islam, adhered to by the Ottomans, and Shia Islam, chosen as the state religion by the Safavids; this religious divide was used by their rulers to bolster support for their rule.&rdquo;</em> <br><span class="wd-note-why"><strong>Official guidance:</strong> the 2nd evidence point requires using the examples to <em>support an argument</em> about religion as a source of legitimacy, not just naming them.</span>' },
          { key: 'reasoning', label: 'Historical Reasoning', points: '1 pt',
            requirement: 'Use a <strong>historical reasoning skill, comparison, causation, or continuity &amp; change, to frame and structure</strong> the argument.',
            exemplar: 'Structure by <strong>comparison</strong>: contrast how Muslim rulers used Islamic law and titles with how European monarchs used divine right, both grounding legitimacy in religion but through different institutions. Or by <strong>causation</strong>: religious differences (Sunni vs. Shi&rsquo;a) <em>caused</em> political rivalry that rulers exploited for legitimacy. <br><span class="wd-note-why"><strong>Official guidance:</strong> the reasoning skill must organize the argument, even if unevenly developed.</span>' },
          { key: 'complexity', label: 'Complexity', points: '1 pt',
            requirement: 'Demonstrate a <strong>complex understanding</strong>: nuance, multiple causes/effects, or insightful connections, developed with evidence.',
            exemplar: 'Qualify the claim by showing religion could both <em>unify and divide</em>: Safavid Shi&rsquo;ism unified Iran but enforced conformity; Akbar&rsquo;s Divine Faith tried to bind Hindus and Muslims; the Reformation fractured Christendom. Religion was powerful for legitimacy, but political and economic tools (tax policy, architecture, bureaucracy) mattered alongside it. <br><span class="wd-note-why"><strong>Official guidance:</strong> complexity must be developed as part of the argument (e.g., religion unifying vs. dividing), not a lone phrase.</span>' }
        ]
      },
      {
        year: '2023', tag: 'LEQ 3',
        intro: 'In the period circa 1450 to 1750, rulers of land-based empires, such as the Mughal, the Ottoman, and the Safavid empires, used a variety of religious, political, and economic methods to legitimize and consolidate their power.',
        prompt: 'Develop an argument that evaluates the extent to which a land-based empire successfully consolidated or expanded its power during this period.',
        rubric: [
          { key: 'thesis', label: 'Thesis / Claim', points: '1 pt',
            requirement: 'Respond to the prompt with a <strong>historically defensible thesis/claim</strong> that establishes a <strong>line of reasoning</strong> (give a reason or set up analytic categories). One place, intro OR conclusion; more than a restatement.',
            exemplar: 'A thesis with analytic categories: <em>&ldquo;The Safavids, Ottomans, and Mughals used monumental architecture and religious ideas to maintain and increase their power.&rdquo;</em> Or: <em>&ldquo;Tax farming was used by Muslim states to finance territorial expansion, build elaborate government and religious buildings, and promote state power.&rdquo;</em> <br><span class="wd-note-why"><strong>Official guidance:</strong> take a position on the <em>extent</em> a land-based empire consolidated or expanded power and suggest a line of argument. Does NOT earn: a bare claim (&ldquo;the rulers were extremely powerful&rdquo;) with no reasoning.</span>' },
          { key: 'context', label: 'Contextualization', points: '1 pt',
            requirement: 'Describe a <strong>broader historical context</strong> relevant to the prompt (before, during, or after) in <strong>more than a phrase</strong>.',
            exemplar: '<em>&ldquo;The centralization of power within the Ottoman Empire can be understood as part of the broader practice of developing bureaucratic institutions in modernizing states across Eurasia during this period.&rdquo;</em> <br><span class="wd-note-why"><strong>Officially credited context includes:</strong> the spread and improvement of gunpowder weapons; existing trade routes such as the Silk Roads; the earlier expansion of Islam; the rise or collapse of Mongol successor states (Uzbeks, Timurids); the collapse of the Byzantine Empire; Ottoman expansion before 1450; other gunpowder empires such as the Qing.</span>' },
          { key: 'evidence', label: 'Evidence: Two Specific Examples', points: '1 pt',
            requirement: 'Provide <strong>at least TWO specific, relevant historical examples</strong> connected to the topic of the prompt.',
            exemplar: 'Name at least two, e.g.: Ottoman <strong>devshirme</strong> and the <strong>Janissaries</strong>; Ottoman <strong>tax farming</strong>; Mughal <strong>zamindar</strong> tax collection; the <strong>Taj Mahal</strong> or <strong>Suleymaniye Mosque</strong> glorifying imperial rule; the theory of <strong>divine right</strong>; policies tolerating (or taxing) religious minorities. <br><span class="wd-note-why"><strong>Official guidance:</strong> earns 1 pt for two specific examples relevant to a land-based empire consolidating or expanding power.</span>' },
          { key: 'evidence-support', label: 'Evidence: Supports the Argument', points: '2nd pt',
            requirement: 'Use those <strong>two specific examples to support an argument</strong> in response to the prompt (not merely list them).',
            exemplar: '<em>&ldquo;The Ottomans developed the practice of using professionalized troops within standing armies as well as new gunpowder weapons in order to help them conquer new territories&rdquo;</em>, directly supporting the argument that the Ottomans expanded and consolidated their power. <br><span class="wd-note-why"><strong>Official guidance:</strong> the 2nd evidence point requires using the examples to <em>support an argument</em> about the empire&rsquo;s consolidation/expansion, not just listing them.</span>' },
          { key: 'reasoning', label: 'Historical Reasoning', points: '1 pt',
            requirement: 'Use a <strong>historical reasoning skill, comparison, causation, or continuity &amp; change, to frame and structure</strong> the argument.',
            exemplar: 'Structure by <strong>causation</strong>: new military technology (cannons) and professionalized armies (Janissaries) &rarr; territorial conquest &rarr; wealth from tax farming &rarr; monumental building that projected imperial legitimacy. Or by <strong>comparison</strong> of how the Ottomans, Safavids, and Mughals each consolidated power. <br><span class="wd-note-why"><strong>Official guidance:</strong> the reasoning skill must organize the argument, even if unevenly developed.</span>' },
          { key: 'complexity', label: 'Complexity', points: '1 pt',
            requirement: 'Demonstrate a <strong>complex understanding</strong>: nuance, multiple causes/effects, or insightful connections, developed with evidence.',
            exemplar: 'Qualify &ldquo;successful&rdquo;: the same tools that consolidated power carried long-term costs. Heavy taxation and the growing autonomy of tax farmers and Janissaries strengthened these empires in the short run but sowed later instability, so consolidation was real but not unqualified. <br><span class="wd-note-why"><strong>Official guidance:</strong> complexity must be developed as part of the argument (weighing strengths against limits), not a lone phrase.</span>' }
        ]
      }
    ]
  },

  /* ── UNIT 4: Transoceanic Interconnections (c. 1450–1750) ── */
  4: {
    saq: [{
      year: '2023', tag: 'SAQ 3: No stimulus',
      parts: [
        'Identify ONE reason for the increase in the movement of enslaved peoples across the Atlantic Ocean during the period circa 1450–1750.',
        'Explain ONE way the increasing number of enslaved peoples resulted in social or cultural change in the Americas during the period circa 1450–1750.',
        'Explain ONE way the increased demand for enslaved peoples affected African populations during the period circa 1450–1750.'
      ],
      partExemplars: [
        '<strong>Task = IDENTIFY a reason (1 sentence).</strong> The spread of labor-intensive sugar plantations in the Americas created a soaring demand for enslaved African labor. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> increased demand due to a need for more labor; more enslaved Africans brought over because of the increased number of sugar plantations; the loss of indigenous peoples to disease creating demand for more workers.</span>',
        '<strong>Task = EXPLAIN a social/cultural change in the Americas (2–3 sentences).</strong> The arrival of large numbers of enslaved Africans produced syncretic cultures in the Americas. Enslaved people were forced to adopt Christianity, but they blended it with their own West African religious traditions, which created new belief systems such as Vodun in Haiti and Santería in Cuba. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> syncretic religions blending African beliefs with Christianity; new social classes and terms like mestizos and mulattoes; the Spanish casta system classifying mixed-race families and maintaining European dominance.</span>',
        '<strong>Task = EXPLAIN an effect on African populations (2–3 sentences).</strong> Because slave traders overwhelmingly took young men, many West African societies suffered a gender imbalance and lost much of their working population. Competition to supply captives also fueled increased warfare between African states, which politically weakened kingdoms such as Kongo. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> a demographic impact and gender imbalance from enslaving mostly young men; severe population loss in West Africa weakening kingdoms like Kongo; higher levels of warfare among African states responding to European demand; high mortality from the Middle Passage and harsh conditions.</span>'
      ]
    }]
  },

  /* ── UNIT 5: Revolutions (c. 1750–1900) ── */
  5: {
    leq: [{
      year: '2024', tag: 'LEQ 3',
      intro: 'In the period circa 1750–1900, discontent with monarchist and imperial rule spread around many parts of the world and led to significant political changes.',
      prompt: 'Develop an argument that evaluates the extent to which discontent with monarchist or imperial rule was the main source of new political ideologies or systems of government during this period.',
      rubric: [
        { key: 'thesis', label: 'Thesis / Claim', points: '1 pt',
          requirement: 'Respond to the prompt with a <strong>historically defensible thesis/claim</strong> that establishes a <strong>line of reasoning</strong> (give a reason or set up analytic categories). One place, intro OR conclusion; more than a restatement.',
          exemplar: 'A thesis with analytic categories: <em>&ldquo;Creole inhabitants of the Spanish colonies created an anti-imperial ideology that combined Enlightenment ideas, inspiration from the American and French Revolutions, local grievances with Spain, and a desire for greater economic independence.&rdquo;</em> <br><span class="wd-note-why"><strong>Official guidance:</strong> take a position on the <em>extent</em> discontent with monarchy/empire was the main source of new ideologies. Does NOT earn: a bare claim (&ldquo;the French Revolution overthrew the king&rdquo;) with no reasoning. (Note: capitalism/laissez-faire count as ideologies if tied to government control of the economy.)</span>' },
        { key: 'context', label: 'Contextualization', points: '1 pt',
          requirement: 'Describe a <strong>broader historical context</strong> relevant to the prompt (before, during, or after) in <strong>more than a phrase</strong>.',
          exemplar: '<em>&ldquo;Enlightenment and social-contract philosophers formulated the idea of natural rights and government by the consent of the governed rather than by divine right.&rdquo;</em> <br><span class="wd-note-why"><strong>Officially credited context includes:</strong> Absolutism / divine right; the Enlightenment; nationalism; constitutionalism and liberal reforms; imperialism; mercantilism; industrialization and capitalism; Marxism/socialism/communism; voting-rights and women&rsquo;s suffrage movements.</span>' },
        { key: 'evidence', label: 'Evidence: Two Specific Examples', points: '1 pt',
          requirement: 'Provide <strong>at least TWO specific, relevant historical examples</strong> connected to the topic of the prompt.',
          exemplar: 'Name at least two, e.g.: the <strong>Declaration of the Rights of Man and of the Citizen</strong>; <strong>Toussaint Louverture</strong> or <strong>Simón Bolívar</strong>; <strong>John Locke</strong>, <strong>Rousseau</strong>, <strong>Mary Wollstonecraft</strong>, or <strong>Karl Marx</strong>; the American, French, Haitian, or Latin American Revolutions; the <strong>Sepoy Rebellion</strong> or <strong>Indian National Congress</strong>; the <strong>Revolutions of 1848</strong>. <br><span class="wd-note-why"><strong>Official guidance:</strong> earns 1 pt for two specific examples relevant to monarchy, imperial rule, or new political ideas in 1750–1900.</span>' },
        { key: 'evidence-support', label: 'Evidence: Supports the Argument', points: '2nd pt',
          requirement: 'Use those <strong>two specific examples to support an argument</strong> in response to the prompt (not merely list them).',
          exemplar: '<em>&ldquo;Discontent with monarchical rule inspired three Atlantic Revolutions, American, Haitian, and French, all of which used Enlightenment ideas about natural rights and civil liberties as the basis for creating new republican systems of government.&rdquo;</em> <br><span class="wd-note-why"><strong>Official guidance:</strong> the 2nd evidence point requires using the examples to <em>support an argument</em> about discontent producing new ideologies, not just listing them.</span>' },
        { key: 'reasoning', label: 'Historical Reasoning', points: '1 pt',
          requirement: 'Use a <strong>historical reasoning skill, comparison, causation, or continuity &amp; change, to frame and structure</strong> the argument.',
          exemplar: 'Structure by <strong>causation</strong>: resentment of absolutist/imperial rule &rarr; adoption of Enlightenment natural-rights ideas &rarr; revolutions that built new republics. Or by <strong>comparison</strong>: the American and French Revolutions both fought monarchy but differed in how radically they remade society. <br><span class="wd-note-why"><strong>Official guidance:</strong> the reasoning skill must organize the argument, even if unevenly developed.</span>' },
        { key: 'complexity', label: 'Complexity', points: '1 pt',
          requirement: 'Demonstrate a <strong>complex understanding</strong>: nuance, multiple causes/effects, similarity <em>and</em> difference, or insightful connections, developed with evidence.',
          exemplar: 'Qualify the claim: while discontent with monarchy produced liberalism and democracy, other new ideologies, such as socialism and communism, arose instead from discontent with <em>industrial capitalism</em>, so monarchy was a major but not the sole source of new political systems. <br><span class="wd-note-why"><strong>Official guidance:</strong> complexity must be developed as part of the argument (weighing multiple sources of ideology), not a lone phrase.</span>' }
      ]
    }]
  },

  /* ── UNIT 6: Consequences of Industrialization (c. 1750–1900) ── */
  6: {
    saq: [
      {
        year: '2024', tag: 'SAQ 2: Image stimulus',
        source: 'Graduation Ceremony at a Christian Theological Seminary in Northern India, 1897 (© The Trustees of the British Museum)',
        image: 'images/u6-saq-seminary.jpg',
        imageAlt: 'Photograph of a graduation ceremony at a Christian theological seminary in northern India, 1897: two British missionaries seated at the center of the second row, surrounded by rows of Indian graduates.',
        imageCredit: 'Graduation Ceremony at a Christian Theological Seminary in Northern India, 1897. © The Trustees of the British Museum.',
        excerpt: 'The photograph shows two British missionaries (second row, center) surrounded by Indian graduates. The seminary: a religious school: was founded in 1871 to educate and train Indian missionaries.',
        parts: [
          'Identify ONE development during the period 1450 to 1750 that contributed to the activities shown in the image.',
          'Explain ONE reason why imperialist governments often supported activities of the type shown in the image during the nineteenth and early twentieth centuries.',
          'Explain ONE way indigenous peoples in Africa and/or Asia resisted the spread of the cultural practices reflected in the image during the nineteenth and early twentieth centuries.'
        ],
        partExemplars: [
          '<strong>Task = IDENTIFY a 1450–1750 development (1 sentence).</strong> European maritime empires set up trading posts and colonies in Africa and Asia, which gave Christian missionaries a foothold to spread their faith in new territories. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> &ldquo;Western missionaries tried to spread Christianity in Africa and Asia&rdquo;; &ldquo;Christianity spread as imperial powers conquered new territories&rdquo;; &ldquo;Christianity transformed some local religious practices and customs.&rdquo;</span>',
          '<strong>Task = EXPLAIN a reason imperial governments supported this (2–3 sentences, name the mechanism).</strong> Imperial governments supported missionary schools because they provided Western education to local populations, who could then serve as clerks and officials in the colonial administration. Spreading Christianity also legitimized empire, since it advanced the &ldquo;civilizing&rdquo; or &ldquo;Christianizing&rdquo; mission that Europeans used to justify colonization. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> missionaries directly supported the &ldquo;civilizing/Christianizing mission&rdquo; used to rationalize colonization; missionary schools trained locals for colonial administration; missionaries brought aid that legitimized imperialism <em>and</em> lessened government costs.</span>',
          '<strong>Task = EXPLAIN indigenous resistance (2–3 sentences).</strong> Indigenous peoples resisted by attacking the missionaries who spread Christianity. In the Boxer Rebellion of 1899–1901, Chinese militias killed missionaries and Chinese Christians, because they blamed foreign religion and foreign influence for China&rsquo;s weakness and wanted to drive them out of the country. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> Asian governments limiting or expelling missionaries; African cultures blending traditional beliefs with Christianity; popular uprisings targeting missionaries (Boxer Rebellion, 1857 Indian Rebellion, Cattle Killing Movement).</span>'
        ]
      },
      {
        year: '2023', tag: 'SAQ 4: No stimulus',
        parts: [
          'Identify ONE way that environmental conditions contributed to the beginning of industrialization in the eighteenth and early nineteenth centuries.',
          'Explain ONE way societies or governments reacted to industrialization in the eighteenth and nineteenth centuries.',
          'Explain ONE way human activity led to environmental changes in the twentieth century.'
        ],
        partExemplars: [
          '<strong>Task = IDENTIFY an environmental condition (1 sentence).</strong> Regions such as Britain had large, accessible deposits of coal and iron together with navigable waterways, giving them the natural-resource base and cheap energy needed to power steam engines and factories and industrialize first. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> the location of coal and other resources helped some countries industrialize; access to rivers/waterways let manufacturers harness water power and export goods; regions with natural resources, navigable waterways, and capital were able to industrialize.</span>',
          '<strong>Task = EXPLAIN a reaction to industrialization (2–3 sentences).</strong> Workers reacted to industrialization by forming labor unions to defend their rights. Factory work meant long hours, low wages, and dangerous conditions, so workers organized to bargain together and strike. In Britain, this pressure helped win the Factory Acts, which limited child labor and working hours. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> governments adopting social/urban reforms; workers forming labor unions; Meiji Japan modernizing its economy and military in response to European industrialization.</span>',
          '<strong>Task = EXPLAIN a 20th-c. environmental change (2–3 sentences).</strong> In the twentieth century, the burning of fossil fuels such as coal and oil rose sharply as factories, cars, and electric power spread around the world. This released huge amounts of carbon dioxide and other greenhouse gases, which contributed to air pollution and global climate change. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> increased fossil-fuel use raising pollution levels; the Green Revolution altering the environment to support population growth; disasters such as the BP oil spill or the Chernobyl explosion causing long-term effects on soil, animals, and water.</span>'
        ]
      }
    ],
    dbq: {
      year: '2023', tag: 'DBQ (Question 1)',
      prompt: 'Evaluate the extent to which foreign involvement led to the collapse of the Qing Empire.',
      documents: [
        { n: 1, source: 'Petition from two local-level government officials in the district of Rong, Guangxi Province, southern China, to the provincial governor, circa 1850',
          text: 'Our dynasty has always followed the teachings of the ancient sages and, as a result, everyone in our district lived in harmony for a long time. As the population increased, resources were plentiful. However, in 1846 local bandits and rebels began attacking our district. They captured the district capital and took government officials as prisoners. Many people were killed, houses were left in ashes, and farmers’ fields were thick with weeds. The rebels forced the people to pay land taxes to them. They used official seals to issue false orders to the population. It was intolerable to see these criminals seize control of the local government.\n\nYour Excellency, last year you promised to send an army to suppress the rebels. We beg you, please have the army come immediately to exterminate the rebels and save the people. Our local militia has been fighting them for a long time and we fear that if the militia collapses, the rebels will run free and it will become impossible for the government to control them.' },
        { n: 2, source: 'Karl Marx, German political economist, "Revolution in China and in Europe," article published in the New York Daily Tribune, 1853',
          text: 'The current formidable revolution that is taking place in China [the Taiping Rebellion] has unquestionably been caused by the British cannon forcing upon China the unlimited importation of opium. Faced with the might of the British arms, the authority of the Manchu [Qing] dynasty fell to pieces and China’s complete isolation from the civilized world came to an end.\n\nThe opium trade changed the balance of trade from being continually in favor of the Chinese to being an exhausting drain on the silver reserves of the empire. Hence, the emperor made strong decrees against the opium trade, which were subsequently not enforced. The bribery connected with opium smuggling has entirely corrupted the Chinese state officers in the southern provinces and thereby undermined the authority of the state.\n\nThe introduction of English mass-produced textiles has had a similar effect on the native Chinese industry to that on the Ottoman Empire, Persia, and India. In China the spinners and weavers have suffered greatly under this foreign competition, and their communities have become destabilized as a result.' },
        { n: 3, source: 'Qing China’s Foreign Office, policy letter addressed to all Chinese embassies abroad, 1878',
          text: 'Under the Treaties of Tianjin, foreigners in China are not subject to the jurisdiction of the Chinese imperial authorities. If they have disputes among themselves, their own consuls in China are to settle them; if they commit a crime in China, their own diplomats are to punish them according to their national laws. But in practice, foreigners claim much more than this: they interpret the treaties to mean that they may violate Chinese laws without consequences. To this we cannot agree, China never gave foreigners permission to disregard our laws.' },
        { n: 4, source: 'Village elders in the district of Caozhou, Shandong Province, northeastern China, report to the provincial government, 1896',
          text: 'In our district, the wealthy landowners grow richer each year, while the poor have nothing. These rich folks treat the poor like strangers, they will lend them neither cloth nor grain. They treat their hired laborers particularly cruelly, arousing a hatred so strong that the poor people are easily tempted to turn to a life of banditry.\n\nThe bandits come every few weeks to people’s houses, bearing sharp knives or foreign rifles. When they ask the poor people for money at knifepoint, how can the poor refuse? If the grain of the district were more equally distributed, there would be enough to eat, but there are many without any land. All the poor can do is sell their labor or turn to a life of crime. In North China a hired farmworker can find work for three months per year at the most. A person cannot make a living on that. So, when they see the easy lives of the bandits, the people are tempted to join them.' },
        { n: 5, source: 'Chinese Alliance Association, a coalition of political organizations of young Chinese men studying in foreign countries, "Revolutionary Proclamation," 1907',
          text: 'Since the beginning of China as a nation, we Chinese have governed our own country despite occasional interruptions. Today, when we raise the righteous standard of revolt in order to expel an alien race [the Manchu] that has been occupying China, we do no more than our ancestors have done or expected us to do.\n\nThe purpose of past revolutions, such as those conducted by the Ming and Taiping, was to restore China to the Chinese, and nothing else. We, on the other hand, strive not only to expel the ruling aliens but also to change the political and economic structure of our country. While we cannot describe in detail this new political and economic structure in this short proclamation, the basic principles behind it are liberty, equality, and fraternity. The revolutions of yesterday were revolutions by and for the revolutionaries; our revolution, on the other hand, is a revolution by and for the people.' },
        { n: 6, source: 'Anonymous Chinese artist, "A Look at China Now and in the Past," cartoon published in the Shenzhou Ribao (National Herald) newspaper, Shanghai, 1911',
          image: 'images/u6-dbq-cartoon.jpg',
          imageAlt: 'Four-panel Chinese political cartoon from 1911. A tiger representing China is progressively approached and then dismembered by Western figures across the panels, labeled "China during the Kangxi and Qianlong emperors," "China during the Xianfeng and Tongzhi emperors," "China today," and "China in the future."',
          imageCredit: 'Anonymous Chinese artist, "A Look at China Now and in the Past," Shenzhou Ribao (National Herald), Shanghai, 1911.',
          text: '[Political cartoon] In the images, the tiger represents China and the men represent Western countries. The four panels are labeled: "China during the Kangxi and Qianlong emperors [seventeenth and eighteenth centuries]," "China during the Xianfeng and Tongzhi emperors [first half of the nineteenth century]," "China today," and "China in the future."' },
        { n: 7, source: 'The abdication decree of the child emperor Puyi, issued by the regent empress Longyu on Puyi’s behalf, officially ending the Qing dynasty, 1912',
          text: 'As a consequence of the uprising of the Republican Army, to which different provinces immediately responded, the empire seethed like a boiling cauldron and the people were plunged into utter misery. It is now evident that the hearts of the majority of the people are in favor of a republican form of government: the provinces of the south were the first to espouse the cause, and the generals of the north have since pledged their support. From the preference of the people’s hearts, the Will of Heaven can be seen. How could We then bear to oppose the will of millions for the glory of one Family? Therefore, observing the tendencies of the age on the one hand and studying the opinions of the people on the other, We and His Majesty the Emperor hereby grant the sovereignty to the people and decide in favor of a republican form of constitutional government.' }
      ],
      rubric: [
        {
          key: 'thesis', label: 'Thesis / Claim', points: '1 pt',
          requirement: 'Respond to the prompt with a <strong>historically defensible thesis/claim</strong> that establishes a <strong>line of reasoning</strong>. Must be more than a restatement, located in one place (intro OR conclusion), and suggest a line of argument or set up analytic categories.',
          exemplar: 'A defensible thesis with analytic categories: <em>&ldquo;The Qing Empire collapsed due to a combination of Western economic and political imperialism and ethnic tensions between the Han and the Manchu.&rdquo;</em> A thesis may also weigh the extent: <em>&ldquo;Although foreign involvement badly weakened the Qing, internal turmoil was the more decisive cause of its collapse.&rdquo;</em> <br><span class="wd-note-why"><strong>Official guidance:</strong> the thesis must take a position on the <em>extent</em> to which foreign involvement caused the collapse and suggest at least one line of argument. Does NOT earn: restating the prompt (&ldquo;The Qing Empire collapsed because of foreign involvement&rdquo;) or a bare claim with no reasoning (&ldquo;The Qing gradually weakened over time&rdquo;).</span>'
        },
        {
          key: 'context', label: 'Contextualization', points: '1 pt',
          requirement: 'Describe a <strong>broader historical context</strong> relevant to the prompt (events/developments/processes before, during, or after the time frame). Must be <strong>more than a phrase or a passing reference</strong>.',
          exemplar: '<em>&ldquo;Like other non-Western empires in the late nineteenth century, the Qing experienced military defeat and economic pressure from the industrialized West, leading to calls for reform.&rdquo;</em> <br><span class="wd-note-why"><strong>Officially credited context includes (with elaboration):</strong> Western economic imperialism in Asia and aspects of the Opium Wars not in the documents; Japanese industrialization and westernization; modernization efforts by other non-Western states such as the Ottomans; Western missionary activity and cultural conflict (e.g., the Sepoy Rebellion in India); Qing attempts to balance Manchu and Han culture. Does NOT earn: a passing reference (&ldquo;The Qing was influenced by Confucian government&rdquo;).</span>'
        },
        {
          key: 'evidence-docs', label: 'Evidence: Uses the Documents', points: '1 pt',
          requirement: 'Accurately <strong>describe the content</strong> (rather than merely quote) of at least <strong>THREE documents</strong> to address the topic of the prompt. (First evidence point: does not yet require tying them to an argument.)',
          exemplar: 'Describe at least three accurately, e.g.: <strong>Doc 4</strong>: the report explains that the poor are treated badly by wealthy landowners and that unequal grain distribution pushes people to join local bandits to survive. <strong>Doc 1</strong>: local officials plead for troops as bandits and rebels seize their district. <strong>Doc 2</strong>: Marx blames British opium and machine-made textiles for wrecking China&rsquo;s silver reserves and native industry. <br><span class="wd-note-why"><strong>Official guidance:</strong> earns 1 pt by accurately describing (not just quoting) the content of 3+ documents. Does NOT earn: using fewer than three, misinterpreting a document, or quoting with no description.</span>'
        },
        {
          key: 'evidence-support', label: 'Evidence: Supports the Argument (4 documents)', points: '2nd pt',
          requirement: 'Support an argument in response to the prompt by accurately using the content of at least <strong>FOUR documents</strong>. (The 4 documents need not support a single argument, they may address sub-arguments or counterarguments. Using all 7 helps earn the complexity point.)',
          exemplar: 'Use each document to advance an argument, e.g.: <strong>Doc 6</strong>: &ldquo;the cartoon demonstrates the change in China from a strong empire the West feared to a weak empire dismantled by the West, implying foreigners may ultimately bring the empire down.&rdquo; <strong>Doc 7</strong>: &ldquo;the abdication decree explains that it was an internal uprising and a desire for Republican government that ultimately led to the downfall of the Qing.&rdquo; Marshal foreign-cause docs (2, 3, 6) against internal-cause docs (1, 4, 5, 7) to argue the extent. <br><span class="wd-note-why"><strong>2027 rubric:</strong> the 2nd evidence point requires <em>four</em> documents used to support arguments, connecting each document&rsquo;s content to a claim about the prompt, not just describing it.</span>'
        },
        {
          key: 'sourcing', label: 'Sourcing / HIPP (2 documents)', points: '1 pt',
          requirement: 'For at least <strong>TWO documents</strong>, explain how or why the document&rsquo;s <strong>H</strong>istorical situation, <strong>I</strong>ntended audience, <strong>P</strong>oint of view, and/or <strong>P</strong>urpose is <strong>relevant to an argument</strong>, explain how/why, do not just identify it. (Aim for four; sourcing four helps earn the complexity point.)',
          exemplar: '<strong>Doc 5 (POV):</strong> &ldquo;the authors were influenced by Han Chinese nationalism as well as Western liberal political ideas in calling for the overthrow of the Qing and the establishment of a republic,&rdquo; which points to an internal cause of collapse. <strong>Doc 6 (Purpose):</strong> &ldquo;the cartoon is likely intended to demonstrate how China has become passive and is now being divided up by Westerners.&rdquo; <strong>Doc 4 (Historical situation):</strong> &ldquo;the report addresses the banditry problem, a consequence of population growth and rural poverty in nineteenth-century China.&rdquo; <br><span class="wd-note-why"><strong>2027 rubric:</strong> this point requires HIPP explained for <em>two</em> documents. Does NOT earn: identifying POV/purpose without explaining its relevance, or summarizing content without linking it to sourcing.</span>'
        },
        {
          key: 'outside', label: 'Outside Evidence (Beyond the Documents)', points: '1 pt',
          requirement: 'Use at least <strong>ONE specific piece of historical evidence NOT found in the documents</strong> (and different from your contextualization) that is relevant to an argument about the prompt. Must be more than a phrase or reference.',
          exemplar: '<em>&ldquo;Protestant and Catholic missions, which increased after the Opium Wars, contributed to cultural and social conflict in China; Christianity&rsquo;s rising influence helped spark the Boxer Rebellion.&rdquo;</em> <br><span class="wd-note-why"><strong>Officially credited outside evidence includes:</strong> Meiji Japan&rsquo;s encroachment on Qing territory and the First Sino-Japanese War; the Treaty of Nanjing and Opium War details not in the docs; Russian expansion into Manchuria; extraterritoriality; the Hundred Days&rsquo; Reform under the Guangxu Emperor; Qing court politics (Empress Dowager Cixi); the Boxer Rebellion, Wuchang Uprising, or Xinhai Revolution. Must be different from the context point.</span>'
        },
        {
          key: 'complexity', label: 'Complexity', points: '1 pt',
          requirement: 'Demonstrate a <strong>complex understanding</strong>: analyze multiple variables; explain nuance, or similarity <em>and</em> difference, or multiple causes/effects; corroborate, qualify, or modify an argument; or make insightful connections across periods/regions, sustained as part of the argument.',
          exemplar: 'Analyze multiple variables: argue that while the Qing faced serious outside threats (Docs 2, 3, 5, 6), it also faced deteriorating domestic socio-economic and political conditions (Docs 1, 4) and rising Han Chinese nationalism (Docs 5, 7). Foreign pressure mattered <em>because</em> it amplified internal weakness. Or make an insightful connection: compare the Qing with the Ottomans as &ldquo;semi-sovereign&rdquo; states that collapsed under Western imperialism, or explain why the Qing fell while Meiji Japan successfully modernized. <br><span class="wd-note-why"><strong>Official guidance:</strong> complexity must be developed as part of the argument (explaining nuance, corroborating/qualifying with evidence, or drawing cross-period/region connections), not a single &ldquo;it was complicated&rdquo; phrase.</span>'
        }
      ]
    }
  },

  /* ── UNIT 8: Cold War & Decolonization (c. 1900–present) ── */
  8: {
    saq: [
      {
        year: '2024', tag: 'SAQ 4: No stimulus',
        parts: [
          'Identify ONE political factor in the period after 1945 that facilitated the establishment of independent postcolonial states in Africa.',
          'Identify ONE economic factor in the period after 1945 that facilitated the establishment of independent postcolonial states in Africa.',
          'Explain ONE reason why postcolonial states in Africa often adopted communist or socialist ideologies.'
        ],
        partExemplars: [
          '<strong>Task = IDENTIFY a political factor (1 sentence).</strong> After 1945, nationalist parties such as Kwame Nkrumah&rsquo;s Convention People&rsquo;s Party in Ghana mobilized mass support to demand and win independence from colonial rule. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> the weakening of European imperial states after the World Wars; the expansion of nationalist/anti-imperialist ideas; African veterans of the World Wars using their service to seek independence; the United Nations&rsquo; emphasis on self-determination.</span>',
          '<strong>Task = IDENTIFY an economic factor (1 sentence).</strong> Many European powers were left economically exhausted by World War II, weakening their ability to pay for and hold onto their colonial empires. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> European states struggling economically after WWII; Cold War competition between communists and capitalists aiding some independence movements; the desire to keep natural resources and develop their own economies.</span>',
          '<strong>Task = EXPLAIN why socialism/communism was adopted (2–3 sentences).</strong> Because the European imperial powers had been capitalist states that economically exploited their colonies, many newly independent African leaders distrusted capitalism. They embraced socialism instead, using a strong state role in the economy to build industry and develop their countries, as Julius Nyerere did with ujamaa villages in Tanzania. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> new governments taking a strong role in the economy to promote development; opposition to the capitalism of the exploitative imperial powers; the USSR being seen as ascendant and an attractive ally; the Soviet Union actively supporting newly independent nations during the Cold War.</span>'
        ]
      },
      {
        year: '2023', tag: 'SAQ 1: Secondary source',
        source: 'Anthony Pagden, British historian, Peoples and Empires, 2003',
        excerpt: 'The fall of the modern European empires was as rapid as their rise had been, and in most places the reasons for their downfall were similar. Ultimately all [empires] had maintained their rule through [acceptance by conquered peoples] rather than by force or the threat of force. … What had applied to the Roman Empire also applied to the British and the French, the German, and, ultimately, even the Russian: subject peoples were only to remain in subjection so long as at least a significant number of them could see some benefit to them in so doing.\n\nResistance to any kind of rule requires organization and courage. In the case of resistance to colonial rule, however, it also requires some vision of a better future in some postcolonial world. It requires an ideology capable of mobilizing those who might otherwise be prepared to accept the status quo as merely inevitable. Ironically, this ideology was provided by the same refashioning of society that had been the driving force behind most modern imperialism, namely nationalism.',
        parts: [
          'Identify ONE claim that the author makes in the passage.',
          'Explain how ONE development in the second half of the twentieth century could be used to support the author’s claim about nationalism in the second paragraph.',
          'Explain how ONE development from the nineteenth or twentieth century could be used to challenge a claim that the author makes in the first paragraph.'
        ],
        partExemplars: [
          '<strong>Task = IDENTIFY a claim (1 sentence).</strong> The author claims that nationalism was the ideology that made resistance to colonial empires possible. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> that modern European empires fell rapidly; that nationalism was the cause of resistance to colonial empires; that subject peoples were willing to remain subjugated as long as a significant number of them saw a benefit from it.</span>',
          '<strong>Task = EXPLAIN a development that SUPPORTS the nationalism claim (2–3 sentences).</strong> The Algerian War of Independence (1954–1962) supports the author&rsquo;s claim about nationalism. The National Liberation Front (FLN) used nationalism to unite Algerians against French rule, giving them a vision of an independent Algeria worth fighting for. This nationalist movement mobilized mass resistance that eventually forced France to grant independence in 1962. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> rising nationalist sentiment leading revolutionaries to overthrow governments; the Indian independence movement driven by nationalists; Vietnamese nationalist resistance against French rule; nationalist independence movements in Africa led by figures such as Kwame Nkrumah.</span>',
          '<strong>Task = EXPLAIN a development that CHALLENGES a first-paragraph claim (2–3 sentences).</strong> The author&rsquo;s claim that the European empires fell rapidly is challenged by Portugal, which held Angola and Mozambique until 1975. Portugal&rsquo;s authoritarian government treated these colonies as overseas provinces and fought long wars against armed independence movements. This shows that some empires held on by force for decades after others had decolonized. <br><span class="wd-note-why"><strong>Officially credited answers include:</strong> the many examples of colonial resistance to imperial rule; European powers retaining colonies into the 1970s–80s (Portugal in Angola or Mozambique); how few colonial subjects welcomed political integration with the &ldquo;motherland&rdquo; (Senegal or Algeria in the French Empire).</span>'
        ]
      }
    ],
    leq: [{
      year: '2023', tag: 'LEQ 4',
      intro: 'In the mid- to late twentieth century, a variety of political, military, and nonviolent methods were used to bring about political and social change.',
      prompt: 'Develop an argument that evaluates the extent to which an individual, group, or movement in the mid- to late twentieth century successfully challenged existing power structures during this period.',
      rubric: [
        { key: 'thesis', label: 'Thesis / Claim', points: '1 pt',
          requirement: 'Respond to the prompt with a <strong>historically defensible thesis/claim</strong> that establishes a <strong>line of reasoning</strong> (give a reason or set up analytic categories). One place, intro OR conclusion; more than a restatement.',
          exemplar: 'A thesis with analytic categories: <em>&ldquo;Anti-imperialist nationalist movements used non-violent as well as violent tactics to end colonialism and establish newly independent nations.&rdquo;</em> Or: <em>&ldquo;In the United States, Dr. Martin Luther King, Jr. used peaceful civil disobedience to challenge the established racial hierarchies of segregation.&rdquo;</em> <br><span class="wd-note-why"><strong>Official guidance:</strong> take a position on the <em>extent</em> an individual/group/movement successfully challenged power structures. Does NOT earn: an off-topic or non-defensible claim (&ldquo;Gandhi fought a violent revolution&rdquo;).</span>' },
        { key: 'context', label: 'Contextualization', points: '1 pt',
          requirement: 'Describe a <strong>broader historical context</strong> relevant to the prompt (before, during, or after) in <strong>more than a phrase</strong>.',
          exemplar: '<em>&ldquo;Movements that challenged power structures were often inspired by the revolutionary ideas of Karl Marx and socialism.&rdquo;</em> <br><span class="wd-note-why"><strong>Officially credited context includes:</strong> the partition of states after WWII; the Cold War; decolonization and new independent nations; the spread of socialism and communism; rights-based movements; NATO and the Warsaw Pact; totalitarian/authoritarian states; Second Wave Feminism; the UN Declaration of Human Rights.</span>' },
        { key: 'evidence', label: 'Evidence: Two Specific Examples', points: '1 pt',
          requirement: 'Provide <strong>at least TWO specific, relevant historical examples</strong> connected to the topic of the prompt.',
          exemplar: 'Name at least two, e.g.: <strong>Gandhi&rsquo;s Salt March</strong> and satyagraha campaigns; the <strong>Indian National Congress</strong>; <strong>Martin Luther King Jr.</strong> and the U.S. Civil Rights Movement (boycotts, sit-ins, the March on Washington); <strong>Nelson Mandela</strong> and the <strong>African National Congress</strong>; the <strong>Viet Minh</strong>; <strong>Second Wave Feminists</strong>; environmentalist groups like <strong>Greenpeace</strong>. <br><span class="wd-note-why"><strong>Official guidance:</strong> earns 1 pt for two specific examples relevant to the challenging of power structures.</span>' },
        { key: 'evidence-support', label: 'Evidence: Supports the Argument', points: '2nd pt',
          requirement: 'Use those <strong>two specific examples to support an argument</strong> in response to the prompt (not merely list them).',
          exemplar: '<em>&ldquo;The Indian nationalist movement led by Mohandas Gandhi succeeded at ousting the British Empire through dedication to the principle of nonviolent resistance, as witnessed by his marches and protests.&rdquo;</em> <br><span class="wd-note-why"><strong>Official guidance:</strong> the 2nd evidence point requires using the examples to <em>support an argument</em> about how successfully a movement challenged power, not just listing them.</span>' },
        { key: 'reasoning', label: 'Historical Reasoning', points: '1 pt',
          requirement: 'Use a <strong>historical reasoning skill, comparison, causation, or continuity &amp; change, to frame and structure</strong> the argument.',
          exemplar: 'Structure by <strong>comparison</strong>: contrast nonviolent movements (Gandhi, MLK, Mandela&rsquo;s later negotiations) with violent ones (the Viet Minh, the Tamil Tigers) and evaluate which more successfully challenged power. Or by <strong>causation</strong>: mass mobilization and moral pressure &rarr; loss of imperial/segregationist legitimacy &rarr; political change. <br><span class="wd-note-why"><strong>Official guidance:</strong> the reasoning skill must organize the argument, even if unevenly developed.</span>' },
        { key: 'complexity', label: 'Complexity', points: '1 pt',
          requirement: 'Demonstrate a <strong>complex understanding</strong>: nuance, multiple causes/effects, similarity <em>and</em> difference, or insightful connections, developed with evidence.',
          exemplar: 'Qualify &ldquo;successfully&rdquo;: movements often won the immediate goal (independence, legal desegregation) yet left deeper power structures intact, such as economic inequality and Cold War dependency, so success was real but partial. Comparing violent and nonviolent methods shows both could work, but with different costs and durability. <br><span class="wd-note-why"><strong>Official guidance:</strong> complexity must be developed as part of the argument (weighing degrees of success), not a lone phrase.</span>' }
      ]
    }]
  },

  /* ── UNIT 9: Globalization (c. 1900–present) ── */
  9: {
    leq: [{
      year: '2024', tag: 'LEQ 4',
      intro: 'In the late twentieth century, globalization was driven by a variety of factors, including new technologies and economic and political change.',
      prompt: 'Develop an argument that evaluates the extent to which globalization was primarily driven by economic factors during this period.',
      rubric: [
        { key: 'thesis', label: 'Thesis / Claim', points: '1 pt',
          requirement: 'Respond to the prompt with a <strong>historically defensible thesis/claim</strong> that establishes a <strong>line of reasoning</strong> (give a reason or set up analytic categories). One place, intro OR conclusion; more than a restatement.',
          exemplar: 'A thesis with analytic categories: <em>&ldquo;The end of the Cold War was a major factor in globalization as former communist states embraced Western culture and technology, while a second factor was the expansion of free trade and economic liberalization.&rdquo;</em> <br><span class="wd-note-why"><strong>Official guidance:</strong> take a position on the <em>extent</em> globalization was primarily driven by economic factors. Does NOT earn: restating the prompt, or a bare claim (&ldquo;multinational corporations outsourced labor&rdquo;) with no reasoning.</span>' },
        { key: 'context', label: 'Contextualization', points: '1 pt',
          requirement: 'Describe a <strong>broader historical context</strong> relevant to the prompt (before, during, or after) in <strong>more than a phrase</strong>.',
          exemplar: '<em>&ldquo;During the twentieth century, industrialized economies provided their citizens with an ever-wider range of mass-produced goods, a development that had profound effects through the rise of consumerism and consumer culture.&rdquo;</em> <br><span class="wd-note-why"><strong>Officially credited context includes:</strong> European or U.S. imperialism; anticolonial/nationalist movements; neoimperialism; consumer culture; environmentalism and competition for resources; Cold War superpower competition; economic liberalization; 20th-century transportation and telecommunication technologies; the Industrial Revolution / industrial capitalism.</span>' },
        { key: 'evidence', label: 'Evidence: Two Specific Examples', points: '1 pt',
          requirement: 'Provide <strong>at least TWO specific, relevant historical examples</strong> connected to the topic of the prompt.',
          exemplar: 'Name at least two, e.g.: global institutions like the <strong>IMF, World Bank, or WTO</strong>; multinational corporations such as <strong>McDonald&rsquo;s, Coca-Cola, or Sony</strong>; economic liberalization in <strong>China</strong> or <strong>Vietnam</strong>; free-trade agreements like <strong>NAFTA</strong> or the <strong>EU</strong>; the <strong>Green Revolution</strong>; cultural globalization such as <strong>K-pop, Bollywood</strong>, or the <strong>World Cup</strong>. <br><span class="wd-note-why"><strong>Official guidance:</strong> earns 1 pt for two specific examples relevant to globalization.</span>' },
        { key: 'evidence-support', label: 'Evidence: Supports the Argument', points: '2nd pt',
          requirement: 'Use those <strong>two specific examples to support an argument</strong> in response to the prompt (not merely list them).',
          exemplar: '<em>&ldquo;The development of shipping containers and larger container ships, along with business-friendly laws in many low-wage Asian and Latin American countries, allowed Western corporations to offshore their production, transforming the global economy.&rdquo;</em> <br><span class="wd-note-why"><strong>Official guidance:</strong> the 2nd evidence point requires using the examples to <em>support an argument</em> about what drove globalization, not just listing them.</span>' },
        { key: 'reasoning', label: 'Historical Reasoning', points: '1 pt',
          requirement: 'Use a <strong>historical reasoning skill, comparison, causation, or continuity &amp; change, to frame and structure</strong> the argument.',
          exemplar: 'Structure by <strong>causation</strong>: new container-shipping and communications technology + economic liberalization &rarr; corporations offshore production &rarr; deeply integrated global economy. Or by <strong>comparison</strong>: weigh economic drivers against political ones (the collapse of the USSR opening markets). <br><span class="wd-note-why"><strong>Official guidance:</strong> the reasoning skill must organize the argument, even if unevenly developed.</span>' },
        { key: 'complexity', label: 'Complexity', points: '1 pt',
          requirement: 'Demonstrate a <strong>complex understanding</strong>: nuance, multiple causes/effects, or insightful connections, developed with evidence.',
          exemplar: 'Qualify &ldquo;primarily economic&rdquo;: economic forces (free trade, multinationals) clearly drove globalization, but they were enabled by <em>political</em> change (the end of the Cold War opening former communist markets) and <em>technological</em> change (the internet, container shipping), so economics was leading but inseparable from other factors. <br><span class="wd-note-why"><strong>Official guidance:</strong> complexity must be developed as part of the argument (weighing economic against political/technological drivers), not a lone phrase.</span>' }
      ]
    }]
  }
};

/* ============================================================
   More released prompts (added 2026-10-11), only for units whose
   Writing page was thin. Prompt and document text is from the
   College Board FRQ PDFs (em dashes changed to colons/commas per site
   style); "Officially credited" notes come from the matching scoring
   guidelines. Every released prompt, PDF, and scoring-guide link is
   catalogued in source-docs/released-frqs/README.md.
   ============================================================ */
(function (W) {
  function add(u, kind, items) {
    W[u] = W[u] || {};
    if (kind === 'dbq') { if (!W[u].dbq) W[u].dbq = items; return; }
    W[u][kind] = (W[u][kind] || []).concat(items);
  }
  var REQ = {
    thesis: 'Respond to the prompt with a <strong>historically defensible thesis/claim</strong> that establishes a <strong>line of reasoning</strong> (give a reason or set up analytic categories). One place, intro OR conclusion; more than a restatement.',
    context: 'Describe a <strong>broader historical context</strong> relevant to the prompt (developments before, during, or after) in <strong>more than a phrase</strong>.',
    evidence: 'Provide <strong>at least TWO specific, relevant historical examples</strong> connected to the topic of the prompt.',
    support: 'Use those <strong>two specific examples to support an argument</strong> in response to the prompt (not merely list them).',
    reasoning: 'Use a <strong>historical reasoning skill, comparison, causation, or continuity &amp; change, to frame and structure</strong> the argument (not a stray transition word).',
    complexity: 'Demonstrate a <strong>complex understanding</strong>: nuance, multiple causes/effects, similarity <em>and</em> difference, or insightful connections across regions or periods, developed with evidence.',
    docs3: 'Accurately <strong>describe the content</strong> (rather than merely quote) of at least <strong>THREE documents</strong> to address the topic of the prompt.',
    docs4: 'Support an argument in response to the prompt by accurately using the content of at least <strong>FOUR documents</strong>.',
    sourcing: 'For at least <strong>TWO documents</strong>, explain how or why the document&rsquo;s <strong>H</strong>istorical situation, <strong>I</strong>ntended audience, <strong>P</strong>oint of view, and/or <strong>P</strong>urpose is <strong>relevant to an argument</strong>.',
    outside: 'Use at least <strong>ONE specific piece of historical evidence NOT found in the documents</strong> (and different from your contextualization) that is relevant to an argument about the prompt.'
  };
  var WHY = function (s) { return ' <br><span class="wd-note-why">' + s + '</span>'; };

  /* ── UNIT 1 ── */
  add(1, 'saq', [{
    year: '2026', tag: 'SAQ 1: Secondary source',
    source: 'Ralph A. Austen, United States historian of Africa, Trans-Saharan Africa in World History, book published in 2010',
    excerpt: '“In the year 1324 CE, a memorable event took place in Cairo. Mansa Musa, ruler of the [West African] empire of Mali, stopped there for three days during a pilgrimage to...Mecca. Cairo at this time was an extremely sophisticated metropolis, and its inhabitants would not ordinarily have paid much attention to foreign travelers. But Mansa Musa was so wealthy...that his expenditures of gold and his conversations with local notables were recorded in great detail.\n\nThe story of Mansa Musa tells a good deal about the role of the Sahara in world history. First, it shows that by the fourteenth century CE the great desert could be safely crossed, even by a mighty king carrying precious goods and accompanied by a large body of followers. Second, it indicates that the lands to the south of the Sahara were...organized into large states and that at least some of their inhabitants had become pious Muslims. Finally, it tells us something about the economic basis for more regular trans-Saharan travel, as [West African] gold was of great value for both the Islamic world and Christian Europe during the late Middle Ages.”',
    parts: [
      'Describe one likely reason for Mansa Musa’s journey to Cairo and Mecca.',
      'Describe one piece of evidence not found in the passage that could be used to support a claim made by the author in the second paragraph.',
      'Using a specific example, explain how long-distance trade routes affected the societies they connected in the period 1200 to 1450.'
    ],
    partExemplars: [
      '<strong>Task = DESCRIBE a reason (1–2 sentences).</strong> As a Muslim ruler, Mansa Musa made the hajj to Mecca to fulfill one of the Five Pillars of Islam, and his lavish display of gold also advertised Mali&rsquo;s wealth and power to the wider Islamic world.' + WHY('<strong>Model answer written for this site.</strong> College Board has not yet released the 2026 scoring guidelines, so check back against them when they appear.'),
      '<strong>Task = DESCRIBE outside evidence (1–2 sentences).</strong> Timbuktu&rsquo;s rise as a center of Islamic learning, with mosques such as Sankore and scholars who drew students from across North Africa, supports the author&rsquo;s claim that West Africa was organized into large Muslim states.' + WHY('<strong>Model answer written for this site.</strong> Other strong choices: camel caravans and the camel saddle that made desert crossings routine; Ibn Battuta&rsquo;s visit to Mali in the 1350s; the Great Mosque of Djenné.'),
      '<strong>Task = EXPLAIN an effect with a specific example (2–3 sentences).</strong> Trans-Saharan trade carried Islam into West Africa along with goods such as gold and salt. Merchants and scholars who traveled the caravan routes brought Arabic literacy and Islamic law, so the rulers of Mali converted and built mosques in cities such as Timbuktu. This linked West Africa to the wider Dar al-Islam.' + WHY('<strong>Model answer written for this site.</strong> Indian Ocean trade (Swahili city-states blending Bantu and Arabic culture) or the Silk Roads (the spread of the Black Death) also work.')
    ]
  }]);
  add(1, 'leq', [{
    year: '2025', tag: 'LEQ 2',
    intro: 'In the period circa 1200 to 1450, Buddhism, Hinduism, and Confucianism included ideas about social structures, gender roles, and political authority that influenced societies across Asia.',
    prompt: 'Develop an argument that evaluates the extent to which one or more of these belief systems shaped societies and/or political systems in Asia during this period.',
    rubric: [
      { key: 'thesis', label: 'Thesis / Claim', points: '1 pt', requirement: REQ.thesis,
        exemplar: 'A thesis with analytic categories: <em>&ldquo;While the philosophy of Confucianism strengthened the Chinese state by maintaining imperial bureaucracy and social hierarchies, it also provided a justification for subjects to rebel against or even overthrow the ruling dynasty if they believed that it had lost the Mandate of Heaven.&rdquo;</em>' + WHY('<strong>Officially credited.</strong> Minimally acceptable: &ldquo;Confucianism shaped the culture of China by providing support for patriarchy.&rdquo; Does NOT earn: a restatement of the prompt, or a claim with no line of reasoning such as &ldquo;Buddhism spread from India to China via the Silk Roads.&rdquo;') },
      { key: 'context', label: 'Contextualization', points: '1 pt', requirement: REQ.context,
        exemplar: '<em>&ldquo;Buddhism spread from its original home in South Asia, first to China, and from there even further east to Korea and Japan.&rdquo;</em>' + WHY('<strong>Officially credited context includes:</strong> Neo-Confucianism and its spread to Japan and Korea; branches of Buddhism; the spread of Hinduism and Buddhism into Southeast Asia; patriarchy in Asian societies; the Song economic &ldquo;miracle&rdquo; and Song support for Confucianism.') },
      { key: 'evidence', label: 'Evidence: Two Specific Examples', points: '1 pt', requirement: REQ.evidence,
        exemplar: 'Name at least two, e.g.: the Song <strong>civil service examinations</strong> on Confucian texts; <strong>Neo-Confucianism</strong> and the scholar-gentry; <strong>foot binding</strong>; the <strong>caste system</strong> (varnas and jatis); Hindu and Buddhist states like the <strong>Khmer Empire</strong>; Buddhist monasteries.' + WHY('<strong>Officially credited:</strong> &ldquo;Korean leaders adopted Neo-Confucianism as the state ideology and used a version of the Chinese examination system to recruit state officials.&rdquo;') },
      { key: 'evidence-support', label: 'Evidence: Supports the Argument', points: '2nd pt', requirement: REQ.support,
        exemplar: '<em>&ldquo;In India Hinduism taught that different social groups had always been separate and ought to remain that way forever. This led to the emergence of a rigid caste system, which gave predominance to the priestly Brahmin group and the warrior group who often combined to form the political elites of various Hindu states.&rdquo;</em>' + WHY('<strong>Officially credited</strong> as using evidence to support an argument about how Hinduism shaped social and political structures.') },
      { key: 'reasoning', label: 'Historical Reasoning', points: '1 pt', requirement: REQ.reasoning,
        exemplar: 'Structure by <strong>causation</strong>: <em>&ldquo;The revival of Confucianism during the Song Dynasty led to a tightening of patriarchal restrictions on women because of the Confucian belief in the father/emperor having ultimate control over his family/people.&rdquo;</em>' + WHY('<strong>Officially credited</strong> example of historical reasoning (an effect of Confucianism on women).') },
      { key: 'complexity', label: 'Complexity', points: '1 pt', requirement: REQ.complexity,
        exemplar: 'Show variety: Buddhism took different forms (Theravada in South and Southeast Asia, Mahayana in China, Korea, Japan, and Vietnam) and became a state religion in Southeast Asia and Tibet while it was viewed as foreign by many Confucian officials in China.' + WHY('<strong>Official guidance:</strong> complexity can also come from showing Confucianism and Buddhism influencing societies in different, sometimes contradictory ways, or comparing Buddhist and Christian monasticism.') }
    ]
  }]);

  /* ── UNIT 2 ── */
  add(2, 'saq', [{
    year: '2026', tag: 'SAQ 3: No stimulus',
    parts: [
      'Describe one geographic or environmental characteristic of the Indian Ocean trade network in the period circa 1200 to 1450.',
      'Explain how technological or economic developments contributed to the growth of trade in the Indian Ocean in the period circa 1200 to 1450.',
      'Explain how the growth of trade in the Indian Ocean affected states or societies in the period circa 1200 to 1450.'
    ],
    partExemplars: [
      '<strong>Task = DESCRIBE a characteristic (1–2 sentences).</strong> The monsoon winds blew in predictable seasonal directions, northeast in winter and southwest in summer, so sailors could time voyages between East Africa, Arabia, India, and China.' + WHY('<strong>Model answer written for this site.</strong> The 2026 scoring guidelines have not been released yet.'),
      '<strong>Task = EXPLAIN a development (2–3 sentences).</strong> Improved ships and navigation tools, such as the dhow with its lateen sail, the Chinese junk, and the magnetic compass, let merchants sail longer distances more safely. Because voyages became more reliable, merchants could carry larger cargoes of spices, textiles, and porcelain, which increased the volume of Indian Ocean trade.' + WHY('<strong>Model answer written for this site.</strong> Economic answers also work: bills of exchange and credit, or growing demand for Chinese porcelain and silk and Indian cotton.'),
      '<strong>Task = EXPLAIN an effect (2–3 sentences).</strong> Trade made Swahili city-states such as Kilwa wealthy, because they controlled the export of gold and ivory from the African interior. Muslim merchants from Arabia and Persia settled in these ports, and local rulers converted to Islam to strengthen their trade ties with them. As a result, Swahili culture and language blended Bantu and Arabic elements.' + WHY('<strong>Model answer written for this site.</strong> Other examples: the rise of Malacca by controlling its strait; diasporic merchant communities of Arabs and Persians in Chinese ports; the spread of Islam to Southeast Asia.')
    ]
  }]);

  /* ── UNIT 4 ── */
  add(4, 'saq', [{
    year: '2025', tag: 'SAQ 1: Secondary source',
    source: 'Jack Weatherford, United States anthropologist, academic book, 1988',
    excerpt: '“Asia experienced a temporary gain from the discovery of America, but Africa suffered. America had all the silver and gold Europe needed, and this destroyed the African gold markets and the dependent trade networks. Cities such as Timbuktu and the Songhai Empire of which it was a part crumbled as merchants abandoned the ancient trade routes.\n\nTo replace the Mediterranean trade of cloth, beads, leather, and metals upon which the Africans had become dependent, the Africans now had only one commodity that the Europeans wanted: slaves. For centuries the African merchants had sold a small but steady number of slaves to the Middle East, but with the decline of their traditional European trade and with the opening of America, the slave trade became a boom. The Africans thus became victims of the discovery of America as surely as did the American Indians.”',
    parts: [
      'Identify one claim that the author makes in the first paragraph about the effect of the discovery of the Americas on Africa.',
      'Describe one economic change in the Americas that occurred as a result of the developments discussed in the second paragraph.',
      'Explain one reason why “American Indians” “became victims of the discovery of America” as suggested by the author in the last sentence of the passage.'
    ],
    partExemplars: [
      '<strong>Task = IDENTIFY a claim (1 sentence).</strong> The author claims that American silver and gold destroyed African gold markets and the trade networks that depended on them.' + WHY('<strong>Officially credited answers include:</strong> the African gold markets were destroyed; it caused the decline of cities and empires in Africa; it caused the abandonment of ancient trade routes.'),
      '<strong>Task = DESCRIBE an economic change (1–2 sentences).</strong> As the African slave trade boomed, the plantation system spread across the Americas. Planters in Brazil and the Caribbean used the labor of enslaved Africans to grow sugar and other cash crops for export to Europe.' + WHY('<strong>Officially credited answers include:</strong> the plantation system became widespread; more enslaved labor from Africa developed the triangular trade; the decline of Indigenous labor created demand for more enslaved laborers from Africa.'),
      '<strong>Task = EXPLAIN a reason (2–3 sentences).</strong> The Columbian Exchange brought Afro-Eurasian diseases such as smallpox to the Americas. Native Americans had no immunity to these diseases, so epidemics killed a large majority of the Indigenous population and devastated societies such as the Aztec and Inca empires.' + WHY('<strong>Officially credited answers include:</strong> disease from the Columbian Exchange; exploitation of Native labor through the encomienda and hacienda systems; loss of homelands to European colonists; forced Christianization and the loss of cultural traditions.')
    ]
  }]);
  add(4, 'leq', [{
    year: '2025', tag: 'LEQ 3',
    intro: 'In the period circa 1450 to 1750, economic, political, and religious rivalries led many imperial states around the world to expand their territories and influence.',
    prompt: 'Develop an argument that evaluates the extent to which economic rivalries were the primary motivation for the expansion of European empires during this period.',
    rubric: [
      { key: 'thesis', label: 'Thesis / Claim', points: '1 pt', requirement: REQ.thesis,
        exemplar: '<em>&ldquo;Global exploration and imperial expansion in the period circa 1450 to 1750 was primarily motivated by economic rivalries because the empires competed over control of not only precious metals and other raw materials, but also labor and land resources.&rdquo;</em>' + WHY('<strong>Officially credited.</strong> Minimally acceptable: &ldquo;European states colonized overseas territories in order to control more natural resources.&rdquo;') },
      { key: 'context', label: 'Contextualization', points: '1 pt', requirement: REQ.context,
        exemplar: '<em>&ldquo;Portugal was a leader in the exploration of overseas territories and the establishment of the global trading-post empire.&rdquo;</em>' + WHY('<strong>Officially credited context includes:</strong> state-sponsored exploration; the search for a short route to China and India; mercantilism; maritime technology; joint-stock companies; wars between empires over territory; the desire to avoid Muslim-controlled overland routes.') },
      { key: 'evidence', label: 'Evidence: Two Specific Examples', points: '1 pt', requirement: REQ.evidence,
        exemplar: 'Name at least two, e.g.: the global flow of <strong>silver</strong> from Potosí; <strong>plantation economies</strong> and the <strong>transatlantic slave trade</strong>; <strong>trading posts</strong> in Africa and Asia; <strong>mercantilism</strong>; the <strong>Dutch and English East India Companies</strong>.' + WHY('<strong>Officially credited evidence list</strong> from the 2025 scoring guidelines.') },
      { key: 'evidence-support', label: 'Evidence: Supports the Argument', points: '2nd pt', requirement: REQ.support,
        exemplar: '<em>&ldquo;The discovery of silver in the Americas enabled Spain to establish a global trade in silver, stretching from Europe, through Spanish colonies in North and South America, and across the Pacific to Manila and East Asia. The silver trade changed the global economy as the Spanish and other Europeans were now able to greatly increase their trade with China.&rdquo;</em>' + WHY('<strong>Officially credited</strong> as evidence supporting an argument.') },
      { key: 'reasoning', label: 'Historical Reasoning', points: '1 pt', requirement: REQ.reasoning,
        exemplar: 'Structure by <strong>causation</strong>: <em>&ldquo;Because Portugal was united with Spain and the Netherlands was involved in a war of independence from Spain, the Dutch VOC considered the Portuguese to be their enemies and attacked and expelled them from trading posts in parts of Asia.&rdquo;</em>' + WHY('<strong>Officially credited</strong> (a cause/effect link between rivalry and expansion).') },
      { key: 'complexity', label: 'Complexity', points: '1 pt', requirement: REQ.complexity,
        exemplar: 'Weigh motives: economic rivalry clearly drove the trading-post empires of the Dutch and English East India Companies, but religious goals (Spanish missionaries in the Americas and the Philippines) and political rivalry with the Ottomans also mattered, so economics was the leading but not the only motive.' + WHY('<strong>Official guidance:</strong> complexity may also come from explaining how new legal and financial tools (limited liability, stock exchanges, insurance) let Europeans build company empires.') }
    ]
  }]);
  add(4, 'dbq', {
    year: '2019', tag: 'DBQ (Question 1), adapted to the current rubric',
    prompt: 'Evaluate the extent to which the Portuguese transformed maritime trade in the Indian Ocean in the sixteenth century.',
    documents: [
      { n: 1, source: 'Advice given in 1500 by the Muslim merchants of Calicut to the Hindu ruler of Calicut concerning the arrival of the second Portuguese expedition to the city. Recorded in the History of the Discovery and Conquest of India by the Portuguese by Fernão Lopes de Castanheda, a Portuguese historian, published in 1551.',
        text: 'Your Majesty: we are astonished that you should lower yourself by receiving these Portuguese enemies into your kingdom, who seem to be pirates rather than merchants. We, your Muslim subjects, have always been loyal to you and have brought valuable foreign merchandise to this country and have exported its native products to increase your revenue greatly. You appear to forget all this, by receiving those newcomers into your favor as if your own numerous and faithful subjects were incompetent for the purpose. In this you dishonor yourself, and embolden these strangers to hold your power in contempt.\n\nThe true intent of the Portuguese in coming into these seas is to take possession of your city, and not to trade for spices as they pretend. The place you have given them for a trading post, they will convert into a fort, from where they will make war on you when you least expect it. We say these things to you out of good will rather than out of any desire for profit; for if you do not listen to our advice, there are other cities on India’s Malabar Coast from which we can conduct our trade in spices.' },
      { n: 2, source: 'Duarte Barbosa, government official employed in a Portuguese trading-post on the Malabar Coast, travel narrative published in Portugal in 1516.',
        text: 'The Muslims in Calicut are rich, and live well, and they used to control all the sea trade from that town. Indeed, if the king of Portugal had not discovered India, Malabar would already have been in the hands of the Muslims.\n\nIn addition to the local Muslims, there are also foreign Muslims in Calicut such as Arabs, Persians, and Gujaratis. They are great merchants, sail to all parts of the world with their goods, and have their own Muslim leader who rules over them and disciplines them as necessary, without the Hindu king of Calicut meddling with them. And before the king of Portugal discovered the country, the Muslim traders were so numerous and powerful in the city of Calicut that the Hindus did not dare to enter into disputes with them.\n\nAnd after the king of Portugal made himself master there, and these Muslims saw that they could not defend their position there, they began to leave Calicut, so that very few of them remain today.' },
      { n: 3, source: 'Anonymous Portuguese court official’s letter of advice to King Sebastian of Portugal regarding a proposal to conclude a peace treaty and establish free trade with the Ottoman Empire, mid-1560s.',
        text: 'If the Turks were allowed to travel freely to India, and establish their own trading-posts, and trade in merchandise wherever they wished, Your Majesty’s own profits would suffer greatly. If that were to happen, all of the business handled by our merchants would immediately fall to the Turks because their empire is much closer to India. The duration of their voyages, their transportation costs, the risks they would face, and the damage they would sustain to their ships and their merchandise would be less than half of that suffered by our own ships.\n\nPortugal’s state monopoly in pepper and other controlled spices would also be threatened by allowing the Turks to establish trade in India. Even now, when they have not been able to openly compete against us, it is known that they conduct trade in secret, carrying spices to Persia, Bengal, Southeast Asia, and China, and especially to their own markets, despite our efforts to stop them.\n\nThus, if the Turks are allowed to operate freely, their ties with local Muslims would make them even better informed and better organized than us, so that they could send as much pepper as they wanted by means of the Red Sea and Persian Gulf, and become masters of the lion’s share of the trade in spices.' },
      { n: 4, source: 'Alauddin Riayat Syah al-Kahar, ruler of the Sultanate of Aceh, a Muslim state on the island of Sumatra, Indonesia, letter to the Ottoman sultan Suleiman I, 1566.',
        text: 'It is our firm belief that if your Majesty better understood the circumstances of Aceh and our long struggle against the miserable Portuguese infidels, your Imperial compassion would be awakened. As you know, the pilgrim and merchant vessels from all the ports of Indonesia must pass through the Maldive Islands on their way to Mecca and the Red Sea, and between all 24,000 Maldive Islands, there are just four channels where a ship can pass safely. The infidel Portuguese wait around the entrances of these channels. When our ships arrive there, the Portuguese stop and take possession of as many as they can. Any ship they cannot capture they sink with cannon fire, either leaving the Muslims aboard to drown, or capturing and enslaving them.\n\nThe Portuguese have even dared attack Ottoman ships belonging to your Majesty. For example, in the year 1565, your officials came to Aceh and left for Istanbul loaded with pepper, silk, cinnamon, cloves, and other products from Indonesia. Portuguese vessels intercepted the ship at the Maldives and sank it. Five hundred Muslims drowned and the rest were enslaved.\n\nSo, we request that your Imperial Majesty grant us siege cannons and ask that you instruct the Ottoman governors of Egypt and Aden to allow our representatives to come to your Majesty’s illustrious court and obtain all the horses, armor, and other weapons that we will need for our defense against the Portuguese.' },
      { n: 5, source: 'Zainudeen Makhdoom Al Sageer, Muslim religious scholar and historian from Calicut, southern India, address to southern Indian Muslims, written circa 1570.',
        text: 'After the Portuguese had established themselves in Cochin on the Malabar Coast, they forced every vessel, however small, to carry a safe conduct pass, which was issued for a certain fee. The Portuguese, in imposing this toll, claimed that it would improve commerce. To enforce the toll, they seized the cargo and crew of any ship that did not have its pass!\n\nIn addition to this system of persecution, the Portuguese deployed ships all over the Indian Ocean to lie in wait and intercept vessels. In this way, they unjustly acquired vast wealth and captured countless prisoners.\n\nSoon, as a result of his lengthy conflict with the Portuguese, the ruler of our city of Calicut almost entirely exhausted his treasure and resources and his kingdom became strained to the limit. Because he was tired of war, the prince entered into a treaty in 1515 allowing the Portuguese to build a fort in Calicut in exchange for allowing his subjects to send four ships every year to Arabian ports. Afterward, the Portuguese set about building their fortifications, while the merchants of Calicut prepared four ships loaded with pepper and ginger for dispatch to the Arabian coast and, at the same time, resumed trading with Gujarat and other foreign ports while carrying with them the passes from the Portuguese.' },
      { n: 6, source: 'Cesare Federici, Venetian trader, The Voyage and Travel to East India, published in Venice, 1587.',
        text: 'In the city of Cambay in northwestern India, Hindu brokers of great authority have traditionally handled all transactions at the port, and the Portuguese merchants observe this custom. Every foreign merchant who does business in the country has his own broker who works with him in buying and selling his merchandise. When a new fleet of ships sails into port at Cambay, the brokers come to the dock and the foreign merchants give them all their cargo. The merchants carefully note all the bundles and packs of goods that they are giving to the brokers, and the brokers command their servants to take the merchants and lodge them in one of the many houses kept for this purpose; the broker says to the merchant, “Go and take your rest, while I conduct your trade.”\n\nAfter Goa, Cochin is the most important base the Portuguese have in southwestern India. Much of the merchandise destined for the kingdom of Portugal originates there. Inland from Cochin is the pepper-producing region. But the pepper that goes to Portugal from Cochin is not as good as the pepper that goes to Arabia and Persia because the Portuguese had made a contract with the king of Cochin to buy the pepper at a very low price. Because of that, the Indian pepper growers bring their worst produce to the Portuguese and sell them pepper that is green and full of filth.' },
      { n: 7, source: 'Inlaid box made in Gujarat, India, for export to Portugal, circa 1600. Teak, ebony, and other precious hardwoods, with ivory details.',
        image: 'images/u4-dbq-box.jpg',
        imageAlt: 'A long, low wooden box on ivory ball feet, inlaid all over in ivory with scrolling vines, birds, deer, a tiger attacking an animal, and a hunter in European-style clothing aiming a musket.',
        imageCredit: 'Inlaid box, Gujarat, India, c. 1600. © Cynthia Hazen Polsky and Leon B. Polsky Fund, 2000.',
        text: '[Object] A dark wooden box inlaid with ivory. Its sides show scrolling vines and flowers, birds, deer, a tiger attacking another animal, and a hunter dressed in European style firing a musket.' }
    ],
    rubric: [
      { key: 'thesis', label: 'Thesis / Claim', points: '1 pt', requirement: REQ.thesis,
        exemplar: '<em>&ldquo;Although the arrival of the Portuguese was a very important change in Indian Ocean maritime trade in the sixteenth century, it did not completely transform the trade, as the Portuguese never extended their control beyond a few ports and had to compete with Indian merchants and regional states such as the Ottoman Empire and the Sultanate of Aceh.&rdquo;</em>' + WHY('<strong>Officially credited.</strong> Minimally acceptable: &ldquo;The Portuguese transformed maritime trade in Indian Ocean in the sixteenth century by taxing non-Portuguese ships that traded in the region.&rdquo;') },
      { key: 'context', label: 'Contextualization', points: '1 pt', requirement: REQ.context,
        exemplar: '<em>&ldquo;For centuries before the arrival of European merchants, the Indian Ocean had been the center of flourishing trade routes connecting India to East and Southeast Asia as well as with East Africa, Egypt, and Arabia.&rdquo;</em>' + WHY('<strong>Officially credited.</strong> Context must be relevant to Indian Ocean maritime trade before or during the Portuguese arrival.') },
      { key: 'evidence-docs', label: 'Evidence: Uses the Documents', points: '1 pt', requirement: REQ.docs3,
        exemplar: '<strong>Doc 3:</strong> <em>&ldquo;The anonymous Portuguese court official is arguing that Portugal should do all it can to prevent Turkish merchants from establishing direct trade between India and the Ottoman Empire.&rdquo;</em>' + WHY('<strong>Officially credited</strong> as accurately describing a document (addresses the topic but is not yet tied to an argument).') },
      { key: 'evidence-support', label: 'Evidence: Supports the Argument (4 documents)', points: '2nd pt', requirement: REQ.docs4,
        exemplar: '<strong>Doc 6:</strong> <em>&ldquo;The Venetian trader Cesare Federici&rsquo;s account shows how in Cambay the Portuguese are almost completely dependent on their Hindu brokers to carry out their trade, showing that the Portuguese adapted to existing Indian Ocean trade.&rdquo;</em>' + WHY('<strong>Officially credited.</strong> The 2019 exam required six documents for this point; the current rubric requires four.') },
      { key: 'sourcing', label: 'Sourcing / HIPP (2 documents)', points: '1 pt', requirement: REQ.sourcing,
        exemplar: '<strong>Doc 5 (POV):</strong> <em>&ldquo;Being a Muslim scholar, Zainudeen Makhdoom al Sageer is understandably hostile to the Portuguese trade pass system that targeted mostly Muslim traders, calling it a &lsquo;system of persecution,&rsquo; and saying it allowed the Portuguese to &lsquo;unjustly&rsquo; become rich.&rdquo;</em> <strong>Doc 2 (POV):</strong> <em>&ldquo;This Portuguese government official would have wanted to emphasize the positive effects of the Portuguese establishing trading posts there.&rdquo;</em>' + WHY('<strong>Officially credited</strong> sourcing examples.') },
      { key: 'outside', label: 'Outside Evidence (Beyond the Documents)', points: '1 pt', requirement: REQ.outside,
        exemplar: 'Portuguese naval technology such as the caravel and the carrack, with shipboard cannon, let small Portuguese fleets defeat larger Indian Ocean fleets and seize ports like Goa (1510) and Malacca (1511).' + WHY('<strong>Officially credited ideas include:</strong> Portuguese navigational technology (caravels, carracks); Ottoman–Christian rivalry such as the Battle of Lepanto; the Safavid Empire checking Portuguese expansion; the political fragmentation of India.') },
      { key: 'complexity', label: 'Complexity', points: '1 pt', requirement: REQ.complexity,
        exemplar: 'Argue that the Portuguese both disrupted existing trade (violent seizures and passes in Docs 4 and 5) and adapted to it (Hindu brokers in Doc 6), while also creating new business for Indian makers of export goods (Doc 7).' + WHY('<strong>Official guidance:</strong> complexity may also come from comparing Portuguese imperialism in the Indian Ocean with patterns in Brazil, West Africa, Japan, China, or the spice islands.') }
    ]
  });

  /* ── UNIT 5 ── */
  add(5, 'saq', [{
    year: '2025', tag: 'SAQ 4: No stimulus',
    parts: [
      'Identify one factor that contributed to the outbreak of revolutions in the period circa 1750 to 1900.',
      'Explain one way that revolutionary movements used ideologies in their attempts to change societies during the period circa 1750 to 1900.',
      'Explain one way in which revolutionary movements were challenged as they attempted to change societies during the period circa 1750 to 1900.'
    ],
    partExemplars: [
      '<strong>Task = IDENTIFY a factor (1 sentence).</strong> The spread of Enlightenment ideas about natural rights and popular sovereignty contributed to revolutions across the Atlantic world.' + WHY('<strong>Officially credited answers include:</strong> the spread of Enlightenment ideas; the success of the American and French Revolutions inspiring revolutions in Latin America and Haiti; the weakening of the Spanish overseas empire.'),
      '<strong>Task = EXPLAIN a use of ideology (2–3 sentences).</strong> Revolutionaries used Enlightenment ideas of natural rights to write new constitutions and declarations, such as the French Declaration of the Rights of Man and of the Citizen in 1789. This turned those ideas into law, because the declaration ended hereditary privileges and made citizens equal before the law.' + WHY('<strong>Officially credited answers include:</strong> using natural rights to establish new laws or constitutions; the French Revolution using nationalism to fight wars across Europe; the Haitian Revolution using anti-colonial nationalism to reject French rule and found an independent state.'),
      '<strong>Task = EXPLAIN a challenge (2–3 sentences).</strong> Established elites and imperial powers fought back against revolutions. In Haiti, France sent an army under General Leclerc in 1802 to restore colonial control and slavery. The French captured the revolutionary leader Toussaint Louverture, and Haitians had to fight for two more years before winning independence in 1804.' + WHY('<strong>Officially credited answers include:</strong> opposition from powerful states that mobilized armies to suppress revolts; resistance from established elites; the Ottoman suppression of nationalist revolts in the Balkans.')
    ]
  }]);
  add(5, 'leq', [{
    year: '2025', tag: 'LEQ 3 (Set 2)',
    intro: 'During the eighteenth century, Enlightenment philosophers developed new ideas about individual rights and the role of governments.',
    prompt: 'Develop an argument that evaluates the extent to which Enlightenment ideas encouraged movements for political change and/or social reform during the period circa 1750 to 1900.',
    rubric: [
      { key: 'thesis', label: 'Thesis / Claim', points: '1 pt', requirement: REQ.thesis,
        exemplar: '<em>&ldquo;Social reform movements were facilitated by the Enlightenment as can be seen from the abolition movement and its focus on natural rights.&rdquo;</em>' + WHY('<strong>Officially credited.</strong> Minimally acceptable: &ldquo;Enlightenment ideas encouraged movements for political change through the American Revolution and the French Revolution.&rdquo;') },
      { key: 'context', label: 'Contextualization', points: '1 pt', requirement: REQ.context,
        exemplar: '<em>&ldquo;Enlightenment philosophies focused on new ways of understanding and empiricist approaches that grew out of the Scientific Revolution and applied them to human relationships.&rdquo;</em>' + WHY('<strong>Officially credited context includes:</strong> the Atlantic Revolutions; thinkers such as Voltaire, Rousseau, Locke, and Wollstonecraft; classical liberalism and expanding suffrage; the Scientific Revolution; debates about women&rsquo;s roles; industrialization.') },
      { key: 'evidence', label: 'Evidence: Two Specific Examples', points: '1 pt', requirement: REQ.evidence,
        exemplar: 'Name at least two, e.g.: the <strong>Declaration of Independence</strong>, the <strong>Declaration of the Rights of Man and of the Citizen</strong>, or Bolívar&rsquo;s <strong>&ldquo;Letter from Jamaica&rdquo;</strong>; the <strong>abolition of slavery</strong> or <strong>serfdom</strong>; <strong>socialism</strong> and labor unions; the <strong>Tanzimat</strong>; reforms in <strong>Meiji Japan</strong>; women&rsquo;s suffrage.' + WHY('<strong>Officially credited evidence list</strong> from the 2025 Set 2 scoring guidelines.') },
      { key: 'evidence-support', label: 'Evidence: Supports the Argument', points: '2nd pt', requirement: REQ.support,
        exemplar: 'Tie evidence to the claim: the Declaration of the Rights of Man and of the Citizen turned Enlightenment ideas of natural rights and popular sovereignty into law, which revolutionaries used to justify ending the privileges of the nobility and clergy.' + WHY('<strong>Official note:</strong> &ldquo;The French Revolution abolished the monarchy and replaced it with an elected Chamber of Deputies but later went back to a monarchical government under Napoleon&rdquo; earns the first evidence point.') },
      { key: 'reasoning', label: 'Historical Reasoning', points: '1 pt', requirement: REQ.reasoning,
        exemplar: 'Structure by <strong>causation</strong>: <em>&ldquo;The women&rsquo;s suffrage movement was created by women who used Enlightenment ideas of natural rights to claim that their exclusion from public life was unjust and to demand the right to political participation.&rdquo;</em>' + WHY('<strong>Officially credited</strong> (a causal connection between Enlightenment ideas and a reform movement).') },
      { key: 'complexity', label: 'Complexity', points: '1 pt', requirement: REQ.complexity,
        exemplar: 'Show limits: the American Revolution was inspired by natural rights, yet the new nation did not grant civil rights to women or enslaved people, while the Haitian Revolution went further by ending slavery.' + WHY('<strong>Officially credited ideas.</strong> Another: explaining how Enlightenment ideas later fueled twentieth-century anti-colonial movements such as India&rsquo;s.') }
    ]
  }]);
  add(5, 'dbq', {
    year: '2025', tag: 'DBQ (Question 1, Set 2)',
    prompt: 'Evaluate the extent to which the spread of industrialization provided women with new opportunities and/or challenges during the period circa 1850 to 1950.',
    documents: [
      { n: 1, source: 'Vera Karelina, Russian woman labor activist and revolutionary, describing her work as a political organizer among factory workers in St. Petersburg in the 1890s, memoir published in the Soviet Union in 1926',
        text: '“I began the mass organization of women in the Factory Workers’ Society. Each branch of the Society elected its own chairwoman and secretary. The chairwoman of one of the branches was Maria Soldatova, who worked at a cigarette factory.\n\nMaria was forty years old and illiterate. But she possessed inexhaustible energy and natural organizational ability and could understand and think quickly. Despite her illiteracy, Maria was unanimously elected chairwoman of her branch. She often complained about her illiteracy, and would always say, ‘If only I could read and write, I could do so much more for the factory and the Society.’ When someone offered to teach her to read and write, she began to study diligently.”' },
      { n: 2, source: 'Ottoman postcard showing women and girls supervised by a male manager (the standing figure in the background) at a silk factory in the Ottoman city of Bursa, 1902',
        image: 'images/u5-dbq-postcard.jpg',
        imageAlt: 'Black-and-white photograph of a long silk factory floor. Rows of women and girls sit at reeling basins on both sides while a man in a fez stands at the back of the room.',
        imageCredit: 'Ottoman postcard, silk factory in Bursa, 1902. Chronicle / Alamy Stock Photo.',
        text: '[Photograph] Rows of women and girls, some very young, work at silk-reeling basins on both sides of a long factory floor while a male manager stands in the background.' },
      { n: 3, source: 'He-Yin Zhen, Chinese woman political activist, “What Women Should Know About Communism,” essay published in a Chinese language journal in 1907, while she was living as a political exile in Japan',
        text: '“Everywhere in Shanghai there are silk factories, cotton mills, weaving factories, and laundries, employing thousands of women. These women work all day into the evening.\n\nWomen suffer just to get hold of our meager bowl of rice. My fellow women: why don’t you have any money to buy food? It is because the rich have stolen our property. They have forced the majority of the people into poverty and starvation. Look at the wives and daughters of the elite. They live luxuriously with plenty of food.\n\nSociety has accepted this state of affairs because, people say, as long as a woman has a job she would not fear starvation.... So the families that are very poor are sending their daughters and daughters-in-law to work in factories. But factories are built by investors to make a profit and, if you work in a factory, you remain at the mercy of its capitalist owners.”' },
      { n: 4, source: 'Report by the provincial governorate of the Vladimir District of the Russian Empire on the occupations of the rural population of the district, published as part of a comprehensive government survey of the occupational patterns of the Russian population, 1912',
        text: '“According to a local census taken in 1897, 52.2% of the male population of the Vladimir District were involved in some type of manufacturing occupation rather than in farming. The fact that such a significant portion of men in the villages are working in non-farming jobs means that often it is the women in these households that must do the majority of farm field work, which has traditionally been a male task.\n\nIn these circumstances, in many areas of the district, women take the leading roles in the households. Not only do women plow, plant, rake, and gather the hay and grain, but they often execute the social obligations of men. Many women now serve as village council leaders or members, and even as village tax collectors, positions that were all previously reserved for men.”' },
      { n: 5, source: 'Toshio Takai, Japanese woman labor activist, memoir describing events in the 1910s and 1920s, first published in 1980',
        text: '“I was around twelve years old in 1913 when a recruiter for female textile workers came to our village. He stopped by our house and said, ‘How about it? Wouldn’t you like to send your daughter to work for the Ogaki Company? We have dormitories, the work is easy and pleasant. There’s silk spinning and you get paid thirteen sen [0.13 yen] per day. We feed you and clothe you, so it’s really a help to your parents.’ Once I heard all this, I made up my mind. I reckoned that with that kind of money I could buy my mother and sister something, so I said, ‘I will do it. I’ll work.’\n\nWhat we had heard was paradise; the reality turned out to be hell. The thirteen sen we were supposed to earn per day was before deductions were made for the food we ate and the soap, toilet paper, and straw sandals we used, so in the end we were left with less than one sen per day.\n\nMy job was to clean up waste pieces of silk thread from the factory floor. For twelve hours a day I was standing or walking among the machines. My legs became stiff and my feet were always swollen.”' },
      { n: 6, source: 'Johanna Cornelius, White South African labor activist, autobiographical statement prepared for press release when she was elected as a National Organizing Officer for a major labor union of South African garment industry workers, circa 1940',
        text: '“I was born and raised on a farm, but my parents struggled to earn enough to support their family. So, by the time I turned 18 [in 1930], I had to abandon ideas of further studies and instead travelled to Johannesburg, to earn my own living in the clothing factories. How proud I was on receiving my first week’s wages! I wrote home, telling my father that he now had one mouth less to feed. I thought I would be able to save a sufficiently large sum to enable me to continue my studies. But to my sorrow and disappointment, after only a few months, the depression began to be felt in the clothing industry. Like many other workers, I was laid off. What could I do now? I had no money to take me home and could expect no financial help from my parents. So I stayed in the city, working a few hours here and there as I could, eating less food, and living on practically nothing....\n\nNonetheless, I could not then, and cannot now agree with the arguments of those that say that rural life is the basis of family life. I and thousands of my fellow working women in the factories are moved by everyday financial problems and cannot become sentimental about the beauties of the countryside. I am not afraid of the towns nor of the march of progress. I refuse to remain a servant in the kitchen.”' },
      { n: 7, source: 'Ellen Kuzwayo, Black South African educator and women’s rights activist, describing the history of Johannesburg, from her autobiography published in 1985',
        text: '“After the discovery of gold in 1886, Black men from different communities streamed into Johannesburg which, at that time, was more or less a temporary mining camp. Men flowed to the mines from the rural areas leaving their families behind to be cared for by the senior woman in every home. Still, in those early decades most Black women lived on land which their communities owned and which they cultivated.\n\nBut things changed for the worse in the [early decades of the twentieth century], when communal land was removed from the control of Black people and communities were forced to move from one area to another. So Black women were suddenly plunged into a situation of accepting numerous roles of responsibility. Without warning or training, they became not only mothers, but also family administrators, community counselors, and overall overseers of both home and neighborhood.\n\nFor many women, the burden proved too much. Their response came in the form of moving to cities themselves, often in search of their husbands or sons and despite stringent ‘influx’ regulations. As they were usually not allowed to live with their husbands in company dormitories, they found a solution in domestic work, where they were provided with a room, usually somewhere at the back of their White employers’ houses.”\n\n[Notes in the original: the South African government limited the farmland Black farmers could own, forcing most rural Black South Africans to become tenant farmers on White-owned land; “influx” regulations were restrictions meant to prevent Black families from settling permanently in “Whites-only” urban areas.]' }
    ],
    rubric: [
      { key: 'thesis', label: 'Thesis / Claim', points: '1 pt', requirement: REQ.thesis,
        exemplar: '<em>&ldquo;The global spread of industrialization created new opportunities for women to advance through literacy training and community leadership. It also presented challenges as women took on men&rsquo;s roles in addition to their own housework and had to work to support their families.&rdquo;</em>' + WHY('<strong>Officially credited.</strong> Minimally acceptable: &ldquo;Industrialization gave women new opportunities by creating jobs in the factories.&rdquo;') },
      { key: 'context', label: 'Contextualization', points: '1 pt', requirement: REQ.context,
        exemplar: '<em>&ldquo;During the first Industrial Revolution in England, lower class women and children worked in the factories to supplement their families&rsquo; income.&rdquo;</em>' + WHY('<strong>Officially credited context includes:</strong> industrial capitalism; the Meiji Restoration; selective Westernization in Japan, Russia, and the Ottoman Empire; the Second Industrial Revolution; Marxism and socialism; women&rsquo;s rights movements; urbanization.') },
      { key: 'evidence-docs', label: 'Evidence: Uses the Documents', points: '1 pt', requirement: REQ.docs3,
        exemplar: 'Describe at least three, e.g.: <strong>Doc 4</strong>: with most men working in manufacturing, women in the Vladimir District did the field work and even served as village council leaders and tax collectors. <strong>Doc 5</strong>: a twelve-year-old recruited to a silk mill was left with less than one sen a day after deductions. <strong>Doc 1</strong>: an illiterate cigarette-factory worker was elected chairwoman of her union branch.' + WHY('<strong>Official guidance:</strong> describe the content accurately rather than simply quoting it.') },
      { key: 'evidence-support', label: 'Evidence: Supports the Argument (4 documents)', points: '2nd pt', requirement: REQ.docs4,
        exemplar: 'Group the documents: <strong>opportunities</strong> (leadership in Docs 1 and 4, independence in Doc 6) versus <strong>challenges</strong> (exploitative factory work in Docs 2, 3, and 5; family and land burdens in Doc 7).' + WHY('<strong>Official guidance:</strong> using all seven documents to argue that industrialization brought both challenges and opportunities can also support complexity.') },
      { key: 'sourcing', label: 'Sourcing / HIPP (2 documents)', points: '1 pt', requirement: REQ.sourcing,
        exemplar: '<strong>Doc 5 (POV):</strong> <em>&ldquo;As a female labor activist, the author recounts the difficulty she experienced in the silk factories and is able to provide first-hand knowledge about the struggles women and children had in entering the workforce.&rdquo;</em> <strong>Doc 1 (purpose):</strong> <em>&ldquo;Written during the first decade of the Soviet Union, this account was meant to highlight the success of the Russian Revolution and Communism&rsquo;s role in improving women&rsquo;s educational opportunities.&rdquo;</em>' + WHY('<strong>Officially credited</strong> sourcing examples. Also credited: Doc 2&rsquo;s historical situation after the Tanzimat reforms, and Doc 4&rsquo;s intended audience, the government.') },
      { key: 'outside', label: 'Outside Evidence (Beyond the Documents)', points: '1 pt', requirement: REQ.outside,
        exemplar: '<em>&ldquo;In the years after the Russian Revolution, Bolshevik campaigns to eradicate illiteracy, through workers&rsquo; schools and adult literacy classes, began to offer women educational opportunities.&rdquo;</em>' + WHY('<strong>Officially credited ideas include:</strong> women in the workforce during the world wars; the link to women&rsquo;s suffrage; the Tanzimat or Japanese selective Westernization; the Taiping Rebellion; the persistence of Confucian gender roles.') },
      { key: 'complexity', label: 'Complexity', points: '1 pt', requirement: REQ.complexity,
        exemplar: 'Analyze class: some women gained leadership roles (Docs 1, 4), but lower-class women typically suffered from the nature of factory work and poverty (Docs 3, 5), so industrialization&rsquo;s effect depended on a woman&rsquo;s class and place.' + WHY('<strong>Official guidance:</strong> complexity can also come from comparing these women workers with women in the globalized economy of the late twentieth and early twenty-first centuries.') }
    ]
  });

  /* ── UNIT 8 ── */
  add(8, 'dbq', {
    year: '2024', tag: 'DBQ (Question 1, Set 1)',
    prompt: 'Evaluate the extent to which communist rule transformed Soviet and/or Chinese societies in the period circa 1930–1990.',
    documents: [
      { n: 1, source: 'S. M. Prokhorov, Soviet artist, Students from a Workers’ School, poster for public display, 1928',
        image: 'images/u8-src-1.jpg',
        imageAlt: 'Painted poster of a crowd of young Soviet workers walking together, men and women carrying books, papers, and drafting tools; several women wear embroidered peasant dress and head scarves.',
        imageCredit: 'S. M. Prokhorov, Students from a Workers’ School, 1928.',
        text: '[Poster] Workers’ schools were Soviet adult-learning institutions that offered evening classes to factory workers to prepare them to enroll in state-run universities.' },
      { n: 2, source: 'Ya. I. Drobinskiy, member of the Soviet Communist Party, memoirs of his political detention and trial in the 1930s, recorded by a Soviet journalist during the de-Stalinization campaign of the late 1950s but never published',
        text: '“One of the inmates in our large holding cell was an elderly peasant from a collective farm (kolkhoz). We gathered that his son was being held in another holding cell and they were trying to make the son testify against his father. The old man kept saving crumbs from his daily bread ration to give to his son when they saw each other. The son must have eventually succumbed to the beatings and signed a document saying that the father was trying to convince him to kill the kolkhoz director. The old man denied the accusation, and no matter how hard they tried, they couldn’t convince him to admit his ‘guilt.’ He was summoned to a joint interrogation with the son and went in determined to defend himself and tell the truth. But when he saw his tortured son, with the bruises from the beatings clearly visible, something inside him broke and he told the investigator: ‘It’s true, all of it, I confess, whatever my Ilyushka told you, don’t doubt it, everything is true,’ and he immediately signed the confession they had prepared for him.\n\nA few days later, when he next saw his son on the way to the court chambers, the old man somehow managed to get away momentarily from his guards and gave his Ilyushka the fistful of crumbs he had collected for him. And then the son broke down, fell on his knees, and started crying, ‘Forgive me, papa, forgive me, I betrayed you, forgive me.’ The old man started mumbling something, patted his son on the head, told him it was OK. The guards didn’t know what to do; their emotions overwhelmed them. Even the judges of the tribunal, who had seen it all, were shaken to their core.”' },
      { n: 3, source: 'Alexandra Kollontai, Russian Marxist and politician, essay titled “The Soviet Woman: a Full and Equal Citizen of Her Country,” published in 1946',
        text: '“In opening up to women access to every sphere of creative activity, our state has simultaneously ensured all the conditions necessary for her to fulfill her natural obligation: that of being a mother bringing up her children and being a homemaker.\n\nFrom the very beginning, Soviet law recognized that motherhood is not a private matter, but the social duty of the equal woman citizen. This fact is set in the Constitution. The Soviet Union has solved one of the most important and complex of problems: how to make active use of female labor in any area without this harming motherhood.\n\nThe Soviet state provides increasing assistance to mothers. Women receive state financial benefits and maternity leave with pay before and after the birth of the child, and their job is kept open for them until they return from leave. Large and one-parent families receive state financial benefits to help them provide for and bring up their children. In 1945 the state paid out more than two billion rubles [Soviet currency] in such benefits.”' },
      { n: 4, source: 'Article describing a “contention meeting,” published in Shenyang Daily, a regional Chinese newspaper, 1957',
        text: '“Chang Po-sheng, head of the propaganda department of the Communist Youth League at Shenyang University, and Huan Chen-lu, editor of the university newspaper, gave a joint speech at the meeting. The central problem they brought up was ‘how to abolish the absolute leadership of the Party.’\n\nHuang Chen-lu said: ‘Before the Communist revolution, the Party enjoyed high prestige, because its connection to the people was close and strong. But since the founding of the People’s Republic [1949], the Party has made itself superior to the people. More and more persons with impure motives are joining the Party because it has become the easiest way to acquire power, influence, and money.’\n\nChang Po-sheng added: ‘Outwardly, we have democratic elections, but actually the Party exercises dictatorship and the few top leaders in the Party’s Political Bureau exercise absolute power. As for freedom of assembly, association, and publication, these are just things written in the Constitution, and the Party has shown that the Constitution is just a scrap of paper that it does not need to observe. Citizens only have the right to become the Party’s obedient subjects. The Party has become the emperor of China: a sacred body that all must obey.’”\n\n[Note in the original: “Contention meetings” were Communist Party–organized mass gatherings during a brief period in 1956–1957 in which Chinese citizens were encouraged to openly express their criticisms of the Communist Party and its leaders.]' },
      { n: 5, source: 'General Office of the Central Committee of the Chinese Communist Party, summary report regarding food shortages, Beijing, China, 1958',
        text: '“Anhui Province: A total of 1.3 million people are without food supplies. Famine has forced more than 3,000 people to leave their homes.\n\nHebei Province: Over 474,000 families took part in a number of food riots recently. In many villages, people have almost no food left. It is quite common for entire families to become beggars.\n\nShandong Province: Over 670,000 people have had their food surplus completely cut off, and over 150,000 people have been forced to flee and become beggars.\n\nYunnan Province: In a small number of poorer collectives, there have been quite a few food-related riots. The causes of these food-related riots are various. First of all, local communist officials failed to discover the real food situation in crisis areas. Some officials were afraid of making mistakes or being accused of disloyalty to the Party; they therefore refused to believe complaints about shortages. Second, the provision plans for some areas have fallen short, and after riots occurred, the local officials failed to pay close attention to grain markets.”' },
      { n: 6, source: 'Xia Ping, Chinese woman member of the Communist Party, “Make Energetic Efforts to Train Women Cadres,” article published in the political magazine Hongqi (Red Banner), 1973',
        text: '“Some of our men comrades are still not able to deal with women correctly. They claim that women’s ‘family complications’ (by which they mean our domestic roles) make it very difficult to promote women at work.\n\nFor thousands of years the basic guiding thought of the feudal landlords in China and their capitalist servants was to treat women as slaves, to put them in the kitchen, to burden them with heavy household chores, and to deprive them of the rights to participate in social life and political activities. When the socialist revolution took place, one of the most important priorities of the working class was to liberate women from this domestic slavery. It is undeniable that the establishment of the socialist system has in fact been liberating to Chinese women, the great majority of whom now participate in the productive labor of our nation. However, due to the persistence of old ideas and anti-women prejudice, the problem of household duties and chores has not been completely solved. To solve this problem, it is necessary to promote the practice that men and women must share household chores.\n\nWe also need to pay attention to some specific practices that hold women down. We should oppose early marriage and promote late marriage. It is essential that we continue to do a good job in providing social welfare facilities, such as health clinics, nurseries, and kindergartens.”' },
      { n: 7, source: 'Richard Kosolapov, Soviet journalist, former editor in chief of the Communist Party’s journal Komunist, article in Pravda, the largest Soviet newspaper, 1983',
        text: '“In our society today, there have been some discussions about moving toward greater acceptance of ‘private ownership’ and ‘private enterprise.’ These discussions are clearly unfounded, and they can be dangerous. We have all seen how easy it is for uncommunist-like behaviors and ideas to spring up spontaneously among us when we let our collectivist spirit grow weak or when the Party doesn’t work hard on fostering a healthy social and educational climate. All sorts of bribe takers, thieves, grifters, and parasites stand ready to steal the fruits of others’ labor. Their ‘entrepreneurship’ is nothing but a desire to pocket the loose kopek (penny) of the honest Soviet citizens. Such people are especially dangerous because they, like moths, eat holes in the fabric of socialist economic and social relations and try to draw others into their selfishly individualistic, anti-collectivist worldview.\n\nThese advocates of more private ownership, materialism, and consumerism are enemies of the socialist state, and the struggle against them must be uncompromising. Maintaining full central control over both production and consumption is of utmost importance for strengthening the organic wholeness of our system. Socialist society is a working society, not a consumer society.”' }
    ],
    rubric: [
      { key: 'thesis', label: 'Thesis / Claim', points: '1 pt', requirement: REQ.thesis,
        exemplar: '<em>&ldquo;Communist rule transformed Soviet and Chinese societies in many ways, including by creating new opportunities for women, providing new educational opportunities for young people, but also by brutally repressing those whom the communists saw as challenging their rule.&rdquo;</em>' + WHY('<strong>Officially credited.</strong> Minimally acceptable: &ldquo;Communist rule changed society by allowing the state to completely control people&rsquo;s lives.&rdquo;') },
      { key: 'context', label: 'Contextualization', points: '1 pt', requirement: REQ.context,
        exemplar: '<em>&ldquo;Marx and Engels believed that only workers could carry out the communist revolution, but Mao believed that peasants could also lead a communist revolution.&rdquo;</em>' + WHY('<strong>Officially credited context includes:</strong> the rise of Marxism and socialist parties; Lenin, Stalin, and Mao&rsquo;s versions of Marxism; the 1905 revolution or the 1911 Xinhai Revolution; Tsarist Russia and Qing/Guomindang China before the revolutions; the Russian Civil War and the creation of the USSR.') },
      { key: 'evidence-docs', label: 'Evidence: Uses the Documents', points: '1 pt', requirement: REQ.docs3,
        exemplar: 'Describe at least three, e.g.: <strong>Doc 2</strong>: a father on a collective farm signed a false confession after seeing his tortured son. <strong>Doc 3</strong>: the Soviet state paid women maternity benefits and held their jobs open. <strong>Doc 5</strong>: a Party report listed millions without food and widespread food riots in 1958.' + WHY('<strong>Official guidance:</strong> describe the content accurately rather than simply quoting it.') },
      { key: 'evidence-support', label: 'Evidence: Supports the Argument (4 documents)', points: '2nd pt', requirement: REQ.docs4,
        exemplar: 'Group the documents: <strong>new opportunities</strong> (education in Doc 1; women&rsquo;s work and benefits in Docs 3 and 6) versus <strong>repression and failure</strong> (terror in Doc 2; Party dictatorship in Doc 4; famine in Doc 5; hostility to private enterprise in Doc 7).' + WHY('<strong>Official guidance:</strong> the four documents may support sub-arguments or counterarguments, not just one claim.') },
      { key: 'sourcing', label: 'Sourcing / HIPP (2 documents)', points: '1 pt', requirement: REQ.sourcing,
        exemplar: '<strong>Doc 2 (POV):</strong> <em>&ldquo;As a former prisoner and member of the Communist Party, the author&rsquo;s account is a credible description of the political terror in the Soviet Union in the 1930s by offering eyewitness evidence to the brutal nature of Stalin&rsquo;s rule.&rdquo;</em> <strong>Doc 7 (intended audience):</strong> <em>&ldquo;Since the article was published in &lsquo;the largest Soviet newspaper,&rsquo; and it supports communism while demonizing capitalism, it was probably meant as a piece of propaganda for the general population of Soviet citizens.&rdquo;</em>' + WHY('<strong>Officially credited.</strong> Does NOT earn: just identifying the source (&ldquo;Xia Ping, as a female member of the Communist Party, wrote about Chinese women&rdquo;) or summarizing it (&ldquo;The poster shows Soviet factory workers walking to an evening school&rdquo;).') },
      { key: 'outside', label: 'Outside Evidence (Beyond the Documents)', points: '1 pt', requirement: REQ.outside,
        exemplar: '<em>&ldquo;The Great Leap Forward was an economic and social campaign launched by Mao Zedong to change the country from an agrarian economy into an industrialized society through collectivization.&rdquo;</em>' + WHY('<strong>Officially credited.</strong> Other credited evidence: Five-Year Plans; collectivization and the destruction of the kulaks; Stalin&rsquo;s purges and the gulags; the Cultural Revolution; the KGB.') },
      { key: 'complexity', label: 'Complexity', points: '1 pt', requirement: REQ.complexity,
        exemplar: 'Weigh both sides: women gained rights in the USSR (Docs 1, 3) and China (Doc 6), yet they still carried the main burden of child-rearing and housework, so communism&rsquo;s transformation of gender roles was real but incomplete.' + WHY('<strong>Official guidance:</strong> complexity may also come from connecting collectivization (Docs 2, 5) or education (Doc 1) to earlier or later developments.') }
    ]
  });

  /* ── UNIT 9 ── */
  add(9, 'saq', [{
    year: '2022', tag: 'SAQ 4: No stimulus',
    parts: [
      'Identify ONE scientific or technological development that contributed to the Green Revolution.',
      'Explain ONE way in which the Green Revolution benefited populations in the developing world.',
      'Explain ONE way in which the Green Revolution affected the environment within the developing world.'
    ],
    partExemplars: [
      '<strong>Task = IDENTIFY a development (1 sentence).</strong> The development of chemical fertilizers contributed to the Green Revolution.' + WHY('<strong>Officially credited answers include:</strong> chemical fertilizers; genetically modified crops; new crop varieties that could survive drier climates; new equipment such as tractors.'),
      '<strong>Task = EXPLAIN a benefit (2–3 sentences).</strong> By greatly increasing crop yields, the Green Revolution prevented starvation and food shortages in countries such as India and Mexico. New high-yield seeds, fertilizers, and irrigation let farmers grow far more grain on the same land, so food production could keep up with rapidly growing populations.' + WHY('<strong>Officially credited answers include:</strong> preventing starvation and food shortages; supporting population growth; freeing people to pursue other economic activities.'),
      '<strong>Task = EXPLAIN an environmental effect (2–3 sentences).</strong> The Green Revolution&rsquo;s heavy use of chemical fertilizers and pesticides damaged the environment in countries such as India. Rain washed these chemicals off the fields, and the runoff polluted rivers and groundwater that farming villages depended on for drinking water.' + WHY('<strong>Officially credited answers include:</strong> chemical runoff or pollution; large monocultures limiting crop diversity and soil health; mechanized agriculture contributing to water and air pollution.')
    ]
  }]);
  add(9, 'leq', [
    {
      year: '2022', tag: 'LEQ 4',
      intro: 'In the late twentieth century, the spread of free-market economic ideas led to numerous changes around the world.',
      prompt: 'Develop an argument that evaluates the extent to which the spread of free-market ideas led to economic change during this period.',
      rubric: [
        { key: 'thesis', label: 'Thesis / Claim', points: '1 pt', requirement: REQ.thesis,
          exemplar: '<em>&ldquo;During the late twentieth century ideas of free trade and economic liberalization spread from Western capitalist economies to socialist economies such as the USSR and China, which led to political and economic changes in many developing states.&rdquo;</em>' + WHY('<strong>Officially credited.</strong> Minimally acceptable: &ldquo;Free-market reforms in China led to economic growth.&rdquo;') },
        { key: 'context', label: 'Contextualization', points: '1 pt', requirement: REQ.context,
          exemplar: '<em>&ldquo;The Cold War competition between Western capitalist economies and the socialist economies of the Soviet Union eventually led to the spread of free-market capitalist ideas.&rdquo;</em>' + WHY('<strong>Officially credited context includes:</strong> the Cold War; neoliberalism; neocolonialism; international economic institutions; globalization; the limits of communist economic policies; Reagan&rsquo;s or Thatcher&rsquo;s economic policies.') },
        { key: 'evidence', label: 'Evidence: Two Specific Examples', points: '1 pt', requirement: REQ.evidence,
          exemplar: 'Name at least two, e.g.: <strong>Deng Xiaoping</strong>&rsquo;s reforms and Special Economic Zones; <strong>Gorbachev</strong>&rsquo;s <strong>perestroika</strong>; <strong>Reagan</strong> and <strong>Thatcher</strong>&rsquo;s privatization and deregulation; the fall of the <strong>Berlin Wall</strong>; NAFTA or the WTO.' + WHY('<strong>Officially credited evidence list</strong> from the 2022 scoring guidelines.') },
        { key: 'evidence-support', label: 'Evidence: Supports the Argument', points: '2nd pt', requirement: REQ.support,
          exemplar: '<em>&ldquo;China and India liberalized their economies and adopted mixed socialist-capitalist economies in order to increase foreign investment and economic growth.&rdquo;</em>' + WHY('<strong>Officially credited</strong> as using multiple specific pieces of evidence to support the argument.') },
        { key: 'reasoning', label: 'Historical Reasoning', points: '1 pt', requirement: REQ.reasoning,
          exemplar: 'Structure by <strong>causation</strong> or <strong>change over time</strong>: as the Cold War ended, China and Russia restructured their centrally planned economies, opening them to private enterprise and foreign investment.' + WHY('<strong>Official guidance:</strong> the reasoning skill must organize the argument, even if unevenly.') },
        { key: 'complexity', label: 'Complexity', points: '1 pt', requirement: REQ.complexity,
          exemplar: 'Connect across time and space: the end of the Cold War made liberal capitalism look triumphant, which pushed former communist countries toward market reforms, yet the results varied, from rapid growth in China to economic collapse and inequality in 1990s Russia.' + WHY('<strong>Official guidance:</strong> explaining relevant and insightful connections across time and space can earn complexity.') }
      ]
    },
    {
      year: '2025', tag: 'LEQ 4',
      intro: 'During the twentieth century, medical and scientific discoveries affected life expectancies, access to resources, and social and economic structures, which reshaped individual lives as well as entire societies.',
      prompt: 'Develop an argument that evaluates the extent to which medical and scientific discoveries benefited individuals and/or societies during this period.',
      rubric: [
        { key: 'thesis', label: 'Thesis / Claim', points: '1 pt', requirement: REQ.thesis,
          exemplar: '<em>&ldquo;The Green Revolution and other commercial agricultural innovations contributed to the widening of inequalities between developing and developed countries; however, these innovations also contributed to improved nutrition and population growth.&rdquo;</em>' + WHY('<strong>Officially credited.</strong> Also credited: &ldquo;The invention and widespread use of antibiotics lowered mortality rates from infectious diseases and injuries contributing to population growth and longer life expectancies.&rdquo;') },
        { key: 'context', label: 'Contextualization', points: '1 pt', requirement: REQ.context,
          exemplar: '<em>&ldquo;The use of natural gas and petroleum allowed for advances in technology and transportation but led to greater emissions of greenhouse gasses, causing environmental concerns.&rdquo;</em>' + WHY('<strong>Officially credited context includes:</strong> advances in biology and chemistry; industrialization; energy technologies; environmental catastrophes; the Green Revolution; globalization; growing international institutions.') },
        { key: 'evidence', label: 'Evidence: Two Specific Examples', points: '1 pt', requirement: REQ.evidence,
          exemplar: 'Name at least two, e.g.: <strong>antibiotics</strong> such as penicillin; <strong>vaccines</strong> and the eradication of smallpox; <strong>birth control</strong>; the <strong>Green Revolution</strong>; new epidemics such as <strong>HIV/AIDS</strong>; diseases of longevity such as heart disease.' + WHY('<strong>Officially credited evidence list</strong> from the 2025 scoring guidelines.') },
        { key: 'evidence-support', label: 'Evidence: Supports the Argument', points: '2nd pt', requirement: REQ.support,
          exemplar: '<em>&ldquo;Improved understanding of the bacterial or viral origins of many infectious diseases and the development of antibiotics, such as penicillin, in the twentieth century transformed medicine and greatly improved both individual lives and public health, as many previously fatal infectious diseases could now be cured or managed successfully.&rdquo;</em>' + WHY('<strong>Officially credited</strong> as using evidence to support an argument.') },
        { key: 'reasoning', label: 'Historical Reasoning', points: '1 pt', requirement: REQ.reasoning,
          exemplar: 'Structure by <strong>causation</strong>: <em>&ldquo;International organizations like the United Nations and the World Health Organization attempted to spread the benefits of innovations in medicine and public health in developing countries, which reduced deaths due to communicable diseases in many regions.&rdquo;</em>' + WHY('<strong>Officially credited</strong> (an effect of medical innovation).') },
        { key: 'complexity', label: 'Complexity', points: '1 pt', requirement: REQ.complexity,
          exemplar: 'Explain uneven benefits: antibiotics, vaccines, and the Green Revolution saved millions of lives, but access was unequal (expensive HIV drugs reached poor countries late), and some advances created new problems such as pesticide pollution and diseases of longevity.' + WHY('<strong>Official guidance:</strong> complexity may also come from explaining how advances such as antibiotics or the Green Revolution responded to crises like epidemics and famine.') }
      ]
    }
  ]);
})(window.WRITING_PROMPTS);

/* Unit 7 Writing Drills (added 2026-10-11). Unit 7's FRQ Grader keeps the
   2024 SAQ 2, 2024 Set 2 DBQ, and 2019 LEQ 4; these are different released
   prompts so the two tabs do not overlap. */
(function (W) {
  W[7] = W[7] || {};
  var WHY = function (s) { return ' <br><span class="wd-note-why">' + s + '</span>'; };
  var REQ = {
    thesis: 'Respond to the prompt with a <strong>historically defensible thesis/claim</strong> that establishes a <strong>line of reasoning</strong>. One place, intro OR conclusion; more than a restatement.',
    context: 'Describe a <strong>broader historical context</strong> relevant to the prompt in <strong>more than a phrase</strong>.',
    evidence: 'Provide <strong>at least TWO specific, relevant historical examples</strong> connected to the topic of the prompt.',
    support: 'Use those <strong>two specific examples to support an argument</strong> in response to the prompt.',
    reasoning: 'Use <strong>comparison, causation, or continuity &amp; change to frame and structure</strong> the argument.',
    complexity: 'Demonstrate a <strong>complex understanding</strong>: nuance, multiple causes/effects, or insightful connections, developed with evidence.'
  };
  W[7].saq = (W[7].saq || []).concat([{
    year: '2018', tag: 'SAQ 1: Secondary source (older exam format)',
    source: 'Rudolph Rummel, United States political scientist, Death by Government, 1994',
    excerpt: '“The more power a government has, the more it can act arbitrarily according to the whims and desires of the elite, and the more it will make war on others and murder its foreign and domestic subjects. The more constrained the power of governments, the more power is diffused, checked, and balanced, the less it will aggress on others and commit mass violence. At the extremes of power, totalitarian governments slaughter their people by the tens of millions. In contrast, many democracies can barely bring themselves to execute even serial murderers.”',
    parts: [
      'Identify ONE historical example of mass violence that was committed by a totalitarian state in the twentieth century that would support Rummel’s argument in the passage.',
      'Explain ONE historical example of a democratic state committing mass violence that would challenge Rummel’s argument regarding democracies and mass violence.',
      'Explain ONE development in the late twentieth century that likely shaped Rummel’s view of the relationship between democracy and mass violence.'
    ],
    partExemplars: [
      '<strong>Task = IDENTIFY an example (1 sentence).</strong> During the Holocaust, Nazi Germany systematically murdered about six million Jews and millions of others.' + WHY('<strong>Officially credited answers include:</strong> the Holocaust; the Khmer Rouge genocide in Cambodia; Stalin&rsquo;s liquidation of the kulaks; the Great Terror of the late 1930s; mass violence under Mao during the Great Leap Forward and the Cultural Revolution.'),
      '<strong>Task = EXPLAIN a counterexample (2–3 sentences).</strong> The firebombing of Dresden by Britain and the United States during the Second World War was a deliberate attack on a city full of civilians. The Allies used this bombing to break the will of the German population, which shows that democracies also committed mass violence.' + WHY('<strong>Officially credited answers include:</strong> Britain and France using mass violence to crush African resistance to colonial rule; violence against Indigenous peoples in Australia; the bombing of Dresden.'),
      '<strong>Task = EXPLAIN a development (2–3 sentences).</strong> Rummel&rsquo;s view was likely shaped by the end of the Cold War, when the United States and its democratic allies emerged victorious over totalitarian regimes such as the Soviet Union. As communist governments collapsed and Eastern European states became democracies, the mass repression of those regimes ended. This made it seem that democracy itself limits state violence.' + WHY('<strong>Officially credited answers include:</strong> the end of the Cold War; the post-1945 liberal international order and the United Nations; ethnic cleansing by Serbian forces in Yugoslavia in the early 1990s; post-Cold War arguments that democracy had triumphed.')
    ]
  }]);
  W[7].leq = (W[7].leq || []).concat([
    {
      year: '2021', tag: 'LEQ 4',
      intro: 'In the twentieth century, governments responded to economic crises in various ways.',
      prompt: 'Develop an argument that evaluates the extent to which governments (other than the United States government) changed their economic policies in response to the Great Depression.',
      rubric: [
        { key: 'thesis', label: 'Thesis / Claim', points: '1 pt', requirement: REQ.thesis,
          exemplar: '<em>&ldquo;In many parts of Asia and Africa, governments only made minimal economic changes in response to the Great Depression because European colonial authorities were unwilling to introduce costly social welfare programs or implement policies that could reduce the profits of their companies.&rdquo;</em>' + WHY('<strong>Officially credited.</strong> Minimally acceptable: &ldquo;Governments across the world responded to the Great Depression by making their economies more socialist.&rdquo;') },
        { key: 'context', label: 'Contextualization', points: '1 pt', requirement: REQ.context,
          exemplar: '<em>&ldquo;The responses to the Great Depression by many western European countries reflected their fear of growing power of the Soviet Union as well as of the influence of socialist political parties in many European countries.&rdquo;</em>' + WHY('<strong>Officially credited context includes:</strong> the &ldquo;Roaring Twenties&rdquo;; fear of communism after the creation of the USSR; neocolonialism in Latin America; Great Power competition that limited free trade; speculation leading to the 1929 crash.') },
        { key: 'evidence', label: 'Evidence: Two Specific Examples', points: '1 pt', requirement: REQ.evidence,
          exemplar: 'Name at least two, e.g.: high unemployment across Europe; protective <strong>tariffs</strong> such as Britain&rsquo;s; Nazi Germany&rsquo;s drive for <strong>economic self-sufficiency</strong> and rearmament; Stalin&rsquo;s <strong>Five-Year Plans</strong>; Japan&rsquo;s expansion into <strong>Manchuria</strong>; Latin American <strong>import substitution</strong>.' + WHY('<strong>Officially credited evidence includes</strong> the 1929 crash, high unemployment, sharp GDP declines, and restrictive trade policies.') },
        { key: 'evidence-support', label: 'Evidence: Supports the Argument', points: '2nd pt', requirement: REQ.support,
          exemplar: '<em>&ldquo;The severity of economic decline in Germany during the Great Depression was greater than in many other countries because Germany was still under obligation to pay war reparations and relied on foreign investment. As a result of widespread unemployment and poverty, the new Nazi government in Germany embarked on a new policy of economic self-sufficiency.&rdquo;</em>' + WHY('<strong>Officially credited</strong> as evidence supporting an argument.') },
        { key: 'reasoning', label: 'Historical Reasoning', points: '1 pt', requirement: REQ.reasoning,
          exemplar: 'Structure by <strong>comparison</strong>: <em>&ldquo;Some countries responded to the Great Depression by embracing nationalism, fascism, and militarism, such as in Germany and Japan. Germany expanded its military and pursued economic self-sufficiency.&rdquo;</em>' + WHY('<strong>Officially credited</strong> (compares several governments&rsquo; responses).') },
        { key: 'complexity', label: 'Complexity', points: '1 pt', requirement: REQ.complexity,
          exemplar: 'Show change over time: Britain at first raised taxes, held down wages, and defended the gold standard, then switched course and left the gold standard in 1931, so responses evolved as the crisis deepened.' + WHY('<strong>Official guidance:</strong> complexity may also come from explaining how Keynesian responses to the Depression shaped postwar welfare states.') }
      ]
    },
    {
      year: '2025', tag: 'LEQ 4 (Set 2)',
      intro: 'During the twentieth century, competing political and economic interests along with intense nationalism contributed to global conflicts.',
      prompt: 'Develop an argument that evaluates the extent to which nationalism was the most important factor contributing to global conflict during this period.',
      rubric: [
        { key: 'thesis', label: 'Thesis / Claim', points: '1 pt', requirement: REQ.thesis,
          exemplar: '<em>&ldquo;While nationalism was certainly an important factor in the global conflicts of the twentieth century, nationalism should be viewed as one of the ideologies causing these conflicts along with communism, fascism, and even some religions.&rdquo;</em>' + WHY('<strong>Officially credited.</strong> Minimally acceptable: &ldquo;The intense German nationalism of the Nazis was the biggest factor leading to World War II.&rdquo;') },
        { key: 'context', label: 'Contextualization', points: '1 pt', requirement: REQ.context,
          exemplar: '<em>&ldquo;Social Darwinist ideas of race and competition grew steadily in the late 19th century and became intertwined with nationalism.&rdquo;</em>' + WHY('<strong>Officially credited context includes:</strong> modern antisemitism and racial theories; nineteenth-century nationalist revolutions and new nation-states; Enlightenment liberalism; socialism and communism; fascism.') },
        { key: 'evidence', label: 'Evidence: Two Specific Examples', points: '1 pt', requirement: REQ.evidence,
          exemplar: 'Name at least two, e.g.: the pre-WWI <strong>alliance system</strong>; the <strong>Armenian Genocide</strong>; the <strong>Holocaust</strong>; <strong>fascism</strong> and National Socialism; Japanese imperialism; the <strong>Partition of India</strong>; independence wars in Vietnam, Algeria, or Kenya.' + WHY('<strong>Officially credited evidence list</strong> from the 2025 Set 2 scoring guidelines.') },
        { key: 'evidence-support', label: 'Evidence: Supports the Argument', points: '2nd pt', requirement: REQ.support,
          exemplar: 'Tie evidence to the claim: Serbian nationalists assassinated Archduke Franz Ferdinand in 1914 to free Slavs from Austro-Hungarian rule, and nationalist public support in every major power turned that crisis into a world war.' + WHY('<strong>Official guidance:</strong> evidence must support an argument about how much nationalism drove the conflict.') },
        { key: 'reasoning', label: 'Historical Reasoning', points: '1 pt', requirement: REQ.reasoning,
          exemplar: 'Structure by <strong>causation</strong>: <em>&ldquo;Fascism was ultra-nationalist, expansionist, and viewed war as a positive good, all of which drove Nazi Germany to annex and conquer territories in Europe, starting World War II.&rdquo;</em>' + WHY('<strong>Officially credited</strong> (a cause/effect link between nationalism and global conflict).') },
        { key: 'complexity', label: 'Complexity', points: '1 pt', requirement: REQ.complexity,
          exemplar: 'Weigh factors: fascist Italy and Nazi Germany were driven by ultra-nationalism, while the Soviet Union was driven mainly by communist ideology even as it appealed to Russian patriotism, so nationalism explains some conflicts better than others.' + WHY('<strong>Officially credited idea.</strong> Another: tracing nationalism through several causes of WWI, from militarism to the assassination to public support for the war.') }
      ]
    }
  ]);
})(window.WRITING_PROMPTS);

/* Practice Sets 1–4 free-response prompts (added 2026-10-14). Eli's practice exams, used with
   permission; prompts are verbatim. Sources and documents are cropped page images in
   images/stimuli/ws{set}-saq{n}.png and ws{set}-d{n}.png. Extra DBQs go in W[u].dbqs so a unit's
   existing DBQ (W[u].dbq) is kept; writing-drills.js renders both. */
(function (W) {
  function add(u, kind, items) {
    W[u] = W[u] || {};
    W[u][kind] = (W[u][kind] || []).concat(items);
  }
  function img(name) { return 'images/stimuli/' + name + '.png'; }
  function docs(set, sources) {
    return sources.map(function (s, i) {
      return { n: i + 1, source: s, image: img('ws' + set + '-d' + (i + 1)), imageAlt: 'Document ' + (i + 1) + ': ' + s };
    });
  }

  /* ── SAQs ── */
  add(1, 'saq', [{
    year: 'Practice Set 1', tag: 'SAQ 3: Image source',
    source: 'Painting of Mansa Musa holding a gold coin from the 1375 Catalan Atlas.', image: img('ws1-saq3'),
    parts: [
      'Identify and explain ONE symbol presented in the image above.',
      'Identify and explain ONE way in which the Mansa Musa was able to expand the Malian Empire.',
      'Identify and explain ONE reason for the success of the Malian Empire.'
    ]
  }]);
  add(2, 'saq', [{
    year: 'Practice Set 2', tag: 'SAQ 3: No source',
    parts: [
      'Explain TWO factors that led to the emergence of a Mongol Empire.',
      'Identify and explain TWO specific ways in which the Mongols assimilated into foreign cultures during the thirteenth and fourteenth centuries.',
      'Identify ONE specific custom initiated by the Mongols that outlasted their own empire.'
    ]
  }, {
    year: 'Practice Set 3', tag: 'SAQ 3: Image source',
    source: 'Shen Du, Tribute Giraffe with Attendant, 1414 C.E.', image: img('ws3-saq3'),
    parts: [
      'Identify and explain ONE factor that caused the king of Bengal to pay tribute to the Yongle Emperor.',
      'Identify and explain ONE way in which the king of Bengal most likely acquired a giraffe to pay as tribute to the Yongle Emperor.',
      'Identify and explain ONE benefit that paying tribute to the Yongle Emperor would carry for the Bengali people.'
    ]
  }, {
    year: 'Practice Set 4', tag: 'SAQ 3: No source',
    parts: [
      'Identify and explain TWO ways in which improved transportation technology led to cultural diffusion during the period 1200 to 1450 C.E. Use specific examples from one or more civilizations.',
      'Identify and explain TWO motivations for increased cultural interactions during the period 1200 to 1450 C.E. Use specific examples from one or more civilizations.',
      'Identify and explain ONE reason for the rise of nation-states in Europe during the period 1200 to 1450 C.E. Use a specific example from one or more civilizations.'
    ]
  }]);
  add(3, 'saq', [{
    year: 'Practice Set 1', tag: 'SAQ 1: Two primary sources',
    source: 'Source 1: Diary of Johann Georg von Korb, ambassador from Emperor Leopold I to Czar Peter the Great in 1699. Source 2: Life of Peter the Great, by French historian Jean Rousset de Missy, c. 1730', image: img('ws1-saq1'),
    parts: [
      'Identify and explain ONE piece of historical evidence that would support Source 1’s evaluation of Peter the Great’s approach to governing.',
      'Identify and explain ONE piece of historical evidence that would support Source 2’s evaluation of Peter the Great’s approach to governing.',
      'From the two evaluations above, select the one that, in your opinion, is more accurate to the true governing style of Peter the Great. Briefly explain your choice using additional evidence beyond that used to answer (a) or (b).'
    ]
  }, {
    year: 'Practice Set 3', tag: 'SAQ 4: Two passages',
    source: 'Two passages evaluating the success of Peter the Great’s reforms', image: img('ws3-saq4'),
    parts: [
      'Identify and explain ONE piece of historical evidence that would support Source 1’s evaluation of the success of Peter the Great’s reforms.',
      'Identify and explain ONE piece of historical evidence that would support Source 2’s evaluation of the success of Peter the Great’s reforms.',
      'From the two evaluations above, select the one that, in your opinion, is more accurate to the true success of Peter the Great’s reforms of Russia. Briefly explain your choice using additional evidence beyond that used to answer (a) or (b).'
    ]
  }]);
  add(5, 'saq', [{
    year: 'Practice Set 1', tag: 'SAQ 2: No source',
    parts: [
      'Identify and explain TWO ways in which Enlightenment philosophies influenced reaction to the Industrial Revolution.',
      'Identify and explain TWO ways that nation-states increased their power through the Industrial Revolution.',
      'Identify and explain TWO ways that the Industrial Revolution impacted the social and economic lives of the working class.'
    ]
  }, {
    year: 'Practice Set 2', tag: 'SAQ 1: Image source',
    source: 'Illustration of James Watt’s Mechanical Steam Engine, 1764', image: img('ws2-saq1'),
    parts: [
      'Identify TWO specific technological advances that benefited from the development of the Watt engine.',
      'Explain ONE specific long-term effect of the introduction of the Watt engine on each of the technological advances you identified in part (a).',
      'Identify ONE reason for the decline of Watt’s specific steam engine.'
    ]
  }, {
    year: 'Practice Set 2', tag: 'SAQ 4: Primary source',
    source: 'Adam Smith, The Wealth of Nations, 1776', image: img('ws2-saq4'),
    parts: [
      'Identify and describe TWO specific historical examples from 1750 to the present day that illustrate the benefits of the division of labor as described in the text.',
      'Identify and describe ONE critique of Adam Smith’s view of labor.',
      'Identify ONE general benefit that Europe enjoyed as a result of the division of labor in the nineteenth century.'
    ]
  }, {
    year: 'Practice Set 4', tag: 'SAQ 4: Image source',
    source: 'Phillip Veit, Germania, 1848', image: img('ws4-saq4'),
    parts: [
      'Identify and explain ONE symbol in the painting that represents German nationalism.',
      'Identify and explain ONE factor that brought about nationalist fervor in Germany.',
      'Select a nationalist movement (besides that of Germany), state its primary goal, and explain whether, in your opinion, it succeeded in its goal. Briefly explain your choice using evidence.'
    ]
  }]);
  add(6, 'saq', [{
    year: 'Practice Set 3', tag: 'SAQ 1: Map',
    source: 'Colonization Map of Africa in 1914', image: img('ws3-saq1'),
    parts: [
      'Identify and explain TWO factors in the period 1750–1900 C.E. that enabled European powers to carve up almost the entirety of Africa by 1914.',
      'Identify and explain ONE reason European powers colonized only the coast of Africa during the period 1450–1750 C.E.',
      'Identify and explain ONE effect of imperialism upon African life by the end of the nineteenth century.'
    ]
  }, {
    year: 'Practice Set 3', tag: 'SAQ 2: No source',
    parts: [
      'Identify and explain TWO ways in which governments consolidated their power during the period 1750–1900 C.E. Use specific examples from one or more states or empires.',
      'Identify and explain TWO ways in which the consolidation of power during the period 1750-1900 C.E. was challenged.',
      'Identify and explain ONE major effect upon East Asia of the consolidation of European power during the period 1750 to 1900.'
    ]
  }, {
    year: 'Practice Set 4', tag: 'SAQ 1: Map',
    source: 'Extent of the British Empire in 1900', image: img('ws4-saq1'),
    parts: [
      'Identify and explain TWO ways that the expansion of the British Empire changed a particular region or regions.',
      'Identify and explain ONE reason that the British Empire experienced a decline.',
      'Identify and explain ONE method that the British Empire used to maintain control of its colonies.'
    ]
  }]);
  add(7, 'saq', [{
    year: 'Practice Set 4', tag: 'SAQ 2: Primary source',
    source: 'President Harry Truman, speech informing American citizens that an atomic weapon had been used against Japan, August 6, 1945', image: img('ws4-saq2'),
    parts: [
      'Identify and explain ONE way that the speech reflects the complexity of atomic technology.',
      'Identify and explain TWO ways in which the development of this weapon impacted international relations following the Second World War.',
      'Identify and explain ONE factor that led to the development of atomic weapons.'
    ]
  }]);
  add(8, 'saq', [{
    year: 'Practice Set 2', tag: 'SAQ 2: Image source',
    source: 'Poster of the Sputnik launch in 1957. The poster celebrates the tenth anniversary of the Sputnik launch in 1957, in which the Soviet Union successfully launched a satellite into space.', image: img('ws2-saq2'),
    parts: [
      'Identify how the “space race” between the United States and the Soviet Union had its origins in the Cold War nuclear arms race.',
      'Using TWO specific examples, explain how the end of communism changed the relationship between the United States and the former Soviet Union.',
      'Explain ONE effect that the space race had upon the daily lives of people in the United States and/or the Soviet Union.'
    ]
  }]);
  add(9, 'saq', [{
    year: 'Practice Set 1', tag: 'SAQ 4: Map',
    source: 'G20 Map, September 26, 1999', image: img('ws1-saq4'),
    parts: [
      'Identify and explain TWO factors that account for the development of the division shown on the map.',
      'Identify and explain ONE goal of the G20.',
      'Identify and explain ONE factor blocking the G20’s objectives.'
    ]
  }]);

  /* ── LEQs ── */
  add(1, 'leq', [{
    year: 'Practice Set 2', tag: 'LEQ 2',
    prompt: 'Evaluate the extent to which the arrival of Islam can be considered a pivotal point in the history of the Indian subcontinent. In the development of your argument, consider what changed and what stayed the same after Islam’s arrival in India.'
  }]);
  add(2, 'leq', [{
    year: 'Practice Set 1', tag: 'LEQ 2',
    intro: 'In the period 1200 C.E. to 1600 C.E., rapidly developing technologies led to increased regional and transregional trade.',
    prompt: 'Develop an argument that evaluates the extent to which the new technology contributed to an increase in trade in this time period.'
  }]);
  add(3, 'leq', [{
    year: 'Practice Set 2', tag: 'LEQ 3',
    prompt: 'Evaluate the extent to which the split between the Roman Catholic and Protestant churches in the sixteenth century can be considered a pivotal point in the history of Christianity. In the development of your argument, consider what changed and what stayed the same after this split within Christianity.'
  }]);
  add(4, 'leq', [{
    year: 'Practice Set 1', tag: 'LEQ 3',
    intro: 'In the period 1500 C.E. to 1750 C.E., nations’ influence expanded and global interaction increased. Certain Asian states were able to resist this influence and contact.',
    prompt: 'Develop an argument that evaluates the reasons some Asian nations were able to remain relatively untouched by outside influences.'
  }, {
    year: 'Practice Set 3', tag: 'LEQ 3',
    prompt: 'Evaluate the extent to which the development of joint-stock companies in the sixteenth century C.E. can be considered a turning point in world history. In the development of your argument, explain what changed and what stayed the same from the period before the development of joint-stock companies in the sixteenth century C.E. to the period after the development of joint-stock companies in the sixteenth century C.E.'
  }]);
  add(5, 'leq', [{
    year: 'Practice Set 3', tag: 'LEQ 4',
    prompt: 'Evaluate the extent to which the emergence of the Industrial Revolution in the nineteenth century C.E. can be considered a turning point in world history. In the development of your argument, explain what changed and what stayed the same from the period before the emergence of the Industrial Revolution in the nineteenth century C.E. to the period after the emergence of Industrial Revolution in the nineteenth century C.E.'
  }, {
    year: 'Practice Set 4', tag: 'LEQ 3',
    prompt: 'Evaluate the extent to which the emergence of Enlightenment philosophies in the seventeenth century C.E. transformed European culture. In the development of your argument, explain what changed and what stayed the same from the period before the emergence of Enlightenment philosophy in the seventeenth century C.E. to the period after the emergence of Enlightenment philosophy in the seventeenth century C.E.'
  }]);
  add(6, 'leq', [{
    year: 'Practice Set 3', tag: 'LEQ 2',
    prompt: 'Evaluate the extent to which the Opium Wars of the nineteenth century can be considered a turning point in world history. In the development of your argument, explain what changed and what stayed the same from the period before the Opium Wars to the period after the Opium Wars.'
  }, {
    year: 'Practice Set 4', tag: 'LEQ 2',
    prompt: 'Evaluate the extent to which resistance to colonialism in the nineteenth and twentieth centuries transformed national identities. In the development of your argument, explain what changed and what stayed the same from the period before the resistance to colonialism in the nineteenth and twentieth to the period after the resistance to colonialism in the nineteenth and twentieth centuries.'
  }]);
  add(8, 'leq', [{
    year: 'Practice Set 2', tag: 'LEQ 4',
    prompt: 'Compare and contrast the effectiveness of two anti-colonial movements in the late nineteenth and twentieth centuries. In the development of your argument, explain what was similar about the effectiveness of the two movements and what was different.'
  }, {
    year: 'Practice Set 4', tag: 'LEQ 4',
    prompt: 'Evaluate the extent to which the Cold War transformed Latin American culture. In the development of your argument, explain what changed and what stayed the same from the period before the Cold War to the period after the Cold War began.'
  }]);
  add(9, 'leq', [{
    year: 'Practice Set 1', tag: 'LEQ 4',
    intro: 'In the period after 1900, the movements championing women’s equality varied, with many states adopting policies to offer more opportunities to women.',
    prompt: 'Develop an argument that evaluates the extent to which one or more states reacted to a gender equality movement.'
  }]);

  /* ── DBQs (extra DBQs live in dbqs) ── */
  add(8, 'dbqs', [{
    year: 'Practice Set 1', tag: 'DBQ',
    prompt: 'Using the documents and your knowledge of world history, evaluate the extent to which decolonization transformed diplomacy in the twentieth century.',
    documents: docs(1, [
      'The “Loi-Cadre” of June 23, 1956',
      'Declaration on Granting Independence to Colonial Countries and Peoples, 1960',
      'British Government Statement on its policy In Burma, May 1945',
      'Map depicting Colonial Affiliations of Africa and India before 1945.',
      'President Sukarno of Indonesia’s speech at the opening of the Bandung Conference, April 18 1955',
      'Jawaharlal Nehru’s December 18, 1956 speech in Washington D.C.',
      'Speech at The First Afro-Asian People’s Solidarity Conference, Anwar el Sadat, 1957'
    ])
  }, {
    year: 'Practice Set 2', tag: 'DBQ',
    prompt: 'Using the documents and your knowledge of world history, evaluate how governments and international organizations responded to the consequences of World War II after it ended in 1945.',
    documents: docs(2, [
      'Preamble to the Charter of the United Nations, 1945.',
      'Preamble to the Constitution of Japan, 1946.',
      'Preamble to the Constitution of India, 1949.',
      'Preamble to the Constitution of France, 1958.',
      'Vietnamese Declaration of Independence, 1945.',
      'Universal Declaration of Human Rights, 1948.',
      'Final Report to the Secretary of the Army on the Nuremberg War Crimes Trials United States, 1949.'
    ])
  }, {
    year: 'Practice Set 3', tag: 'DBQ',
    prompt: 'Using the following documents and your knowledge of world history, analyze the roles and perceptions of women in the Chinese and Vietnamese revolutions of the twentieth century.',
    documents: docs(3, [
      'He Zhen, wife of the anti-Manchu leader Liu Shipei, 1908.',
      'Sharon L. Sievers, “Women in China, Japan, and North Korea,” 1988.',
      'Florence Ayscough, Chinese Women: Yesterday and Today, 1938.',
      'Huy Oánh, “Produce and Prepare to Fight the War” (SẢN XUẤT VÀ SẴN SÀNG CHIẾN ĐẤU), Vietnam, 1966.',
      'Phan Boi Chau, Vietnamese nationalist leader, “The New Vietnam,” 1907.',
      'Communist political pamphlet, 1930.',
      'Statement by Le Duan, Vietnamese communist party politician, speech at the Vietnamese Women’s Fourth Congress, 1974.'
    ])
  }]);
  add(9, 'dbqs', [{
    year: 'Practice Set 4', tag: 'DBQ',
    prompt: 'Using the following documents and your knowledge of world history, discuss the barriers women have faced for more equal treatment in modern society. Consider the goals and methods of such campaigns.',
    documents: docs(4, [
      'Anna Manning Comfort, The Public 2, 1899.',
      'From the Women’s Charter, adopted at the Founding Conference of the Federation of South African Women, Johannesburg, 1954.',
      'The Plight of Women’s Work in the Early Industrial Revolution in England and Wales, evidence taken by Children’s Employment Commission, 1841.',
      'Aung San Suu Kyi, Nobel Prize Laureate, excerpts from keynote address at APC Conference, 1995.',
      'Raja Rammohan Roy, A Second Conference Between an Advocate for, and an Opponent of the Practice of Burning Widows Alive, 1820.',
      'Pravda (Soviet Newspaper), “On the Path to a Great Emancipation,” March 8, 1929.',
      'Argentine feminist Maria Eugenia Echenique, “The Emancipation of Women,” 1876.'
    ])
  }]);
})(window.WRITING_PROMPTS);

/* ── LEQ + DBQ: class formula versions ──
   Each LEQ rubric row keeps its College Board sample. These add a model line written
   with the class formulas from writing-guide.html (thesis: adverb + "as seen through";
   context: 2 to 4 sentences + "This set the stage for … because"; evidence: "supports my
   argument that … because it demonstrates"; reasoning: the skill's words in every sentence).
   Keyed by unit|year; written by Claude (October 2026). */
(function (W) {
  var F = {
    '1|2025': {
      thesis: 'Although Buddhism and Hinduism also shaped Asian societies, Neo-Confucianism greatly shaped the political systems of East Asia, as seen through the Song civil service examinations and the strict family hierarchy it imposed on women.',
      context: 'Before 1200, belief systems had spread far beyond their homelands along the Silk Roads and Indian Ocean trade routes. Buddhism had traveled from India to China, Korea, and Japan, and merchants carried Hinduism and Buddhism into Southeast Asia. In twelfth-century China, the scholar Zhu Xi blended Confucian ethics with Buddhist ideas into Neo-Confucianism. This set the stage for belief systems to shape Asian societies in this period because rulers inherited well-developed traditions they could use to justify and organize their power.',
      'evidence-support': 'The Song civil service examination supports my argument that Neo-Confucianism greatly shaped East Asian political systems because it demonstrates how the state chose its officials by testing them on Confucian texts, which made Confucian values the foundation of the bureaucracy.',
      reasoning: 'The revival of Confucianism under the Song led to a stricter social hierarchy in China. Because Neo-Confucian thinkers taught that wives must obey husbands and sons must obey fathers, women&rsquo;s legal and social freedoms narrowed. This belief also contributed to the spread of foot binding among elite families, which resulted in women being kept largely inside the home.'
    },
    '2|2023': {
      thesis: 'Although Mongol rule barely touched Western Europe, Mongol expansion greatly affected the peoples of Eurasia, as seen through the revival of Silk Road trade under the Pax Mongolica and the destruction of the Abbasid Caliphate at Baghdad.',
      context: 'Before the Mongols rose, Eurasia was divided among rival states. In China, the Song dynasty was rich but militarily weak and had already lost the north to the Jin, while the Abbasid Caliphate had broken into smaller states that no longer obeyed Baghdad. Nomadic peoples on the steppe had long traded with and raided these settled empires. This set the stage for Mongol expansion because divided and weakened states could not unite against a disciplined army of steppe cavalry.',
      'evidence-support': 'The Pax Mongolica supports my argument that Mongol expansion greatly affected Eurasia because it demonstrates how Mongol control of the Silk Roads, protected by the yam relay system, let merchants such as Marco Polo travel safely from Europe to China.',
      reasoning: 'Mongol conquest caused a sharp rise in contact across Eurasia. Because the Mongols protected merchants along the Silk Roads, trade in silk, spices, and silver revived, which allowed technologies such as gunpowder and paper money to spread west. The same open routes also contributed to the spread of the Black Death, which resulted in the deaths of millions in the 1340s.'
    },
    '3|2024': {
      thesis: 'Although rulers also relied on armies and bureaucracies, religion was largely the main source of political legitimacy in Afro-Eurasia, as seen through the Ottoman sultans&rsquo; claim to the title of caliph and the European theory of the divine right of kings.',
      context: 'Before 1450, religion and political power were already closely linked across Afro-Eurasia. Islam had spread from Arabia across the Middle East, North Africa, and into South Asia, and Muslim rulers governed by Islamic law. In 1453, the Ottomans captured Constantinople and ended the Byzantine Empire, and they presented the victory as a triumph for Islam. This set the stage for religion to legitimize rulers in this period because new empires could present themselves as defenders of the faith to win their subjects&rsquo; loyalty.',
      'evidence-support': 'The Ottoman sultans&rsquo; use of the title of caliph supports my argument that religion was largely the main source of political legitimacy because it demonstrates how Ottoman rulers, especially after Selim I conquered Mecca and Medina in 1517, presented themselves as protectors of all Sunni Muslims.',
      reasoning: 'Both Muslim and Christian rulers grounded their power in religion, but they did so through different institutions. Whereas Ottoman sultans claimed authority as caliphs who enforced Islamic law, French kings such as Louis XIV claimed divine right, meaning they answered only to God. Similarly, the Safavid shahs made Shi&rsquo;a Islam the state religion of Iran, which shows that in each region rulers used religion to set themselves apart and command loyalty.'
    },
    '3|2023': {
      thesis: 'Although heavy taxes and powerful Janissaries later weakened it, the Ottoman Empire largely succeeded in expanding and consolidating its power, as seen through its gunpowder armies and the devshirme system that trained loyal soldiers and officials.',
      context: 'In the century before 1450, gunpowder weapons spread from China across Eurasia and changed how wars were fought. The Mongol successor states had broken apart, leaving room for new Turkic states to rise in Anatolia, Persia, and Central Asia. Meanwhile, the Byzantine Empire had shrunk to little more than the city of Constantinople. This set the stage for land-based empires to expand in this period because rulers who could afford cannons and large armies could conquer weaker neighbors.',
      'evidence-support': 'The devshirme system supports my argument that the Ottomans largely succeeded in consolidating their power because it demonstrates how the sultans took Christian boys from the Balkans, converted them to Islam, and trained them as Janissaries and officials who were loyal only to the sultan.',
      reasoning: 'New gunpowder weapons caused the Ottomans&rsquo; rapid expansion. Because Mehmed II used massive cannons to break the walls of Constantinople in 1453, the Ottomans gained a capital that controlled trade between Europe and Asia. The wealth from that trade and from tax farming then allowed the sultans to pay for standing armies, which led to further conquests in the Balkans and the Middle East.'
    },
    '4|2025': {
      thesis: 'Although religious goals also drove Spanish missionaries, European empires expanded primarily because of economic rivalries, as seen through the Spanish silver trade from Potos&iacute; and the Dutch East India Company&rsquo;s fight to control the spice trade.',
      context: 'Before 1450, Europeans bought Asian spices and silk through Muslim and Venetian middlemen who controlled the overland and Mediterranean routes. The Ottoman capture of Constantinople in 1453 strengthened Muslim control of these routes. At the same time, European monarchs were building stronger centralized states that needed new sources of wealth. This set the stage for overseas expansion because rulers wanted direct access to Asian goods and the profits that came with them.',
      'evidence-support': 'The Dutch East India Company supports my argument that European expansion was primarily motivated by economic rivalries because it demonstrates how the Dutch used a joint-stock company to drive the Portuguese out of Asian trading posts and seize control of the spice trade in the Indonesian islands.',
      reasoning: 'Competition for wealth led European states to build overseas empires. Because the Spanish found huge silver deposits at Potos&iacute;, Spain&rsquo;s rivals sought their own sources of wealth, which caused the English, Dutch, and French to sponsor joint-stock companies and colonies. This rivalry resulted in repeated wars over trading posts, such as the Dutch seizure of Portuguese Malacca in 1641.'
    },
    '5|2024': {
      thesis: 'Although socialism grew out of anger at industrial capitalism, discontent with monarchist and imperial rule was largely the main source of new political systems, as seen through the French Revolution&rsquo;s Declaration of the Rights of Man and the Latin American independence movements led by Sim&oacute;n Bol&iacute;var.',
      context: 'In the century before 1750, absolute monarchs such as Louis XIV of France claimed to rule by divine right and governed without the consent of their subjects. At the same time, philosophers such as John Locke argued that people had natural rights to life, liberty, and property, and that governments existed to protect them. These ideas spread through books and salons across Europe and its colonies. This set the stage for new political systems because subjects now had a language for challenging kings who ignored their rights.',
      'evidence-support': 'The Declaration of the Rights of Man and of the Citizen supports my argument that discontent with monarchy was largely the main source of new political systems because it demonstrates how French revolutionaries, angry at royal absolutism and noble privilege, declared that sovereignty belonged to the nation rather than the king.',
      reasoning: 'Resentment of absolutist and imperial rule led directly to new forms of government. Because Creole elites in Spanish America resented being shut out of top offices by Spanish-born peninsulares, they turned to Enlightenment ideas of popular sovereignty. This discontent resulted in independence wars led by Sim&oacute;n Bol&iacute;var, which created new republics such as Gran Colombia.'
    },
    '5|2025': {
      thesis: 'Enlightenment ideas greatly encouraged movements for political change and social reform, as seen through the natural-rights arguments of the French Revolution and the abolitionist movement that ended the British slave trade.',
      context: 'Before 1750, the Scientific Revolution had convinced many Europeans that reason could explain the natural world. Philosophers such as John Locke applied that same reasoning to government, arguing that people had natural rights and that rulers governed only by the consent of the governed. In the early 1700s, writers such as Voltaire and Montesquieu spread these ideas through books, pamphlets, and salons. This set the stage for reform movements because ordinary people gained arguments for challenging kings, slavery, and inherited privilege.',
      'evidence-support': 'The British abolitionist movement supports my argument that Enlightenment ideas greatly encouraged social reform because it demonstrates how activists such as Olaudah Equiano and William Wilberforce used the idea of natural rights to argue that slavery was unjust, which helped end the British slave trade in 1807.',
      reasoning: 'Enlightenment ideas of natural rights caused many groups to demand change. In France, these ideas led revolutionaries to abolish noble privileges in 1789. They also contributed to the women&rsquo;s rights movement, because writers such as Mary Wollstonecraft argued that if rights were natural, women deserved them too.'
    },
    '7|2021': {
      thesis: 'Although many colonial governments made only minimal changes, governments in industrialized countries significantly changed their economic policies in response to the Great Depression, as seen through Nazi Germany&rsquo;s state-directed rearmament and Britain&rsquo;s abandonment of the gold standard and free trade.',
      context: 'In the 1920s, the world economy depended heavily on American loans and on trade between industrial nations. Germany borrowed from American banks to pay its World War I reparations, and many farmers and colonies relied on selling raw materials at high prices. When the U.S. stock market crashed in 1929, American lending dried up and world trade collapsed. This set the stage for new economic policies because governments faced mass unemployment that the old free-market approach did not fix.',
      'evidence-support': 'Britain&rsquo;s decision to leave the gold standard in 1931 supports my argument that governments significantly changed their economic policies because it demonstrates how even the world&rsquo;s leading free-trade nation abandoned its traditional policy, then added protective tariffs in 1932 to shield British industry.',
      reasoning: 'Governments responded to the Depression in very different ways. Whereas Nazi Germany used state spending on public works and rearmament to cut unemployment, the Soviet Union, already a command economy, continued Stalin&rsquo;s Five-Year Plans. In contrast, colonial governments in Africa and Asia made few changes, because their European rulers would not pay for programs that cut into profits.'
    },
    '7|2025': {
      thesis: 'Although communist and fascist ideologies also drove conflict, nationalism was largely the most important factor contributing to global conflict, as seen through the Serbian nationalism that sparked World War I and the ultranationalist expansion of Nazi Germany and imperial Japan.',
      context: 'In the late nineteenth century, nationalism became a powerful force across Europe and beyond. Italy and Germany unified into new nation-states, and minority groups inside empires such as Austria-Hungary and the Ottoman Empire began demanding nations of their own. At the same time, Social Darwinist ideas taught that nations competed for survival. This set the stage for twentieth-century conflict because nations saw rivals as threats and were willing to fight to expand or defend their people.',
      'evidence-support': 'The assassination of Archduke Franz Ferdinand supports my argument that nationalism was the most important factor in global conflict because it demonstrates how a Serbian nationalist&rsquo;s goal of freeing South Slavs from Austro-Hungarian rule set off the chain of events that started World War I.',
      reasoning: 'Nationalism led to war by turning local disputes into national causes. After Gavrilo Princip killed Franz Ferdinand in 1914, Austria-Hungary declared war on Serbia, and the alliance system caused Russia, Germany, France, and Britain to join. Nationalist enthusiasm in each country contributed to the war&rsquo;s scale, because millions of men volunteered to fight for their nation.'
    },
    '8|2023': {
      thesis: 'Although segregation in housing and jobs persisted, the U.S. Civil Rights Movement largely succeeded in challenging racial segregation, as seen through the Montgomery Bus Boycott and the mass protests that pushed Congress to pass the Civil Rights Act of 1964.',
      context: 'After World War II, the world&rsquo;s power structures began to shift. The United Nations&rsquo; Universal Declaration of Human Rights in 1948 declared that all people were equal in dignity and rights, and colonies across Asia and Africa began winning independence. During the Cold War, the United States presented itself as the leader of the free world, yet it kept legal segregation in the South. This set the stage for the Civil Rights Movement because activists could point to the gap between America&rsquo;s ideals and its racial laws.',
      'evidence-support': 'The Montgomery Bus Boycott supports my argument that the Civil Rights Movement largely succeeded in challenging segregation because it demonstrates how Black residents, led by Martin Luther King Jr., kept up a year-long nonviolent boycott until segregated buses were ended in 1956.',
      reasoning: 'Nonviolent mass protest caused segregation to lose its legitimacy. Because television showed police attacking peaceful marchers in Birmingham in 1963, public opinion shifted toward the movement. This pressure led Congress to pass the Civil Rights Act of 1964, which outlawed segregation in public places.'
    },
    '9|2024': {
      thesis: 'Although the end of the Cold War and new technology also played a role, globalization was primarily driven by economic factors, as seen through the spread of free-trade agreements such as NAFTA and the growth of multinational corporations that moved production to low-wage countries.',
      context: 'In the decades after World War II, the United States and its allies built a new international economic system. The Bretton Woods agreement of 1944 created the International Monetary Fund and the World Bank, and the 1947 General Agreement on Tariffs and Trade began lowering tariffs among its members. Cheaper air travel and shipping also made it easier to move people and goods across oceans. This set the stage for globalization because businesses could now trade and invest across borders more cheaply than ever before.',
      'evidence-support': 'NAFTA supports my argument that globalization was primarily driven by economic factors because it demonstrates how the United States, Canada, and Mexico removed most tariffs between them starting in 1994, which tied their economies together as companies moved factories and goods across their borders.',
      reasoning: 'Economic liberalization led to a tightly connected world economy. Because free-trade agreements lowered tariffs, multinational corporations such as Nike and Apple moved production to low-wage countries in Asia and Latin America. As a result, goods made in one country were sold around the world, which made national economies dependent on each other.'
    },
    '9|2022': {
      thesis: 'Although the results varied from country to country, the spread of free-market ideas greatly changed the world economy, as seen through Deng Xiaoping&rsquo;s reforms in China and the privatization policies of Margaret Thatcher in Britain.',
      context: 'After World War II, many governments took a large role in their economies. The Soviet Union and China ran command economies, and many Western European states nationalized industries and built welfare states. In the 1970s, oil shocks and slow growth led economists such as Milton Friedman to argue that markets, not governments, should drive the economy. This set the stage for the spread of free-market ideas because leaders were searching for a way out of economic stagnation.',
      'evidence-support': 'Deng Xiaoping&rsquo;s economic reforms support my argument that free-market ideas greatly changed the world economy because they demonstrate how China, after 1978, opened Special Economic Zones to foreign investment and let farmers sell surplus crops for profit, which turned China into a manufacturing power.',
      reasoning: 'The spread of free-market ideas led to rapid economic change in former command economies. Because Deng allowed private enterprise and foreign investment, China&rsquo;s economy grew quickly and millions of people moved from farms to factory cities. In contrast, Russia&rsquo;s sudden shift to markets after 1991 resulted in economic collapse and growing inequality, which shows that the effects of free-market reform depended on how it was carried out.'
    },
    '9|2025': {
      thesis: 'Although access to them was unequal, medical and scientific discoveries greatly benefited societies, as seen through antibiotics such as penicillin and the vaccination campaign that eradicated smallpox.',
      context: 'In the late nineteenth century, scientists such as Louis Pasteur and Robert Koch proved that germs cause many diseases. This germ theory led cities to build clean water and sewer systems and encouraged doctors to search for ways to fight specific microbes. Even so, at the start of the twentieth century, infectious diseases such as tuberculosis and pneumonia were still leading causes of death. This set the stage for twentieth-century medical breakthroughs because scientists finally understood what they needed to fight.',
      'evidence-support': 'The development of penicillin supports my argument that medical discoveries greatly benefited societies because it demonstrates how a single antibiotic, mass-produced during World War II, turned deadly bacterial infections into curable illnesses and greatly lowered death rates.',
      reasoning: 'Medical breakthroughs caused major improvements in public health. Because the World Health Organization ran a global vaccination campaign, smallpox was eradicated by 1980. Antibiotics and vaccines together led to longer life expectancies, which contributed to rapid population growth in the developing world.'
    }
  };
  /* DBQs: same idea, using the DBQ frames (context "backdrop", grouped topic sentence +
     "Document N is …", HIPP sourcing with "therefore / which means", outside-evidence frame). */
  var D = {
    '4|2019': {
      thesis: 'Although the Portuguese used force to seize key ports, they transformed Indian Ocean maritime trade only to a limited extent, as seen through their violent trade-pass system and their dependence on the merchants and brokers who already ran the trade.',
      context: 'In the centuries surrounding this topic, the Indian Ocean was the busiest trade network in the world. Muslim, Gujarati, and Chinese merchants used the monsoon winds to carry spices, textiles, and porcelain between East Africa, Arabia, India, and Southeast Asia, and port cities such as Calicut and Malacca grew rich as trading centers. In the 1400s, Portugal began sailing down the coast of Africa in search of a sea route to these riches, and Vasco da Gama reached Calicut in 1498. This wider situation is the backdrop against which the Portuguese arrival in the Indian Ocean should be understood.',
      'evidence-support': 'One way the Portuguese changed Indian Ocean trade was through violence and forced tolls, as seen in Documents 1, 4, and 5, which show local rulers and merchants describing the Portuguese as pirates who attacked their ships. Document 5 is an address by a Muslim scholar from Calicut describing how the Portuguese forced every ship to buy a safe-conduct pass and seized the cargo and crews of ships without one. This document supports my argument because it demonstrates that the Portuguese changed the trade by using force to tax it, not by replacing the merchants who carried it.',
      sourcing: 'The author of Document 2 is a government official employed at a Portuguese trading post. Therefore, he may emphasize how much Portugal changed the region, which means his claim that Malabar would have fallen to the Muslims without the king of Portugal reflects Portuguese pride more than Portuguese control. This supports my argument that the Portuguese changed the trade only to a limited extent. The author of Document 5 is a Muslim religious scholar whose intended audience was the Muslims of southern India. Therefore, he may condemn the pass system as &ldquo;persecution&rdquo; to rally them against the Portuguese, which means he stresses Portuguese violence. This supports my argument because even this hostile source shows Muslim ships still sailing and trading, only now under Portuguese tolls.',
      outside: 'An additional piece of evidence that supports my argument that the Portuguese transformed Indian Ocean trade only to a limited extent is the Ottoman navy&rsquo;s campaigns against the Portuguese in the Arabian Sea and the Persian Gulf, such as the siege of Diu in 1538. This evidence supports my argument because it demonstrates that regional powers kept challenging the Portuguese, so Portugal never controlled the whole ocean.'
    },
    '5|2025': {
      thesis: 'Although some women gained new leadership roles, the spread of industrialization largely brought women new challenges, as seen through the exploitative conditions in textile factories and the double burden of wage work and family responsibilities.',
      context: 'In the decades surrounding this topic, industrialization spread from Britain to Western Europe, the United States, Russia, Japan, and other regions. New factories, especially textile mills, needed large numbers of cheap workers, and employers often hired women and girls because they could pay them less than men. At the same time, cities grew rapidly as rural families moved to find wages, and socialist and labor movements began demanding better conditions. This wider situation is the backdrop against which women&rsquo;s new opportunities and challenges should be understood.',
      'evidence-support': 'One way industrialization created challenges for women was through exploitative factory work, as seen in Documents 2, 3, and 5, which show women and girls working long hours for little pay under male supervision. Document 5 is a memoir by a Japanese labor activist who was recruited at about twelve years old to work in a silk mill, where she was promised good pay but was left with almost nothing after deductions. This document supports my argument because it demonstrates how factory owners took advantage of poor rural families to hire girls as cheap labor.',
      sourcing: 'The author of Document 1 is a Russian labor activist whose memoir was published in the Soviet Union in 1926. Therefore, she may celebrate how organizing gave women like Maria Soldatova leadership roles, which means her account praises the revolutionary movement more than the factories. This supports my argument because it shows that women&rsquo;s new opportunities came from fighting factory conditions, not from the factories themselves. The intended audience of Document 4 is the Russian imperial government, which was surveying how its population worked. Therefore, the report describes women&rsquo;s field work as a plain fact rather than an achievement, which means it is a reliable picture of the extra burden women carried when men left for manufacturing jobs, the double burden my argument describes.',
      outside: 'An additional piece of evidence that supports my argument that industrialization largely brought women new challenges is the 1911 Triangle Shirtwaist Factory fire in New York City, where 146 garment workers, most of them young immigrant women, died because the exits had been locked. This evidence supports my argument because it demonstrates the deadly conditions women faced in industrial workplaces.'
    },
    '6|2023': {
      thesis: 'Although foreign involvement badly weakened the Qing, internal problems were primarily responsible for its collapse, as seen through the rural poverty and rebellions that spread across China and the rise of Han Chinese nationalism against Manchu rule.',
      context: 'In the decades surrounding this topic, industrialized powers used military force and economic pressure to win concessions from weaker states across Asia and Africa, from the Ottoman Empire to the kingdoms of Southeast Asia. At the same time, China&rsquo;s population had more than doubled since 1700, to over 400 million people, putting heavy pressure on farmland and on a government that had not grown with it. This wider situation is the backdrop against which the Qing dynasty&rsquo;s collapse should be understood.',
      'evidence-support': 'One way internal problems weakened the Qing was through rural poverty and rebellion, as seen in Documents 1, 4, and 7, which show bandits and rebels seizing districts and an uprising ending the dynasty. Document 4 is a report from village elders in Shandong explaining that wealthy landowners refused to help the poor, which drove desperate people to join bandit gangs. This document supports my argument because it demonstrates that the Qing could no longer keep order in the countryside for reasons that had nothing to do with foreigners.',
      sourcing: 'The authors of Document 5 are young Chinese men studying abroad who formed the Chinese Alliance Association. Therefore, they may emphasize the Manchus as an &ldquo;alien race,&rdquo; which means their proclamation frames the collapse as a Han Chinese uprising against foreign rulers rather than a result of Western pressure. This supports my argument that internal forces drove the collapse. The purpose of Document 7, the abdication decree, is to explain why the dynasty was giving up power. Therefore, the regent may stress the people&rsquo;s support for a republic and the &ldquo;Will of Heaven,&rdquo; which means the court itself admitted that an internal uprising, not a foreign army, ended Qing rule.',
      outside: 'An additional piece of evidence that supports my argument that internal problems were primarily responsible for the Qing collapse is the Hundred Days&rsquo; Reform of 1898, when the Guangxu Emperor tried to modernize the government but was stopped by the Empress Dowager Cixi and conservative officials. This evidence supports my argument because it demonstrates that the Qing court itself blocked the reforms that might have saved the dynasty.'
    },
    '8|2024': {
      thesis: 'Although communist rule opened new education and work opportunities for women and workers, it largely transformed Soviet and Chinese societies through repression, as seen through Stalin&rsquo;s political terror and the famine caused by forced collectivization in China.',
      context: 'In the decades surrounding this topic, Marxist ideas spread from Europe to Russia and Asia. In 1917, the Bolsheviks under Lenin seized power in Russia and, after a civil war, created the Soviet Union in 1922. In China, the Qing dynasty fell in 1911, and the Chinese Communist Party, founded in 1921, fought the Nationalists for control of the country for decades. This wider situation is the backdrop against which communist efforts to remake Soviet and Chinese society should be understood.',
      'evidence-support': 'One way communist rule transformed society was through repression and failed planning, as seen in Documents 2, 4, and 5, which show forced confessions, criticism of Party dictatorship, and mass famine. Document 2 is a memoir by a Soviet Communist Party member describing how a peasant&rsquo;s son, held in prison, was beaten until he signed a false accusation against his father. This document supports my argument because it demonstrates how Stalin&rsquo;s terror reached even ordinary families on collective farms.',
      sourcing: 'The author of Document 3, Alexandra Kollontai, is a Russian Marxist and Soviet politician. Therefore, she may glorify the Soviet state&rsquo;s treatment of women, which means her claim that the USSR had &ldquo;solved&rdquo; the problem of combining work and motherhood celebrates communist policy rather than reporting it neutrally. This supports my argument because even the regime&rsquo;s real changes reached the public as propaganda. The intended audience of Document 7 is the general Soviet public, since it appeared in Pravda, the largest Soviet newspaper. Therefore, the author may denounce private enterprise to keep readers loyal to the Party, which means the article shows the state still fighting ideas it could not fully control, supporting my argument that communist rule depended on control.',
      outside: 'An additional piece of evidence that supports my argument that communist rule largely transformed Soviet and Chinese societies through repression is the Cultural Revolution (1966&ndash;1976), when Mao encouraged Red Guards to attack teachers, officials, and anyone accused of &ldquo;bourgeois&rdquo; thinking. This evidence supports my argument because it demonstrates how the Party used mass violence to remake Chinese society and silence opposition.'
    }
  };
  function addFormula(rubric, f) {
    if (!f || !rubric) return;
    rubric.forEach(function (r) {
      if (f[r.key]) r.exemplar += '<div class="wd-formula"><strong>Class formula version</strong>' + f[r.key] + '</div>';
    });
  }
  Object.keys(W).forEach(function (u) {
    (W[u].leq || []).forEach(function (l) { addFormula(l.rubric, F[u + '|' + l.year]); });
    [].concat(W[u].dbq ? [W[u].dbq] : [], W[u].dbqs || []).forEach(function (d) { addFormula(d.rubric, D[u + '|' + d.year]); });
  });
})(window.WRITING_PROMPTS);
