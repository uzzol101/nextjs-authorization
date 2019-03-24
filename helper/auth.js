import cookie from 'js-cookie'

export const  login = (token) => {
    cookie.set('token', token, { expires: 1 })
}
