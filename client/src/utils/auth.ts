import decode from "jwt-decode";
import auth0 from "auth0-js";

const ID_TOKEN_KEY = "id_token";
const ACCESS_TOKEN_KEY = "access_token";

const CLIENT_ID = "Fw2ZEl7H66AvKfrwQE1E20Ldkdl0Ro1u";
const CLIENT_AUTH0_DOMAIN = "witness-me.eu.auth0.com";
const VUE_APP_DOMAINURL = "https://issue-tracker-wm.herokuapp.com";
const REDIRECT = VUE_APP_DOMAINURL + "/callback";
const SCOPE = "user";
const AUDIENCE = "issue-tracker";

const auth = new auth0.WebAuth({
  clientID: CLIENT_ID,
  domain: CLIENT_AUTH0_DOMAIN,
});

export function login() {
  auth.authorize({
    responseType: "token id_token",
    redirectUri: REDIRECT,
    audience: AUDIENCE,
    scope: SCOPE,
  });
}

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}
export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getUserId() {
  const jwt = getIdToken();
  const decodedJWT = decode(jwt);
  return decodedJWT.sub;
}

function getTokenExpirationDate(encodedToken: string) {
  const token = decode(encodedToken);
  if (!token.exp) {
    return null;
  }
  const date = new Date(0);
  date.setUTCSeconds(token.exp);
  return date;
}

function isTokenExpired(token: string) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}

export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(getAccessToken());
}

export function requireAuth(to: any, from: any, next: any) {
  if (!isLoggedIn()) {
    next({
      path: "/",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY);
}
function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

export function logout() {
  clearIdToken();
  clearAccessToken();
  window.location.href =
    "https://" +
    CLIENT_AUTH0_DOMAIN +
    "/v2/logout?returnTo=" +
    VUE_APP_DOMAINURL +
    "/&client_id=" +
    CLIENT_ID;
}

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName(name: string) {
  const match = RegExp("[#&]" + name + "=([^&]*)").exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, " "));
}

export function setAccessToken() {
  const accessToken = getParameterByName("access_token");
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

export function setIdToken() {
  const idToken = getParameterByName("id_token");
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}
