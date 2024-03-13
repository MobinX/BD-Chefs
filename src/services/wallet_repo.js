import { walletTransactionUri, loyaltyTransactionUri, loyaltyPointTransferUri, addFundUri, walletBonusUri, walletAccessToken } from '@/app_const.js';
import { getCookie } from './cookie_utils.js';
const headers = {
  'Content-Type': 'application/json; charset=UTF-8',
  'zoneId': JSON.stringify(getCookie('zoneId') || ''),
  'X-localization': getCookie('languageCode') || '',
  'latitude': JSON.stringify(getCookie('latitude') || ''),
  'longitude': JSON.stringify(getCookie('longitude') || ''),
  'Authorization': `Bearer ${getCookie('token') || ''}`
};

const getWalletTransactionList = async (offset, sortingType) => {
  const url = `${walletTransactionUri}?offset=${offset}&limit=10&type=${sortingType}`;
  const response = await fetch(url, { headers });
  return response.json();
};

const getLoyaltyTransactionList = async (offset) => {
  const url = `${loyaltyTransactionUri}?offset=${offset}&limit=10`;
  const response = await fetch(url, { headers });
  return response.json();
};

const pointToWallet = async (point) => {
  const response = await fetch(loyaltyPointTransferUri, {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ point })
  });
  return response.json();
};

const addFundToWallet = async (amount, paymentMethod) => {
  const hostname = window.location.hostname;
  const protocol = window.location.protocol;

  const response = await fetch(addFundUri, {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount,
      payment_method: paymentMethod,
      payment_platform: 'web',
      callback: `${protocol}//${hostname}${RouteHelper.wallet}`
    })
  });
  return response.json();
};

const getWalletBonusList = async () => {
  const response = await fetch(walletBonusUri, { headers });
  return response.json();
};

const setWalletAccessToken = (token) => {
  localStorage.setItem(walletAccessToken, token);
};

const getWalletAccessToken = () => {
  return localStorage.getItem(walletAccessToken) || "";
};

export {
  getWalletTransactionList,
  getLoyaltyTransactionList,
  pointToWallet,
  addFundToWallet,
  getWalletBonusList,
  setWalletAccessToken,
  getWalletAccessToken
};
