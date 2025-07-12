import axios from "axios";
import React from "react";
import {useForm} from "react-hook-form";
import Swal from "sweetalert2";

const API_URL = import.meta.env.VITE_SERVER_API

export default function Login() {
    const {register,handleSubmit } = useForm();

    async function login(data) {
try{
    const response = await axios.post(`${API_URL}/login`,data)
}
catch (error) {
    console.log(error)
    alert("Error al iniciar sesión");
}
}

return (
    <div style= {{  padding: "20px"                     }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(login)}>
<p>
    <input type="email"{...register("email")} />
</p>
<p>
    <input type="password" {...register("password")} />
</p>
    <button className="btn" type="submit">
    Login
    </button>

        </form>

 </div>)}





   