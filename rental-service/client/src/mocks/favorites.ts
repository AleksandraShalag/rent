
import { FavoriteOffer } from '../types/offer';

export const favoritesMock: FavoriteOffer[] = [
  {
    id: '1',
    title: 'Уютная квартира в центре Парижа',
    type: 'apartment',
    price: 200,
    city:  'Paris',
    isPremium: true,
    rating: 4.7,
    previewImage: '/img/1 (1).webp'
  },
  {
    id: '3',
    title: 'Современная студия в сердце Кёльна',
    type: 'apartment',
    price: 300,
    city: 'Cologne',
    isPremium: true,
    rating: 4.8,
    previewImage: '/img/1 (7).webp'
    
  },
  {
    id: '7',
    title: 'Дом на канале в Амстердаме',
    type: 'house',
    price: 300,
    city:'Amsterdam',
    isPremium: true,
    rating: 4.5,
    
    previewImage: '/img/1 (13).webp'
  },
  {
    id: '9',
    title: 'Отель с видом на гавань',
    type: 'hotel',
    price: 400,
    city: 'Hamburg',
    isPremium: true,
    rating: 4.9,
    previewImage: '/img/1 (19).webp'
  },
];