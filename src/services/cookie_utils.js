// function getCookie(name) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(';').shift();
// }
// export { getCookie };
// function setCookie(name, value, days) {
//   let expires = '';
//   if (days) {
//     const date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     expires = `; expires=${date.toUTCString()}`;
//   }
//   document.cookie = `${name}=${value || ''}${expires}; path=/`;
// }

import { token } from "@/app_const";

const headers = {
  "Content-Type": "application/json; charset=UTF-8",
  zoneId: JSON.stringify(getCookie("zoneId") || ""),
  localizationKey: getCookie("languageCode") || "",
  latitude: JSON.stringify(getCookie("latitude") || ""),
  longitude: JSON.stringify(getCookie("longitude") || ""),
  Authorization: `Bearer ${getCookie("token") || ""}`,
};
export function getCookie(name) {
  const dummydata = {
    latitude: 23.810331,
    longitude: 90.412521,
    languageCode: "en",
    token: token,
    zoneId: 1,
  };
  return dummydata[name];
}
