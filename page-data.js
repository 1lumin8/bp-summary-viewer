window.PAGE_LABELS = [
  "Old Testament Overview", "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy",
  "Joshua", "Judges", "Ruth", "1 & 2 Samuel", "1 & 2 Kings", "Ezra & Nehemiah", "Esther",
  "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Songs", "Isaiah", "Jeremiah",
  "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah",
  "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Chronicles",
  "New Testament Overview", "Matthew", "Mark", "John", "Luke", "Acts", "Romans",
  "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians",
  "Philemon", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus",
  "Hebrews", "James", "1 Peter", "2 Peter", "1, 2 & 3 John", "Jude", "Revelation"
];

window.PAGE_SIZES = window.PAGE_LABELS.map(() => ({ width: 5950, height: 3850 }));
window.SEARCH_INDEX = window.PAGE_LABELS.map((text, index) => ({ page: index + 1, text }));
window.PDF_TOC = [
  { label: "Old Testament", wide: true, items: window.PAGE_LABELS.slice(0, 36).map((title, index) => [title, index + 1, title]) },
  { label: "New Testament", wide: true, items: window.PAGE_LABELS.slice(36).map((title, index) => [title, index + 37, title]) }
];
