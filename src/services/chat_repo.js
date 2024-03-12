import {

  conversationListUri,
  searchConversationListUri,
  messageListUri,
  sendMessageUri,
} from "@/app_const.js";
import { getCookie } from "./cookie_utils.js";
const headers = {
  'Content-Type': 'application/json; charset=UTF-8',
  'zoneId': JSON.stringify(getCookie('zoneId') || ''),
  'localizationKey': getCookie('languageCode') || '',
  'latitude': JSON.stringify(getCookie('latitude') || ''),
  'longitude': JSON.stringify(getCookie('longitude') || ''),
  'Authorization': `Bearer ${getCookie('token') || ''}`
};

export function getConversationList(offset, type) {
  return fetch(`${conversationListUri}?limit=10&offset=${offset}&type=${type}`, { headers })
    .then(response => response.json());
}

export function searchConversationList(name) {
  return fetch(`${searchConversationListUri}?name=${name}&limit=20&offset=1`, { headers })
    .then(response => response.json());
}

export function getMessages(offset, userID, userType, conversationID) {
  const idParam =
    conversationID != null
      ? "conversation_id"
      : userType === UserType.admin
      ? "admin_id"
      : userType === UserType.vendor
      ? "vendor_id"
      : "delivery_man_id";
  const idValue = conversationID != null ? conversationID : userID;
  return fetch(
    `${messageListUri}?${idParam}=${idValue}&offset=${offset}&limit=10`, { headers }
  )
    .then(response => response.json());
}

export function sendMessage(message, images, userID, userType, conversationID) {
  const fields = {
    message: message,
    receiver_type: userType.name,
    offset: "1",
    limit: "10",
  };
  if (conversationID != null) {
    fields.conversation_id = conversationID.toString();
  } else {
    fields.receiver_id = userID.toString();
  }
  return fetch(sendMessageUri, {
    method: "POST",
    body: JSON.stringify(fields),
    headers,
  })
    .then(response => response.json());
}
