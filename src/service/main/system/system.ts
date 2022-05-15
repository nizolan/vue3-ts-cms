import useRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return useRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// url:users/id
export function deletePageData(url: string) {
  return useRequest.delete<IDataType>({
    url: url
  })
}
