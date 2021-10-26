import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faStackOverflow, faLinkedin, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.JPG';

const profile = {
  disable: false,

  // image: 'https://drive.google.com/file/d/0B_EoM2j95001ejRQZzlmbDVJWkE/view?usp=sharing&resourcekey=0-FJluC6o40SaJRORcv1axgQ',
  image,
  name: {
    title: 'Vinil Prabhu',
    small: '',
  },
  contact: [
    {
      title: 'vinilprabhu@gmail.com',
      link: 'mailto:vinilprabhu@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '+919158348227',
      link: 'tel:+919158348227',
      icon: faPhone,
    },
  ],
  links: [
    {
      title: 'GitHub',
      link: 'https://github.com/vinilprabhu',
      icon: faGithub,
    },
    {
      title: 'Stack Overflow',
      link: 'https://stackoverflow.com/users/5895297/vinil-prabhu',
      icon: faStackOverflow,
    },
    {
      title: 'Linkedin',
      link: 'https://www.linkedin.com/in/vinilprabhu/',
      icon: faLinkedin,
    },
    {
      title: 'Linkedin',
      link: 'https://play.google.com/store/apps/developer?id=Vinil+Prabhu',
      // icon: faRss,
      icon: faGooglePlay,
    },
  ],
  notice: {
    title: "under progress.",
    icon: faBell,
    enabled: false,
  },
};

export default profile;
