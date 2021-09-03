export interface IFeed {
  xid: number;
  name: string;
  dueDate: string;
  profileImage: string;
  thumbnail?: string;
  stockName: string;
  title: string;
  contents: string;
  tags: ITag[];
}

export interface ITag {
  name: string;
  color?: string;
}

export interface ITagsList {
  tags: ITag[];
}

export interface IStock {
  xid: number;
  name: string;
  thumbnal: string;
  price: number;
}

export interface IMyStock {
  stock: IStock;
  holding: number;
}

export interface IUser {
  xid: number;
  name: string;
  stockHolding: IMyStock[];
  totalPrice: number;
}

export interface ITrade {
  stock: IStock;
  count: number;
  increment: () => number;
  type: "limitOrder" | "marketOrder";
}

export interface IModal {
  isOpen: Boolean;
  modalOpen(type: Boolean): void;
  contents?: string;
}

export interface ISmallGraph {
  color: string;
  value: number[];
}
