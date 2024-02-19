"use server"

import User from "@/models/User-Model"
import ConnectMongoDB from "@/config/db"
import bcrypt from "bcrypt"

import { permanentRedirect } from 'next/navigation'


export async function Signup (formData){
    await ConnectMongoDB();

    const email = formData.get("email")
    const password = formData.get("password")
    const name = formData.get("first_name")
    const address = formData.get("address")
    const phone = formData.get("phone")
    console.log(email,password,name,address,phone)
    const hashedPassword = await  bcrypt.hash(password,10)
    const upload = await User.create({
        email,
        name,
        number: phone,
        address,
        password : hashedPassword
    })
    console.log(upload)

    return permanentRedirect("/login")
}