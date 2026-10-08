'use client'

import { useAdminLoginMutation, useAdminLogoutMutation } from "@/redux/api/admin.api"
import { adminLogin } from "@/type/admin"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

const AdminPage = () => {
    const [adminLogin] = useAdminLoginMutation()
    const [adminLogout] = useAdminLogoutMutation()

    const adminSchema = z.object({
        email: z.string().min(1),
        password: z.string().min(1)
    }) satisfies z.ZodType<adminLogin>

    const { register, formState: { errors }, reset, handleSubmit } = useForm<adminLogin>({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: zodResolver(adminSchema)
    })

    const handleRegister = async (data: adminLogin) => {
        try {
            await adminLogin(data).unwrap()
            console.log('admin login success');
        } catch (error) {
            console.log(error);
        }
    }
    return <>

        <form onSubmit={handleSubmit(handleRegister)}>
            <input type="text"{...register('email')} placeholder="enter your email" />
            <input type="text"{...register('password')} placeholder="enter your password" />
            <button type="submit">login</button>
        </form>

    </>
}

export default AdminPage