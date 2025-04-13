// sitemap.js or in your vite.config.js
const routes = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/projects', name: 'Projects' },
    { path: '/contact', name: 'Contact' },
  ];
  
  ViteSitemap({
    baseUrl: 'https://kevin.clabedautos.com',
    routes,
    generateRobotsTxt: true,
  });  