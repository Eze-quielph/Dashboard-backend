export interface AuthTokenResult {
    readonly sub : string
    readonly email : string
    readonly iat: string
    readonly exp: string
}

export interface IUseToken {
    readonly id: string
    readonly email: string
    readonly expire: boolean
}