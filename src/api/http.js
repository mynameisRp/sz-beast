import {http} from '@utils/server'

export const IndexData = () => http("get", "/app/index/getNewIndex")


export const newProduct = () => http("post", "app/article/newProduct")