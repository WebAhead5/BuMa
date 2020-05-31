import {API_HOST} from '../constants'
import {setLoading, setError} from '../actions/global';

function getCode(json) {
  return (json.code || (json.header && json.header.code) || 9000);
}

function getMessage(json) {
  return (json.message || (json.header && json.header.message) || 'Unknown error');
}

function setSuccess(successType, json) {
  return {
    type: successType,
    value: json
  };
}

function setFailure(failureType, error) {
  return {
    type: failureType,
    value: error
  };
}

function fail(dispatch, failureType, message, cb) {
  dispatch(setLoading(false));
  if (failureType) {
    dispatch(setFailure(failureType, message));
  }
  dispatch(setError(message));
  if (cb) {
    cb(message, null);
  }
  return Promise.resolve({error: message});
}

function success(dispatch, successType, json, cb) {
 // dispatch(setLoading(false));
  // if (successType) {
  //   dispatch(setSuccess(successType, json))
  // }
  if (cb) {
    cb(null, json);
  }
  return Promise.resolve(json);
}

export function callApi(dispatch, getState, method, path, body, successType, failureType, cb) {
 //dispatch(setLoading(true));
  //dispatch(setError(null));

  //let state = getState();

  let headers = {
    Accept: 'application/json, text/plain, */*',
  };

  //if (state.token.value) {
  //  headers['Authorization'] = 'Token ' + state.token.value;
 // }

  if (body) {
    headers['Content-Type'] = 'application/json';
  }

  return fetch(API_HOST + path, {
    method: method,
    headers: headers,
    body: body ? JSON.stringify(body) : null,
  }).then(response => response.json())
    .then((json) => {
      let code = getCode(json);
      let message = getMessage(json);
console.log(code);
      // if ((code !== 200) && (code !== 201)) {
      //   return fail(dispatch, failureType, message, cb);
      // }
      return success(dispatch, successType, json, cb);
    }, (error) => {
      return fail(dispatch, failureType, error, cb);
    });
}
