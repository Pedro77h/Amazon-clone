export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  categories: ICategories[];
  images: IImages[];
  reviews: IReview[];
}

export interface ICategories {
  id: string;
  name: string;
}

export interface IImages {
  width: number;
  height: number;
  fileName: string;
  url: string;
}

export interface IReview {
  id: string;
  rating: string;
  email: string;
  name: string;
  headline: string;
  content: string;
}
