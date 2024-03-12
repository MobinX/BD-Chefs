import { customerInfoUri, updateProfileUri, customerRemoveUri } from './app_const';
import { getCookie } from './cookie_utils';

const headers = {
  'Content-Type': 'application/json; charset=UTF-8',
  'zoneId': JSON.stringify(getCookie('zoneId') || ''),
  'localizationKey': getCookie('languageCode') || '',
  'latitude': JSON.stringify(getCookie('latitude') || ''),
  'longitude': JSON.stringify(getCookie('longitude') || ''),
  'Authorization': `Bearer ${getCookie('token') || ''}`
};

const getUserInfo = async () => {
  const response = await fetch(customerInfoUri, {
    headers: headers
  });
  return response.json();
};

const updateProfile = async (userInfoModel, data, token) => {
  const body = {
    f_name: userInfoModel.fName,
    l_name: userInfoModel.lName,
    email: userInfoModel.email
  };

  const formData = new FormData();
  formData.append('image', data);

  const response = await fetch(updateProfileUri, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: headers
  });

  return response.json();
};

const changePassword = async (userInfoModel) => {
  const body = {
    f_name: userInfoModel.fName,
    l_name: userInfoModel.lName,
    email: userInfoModel.email,
    password: userInfoModel.password
  };

  const response = await fetch(updateProfileUri, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response.json();
};

const deleteUser = async () => {
  const response = await fetch(customerRemoveUri, {
    method: 'DELETE',
    headers: headers
  });

  return response.json();
};

export {
  getUserInfo,
  updateProfile,
  changePassword,
  deleteUser
};
