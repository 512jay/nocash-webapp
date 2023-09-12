// src/routesData.js

import Home from './components/Home'; 
import About from './components/About'; 
import Contact from './components/Contact'; 

const routesData = [
    { path: '/', component: Home, label: 'Home' },
    { path: '/about', component: About, label: 'About' },
    { path: '/contact', component: Contact, label: 'Contact' },
  ];
  
  export default routesData;
  