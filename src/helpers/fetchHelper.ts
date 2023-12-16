type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface FetchOptions {
  method?: HttpMethod;
  headers?: HeadersInit;
  body?: BodyInit;
}

interface ApiResponse<T> {
  data: T;
  status: number;
}

class FetchHelper {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
    const data = await response.json();
    return {
      data,
      status: response.status,
    };
  }

  async get<T>(
    endpoint: string,
    options?: FetchOptions
  ): Promise<ApiResponse<T>> {
    const response = await fetch(`${this.baseUrl}/${endpoint}`, {
      method: "GET",
      ...options,
    });

    return this.handleResponse<T>(response);
  }

  async post<T>(
    endpoint: string,
    options?: FetchOptions
  ): Promise<ApiResponse<T>> {
    const response = await fetch(`${this.baseUrl}/${endpoint}`, {
      method: "POST",
      ...options,
    });

    return this.handleResponse<T>(response);
  }
}

export default FetchHelper;
