import { categoryUri, subCategoryUri, categoryProductUri, categoryRestaurantUri, searchUri, interestUri } from './app_const.js';
import { getCookie } from './cookie_utils.js';
const headers = {
  'Content-Type': 'application/json; charset=UTF-8',
  'zoneId': JSON.stringify(getCookie('zoneId') || ''),
  'localizationKey': getCookie('languageCode') || '',
  'latitude': JSON.stringify(getCookie('latitude') || ''),
  'longitude': JSON.stringify(getCookie('longitude') || ''),
  'Authorization': `Bearer ${getCookie('token') || ''}`
};

function getCategoryList() {
  return fetch(categoryUri, { headers }).then(response => response.json());
}

function getSubCategoryList(parentID) {
  return fetch(`${subCategoryUri}${parentID}`, { headers }).then(response => response.json());
}

function getCategoryProductList(categoryID, offset, type) {
  return fetch(`${categoryProductUri}${categoryID}?limit=10&offset=${offset}&type=${type}`, { headers }).then(response => response.json());
}

function getCategoryRestaurantList(categoryID, offset, type) {
  return fetch(`${categoryRestaurantUri}${categoryID}?limit=10&offset=${offset}&type=${type}`, { headers }).then(response => response.json());
}

function getSearchData(query, categoryID, isRestaurant, type) {
  const endpoint = `${searchUri}${isRestaurant ? 'restaurants' : 'products'}/search?name=${query}&category_id=${categoryID}&type=${type}&offset=1&limit=50`;
  return fetch(endpoint, { headers }).then(response => response.json());
}

function saveUserInterests(interests) {
  return fetch(interestUri, {
    method: 'POST',
    headers,
    body: JSON.stringify({ "interest": interests })
  }).then(response => response.json());
}

//export all functions
export { getCategoryList, getSubCategoryList, getCategoryProductList, getCategoryRestaurantList, getSearchData, saveUserInterests };