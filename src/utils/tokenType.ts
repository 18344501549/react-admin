// import cookie from 'cookie_js';
const adminToKen = 'admin_toKen';
const usernameKey = 'username';



export function getToKen() {
    return sessionStorage.getItem(adminToKen);
}

export function setToKen(toKen: string) {
    return sessionStorage.setItem(adminToKen, toKen);
}

export function removeToKen(toKen: string) {
    return sessionStorage.remove(adminToKen);
}

export function setUserName(value: string) {
    return sessionStorage.setItem(usernameKey, value);
}

export function getUserName() {
    return sessionStorage.getItem(usernameKey);
}

export function removeUserName() {
    return sessionStorage.remove(usernameKey);
}
