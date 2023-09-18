import * as dotenv  from "dotenv"
dotenv.config()

export const host : string = process.env.HOST
export const port : number = parseInt(process.env.PORT) ?? 5432
export const username : string = process.env.USERNAME ?? "postgres"
export const password: string = process.env.PASSWORD ?? ""
export const database: string = process.env.DATABASE ?? "example"
