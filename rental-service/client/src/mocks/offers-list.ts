import { OfferList } from "../types/offer";

export const offerList : OfferList[] = [
    {
    id: '1',
    title: 'Уютная квартира в центре Парижа',
    type: 'apartment',
    price: 200,
    city: {
      name: 'Paris',
      location: { latitude: 48.8566, longitude: 2.3522, zoom: 16},
      
    },
    location: { latitude: 48.8566, longitude: 2.3522, zoom: 16 },
    isFavorite: true,
    isPremium: true,
    rating: 4.7,
    previewImage: '/img/1 (1).webp'
  },
  {
    id: '3',
    title: 'Современная студия в сердце Кёльна',
    type: 'apartment',
    price: 300,
    city: {
      name: 'Cologne',
      location: { latitude: 50.938361, longitude: 6.959974, zoom: 16 },
    },
    location: { latitude: 50.938361, longitude: 6.959974, zoom: 16 },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: '/img/1 (7).webp'
    
  },
  {
    id: '7',
    title: 'Дом на канале в Амстердаме',
    type: 'house',
    price: 300,
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.370216, longitude: 4.895168 , zoom: 16},
    },
    location: { latitude: 52.370216, longitude: 4.895168, zoom: 16 },
    isFavorite: true,
    isPremium: true,
    rating: 4.5,
    
    previewImage: '/img/1 (13).webp'
  },
  {
    id: '9',
    title: 'Отель с видом на гавань',
    type: 'hotel',
    price: 400,
    city: {
      name: 'Hamburg',
      location: { latitude: 53.550341, longitude: 10.000654 , zoom: 16},
    },
    location: { latitude: 53.550341, longitude: 10.000654 , zoom: 16},
    isFavorite: false,
    isPremium: true,
    rating: 4.9,
    previewImage: '/img/1 (19).webp'
  },
  {
    id: '10',
    title: 'Luxury Apartment in Amsterdam Center',
    type: 'apartment',
    price: 300,
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.370216, longitude: 4.895168, zoom: 16 },
    },
    location: { latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 16 },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: '/img/1 (25).webp'
  },
  {
    id: '11',
    title: 'Modern Studio near Museum Square',
    type: 'studio',
    price: 150,
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.370216, longitude: 4.895168, zoom: 16 },
    },
    location: { latitude: 52.3609553943508, longitude: 4.85309666406198, zoom: 16 },
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
    previewImage: '/img/1 (31).webp'
  },
  {
    id: '12',
    title: 'Canal View House',
    type: 'house',
    price: 250,
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.370216, longitude: 4.895168, zoom: 16 },
    },
    location: { latitude: 52.3909553943508, longitude: 4.929309666406198, zoom: 16 },
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
    previewImage: '/img/1 (37).webp'
  },
  {
    id: '13',
    title: 'Cozy Room in Jordaan District',
    type: 'room',
    price: 100,
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.370216, longitude: 4.895168, zoom: 16 },
    },
    location: { latitude: 52.3809553943508, longitude: 4.939309666406198, zoom: 16 },
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    previewImage: '/img/1 (43).webp'
  },
];