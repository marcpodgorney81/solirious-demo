import { Cookie } from "@playwright/test";

export const getCookieByName = (cookies: Cookie[], name: string): Cookie => {
  const cookie = cookies.find((cookie) => cookie.name === name);

  return cookie;
}

export const cookieExistsWthValue = (cookies: Cookie[], name: string, value: string) => {  
  const cookie = getCookieByName(cookies, name);

  if (!cookie) return false;

  return cookie.value === value;
}