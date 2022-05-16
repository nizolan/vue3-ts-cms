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

export function createPageData(url: string, newData: any) {
  return useRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return useRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
