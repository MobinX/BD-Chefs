import { addressListUri, zoneUri, removeAddressUri, addAddressUri, updateAddressUri, geocodeUri, searchLocationUri, placeDetailsUri } from '@/app_const.js';
import { getCookie } from './cookie_utils.js';
const headers = {
  'Content-Type': 'application/json; charset=UTF-8',
  'zoneId': JSON.stringify(getCookie('zoneId') || ''),
  'localizationKey': getCookie('languageCode') || '',
  'latitude': JSON.stringify(getCookie('latitude') || ''),
  'longitude': JSON.stringify(getCookie('longitude') || ''),
  'Authorization': `Bearer ${getCookie('token') || ''}`
};

const getAllAddress = async () => {
  const response = await fetch(addressListUri, { headers });
  return response.json();
};

const getZone = async (lat, lng) => {
  const response = await fetch(`${zoneUri}?lat=${lat}&lng=${lng}`, { headers });
  return response.json();
};

const removeAddressByID = async (id) => {
  const response = await fetch(`${removeAddressUri}${id}`, {
    method: 'POST',
    body: JSON.stringify({ _method: 'delete' }),
    headers
  });
  return response.json();
};

const addAddress = async (addressModel) => {
  const response = await fetch(addAddressUri, {
    method: 'POST',
    body: JSON.stringify(addressModel),
    headers
  });
  return response.json();
};

const updateAddress = async (addressModel, addressId) => {
  const response = await fetch(`${updateAddressUri}${addressId}`, {
    method: 'PUT',
    body: JSON.stringify(addressModel),
    headers
  });
  return response.json();
};

const saveUserAddress = async (address, zoneIDs, latitude, longitude) => {
  localStorage.setItem('userAddress', address);
  // Update headers
  //************* */ add token from appconst , zoneIDs, latitude, longitude and languageCode from appconst
  return true;
};

const getAddressFromGeocode = async (latLng) => {
  const response = await fetch(`${geocodeUri}?lat=${latLng.latitude}&lng=${latLng.longitude}`, { headers });
  return response.json();
};

const getUserAddress = () => {
  return localStorage.getItem('userAddress');
};

const searchLocation = async (text) => {
  const response = await fetch(`${searchLocationUri}?search_text=${text}`, { headers });
  return response.json();
};

const getPlaceDetails = async (placeID) => {
  const response = await fetch(`${placeDetailsUri}?placeid=${placeID}`, { headers });
  return response.json();
};

export {
  getAllAddress,
  getZone,
  removeAddressByID,
  addAddress,
  updateAddress,
  saveUserAddress,
  getAddressFromGeocode,
  getUserAddress,
  searchLocation,
  getPlaceDetails
};
