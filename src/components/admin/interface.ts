export interface Product {
  id: number;
  title: string; 
  tag: string; 
  description: string;
  rating: number; 
  review: string; 
  price: number; 
  image_url?: string;
  }
  
  export interface Order {
    id: number;
    customerName: string;
    email: string;
    phone: string;
    address: string;
    items: {
      productId: string;
      productName: string;
      quantity: number;
      price: string;
    }[];
    total: string;
    status: "pending" | "processing" | "completed" | "cancelled";
    orderDate: string;
  }
  
  export interface MainPageSettings {
    heroTitle: string;
    heroSubtitle: string;
    featuredProductIds: string[];
    announcement: string;
  }