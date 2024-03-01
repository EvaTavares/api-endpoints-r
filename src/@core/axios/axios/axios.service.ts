import axios, { AxiosInstance, AxiosResponse } from 'axios';

export class HttpService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  async get(endpoint: string): Promise<any> {
    const response: AxiosResponse = await this.axiosInstance.get(endpoint);
    return response.data;
  }

  // Outros métodos para lidar com diferentes tipos de requisições (post, put, delete, etc.)
}