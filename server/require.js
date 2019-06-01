import axios from 'axios'
function postRequest(url, method ,data = {}) {
        return new Promise((resolve, reject) => {
            axios({
                    url: url,
                    method: method,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                })
                .then(res => {
                    //成功
                    resolve(res.data)
                    console.log(res)
                })
                .catch(res => {
                    //失败
                    reject(res)
                })
    
        })
    
    }
    
    export default {
        postRequest
    }
    