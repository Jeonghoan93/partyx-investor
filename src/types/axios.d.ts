import { AxiosInstance } from 'axios';

declare module '#app' {
  interface NuxtApp {
    $axios: {
      event: AxiosInstance;
      auth: AxiosInstance;
      orders: AxiosInstance;
    };
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $axios: {
      event: AxiosInstance;
      auth: AxiosInstance;
      orders: AxiosInstance;
    };
  }
}
