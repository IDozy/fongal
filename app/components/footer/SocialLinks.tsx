import React from 'react';
import styles from './Footer.module.css';
import { SocialLink } from '../../types/footer';

interface SocialLinksProps {
  links: SocialLink[];
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => (
  <div className={styles.socialLinksSection}>
    <h4 className={styles.sectionTitle}>Síguenos</h4>
    <div className={styles.socialIconsContainer}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={styles.socialLink}
          aria-label={`Follow us on ${link.name}`}
        >
          <link.icon />
        </a>
      ))}
    </div>
  </div>
);