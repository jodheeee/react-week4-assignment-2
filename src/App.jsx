import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import RestaurantsCreateContainer from './RestaurantsCreateContainer';

import CategoriesContainer from './CategoriesContainer';

import { loadRestaurants, loadCategories } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRestaurants());
  }, []);

  return (
    <div>
      <h2>Restaurants</h2>
      <CategoriesContainer />
      <RestaurantsContainer />
      <RestaurantsCreateContainer />
    </div>
  );
}
