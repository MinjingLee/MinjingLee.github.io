module.exports = {
  pathPrefix: '',
  siteUrl: 'https://minjinglee.github.io',
  title: 'MinjingLee',
  description: 'Personal Website of MinjingLee',
  author: 'Minjing Lee',
  authorAlternative: '李旻璟',
  introduction: [
    'I am currently an undergraduate student majoring in Microelectronics and minoring in Philosophy at Shanghai Jiao Tong University[(SJTU)](https://en.sjtu.edu.cn/).',
    'My research interest mainly lies in Analog and RF integrated circuits design. Currently I am interested in the RF front-end circuits exploiting N-Path techniques. I want to make wireless circuits and systems more efficient to help protect the earth.',
    'I am applying for PhD programs, and I expect to graduate in Summer 2023. Please reach out to me if you are looking for PhD students.',
  ],
  avatar: 'avatar.png',
  professions: ['Undergraduate Student'],
  tocMaxDepth: 2,
  excerptMaxLength: 500,
  birthday: 'Some day',
  location: 'Shanghai, China',
  email: 'minjing.lee@sjtu.edu.cn',
  language: '中文, English',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript:
    process.env.DISQUS_SCRIPT || 'https://boyanzh.disqus.com/embed.js',
  pages: {
    home: '/',
    posts: 'posts',
    contact: 'contact',
    resume: 'resume',
    tags: 'tags',
    project: 'project',
    research: 'research',
  },
  social: [
    {
      url: '/resume.pdf',
      icon: ['ai', 'cv'],
    },
    {
      url: 'https://github.com/MinjingLee',
      icon: ['fab', 'github'],
    },
//    {
//      url: 'https://twitter.com/BoYanZh233',
//      icon: ['fab', 'twitter'],
//    },
//    {
//      url: 'https://www.linkedin.com/in/boming-zhang-1aba46244/',
//      icon: ['fab', 'linkedin'],
//    },
  ],
  // facebook: 'https://www.facebook.com/rolwin.monteiro',
  // instagram: 'https://www.instagram.com/reevan100/',
  // rss: '/rss.xml',
  wakatime: {
  
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || '',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'UA-XXXXXXXXX-X',
  education: [
    {
      date: 'Sept. 2019 - Aug. 2023',
      icon: 'university',
      title: 'B.Eng in Microelectronics (minor in Philosophy)',
      location: 'Shanghai Jiao Tong University, China',
    },
    {
      date: 'Sept. 2016- June 2019',
      icon: 'school',
      title: 'High School',
      location: 'No.2 High School Of East China Normal University, Zizhu, China',
    },
  ],
  interests: [
    {
      icon: 'circuits',
      title: 'Full Stack Development',
    },
    {
      icon: 'chip',
      title: 'Analog Integrated Circuits',
    },
//    {
//      icon: ['fab', 'docker'],
//      title: 'Container Technology',
//    },
//    {
//      icon: ['fab', 'linux'],
//      title: 'Open Source Community',
//    },
  ],
  experience: [
    
    {
      title: 'Laboratory',
      position: 'left',
      data: [
        {
          date: 'Mar. 2021 - Feb. 2022',
          title: 'Research Assistant',
          location: 'Center for Analog/RF Integrated Circuits(CARFIC), Shanghai Jiao Tong University',
          description: 'Advisor: Prof. Xiaoming Liu, Prof. Jing Jin'
        },
        {
          date: 'Mar. 2021 - Sep. 2021',
          title: 'Research Assistant',
          location: 'Center for Analog/RF Integrated Circuits(CARFIC), Shanghai Jiao Tong University',
          description: 'Advisor: Prof. Jing Jin'
        },
       
      ],
    },
    {
      title: 'Student Organization',
      position: 'right',
      data: [
        {
          date: 'Dec. 2021 – Present',
          title: 'President',
          location: 'SJTU Outdoor Association',
        },
        {
          date: '2021',
          title: 'Co-Founder',
          location:
            'Philosophy Club',
        },
        {
          date: 'Sept. 2020 - Present',
          title: 'Member',
          location: 'SJTU Baseball Team',
        },
      ],
    },
    {
      title: 'Coursework',
      position: 'left',
      data: [
        {
          date: 'TBD',
          location: 'TBD',
        },
        
      ],
    },
  ],
  awards: [
    {
      date: '2022',
      title: 'National First Prize, The 6th China College IC Competition(IEEE Cup)',
    }, {
      date: '2021',
      title: 'SJTU Undergraduate Excellence Scholarship',
    }, {
      date: '2019, 2020, 2021',
      title: 'Taiwanese Students Scholarship',
    },
  ],
  tagColors: [
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple',
  ],
  tags: [
    {
      id: 'javascript',
      name: 'javascript',
      description:
        'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      description:
        'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    {
      id: 'rxjs',
      name: 'RxJS',
      description:
        'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    {
      id: 'typescript',
      name: 'typescript',
      description:
        'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    {
      id: 'reactjs',
      name: 'reactjs',
      description:
        'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    {
      id: 'gatsby',
      name: 'Gatsby.js',
      description:
        'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    {
      id: 'html',
      name: 'HTML',
      description:
        'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    {
      id: 'css',
      name: 'css',
      description:
        'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    {
      id: 'python',
      name: 'python',
      description:
        'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
  ],
};
