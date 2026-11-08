/* stim-text.js: typed text for scanned source images (PDF crops in images/stimuli/).
   Keyed by the image path used in mcq-bank.js (simg / simgs). mcq-engine.js (MCQ Practice)
   and sbmcq.js (walkthrough cards) show the typed text in place of the scan:
     text-only scan : text + sl, and the scan is not shown at all
     picture + text : img = a crop of just the picture (with its title), shown under the
                      label imgHead; then each text source in parts, typed
   Each typed source: { head?, text, sl } where head is "Source 2" and sl is the source line
   as printed under it; \n starts a new paragraph. Typed exactly as printed.
   Scans not listed here (maps, paintings) still show as images. The Poma excerpt (ps3-31)
   keeps its scan with only the source line typed. Unit 4 done 2026-11-07. */
window.STIM_TEXT = window.STIM_TEXT || {};
(function (T) {
  T['images/stimuli/ps3-20.png'] = {
    text: '“…Whereas a certain controversy exists between the said lords, their constituents, as to what lands, of all those discovered in the ocean sea up to the present day, the date of this treaty, pertain to each one of the said parts respectively; therefore, for the sake of peace and concord, and for the preservation of the relationship and love of the said King of Portugal for the said King and Queen of [Spain]…their said representatives, acting in their name…covenanted and agreed that a boundary or straight line be determined and drawn north and south, from pole to pole, on the said ocean sea, from the Arctic to the Antarctic pole.\n' +
      'And all lands, both islands and mainlands…discovered…on the eastern side of the said bound… shall belong to, and remain in the possession of, and pertain forever to, the said King of Portugal and his successors. And all other lands, both islands and mainlands…discovered…on the western side of the said bound…shall belong to, and remain in the possession of, and pertain forever to, the said King and Queen of [Spain] and to their successors.”',
    sl: 'Treaty of Tordesillas between Spain and Portugal, 1494'
  };

  T['images/stimuli/ps4-03.png'] = {
    text: '“Many of those slaves we transport from Guinea to America are prepossessed with the opinion, that they are carried like sheep to the slaughter, and that the Europeans are fond of their flesh; which notion so far prevails with some, as to make them fall into a deep melancholy and despair, and to refuse all sustenance, tho’ never so much compelled and even beaten to oblige them to take some nourishment: notwithstanding all which, they will starve to death; whereof I have had several instances in my own slaves both aboard and at Guadalupe.”',
    sl: 'Firsthand account of John Barbot, an agent for the French Royal African Company (1732)'
  };

  T['images/stimuli/ps2-19.png'] = {
    text: '“IN ORDER, most potent Sire, to convey to your Majesty a just conception of the great extent of this noble city of Temixtitlan, and of the many rare and wonderful objects it contains; of the government and dominions of Moctezuma, the sovereign: of the religious rights and customs that prevail, and the order that exists in this as well as the other cities appertaining to his realm: it would require the labor of many accomplished writers, and much time for the completion of the task. I shall not be able to relate an hundredth part of what could be told respecting these matters; but I will endeavor to describe, in the best manner in my power, what I have myself seen; and imperfectly as I may succeed in the attempt, I am fully aware that the account will appear so wonderful as to be deemed scarcely worthy of credit; since even we who have seen these things with our own eyes, are yet so amazed as to be unable to comprehend their reality.”',
    sl: 'Hernando Cortés’s letter to King Charles V of Spain (1520)'
  };

  T['images/stimuli/ps2-21.png'] = {
    imgHead: 'Source 1',
    img: 'images/stimuli/ps2-21-src1.png',
    parts: [{
      head: 'Source 2',
      text: '“This great city contains a large number of temples, or houses, for their idols, very handsome edifices, which are situated in the different districts and the suburbs; in the principal ones religious persons of each particular sect are constantly residing, for whose use, besides the houses containing the idols, there are other convenient habitations. All these persons dress in black, and never cut or comb their hair from the time they enter the priesthood until they leave it; and all the sons of the principal inhabitants, both nobles and respectable citizens, are placed in the temples and wear the same dress from the age of seven or eight years until they are taken out to be married; which occurs more frequently with the first-born who inherit estates than with the others. The priests are debarred from female society, nor is any woman permitted to enter the religious houses. They also abstain from eating certain kinds of food, more at some seasons of the year than others.\n' +
        'Among these temples there is one which far surpasses all the rest, whose grandeur of architectural details no human tongue is able to describe; for within its precincts, surrounded by a lofty wall, there is room enough for a town of five hundred families. Around the interior of the enclosure there are handsome edifices, containing large halls and corridors, in which the religious persons attached to the temple reside. There are fully forty towers, which are lofty and well built, the largest of which has fifty steps leading to its main body, and is higher than the tower of the principal tower of the church at Seville. The stone and wood of which they are constructed are so well wrought in every part, that nothing could be better done, for the interior of the chapels containing the idols consists of curious imagery, wrought in stone, with plaster ceilings, and wood-work carved in relief, and painted with figures of monsters and other objects. All these towers are the burial places of the nobles, and every chapel in them is dedicated to a particular idol, to which they pay their devotions.”',
      sl: 'Hernando Cortés, Second Letter to Charles V, circa 1520'
    }]
  };

  T['images/stimuli/ps2-13.png'] = {
    imgHead: 'Source 1',
    img: 'images/stimuli/ps2-13-src1.png',
    parts: [{
      head: 'Source 2',
      text: '“Are you a man? Then you should have an human heart. But have you indeed? What is your heart made of? Is there no such principle as compassion there? Do you never feel another’s pain? Have you no sympathy? No sense of human woe? No pity for the miserable? When you saw the flowing eyes, the heaving breasts, the bleeding sides and tortured limbs of your fellow-creatures, was you a stone, or a brute? Did you look upon them with the eyes of a tiger? When you squeezed the agonizing creatures down in the ship, or when you threw their poor mangled remains into the sea, had you no relenting? Did not one tear drop from your eye, one sigh escape from your breast? Do you feel no relenting now? If you do not, you must go on, till the measure of your iniquities is full. Then will the great GOD deal with you, as you have dealt with them, and require all their blood at your hands.”',
      sl: 'John Wesley, Thoughts Upon Slavery, 1774'
    }]
  };

  T['images/stimuli/ps3-24.png'] = {
    text: '“The question as to who, and what, is responsible for African underdevelopment can be answered at two levels. Firstly, the answer is that the operation of the imperialist system bears major responsibility for African economic retardation by draining African wealth and by making it impossible to develop more rapidly the resources of the continent. Secondly, one has to deal with those who manipulate the system and those who are either agents or unwitting accomplices of the said system. The capitalists of Western Europe were the ones who actively extended their exploitation from inside Europe to cover the whole of Africa.”',
    sl: 'Walter Rodney, historian, How Europe Underdeveloped Africa, 1974'
  };

  /* Poma: the passage stays as the scan (kept as an image on purpose); only its source line is typed. */
  T['images/stimuli/ps3-31.png'] = {
    img: 'images/stimuli/ps3-31.png',
    parts: [{ text: '', sl: 'Felipe Guaman Poma de Ayala, The First New Chronicle and Good Government, circa 1610' }]
  };
})(window.STIM_TEXT);

/* stimTyped(src): how to show one scanned image, or null when it has no typed text.
   Returns { head, img, body }: head goes above the picture, img is the picture to show
   (null for a text-only scan), body is the typed text that follows. */
window.stimTyped = function (src) {
  var t = window.STIM_TEXT && window.STIM_TEXT[src];
  if (!t) return null;
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function one(s) {
    return '<div class="stx">' + (s.head ? '<p class="stx-head">' + esc(s.head) + '</p>' : '') +
      String(s.text || '').split('\n').filter(function (p) { return p; }).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') +
      (s.sl ? '<p class="stx-sl">' + esc(s.sl) + '</p>' : '') + '</div>';
  }
  return {
    head: t.imgHead ? '<p class="stx-head stx-imghead">' + esc(t.imgHead) + '</p>' : '',
    img: t.img || null,
    body: (t.parts || [t]).map(one).join('')
  };
};
