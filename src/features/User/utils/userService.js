import requester from "app/api";
import { apiPath } from "app/apiPath";

export const signin = async (signInInfo) => {
  return await requester({
    method: "POST",
    url: apiPath.SIGN_IN,
    data: signInInfo,
  });
};

export const signup = async (signInInfo) => {
  return await requester({
    method: "POST",
    url: apiPath.SIGN_UP,
    data: signInInfo,
  });
};

export const fetchProfile = async (token) => {
  return await requester({
    method: "POST",
    url: apiPath.USER_INFO,
    headers:  {
      Authorization : "Bearer " + token
    },
  });
};


export const fetchPersonalInf = async (token) => {
  return await requester({
    method: "POST",
    url: apiPath.ACCOUNT_INFO,
    headers:  {
      Authorization : "Bearer " + token
    },
  });
};
