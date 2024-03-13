import {
  popularProductUri,
  reviewedProductUri,
  reviewUri,
  deliveryManReviewUri,
} from "@/app_const.js";
import { getCookie } from "./cookie_utils.js";

const headers = {
  "Content-Type": "application/json; charset=UTF-8",
  zoneId: JSON.stringify(getCookie("zoneId") || ""),
  X-localization: getCookie("languageCode") || "",
  latitude: JSON.stringify(getCookie("latitude") || ""),
  longitude: JSON.stringify(getCookie("longitude") || ""),
  Authorization: `Bearer ${getCookie("token") || ""}`,
};

const getProductList = (type) => {
  return fetch(`${popularProductUri}?type=${type}`, { headers }).then(
    (response) => response.json()
  );
};

const getReviewedProductList = (type) => {
  return fetch(`${reviewedProductUri}?type=${type}`, { headers }).then(
    (response) => response.json()
  );
};

const submitReview = (reviewBody) => {
  return fetch(reviewUri, {
    method: "POST",
    headers,
    body: JSON.stringify(reviewBody),
  }).then((response) => response.json());
};

const submitDeliveryManReview = (reviewBody) => {
  return fetch(deliveryManReviewUri, {
    method: "POST",
    headers,
    body: JSON.stringify(reviewBody),
  }).then((response) => response.json());
};

//export all functions
export {
  getProductList,
  getReviewedProductList,
  submitReview,
  submitDeliveryManReview,
};