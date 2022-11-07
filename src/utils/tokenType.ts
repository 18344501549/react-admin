import cookie from 'react-cookies';
const adminToKen: string = 'admin_toKen';
const usernameKey: string = 'username';



export function getToKen() {
    return cookie.load(adminToKen);
};

export function setToKen(toKen: string) {
    return cookie.save(adminToKen, toKen, { path: '/' });
};

export function removeToKen() {
    return cookie.remove(adminToKen, { path: '/' });
};

export function setUserName(value: string) {
    return cookie.save(usernameKey, value, { path: '/' });
};

export function getUserName() {
    return cookie.load(usernameKey);
};

export function removeUserName() {
    return cookie.remove(usernameKey, { path: '/' });
};
