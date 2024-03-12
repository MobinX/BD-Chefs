import { cuisineUri, cuisineRestaurantUri } from './app_const.js';
import { getCookie } from './cookie_utils.js';
const headers = {
  'Content-Type': 'application/json; charset=UTF-8',
  'zoneId': JSON.stringify(getCookie('zoneId') || ''),
  'localizationKey': getCookie('languageCode') || '',
  'latitude': JSON.stringify(getCookie('latitude') || ''),
  'longitude': JSON.stringify(getCookie('longitude') || ''),
  'Authorization': `Bearer ${getCookie('token') || ''}`
};

const getCuisineList = async () => {
  const response = await fetch(cuisineUri, { headers });
  return response.json();
};

const getCuisineRestaurantList = async (offset, cuisineId) => {
  const url = `${cuisineRestaurantUri}?cuisine_id=${cuisineId}&offset=${offset}&limit=10`;
  const response = await fetch(url, { headers });
  return response.json();
};

export { getCuisineList, getCuisineRestaurantList };
