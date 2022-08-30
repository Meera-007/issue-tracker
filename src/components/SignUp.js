import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import * as Yup from "yup";
import "./login.css";

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div className="wrapper">
      <div className="logo">
          <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="" />
      </div>
      <div className="text-center mt-4 name">Issue Tracker</div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name" {...register("Full Name", {required: true, maxLength: 80})} />
      <input type="email" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <input type="password" placeholder="Password" {...register("Password", {required: true})} />
      <input type="password" placeholder="Confirm Password" {...register("Confirm Password", {required: true})} />
      <select {...register("Gender", { required: true })}>
        <option value="Male, Female, Other">Male, Female, Other</option>
      </select>
      

      <input type="submit" />
    </form>
  );
}