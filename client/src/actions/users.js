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


export function addUser(user, cb) {
    callApi(null, null, 'POST', 'add-user', user, BUTTON_UPDATE_SUCCESS, BUTTON_UPDATE_FAILURE, cb);
}

export function updateUser(id, user, cb) {
    callApi(null, null, 'PUT', `edit-user/${id}`, user, BUTTON_UPDATE_SUCCESS, BUTTON_UPDATE_FAILURE, cb);
}

export function getOneUser(id, cb) {
    callApi(null, null, 'GET', `users/${id}`, null, FETCH_BUTTONS_SUCCESS, FETCH_BUTTONS_FAILURE, cb);

}

export function login(userData, cb) {
    callApi(null, null, 'POST', `login`, userData, FETCH_BUTTONS_SUCCESS, FETCH_BUTTONS_FAILURE, cb);
}

export function logout(cb) {
    callApi(null, null, 'DELETE', `logout`, null, FETCH_BUTTONS_SUCCESS, FETCH_BUTTONS_FAILURE, cb);
}

