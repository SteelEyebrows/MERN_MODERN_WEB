import client from "../client";

export const postRegister = (payload) =>
   client.post('register',payload)

export const postLogin = (payload) =>
   client.post('login',payload)

export default{
    postRegister,
    postLogin
}   