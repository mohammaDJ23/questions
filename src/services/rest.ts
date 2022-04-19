import { FetchInput, ReqInput, ResponseData } from './types';

class Request {
  protected static fetch<T extends FetchInput, K extends Promise<Response>>({ url, ...rest }: T): K {
    return fetch(`${process.env.REACT_APP_REST_API_URL}/${url}`, {
      body: JSON.stringify(rest.data),
      ...rest,
    }) as K;
  }
}

export class Rest extends Request {
  public static async req<T extends unknown = unknown, K extends ReqInput<T> = ReqInput<T>>(arg: K): Promise<T> {
    const response: Response = await this.fetch(arg);
    const responseData: ResponseData = await response.json();

    if (!response.ok) {
    }

    return responseData as T;
  }
}
