import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface USERequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface USERequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: USERequestInterceptors<T>
  showLoading?: boolean
}
