import { callApi } from '../utils/api'
var _ = require('lodash');

export const FETCH_BUTTONS_SUCCESS = 'FETCH_BUTTONS_SUCCESS';
export const FETCH_BUTTONS_FAILURE = 'FETCH_BUTTONS_FAILURE';
export const SET_BUTTON_PRODUCT_QUANTITY = 'SET_BUTTON_PRODUCT_QUANTITY';
export const SET_BUTTON_EXTERNAL_ID = 'SET_BUTTON_EXTERNAL_ID';
export const BUTTON_UPDATE_SUCCESS = 'BUTTON_UPDATE_SUCCESS';
export const BUTTON_UPDATE_FAILURE = 'BUTTON_UPDATE_FAILURE';
export const BUTTON_ORDER_SUCCESS = 'BUTTON_ORDER_SUCCESS';
export const BUTTON_ORDER_FAILURE = 'BUTTON_ORDER_FAILURE';
export const SET_BUTTON_CACHE = 'SET_BUTTON_CACHE';
export const SET_BUTTON_CACHE_FAILURE = 'SET_BUTTON_CACHE_FAILURE';
export const SET_BUTTON_FROM_CACHE = 'SET_BUTTON_FROM_CACHE';
export const WIFI_TEACH_SUCCESS = 'WIFI_TEACH_SUCCESS';
export const WIFI_TEACH_FAILURE = 'WIFI_TEACH_FAILURE';
export const SET_BUTTON = "SET_BUTTON";
export const SET_LOGIN_URI_BUTTON_ID = "SET_LOGIN_URI_BUTTON_ID";
export const BUTTON_DELETE_SUCCESS = 'BUTTON_DELETE_SUCCESS';
export const BUTTON_DELETE_FAILURE = 'BUTTON_DELETE_FAILURE';



export function getPaymentSettingsByUserId(id,cb) {
    callApi(null, null, 'GET', `paymentSettings/${id}`, null, FETCH_BUTTONS_SUCCESS, FETCH_BUTTONS_FAILURE, cb);
}



export function editPaymentSettings(id,settings , cb) {
    callApi(null, null, 'PUT', `edit-payment-settings/${id}`, settings, FETCH_BUTTONS_SUCCESS, FETCH_BUTTONS_FAILURE, cb);
}