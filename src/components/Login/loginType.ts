interface loginData {
    username: string,
    password: string,
    code:string
}

interface codeData {
    val:string | number
}

export  type {
    loginData,
    codeData
}