
type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom:number;
};

type CityOffer = {
  name: string;
  location: OfferLocation;
};

type HostOffer = {
  avatarUrl: string;
  name: string;
  isPro: boolean;
};

export type FullOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityOffer;
  location: OfferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: HostOffer;
  images: string[];
  maxAdults: number;
};

export type OfferList = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityOffer;
  location: OfferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type FavoriteOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  city: string;
};
