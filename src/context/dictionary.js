import LocalizedStrings from "react-localization";

const strings = new LocalizedStrings({
  en: {
    buttons: {
      tryAgain: "Try Again",
      submit: "Submit",
    },
    header: {
      home: "Find Dark Patterns",
    },
    sidemenu: {
      about: "About Dark Patterns",
      quiz: "Quiz",
      register: "Register Dark Pattern",
    },
    patterns: {
      heading: "About Dark Patterns",
      darkPatterns:
        "Dark Patterns are UX (User Experience) tricks used in websites and apps (even games) used to manipulate users to do things that they didn't mean to, like buying or signing up for something. Dark patterns, are not designers mistakes. They’re carefully crafted with a solid understanding of human psychology, and they do not have the user’s interest in mind.",
      purpose:
        "The purpose of this site is to spread awareness among people about dark patterns.",
      term: 'Term "Dark Patterns"',
      termOrigin:
        "As a term, Dark Patterns was first coined by the London – based UX designer Harry Brignull (PhD Cognitive Science) in August 2010. Brignull further listed 11 types of dark patterns on his ",
      website: "website",
      typesBrignull: "Types according to Brignull",
      friendSpam: "Friend Spam",
      friendSpamDesc: {
        main: "The product asks for your email or social media permissions under the pretence it will be used for a desirable outcome (e.g. finding friends), but then spams all your contacts in a message that claims to be from you.",
      },
      disguisedAds: "Disguised Ads",
      disguisedAdsDesc: {
        main: "Adverts that are disguised as other kinds of content or navigation, in order to get you to click on them.",
      },
      forced: "Forced Continuity",
      forcedDesc: {
        main: "When your free trial with a service comes to an end and your credit card silently starts getting charged without any warning. In some cases this is made even worse by making it difficult to cancel the membership.",
      },
      bait: "Bait and Switch",
      baitDesc: {
        main: "You set out to do one thing, but a different, undesirable thing happens instead.",
      },
      hidden: "Hidden Costs",
      hiddenDesc: {
        main: "You get to the last step of the checkout process, only to discover some unexpected charges have appeared, e.g. delivery charges, tax, etc.",
      },
      misdirection: "Misdirection",
      misdirectionDesc: {
        main: "The design purposefully focuses your attention on one thing in order to distract your attention from another.",
      },
      priceComp: "Price Comparison Prevention",
      priceCompDesc: {
        main: "The retailer makes it hard for you to compare the price of an item with another item, so you cannot make an informed decision.",
      },
      zuck: "Privacy Zuckering",
      zuckDesc: {
        main: "You are tricked into publicly sharing more information about yourself than you really intended to. Named after Facebook CEO Mark Zuckerberg.",
      },
      roach: "Roach Motel",
      roachDesc: {
        main: "You get into a situation very easily, but then you find it is hard to get out of it (e.g. a premium subscription).",
      },
      sneak: "Sneak into Basket",
      sneakDesc: {
        main: "You attempt to purchase something, but somewhere in the purchasing journey the site sneaks an additional item into your basket, often through the use of an opt-out radio button or checkbox on a prior page.",
      },
      trickQuestions: "Trick Questions",
      trickQuestionsDesc: {
        main: "While filling in a form you respond to a question that tricks you into giving an answer you didn't intend. When glanced upon quickly the question appears to ask one thing, but when read carefully it asks another thing entirely.",
      },
    },
    quiz: {
      heading: "Quiz: How well You are familiar with dark patterns?",
      score: "Your score is ",
    },
    register: {
      heading: "Register a Dark Pattern",
      urlLabel: "Website address",
      urlHelperText: "Please enter website URL where Dark Pattern was spotted",
      descLabel: "Description",
      descHelperText:
        "Please describe where You have spotted Dark Patterns in the website",
      typeLabel: "Type",
      typeHelperText:
        "Please enter the type of Dark Pattern if You think You know",
      avoidanceLabel: "Avoidance",
      avoidanceHelperText:
        "Please enter how You think user could avoid Dark Pattern",
      emailLabel: "Email",
      emailHelperText:
        "Please enter Your email in case we would need some additional information",
    },
    extension: {
      heading: "About Google Chrome extension ",
      name: "Find Dark Patterns",
      testBttn: "Test Extension",
    },
    testExt: {
      heading: "Testing extension",
      lastSubmit: "Last order was made 10min ago",
      price: 'Price',
    },
  },
  lt: {
    buttons: {
      tryAgain: "Bandyti iš naujo",
      submit: "Pateikti",
    },
    header: {
      home: "Rask apgaulinguosius šablonus",
    },
    sidemenu: {
      about: "Apie apgaulinguosius šablonus",
      quiz: "Viktorina",
      register: "Registruoti apgaulingąjį šabloną",
    },
    patterns: {
      heading: "Apie apgaulinguosius šablonus",
      darkPatterns:
        "Dark Patterns are UX (User Experience) tricks used in websites and apps (even games) used to manipulate users to do things that they didn't mean to, like buying or signing up for something. Dark patterns, are not designers mistakes. They’re carefully crafted with a solid understanding of human psychology, and they do not have the user’s interest in mind.",
      purpose:
        "Šio puslapio tikslas yra supažindinti žmones su apgaulingaisiais šablonais ir jų tipais.",
      term: 'Terminas apgaulingasis šablonas (angl. Dark Pattern)"',
      termOrigin:
        "Harry Brignull 2010m. pirmasis pasiūlė apgaulingųjų šablonų terminą, kuris apibrėžė etiškai abejotinus dizainus, kaip vartotojo sąsają specialiai sukurtą apgauti vartotojus, apgavystės metodai suformuoti atsižvelgiant į žmogaus psichologiją, nekreipiant dėmesio į vartotojo interesus. H. Brignull further vėliau išskyrė 11 apgaulingųjų šablonų tipų savo ",
      website: "internetiniame puslapyje",
      typesBrignull: "Tipai pagal Brignull",
      friendSpam: "Draugiškas šlamštas",
      friendSpamDesc: {
        main: "Produktas prašo el. pašto ar socialinių tinklų teisių apsimetant, kad jis bus naudojamas naudotojui naudingais tikslais (pvz. surasti draugus), bet tuomet visus gautus kontaktus iš nukentėjusio atakuoja pranešimais, kurie tariamai buvo siųsti pačio nukentėjusio.",
      },
      disguisedAds: "Užmaskuota reklama",
      disguisedAdsDesc: {
        main: "Reklamos, kurios užmaskuotos kaip kitokio tipo turinys ar nukreipimas, kuriomis siekiama, kad naudotojas paspaustų ant jų.",
      },
      forced: "Priverstinis tęstinumas",
      forcedDesc: {
        main: "Apgaulingojo šablono tipas, kuomet pasibaigus bandomajam laikotarpiui, be jokio perspėjimo pradedami nuskaičiuoti pinigai iš pridėtos kortelės, sąskaitos ir pan. Kai kuriais atvejais dar ir yra apsunkinama galimybė atsisakyti paslaugų.",
      },
      bait: "Masalas ir perėjimas",
      baitDesc: {
        main: "Siekiant atlikti vieną veiksmą, įvyksta kitas, ne tas, kurio buvo norima ir tikimasi.",
      },
      hidden: "Paslėpti mokesčiai",
      hiddenDesc: {
        main: "Atvykus į paskutinį apmokėjimo etapą, kaina išauga prisidėjus anksčiau nenurodytiems mokesčiams, pavyzdžiui, aptarnavimo mokesčiai ir pan.",
      },
      misdirection: "Neteisingas nukreipimas",
      misdirectionDesc: {
        main: "Sistemos dizainas specialiai fokusuoja naudotojo dėmesį į pasirinktą vietą, siekiant atitraukti dėmesį nuo kitos.",
      },
      priceComp: "Kainų palyginimo prevencija",
      priceCompDesc: {
        main: "Pardavėjas apsunkina prekių kainų palyginimą, todėl naudotojui sunkiau priimti pagrįstą sprendimą.",
      },
      zuck: "Privatumo Zuckeringas",
      zuckDesc: {
        main: "Naudotojas apgaunamas viešai pateikti daugiau informacijos apie save negu buvo planavęs. Pavadintas Facebook CEO Mark Zuckenberg vardu.",
      },
      roach: "Kuojos motelis",
      roachDesc: {
        main: "Dizainas sudaro labai palankias sąlygas naudotojui pakliūti į tam tikras situacijas, tačiau labai apsunkina iš jų išeiti, pavyzdžiui prenumeratos.",
      },
      sneak: "Sėlinimas į krepšelį ",
      sneakDesc: {
        main: "Apsipirkinėjimo metu puslapis nepastebimai prideda prekę į naudotojo krepšelį",
      },
      trickQuestions: "Klaidinantys klausimai",
      trickQuestionsDesc: {
        main: "Pateikiami klausimai, kuriuose iš pirmo žvilgsnio atrodo, jog klausia vieno, tačiau pasigilinus pasirodo, jog klausimas klausia visai ne to.",
      },
    },
    quiz: {
      heading:
        "Viktorina: Kaip gerai esi susipažinęs su apgaulingaisiais šablonais?",
      score: "Teisingai atsakei ",
    },
    register: {
      heading: "Registruoti apgaulingąjį šabloną",
      urlLabel: "Svetainės adresas (URL)",
      urlHelperText:
        "Prašome pateikti svetainės, kurioje pastebėjote apgaulingąjį šabloną URL adresą",
      descLabel: "Apibūdinimas",
      descHelperText:
        "Prašome apibūdinti kurioje vietoje pastebėjote apgaulingąjį šabloną",
      typeLabel: "Tipas",
      typeHelperText: "Prašome įrašyti apgaulingojo šablono tipą, jei žinote",
      avoidanceLabel: "Išvengimas",
      avoidanceHelperText:
        "Prašome įrašyti kaip išvengti šio apgaulingojo šablono jei žinote",
      emailLabel: "El. paštas",
      emailHelperText:
        "Prašome pateikti savo el. pašto adresą, jei turėtume daugiau klausimų apie Jūsų pateiktą informaciją (neprivaloma)",
    },
    extension: {
      heading: "Apie Google Chrome plėtinį ",
      name: "Find Dark Patterns",
      testBttn: "Testuoti plėtinį",
    },
    testExt: {
      heading: "Plėtinio testavimas",
      lastSubmit: "Paskutinį kartą užsakyta prieš 10min",
      price: 'Kaina',
    },
  },
});

strings.setLanguage("en");

export default strings;
