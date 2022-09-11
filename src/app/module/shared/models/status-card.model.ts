export interface Status {
    id: number,
    name: string;
    icon: string;
    value: number;
    color?: string;
  }
  
  export type StatusCard = Status[];
  