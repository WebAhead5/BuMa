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



export function fetchCustomers(cb) {
    // return function (dispatch, getState) {
    callApi(null, null, 'GET', 'customers', null, FETCH_BUTTONS_SUCCESS, FETCH_BUTTONS_FAILURE, cb);
    // }
}

export function addCustomer(customer, cb) {
    callApi(null, null, 'POST', 'add-customer', customer, BUTTON_UPDATE_SUCCESS, BUTTON_UPDATE_FAILURE);
}


export function getCustomerData(id,cb) {
    // return function (dispatch, getState) {
    callApi(null, null, 'GET', `customer/${id}`, null, FETCH_BUTTONS_SUCCESS, FETCH_BUTTONS_FAILURE, cb);
    // }
}

export function deleteCustomer(id ,cb) {
    callApi(null, null, 'DELETE', `delete-customer/${id}`, null, FETCH_BUTTONS_SUCCESS, FETCH_BUTTONS_FAILURE, cb)
}


export function updateCustomer(id ,customer,cb) {
    callApi(null, null, 'PUT', `edit-customer/${id}`, customer, FETCH_BUTTONS_SUCCESS, FETCH_BUTTONS_FAILURE, cb)
}



// export function setButtonCache(cb) {
//   return function (dispatch, getState) {
//     return callApi(dispatch, getState, 'GET', 'button', null, SET_BUTTON_CACHE, SET_BUTTON_CACHE_FAILURE, cb);
//   }
// }

// export function clearButtonCache() {
//   return {
//     type: SET_BUTTON_CACHE,
//     value: {buttons: []}
//   };
// }

// export function setButtonFromCache(buttonId) {
//   return {
//     type: SET_BUTTON_FROM_CACHE,
//     value: {button: buttonId}
//   };
// }

// export function setLoginUriButtonId(buttonId) {
//   return {
//     type: SET_LOGIN_URI_BUTTON_ID,
//     value: {button: buttonId}
//   };
// }

// export function placeOrder(buttonId, orderId, cb) {
//   return function (dispatch, getState) {
//     let state = getState();
//     const button = _.find(state.buttons.buttons, {'id': buttonId});
//     if (!button) {
//       if (cb) {
//         cb('Button not found', null);
//       }
//       return;
//     }
//     let order = {};
//     order.products = [];
//     return callApi(dispatch, getState, 'PUT', 'order/' + orderId, order, BUTTON_ORDER_SUCCESS, BUTTON_ORDER_FAILURE, cb);
//   }
// }

// export function fetchButtons(cb) {
//   return function (dispatch, getState) {
//     return callApi(dispatch, getState, 'GET', 'button', null, FETCH_BUTTONS_SUCCESS, FETCH_BUTTONS_FAILURE, cb);
//   }
// }

// export function fetchButtonsWithQuery(query, cb) {
//   let queryText = '';
//   if (query) {
//     for (var key in query) {
//       if (query.hasOwnProperty(key) && query[key] !== '') {
//         queryText += (queryText === '') ? '?' : '&';
//         queryText += key + '=' + query[key];
//       }
//     }  // console.log(customerData)ate, 'GET', 'button' + queryText, null, FETCH_BUTTONS_SUCCESS, FETCH_BUTTONS_FAILURE, cb);
//   }
// }


// export function buttonUpdate(buttonId, cb) {
//   return function (dispatch, getState) {
//     let state = getState();
//     let button = _.find(state.buttons.buttons, {'id': buttonId});
//     return callApi(dispatch, getState, 'PUT', 'button/' + buttonId, {buttonObject: _.omit(button,'deliveryTimeSlots')}, BUTTON_UPDATE_SUCCESS, BUTTON_UPDATE_FAILURE, cb);
//   }
// }


// export function buttonDelete(buttonId, cb) {
//   return function (dispatch, getState) {
//     let state = getState();
//     let button = _.find(state.buttons.buttons, {'id': buttonId});
//     return callApi(dispatch, getState, 'DELETE', 'button/' + buttonId, {buttonObject: _.omit(button,'deliveryTimeSlots')}, BUTTON_DELETE_SUCCESS, BUTTON_DELETE_FAILURE, cb);
//   }
// }


// export function buttonRegister(buttonId, cb) {
//   return function (dispatch, getState) {
//     let state = getState();
//     let button = _.find(state.buttons.buttons, {'id': buttonId});
//     button.loginParams = button.loginParams || {};
//     button.loginParams.customerNumber = button.externalId;
//     return callApi(dispatch, getState, 'PUT', 'button/' + buttonId + '/register', {buttonObject: _.omit(button,['deliveryTimeSlots', 'externalId'])}, BUTTON_UPDATE_SUCCESS, BUTTON_UPDATE_FAILURE, cb);
//   }
// }

// export function buttonAttachUser(buttonId, cb) {
//   return function (dispatch, getState) {
//     let state = getState();
//     let buttonObject = {user: state.user.user.id};
//     // button attach
//     return callApi(dispatch, getState, 'POST', 'button/' + buttonId, {buttonObject: buttonObject}, BUTTON_UPDATE_SUCCESS, BUTTON_UPDATE_FAILURE).then(function (json) {
//       if (json.error) {
//         if (cb) {
//           cb(json.error, null);
//         }
//       } else {
//         // on attach we don't get all the button data from server so fetch all the buttons.
//         return callApi(dispatch, getState, 'GET', 'button', null, FETCH_BUTTONS_SUCCESS, FETCH_BUTTONS_FAILURE).then(function (json) {
//           if (json.error) {
//             if (cb) {
//               cb(json.error, null);
//             }
//           } else {
//             // success, we return only the button that we updating
//             if (cb) {
//               let buttonObject = _.find(json.buttons, {'id': buttonId});
//               cb (null, {buttonObject: buttonObject});
//             }
//           }
//         });
//       }
//     });
//   }
// }

// export function setButton(button){

//   return{
//     type: SET_BUTTON,
//     value: {button: button}
//   };
// }

// export function buttonSetProductQuantity(buttonId, productId, quantity) {
//   return {
//     type: SET_BUTTON_PRODUCT_QUANTITY,
//     value: {button: buttonId, product: productId, count: quantity}
//   };
// }

// export function buttonSetExternalId(buttonId, externalId) {
//   return {
//     type: SET_BUTTON_EXTERNAL_ID,
//     value: {button: buttonId, externalID: externalId}
//   };
// }

// export function buttonWiFiTeach(buttonId, callback) {
//   return function (dispatch, getState) {
//     return callApi(dispatch, getState, 'GET', 'button/AA' + buttonId + '/teach', null, WIFI_TEACH_SUCCESS, WIFI_TEACH_FAILURE).then(function (json) {
//       if (callback) {
//         callback(json, getState().token.value);
//       }
//     });
//   };
// }