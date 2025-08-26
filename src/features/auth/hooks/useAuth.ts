"use client";
import { useRegisterUserMutation } from "../api/authApi";
import { registerInputDto } from "../schemas/authSchema";

export const useRegister=()=>{
    const [registerUser,{isLoading}]=useRegisterUserMutation();

    const registerHandler=async(data:registerInputDto)=>{
        return await registerUser(data).unwrap();
    };

    return {registerHandler,isLoading};
}