import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import RestaurantsCreateContainer from './RestaurantsCreateContainer';

import {
  setRestaurants,
} from './actions';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setRestaurants([]));
  }, []);

  return (
    <div>
      <h2>Restaurants</h2>
      <RestaurantsContainer />
      <RestaurantsCreateContainer />
    </div>
  );
}
