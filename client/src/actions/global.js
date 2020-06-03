export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_KWIK_WIFI = 'SET_KWIK_WIFI';
export const SET_HAS_RIGHT_HEADER_LOGO = 'SET_HAS_RIGHT_HEADER_LOGO';
export const SET_PROJECT_ID = 'SET_PROJECT_ID';

export function setLoading(loading) {
  return {
    type: SET_LOADING,
    value: loading
  };
}


export function setHasRightHeaderLogo(hasLogo) {
  return {
    type: SET_HAS_RIGHT_HEADER_LOGO,
    value: hasLogo
  };
}

export function setError(error) {
  return {
    type: SET_ERROR,
    value: error
  };
}

