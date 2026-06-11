export const questions = [
  // === TOPIC 1: Reactga kirish ===
  {
    id: 1,
    topic: "Reactga kirish",
    difficulty: "oson",
    text: "React o'zi nima?",
    options: [
      "Foydalanuvchi interfeyslarini qurish uchun JavaScript kutubxonasi",
      "Ma'lumotlar bazasini boshqarish tizimi",
      "Server tomonida ishlaydigan dasturlash tili",
      "Faqat mobil ilovalar yaratish uchun freymvork"
    ],
    correctAnswerIndex: 0
  },
  {
    id: 2,
    topic: "Reactga kirish",
    difficulty: "o'rtacha",
    text: "Virtual DOM qanday ishlaydi?",
    options: [
      "Brauzerning haqiqiy DOM'ini to'g'ridan-to'g'ri va to'liq qayta chizadi",
      "Xotirada nusxa saqlaydi va faqat o'zgargan qismlarnigina haqiqiy DOM'ga yangilaydi",
      "Serverda DOM yaratib, brauzerga yuboradi",
      "Virtual DOM faqat Angular'da ishlatiladi"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 3,
    topic: "Reactga kirish",
    difficulty: "qiyin",
    text: "Reactda 'One-way data binding' (bir tomonlama ma'lumot oqimi) qanday afzalliklarga ega?",
    options: [
      "Ilovani sekinlashtiradi, lekin xavfsizlikni oshiradi",
      "Ma'lumotlar qayerdan kelayotganini va qanday o'zgarayotganini kuzatishni osonlashtiradi, koddagi xatolarni topish qulay bo'ladi",
      "Ma'lumotlar avtomatik tarzda serverga saqlanadi",
      "Faqat bitta komponent ishlashiga ruxsat beradi"
    ],
    correctAnswerIndex: 1
  },

  // === TOPIC 2: Muhit sozlash ===
  {
    id: 4,
    topic: "Muhit sozlash",
    difficulty: "oson",
    text: "Vite yordamida yangi React loyiha ochish uchun qaysi buyruqdan foydalaniladi?",
    options: [
      "npm start react-app",
      "create-react-app new-app",
      "npm create vite@latest",
      "node build react"
    ],
    correctAnswerIndex: 2
  },
  {
    id: 5,
    topic: "Muhit sozlash",
    difficulty: "o'rtacha",
    text: "Node.js va npm React loyihasida nima uchun kerak?",
    options: [
      "Brauzerda React kodini yurgizish uchun",
      "Loyihaga kerakli paketlarni o'rnatish va mahalliy serverni (dev server) ishga tushirish uchun",
      "CSS stillarini yozish uchun",
      "Faqat ma'lumotlar bazasiga ulanish uchun"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 6,
    topic: "Muhit sozlash",
    difficulty: "qiyin",
    text: "Vite nima uchun Create React App (CRA) ga qaraganda ancha tezroq ishlaydi?",
    options: [
      "Chunki u fayllarni siqib (minify) yuboradi",
      "ES Modules (ESM) ga asoslangan bo'lib, butun loyihani qayta yig'ish (bundle) o'rniga faqat kerakli fayllarni brauzerga uzatadi",
      "Vite da TypeScript umuman qo'llab-quvvatlanmaydi",
      "Faqat V8 dvigatelida ishlagani uchun"
    ],
    correctAnswerIndex: 1
  },

  // === TOPIC 3: JSX sintaksisi ===
  {
    id: 7,
    topic: "JSX sintaksisi",
    difficulty: "oson",
    text: "JSX nima?",
    options: [
      "JavaScript eXtension, HTML va JavaScriptni birga yozish imkonini beradi",
      "Faqat CSS yozish uchun maxsus til",
      "React Router'ning eski versiyasi",
      "JSON fayllarni tahrirlash uchun format"
    ],
    correctAnswerIndex: 0
  },
  {
    id: 8,
    topic: "JSX sintaksisi",
    difficulty: "o'rtacha",
    text: "JSX ichida JavaScript ifodalarini qanday yozish mumkin?",
    options: [
      "Qo'shtirnoq (\" \") ichida",
      "Jingalak qavslar ({ }) ichida",
      "Kvadrat qavslar ([ ]) ichida",
      "Burchakli qavslar (< >) ichida"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 9,
    topic: "JSX sintaksisi",
    difficulty: "qiyin",
    text: "Nima uchun JSX da HTML dagi kabi 'class' o'rniga 'className' ishlatiladi?",
    options: [
      "Chunki bu React yaratuvchilarining talabi",
      "Chunki 'class' so'zi JavaScript'da band qilingan (reserved) kalit so'z hisoblanadi va JSX aslida JavaScriptga o'giriladi",
      "HTML5 standartiga to'liq mos kelishi uchun",
      "CSS stillarini tezroq yuklash uchun"
    ],
    correctAnswerIndex: 1
  },

  // === TOPIC 4: Funksional komponentlar ===
  {
    id: 10,
    topic: "Funksional komponentlar",
    difficulty: "oson",
    text: "Funksional komponentni qanday yaratish mumkin?",
    options: [
      "class App extends Component {}",
      "function App() { return <div>...</div> }",
      "new Component('App')",
      "React.createClass({})"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 11,
    topic: "Funksional komponentlar",
    difficulty: "o'rtacha",
    text: "Funksional komponentlardan qaytarilishi kerak bo'lgan asosiy narsa nima?",
    options: [
      "State obyekti",
      "JSX elementi (React elementi)",
      "Props obyekti",
      "Faqat HTML string"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 12,
    topic: "Funksional komponentlar",
    difficulty: "qiyin",
    text: "Nima uchun React 16.8 (Hooks kiritilgach) versiyasidan so'ng funksional komponentlar yanada ommalashdi?",
    options: [
      "Ular tezroq ishlagani uchun",
      "Hooklar yordamida funksional komponentlarda state va lifecycle imkoniyatlaridan foydalanish mumkin bo'ldi",
      "Class komponentlar butunlay olib tashlangani uchun",
      "Faqat funksional komponentlarni test qilish mumkin bo'lgani uchun"
    ],
    correctAnswerIndex: 1
  },

  // === TOPIC 5: Class komponentlar ===
  {
    id: 13,
    topic: "Class komponentlar",
    difficulty: "oson",
    text: "Class komponentlar qaysi asosiy klassdan meros (extend) oladi?",
    options: [
      "React.Function",
      "React.Component",
      "React.Class",
      "React.Node"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 14,
    topic: "Class komponentlar",
    difficulty: "o'rtacha",
    text: "Class komponentlarda qaysi majburiy metod JSX qaytaradi?",
    options: [
      "return()",
      "display()",
      "render()",
      "show()"
    ],
    correctAnswerIndex: 2
  },
  {
    id: 15,
    topic: "Class komponentlar",
    difficulty: "qiyin",
    text: "Class komponentlarda state ni to'g'ri yangilash qanday amalga oshiriladi?",
    options: [
      "this.state.value = newValue",
      "this.setState({ value: newValue })",
      "useState(newValue)",
      "this.updateState({ value: newValue })"
    ],
    correctAnswerIndex: 1
  },

  // === TOPIC 6: Props ===
  {
    id: 16,
    topic: "Props",
    difficulty: "oson",
    text: "Props nima maqsadda ishlatiladi?",
    options: [
      "Komponent ichida o'zgaruvchilarni saqlash uchun",
      "Ota (parent) komponentdan bola (child) komponentga ma'lumot uzatish uchun",
      "Loyiha sozlamalarini saqlash uchun",
      "Sahifalarni yo'naltirish uchun"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 17,
    topic: "Props",
    difficulty: "o'rtacha",
    text: "Bola komponent o'ziga kelgan `props` qiymatini to'g'ridan-to'g'ri o'zgartirishi (mutate qilishi) mumkinmi?",
    options: [
      "Ha, doim mumkin",
      "Yo'q, props'lar faqat o'qish uchun (read-only) hisoblanadi",
      "Faqat state orqali uzatilsa mumkin",
      "Ha, lekin faqat funksional komponentlarda"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 18,
    topic: "Props",
    difficulty: "qiyin",
    text: "\"Props drilling\" nima va u qanday noqulaylik keltirib chiqaradi?",
    options: [
      "Props'larning xato turlarga ega bo'lishi",
      "Ma'lumotni chuqur joylashgan komponentga yetkazish uchun uni oraliq komponentlar orqali keraksiz ravishda o'tkazish muammosi",
      "Props'larni faqat bitta komponentda saqlash muammosi",
      "Props'lar yordamida state yaratish jarayoni"
    ],
    correctAnswerIndex: 1
  },

  // === TOPIC 7: State (useState) ===
  {
    id: 19,
    topic: "State",
    difficulty: "oson",
    text: "Komponent ichki holatini (state) qaysi hook yordamida boshqaramiz?",
    options: [
      "useEffect",
      "useContext",
      "useReducer",
      "useState"
    ],
    correctAnswerIndex: 3
  },
  {
    id: 20,
    topic: "State",
    difficulty: "o'rtacha",
    text: "useState hooki qaytaradigan massiv (array) tarkibida nimalar bo'ladi?",
    options: [
      "Joriy qiymat va uni o'zgartiruvchi funksiya",
      "Boshlang'ich qiymat va xatoliklar",
      "Props va State",
      "Faqat o'zgartiruvchi funksiya"
    ],
    correctAnswerIndex: 0
  },
  {
    id: 21,
    topic: "State",
    difficulty: "qiyin",
    text: "useState() ga boshlang'ich holat sifatida funksiya (lazy initialization) uzatilsa nima bo'ladi?",
    options: [
      "Xatolik yuz beradi",
      "Bu funksiya har safar komponent qayta chizilganda ishga tushadi",
      "Bu funksiya faqat komponent birinchi marta chizilganda (initial render) hisoblanadi va keyingi renderlarda ishga tushmaydi",
      "Funksiya zudlik bilan ishga tushadi va uning qiymati e'tiborsiz qoldiriladi"
    ],
    correctAnswerIndex: 2
  },

  // === TOPIC 8: Component composition ===
  {
    id: 22,
    topic: "Component composition",
    difficulty: "oson",
    text: "Component composition deganda nima tushuniladi?",
    options: [
      "Kichik va qayta ishlatiladigan komponentlarni birlashtirib, murakkab UI qismlarini yaratish",
      "Barcha kodlarni bitta katta komponentga yozish",
      "Komponentlarni serverga yuborish",
      "Redux yordamida global stateni boshqarish"
    ],
    correctAnswerIndex: 0
  },
  {
    id: 23,
    topic: "Component composition",
    difficulty: "o'rtacha",
    text: "Component composition'da `props.children` ning vazifasi nima?",
    options: [
      "Komponent ichidagi boshqa komponentlar yoki HTML elementlarni olish va chiqarish (render qilish) uchun",
      "Faqat matnli ma'lumotlarni uzatish uchun",
      "Dastur xatolarini ushlab qolish uchun",
      "Serverdan kelgan ma'lumotlarni saqlash uchun"
    ],
    correctAnswerIndex: 0
  },
  {
    id: 24,
    topic: "Component composition",
    difficulty: "qiyin",
    text: "Nima uchun Reactda komponentlarni qayta ishlatishda meros olish (inheritance) o'rniga Composition tavsiya etiladi?",
    options: [
      "Chunki JavaScript klasslarda meros olishni qo'llab-quvvatlamaydi",
      "Composition moslashuvchanlikni oshiradi va komponentlarni qutilar kabi ixtiyoriy shaklda birlashtirish imkonini beradi",
      "Meros olish Reactda doim xatolik beradi",
      "Composition orqali sahifa tezroq yuklanadi"
    ],
    correctAnswerIndex: 1
  },

  // === TOPIC 9: Controlled komponentlar ===
  {
    id: 25,
    topic: "Controlled komponentlar",
    difficulty: "oson",
    text: "Controlled component (boshqariladigan komponent) nima?",
    options: [
      "Qiymati DOM tomonidan emas, balki React state orqali boshqariladigan forma elementi",
      "Foydalanuvchi o'zgartira olmaydigan input elementi",
      "Faqat Redux orqali ishlaydigan komponent",
      "Qiymati faqat useRef yordamida olinadigan element"
    ],
    correctAnswerIndex: 0
  },
  {
    id: 26,
    topic: "Controlled komponentlar",
    difficulty: "o'rtacha",
    text: "Forma elementining qiymatini state bilan bog'lash uchun asosan qanday ikkita xususiyatdan (prop) foydalaniladi?",
    options: [
      "id va class",
      "value va onChange",
      "name va onClick",
      "ref va onSubmit"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 27,
    topic: "Controlled komponentlar",
    difficulty: "qiyin",
    text: "Uncontrolled component nima va u qachon ishlatilishi mumkin?",
    options: [
      "U faqat React Native da ishlaydi",
      "React uning ustidan umuman nazoratga ega emas, formani jo'natib bo'lmaydi",
      "Qiymatini o'zi saqlaydi va React state o'rniga DOM'dan qiymatni to'g'ridan-to'g'ri `ref` yordamida olish uchun ishlatiladi",
      "Uni hech qachon ishlatmaslik kerak, bu xato amaliyot"
    ],
    correctAnswerIndex: 2
  },

  // === TOPIC 10: React Router ===
  {
    id: 28,
    topic: "React Router",
    difficulty: "oson",
    text: "React Router kutubxonasi nima uchun kerak?",
    options: [
      "Ma'lumotlarni serverga yuborish uchun",
      "React dasturida bir sahifadan ikkinchi sahifaga yo'naltirish (routing) qilish uchun",
      "CSS stillarini boshqarish uchun",
      "Animatsiyalar yaratish uchun"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 29,
    topic: "React Router",
    difficulty: "o'rtacha",
    text: "Sahifani qayta yuklamasdan boshqa yo'lakka o'tish uchun qaysi komponent ishlatiladi?",
    options: [
      "<a> tegi",
      "<Link> yoki <NavLink> komponentlari",
      "<Route> komponenti",
      "<Switch> komponenti"
    ],
    correctAnswerIndex: 1
  },
  {
    id: 30,
    topic: "React Router",
    difficulty: "qiyin",
    text: "Dinamik marshrutlashda (masalan, /users/:id) URL parametrlarni qanday olish mumkin?",
    options: [
      "window.location.search orqali",
      "useParams() hooki yordamida",
      "useLocation() hookidan",
      "props.match.url orqali"
    ],
    correctAnswerIndex: 1
  }
];
