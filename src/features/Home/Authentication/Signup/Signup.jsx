import { useFormik } from 'formik';
import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {number, object, string} from 'yup';

const userSchema = object({
    hoTen: string().required("*Please enter your full name").trim(),
    taiKhoan: string().required("*Please enter your username").trim(),
    matKhau: string().required("*Please enter your password").min(6,"Enter a combination of at least six numbers, letters and punctuation marks (such as ! and &)."),
    email: string().required("*Please enter your email").email("*Please enter a valid email address").trim(),
    soDT: string().required("*Please enter only numbers").length(10, "The correct phone number only has ten digits.").matches(/(0[3|5|7|8|9])+([0-9]{8})\b/g, '*Only contain number'),
  });


const Signup = () => {

    const [password, setPassword] = useState("password");

    const showPassword = () => {
        if (password === "text") {
          setPassword("password");
        } else {
          setPassword("text");
        }
      };

      const dispatch = useDispatch();
      const navigate = useNavigate();
      const user = useFormik({
        initialValues:{
          email: "",
          hoTen: "",
          matKhau: "",
          soDT: "",
          maNhom: "GP06",
          taiKhoan: "", 
        },
        validationSchema : userSchema, 
        onSubmit: async values=>{
        
        //   const result = await dispatch(userSignup(values));
        //   result && navigate('/login');
        }
      })



  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign up
          </h1>
          <form className="space-y-4 md:space-y-6" >
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input onBlur={user.handleBlur}  onChange={user.handleChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
              {user.errors.email  && user.touched.email && <p className='text-sm p-0 m-0 text-rose-600'>{user.errors.email}</p> }
            </div>
            
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
              <input onBlur={user.handleBlur}  onChange={user.handleChange} type="text" name="taiKhoan" id="username" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              {user.errors.taiKhoan  && user.touched.taiKhoan && <p className='text-sm p-0 m-0 text-rose-600'>{user.errors.taiKhoan}</p> }
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input onBlur={user.handleBlur}  onChange={user.handleChange} type={password} name="matKhau" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              {user.errors.matKhau  && user.touched.matKhau && <p className='text-sm p-0 m-0 text-rose-600'>{user.errors.matKhau}</p> }
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="remember"  type="checkbox" onClick={showPassword} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="text-gray-500 dark:text-gray-300">Show password</label>
                </div>
              </div>
            
            </div>
            
            <div>
              <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
              <input onBlur={user.handleBlur}  onChange={user.handleChange} type='text' name="hoTen" id="fullname" placeholder="Nguyen Van A" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              {user.errors.hoTen  && user.touched.hoTen && <p className='text-sm p-0 m-0 text-rose-600'>{user.errors.hoTen}</p> }
            </div>



            <div>
              <label htmlFor="phonenumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
              <input onBlur={user.handleBlur}  onChange={user.handleChange} type='text' name="soDT" id="phonenumber" placeholder="0912345678" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              {user.errors.soDT  && user.touched.soDT && <p className='text-sm p-0 m-0 text-rose-600'>{user.errors.soDT}</p> }
            </div>

            <button  type="submit" className="w-full font-semibold text-sky-700 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account? <NavLink to="/login" className=" text-yellow-600 font-medium text-primary-600 hover:underline dark:text-primary-500 no-underline">Log in</NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Signup