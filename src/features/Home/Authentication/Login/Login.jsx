import { signinAction } from '../../../User/redux/action';
import { useFormik } from 'formik';
import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'

const initialValues = {
    taiKhoan: "",
    matKhau: ""
  }

  const validate = values =>{
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let errors ={}
  
    if(!values.taiKhoan.trim()){
      errors.taiKhoan = 'Your username is empty';
    } else if(specialChars.test(values.taiKhoan)){
      errors.taiKhoan = 'Username does not contain special characters';
    }
  
    if(!values.matKhau.trim()){
      errors.matKhau = 'Your password is empty';
    }
  
    return errors
  }



const Login = () => {

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
      const formik = useFormik({
        initialValues,
        onSubmit : async values =>{
          
        //  const result = await  dispatch(signinAction(values))
          
        // result && navigate("/");
        },
        validate,
      })

  return (
<section className="bg-gray-50 dark:bg-gray-900 h-screen">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Log in
        </h1>
        <form className="space-y-4 md:space-y-6" >
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input type="text" name="taiKhoan" id="username" onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            {formik.errors.taiKhoan && formik.touched.taiKhoan &&<h5 className='text-rose-600 m-0 mt-4'>{formik.errors.taiKhoan}</h5> }
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type={password} name="matKhau" id="password" onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            {formik.errors.matKhau && formik.touched.matKhau &&<h5 className='text-rose-600 m-0 mt-4'>{formik.errors.matKhau}</h5> }
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="remember" type="checkbox" onClick={showPassword} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"  />
              </div>
              <div className="ml-3 text-sm">
                <label className="text-gray-500 dark:text-gray-300">Show password</label>
              </div>
            </div>
          
          </div>
          <button type="submit" className="w-full font-semibold text-sky-700 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log in</button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet? <NavLink to="/signup" className=" text-yellow-600 font-medium text-primary-600 hover:underline dark:text-primary-500 no-underline">Sign up</NavLink>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default Login