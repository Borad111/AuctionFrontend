import { config } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { registerRequest, registerResponse } from "../types";

export const authApi=createApi({
        reducerPath:"authApi",
        baseQuery:fetchBaseQuery({
            baseUrl:config.api.authApi
        }),
        endpoints:(builder)=>({
            registerUser:builder.mutation<registerResponse,registerRequest>({
                query:(data)=>({
                    url:"/register",
                    method:"POST",
                    body:data
                })
            })
        })
})



export const { useRegisterUserMutation }=authApi;