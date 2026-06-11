export const questionsData = {
  javascript: {
    oson: [
      { question: "JavaScript-da 'let' va 'var' ning asosiy farqi nimada?", options: ["Ikkalasi ham bir xil ishlaydi", "'var' faqat raqamlar uchun ishlatiladi", "'let' block scope, 'var' function scope", "'let' ni qayta o'zgartirib bo'lmaydi"], answer: "'let' block scope, 'var' function scope" },
      { question: "JavaScript-da console.log() nima vazifa bajaradi?", options: ["Yangi o'zgaruvchi yaratadi", "Brauzer konsoliga ma'lumot chiqaradi", "Serverga HTTP so'rov yuboradi", "Faylni kompyuterga saqlaydi"], answer: "Brauzer konsoliga ma'lumot chiqaradi" },
      { question: "Qat'iy tenglikni tekshiruvchi (type bilan) operator qaysi?", options: ["== operatori", "!== operatori", "= operatori", "=== operatori"], answer: "=== operatori" },
      { question: "Massiv (Array) qanday e'lon qilinadi?", options: ["let arr = {}", "let arr = ()", "let arr = ||", "let arr = []"], answer: "let arr = []" },
      { question: "Funksiya qanday yoziladi?", options: ["def myFunction():", "function myFunction() {}", "create myFunction()", "func myFunction() {}"], answer: "function myFunction() {}" },
      { question: "JavaScript qanday til hisoblanadi?", options: ["Kompilyatsiya qilinadigan til", "Mashina kodi darajasidagi til", "Belgilash (markup) tili", "Interpretatsiya qilinadigan skript tili"], answer: "Interpretatsiya qilinadigan skript tili" },
      { question: "String qanday ma'lumot turini saqlaydi?", options: ["Raqamli qiymatlarni", "Mantiqiy ifodalarni", "Matnli ma'lumotlarni", "Obyekt tuzilmalarini"], answer: "Matnli ma'lumotlarni" },
      { question: "Obyektda kalit-qiymat juftligi qanday ajratiladi?", options: ["Tenglik belgisi (=) bilan", "Vergul belgisi (,) bilan", "Ikki nuqta belgisi (:) bilan", "Nuqtali vergul (;) bilan"], answer: "Ikki nuqta belgisi (:) bilan" },
      { question: "Tsikl (Loop) yaratish uchun qaysi so'z ishlatiladi?", options: ["repeat", "for", "loop", "iterate"], answer: "for" },
      { question: "Bo'sh yoki mavjud bo'lmagan qiymat nima deyiladi?", options: ["zero va empty", "void va blank", "null va undefined", "none va missing"], answer: "null va undefined" }
    ],
    ortacha: [
      { question: "Closure nima va u qayerda ishlatiladi?", options: ["HTML elementini yopish tegi", "Massivni tozalash usuli", "Ichki funksiyaning tashqi muhit o'zgaruvchilarini eslab qolishi", "Brauzerni yopish funksiyasi"], answer: "Ichki funksiyaning tashqi muhit o'zgaruvchilarini eslab qolishi" },
      { question: "Promise larning qanday holatlari mavjud?", options: ["Start, Run, Stop", "Pending, Fulfilled, Rejected", "Wait, Success, Error", "Open, Read, Close"], answer: "Pending, Fulfilled, Rejected" },
      { question: "Arrow function ning oddiy funksiyadan asosiy farqi?", options: ["Faqat bir marta ishlaydi", "Nom berib bo'lmaydi", "Parametr qabul qilmaydi", "O'zining 'this' kontekstiga ega emas"], answer: "O'zining 'this' kontekstiga ega emas" },
      { question: "Massiv elementlarini biriktirib yangi qiymat qaytaruvchi metod?", options: ["map() metodi", "filter() metodi", "concat() metodi", "reduce() metodi"], answer: "reduce() metodi" },
      { question: "Event Bubbling (hodisalar ko'piklanishi) nima?", options: ["Hodisa tashqaridan ichkariga tarqalishi", "Hodisani bekor qilish mexanizmi", "Hodisa ichki elementdan tashqariga tarqalishi", "Hodisaning bitta elementda qotib qolishi"], answer: "Hodisa ichki elementdan tashqariga tarqalishi" },
      { question: "Destructuring qanday yoziladi?", options: ["const name = user.split()", "extract name from user", "const [name] = user.name", "const { name } = user"], answer: "const { name } = user" },
      { question: "Asinxron kodni sinxron kabi qilish uchun nima ishlatiladi?", options: ["try / catch bloki", "async / await kalit so'zlari", "then / catch metodi", "start / wait funksiyasi"], answer: "async / await kalit so'zlari" },
      { question: "Hoisting qaysi o'zgaruvchilarga to'liq ta'sir qiladi?", options: ["let va const larga", "var va Function Declaration ga", "Arrow function larga", "Faqat obyektlarga"], answer: "var va Function Declaration ga" },
      { question: "localStorage va sessionStorage farqi nimada?", options: ["localStorage faqat serverda saqlanadi", "Ikkalasi aynan bir xil ishlaydi", "sessionStorage brauzer yopilganda o'chadi", "sessionStorage ko'proq xotira oladi"], answer: "sessionStorage brauzer yopilganda o'chadi" },
      { question: "Spread operatori (...) nima vazifa bajaradi?", options: ["Ikkita sonni ko'paytiradi", "Funksiyani to'xtatadi", "Massiv elementlarini yoyib beradi", "O'zgaruvchini xotiradan o'chiradi"], answer: "Massiv elementlarini yoyib beradi" }
    ],
    qiyin: [
      { question: "Event Loop da Microtask va Macrotask farqi?", options: ["Microtask har doim Macrotask dan oldin bajariladi", "Ikkalasi ham bir vaqtda parallel ishlaydi", "Macrotask Microtask dan tezroq ishlaydi", "Microtask faqat NodeJS da mavjud"], answer: "Microtask har doim Macrotask dan oldin bajariladi" },
      { question: "WeakMap va Map ning xotira boshqaruvidagi farqi?", options: ["WeakMap faqat string qiymat saqlaydi", "Map xotiradan kamroq joy egallaydi", "WeakMap kalitlari GC tomonidan tozalanadi", "WeakMap tezroq iteratsiya qilinadi"], answer: "WeakMap kalitlari GC tomonidan tozalanadi" },
      { question: "Generator funksiyalar qanday e'lon qilinadi?", options: ["async function shaklida yoziladi", "function* va yield orqali ishlaydi", "function return yield qaytaradi", "Generatorlar JavaScript da yo'q"], answer: "function* va yield orqali ishlaydi" },
      { question: "Proxy obyekti nima maqsadda ishlatiladi?", options: ["Serverga proxy so'rov yuboradi", "Ma'lumotlar bazasiga ulanish beradi", "Obyektni xotiradan o'chiradi", "Obyekt operatsiyalarini intercept qiladi"], answer: "Obyekt operatsiyalarini intercept qiladi" },
      { question: "Currying funksional dasturlashda nima?", options: ["Funksiyani massiv ichiga solish", "Ko'p argumentli funksiyani zanjirli qilish", "Funksiyani asinxron holga keltirish", "Obyektlarni chuqur nusxalash"], answer: "Ko'p argumentli funksiyani zanjirli qilish" },
      { question: "'this' konteksti call, apply, bind bilan qanday ishlaydi?", options: ["Uchalasi ham aynan bir xil ishlaydi", "bind faqat event listener larda ishlatiladi", "apply faqat massivlarni o'chiradi", "call/apply darhol ishlaydi, bind yangi funksiya qaytaradi"], answer: "call/apply darhol ishlaydi, bind yangi funksiya qaytaradi" },
      { question: "Web Workers qanday ishlaydi?", options: ["DOM ni to'g'ridan-to'g'ri o'zgartiradi", "Faqat CSS animatsiyalarni boshqaradi", "Alohida fonda ishlaydi, postMessage almashadi", "Asinxron kutishni tezlashtiradi"], answer: "Alohida fonda ishlaydi, postMessage almashadi" },
      { question: "Memory leak asosan nima sababdan kelib chiqadi?", options: ["Faqat let va const ishlatganda", "Rekursiya yo'q bo'lganda", "O'chirilmagan listener va global o'zgaruvchilar", "JSON format noto'g'ri bo'lganda"], answer: "O'chirilmagan listener va global o'zgaruvchilar" },
      { question: "Symbol primitiv turi qanday maqsadda ishlatiladi?", options: ["Matnlarni formatlash uchun", "Raqamlarni shifrlash uchun", "Matematik amallar bajarish uchun", "Yagona va maxfiy kalitlar yaratish uchun"], answer: "Yagona va maxfiy kalitlar yaratish uchun" },
      { question: "Strict Mode yoqilganda qanday cheklovlar bo'ladi?", options: ["Barcha o'zgaruvchilar const bo'ladi", "E'lon qilinmagan o'zgaruvchiga yozish xato", "Funksiyalar faqat bir marta chaqiriladi", "Brauzer ancha sekinroq ishlaydi"], answer: "E'lon qilinmagan o'zgaruvchiga yozish xato" }
    ]
  },
  python: {
    oson: [
      { question: "Python'da ro'yxat (List) qanday yaratiladi?", options: ["my_list = (1, 2, 3)", "my_list = [1, 2, 3]", "my_list = {1, 2, 3}", "my_list = <1, 2, 3>"], answer: "my_list = [1, 2, 3]" },
      { question: "Ekranga ma'lumot chiqaruvchi funksiya qaysi?", options: ["echo()", "console.log()", "print()", "System.out()"], answer: "print()" },
      { question: "Bir qatorli izoh qaysi belgi bilan boshlanadi?", options: ["// belgisi", "/* belgisi", "# belgisi", "<!-- belgisi"], answer: "# belgisi" },
      { question: "String uzunligini o'lchash funksiyasi qaysi?", options: ["size()", "len()", "length()", "count()"], answer: "len()" },
      { question: "Python'da funksiya qanday e'lon qilinadi?", options: ["function my_func()", "create my_func()", "void my_func()", "def my_func():"], answer: "def my_func():" },
      { question: "Qaysi ma'lumot turi o'zgarmas (immutable)?", options: ["List turi", "Dictionary turi", "Tuple turi", "Set turi"], answer: "Tuple turi" },
      { question: "Key-Value juftligini saqlovchi tur qaysi?", options: ["List (list) turi", "Set (set) turi", "String (str) turi", "Dictionary (dict) turi"], answer: "Dictionary (dict) turi" },
      { question: "Matnni kichik harfga o'tkazuvchi metod qaysi?", options: ["down()", "small()", "lowercase()", "lower()"], answer: "lower()" },
      { question: "List oxiriga yangi element qo'shuvchi metod?", options: ["add()", "push()", "append()", "insert()"], answer: "append()" },
      { question: "Kod bloklarini ajratish uchun nima ishlatiladi?", options: ["Jingalak qavslar {}", "Nuqtali vergul ;", "End kalit so'zi", "Indentation (bo'sh joy)"], answer: "Indentation (bo'sh joy)" }
    ],
    ortacha: [
      { question: "List comprehension nima?", options: ["Listni tozalash funksiyasi", "Qisqa usulda yangi list yaratish usuli", "Listlarni birlashtirish metodi", "List elementlarini sanash funksiyasi"], answer: "Qisqa usulda yangi list yaratish usuli" },
      { question: "*args va **kwargs nima uchun ishlatiladi?", options: ["Klasslardan meros olish uchun", "Xatoliklarni ushlab qolish uchun", "Noma'lum miqdordagi argumentlar uchun", "O'zgaruvchilarni global qilish uchun"], answer: "Noma'lum miqdordagi argumentlar uchun" },
      { question: "Dekorator (Decorator) vazifasi nima?", options: ["Klass obyektlarini yo'q qiladi", "Funksiyaga qo'shimcha xususiyat qo'shadi", "Modullarni import qiladi", "Dasturni tezlashtiradi"], answer: "Funksiyaga qo'shimcha xususiyat qo'shadi" },
      { question: "Xatoliklarni ushlash bloki qanday yoziladi?", options: ["try / catch", "try / except", "do / fail", "attempt / error"], answer: "try / except" },
      { question: "Lambda funksiyasi nima?", options: ["Xotirani tozalovchi funksiya", "Massivni qirquvchi metod", "Nomsiz qisqa bir qatorli funksiya", "Dasturni asinxron qiluvchi metod"], answer: "Nomsiz qisqa bir qatorli funksiya" },
      { question: "Faylni xavfsiz ochish uchun qaysi so'z ishlatiladi?", options: ["open_safe", "using", "with", "file_lock"], answer: "with" },
      { question: "Ota klassni voris klassda chaqirish funksiyasi?", options: ["parent()", "super()", "base()", "root()"], answer: "super()" },
      { question: "'is' va '==' operatorlarining farqi nima?", options: ["Hech qanday farqi yo'q", "'is' manzilni, '==' qiymatni solishtiradi", "'==' tezroq ishlaydi", "'is' faqat sonlar uchun ishlaydi"], answer: "'is' manzilni, '==' qiymatni solishtiradi" },
      { question: "Generatorlar qaysi kalit so'z orqali ishlaydi?", options: ["return", "generate", "yield", "next"], answer: "yield" },
      { question: "Dict kaliti qanday xususiyatga ega bo'lishi shart?", options: ["Raqam bo'lishi shart", "List bo'lishi shart", "Istalgan tur bo'lishi mumkin", "Hashable/immutable bo'lishi shart"], answer: "Hashable/immutable bo'lishi shart" }
    ],
    qiyin: [
      { question: "GIL (Global Interpreter Lock) qanday muammo tug'diradi?", options: ["Fayllarni o'qish tezligini pasaytiradi", "GC ni ishdan chiqaradi", "CPU-bound da multithreading ga to'sqinlik qiladi", "Tarmoq ulanishlarini to'sib qo'yadi"], answer: "CPU-bound da multithreading ga to'sqinlik qiladi" },
      { question: "Metaclass nima maqsadda ishlatiladi?", options: ["Klass obyektini yaratish jarayonini boshqaradi", "Metodlarni qayta nomlash uchun", "Asinxron kod yozish uchun", "Xotirani tozalash uchun"], answer: "Klass obyektini yaratish jarayonini boshqaradi" },
      { question: "MRO (Method Resolution Order) qaysi algoritmga asoslanadi?", options: ["Depth-First Search algoritmi", "Breadth-First Search algoritmi", "C3 Linearization algoritmi", "Dijkstra algoritmi"], answer: "C3 Linearization algoritmi" },
      { question: "__slots__ ishlatilishidan maqsad nima?", options: ["Yangi metodlar qo'shishni osonlashtirish", "__dict__ yaratilishini to'xtatib xotira tejash", "Klassni abstrakt qilish", "Obyektni o'chirishni oldini olish"], answer: "__dict__ yaratilishini to'xtatib xotira tejash" },
      { question: "Context Manager uchun qaysi dunder metodlar kerak?", options: ["__init__ va __del__", "__open__ va __close__", "__start__ va __stop__", "__enter__ va __exit__"], answer: "__enter__ va __exit__" },
      { question: "Reference Counting qanday ishlaydi?", options: ["Har 5 soniyada RAM tozalaydi", "Havolalar sonini sanaydi, 0 da o'chiradi", "Klasslarni sanab boradi", "Matnlarni siqib saqlaydi"], answer: "Havolalar sonini sanaydi, 0 da o'chiradi" },
      { question: "Monkey Patching deganda nima tushuniladi?", options: ["Kod xatolarini avtomatik to'g'rilash", "Parollarni shifrlash jarayoni", "Run-time da metod/klassni dinamik o'zgartirish", "Test yozishni avtomatlashtirish"], answer: "Run-time da metod/klassni dinamik o'zgartirish" },
      { question: "Descriptor protokoli qaysi metodlardan iborat?", options: ["__add__, __sub__, __mul__", "__read__, __write__", "__get__, __set__, __delete__", "__new__, __init__"], answer: "__get__, __set__, __delete__" },
      { question: "Asyncio qanday asinxronlik amalga oshiradi?", options: ["Multiprocessing parallelizmi", "Single-threaded event-loop multitasking", "Hardware darajasidagi threads", "Tarmoq protokollari shifrlanishi"], answer: "Single-threaded event-loop multitasking" },
      { question: "__new__ va __init__ orasidagi farq nima?", options: ["Ikkalasi bir xil vazifa bajaradi", "__init__ klassni, __new__ metodni yaratadi", "__new__ faqat listlarda ishlaydi", "__new__ obyekt yaratadi, __init__ initsializatsiya qiladi"], answer: "__new__ obyekt yaratadi, __init__ initsializatsiya qiladi" }
    ]
  },
  cpp: {
    oson: [
      { question: "C++ da ekranga matn chiqarish uchun nima ishlatiladi?", options: ["std::cin", "printf() funksiyasi", "std::cout", "System.out"], answer: "std::cout" },
      { question: "Dastur qaysi funksiyadan boshlanadi?", options: ["start()", "main()", "init()", "run()"], answer: "main()" },
      { question: "Yangi qatorga o'tish uchun nima ishlatiladi?", options: ["break kalit so'zi", "<br> tegi", "std::endl yoki '\\n'", "newline buyrug'i"], answer: "std::endl yoki '\\n'" },
      { question: "C++ qaysi tilning bevosita davomchisi?", options: ["Java tilining", "C tilining", "Python tilining", "Pascal tilining"], answer: "C tilining" },
      { question: "Butun sonlarni saqlash uchun tur qaysi?", options: ["float", "char", "string", "int"], answer: "int" },
      { question: "C++ da izohlar qanday belgilanadi?", options: ["# belgisi bilan", "<!-- belgisi bilan", "-- belgisi bilan", "// va /* */ bilan"], answer: "// va /* */ bilan" },
      { question: "Foydalanuvchidan kiritish qabul qilish oqimi?", options: ["std::cout", "input() funksiyasi", "std::cin", "read() funksiyasi"], answer: "std::cin" },
      { question: "Kasr sonlarni aniq saqlash uchun tur nima?", options: ["int turi", "bool turi", "double turi", "char turi"], answer: "double turi" },
      { question: "Massiv e'lon qilishning to'g'ri shakli qaysi?", options: ["array arr(10);", "int arr = new 10;", "list arr[10];", "int arr[10];"], answer: "int arr[10];" },
      { question: "Boolean mantiqiy turi qanday nomlanadi?", options: ["boolean", "bool", "logical", "bit"], answer: "bool" }
    ],
    ortacha: [
      { question: "Pointer (ko'rsatkich) nima?", options: ["O'zgarmas qiymat saqlash usuli", "Boshqa o'zgaruvchining xotira manzilini saqlaydi", "Faqat string saqlash uchun tur", "Dastur ishini to'xtatuvchi buyruq"], answer: "Boshqa o'zgaruvchining xotira manzilini saqlaydi" },
      { question: "Dinamik xotira ajratish operatori qaysi?", options: ["malloc", "new", "alloc", "create"], answer: "new" },
      { question: "Class va Struct ning asosiy farqi nima?", options: ["Class funksiya saqlaydi, Struct yo'q", "Hech qanday farqi yo'q", "Struct da default public, Class da private", "Struct meros ola olmaydi"], answer: "Struct da default public, Class da private" },
      { question: "Obyekt yaratilganda avtomatik ishga tushadigan metod?", options: ["Destruktor (Destructor)", "Konstruktor (Constructor)", "Setter metodi", "Main method"], answer: "Konstruktor (Constructor)" },
      { question: "Overloading (Funksiyalarni yuklash) nima?", options: ["Kodni ko'p marta nusxalash", "Xotirani to'ldirib yuborish", "Bir xil nomli turli parametrli funksiyalar", "Funksiyani boshqa faylga ko'chirish"], answer: "Bir xil nomli turli parametrli funksiyalar" },
      { question: "Private a'zolarga tashqaridan kirishga yordam beruvchi so'z?", options: ["public", "friend", "virtual", "extern"], answer: "friend" },
      { question: "Dinamik xotirani tozalash operatori qaysi?", options: ["free()", "remove", "delete", "clear"], answer: "delete" },
      { question: "Namespace nima maqsadda ishlatiladi?", options: ["Kod tezligini oshirish uchun", "Fayllarni shifrlash uchun", "Kompilyator turini belgilash uchun", "Nom to'qnashuvini oldini olish uchun"], answer: "Nom to'qnashuvini oldini olish uchun" },
      { question: "Reference va Pointer farqlaridan biri nima?", options: ["Pointer tezroq ishlaydi", "Reference ko'p xotira oladi", "Reference null bo'la olmaydi va inicializatsiya shart", "Reference faqat int uchun ishlaydi"], answer: "Reference null bo'la olmaydi va inicializatsiya shart" },
      { question: "Static a'zo o'zini qanday tutadi?", options: ["Har bir obyekt uchun alohida nusxa yaratadi", "Uni o'zgartirib bo'lmaydi", "Barcha obyektlar uchun yagona nusxa bo'ladi", "Dastur oxirida o'zini o'chiradi"], answer: "Barcha obyektlar uchun yagona nusxa bo'ladi" }
    ],
    qiyin: [
      { question: "Virtual funksiya qanday mexanizmni yoqadi?", options: ["Kodning asinxron ishlashini ta'minlaydi", "Kompilyator xatolarini yashiradi", "Dinamik polimorfizmni ta'minlaydi", "Faqat klass ichida lokal funksiya yaratadi"], answer: "Dinamik polimorfizmni ta'minlaydi" },
      { question: "Yagona egalik huquqi beruvchi Smart Pointer qaysi?", options: ["std::shared_ptr", "std::unique_ptr", "std::weak_ptr", "std::auto_ptr"], answer: "std::unique_ptr" },
      { question: "SFINAE prinsipi Templates da nimani anglatadi?", options: ["Kompilyatsiya xatolarini e'tiborsiz qoldirish", "Shablon almashtirish xatosi boshqa shablonni izlaydi", "Faqat bitta tur bilan shablon yozish majburiyati", "Xotirada pointer xatosini tutish"], answer: "Shablon almashtirish xatosi boshqa shablonni izlaydi" },
      { question: "RAII tushunchasi qanday amalga oshiriladi?", options: ["Barcha xotira manually delete qilinadi", "Garbage Collector ishga tushiriladi", "Resurslar konstruktor va destruktorga bog'lanadi", "Pointerlardan butunlay voz kechiladi"], answer: "Resurslar konstruktor va destruktorga bog'lanadi" },
      { question: "Diamond Problem nima orqali hal qilinadi?", options: ["Private inheritance orqali", "Protected inheritance orqali", "Klasslarni bittaga tushirish orqali", "Virtual inheritance orqali"], answer: "Virtual inheritance orqali" },
      { question: "Move semantics va Rvalue reference (&&) vazifasi?", options: ["C++98 da xatolarni ushlash uchun", "C++14 da lambda tezlashtirish uchun", "C++11 da obyektni nusxalash o'rniga ko'chirish", "C++20 da konseptlar uchun"], answer: "C++11 da obyektni nusxalash o'rniga ko'chirish" },
      { question: "vtable nima maqsadda ishlatiladi?", options: ["Statik xotirani tozalash uchun", "Kompilyatorni tezlashtirish uchun", "Virtual funksiyalar manzilini topish uchun", "Makroslarni ro'yxatdan o'tkazish uchun"], answer: "Virtual funksiyalar manzilini topish uchun" },
      { question: "constexpr const dan qanday afzal?", options: ["Run-time tezligini pasaytiradi", "Faqat pointerlar bilan ishlaydi", "Hech qanday farqi yo'q", "Compile-time da hisoblashni kafolatlaydi"], answer: "Compile-time da hisoblashni kafolatlaydi" },
      { question: "Undefined Behavior ga misol qaysi?", options: ["If shartida false yozish", "Virtual funksiyani chaqirish", "Dangling pointer yoki massiv chegarasidan chiqish", "Namespace ishlatish"], answer: "Dangling pointer yoki massiv chegarasidan chiqish" },
      { question: "Lambda da [=] va [&] capture-list farqi?", options: ["[=] faqat sonlarni, [&] matnlarni oladi", "[=] tenglikni, [&] manzilni solishtiradi", "Lambda larda bunday yozuv xato", "[=] qiymat bo'yicha, [&] manzil bo'yicha oladi"], answer: "[=] qiymat bo'yicha, [&] manzil bo'yicha oladi" }
    ]
  },
  java: {
    oson: [
      { question: "Java-da main metodi qanday to'g'ri yoziladi?", options: ["void main(String args)", "public static void main(String[] args)", "public main(args)", "static void main()"], answer: "public static void main(String[] args)" },
      { question: "Java kodlari qanday kengaytmada saqlanadi?", options: [".class", ".java", ".exe", ".jar"], answer: ".java" },
      { question: "Java-ning asosiy shiori nima?", options: ["Write Fast, Run Faster", "Only for Windows", "Write Once, Run Anywhere", "Compile to Assembly"], answer: "Write Once, Run Anywhere" },
      { question: "JVM qisqartmasining to'liq ma'nosi nima?", options: ["Java Variable Memory", "Java Visual Method", "Java Verified Module", "Java Virtual Machine"], answer: "Java Virtual Machine" },
      { question: "Ekranga ma'lumot chiqarish buyrug'i qaysi?", options: ["Console.Write()", "System.out.println()", "print()", "cout <<"], answer: "System.out.println()" },
      { question: "Klass yaratish uchun qaysi so'z kerak?", options: ["object", "class", "struct", "module"], answer: "class" },
      { question: "Matnni saqlash uchun qaysi tur ishlatiladi?", options: ["Char", "String", "Text", "Word"], answer: "String" },
      { question: "Yangi obyekt qaysi so'z orqali yaratiladi?", options: ["create", "alloc", "new", "init"], answer: "new" },
      { question: "Shart operatori qaysi?", options: ["for", "if-else", "while", "return"], answer: "if-else" },
      { question: "Raqamlar uchun ibtidoiy (primitive) tip qaysi?", options: ["Number", "int", "Integer", "Digit"], answer: "int" }
    ],
    ortacha: [
      { question: "OOP ning 4 ta asosiy prinsipi qaysilar?", options: ["Classes, Objects, Methods, Variables", "Encapsulation, Inheritance, Polymorphism, Abstraction", "Public, Private, Protected, Default", "Try, Catch, Finally, Throw"], answer: "Encapsulation, Inheritance, Polymorphism, Abstraction" },
      { question: "Interface va Abstract Class o'rtasidagi farq?", options: ["Abstract class faqat bitta bo'ladi", "Interface da deklaratsiya, Abstract Class da holat ham bo'ladi", "Interface sekinroq ishlaydi", "Farqi yo'q"], answer: "Interface da deklaratsiya, Abstract Class da holat ham bo'ladi" },
      { question: "Checked va Unchecked Exception farqi?", options: ["Checked larni compile-time da ushlash majburiy", "Unchecked larni compile qilib bo'lmaydi", "Checked faqat tarmoq xatolari uchun", "Unchecked xatolar aslida xato emas"], answer: "Checked larni compile-time da ushlash majburiy" },
      { question: "ArrayList va LinkedList ishlash tezligi farqi?", options: ["LinkedList har doim tez ishlaydi", "ArrayList faqat sonlar saqlaydi", "ArrayList indeks bo'yicha tez, LinkedList qo'shishda tez", "Ikkalasi xotirada bir xil ishlaydi"], answer: "ArrayList indeks bo'yicha tez, LinkedList qo'shishda tez" },
      { question: "String va StringBuilder klasslari farqi?", options: ["String tezroq ishlaydi", "StringBuilder faqat raqam qabul qiladi", "String immutable, StringBuilder mutable", "String xotiradan tozalanmaydi"], answer: "String immutable, StringBuilder mutable" },
      { question: "Garbage Collector nima vazifa bajaradi?", options: ["Kodni xatolardan tozalaydi", "Xotira yetishmovchiligini oldini oladi", "Keraksiz fayllarni kompyuterdan o'chiradi", "Ishlatilmagan obyektlarni xotiradan tozalaydi"], answer: "Ishlatilmagan obyektlarni xotiradan tozalaydi" },
      { question: "static kalit so'zi nima qiladi?", options: ["O'zgaruvchini const ga aylantiradi", "Faqat main ichida ishlashga majburlaydi", "Xotirada saqlanmaslik imkonini beradi", "A'zoni klassning o'ziga tegishli qiladi"], answer: "A'zoni klassning o'ziga tegishli qiladi" },
      { question: "final kalit so'zi klass oldida nima anglatadi?", options: ["Bu klassdan meros olib bo'lmaydi", "Bu klass metodlari o'zgaradi", "Bu klass avtomat ishga tushadi", "Klass obyektini yaratib bo'lmaydi"], answer: "Bu klassdan meros olib bo'lmaydi" },
      { question: "HashMap ma'lumotni qanday tartibda saqlaydi?", options: ["Alifbo tartibida saqlaydi", "Kiritilgan vaqtiga qarab saqlaydi", "Hech qanday kafolatlangan tartibi yo'q", "Faqat teskari tartibda saqlaydi"], answer: "Hech qanday kafolatlangan tartibi yo'q" },
      { question: "Overloading va Overriding farqi nimada?", options: ["Ikkalasi ham bir xil, faqat sintaksis boshqa", "Overriding faqat static metodlarda ishlaydi", "Overloading merosxo'rlikda kerak", "Overloading - turli parametrlar, Overriding - qayta yozish"], answer: "Overloading - turli parametrlar, Overriding - qayta yozish" }
    ],
    qiyin: [
      { question: "synchronized kalit so'zi qanday muammoni hal qiladi?", options: ["Threadlarni o'chirib qo'yadi", "Oqimlarni tezlashtiradi", "Race condition oldini oladi", "Xotira sarfini kamaytiradi"], answer: "Race condition oldini oladi" },
      { question: "Volatile kalit so'zi nima vazifa bajaradi?", options: ["O'zgaruvchini o'zgarmas qiladi", "To'g'ridan-to'g'ri Main Memory dan o'qish/yozish", "Garbage collectorni to'xtatadi", "Klass yaratilishini tezlashtiradi"], answer: "To'g'ridan-to'g'ri Main Memory dan o'qish/yozish" },
      { question: "Generics Type Erasure nima?", options: ["Xotirani tejash uchun classlarni o'chirish", "Stringlarni bo'shatish jarayoni", "Runtime da Generic turlarni o'chirib Object qo'yish", "Exceptionlarni yashirish texnikasi"], answer: "Runtime da Generic turlarni o'chirib Object qo'yish" },
      { question: "Reflection API orqali nimalar qilish mumkin?", options: ["Faqat ekranga log chiqarish", "DB jadvallarini yaratish", "Frontend dizaynini o'zgartirish", "Runtime da klass tuzilishini tahlil qilish"], answer: "Runtime da klass tuzilishini tahlil qilish" },
      { question: "ConcurrentHashMap HashMap dan qanday farq qiladi?", options: ["Katta xotira talab qiladi", "Tarkibi faqat readonly bo'ladi", "Bucket darajasida qulflash orqali parallel ishlaydi", "Faqat kalitlarni saqlaydi"], answer: "Bucket darajasida qulflash orqali parallel ishlaydi" },
      { question: "Stream API da Intermediate va Terminal farqi?", options: ["Terminal operatsiya asinxron ishlaydi", "Intermediate kolleksiyani butunlay o'zgartiradi", "Intermediate lazy, Terminal chaqirilganda ishlaydi", "Farqi faqat nomlanishida"], answer: "Intermediate lazy, Terminal chaqirilganda ishlaydi" },
      { question: "ClassLoader lar ierarxiyasi nima uchun kerak?", options: [".class fayllarini JVM xotirasiga yuklash uchun", "Garbage Collectionni rejalashtirish uchun", "Fayllarni shifrlash uchun", "TCP paketlarni yuborish uchun"], answer: ".class fayllarini JVM xotirasiga yuklash uchun" },
      { question: "ThreadLocal klassining vazifasi nima?", options: ["Barcha threadlarga bitta o'zgaruvchi beradi", "Threadlarni to'xtatib qo'yadi", "Asinxron bazaga ulanish yaratadi", "Har bir thread uchun alohida nusxa saqlaydi"], answer: "Har bir thread uchun alohida nusxa saqlaydi" },
      { question: "Spring IoC (Inversion of Control) nima?", options: ["Database migratsiyalarini avtomatlash", "Bog'liqliklar boshqaruvini Framework oladi", "Web serverni o'chirish/yoqish", "HTTP so'rovlarni shifrlash"], answer: "Bog'liqliklar boshqaruvini Framework oladi" },
      { question: "G1 Garbage Collector avvalgilardan nima bilan farq qiladi?", options: ["U umuman threadlarni to'xtatmaydi", "Faqat Stringlarni tozalaydi", "Heapni emas, Stackni tozalaydi", "Heap ni Region larga bo'lib tozalaydi"], answer: "Heap ni Region larga bo'lib tozalaydi" }
    ]
  },
  csharp: {
    oson: [
      { question: "C# dasturlash tili kim tomonidan yaratilgan?", options: ["Sun Microsystems tomonidan", "Apple kompaniyasi tomonidan", "Microsoft kompaniyasi tomonidan", "Google kompaniyasi tomonidan"], answer: "Microsoft kompaniyasi tomonidan" },
      { question: "Konsolga ma'lumot chiqarish buyrug'i qaysi?", options: ["Console.Print()", "System.out.println()", "Console.WriteLine()", "cout <<"], answer: "Console.WriteLine()" },
      { question: "Dasturning asosiy ishga tushish nuqtasi nima?", options: ["Start() metodi", "Run() metodi", "Main() metodi", "Init() metodi"], answer: "Main() metodi" },
      { question: "String qanday ma'lumotni saqlaydi?", options: ["Butun sonlarni", "Matnlar ketma-ketligini", "Mantiqiy ifodalarni", "Faqat bitta belgini"], answer: "Matnlar ketma-ketligini" },
      { question: "Avtomatik tip aniqlash uchun qaysi so'z ishlatiladi?", options: ["let", "var", "auto", "def"], answer: "var" },
      { question: "C# kodlari qanday platformada bajariladi?", options: ["NodeJS platformasida", "JVM platformasida", "Zend Engine da", ".NET Framework / .NET Core da"], answer: ".NET Framework / .NET Core da" },
      { question: "Mantiqiy (rost/yolg'on) tip qaysi?", options: ["boolean", "logical", "bool", "bit"], answer: "bool" },
      { question: "Obyekt yaratish uchun qaysi so'z ishlatiladi?", options: ["create", "make", "new", "alloc"], answer: "new" },
      { question: "C# qanday turdagi til hisoblanadi?", options: ["Dinamik tiplangan skript tili", "Faqat protsedurali til", "Qat'iy tiplangan ob'ektga yo'naltirilgan til", "Belgilash (markup) tili"], answer: "Qat'iy tiplangan ob'ektga yo'naltirilgan til" },
      { question: "Bir qatorli izoh qanday qilinadi?", options: ["# belgisi bilan", "/* belgisi bilan", "<!-- belgisi bilan", "// belgisi bilan"], answer: "// belgisi bilan" }
    ],
    ortacha: [
      { question: "Struct va Class orasidagi asosiy farq nimada?", options: ["Struct da funksiya bo'lmaydi", "Class Value Type hisoblanadi", "Struct Value Type, Class Reference Type", "Farqi yo'q"], answer: "Struct Value Type, Class Reference Type" },
      { question: "LINQ nima va uning vazifasi?", options: ["List Intersect Query, ro'yxatlarni birlashtiradi", "Language Integrated Query, so'rov yozish tili", "Logical Interface Node tuzilmasi", "Language INteractive Quality tekshiruvchisi"], answer: "Language Integrated Query, so'rov yozish tili" },
      { question: "Delegate nima vazifa bajaradi?", options: ["Klassni meros qilib oladi", "Fayllarni yuklaydi", "Metodga xavfsiz ko'rsatkich sifatida ishlaydi", "Bazaga ulanish obyekti"], answer: "Metodga xavfsiz ko'rsatkich sifatida ishlaydi" },
      { question: "Asinxron kodlarda ishlatiladigan kalit so'zlar qaysi?", options: ["try / catch", "start / wait", "promise / then", "async / await"], answer: "async / await" },
      { question: "Property larda qanday aksessorlar ishlatiladi?", options: ["read va write", "get va set", "in va out", "pull va push"], answer: "get va set" },
      { question: "Virtual metodni voris klassda o'zgartirish uchun qaysi so'z?", options: ["override", "new", "virtual", "replace"], answer: "override" },
      { question: "IDisposable obyekti qaysi blok bilan tozalanadi?", options: ["lock bloki", "using bloki", "finally bloki", "dispose bloki"], answer: "using bloki" },
      { question: "Out va Ref parametrlari farqi nimada?", options: ["Out faqat raqamlar uchun ishlaydi", "Ref faqat string qaytaradi", "Out ichida inicializatsiya shart, Ref da oldindan kerak", "Hech qanday farqi yo'q"], answer: "Out ichida inicializatsiya shart, Ref da oldindan kerak" },
      { question: "Interface da qanday ruxsat modifikatorlari bo'ladi?", options: ["Faqat private", "Faqat protected", "Virtual kalit so'zi bilan", "Barchasi avtomat public"], answer: "Barchasi avtomat public" },
      { question: "Nullable value type qanday yoziladi?", options: ["int null a;", "NullableInt a;", "int a = null;", "int? a;"], answer: "int? a;" }
    ],
    qiyin: [
      { question: "Task va Thread o'rtasidagi asosiy farq?", options: ["Thread tezroq natija qaytaradi", "Task faqat UI uchun ishlaydi", "Ikkalasi aynan bitta narsa", "Task ThreadPool orqali boshqariladigan abstraksiya"], answer: "Task ThreadPool orqali boshqariladigan abstraksiya" },
      { question: "GC Generations (Gen 0, 1, 2) maqsadi nima?", options: ["Faqat xotirani 3 ta faylga bo'lish", "Klasslarni tartiblab sanash", "Yangi obyektlarni tez, eskilarni kam tekshirish", "Obyekt yaratilishini taqiqlash"], answer: "Yangi obyektlarni tez, eskilarni kam tekshirish" },
      { question: "yield return qanday ishlaydi?", options: ["Metodni butunlay to'xtatadi", "Ifodani qaytarib xatolik beradi", "Lazy iteratsiya orqali bittadan qiymat qaytaradi", "Faqat array larni tezlashtiradi"], answer: "Lazy iteratsiya orqali bittadan qiymat qaytaradi" },
      { question: "Boxing va Unboxing jarayoni nima?", options: ["Kodlarni qutiga solish", "Value Type ni object ga va qayta asl turiga o'girish", "Casting qilishni man etish", "Nuqtali vergullarni tekshirish"], answer: "Value Type ni object ga va qayta asl turiga o'girish" },
      { question: "Reflection orqali nima qilish mumkin?", options: ["Fayllarni kompressiya qilish", "Barcha xotirani bo'shatish", "Dasturni o'zini o'chirishi", "Runtime da DLL va sinf tarkibini tekshirish"], answer: "Runtime da DLL va sinf tarkibini tekshirish" },
      { question: "Entity Framework da Lazy Loading xususiyati?", options: ["Ma'lumotlarni umuman bazaga yozmaslik", "Bog'liq ma'lumotni faqat murojaat qilinganda yuklash", "Bazadan so'rovlarni butunlay o'chirish", "Hamma datani birda xotiraga olish"], answer: "Bog'liq ma'lumotni faqat murojaat qilinganda yuklash" },
      { question: "Record (C# 9.0+) Class dan nimasi bilan farq qiladi?", options: ["Record xotiraga yozilmaydi", "Record faqat audio fayllar uchun", "Record qiymat asosida taqqoslash va immutability beradi", "Class meros ololmaydi"], answer: "Record qiymat asosida taqqoslash va immutability beradi" },
      { question: "DI da Singleton, Scoped, Transient farqlari?", options: ["Hammasi bir xil narsa", "Faqat nomlarida farq bor", "Bular faqat DB ulanish turlari", "Singleton - yagona, Scoped - request, Transient - yangi"], answer: "Singleton - yagona, Scoped - request, Transient - yangi" },
      { question: "unsafe kalit so'zi nimaga imkon beradi?", options: ["Dastur himoyasini o'chirish", "Pointerlar bilan to'g'ridan-to'g'ri xotira ishlash", "Viruslar yozish imkoniyati", "GC ni ishdan chiqarish"], answer: "Pointerlar bilan to'g'ridan-to'g'ri xotira ishlash" },
      { question: "Action va Func delegatlarining farqi nima?", options: ["Ikkalasi ham string qaytaradi", "Action xotiradan kam joy oladi", "Func faqat asinxron ishlaydi", "Func qiymat qaytaradi, Action void"], answer: "Func qiymat qaytaradi, Action void" }
    ]
  },
  go: {
    oson: [
      { question: "Go tilini qaysi kompaniya yaratgan?", options: ["Facebook", "Google", "Microsoft", "Amazon"], answer: "Google" },
      { question: "Ekranga ma'lumot chiqaruvchi funksiya?", options: ["console.log()", "fmt.Println()", "print.Out()", "system.out"], answer: "fmt.Println()" },
      { question: "Qisqa e'lon qilish operatori qaysi?", options: ["=> operatori", "= operatori", ":= operatori", "== operatori"], answer: ":= operatori" },
      { question: "Go dasturlari qaysi funksiyadan boshlanadi?", options: ["def main()", "start()", "func main()", "init()"], answer: "func main()" },
      { question: "Go da tsikl (loop) larning qaysi turlari bor?", options: ["for va while turlari", "do-while, for, foreach turlari", "Faqat 'for' loop mavjud", "Go da tsikllar yo'q"], answer: "Faqat 'for' loop mavjud" },
      { question: "Funksiyadan nechta qiymat qaytarish mumkin?", options: ["Faqat bitta qiymat", "Hech qancha qaytarilmaydi", "Bir nechta (Multiple return)", "Faqat massiv qaytaradi"], answer: "Bir nechta (Multiple return)" },
      { question: "Ishlatilmaydigan qiymatni e'tiborsiz qoldirish belgisi?", options: ["nil belgisi", "null belgisi", "_ (underscore) belgisi", "none belgisi"], answer: "_ (underscore) belgisi" },
      { question: "Go da qat'iy tiplash (static typing) bormi?", options: ["Yo'q, u dinamik til", "Ha, u statik til", "Faqat raqamlar uchun bor", "Faqat Linux da bor"], answer: "Ha, u statik til" },
      { question: "Komentariya (izoh) qanday qoldiriladi?", options: ["# belgisi bilan", "<!-- belgisi bilan", "// yoki /* */ bilan", "-- belgisi bilan"], answer: "// yoki /* */ bilan" },
      { question: "Go ko'pincha qaysi sohada ishlatiladi?", options: ["Frontend UI yozishda", "Faqat o'yin yaratishda", "Backend va mikroservis sohalarida", "Faqat mobil ilovalar uchun"], answer: "Backend va mikroservis sohalarida" }
    ],
    ortacha: [
      { question: "Array va Slice orasidagi farq nima?", options: ["Ikkalasi aynan bir xil narsa", "Slice faqat matnlar uchun ishlaydi", "Array xotirada saqlanmaydi", "Array qat'iy o'lchamli, Slice moslashuvchan"], answer: "Array qat'iy o'lchamli, Slice moslashuvchan" },
      { question: "Go da Goroutine nima?", options: ["Oddiy OS thread hisoblanadi", "Go runtime tomonidan boshqariladigan yengil oqim", "Xatoliklarni ushlagich funksiyasi", "Xotirani bo'shatuvchi mexanizm"], answer: "Go runtime tomonidan boshqariladigan yengil oqim" },
      { question: "Goroutine lar orasida xavfsiz ma'lumot almashish?", options: ["Mutex ishlatiladi", "Global o'zgaruvchilar orqali", "Channel (Kanal) orqali", "Faqat bazaga yozish orqali"], answer: "Channel (Kanal) orqali" },
      { question: "defer kalit so'zi qachon ishlaydi?", options: ["Dastur boshida darhol ishlaydi", "Faqat xato chiqqanda ishlaydi", "Funksiya tugashida LIFO tartibida ishlaydi", "Hech qachon ishlamaydi"], answer: "Funksiya tugashida LIFO tartibida ishlaydi" },
      { question: "Struct nima uchun ishlatiladi?", options: ["Funksiyalarni yashirish uchun", "DB yaratish uchun", "Turli ma'lumotlarni bitta obyektga birlashtirish uchun", "Tsiklni tezlashtirish uchun"], answer: "Turli ma'lumotlarni bitta obyektga birlashtirish uchun" },
      { question: "Go da Interface qanday ulanadi (implement)?", options: ["implements so'zini yozish majburiy", "Interface faqat API larda ishlaydi", "Go da interface lar mavjud emas", "Metod imzolariga mos kelsa avtomatik ulanadi"], answer: "Metod imzolariga mos kelsa avtomatik ulanadi" },
      { question: "make() va new() funksiyalarining farqi?", options: ["Ikkalasi aynan bir xil vazifada", "new faqat Struct yaratadi", "make Slice/Map/Channel, new pointer qaytaradi", "make funksiya yarata oladi"], answer: "make Slice/Map/Channel, new pointer qaytaradi" },
      { question: "Xatolarni boshqarishning Go dagi usuli?", options: ["try-catch-finally bloki", "Exception throw qilish", "Xatolar e'tiborsiz qoldiriladi", "Funksiya error qaytaradi, if err != nil tekshiriladi"], answer: "Funksiya error qaytaradi, if err != nil tekshiriladi" },
      { question: "Struct tag lari nima vazifani bajaradi?", options: ["Html stillarini beradi", "O'zgaruvchini yashiradi", "JSON formatlashda xossa nomini belgilaydi", "Struct hajmini oshiradi"], answer: "JSON formatlashda xossa nomini belgilaydi" },
      { question: "nil tushunchasi Go da nimani anglatadi?", options: ["Raqamli nolni anglatadi", "Pointer, slice, map larning boshlang'ich qiymatsiz holati", "Bo'sh matnni anglatadi", "Hech narsa anglatmaydi"], answer: "Pointer, slice, map larning boshlang'ich qiymatsiz holati" }
    ],
    qiyin: [
      { question: "select operatorining Goroutines dagi o'rni?", options: ["SQL so'rovini goroutine ga yozish", "If-else o'rnida ishlatiladigan oddiy switch", "Bir nechta kanalni kutish va multiplexing", "Xatoni ushlab qolish mexanizmi"], answer: "Bir nechta kanalni kutish va multiplexing" },
      { question: "Data Race ni qanday aniqlash va oldini olish mumkin?", options: ["Internet tezligidagi xato hisoblanadi", "Kanallarning to'lib qolishi natijasi", "sync.Mutex yoki 'go run -race' orqali", "Array hajmining tugashi sababli"], answer: "sync.Mutex yoki 'go run -race' orqali" },
      { question: "Go GC algoritmi qaysi mexanizmga asoslanadi?", options: ["Reference counting algoritmiga", "Faqat manual free() buyrug'iga", "Go xotirani tozalamaydi umuman", "Concurrent tri-color mark-and-sweep ga"], answer: "Concurrent tri-color mark-and-sweep ga" },
      { question: "context.Context qanday vaziyatlarda zarur?", options: ["Faqat DB ulanish matni uchun", "Xotirani tozalash uchun kerak", "Dasturni o'chirish uchun ishlatiladi", "Timeout, cancellation va signal yuborishda"], answer: "Timeout, cancellation va signal yuborishda" },
      { question: "sync.WaitGroup vazifasi nimadan iborat?", options: ["Qatorlarni tartiblash uchun", "Xatoliklarni sanash uchun", "Barcha goroutine lar tugashini kutish uchun", "Mutekslarni bekor qilish uchun"], answer: "Barcha goroutine lar tugashini kutish uchun" },
      { question: "append() da slice sig'imi to'lsa nima bo'ladi?", options: ["Panic (xatolik) qaytaradi", "Eski ma'lumotlar ustiga yozadi", "Hajmni ikki barobar oshirib ma'lumot ko'chiradi", "Faqat bitta element qo'sha oladi"], answer: "Hajmni ikki barobar oshirib ma'lumot ko'chiradi" },
      { question: "Panic holatini qanday to'xtatish mumkin?", options: ["catch(Exception e) orqali ushlash", "throw Error() orqali tashlash", "Buni to'xtatib bo'lmaydi umuman", "defer ichida recover() funksiyasi orqali"], answer: "defer ichida recover() funksiyasi orqali" },
      { question: "init() funksiyasi qachon ishga tushadi?", options: ["Dastur yopilayotganda ishlaydi", "main() dan oldin paket yuklanganda ishlaydi", "Har bir goroutine ishga tushganda", "Faqat qo'lda chaqirilganda ishlaydi"], answer: "main() dan oldin paket yuklanganda ishlaydi" },
      { question: "Go scheduler (M:N) modeli qanday ishlaydi?", options: ["1 ta thread 1 ta goroutine ga bog'lanadi", "Goroutine lar OS thread ishlatmaydi", "M ta OS thread da N ta goroutine taqsimlaydi", "Barcha goroutine bitta thread da ishlaydi"], answer: "M ta OS thread da N ta goroutine taqsimlaydi" },
      { question: "Empty interface (interface{}) nima uchun ishlatiladi?", options: ["Faqat stringlar uchun ishlatiladi", "Har qanday turni ifodalash uchun, Go 1.18 da any", "Go da interface yo'q edi oldin", "Void funksiyalar uchun ishlatiladi"], answer: "Har qanday turni ifodalash uchun, Go 1.18 da any" }
    ]
  },
  php: {
    oson: [
      { question: "PHP da o'zgaruvchilar qanday belgi bilan boshlanadi?", options: ["# (panjara) belgisi", "@ (kuchukcha) belgisi", "& (ampersand) belgisi", "$ (dollar) belgisi"], answer: "$ (dollar) belgisi" },
      { question: "PHP kodlari qaysi teglar orasida yoziladi?", options: ["<script></script>", "<% ... %>", "<?php ... ?>", "<php></php>"], answer: "<?php ... ?>" },
      { question: "PHP asosan nima uchun ishlatiladi?", options: ["Faqat dizayn yasash uchun", "Server tomonida Backend dasturlash uchun", "Desktop o'yinlar uchun", "Faqat bazalarni yaratish uchun"], answer: "Server tomonida Backend dasturlash uchun" },
      { question: "Matnni ekranga chiqarish buyruqlari qaysilar?", options: ["console.log", "echo va print", "System.out", "cout buyrug'i"], answer: "echo va print" },
      { question: "Matnlarni birlashtirish uchun qaysi belgi ishlatiladi?", options: ["+ (plyus) belgisi", "& (ampersand) belgisi", ". (nuqta) belgisi", ", (vergul) belgisi"], answer: ". (nuqta) belgisi" },
      { question: "Bir qatorli izoh qanday belgilar bilan yoziladi?", options: ["/* belgisi bilan", "<!-- belgisi bilan", "~~ belgisi bilan", "// yoki # belgisi bilan"], answer: "// yoki # belgisi bilan" },
      { question: "PHP odatda qanday bazalar bilan ishlaydi?", options: ["Faqat MongoDB bilan", "Baza bilan ishlamaydi", "MySQL / PostgreSQL bilan", "Excel fayllar bilan"], answer: "MySQL / PostgreSQL bilan" },
      { question: "Massivni sikl orqali o'qishning eng oson usuli?", options: ["while tsikli", "foreach tsikli", "do-while tsikli", "if-else sharti"], answer: "foreach tsikli" },
      { question: "Faylni boshqa faylga ulash funksiyasi qaysi?", options: ["import / from", "use kalit so'zi", "include / require", "link funksiyasi"], answer: "include / require" },
      { question: "PHP abbreviaturasining kengaytmasi nima?", options: ["Personal Home Page", "Private HTML Parsing", "Programmed Hyperlink Protocol", "PHP: Hypertext Preprocessor"], answer: "PHP: Hypertext Preprocessor" }
    ],
    ortacha: [
      { question: "require va include farqi nimada?", options: ["Hech qanday farqi yo'q", "include ishlatilmaydi umuman", "require faqat class uchun ishlaydi", "require xato da to'xtaydi, include davom etadi"], answer: "require xato da to'xtaydi, include davom etadi" },
      { question: "Session va Cookie asosiy farqi?", options: ["Session serverda, Cookie brauzerda saqlanadi", "Cookie abadiy saqlanadi", "Session tezroq o'chib ketadi", "Ikkalasi aynan bir xil saqlanadi"], answer: "Session serverda, Cookie brauzerda saqlanadi" },
      { question: "Bazaga xavfsiz ulanish uchun qaysi obyekt ishlatiladi?", options: ["mysqli_connect()", "SQLConnection", "base_db", "PDO (PHP Data Objects)"], answer: "PDO (PHP Data Objects)" },
      { question: "Formadan kelgan ma'lumotlar qaysi massivda olinadi?", options: ["$_SERVER massivida", "$_SESSION massivida", "$_GET yoki $_POST massivida", "$_HTML massivida"], answer: "$_GET yoki $_POST massivida" },
      { question: "Klass nomlari to'qnashuvini qanday hal qilish mumkin?", options: ["Klasslarni o'chirish orqali", "Namespace (nomlar makoni) orqali", "Faqat include orqali hal qilinadi", "Xatoni yashirish orqali"], answer: "Namespace (nomlar makoni) orqali" },
      { question: "Trait nima uchun kerak?", options: ["Faqat konstantalar saqlash uchun", "Xavfsizlikni oshirish uchun", "Tayyor metodlarni klasslarga kiritish uchun", "HTML ni tozalash uchun"], answer: "Tayyor metodlarni klasslarga kiritish uchun" },
      { question: "Composer nima vazifani bajaradi?", options: ["DB ni boshqarish vositasi", "CSS framework hisoblanadi", "Xatoliklarni qidiruvchi tizim", "Kutubxonalarni boshqarish tizimi"], answer: "Kutubxonalarni boshqarish tizimi" },
      { question: "Magic methods (__construct) xususiyati nima?", options: ["Boshqa tillarga ulanadi", "Muayyan hodisalarda avtomatik ishga tushadi", "Dasturni sehrli tezlashtiradi", "Ular faqat xato bo'lganda chaqiriladi"], answer: "Muayyan hodisalarda avtomatik ishga tushadi" },
      { question: "Strict typing ni yoqish uchun nima yoziladi?", options: ["Faqat tsikllar ichida yoziladi", "PHP.ini faylida sozlanadi", "declare(strict_types=1); faylning boshida", "PHP da strict typing mavjud emas"], answer: "declare(strict_types=1); faylning boshida" },
      { question: "Xatolarni boshqarish bloki qanday?", options: ["if / else / error", "try / catch / finally", "start / fail", "throw / return"], answer: "try / catch / finally" }
    ],
    qiyin: [
      { question: "XSS hujumidan himoyalanish uchun qaysi funksiya ishlatiladi?", options: ["md5() funksiyasi", "password_hash() funksiyasi", "htmlspecialchars() funksiyasi", "strip_tags() etarli bo'ladi"], answer: "htmlspecialchars() funksiyasi" },
      { question: "Late Static Binding da 'static::' va 'self::' farqi?", options: ["Ikkalasi umuman boshqa narsa", "static:: faqat o'zgaruvchilarga ishlaydi", "self:: xatolik beradi har doim", "self:: o'z klassga, static:: voris klassga bog'lanadi"], answer: "self:: o'z klassga, static:: voris klassga bog'lanadi" },
      { question: "OPCache modulining vazifasi nima?", options: ["DB so'rovlarni qisqartiradi", "CSS va JS larni keshlaydi", "Bytecode ni RAM da saqlab dasturni tezlashtiradi", "Foydalanuvchi parollarini shifrlaydi"], answer: "Bytecode ni RAM da saqlab dasturni tezlashtiradi" },
      { question: "Closure ga tashqi o'zgaruvchini olib kirish qanday yoziladi?", options: ["global $var yoziladi", "this->var ishlatiladi", "import $var yoziladi", "use ($var) orqali yoziladi"], answer: "use ($var) orqali yoziladi" },
      { question: "PHP 8+ dagi JIT kompilyator nima qiladi?", options: ["HTML teglarni qisqartiradi", "SQL inyeksiyani to'sib qo'yadi", "Xotira leak larni tozalaydi", "Bytecode ni mashina kodiga o'girib tezlashtiradi"], answer: "Bytecode ni mashina kodiga o'girib tezlashtiradi" },
      { question: "Generatorlar (yield) qachon juda qo'l keladi?", options: ["Rasmlarni siqishda kerak", "Katta ma'lumotlarni lazy iteratsiya qilishda", "Routing qilishda kerak", "Session larni shifrlashda kerak"], answer: "Katta ma'lumotlarni lazy iteratsiya qilishda" },
      { question: "SPL (Standard PHP Library) nima taqdim etadi?", options: ["Faqat string funksiyalari beradi", "Composer o'rnini bosadi", "Stack, Queue, Iteratorlar va interfeyslar beradi", "Faqat fayl yuklash klasslari beradi"], answer: "Stack, Queue, Iteratorlar va interfeyslar beradi" },
      { question: "CSRF hujumini qanday to'sish mumkin?", options: ["Faqat HTTPS ishlatish kifoya", "htmlspecialchars orqali to'siladi", "Session da CSRF Token saqlab tekshirish", "Cookie ni butunlay o'chirish kerak"], answer: "Session da CSRF Token saqlab tekshirish" },
      { question: "Garbage Collector qachon ishga tushadi?", options: ["Har 5 soniyada ishlaydi", "Skript boshlanishidan oldin ishlaydi", "Refcount nolga tushganda va siklli bog'lanishda", "Hech qachon, faqat dasturchi tozalaydi"], answer: "Refcount nolga tushganda va siklli bog'lanishda" },
      { question: "PHP 8.0 dagi Union Types qanday yoziladi?", options: ["function foo(int, string $val)", "function foo(int OR string $val)", "function foo(int|string $val)", "function foo(int&string $val)"], answer: "function foo(int|string $val)" }
    ]
  }
};

export const languages = [
  { id: "javascript", name: "JavaScript", icon: "🟨", color: "#f7df1e" },
  { id: "python", name: "Python", icon: "🐍", color: "#306998" },
  { id: "cpp", name: "C++", icon: "⚙️", color: "#00599C" },
  { id: "java", name: "Java", icon: "☕", color: "#b07219" },
  { id: "csharp", name: "C#", icon: "🟣", color: "#9b4993" },
  { id: "go", name: "Go", icon: "🐹", color: "#00ADD8" },
  { id: "php", name: "PHP", icon: "🐘", color: "#777BB4" }
];

export const difficulties = [
  { id: "oson", name: "Oson", color: "#2ecc71" },
  { id: "ortacha", name: "O'rtacha", color: "#f39c12" },
  { id: "qiyin", name: "Qiyin", color: "#e74c3c" }
];
