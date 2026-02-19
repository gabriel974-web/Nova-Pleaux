import pkg from '../../package.json';

export const themeConfig = [
  {
    option: 'Midnight',
    value: {
      theme: 'default',
      type: 'dark',
      settingsContainerColor: '#18283e',
      navItemActive: '#c1d4f1',
      settingsSearchBar: '#3c475a',
      settingsPanelItemBackgroundColor: '#405a77',
      settingsDropdownColor: '#162337',
      siteTextColor: '#a0b0c8',
      bgDesignColor: '66, 69, 73',
      glowWrapperColor: '255, 255, 255',
      switchColor: '#ffffff1a',
      switchEnabledColor: '#4c6c91',
      bgColor: '#111827',
      quickModalBgColor: '#252f3e',
      paginationTextColor: '#9baec8',
      paginationBorderColor: '#ffffff1c',
      paginationBgColor: '#141d2b',
      paginationSelectedColor: '#75b3e8',
      themeName: 'defaultTheme',
      /* loader */
      tabColor: "#111e2fb0",
      tabOutline: "#344646",
      barColor: "#09121e",
      tabBarColor: "#070e15",
      omninputColor: "#06080d8f",
      menuColor: "#1a252f"
   },
  },

  {
    option: 'Light',
    value: {
      theme: 'light',
      type: 'light',
      settingsContainerColor: '#e4e4e5',
      navItemActive: '#111827',
      settingsSearchBar: '#e5e7eb',
      settingsPanelItemBackgroundColor: '#e5e7eb',
      settingsDropdownColor: '#ffffff',
      siteTextColor: '#374151',
      bgDesignColor: '209, 213, 219',
      glowWrapperColor: '17, 24, 39',
      switchColor: '#cdcdcd',
      switchEnabledColor: '#9ca3af',
      bgColor: '#f9fafb',
      quickModalBgColor: '#f3f4f6',
      paginationTextColor: '#4c4c4c',
      paginationBorderColor: '#d1d1d170',
      paginationBgColor: '#ffffff',
      paginationSelectedColor: '#797979b8',
      themeName: 'lightTheme',
      /* loader */
      tabColor: "#ffffff",
      tabOutline: "#b2b2b2",
      barColor: "#ffffff",
      tabBarColor: "#d0d0d0",
      omninputColor: "#c6c6c68f",
      menuColor: "#fff"
    },
  },
];

export const meta = [
  {
    option: 'Default',
    value: {
      tabName: `v5-${__ENVIRONMENT__}-${pkg.version}`,
      tabIcon: '/icon.svg',
    },
  },
  {
    option: 'Google',
    value: {
      tabName: 'Google',
      tabIcon: 'https://google.com/favicon.ico',
    },
  },
  {
    option: 'Bing',
    value: {
      tabName: 'Bing',
      tabIcon: 'https://bing.com/favicon.ico',
    },
  },
  {
    option: 'Gmail',
    value: {
      tabName: 'Gmail',
      tabIcon: '/assets/img/gmail.ico',
    },
  },
  {
    option: 'Wikipedia',
    value: {
      tabName: 'Wikipedia',
      tabIcon: '/assets/img/wikipedia.ico',
    },
  },
  {
    option: 'Schoology',
    value: {
      tabName: 'Home | Schoology',
      tabIcon: '/assets/img/schoology.ico',
    },
  },
  {
    option: 'Google Classroom',
    value: {
      tabName: 'Home',
      tabIcon: '/assets/img/classroom.png',
    },
  },
  {
    option: 'ClassLink',
    value: {
      tabName: 'ClassLink',
      tabIcon: '/assets/img/classlink.ico',
    },
  },
  {
    option: 'Quizlet',
    value: {
      tabName: 'Quizlet: Study Tools & Learning Resources for Students and Teachers | Quizlet',
      tabIcon: '/assets/img/quizlet.png',
    },
  },
  {
    option: 'Big Ideas Math',
    value: {
      tabName: 'Big Ideas Math',
      tabIcon: '/assets/img/bigideasmath.ico',
    },
  },
  {
    option: 'Khan Academy',
    value: {
      tabName: 'Dashboard | Khan Academy',
      tabIcon: '/assets/img/khan.png',
    },
  },
];

export const searchConfig = [
 {
    option: 'DuckDuckGo',
    value: {
      engineName: 'DuckDuckGo',
      engine: 'https://duckduckgo.com/?q=',
      engineIcon: 'https://duckduckgo.com/favicon.ico',
    },
  },
  {
    option: 'Bing',
    value: {
      engineName: 'Bing',
      engine: 'https://www.bing.com/search?q=',
      engineIcon: 'https://www.bing.com/favicon.ico',
    },
  },
  {
    option: 'Brave',
    value: {
      engineName: 'Brave',
      engine: 'https://search.brave.com/search?q=',
      engineIcon: 'https://brave.com/static-assets/images/brave-logo-sans-text.svg',
    },
  },
  {
    option: 'Yahoo',
    value: {
      engineName: 'Yahoo',
      engine: 'https://search.yahoo.com/search?p=',
      engineIcon: '',
    },
  },
  {
    option: 'Startpage',
    value: {
      engineName: 'Startpage',
      engine: 'https://www.startpage.com/sp/search?q=',
      engineIcon: '',
    },
  },
  {
    option: 'Ecosia',
    value: {
      engineName: 'Ecosia',
      engine: 'https://www.ecosia.org/search?q=',
      engineIcon: '',
    },
  },
  {
    option: 'Ask',
    value: {
      engineName: 'Ask',
      engine: 'https://www.ask.com/web?q=',
      engineIcon: '',
    },
  },
  {
    option: 'Baidu',
    value: {
      engineName: 'Baidu',
      engine: 'https://www.baidu.com/s?wd=',
      engineIcon: '',
    },
  },
  {
    option: 'Dogpile',
    value: {
      engineName: 'Dogpile',
      engine: 'https://www.dogpile.com/serp?q=',
      engineIcon: '',
    },
  },
  {
    option: 'Kagi',
    value: {
      engineName: 'Kagi',
      engine: 'https://kagi.com/search?q=',
      engineIcon: '',
    },
  },
  {
    option: 'Lycos',
    value: {
      engineName: 'Lycos',
      engine: 'https://search.lycos.com/web/?q=',
      engineIcon: '',
    },
  },
  {
    option: 'Mojeek',
    value: {
      engineName: 'Mojeek',
      engine: 'https://www.mojeek.com/search?q=',
      engineIcon: '',
    },
  },
  {
    option: 'Qwant',
    value: {
      engineName: 'Qwant',
      engine: 'https://www.qwant.com/?q=',
      engineIcon: '',
    },
  },
  {
    option: 'Swisscows',
    value: {
      engineName: 'Swisscows',
      engine: 'https://swisscows.com/web?query=',
      engineIcon: '',
    },
  },
  {
    option: 'Yandex',
    value: {
      engineName: 'Yandex',
      engine: 'https://yandex.com/search/?text=',
      engineIcon: '',
    },
  },
  {
    option: 'You.com',
    value: {
      engineName: 'You.com',
      engine: 'https://you.com/search?q=',
      engineIcon: '',
    },
  },
  {
    option: 'SearXNG (metasearch)',
    value: {
      engineName: 'SearXNG',
      engine: 'https://searx.be/search?q=',
      engineIcon: '',
    },
  },
  {
    option: 'Presearch',
    value: {
      engineName: 'Presearch',
      engine: 'https://presearch.com/search?q=',
      engineIcon: '',
    },
  },
  {
    option: 'Petal',
    value: {
      engineName: 'Petal',
      engine: 'https://petalsearch.com/search?query=',
      engineIcon: '',
    },
  },
  {
    option: 'Sogou',
    value: {
      engineName: 'Sogou',
      engine: 'https://www.sogou.com/web?query=',
      engineIcon: '',
    },
  },
  {
    option: 'Gigablast',
    value: {
      engineName: 'Gigablast',
      engine: 'https://www.gigablast.com/search?q=',
      engineIcon: '',
    },
  },
  {
    option: 'YaCy (p2p)',
    value: {
      engineName: 'YaCy',
      engine: 'https://yacy.searchlab.eu/yacysearch.json?query=',
      engineIcon: '',
    },
  },
  {
    option: 'WebCrawler',
    value: {
      engineName: 'WebCrawler',
      engine: 'https://www.webcrawler.com/serp?q=',
      engineIcon: '',
    },
  },
];

export const appsPerPageConfig = [
  { option: '20 apps', value: { itemsPerPage: 20 } },
  { option: '30 apps', value: { itemsPerPage: 30 } },
  { option: '40 apps', value: { itemsPerPage: 40 } },
  { option: '50 apps', value: { itemsPerPage: 50 } },
  { option: '75 apps', value: { itemsPerPage: 75 } },
  { option: '100 apps', value: { itemsPerPage: 100 } },
  { option: 'All', value: { itemsPerPage: 10000 } },
];

export const navScaleConfig = [
  { option: '50%', value: { navScale: 0.5 } },
  { option: '80%', value: { navScale: 0.8 } },
  { option: '90%', value: { navScale: 0.9 } },
  { option: '100%', value: { navScale: 1 } },
  { option: '110%', value: { navScale: 1.1 } },
  { option: '120%', value: { navScale: 1.2 } },
  { option: '130%', value: { navScale: 1.3 } },
];

export const prConfig = [
   {
    option: 'Scramjet by Gabriel',
    value: {
      prType: 'scr',
    },
  },
];

export const designConfig = [
  {
    option: 'Dots',
    value: {
      bgDesign: 'dots',
      getCSS: (color) => `radial-gradient(circle, rgba(${color},0.112) 3px, transparent 1px)`,
    },
  },
  {
    option: 'Stripes',
    value: {
      bgDesign: 'diagonalStripes',
      getCSS: (color) => `
        repeating-linear-gradient(
          45deg,
          rgba(${color},0.15),
          rgba(${color},0.15) 2px,
          transparent 2px,
          transparent 8px
        )`,
    },
  },
  {
    option: 'Griddy',
    value: {
      bgDesign: 'grid',
      getCSS: (color) => `
        linear-gradient(to right, rgba(${color},0.2) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(${color},0.2) 1px, transparent 1px)
      `,
    },
  },
  {
    option: 'None',
    value: {
      bgDesign: 'none',
    },
  },
];
