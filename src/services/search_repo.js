import { searchUri, suggestedFoodUri, searchHistory } from '@/app_const.js';
import { getCookie } from './cookie_utils.js';
const headers = {
  'Content-Type': 'application/json; charset=UTF-8',
  'zoneId': JSON.stringify(getCookie('zoneId') || ''),
  'localizationKey': getCookie('languageCode') || '',
  'latitude': JSON.stringify(getCookie('latitude') || ''),
  'longitude': JSON.stringify(getCookie('longitude') || ''),
  'Authorization': `Bearer ${getCookie('token') || ''}`
};

const getSearchData = async (query, isRestaurant) => {
  const url = `${searchUri}${isRestaurant ? 'restaurants' : 'products'}/search?name=${query}&offset=1&limit=50`;
  const response = await fetch(url, { headers });
  return response.json();
};

const getSuggestedFoods = async () => {
  const response = await fetch(suggestedFoodUri, { headers });
  return response.json();
};

const saveSearchHistory = (searchHistories) => {
  localStorage.setItem(searchHistory, JSON.stringify(searchHistories));
  return true;
};

const getSearchAddress = () => {
  const searchHistories = localStorage.getItem(searchHistory);
  return searchHistories ? JSON.parse(searchHistories) : [];
};

const clearSearchHistory = () => {
  localStorage.setItem(searchHistory, JSON.stringify([]));
  return true;
};

export {
  getSearchData,
  getSuggestedFoods,
  saveSearchHistory,
  getSearchAddress,
  clearSearchHistory
};
