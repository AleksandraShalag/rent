import { createRoot } from 'react-dom/client'
import { App } from './components/app/app'
import { offers } from './mocks/offers'; 
import React from 'react';
import { Setting } from './const';
import { offerList } from './mocks/offers-list';
import { favoritesMock } from './mocks/favorites';


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App 
      rentalOffersCount = {Setting.RentalOffersCount}
      offers = {offers}
      offerList={offerList}
      favorites={favoritesMock}
    />
  </React.StrictMode>
);

