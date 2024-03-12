import { basicCampaignUri, basicCampaignDetailsUri, itemCampaignUri } from '@/app_const.js';
import { getCookie } from './cookie_utils.js';

const headers = {
  'Content-Type': 'application/json; charset=UTF-8',
  'zoneId': JSON.stringify(getCookie('zoneId') || ''),
  'localizationKey': getCookie('languageCode') || '',
  'latitude': JSON.stringify(getCookie('latitude') || ''),
  'longitude': JSON.stringify(getCookie('longitude') || ''),
  'Authorization': `Bearer ${getCookie('token') || ''}`
};

function getCampaignDetails( campaignID) {
  return fetch(`${basicCampaignDetailsUri}${campaignID}`, { headers })
    .then(response => response.json());
}

function getItemCampaignList() {
  return fetch(itemCampaignUri, { headers })
    .then(response => response.json());
}

function getBasicCampaignList() {
  return fetch(basicCampaignUri, { headers })
    .then(response => response.json());
}

export { getBasicCampaignList, getCampaignDetails, getItemCampaignList };

function getBasicCampaignList() {
  const headers = {
    'Content-Type': 'application/json; charset=UTF-8',
    'zoneId': JSON.stringify(getCookie('zoneId') || ''),
    'localizationKey': getCookie('languageCode') || '',
    'latitude': JSON.stringify(getCookie('latitude') || ''),
    'longitude': JSON.stringify(getCookie('longitude') || ''),
    'Authorization': `Bearer ${getCookie('token') || ''}`
  };

  return fetch(basicCampaignUri, { headers })
    .then(response => response.json());
}

function getCampaignDetails( campaignID) {
  const headers = {
    'Content-Type': 'application/json; charset=UTF-8',
    'zoneId': JSON.stringify(getCookie('zoneId') || ''),
    'localizationKey': getCookie('languageCode') || '',
    'latitude': JSON.stringify(getCookie('latitude') || ''),
    'longitude': JSON.stringify(getCookie('longitude') || ''),
    'Authorization': `Bearer ${getCookie('token') || ''}`
  };

  return fetch(`${basicCampaignDetailsUri}${campaignID}`, { headers })
    .then(response => response.json());
}

function getItemCampaignList() {
  const headers = {
    'Content-Type': 'application/json; charset=UTF-8',
    'zoneId': JSON.stringify(getCookie('zoneId') || ''),
    'localizationKey': getCookie('languageCode') || '',
    'latitude': JSON.stringify(getCookie('latitude') || ''),
    'longitude': JSON.stringify(getCookie('longitude') || ''),
    'Authorization': `Bearer ${getCookie('token') || ''}`
  };

  return fetch(itemCampaignUri, { headers })
    .then(response => response.json());
}

export { getBasicCampaignList, getCampaignDetails, getItemCampaignList };

