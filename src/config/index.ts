import { env } from "./env";

export const config={
    api:{
       authApi:`${env.BACKEND_URL}/auth`
    }
}