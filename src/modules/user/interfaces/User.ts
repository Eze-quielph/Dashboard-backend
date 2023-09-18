export interface UserInterface{
    readonly id: string,
    readonly username: string,
    readonly email: string,
    readonly password: string,
    readonly premium: boolean,
    readonly image: string,
    readonly otpSecret: string,
    readonly otpCounter: number
}