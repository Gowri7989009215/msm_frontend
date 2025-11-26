// src/pages/message.js
import { API_ENDPOINTS } from "../config/api";

export const getFriends = async (email) => {
  try {
    const res = await fetch(API_ENDPOINTS.FRIENDS(email));
    console.log("Fetched friends response:", res);
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};


export const getMessages = async (email1, email2) => {
  try {
    const res = await fetch(API_ENDPOINTS.MESSAGES_BETWEEN(email1, email2));
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const sendMessage = async (messageData) => {
  try {
    const res = await fetch(API_ENDPOINTS.MESSAGES, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(messageData)
    });
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};
