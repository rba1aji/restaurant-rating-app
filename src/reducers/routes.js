import FilterComponent from '../pages/Filter';
import HomeComponent from '../pages/Home';
import TopRatedComponent from '../pages/TopRated';
import NearbyComponent from '../pages/Nearby';
import PutRatingComponent from '../pages/PutRating';

const routes = [
  {
    private: false,
    path: '/',
    component: HomeComponent,
    title: 'Home',
  },
  {
    private: false,
    path: '/filter',
    component: FilterComponent,
    title: 'Filter',
  },
  {
    private: false,
    path: '/near-by-restaurants',
    component: NearbyComponent,
    title: 'Nearby',
  },
  {
    private: false,
    path: '/top-rated-restaurants',
    component: TopRatedComponent,
    title: 'Top Rated',
  },
  {
    private: true,
    path: '/put-rating',
    component: PutRatingComponent,
    title: 'Put Rating',
  },
];

export default routes;
