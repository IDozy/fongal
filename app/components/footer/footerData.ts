import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { QuickLink, SocialLink } from '../../types/footer';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './SocialIcon';

export const QUICK_LINKS: QuickLink[] = [
  { name: 'Nosotos', href: '/about' },
  { name: 'Contacto', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/quipu',
    icon: FaFacebook,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/quipu',
    icon: FaInstagram,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/quipu',
    icon: FaTwitter,
  },
];