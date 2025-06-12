import { Cookie } from '@playwright/test';

interface BrowserCookie {
  name: string;
  value: string;
  url?: string;
}

export const doesCookieExist = (cookies: Cookie[]) => {

} 

export const createCookie = (name: string, value: string, url: string): BrowserCookie => {
  return {name, value, url};
}