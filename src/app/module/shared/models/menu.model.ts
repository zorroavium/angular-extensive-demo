export interface MenuItem {
    title: string;
    icon: string;
    link: string;
    color?: string;
    isActive?: boolean;
  }
  
  export type Menu = MenuItem[];
  