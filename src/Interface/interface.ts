// Interface/interface.ts
export interface ServiceCardProps {
    card: {
      url: string;
      name: string;
      description:string;
      key:any
      // other properties of the card
    };
  }
  
  export interface ConsultancyService {
    category: string;
    url:string;
    services: {
      name: string;
        description:string;
      // other properties of the service
    }[];
  }
  