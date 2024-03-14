import { basicCampaignUri, basicCampaignDetailsUri, itemCampaignUri } from '@/app_const.js';
import { getCookie } from './cookie_utils.js';


function getBasicCampaignList() {
  const headers = {
    'Content-Type': 'application/json; charset=UTF-8',
    'zoneId': JSON.stringify(getCookie('zoneId') || ''),
    'X-localization': getCookie('languageCode') || '',
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
    'X-localization': getCookie('languageCode') || '',
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
    'X-localization': getCookie('languageCode') || '',
    'latitude': JSON.stringify(getCookie('latitude') || ''),
    'longitude': JSON.stringify(getCookie('longitude') || ''),
    'Authorization': `Bearer ${getCookie('token') || ''}`
  };

  return fetch(itemCampaignUri, { headers })
    .then(response => response.json());
}

export { getBasicCampaignList, getCampaignDetails, getItemCampaignList };

