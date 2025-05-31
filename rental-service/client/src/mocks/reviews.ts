import { Review } from "../types/review";


export const mockReviews: Review[] = [
  {
    id: '1',
    date: '2021-08-10', 
    rating: 4.5, 
    comment: 'Great place!',
    user: { name: 'Max', avatarUrl: '/img/avatar-max.jpg', isPro: true }
  },
  {
    id: '2', 
    date: '2021-09-12', 
    rating: 3.8, 
    comment: 'Good but noisy.',
    user: { name: 'Lisa', avatarUrl: '/img/avatar-angelina.jpg', isPro: true }
  },
  {
    id: '3', 
    date: '2021-09-14', 
    rating: 3.8, 
    comment: 'Great place to stay.',
    user: { name: 'Alice', avatarUrl: '/img/avatar-angelina.jpg', isPro: false }
  },
  {
    id: '4', 
    date: '2021-09-15', 
    rating: 3.8, 
    comment: 'It was great.',
    user: { name: 'Lena', avatarUrl: '/img/avatar-angelina.jpg', isPro: false }
  },
];