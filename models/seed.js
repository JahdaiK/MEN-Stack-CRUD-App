/* Purpose: contains initial/seed data*/

const books = [
  {
    title: "The Maid",
    author: "Nita Prose",
    genre: "Fiction",
    photo:
      "https://m.media-amazon.com/images/I/41GdVl1a7XL.jpg",
    synopsis: "A debut for the many fans of The Thursday Murder Club, readers must be prepared to run around and solve this fatal mystery with the unflappable Molly Gray. For every curveball thrown her way, maid Molly keeps the life rules of her dear departed grandmother at heart and uses them to help solve the untimely murder of a guest. The characters around the Regency Grand Hotel would push anyone to their limits, so her subsequent suspect list is endless. Imperturbable Molly will take you by the hand as you solve this fun, fast and endlessly sweet mystery together!",
    isBookOfMonth: true,
    isFeatured: false,
    bomMonth: "January",
    bomYear: "2024",
  },
  {
    title: "The Vanishing Half",
    author: "Brit Bennet",
    genre: "Fiction",
    photo: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1577090827l/51791252.jpg",
    synopsis: "An indelible tale of identity, family and home that centers around identical twin sisters and their daughters, all living vastly different lives. From the acclaimed author of The Mothers, The Vanishing Half is a story that asks pertinent and, at times, overwhelming questions about who we are and where we’re headed as a society. Brit Bennett’s writing is smart and sharp, funny and melancholy, and it’s clear she has a lot of love for her characters. You will not be able to put this book down!",
    isBookOfMonth: false,
    isFeatured: true,
    bomMonth: "December",
    bomYear: "2023",
  },
  {
    title: "It Ends With Us",
    author: "Colleen Hoover",
    genre: "Romance",
    photo: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1688011813i/27362503.jpg",
    synopsis: "In 'It Ends With Us,' Lily, a determined and resilient woman, has overcome her challenging past and built a successful life for herself. As she navigates her way through the bustling city of Boston, Lily encounters Ryle Kincaid, a charismatic and accomplished neurosurgeon. The undeniable chemistry between them sparks a romance that seems too perfect. However, Ryle's aversion to committed relationships raises concerns for Lily. Despite her growing connection with Ryle, thoughts of her first love, Atlas Corrigan, resurface, adding a layer of complexity to her emotional journey. As Lily grapples with the mysteries of Ryle's past and the unexpected return of Atlas, the foundation of her newfound happiness is put to the test, forcing her to confront challenging decisions about love, loyalty, and self-discovery.",
    isBookOfMonth: false,
    isFeatured: true,
    bomMonth: "November",
    bomYear: "2023",
  },

  {
    title: "Verity",
    author: "Colleen Hoover",
    genre: "Thriller",
    photo: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634158558i/59344312.jpg",
    synopsis: "In 'Verity,' Lowen Ashleigh, a struggling writer facing financial hardship, receives a life-changing job offer from Jeremy Crawford. Jeremy, the husband of bestselling author Verity Crawford, hires Lowen to complete the remaining books in Verity's successful series. Upon arriving at the Crawford home to sift through Verity's notes, Lowen stumbles upon an unexpected find—an unfinished autobiography never intended for public eyes. The manuscript reveals bone-chilling admissions, including Verity's disturbing recollection of the tragic day her daughter died. Faced with the dilemma of whether to share this shocking truth with grieving Jeremy, Lowen grapples with her growing feelings for him and the potential personal gains tied to revealing Verity's darkest secrets. As the lines blur between duty and desire, Lowen becomes entangled in a web of deception that challenges her moral compass and the boundaries of love and loyalty.",
    isBookOfMonth: false,
    isFeatured: true,
    bomMonth: "October",
    bomYear: "2023",
  },
  {
    title: "Yellow Wife",
    author: "Sadeqa Johnson",
    genre: "Historical Fiction",
    photo: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1608477179i/54304031.jpg",
    synopsis: "Born on a plantation in Charles City, Virginia, Pheby Brown was promised her freedom on her eighteenth birthday. But when her birthday finally comes around, instead of the idyllic life she was hoping for with her true love, she finds herself thrust into the bowels of slavery at the infamous Devil’s Half-Acre, a jail where slaves are broken, tortured, and sold every day. Forced to become the mistress of the brutal man who owns the jail, Pheby faces the ultimate sacrifice to protect her heart in this powerful, thrilling story of one slave’s fight for freedom.",
    isBookOfMonth: false,
    isFeatured: false,
    bomMonth: "September",
    bomYear: "2023",
  },
  {
    title: "The School For Good Mothers",
    author: "Jessamine Chen",
    genre: "Science Fiction",
    photo: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1639314979i/57846320.jpg",
    synopsis: "tbd6",
    isBookOfMonth: false,
    isFeatured: false,
    bomMonth: "August",
    bomYear: "2023",
  },
  {
    title: "Local Woman Missing",
    author: "Mary Kubica",
    genre: "Thriller",
    photo: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1629480107i/57361474.jpg",
    synopsis: "In Mary Kubica's enthralling thriller, 'Local Woman Missing,' the serene atmosphere of a once-peaceful community is shattered when Shelby Tebow disappears, followed by the unsettling vanishing of Meredith Dickey and her young daughter, Delilah. The community is thrown into turmoil as an extensive yet elusive search fails to provide clear answers, and the case eventually goes cold. Eleven years later, the unexpected return of Delilah sends shockwaves through the community, prompting a quest for the truth that reveals chilling secrets buried in the past. Mary Kubica, a master of suspense, takes readers on a riveting journey, exploring domestic secrets and the lengths to which some individuals will go to safeguard hidden truths",
    isBookOfMonth: false,
    isFeatured: false,
    bomMonth: "July",
    bomYear: "2023",
  },
  {
    title: "The Housemaid's Secret",
    author: "Frieda McFadden",
    genre: "Thriller",
    photo: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1664729357i/62848145.jpg",
    synopsis: "This novel centers on Millie Calloway, a convicted felon who works for wealthy clients in Manhattan. After saving a friend from a potential rapist, Millie helps many other women escape their abusive partners. When she begins working for Douglas and Wendy Garrick, she recognizes the signs of abuse in Wendy and does what she can to help. However, things take a strange twist when Millie is accused of murder.",
    isBookOfMonth: false,
    isFeatured: false,
    bomMonth: "June",
    bomYear: "2023",
  },
  {
    title: "The Housemaid",
    author: "Frieda McFadden",
    genre: "Biography",
    photo: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1646534743i/60556912.jpg",
    synopsis: "ex-convict Millie becomes the maid for the wealthy Winchester family. It was the only job she could find, but there’s something odd about Nina, her new employer. On the other hand, Nina’s handsome husband, Andrew, is kind and friendly. Millie’s attracted to him and they begin an affair. Nina has a history of disturbing psychological problems and has accused Andrew of abusive behavior. When Nina flees, Millie has visions of becoming Andrew’s next wife. Soon, however, she finds herself on the receiving end of Andrew’s wrath. Concerned for Millie, Nina returns home - only to find a murder scene. When police start investigating, the murder trail spins into a shocking conclusion.",
    isBookOfMonth: false,
    isFeatured: false,
    bomMonth: "May",
    bomYear: "2023",
  },
  
  {
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    genre: "Romance",
    photo: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1664458703i/32620332.jpg",
    synopsis: "Aging Hollywood icon Evelyn Hugo decides it's finally time to reveal the truth behind her glamorous and scandalous life. To everyone's surprise, she selects unknown magazine reporter Monique Grant to write her biography. Monique, facing personal and professional challenges, seizes this unexpected opportunity to revitalize her career. As Evelyn unfolds her journey from 1950s Los Angeles to her exit from show business in the '80s, recounting her seven marriages, the narrative weaves together themes of ruthless ambition, unexpected friendships, and a forbidden love. Monique becomes deeply entwined in Evelyn's compelling story, feeling a genuine connection to the legendary star. However, as the narrative unfolds towards its conclusion, it becomes clear that Evelyn's life is tragically intertwined with Monique's own in ways both unexpected and irreversible.",
    isBookOfMonth: false,
    isFeatured: false,
    bomMonth: "April",
    bomYear: "2023",
  },
  {
    title: "Seven Days In June",
    author: "Tia Williams",
    genre: "Biography",
    photo: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1621846249i/55648820.jpg",
    synopsis: "Eva Mercy, a single mom and successful erotica writer in Brooklyn, unexpectedly reunites with Shane Hall, an enigmatic and reclusive literary author, at a literary event. The sparks between them reignite a love that originated two decades earlier during a passionate teenage romance. As they navigate the challenges of the present, confronting buried traumas and facing the scrutiny of New York's Black literati, Eva and Shane grapple with trust and heartbreak over the course of seven intense days in the midst of a steamy Brooklyn summer. With unresolved questions from the past lingering, Eva must decide whether she can trust the man who once broke her heart",
    isBookOfMonth: false,
    isFeatured: false,
    bomMonth: "March",
    bomYear: "2023",
  },
];

// Export the seed data to `models/index.js`
module.exports = books;
