export interface IProduct {
  date: string;
  id: number;
  isNew: boolean;
  order: number;
  photo: string;
  serialNumber: number;
  specification: string;
  title: string;
  guarantee: {
    end: Date;
    start: Date;
  };
  type: string;
  price: number;
}

export interface IOrder {
  id: number;
  title: string;
  quantity: number;
  price: number;
  date: Date;
  photo: string;
}
