import service1 from './images/cyberint.jpeg';
import service2 from './images/OSINT.jpeg';
import service3 from './images/EDR.jpeg';
import service4 from './images/ids.jpeg';
import service5 from './images/research.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#clients', text: 'clients' },
];
export const socialLinks = [
  { id: 1, href: 'https://www.linkedin.com', icon: 'fab fa-linkedin' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
];

export const clients = [
  {
    id: 1,
    icon: 'fab fa-google',
    title: 'Google',
    text: '“Falcon proactive approach to cybersecurity and exceptional customer service make them our go-to partner for website security." - Google',
  },
  {
    id: 2,
    icon: 'fab fa-paypal',
    title: 'Paypal',
    text: '“We highly recommend Cyber Intelligence and OSINT services from Falcon Security for any business looking to stay ahead of emerging cyber threats.” - Paypal',
  },
  {
    id: 3,
    icon: 'fab fa-microsoft',
    title: 'Microsoft',
    text: '“EDR and IDS/IPS services have been invaluable in protecting our network from potential cyber attacks. We highly recommend their services to any business looking to enhance their cybersecurity posture.” - Microsoft',
  },
];

export const services = [
  {
    id: 1,
    image: service1,
    date: 'august 26th, 2020',
    title: 'Cyber Intelligence',
    info: ` Cyber Intelligence service provides you with insights into the latest cyber threats, enabling you to stay one step ahead of potential attackers. We monitor the dark web and other sources to identify emerging threats and provide actionable intelligence to help you mitigate these risks.`,
    about: 'Read More',
    summary: 'Latest techonlogies',
  },
  {
    id: 2,
    image: service2,
    date: 'october 1th, 2020',
    title: 'OSINT',
    info: ` Open-Source Intelligence (OSINT) service collects and analyzes information from publicly available sources to identify potential vulnerabilities and threats to your business. By monitoring social media, forums, and other online sources, we can provide you with valuable insights into potential risks and help you develop strategies to mitigate them.`,
    about: 'Read More',
    summary: 'Cutting-edge analysis',
  },
  {
    id: 3,
    image: service3,
    date: 'september 15th, 2020',
    title: 'EDR',
    info: ` Endpoint Detection and Response (EDR) service uses advanced technologies to detect and respond to potential threats on your network. By monitoring endpoints, such as laptops, desktops, and mobile devices, we can quickly identify and respond to potential threats before they cause significant damage.`,
    about: 'Read More',
    summary: 'Revolutionary systems',
  },
  {
    id: 4,
    image: service4,
    date: 'december 5th, 2019',
    title: 'IDS/IPS',
    info: ` Intrusion Detection and Prevention (IDS/IPS) service uses advanced technologies to monitor your network for potential threats and respond to them in real-time. By detecting and blocking potential attacks before they reach your network, we can help you keep your business secure and protected.`,
    about: 'Read More',
    summary: 'Most advance monitoring',
  },
  {
    id: 5,
    image: service5,
    date: 'december 5th, 2019',
    title: 'Security Research',
    info: ` Security Research service provides you with insights into the latest cyber threats and emerging trends in the cybersecurity landscape. By conducting in-depth research and analysis, we can help you stay up-to-date on the latest threats and develop strategies to protect your business from potential attacks.`,
    about: 'Read More',
    summary: 'Innovative research',
  },
];