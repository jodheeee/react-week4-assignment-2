import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantForm from './RestaurantForm';

import { addRestaurant, changeRestaurantField } from './actions';

export default function RestaurantsCreateContainer() {
  const dispatch = useDispatch();

  function handleChange({ name, value }) {
    dispatch(changeRestaurantField({ name, value }));
  }

  function handleClick() {
    dispatch(addRestaurant());
  }

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  return (
    <RestaurantForm
      restaurant={restaurant}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}
