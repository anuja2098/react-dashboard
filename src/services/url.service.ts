import urlJoin from "url-join";

const BASE_URL = "http://localhost:3000/";

export const USER_URL = {
  LOGIN: urlJoin(BASE_URL, "/user/login"),
  REGISTER: urlJoin(BASE_URL, "/user/register"),
};
