export interface Article {
  slug: string;
  date: string;
  images: [Image];
  quantity: number;
  text: string;
  title: string;
  price: number;
  id: string;
}

export interface Image {
  image: {
    title: string;
    url: string;
  };
}