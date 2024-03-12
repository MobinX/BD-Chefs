import { wishListGetUri, addWishListUri, removeWishListUri } from './app_const';
import { getCookie } from './cookie_utils';

const headers = {
  'Content-Type': 'application/json; charset=UTF-8',
  'zoneId': JSON.stringify(getCookie('zoneId') || ''),
  'localizationKey': getCookie('languageCode') || '',
  'latitude': JSON.stringify(getCookie('latitude') || ''),
  'longitude': JSON.stringify(getCookie('longitude') || ''),
  'Authorization': `Bearer ${getCookie('token') || ''}`
};

const getWishList = async () => {
  try {
    const response = await fetch(wishListGetUri, { headers });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addWishList = async (id, isRestaurant) => {
  try {
    const url = `${addWishListUri}${isRestaurant ? 'restaurant_id=' : 'food_id='}${id}`;
    const response = await fetch(url, { method: 'POST', headers });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const removeWishList = async (id, isRestaurant) => {
  try {
    const url = `${removeWishListUri}${isRestaurant ? 'restaurant_id=' : 'food_id='}${id}`;
    const response = await fetch(url, { method: 'DELETE', headers });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
  getWishList,
  addWishList,
  removeWishList
};
