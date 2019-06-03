import {http} from '@untils/server'

export const IndexData = () => http("get", "/app/index/getNewIndex")


export const newProduct = (params) => http("post", "app/article/newProduct", params)