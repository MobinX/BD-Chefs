import { runningOrderListUri, runningSubscriptionOrderListUri, historyOrderListUri, orderDetailsUri, orderCancelUri, trackUri, placeOrderUri, sendCheckoutNotificationUri, lastLocationUri, codSwitchUri, distanceMatrixUri, refundReasonsUri, orderCancellationUri, refundRequestUri, vehicleChargeUri, productListWithIdsUri, subscriptionListUri, mostTipsUri } from './app_constants.js';
import { getCookie } from './cookie_utils.js';
const headers = {
  'Content-Type': 'application/json; charset=UTF-8',
  'zoneId': JSON.stringify(getCookie('zoneId') || ''),
  'localizationKey': getCookie('languageCode') || '',
  'latitude': JSON.stringify(getCookie('latitude') || ''),
  'longitude': JSON.stringify(getCookie('longitude') || ''),
  'Authorization': `Bearer ${getCookie('token') || ''}`
};

const getRunningOrderList = async (offset) => {
  const response = await fetch(`${runningOrderListUri}?offset=${offset}&limit=100`, { headers });
  return response.json();
};

const getRunningSubscriptionOrderList = async (offset) => {
  const response = await fetch(`${runningSubscriptionOrderListUri}?offset=${offset}&limit=100`, { headers });
  return response.json();
};

const getHistoryOrderList = async (offset) => {
  const response = await fetch(`${historyOrderListUri}?offset=${offset}&limit=10`, { headers });
  return response.json();
};

const getOrderDetails = async (orderID) => {
  const response = await fetch(`${orderDetailsUri}${orderID}`, { headers });
  return response.json();
};

const cancelOrder = async (orderID, reason) => {
  const response = await fetch(orderCancelUri, {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ _method: 'put', order_id: orderID, reason: reason })
  });
  return response.json();
};

const trackOrder = async (orderID) => {
  const response = await fetch(`${trackUri}${orderID}`, { headers });
  return response.json();
};

const placeOrder = async (orderBody) => {
  const response = await fetch(placeOrderUri, {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify(orderBody)
  });
  return response.json();
};

const sendNotificationRequest = async (orderId) => {
  const response = await fetch(`${sendCheckoutNotificationUri}/${orderId}`, { headers });
  return response.json();
};

const getDeliveryManData = async (orderID) => {
  const response = await fetch(`${lastLocationUri}${orderID}`, { headers });
  return response.json();
};

const switchToCOD = async (orderID) => {
  const response = await fetch(codSwitchUri, {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ _method: 'put', order_id: orderID })
  });
  return response.json();
};

const getDistanceInMeter = async (originLatLng, destinationLatLng) => {
  const response = await fetch(`${distanceMatrixUri}?origin_lat=${originLatLng.latitude}&origin_lng=${originLatLng.longitude}&destination_lat=${destinationLatLng.latitude}&destination_lng=${destinationLatLng.longitude}`, { headers });
  return response.json();
};

const getRefundReasons = async () => {
  const response = await fetch(refundReasonsUri, { headers });
  return response.json();
};

const getCancelReasons = async () => {
  const response = await fetch(`${orderCancellationUri}?offset=1&limit=30&type=customer`, { headers });
  return response.json();
};

const submitRefundRequest = async (body, data) => {
  const formData = new FormData();
  formData.append('image[]', data);
  Object.entries(body).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const response = await fetch(refundRequestUri, {
    method: 'POST',
    headers: { ...headers },
    body: formData
  });
  return response.json();
};

const getExtraCharge = async (distance) => {
  const response = await fetch(`${vehicleChargeUri}?distance=${distance}`, { headers });
  return response.json();
};

const getFoodsWithFoodIds = async (ids) => {
  const response = await fetch(productListWithIdsUri, {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ food_id: JSON.stringify(ids) })
  });
  return response.json();
};

const getSubscriptionList = async (offset) => {
  const response = await fetch(`${subscriptionListUri}?offset=${offset}&limit=10`, { headers });
  return response.json();
};

const updateSubscriptionStatus = async (subscriptionID, startDate, endDate, status, note, reason) => {
  const response = await fetch(`${subscriptionListUri}/${subscriptionID}`, {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ _method: 'put', status, note, cancellation_reason: reason, start_date: startDate, end_date: endDate })
  });
  return response.json();
};

const getSubscriptionDeliveryLog = async (subscriptionID, offset) => {
  const response = await fetch(`${subscriptionListUri}/${subscriptionID}/delivery-log?offset=${offset}&limit=10`, { headers });
  return response.json();
};

const getSubscriptionPauseLog = async (subscriptionID, offset) => {
  const response = await fetch(`${subscriptionListUri}/${subscriptionID}/pause-log?offset=${offset}&limit=10`, { headers });
  return response.json();
};

const getDmTipMostTapped = async () => {
  const response = await fetch(mostTipsUri, { headers });
  return response.json();
};

export {
  getRunningOrderList,
  getRunningSubscriptionOrderList,
  getHistoryOrderList,
  getOrderDetails,
  cancelOrder,
  trackOrder,
  placeOrder,
  sendNotificationRequest,
  getDeliveryManData,
  switchToCOD,
  getDistanceInMeter,
  getRefundReasons,
  getCancelReasons,
  submitRefundRequest,
  getExtraCharge,
  getFoodsWithFoodIds,
  getSubscriptionList,
  updateSubscriptionStatus,
  getSubscriptionDeliveryLog,
  getSubscriptionPauseLog,
  getDmTipMostTapped
};
