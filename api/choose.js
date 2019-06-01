import http from '../server/require'
import axios from 'axios'
const data = ""
axios({
    method:'get',
    url:'https://api.thebeastshop.com/app/search/suggest',

}).then((res)=>{
    data = res
})
export default{
    data
}