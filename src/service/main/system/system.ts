import reRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return reRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
