import axios from "axios";

export const enum StatusCode {
  Unauthorized = 401,
  Success = 200,
  InternalServerError = 500,
  Locked = 423,
  BadRequest = 400,
  NotConfirmed = 412,
  NotFound = 404,
  NoResourceAccess = 403,
  Blocked = 421,
}

export interface IToken {
  access: string;
  refresh: string;
}

export const urls = {
  test: process.env.NEXT_PUBLIC_TEST as string,
  development: process.env.NEXT_PUBLIC_DEVELOPMENT as string,
  production: process.env.NEXT_PUBLIC_PRODUCTION as string,
};

export const http = axios.create({
  baseURL: urls[process.env.NODE_ENV],
});
