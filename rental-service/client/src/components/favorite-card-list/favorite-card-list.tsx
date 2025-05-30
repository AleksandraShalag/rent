import FavoriteCard from '../favorite-card/favorite-card';
import { FavoriteOffer } from '../../types/offer';
import { JSX } from 'react';

type FavoriteCardListProps = {
  offers: FavoriteOffer[];
};

function FavoriteCardList({ offers }: FavoriteCardListProps): JSX.Element {
  // Группируем предложения по городу
  const groupedOffers = offers.reduce<Record<string, FavoriteOffer[]>>((acc, offer) => {
    if (!acc[offer.city]) {
      acc[offer.city] = [];
    }
    acc[offer.city].push(offer);
    return acc;
  }, {});

  return (
    <ul className="favorites__list">
      {Object.entries(groupedOffers).map(([city, cityOffers]) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {cityOffers.map((offer) => (
              <FavoriteCard key={offer.id} offer={offer} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoriteCardList;
