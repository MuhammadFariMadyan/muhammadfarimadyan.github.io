const data = {
  nav: {
    title: {
      text: `M. Fari M`,
      link: `#app`
    },
    navLinks: [
      {
        name: `Home`,
        url: `#app`
      },
      {
        name: `About`,
        url: `#about`
      },
      {
        name: `Projects`,
        url: `#projects`
      },
      {
        name: `Contact`,
        url: `#contact`
      },
      {
        name: `Download My CV`,
        url: `./portofolio_fari.pdf`
      },
      {
        name: `My Projects`,
        url: `./portofolio_projects.docx`
      }
    ]
  },
  jumbo: {
    text: `Hi, I'm Fari. I like sharing & build websites.`,
    buttonText: `Yes, I'm available for hire.`,
    buttonLink: `#contact`,
    scrollDownLink: "#about",
    img: `img/desk4.jpg`
  },
  about: {
    img: `img/me.jpeg`,
    aboutText: `Passionate programmer pursuing a career path in web/app development and mixed reality technologies. Always learn new things with strong passion for research and development.`
  },
  portfolio: {
    backgroundImg: `img/zipper.png`,
    projects: [
      {
        title: `Bot Weather`,
        description: `Bot weather for monitoring cuaca with apiopeanweather.org`,
        img: `img/react-bot.png`,
        link: `https://react-bot.netlify.com/`,
        tags: [`React`, `BOT`]
      },
      {
        title: `adminlte-ejs-express`,
        description: `AdminLTE EJS on Express JS`,
        img: `img/adminlte-ejs-express.png`,
        link: `https://adminlte-ejs-express.herokuapp.com/dashboardv1`,
        tags: [`JavaScript`, `React`]
      },
      {
        title: `CRUD Siswa Express.js`,
        description: `CRUD Siswa`,
        img: `img/crud-siswa-express.png`,
        link: `https://crud-express-1.herokuapp.com/siswa`,
        tags: [`JavaScript`, `express js`]
      },
      {
        title: `Trello clone`,
        description: `Trello Clone`,
        img: `img/trello-clone.png`,
        link: `https://replika-trello.netlify.com/`,
        tags: [`JavaScript`, `APIs`, `firebase`]
      },
      {
        title: `Santren Koding Clone`,
        description: `Santren Koding Clone with React`,
        img: `img/santren-koding.png`,
        link: `https://santrenkoding-copyright.netlify.com/`,
        tags: [`JavaScript`, `React`, `react-strap`]
      },
      {
        title: `Online Exam`,
        description: `E-LEARNING INFORMATION SYSTEM FOR ONLINE EXAM`,
        img: `https://raw.githubusercontent.com/MuhammadFariMadyan/laravel-elearning/master/screenshot/11-halaman-login.png`,
        link: `https://github.com/MuhammadFariMadyan/laravel-elearning`,
        tags: [`Laravel`]
      },
      {
        title: `Point Of Sale`,
        description: `Is a cashier register for your small business.`,
        img: `https://raw.githubusercontent.com/MuhammadFariMadyan/laravel-pos/master/screenshot/halaman-login.png`,
        link: `https://github.com/MuhammadFariMadyan/laravel-pos`,
        tags: [`Laravel`]
      },
      {
        title: `Medical Record`,
        description: `Is a complete application for puskesmas operations, including Outpatient, Inpatient, Medical record, reference letter and period report.`,
        img: `https://raw.githubusercontent.com/MuhammadFariMadyan/laravel-rekam-medis-puskesmas/master/screenshot/HL.png`,
        link: `https://github.com/MuhammadFariMadyan/laravel-rekam-medis-puskesmas`,
        tags: [`Laravel`]
      }
    ]
  },
  contact: {
    email: `fari.msenju@gmail.com`
  },
  social: [
    {
      name: "twitter",
      shortlink: "twitter.com/FariMsenju/",
      fullLink: "https://twitter.com/FariMsenju/",
      img: "",
      fontAwesome: true
    },
    {
      name: "github",
      shortlink: "github.com/MuhammadFariMadyan/",
      fullLink: "https://github.com/MuhammadFariMadyan/",
      img: "",
      fontAwesome: true
    },
    {
      name: "linkedin",
      shortlink: "linkedin.com/in/muhammadfarimadyan",
      fullLink: "https://www.linkedin.com/in/muhammad-fari-madyan-24b998126",
      img: "",
      fontAwesome: true
    },
    {
      name: "Codecademy",
      shortlink: "codecademy.com/FariMFM",
      fullLink: "https://www.codecademy.com/FariMFM",
      img: "img/cc2w.png",
      fontAwesome: false
    },
    {
      name: "Codesandbox",
      shortlink: "/codesandbox.io/u/MuhammadFariMadyan",
      fullLink: "https://codesandbox.io/u/MuhammadFariMadyan",
      img: "http://cdn.embed.ly/providers/logos/codesandbox.png",
      fontAwesome: false
    }
  ]
};
