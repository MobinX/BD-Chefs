
import { getCookie } from './cookie_utils.js';
import { bannerUri } from './app_const.js';

const getBannerList = async () => {
  const headers = {
    'Content-Type': 'application/json; charset=UTF-8',
    'zoneId': JSON.stringify(getCookie('zoneId') || ''),
    'localizationKey': getCookie('languageCode') || '',
    'latitude': JSON.stringify(getCookie('latitude') || ''),
    'longitude': JSON.stringify(getCookie('longitude') || ''),
    'Authorization': `Bearer ${getCookie('token') || ''}`
  };

  const response = await fetch(bannerUri, { headers });
  return response;
};

export { getBannerList };
