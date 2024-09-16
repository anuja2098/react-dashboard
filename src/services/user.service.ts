import { RegisterSchemaType } from "@/pages/registerV2";
import { USER_URL } from "./url.service";
import { LoginSchemaType } from "@/pages/loginV2";

export const registerUser = async (data: RegisterSchemaType) => {
  const response = await fetch(USER_URL.REGISTER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Sending JSON data
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || responseData.error);
  }
  return responseData;
};

export const loginUser = async (data: LoginSchemaType) => {
  const response = await fetch(USER_URL.LOGIN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || responseData.error);
  }
  return responseData;
};
