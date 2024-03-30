"use server"
import { login } from "../auth_repo"
export const exeLogin = async (formData) => {
    try {

        const res = await login({phone:formData.get("phone"),password:formData.get("password")})
        console.log(res)
        return {msg:"Login Success"}

    } catch (error) {
        return {msg:"Login Failed"}
    }
}
