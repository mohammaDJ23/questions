import { AxiosRequestConfig, Method } from 'axios';

export interface ReqInput<T extends unknown = unknown> extends AxiosRequestConfig {
  url: string;
  method: Method;
  data?: T;
}

export interface FetchInput<T extends unknown = unknown> extends ReqInput<T> {}

export interface ResponseData<T extends unknown = unknown> {}
