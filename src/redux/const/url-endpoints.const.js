import { REACT_APP_BACKEND_URL } from "@env"

//! If dev -> use local url
export const BASE_URL = __DEV__ ? 'http://10.0.2.2:8080' : (REACT_APP_BACKEND_URL != undefined ? REACT_APP_BACKEND_URL : '');