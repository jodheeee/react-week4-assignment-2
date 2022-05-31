import reducer from './reducer';

import { setRestaurants, addRestaurant, changeRestaurantField } from './actions';

import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  describe('setRestaurants', () => {
    it('changes restaurants array', () => {
      const initailState = {
        restaurants: [],
      };

      const state = reducer(initailState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });

  describe('changeRestaurantField', () => {
    it('changes restaurant', () => {
      const initailState = {
        restaurant: {
          name: '이름',
          category: '분류',
          address: '주소',
        },
      };

      const state = reducer(initailState, changeRestaurantField({
        name: 'name',
        value: '마법사주방',
      }));

      expect(state.restaurant.name).toBe('마법사주방');
    });
  });

  describe('addRestaurant', () => {
    it('append restaurant into restaurants and clear restaurant form', () => {
      const initailState = {
        newId: 100,
        restaurants: [],
        restaurant: {
          name: '마법사주방',
          category: '이탈리안',
          address: '서울시 강남구 역삼동',
        },
      };

      const state = reducer(initailState, addRestaurant());

      expect(state.restaurants).toHaveLength(1);

      const restaurant = state.restaurants[state.restaurants.length - 1];
      expect(restaurant.id).toBe(100);
      expect(restaurant.name).toBe('마법사주방');

      expect(state.restaurant.name).toBe('');

      expect(state.newId).toBe(101);
    });
  });
});
