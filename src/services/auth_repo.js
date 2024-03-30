import {
  token,
  loginUri,
  registerUri,
  socialLoginUri,
  cartList,
  socialRegisterUri,
  earnPoint,
  tokenUri,
  forgetPasswordUri,
  verifyTokenUri,
  resetPasswordUri,
  checkEmailUri,
  verifyEmailUri,
  updateZoneUri,
  verifyPhoneUri,
  userAddress,
  notification,
  zoneListUri,
  restaurantRegisterUri,
  restaurantPackagesUri,
  businessPlanUri,
  businessPlanPaymentUri,
  dmRegisterUri,
  vehiclesUri,
  dmTipIndex,
  userPassword,
  userNumber,
  userCountryCode,
} from "@/app_const.js";
import { getCookie } from "./cookie_utils.js";
 

const headers = {
  "Content-Type": "application/json; charset=UTF-8",
  zoneId: JSON.stringify(getCookie("zoneId") || ""),
  "X-localization": getCookie("languageCode") || "",
  latitude: JSON.stringify(getCookie("latitude") || ""),
  longitude: JSON.stringify(getCookie("longitude") || ""),
  Authorization: `Bearer ${getCookie("token") || ""}`,
};

// SignUpBody {
//   String? f_name;
//   String? l_name;
//   String? phone;
//   String? email;
//   String? password;
//   String? refCode;
// }
const registration = async (signUpBody) => {
  const response = await fetch(registerUri, {
    method: "POST",
    body: JSON.stringify(signUpBody),
    headers,
  });
  return response.json();
};

const login = async ({ phone, password }) => {
  const response = await fetch(loginUri, {
    method: "POST",
    body: JSON.stringify({ "phone": phone, "password": password }),
    headers,
  });
  return response.json();
};

// SocialLogInBody {
//   String? email;
//   String? token;
//   String? uniqueId;
//   String? medium;
//   String? phone;
// }

const loginWithSocialMedia = async (socialLogInBody) => {
  const response = await fetch(socialLoginUri, {
    method: "POST",
    body: JSON.stringify(socialLogInBody),
    headers: headers,
  });
  return response.json();
};

const registerWithSocialMedia = async (socialLogInBody) => {
  const response = await fetch(socialRegisterUri, {
    method: "POST",
    body: JSON.stringify(socialLogInBody),
    headers: headers,
  });
  return response.json();
};

const saveEarningPoint = (point) => {
  localStorage.setItem(earnPoint, point);
  return true;
};

const getEarningPint = () => {
  return localStorage.getItem(earnPoint) || "";
};

const updateToken = async (notificationDeviceToken = "") => {
  let deviceToken;
  if (notificationDeviceToken === "") {
    if (isIOS() && !isWeb()) {
      // Set foreground notification presentation options
      // Request permission
      // Save device token
    } else {
      // Save device token
    }
    if (!isWeb()) {
      // Subscribe to topic
    }
  }
  const response = await fetch(tokenUri, {
    method: "POST",
    body: JSON.stringify({
      _method: "put",
      cm_firebase_token:
        notificationDeviceToken !== "" ? notificationDeviceToken : deviceToken,
    }),
    headers: headers,
  });
  return response.json();
};

const forgetPassword = async ({ phone }) => {
  const response = await fetch(forgetPasswordUri, {
    method: "POST",
    body: JSON.stringify({ phone: phone }),
    headers: headers,
  });
  return response.json();
};

const verifyToken = async ({ phone, utoken }) => {
  const response = await fetch(verifyTokenUri, {
    method: "POST",
    body: JSON.stringify({ phone: phone, reset_token: utoken }),
    headers: headers,
  });
  return response.json();
};

const resetPassword = async ({
  resetToken,
  number,
  password,
  confirmPassword,
}) => {
  const response = await fetch(resetPasswordUri, {
    method: "POST",
    body: JSON.stringify({
      _method: "put",
      reset_token: resetToken,
      phone: number,
      password,
      confirm_password: confirmPassword,
    }),
    headers: headers,
  });
  return response.json();
};

const checkEmail = async ({ email }) => {
  const response = await fetch(checkEmailUri, {
    method: "POST",
    body: JSON.stringify({ email: email }),
    headers: headers,
  });
  return response.json();
};

const verifyEmail = async ({ email, utoken }) => {
  const response = await fetch(verifyEmailUri, {
    method: "POST",
    body: JSON.stringify({ email: email, token: utoken }),
    headers: headers,
  });
  return response.json();
};

const updateZone = async () => {
  const response = await fetch(updateZoneUri);
  return response.json();
};

const verifyPhone = async ({ phone, otp }) => {
  const response = await fetch(verifyPhoneUri, {
    method: "POST",
    body: JSON.stringify({ phone: phone, otp: otp }),
    headers: headers,
  });
  return response.json();
};

const saveUserToken = (utoken, alreadyInApp = false) => {
  if (alreadyInApp && localStorage.getItem(userAddress) !== null) {
    const addressModel = JSON.parse(localStorage.getItem(userAddress));
    // Update header
  } else {
    // Update header
  }
  localStorage.setItem(token, utoken);
  return true;
};

const getUserToken = () => {
  return localStorage.getItem(token) || "";
};

const isLoggedIn = () => {
  return localStorage.getItem(token) !== null;
};

const clearSharedData = () => {
  if (!isWeb()) {
    // Unsubscribe from topic
    // Update token
  }
  localStorage.removeItem(token);
  localStorage.removeItem(cartList);
  localStorage.removeItem(userAddress);

  // Update header
  return true;
};

const saveUserNumberAndPassword = async ({ number, password, countryCode }) => {
  try {
    localStorage.setItem(userPassword, password);
    localStorage.setItem(userNumber, number);
    localStorage.setItem(userCountryCode, countryCode);
  } catch (e) {
    throw e;
  }
};

const getUserNumber = () => {
  return localStorage.getItem(userNumber) || "";
};

const getUserCountryCode = () => {
  return localStorage.getItem(userCountryCode) || "";
};

const getUserPassword = () => {
  return localStorage.getItem(userPassword) || "";
};

const isNotificationActive = () => {
  return localStorage.getItem(notification) !== null ? true : false;
};

const setNotificationActive = (isActive) => {
  if (isActive) {
    updateToken();
  } else {
    if (!isWeb()) {
      updateToken("@");
      // Unsubscribe from topic
      if (isLoggedIn()) {
        // Unsubscribe from topic
      }
    }
  }
  localStorage.setItem(notification, isActive ? "true" : "false");
};

const clearUserNumberAndPassword = async () => {
  localStorage.removeItem(userPassword);
  localStorage.removeItem(userCountryCode);
  return localStorage.removeItem(userNumber);
};

const clearSharedAddress = () => {
  localStorage.removeItem(userAddress);
  return true;
};

const getZoneList = async () => {
  const response = await fetch(zoneListUri);
  return response.json();
};

const registerRestaurant = async (restaurant, logo, cover) => {
  const formData = new FormData();
  formData.append("restaurant", JSON.stringify(restaurant));
  formData.append("logo", logo);
  formData.append("cover_photo", cover);

  const response = await fetch(restaurantRegisterUri, {
    method: "POST",
    body: formData,
    headers: headers,
  });
  return response.json();
};

const getPackageList = async () => {
  const response = await fetch(restaurantPackagesUri);
  return response.json();
};

// BusinessPlanBody {
//   String? businessPlan;
//   String? restaurantId;
//   String? packageId;
//   String? payment;
// }
const setUpBusinessPlan = async (businessPlanBody) => {
  const response = await fetch(businessPlanUri, {
    method: "POST",
    body: JSON.stringify(businessPlanBody),
    headers: headers,
  });
  return response.json();
};

const subscriptionPayment = async (id, paymentName) => {
  let callback = "";
  if (isWeb()) {
    const hostname = window.location.hostname;
    const protocol = window.location.protocol;
    callback = `${protocol}//${hostname}${"/subscription-success"}`;
  }

  const response = await fetch(businessPlanPaymentUri, {
    method: "POST",
    body: JSON.stringify({ id, payment_gateway: paymentName, callback }),
    headers: headers,
  });
  return response.json();
};

// DeliveryManBody {
//   String? fName;
//   String? lName;
//   String? phone;
//   String? email;
//   String? password;
//   String? identityType;
//   String? identityNumber;
//   String? earning;
//   String? zoneId;
//   String? vehicleId;
// }
const registerDeliveryMan = async (deliveryManBody, multiParts) => {
  const formData = new FormData();
  formData.append("deliveryMan", JSON.stringify(deliveryManBody));
  multiParts.forEach((part) => {
    formData.append(part.name, part.file);
    headers: headers;
  });

  const response = await fetch(dmRegisterUri, {
    method: "POST",
    body: formData,
    headers: headers,
  });
  return response.json();
};

const getVehicleList = async () => {
  const response = await fetch(vehiclesUri);
  return response.json();
};

const saveDmTipIndex = async (index) => {
  localStorage.setItem(dmTipIndex, index);
  return true;
};

const getDmTipIndex = () => {
  return localStorage.getItem(dmTipIndex) || "";
};

const isWeb = () => {
  // Check if the code is running in a web environment
};

const isIOS = () => {
  // Check if the code is running on iOS
};

//export all functions
export {
  registration,
  login,
  loginWithSocialMedia,
  registerWithSocialMedia,
  saveEarningPoint,
  getEarningPint,
  updateToken,
  forgetPassword,
  verifyToken,
  resetPassword,
  checkEmail,
  verifyEmail,
  updateZone,
  verifyPhone,
  saveUserToken,
  getUserToken,
  isLoggedIn,
  clearSharedData,
  saveUserNumberAndPassword,
  getUserNumber,
  getUserCountryCode,
  getUserPassword,
  isNotificationActive,
  setNotificationActive,
  clearUserNumberAndPassword,
  clearSharedAddress,
  getZoneList,
  registerRestaurant,
  getPackageList,
  setUpBusinessPlan,
  subscriptionPayment,
  registerDeliveryMan,
  getVehicleList,
  saveDmTipIndex,
  getDmTipIndex,
};

// import 'dart:async';
// import 'dart:convert';

// import 'package:efood_multivendor/controller/location_controller.dart';
// import 'package:efood_multivendor/data/api/api_client.dart';
// import 'package:efood_multivendor/data/model/body/business_plan_body.dart';
// import 'package:efood_multivendor/data/model/body/delivery_man_body.dart';
// import 'package:efood_multivendor/data/model/body/restaurant_body.dart';
// import 'package:efood_multivendor/data/model/body/signup_body.dart';
// import 'package:efood_multivendor/data/model/body/social_log_in_body.dart';
// import 'package:efood_multivendor/data/model/response/address_model.dart';
// import 'package:efood_multivendor/helper/route_helper.dart';
// import 'package:efood_multivendor/util/app_constants.dart';
// import 'package:firebase_messaging/firebase_messaging.dart';
// import 'package:flutter/cupertino.dart';
// import 'package:get/get.dart';
// import 'package:image_picker/image_picker.dart';
// import 'package:shared_preferences/shared_preferences.dart';
// import 'package:universal_html/html.dart' as html;

// class AuthRepo {
//   final ApiClient apiClient;
//   final SharedPreferences sharedPreferences;
//   AuthRepo({required this.apiClient, required this.sharedPreferences});

//   Future<Response> registration(SignUpBody signUpBody) async {
//     return await apiClient.postData(AppConstants.registerUri, signUpBody.toJson());
//   }

//   Future<Response> login({String? phone, String? password}) async {
//     return await apiClient.postData(AppConstants.loginUri, {"phone": phone, "password": password});
//   }

//   Future<Response> loginWithSocialMedia(SocialLogInBody socialLogInBody) async {
//     return await apiClient.postData(AppConstants.socialLoginUri, socialLogInBody.toJson());
//   }

//   Future<Response> registerWithSocialMedia(SocialLogInBody socialLogInBody) async {
//     return await apiClient.postData(AppConstants.socialRegisterUri, socialLogInBody.toJson());
//   }

//   Future<bool> saveEarningPoint(String point) async {
//     return await sharedPreferences.setString(AppConstants.earnPoint, point);
//   }

//   String getEarningPint() {
//     return sharedPreferences.getString(AppConstants.earnPoint) ?? "";
//   }

//   Future<Response> updateToken({String notificationDeviceToken = ''}) async {
//     String? deviceToken;
//     if(notificationDeviceToken.isEmpty){
//       if (GetPlatform.isIOS && !GetPlatform.isWeb) {
//         FirebaseMessaging.instance.setForegroundNotificationPresentationOptions(alert: true, badge: true, sound: true);
//         NotificationSettings settings = await FirebaseMessaging.instance.requestPermission(
//           alert: true, announcement: false, badge: true, carPlay: false,
//           criticalAlert: false, provisional: false, sound: true,
//         );
//         if(settings.authorizationStatus == AuthorizationStatus.authorized) {
//           deviceToken = await _saveDeviceToken();
//         }
//       }else {
//         deviceToken = await _saveDeviceToken();
//       }
//       if(!GetPlatform.isWeb) {
//         FirebaseMessaging.instance.subscribeToTopic(AppConstants.topic);
//       }
//     }
//     return await apiClient.postData(AppConstants.tokenUri, {"_method": "put", "cm_firebase_token": notificationDeviceToken.isNotEmpty ? notificationDeviceToken : deviceToken});
//   }

//   Future<String?> _saveDeviceToken() async {
//     String? deviceToken = '@';
//     if(!GetPlatform.isWeb) {
//       try {
//         deviceToken = (await FirebaseMessaging.instance.getToken())!;
//       }catch(_) {}
//     }
//     if (deviceToken != null) {
//       debugPrint('--------Device Token---------- $deviceToken');
//     }
//     return deviceToken;
//   }

//   Future<Response> forgetPassword(String? phone) async {
//     return await apiClient.postData(AppConstants.forgetPasswordUri, {"phone": phone});
//   }

//   Future<Response> verifyToken(String? phone, String token) async {
//     return await apiClient.postData(AppConstants.verifyTokenUri, {"phone": phone, "reset_token": token});
//   }

//   Future<Response> resetPassword(String? resetToken, String number, String password, String confirmPassword) async {
//     return await apiClient.postData(
//       AppConstants.resetPasswordUri,
//       {"_method": "put", "reset_token": resetToken, "phone": number, "password": password, "confirm_password": confirmPassword},
//     );
//   }

//   Future<Response> checkEmail(String email) async {
//     return await apiClient.postData(AppConstants.checkEmailUri, {"email": email});
//   }

//   Future<Response> verifyEmail(String email, String token) async {
//     return await apiClient.postData(AppConstants.verifyEmailUri, {"email": email, "token": token});
//   }

//   Future<Response> updateZone() async {
//     return await apiClient.getData(AppConstants.updateZoneUri);
//   }

//   Future<Response> verifyPhone(String? phone, String otp) async {
//     return await apiClient.postData(AppConstants.verifyPhoneUri, {"phone": phone, "otp": otp});
//   }

//   // for  user token
//   Future<bool> saveUserToken(String token, {bool alreadyInApp = false}) async {
//     apiClient.token = token;
//     if(alreadyInApp && sharedPreferences.getString(AppConstants.userAddress) != null){
//       AddressModel? addressModel = AddressModel.fromJson(jsonDecode(sharedPreferences.getString(AppConstants.userAddress)!));
//       apiClient.updateHeader(
//         token, addressModel.zoneIds, sharedPreferences.getString(AppConstants.languageCode),
//         addressModel.latitude, addressModel.longitude,
//       );
//     }else{
//       apiClient.updateHeader(token, null, sharedPreferences.getString(AppConstants.languageCode),null, null);
//     }

//     return await sharedPreferences.setString(AppConstants.token, token);
//   }

//   String getUserToken() {
//     return sharedPreferences.getString(AppConstants.token) ?? "";
//   }

//   bool isLoggedIn() {
//     return sharedPreferences.containsKey(AppConstants.token);
//   }

//   bool clearSharedData() {
//     if(!GetPlatform.isWeb) {
//       FirebaseMessaging.instance.unsubscribeFromTopic(AppConstants.topic);
//       apiClient.postData(AppConstants.tokenUri, {"_method": "put", "cm_firebase_token": '@'});
//     }
//     sharedPreferences.remove(AppConstants.token);
//     sharedPreferences.setStringList(AppConstants.cartList, []);
//     sharedPreferences.remove(AppConstants.userAddress);
//     apiClient.token = null;
//     apiClient.updateHeader(null, null, null,null, null);
//     return true;
//   }

//   // for  Remember Email
//   Future<void> saveUserNumberAndPassword(String number, String password, String countryCode) async {
//     try {
//       await sharedPreferences.setString(AppConstants.userPassword, password);
//       await sharedPreferences.setString(AppConstants.userNumber, number);
//       await sharedPreferences.setString(AppConstants.userCountryCode, countryCode);
//     } catch (e) {
//       rethrow;
//     }
//   }

//   String getUserNumber() {
//     return sharedPreferences.getString(AppConstants.userNumber) ?? "";
//   }

//   String getUserCountryCode() {
//     return sharedPreferences.getString(AppConstants.userCountryCode) ?? "";
//   }

//   String getUserPassword() {
//     return sharedPreferences.getString(AppConstants.userPassword) ?? "";
//   }

//   bool isNotificationActive() {
//     return sharedPreferences.getBool(AppConstants.notification) ?? true;
//   }

//   void setNotificationActive(bool isActive) {
//     if(isActive) {
//       updateToken();
//     }else {
//       if(!GetPlatform.isWeb) {
//         updateToken(notificationDeviceToken: '@');
//         FirebaseMessaging.instance.unsubscribeFromTopic(AppConstants.topic);
//         if(isLoggedIn()) {
//           FirebaseMessaging.instance.unsubscribeFromTopic('zone_${Get.find<LocationController>().getUserAddress()!.zoneId}_customer');
//         }
//       }
//     }
//     sharedPreferences.setBool(AppConstants.notification, isActive);
//   }

//   Future<bool> clearUserNumberAndPassword() async {
//     await sharedPreferences.remove(AppConstants.userPassword);
//     await sharedPreferences.remove(AppConstants.userCountryCode);
//     return await sharedPreferences.remove(AppConstants.userNumber);
//   }

//   bool clearSharedAddress(){
//     sharedPreferences.remove(AppConstants.userAddress);
//     return true;
//   }

//   Future<Response> getZoneList() async {
//     return await apiClient.getData(AppConstants.zoneListUri);
//   }

//   Future<Response> registerRestaurant(RestaurantBody restaurant, XFile? logo, XFile? cover) async {
//     return apiClient.postMultipartData(
//       AppConstants.restaurantRegisterUri, restaurant.toJson(), [MultipartBody('logo', logo), MultipartBody('cover_photo', cover)],
//     );
//   }

//   Future<Response> getPackageList() async {
//     return await apiClient.getData(AppConstants.restaurantPackagesUri);
//   }

//   Future<Response> setUpBusinessPlan(BusinessPlanBody businessPlanBody) async {
//     return await apiClient.postData(AppConstants.businessPlanUri, businessPlanBody.toJson());
//   }

//   Future<Response> subscriptionPayment(String id, String paymentName) async {
//     String callback = '';
//     if(GetPlatform.isWeb) {
//       String? hostname = html.window.location.hostname;
//       String protocol = html.window.location.protocol;
//       callback = '$protocol//$hostname${RouteHelper.subscriptionSuccess}';
//     }

//     return await apiClient.postData(AppConstants.businessPlanPaymentUri, {'id': id, 'payment_gateway': paymentName, 'callback': callback});
//   }

//   Future<Response> registerDeliveryMan(DeliveryManBody deliveryManBody, List<MultipartBody> multiParts) async {
//     return apiClient.postMultipartData(AppConstants.dmRegisterUri, deliveryManBody.toJson(), multiParts);
//   }

//   Future<Response> getVehicleList() async {
//     return await apiClient.getData(AppConstants.vehiclesUri);
//   }

//   Future<bool> saveDmTipIndex(String index) async {
//     return await sharedPreferences.setString(AppConstants.dmTipIndex, index);
//   }

//   String getDmTipIndex() {
//     return sharedPreferences.getString(AppConstants.dmTipIndex) ?? "";
//   }

// }
