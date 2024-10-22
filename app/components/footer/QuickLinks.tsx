import React from 'react';
import styles from './Footer.module.css';
import { QuickLink } from '../../types/footer';

interface QuickLinksProps {
  links: QuickLink[];
}

export const QuickLinks: React.FC<QuickLinksProps> = ({ links }) => (
  <div className={styles.quickLinksSection}>
    <h4 className={styles.sectionTitle}>Otros Links</h4>
    <ul className={styles.quickLinksList}>
      {links.map((link) => (
        <li key={link.name}>
          <a href={link.href} className={styles.quickLink}>
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);