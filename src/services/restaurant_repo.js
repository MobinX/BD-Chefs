import {
  restaurantUri,
  popularRestaurantUri,
  latestRestaurantUri,
  restaurantDetailsUri,
  restaurantProductUri,
  searchUri,
  restaurantReviewUri,
  restaurantRecommendedItemUri,
  recentlyViewedRestaurantUri,
  orderAgainUri,
  cartRestaurantSuggestedItemsUri,
} from "./app_constants.js";
import { getCookie } from "./cookie_utils.js";

const headers = {
  'Content-Type': 'application/json; charset=UTF-8',
  'zoneId': JSON.stringify(getCookie('zoneId') || ''),
  'localizationKey': getCookie('languageCode') || '',
  'latitude': JSON.stringify(getCookie('latitude') || ''),
  'longitude': JSON.stringify(getCookie('longitude') || ''),
  'Authorization': `Bearer ${getCookie('token') || ''}`
};

const getRestaurantList = async (
  offset,
  filterBy,
  topRated,
  discount,
  veg,
  nonVeg
) => {
  const response = await fetch(
    `${restaurantUri}/${filterBy}?offset=${offset}&limit=12&top_rated=${topRated}&discount=${discount}&veg=${veg}&non_veg=${nonVeg}`,
    { headers }
  );
  return response.json();
};

const getPopularRestaurantList = async (type) => {
  const response = await fetch(`${popularRestaurantUri}?type=${type}`, { headers });
  return response.json();
};

const getLatestRestaurantList = async (type) => {
  const response = await fetch(`${latestRestaurantUri}?type=${type}`, { headers });
  return response.json();
};

const getRestaurantDetails = async (restaurantID, slug) => {
  let header = null;
  if (slug !== "") {
    header = {
      ...headers,
      "Accept-Language": getCookie("languageCode"),
    };
  }
  const response = await fetch(
    `${restaurantDetailsUri}${slug !== "" ? slug : restaurantID}`,
    { headers: header }
  );
  return response.json();
};

const getRestaurantProductList = async (
  restaurantID,
  offset,
  categoryID,
  type
) => {
  const response = await fetch(
    `${restaurantProductUri}?restaurant_id=${restaurantID}&category_id=${categoryID}&offset=${offset}&limit=12&type=${type}`,
    { headers }
  );
  return response.json();
};

const getRestaurantSearchProductList = async (
  searchText,
  storeID,
  offset,
  type
) => {
  const response = await fetch(
    `${searchUri}products/search?restaurant_id=${storeID}&name=${searchText}&offset=${offset}&limit=10&type=${type}`,
    { headers }
  );
  return response.json();
};

const getRestaurantReviewList = async (restaurantID) => {
  const response = await fetch(
    `${restaurantReviewUri}?restaurant_id=${restaurantID}`,
    { headers }
  );
  return response.json();
};

const getRestaurantRecommendedItemList = async (restaurantId) => {
  const response = await fetch(
    `${restaurantRecommendedItemUri}?restaurant_id=${restaurantId}&offset=1&limit=50`,
    { headers }
  );
  return response.json();
};

const getRecentlyViewedRestaurantList = async (type) => {
  const response = await fetch(`${recentlyViewedRestaurantUri}?type=${type}`, { headers });
  return response.json();
};

const getOrderAgainRestaurantList = async () => {
  const response = await fetch(orderAgainUri, { headers });
  return response.json();
};

const getCartRestaurantSuggestedItemList = async (restaurantID) => {
  const response = await fetch(
    `${cartRestaurantSuggestedItemsUri}?restaurant_id=${restaurantID}`,
    { headers }
  );
  return response.json();
};

export {
  getRestaurantList,
  getPopularRestaurantList,
  getLatestRestaurantList,
  getRestaurantDetails,
  getRestaurantProductList,
  getRestaurantSearchProductList,
  getRestaurantReviewList,
  getRestaurantRecommendedItemList,
  getRecentlyViewedRestaurantList,
  getOrderAgainRestaurantList,
  getCartRestaurantSuggestedItemList,
};
