export interface SocialLink {
    name: string;
    href: string;
    icon: React.FC<{ className?: string }>;
  }
  
  export interface QuickLink {
    name: string;
    href: string;
  }