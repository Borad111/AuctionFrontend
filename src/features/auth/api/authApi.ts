import { config } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi=createApi({
        reducerPath:"authApi",
        baseQuery:fetchBaseQuery({
            baseUrl:config.api.authApi
        }),
        endpoints:(builder)=>({
            registerUser:builder.mutation({
                query:(data)=>({
                    url:"/register",
                    method:"POST",
                    body:data
                })
            })
        })
})



export const { useRegisterUserMutation }=authApi;