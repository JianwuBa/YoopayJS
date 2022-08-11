import Cookies from 'js-cookie'

const TokenKey = "skyToken"
let num = 168 //失效时间是几小时
let time= new Date(new Date().getTime() + num * 60 * 60 * 1000);

export  function getToken(){
    return Cookies.get(TokenKey)
}

export function setToken(token){
    return Cookies.set(TokenKey,token,{
        expires: time
    })
}

export  function removeToken(){
    Cookies.remove(TokenKey)
}