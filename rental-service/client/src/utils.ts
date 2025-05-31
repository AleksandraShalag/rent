
import { SortOffersType } from './const';
import { CityOffer, OfferList } from './types/offer';

export function getCity(name: string, cities: CityOffer[]): CityOffer {
  return cities.find((city) => city.name === name)!;
}
export function getOffersByCity(
  cityName: string,
  offers: OfferList[]
): OfferList[] {
  return offers.filter((offer) => offer.city.name === cityName);
}

export function sortOffersByType(offers: OfferList[], type: keyof typeof SortOffersType): OfferList[] {
  
  switch (type) {
    case SortOffersType.PriceToHigh:
      return offers.sort((a,b)=> a.price-b.price);
    case SortOffersType.PriceToLow:
      return offers.sort((a,b)=> b.price-a.price);
    case SortOffersType.TopRated:
      return offers.sort((a,b)=> b.rating-a.rating);
    default:
      return offers;
  }
}
