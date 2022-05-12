import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface RERequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface RERequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RERequestInterceptors<T>
  showLoading?: boolean
}
