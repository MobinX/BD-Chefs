import { couponUri, restaurantWiseCouponUri, couponApplyUri } from './app_const.js';
import { getCookie } from './cookie_utils.js';
const headers = {
  'Content-Type': 'application/json; charset=UTF-8',
  'zoneId': JSON.stringify(getCookie('zoneId') || ''),
  'localizationKey': getCookie('languageCode') || '',
  'latitude': JSON.stringify(getCookie('latitude') || ''),
  'longitude': JSON.stringify(getCookie('longitude') || ''),
  'Authorization': `Bearer ${getCookie('token') || ''}`
};

const getCouponList = async (customerId, restaurantId) => {
  const response = await fetch(`${couponUri}?${restaurantId != null ? 'restaurant_id' : 'customer_id'}=${restaurantId ?? customerId}`, { headers });
  return response.json();
}

const getRestaurantCouponList = async (restaurantId) => {
  const response = await fetch(`${restaurantWiseCouponUri}?restaurant_id=${restaurantId}`, { headers });
  return response.json();
}

const applyCoupon = async (couponCode, restaurantID) => {
  const response = await fetch(`${couponApplyUri}${couponCode}&restaurant_id=${restaurantID}`, { headers });
  return response.json();
}