 import { english , bengali } from "./images";
  export const  appName = 'BD Chefs';
  export const  appVersion = 7.1;

  export const  fontFamily = 'Roboto';
  export const  payInWevView = false;
  export const  webHostedUrl = 'https://stackfood-web.6amtech.com';

  export const  baseUrl = 'https://bdchefs.com';
  export const  categoryUri = '/api/v1/categories';
  export const  bannerUri = '/api/v1/banners';
  export const  restaurantProductUri = '/api/v1/products/latest';
  export const  popularProductUri = '/api/v1/products/popular';
  export const  reviewedProductUri = '/api/v1/products/most-reviewed';
  export const  searchProductUri = '/api/v1/products/details/';
  export const  subCategoryUri = '/api/v1/categories/childes/';
  export const  categoryProductUri = '/api/v1/categories/products/';
  export const  categoryRestaurantUri = '/api/v1/categories/restaurants/';
  export const  configUri = '/api/v1/config';
  export const  trackUri = '/api/v1/customer/order/track?order_id=';
  export const  messageUri = '/api/v1/customer/message/get';
  export const  forgetPasswordUri = '/api/v1/auth/forgot-password';
  export const  verifyTokenUri = '/api/v1/auth/verify-token';
  export const  resetPasswordUri = '/api/v1/auth/reset-password';
  export const  verifyPhoneUri = '/api/v1/auth/verify-phone';
  export const  checkEmailUri = '/api/v1/auth/check-email';
  export const  verifyEmailUri = '/api/v1/auth/verify-email';
  export const  registerUri = '/api/v1/auth/sign-up';
  export const  loginUri = '/api/v1/auth/login';
  export const  tokenUri = '/api/v1/customer/cm-firebase-token';
  export const  placeOrderUri = '/api/v1/customer/order/place';
  export const  addressListUri = '/api/v1/customer/address/list';
  export const  zoneUri = '/api/v1/config/get-zone-id';
  export const  removeAddressUri = '/api/v1/customer/address/delete?address_id=';
  export const  addAddressUri = '/api/v1/customer/address/add';
  export const  updateAddressUri = '/api/v1/customer/address/update/';
  export const  setMenuUri = '/api/v1/products/set-menu';
  export const  customerInfoUri = '/api/v1/customer/info';
  export const  couponUri = '/api/v1/coupon/list';
  export const  restaurantWiseCouponUri = '/api/v1/coupon/restaurant-wise-coupon';
  export const  couponApplyUri = '/api/v1/coupon/apply?code=';
  export const  runningOrderListUri = '/api/v1/customer/order/running-orders';
  export const  runningSubscriptionOrderListUri = '/api/v1/customer/order/order-subscription-list';
  export const  historyOrderListUri = '/api/v1/customer/order/list';
  export const  orderCancelUri = '/api/v1/customer/order/cancel';
  export const  codSwitchUri = '/api/v1/customer/order/payment-method';
  export const  orderDetailsUri = '/api/v1/customer/order/details?order_id=';
  export const  wishListGetUri = '/api/v1/customer/wish-list';
  export const  addWishListUri = '/api/v1/customer/wish-list/add?';
  export const  removeWishListUri = '/api/v1/customer/wish-list/remove?';
  export const  notificationUri = '/api/v1/customer/notifications';
  export const  updateProfileUri = '/api/v1/customer/update-profile';
  export const  searchUri = '/api/v1/';
  export const  reviewUri = '/api/v1/products/reviews/submit';
  export const  productDetailsUri = '/api/v1/products/details/';
  export const  lastLocationUri = '/api/v1/delivery-man/last-location?order_id=';
  export const  deliveryManReviewUri = '/api/v1/delivery-man/reviews/submit';
  export const  restaurantUri = '/api/v1/restaurants/get-restaurants';
  export const  popularRestaurantUri = '/api/v1/restaurants/popular';
  export const  latestRestaurantUri = '/api/v1/restaurants/latest';
  export const  restaurantDetailsUri = '/api/v1/restaurants/details/';
  export const  basicCampaignUri = '/api/v1/campaigns/basic';
  export const  itemCampaignUri = '/api/v1/campaigns/item';
  export const  basicCampaignDetailsUri = '/api/v1/campaigns/basic-campaign-details?basic_campaign_id=';
  export const  interestUri = '/api/v1/customer/update-interest';
  export const  suggestedFoodUri = '/api/v1/customer/suggested-foods';
  export const  restaurantReviewUri = '/api/v1/restaurants/reviews';
  export const  distanceMatrixUri = '/api/v1/config/distance-api';
  export const  searchLocationUri = '/api/v1/config/place-api-autocomplete';
  export const  placeDetailsUri = '/api/v1/config/place-api-details';
  export const  geocodeUri = '/api/v1/config/geocode-api';
  export const  socialLoginUri = '/api/v1/auth/social-login';
  export const  socialRegisterUri = '/api/v1/auth/social-register';
  export const  updateZoneUri = '/api/v1/customer/update-zone';
  export const  walletTransactionUri = '/api/v1/customer/wallet/transactions';
  export const  loyaltyTransactionUri = '/api/v1/customer/loyalty-point/transactions';
  export const  loyaltyPointTransferUri = '/api/v1/customer/loyalty-point/point-transfer';
  export const  customerRemoveUri = '/api/v1/customer/remove-account';
  export const  conversationListUri = '/api/v1/customer/message/list';
  export const  searchConversationListUri = '/api/v1/customer/message/search-list';
  export const  messageListUri = '/api/v1/customer/message/details';
  export const  sendMessageUri = '/api/v1/customer/message/send';
  export const  zoneListUri = '/api/v1/zone/list';
  export const  restaurantRegisterUri = '/api/v1/auth/vendor/register';
  export const  dmRegisterUri = '/api/v1/auth/delivery-man/store';
  export const  restaurantPackagesUri = '/api/v1/auth/vendor/package-view';
  export const  businessPlanUri = '/api/v1/auth/vendor/business_plan';
  export const  refundReasonsUri = '/api/v1/customer/order/refund-reasons';
  export const  refundRequestUri = '/api/v1/customer/order/refund-request';
  export const  orderCancellationUri = '/api/v1/customer/order/cancellation-reasons';
  export const  cuisineUri = '/api/v1/cuisine';
  export const  cuisineRestaurantUri = '/api/v1/cuisine/get_restaurants';
  export const  restaurantRecommendedItemUri = '/api/v1/products/recommended';
  export const  vehicleChargeUri = '/api/v1/vehicle/extra_charge';
  export const  vehiclesUri = '/api/v1/get-vehicles';
  export const  productListWithIdsUri = '/api/v1/customer/food-list';
  export const  recentlyViewedRestaurantUri = '/api/v1/restaurants/recently-viewed-restaurants';
  export const  subscriptionListUri = '/api/v1/customer/subscription';
  export const  sendCheckoutNotificationUri = '/api/v1/customer/order/send-notification';
  export const  cartRestaurantSuggestedItemsUri = '/api/v1/products/recommended/most-reviewed';
  export const  aboutUsUri = '/about-us';
  export const  privacyPolicyUri = '/privacy-policy';
  export const  termsAndConditionUri = '/terms-and-conditions';
  export const  cancellationUri = '/cancellation-policy';
  export const  refundUri = '/refund-policy';
  export const  shippingPolicyUri = '/shipping-policy';
  export const  subscriptionUri = '/api/v1/newsletter/subscribe';
  export const  addFundUri = '/api/v1/customer/wallet/add-fund';
  export const  walletBonusUri = '/api/v1/customer/wallet/bonuses';
  export const  mostTipsUri = '/api/v1/most-tips';
  export const  orderAgainUri = '/api/v1/customer/order-again';
  export const  businessPlanPaymentUri = '/api/v1/auth/vendor/subscription/payment/api';

  /// Shared Key
  export const  theme = 'theme';
  export const  token = 'multivendor_token';
  export const  countryCode = 'country_code';
  export const  languageCode = 'language_code';
  export const  cartList = 'cart_list';
  export const  userPassword = 'user_password';
  export const  userAddress = 'user_address';
  export const  userNumber = 'user_number';
  export const  userCountryCode = 'user_country_code';
  export const  notification = 'notification';
  export const  searchHistory = 'search_history';
  export const  intro = 'intro';
  export const  notificationCount = 'notification_count';
  export const  notificationIdList = 'notification_id_list';
  export const  topic = 'all_zone_customer';
  export const  zoneId = 'zoneId';
  export const  localizationKey = 'X-localization';
  export const  latitude = 'latitude';
  export const  longitude = 'longitude';
  export const  earnPoint = 'stackfood_earn_point';
  export const  acceptCookies = '6ammart_accept_cookies';
  export const  cookiesManagement = 'cookies_management';
  export const  dmTipIndex = 'stackfood_dm_tip_index';
  export const  walletAccessToken = '6ammart_wallet_access_token';



  ///Refer & Earn work flow list..
  export const dataList = [
    'invite_your_friends_and_business',
    "they register with special offer",
    'you_made_your_earning'
  ];

  /// Delivery Tips
  export const tips = ['0' ,'15', '10', '20', '40', 'custom'];
  export const deliveryInstructionList = [
    'Deliver to front door',
    'Deliver to the reception desk',
    'Avoid calling me',
  ];


  ///Order Status
  export const  pending = 'pending';
  export const  accepted = 'accepted';
  export const  processing = 'processing';
  export const  confirmed = 'confirmed';
  export const  handover = 'handover';
  export const  pickedUp = 'picked_up';
  export const  delivered = 'delivered';
  export const  cancelled = 'canceled';

  /// Delivery Type
  export const  delivery = 'delivery';
  export const  takeAway = 'take_away';

  /// Preference Day
  export const preferenceDays = ['today', 'tomorrow'];

  /// Deep Links
  export const  yourScheme = 'BD Chefs';
  export const  yourHost = 'stackfood.com';

  /// Languages
  export const languages = [
    {imageUrl: english, languageName: 'English', countryCode: 'US', languageCode: 'en'},
    // LanguageModel(imageUrl: Images.arabic, languageName: 'عربى', countryCode: 'SA', languageCode: 'ar'),
    // LanguageModel(imageUrl: Images.spanish, languageName: 'Spanish', countryCode: 'ES', languageCode: 'es'),
    {imageUrl: bengali, languageName: 'Bengali', countryCode: 'BN', languageCode: 'bn'},
  ];

  export const joinDropdown = [
    'join_us',
    'become_a_vendor',
    'become_a_delivery_man'
  ];

  ///Wallet
  export  const walletTransactionSortingList = [
    {
      'title' : 'all_transactions',
      'value' : 'all'
    },
    {
      'title' : 'order_transactions',
      'value' : 'order'
    },
    {
      'title' : 'converted_from_loyalty_point',
      'value' : 'loyalty_point'
    },
    {
      'title' : 'added_via_payment_method',
      'value' : 'add_fund'
    },
    {
      'title' : 'earned_by_referral',
      'value' : 'referrer'
    },
  ];