// ─────────────────────────────────────────────────────────────
// SHAQAALE PRO — Pure HTML/JS, zero dependencies
// ─────────────────────────────────────────────────────────────
var S = window._fw;

// ── TRANSLATIONS ──────────────────────────────────────
// ╔══════════════════════════════════════════════════════════════╗
// ║  SECTION: DATA  (TRANS · GEO · WORKERS · CATS · CC)        ║
// ║  Edit: translations, worker list, categories, countries     ║
// ╚══════════════════════════════════════════════════════════════╝
var TRANS={
SO:{needServices:'Waxaan u baahanahay adeegyo',needServicesSub:'Shaqaale xaqiiqsan kiri',offerServices:'Waxaan bixiyaa adeegyo',offerServicesSub:'Shaqo ku hel',signIn:'Gal',continueBtn:'Sii Wad',chooseLanguage:'Luqad Dooro',custLabel:'Macmiil',workerLabel:'Shaqaale',logoutLbl:'Ka Bax',homeTab:'Guriga',searchTab:'Raadinta',bookingsTab:'Booking',walletTab:'Lacagta',profileTab:'Xogta',jobsTab:'Shaqooyinka',earningsTab:'Dakhliga',availBal:'Lacagta La Heli Karo',stepLbl:'Tallaabo',ofLbl:'ka',goodDay:'Maalin wanaagsan',catAll:'Dhammaan',searchPlaceholder:'Raadi...',workers:'shaqaale',book:'Hire',chat:'Hadal',viewBtn:'Eeg',noActive:'Booking ma jirto',noHistory:'Taariikh ma jirto',activeTab:'Firfircoon',historyTab:'Taariikh',welcomeBack:'Dib ku soo dhawow',langLabel:'Luqad',notifsLabel:'Ogeysiisyada',editProf:'Wax ka Beddel',safetyLbl:'Amniga',helpLbl:'Caawimo',rateAppLbl:'App ku Qiimee',termsLbl:'Xeerarka',rateAppTitle:'Shaqaale Pro ku Qiimee',submitAppRate:'Gudbi',submitRating:'Gudbi',howWasJob:'Shaqadu sidee?',thankyou:'Mahadsanid!',closeBtn:'Xidh',laterBtn:'Ka dib',workerDash:'Dashboard',earnings:'Dakhliga',allJobs:'Dhammaan',protActive:'Ilaalinta Waa Shaqaynaysa',protSub:'Lacag escrow'},
EN:{needServices:'I need services',needServicesSub:'Hire verified professionals',offerServices:'I offer services',offerServicesSub:'Find work near you',signIn:'Sign In',continueBtn:'Continue',chooseLanguage:'Choose Language',custLabel:'Customer',workerLabel:'Worker',logoutLbl:'Log Out',homeTab:'Home',searchTab:'Search',bookingsTab:'Bookings',walletTab:'Wallet',profileTab:'Profile',jobsTab:'Jobs',earningsTab:'Earnings',availBal:'Available Balance',stepLbl:'Step',ofLbl:'of',goodDay:'Good day',catAll:'All',searchPlaceholder:'Search workers...',workers:'workers',book:'Book',chat:'Chat',viewBtn:'View',noActive:'No active bookings yet',noHistory:'No history yet',activeTab:'Active',historyTab:'History',welcomeBack:'Welcome Back',langLabel:'Language',notifsLabel:'Notifications',editProf:'Edit Profile',safetyLbl:'Safety & Trust',helpLbl:'Help & Support',rateAppLbl:'Rate the App',termsLbl:'Terms & Privacy',rateAppTitle:'Rate Shaqaale Pro',submitAppRate:'Submit',submitRating:'Submit Rating',howWasJob:'How was the job?',thankyou:'Thank you!',closeBtn:'Close',laterBtn:'Later',workerDash:'Worker Dashboard',earnings:'Earnings',allJobs:'All Jobs',protActive:'Platform Protection Active',protSub:'Payments secured in escrow'},
AR:{needServices:'Achtaj khadamat',offerServices:'Uqadim khadamat',signIn:'Dukhool',continueBtn:'Mutabaa',chooseLanguage:'Ikhtiyar lugha',custLabel:'Amil',workerLabel:'Amel',logoutLbl:'Khuruj',homeTab:'Raiyisiya',searchTab:'Bahth',bookingsTab:'Hujuzat',walletTab:'Mahfaza',profileTab:'Milafi',jobsTab:'Wazaif',earningsTab:'Arbah',availBal:'Al-Rasid',stepLbl:'Khatwa',ofLbl:'min',goodDay:'Yawm jayyid',catAll:'Al-kul',searchPlaceholder:'Bahth...',workers:'umal',book:'Ihjiz',chat:'Dardasha',viewBtn:'Ard',noActive:'La hujuzat',noHistory:'La tarikh',welcomeBack:'Marhaban',earnings:'Arbah',allJobs:'Jami',workerDash:'Lawha al-amel'},
SW:{needServices:'Ninahitaji huduma',needServicesSub:'Ajiri wataalamu',offerServices:'Ninatoa huduma',offerServicesSub:'Tafuta kazi karibu',signIn:'Ingia',continueBtn:'Endelea',chooseLanguage:'Chagua Lugha',custLabel:'Mteja',workerLabel:'Mfanyakazi',logoutLbl:'Toka',homeTab:'Nyumbani',searchTab:'Tafuta',bookingsTab:'Miadi',walletTab:'Mkoba',profileTab:'Wasifu',jobsTab:'Kazi',earningsTab:'Mapato',availBal:'Salio',stepLbl:'Hatua',ofLbl:'ya',goodDay:'Habari',catAll:'Zote',searchPlaceholder:'Tafuta...',workers:'wafanyakazi',book:'Hire',chat:'Ongea',viewBtn:'Tazama',noActive:'Hakuna miadi',noHistory:'Hakuna historia',welcomeBack:'Karibu Tena',langLabel:'Lugha',earnings:'Mapato',allJobs:'Kazi Zote',workerDash:'Dashibodi'}
};
function t(k){var l=S.getState().appLang||'EN';var tr=TRANS[l]||TRANS.EN;return(tr&&tr[k])||(TRANS.EN[k])||k;}

// ── GEO ─────────────────────────────────────────────────
var GEO={
'Somalia':{flag:'🇸🇴',regions:{'Banaadir':['Boondheere','Cabdulcaziiz','Daynile','Dharkenley','Hamar-Jajab','Hamar-Weyne','Hodan','Howlwadag','Kaaraan','Shangaani','Shibis','Waaberi','Wadajir','Wardhiigleey','Yaaqshiid'],'Hiiraan':['Beledweyne','Bulo Burto','Jalalaqsi'],'Jubbada Hoose':['Kismaayo','Afmadow','Badhaadhe','Jamaame'],'Bay':['Baydhabo','Buur Hakaba','Diinsoor'],'Shabeellaha Hoose':['Marka','Afgooye','Baraawe','Qoryooley'],'Mudug':['Gaalkacyo','Galdogob','Hobyo'],'Nugaal':['Garoowe','Eyl','Dangoroyo'],'Bari':['Boosaaso','Qardho','Iskushuban'],'Sool':['Laascaanood','Taleex','Xudun'],'Togdheer':['Burco','Oodweyne','Sheikh'],'Woqooyi Galbeed':['Hargeysa','Berbera','Gebiley'],'Awdal':['Borama','Baki','Lughaye']}},
'Kenya':{flag:'🇰🇪',regions:{'Nairobi':['Westlands','Dagoretti','Kibra','Roysambu','Kasarani','Embakasi'],'Mombasa':['Mvita','Kisauni','Nyali','Changamwe','Likoni'],'Garissa':['Garissa Township','Dadaab','Fafi'],'Kisumu':['Kisumu East','Kisumu West','Kisumu Central']}},
'Ethiopia':{flag:'🇪🇹',regions:{'Addis Ababa':['Bole','Kirkos','Kolfe Keranio','Lideta','Yeka','Arada'],'Dire Dawa':['Dire Dawa City','Sabian'],'Somali Region':['Jigjiga','Dolo Ado','Gode','Kebri Dahar']}},
'Tanzania':{flag:'🇹🇿',regions:{'Dar es Salaam':['Ilala','Kinondoni','Temeke','Ubungo'],'Arusha':['Arusha City','Meru','Monduli'],'Zanzibar':['Stone Town','Mkokotoni','Chake Chake']}},
'Uganda':{flag:'🇺🇬',regions:{'Kampala':['Kampala Central','Kawempe','Makindye','Nakawa','Rubaga'],'Gulu':['Gulu City','Amuru','Nwoya'],'Wakiso':['Entebbe','Kira','Nansana']}},
'Djibouti':{flag:'🇩🇯',regions:{'Djibouti City':['Balbala','Boulaos','Arhiba'],'Ali Sabieh':['Ali Sabieh District','Holhol'],'Dikhil':['Dikhil District','As-Eyla']}}
};



// ── COLORS ───────────────────────────────────────────────────
var C = {
  navy:'#0A0F1E', navyMid:'#111827', navyLight:'#1A2540', navyCard:'#162035',
  gold:'#C9A84C', goldDim:'#8A6E32', emerald:'#10B981',
  white:'#F8F9FC', muted:'#8B95AA', border:'rgba(201,168,76,0.15)',
  red:'#EF4444', orange:'#F97316', blue:'#3B82F6'
};

// ── DATA ─────────────────────────────────────────────────────
var WORKERS = [
  {id:1,name:'Fadumo Hassan',cat:'Home Services',sub:'House Cleaning',rating:4.9,jobs:234,badge:'Gold',dist:'0.8km',price:15,unit:'/hr',mp:320,av:'F',col:'#3B82F6',online:true,health:true,trust:98,liveIn:true,cts:['task','monthly','permanent']},
  {id:2,name:'Zahra Abdi',cat:'Home Services',sub:'Deep Cleaning',rating:4.8,jobs:189,badge:'Silver',dist:'1.2km',price:18,unit:'/hr',mp:380,av:'Z',col:'#8B5CF6',online:true,health:true,trust:95,liveIn:true,cts:['task','monthly']},
  {id:3,name:'Cabdi Warsame',cat:'Plumbing',sub:'Pipe Repair',rating:4.7,jobs:312,badge:'Gold',dist:'0.5km',price:25,unit:'/hr',mp:0,av:'C',col:'#F59E0B',online:false,health:false,trust:92,liveIn:false,cts:['task']},
  {id:4,name:'Hodan Maxamed',cat:'Home Services',sub:'Laundry & Ironing',rating:4.9,jobs:445,badge:'Platinum',dist:'1.5km',price:12,unit:'/hr',mp:280,av:'H',col:'#10B981',online:true,health:true,trust:99,liveIn:true,cts:['task','monthly','permanent']},
  {id:5,name:'Dalmar Jama',cat:'Delivery',hidden:true,sub:'Food & Package Courier',rating:4.7,jobs:823,badge:'Gold',dist:'0.3km',price:3,unit:'/km',mp:0,av:'D',col:'#EF4444',online:true,health:false,trust:92,liveIn:false,cts:['task'],vehicle:'Motorcycle',maxWeight:'20kg',zones:['Hodan','Wadajir','Shangaani','Kaaraan']},
  {id:6,name:'Yahye Hassan',cat:'Delivery',hidden:true,sub:'Large Item & Multi-Stop',rating:4.8,jobs:612,badge:'Silver',dist:'2.1km',price:4,unit:'/km',mp:0,av:'Y',col:'#06B6D4',online:true,health:false,trust:91,liveIn:false,cts:['task'],vehicle:'Van',maxWeight:'200kg',zones:['All Mogadishu']},
  {id:7,name:'Abdi Farah',cat:'Driver Services',sub:'Personal Driver & Chauffeur',rating:4.9,jobs:634,badge:'Gold',dist:'1.1km',price:2,unit:'/km',mp:280,av:'A',col:'#F97316',online:true,health:true,trust:96,liveIn:false,cts:['task','monthly'],vehicle:'Sedan',ac:true,zones:['All Mogadishu + Airport']},
  {id:8,name:'Luul Omar',cat:'Cooking',sub:'Home Chef',rating:5.0,jobs:98,badge:'Platinum',dist:'0.9km',price:20,unit:'/hr',mp:420,av:'L',col:'#EC4899',online:false,health:true,trust:99,liveIn:true,cts:['task','monthly']},
  {id:9,name:'Mustafe Ali',cat:'Tech & Digital',sub:'Phone Repair',rating:4.7,jobs:203,badge:'Gold',dist:'1.8km',price:30,unit:'/job',mp:0,av:'M',col:'#6366F1',online:true,health:false,trust:91,liveIn:false,cts:['task']},
  {id:10,name:'Naima Ismail',cat:'Beauty',sub:'Hair Braiding',rating:4.9,jobs:567,badge:'Platinum',dist:'0.7km',price:35,unit:'/session',mp:0,av:'N',col:'#F43F5E',online:true,health:true,trust:97,liveIn:false,cts:['task']},
  {id:11,name:'Khadar Yuusuf',cat:'Electrical',sub:'Wiring & Faults',rating:4.6,jobs:156,badge:'Silver',dist:'2.4km',price:35,unit:'/hr',mp:0,av:'K',col:'#EAB308',online:true,health:false,trust:89,liveIn:false,cts:['task']},
  {id:12,name:'Sahra Ahmed',cat:'Beauty',sub:'Makeup Artist',rating:4.8,jobs:234,badge:'Gold',dist:'1.0km',price:40,unit:'/session',mp:0,av:'S',col:'#DB2777',online:true,health:true,trust:94,liveIn:false,cts:['task']},
  {id:21,name:'Luul Maxamed',   cat:'Childcare',         sub:'Nanny & Babysitter',    rating:4.9,jobs:143,badge:'Trusted', dist:'1.2km',price:12,unit:'/hr',dayRate:80, mp:280,av:'L',col:'#F43F5E',online:true, health:true, trust:97,liveIn:true, cts:['task','monthly','permanent'],loc:'Hodan',      bio:'Certified childcare specialist. 5+ years.'},
  {id:22,name:'Faadumo Warsame',cat:'Tutoring & Teaching',sub:'Math & Sciences',       rating:4.8,jobs:167,badge:'Gold',   dist:'2.1km',price:15,unit:'/hr',dayRate:100,mp:320,av:'F',col:'#6366F1',online:true, health:true, trust:91,liveIn:false,cts:['task','monthly'],          loc:'Waaberi',    bio:'University grad. All levels welcome.'},
  {id:23,name:'Naima Cabdi',    cat:'Laundry',            sub:'Laundry & Ironing',     rating:4.7,jobs:312,badge:'Silver', dist:'0.9km',price:10,unit:'/hr',dayRate:65, mp:240,av:'N',col:'#14B8A6',online:true, health:false,trust:88,liveIn:false,cts:['task','monthly'],          loc:'Wadajir',    bio:'Professional laundry and fabric care.'},
  {id:24,name:'Khadar Jama',    cat:'Painting',           sub:'Interior Painting',     rating:4.6,jobs:98, badge:'Active', dist:'2.8km',price:20,unit:'/hr',dayRate:130,mp:0,  av:'K',col:'#A78BFA',online:true, health:false,trust:86,liveIn:false,cts:['task'],                   loc:'Kaaraan',    bio:'Interior and exterior painting.'},
  {id:25,name:'Bile Axmed',     cat:'Carpentry',          sub:'Furniture & Repair',    rating:4.7,jobs:134,badge:'Gold',   dist:'1.6km',price:25,unit:'/hr',dayRate:150,mp:0,  av:'B',col:'#D97706',online:false,health:false,trust:89,liveIn:false,cts:['task'],                   loc:'Shangaani',  bio:'Custom furniture and wood repairs.'},
  {id:26,name:'Abdirahman Ali', cat:'Security',           sub:'Security Guard',        rating:4.8,jobs:201,badge:'Trusted',dist:'1.0km',price:18,unit:'/hr',dayRate:110,mp:360,av:'A',col:'#64748B',online:true, health:true, trust:96,liveIn:false,cts:['task','monthly','permanent'],loc:'Cabdulcaziiz',bio:'Ex-military. Licensed and insured.'},
  {id:27,name:'Ikran Yuusuf',   cat:'Gardening',          sub:'Garden & Landscaping',  rating:4.5,jobs:67, badge:'Active', dist:'3.4km',price:16,unit:'/hr',dayRate:90, mp:0,  av:'I',col:'#22C55E',online:true, health:false,trust:84,liveIn:false,cts:['task'],                   loc:'Daynile',    bio:'Garden design and maintenance.'},
  {id:28,name:'Warsan Hassan',  cat:'Moving',             sub:'House Moving',          rating:4.6,jobs:89, badge:'Silver', dist:'2.2km',price:22,unit:'/hr',dayRate:140,mp:0,  av:'W',col:'#FB923C',online:true, health:false,trust:87,liveIn:false,cts:['task'],                   loc:'Dharkenley', bio:'Careful and fast home moving.'},
  {id:29,name:'Deeqa Maxamed',  cat:'Pet Care',           sub:'Pet Sitting & Walking', rating:4.9,jobs:45, badge:'Trusted',dist:'1.8km',price:13,unit:'/hr',dayRate:75, mp:260,av:'D',col:'#C084FC',online:true, health:true, trust:93,liveIn:false,cts:['task','monthly'],          loc:'Shibis',     bio:'Animal lover. Dogs, cats, birds.'},
  {id:30,name:'Sahra Nuur',     cat:'Photography',        sub:'Photos & Video',        rating:4.9,jobs:78, badge:'Creative',dist:'2.5km',price:28,unit:'/hr',dayRate:180,mp:0,  av:'S',col:'#E879F9',online:true, health:true, trust:92,liveIn:false,cts:['task'],                   loc:'Hamar-Weyne','bio':'Professional photographer.'},
  {id:31,name:'Caays Shire',    cat:'Event Staff',        sub:'Events & Catering',     rating:4.7,jobs:56, badge:'Gold',   dist:'1.4km',price:17,unit:'/hr',dayRate:105,mp:0,  av:'C',col:'#F472B6',online:true, health:true, trust:90,liveIn:false,cts:['task'],                   loc:'Hodan',      bio:'Professional event hosting.'},
  {id:32,name:'Dr. Asad Omar',  cat:'Healthcare',         sub:'Home Nurse & Care',     rating:5.0,jobs:112,badge:'Platinum',dist:'1.1km',price:35,unit:'/hr',dayRate:200,mp:600,av:'A',col:'#EF4444',online:true, health:true, trust:99,liveIn:false,cts:['task','monthly'],          loc:'Waaberi',    bio:'Registered nurse. Elderly & post-op care.'},
  {id:33,name:'Hamdi Abdi',     cat:'Tailoring',          sub:'Clothes & Alterations', rating:4.8,jobs:234,badge:'Gold',   dist:'0.7km',price:12,unit:'/hr',dayRate:70, mp:250,av:'H',col:'#8B5CF6',online:true, health:false,trust:91,liveIn:false,cts:['task','monthly'],          loc:'Wadajir',    bio:'Expert tailor. Traditional & modern.'},
  {id:34,name:'Mustafe Warsame',cat:'Welding',            sub:'Metal & Welding Work',  rating:4.6,jobs:145,badge:'Silver', dist:'3.0km',price:30,unit:'/hr',dayRate:180,mp:0,  av:'M',col:'#F97316',online:false,health:false,trust:88,liveIn:false,cts:['task'],                   loc:'Kaaraan',    bio:'Certified welder. Gates, fences, repairs.'},
  {id:35,name:'Faarax Cabdille', cat:'Car Repair',        sub:'Auto Mechanic',         rating:4.7,jobs:289,badge:'Gold',   dist:'2.3km',price:35,unit:'/job',dayRate:200,mp:0,  av:'F',col:'#64748B',online:true, health:false,trust:90,liveIn:false,cts:['task'],                   loc:'Daynile',    bio:'10yr mechanic. All car brands.'},
  {id:36,name:'Ikran Abdi',      cat:'AC & Appliances',   sub:'AC & Appliance Repair', rating:4.7,jobs:178,badge:'Gold',   dist:'1.4km',price:40,unit:'/job',dayRate:200,mp:0,  av:'IA',col:'#38BDF8',online:true, health:false,trust:91,liveIn:false,cts:['task'],                   loc:'Kaaraan',    bio:'Certified AC and home appliance technician.'},
];
var CATS = ['All','Home Services','Plumbing','Electrical','Cooking','Beauty','Driver Services','Childcare','Tutoring & Teaching','Laundry','Painting','Carpentry','AC & Appliances','Security','Gardening','Moving','Pet Care','Photography','Event Staff','Tech & Digital','Healthcare','Tailoring','Welding','Car Repair'];
var DELIVERY_ACTIVE = true; // Delivery is a standalone service — not in worker marketplace

// ── CONTRACT TYPES ────────────────────────────────────────────
var CTS = [
  {id:'task',      icon:'✅', label:'One-time Task',     desc:'Fixed scope job',         price:'$'+0+'/job'},
  {id:'monthly',   icon:'📅', label:'Monthly Contract',  desc:'Ongoing monthly hire',    price:'From $160/mo'},
  {id:'permanent', icon:'♾️', label:'Permanent Staff',   desc:'Long-term employment',    price:'Negotiable'}
];

// ── BOOKING CONFIG — per category ────────────────────────────
var BOOK_CFG = {
  'Home Services':       {model:'slot',     urgency:false, photo:false, deposit:100, gate:null},
  'Plumbing':            {model:'quote',    urgency:true,  photo:true,  deposit:50,  gate:null},
  'Electrical':          {model:'quote',    urgency:true,  photo:true,  deposit:60,  gate:'safety'},
  'Cooking':             {model:'slot',     urgency:false, photo:false, deposit:100, gate:'menu'},
  'Beauty':              {model:'slot',     urgency:false, photo:true,  deposit:100, gate:null},
  'Driver Services':     {model:'driver',   urgency:true,  photo:false, deposit:100, gate:null},
  'Delivery':            {model:'delivery', urgency:true,  photo:true,  deposit:100, gate:null},
  'Childcare':           {model:'recurring',urgency:false, photo:false, deposit:100, gate:'verify'},
  'Tutoring & Teaching': {model:'slot',     urgency:false, photo:false, deposit:100, gate:null},
  'Laundry':             {model:'slot',     urgency:false, photo:false, deposit:100, gate:null},
  'Painting':            {model:'quote',    urgency:false, photo:true,  deposit:30,  gate:null},
  'Carpentry':           {model:'quote',    urgency:false, photo:true,  deposit:40,  gate:null},
  'AC & Appliances':     {model:'quote',    urgency:true,  photo:true,  deposit:0,   gate:null},
  'Security':            {model:'recurring',urgency:false, photo:false, deposit:100, gate:'verify'},
  'Gardening':           {model:'slot',     urgency:false, photo:true,  deposit:100, gate:null},
  'Moving':              {model:'quote',    urgency:false, photo:true,  deposit:30,  gate:null},
  'Pet Care':            {model:'recurring',urgency:false, photo:false, deposit:100, gate:'pet'},
  'Photography':         {model:'slot',     urgency:false, photo:true,  deposit:50,  gate:'brief'},
  'Event Staff':         {model:'event',    urgency:false, photo:false, deposit:30,  gate:null},
  'Tech & Digital':      {model:'ondemand', urgency:true,  photo:true,  deposit:100, gate:null},
  'Healthcare':          {model:'slot',     urgency:true,  photo:false, deposit:100, gate:'medical'},
  'Tailoring':           {model:'slot',     urgency:false, photo:true,  deposit:50,  gate:null},
  'Welding':             {model:'quote',    urgency:false, photo:true,  deposit:40,  gate:'safety'},
  'Car Repair':          {model:'quote',    urgency:true,  photo:true,  deposit:0,   gate:null}
};

// ── SUB-SERVICES — per category ───────────────────────────────
var BOOK_SUBS = {
  'Home Services':       ['General cleaning','Deep clean','Laundry & ironing','Dishes & kitchen','Vacuuming & mopping','Full house service'],
  'Plumbing':            ['Pipe leak / Burst pipe','Tap & faucet repair','Toilet blockage','Water heater','New installation','Drainage problem'],
  'Electrical':          ['Wiring fault / Short circuit','New socket & switch','Fuse box & breaker','Generator connection','Full rewiring','Light fitting'],
  'Cooking':             ['Daily home cooking','Private dinner party','Meal prep (batch)','Special occasion','Wedding & Aqiqa','Custom request'],
  'Beauty':              ['Haircut & styling','Braiding & extensions','Facial & skincare','Manicure & pedicure','Bridal makeup','Threading & waxing'],
  'Driver Services':     ['Standard Ride','Hourly Hire (2hr min)','Full Day Hire (8hr)','Airport Transfer','Corporate / Recurring','School Run'],
  'Delivery':            ['Package & Parcel','Grocery Run','Document Courier','Large Item / Furniture','Food Delivery','Multi-stop Delivery'],
  'Childcare':           ['Infant care (0-12 months)','Toddler (1-3 years)','Child (3-12 years)','After-school care','Live-in nanny','Overnight care'],
  'Tutoring & Teaching': ['Math & Statistics','Science (Physics, Chemistry)','English & Literature','Somali & Arabic','Computer Science','University level'],
  'Laundry':             ['Wash & fold','Dry cleaning','Ironing only','Bedsheets & linen','Full service'],
  'Painting':            ['Interior rooms','Exterior & Facade','Doors & trims','Commercial space','Feature wall'],
  'Carpentry':           ['Custom furniture','Door installation','Window frame','Wood repair','Flat-pack assembly','Built-in units'],
  'AC & Appliances':     ['Air Conditioner','Refrigerator & Freezer','Washing machine','Oven & Cooker','Water heater','TV & Electronics'],
  'Security':            ['Residential guard','Commercial premises','Event security','VIP escort','CCTV monitoring'],
  'Gardening':           ['Lawn mowing','Tree trimming','Planting & landscaping','Garden design','Seasonal cleanup','Irrigation system'],
  'Moving':              ['Single room','Full apartment','Full house','Office relocation','Single item move'],
  'Pet Care':            ['Dog walking (30 min)','Dog walking (60 min)','Pet sitting (your home)','Pet boarding','Grooming visit','Vet escort'],
  'Photography':         ['Wedding & Nikah','Birthday & Event','Family & Portrait','Corporate & Headshots','Product & E-commerce','Real estate'],
  'Event Staff':         ['Dinner party & Gathering','Birthday & Celebration','Wedding reception','Religious event (Aqiqa)','Corporate event'],
  'Tech & Digital':      ['Laptop & PC repair','Phone screen & battery','WiFi & Network setup','Virus removal & Speed fix','Data recovery','Smart TV setup'],
  'Healthcare':          ['General consultation','Home visit (sick patient)','Blood pressure monitoring','Wound dressing','Postnatal care','Elderly care'],
  'Tailoring':           ['New garment (custom)','Alterations & repair','Traditional wear (Dirac, Khamiis)','Wedding outfit','Uniform & Workwear'],
  'Welding':             ['Gate & Fence fabrication','Window grill & Burglar bars','Metal furniture','Structural repair','Vehicle bodywork','Custom metalwork'],
  'Car Repair':          ['Full diagnostic check','Oil change & Service','Engine repair','Brake service','Battery replacement','AC regas & repair','Tire change']
};

// ── URGENCY OPTIONS ───────────────────────────────────────────
var URGENCY_OPTS = [
  {id:'emergency', icon:'🔴', label:'Emergency', sub:'1-2 hours',  fee:'+50%'},
  {id:'today',     icon:'🟡', label:'Today',     sub:'4-6 hours',  fee:'+10%'},
  {id:'scheduled', icon:'🟢', label:'Scheduled', sub:'Pick a date',fee:'Standard'}
];

// ── PAYMENT MILESTONES — per model ────────────────────────────
var PAY_MILESTONES = {
  delivery:  [{pct:100, when:'Paid at booking — held in escrow', release:'Released on Proof of Delivery'}],
  driver:    [{pct:100, when:'Authorized at ride start',         release:'Released on trip completion'}],
  slot:      [{pct:100, when:'At booking — held in escrow',   release:'After job complete'},],
  quote:     [{pct:40,  when:'After quote accepted',          release:'Materials purchase'},{pct:30,when:'Mid milestone',release:'On approval'},{pct:30,when:'Final payment',release:'On completion'}],
  ondemand:  [{pct:100, when:'Authorized at job start',       release:'After job ends'}],
  recurring: [{pct:100, when:'Weekly / Monthly auto-charge',  release:'Per period confirmed'}],
  event:     [{pct:30,  when:'At booking — date secured',     release:'Immediately'},{pct:40,when:'Day before event',release:'Staff preparation'},{pct:30,when:'24hr after event',release:'No complaints'}]
};

var DR_DISTRICTS=[
  {id:'hodan',name:'Hodan',icon:'&#127981;'},{id:'wadajir',name:'Wadajir',icon:'&#128332;'},
  {id:'kaaraan',name:'Kaaraan',icon:'&#127968;'},{id:'shangaani',name:'Shangaani',icon:'&#127959;'},
  {id:'hamarweyne',name:'Hamar-Weyne',icon:'&#127754;'},{id:'bondhere',name:'Bondhere',icon:'&#127978;'},
  {id:'shibis',name:'Shibis',icon:'&#127807;'},{id:'cabdulcaziiz',name:'Cabdulcaziiz',icon:'&#127959;'},
  {id:'waaberi',name:'Waaberi',icon:'&#127973;'},{id:'dharkenley',name:'Dharkenley',icon:'&#127749;'},
  {id:'daynile',name:'Daynile',icon:'&#127981;'},{id:'ceelbuur',name:'Ceelbuur',icon:'&#127807;'},
  {id:'airport',name:'Airport Area',icon:'&#9992;'},{id:'medina',name:'Medina',icon:'&#128332;'}
];
var DR_LANDMARKS={
  hodan:['Salaan Dhexe Market','Hodan Police Station','Shamo Hotel','KM4 Roundabout','Maka Al-Mukarama Road','Wigays Junction','Jubba Hotel'],
  wadajir:['Wadajir Market','Ifka Halane','KM5 Junction','Bakaara Market','Wadajir District Office'],
  kaaraan:['Kaaraan Stadium','Kaaraan Market','SYL Hotel','KM6 Area','Kaaraan District Office'],
  shangaani:['Lido Beach','Mogadishu Port','Shangaani Police','Parliament Area','Old Town Center'],
  hamarweyne:['Hamar-Weyne Market','Seafront Road','Xamar Weyne Mosque','Old Port Area'],
  bondhere:['Bondhere Market','Siinai Road','Banadir Hospital','Bondhere District Office'],
  shibis:['Shibis Market','Zoobe Junction','KM8 Area','Shibis Football Ground'],
  cabdulcaziiz:['Cabdulcaziiz District Office','Maka Road','Siyad Sports Complex'],
  waaberi:['Waaberi Market','Digfer Hospital','Medina Hospital','AMISOM Base Road'],
  dharkenley:['Dharkenley Market','Daynile Road','KM11 Area'],
  daynile:['Daynile District Office','KM13','Daynile Market','Daynile Hospital'],
  ceelbuur:['Ceelbuur Market','KM15 Area'],
  airport:['Aden Adde International Airport','Airport Road','JVBC Compound'],
  medina:['Medina Hospital','KM9 Area','Medina Market','Medina District Office']
};
var DR_HOUSE_TYPES=[
  {id:'gate',icon:'&#128682;',label:'Wait at the gate'},
  {id:'inside',icon:'&#127968;',label:'Call me - I will come out'},
  {id:'street',icon:'&#128694;',label:'Wait on the street'},
  {id:'shop',icon:'&#127978;',label:'At a shop or business'}
];

var CC=[{c:'+252',f:'🇸🇴',n:'Somalia'},{c:'+254',f:'🇰🇪',n:'Kenya'},{c:'+251',f:'🇪🇹',n:'Ethiopia'},{c:'+255',f:'🇹🇿',n:'Tanzania'},{c:'+256',f:'🇺🇬',n:'Uganda'},{c:'+253',f:'🇩🇯',n:'Djibouti'},{c:'+971',f:'🇦🇪',n:'UAE'},{c:'+966',f:'🇸🇦',n:'Saudi'},{c:'+44',f:'🇬🇧',n:'UK'},{c:'+1',f:'🇺🇸',n:'USA'}];

// ── HTML HELPERS ─────────────────────────────────────────────
// ╔══════════════════════════════════════════════════════════════╗
// ║  SECTION: HELPERS  (esc · av · pBtn · hdr · navBar · ...)  ║
// ║  Edit: shared UI building blocks used by all screens        ║
// ╚══════════════════════════════════════════════════════════════╝
function esc(s) { return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function geoFlag(c) { return (c && GEO[c]) ? GEO[c].flag : ''; }
function style(obj) {
  return Object.keys(obj).map(function(k){
    return k.replace(/([A-Z])/g,function(m){return '-'+m.toLowerCase();})+':'+obj[k];
  }).join(';');
}
function av(name, col, size, imgSrc) {
  size = size || 44;
  var r = Math.round(size * 0.28);
  if (imgSrc) {
    return '<div style="'+style({width:size+'px',height:size+'px',borderRadius:r+'px',overflow:'hidden',flexShrink:'0',border:'2px solid '+(col||C.gold)+'66'})+'"><img src="'+imgSrc+'" style="width:100%;height:100%;object-fit:cover"></div>';
  }
  return '<div style="'+style({width:size+'px',height:size+'px',borderRadius:r+'px',background:col+'33',border:'1.5px solid '+col+'66',display:'flex',alignItems:'center',justifyContent:'center',fontSize:Math.round(size*.4)+'px',fontWeight:'800',color:col,flexShrink:'0'})+'">'+esc(name[0])+'</div>';
}
function stars(r) {
  var full = Math.floor(r), empty = 5 - full;
  var s = '';
  for(var i=0;i<full;i++) s += '★';
  for(var i=0;i<empty;i++) s += '☆';
  return '<span style="color:'+C.gold+';font-size:11px">'+s+' '+r.toFixed(1)+'</span>';
}
function pill(label) {
  var m = {Platinum:C.blue,Gold:C.gold,Silver:'#9CA3AF'};
  var c = m[label]||C.gold;
  return '<span style="font-size:10px;font-weight:700;color:'+c+';background:'+c+'22;border:1px solid '+c+'44;border-radius:10px;padding:2px 7px">⭐ '+esc(label)+'</span>';
}
function pBtn(id, text, color, sx) {
  var bg = {gold:C.gold,emerald:C.emerald,red:C.red,blue:C.blue}[color||'gold']||C.gold;
  var tc = (color||'gold')==='gold' ? '#000' : '#fff';
  sx = sx || '';
  return '<button data-id="'+id+'" style="width:100%;padding:13px;border-radius:14px;background:'+bg+';color:'+tc+';font-size:14px;font-weight:700;'+sx+'">'+text+'</button>';
}
function gBtn(id, text, sx) {
  sx = sx || '';
  return '<button data-id="'+id+'" style="width:100%;padding:12px;border-radius:14px;background:transparent;border:1.5px solid '+C.border+';color:'+C.muted+';font-size:14px;font-weight:600;'+sx+'">'+text+'</button>';
}
function toggler(val,id){var bg=val?C.gold:C.navyLight,br=val?C.gold:C.border,dot=val?'#000':C.muted,left=val?'23px':'2px';return '<button data-id="'+id+'" style="width:46px;height:25px;border-radius:13px;background:'+bg+';border:1.5px solid '+br+';position:relative;flex-shrink:0;padding:0;cursor:pointer"><div style="width:19px;height:19px;border-radius:50%;background:'+dot+';position:absolute;top:2px;left:'+left+'"></div></button>';}

function input(id, value, placeholder, type) {
  type = type || 'text';
  return '<input data-id="'+id+'" type="'+type+'" value="'+esc(value||'')+'" placeholder="'+esc(placeholder||'')+'" style="width:100%;padding:12px 14px;border-radius:12px;background:'+C.navyLight+';border:1.5px solid '+C.border+';color:'+C.white+';font-size:14px">';
}
function field(label, inputHtml, hint) {
  return '<div style="margin-bottom:14px">'+(label?'<div style="font-size:11px;color:'+C.muted+';margin-bottom:5px;font-weight:700">'+esc(label)+'</div>':'')+''+inputHtml+(hint?'<div style="font-size:11px;color:'+C.muted+';margin-top:4px">'+esc(hint)+'</div>':'')+'</div>';
}
function infoBox(icon, text, color) {
  color = color || C.blue;
  return '<div style="background:'+color+'15;border:1px solid '+color+'33;border-radius:12px;padding:12px;margin-bottom:14px;display:flex;gap:8px;align-items:flex-start"><span style="font-size:16px;flex-shrink:0">'+icon+'</span><div style="font-size:12px;color:'+C.muted+';line-height:1.6">'+text+'</div></div>';
}
function authMsg(st) {
  var out = '';
  if (st.authInfo) out += infoBox('&#9989;', esc(st.authInfo), C.emerald);
  if (st.devOtp) out += infoBox('&#128273;', 'Development mode — your code is ' + esc(st.devOtp), C.blue);
  if (st.authError) out += infoBox('&#9888;&#65039;', esc(st.authError), C.red);
  return out;
}
function hdr(title, sub, backId, emoji) {
  return '<div style="background:'+C.navyMid+';padding:15px 20px;display:flex;align-items:center;gap:11px;flex-shrink:0">'+(backId?'<button data-id="'+backId+'" style="color:'+C.muted+';font-size:22px;padding:2px;line-height:1">←</button>':'')+(emoji?'<span style="font-size:22px">'+emoji+'</span>':'')+'<div><div style="font-size:16px;font-weight:700;color:'+C.white+'">'+esc(title)+'</div>'+(sub?'<div style="font-size:11px;color:'+C.muted+'">'+esc(sub)+'</div>':'')+'</div></div>';
}
function prog(step, total, color) {
  color = color || C.gold;
  var bars = '';
  for(var i=0;i<total;i++) bars += '<div style="flex:1;height:3px;border-radius:2px;background:'+(i<=step?color:C.border)+';transition:background .3s"></div>';
  return '<div style="display:flex;gap:4px;padding:10px 20px 0">'+bars+'</div>';
}
function navBar(items, active, accent) {
  accent = accent || C.gold;
  var btns = items.map(function(n){
    var isActive = n.id === active;
    return '<button data-id="nav:'+n.id+'" style="flex:1;padding:8px 4px 10px;display:flex;flex-direction:column;align-items:center;gap:3px;position:relative;background:none;border:none">'
      +'<span style="font-size:21px">'+n.icon+'</span>'
      +'<span style="font-size:9px;font-weight:700;color:'+(isActive?accent:C.muted)+'">'+n.label+'</span>'
      +(n.badge>0?'<div style="position:absolute;top:4px;right:16%;width:16px;height:16px;border-radius:50%;background:'+C.red+';font-size:9px;font-weight:700;color:#fff;display:flex;align-items:center;justify-content:center">'+n.badge+'</div>':'')
      +(isActive?'<div style="position:absolute;bottom:0;left:20%;right:20%;height:2px;background:'+accent+';border-radius:2px"></div>':'')
      +'</button>';
  }).join('');
  return '<div style="background:'+C.navyMid+';border-top:1px solid '+C.border+';display:flex;flex-shrink:0">'+btns+'</div>';
}
function workerCard(w, idx) {
  var online = w.online ? '<div style="position:absolute;bottom:2px;right:2px;width:9px;height:9px;border-radius:50%;background:'+C.emerald+';border:2px solid '+C.navyCard+'"></div>' : '';
  return '<div class="card" style="margin-bottom:12px">'
    +'<div class="row" style="align-items:flex-start">'
      +'<div style="position:relative">'+av(w.name,w.col,44,w.avatar||'')+online+'</div>'
      +'<div style="flex:1;min-width:0">'
        +'<div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">'
          +'<div style="font-size:15px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(w.name)+'</div>'
          +(w.health?'<span style="font-size:10px">✅</span>':'')
        +'</div>'
        +'<div style="font-size:12px;color:'+C.muted+';margin-bottom:6px">'+esc(w.sub)+'</div>'
        +'<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:8px">'
          +stars(w.rating)
          +'<span style="font-size:11px;color:'+C.muted+'">'+w.jobs.toLocaleString()+' jobs</span>'
          +'<span style="font-size:11px;color:'+C.gold+'">📍 '+esc(w.dist)+'</span>'
        +'</div>'
        +'<div style="display:flex;align-items:center;justify-content:space-between">'
          +pill(w.badge)
          +'<div style="font-size:18px;font-weight:800">$'+w.price+'<span style="font-size:11px;color:'+C.muted+';font-weight:400">'+esc(w.unit)+'</span></div>'
        +'</div>'
      +'</div>'
    +'</div>'
    +'<div style="display:flex;gap:8px;margin-top:12px">'
      +'<button data-id="book:'+w.id+'" style="flex:1;padding:9px 0;border-radius:11px;background:'+C.gold+';color:#000;font-size:13px;font-weight:700">📅 Book</button>'
      +'<button data-id="chat:'+w.id+'" style="flex:1;padding:9px 0;border-radius:11px;background:transparent;border:1.5px solid '+C.border+';color:'+C.muted+';font-size:13px;font-weight:600">💬 Chat</button>'
      +'<button data-id="view:'+w.id+'" style="flex:1;padding:9px 0;border-radius:11px;background:transparent;border:1.5px solid '+C.border+';color:'+C.muted+';font-size:13px;font-weight:600">👁 View</button>'
    +'</div>'
  +'</div>';
}

// ─────────────────────────────────────────────────────────────
// SCREENS
// ─────────────────────────────────────────────────────────────

// ╔══════════════════════════════════════════════════════════════╗
// ║  SECTION: SCREEN_SPLASH_WELCOME_LOGIN                       ║
// ║  Edit: splash animation, language select, welcome cards,    ║
// ║        login phone+OTP flow                                 ║
// ╚══════════════════════════════════════════════════════════════╝
function renderSplash() {
  if (!renderSplash._done) {
    renderSplash._done = true;
    setTimeout(function(){ if (S.getState().screen === 'splash') S.setState({screen:'welcome'}); }, 2600);
  }
  return '<div style="height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:22px;background:#0A0F1E">'
    +'<div class="pop" style="width:108px;height:108px;border-radius:34px;background:linear-gradient(135deg,'+C.gold+','+C.goldDim+');display:flex;align-items:center;justify-content:center;font-size:56px">👷</div>'
    +'<div class="fadeUp" style="text-align:center">'
      +'<div style="font-size:38px;font-weight:900;font-family:Georgia,serif;color:'+C.white+'">Shaqaale Pro</div>'
      +'<div style="font-size:13px;font-weight:700;color:'+C.gold+';letter-spacing:5px;margin-top:6px">PROFESSIONAL SERVICES</div>'
      +'<div style="font-size:12px;color:'+C.muted+';margin-top:10px">East Africa Professional Services</div>'
    +'</div>'
    +'<div class="pulse" style="width:46px;height:4px;border-radius:2px;background:'+C.gold+'"></div>'
  +'</div>';
}

function renderWelcome() {
  return '<div style="height:100%;background:'+C.navy+';display:flex;flex-direction:column;overflow:hidden">'

    // ── Hero ─────────────────────────────────────────────────────
    +'<div class="fadeUp" style="padding:32px 24px 20px;text-align:center;flex-shrink:0">'
      +'<div style="width:80px;height:80px;border-radius:24px;background:linear-gradient(145deg,'+C.gold+','+C.goldDim+');display:flex;align-items:center;justify-content:center;font-size:40px;margin:0 auto 16px;box-shadow:0 8px 32px '+C.gold+'44">&#128119;</div>'
      +'<div style="font-size:32px;font-weight:800;letter-spacing:-0.5px;color:'+C.white+'">Shaqaale Pro</div>'
      +'<div style="font-size:11px;font-weight:700;color:'+C.gold+';letter-spacing:4px;margin-top:6px">PROFESSIONAL SERVICES</div>'
      +'<div style="font-size:13px;color:'+C.muted+';margin-top:10px;line-height:1.6">Verified workers across East Africa</div>'
    +'</div>'

    // ── Cards ────────────────────────────────────────────────────
    +'<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:10px;padding:0 20px">'

      // Customer card
      +'<div data-id="go:cReg" style="flex:1;min-height:0;border-radius:22px;overflow:hidden;cursor:pointer;position:relative;background:linear-gradient(135deg,#0e1d2e,#162035);border:1.5px solid '+C.gold+'44">'
        +'<div style="position:absolute;top:0;right:0;width:120px;height:120px;background:radial-gradient(circle,'+C.gold+'18 0%,transparent 70%);pointer-events:none"></div>'
        +'<div style="padding:20px;height:100%;display:flex;flex-direction:column;justify-content:space-between">'
          +'<div style="display:flex;align-items:flex-start;justify-content:space-between">'
            +'<div>'
              +'<div style="font-size:10px;font-weight:700;color:'+C.gold+';letter-spacing:2px;margin-bottom:6px">SIGN UP AS</div>'
              +'<div style="font-size:26px;font-weight:800;color:'+C.white+'">Customer</div>'
              +'<div style="font-size:13px;color:'+C.muted+';margin-top:4px;line-height:1.5">Hire verified professionals<br>near you</div>'
            +'</div>'
            +'<div style="font-size:42px;line-height:1">&#129333;&#8205;&#128188;</div>'
          +'</div>'
          +'<div style="display:flex;align-items:center;justify-content:space-between;margin-top:14px">'
            +'<div style="display:flex;gap:6px;flex-wrap:wrap">'
              +['&#129529; Clean','&#128295; Plumb','&#127859; Cook','&#128663; Drive'].map(function(s){return '<span style="font-size:11px;color:'+C.muted+';background:rgba(255,255,255,0.07);border-radius:7px;padding:4px 9px;white-space:nowrap">'+s+'</span>';}).join('')
            +'</div>'
            +'<div style="background:'+C.gold+';color:#000;font-size:13px;font-weight:800;padding:8px 18px;border-radius:22px;flex-shrink:0;margin-left:8px">Sign Up</div>'
          +'</div>'
        +'</div>'
      +'</div>'

      // Worker card
      +'<div data-id="go:wReg" style="flex:1;min-height:0;border-radius:22px;overflow:hidden;cursor:pointer;position:relative;background:linear-gradient(135deg,#0a1e14,#0f2318);border:1.5px solid '+C.emerald+'44">'
        +'<div style="position:absolute;top:0;right:0;width:120px;height:120px;background:radial-gradient(circle,'+C.emerald+'18 0%,transparent 70%);pointer-events:none"></div>'
        +'<div style="padding:20px;height:100%;display:flex;flex-direction:column;justify-content:space-between">'
          +'<div style="display:flex;align-items:flex-start;justify-content:space-between">'
            +'<div>'
              +'<div style="font-size:10px;font-weight:700;color:'+C.emerald+';letter-spacing:2px;margin-bottom:6px">SIGN UP AS</div>'
              +'<div style="font-size:26px;font-weight:800;color:'+C.white+'">Worker</div>'
              +'<div style="font-size:13px;color:'+C.muted+';margin-top:4px;line-height:1.5">Find work near you<br>Earn daily · Get paid fast</div>'
            +'</div>'
            +'<div style="font-size:42px;line-height:1">&#128119;</div>'
          +'</div>'
          +'<div style="display:flex;align-items:center;justify-content:space-between;margin-top:14px">'
            +'<div style="display:flex;gap:8px">'
              +['&#127480;&#127476;','&#127472;&#127466;','&#127466;&#127481;','&#127481;&#127487;','&#127482;&#127468;','&#127465;&#127471;'].map(function(f){return '<span style="font-size:18px">'+f+'</span>';}).join('')
            +'</div>'
            +'<div style="background:'+C.emerald+';color:#000;font-size:13px;font-weight:800;padding:8px 18px;border-radius:22px;flex-shrink:0">Sign Up</div>'
          +'</div>'
        +'</div>'
      +'</div>'

    +'</div>'

    // ── Sign In ──────────────────────────────────────────────────
    +'<div style="padding:14px 20px 18px;flex-shrink:0">'
      +'<button data-id="go:login" style="width:100%;padding:15px;border-radius:16px;background:rgba(201,168,76,0.08);border:1.5px solid '+C.gold+'33;color:'+C.gold+';font-size:16px;font-weight:700">Sign In to Your Account</button>'
    +'</div>'

  +'</div>';
}

function renderLogin(st) {
  st=st||{};
  var role=st.loginRole||'customer', cc=st.loginCc||'+252', phone=st.loginPhone||'', step=st.loginStep||0;
  var CC_META={'+252':{ph:'61 1234567',min:9},'+254':{ph:'712 345678',min:9},'+251':{ph:'912 345678',min:9},'+255':{ph:'712 345678',min:9},'+256':{ph:'712 345678',min:9},'+253':{ph:'77 123456',min:8},'+971':{ph:'50 123 4567',min:9},'+966':{ph:'50 123 4567',min:9},'+44':{ph:'7911 123456',min:10},'+1':{ph:'212 555 0100',min:10}};
  var meta=CC_META[cc]||{ph:'61 1234567',min:9};
  var digits=phone.replace(/[^0-9]/g,'');
  var valid=digits.length>=meta.min;
  var ccObj=CC.find(function(c){return c.c===cc;})||{f:'',c:cc};
  var ccOpts=CC.map(function(c){return '<option value="'+c.c+'" '+(cc===c.c?'selected':'')+' style="background:'+C.navyMid+'">'+c.f+' '+c.c+'</option>';}).join('');

  if(step===1){
    var otp=st.otpVal||''; var otpOk=otp.replace(/[^0-9]/g,'').length>=4;
    return '<div style="min-height:100%;background:'+C.navy+';display:flex;flex-direction:column">'
      +hdr('Verify Phone',esc(cc+' '+phone),'login:back','&#128242;')
      +'<div style="flex:1;padding:32px 24px;display:flex;flex-direction:column;align-items:center">'
        +'<div style="font-size:64px;margin-bottom:16px">&#128242;</div>'
        +'<div style="font-size:22px;font-weight:800;margin-bottom:6px;text-align:center">Enter OTP Code</div>'
        +'<div style="font-size:15px;color:'+C.muted+';margin-bottom:4px;text-align:center">Code sent to</div>'
        +'<div style="font-size:17px;font-weight:700;color:'+C.gold+';margin-bottom:32px">'+esc(cc+' '+phone)+'</div>'
        +'<input data-id="otp:val" type="tel" maxlength="4" value="'+esc(otp)+'" placeholder="0000" inputmode="numeric" autocomplete="one-time-code" style="width:100%;padding:22px;border-radius:20px;background:'+C.navyLight+';border:2px solid '+(otpOk?C.gold:otp.length>0?C.gold+'88':C.border)+';color:'+C.white+';font-size:40px;font-weight:900;text-align:center;letter-spacing:20px;outline:none;box-sizing:border-box;margin-bottom:16px">'
        +'<div style="display:flex;gap:12px;margin-bottom:28px">'
          +[0,1,2,3].map(function(i){return '<div style="width:14px;height:14px;border-radius:50%;background:'+(otp.length>i?C.gold:C.border)+'"></div>';}).join('')
        +'</div>'
        +infoBox('&#128161;','Demo: any 4 digits work',C.gold)
        +'<div style="width:100%;margin-top:8px">'
          +authMsg(st)
          +'<button data-id="otp:verify" style="width:100%;padding:17px;border-radius:16px;background:'+(otpOk?C.gold:C.navyLight)+';color:'+(otpOk?'#000':C.muted)+';font-size:17px;font-weight:800;border:none;cursor:'+(otpOk?'pointer':'default')+'">'+(otpOk?'&#9989; Verify & Login':'Enter 4-digit code')+'</button>'
          +'<div style="height:12px"></div>'
          +'<button data-id="login:back" style="width:100%;padding:15px;border-radius:14px;background:transparent;border:1.5px solid '+C.border+';color:'+C.muted+';font-size:15px;font-weight:600;cursor:pointer">&#8592; Change Number</button>'
        +'</div>'
      +'</div>'
    +'</div>';
  }

  return '<div style="height:100%;background:'+C.navy+';display:flex;flex-direction:column;overflow-y:auto">'
    +hdr('Sign In','Welcome back','go:welcome','&#128274;')
    +'<div style="padding:32px 28px 0;text-align:center">'
      +'<div style="width:76px;height:76px;border-radius:22px;background:linear-gradient(135deg,'+C.gold+','+C.goldDim+');display:flex;align-items:center;justify-content:center;font-size:38px;margin:0 auto 16px">&#127757;</div>'
      +'<div style="font-size:28px;font-weight:900;color:'+C.white+';margin-bottom:8px">Shaqaale Pro</div>'
      +'<div style="font-size:15px;color:'+C.muted+'">East Africa Professional Services</div>'
    +'</div>'
    +'<div style="padding:28px 24px 0">'
      +'<div style="display:flex;gap:4px;background:'+C.navyCard+';border-radius:14px;padding:4px;margin-bottom:28px">'
        +['customer','worker'].map(function(r){var a=role===r;return '<button data-id="login:role:'+r+'" style="flex:1;padding:13px;border-radius:11px;border:none;background:'+(a?C.gold:'transparent')+';color:'+(a?'#000':C.muted)+';font-weight:700;font-size:15px;cursor:pointer">'+(r==='customer'?'&#129333; Customer':'&#128119; Worker')+'</button>';}).join('')
      +'</div>'
      +'<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.8px;margin-bottom:10px">PHONE NUMBER</div>'
      +'<div style="display:flex;border-radius:18px;overflow:hidden;border:2px solid '+(valid?C.gold:C.border)+';background:'+C.navyLight+'">'
        +'<div style="position:relative;flex-shrink:0;border-right:1.5px solid '+(valid?C.gold+'55':C.border)+'">'
          +'<select data-id="login:cc:sel" style="appearance:none;-webkit-appearance:none;background:transparent;border:none;padding:18px 34px 18px 14px;color:transparent;font-size:16px;cursor:pointer;outline:none;width:94px;height:100%">'
            +ccOpts
          +'</select>'
          +'<div style="position:absolute;inset:0;pointer-events:none;display:flex;align-items:center;justify-content:center;gap:5px">'
            +'<span style="font-size:22px">'+esc(ccObj.f)+'</span>'
            +'<span style="font-size:14px;font-weight:800;color:'+C.white+'">'+esc(cc)+'</span>'
            +'<span style="font-size:10px;color:'+C.muted+'">&#9660;</span>'
          +'</div>'
        +'</div>'
        +'<input data-id="login:phone" type="tel" value="'+esc(phone)+'" placeholder="'+esc(meta.ph)+'" maxlength="13" inputmode="tel" autocomplete="tel" style="flex:1;padding:18px 16px;background:transparent;border:none;color:'+C.white+';font-size:20px;font-weight:700;outline:none;min-width:0;letter-spacing:.5px">'
        +(valid?'<div style="display:flex;align-items:center;padding-right:16px;font-size:22px">&#9989;</div>':'')
      +'</div>'
      +'<div style="display:flex;justify-content:space-between;margin-top:10px;margin-bottom:28px">'
        +'<span style="font-size:13px;color:'+(valid?C.emerald:C.muted)+'">'+(valid?'Valid &#10004;':digits.length>0?digits.length+'/'+meta.min+' digits':'Enter your mobile number')+'</span>'
        +'<span style="font-size:13px;color:'+C.muted+'">&#128274; OTP</span>'
      +'</div>'
      +authMsg(st)
      +'<button data-id="login:send" style="width:100%;padding:18px;border-radius:16px;background:'+(valid?C.gold:C.navyLight)+';color:'+(valid?'#000':C.muted)+';font-size:17px;font-weight:800;border:none;cursor:'+(valid?'pointer':'default')+'">'+(valid?'&#128242; Send OTP &#8594;':'Enter phone number first')+'</button>'
    +'</div>'
    +'<div style="padding:18px 24px 0">'
      +infoBox('&#128274;','We never share your number. OTP expires in 10 minutes.',C.muted)
    +'</div>'
  +'</div>';
}


// ╔══════════════════════════════════════════════════════════════╗
// ║  SECTION: SCREEN_CREG  (Customer Registration)              ║
// ║  Edit: steps 0-5: phone · personal · address · services ·   ║
// ║        payment · done                                       ║
// ╚══════════════════════════════════════════════════════════════╝
function renderCustomerReg(st) {
  var step=st.cStep||0, form=st.cForm||{};
  var STEPS=['Phone','Personal','Address','Services','Payment','Done'];
  var content='';

  if(step===0){
    var ph=(form.phone||''), cc=form.ccc||'+252', ok=ph.replace(/[^0-9]/g,'').length>=9;
    content='<div style="display:flex;flex-direction:column;align-items:center;padding-top:20px">'
      +'<div style="font-size:56px;margin-bottom:12px">&#128242;</div>'
      +'<div style="font-size:22px;font-weight:800;margin-bottom:6px;text-align:center">Verify Your Phone</div>'
      +'<div style="font-size:15px;color:'+C.muted+';margin-bottom:32px;text-align:center">We\'ll send you a one-time code</div>'
      +'<div style="width:100%;margin-bottom:10px">'
        +'<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:8px">PHONE NUMBER</div>'
        +'<div style="display:flex;border-radius:18px;overflow:hidden;border:2px solid '+(ok?C.gold:C.border)+'">'
          +'<select onchange="window._fw.setState({cForm:Object.assign({},window._fw.getState().cForm||{},{ccc:this.value})});" style="flex-shrink:0;width:112px;padding:16px 10px 16px 14px;background:'+C.navyLight+';border:none;border-right:2px solid '+C.border+';color:'+C.white+';font-size:15px;font-weight:700;appearance:none;-webkit-appearance:none;outline:none">'
            +CC.map(function(c){return '<option value="'+c.c+'" '+(cc===c.c?'selected':'')+' style="background:'+C.navyMid+'">'+c.f+' '+c.c+'</option>';}).join('')
          +'</select>'
          +'<input data-id="creg:phone" type="tel" value="'+esc(ph)+'" placeholder="61 1234567" maxlength="9" style="flex:1;padding:16px;background:'+C.navyLight+';border:none;color:'+C.white+';font-size:20px;font-weight:700;outline:none;min-width:0;letter-spacing:1px">'
        +'</div>'
        +(ok?'<div style="display:flex;align-items:center;gap:6px;margin-top:10px">&#9989;<span style="font-size:15px;color:'+C.emerald+';font-weight:600">'+esc(cc+' '+ph)+'</span></div>':'<div style="height:28px"></div>')
      +'</div>'
      +infoBox('&#128274;','No password needed. OTP verification keeps you secure.',C.emerald)
    +'</div>';

  } else if(step===1){
    content='<div>'
      +'<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:10px">FIRST NAME</div>'
      +'<input data-id="creg:fname" type="text" value="'+esc(form.fname||'')+'" placeholder="e.g. Ahmed" style="width:100%;padding:17px 18px;border-radius:16px;background:'+C.navyLight+';border:2px solid '+(form.fname?C.gold:C.border)+';color:'+C.white+';font-size:17px;font-weight:600;outline:none;box-sizing:border-box;margin-bottom:16px">'
      +'<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:10px">LAST NAME</div>'
      +'<input data-id="creg:lname" type="text" value="'+esc(form.lname||'')+'" placeholder="e.g. Mohamed" style="width:100%;padding:17px 18px;border-radius:16px;background:'+C.navyLight+';border:2px solid '+(form.lname?C.gold:C.border)+';color:'+C.white+';font-size:17px;font-weight:600;outline:none;box-sizing:border-box;margin-bottom:16px">'
      +'<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:10px">GENDER</div>'
      +'<div style="display:flex;gap:8px">'
        +['Male','Female','Prefer not to say'].map(function(g){var s=form.gender===g;return '<div data-id="creg:gender:'+g+'" style="flex:1;padding:14px 4px;border-radius:14px;text-align:center;cursor:pointer;font-size:14px;font-weight:700;border:2px solid '+(s?C.gold:C.border)+';background:'+(s?C.gold+'22':'transparent')+';color:'+(s?C.gold:C.muted)+'">'+g+'</div>';}).join('')
      +'</div>'
    +'</div>';

  } else if(step===2){
    var country=form.country||'',region=form.region||'',district=form.district||'';
    content='<div>'
      +'<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:10px">COUNTRY</div>'
      +'<select onchange="window._fw.setState({cForm:Object.assign({},window._fw.getState().cForm||{},{country:this.value,region:\'\',district:\'\' })});" style="width:100%;padding:16px 18px;border-radius:16px;background:'+C.navyLight+';border:2px solid '+(country?C.gold:C.border)+';color:'+C.white+';font-size:17px;font-weight:600;appearance:none;-webkit-appearance:none;outline:none;box-sizing:border-box;margin-bottom:16px">'
        +'<option value="" style="background:'+C.navyMid+'">&#127757; Select Country</option>'
        +Object.keys(GEO).map(function(cn){return '<option value="'+cn+'" '+(country===cn?'selected':'')+' style="background:'+C.navyMid+'">'+GEO[cn].flag+' '+cn+'</option>';}).join('')
      +'</select>'
      +(country&&GEO[country]?
        '<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:10px">REGION</div>'
        +'<select onchange="window._fw.setState({cForm:Object.assign({},window._fw.getState().cForm||{},{region:this.value,district:\'\' })});" style="width:100%;padding:16px 18px;border-radius:16px;background:'+C.navyLight+';border:2px solid '+(region?C.gold:C.border)+';color:'+C.white+';font-size:17px;font-weight:600;appearance:none;-webkit-appearance:none;outline:none;box-sizing:border-box;margin-bottom:16px">'
          +'<option value="" style="background:'+C.navyMid+'">&#128205; Select Region</option>'
          +Object.keys(GEO[country].regions).map(function(r){return '<option value="'+r+'" '+(region===r?'selected':'')+' style="background:'+C.navyMid+'">'+r+'</option>';}).join('')
        +'</select>'
      :'')
      +(region&&country&&GEO[country]&&GEO[country].regions[region]?
        '<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:10px">DISTRICT</div>'
        +'<select onchange="window._fw.setState({cForm:Object.assign({},window._fw.getState().cForm||{},{district:this.value})});" style="width:100%;padding:16px 18px;border-radius:16px;background:'+C.navyLight+';border:2px solid '+(district?C.gold:C.border)+';color:'+C.white+';font-size:17px;font-weight:600;appearance:none;-webkit-appearance:none;outline:none;box-sizing:border-box;margin-bottom:16px">'
          +'<option value="" style="background:'+C.navyMid+'">&#127961;&#65039; Select District</option>'
          +GEO[country].regions[region].map(function(d){return '<option value="'+d+'" '+(district===d?'selected':'')+' style="background:'+C.navyMid+'">'+d+'</option>';}).join('')
        +'</select>'
      :'')
      +(country&&region&&district&&GEO[country]?'<div style="background:'+C.emerald+'12;border:1px solid '+C.emerald+'33;border-radius:14px;padding:14px;display:flex;align-items:center;gap:12px"><span style="font-size:24px">&#128205;</span><div><div style="font-size:16px;font-weight:700">'+esc(district)+', '+esc(region)+'</div><div style="font-size:14px;color:'+C.muted+'">'+geoFlag(country)+' '+esc(country)+'</div></div></div>':'')
    +'</div>';

  } else if(step===3){
    var SICONS={'Cleaning':'&#129529;','Plumbing':'&#128295;','Electrical':'&#9889;','Cooking':'&#127859;','Beauty & Wellness':'&#128133;','Driver & Transport':'&#128663;','Delivery':'&#128230;','Childcare & Nanny':'&#128118;','Tutoring':'&#128218;','Laundry':'&#128155;','Painting':'&#127912;','Carpentry':'&#129683;','AC & Appliances':'&#10052;','Security Guard':'&#128737;','Gardening':'&#127807;','Moving & Packing':'&#128667;','Pet Care':'&#128054;','Photography':'&#128247;','Event Staff':'&#127881;'};
    var SCOLS={'Home Services':'#3B82F6','Plumbing':'#06B6D4','Electrical':'#EAB308','Cooking':'#10B981','Beauty':'#EC4899','Driver Services':'#8B5CF6','Delivery':'#F97316','Childcare':'#F43F5E','Tutoring & Teaching':'#6366F1','Laundry':'#14B8A6','Painting':'#A78BFA','Carpentry':'#D97706','AC & Appliances':'#38BDF8','Security':'#64748B','Gardening':'#22C55E','Moving':'#FB923C','Pet Care':'#C084FC','Photography':'#E879F9','Event Staff':'#F472B6','Tech & Digital':'#6366F1','Healthcare':'#EF4444','Tailoring':'#8B5CF6','Welding':'#F97316','Car Repair':'#64748B'};
    var cServices=Array.isArray(form.services)?form.services:[];
    var SICONS={'Home Services':'&#127968;','Plumbing':'&#128295;','Electrical':'&#9889;','Cooking':'&#127859;','Beauty':'&#128133;','Driver Services':'&#128663;','Delivery':'&#128230;','Childcare':'&#128118;','Tutoring & Teaching':'&#128218;','Laundry':'&#128086;','Painting':'&#127912;','Carpentry':'&#128296;','AC & Appliances':'&#10052;','Security':'&#128737;','Gardening':'&#127807;','Moving':'&#128667;','Pet Care':'&#128054;','Photography':'&#128247;','Event Staff':'&#127881;','Tech & Digital':'&#128187;','Healthcare':'&#128138;','Tailoring':'&#129525;','Welding':'&#128293;','Car Repair':'&#128664;'};
    content='<div>'
      +'<div style="font-size:15px;color:'+C.muted+';margin-bottom:16px;text-align:center">Select services you may need <span style="color:'+C.gold+'">(optional)</span></div>'
      +'<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">'
        +          CATS.filter(function(c){return c!=='All';}).map(function(cat){
          var ic=SICONS[cat]||'&#11088;', cl=SCOLS[cat]||C.gold, sel=cServices.indexOf(cat)>=0;
          return '<div data-id="creg:svc:'+esc(cat)+'" style="background:'+(sel?cl+'18':C.navyCard)+';border:1.5px solid '+(sel?cl:C.border)+';border-radius:16px;padding:14px 8px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:7px;text-align:center;position:relative">'
            +(sel?'<div style="position:absolute;top:5px;right:5px;width:17px;height:17px;border-radius:50%;background:'+cl+';display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:#000">&#10003;</div>':'')
            +'<span style="font-size:26px">'+ic+'</span>'
            +'<span style="font-size:12px;font-weight:700;color:'+(sel?cl:C.muted)+';line-height:1.4">'+cat+'</span>'
          +'</div>';
        }).join('')
      +'</div>'
      +(cServices.length>0?'<div style="margin-top:14px;padding:12px 14px;background:'+C.gold+'12;border:1px solid '+C.gold+'33;border-radius:12px;font-size:14px;color:'+C.gold+'">'+cServices.length+' selected: '+cServices.slice(0,3).join(', ')+(cServices.length>3?'...':'')+'</div>':'')
    +'</div>';

  } else if(step===4){
    var PAY=[{id:'evc',icon:'&#128242;',label:'EVC Plus',sub:'Hormuud Telecom'},{id:'zaad',icon:'&#128242;',label:'Zaad',sub:'Telesom'},{id:'sahal',icon:'&#128242;',label:'Sahal',sub:'Somtel'},{id:'mpesa',icon:'&#128242;',label:'M-Pesa',sub:'Safaricom Kenya'},{id:'cash',icon:'&#128181;',label:'Cash',sub:'Pay worker directly'},{id:'bank',icon:'&#127970;',label:'Bank Transfer',sub:'1-2 business days'}];
    var payMethod=form.payMethod||'';
    content='<div>'
      +'<div style="font-size:15px;color:'+C.muted+';margin-bottom:18px;text-align:center">How will you pay for services?</div>'
      +'<div style="display:flex;flex-direction:column;gap:10px">'
        +Shaq.payList(PAY).map(function(p){var s=payMethod===p.id;return '<div data-id="creg:pay:'+p.id+'" style="display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:16px;cursor:pointer;background:'+(s?C.gold+'15':C.navyCard)+';border:1.5px solid '+(s?C.gold:C.border)+'">'
          +'<span style="font-size:28px">'+p.icon+'</span>'
          +'<div style="flex:1"><div style="font-size:16px;font-weight:700;color:'+(s?C.white:C.muted)+'">'+p.label+'</div><div style="font-size:13px;color:'+C.muted+'">'+p.sub+'</div></div>'
          +(s?'<div style="width:24px;height:24px;border-radius:50%;background:'+C.gold+';display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:#000">&#10003;</div>':'')
        +'</div>';}).join('')
      +'</div>'
      +infoBox('&#128274;','Funds held in escrow until job is complete.',C.gold)
    +'</div>';

  } else {
    content='<div class="fadeUp" style="text-align:center">'
      +'<div class="pop" style="font-size:76px;margin-bottom:18px">&#127881;</div>'
      +'<div style="font-size:28px;font-weight:800;color:'+C.gold+';margin-bottom:10px">Welcome!</div>'
      +'<div style="font-size:16px;color:'+C.muted+';margin-bottom:24px">Hi '+esc(form.fname||'there')+'! Your account is ready.</div>'
      +'<div style="background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:18px;padding:18px;text-align:left;margin-bottom:24px">'
        +[['&#128242; Phone',(form.ccc||'+252')+' '+(form.phone||'')],['&#128100; Name',(form.fname||'')+' '+(form.lname||'')],['&#127757; Location',(form.district?form.district+', ':'')+( form.region||'')],['&#128179; Payment',{evc:'EVC Plus',zaad:'Zaad',sahal:'Sahal',mpesa:'M-Pesa',cash:'Cash',bank:'Bank'}[form.payMethod]||'Not set']].map(function(r){return '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid '+C.border+'"><span style="font-size:15px;color:'+C.muted+'">'+r[0]+'</span><span style="font-size:15px;font-weight:700">'+esc(r[1]||'')+'</span></div>';}).join('')
      +'</div>'
      +pBtn('creg:done','&#127968; Start Exploring &#8594;')
    +'</div>';
  }

  var canNext=[(form.phone||'').replace(/[^0-9]/g,'').length>=9,!!(form.fname&&form.lname),!!(form.country&&form.region&&form.district),true,!!(form.payMethod),true];

  return '<div style="height:100%;background:'+C.navy+';display:flex;flex-direction:column">'
    +hdr(t('custLabel')+' Registration',t('stepLbl')+' '+(step+1)+' '+t('ofLbl')+' '+STEPS.length,step>0?'creg:back':'go:welcome','&#129333;&#8205;&#128188;')
    +prog(step,STEPS.length)
    +'<div id="cregScroll" style="flex:1;overflow-y:auto;padding:22px"><div>'+content+'</div></div>'
    +(step<5?'<div style="padding:14px 22px 26px;flex-shrink:0"><button data-id="creg:next'+step+'" style="width:100%;padding:17px;border-radius:16px;background:'+(canNext[step]?C.gold:C.navyLight)+';color:'+(canNext[step]?'#000':C.muted)+';font-size:17px;font-weight:800;border:none;cursor:'+(canNext[step]?'pointer':'default')+'">'+t('continueBtn')+'</button></div>':'')
  +'</div>';
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  SECTION: SCREEN_WREG  (Worker Registration)                ║
// ║  Edit: steps 0-6: phone · profile · location · skills ·     ║
// ║        pricing+schedule · KYC · done                        ║
// ╚══════════════════════════════════════════════════════════════╝
// Document upload helpers (registration step 4 and the pending/rejected banner)
window._wIdOk = function(f) {
  f = f || {};
  var d = f.docs || {};
  var numOk = f.idType && (f.idType === 'no_id' || /^[A-Za-z0-9\-\/ ]{5,30}$/.test((f.idNumber||'').trim()));
  return !!(numOk && d.selfie && (f.idType === 'no_id' || d.id_front));
};
window._wDoc = function(kind, e, live) {
  var file = e.target.files && e.target.files[0];
  e.target.value = '';
  if (!file) return;
  function done(url) {
    if (live) { Shaq.uploadDoc(kind, url); return; }
    var f = S.getState().wForm || {};
    var docs = Object.assign({}, f.docs || {});
    docs[kind] = url;
    S.setState({wForm: Object.assign({}, f, {docs: docs})});
  }
  if (file.type === 'application/pdf') {
    if (file.size > 2.5*1024*1024) { alert('PDF is too large (max 2.5 MB)'); return; }
    var pr = new FileReader(); pr.onload = function(ev){ done(ev.target.result); }; pr.readAsDataURL(file); return;
  }
  if (!/^image\//.test(file.type)) { alert('Choose a photo (JPG/PNG) or a PDF'); return; }
  var reader = new FileReader();
  reader.onload = function(ev) {
    var img = new Image();
    img.onload = function() {
      var max = 1400, sc = Math.min(1, max / Math.max(img.width, img.height));
      var cv = document.createElement('canvas');
      cv.width = Math.round(img.width * sc); cv.height = Math.round(img.height * sc);
      cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height);
      done(cv.toDataURL('image/jpeg', 0.82));
    };
    img.onerror = function() { alert('Could not read this image'); };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
};
function docTile(kind, label, url, required, live, status, note) {
  var ok = !!url || status === 'pending' || status === 'approved';
  var col = status === 'rejected' ? C.red : (ok ? C.emerald : C.border);
  var thumb = url && /^data:image/.test(url) ? '<img src="'+url+'" style="width:44px;height:44px;object-fit:cover;border-radius:8px">' : '<span style="font-size:24px">'+(ok?'&#128196;':'&#128247;')+'</span>';
  var stTxt = status ? ({pending:'Under review',approved:'Accepted',rejected:'Rejected'}[status]||status) : (url?'Ready':(required?'Required':'Optional'));
  return '<label style="position:relative;display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:14px;margin-bottom:8px;cursor:pointer;background:'+C.navyCard+';border:1.5px solid '+col+'">'
    +thumb+'<span style="flex:1"><span style="display:block;font-size:14px;font-weight:700;color:'+C.white+'">'+label+'</span>'
    +'<span style="display:block;font-size:12px;color:'+(status==='rejected'?C.red:C.muted)+'">'+esc(stTxt)+(note?' &middot; '+esc(note):'')+'</span></span>'
    +'<span style="font-size:12px;font-weight:700;color:'+C.emerald+'">'+(ok?'Replace':'Upload')+'</span>'
    +'<input type="file" accept="image/*,application/pdf" onchange="window._wDoc(\''+kind+'\',event,'+(live?'true':'false')+')" style="position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%">'
  +'</label>';
}
window._docTile = docTile;

function renderWorkerReg(st) {
  var step = st.wStep || 0;
  var form = st.wForm || {};
  var STEPS = ['Phone','Profile','Skills','Pricing','Done'];
  var DAYS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  var content = '';
  if (step === 0) {
    var wph=form.phone||'', wcc=form.wcc||'+252';
    var wccObj=CC.find(function(c){return c.c===wcc;})||CC[0];
    var wok=wph.replace(/[^0-9]/g,'').length>=(wccObj.min||9);
    var wccOpts=CC.map(function(c){return '<option value="'+c.c+'" '+(wcc===c.c?'selected':'')+' style="background:'+C.navyMid+'">'+c.f+' '+c.c+'</option>';}).join('');
    content='<div style="display:flex;flex-direction:column;align-items:center;padding-top:16px">'
      +'<div style="font-size:64px;margin-bottom:14px">&#128242;</div>'
      +'<div style="font-size:26px;font-weight:800;margin-bottom:6px;text-align:center">Verify Your Phone</div>'
      +'<div style="font-size:16px;color:'+C.muted+';margin-bottom:28px;text-align:center">Your phone becomes your login</div>'
      +'<div style="width:100%">'
        +'<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:10px">PHONE NUMBER</div>'
        +'<div style="display:flex;border-radius:18px;overflow:hidden;border:2px solid '+(wok?C.emerald:C.border)+';background:'+C.navyLight+'">'
          +'<div style="position:relative;flex-shrink:0;border-right:1.5px solid '+(wok?C.emerald+'55':C.border)+'">'
            +'<select onchange="window._fw.setState({wForm:Object.assign({},window._fw.getState().wForm||{},{wcc:this.value})});" style="appearance:none;-webkit-appearance:none;background:transparent;border:none;padding:18px 34px 18px 14px;color:transparent;font-size:16px;cursor:pointer;outline:none;width:94px;height:100%">'+wccOpts+'</select>'
            +'<div style="position:absolute;inset:0;pointer-events:none;display:flex;align-items:center;justify-content:center;gap:5px">'
              +'<span style="font-size:22px">'+wccObj.f+'</span>'
              +'<span style="font-size:14px;font-weight:800;color:'+C.white+'">'+wcc+'</span>'
              +'<span style="font-size:10px;color:'+C.muted+'">&#9660;</span>'
            +'</div>'
          +'</div>'
          +'<input data-id="wreg:phone" type="tel" value="'+esc(wph)+'" placeholder="Phone number" maxlength="13" inputmode="tel" style="flex:1;padding:18px 16px;background:transparent;border:none;color:'+C.white+';font-size:22px;font-weight:700;outline:none;min-width:0;letter-spacing:.5px">'
          +(wok?'<div style="display:flex;align-items:center;padding-right:14px;font-size:24px">&#9989;</div>':'')
        +'</div>'
        +'<div style="font-size:13px;color:'+(wok?C.emerald:C.muted)+';margin-top:10px;margin-bottom:20px">'+(wok?'&#10003; Valid number':'Enter your mobile number')+'</div>'
        +infoBox('&#9989;','Verified workers earn 3&#215; more bookings.',C.emerald)
        +'<button data-id="wreg:next0" style="width:100%;padding:17px;border-radius:16px;background:'+(wok?C.emerald:C.navyLight)+';color:'+(wok?'#000':C.muted)+';font-size:17px;font-weight:800;border:none;cursor:'+(wok?'pointer':'default')+'">Continue &#8594;</button>'
      +'</div>'
    +'</div>';
  } else if (step === 1) {
    var gender = form.gender||'';
    var country1 = form.country||'', region1 = form.region||'', district1 = form.district||'';
    var geoC = GEO[country1], geoR = geoC && geoC.regions[region1];
    content = '<div>'
      +'<div style="font-size:24px;font-weight:800;margin-bottom:6px">&#128100; Your Profile</div>'
      +'<div style="font-size:15px;color:'+C.muted+';margin-bottom:24px">Tell customers about yourself</div>'

      +'<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:10px">FULL NAME</div>'
      +'<input data-id="wreg:name" type="text" value="'+esc(form.name||'')+'" placeholder="e.g. Fadumo Hassan" style="width:100%;padding:18px 20px;border-radius:16px;background:'+C.navyLight+';border:2px solid '+(form.name?C.emerald:C.border)+';color:'+C.white+';font-size:18px;font-weight:600;outline:none;box-sizing:border-box;margin-bottom:18px">'

      +'<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:10px">GENDER</div>'
      +'<div style="display:flex;gap:10px;margin-bottom:22px">'
        +['Male','Female','Other'].map(function(g){var s=gender===g;return '<div data-id="wreg:gender:'+g+'" style="flex:1;padding:16px 4px;border-radius:14px;text-align:center;cursor:pointer;font-size:16px;font-weight:700;border:2px solid '+(s?C.emerald:C.border)+';background:'+(s?C.emerald+'22':'transparent')+';color:'+(s?C.emerald:C.muted)+'">'+g+'</div>';}).join('')
      +'</div>'


      +'<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:10px">COUNTRY</div>'
      +'<div style="position:relative;margin-bottom:18px">'
        +'<select onchange="var st=window._fw.getState();window._fw.setState({wForm:Object.assign({},st.wForm||{},{country:this.value,region:\'\',district:\'\'})});" style="width:100%;padding:18px 48px 18px '+(country1?'58px':'20px')+';border-radius:16px;background:'+C.navyLight+';border:2px solid '+(country1?C.emerald:C.border)+';color:'+(country1?C.white:C.muted)+';font-size:17px;font-weight:600;appearance:none;-webkit-appearance:none;outline:none;box-sizing:border-box;cursor:pointer">'
          +'<option value="">🌍 Select Country</option>'
          +Object.keys(GEO).map(function(cn){return '<option value="'+cn+'" '+(country1===cn?'selected':'')+' style="background:'+C.navyMid+'">'+cn+'</option>';}).join('')
        +'</select>'
        +(country1?'<div style="position:absolute;left:16px;top:50%;transform:translateY(-50%);font-size:24px;pointer-events:none;line-height:1">'+geoFlag(country1)+'</div>':'')
        +'<div style="position:absolute;right:16px;top:50%;transform:translateY(-50%);pointer-events:none;color:'+C.muted+';font-size:13px">&#9660;</div>'
      +'</div>'

      +(geoC
        ?'<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:10px">REGION</div>'
         +'<div style="position:relative;margin-bottom:18px">'
           +'<select onchange="var st=window._fw.getState();window._fw.setState({wForm:Object.assign({},st.wForm||{},{region:this.value,district:\'\'})});" style="width:100%;padding:18px 48px 18px 20px;border-radius:16px;background:'+C.navyLight+';border:2px solid '+(region1?C.emerald:C.border)+';color:'+(region1?C.white:C.muted)+';font-size:17px;font-weight:600;appearance:none;-webkit-appearance:none;outline:none;box-sizing:border-box;cursor:pointer">'
             +'<option value="">📍 Select Region</option>'
             +Object.keys(geoC.regions).map(function(r){return '<option value="'+r+'" '+(region1===r?'selected':'')+'>'+r+'</option>';}).join('')
           +'</select>'
           +'<div style="position:absolute;right:16px;top:50%;transform:translateY(-50%);pointer-events:none;color:'+C.muted+';font-size:13px">&#9660;</div>'
         +'</div>'
        :'')

      +(geoR
        ?'<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:10px">DISTRICT</div>'
         +'<div style="position:relative;margin-bottom:18px">'
           +'<select onchange="var st=window._fw.getState();window._fw.setState({wForm:Object.assign({},st.wForm||{},{district:this.value})});" style="width:100%;padding:18px 48px 18px 20px;border-radius:16px;background:'+C.navyLight+';border:2px solid '+(district1?C.emerald:C.border)+';color:'+(district1?C.white:C.muted)+';font-size:17px;font-weight:600;appearance:none;-webkit-appearance:none;outline:none;box-sizing:border-box;cursor:pointer">'
             +'<option value="">🏙️ Select District</option>'
             +geoR.map(function(d){return '<option value="'+d+'" '+(district1===d?'selected':'')+'>'+d+'</option>';}).join('')
           +'</select>'
           +'<div style="position:absolute;right:16px;top:50%;transform:translateY(-50%);pointer-events:none;color:'+C.muted+';font-size:13px">&#9660;</div>'
         +'</div>'
        :'')

      +(country1&&region1&&district1&&GEO[country1]
        ?'<div style="background:'+C.emerald+'12;border:1px solid '+C.emerald+'33;border-radius:14px;padding:14px 18px;display:flex;align-items:center;gap:12px;margin-bottom:18px">'
           +'<span style="font-size:26px">'+geoFlag(country1)+'</span>'
           +'<div><div style="font-size:16px;font-weight:700">'+esc(district1)+', '+esc(region1)+'</div>'
           +'<div style="font-size:13px;color:'+C.muted+'">'+esc(country1)+'</div></div>'
         +'</div>'
        :'<div style="height:8px"></div>')

      +'<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:10px">SHORT BIO</div>'
      +'<textarea data-id="wreg:bio" placeholder="Describe your experience..." rows="3" style="width:100%;padding:16px 20px;border-radius:16px;background:'+C.navyLight+';border:2px solid '+(form.bio?C.emerald:C.border)+';color:'+C.white+';font-size:16px;font-weight:500;outline:none;box-sizing:border-box;resize:none;font-family:inherit;margin-bottom:20px">'+esc(form.bio||'')+'</textarea>'

      +pBtn('wreg:next1','Continue &#8594;','emerald',(form.name&&country1&&region1&&district1)?'':'opacity:.5;cursor:default;')
    +'</div>';
  } else if (step === 2) {
    var CAT_DATA = [
      {id:'Home Services',  icon:'&#127968;', col:'#3B82F6'},
      {id:'Plumbing',       icon:'&#128295;', col:'#06B6D4'},
      {id:'Electrical',     icon:'&#9889;',   col:'#EAB308'},
      {id:'Cooking',        icon:'&#127859;', col:'#10B981'},
      {id:'Beauty',         icon:'&#128167;', col:'#EC4899'},
      {id:'Driver Services',icon:'&#128663;', col:'#8B5CF6'},
      {id:'Delivery',       icon:'&#128230;', col:'#F97316'},
      {id:'Childcare',      icon:'&#128118;', col:'#F43F5E'},
      {id:'Tutoring',       icon:'&#128218;', col:'#6366F1'},
      {id:'Laundry',        icon:'&#128086;', col:'#14B8A6'},
      {id:'Painting',       icon:'&#127912;', col:'#A78BFA'},
      {id:'Carpentry',      icon:'&#128296;', col:'#D97706'},
      {id:'AC & Appliances',icon:'&#10052;',  col:'#38BDF8'},
      {id:'Security',       icon:'&#128110;', col:'#64748B'},
      {id:'Gardening',      icon:'&#127807;', col:'#22C55E'},
      {id:'Moving',         icon:'&#128667;', col:'#FB923C'},
      {id:'Tech & Digital', icon:'&#128187;', col:'#6366F1'},
      {id:'Photography',    icon:'&#128247;', col:'#E879F9'},
      {id:'Event Staff',    icon:'&#127881;', col:'#F472B6'},
    ];
    content = '<div>'
      +'<div style="font-size:24px;font-weight:800;margin-bottom:6px">&#128295; Your Skills</div>'
      +'<div style="font-size:15px;color:'+C.muted+';margin-bottom:22px">Choose your main service category</div>'
      +'<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px">'
        +CAT_DATA.map(function(cat){
          var sel = form.cat===cat.id;
          return '<div data-id="wreg:cat:'+esc(cat.id)+'" style="background:'+(sel?cat.col+'22':C.navyCard)+';border:2px solid '+(sel?cat.col:C.border)+';border-radius:18px;padding:18px 8px 14px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;position:relative">'
            +(sel?'<div style="position:absolute;top:8px;right:8px;width:18px;height:18px;border-radius:50%;background:'+cat.col+';display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:#000">&#10003;</div>':'')
            +'<span style="font-size:32px">'+cat.icon+'</span>'
            +'<span style="font-size:12px;font-weight:700;color:'+(sel?cat.col:C.muted)+';line-height:1.3">'+cat.id+'</span>'
          +'</div>';
        }).join('')
      +'</div>'
      +(form.cat
        ?'<div style="background:'+C.emerald+'12;border:1px solid '+C.emerald+'33;border-radius:14px;padding:14px 18px;display:flex;align-items:center;gap:12px;margin-bottom:20px">'
          +'<span style="font-size:26px">'+(function(){var f=CAT_DATA.filter(function(c){return c.id===form.cat;});return f.length?f[0].icon:'&#11088;';})()+'</span>'
          +'<div><div style="font-size:15px;font-weight:700">'+esc(form.cat)+'</div>'
          +'<div style="font-size:13px;color:'+C.muted+'">Selected category &#10003;</div></div>'
        +'</div>'
        :'')
      +pBtn('wreg:next2','Continue &#8594;','emerald',(form.cat||'')?'':'opacity:.5;cursor:default;')
    +'</div>';
  } else if (step === 3) {
    content = '<div style="font-size:18px;font-weight:700;margin-bottom:18px">💰 Set Your Price</div>'
      +'<div style="display:flex;gap:8px">'
        +'<div style="flex:2">'+field('Rate', input('wreg:price', form.price||'', '15', 'number'))+'</div>'
        +'<div style="flex:1"><div style="font-size:11px;color:'+C.muted+';margin-bottom:5px;font-weight:700">Per</div>'
        +'<select data-id="wreg:unit" style="width:100%;padding:12px;border-radius:12px;background:'+C.navyLight+';border:1.5px solid '+C.border+';color:'+C.white+';font-size:14px;appearance:none">'
          +['/hr','/day','/job','/trip','/session'].map(function(u){return '<option value="'+u+'" '+(form.unit===u?'selected':'')+' style="background:'+C.navyMid+'">'+u+'</option>';}).join('')
        +'</select></div>'
      +'</div>'
      +infoBox('💡','Typical rate for '+(form.cat||'your category')+': $10–$40/hr')
      +'<div style="font-size:11px;color:'+C.muted+';margin-bottom:8px;font-weight:700">Contract Types</div>'
      +'<div style="display:flex;gap:8px;margin-bottom:16px">'
        +[['task','One-time'],['monthly','Monthly'],['permanent','Permanent']].map(function(cl){
          var cts = form.cts||['task'];
          var sel = cts.indexOf(cl[0])>=0;
          return '<button data-id="wreg:ct:'+cl[0]+'" style="flex:1;padding:8px 0;border-radius:10px;font-size:12px;font-weight:600;background:'+(sel?C.emerald+'22':C.navyCard)+';border:1.5px solid '+(sel?C.emerald:C.border)+';color:'+(sel?C.emerald:C.muted)+'">'+cl[1]+'</button>';
        }).join('')
      +'</div>'
      +pBtn('wreg:next3','Continue &#8594;','emerald',(form.price||'')?'':'opacity:.5;');
  } else if (step === 4) {
    var ID_TYPES=[{id:'national_id',icon:'&#127985;',label:'National ID'},{id:'passport',icon:'&#128218;',label:'Passport'},{id:'driving_lic',icon:'&#128663;',label:'Driving License'},{id:'refugee_card',icon:'&#128196;',label:'Refugee Card'},{id:'no_id',icon:'&#10067;',label:'No ID'}];
    var idType=form.idType||'';
    content='<div>'
      +'<div style="font-size:17px;font-weight:800;margin-bottom:6px">&#128274; Identity Verification</div>'
      +'<div style="font-size:14px;color:'+C.muted+';margin-bottom:18px">Choose your ID type to get verified</div>'
      +'<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">'
        +ID_TYPES.map(function(it){var s=idType===it.id;return '<div data-id="wreg:idtype:'+it.id+'" style="display:flex;align-items:center;gap:14px;padding:15px 18px;border-radius:16px;cursor:pointer;background:'+(s?C.emerald+'15':C.navyCard)+';border:1.5px solid '+(s?C.emerald:C.border)+'"><span style="font-size:26px">'+it.icon+'</span><span style="font-size:15px;font-weight:700;color:'+(s?C.white:C.muted)+';flex:1">'+it.label+'</span>'+(s?'<span style="color:'+C.emerald+'">&#10003;</span>':'')+'</div>';}).join('')
      +'</div>'
      +(idType&&idType!=='no_id'?field('ID Number',input('wreg:idnum', form.idNumber||'', 'Enter your ID number', 'text')):'')
      +'<div style="font-size:12px;color:'+C.muted+';font-weight:700;margin:4px 0 8px">Upload documents</div>'
      +(idType&&idType!=='no_id'?docTile('id_front','ID photo (front)',(form.docs||{}).id_front,true,false)+docTile('id_back','ID photo (back)',(form.docs||{}).id_back,false,false):'')
      +docTile('selfie','Selfie holding your ID',(form.docs||{}).selfie,true,false)
      +docTile('certificate','Certificate / licence (optional)',(form.docs||{}).certificate,false,false)
      +infoBox('&#128274;','Your info is encrypted and never shared with customers.',C.muted)
    +'</div>';
  } else {
    content='<div class="fadeUp" style="text-align:center">'
      +'<div class="pop" style="font-size:72px;margin-bottom:16px">&#127885;</div>'
      +'<div style="font-size:24px;font-weight:800;color:'+C.gold+';margin-bottom:8px">Profile Submitted!</div>'
      +'<div style="font-size:14px;color:'+C.muted+';margin-bottom:6px">Under review &middot; 24&#8211;48 hours</div>'
      +'<div style="background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:18px;padding:18px;text-align:left;margin-bottom:22px">'
        +[['&#128242; Phone',form.phone||'&#8212;'],['&#128100; Name',form.name||'&#8212;'],['&#128295; Skills',form.cat||'&#8212;'],['&#128176; Rate',form.price?'$'+form.price+(form.unit||'/hr'):'&#8212;'],['&#128274; ID',({national_id:'National ID',passport:'Passport',driving_lic:'Driving License',refugee_card:'Refugee Card',no_id:'Not submitted'}[form.idType]||'&#8212;')+(form.idNumber&&form.idType!=='no_id'?' ••••'+esc(String(form.idNumber).slice(-3)):'')]].map(function(kv){return '<div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid '+C.border+'"><span style="font-size:14px;color:'+C.muted+'">'+kv[0]+'</span><span style="font-size:14px;font-weight:700">'+kv[1]+'</span></div>';}).join('')
      +'</div>'
      +pBtn('wreg:done','&#128640; Go to Dashboard &#8594;','emerald')
    +'</div>';
  }
  var WSTEPS=['Phone','Profile','Skills','Pricing','Identity','Done'];
  return '<div style="height:100%;background:'+C.navy+';display:flex;flex-direction:column">'
    +hdr('Worker Registration','Step '+(step+1)+' of '+WSTEPS.length,step>0?'wreg:back':'go:welcome','&#128119;')
    +prog(step,WSTEPS.length,C.emerald)
    +'<div style="flex:1;overflow-y:auto;padding:16px 20px 8px"><div class="fadeUp">'+content+'</div></div>'
    +(function(){var idOk=window._wIdOk(form);return step===4?'<div style="padding:10px 22px 14px;flex-shrink:0"><button data-id="wreg:next4" style="width:100%;padding:17px;border-radius:16px;background:'+(idOk?C.emerald:C.navyLight)+';color:'+(idOk?'#000':C.muted)+';font-size:17px;font-weight:800;border:none;cursor:'+(idOk?'pointer':'default')+'">Continue &#8594;</button></div>':'';})()
  +'</div>';
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  SECTION: SCREEN_CHAT                                       ║
// ║  Edit: chat UI, quick replies, message bubbles              ║
// ╚══════════════════════════════════════════════════════════════╝
function renderChat(st) {
  var w = st.chatWorker;
  if (!w) return '';
  var msgs = st.chatMsgs || [{id:1,from:'worker',text:'Hello! I\'m '+w.name+'. How can I help?',time:'Now'}];
  var QUICK = ['When available?','What\'s your rate?','Can you come today?','Do you bring supplies?'];
  var msgsHtml = msgs.map(function(m){
    var isUser = m.from==='user';
    return '<div style="display:flex;justify-content:'+(isUser?'flex-end':'flex-start')+';margin-bottom:10px">'
      +(!isUser?av(w.name,w.col,28):'')
      +'<div style="max-width:76%;margin-left:'+(isUser?'0':'8px')+'">'
        +'<div style="border-radius:'+(isUser?'16px 16px 4px 16px':'16px 16px 16px 4px')+';background:'+(isUser?C.gold:C.navyCard)+';color:'+(isUser?'#000':C.white)+';padding:10px 13px;font-size:14px">'+esc(m.text)+'</div>'
        +'<div style="font-size:9px;color:'+C.muted+';margin-top:2px;text-align:'+(isUser?'right':'left')+'">'+esc(m.time)+'</div>'
      +'</div>'
    +'</div>';
  }).join('');
  return '<div style="height:100%;background:'+C.navy+';display:flex;flex-direction:column">'
    +'<div style="background:'+C.navyMid+';padding:13px 20px;display:flex;align-items:center;gap:11px;flex-shrink:0">'
      +'<button data-id="chat:close" style="color:'+C.muted+';font-size:22px;padding:2px;border:none;background:none">←</button>'
      +av(w.name,w.col,40)
      +'<div style="flex:1"><div style="font-size:15px;font-weight:700">'+esc(w.name)+'</div>'
      +'<div style="font-size:11px;color:'+(w.online?C.emerald:C.muted)+'">'+(w.online?'● Online':'○ Offline')+'</div></div>'
      +'<div style="text-align:right;font-size:11px;color:'+C.muted+'">⭐ '+w.rating+'<br><span style="color:'+C.gold+'">'+'$'+w.price+w.unit+'</span></div>'
    +'</div>'
    +'<div id="chat-msgs" style="flex:1;overflow-y:auto;padding:16px">'+msgsHtml+'</div>'
    +'<div style="padding:8px 12px 4px;display:flex;gap:6px;overflow-x:auto;flex-shrink:0">'
      +QUICK.map(function(q){return '<button data-id="chat:quick:'+esc(q)+'" style="padding:5px 11px;border-radius:16px;flex-shrink:0;background:'+C.gold+'18;border:1px solid '+C.gold+'44;color:'+C.gold+';font-size:11px;font-weight:600">'+esc(q)+'</button>';}).join('')
    +'</div>'
    +'<div style="padding:12px;background:'+C.navyMid+';display:flex;gap:8px;flex-shrink:0">'
      +'<input id="chat-input" type="text" placeholder="Type a message..." value="'+esc(st.chatInput||'')+'" oninput="window._fw.setState({chatInput:this.value})" onkeydown="if(event.key===\'Enter\'){document.querySelector(\'[data-id=chat\\\\:send]\').click();}" style="flex:1;background:'+C.navyLight+';border:1px solid '+C.border+';border-radius:24px;padding:10px 15px;color:'+C.white+';font-size:14px;outline:none">'
      +'<button data-id="chat:send" style="width:44px;height:44px;border-radius:22px;background:'+C.gold+';color:#000;font-size:18px;flex-shrink:0;border:none">→</button>'
    +'</div>'
  +'</div>';
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  SECTION: SCREEN_BOOKING                                    ║
// ║  Edit: contract select · date/time · schedule · confirm     ║
// ╚══════════════════════════════════════════════════════════════╝





// ══════════════════════════════════════════════════════════════
// SHAQAALE DISPATCH ENGINE v2.0
// Implements: Auto-Dispatch · Data Masking · 30s TTL Loop
// WebSocket-ready · Feature-flagged · Schema-safe
// ══════════════════════════════════════════════════════════════
var SQDispatch = (function() {

  // ── FEATURE FLAGS (toggle without redeploy) ──────────────
  var FLAGS = {
    AUTO_DISPATCH:     true,   // Phase 2B — Auto-allocation engine
    DATA_MASKING:      true,   // Phase 2A — Pre-match anonymisation
    POST_MATCH_EXPOSE: true,   // Phase 2C — Secure data exposure
    WEBSOCKET_SYNC:    true,   // Phase 3A — Live tracking 3-5s interval
    DRIVER_MODAL:      true,   // Phase 3B — 30s countdown overlay
  };

  // ── ORDER STATUS MACHINE ──────────────────────────────────
  var STATUS = {
    PENDING:    'PENDING',     // Awaiting dispatch
    SEARCHING:  'SEARCHING',   // TTL loop running
    ASSIGNED:   'ASSIGNED',    // Driver accepted
    PICKED_UP:  'PICKED_UP',   // Parcel collected
    IN_TRANSIT: 'IN_TRANSIT',  // En route to dropoff
    DELIVERED:  'DELIVERED',   // Completed
    FAILED:     'FAILED',      // All drivers skipped/timeout
    CANCELLED:  'CANCELLED',
  };

  // ── TTL LOOP STATE ────────────────────────────────────────
  var _ttlTimer      = null;
  var _ttlSeconds    = 30;
  var _ttlRemaining  = 0;
  var _currentOrder  = null;
  var _driverQueue   = [];     // Ranked driver IDs
  var _skippedDrivers= [];     // Audit: skipped_drivers_list
  var _attemptCount  = 0;      // Audit: allocation_attempts_count
  var _wsConn        = null;   // WebSocket connection
  var _trackInterval = null;   // Live tracking interval

  // ── SIMULATED DRIVER POOL (frontend demo) ─────────────────
  // In production: fetched from backend geospatial query
  // Backend: SELECT * FROM drivers WHERE ST_Distance(location, pickup) < 5000
  //          AND status='online' ORDER BY road_distance ASC
  var _DRIVER_POOL = [
    {id:'D001', roadDist:0.8,  etaMins:3,  lat:2.0495, lng:45.3195},
    {id:'D002', roadDist:1.4,  etaMins:5,  lat:2.0510, lng:45.3240},
    {id:'D003', roadDist:2.1,  etaMins:7,  lat:2.0465, lng:45.3150},
    {id:'D004', roadDist:3.3,  etaMins:11, lat:2.0530, lng:45.3280},
    {id:'D005', roadDist:4.7,  etaMins:15, lat:2.0440, lng:45.3120},
  ];

  // Post-match: full profile only exposed after ASSIGNED
  // Phase 2A — these are NEVER sent to frontend pre-match
  var _DRIVER_PROFILES = {
    D001:{name:'Dalmar Jama',   initial:'D.J', plate:'MGA-4821', rating:4.7, avatar:null, phone:'+252612345678', col:'#EF4444', av:'DJ'},
    D002:{name:'Yahye Hassan',  initial:'Y.H', plate:'MGA-7734', rating:4.8, avatar:null, phone:'+252615678901', col:'#06B6D4', av:'YH'},
    D003:{name:'Barni Warsame', initial:'B.W', plate:'MGA-1193', rating:4.9, avatar:null, phone:'+252618234567', col:'#10B981', av:'BW'},
    D004:{name:'Cabdi Farah',   initial:'C.F', plate:'MGA-5502', rating:4.6, avatar:null, phone:'+252611987654', col:'#8B5CF6', av:'CF'},
    D005:{name:'Nimco Abdi',    initial:'N.A', plate:'MGA-3367', rating:4.5, avatar:null, phone:'+252619876543', col:'#F97316', av:'NA'},
  };

  // ── PHASE 2A: DATA MASKING ────────────────────────────────
  // Returns ONLY anonymous location data — no PII
  function getMaskedDriverLocations() {
    if (!FLAGS.DATA_MASKING) {
      return _DRIVER_POOL.map(function(d){
        return Object.assign({}, d, _DRIVER_PROFILES[d.id]);
      });
    }
    // Phase 2A compliant: only coords + anonymous eta
    return _DRIVER_POOL.map(function(d){
      return {
        id:      null,           // ID masked
        lat:     d.lat,
        lng:     d.lng,
        etaMins: d.etaMins,
        // NO name, phone, plate, rating exposed
      };
    });
  }

  // ── PHASE 2C: POST-MATCH DATA EXPOSURE ───────────────────
  // Called ONLY when status === ASSIGNED
  function getAssignedDriverProfile(driverId) {
    if (!FLAGS.POST_MATCH_EXPOSE) return null;
    var profile = _DRIVER_PROFILES[driverId];
    if (!profile) return null;
    // Return only safe fields per spec
    return {
      initial:  profile.initial,
      plate:    profile.plate,
      rating:   profile.rating,
      avatar:   profile.avatar,
      col:      profile.col,
      av:       profile.av,
      // phone exposed only after ASSIGNED
      phone:    profile.phone,
    };
  }

  // ── PHASE 2B: AUTO-DISPATCH / TTL LOOP ───────────────────
  function startDispatch(order, onUpdate) {
    if (!FLAGS.AUTO_DISPATCH) {
      onUpdate({status: STATUS.ASSIGNED, driverId: 'D001', attempts:1, skipped:[]});
      return;
    }

    _currentOrder   = order;
    _skippedDrivers = [];
    _attemptCount   = 0;
    _driverQueue    = _DRIVER_POOL
      .slice()
      .sort(function(a,b){ return a.roadDist - b.roadDist; })
      .map(function(d){ return d.id; });

    onUpdate({status: STATUS.SEARCHING, nearestEta: _DRIVER_POOL[0].etaMins});
    _tryNextDriver(onUpdate);
  }

  function _tryNextDriver(onUpdate) {
    if (_driverQueue.length === 0) {
      _clearTTL();
      // Audit fields written to order
      onUpdate({
        status:           STATUS.FAILED,
        skipped_drivers_list:     _skippedDrivers,
        allocation_attempts_count: _attemptCount,
      });
      return;
    }

    var driverId = _driverQueue.shift();
    _attemptCount++;

    // Notify frontend of current attempt
    var pool = _DRIVER_POOL.filter(function(d){return d.id===driverId;})[0];
    onUpdate({
      status:    STATUS.SEARCHING,
      attempt:   _attemptCount,
      nearestEta: pool ? pool.etaMins : 0,
      ttl:       _ttlSeconds,
    });

    _clearTTL();
    _ttlRemaining = _ttlSeconds;

    // Server-side simulation: tick every second
    _ttlTimer = setInterval(function() {
      _ttlRemaining--;
      onUpdate({
        status:    STATUS.SEARCHING,
        ttl:       _ttlRemaining,
        attempt:   _attemptCount,
        nearestEta: pool ? pool.etaMins : 0,
      });

      if (_ttlRemaining <= 0) {
        // Driver timed out — mark as SKIPPED
        _skippedDrivers.push(driverId);
        _clearTTL();
        _tryNextDriver(onUpdate);
      }
    }, 1000);

    // Simulate driver response (production: WebSocket push to driver app)
    // 70% accept, 30% decline/timeout
    var responseDelay = 3000 + Math.random() * 8000;
    var willAccept    = Math.random() > 0.30;

    setTimeout(function() {
      if (!_ttlTimer) return; // already timed out/cancelled
      if (willAccept) {
        _clearTTL();
        var profile = getAssignedDriverProfile(driverId);
        onUpdate({
          status:                    STATUS.ASSIGNED,
          driverId:                  driverId,
          driver:                    profile,          // Phase 2C: now exposed
          skipped_drivers_list:      _skippedDrivers,
          allocation_attempts_count: _attemptCount,
          lat:   pool ? pool.lat : 0,
          lng:   pool ? pool.lng : 0,
          etaMins: pool ? pool.etaMins : 0,
        });
      } else {
        // Driver declined
        _skippedDrivers.push(driverId);
        _clearTTL();
        _tryNextDriver(onUpdate);
      }
    }, responseDelay);
  }

  function _clearTTL() {
    if (_ttlTimer) { clearInterval(_ttlTimer); _ttlTimer = null; }
  }

  function cancelDispatch() {
    _clearTTL();
    _driverQueue    = [];
    _skippedDrivers = [];
    _currentOrder   = null;
  }

  // ── PHASE 3A: WEBSOCKET LIVE TRACKING (3-5s interval) ────
  function startTracking(orderId, onLocationUpdate) {
    if (!FLAGS.WEBSOCKET_SYNC) return;
    stopTracking();

    // Production: replace with WebSocket connection
    // var ws = new WebSocket('wss://api.shaqaale.com/track/'+orderId);
    // ws.onmessage = function(e){ onLocationUpdate(JSON.parse(e.data)); };

    // Frontend simulation: smooth driver movement
    var baseLat = 2.0495 + (Math.random()-0.5)*0.01;
    var baseLng = 45.3195+ (Math.random()-0.5)*0.01;
    var step = 0;

    _trackInterval = setInterval(function() {
      step++;
      var lat = baseLat + step * 0.0002 + (Math.random()-0.5)*0.0001;
      var lng = baseLng + step * 0.0003 + (Math.random()-0.5)*0.0001;
      onLocationUpdate({
        lat:      lat,
        lng:      lng,
        heading:  45 + step * 2,
        speed:    25 + Math.random()*15,
        idleSecs: Math.random() > 0.8 ? Math.floor(Math.random()*60) : 0,
      });
    }, 4000); // 4s interval per spec §3A
  }

  function stopTracking() {
    if (_trackInterval) { clearInterval(_trackInterval); _trackInterval = null; }
    if (_wsConn) { _wsConn.close(); _wsConn = null; }
  }

  // ── FEATURE FLAG CONTROL ──────────────────────────────────
  function setFlag(key, value) {
    if (FLAGS.hasOwnProperty(key)) { FLAGS[key] = value; }
  }
  function getFlag(key) { return FLAGS[key]; }

  return {
    STATUS:                   STATUS,
    FLAGS:                    FLAGS,
    setFlag:                  setFlag,
    getFlag:                  getFlag,
    getMaskedDriverLocations: getMaskedDriverLocations,
    getAssignedDriverProfile: getAssignedDriverProfile,
    startDispatch:            startDispatch,
    cancelDispatch:           cancelDispatch,
    startTracking:            startTracking,
    stopTracking:             stopTracking,
  };
})();


// ══════════════════════════════════════════════════════════════
// RENDER: DELIVERY TRACKING — Post-booking live status
// Spec §3A: Sender App Upgrades
// ══════════════════════════════════════════════════════════════
function renderDeliveryTracking(st) {
  var order  = st.dlOrder  || {};
  var status = order.status || 'PENDING';
  var driver = order.driver || null;    // Phase 2C: only after ASSIGNED
  var ttl    = typeof order.ttl === 'number' ? order.ttl : null;
  var attempt= order.attempt || 1;
  var etaMins= order.etaMins || 0;
  var trackId= order.trackId || 'SHQ-000000';

  var STATUS_CONFIG = {
    PENDING:    {icon:'⏳', label:'Submitting order…',    col:C.muted,   bg:C.navyCard},
    SEARCHING:  {icon:'🔍', label:'Finding driver…',      col:C.gold,    bg:C.gold+'12'},
    ASSIGNED:   {icon:'🚗', label:'Driver assigned!',     col:C.emerald, bg:C.emerald+'12'},
    PICKED_UP:  {icon:'📦', label:'Parcel picked up',     col:C.emerald, bg:C.emerald+'12'},
    IN_TRANSIT: {icon:'🛣️', label:'On the way…',         col:'#3B82F6', bg:'#3B82F612'},
    DELIVERED:  {icon:'✅', label:'Delivered!',           col:C.emerald, bg:C.emerald+'15'},
    FAILED:     {icon:'❌', label:'No drivers available', col:'#EF4444', bg:'#EF444412'},
    CANCELLED:  {icon:'🚫', label:'Cancelled',            col:C.muted,   bg:C.navyCard},
  };

  var cfg = STATUS_CONFIG[status] || STATUS_CONFIG.PENDING;

  return hdr('Live Tracking', trackId, 'dl:trackclose', '📦')
    +'<div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px">'

      // ── STATUS BADGE ────────────────────────────────────────
      +'<div style="background:'+cfg.bg+';border:1px solid '+cfg.col+'44;border-radius:16px;padding:16px;display:flex;align-items:center;gap:14px">'
        +'<div style="font-size:32px;flex-shrink:0">'+cfg.icon+'</div>'
        +'<div style="flex:1">'
          +'<div style="font-size:16px;font-weight:800;color:'+cfg.col+'">'+cfg.label+'</div>'
          +(status==='SEARCHING'?'<div style="font-size:12px;color:'+C.muted+';margin-top:2px">Attempt '+attempt+' · Nearest: ~'+etaMins+' min away</div>':'')
          +(status==='ASSIGNED'&&driver?'<div style="font-size:12px;color:'+C.muted+';margin-top:2px">ETA: ~'+etaMins+' min · En route to pickup</div>':'')
          +(status==='IN_TRANSIT'?'<div style="font-size:12px;color:'+C.muted+';margin-top:2px">Last updated '+Math.floor(Math.random()*3+1)+'s ago</div>':'')
        +'</div>'
        // TTL countdown ring
        +(status==='SEARCHING'&&ttl!==null
          ?'<div style="flex-shrink:0;position:relative;width:52px;height:52px">'
            +'<svg width="52" height="52" viewBox="0 0 52 52" style="transform:rotate(-90deg)">'
              +'<circle cx="26" cy="26" r="22" fill="none" stroke="'+C.border+'" stroke-width="3"/>'
              +'<circle cx="26" cy="26" r="22" fill="none" stroke="'+(ttl>15?C.gold:ttl>5?C.orange:'#EF4444')+'" stroke-width="3" '
                +'stroke-dasharray="'+(2*3.14159*22)+'" '
                +'stroke-dashoffset="'+(2*3.14159*22*(1-ttl/30))+'"/>'
            +'</svg>'
            +'<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:900;color:'+(ttl>15?C.gold:ttl>5?C.orange:'#EF4444')+'">'+ttl+'</div>'
          +'</div>'
          :''
        )
      +'</div>'

      // ── PHASE 2A: MAP — Anonymous drivers (pre-match) ───────
      +(status==='SEARCHING'
        ?'<div style="border-radius:14px;overflow:hidden;border:1px solid '+C.border+'">'
          +'<div id="trackingMap" style="height:220px;width:100%"></div>'
        +'</div>'
        +'<div style="background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:12px;padding:12px 14px;display:flex;align-items:center;gap:10px">'
          +'<span style="font-size:18px">🔒</span>'
          +'<div style="font-size:12px;color:'+C.muted+'">Driver details are hidden until a driver accepts. Nearest driver: <b style="color:'+C.gold+'">~'+etaMins+' min</b></div>'
        +'</div>'
        :''
      )

      // ── PHASE 2C: DRIVER CARD (post-match, ASSIGNED+) ───────
      +(driver&&(status==='ASSIGNED'||status==='PICKED_UP'||status==='IN_TRANSIT')
        ?'<div style="background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:18px;overflow:hidden">'
          // Map with live driver position
          +'<div id="trackingMap" style="height:200px;width:100%"></div>'
          // Driver info — now revealed per Phase 2C
          +'<div style="padding:14px 16px;display:flex;align-items:center;gap:12px">'
            +'<div style="width:48px;height:48px;border-radius:13px;background:'+(driver.col||C.gold)+'33;display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:800;color:'+(driver.col||C.gold)+';flex-shrink:0">'+esc(driver.av||'D')+'</div>'
            +'<div style="flex:1">'
              +'<div style="font-size:15px;font-weight:800;color:'+C.white+'">'+esc(driver.initial)+'</div>'
              +'<div style="font-size:12px;color:'+C.muted+';margin-top:2px">'+esc(driver.plate)+' · ⭐ '+driver.rating+'</div>'
            +'</div>'
            // Call button — phone only exposed post-match
            +'<a href="tel:'+esc(driver.phone||'')+'" style="width:42px;height:42px;border-radius:50%;background:'+C.emerald+'22;border:1.5px solid '+C.emerald+'55;display:flex;align-items:center;justify-content:center;font-size:20px;text-decoration:none">📞</a>'
          +'</div>'
        +'</div>'
        :''
      )

      // ── DELIVERED ────────────────────────────────────────────
      +(status==='DELIVERED'
        ?'<div style="background:'+C.emerald+'12;border:1px solid '+C.emerald+'33;border-radius:16px;padding:20px;text-align:center">'
          +'<div style="font-size:48px;margin-bottom:10px">✅</div>'
          +'<div style="font-size:18px;font-weight:900;color:'+C.emerald+';margin-bottom:6px">Delivered!</div>'
          +'<div style="font-size:13px;color:'+C.muted+';margin-bottom:16px">Escrow released to driver</div>'
          +pBtn('dl:trackclose','Rate & Close')
        +'</div>'
        :''
      )

      // ── FAILED / RETRY ──────────────────────────────────────
      +(status==='FAILED'
        ?'<div style="background:#EF444412;border:1px solid #EF444433;border-radius:16px;padding:20px;text-align:center">'
          +'<div style="font-size:13px;color:#EF4444;margin-bottom:16px">No available drivers found in your area. Please try again.</div>'
          +pBtn('dl:retryDispatch','🔄 Retry','gold')
        +'</div>'
        :''
      )

      // ── ORDER SUMMARY ────────────────────────────────────────
      +'<div style="background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:14px;padding:4px 16px">'
        +'<div style="font-size:11px;font-weight:700;color:'+C.muted+';text-transform:uppercase;letter-spacing:.5px;padding:12px 0 4px">Order Details</div>'
        +[
          ['Tracking ID',  trackId],
          ['Parcel',       esc(order.pType||'Package')],
          ['From',         esc((order.pickup||'—').slice(0,35))],
          ['To',           esc((order.dropoff||'—').slice(0,35))],
          ['Recipient',    esc(order.recName||'—')],
          ['Fare',         '$'+(order.fare||'—')],
          ['Payment',      esc(order.payMethod||'—')],
        ].map(function(row){
          return '<div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid '+C.border+'">'
            +'<span style="font-size:12px;color:'+C.muted+'">'+row[0]+'</span>'
            +'<span style="font-size:12px;font-weight:700;color:'+C.white+';text-align:right;max-width:60%">'+row[1]+'</span>'
          +'</div>';
        }).join('')
        +(order.skippedCount>0
          ?'<div style="padding:9px 0;font-size:11px;color:'+C.muted+'">Dispatch attempts: <b style="color:'+C.white+'">'+order.allocation_attempts_count+'</b> · Skipped: <b style="color:'+C.white+'">'+order.skippedCount+'</b></div>'
          :'')
      +'</div>'

    +'</div>';
}

// ══════════════════════════════════════════════════════════════
// RENDER: DRIVER REQUEST MODAL — Phase 3B
// 30-second countdown overlay for driver app
// ══════════════════════════════════════════════════════════════
function renderDriverRequestModal(st) {
  if (!st.drRequest) return '';
  var req = st.drRequest;
  var ttl = typeof req.ttl === 'number' ? req.ttl : 30;
  var pct = ttl / 30;

  return '<div style="position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:999;display:flex;align-items:flex-end;justify-content:center">'
    +'<div style="background:'+C.navyCard+';border-radius:28px 28px 0 0;padding:28px 24px 40px;width:100%;max-width:430px;border-top:1px solid '+C.border+'">'
      // Header
      +'<div style="text-align:center;margin-bottom:24px">'
        +'<div style="font-size:13px;font-weight:700;color:'+C.muted+';text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">New Delivery Request</div>'
        // Countdown ring
        +'<div style="position:relative;width:100px;height:100px;margin:0 auto 16px">'
          +'<svg width="100" height="100" viewBox="0 0 100 100" style="transform:rotate(-90deg)">'
            +'<circle cx="50" cy="50" r="44" fill="none" stroke="'+C.border+'" stroke-width="5"/>'
            +'<circle cx="50" cy="50" r="44" fill="none" stroke="'+(ttl>15?C.gold:ttl>5?C.orange:'#EF4444')+'" stroke-width="5" '
              +'stroke-dasharray="'+(2*3.14159*44)+'" '
              +'stroke-dashoffset="'+(2*3.14159*44*(1-pct))+'" '
              +'style="transition:stroke-dashoffset 1s linear,stroke .3s"/>'
          +'</svg>'
          +'<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center">'
            +'<div style="font-size:28px;font-weight:900;color:'+(ttl>15?C.gold:ttl>5?C.orange:'#EF4444')+'">'+ttl+'</div>'
            +'<div style="font-size:10px;color:'+C.muted+'">seconds</div>'
          +'</div>'
        +'</div>'
        +'<div style="font-size:13px;color:'+C.muted+'">Request expires in <b style="color:'+(ttl>15?C.gold:'#EF4444')+'">'+ttl+'s</b></div>'
      +'</div>'
      // Parcel details
      +'<div style="background:'+C.navy+';border:1px solid '+C.border+';border-radius:16px;padding:14px 16px;margin-bottom:20px">'
        +[
          ['📦 Parcel',  req.pType  || 'Package'],
          ['📍 Pickup',  (req.pickup||'—').slice(0,40)],
          ['🏁 Drop-off',(req.dropoff||'—').slice(0,40)],
          ['💰 Earning', '$'+(req.fare||'—')],
          ['📏 Distance',req.distance ? req.distance+'km' : '—'],
        ].map(function(row){
          return '<div style="display:flex;align-items:flex-start;gap:10px;padding:8px 0;border-bottom:1px solid '+C.border+'">'
            +'<span style="font-size:12px;color:'+C.muted+';flex-shrink:0;width:80px">'+row[0]+'</span>'
            +'<span style="font-size:13px;font-weight:700;color:'+C.white+'">'+esc(String(row[1]))+'</span>'
          +'</div>';
        }).join('')
      +'</div>'
      // Action buttons
      +'<div style="display:flex;gap:12px">'
        +'<button data-id="drreq:decline" style="flex:1;padding:16px;border-radius:16px;background:#EF444415;border:1.5px solid #EF444455;color:#EF4444;font-size:15px;font-weight:800;cursor:pointer">✕ Decline</button>'
        +'<button data-id="drreq:accept"  style="flex:2;padding:16px;border-radius:16px;background:'+C.emerald+';border:none;color:#000;font-size:15px;font-weight:900;cursor:pointer">✓ Accept Delivery</button>'
      +'</div>'
    +'</div>'
  +'</div>';
}


function renderDriver(st) {
  var w = st.bookWorker;
  if (!w) return renderCustomerHome(st);

  var step      = typeof st.drStep === 'number' ? st.drStep : 0;
  var done      = st.drDone      || false;
  var rideType  = st.drRideType  || '';
  var pax       = st.drPassengers || 1;
  var luggage   = st.drLuggage   || false;
  var acReq     = st.drAC !== false;
  var when      = st.drWhen      || 'now';
  var pickDate  = st.dlPickDate  || '';
  var pickTime  = st.dlPickTime  || '';
  var payMeth   = st.bookPayMethod || '';
  var selDriver = st.drSelectedDriver || 0;

  // Pickup state
  var pickAddr  = st.drPickAddr  || '';
  var pickLat   = st.drPickLat   || 0;
  var pickLng   = st.drPickLng   || 0;
  var pickQuery = st.drPickQuery || '';
  var pickResults = st.drPickResults || [];

  // Dropoff state
  var dropAddr  = st.drDropAddr  || '';
  var dropLat   = st.drDropLat   || 0;
  var dropLng   = st.drDropLng   || 0;
  var dropQuery = st.drDropQuery || '';
  var dropResults = st.drDropResults || [];

  // Route info
  var routeDist = st.drRouteDist || 0;
  var routeDur  = st.drRouteDur  || 0;

  var payLabels=Shaq.payLabels({evc:'EVC Plus',zaad:'Zaad',sahal:'Sahal',edahab:'eDahab',mpesa:'M-Pesa',cash:'Cash',bank:'Bank Transfer'});

  // Simulated nearby drivers in Mogadishu
  var NEARBY_DRIVERS = [
    {name:w.name,       av:w.av,  col:w.col,  vehicle:w.vehicle||'Sedan',   ac:w.ac!==false, price:w.price||2, rating:w.rating, eta:'2 min',  dist:'0.3km', lat:2.0510, lng:45.3210, id:w.id},
    {name:'Maxamed Cabdi', av:'MC', col:'#8B5CF6', vehicle:'Toyota Corolla', ac:true, price:2,           rating:4.7,    eta:'5 min',  dist:'0.8km', lat:2.0490, lng:45.3150, id:99},
    {name:'Farhan Warsame',av:'FW', col:'#10B981', vehicle:'Nissan Sunny',   ac:true, price:2,           rating:4.6,    eta:'7 min',  dist:'1.2km', lat:2.0530, lng:45.3250, id:98},
  ];

  var drv = NEARBY_DRIVERS[selDriver] || NEARBY_DRIVERS[0];

  var RIDE_TYPES = [
    {id:'standard', icon:'🚗', label:'Standard',    sub:'1–4 passengers · Sedan',       mult:1.0},
    {id:'xl',       icon:'🚐', label:'XL / Group',  sub:'Up to 6 passengers · Van/SUV', mult:1.5},
    {id:'airport',  icon:'✈️', label:'Airport',     sub:'Fixed airport transfer',       mult:2.0},
    {id:'hourly',   icon:'⏱️', label:'Hourly Hire', sub:'2hr minimum · Multi-stop',    mult:1.2},
    {id:'fullday',  icon:'📅', label:'Full Day',    sub:'8 hours · Unlimited stops',    mult:8.0},
    {id:'school',   icon:'🏫', label:'School Run',  sub:'Safe daily school drop-off',  mult:0.9},
  ];
  var selType = RIDE_TYPES.filter(function(r){return r.id===rideType;})[0] || RIDE_TYPES[0];

  var distKm  = routeDist || 5;
  var distText= st.drDistText || distKm+'km';
  var durText = st.drDurText  || (st.drRouteDur||'—')+'min';
  var fare    = Math.round(drv.price * distKm * selType.mult);

  var TIME_SLOTS=[];
  for(var h=0;h<24;h++){var hh=h<10?'0'+h:String(h);TIME_SLOTS.push({v:hh+':00',l:h===0?'12:00 AM':h<12?h+':00 AM':h===12?'12:00 PM':(h-12)+':00 PM'});}
  var timeOpts=TIME_SLOTS.map(function(t){return '<option value="'+t.v+'"'+(pickTime===t.v?' selected':'')+'>'+t.l+'</option>';}).join('');

  var STEPS=['Type','Pickup','Drop-off','Options','Schedule','Pay'];
  var progBar='<div style="display:flex;padding:10px 16px 0;gap:3px">'
    +STEPS.map(function(s,idx){var a=idx===step,d2=idx<step;return '<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px"><div style="height:3px;width:100%;border-radius:2px;background:'+(d2?C.emerald:a?C.gold:C.border)+'"></div><div style="font-size:9px;font-weight:700;color:'+(d2?C.emerald:a?C.gold:C.muted)+'">'+s+'</div></div>';}).join('')+'</div>';

  // ── DONE SCREEN ─────────────────────────────────────────────
  // Tracking mode — Phase 3A active
  if (step === 99 || st.dlOrder) {
    return renderDeliveryTracking(st);
  }
  if (done) {
    var tid='RDE-'+Math.random().toString(36).slice(2,7).toUpperCase();
    return '<div style="height:100%;background:'+C.navy+';display:flex;flex-direction:column;overflow:hidden">'
      +'<div style="flex:1;overflow-y:auto;padding:24px 20px 16px;display:flex;flex-direction:column;align-items:center;text-align:center">'
        +'<div style="font-size:60px;margin-bottom:10px">🚗</div>'
        +'<div style="font-size:22px;font-weight:900;color:'+C.white+';margin-bottom:4px">Ride Confirmed!</div>'
        +'<div style="font-size:13px;color:'+C.muted+';margin-bottom:18px">'+esc(drv.name)+' is heading to you</div>'
        // Driver ETA card
        +'<div style="background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:18px;padding:16px;width:100%;margin-bottom:14px;display:flex;align-items:center;gap:14px">'
          +'<div style="width:50px;height:50px;border-radius:13px;background:'+drv.col+'33;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:'+drv.col+'">'+esc(drv.av)+'</div>'
          +'<div style="flex:1;text-align:left"><div style="font-size:15px;font-weight:800">'+esc(drv.name)+'</div><div style="font-size:12px;color:'+C.muted+'">'+drv.vehicle+' · ⭐ '+drv.rating+'</div></div>'
          +'<div style="text-align:right"><div style="font-size:24px;font-weight:900;color:'+C.emerald+'">'+drv.eta+'</div><div style="font-size:11px;color:'+C.muted+'">ETA</div></div>'
        +'</div>'
        // Route mini-map
        +(pickLat&&dropLat?'<div id="doneMap" style="width:100%;height:180px;border-radius:16px;overflow:hidden;margin-bottom:14px;border:1px solid '+C.border+'"></div>':'')
        // Ride ID
        +'<div style="background:'+C.gold+'15;border:1.5px solid '+C.gold+';border-radius:14px;padding:12px 20px;width:100%;margin-bottom:14px">'
          +'<div style="font-size:10px;font-weight:700;color:'+C.gold+';letter-spacing:1px;margin-bottom:3px">RIDE ID</div>'
          +'<div style="font-size:22px;font-weight:900;color:'+C.gold+';letter-spacing:2px">'+tid+'</div>'
        +'</div>'
        // Summary
        +'<div style="background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:16px;padding:4px 16px;width:100%;text-align:left;margin-bottom:12px">'
          +[
            ['Type',       selType.label],
            ['From',       pickAddr||'—'],
            ['To',         (rideType==='hourly'||rideType==='fullday')?selType.label+' hire':dropAddr||'—'],
            ['Distance',   distKm+'km'],
            ['Duration',   routeDur+'min'],
            ['Passengers', String(pax)+(luggage?' 🧳':'')],
            ['AC',         acReq?'✅':'❌'],
            ['When',       when==='now'?'Now — driver en route':'📅 '+pickDate+' '+pickTime],
            ['Fare',       '$'+fare],
            ['Payment',    payLabels[payMeth]||'—'],
          ].map(function(kv){return '<div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid '+C.border+'"><span style="font-size:12px;color:'+C.muted+'">'+kv[0]+'</span><span style="font-size:12px;font-weight:700;color:'+C.white+'">'+esc(String(kv[1]))+'</span></div>';}).join('')
        +'</div>'
        +'<div style="background:'+C.emerald+'12;border:1px solid '+C.emerald+'33;border-radius:12px;padding:12px;width:100%;display:flex;gap:10px;text-align:left">'
          +'<span>🔒</span><div style="font-size:12px;color:'+C.muted+'"><b style="color:'+C.emerald+'">Escrow:</b> $'+fare+' authorized · Released when trip ends.</div>'
        +'</div>'
      +'</div>'
      +'<div style="padding:12px 20px 32px;flex-shrink:0">'
        +'<button data-id="dr:close" style="width:100%;padding:16px;border-radius:16px;background:'+C.gold+';color:#000;font-size:16px;font-weight:900;border:none">🏠 Back to Home</button>'
      +'</div>'
    +'</div>';
  }

  var content = '';

  // ── STEP 0: RIDE TYPE ────────────────────────────────────────
  if (step === 0) {
    content = '<div>'
      +'<div style="font-size:20px;font-weight:900;margin-bottom:4px">🚗 Ride Type</div>'
      +'<div style="font-size:13px;color:'+C.muted+';margin-bottom:16px">What kind of ride?</div>'
      +'<div style="display:flex;flex-direction:column;gap:8px">'
        +RIDE_TYPES.map(function(r){var sel=rideType===r.id;return '<div data-id="dr:type:'+r.id+'" style="display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:15px;cursor:pointer;border:2px solid '+(sel?C.gold:C.border)+';background:'+(sel?C.gold+'12':C.navyCard)+'">'
          +'<span style="font-size:26px;flex-shrink:0">'+r.icon+'</span>'
          +'<div style="flex:1"><div style="font-size:14px;font-weight:700;color:'+(sel?C.gold:C.white)+'">'+r.label+'</div><div style="font-size:11px;color:'+C.muted+';margin-top:2px">'+r.sub+'</div></div>'
          +(sel?'<div style="width:22px;height:22px;border-radius:50%;background:'+C.gold+';display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;color:#000">✓</div>':'<div style="font-size:12px;font-weight:700;color:'+C.muted+'">'+(r.mult===1?'Standard':'×'+r.mult.toFixed(1))+'</div>')
        +'</div>';}).join('')
      +'</div>'
    +'</div>';
    content += '<div style="margin-top:16px">'+pBtn('dr:next0','Continue →','gold',rideType?'':'opacity:.4;cursor:default;')+'</div>';

  // ── STEP 1: PICKUP — MAP ─────────────────────────────────────
  } else if (step === 1) {
    content = '<div>'
      +'<div style="font-size:18px;font-weight:900;margin-bottom:12px">📍 Pickup Location</div>'
      // Search box
      +'<div style="position:relative;margin-bottom:8px">'
        +'<input id="pickSearch" type="text" value="'+esc(pickQuery)+'" oninput="window._fw.setState({drPickQuery:this.value,drPickResults:[]})" onchange="window._fw.setState({drPickQuery:this.value})" placeholder="Search pickup address in Mogadishu..." style="width:100%;padding:13px 40px 13px 13px;border-radius:12px;background:'+C.navyCard+';border:1.5px solid '+(pickAddr?C.emerald:C.border)+';color:'+C.white+';font-size:14px;box-sizing:border-box">'
        +(pickAddr?'<span style="position:absolute;right:12px;top:50%;transform:translateY(-50%);color:'+C.emerald+';font-size:18px">✓</span>':'<span style="position:absolute;right:12px;top:50%;transform:translateY(-50%);color:'+C.muted+';font-size:16px">🔍</span>')
      +'</div>'
      // Search results
      +(pickResults.length>0&&!pickAddr?'<div style="background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:12px;margin-bottom:10px;overflow:hidden">'
        +pickResults.slice(0,4).map(function(r){
          var main=r.display_name.split(',')[0];
          var sub=r.display_name.split(',').slice(1,3).join(',');
          return '<div class="map-search-result" data-id="dr:setpickup:'+encodeURIComponent(r.lat+','+r.lon+','+r.display_name)+'">'
            +'<div class="main">'+esc(main)+'</div>'
            +'<div class="sub">'+esc(sub)+'</div>'
          +'</div>';
        }).join('')
      +'</div>':'')
      // Selected address pill
      +(pickAddr?'<div style="background:'+C.emerald+'15;border:1px solid '+C.emerald+'44;border-radius:10px;padding:10px 14px;margin-bottom:10px;display:flex;align-items:center;gap:8px">'
        +'<span style="font-size:16px">📍</span>'
        +'<div style="flex:1;font-size:12px;color:'+C.white+'">'+esc(pickAddr.split(',').slice(0,2).join(','))+'</div>'
        +'<div data-id="dr:clearpickup" style="font-size:20px;cursor:pointer;color:'+C.muted+'">✕</div>'
      +'</div>':'')
      // Map — tap to pin location
      +'<div style="border-radius:14px;overflow:hidden;margin-bottom:8px;border:1px solid '+C.border+'">'
        +'<div id="pickupMap" style="height:250px;width:100%"></div>'
      +'</div>'
      +'<div style="font-size:11px;color:'+C.muted+';text-align:center;margin-bottom:10px">🗺️ Search above · Or tap on map to pin your pickup</div>'
      // Nearby drivers on map info
      +'<div style="background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:12px;padding:12px 14px">'
        +'<div style="font-size:12px;font-weight:700;color:'+C.muted+';margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">🚗 Choose Driver</div>'
        +'<div style="display:flex;flex-direction:column;gap:6px">'
          +NEARBY_DRIVERS.map(function(d,idx){var sel=selDriver===idx;return '<div data-id="dr:select:'+idx+'" style="display:flex;align-items:center;gap:10px;padding:10px;border-radius:10px;cursor:pointer;border:1.5px solid '+(sel?C.gold:C.border)+';background:'+(sel?C.gold+'10':'transparent')+'">'
            +'<div style="width:36px;height:36px;border-radius:10px;background:'+d.col+'33;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:'+d.col+';flex-shrink:0">'+d.av+'</div>'
            +'<div style="flex:1"><div style="font-size:13px;font-weight:700;color:'+(sel?C.gold:C.white)+'">'+esc(d.name)+'</div><div style="font-size:11px;color:'+C.muted+'">'+d.vehicle+(d.ac?' · ❄️':'')+'</div></div>'
            +'<div style="text-align:right;flex-shrink:0"><div style="font-size:13px;font-weight:800;color:'+C.emerald+'">'+d.eta+'</div><div style="font-size:10px;color:'+C.muted+'">'+d.dist+'</div></div>'
          +'</div>';}).join('')
        +'</div>'
      +'</div>'
    +'</div>';
    content += '<div style="margin-top:14px">'+pBtn('dr:next1','Continue →','gold',pickAddr?'':'opacity:.4;cursor:default;')+'</div>';

  // ── STEP 2: DROP-OFF — MAP + ROUTE ───────────────────────────
  } else if (step === 2) {
    var isOpenEnded=(rideType==='hourly'||rideType==='fullday');
    content = '<div>'
      +(isOpenEnded
        ?'<div style="font-size:18px;font-weight:900;margin-bottom:8px">📝 Itinerary</div>'
        +'<div style="background:'+C.gold+'15;border:1px solid '+C.gold+'33;border-radius:12px;padding:12px 14px;margin-bottom:12px;display:flex;gap:10px">'
          +'<span style="font-size:20px">⏱️</span>'
          +'<div><div style="font-size:13px;font-weight:700;color:'+C.gold+'">'+selType.label+'</div>'
          +'<div style="font-size:11px;color:'+C.muted+';margin-top:2px">'+(rideType==='hourly'?'Min 2 hours · driver stays with you':'8 hours included')+'</div></div>'
        +'</div>'
        +'<textarea onchange="window._fw.setState({dlDropoff:this.value})" placeholder="Describe your planned stops..." style="width:100%;padding:12px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:13px;min-height:80px;resize:none;box-sizing:border-box">'+esc(dropAddr)+'</textarea>'

        // Standard — map + search dropoff + route
        :'<div style="font-size:18px;font-weight:900;margin-bottom:12px">🏁 Destination</div>'
        // Search
        +'<div style="position:relative;margin-bottom:8px">'
          +'<input id="dropSearch" type="text" value="'+esc(dropQuery)+'" oninput="window._fw.setState({drDropQuery:this.value,drDropResults:[]})" onchange="window._fw.setState({drDropQuery:this.value})" placeholder="Search destination..." style="width:100%;padding:13px 40px 13px 13px;border-radius:12px;background:'+C.navyCard+';border:1.5px solid '+(dropAddr?'#EF4444':C.border)+';color:'+C.white+';font-size:14px;box-sizing:border-box">'
          +(dropAddr?'<span style="position:absolute;right:12px;top:50%;transform:translateY(-50%);color:#EF4444;font-size:18px">✓</span>':'<span style="position:absolute;right:12px;top:50%;transform:translateY(-50%);color:'+C.muted+';font-size:16px">🔍</span>')
        +'</div>'
        // Results
        +(dropResults.length>0&&!dropAddr?'<div style="background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:12px;margin-bottom:10px;overflow:hidden">'
          +dropResults.slice(0,4).map(function(r){var main=r.display_name.split(',')[0];var sub=r.display_name.split(',').slice(1,3).join(',');return '<div class="map-search-result" data-id="dr:setdropoff:'+encodeURIComponent(r.lat+','+r.lon+','+r.display_name)+'"><div class="main">'+esc(main)+'</div><div class="sub">'+esc(sub)+'</div></div>';}).join('')
        +'</div>':'')
        // Selected
        +(dropAddr?'<div style="background:#EF444415;border:1px solid #EF444444;border-radius:10px;padding:10px 14px;margin-bottom:10px;display:flex;align-items:center;gap:8px">'
          +'<span style="font-size:16px">🏁</span>'
          +'<div style="flex:1;font-size:12px;color:'+C.white+'">'+esc(dropAddr.split(',').slice(0,2).join(','))+'</div>'
          +'<div data-id="dr:cleardropoff" style="font-size:20px;cursor:pointer;color:'+C.muted+'">✕</div>'
        +'</div>':'')
        // Route map
        +'<div style="border-radius:14px;overflow:hidden;margin-bottom:8px;border:1px solid '+C.border+'">'
          +'<div id="routeMap" style="height:230px;width:100%"></div>'
        +'</div>'
        // Route info
        +(routeDist?'<div style="display:flex;gap:8px;margin-bottom:8px">'
          +'<div style="flex:1;background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:12px;padding:12px;text-align:center"><div style="font-size:17px;font-weight:900;color:'+C.gold+'">'+distText+'</div><div style="font-size:11px;color:'+C.muted+'">Distance</div></div>'
          +'<div style="flex:1;background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:12px;padding:12px;text-align:center"><div style="font-size:17px;font-weight:900;color:'+C.gold+'">'+durText+'</div><div style="font-size:11px;color:'+C.muted+'">Duration</div></div>'
          +'<div style="flex:1;background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:12px;padding:12px;text-align:center"><div style="font-size:17px;font-weight:900;color:'+C.gold+'">$'+fare+'</div><div style="font-size:11px;color:'+C.muted+'">Est. Fare</div></div>'
        +'</div>':'')
        +'<div style="font-size:11px;color:'+C.muted+';text-align:center">Tap map to pin · Or search above</div>'
      )
    +'</div>';
    var ok2=isOpenEnded||(!!pickLat&&!!dropLat&&!!dropAddr);
    content += '<div style="margin-top:14px">'+pBtn('dr:next2','Continue →','gold',ok2?'':'opacity:.4;cursor:default;')+'</div>';

  // ── STEP 3: OPTIONS ──────────────────────────────────────────
  } else if (step === 3) {
    content = '<div>'
      +'<div style="font-size:18px;font-weight:900;margin-bottom:4px">⚙️ Ride Options</div>'
      +'<div style="font-size:13px;color:'+C.muted+';margin-bottom:16px">Customize your ride</div>'
      // Passengers
      +'<div style="font-size:12px;font-weight:700;color:'+C.muted+';text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Passengers</div>'
      +'<div style="display:flex;gap:6px;margin-bottom:16px">'
        +[1,2,3,4].map(function(n){var sel=pax===n;return '<div data-id="dr:pax:'+n+'" style="flex:1;padding:13px 4px;border-radius:12px;cursor:pointer;border:2px solid '+(sel?C.gold:C.border)+';background:'+(sel?C.gold+'18':'transparent')+';text-align:center"><div style="font-size:17px;font-weight:800;color:'+(sel?C.gold:C.white)+'">'+n+'</div></div>';}).join('')
      +'</div>'
      +'<div data-id="dr:ac" style="display:flex;align-items:center;justify-content:space-between;padding:14px;border-radius:14px;border:2px solid '+(acReq?C.emerald:C.border)+';background:'+(acReq?C.emerald+'12':C.navyCard)+';cursor:pointer;margin-bottom:10px">'
        +'<div><div style="font-size:14px;font-weight:700">❄️ Air Conditioning</div><div style="font-size:11px;color:'+C.muted+'">Request AC-equipped vehicle</div></div>'
        +'<div style="width:48px;height:26px;border-radius:13px;background:'+(acReq?C.emerald:C.border)+';position:relative;flex-shrink:0"><div style="width:22px;height:22px;border-radius:50%;background:#fff;position:absolute;top:2px;left:'+(acReq?'24px':'2px')+'"></div></div>'
      +'</div>'
      +'<div data-id="dr:luggage" style="display:flex;align-items:center;justify-content:space-between;padding:14px;border-radius:14px;border:2px solid '+(luggage?C.gold:C.border)+';background:'+(luggage?C.gold+'12':C.navyCard)+';cursor:pointer;margin-bottom:16px">'
        +'<div><div style="font-size:14px;font-weight:700">🧳 Large Luggage</div><div style="font-size:11px;color:'+C.muted+'">Driver ensures boot space</div></div>'
        +'<div style="width:48px;height:26px;border-radius:13px;background:'+(luggage?C.gold:C.border)+';position:relative;flex-shrink:0"><div style="width:22px;height:22px;border-radius:50%;background:#fff;position:absolute;top:2px;left:'+(luggage?'24px':'2px')+'"></div></div>'
      +'</div>'
      // Selected driver
      +'<div style="background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:14px;padding:13px;display:flex;align-items:center;gap:12px">'
        +'<div style="width:42px;height:42px;border-radius:11px;background:'+drv.col+'33;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;color:'+drv.col+'">'+drv.av+'</div>'
        +'<div style="flex:1"><div style="font-size:13px;font-weight:700">'+esc(drv.name)+'</div><div style="font-size:11px;color:'+C.muted+'">'+drv.vehicle+' · ETA '+drv.eta+'</div></div>'
        +(routeDist?'<div style="font-size:17px;font-weight:900;color:'+C.gold+'">${'+fare+'}</div>':'')
      +'</div>'
    +'</div>';
    content += '<div style="margin-top:16px">'+pBtn('dr:next3','Continue →')+'</div>';

  // ── STEP 4: SCHEDULE ─────────────────────────────────────────
  } else if (step === 4) {
    content = '<div>'
      +'<div style="font-size:18px;font-weight:900;margin-bottom:4px">🕐 When?</div>'
      +'<div style="font-size:13px;color:'+C.muted+';margin-bottom:16px">Ride now or schedule for later?</div>'
      +'<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">'
        +[{id:'now',icon:'🔴',label:'Ride Now',sub:'Driver arrives in '+drv.eta},{id:'later',icon:'📅',label:'Schedule',sub:'Pick a date and time'}]
        .map(function(opt){var sel=when===opt.id;return '<div data-id="dr:when:'+opt.id+'" style="display:flex;align-items:center;gap:14px;padding:15px;border-radius:14px;cursor:pointer;border:2px solid '+(sel?C.gold:C.border)+';background:'+(sel?C.gold+'12':C.navyCard)+'">'
          +'<span style="font-size:26px">'+opt.icon+'</span>'
          +'<div style="flex:1"><div style="font-size:14px;font-weight:700;color:'+(sel?C.gold:C.white)+'">'+opt.label+'</div><div style="font-size:12px;color:'+C.muted+';margin-top:2px">'+opt.sub+'</div></div>'
          +(sel?'<div style="width:22px;height:22px;border-radius:50%;background:'+C.gold+';display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;color:#000">✓</div>':'')
        +'</div>';}).join('')
      +'</div>'
      +(when==='later'
        ?'<input type="date" value="'+(pickDate||'')+'" onchange="window._fw.setState({dlPickDate:this.value})" style="width:100%;padding:13px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:14px;margin-bottom:8px;box-sizing:border-box">'
        +'<select onchange="window._fw.setState({dlPickTime:this.value})" style="width:100%;padding:13px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:14px;box-sizing:border-box"><option value="">Select time…</option>'+timeOpts+'</select>'
      :'')
    +'</div>';
    var ok4=when==='now'||(!!pickDate&&!!pickTime);
    content += '<div style="margin-top:16px">'+pBtn('dr:next4','Continue →','gold',ok4?'':'opacity:.4;cursor:default;')+'</div>';

  // ── STEP 5: PAYMENT ──────────────────────────────────────────
  } else if (step === 5) {
    var PAY_OPTS=[{id:'evc',abbr:'EVC',label:'EVC Plus',sub:'Hormuud',col:'#10B981'},{id:'zaad',abbr:'ZAD',label:'Zaad',sub:'Telesom',col:'#3B82F6'},{id:'sahal',abbr:'SHL',label:'Sahal',sub:'Somtel',col:'#8B5CF6'},{id:'edahab',abbr:'eDA',label:'eDahab',sub:'Premier',col:'#F59E0B'},{id:'mpesa',abbr:'M-P',label:'M-Pesa',sub:'Safaricom',col:'#10B981'},{id:'cash',abbr:'$',label:'Cash',sub:'In car',col:'#64748B'}];
    content = '<div>'
      +'<div style="font-size:18px;font-weight:900;margin-bottom:4px">💳 Fare & Pay</div>'
      +'<div style="background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:14px;padding:13px;margin-bottom:14px">'
        +[['Route',pickAddr?pickAddr.split(',')[0]:'—',' → '+(dropAddr?dropAddr.split(',')[0]:'—')],['Distance',routeDist+'km'],['Duration',routeDur+' min'],['Ride type',selType.label+' ×'+selType.mult.toFixed(1)],['Rate','$'+drv.price+'/km'],['Platform fee','5%']].map(function(r){return '<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid '+C.border+'"><span style="font-size:12px;color:'+C.muted+'">'+r[0]+'</span><span style="font-size:12px;font-weight:700;color:'+C.white+'">'+(r[2]?r[1]+r[2]:r[1])+'</span></div>';}).join('')
        +'<div style="display:flex;justify-content:space-between;padding:10px 0"><span style="font-size:14px;font-weight:800">Total</span><span style="font-size:20px;font-weight:900;color:'+C.gold+'">$'+fare+'</span></div>'
      +'</div>'
      +'<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px">'
        +Shaq.payList(PAY_OPTS).map(function(p){var sel=payMeth===p.id;return '<div data-id="book:pay:'+p.id+'" style="border-radius:14px;padding:13px 6px 11px;cursor:pointer;background:'+(sel?p.col+'22':C.navyCard)+';border:2px solid '+(sel?p.col:C.border)+';text-align:center;position:relative">'+(sel?'<div style="position:absolute;top:5px;right:5px;width:14px;height:14px;border-radius:50%;background:'+p.col+';display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:900;color:#fff">✓</div>':'')+'<div style="width:36px;height:36px;border-radius:10px;background:'+(sel?p.col:p.col+'44')+';display:flex;align-items:center;justify-content:center;margin:0 auto 6px"><span style="font-size:11px;font-weight:900;color:'+(sel?'#fff':p.col)+'">'+p.abbr+'</span></div><div style="font-size:11px;font-weight:700;color:'+(sel?p.col:C.white)+';margin-bottom:1px">'+p.label+'</div><div style="font-size:10px;color:'+C.muted+'">'+p.sub+'</div></div>';}).join('')
      +'</div>'
      +'<div style="background:'+C.emerald+'12;border:1px solid '+C.emerald+'33;border-radius:12px;padding:12px;display:flex;gap:8px">'
        +'<span>🔒</span><div style="font-size:12px;color:'+C.muted+'"><b style="color:'+C.emerald+'">Escrow:</b> $'+fare+' authorized now · Released when trip ends.</div>'
      +'</div>'
    +'</div>';
    content += '<div style="margin-top:14px">'+pBtn('dr:confirm','🚗 Confirm Ride','gold',payMeth?'':'opacity:.4;cursor:default;')+'</div>';
  }

  var backId = step===0?'dr:close':'dr:back';
  return hdr(selType.label+' · '+esc(drv.name), drv.eta+' away · '+drv.dist, backId, '🚗')
    +progBar
    +'<div style="flex:1;overflow-y:auto;padding:16px"><div class="fadeUp">'+content+'</div></div>'
  +'</div>';
}


function renderDelivery(st) {
  var w = st.bookWorker;
  if (!w) return renderCustomerHome(st);

  var step     = typeof st.dlStep === 'number' ? st.dlStep : 0;
  var done     = st.dlDone || false;
  var scope    = st.dlScope    || '';   // local | national | international
  var pType    = st.dlPType    || '';   // document | food | electronics | clothing | medicine | other
  var pickup   = st.dlPickup   || '';
  var pickZone = st.dlPickZone || '';
  var pickTime = st.dlPickTime || '';
  var pickDate = st.dlPickDate || '';
  var dropoff  = st.dlDropoff  || '';
  var dropZone = st.dlDropZone || '';
  var dropCity = st.dlDropCity || '';
  var dropCtry = st.dlDropCtry || '';
  var recName  = st.dlRecipient || '';
  var recPhone = st.dlRecPhone  || '';
  var recNote  = st.dlRecNote   || '';
  var weight   = st.dlWeight    || 'light';
  var fragile  = st.dlFragile   || false;
  var insure   = st.dlInsure    || false;
  var payMeth  = st.bookPayMethod || '';
  var trackId  = st.dlTrackId  || '';
  var pickLat  = st.dlPickLat  || 0;
  var pickLng  = st.dlPickLng  || 0;
  var dropLat  = st.dlDropLat  || 0;
  var dropLng  = st.dlDropLng  || 0;

  var payLabels=Shaq.payLabels({evc:'EVC Plus',zaad:'Zaad',sahal:'Sahal',edahab:'eDahab',mpesa:'M-Pesa',cash:'Cash',bank:'Bank Transfer'});

  var MOGADISHU_ZONES = ['Hodan','Wadajir','Kaaraan','Shangaani','Hamar-Weyne','Bondhere','Shibis','Cabdulcaziiz','Waaberi','Dharkenley','Daynile','Ceelbuur'];
  var SOMALIA_CITIES  = ['Mogadishu','Hargeisa','Bosaso','Kismayo','Baidoa','Gaalkacyo','Berbera','Afgooye','Marka'];
  var COUNTRIES       = ['Somalia','Kenya','Ethiopia','Djibouti','Tanzania','Uganda','UAE','Saudi Arabia','Turkey','UK','USA','Canada'];

  var PARCEL_TYPES = [
    {id:'document',    icon:'📄', label:'Document',     sub:'Letters, contracts, IDs'},
    {id:'food',        icon:'🍱', label:'Food',          sub:'Meals, groceries'},
    {id:'electronics', icon:'📱', label:'Electronics',  sub:'Phones, laptops, gadgets'},
    {id:'clothing',    icon:'👗', label:'Clothing',      sub:'Clothes, shoes, fabric'},
    {id:'medicine',    icon:'💊', label:'Medicine',      sub:'Prescription, supplements'},
    {id:'other',       icon:'📦', label:'Other Goods',  sub:'General parcels'},
  ];

  var WEIGHT_OPTS = [
    {id:'light',  label:'Light',     sub:'Under 5kg',   price:0},
    {id:'medium', label:'Medium',    sub:'5 – 20kg',    price:2},
    {id:'heavy',  label:'Heavy',     sub:'20 – 50kg',   price:5},
    {id:'xlarge', label:'Extra Large',sub:'50kg+',      price:10},
  ];

  var BASE_PRICE  = {local:3, national:8, international:25};
  var SCOPE_LABEL = {local:'Local (Same City)', national:'National (Somalia)', international:'International'};
  var fragileAdd  = fragile ? 2 : 0;
  var insureAdd   = insure  ? 3 : 0;
  var weightAdd   = ({light:0,medium:2,heavy:5,xlarge:10})[weight] || 0;
  var baseP       = BASE_PRICE[scope] || 3;
  var totalFare   = baseP + fragileAdd + insureAdd + weightAdd;

  // ── DONE ────────────────────────────────────────────────────
  if (done) {
    var tid = trackId || ('SHQ-'+Math.random().toString(36).slice(2,8).toUpperCase());
    return '<div style="height:100%;background:'+C.navy+';display:flex;flex-direction:column;overflow:hidden">'
      +'<div style="flex:1;overflow-y:auto;padding:28px 20px 16px;display:flex;flex-direction:column;align-items:center;text-align:center">'
        +'<div style="font-size:64px;margin-bottom:10px">📦</div>'
        +'<div style="font-size:22px;font-weight:900;color:'+C.white+';margin-bottom:6px">Parcel Booked!</div>'
        +'<div style="font-size:13px;color:'+C.muted+';margin-bottom:16px">A verified courier will pick up shortly</div>'
        // Tracking ID
        +'<div style="background:'+C.gold+'18;border:2px solid '+C.gold+';border-radius:16px;padding:16px 20px;width:100%;margin-bottom:16px">'
          +'<div style="font-size:11px;font-weight:700;color:'+C.gold+';text-transform:uppercase;letter-spacing:1px;margin-bottom:4px">Tracking ID</div>'
          +'<div style="font-size:24px;font-weight:900;color:'+C.gold+';letter-spacing:2px">'+tid+'</div>'
          +'<div style="font-size:11px;color:'+C.muted+';margin-top:4px">Share this with your recipient</div>'
        +'</div>'
        // Summary card
        +'<div style="background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:16px;padding:4px 16px;width:100%;text-align:left;margin-bottom:8px">'
          +[
            ['Type',      ({document:'📄 Document',food:'🍱 Food',electronics:'📱 Electronics',clothing:'👗 Clothing',medicine:'💊 Medicine',other:'📦 Other'})[pType]||'—'],
            ['Scope',     SCOPE_LABEL[scope]||'—'],
            ['Pickup',    pickup||'—'],
            ['Dropoff',   dropoff+(dropCity?' · '+dropCity:'')+(dropCtry&&scope==='international'?' · '+dropCtry:'')],
            ['Recipient', recName+' · '+recPhone],
            ['Weight',    ({light:'Light <5kg',medium:'Medium 5-20kg',heavy:'Heavy 20-50kg',xlarge:'XL 50kg+'})[weight]+(fragile?' ⚠️ Fragile':'')],
            ['Insurance', insure?'✅ Covered':'Not insured'],
            ['Payment',   payLabels[payMeth]||'—'],
            ['Total Fare','$'+totalFare],
          ].map(function(kv){
            return '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid '+C.border+'"><span style="font-size:12px;color:'+C.muted+'">'+kv[0]+'</span><span style="font-size:12px;font-weight:700;color:'+C.white+';text-align:right;max-width:55%">'+esc(String(kv[1]))+'</span></div>';
          }).join('')
        +'</div>'
        +'<div style="background:'+C.emerald+'12;border:1px solid '+C.emerald+'33;border-radius:12px;padding:12px 14px;width:100%;display:flex;gap:10px;text-align:left">'
          +'<span style="font-size:18px">🔒</span>'
          +'<div style="font-size:12px;color:'+C.muted+'">Payment held in <b style="color:'+C.emerald+'">escrow</b>. Released when recipient confirms delivery.</div>'
        +'</div>'
      +'</div>'
      +'<div style="padding:12px 20px 32px;flex-shrink:0">'
        +'<button data-id="dl:close" style="width:100%;padding:16px;border-radius:16px;background:'+C.gold+';color:#000;font-size:16px;font-weight:900;border:none;cursor:pointer">🏠 Back to Home</button>'
      +'</div>'
    +'</div>';
  }

  // ── PROGRESS BAR ────────────────────────────────────────────
  var STEPS = ['Type','Pickup','Dropoff','Package','Payment'];
  var progBar = '<div style="display:flex;padding:12px 16px 0;gap:4px">'
    +STEPS.map(function(s,idx){
      var active=idx===step, done2=idx<step;
      return '<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px">'
        +'<div style="height:3px;width:100%;border-radius:2px;background:'+(done2?C.emerald:active?C.gold:C.border)+'"></div>'
        +'<div style="font-size:9px;font-weight:700;color:'+(done2?C.emerald:active?C.gold:C.muted)+'">'+s+'</div>'
      +'</div>';
    }).join('')
  +'</div>';

  var content = '';

  // ── STEP 0: PARCEL TYPE + SCOPE ─────────────────────────────
  if (step === 0) {
    content = '<div>'
      +'<div style="font-size:20px;font-weight:900;margin-bottom:4px">📦 What are you sending?</div>'
      +'<div style="font-size:13px;color:'+C.muted+';margin-bottom:20px">Select parcel type and destination scope</div>'

      // Parcel type grid
      +'<div style="font-size:12px;font-weight:700;color:'+C.muted+';text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">Parcel Type</div>'
      +'<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:20px">'
        +PARCEL_TYPES.map(function(p){
          var sel=pType===p.id;
          return '<div data-id="dl:ptype:'+p.id+'" style="padding:14px 6px;border-radius:14px;cursor:pointer;text-align:center;border:2px solid '+(sel?C.gold:C.border)+';background:'+(sel?C.gold+'18':C.navyCard)+'">'
            +'<div style="font-size:26px;margin-bottom:4px">'+p.icon+'</div>'
            +'<div style="font-size:12px;font-weight:700;color:'+(sel?C.gold:C.white)+';margin-bottom:2px">'+p.label+'</div>'
            +'<div style="font-size:10px;color:'+C.muted+'">'+p.sub+'</div>'
          +'</div>';
        }).join('')
      +'</div>'

      // Delivery scope
      +'<div style="font-size:12px;font-weight:700;color:'+C.muted+';text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">Delivery Scope</div>'
      +'<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:8px">'
        +[
          {id:'local',         icon:'🏙️', label:'Local Delivery',         sub:'Same city · Est. 1–4 hrs',  price:'From $3'},
          {id:'national',      icon:'🇸🇴', label:'National Delivery',      sub:'Across Somalia · 1–3 days', price:'From $8'},
          {id:'international', icon:'✈️', label:'International Shipping', sub:'Overseas · 3–14 days',      price:'From $25'},
        ].map(function(s){
          var sel=scope===s.id;
          return '<div data-id="dl:scope:'+s.id+'" style="display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;cursor:pointer;border:2px solid '+(sel?C.gold:C.border)+';background:'+(sel?C.gold+'12':C.navyCard)+'">'
            +'<span style="font-size:26px">'+s.icon+'</span>'
            +'<div style="flex:1"><div style="font-size:14px;font-weight:700;color:'+(sel?C.gold:C.white)+'">'+s.label+'</div><div style="font-size:11px;color:'+C.muted+';margin-top:2px">'+s.sub+'</div></div>'
            +'<div style="font-size:13px;font-weight:800;color:'+(sel?C.gold:C.muted)+'">'+s.price+'</div>'
            +(sel?'<div style="width:20px;height:20px;border-radius:50%;background:'+C.gold+';display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:900;color:#000">✓</div>':'')
          +'</div>';
        }).join('')
      +'</div>'

      +'</div>';
    var ok0 = !!pType && !!scope;
    content += '<div style="margin-top:16px">'+pBtn('dl:next0','Continue \u2192','gold',ok0?'':'opacity:.4;cursor:default;')+'</div>';

  // ── STEP 1: PICKUP DETAILS ───────────────────────────────────
  } else if (step === 1) {
    var zoneOpts = MOGADISHU_ZONES.map(function(z){return '<option value="'+z+'"'+(pickZone===z?' selected':'')+'>'+z+'</option>';}).join('');
    var TIME_SLOTS = ['7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM'];
    var timeOpts = TIME_SLOTS.map(function(t){return '<option value="'+t+'"'+(pickTime===t?' selected':'')+'>'+t+'</option>';}).join('');

    content = '<div>'
      +'<div style="font-size:20px;font-weight:900;margin-bottom:4px">📍 Pickup Details</div>'
      +'<div style="font-size:13px;color:'+C.muted+';margin-bottom:20px">Where should '+esc(w.name.split(' ')[0])+' collect the parcel?</div>'

      // Zone selector (local)
      +(scope!=='international'?'<div style="font-size:12px;font-weight:700;color:'+C.muted+';text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">District / Zone</div>'
        +'<select onchange="window._fw.setState({dlPickZone:this.value})" style="width:100%;padding:13px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:14px;margin-bottom:12px;box-sizing:border-box"><option value="">Select zone…</option>'+zoneOpts+'</select>':'')

      // Map + search for pickup
      +'<div style="position:relative;margin-bottom:8px">'
        +'<input id="dlPickSearch" type="text" value="'+esc(pickup)+'" oninput="window._fw.setState({dlPickup:this.value,dlPickResults:[]})" onchange="window._fw.setState({dlPickup:this.value})" placeholder="Search pickup address in Mogadishu…" style="width:100%;padding:13px 40px 13px 13px;border-radius:12px;background:'+C.navyCard+';border:1.5px solid '+(pickLat?C.emerald:C.border)+';color:'+C.white+';font-size:14px;box-sizing:border-box">'
        +(pickLat?'<span style="position:absolute;right:12px;top:50%;transform:translateY(-50%);color:'+C.emerald+';font-size:18px">✓</span>':'<span style="position:absolute;right:12px;top:50%;transform:translateY(-50%);color:'+C.muted+';font-size:16px">🔍</span>')
      +'</div>'
      +((st.dlPickResults||[]).length>0&&!pickLat?'<div style="background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:12px;margin-bottom:8px;overflow:hidden">'+(st.dlPickResults||[]).slice(0,4).map(function(r){var main=r.display_name.split(',')[0];var sub=r.display_name.split(',').slice(1,3).join(',');return '<div class="map-search-result" data-id="dl:setpickup:'+encodeURIComponent(r.lat+','+r.lon+','+r.display_name)+'"><div class="main">'+esc(main)+'</div><div class="sub">'+esc(sub)+'</div></div>';}).join('')+'</div>':'')
      +'<div style="border-radius:14px;overflow:hidden;margin-bottom:6px;border:1px solid '+C.border+'">'
        +'<div id="dlPickupMap" style="height:200px;width:100%"></div>'
      +'</div>'
      +'<div style="font-size:11px;color:'+C.muted+';text-align:center;margin-bottom:10px">🗺️ Tap on map to pin pickup location</div>'

      // Pickup date
      +'<div style="font-size:12px;font-weight:700;color:'+C.muted+';text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Pickup Date</div>'
      +'<input type="date" value="'+(pickDate||'')+'" onchange="window._fw.setState({dlPickDate:this.value})" style="width:100%;padding:13px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:14px;margin-bottom:12px;box-sizing:border-box">'

      // Pickup time window
      +'<div style="font-size:12px;font-weight:700;color:'+C.muted+';text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Preferred Pickup Time</div>'
      +'<select onchange="window._fw.setState({dlPickTime:this.value})" style="width:100%;padding:13px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:14px;margin-bottom:8px;box-sizing:border-box"><option value="">Select time window…</option>'+timeOpts+'</select>'

      +'</div>';
    var ok1 = !!pickup && !!pickDate && !!pickTime && (scope==='international'||!!pickZone);
    content += '<div style="margin-top:16px">'+pBtn('dl:next1','Continue \u2192','gold',ok1?'':'opacity:.4;cursor:default;')+'</div>';

  // ── STEP 2: DROPOFF + RECIPIENT ──────────────────────────────
  } else if (step === 2) {
    var zoneOpts2 = MOGADISHU_ZONES.map(function(z){return '<option value="'+z+'"'+(dropZone===z?' selected':'')+'>'+z+'</option>';}).join('');
    var cityOpts  = SOMALIA_CITIES.map(function(c2){return '<option value="'+c2+'"'+(dropCity===c2?' selected':'')+'>'+c2+'</option>';}).join('');
    var ctryOpts  = COUNTRIES.map(function(c2){return '<option value="'+c2+'"'+(dropCtry===c2?' selected':'')+'>'+c2+'</option>';}).join('');

    content = '<div>'
      +'<div style="font-size:20px;font-weight:900;margin-bottom:4px">🏁 Dropoff + Recipient</div>'
      +'<div style="font-size:13px;color:'+C.muted+';margin-bottom:20px">Where is the parcel going? Who receives it?</div>'

      // Destination
      +'<div style="font-size:12px;font-weight:700;color:'+C.muted+';text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Destination</div>'
      +(scope==='local'?
          '<select onchange="window._fw.setState({dlDropZone:this.value})" style="width:100%;padding:13px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:14px;margin-bottom:8px;box-sizing:border-box"><option value="">Select zone…</option>'+zoneOpts2+'</select>'
        :scope==='national'?
          '<select onchange="window._fw.setState({dlDropCity:this.value})" style="width:100%;padding:13px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:14px;margin-bottom:8px;box-sizing:border-box"><option value="">Select city…</option>'+cityOpts+'</select>'
        :/* international */
          '<select onchange="window._fw.setState({dlDropCtry:this.value})" style="width:100%;padding:13px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:14px;margin-bottom:8px;box-sizing:border-box"><option value="">Select country…</option>'+ctryOpts+'</select>'
      )

      // Street address at destination
      +'<input type="text" value="'+esc(dropoff)+'" onchange="window._fw.setState({dlDropoff:this.value})" placeholder="Street / building / landmark at destination…" style="width:100%;padding:13px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:14px;margin-bottom:16px;box-sizing:border-box">'

      // Recipient section
      +'<div style="font-size:12px;font-weight:700;color:'+C.muted+';text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Recipient</div>'
      +'<input type="text" value="'+esc(recName)+'" onchange="window._fw.setState({dlRecipient:this.value})" placeholder="Full name…" style="width:100%;padding:13px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:14px;margin-bottom:8px;box-sizing:border-box">'
      +'<input type="tel" value="'+esc(recPhone)+'" onchange="window._fw.setState({dlRecPhone:this.value})" placeholder="Phone number (incl. country code)…" style="width:100%;padding:13px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:14px;margin-bottom:8px;box-sizing:border-box">'
      +'<textarea onchange="window._fw.setState({dlRecNote:this.value})" placeholder="Delivery instructions for recipient… (optional)" style="width:100%;padding:13px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:13px;min-height:70px;resize:none;box-sizing:border-box">'+esc(recNote)+'</textarea>'
      +'</div>';
    var dropDest = scope==='local'?dropZone:scope==='national'?dropCity:dropCtry;
    var ok2 = !!dropoff && !!recName && !!recPhone && !!dropDest;
    content += '<div style="margin-top:16px">'+pBtn('dl:next2','Continue \u2192','gold',ok2?'':'opacity:.4;cursor:default;')+'</div>';

  // ── STEP 3: PACKAGE DETAILS + INSURANCE ─────────────────────
  } else if (step === 3) {
    content = '<div>'
      +'<div style="font-size:20px;font-weight:900;margin-bottom:4px">📏 Package Details</div>'
      +'<div style="font-size:13px;color:'+C.muted+';margin-bottom:20px">Help the courier prepare and price accurately</div>'

      // Weight
      +'<div style="font-size:12px;font-weight:700;color:'+C.muted+';text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">Weight</div>'
      +'<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:16px">'
        +WEIGHT_OPTS.map(function(wo){
          var sel=weight===wo.id;
          return '<div data-id="dl:weight:'+wo.id+'" style="padding:13px;border-radius:13px;cursor:pointer;border:2px solid '+(sel?C.gold:C.border)+';background:'+(sel?C.gold+'18':C.navyCard)+';text-align:center">'
            +'<div style="font-size:13px;font-weight:800;color:'+(sel?C.gold:C.white)+';margin-bottom:2px">'+wo.label+'</div>'
            +'<div style="font-size:11px;color:'+C.muted+';margin-bottom:4px">'+wo.sub+'</div>'
            +(wo.price>0?'<div style="font-size:11px;font-weight:700;color:'+C.gold+'">+$'+wo.price+'</div>':'<div style="font-size:11px;color:'+C.emerald+'">Included</div>')
          +'</div>';
        }).join('')
      +'</div>'

      // Fragile
      +'<div data-id="dl:fragile" style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-radius:14px;border:2px solid '+(fragile?'#EF4444':C.border)+';background:'+(fragile?'#EF444412':C.navyCard)+';cursor:pointer;margin-bottom:10px">'
        +'<div>'
          +'<div style="font-size:14px;font-weight:700;color:'+C.white+'">⚠️ Fragile Contents</div>'
          +'<div style="font-size:11px;color:'+C.muted+'">Extra care handling · +$2</div>'
        +'</div>'
        +'<div style="width:48px;height:26px;border-radius:13px;background:'+(fragile?'#EF4444':C.border)+';position:relative;flex-shrink:0"><div style="width:22px;height:22px;border-radius:50%;background:#fff;position:absolute;top:2px;left:'+(fragile?'24px':'2px')+';transition:left .2s"></div></div>'
      +'</div>'

      // Insurance
      +'<div data-id="dl:insure" style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-radius:14px;border:2px solid '+(insure?C.emerald:C.border)+';background:'+(insure?C.emerald+'12':C.navyCard)+';cursor:pointer;margin-bottom:16px">'
        +'<div>'
          +'<div style="font-size:14px;font-weight:700;color:'+C.white+'">🛡️ Parcel Insurance</div>'
          +'<div style="font-size:11px;color:'+C.muted+'">Covers up to $200 if lost or damaged · +$3</div>'
        +'</div>'
        +'<div style="width:48px;height:26px;border-radius:13px;background:'+(insure?C.emerald:C.border)+';position:relative;flex-shrink:0"><div style="width:22px;height:22px;border-radius:50%;background:#fff;position:absolute;top:2px;left:'+(insure?'24px':'2px')+';transition:left .2s"></div></div>'
      +'</div>'

      // Fare breakdown
      +'<div style="background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:14px;padding:14px 16px;margin-bottom:8px">'
        +'<div style="font-size:12px;font-weight:700;color:'+C.muted+';margin-bottom:10px;text-transform:uppercase;letter-spacing:.5px">💰 Fare Breakdown</div>'
        +[
          ['Base fare ('+SCOPE_LABEL[scope]+')', '$'+baseP],
          weightAdd>0?['Weight surcharge','$'+weightAdd]:null,
          fragile?['Fragile handling','+$2']:null,
          insure?['Insurance','+$3']:null,
          ['Platform fee (5%)', '$'+Math.round(totalFare*0.05*100)/100],
        ].filter(Boolean).map(function(row){
          return '<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid '+C.border+'"><span style="font-size:13px;color:'+C.muted+'">'+row[0]+'</span><span style="font-size:13px;font-weight:700;color:'+C.white+'">'+row[1]+'</span></div>';
        }).join('')
        +'<div style="display:flex;justify-content:space-between;padding:10px 0"><span style="font-size:14px;font-weight:800;color:'+C.white+'">Total</span><span style="font-size:18px;font-weight:900;color:'+C.gold+'">$'+totalFare+'</span></div>'
      +'</div>'
    +'</div>';
    content += pBtn('dl:next3','Continue \u2192');

  // ── STEP 4: PAYMENT ─────────────────────────────────────────
  } else if (step === 4) {
    var PAY_OPTS = [
      {id:'evc',    abbr:'EVC', label:'EVC Plus',  sub:'Hormuud',      col:'#10B981'},
      {id:'zaad',   abbr:'ZAD', label:'Zaad',       sub:'Telesom',      col:'#3B82F6'},
      {id:'sahal',  abbr:'SHL', label:'Sahal',      sub:'Somtel',       col:'#8B5CF6'},
      {id:'edahab', abbr:'eDA', label:'eDahab',     sub:'Premier Bank', col:'#F59E0B'},
      {id:'mpesa',  abbr:'M-P', label:'M-Pesa',     sub:'Safaricom',    col:'#10B981'},
      {id:'cash',   abbr:'$',   label:'Cash',       sub:'In person',    col:'#64748B'},
      {id:'bank',   abbr:'BNK', label:'Bank',       sub:'Transfer',     col:'#6366F1'},
    ];
    content = '<div>'
      +'<div style="font-size:20px;font-weight:900;margin-bottom:4px">💳 Pay</div>'
      +'<div style="font-size:13px;color:'+C.muted+';margin-bottom:6px">Total: <b style="color:'+C.gold+';font-size:18px">$'+totalFare+'</b></div>'
      +'<div style="font-size:12px;color:'+C.muted+';margin-bottom:18px">Held in escrow · Released on delivery confirmation</div>'
      +'<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:16px">'
        +Shaq.payList(PAY_OPTS).map(function(p){
          var sel=payMeth===p.id;
          return '<div data-id="book:pay:'+p.id+'" style="border-radius:16px;padding:16px 6px 12px;cursor:pointer;background:'+(sel?p.col+'22':C.navyCard)+';border:2px solid '+(sel?p.col:C.border)+';text-align:center;position:relative">'
            +(sel?'<div style="position:absolute;top:6px;right:6px;width:16px;height:16px;border-radius:50%;background:'+p.col+';display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:900;color:#fff">✓</div>':'')
            +'<div style="width:42px;height:42px;border-radius:12px;background:'+(sel?p.col:p.col+'44')+';display:flex;align-items:center;justify-content:center;margin:0 auto 8px"><span style="font-size:12px;font-weight:900;color:'+(sel?'#fff':p.col)+'">'+p.abbr+'</span></div>'
            +'<div style="font-size:11px;font-weight:700;color:'+(sel?p.col:C.white)+';margin-bottom:2px">'+p.label+'</div>'
            +'<div style="font-size:10px;color:'+C.muted+'">'+p.sub+'</div>'
          +'</div>';
        }).join('')
      +'</div>'
      +'<div style="background:'+C.emerald+'12;border:1px solid '+C.emerald+'33;border-radius:13px;padding:13px 14px;margin-bottom:8px;display:flex;gap:10px">'
        +'<span style="font-size:18px">🔒</span>'
        +'<div style="font-size:12px;color:'+C.muted+'"><b style="color:'+C.emerald+'">Escrow protection:</b> Your money is held safely and only released when the recipient confirms delivery or 24hrs after drop-off.</div>'
      +'</div>'
    +'</div>';
    content += pBtn('dl:confirm','✅ Confirm Delivery Booking','gold',payMeth?'':'opacity:.4;cursor:default;');
  }

  var scopeLabel = {local:'Local · Same City', national:'National · Somalia', international:'International Shipping'}[scope]||'Parcel Delivery';
  return hdr(scope==='international'?'International Shipping':'Send Parcel', scopeLabel||'Fast & Secure Delivery', 'dl:back','📦')
    +progBar
    +'<div style="flex:1;overflow-y:auto;padding:20px"><div class="fadeUp">'+content+'</div></div>'
  +'</div>';
}

function renderBooking(st) {
  var w = st.bookWorker;
  if (!w) return renderCustomerHome(st);
  var step = typeof st.bookStep === 'number' ? st.bookStep : -1;
  var ct   = st.bookCt || '';
  var done = st.bookDone || false;
  var cfg  = BOOK_CFG[w.cat] || BOOK_CFG['Home Services'];
  var subs = BOOK_SUBS[w.cat] || [];
  var ctLabel = '';
  CTS.forEach(function(x){ if(x.id===ct) ctLabel=x.label; });
  var date = st.bookDate || '';
  var time = st.bookTime || '';
  var liveIn = st.bookLiveIn || false;
  var content = '';

  // ── DONE SCREEN ──────────────────────────────────────────────
  var payLabels=Shaq.payLabels({evc:'EVC Plus',zaad:'Zaad',sahal:'Sahal',edahab:'eDahab',mpesa:'M-Pesa',cash:'Cash',bank:'Bank Transfer'});

  if (done) {
    return '<div style="height:100%;background:'+C.navy+';display:flex;flex-direction:column;overflow:hidden">'
      +'<div style="flex:1;overflow-y:auto;padding:28px 24px 16px;display:flex;flex-direction:column;align-items:center;text-align:center">'
        +'<div style="font-size:72px;margin-bottom:12px;margin-top:8px">🎉</div>'
        +'<div style="font-size:24px;font-weight:900;color:'+C.white+';margin-bottom:6px">Booking Confirmed!</div>'
        +'<div style="font-size:14px;color:'+C.muted+';margin-bottom:4px">'+esc(w.name)+' has been notified</div>'
        +'<div style="font-size:13px;color:'+C.emerald+';font-weight:700;margin-bottom:24px">🔒 Payment held in escrow</div>'
        +'<div style="background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:20px;padding:4px 16px;width:100%;text-align:left;margin-bottom:8px">'
          +(cfg.model==='delivery'?[['Worker',w.name],['Service',st.bookSub||w.sub],['Pickup',st.dlPickup||'—'],['Dropoff',st.dlDropoff||'—'],['Package',({light:'Light',medium:'Medium',heavy:'Heavy',xlarge:'XL'})[st.dlWeight||'light']+(st.dlFragile?' ⚠️ Fragile':'')],['Recipient',st.dlRecipient||'—'],['Payment',payLabels[st.bookPayMethod||'']||'—']]:cfg.model==='driver'?[['Worker',w.name],['Service',st.bookSub||w.sub],['From',st.dlPickup||'—'],['To',st.dlDropoff||'—'],['Passengers',String(st.drPassengers||1)+(st.drLuggage?' 🧳':'')],['Payment',payLabels[st.bookPayMethod||'']||'—']]:[['Worker',w.name],['Service',st.bookSub||w.sub],['Contract',ctLabel],['Date',date||'—'],['Time',time||'—'],['Payment',payLabels[st.bookPayMethod||'']||'—']]).map(function(kv){
            return '<div style="display:flex;justify-content:space-between;padding:11px 0;border-bottom:1px solid '+C.border+'"><span style="font-size:13px;color:'+C.muted+'">'+kv[0]+'</span><span style="font-size:13px;font-weight:700;color:'+C.white+'">'+esc(String(kv[1]||'—'))+'</span></div>';
          }).join('')
        +'</div>'
      +'</div>'
      +'<div style="padding:12px 24px 32px;flex-shrink:0;background:'+C.navy+'">'
        +'<button data-id="book:close" style="width:100%;padding:17px;border-radius:16px;background:'+C.gold+';color:#000;font-size:16px;font-weight:900;border:none;cursor:pointer">🏠 Back to Home</button>'
      +'</div>'
    +'</div>';
  }


  // ── STEP -1: CONTRACT TYPE ────────────────────────────────────
  if (step === -1) {
    // Filter CTS by what this worker supports
    var availCts = CTS.filter(function(c2){ return w.cts && w.cts.indexOf(c2.id)>=0; });
    content = '<div style="font-size:20px;font-weight:800;margin-bottom:6px">📋 Contract Type</div>'
      +'<div style="font-size:13px;color:'+C.muted+';margin-bottom:20px">How do you want to hire '+esc(w.name.split(' ')[0])+'?</div>'
      +availCts.map(function(c2){
        var sel=ct===c2.id;
        return '<div data-id="book:ct:'+c2.id+'" style="background:'+(sel?C.gold+'18':C.navyCard)+';border:2px solid '+(sel?C.gold:C.border)+';border-radius:18px;padding:18px;margin-bottom:12px;cursor:pointer">'
          +'<div style="display:flex;align-items:center;gap:14px">'
            +'<div style="font-size:28px">'+c2.icon+'</div>'
            +'<div style="flex:1">'
              +'<div style="font-size:15px;font-weight:700;color:'+(sel?C.gold:C.white)+'">'+c2.label+'</div>'
              +'<div style="font-size:12px;color:'+C.muted+';margin-top:2px">'+c2.desc+'</div>'
            +'</div>'
            +'<div style="font-size:13px;font-weight:800;color:'+(sel?C.gold:C.muted)+'">'+c2.price+'</div>'
            +(sel?'<div style="width:22px;height:22px;border-radius:50%;background:'+C.gold+';display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;flex-shrink:0">✓</div>':'')
          +'</div>'
          +(c2.id==='permanent'?'<div style="background:'+C.orange+'15;border:1px solid '+C.orange+'33;border-radius:10px;padding:10px;margin-top:12px"><div style="font-size:11px;font-weight:700;color:'+C.orange+'">⚠️ 30-Day Notice Required</div><div style="font-size:11px;color:'+C.muted+'">Either party must give 30 days written notice before ending.</div></div>':'')
        +'</div>';
      }).join('');

  // ── STEP 0: CATEGORY-SPECIFIC SERVICE DETAILS ─────────────────
  } else if (step === 0) {
    var selSub  = st.bookSub  || '';
    var selUrg  = st.bookUrg  || '';
    var isScheduled = (ct==='monthly'||ct==='permanent');
    var DAYS_OF_WEEK=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    var selDays = Array.isArray(st.bookDays)?st.bookDays:[];
    var TIME_OPTS=[];
    for(var th=7;th<22;th++){
      var thh=th<10?'0'+th:String(th);
      var tl=th<12?th+':00 AM':th===12?'12:00 PM':(th-12)+':00 PM';
      TIME_OPTS.push({v:thh+':00',l:tl});
      var tl2=th<12?th+':30 AM':th===12?'12:30 PM':(th-12)+':30 PM';
      TIME_OPTS.push({v:thh+':30',l:tl2});
    }
    var sOpts=TIME_OPTS.map(function(o){return '<option value="'+o.v+'"'+(st.bookTime===o.v?' selected':'')+'>'+o.l+'</option>';}).join('');
    var eOpts=TIME_OPTS.map(function(o){return '<option value="'+o.v+'"'+(st.bookEndTime===o.v?' selected':'')+'>'+o.l+'</option>';}).join('');

    content = '<div style="font-size:20px;font-weight:800;margin-bottom:6px">🔍 Service Details</div>'
      +'<div style="font-size:13px;color:'+C.muted+';margin-bottom:18px">'+esc(w.cat)+' — '+esc(w.name)+'</div>'

      // Sub-service selector
      +(subs.length>0?'<div style="margin-bottom:16px"><div style="font-size:13px;font-weight:700;color:'+C.muted+';margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">What do you need?</div>'
        +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
          +subs.map(function(s2){
            var sel=selSub===s2;
            return '<div data-id="book:sub:'+encodeURIComponent(s2)+'" style="padding:10px 12px;border-radius:12px;cursor:pointer;border:1.5px solid '+(sel?C.gold:C.border)+';background:'+(sel?C.gold+'18':C.navyCard)+';font-size:12px;font-weight:'+(sel?'700':'500')+';color:'+(sel?C.gold:C.muted)+'">'+esc(s2)+'</div>';
          }).join('')
        +'</div></div>':'')

      // Urgency — for categories that support it
      +(cfg.urgency?'<div style="margin-bottom:16px"><div style="font-size:13px;font-weight:700;color:'+C.muted+';margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">Urgency</div>'
        +'<div style="display:flex;flex-direction:column;gap:8px">'
          +URGENCY_OPTS.map(function(u){
            var sel=selUrg===u.id;
            return '<div data-id="book:urg:'+u.id+'" style="display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:14px;cursor:pointer;border:1.5px solid '+(sel?C.gold:C.border)+';background:'+(sel?C.gold+'12':C.navyCard)+'">'
              +'<span style="font-size:18px">'+u.icon+'</span>'
              +'<div style="flex:1"><div style="font-size:13px;font-weight:700;color:'+(sel?C.gold:C.white)+'">'+u.label+'</div><div style="font-size:11px;color:'+C.muted+'">'+u.sub+'</div></div>'
              +'<div style="font-size:12px;font-weight:700;color:'+(sel?C.gold:C.muted)+'">'+u.fee+'</div>'
              +(sel?'<div style="width:18px;height:18px;border-radius:50%;background:'+C.gold+';display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:900;color:#000">✓</div>':'')
            +'</div>';
          }).join('')
        +'</div></div>':'')

      // ── DELIVERY SPECIFIC FLOW ──────────────────────────────
      +(cfg.model==='delivery'?'<div style="margin-bottom:16px">'
        // Pickup
        +'<div style="font-size:13px;font-weight:700;color:'+C.muted+';margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">📍 Pickup Location</div>'
        +'<input type="text" value="'+(st.dlPickup||'')+'" onchange="window._fw.setState({dlPickup:this.value})" placeholder="Enter pickup address…" style="width:100%;padding:12px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:14px;margin-bottom:12px;box-sizing:border-box">'
        // Dropoff
        +'<div style="font-size:13px;font-weight:700;color:'+C.muted+';margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">🏁 Dropoff Location</div>'
        +'<input type="text" value="'+(st.dlDropoff||'')+'" onchange="window._fw.setState({dlDropoff:this.value})" placeholder="Enter dropoff address…" style="width:100%;padding:12px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:14px;margin-bottom:12px;box-sizing:border-box">'
        // Package weight
        +'<div style="font-size:13px;font-weight:700;color:'+C.muted+';margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">📦 Package Size</div>'
        +'<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:12px">'
          +[['light','🟢 Light','Under 5kg'],['medium','🟡 Medium','5–20kg'],['heavy','🟠 Heavy','20–50kg'],['xlarge','🔴 XL / Furniture','50kg+']].map(function(w2){
            var sel=(st.dlWeight||'light')===w2[0];
            return '<div data-id="dl:weight:'+w2[0]+'" style="padding:12px;border-radius:12px;cursor:pointer;border:1.5px solid '+(sel?C.gold:C.border)+';background:'+(sel?C.gold+'18':C.navyCard)+';text-align:center">'
              +'<div style="font-size:14px;margin-bottom:2px">'+w2[1]+'</div>'
              +'<div style="font-size:11px;color:'+C.muted+'">'+w2[2]+'</div>'
            +'</div>';
          }).join('')
        +'</div>'
        // Fragile toggle
        +'<div data-id="dl:fragile" style="display:flex;align-items:center;justify-content:space-between;padding:13px 14px;border-radius:13px;border:1.5px solid '+(st.dlFragile?'#EF4444':C.border)+';background:'+(st.dlFragile?'#EF444415':C.navyCard)+';cursor:pointer;margin-bottom:12px">'
          +'<div><div style="font-size:14px;font-weight:700;color:'+C.white+'">⚠️ Fragile Items</div><div style="font-size:11px;color:'+C.muted+'">Special handling required</div></div>'
          +'<div style="width:44px;height:24px;border-radius:12px;background:'+(st.dlFragile?'#EF4444':C.border)+';position:relative"><div style="width:20px;height:20px;border-radius:50%;background:#fff;position:absolute;top:2px;left:'+(st.dlFragile?'22px':'2px')+'"></div></div>'
        +'</div>'
        // Recipient details
        +'<div style="font-size:13px;font-weight:700;color:'+C.muted+';margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">👤 Recipient Details</div>'
        +'<input type="text" value="'+(st.dlRecipient||'')+'" onchange="window._fw.setState({dlRecipient:this.value})" placeholder="Recipient full name…" style="width:100%;padding:12px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:14px;margin-bottom:8px;box-sizing:border-box">'
        +'<input type="tel" value="'+(st.dlRecPhone||'')+'" onchange="window._fw.setState({dlRecPhone:this.value})" placeholder="Recipient phone number…" style="width:100%;padding:12px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:14px;margin-bottom:12px;box-sizing:border-box">'
        // Fare estimate
        +'<div style="background:'+C.emerald+'12;border:1px solid '+C.emerald+'33;border-radius:14px;padding:14px;display:flex;justify-content:space-between;align-items:center">'
          +'<div><div style="font-size:13px;font-weight:700;color:'+C.white+'">💰 Estimated Fare</div><div style="font-size:11px;color:'+C.muted+'">'+(w.vehicle||'Vehicle')+' · '+(st.dlFragile?'Fragile handling +$2':w.maxWeight||'Standard')+' max</div></div>'
          +'<div style="font-size:20px;font-weight:900;color:'+C.gold+'">$'+(w.price||3)+'<span style="font-size:12px;color:'+C.muted+'">/km</span></div>'
        +'</div>'
        +'</div>':'')

      // ── DRIVER SPECIFIC FLOW ─────────────────────────────────
      +(cfg.model==='driver'?'<div style="margin-bottom:16px">'
        // Pickup
        +'<div style="font-size:13px;font-weight:700;color:'+C.muted+';margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">📍 Pickup Location</div>'
        +'<input type="text" value="'+(st.dlPickup||'')+'" onchange="window._fw.setState({dlPickup:this.value})" placeholder="Where should the driver pick you up?" style="width:100%;padding:12px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:14px;margin-bottom:12px;box-sizing:border-box">'
        // Destination (for standard ride)
        +((selSub==='Standard Ride'||!selSub)?'<div style="font-size:13px;font-weight:700;color:'+C.muted+';margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">🏁 Destination</div>'
          +'<input type="text" value="'+(st.dlDropoff||'')+'" onchange="window._fw.setState({dlDropoff:this.value})" placeholder="Where are you going?" style="width:100%;padding:12px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:14px;margin-bottom:12px;box-sizing:border-box">':'')
        // Passengers
        +'<div style="font-size:13px;font-weight:700;color:'+C.muted+';margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">👥 Passengers</div>'
        +'<div style="display:flex;gap:8px;margin-bottom:12px">'
          +[1,2,3,4].map(function(n){
            var sel=(st.drPassengers||1)===n;
            return '<div data-id="dr:pax:'+n+'" style="flex:1;padding:12px;border-radius:12px;cursor:pointer;border:1.5px solid '+(sel?C.gold:C.border)+';background:'+(sel?C.gold+'18':C.navyCard)+';text-align:center;font-size:15px;font-weight:700;color:'+(sel?C.gold:C.muted)+'">'+n+'</div>';
          }).join('')
        +'</div>'
        // Luggage toggle
        +'<div data-id="dr:luggage" style="display:flex;align-items:center;justify-content:space-between;padding:13px 14px;border-radius:13px;border:1.5px solid '+(st.drLuggage?C.gold:C.border)+';background:'+(st.drLuggage?C.gold+'12':C.navyCard)+';cursor:pointer;margin-bottom:12px">'
          +'<div><div style="font-size:14px;font-weight:700;color:'+C.white+'">🧳 Luggage / Large Bags</div><div style="font-size:11px;color:'+C.muted+'">Requires larger boot space</div></div>'
          +'<div style="width:44px;height:24px;border-radius:12px;background:'+(st.drLuggage?C.gold:C.border)+';position:relative"><div style="width:20px;height:20px;border-radius:50%;background:#fff;position:absolute;top:2px;left:'+(st.drLuggage?'22px':'2px')+'"></div></div>'
        +'</div>'
        // Date & time for pre-scheduled
        +(selUrg!=='emergency'?'<div style="font-size:13px;font-weight:700;color:'+C.muted+';margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">🕐 Pickup Time</div>'
          +'<input type="date" value="'+(st.bookDate||'')+'" onchange="window._fw.setState({bookDate:this.value})" style="width:100%;padding:12px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:14px;margin-bottom:8px;box-sizing:border-box">'
          +'<select onchange="window._fw.setState({bookTime:this.value})" style="width:100%;padding:12px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:14px;box-sizing:border-box;margin-bottom:12px"><option value="">Select time…</option>'+sOpts+'</select>':'')
        // Fare
        +'<div style="background:'+C.emerald+'12;border:1px solid '+C.emerald+'33;border-radius:14px;padding:14px;display:flex;justify-content:space-between;align-items:center">'
          +'<div><div style="font-size:13px;font-weight:700;color:'+C.white+'">💰 Rate</div><div style="font-size:11px;color:'+C.muted+'">'+(w.vehicle||'Car')+' · AC: '+(w.ac?'✅':'❌')+' · '+(w.zones||['Mogadishu'])[0]+'</div></div>'
          +'<div style="font-size:20px;font-weight:900;color:'+C.gold+'">$'+(w.price||2)+'<span style="font-size:12px;color:'+C.muted+'">/km</span></div>'
        +'</div>'
        +'</div>':'')

      // Safety gate — Electrical & Welding
      +(cfg.gate==='safety'?'<div style="background:'+C.orange+'15;border:1px solid '+C.orange+'44;border-radius:14px;padding:14px;margin-bottom:16px;display:flex;gap:10px"><span style="font-size:20px">⚠️</span><div><div style="font-size:13px;font-weight:700;color:'+C.orange+';margin-bottom:4px">Safety Notice</div><div style="font-size:12px;color:'+C.muted+'">Clear the work area. Ensure ventilation. Do NOT touch live wires or hot metal. Worker will conduct safety check on arrival.</div></div></div>':'')

      // Medical gate
      +(cfg.gate==='medical'?'<div style="background:#EF444420;border:1px solid #EF4444;border-radius:14px;padding:14px;margin-bottom:16px;display:flex;gap:10px"><span style="font-size:20px">🚑</span><div><div style="font-size:13px;font-weight:700;color:#EF4444;margin-bottom:4px">Not for Emergencies</div><div style="font-size:12px;color:'+C.muted+'">For medical emergencies call 999 immediately. This service is for non-emergency consultations only.</div></div></div>':'')

      // Date/Time picker
      +(selUrg!=='emergency'&&!isScheduled?'<div style="margin-bottom:16px"><div style="font-size:13px;font-weight:700;color:'+C.muted+';margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">Date & Time</div>'
        +'<input type="date" value="'+(st.bookDate||'')+'" onchange="window._fw.setState({bookDate:this.value})" style="width:100%;padding:12px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:14px;margin-bottom:8px;box-sizing:border-box">'
        +'<select onchange="window._fw.setState({bookTime:this.value})" style="width:100%;padding:12px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:14px;box-sizing:border-box"><option value="">Select time…</option>'+sOpts+'</select>'
        +'</div>':'')

      // Recurring schedule (monthly/permanent)
      +(isScheduled?'<div style="margin-bottom:16px"><div style="font-size:13px;font-weight:700;color:'+C.muted+';margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">Working Days</div>'
        +'<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px">'
          +DAYS_OF_WEEK.map(function(d){var sel=selDays.indexOf(d)>=0;return '<div data-id="bkday:'+d+'" style="padding:8px 14px;border-radius:10px;cursor:pointer;font-size:13px;font-weight:700;border:1.5px solid '+(sel?C.gold:C.border)+';background:'+(sel?C.gold+'18':C.navyCard)+';color:'+(sel?C.gold:C.muted)+'">'+d+'</div>';}).join('')
        +'</div>'
        +'<div style="display:flex;gap:8px;margin-bottom:8px">'
          +'<div style="flex:1"><div style="font-size:11px;color:'+C.muted+';margin-bottom:4px">Start Time</div><select onchange="window._fw.setState({bookStartTime:this.value})" style="width:100%;padding:10px;border-radius:10px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:13px"><option value="">From…</option>'+sOpts+'</select></div>'
          +'<div style="flex:1"><div style="font-size:11px;color:'+C.muted+';margin-bottom:4px">End Time</div><select onchange="window._fw.setState({bookEndTime:this.value})" style="width:100%;padding:10px;border-radius:10px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:13px"><option value="">Until…</option>'+eOpts+'</select></div>'
        +'</div>'
        +(ct==='permanent'?'<div data-id="book:livein" style="display:flex;align-items:center;justify-content:space-between;padding:14px;border-radius:14px;border:1.5px solid '+(liveIn?C.gold:C.border)+';background:'+(liveIn?C.gold+'12':C.navyCard)+';cursor:pointer;margin-top:8px"><div><div style="font-size:14px;font-weight:700;color:'+C.white+'">🏠 Live-in Arrangement</div><div style="font-size:11px;color:'+C.muted+'">Worker stays at your home</div></div><div style="width:44px;height:24px;border-radius:12px;background:'+(liveIn?C.gold:C.border)+';position:relative"><div style="width:20px;height:20px;border-radius:50%;background:#fff;position:absolute;top:2px;left:'+(liveIn?'22px':'2px')+'"></div></div></div>':'')
        +'</div>':'')

      // Special notes
      +'<div style="margin-bottom:8px"><div style="font-size:13px;font-weight:700;color:'+C.muted+';margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px">Special Instructions</div>'
        +'<textarea onchange="window._fw.setState({bookNote:this.value})" placeholder="Any specific requirements, access instructions, or notes for '+esc(w.name.split(' ')[0])+'…" style="width:100%;padding:12px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+';color:'+C.white+';font-size:13px;min-height:80px;resize:none;box-sizing:border-box">'+esc(st.bookNote||'')+'</textarea>'
      +'</div>';

    var schedOk = isScheduled ? (selDays.length>0&&!!st.bookStartTime&&!!st.bookEndTime) : (!!st.bookDate&&!!st.bookTime)||selUrg==='emergency';
    content += pBtn('book:next0','Continue \u2192','gold',schedOk?'':'opacity:.5;cursor:default;');

  // ── STEP 1: WORKER PROFILE + PAYMENT MODEL ───────────────────
  } else if (step === 1) {
    var milestones = PAY_MILESTONES[cfg.model] || PAY_MILESTONES.slot;
    content = '<div style="font-size:20px;font-weight:800;margin-bottom:16px">👤 Worker Details</div>'
      +'<div class="card" style="margin-bottom:16px">'
        +'<div style="display:flex;align-items:center;gap:12px;padding-bottom:14px;margin-bottom:4px;border-bottom:1px solid '+C.border+'">'
          +av(w.name,w.col,54,w.avatar||'')
          +'<div><div style="font-size:17px;font-weight:800">'+esc(w.name)+'</div><div style="font-size:13px;color:'+C.muted+';margin-bottom:4px">'+esc(w.sub)+'</div>'+stars(w.rating)+'</div>'
        +'</div>'
        +[['🏅 Badge',w.badge],['🛡️ Trust Score',w.trust+'%'],['✅ Health Verified',w.health?'Yes':'—'],['📍 Distance',w.dist],['💰 Rate','$'+w.price+(w.unit||'/hr')]].map(function(kv){
          return '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid '+C.border+'"><span style="font-size:13px;color:'+C.muted+'">'+kv[0]+'</span><span style="font-size:13px;font-weight:700">'+esc(String(kv[1]))+'</span></div>';
        }).join('')
        +(w.bio?'<div style="padding:12px 0;font-size:12px;color:'+C.muted+';font-style:italic">"'+esc(w.bio)+'"</div>':'')
      +'</div>'
      // Payment model info
      +'<div style="margin-bottom:16px"><div style="font-size:13px;font-weight:700;color:'+C.muted+';margin-bottom:10px;text-transform:uppercase;letter-spacing:.5px">💳 Payment Milestones</div>'
        +'<div style="display:flex;flex-direction:column;gap:8px">'
          +milestones.map(function(m,idx){
            return '<div style="display:flex;gap:12px;align-items:flex-start;padding:12px;border-radius:12px;background:'+C.navyCard+';border:1px solid '+C.border+'">'
              +'<div style="width:28px;height:28px;border-radius:50%;background:'+C.gold+';display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#000;flex-shrink:0">'+(idx+1)+'</div>'
              +'<div><div style="font-size:13px;font-weight:700;color:'+C.white+'">'+m.pct+'% — '+m.when+'</div><div style="font-size:11px;color:'+C.muted+';margin-top:2px">Release: '+m.release+'</div></div>'
            +'</div>';
          }).join('')
        +'</div>'
      +'</div>'
      +'<div style="background:'+C.emerald+'12;border:1px solid '+C.emerald+'33;border-radius:14px;padding:14px;margin-bottom:16px;display:flex;gap:10px">'
        +'<span style="font-size:20px">🔒</span>'
        +'<div style="font-size:12px;color:'+C.muted+'">All payments held in <b style="color:'+C.emerald+'">escrow</b> and only released when milestones are met. Platform fee: <b style="color:'+C.white+'">5%</b>.</div>'
      +'</div>'
      +pBtn('book:next1','Continue \u2192');

  // ── STEP 2: PAYMENT METHOD ────────────────────────────────────
  } else if (step === 2) {
    var selPay = st.bookPayMethod || '';
    var PAY_OPTS = [
      {id:'evc',    abbr:'EVC', label:'EVC Plus',  sub:'Hormuud',      col:'#10B981'},
      {id:'zaad',   abbr:'ZAD', label:'Zaad',       sub:'Telesom',      col:'#3B82F6'},
      {id:'sahal',  abbr:'SHL', label:'Sahal',      sub:'Somtel',       col:'#8B5CF6'},
      {id:'edahab', abbr:'eDA', label:'eDahab',     sub:'Premier Bank', col:'#F59E0B'},
      {id:'mpesa',  abbr:'M-P', label:'M-Pesa',     sub:'Safaricom',    col:'#10B981'},
      {id:'cash',   abbr:'$',   label:'Cash',       sub:'In person',    col:'#64748B'},
      {id:'bank',   abbr:'BNK', label:'Bank',       sub:'Transfer',     col:'#6366F1'}
    ];
    content = '<div style="font-size:20px;font-weight:800;margin-bottom:4px">💳 Pay With</div>'
      +'<div style="font-size:13px;color:'+C.muted+';margin-bottom:20px">Choose your payment method</div>'
      +'<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px">'
        +Shaq.payList(PAY_OPTS).map(function(p){
          var sel=selPay===p.id;
          return '<div data-id="book:pay:'+p.id+'" style="border-radius:16px;padding:16px 6px 12px;cursor:pointer;background:'+(sel?p.col+'22':C.navyCard)+';border:2px solid '+(sel?p.col:C.border)+';text-align:center;position:relative;transition:all .15s">'
            +(sel?'<div style="position:absolute;top:6px;right:6px;width:16px;height:16px;border-radius:50%;background:'+p.col+';display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:900;color:#fff">✓</div>':'')
            +'<div style="width:42px;height:42px;border-radius:12px;background:'+(sel?p.col:p.col+'44')+';display:flex;align-items:center;justify-content:center;margin:0 auto 8px"><span style="font-size:12px;font-weight:900;color:'+(sel?'#fff':p.col)+'">'+p.abbr+'</span></div>'
            +'<div style="font-size:11px;font-weight:700;color:'+(sel?p.col:C.white)+';line-height:1.3;margin-bottom:2px">'+p.label+'</div>'
            +'<div style="font-size:10px;color:'+C.muted+'">'+p.sub+'</div>'
          +'</div>';
        }).join('')
      +'</div>'
      +(selPay?'<div style="background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:14px;padding:14px;margin-bottom:16px;display:flex;align-items:center;gap:12px">'
        +'<div style="font-size:22px">✅</div>'
        +'<div><div style="font-size:14px;font-weight:700;color:'+C.white+'">'+payLabels[selPay]+' selected</div><div style="font-size:12px;color:'+C.muted+'">Your payment will be held in escrow until job is complete</div></div>'
      +'</div>':'')
      +pBtn('book:next2','Continue \u2192','gold',selPay?'':'opacity:.5;cursor:default;');

  // ── STEP 3: CONFIRM ───────────────────────────────────────────
  } else {
    var payLabels2=Shaq.payLabels({evc:'EVC Plus',zaad:'Zaad',sahal:'Sahal',edahab:'eDahab',mpesa:'M-Pesa',cash:'Cash',bank:'Bank Transfer'});
    var bRate = (ct==='monthly'||ct==='permanent') ? '$'+(w.mp||Math.round(w.price*160))+'/mo' : '$'+w.price+(w.unit||'/hr');
    var urgLabel = {emergency:'🔴 Emergency (+50%)',today:'🟡 Today (+10%)',scheduled:'🟢 Scheduled'}[st.bookUrg||'scheduled']||'Scheduled';
    var isDelivery = (cfg.model==='delivery');
    var isDriver   = (cfg.model==='driver');
    var rows = [
      ['Worker',      w.name],
      ['Service',     st.bookSub||w.sub],
      isDelivery ? ['Pickup',  st.dlPickup||'—']    : null,
      isDelivery ? ['Dropoff', st.dlDropoff||'—']   : null,
      isDriver   ? ['From',    st.dlPickup||'—']    : null,
      isDriver   ? ['To',      st.dlDropoff||'—']   : null,
      isDelivery ? ['Package', ({light:'Light (<5kg)',medium:'Medium (5–20kg)',heavy:'Heavy (20–50kg)',xlarge:'XL (50kg+)'})[st.dlWeight||'light']] : null,
      isDelivery && st.dlFragile ? ['Fragile', '⚠️ Yes — special handling'] : null,
      isDelivery ? ['Recipient', (st.dlRecipient||'—')+' · '+(st.dlRecPhone||'—')] : null,
      isDriver   ? ['Passengers', String(st.drPassengers||1)] : null,
      isDriver && st.drLuggage ? ['Luggage', '🧳 Yes'] : null,
      (!isDelivery&&!isDriver) ? ['Contract', ctLabel] : null,
      (!isDelivery&&!isDriver) ? ['Urgency',  urgLabel] : null,
      ['Date',        st.bookDate||'—'],
      ['Time',        st.bookTime||'—'],
      ['Rate',        bRate],
      ['Platform Fee','5%'],
      ['Payment',     payLabels2[st.bookPayMethod||'']||'—']
    ].filter(function(r){ return r && r[1] && r[1]!=='—'; });

    content = '<div style="font-size:20px;font-weight:800;margin-bottom:6px">✅ Confirm Booking</div>'
      +'<div style="font-size:13px;color:'+C.muted+';margin-bottom:16px">Review your order before confirming</div>'
      +'<div class="card" style="margin-bottom:14px">'
        +'<div style="display:flex;align-items:center;gap:12px;padding-bottom:12px;margin-bottom:4px;border-bottom:1px solid '+C.border+'">'
          +av(w.name,w.col,40,w.avatar||'')
          +'<div><div style="font-size:15px;font-weight:700">'+esc(w.name)+'</div><div style="font-size:12px;color:'+C.muted+'">'+esc(w.sub)+'</div></div>'
        +'</div>'
        +rows.map(function(kv){
          return '<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid '+C.border+'"><span style="font-size:13px;color:'+C.muted+'">'+kv[0]+'</span><span style="font-size:13px;font-weight:700;color:'+C.white+'">'+esc(String(kv[1]))+'</span></div>';
        }).join('')
      +'</div>'
      +'<div style="background:'+C.emerald+'12;border:1px solid '+C.emerald+'33;border-radius:14px;padding:14px;margin-bottom:18px;display:flex;gap:10px">'
        +'<span style="font-size:20px">🔒</span>'
        +'<div style="font-size:13px;color:'+C.muted+'">Payment held in <b style="color:'+C.emerald+'">escrow</b>. Released only when job is complete and confirmed.</div>'
      +'</div>'
      +pBtn('book:confirm','✅ Confirm & Pay')
      +'<div style="height:8px"></div>'
      +gBtn('book:stepback','← Back');
  }

  return hdr('Book '+w.name, w.sub, step<=-1?'book:close':'book:stepback','📅')
    +(step>=0?prog(step,4):'')
    +'<div style="flex:1;overflow-y:auto;padding:20px"><div class="fadeUp">'+content+'</div></div>'
    +(step===-1?'<div style="padding:14px 20px 28px;flex-shrink:0"><button data-id="book:step0" style="width:100%;padding:16px;border-radius:16px;background:'+(ct?C.gold:C.navyLight)+';color:'+(ct?'#000':C.muted)+';font-size:16px;font-weight:800;border:none;cursor:'+(ct?'pointer':'default')+'">'+(ct?'Continue \u2192':'Select a contract type')+'</button></div>':'')
  +'</div>';
}


function renderWorkerProfile(st) {
  var w = st.viewWorker;
  if (!w) return '';
  return '<div style="height:100%;background:'+C.navy+';display:flex;flex-direction:column">'
    +hdr(w.name, w.sub, 'view:close')
    +'<div style="flex:1;overflow-y:auto">'
      +'<div style="background:linear-gradient(180deg,'+w.col+'22,transparent);padding:24px;text-align:center">'
        +av(w.name,w.col,90,w.avatar||'')
        +'<div style="font-size:22px;font-weight:800;margin-top:12px">'+esc(w.name)+'</div>'
        +'<div style="font-size:14px;color:'+C.muted+'">'+esc(w.sub)+' · '+esc(w.cat)+'</div>'
        +'<div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-top:10px">'
          +pill(w.badge)
          +(w.health?'<span style="background:'+C.emerald+'20;border:1px solid '+C.emerald+'44;border-radius:10px;padding:2px 8px;font-size:10px;font-weight:700;color:'+C.emerald+'">✅ Health Verified</span>':'')
          +(w.online?'<span style="background:'+C.emerald+'20;border:1px solid '+C.emerald+'44;border-radius:10px;padding:2px 8px;font-size:10px;font-weight:700;color:'+C.emerald+'">● Online</span>':'')
        +'</div>'
      +'</div>'
      +'<div style="padding:20px">'
        +'<div style="display:flex;gap:8px;margin-bottom:18px">'
          +[['⭐',w.rating.toFixed(1),'Rating'],['✅',w.jobs.toLocaleString(),'Jobs'],['🛡️',w.trust+'%','Trust'],['📍',w.dist,'Away']].map(function(a){
            return '<div style="flex:1;background:'+C.navyCard+';border-radius:12px;padding:10px 6px;text-align:center"><div style="font-size:12px">'+a[0]+' '+a[1]+'</div><div style="font-size:9px;color:'+C.muted+';margin-top:2px">'+a[2]+'</div></div>';
          }).join('')
        +'</div>'
        +'<div class="card" style="margin-bottom:16px">'
          +[['💰 Rate','$'+w.price+w.unit]].concat(w.mp?[['📅 Monthly','$'+w.mp+'/mo']]:[]).concat([['🏠 Live-in',w.liveIn?'Available':'No'],['🕐 Hours','8:00 AM – 5:00 PM']]).map(function(kv){
            return '<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid '+C.border+'"><span style="font-size:12px;color:'+C.muted+'">'+kv[0]+'</span><span style="font-size:12px;font-weight:700">'+esc(kv[1])+'</span></div>';
          }).join('')
        +'</div>'
        +'<div class="card" style="margin-bottom:20px">'
          +'<div style="font-size:12px;font-weight:700;margin-bottom:8px">Contract Types</div>'
          +'<div style="display:flex;gap:6px;flex-wrap:wrap">'
            +(w.cts||['task']).map(function(c){
              var label=c==='task'?'✅ One-time':c==='monthly'?'📅 Monthly':'♾️ Permanent';
              return '<span style="background:'+C.gold+'18;border:1px solid '+C.gold+'33;border-radius:8px;padding:4px 10px;font-size:11px;font-weight:700;color:'+C.gold+'">'+label+'</span>';
            }).join('')
          +'</div>'
        +'</div>'
        +(vw&&vw.cat==='Delivery'?gBtn('goto:delivery','📦 Send Parcel via '+esc((vw||{}).name||'Courier'),'#F5A623'):pBtn('view:book','📅 Book Now'))+'<div style="height:8px"></div>'+gBtn('view:chat','💬 Send Message')+'<div style="height:24px"></div>'
      +'</div>'
    +'</div>'
  +'</div>';
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  SECTION: SCREEN_CHOME  (Customer Home)                     ║
// ║  Edit: 5 tabs — home · search · bookings · wallet · profile ║
// ╚══════════════════════════════════════════════════════════════╝
function renderCustomerHome(st) {
  var tab = st.cTab || 'home';
  var bookings = st.bookings || [
    {id:1,wName:'Fadumo Hassan',wId:1,svc:'House Cleaning',date:'Dec 10',time:'9:00 AM',amount:60,status:'confirmed',ct:'permanent',wAv:'F',wCol:'#3B82F6'},
    {id:2,wName:'Hodan Maxamed',svc:'Laundry & Ironing',date:'Dec 8',time:'2:00 PM',amount:48,status:'completed',ct:'task',wAv:'H',wCol:'#10B981'},
  ];
  var activeCount = bookings.filter(function(b){return b.status==='confirmed';}).length;
  var NAV = [
    {id:'home',icon:'🏠',label:'Home'},
    {id:'search',icon:'🔍',label:'Search'},
    {id:'bookings',icon:'📋',label:'Bookings',badge:activeCount},
    {id:'wallet',icon:'💳',label:'Wallet'},
    {id:'profile',icon:'👤',label:'Profile'},
  ];

  var tabContent = '';
  if (tab === 'home') {
    tabContent = '<div class="fadeUp" style="padding:20px">'
      +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:18px">'
        // Send Parcel — Bolt/Glovo style
        +'<div data-id="goto:delivery" style="background:linear-gradient(135deg,#1a0a00,#2d1500);border:1.5px solid #F5A62355;border-radius:18px;padding:16px;cursor:pointer;position:relative;overflow:hidden">'
          +'<div style="font-size:28px;margin-bottom:8px">📦</div>'
          +'<div style="font-size:14px;font-weight:800;color:#F5A623;margin-bottom:2px">Send Parcel</div>'
          +'<div style="font-size:10px;color:#8899AA;line-height:1.4">Local · National<br>International</div>'
          +'<div style="position:absolute;bottom:10px;right:12px;font-size:20px;opacity:.3">🚛</div>'
        +'</div>'
        // Book a Service — existing
        +'<div data-id="goto:search" style="background:linear-gradient(135deg,#0a1a0f,#0f2318);border:1.5px solid '+C.emerald+'55;border-radius:18px;padding:16px;cursor:pointer;position:relative;overflow:hidden">'
          +'<div style="font-size:28px;margin-bottom:8px">🔍</div>'
          +'<div style="font-size:14px;font-weight:800;color:'+C.emerald+';margin-bottom:2px">Book Service</div>'
          +'<div style="font-size:10px;color:#8899AA;line-height:1.4">24 categories<br>Verified workers</div>'
          +'<div style="position:absolute;bottom:10px;right:12px;font-size:20px;opacity:.3">⭐</div>'
        +'</div>'
      +'</div>'
      +'<div style="background:linear-gradient(135deg,'+C.navyCard+',#0f1a2a);border:1px solid '+C.border+';border-radius:16px;padding:12px 16px;margin-bottom:18px;display:flex;align-items:center;justify-content:space-between">'
        +'<div style="display:flex;align-items:center;gap:10px">'
          +'<span style="font-size:20px">🛡️</span>'
          +'<div><div style="font-size:12px;font-weight:700;color:'+C.white+'">Platform Protection Active</div>'
          +'<div style="font-size:11px;color:'+C.muted+'">Escrow · Verified workers · Insured</div></div>'
        +'</div>'
      +'</div>'
      +'<div style="display:flex;gap:8px;overflow-x:auto;padding-bottom:8px;margin-bottom:18px">'
        +CATS.filter(function(c){return c!=='All';}).map(function(cat){var icons={'Home Services':'&#127968;','Plumbing':'&#128295;','Electrical':'&#9889;','Cooking':'&#127859;','Beauty':'&#128133;','Driver Services':'&#128663;','Delivery':'&#128230;','Childcare':'&#128118;','Tutoring & Teaching':'&#128218;','Laundry':'&#128086;','Painting':'&#127912;','Carpentry':'&#128296;','AC & Appliances':'&#10052;','Security':'&#128737;','Gardening':'&#127807;','Moving':'&#128667;','Pet Care':'&#128054;','Photography':'&#128247;','Event Staff':'&#127881;','Tech & Digital':'&#128187;','Healthcare':'&#128138;','Tailoring':'&#129525;','Welding':'&#128293;','Car Repair':'&#128664;'};return '<div data-id="search:cat:'+esc(cat)+'" style="flex-shrink:0;background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:14px;padding:12px 13px;text-align:center;cursor:pointer;min-width:70px"><div style="font-size:22px;margin-bottom:4px">'+(icons[cat]||'&#11088;')+'</div><div style="font-size:10px;color:'+C.muted+';font-weight:600;white-space:nowrap">'+esc(cat)+'</div></div>';}).join('')
      +'</div>'
      +'<div style="font-size:16px;font-weight:700;margin-bottom:4px">Top Workers Near You</div>'
      +'<div style="font-size:12px;color:'+C.muted+';margin-bottom:14px">Verified professionals in East Africa</div>'
      +WORKERS.slice(0,5).map(workerCard).join('')
    +'</div>';
  } else if (tab === 'search') {
    var q = st.searchQ || '';
    var cat = st.searchCat || 'All';
    var sort = st.searchSort || 'rating';
    var onlineOnly = st.searchOnline || false;
    var list = WORKERS.filter(function(w){
      return !w.hidden&&(cat==='All'||w.cat===cat)&&(!onlineOnly||w.online)&&
        (!q||w.name.toLowerCase().indexOf(q.toLowerCase())>=0||w.sub.toLowerCase().indexOf(q.toLowerCase())>=0);
    }).sort(function(a,b){
      return sort==='rating'?b.rating-a.rating:sort==='price'?a.price-b.price:parseFloat(a.dist)-parseFloat(b.dist);
    });
    tabContent = '<div class="fadeUp" style="padding:20px">'
      +'<div style="position:relative;margin-bottom:12px"><span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:16px">🔍</span>'
      +'<input data-id="search:q" type="text" value="'+esc(q)+'" placeholder="Search workers, services..." style="width:100%;padding:12px 13px 12px 43px;border-radius:14px;background:'+C.navyLight+';border:1.5px solid '+C.border+';color:'+C.white+';font-size:14px;outline:none;box-sizing:border-box"></div>'
      +'<div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:8px;margin-bottom:10px">'
        +CATS.map(function(c){return '<button data-id="search:cat:'+esc(c)+'" style="padding:6px 13px;border-radius:20px;flex-shrink:0;font-size:12px;font-weight:600;background:'+(cat===c?C.gold:C.navyCard)+';color:'+(cat===c?'#000':C.muted)+';border:1px solid '+(cat===c?C.gold:C.border)+'">'+esc(c)+'</button>';}).join('')
      +'</div>'
      +'<div style="display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap">'
        +[['rating','⭐ Top Rated'],['price','💰 Cheapest'],['dist','📍 Nearest']].map(function(arr){
          return '<button data-id="search:sort:'+arr[0]+'" style="padding:5px 10px;border-radius:10px;font-size:11px;font-weight:600;background:'+(sort===arr[0]?C.blue+'22':C.navyCard)+';border:1px solid '+(sort===arr[0]?C.blue:C.border)+';color:'+(sort===arr[0]?C.blue:C.muted)+'">'+arr[1]+'</button>';
        }).join('')
        +'<button data-id="search:online" style="padding:5px 10px;border-radius:10px;font-size:11px;font-weight:600;background:'+(onlineOnly?C.emerald+'22':C.navyCard)+';border:1px solid '+(onlineOnly?C.emerald:C.border)+';color:'+(onlineOnly?C.emerald:C.muted)+'">● Online</button>'
      +'</div>'
      +(list.length===0?'<div style="text-align:center;padding:44px 0;color:'+C.muted+'">No workers found</div>'
        :'<div style="font-size:12px;color:'+C.muted+';margin-bottom:10px">'+list.length+' workers</div>'+list.map(workerCard).join(''))
    +'</div>';
  } else if (tab === 'bookings') {
    var bTab = st.bTab || 'active';
    var bList = bookings.filter(function(b){return bTab==='active'?b.status==='confirmed':b.status==='completed';});
    tabContent = '<div class="fadeUp" style="padding:20px">'
      +'<div style="display:flex;gap:4px;background:'+C.navyCard+';border-radius:14px;padding:4px;margin-bottom:18px">'
        +[['active','📋 Active'],['history','📚 History']].map(function(arr){
          return '<button data-id="btab:'+arr[0]+'" style="flex:1;padding:11px;border-radius:11px;border:none;background:'+(bTab===arr[0]?C.gold:'transparent')+';color:'+(bTab===arr[0]?'#000':C.muted)+';font-weight:700;font-size:13px">'+arr[1]+'</button>';
        }).join('')
      +'</div>'
      +(bList.length===0
        ?'<div style="text-align:center;padding:44px 0"><div style="font-size:48px;margin-bottom:12px">'+(bTab==='active'?'📋':'📚')+'</div><div style="color:'+C.muted+';font-size:14px">'+(bTab==='active'?'No active bookings':'No history yet')+'</div></div>'
        :bList.map(function(b){
          var isActive=b.status==='confirmed';
          var payLabel={evc:'EVC Plus',zaad:'Zaad',sahal:'Sahal',edahab:'eDahab',mpesa:'M-Pesa',cash:'Cash',bank:'Bank Transfer'}[b.pay||'']||'—';
          return '<div class="card" style="margin-bottom:14px;padding:0;overflow:hidden">'
            // Header strip
            +'<div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px 12px;border-bottom:1px solid '+C.border+'">'
              +'<div style="display:flex;align-items:center;gap:12px">'
                +'<div style="width:44px;height:44px;border-radius:13px;background:'+(b.wCol||C.gold)+'33;display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:800;color:'+(b.wCol||C.gold)+'">'+esc(b.wAv||'W')+'</div>'
                +'<div>'
                  +'<div style="font-size:15px;font-weight:800;color:'+C.white+'">'+esc(b.wName)+'</div>'
                  +'<div style="font-size:12px;color:'+C.muted+';margin-top:1px">'+esc(b.svc||b.cat||'')+'</div>'
                +'</div>'
              +'</div>'
              +'<span style="padding:5px 11px;border-radius:20px;font-size:11px;font-weight:800;background:'+(isActive?C.emerald:C.muted)+'22;color:'+(isActive?C.emerald:C.muted)+';border:1px solid '+(isActive?C.emerald:C.muted)+'44">'+(isActive?'● Active':'✓ Done')+'</span>'
            +'</div>'
            // Info rows
            +'<div style="padding:12px 16px;display:flex;flex-direction:column;gap:6px">'
              +(b.date?'<div style="display:flex;align-items:center;gap:8px"><span style="font-size:13px">📅</span><span style="font-size:13px;color:'+C.muted+'">Date</span><span style="font-size:13px;font-weight:700;color:'+C.white+';margin-left:auto">'+esc(b.date)+'</span></div>':'')
              +(b.time?'<div style="display:flex;align-items:center;gap:8px"><span style="font-size:13px">⏰</span><span style="font-size:13px;color:'+C.muted+'">Time</span><span style="font-size:13px;font-weight:700;color:'+C.white+';margin-left:auto">'+esc(b.time)+'</span></div>':'')
              +'<div style="display:flex;align-items:center;gap:8px"><span style="font-size:13px">💰</span><span style="font-size:13px;color:'+C.muted+'">Rate</span><span style="font-size:13px;font-weight:700;color:'+C.gold+';margin-left:auto">$'+b.amount+'</span></div>'
              +(b.pay?'<div style="display:flex;align-items:center;gap:8px"><span style="font-size:13px">💳</span><span style="font-size:13px;color:'+C.muted+'">Payment</span><span style="font-size:13px;font-weight:700;color:'+C.white+';margin-left:auto">'+payLabel+'</span></div>':'')
              +(b.ct?'<div style="display:flex;align-items:center;gap:8px"><span style="font-size:13px">📋</span><span style="font-size:13px;color:'+C.muted+'">Contract</span><span style="font-size:13px;font-weight:700;color:'+C.white+';margin-left:auto">'+({task:'One-time',monthly:'Monthly',permanent:'Permanent'}[b.ct]||b.ct)+'</span></div>':'')
            +'</div>'
            // Action buttons
            +(isActive?'<div style="padding:0 14px 14px;display:flex;flex-direction:column;gap:8px">'
              +(b.ct==='permanent'?'<button data-id="notice:'+b.id+'" style="width:100%;padding:11px;border-radius:12px;background:'+C.orange+'15;border:1.5px solid '+C.orange+'44;color:'+C.orange+';font-size:12px;font-weight:700">⚠️ Give 30-Day Termination Notice</button>':'')
              +'<div style="display:flex;gap:8px">'
                +'<button data-id="contact:'+b.id+'" style="flex:1;padding:11px;border-radius:12px;background:'+C.emerald+'18;border:1.5px solid '+C.emerald+'44;color:'+C.emerald+';font-size:13px;font-weight:700">📞 Contact</button>'
                +'<button data-id="complete:'+b.id+'" style="flex:1;padding:11px;border-radius:12px;background:'+C.gold+'18;border:1.5px solid '+C.gold+'44;color:'+C.gold+';font-size:13px;font-weight:700">✓ Mark Done</button>'
              +'</div>'
            +'</div>':'')
          +'</div>';
        }).join(''))
    +'</div>';
  } else if (tab === 'wallet') {
    var txns = [
      {id:1,label:'Payment — Fadumo Hassan',amount:-15,date:'Today',icon:'⬆️',type:'out'},
      {id:2,label:'Referral Bonus',amount:10,date:'Yesterday',icon:'🎁',type:'in'},
      {id:3,label:'Top Up via EVC Plus',amount:50,date:'Dec 5',icon:'⬇️',type:'in'},
      {id:4,label:'Payment — Dalmar Jama',amount:-8,date:'Dec 4',icon:'⬆️',type:'out'},
      {id:5,label:'Cashback Reward',amount:2.5,date:'Dec 3',icon:'💫',type:'in'},
      {id:6,label:'Escrow Hold',amount:-60,date:'Dec 1',icon:'🔒',type:'out'},
    ];
    var wTab = st.wTab || 'all';
    var wList = wTab==='all'?txns:txns.filter(function(t){return t.type===wTab;});
    tabContent = '<div class="fadeUp" style="padding:20px">'
      +'<div style="background:linear-gradient(135deg,'+C.gold+'22,'+C.navyCard+');border:1px solid '+C.gold+'33;border-radius:24px;padding:24px;margin-bottom:18px;text-align:center">'
        +'<div style="font-size:12px;color:'+C.muted+';margin-bottom:4px">Available Balance</div>'
        +'<div style="font-size:42px;font-weight:900;color:'+C.gold+';font-family:Georgia,serif">$247.50</div>'
        +'<div style="font-size:11px;color:'+C.muted+';margin-top:4px">🔒 $60.00 in escrow</div>'
        +'<div style="display:flex;gap:8px;margin-top:16px">'
          +[['⬆️','Top Up',true],['⬇️','Withdraw',false],['📤','Send',false],['💱','Exchange',false]].map(function(arr){
            return '<button style="flex:1;padding:9px 0;border-radius:12px;background:'+(arr[2]?C.gold:C.navyLight)+';border:1px solid '+(arr[2]?C.gold:C.border)+';color:'+(arr[2]?'#000':C.white)+';font-size:11px;font-weight:700">'+arr[0]+'<br>'+arr[1]+'</button>';
          }).join('')
        +'</div>'
      +'</div>'
      +'<div style="display:flex;gap:8px;margin-bottom:14px;background:'+C.navyCard+';border-radius:12px;padding:4px">'
        +[['all','All'],['in','In'],['out','Out']].map(function(arr){
          return '<button data-id="wtab:'+arr[0]+'" style="flex:1;padding:8px;border-radius:9px;border:none;background:'+(wTab===arr[0]?C.gold:'transparent')+';color:'+(wTab===arr[0]?'#000':C.muted)+';font-size:12px;font-weight:700">'+arr[1]+'</button>';
        }).join('')
      +'</div>'
      +wList.map(function(t){
        return '<div style="display:flex;align-items:center;padding:11px 0;border-bottom:1px solid '+C.border+'">'
          +'<div style="width:36px;height:36px;border-radius:11px;font-size:18px;background:'+(t.type==='in'?C.emerald:C.red)+'20;display:flex;align-items:center;justify-content:center;margin-right:12px">'+t.icon+'</div>'
          +'<div style="flex:1"><div style="font-size:13px;font-weight:600">'+esc(t.label)+'</div><div style="font-size:11px;color:'+C.muted+'">'+esc(t.date)+'</div></div>'
          +'<div style="font-size:15px;font-weight:700;color:'+(t.type==='in'?C.emerald:C.red)+'">'+(t.type==='in'?'+':'')+t.amount.toFixed(2)+'</div>'
        +'</div>';
      }).join('')
    +'</div>';
  } else if (tab === 'profile') {
    var pLang = st.pLang || 'EN';
    var pNotifs = st.pNotifs || {bookings:true,chat:true,promo:false};
    tabContent = '<div class="fadeUp" style="padding:20px">'
      +'<div style="text-align:center;margin-bottom:22px">'
        +'<div style="width:88px;height:88px;border-radius:28px;background:'+C.gold+'33;border:2px solid '+C.gold+'55;margin:0 auto 12px;display:flex;align-items:center;justify-content:center;font-size:42px">🧑‍💼</div>'
        +'<div style="font-size:21px;font-weight:800">Ahmed Mohamed</div>'
        +'<div style="font-size:13px;color:'+C.muted+'">Customer Account</div>'
        +'<div style="display:inline-flex;gap:20px;margin-top:12px;background:'+C.navyCard+';border-radius:14px;padding:9px 22px">'
          +[['📋','34','Bookings'],['⭐','4.8','Rating'],['👥','2','Referrals']].map(function(a){
            return '<div style="text-align:center"><div style="font-size:14px;font-weight:800;color:'+C.gold+'">'+a[0]+' '+a[1]+'</div><div style="font-size:9px;color:'+C.muted+'">'+a[2]+'</div></div>';
          }).join('')
        +'</div>'
      +'</div>'
      +'<div style="background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:16px;overflow:hidden;margin-bottom:12px">'
        +'<div style="padding:14px 16px;border-bottom:1px solid '+C.border+'">'
          +'<div style="font-size:11px;color:'+C.muted+';margin-bottom:8px;font-weight:700">🌍 Language</div>'
          +'<div style="display:flex;gap:5px">'
            +['SO','EN','AR','SW','AM'].map(function(l){
              return '<button data-id="lang:'+l+'" style="flex:1;padding:7px 0;border-radius:10px;font-size:12px;font-weight:700;border:1px solid '+(pLang===l?C.gold:C.border)+';background:'+(pLang===l?C.gold+'22':C.navyLight)+';color:'+(pLang===l?C.gold:C.muted)+'">'+l+'</button>';
            }).join('')
          +'</div>'
        +'</div>'
        +'<div style="padding:14px 16px;border-bottom:1px solid '+C.border+'">'
          +'<div style="font-size:11px;color:'+C.muted+';margin-bottom:8px;font-weight:700">🔔 Notifications</div>'
          +[['bookings','📋 Booking updates'],['chat','💬 Chat messages'],['promo','🎉 Promotions']].map(function(arr){
            var v = pNotifs[arr[0]];
            return '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">'
              +'<span style="font-size:13px">'+arr[1]+'</span>'
              +'<button data-id="notif:'+arr[0]+'" style="width:46px;height:25px;border-radius:13px;background:'+(v?C.gold:C.navyLight)+';border:1.5px solid '+(v?C.gold:C.border)+';position:relative;flex-shrink:0;padding:0"><div style="width:19px;height:19px;border-radius:50%;background:'+(v?'#000':C.muted)+';position:absolute;top:2px;left:'+(v?'23px':'2px')+'"></div></button>'
            +'</div>';
          }).join('')
        +'</div>'
        +['👤 Edit Profile','🛡️ Safety & Trust Center','📞 Help & Support','⭐ Rate the App','📄 Terms & Privacy'].map(function(item){
          return '<div style="display:flex;align-items:center;padding:13px 16px;border-bottom:1px solid '+C.border+';cursor:pointer"><span style="font-size:19px;margin-right:13px">'+item.split(' ')[0]+'</span><span style="font-size:14px;font-weight:600;flex:1">'+item.slice(item.indexOf(' ')+1)+'</span><span style="color:'+C.muted+'">›</span></div>';
        }).join('')
      +'</div>'
      +gBtn('logout','🚪 Log Out')
      +'<div style="text-align:center;margin-top:14px;font-size:11px;color:'+C.muted+'">Shaqaale Pro v4.0 · East Africa</div>'
    +'</div>';
  }

  return '<div style="height:100%;background:'+C.navy+';display:flex;flex-direction:column">'
    +'<div style="background:'+C.navyMid+';padding:14px 20px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0">'
      +'<div><div style="font-size:11px;color:'+C.muted+'">Good day 👋</div><div style="font-size:20px;font-weight:800">Find Workers</div></div>'
      +'<div style="display:flex;gap:8px">'
        +'<button style="width:38px;height:38px;border-radius:12px;background:'+C.gold+'22;border:none;font-size:18px">🔔</button>'
        +'<button style="width:38px;height:38px;border-radius:12px;background:'+C.red+'22;border:none;font-size:18px">🆘</button>'
      +'</div>'
    +'</div>'
    +'<div style="flex:1;overflow-y:auto">'+tabContent+'</div>'
    +navBar(NAV, tab)
  +'</div>';
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  SECTION: SCREEN_WHOME  (Worker Dashboard)                  ║
// ║  Edit: 4 tabs — home · jobs · wallet · profile              ║
// ╚══════════════════════════════════════════════════════════════╝
function renderWorkerDashboard(st) {
  var tab = st.wdTab || 'home';
  var online = st.wdOnline !== false;
  var wForm = st.wForm || {};
  var wName = (wForm.fname&&wForm.lname) ? wForm.fname+' '+wForm.lname : (wForm.name||'Worker');

  // ── Live wallet calculations from real bookings ───────────────
  var allBookings = st.bookings || [];
  // Worker receives bookings from customers — filter by worker's name or all if demo
  var myJobs = allBookings; // In production: filter by worker id

  // wTxns — all wallet transactions
  var wTxns = st.wTxns || [];

  // Add escrow entries from confirmed bookings (5% fee deducted)
  var escrowIds = wTxns.filter(function(t){return t.escrow;}).map(function(t){return t.bookingId;});
  myJobs.forEach(function(b){
    if (b.status==='confirmed' && escrowIds.indexOf(b.id)<0) {
      var gross = b.amount||0;
      var fee   = Math.round(gross*0.05*100)/100;
      var net   = Math.round((gross-fee)*100)/100;
      wTxns = [{id:b.id,bookingId:b.id,label:'Escrow — '+esc(b.svc||'Job'),gross:gross,fee:fee,net:net,date:b.date||'Today',type:'in',escrow:true,wName:b.wName||''}].concat(wTxns.filter(function(t){return t.bookingId!==b.id;}));
    }
    if (b.status==='completed') {
      // Release escrow — mark as available
      wTxns = wTxns.map(function(t){return (t.bookingId===b.id&&t.escrow)?Object.assign({},t,{escrow:false,label:'Payment — '+esc(b.svc||'Job')}):t;});
    }
  });

  // Balance calculations
  var earned    = wTxns.filter(function(t){return t.type==='in'&&!t.escrow;}).reduce(function(s,t){return s+t.net;},0);
  var inEscrow  = wTxns.filter(function(t){return t.type==='in'&&t.escrow;}).reduce(function(s,t){return s+t.net;},0);
  var withdrawn = wTxns.filter(function(t){return t.type==='out';}).reduce(function(s,t){return s+t.net;},0);
  var available = Math.max(0, earned - withdrawn);

  var NAV = [{id:'home',icon:'&#127968;',label:'Home'},{id:'jobs',icon:'&#128203;',label:'Jobs'},{id:'wallet',icon:'&#128176;',label:'Wallet'},{id:'profile',icon:'&#128100;',label:'Profile'}];
  var wWalletTab = st.wWalletTab || 'all';
  var tabContent = '';

  if (tab === 'home') {
    tabContent = '<div class="fadeUp" style="padding:20px">'
      +'<div style="background:linear-gradient(135deg,#0a1e14,#0f2318);border:1.5px solid '+C.emerald+'55;border-radius:22px;padding:20px;margin-bottom:18px">'
        +'<div style="display:flex;align-items:center;gap:14px;margin-bottom:16px">'
          +'<div style="width:56px;height:56px;border-radius:18px;overflow:hidden;border:2px solid '+C.emerald+'55;flex-shrink:0">'
            +(wForm.avatar?'<img src="'+wForm.avatar+'" style="width:100%;height:100%;object-fit:cover">':'<div style="width:100%;height:100%;background:'+C.emerald+'33;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:800;color:'+C.emerald+'">'+esc(wName.charAt(0))+'</div>')
          +'</div>'
          +'<div style="flex:1">'
            +'<div style="font-size:18px;font-weight:800">'+esc(wName)+'</div>'
            +'<div style="font-size:13px;color:'+C.emerald+';margin-top:2px">'+esc(wForm.cat||'Professional Worker')+'</div>'
          +'</div>'
          +'<button data-id="wd:toggle" style="background:'+(online?C.emerald+'20':C.muted+'20')+';border:1px solid '+(online?C.emerald:C.muted)+'44;border-radius:20px;padding:7px 14px;font-size:12px;font-weight:700;color:'+(online?C.emerald:C.muted)+'">'+(online?'&#9679; Online':'&#9675; Offline')+'</button>'
        +'</div>'
        +'<div style="display:flex;border-top:1px solid '+C.emerald+'22;padding-top:14px">'
          +[['&#128176;','$'+available.toFixed(0),'Available'],['&#128274;','$'+inEscrow.toFixed(0),'In Escrow'],['&#9989;',myJobs.length,'Jobs']].map(function(a,i){
            return '<div style="flex:1;text-align:center'+(i<2?';border-right:1px solid '+C.emerald+'22':'')+'"><div style="font-size:16px;font-weight:900;color:'+C.emerald+'">'+a[0]+' '+a[1]+'</div><div style="font-size:10px;color:'+C.muted+';margin-top:2px">'+a[2]+'</div></div>';
          }).join('')
        +'</div>'
      +'</div>'
      +(!online?'<div style="background:'+C.orange+'15;border:1px solid '+C.orange+'33;border-radius:14px;padding:14px;margin-bottom:16px;text-align:center"><div style="font-size:13px;font-weight:700;color:'+C.orange+'">&#9888;&#65039; You are offline</div><div style="font-size:12px;color:'+C.muted+';margin-top:4px">Go online to receive bookings</div></div>':'')
      +'<div style="font-size:15px;font-weight:700;margin-bottom:12px">Active Jobs</div>'
      +(myJobs.filter(function(b){return b.status==='confirmed';}).length===0
        ?'<div style="text-align:center;padding:32px;background:'+C.navyCard+';border-radius:16px;color:'+C.muted+'">'+(online?'No active jobs. Stay online to receive bookings!':'Go online to receive bookings')+'</div>'
        :myJobs.filter(function(b){return b.status==='confirmed';}).map(function(b){
          var gross=b.amount||0,fee=Math.round(gross*.05*100)/100,net=Math.round((gross-fee)*100)/100;
          return '<div class="card" style="margin-bottom:10px">'
            +'<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">'
              +'<div class="row"><div style="width:36px;height:36px;border-radius:11px;background:'+(b.wCol||C.gold)+'33;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;color:'+(b.wCol||C.gold)+'">'+esc(b.wAv||'C')+'</div><div><div style="font-size:14px;font-weight:700">'+esc(b.wName||'Customer')+'</div><div style="font-size:12px;color:'+C.muted+'">'+esc(b.svc)+'</div></div></div>'
              +'<span style="background:'+C.blue+'20;color:'+C.blue+';font-size:11px;font-weight:700;border-radius:8px;padding:3px 9px">&#128274; Escrow</span>'
            +'</div>'
            +'<div style="display:flex;justify-content:space-between;font-size:12px;color:'+C.muted+';margin-bottom:10px"><span>&#128197; '+esc(b.date||'')+'</span><span style="color:'+C.emerald+';font-weight:700">Net: $'+net.toFixed(2)+'<span style="color:'+C.muted+';font-weight:400"> (after 5% fee)</span></span></div>'
            +'<div style="background:'+C.orange+'12;border:1px solid '+C.orange+'22;border-radius:10px;padding:10px;font-size:12px;color:'+C.muted+'">&#128274; Payment held in escrow. Released when customer marks job complete.</div>'
          +'</div>';
        }).join(''))
    +'</div>';

  } else if (tab === 'jobs') {
    var allJobs2 = myJobs;
    tabContent = '<div class="fadeUp" style="padding:20px">'
      +'<div style="font-size:18px;font-weight:800;margin-bottom:16px">All Jobs</div>'
      +(allJobs2.length===0
        ?'<div style="text-align:center;padding:44px;color:'+C.muted+'"><div style="font-size:48px;margin-bottom:12px">&#128203;</div><div style="font-size:15px">No jobs yet</div></div>'
        :allJobs2.map(function(b){
          var done=b.status==='completed';
          var gross=b.amount||0,fee=Math.round(gross*.05*100)/100,net=Math.round((gross-fee)*100)/100;
          return '<div class="card" style="margin-bottom:10px">'
            +'<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px">'
              +'<div class="row"><div style="width:36px;height:36px;border-radius:11px;background:'+(b.wCol||C.gold)+'33;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;color:'+(b.wCol||C.gold)+'">'+esc(b.wAv||'C')+'</div><div><div style="font-size:14px;font-weight:700">'+esc(b.wName||'Customer')+'</div><div style="font-size:12px;color:'+C.muted+'">'+esc(b.svc)+'</div></div></div>'
              +'<span style="background:'+(done?C.emerald:C.blue)+'20;color:'+(done?C.emerald:C.blue)+';font-size:11px;font-weight:700;border-radius:8px;padding:3px 9px">'+(done?'&#9989; Done':'&#128274; Active')+'</span>'
            +'</div>'
            +'<div style="display:flex;justify-content:space-between;font-size:12px;color:'+C.muted+'"><span>&#128197; '+esc(b.date||'')+'</span><span style="color:'+(done?C.emerald:C.orange)+';font-weight:700">$'+net.toFixed(2)+' net</span></div>'
          +'</div>';
        }).join(''))
    +'</div>';

  } else if (tab === 'wallet') {
    var filteredTxns = wWalletTab==='all' ? wTxns
      : wWalletTab==='received' ? wTxns.filter(function(t){return t.type==='in'&&!t.escrow;})
      : wWalletTab==='escrow'   ? wTxns.filter(function(t){return t.escrow;})
      : wTxns.filter(function(t){return t.type==='out';});

    tabContent = '<div class="fadeUp" style="padding:20px">'
      // Balance card
      +'<div style="background:linear-gradient(135deg,#0a1e14,#0f2318);border:1.5px solid '+C.emerald+'33;border-radius:24px;padding:22px;margin-bottom:16px">'
        +'<div style="font-size:12px;color:'+C.muted+';margin-bottom:4px">Available Balance</div>'
        +'<div style="font-size:44px;font-weight:900;color:'+C.emerald+'">$'+available.toFixed(2)+'</div>'
        +'<div style="display:flex;gap:16px;margin-top:12px;padding-top:12px;border-top:1px solid '+C.emerald+'22">'
          +'<div><div style="font-size:11px;color:'+C.muted+'">In Escrow</div><div style="font-size:15px;font-weight:700;color:'+C.orange+'">$'+inEscrow.toFixed(2)+'</div></div>'
          +'<div><div style="font-size:11px;color:'+C.muted+'">Total Earned</div><div style="font-size:15px;font-weight:700">$'+earned.toFixed(2)+'</div></div>'
          +'<div><div style="font-size:11px;color:'+C.muted+'">Withdrawn</div><div style="font-size:15px;font-weight:700">$'+withdrawn.toFixed(2)+'</div></div>'
        +'</div>'
      +'</div>'
      // Action buttons
      +'<div style="display:flex;gap:10px;margin-bottom:18px">'
        +'<button onclick="window._workerWithdraw();" style="flex:1;padding:15px;border-radius:14px;background:'+(available>0?C.emerald+'22':C.navyLight)+';border:1.5px solid '+(available>0?C.emerald:C.border)+';color:'+(available>0?C.emerald:C.muted)+';font-size:14px;font-weight:700;cursor:'+(available>0?'pointer':'default')+'">&#8595; Withdraw</button>'
        +'<button onclick="window._workerTransfer();" style="flex:1;padding:15px;border-radius:14px;background:'+(available>0?C.navyLight:C.navyLight)+';border:1.5px solid '+(available>0?C.border:C.border)+';color:'+(available>0?C.white:C.muted)+';font-size:14px;font-weight:700;cursor:'+(available>0?'pointer':'default')+'">&#8599; Send</button>'
      +'</div>'
      // Escrow info
      +(inEscrow>0?'<div style="background:'+C.orange+'12;border:1px solid '+C.orange+'33;border-radius:14px;padding:14px;margin-bottom:16px;display:flex;align-items:flex-start;gap:10px"><span style="font-size:18px">&#128274;</span><div><div style="font-size:13px;font-weight:700;color:'+C.orange+';margin-bottom:2px">$'+inEscrow.toFixed(2)+' in Escrow</div><div style="font-size:12px;color:'+C.muted+'">Released automatically when customer marks job complete.</div></div></div>':'')
      // Tabs
      +'<div style="display:flex;gap:4px;background:'+C.navyCard+';border-radius:12px;padding:4px;margin-bottom:14px">'
        +[['all','All'],['received','Received'],['escrow','Escrow'],['withdrawn','Withdrawn']].map(function(arr){
          var a=wWalletTab===arr[0];
          return '<button data-id="wwallet:'+arr[0]+'" style="flex:1;padding:8px 2px;border-radius:9px;font-size:11px;font-weight:700;background:'+(a?C.emerald:'transparent')+';color:'+(a?'#000':C.muted)+';border:none">'+arr[1]+'</button>';
        }).join('')
      +'</div>'
      // Transactions
      +(filteredTxns.length===0
        ?'<div style="text-align:center;padding:32px;color:'+C.muted+'">No transactions yet</div>'
        :filteredTxns.map(function(t){
          var isIn=t.type==='in';
          var col=t.escrow?C.orange:isIn?C.emerald:C.red;
          var icon=t.escrow?'&#128274;':isIn?'&#8595;':'&#8593;';
          return '<div style="display:flex;align-items:center;gap:12px;padding:13px 0;border-bottom:1px solid '+C.border+'">'
            +'<div style="width:42px;height:42px;border-radius:13px;background:'+col+'18;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">'+icon+'</div>'
            +'<div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(t.label)+'</div><div style="font-size:12px;color:'+C.muted+'">'+esc(t.date||'')+(t.escrow?' · Held in escrow':t.fee?' · Fee: $'+t.fee:'')+'</div></div>'
            +'<div style="text-align:right;flex-shrink:0"><div style="font-size:15px;font-weight:800;color:'+col+'">'+(isIn?'+':'-')+'$'+t.net.toFixed(2)+'</div>'+(t.escrow?'<div style="font-size:10px;color:'+C.orange+'">Pending</div>':'')+'</div>'
          +'</div>';
        }).join(''))
    +'</div>';

  } else if (tab === 'profile') {
    var wf2=st.wForm||{};
    var wName2=(wf2.fname&&wf2.lname)?wf2.fname+' '+wf2.lname:(wf2.name||'Worker');
    var wCat2=wf2.cat||'Professional';
    var wLoc2=wf2.district?wf2.district+(wf2.region?', '+wf2.region:''):'Location not set';
    var wPhone2=(wf2.wcc||'+252')+' '+(wf2.phone||'—');
    var wRate2=wf2.price?'$'+wf2.price+(wf2.unit||'/hr'):'Not set';
    var wIdLabel={national_id:'National ID',passport:'Passport',driving_lic:'Driving License',refugee_card:'Refugee Card',no_id:'Not submitted'}[wf2.idType]||'Not submitted';
    var wIdOk=!!(wf2.idType&&wf2.idType!=='no_id')&&(!st.user||st.user.verification==='approved'||!st.user.verification);
    var pLang2=st.appLang||'EN';
    var pNotifs2=st.pNotifs||{bookings:true,chat:true,promo:false};
    tabContent='<div style="padding:20px">'
      +'<div style="background:linear-gradient(135deg,#0a1e14,#0f2318);border:1.5px solid '+C.emerald+'44;border-radius:22px;padding:20px;margin-bottom:14px">'
        +'<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">'
          +'<div style="width:68px;height:68px;border-radius:20px;overflow:hidden;border:2px solid '+C.emerald+'55;flex-shrink:0">'
            +(wf2.avatar?'<img src="'+wf2.avatar+'" style="width:100%;height:100%;object-fit:cover">':'<div style="width:100%;height:100%;background:'+C.emerald+'33;display:flex;align-items:center;justify-content:center;font-size:30px;font-weight:800;color:'+C.emerald+'">'+esc(wName2.charAt(0))+'</div>')
          +'</div>'
          +'<div style="flex:1"><div style="font-size:20px;font-weight:800">'+esc(wName2)+'</div>'
            +'<div style="font-size:14px;color:'+C.emerald+';margin-top:2px">'+esc(wCat2)+'</div>'
            +'<div style="font-size:13px;color:'+C.muted+';margin-top:2px">&#128205; '+esc(wLoc2)+'</div>'
          +'</div>'
        +'</div>'
        +'<div style="display:flex;border-top:1px solid '+C.emerald+'22;padding-top:14px">'
          +[['&#128176;','$'+available.toFixed(0),'Balance'],['&#9989;',myJobs.length,'Jobs'],['&#11088;','4.9','Rating']].map(function(a,i){return '<div style="flex:1;text-align:center'+(i<2?';border-right:1px solid '+C.emerald+'22':'')+'"><div style="font-size:16px;font-weight:900;color:'+C.emerald+'">'+a[0]+' '+a[1]+'</div><div style="font-size:10px;color:'+C.muted+';margin-top:2px">'+a[2]+'</div></div>';}).join('')
        +'</div>'
      +'</div>'
      +'<div style="background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:16px;overflow:hidden;margin-bottom:12px">'
        +'<div style="padding:14px 16px;border-bottom:1px solid '+C.border+'"><div style="font-size:12px;color:'+C.muted+';font-weight:700;letter-spacing:.5px">VERIFICATION STATUS</div></div>'
        +[['&#128242;','Phone',wPhone2,true],['&#128205;','Location',wLoc2,!!(wf2.country)],['&#128274;','Identity',wIdLabel,wIdOk],['&#128295;','Service',wCat2,!!(wf2.cat)],['&#128176;','Rate',wRate2,!!(wf2.price)]].map(function(r){var ok=r[3];return '<div style="display:flex;align-items:center;gap:10px;padding:11px 16px;border-bottom:1px solid '+C.border+'"><span style="font-size:20px;flex-shrink:0">'+r[0]+'</span><div style="flex:1"><div style="font-size:12px;color:'+C.muted+'">'+r[1]+'</div><div style="font-size:14px;font-weight:600">'+esc(r[2])+'</div></div><span style="font-size:11px;font-weight:700;padding:3px 9px;border-radius:8px;background:'+(ok?C.emerald:C.orange)+'15;color:'+(ok?C.emerald:C.orange)+'">'+(ok?'&#10003; Done':'&#9203; Pending')+'</span></div>';}).join('')
      +'</div>'
      +'<div style="background:'+C.navyCard+';border:1px solid '+C.border+';border-radius:16px;overflow:hidden;margin-bottom:12px">'
        +'<div style="padding:14px 16px;border-bottom:1px solid '+C.border+'">'
          +'<div style="font-size:12px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:10px">&#127757; LANGUAGE</div>'
          +'<div style="display:flex;gap:5px">'+['SO','EN','AR','SW'].map(function(l){var s=pLang2===l;return '<button data-id="lang:switch:'+l+'" style="flex:1;padding:10px 0;border-radius:10px;font-size:13px;font-weight:700;border:1.5px solid '+(s?C.emerald:C.border)+';background:'+(s?C.emerald+'22':'transparent')+';color:'+(s?C.emerald:C.muted)+'">'+l+'</button>';}).join('')+'</div>'
        +'</div>'
        +'<div style="padding:14px 16px;border-bottom:1px solid '+C.border+'">'
          +'<div style="font-size:12px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:12px">&#128276; NOTIFICATIONS</div>'
          +[['bookings','Job Updates'],['chat','Chat Messages'],['promo','Promotions']].map(function(n){return '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px"><span style="font-size:15px">'+n[1]+'</span>'+toggler(pNotifs2[n[0]],'notif:'+n[0])+'</div>';}).join('')
        +'</div>'
        +[['&#9999;&#65039;','Edit Profile','edit:profile'],['&#128737;&#65039;','Safety & Trust','go:safety'],['&#128222;','Help & Support','go:help'],['&#11088;','Rate the App','open:rateApp'],['&#128196;','Terms & Privacy','go:terms']].map(function(m){return '<div data-id="'+m[2]+'" style="display:flex;align-items:center;padding:15px 16px;border-bottom:1px solid '+C.border+';cursor:pointer"><span style="font-size:22px;margin-right:13px">'+m[0]+'</span><span style="font-size:15px;font-weight:600;flex:1">'+m[1]+'</span><span style="color:'+C.muted+'">&#8250;</span></div>';}).join('')
      +'</div>'
      +'<button data-id="logout" style="width:100%;padding:15px;border-radius:14px;background:'+C.red+'15;border:1.5px solid '+C.red+'33;color:'+C.red+';font-size:16px;font-weight:700;cursor:pointer;margin-bottom:8px">&#128680; Log Out</button>'
      +'<div style="text-align:center;font-size:12px;color:'+C.muted+';padding-bottom:8px">Shaqaale Pro v4.0 &middot; East Africa</div>'
    +'</div>';
  }

  var wfName = (wForm.fname&&wForm.lname)?wForm.fname+' '+wForm.lname:(wForm.name||'Worker');
  return '<div style="height:100%;background:'+C.navy+';display:flex;flex-direction:column">'
    +'<div style="background:'+C.navyMid+';padding:14px 20px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0">'
      +'<div><div style="font-size:11px;color:'+C.muted+'">Worker Dashboard</div><div style="font-size:18px;font-weight:800">'+esc(wfName)+'</div></div>'
      +'<div style="display:flex;gap:8px;align-items:center">'
        +'<button data-id="wd:toggle" style="background:'+(online?C.emerald+'20':C.muted+'20')+';border:1px solid '+(online?C.emerald:C.muted)+'44;border-radius:20px;padding:5px 12px;font-size:12px;font-weight:700;color:'+(online?C.emerald:C.muted)+'">'+(online?'&#9679; Online':'&#9675; Offline')+'</button>'
      +'</div>'
    +'</div>'
    +(function(){var vu=st.user||{};if(vu.role!=='worker'||!vu.verification||vu.verification==='approved')return '';var rej=vu.verification==='rejected';var bc=rej?C.red:C.orange;return '<div style="margin:12px 20px 0;padding:14px 16px;border-radius:16px;background:'+bc+'15;border:1.5px solid '+bc+'44"><div style="font-size:15px;font-weight:800;color:'+bc+';margin-bottom:4px">'+(rej?'&#10060; Verification rejected':'&#9203; Verification pending')+'</div><div style="font-size:13px;color:'+C.muted+';line-height:1.5">'+(rej?esc(vu.verifyNote||'Your documents were not accepted.')+' Fix the documents below and upload them again.':'We are reviewing your documents. You will appear to customers and be able to receive jobs and withdraw once approved.')+'</div>'+(function(){var dm={};(st.wDocs||[]).forEach(function(d){dm[d.kind]=d;});return '<div style="margin-top:12px">'+[['id_front','ID photo (front)'],['id_back','ID photo (back)'],['selfie','Selfie holding your ID'],['certificate','Certificate / licence']].map(function(k){var d=dm[k[0]];return docTile(k[0],k[1],null,false,true,d&&d.status,d&&d.note);}).join('')+'</div>';})()+'</div>';})()
    +'<div style="flex:1;overflow-y:auto">'+tabContent+'</div>'
    +navBar(NAV, tab, C.emerald)
  +'</div>';
}

// ─────────────────────────────────────────────────────────────
// MAIN RENDER// ─────────────────────────────────────────────────────────────
// ╔══════════════════════════════════════════════════════════════╗
// ║  SECTION: SCREEN_EDIT_PROFILE                               ║
// ║  Edit: avatar upload, personal info, location, skills/pay   ║
// ╚══════════════════════════════════════════════════════════════╝
function renderEditProfile(st) {
  var role = st.editRole || 'customer';
  var form = st.epForm || {};
  var tab  = st.epTab  || 'personal';
  var saved = st.epSaved || false;
  var avatarPreview = st.epAvatar || '';

  // ── avatar helper ────────────────────────────────────────────
  function avatarCircle(src, name, col, size) {
    size = size || 96;
    var br = Math.round(size * 0.3);
    if (src) {
      return '<div style="width:'+size+'px;height:'+size+'px;border-radius:'+br+'px;overflow:hidden;flex-shrink:0;border:3px solid '+(role==='worker'?C.emerald:C.gold)+'">'
        +'<img src="'+src+'" style="width:100%;height:100%;object-fit:cover">'
        +'</div>';
    }
    return '<div style="width:'+size+'px;height:'+size+'px;border-radius:'+br+'px;background:'+(col||C.gold)+'33;border:3px solid '+(col||C.gold)+'55;display:flex;align-items:center;justify-content:center;font-size:'+Math.round(size*0.42)+'px;font-weight:800;color:'+(col||C.gold)+';flex-shrink:0">'
      +esc(String(name||'?').charAt(0).toUpperCase())
      +'</div>';
  }

  var accent = role === 'worker' ? C.emerald : C.gold;
  var wf = st.wForm || {};
  var cf = st.cForm || {};
  var currentName = role==='worker'
    ? ((wf.fname||'') + ' ' + (wf.lname||'')).trim() || 'Worker'
    : ((cf.fname||'') + ' ' + (cf.lname||'')).trim() || 'Customer';
  var currentCol  = role==='worker' ? C.emerald : C.gold;

  // ── saved confirmation ────────────────────────────────────────
  if (saved) {
    return '<div style="height:100%;background:'+C.navy+';display:flex;flex-direction:column">'
      +hdr('Edit Profile','','ep:close','✏️')
      +'<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px">'
        +'<div class="pop" style="font-size:80px;margin-bottom:18px">✅</div>'
        +'<div style="font-size:24px;font-weight:800;color:'+accent+';margin-bottom:8px">Profile Saved!</div>'
        +'<div style="font-size:14px;color:'+C.muted+';margin-bottom:32px;text-align:center">Your changes are live and visible to everyone</div>'
        +'<button data-id="ep:close" style="width:100%;padding:17px;border-radius:16px;background:'+accent+';color:#000;font-size:17px;font-weight:800">Done</button>'
      +'</div>'
    +'</div>';
  }

  // ── tabs ──────────────────────────────────────────────────────
  var TABS = role==='worker'
    ? [{id:'personal',label:'Personal'},{id:'location',label:'Location'},{id:'skills',label:'Skills'},{id:'pricing',label:'Pricing'}]
    : [{id:'personal',label:'Personal'},{id:'location',label:'Location'},{id:'payment',label:'Payment'}];

  var tabBar = '<div style="display:flex;gap:4px;background:'+C.navyCard+';border-radius:12px;padding:4px;margin-bottom:20px">'
    +TABS.map(function(tb){
      var a = tab===tb.id;
      return '<button data-id="ep:tab:'+tb.id+'" style="flex:1;padding:9px 2px;border-radius:9px;font-size:12px;font-weight:700;background:'+(a?accent:'transparent')+';color:'+(a?'#000':C.muted)+'">'+tb.label+'</button>';
    }).join('')
  +'</div>';

  // ── avatar section ────────────────────────────────────────────
  var avatarSection = '<div style="display:flex;flex-direction:column;align-items:center;margin-bottom:24px">'
    +avatarCircle(avatarPreview, form.fname||currentName.split(' ')[0], currentCol, 96)
    +'<div style="margin-top:12px;position:relative">'
      +'<label style="display:inline-flex;align-items:center;gap:7px;padding:10px 20px;border-radius:22px;background:'+accent+'22;border:1.5px solid '+accent+'55;color:'+accent+';font-size:14px;font-weight:700;cursor:pointer">'
        +'📷 Change Photo'
        +'<input type="file" accept="image/*" onchange="window._epAvatarChange(event)" style="position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%">'
      +'</label>'
    +'</div>'
    +(avatarPreview?'<button data-id="ep:avatar:remove" style="margin-top:8px;font-size:12px;color:'+C.red+';background:none;border:none;cursor:pointer">Remove photo</button>':'')
  +'</div>';

  // ── tab content ───────────────────────────────────────────────
  var tabContent = '';

  if (tab === 'personal') {
    var fname = form.fname !== undefined ? form.fname : (role==='worker'?wf.fname:cf.fname)||'';
    var lname = form.lname !== undefined ? form.lname : (role==='worker'?wf.lname:cf.lname)||'';
    var gender = form.gender !== undefined ? form.gender : (role==='worker'?wf.gender:cf.gender)||'';
    var bio = form.bio !== undefined ? form.bio : wf.bio||'';
    tabContent = avatarSection
      +'<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:9px">FIRST NAME</div>'
      +'<input data-id="ep:fname" type="text" value="'+esc(fname)+'" placeholder="First name" style="width:100%;padding:16px 18px;border-radius:16px;background:'+C.navyLight+';border:2px solid '+(fname?accent:C.border)+';color:'+C.white+';font-size:17px;font-weight:600;outline:none;box-sizing:border-box;margin-bottom:16px">'
      +'<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:9px">LAST NAME</div>'
      +'<input data-id="ep:lname" type="text" value="'+esc(lname)+'" placeholder="Last name" style="width:100%;padding:16px 18px;border-radius:16px;background:'+C.navyLight+';border:2px solid '+(lname?accent:C.border)+';color:'+C.white+';font-size:17px;font-weight:600;outline:none;box-sizing:border-box;margin-bottom:16px">'
      +'<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:9px">GENDER</div>'
      +'<div style="display:flex;gap:8px;margin-bottom:16px">'
        +['Male','Female','Other'].map(function(g){var s=gender===g;return '<div data-id="ep:gender:'+g+'" style="flex:1;padding:14px 4px;border-radius:14px;text-align:center;cursor:pointer;font-size:14px;font-weight:700;border:2px solid '+(s?accent:C.border)+';background:'+(s?accent+'22':'transparent')+';color:'+(s?accent:C.muted)+'">'+g+'</div>';}).join('')
      +'</div>'
      +(role==='worker'
        ?'<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:9px">BIO</div>'
         +'<textarea data-id="ep:bio" placeholder="Tell customers about yourself..." rows="3" style="width:100%;padding:16px 18px;border-radius:16px;background:'+C.navyLight+';border:2px solid '+(bio?accent:C.border)+';color:'+C.white+';font-size:15px;outline:none;box-sizing:border-box;resize:none;font-family:inherit">'+esc(bio)+'</textarea>'
        :'');
  }

  else if (tab === 'location') {
    var country = form.country !== undefined ? form.country : (role==='worker'?wf.country:cf.country)||'';
    var region  = form.region  !== undefined ? form.region  : (role==='worker'?wf.region :cf.region )||'';
    var district= form.district!== undefined ? form.district: (role==='worker'?wf.district:cf.district)||'';
    var geoCountry = GEO[country];
    var geoRegion  = geoCountry && geoCountry.regions[region];
    tabContent = '<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:9px">COUNTRY</div>'
      +'<select onchange="window._fw.setState({epForm:Object.assign({},window._fw.getState().epForm||{},{country:this.value,region:\'\',district:\'\' })});" style="width:100%;padding:15px 18px;border-radius:16px;background:'+C.navyLight+';border:2px solid '+(country?accent:C.border)+';color:'+C.white+';font-size:16px;font-weight:600;appearance:none;-webkit-appearance:none;outline:none;box-sizing:border-box;margin-bottom:16px">'
        +'<option value="">&#127757; Select Country</option>'
        +Object.keys(GEO).map(function(cn){return '<option value="'+cn+'" '+(country===cn?'selected':'')+' style="background:'+C.navyMid+'">'+GEO[cn].flag+' '+cn+'</option>';}).join('')
      +'</select>'
      +(geoCountry
        ?'<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:9px">REGION</div>'
         +'<select onchange="window._fw.setState({epForm:Object.assign({},window._fw.getState().epForm||{},{region:this.value,district:\'\' })});" style="width:100%;padding:15px 18px;border-radius:16px;background:'+C.navyLight+';border:2px solid '+(region?accent:C.border)+';color:'+C.white+';font-size:16px;font-weight:600;appearance:none;-webkit-appearance:none;outline:none;box-sizing:border-box;margin-bottom:16px">'
           +'<option value="">&#128205; Select Region</option>'
           +Object.keys(geoCountry.regions).map(function(r){return '<option value="'+r+'" '+(region===r?'selected':'')+' style="background:'+C.navyMid+'">'+r+'</option>';}).join('')
         +'</select>'
        :'')
      +(geoRegion
        ?'<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:9px">DISTRICT</div>'
         +'<select onchange="window._fw.setState({epForm:Object.assign({},window._fw.getState().epForm||{},{district:this.value})});" style="width:100%;padding:15px 18px;border-radius:16px;background:'+C.navyLight+';border:2px solid '+(district?accent:C.border)+';color:'+C.white+';font-size:16px;font-weight:600;appearance:none;-webkit-appearance:none;outline:none;box-sizing:border-box;margin-bottom:16px">'
           +'<option value="">&#127961; Select District</option>'
           +geoRegion.map(function(d){return '<option value="'+d+'" '+(district===d?'selected':'')+' style="background:'+C.navyMid+'">'+d+'</option>';}).join('')
         +'</select>'
        :'')
      +(country&&region&&district&&GEO[country]
        ?'<div style="background:'+accent+'12;border:1px solid '+accent+'33;border-radius:14px;padding:14px;display:flex;align-items:center;gap:12px"><span style="font-size:22px">&#128205;</span><div><div style="font-size:16px;font-weight:700">'+esc(district)+', '+esc(region)+'</div><div style="font-size:13px;color:'+C.muted+'">'+geoFlag(country)+' '+esc(country)+'</div></div></div>'
        :'');
  }

  else if (tab === 'skills' && role==='worker') {
    var selCat = form.cat !== undefined ? form.cat : wf.cat||'';
    var CAT_ICONS2 = {cleaning:'&#129529;',plumbing:'&#128295;',electrical:'&#9889;',cooking:'&#127859;',beauty:'&#128133;',driver:'&#128663;',delivery:'&#128230;',childcare:'&#128118;',tutoring:'&#128218;',laundry:'&#129543;',painting:'&#127912;',carpentry:'&#128690;',ac:'&#10052;',security:'&#128737;',gardening:'&#127807;',moving:'&#128667;',petcare:'&#128062;',photo:'&#128247;',events:'&#127881;'};
    var CAT_COLORS2 = {cleaning:'#3B82F6',plumbing:'#06B6D4',electrical:'#EAB308',cooking:'#10B981',beauty:'#EC4899',driver:'#8B5CF6',delivery:'#F97316',childcare:'#F43F5E',tutoring:'#6366F1',laundry:'#14B8A6',painting:'#A78BFA',carpentry:'#D97706',ac:'#38BDF8',security:'#64748B',gardening:'#22C55E',moving:'#FB923C',petcare:'#C084FC',photo:'#E879F9',events:'#F472B6'};
    var CATS2 = Object.keys(CAT_ICONS2);
    tabContent = '<div style="font-size:14px;color:'+C.muted+';margin-bottom:16px">Select your main service category</div>'
      +'<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">'
        +CATS2.map(function(id){
          var cl=CAT_COLORS2[id]||C.gold;var sel=selCat===id;
          var label=id.charAt(0).toUpperCase()+id.slice(1).replace(/_/g,' ');
          return '<div data-id="ep:cat:'+id+'" style="background:'+(sel?cl+'18':C.navyCard)+';border:2px solid '+(sel?cl:C.border)+';border-radius:16px;padding:14px 6px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:7px;text-align:center">'
            +'<span style="font-size:26px">'+(CAT_ICONS2[id]||'&#11088;')+'</span>'
            +'<span style="font-size:11px;font-weight:700;color:'+(sel?cl:C.muted)+';line-height:1.3">'+label+'</span>'
            +(sel?'<span style="font-size:10px;color:'+cl+'">&#10003;</span>':'')
          +'</div>';
        }).join('')
      +'</div>';
  }

  else if (tab === 'pricing' && role==='worker') {
    var price = form.price !== undefined ? form.price : wf.price||'';
    var unit  = form.unit  !== undefined ? form.unit  : wf.unit ||'/hr';
    tabContent = '<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:9px">HOURLY RATE ($)</div>'
      +'<input data-id="ep:price" type="text" inputmode="decimal" value="'+esc(String(price))+'" placeholder="e.g. 15" style="width:100%;padding:16px 18px;border-radius:16px;background:'+C.navyLight+';border:2px solid '+(price?accent:C.border)+';color:'+C.white+';font-size:22px;font-weight:800;outline:none;box-sizing:border-box;margin-bottom:16px">'
      +'<div style="font-size:13px;color:'+C.muted+';font-weight:700;letter-spacing:.5px;margin-bottom:9px">UNIT</div>'
      +'<div style="display:flex;gap:8px;margin-bottom:20px">'
        +['/hr','/day','/month','/job','/session'].map(function(u){var s=unit===u;return '<button data-id="ep:unit:'+u+'" style="flex:1;padding:12px 4px;border-radius:12px;font-size:13px;font-weight:700;background:'+(s?accent+'22':C.navyCard)+';border:1.5px solid '+(s?accent:C.border)+';color:'+(s?accent:C.muted)+'">'+u+'</button>';}).join('')
      +'</div>'
      +(price?'<div style="background:'+accent+'12;border:1px solid '+accent+'33;border-radius:14px;padding:16px;text-align:center"><div style="font-size:13px;color:'+C.muted+';margin-bottom:4px">Your Rate</div><div style="font-size:32px;font-weight:900;color:'+accent+'">$'+esc(String(price))+'<span style="font-size:16px;color:'+C.muted+'">'+(unit||'/hr')+'</span></div></div>':'');
  }

  else if (tab === 'payment' && role==='customer') {
    var payMethod = form.payMethod !== undefined ? form.payMethod : cf.payMethod||'';
    var PAY = [{id:'evc',icon:'&#128241;',label:'EVC Plus',sub:'Hormuud Telecom'},{id:'zaad',icon:'&#128241;',label:'Zaad',sub:'Telesom'},{id:'sahal',icon:'&#128241;',label:'Sahal',sub:'Somtel'},{id:'mpesa',icon:'&#128241;',label:'M-Pesa',sub:'Safaricom Kenya'},{id:'cash',icon:'&#128181;',label:'Cash',sub:'Pay worker directly'},{id:'bank',icon:'&#127970;',label:'Bank Transfer',sub:'1-2 business days'}];
    tabContent = '<div style="font-size:14px;color:'+C.muted+';margin-bottom:18px">Default payment method</div>'
      +'<div style="display:flex;flex-direction:column;gap:10px">'
        +Shaq.payList(PAY).map(function(p){var s=payMethod===p.id;return '<div data-id="ep:pay:'+p.id+'" style="display:flex;align-items:center;gap:14px;padding:16px 18px;border-radius:16px;cursor:pointer;background:'+(s?C.gold+'15':C.navyCard)+';border:1.5px solid '+(s?C.gold:C.border)+'">'
          +'<span style="font-size:28px">'+p.icon+'</span>'
          +'<div style="flex:1"><div style="font-size:16px;font-weight:700;color:'+(s?C.white:C.muted)+'">'+p.label+'</div><div style="font-size:13px;color:'+C.muted+'">'+p.sub+'</div></div>'
          +(s?'<div style="width:24px;height:24px;border-radius:50%;background:'+C.gold+';display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:#000">&#10003;</div>':'')
        +'</div>';}).join('')
      +'</div>';
  }

  return '<div style="height:100%;background:'+C.navy+';display:flex;flex-direction:column">'
    +hdr('Edit Profile', role==='worker'?'Worker Profile':'Customer Profile', 'ep:close', '&#9999;&#65039;')
    +'<div style="flex:1;overflow-y:auto;padding:20px">'
      +tabBar
      +'<div class="fadeUp">'+tabContent+'</div>'
    +'</div>'
    +'<div style="padding:14px 22px 26px;flex-shrink:0">'
      +'<button data-id="ep:save" style="width:100%;padding:17px;border-radius:16px;background:'+accent+';color:#000;font-size:17px;font-weight:800">&#10003; Save Changes</button>'
    +'</div>'
  +'</div>';
}

// avatar file reader — runs in browser only
window._epAvatarChange = function(e) {
  var file = e.target.files && e.target.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(ev) {
    S.setState({epAvatar: ev.target.result});
  };
  reader.readAsDataURL(file);
};

// ╔══════════════════════════════════════════════════════════════╗
// ║  SECTION: MODALS  (Withdraw · Transfer · Rating · Toast)    ║
// ║  Edit: modal UI, payment methods, star rating               ║
// ╚══════════════════════════════════════════════════════════════╝
window._workerWithdraw=function(){var st=S.getState();var txns=st.wTxns||[];var earned=txns.filter(function(tx){return tx.type==='in'&&!tx.escrow;}).reduce(function(s,tx){return s+tx.net;},0);var withdrawn=txns.filter(function(tx){return tx.type==='out';}).reduce(function(s,tx){return s+tx.net;},0);var avail=Math.max(0,earned-withdrawn);S.setState({showWithdrawModal:true,withdrawAmt:'',withdrawMethod:((Shaq.payList([],true)[0]||{}).id||'evc'),withdrawAvail:avail});};
window._confirmWithdraw=function(){var st=S.getState();var amt=parseFloat(st.withdrawAmt)||0;if(amt<=0||amt>(st.withdrawAvail||0))return;var mLabel=Shaq.payLabels({evc:'EVC Plus',zaad:'Zaad',sahal:'Sahal',mpesa:'M-Pesa',mtn:'MTN',bank:'Bank'})[st.withdrawMethod]||st.withdrawMethod;var newTx={id:Date.now(),label:'Withdrawal - '+mLabel,gross:amt,fee:0,net:amt,date:'Today',type:'out',escrow:false};S.setState({showWithdrawModal:false});Shaq.payout('withdraw',{amount:amt,method:st.withdrawMethod||'evc'}).then(function(){S.setState({withdrawDone:true,withdrawLastAmt:amt,withdrawLastMethod:mLabel});}).catch(function(e){alert(e.message);});};
window._workerTransfer=function(){var st=S.getState();var txns=st.wTxns||[];var earned=txns.filter(function(tx){return tx.type==='in'&&!tx.escrow;}).reduce(function(s,tx){return s+tx.net;},0);var withdrawn=txns.filter(function(tx){return tx.type==='out';}).reduce(function(s,tx){return s+tx.net;},0);var avail=Math.max(0,earned-withdrawn);S.setState({showTransferModal:true,transferAmt:'',transferPhone:'',transferCC:'+252',transferNote:'',transferAvail:avail});};
window._confirmTransfer=function(){var st=S.getState();var amt=parseFloat(st.transferAmt)||0;var phone=st.transferPhone||'';if(amt<=0||amt>(st.transferAvail||0)||phone.replace(/\D/g,'').length<8)return;var newTx={id:Date.now(),label:'Transfer to '+(st.transferCC||'+252')+phone,gross:amt,fee:0,net:amt,date:'Today',type:'out',escrow:false};S.setState({showTransferModal:false});Shaq.payout('transfer',{amount:amt,phone:Shaq.fullPhone(st.transferCC||'+252',phone)}).then(function(){S.setState({transferDone:true,transferLastAmt:amt,transferLastPhone:(st.transferCC||'+252')+phone});}).catch(function(e){alert(e.message);});};
window._lastRatingVal=0;window._appRatingVal=0;
window._submitRating=function(){var st=S.getState();var v=st.ratingVal||window._lastRatingVal;if(!v)return;if(st.ratingBooking)Shaq.rateBooking(st.ratingBooking.id,v);S.setState({ratingDone:true,ratingVal:v});};
window._submitAppRating=function(){var v=S.getState().appRatingVal||window._appRatingVal;if(!v)return;Shaq.rateApp(v);S.setState({appRatingDone:true,appRatingVal:v});};

function renderWithdrawModal(st){if(!st.showWithdrawModal)return '';var avail=st.withdrawAvail||0,amt=st.withdrawAmt||'',amtNum=parseFloat(amt)||0,method=st.withdrawMethod||'evc';var valid=amtNum>0&&amtNum<=avail&&avail>0;var METHODS=Shaq.payList([{id:'evc',abbr:'EVC'},{id:'zaad',abbr:'ZAAD'},{id:'sahal',abbr:'SAHAL'},{id:'mpesa',abbr:'M-PESA'},{id:'mtn',abbr:'MTN'},{id:'bank',abbr:'BANK'}],true);return '<div style="position:fixed;inset:0;background:rgba(0,0,0,.85);display:flex;align-items:flex-end;justify-content:center;z-index:9999"><div style="background:'+C.navyCard+';border-radius:24px 24px 0 0;width:100%;max-width:430px;padding:20px;max-height:90vh;overflow-y:auto"><div style="font-size:20px;font-weight:800;margin-bottom:6px">Withdraw</div><div style="font-size:15px;color:'+C.muted+';margin-bottom:16px">Available: <span style="color:'+C.emerald+'">$'+avail.toFixed(2)+'</span></div><div style="display:flex;align-items:center;background:'+C.navyLight+';border:2px solid '+(valid?C.emerald:C.border)+';border-radius:16px;padding:14px 18px;margin-bottom:14px"><span style="font-size:22px;color:'+C.muted+';margin-right:8px">$</span><input data-id="withdraw:amt" type="text" inputmode="decimal" value="'+esc(amt)+'" placeholder="0.00" style="flex:1;background:transparent;border:none;color:'+C.white+';font-size:26px;font-weight:800;outline:none;min-width:0"></div><div style="display:flex;gap:6px;margin-bottom:16px">'+[25,50,75,100].map(function(p){var v=p===100?avail:Math.round(avail*p)/100;var lbl=p===100?'Max':p+'%';var sel=amtNum>0&&Math.abs(amtNum-v)<0.01;return '<button data-id="wdraw:q:'+p+'" style="flex:1;padding:10px 0;border-radius:10px;font-size:13px;font-weight:700;border:1.5px solid '+(sel?C.emerald:C.border)+';background:'+(sel?C.emerald+'22':'transparent')+';color:'+(sel?C.emerald:C.muted)+'">'+lbl+'</button>';}).join('')+'</div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:18px">'+METHODS.map(function(m){var sel=method===m.id;return '<button data-id="wdraw:method:'+m.id+'" style="padding:14px 0;border-radius:14px;border:2px solid '+(sel?C.emerald:C.border)+';background:'+(sel?C.emerald+'15':C.navyLight)+';color:'+(sel?C.white:C.muted)+';font-size:13px;font-weight:700;cursor:pointer">'+m.abbr+'</button>';}).join('')+'</div><button onclick="window._confirmWithdraw();" style="width:100%;padding:17px;border-radius:16px;background:'+(valid?C.emerald:C.navyLight)+';color:'+(valid?'#000':C.muted)+';font-size:16px;font-weight:800;border:none;cursor:'+(valid?'pointer':'default')+'">'+(valid?'Withdraw $'+amtNum.toFixed(2):'Enter amount')+'</button><div style="height:10px"></div><button onclick="window._fw.setState({showWithdrawModal:false});" style="width:100%;padding:14px;border-radius:14px;background:transparent;border:1.5px solid '+C.border+';color:'+C.muted+';font-size:15px;font-weight:600;cursor:pointer">Cancel</button></div></div>';}

function renderTransferModal(st){if(!st.showTransferModal)return '';var avail=st.transferAvail||0,amt=st.transferAmt||'',phone=st.transferPhone||'',cc=st.transferCC||'+252';var amtNum=parseFloat(amt)||0;var valid=amtNum>0&&amtNum<=avail&&phone.replace(/\D/g,'').length>=8;var ccOpts=CC.map(function(c){return '<option value="'+c.c+'" '+(cc===c.c?'selected':'')+' style="background:'+C.navyMid+'">'+c.f+' '+c.c+'</option>';}).join('');return '<div style="position:fixed;inset:0;background:rgba(0,0,0,.85);display:flex;align-items:flex-end;justify-content:center;z-index:9999"><div style="background:'+C.navyCard+';border-radius:24px 24px 0 0;width:100%;max-width:430px;padding:20px;max-height:90vh;overflow-y:auto"><div style="font-size:20px;font-weight:800;margin-bottom:16px">Send Money</div><div style="display:flex;border-radius:16px;overflow:hidden;border:2px solid '+(phone.replace(/\D/g,'').length>=8?C.emerald:C.border)+';margin-bottom:14px"><select onchange="window._fw.setState({transferCC:this.value});" style="flex-shrink:0;width:110px;padding:14px 8px 14px 12px;background:'+C.navyLight+';border:none;border-right:2px solid '+C.border+';color:'+C.white+';font-size:14px;font-weight:700;appearance:none;-webkit-appearance:none;outline:none">'+ccOpts+'</select><input data-id="transfer:phone" type="tel" value="'+esc(phone)+'" placeholder="61 1234567" maxlength="10" style="flex:1;padding:14px;background:'+C.navyLight+';border:none;color:'+C.white+';font-size:17px;font-weight:600;outline:none;min-width:0"></div><div style="display:flex;align-items:center;background:'+C.navyLight+';border:2px solid '+(valid?C.emerald:C.border)+';border-radius:16px;padding:14px 18px;margin-bottom:14px"><span style="font-size:22px;color:'+C.muted+';margin-right:8px">$</span><input data-id="transfer:amt" type="text" inputmode="decimal" value="'+esc(amt)+'" placeholder="0.00" style="flex:1;background:transparent;border:none;color:'+C.white+';font-size:26px;font-weight:800;outline:none;min-width:0"></div><button onclick="window._confirmTransfer();" style="width:100%;padding:17px;border-radius:16px;background:'+(valid?C.emerald:C.navyLight)+';color:'+(valid?'#000':C.muted)+';font-size:16px;font-weight:800;border:none;cursor:'+(valid?'pointer':'default')+'">'+(valid?'Send $'+amtNum.toFixed(2)+' to '+cc+' '+phone:'Enter recipient & amount')+'</button><div style="height:10px"></div><button onclick="window._fw.setState({showTransferModal:false});" style="width:100%;padding:14px;border-radius:14px;background:transparent;border:1.5px solid '+C.border+';color:'+C.muted+';font-size:15px;font-weight:600;cursor:pointer">Cancel</button></div></div>';}

function renderToast(st){if(st.withdrawDone){setTimeout(function(){S.setState({withdrawDone:false});},3000);return '<div style="position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:'+C.emerald+';color:#000;padding:16px 24px;border-radius:22px;font-size:15px;font-weight:700;z-index:9998">Sent $'+(st.withdrawLastAmt||0).toFixed(2)+' to '+(st.withdrawLastMethod||'')+'</div>';}if(st.transferDone){setTimeout(function(){S.setState({transferDone:false});},3000);return '<div style="position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:'+C.emerald+';color:#000;padding:16px 24px;border-radius:22px;font-size:15px;font-weight:700;z-index:9998">Sent $'+(st.transferLastAmt||0).toFixed(2)+' to '+(st.transferLastPhone||'')+'</div>';}return '';}

function renderRatingModal(st){var b=st.ratingBooking;if(!b)return '';var sel=st.ratingVal||0;var done=st.ratingDone||false;if(done){return '<div style="position:fixed;inset:0;background:rgba(0,0,0,.75);display:flex;align-items:flex-end;justify-content:center;z-index:9999"><div style="background:'+C.navyCard+';border-radius:24px 24px 0 0;padding:34px 24px;width:100%;max-width:430px;text-align:center"><div style="font-size:64px;margin-bottom:14px">&#127881;</div><div style="font-size:22px;font-weight:800;color:'+C.gold+';margin-bottom:8px">Thank you!</div><button onclick="window._fw.setState({ratingBooking:null,ratingDone:false});" style="width:100%;padding:15px;border-radius:14px;background:'+C.gold+';color:#000;font-size:16px;font-weight:700;border:none;cursor:pointer">Done</button></div></div>';}return '<div style="position:fixed;inset:0;background:rgba(0,0,0,.75);display:flex;align-items:flex-end;justify-content:center;z-index:9999"><div style="background:'+C.navyCard+';border-radius:24px 24px 0 0;padding:30px 24px 34px;width:100%;max-width:430px"><div style="width:40px;height:4px;border-radius:2px;background:'+C.border+';margin:0 auto 22px"></div><div style="font-size:17px;font-weight:700;text-align:center;margin-bottom:8px">How was the job?</div><div style="font-size:14px;color:'+C.muted+';text-align:center;margin-bottom:16px">'+esc(b.wName||'')+'</div><div style="display:flex;justify-content:center;gap:8px;margin-bottom:18px">'+[1,2,3,4,5].map(function(i){return '<button onclick="window._lastRatingVal='+i+';window._fw.setState({ratingVal:'+i+'});" style="font-size:42px;background:none;border:none;cursor:pointer;padding:4px;color:'+(i<=sel?C.gold:'#2a3550')+'">'+(i<=sel?'&#9733;':'&#9734;')+'</button>';}).join('')+'</div><button onclick="window._submitRating();" style="width:100%;padding:15px;border-radius:14px;background:'+(sel>0?C.gold:C.navyLight)+';color:'+(sel>0?'#000':C.muted)+';font-size:16px;font-weight:700;border:none;cursor:'+(sel>0?'pointer':'default')+'">Submit Rating</button><div style="height:10px"></div><button onclick="window._fw.setState({ratingBooking:null});" style="width:100%;padding:13px;border-radius:14px;background:transparent;border:1.5px solid '+C.border+';color:'+C.muted+';font-size:15px;cursor:pointer">Later</button></div></div>';}

function renderAppRatingModal(st){if(!st.showAppRating)return '';var sel=st.appRatingVal||0,done=st.appRatingDone||false;if(done){return '<div style="position:fixed;inset:0;background:rgba(0,0,0,.75);display:flex;align-items:flex-end;justify-content:center;z-index:9999"><div style="background:'+C.navyCard+';border-radius:24px 24px 0 0;padding:34px 24px;width:100%;max-width:430px;text-align:center"><div style="font-size:64px;margin-bottom:14px">&#127881;</div><div style="font-size:22px;font-weight:800;color:'+C.gold+';margin-bottom:8px">Thank you!</div><button onclick="window._fw.setState({showAppRating:false,appRatingDone:false,appRatingVal:0});" style="width:100%;padding:15px;border-radius:14px;background:'+C.gold+';color:#000;font-size:16px;font-weight:700;border:none;cursor:pointer">Done</button></div></div>';}return '<div style="position:fixed;inset:0;background:rgba(0,0,0,.75);display:flex;align-items:flex-end;justify-content:center;z-index:9999"><div style="background:'+C.navyCard+';border-radius:24px 24px 0 0;padding:30px 24px 36px;width:100%;max-width:430px"><div style="text-align:center;margin-bottom:22px"><div style="font-size:36px;margin-bottom:12px">&#128119;</div><div style="font-size:20px;font-weight:800">Rate Shaqaale Pro</div></div><div style="display:flex;justify-content:center;gap:10px;margin-bottom:18px">'+[1,2,3,4,5].map(function(i){return '<button onclick="window._appRatingVal='+i+';window._fw.setState({appRatingVal:'+i+'});" style="font-size:46px;background:none;border:none;cursor:pointer;padding:2px;color:'+(i<=sel?C.gold:'#2a3550')+'">'+(i<=sel?'&#9733;':'&#9734;')+'</button>';}).join('')+'</div><button onclick="window._submitAppRating();" style="width:100%;padding:15px;border-radius:14px;background:'+(sel>0?C.gold:C.navyLight)+';color:'+(sel>0?'#000':C.muted)+';font-size:16px;font-weight:700;border:none;cursor:'+(sel>0?'pointer':'default')+'">Submit</button><div style="height:10px"></div><button onclick="window._fw.setState({showAppRating:false,appRatingVal:0});" style="width:100%;padding:13px;border-radius:14px;background:transparent;border:1.5px solid '+C.border+';color:'+C.muted+';font-size:15px;cursor:pointer">Later</button></div></div>';}

// ╔══════════════════════════════════════════════════════════════╗
// ║  SECTION: RENDER_ROUTER                                     ║
// ║  Edit: screen routing logic only — rarely needs changing    ║
// ╚══════════════════════════════════════════════════════════════╝
function render(st) {
  try {
    var screen = st.screen || 'splash';
    if (screen === 'editProfile') return renderEditProfile(st);
    if (screen === 'splash')  return renderSplash();
    if (screen === 'welcome') return renderWelcome();
    if (screen === 'login')   return renderLogin(st);
    if (screen === 'cReg')    return renderCustomerReg(st);
    if (screen === 'wReg')    return renderWorkerReg(st);
    if (screen === 'chat'    && st.chatWorker) return renderChat(st);
    if (screen === 'booking' && st.bookWorker && st.bookWorker.cat==='Driver Services') return renderDriver(st);
    if (screen === 'booking' && (st.dlStep===99||st.dlOrder)) return renderDeliveryTracking(st);
    if (screen === 'booking' && st.bookWorker && st.bookWorker.cat==='Delivery') return renderDelivery(st);
    if (screen === 'booking' && st.bookWorker) return renderBooking(st);
    if (screen === 'workerProfile' && st.viewWorker) return renderWorkerProfile(st);
    // Overlays on top of home screens
    if (st.chatWorker)  return renderChat(st);
    if (st.bookWorker && st.bookWorker.cat==='Driver Services') return renderDriver(st);
    if (st.dlStep===99 || st.dlOrder) return renderDeliveryTracking(st);
    if (st.bookWorker && st.bookWorker.cat==='Delivery') return renderDelivery(st);
    if (st.bookWorker)  return renderBooking(st);
    if (st.viewWorker)  return renderWorkerProfile(st);
    if (screen === 'cHome') return renderCustomerHome(st)+renderRatingModal(st)+renderAppRatingModal(st);
    if (screen === 'wHome') return renderWorkerDashboard(st)+renderWithdrawModal(st)+renderTransferModal(st)+renderToast(st);
    return renderWelcome();
  // Phase 3B: Driver request overlay
    if (st.drRequest) {
      try { return renderDriverRequestModal(st) + _render(st); } catch(e2){}
    }
  } catch(e) {
    return '<div style="padding:40px;text-align:center;color:'+C.red+'"><div style="font-size:32px;margin-bottom:12px">&#9888;&#65039;</div><div style="font-size:16px;font-weight:700;margin-bottom:8px">Cilad ayaa dhacday</div><div style="font-size:12px;color:'+C.muted+';margin-bottom:20px">'+esc(e.message)+'</div><button onclick="location.reload()" style="background:'+C.gold+';color:#000;border:none;border-radius:10px;padding:10px 20px;font-size:14px;font-weight:700;cursor:pointer">&#128260; Dib u bilow</button></div>';
  }
}

// ─────────────────────────────────────────────────────────────
// EVENT HANDLERS
// ─────────────────────────────────────────────────────────────
var REPLIES = ['I can come this week. What time works?','Yes, I have all equipment needed!','Available 8AM–5PM daily.','Great! Sending confirmation shortly.'];

// ╔══════════════════════════════════════════════════════════════╗
// ║  SECTION: HANDLERS  (click · input)                         ║
// ║  Edit: button actions, navigation, form state updates       ║
// ╚══════════════════════════════════════════════════════════════╝

// ── MAP INITIALIZER — called after each render ────────────────

function initMapsAfterRender(st) {
  var MOG = {lat: 2.0469, lng: 45.3182};

  // ── DRIVER: STEP 1 — Pickup map ───────────────────────────
  if (document.getElementById('pickupMap')) {
    SQMap.init('pickupMap', {
      center: st.drPickLat ? {lat:st.drPickLat, lng:st.drPickLng} : MOG,
      zoom:   st.drPickLat ? 15 : 13,
      onPickup: function(lat, lng) {
        SQMap.reverseGeocode(lat, lng, function(addr) {
          window._fw.setState({drPickLat:lat, drPickLng:lng, drPickAddr:addr, drPickQuery:addr});
          SQMap.setMarker('pickupMap','pickup',lat,lng,'📍 Pickup');
        });
      }
    }, function(map) {
      // Show nearby drivers on map
      SQMap.setDrivers('pickupMap', [
        {lat:2.0510,lng:45.3210,name:'Abdi Farah',    vehicle:'Sedan Toyota',   eta:'2 min'},
        {lat:2.0465,lng:45.3150,name:'Maxamed Cabdi',  vehicle:'Toyota Corolla', eta:'5 min'},
        {lat:2.0530,lng:45.3240,name:'Farhan Warsame', vehicle:'Nissan Sunny',   eta:'7 min'},
      ]);
      if (st.drPickLat) SQMap.setMarker('pickupMap','pickup',st.drPickLat,st.drPickLng,'📍 Pickup');
    });
    // Attach Google Places Autocomplete
    SQMap.attachAutocomplete('pickSearch', function(lat, lng, addr) {
      window._fw.setState({drPickLat:lat, drPickLng:lng, drPickAddr:addr, drPickQuery:addr, drPickResults:[]});
      SQMap.setMarker('pickupMap','pickup',lat,lng,'📍 Pickup');
    });
  }

  // ── DRIVER: STEP 2 — Route map ────────────────────────────
  if (document.getElementById('routeMap')) {
    SQMap.init('routeMap', {
      center: st.drPickLat ? {lat:st.drPickLat,lng:st.drPickLng} : MOG,
      zoom:   13,
      onDropoff: function(lat, lng) {
        SQMap.reverseGeocode(lat, lng, function(addr) {
          window._fw.setState({drDropLat:lat, drDropLng:lng, drDropAddr:addr, drDropQuery:addr, drDropResults:[]});
          SQMap.setMarker('routeMap','dropoff',lat,lng,'🏁 Dropoff');
          if (st.drPickLat) {
            SQMap.drawRoute('routeMap',st.drPickLat,st.drPickLng,lat,lng,function(info){
              if(info) window._fw.setState({drRouteDist:parseFloat(info.distance),drRouteDur:info.duration,drDistText:info.distText,drDurText:info.durText});
            });
          }
        });
      }
    }, function() {
      if (st.drPickLat)  SQMap.setMarker('routeMap','pickup', st.drPickLat, st.drPickLng,'📍 Pickup');
      if (st.drDropLat)  SQMap.setMarker('routeMap','dropoff',st.drDropLat, st.drDropLng,'🏁 Dropoff');
      if (st.drPickLat && st.drDropLat) {
        SQMap.drawRoute('routeMap',st.drPickLat,st.drPickLng,st.drDropLat,st.drDropLng,function(info){
          if(info && !st.drRouteDist) window._fw.setState({drRouteDist:parseFloat(info.distance),drRouteDur:info.duration,drDistText:info.distText,drDurText:info.durText});
        });
      }
    });
    SQMap.attachAutocomplete('dropSearch', function(lat, lng, addr) {
      window._fw.setState({drDropLat:lat, drDropLng:lng, drDropAddr:addr, drDropQuery:addr, drDropResults:[]});
      SQMap.setMarker('routeMap','dropoff',lat,lng,'🏁 Dropoff');
      if (st.drPickLat) {
        SQMap.drawRoute('routeMap',st.drPickLat,st.drPickLng,lat,lng,function(info){
          if(info) window._fw.setState({drRouteDist:parseFloat(info.distance),drRouteDur:info.duration,drDistText:info.distText,drDurText:info.durText});
        });
      }
    });
  }

  // ── DRIVER: DONE — Mini route map ────────────────────────
  if (document.getElementById('doneMap') && st.drPickLat && st.drDropLat) {
    SQMap.init('doneMap', {center:{lat:st.drPickLat,lng:st.drPickLng}, zoom:12}, function() {
      SQMap.setMarker('doneMap','pickup', st.drPickLat,st.drPickLng,'📍 Pickup');
      SQMap.setMarker('doneMap','dropoff',st.drDropLat,st.drDropLng,'🏁 Dropoff');
      SQMap.drawRoute('doneMap',st.drPickLat,st.drPickLng,st.drDropLat,st.drDropLng,null);
    });
  }

  // ── DELIVERY: Pickup map ──────────────────────────────────
  if (document.getElementById('dlPickupMap')) {
    SQMap.init('dlPickupMap', {
      center: st.dlPickLat ? {lat:st.dlPickLat,lng:st.dlPickLng} : MOG,
      zoom:   st.dlPickLat ? 15 : 13,
      onPickup: function(lat, lng) {
        SQMap.reverseGeocode(lat, lng, function(addr) {
          window._fw.setState({dlPickLat:lat, dlPickLng:lng, dlPickup:addr, dlPickResults:[]});
          SQMap.setMarker('dlPickupMap','pickup',lat,lng,'📍 Pickup');
        });
      }
    }, function() {
      if (st.dlPickLat) SQMap.setMarker('dlPickupMap','pickup',st.dlPickLat,st.dlPickLng,'📍 Pickup');
    });
  // ── TRACKING MAP (Phase 3A) ──────────────────────────────
  if (document.getElementById('trackingMap')) {
    var tst = window._fw ? window._fw.getState() : {};
    var order = tst.dlOrder || {};
    var hasDriver = order.driver && (order.status==='ASSIGNED'||order.status==='PICKED_UP'||order.status==='IN_TRANSIT');
    var tlat = hasDriver && tst.dlDriverLoc ? tst.dlDriverLoc.lat : 2.0469;
    var tlng = hasDriver && tst.dlDriverLoc ? tst.dlDriverLoc.lng : 45.3182;

    SQMap.init('trackingMap', {
      center:{lat:tlat, lng:tlng}, zoom:14,
    }, function(map) {
      if (hasDriver) {
        // Phase 2C: show real driver position
        SQMap.setMarker('trackingMap','driver',tlat,tlng,'🚗 Driver');
        if (order.pickup)  SQMap.geocode(order.pickup, function(r){if(r[0])SQMap.setMarker('trackingMap','pickup',r[0].lat,r[0].lon,'📍 Pickup');});
        if (order.dropoff) SQMap.geocode(order.dropoff,function(r){if(r[0])SQMap.setMarker('trackingMap','dropoff',r[0].lat,r[0].lon,'🏁 Dropoff');});
      } else {
        // Phase 2A: anonymous driver dots only
        SQMap.setDrivers('trackingMap', SQDispatch.getMaskedDriverLocations().map(function(d){
          return {lat:d.lat,lng:d.lng,name:'Driver',vehicle:'Courier',eta:d.etaMins+'min'};
        }));
      }
    });
  }

    SQMap.attachAutocomplete('dlPickSearch', function(lat, lng, addr) {
      window._fw.setState({dlPickLat:lat, dlPickLng:lng, dlPickup:addr, dlPickResults:[]});
      SQMap.setMarker('dlPickupMap','pickup',lat,lng,'📍 Pickup');
    });
  }
}


document.addEventListener('click', function(e) {
  var el = e.target;
  while (el && el !== document.body) {
    var id = el.dataset && el.dataset.id;
    if (id) { handleClick(id, el); break; }
    el = el.parentElement;
  }
}, true);

document.addEventListener('input', function(e) {
  handleInputChange(e);
}, true);

document.addEventListener('change', function(e) {
  handleInputChange(e);
}, true);

function handleInputChange(e) {
  var el = e.target;
  var id = el.dataset && el.dataset.id;
  if (!id) return;
  var val = el.value;
  var st = S.getState();
  if (id === 'login:phone') S.setState({loginPhone: val});
  else if (id === 'otp:val') S.setState({otpVal: val});
  else if (id === 'creg:phone') S.setState({cForm: Object.assign({}, st.cForm||{}, {phone:val})});
  else if (id === 'creg:fname') S.setState({cForm: Object.assign({}, st.cForm||{}, {fname:val})});
  else if (id === 'creg:lname') S.setState({cForm: Object.assign({}, st.cForm||{}, {lname:val})});
  else if (id === 'creg:name')  S.setState({cForm: Object.assign({}, st.cForm||{}, {name:val})});
  else if (id === 'creg:city') S.setState({cForm: Object.assign({}, st.cForm||{}, {city:val})});
  else if (id === 'creg:district') S.setState({cForm: Object.assign({}, st.cForm||{}, {district:val})});
  else if (id === 'creg:country') S.setState({cForm: Object.assign({}, st.cForm||{}, {country:val})});
  else if (id === 'wreg:phone') S.setState({wForm: Object.assign({}, st.wForm||{}, {phone:val})});
  else if (id === 'wreg:country:sel') S.setState({wForm: Object.assign({}, st.wForm||{}, {country:val, region:'', district:''})});
  else if (id === 'wreg:region:sel')  S.setState({wForm: Object.assign({}, st.wForm||{}, {region:val, district:''})});
  else if (id === 'wreg:district:sel')S.setState({wForm: Object.assign({}, st.wForm||{}, {district:val})});
  else if (id === 'wreg:name') S.setState({wForm: Object.assign({}, st.wForm||{}, {name:val})});
  else if (id === 'wreg:city') S.setState({wForm: Object.assign({}, st.wForm||{}, {city:val})});
  else if (id === 'wreg:bio') S.setState({wForm: Object.assign({}, st.wForm||{}, {bio:val})});
  else if (id === 'wreg:idnum') S.setState({wForm: Object.assign({}, st.wForm||{}, {idNumber:val})});
  else if (id === 'wreg:price') S.setState({wForm: Object.assign({}, st.wForm||{}, {price:val})});
  else if (id === 'wreg:unit') S.setState({wForm: Object.assign({}, st.wForm||{}, {unit:val})});
  else if (id === 'search:q') S.setState({searchQ: val});
  else if (id === 'chat:input') S.setState({chatInput: val});
  else if (id === 'book:note') S.setState({bookNote: val});
  else if (id === 'book:date') S.setState({bookDate: val});
  else if (id === 'ep:fname')  S.setState({epForm: Object.assign({}, S.getState().epForm||{}, {fname:val})});
  else if (id === 'ep:lname')  S.setState({epForm: Object.assign({}, S.getState().epForm||{}, {lname:val})});
  else if (id === 'ep:bio')    S.setState({epForm: Object.assign({}, S.getState().epForm||{}, {bio:val})});
  else if (id === 'ep:price')  S.setState({epForm: Object.assign({}, S.getState().epForm||{}, {price:val})});
  else if (id === 'withdraw:amt')   S.setState({withdrawAmt: val});
  else if (id === 'transfer:phone') S.setState({transferPhone: val});
  else if (id === 'transfer:amt')   S.setState({transferAmt: val});
}

function handleClick(id, el) {
  var st = S.getState();
  // Navigation
  if (id.indexOf('nav:') === 0) {
    var tab = id.slice(4);
    if (st.screen === 'cHome') S.setState({cTab: tab});
    else if (st.screen === 'wHome') S.setState({wdTab: tab});
    return;
  }
  // Go to screen
  if (id.indexOf('welcome:sel:') === 0) { S.setState({welcomeSel:id.slice(12)}); return; }
  if (id === 'go:login') { S.setState({screen:'login',loginStep:0,loginPhone:'',loginCc:'+252',loginRole:'customer',welcomeSel:''}); return; }
  if (id === 'go:welcome') { S.setState({screen:'welcome',welcomeSel:''}); return; }
  if (id === 'go:cReg') { S.setState({screen:'cReg',cStep:0,cForm:{},welcomeSel:''}); return; }
  if (id === 'go:wReg') { S.setState({screen:'wReg',wStep:0,wForm:{},welcomeSel:''}); return; }
  if (id.indexOf('lang:switch:') === 0) { S.setState({appLang:id.slice(12)}); return; }
  if (id.indexOf('go:') === 0) { S.setState({screen:id.slice(3)}); return; }
  // Delivery standalone entry point
  if (id === 'goto:delivery') {
    S.setState({
      screen:'booking',
      bookWorker:{id:0,name:'Shaqaale Courier',cat:'Delivery',sub:'Parcel Delivery',col:'#F5A623',av:'SC',rating:4.8,price:3,unit:'/km'},
      dlStep:0,dlDone:false,dlOrder:null,dlScope:'',dlPType:'',
      dlPickup:'',dlPickLat:0,dlPickLng:0,dlPickZone:'',dlPickDate:'',dlPickTime:'',
      dlDropoff:'',dlDropLat:0,dlDropLng:0,dlDropZone:'',dlDropCity:'',dlDropCtry:'',
      dlRecipient:'',dlRecPhone:'',dlRecNote:'',
      dlWeight:'light',dlFragile:false,dlInsure:false,
      dlTrackId:'',bookPayMethod:''
    });
    return;
  }
  if (id === 'goto:search') { S.setState({cTab:'search'}); return; }
  // Logout
  if (id.indexOf('wwallet:') === 0) { S.setState({wWalletTab:id.slice(8)}); return; }
  if (id.indexOf('wdraw:q:') === 0) { var pct2=parseInt(id.slice(8));var av2=S.getState().withdrawAvail||0;var v2=pct2===100?av2:Math.round(av2*pct2)/100;S.setState({withdrawAmt:String(v2.toFixed(2))});return; }
  if (id.indexOf('wdraw:method:') === 0) { S.setState({withdrawMethod:id.slice(13)}); return; }
  if (id.indexOf('transfer:q:') === 0) { var pctT=parseInt(id.slice(11));var avT=S.getState().transferAvail||0;var vT=pctT===100?avT:Math.round(avT*pctT)/100;S.setState({transferAmt:String(vT.toFixed(2))});return; }
  if (id === 'open:rateApp') { S.setState({showAppRating:true,appRatingVal:0,appRatingDone:false}); return; }
  // ── Edit Profile ─────────────────────────────────────────────
  if (id === 'edit:profile') {
    var erole = st.screen==='wHome' ? 'worker' : 'customer';
    S.setState({screen:'editProfile', editRole:erole, epForm:{}, epTab:'personal', epSaved:false, epAvatar:st.epAvatar||''});
    return;
  }
  if (id === 'ep:close') { S.setState({screen: (S.getState().editRole==='worker'?'wHome':'cHome'), epSaved:false}); return; }
  if (id.indexOf('ep:tab:') === 0) { S.setState({epTab: id.slice(7)}); return; }
  if (id.indexOf('ep:gender:') === 0) { S.setState({epForm: Object.assign({}, S.getState().epForm||{}, {gender: id.slice(10)})}); return; }
  if (id.indexOf('ep:cat:') === 0) { S.setState({epForm: Object.assign({}, S.getState().epForm||{}, {cat: id.slice(7)})}); return; }
  if (id.indexOf('ep:unit:') === 0) { S.setState({epForm: Object.assign({}, S.getState().epForm||{}, {unit: id.slice(8)})}); return; }
  if (id.indexOf('ep:pay:') === 0) { S.setState({epForm: Object.assign({}, S.getState().epForm||{}, {payMethod: id.slice(7)})}); return; }
  if (id === 'ep:avatar:remove') { S.setState({epAvatar: ''}); return; }
  if (id === 'ep:save') {
    var epSt = S.getState();
    var epF = epSt.epForm || {};
    var epRole = epSt.editRole || 'customer';
    var epAvt = epSt.epAvatar || '';
    if (epRole === 'worker') {
      var newWF = Object.assign({}, epSt.wForm||{}, epF);
      if (epAvt) newWF.avatar = epAvt;
      S.setState({wForm: newWF, epSaved: true});
      Shaq.saveProfile('worker', newWF, epAvt);
    } else {
      var newCF = Object.assign({}, epSt.cForm||{}, epF);
      if (epAvt) newCF.avatar = epAvt;
      S.setState({cForm: newCF, epSaved: true});
      Shaq.saveProfile('customer', newCF, epAvt);
    }
    return;
  }
  if (id === 'logout') { Shaq.logout(); return; }
  // Login
  if (id.indexOf('login:role:') === 0) { S.setState({loginRole: id.slice(11)}); return; }
  if (id.indexOf('login:cc:') === 0) { S.setState({loginCc: id.slice(9)}); return; }
  if (id === 'login:send') {
    var lm = {'+252':9,'+254':9,'+251':9,'+255':9,'+256':9,'+253':8,'+971':9,'+966':9,'+44':10,'+1':10}[st.loginCc||'+252']||9;
    if ((st.loginPhone||'').replace(/[^0-9]/g,'').length < lm || st.authBusy) return;
    Shaq.requestOtp(st.loginRole||'customer', st.loginCc||'+252', st.loginPhone); return;
  }
  if (id === 'login:back') { S.setState({loginStep: 0, authError:'', authInfo:'', devOtp:''}); return; }
  if (id === 'otp:verify') {
    if ((st.otpVal||'').replace(/[^0-9]/g,'').length < 4) return;
    Shaq.verifyOtp(); return;
  }
  // Customer reg
  if (id.indexOf('creg:gender:') === 0) { S.setState({cForm:Object.assign({},S.getState().cForm||{},{gender:id.slice(12)})}); return; }
  if (id.indexOf('creg:svc:') === 0) { var sv2=id.slice(9),cf5=S.getState().cForm||{},svcs2=Array.isArray(cf5.services)?cf5.services.slice():[],si2=svcs2.indexOf(sv2); if(si2>=0)svcs2.splice(si2,1);else svcs2.push(sv2); S.setState({cForm:Object.assign({},cf5,{services:svcs2})}); return; }
  if (id.indexOf('creg:pay:') === 0) { S.setState({cForm:Object.assign({},S.getState().cForm||{},{payMethod:id.slice(9)})}); return; }
  if (id === 'creg:back') { S.setState({cStep: (st.cStep||0)-1}); return; }
  if (id === 'creg:next0') { var cf0=S.getState().cForm||{}; if((cf0.phone||'').replace(/[^0-9]/g,'').length>=9) S.setState({cStep:1}); return; }
  if (id === 'creg:next1') { var cf1=S.getState().cForm||{}; if(cf1.fname&&cf1.lname) S.setState({cStep:2}); return; }
  if (id === 'creg:next2') { var cf2=S.getState().cForm||{}; if(cf2.country&&cf2.region&&cf2.district) S.setState({cStep:3}); return; }
  if (id === 'creg:next3') { S.setState({cStep:4}); return; }
  if (id === 'creg:next4') { var cf4=S.getState().cForm||{}; if(cf4.payMethod) S.setState({cStep:5}); return; }
  if (id === 'creg:done') { if (!st.authBusy) Shaq.register('customer'); return; }
  if (id.indexOf('creg:id:') === 0) {
    var t = id.slice(8);
    var cur = (st.cForm||{}).idType;
    S.setState({cForm: Object.assign({}, st.cForm||{}, {idType: cur===t?'':t})}); return;
  }
  // Worker reg
  if (id.indexOf('wreg:country:') === 0) { S.setState({wForm:Object.assign({},S.getState().wForm||{},{country:id.slice(13),region:'',district:''})}); return; }
  if (id === 'wreg:back') { S.setState({wStep: (st.wStep||0)-1}); return; }
  if (id.indexOf('wreg:gender:') === 0) { S.setState({wForm:Object.assign({},S.getState().wForm||{},{gender:id.slice(12)})}); return; }
  if (id === 'wreg:next0') { if((st.wForm&&st.wForm.phone||'').length>=9) S.setState({wStep:1}); return; }
  if (id === 'wreg:next1') { var wf1=S.getState().wForm||{}; if(wf1.name&&wf1.country&&wf1.region&&wf1.district) S.setState({wStep:2}); return; }
  if (id === 'wreg:next2') { if(st.wForm&&st.wForm.cat) S.setState({wStep:3}); return; }
  if (id === 'wreg:next3') { if(st.wForm&&st.wForm.price) S.setState({wStep:4}); return; }
  if (id === 'wreg:next4') { var wf4=S.getState().wForm||{}; if(window._wIdOk(wf4)) S.setState({wStep:5}); else alert('Enter your ID number and upload the required documents'); return; }
  if (id === 'wreg:next5') { S.setState({wStep:6}); return; }
  if (id.indexOf('wreg:idtype:') === 0) { S.setState({wForm:Object.assign({},S.getState().wForm||{},{idType:id.slice(12)})}); return; }
  if (id === 'wreg:done') { if (!st.authBusy) Shaq.register('worker'); return; }
  if (id.indexOf('wreg:cat:') === 0) {
    S.setState({wForm: Object.assign({}, st.wForm||{}, {cat: id.slice(9)})}); return;
  }
  if (id.indexOf('wreg:day:') === 0) {
    var d = id.slice(9);
    var avail = (st.wForm||{}).avail || [];
    var newAvail = avail.indexOf(d)>=0 ? avail.filter(function(x){return x!==d;}) : avail.concat([d]);
    S.setState({wForm: Object.assign({}, st.wForm||{}, {avail: newAvail})}); return;
  }
  if (id.indexOf('wreg:ct:') === 0) {
    var c = id.slice(8);
    var cts = (st.wForm||{}).cts || ['task'];
    var newCts = cts.indexOf(c)>=0 ? cts.filter(function(x){return x!==c;}) : cts.concat([c]);
    if (newCts.length === 0) newCts = [c];
    S.setState({wForm: Object.assign({}, st.wForm||{}, {cts: newCts})}); return;
  }
  // Worker cards

  // ── BOOKING HANDLERS ──────────────────────────────────────────
  if (id.indexOf('book:') === 0 && id.indexOf('book:ct:') < 0 && id !== 'book:close' && id !== 'book:confirm' && id !== 'book:back' && id !== 'book:stepback' && id !== 'book:livein' && id !== 'book:step0' && id !== 'book:next0' && id !== 'book:next1' && id !== 'book:next2' && id.indexOf('book:time:') < 0 && id !== 'book:date' && id.indexOf('book:pay:') < 0 && id.indexOf('book:sub:') < 0 && id.indexOf('book:urg:') < 0) {
    var wid = parseInt(id.slice(5));
    var w = WORKERS.filter(function(x){return x.id===wid;})[0];
    if (w) { S.setState({bookWorker:w, screen:'booking', bookStep:-1, bookCt:'', bookSub:'', bookUrg:'', bookDate:'', bookTime:'', bookNote:'', bookLiveIn:false, bookDone:false, bookPayMethod:'', dlPickup:'', dlDropoff:'', dlWeight:'light', dlFragile:false, dlRecipient:'', dlRecPhone:'', dlMultiStop:false, dlDistance:0, dlFare:0, drRideType:'standard', drPassengers:1, drLuggage:false}); return; }
  }
  if (id.indexOf('book:ct:') === 0) { S.setState({bookCt: id.slice(8)}); return; }
  if (id.indexOf('book:sub:') === 0) { S.setState({bookSub: decodeURIComponent(id.slice(9))}); return; }
  if (id.indexOf('book:urg:') === 0) { S.setState({bookUrg: id.slice(9)}); return; }
  if (id.indexOf('book:pay:') === 0) { S.setState({bookPayMethod: id.slice(9)}); return; }
  if (id === 'book:step0') { if(S.getState().bookCt) S.setState({bookStep:0}); return; }
  if (id === 'book:next0') {
    var bst=S.getState();
    var bcfg=BOOK_CFG[(bst.bookWorker&&bst.bookWorker.cat)||'']||{};
    var isSched=(bst.bookCt==='monthly'||bst.bookCt==='permanent');
    var ok=false;
    if(bcfg.model==='delivery'){
      ok=!!bst.dlPickup&&!!bst.dlDropoff&&!!bst.dlRecipient&&!!bst.dlRecPhone;
    } else if(bcfg.model==='driver'){
      ok=!!bst.dlPickup&&(bst.bookUrg==='emergency'||(!!bst.bookDate&&!!bst.bookTime));
    } else if(isSched){
      ok=(bst.bookDays&&bst.bookDays.length>0)&&!!bst.bookStartTime&&!!bst.bookEndTime;
    } else {
      ok=(!!bst.bookDate&&!!bst.bookTime)||bst.bookUrg==='emergency';
    }
    if(ok) S.setState({bookStep:1}); return;
  }
  if (id === 'book:next1') { S.setState({bookStep:2}); return; }
  if (id === 'book:next2') { if(S.getState().bookPayMethod) S.setState({bookStep:3}); return; }
  if (id === 'book:stepback') { var bs=S.getState().bookStep; S.setState({bookStep:bs>-1?bs-1:-1}); return; }
  if (id === 'book:livein') { S.setState({bookLiveIn:!S.getState().bookLiveIn}); return; }
  if (id === 'book:close') { S.setState({bookWorker:null, bookDone:false, screen:'cHome'}); return; }
  if (id === 'book:back') { S.setState({bookWorker:null, bookDone:false, screen:'cHome'}); return; }
  // ── DELIVERY HANDLERS ────────────────────────────────────────
  if (id.indexOf('dl:ptype:')  === 0) { S.setState({dlPType:  id.slice(9)}); return; }
  if (id.indexOf('dl:scope:')  === 0) { S.setState({dlScope:  id.slice(9)}); return; }
  if (id.indexOf('dl:weight:') === 0) { S.setState({dlWeight: id.slice(10)}); return; }
  if (id === 'dl:fragile') { S.setState({dlFragile: !S.getState().dlFragile}); return; }
  if (id === 'dl:insure')  { S.setState({dlInsure:  !S.getState().dlInsure});  return; }
  if (id === 'dl:next0') {
    var ds=S.getState(); if(ds.dlPType&&ds.dlScope) S.setState({dlStep:1}); return;
  }
  if (id === 'dl:next1') {
    var ds=S.getState();
    var ok=(!!ds.dlPickup&&!!ds.dlPickDate&&!!ds.dlPickTime)&&(ds.dlScope==='international'||!!ds.dlPickZone);
    if(ok) S.setState({dlStep:2}); return;
  }
  if (id === 'dl:next2') {
    var ds=S.getState();
    var dest=ds.dlScope==='local'?ds.dlDropZone:ds.dlScope==='national'?ds.dlDropCity:ds.dlDropCtry;
    var ok=!!ds.dlDropoff&&!!ds.dlRecipient&&!!ds.dlRecPhone&&!!dest;
    if(ok) S.setState({dlStep:3}); return;
  }
  if (id === 'dl:next3') { S.setState({dlStep:4}); return; }
  if (id === 'dl:back')  {
    var ds=S.getState(), cs=ds.dlStep||0;
    if(cs>0) S.setState({dlStep:cs-1}); else S.setState({bookWorker:null,screen:'cHome',dlStep:0,dlDone:false}); return;
  }
  // ── DISPATCH HANDLERS ────────────────────────────────────────
  if (id === 'dl:trackclose') {
    SQDispatch.cancelDispatch();
    SQDispatch.stopTracking();
    S.setState({bookWorker:null, screen:'cHome', dlStep:0, dlDone:false, dlOrder:null, drRequest:null});
    return;
  }
  if (id === 'dl:retryDispatch') {
    var rs=S.getState();
    var ro=rs.dlOrder||{};
    S.setState({dlOrder:Object.assign({},ro,{status:'PENDING',ttl:null,attempt:1,driver:null})});
    SQDispatch.startDispatch(ro, function(update){
      var cur=S.getState(); var ord=cur.dlOrder||{};
      S.setState({dlOrder:Object.assign({},ord,update,{
        skippedCount:(update.skipped_drivers_list||[]).length
      })});
    });
    return;
  }
  // Driver request modal handlers (Phase 3B)
  if (id === 'drreq:accept') {
    var as=S.getState(); var ar=as.drRequest||{};
    S.setState({drRequest:null, drActiveJob:ar, screen:'wHome'});
    return;
  }
  if (id === 'drreq:decline') {
    S.setState({drRequest:null});
    return;
  }
  if (id === 'dl:confirm') {
    var ds=S.getState();
    if(!ds.bookPayMethod) return;
    // Phase 2B: Start auto-dispatch instead of static assignment
    var tid='SHQ-'+Math.random().toString(36).slice(2,8).toUpperCase();
    var bw=ds.bookWorker;
    var fare=(ds.dlScope==='local'?3:ds.dlScope==='national'?8:25)+({light:0,medium:2,heavy:5,xlarge:10})[ds.dlWeight||'light']+(ds.dlFragile?2:0)+(ds.dlInsure?3:0);
    var orderData={
      trackId:    tid,
      pType:      ds.dlPType||'other',
      pickup:     ds.dlPickup||'',
      dropoff:    ds.dlDropoff||'',
      scope:      ds.dlScope||'local',
      recName:    ds.dlRecipient||'',
      recPhone:   ds.dlRecPhone||'',
      weight:     ds.dlWeight||'light',
      fragile:    ds.dlFragile||false,
      insure:     ds.dlInsure||false,
      fare:       fare,
      payMethod:  {evc:'EVC Plus',zaad:'Zaad',sahal:'Sahal',edahab:'eDahab',mpesa:'M-Pesa',cash:'Cash',bank:'Bank Transfer'}[ds.bookPayMethod]||ds.bookPayMethod,
      status:     'PENDING',
      driver:     null,
      ttl:        null,
      attempt:    0,
      skippedCount: 0,
      allocation_attempts_count: 0,
      skipped_drivers_list: [],
    };
    // Add to bookings list
    var newB={id:Date.now(),wName:bw.name,wId:bw.id,svc:({document:'Document',food:'Food',electronics:'Electronics',clothing:'Clothing',medicine:'Medicine',other:'Parcel'})[ds.dlPType]||'Delivery',cat:'Delivery',date:ds.dlPickDate,time:ds.dlPickTime,amount:fare,status:'confirmed',ct:'task',pay:ds.bookPayMethod,wAv:bw.av,wCol:bw.col,trackId:tid};
    // Transition to tracking screen
    S.setState({
      dlDone:false, dlOrder:orderData, dlTrackId:tid,
      dlStep:99, // tracking mode
      bookings:(ds.bookings||[]).concat([newB]),
      screen:'booking'
    });
    Shaq.createDelivery(orderData);
    Shaq.createBooking({wId:bw.id,wName:bw.name,wAv:bw.av,wCol:bw.col,svc:newB.svc,cat:'Delivery',date:newB.date,time:newB.time,amount:fare,ct:'task',pay:newB.pay,meta:{trackId:tid}}, newB.id);
    // Start dispatch engine
    SQDispatch.startDispatch(orderData, function(update){
      Shaq.deliveryStatus(tid, update);
      var cur=S.getState(); var ord=cur.dlOrder||{};
      var merged=Object.assign({},ord,update,{skippedCount:(update.skipped_drivers_list||[]).length});
      S.setState({dlOrder:merged});
      // Phase 3A: Start live tracking when ASSIGNED
      if(update.status==='ASSIGNED' && !cur._tracking){
        S.setState({_tracking:true});
        SQDispatch.startTracking(tid, function(loc){
          S.setState({dlDriverLoc:loc});
        });
      }
    });
    return;
  }
  if (id === 'dl:close') { S.setState({bookWorker:null,screen:'cHome',dlStep:0,dlDone:false,bookPayMethod:''}); return; }
  // ── DRIVER HANDLERS ──────────────────────────────────────────
  // ── MAP HANDLERS ──────────────────────────────────────────────
  if (id.indexOf('dr:setpickup:') === 0) {
    var p=decodeURIComponent(id.slice(14)).split(',');
    S.setState({drPickLat:parseFloat(p[0]),drPickLng:parseFloat(p[1]),drPickAddr:p.slice(2).join(','),drPickQuery:p.slice(2).join(','),drPickResults:[]});
    return;
  }
  if (id.indexOf('dr:setdropoff:') === 0) {
    var p=decodeURIComponent(id.slice(15)).split(',');
    var lat=parseFloat(p[0]),lng=parseFloat(p[1]),addr=p.slice(2).join(',');
    var ds=S.getState();
    S.setState({drDropLat:lat,drDropLng:lng,drDropAddr:addr,drDropQuery:addr,drDropResults:[]});
    if(ds.drPickLat&&ds.drPickLng){
      SQMap.drawRoute('routeMap',ds.drPickLat,ds.drPickLng,lat,lng,function(info){
        if(info) window._fw.setState({drRouteDist:parseFloat(info.distance),drRouteDur:info.duration});
      });
    }
    return;
  }
  if (id === 'dr:clearpickup')  { S.setState({drPickLat:0,drPickLng:0,drPickAddr:'',drPickQuery:'',drPickResults:[]}); return; }
  if (id === 'dr:cleardropoff') { S.setState({drDropLat:0,drDropLng:0,drDropAddr:'',drDropQuery:'',drDropResults:[],drRouteDist:0,drRouteDur:0}); return; }
  if (id.indexOf('dl:setpickup:') === 0) {
    var p=decodeURIComponent(id.slice(14)).split(',');
    S.setState({dlPickLat:parseFloat(p[0]),dlPickLng:parseFloat(p[1]),dlPickup:p.slice(2).join(','),dlPickResults:[]});
    return;
  }
  if (id.indexOf('dr:type:')   === 0) { S.setState({drRideType: id.slice(8)}); return; }
  if (id.indexOf('dr:district:')   === 0) { S.setState({drPickDistrict:id.slice(12), drPickLandmark:'', drPickDetail:'', drPickMeetType:''}); return; }
  if (id.indexOf('dr:landmark:')   === 0) { S.setState({drPickLandmark:decodeURIComponent(id.slice(12))}); return; }
  if (id.indexOf('dr:meettype:')   === 0) { S.setState({drPickMeetType:id.slice(12)}); return; }
  if (id.indexOf('dr:dropdistrict:')===0)  { S.setState({drDropDistrict:id.slice(16), drDropLandmark:'', drDropDetail:''}); return; }
  if (id.indexOf('dr:droplanmark:')===0)   { S.setState({drDropLandmark:decodeURIComponent(id.slice(15))}); return; }
  if (id.indexOf('dr:pickup:') === 0) { S.setState({dlPickup: id.slice(10)}); return; }
  if (id.indexOf('dr:dropoff:')===0)  { S.setState({dlDropoff: id.slice(11)}); return; }
  if (id.indexOf('dr:select:') === 0) { S.setState({drSelectedDriver: parseInt(id.slice(10))}); return; }
  if (id.indexOf('dr:pax:')    === 0) { S.setState({drPassengers: parseInt(id.slice(7))}); return; }
  if (id.indexOf('dr:when:')   === 0) { S.setState({drWhen: id.slice(8)}); return; }
  if (id === 'dr:ac')      { S.setState({drAC:     !S.getState().drAC});     return; }
  if (id === 'dr:luggage') { S.setState({drLuggage:!S.getState().drLuggage}); return; }
  if (id === 'dr:next0') { if(S.getState().drRideType) S.setState({drStep:1}); return; }
  if (id === 'dr:next1') { var drst1=S.getState(); if(drst1.drPickDistrict&&drst1.drPickLandmark) S.setState({drStep:2}); return; }
  if (id === 'dr:next2') { S.setState({drStep:3}); return; }
  if (id === 'dr:next3') { S.setState({drStep:4}); return; }
  if (id === 'dr:next4') {
    var drst=S.getState();
    var ok4=drst.drWhen==='now'||(!!drst.dlPickDate&&!!drst.dlPickTime);
    if(ok4) S.setState({drStep:5}); return;
  }
  if (id === 'dr:back') {
    var cs2=S.getState().drStep||0;
    if(cs2>0) S.setState({drStep:cs2-1}); return;
  }
  if (id === 'dr:confirm') {
    var drst=S.getState();
    if(!drst.bookPayMethod) return;
    var tid2='RDE-'+Math.random().toString(36).slice(2,7).toUpperCase();
    var bw2=drst.bookWorker;
    var nb={id:Date.now(),wName:(drst.drSelectedDriver===0?bw2.name:drst.drSelectedDriver===1?'Maxamed Cabdi':'Farhan Warsame'),wId:bw2.id,svc:drst.drRideType||'Standard Ride',cat:'Driver Services',date:drst.dlPickDate||(drst.drWhen==='now'?'Today':'—'),time:drst.dlPickTime||(drst.drWhen==='now'?'Now':'—'),amount:10,status:'confirmed',ct:'task',pay:drst.bookPayMethod,wAv:bw2.av,wCol:bw2.col,trackId:tid2};
    S.setState({drDone:true,drTrackId:tid2,bookings:(drst.bookings||[]).concat([nb])});
    Shaq.createBooking({wId:bw2.id,wName:nb.wName,wAv:nb.wAv,wCol:nb.wCol,svc:nb.svc,cat:'Driver Services',date:nb.date,time:nb.time,amount:nb.amount,ct:'task',pay:nb.pay,meta:{trackId:tid2}}, nb.id);
    return;
  }
  if (id === 'dr:close') {
    S.setState({bookWorker:null,screen:'cHome',drStep:0,drDone:false,bookPayMethod:'',dlPickup:'',dlDropoff:'',dlPickDate:'',dlPickTime:''});
    return;
  }
  if (id.indexOf('bkday:') === 0) {
    var d2=id.slice(6), bd=(S.getState().bookDays||[]).slice(), bi2=bd.indexOf(d2);
    if(bi2>=0) bd.splice(bi2,1); else bd.push(d2);
    S.setState({bookDays:bd}); return;
  }

  if (id.indexOf('chat:') === 0 && id !== 'chat:close' && id !== 'chat:send' && id !== 'chat:input' && id.indexOf('chat:quick:') < 0) {
    var wid2 = parseInt(id.slice(5));
    var w2 = WORKERS.filter(function(x){return x.id===wid2;})[0];
    if (w2) { S.setState({chatWorker:w2, screen:'chat', chatMsgs:[{id:1,from:'worker',text:'Hello! I\'m '+w2.name+'. How can I help you today?',time:'Now'}], chatInput:''}); Shaq.openChat(w2); return; }
  }
  if (id.indexOf('view:') === 0 && id !== 'view:close' && id !== 'view:book' && id !== 'view:chat') {
    var wid3 = parseInt(id.slice(5));
    var w3 = WORKERS.filter(function(x){return x.id===wid3;})[0];
    if (w3) { S.setState({viewWorker:w3, screen:'workerProfile'}); return; }
  }
  // View actions
  if (id === 'view:close') { S.setState({viewWorker:null, screen:'cHome'}); return; }
  if (id === 'chat:close') { S.setState({chatWorker:null, chatInput:'', screen:'cHome'}); return; }
  if (id === 'book:close') { S.setState({bookWorker:null, bookDone:false, screen:'cHome'}); return; }
  if (id === 'view:book') { var vw = st.viewWorker; if(vw){ S.setState({viewWorker:null, bookWorker:vw, bookStep:-1, bookCt:'', bookDate:'', bookTime:'', bookDone:false}); } return; }
  if (id === 'view:chat') { var vw2 = st.viewWorker; if(vw2){ S.setState({viewWorker:null, chatWorker:vw2, chatMsgs:[{id:1,from:'worker',text:'Hello!',time:'Now'}], chatInput:''}); Shaq.openChat(vw2); } return; }
  // Chat
  // chat:close handled above
  if (id === 'chat:send' || id.indexOf('chat:quick:') === 0) {
    var txt = id.indexOf('chat:quick:')===0 ? id.slice(11) : (st.chatInput||'');
    if (!txt.trim()) return;
    var t = new Date().toLocaleTimeString('en',{hour:'2-digit',minute:'2-digit'});
    var newMsgs = (st.chatMsgs||[]).concat([{id:Date.now(),from:'user',text:txt,time:t}]);
    S.setState({chatMsgs:newMsgs, chatInput:''});
    Shaq.sendMessage(st.chatWorker, txt);
    // scroll chat
    setTimeout(function(){var el=document.getElementById('chat-msgs');if(el)el.scrollTop=el.scrollHeight;},50);
    return;
  }
  // Booking
  // book:close handled above
  if (id === 'book:stepback') { S.setState({bookStep: st.bookStep-1}); return; }
  if (id === 'book:step0') { if(S.getState().bookCt) S.setState({bookStep:0}); return; }
  if (id.indexOf('bkday:') === 0) {
    var d2=id.slice(6), bd=(S.getState().bookDays||[]).slice(), bi=bd.indexOf(d2);
    if(bi>=0) bd.splice(bi,1); else bd.push(d2);
    S.setState({bookDays:bd}); return;
  }
  if (id === 'bk:weekend') {
    var v=!S.getState().bookIncWeekend, bd3=(S.getState().bookDays||[]).slice();
    ['Sat','Sun'].forEach(function(dd){var i=bd3.indexOf(dd);if(v&&i<0)bd3.push(dd);else if(!v&&i>=0)bd3.splice(i,1);});
    S.setState({bookIncWeekend:v,bookDays:bd3}); return;
  }
  if (id.indexOf('book:ct:') === 0) { S.setState({bookCt:id.slice(8), bookStep:-1, bookDays:[], bookIncWeekend:false, bookStartTime:'', bookEndTime:''}); return; }
  if (id === 'book:livein') { S.setState({bookLiveIn: !st.bookLiveIn}); return; }
  if (id === 'book:confirm') {
    var bw = st.bookWorker;
    if (bw) {
      var localId = Date.now();
      var newB = {id:localId,wName:bw.name,wId:bw.id,svc:st.bookSub||bw.sub,cat:bw.cat,date:st.bookDate,time:st.bookTime,amount:bw.price,status:'confirmed',ct:st.bookCt,pay:st.bookPayMethod,wAv:bw.av,wCol:bw.col};
      S.setState({bookDone:true, bookings:(st.bookings||[]).concat([newB])});
      Shaq.createBooking({wId:bw.id,svc:newB.svc,cat:bw.cat,date:newB.date,time:newB.time,amount:bw.price,ct:newB.ct,pay:newB.pay,
        meta:{days:st.bookDays||[],startTime:st.bookStartTime||'',endTime:st.bookEndTime||'',liveIn:!!st.bookLiveIn,note:st.bookNote||'',urgency:st.bookUrg||''}}, localId);
    } else {
      S.setState({bookDone:true});
    }
    return;
  }
  // Booking done — back to home
  if (id === 'book:close' && st.bookDone) {
    S.setState({bookWorker:null, bookDone:false, cTab:'bookings'}); return;
  }
  // Bookings tab
  if (id.indexOf('btab:') === 0) { S.setState({bTab: id.slice(5)}); return; }
  if (id.indexOf('contact:') === 0) {
    var cid = parseInt(id.slice(8));
    var cb = (st.bookings||[]).filter(function(b){ return b.id===cid; })[0];
    if (!cb) return;
    // Find worker by wId first, then by name
    var cw = null;
    for (var wi=0; wi<WORKERS.length; wi++) {
      if (WORKERS[wi].id === cb.wId || WORKERS[wi].name === cb.wName) {
        cw = WORKERS[wi]; break;
      }
    }
    if (cw) {
      S.setState({
        screen: 'chat',
        chatWorker: cw,
        chatMsgs: [{id:1, from:'worker', text:'Hello! I\'m '+cw.name+'. How can I help you today?', time:'Now'}],
        chatInput: ''
      });
      Shaq.openChat(cw);
    }
    return;
  }
  if (id.indexOf('complete:') === 0) {
    var bid = parseInt(id.slice(9));
    var doneBk = (st.bookings||[]).filter(function(b){return b.id===bid;})[0];
    S.setState({
      ratingBooking: doneBk ? {id:bid, wName:doneBk.wName, wAv:doneBk.wAv, wCol:doneBk.wCol} : null,
      ratingVal: 0, ratingDone: false
    });
    Shaq.completeBooking(bid);
    return;
  }
  if (id.indexOf('rate:') === 0) {
    var rid = parseInt(id.slice(5));
    var rb = (st.bookings||[]).filter(function(b){return b.id===rid;})[0];
    if (rb) S.setState({ratingBooking:{id:rid,wName:rb.wName,wAv:rb.wAv,wCol:rb.wCol}, ratingVal:0, ratingDone:false});
    return;
  }
  if (id.indexOf('notice:') === 0) {
    var nid = parseInt(id.slice(7));
    var nb = (st.bookings||[]).filter(function(b){return b.id===nid;})[0];
    if (nb) {
      var endDate = new Date(Date.now()+30*24*60*60*1000).toDateString();
      alert('⚠️ 30-Day Notice Submitted\n\nWorker: '+nb.wName+'\nContract ends: '+endDate+'\n\nFinal month salary held in escrow until handover completed.');
    }
    return;
  }
  // Wallet tabs
  if (id.indexOf('wtab:') === 0) { S.setState({wTab: id.slice(5)}); return; }
  // Profile
  if (id.indexOf('lang:') === 0) { S.setState({pLang: id.slice(5)}); return; }
  if (id.indexOf('notif:') === 0) {
    var nk = id.slice(6);
    var pn = Object.assign({}, st.pNotifs||{bookings:true,chat:true,promo:false});
    pn[nk] = !pn[nk];
    S.setState({pNotifs: pn}); return;
  }
  // Search
  if (id.indexOf('search:cat:') === 0) { S.setState({searchCat: id.slice(11), cTab: 'search'}); return; }
  if (id.indexOf('search:sort:') === 0) { S.setState({searchSort: id.slice(12)}); return; }
  if (id === 'search:online') { S.setState({searchOnline: !st.searchOnline}); return; }
  // Worker dashboard
  if (id === 'wd:toggle') { S.setState({wdOnline: !st.wdOnline}); Shaq.setOnline(!st.wdOnline); return; }
}

// ─────────────────────────────────────────────────────────────
// BOOT
// ─────────────────────────────────────────────────────────────
// ╔══════════════════════════════════════════════════════════════╗
// ║  SECTION: BOOT                                              ║
// ║  App entry point — do not edit                              ║
// ╚══════════════════════════════════════════════════════════════╝
S.render(document.getElementById('app'), render, {screen:'splash'});
Shaq.boot();

// Handle keyboard resize on Android + iOS
function setVh() {
  var app = document.getElementById('app');
  if (!app) return;
  // Use visualViewport if available (more accurate with keyboard)
  var h = window.visualViewport ? window.visualViewport.height : window.innerHeight;
  app.style.height = h + 'px';
}
setVh();
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', setVh);
  window.visualViewport.addEventListener('scroll', setVh);
} else {
  window.addEventListener('resize', setVh);
}
window.addEventListener('orientationchange', function(){ setTimeout(setVh, 200); });

// ── Phone back button support ─────────────────────────────────
// Phone back button - popstate only, no setState override needed
window.addEventListener('popstate', function(e) {
  var st = S.getState();
  var cur = st.screen || 'splash';
  // Back navigation map
  var backMap = {
    welcome:    null,           // welcome = home, nothing to go back to
    login:      'welcome',
    cReg:       'welcome',
    wReg:       'welcome',
    cHome:      null,           // logged in home, stay
    wHome:      null,
    editProfile: st.editRole==='worker' ? 'wHome' : 'cHome',
    booking:    null,           // handled internally
    chat:       null,
  };
  // Overlays — close them first
  if (st.chatWorker)  { S.setState({chatWorker:null});  history.pushState({}, '', ''); return; }
  if (st.bookWorker)  { S.setState({bookWorker:null});  history.pushState({}, '', ''); return; }
  if (st.viewWorker)  { S.setState({viewWorker:null});  history.pushState({}, '', ''); return; }
  if (st.showWithdrawModal) { S.setState({showWithdrawModal:false}); history.pushState({}, '', ''); return; }
  if (st.showTransferModal) { S.setState({showTransferModal:false}); history.pushState({}, '', ''); return; }
  if (st.ratingBooking) { S.setState({ratingBooking:null}); history.pushState({}, '', ''); return; }
  if (st.showAppRating) { S.setState({showAppRating:false}); history.pushState({}, '', ''); return; }
  // Registration steps — go back one step
  if (cur === 'cReg' && (st.cStep||0) > 0) { S.setState({cStep:(st.cStep||0)-1}); history.pushState({}, '', ''); return; }
  if (cur === 'wReg' && (st.wStep||0) > 0) { S.setState({wStep:(st.wStep||0)-1}); history.pushState({}, '', ''); return; }
  if (cur === 'editProfile' && (st.epSaved||false)) { S.setState({epSaved:false}); history.pushState({}, '', ''); return; }
  // Screen back
  var dest = backMap[cur];
  if (dest) {
    S.setState({screen: dest});
    history.pushState({}, '', '');
  }
  // welcome/cHome/wHome — let browser handle (exits app or stays)
});
