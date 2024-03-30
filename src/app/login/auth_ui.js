"use client";
import Link from "next/link";
import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/solid";
import { login, registration } from "@/services/auth_repo";

const signin = async (formData) => {
    try {
        const res = await login({
        phone: formData.get("phone"),
        password: formData.get("password"),
        });
        console.log(res);
    } catch (error) {
        console.log(error);
    }
    
}
// SignUpBody {
//   String? f_name;
//   String? l_name;
//   String? phone;
//   String? email;
//   String? password;
//   String? refCode;
// }
const signup = async (formData) => {  
    try {
        const res = await registration({
        f_name: formData.get("f_name"),
        l_name: formData.get("l_name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        password: formData.get("password"),
        });
        console.log(res);
       
    } catch (error) {
        console.log(error);
    }

}
export default async function AuthUI({ isNew }) {
  return (
    <div>
      {isNew == true ? (
        <div className="flex flex-col px-5 py-3 space-y-3 justify-center items-center">
          <div className="flex flex-col items-center justify-center w-full">
            <Image
              src="/logo.png"
              alt="BD Chefs"
              width={120}
              height={121}
              className="relative  before:absolute before:top-0 before:left-0 before:bg-[url('/image/placeholder.jpg')] before:bg-cover before:bg-no-repeat before:w-28 before:h-28 before:bg-[-53px 0px]"
            />
            <Image
              src="/image/logo_name.png"
              alt="BD Chefs"
              width={100}
              height={50}
              className="relative  before:absolute before:top-0 mb-5 before:left-0 before:bg-[url('/image/placeholder.jpg')] before:bg-cover before:bg-no-repeat before:w-28 before:h-28 before:bg-[-53px 0px]"
            />
          </div>
          <form action={signup}>
          <div className="flex flex-col space-y-3 items-center justify-center w-full">
            <p className="text-primary text-xl font-bold w-full flex flex-row items-start">
              Sign Up
            </p>
            <div className="flex flex-row space-x-2 w-full">
              <label className="input input-bordered flex w-full items-center gap-2">
                <UserIcon className="w-4 h-4 opacity-70" />
                <input type="text" className="grow" placeholder="Ex: David" name="f_name" />
              </label>

              <label className="input input-bordered input-ghost flex w-full items-center gap-2">
                <UserIcon className="w-4 h-4 opacity-70" />
                <input type="text" className="grow" placeholder="Ex: Watson" name="l_name" />
              </label>
            </div>
            <label className="input input-bordered flex w-full items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="email" className="grow" placeholder="Email" name="email" />
            </label>
            <label className="input input-bordered flex w-full items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Phone Number" name="phone" />
            </label>
            <label className="input input-bordered input-ghost flex w-full items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow" placeholder="Password" name="password" />
            </label>
            <label className="input input-bordered input-ghost flex w-full items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="Confirm Password"
              />
            </label>
          </div>
          <div className="flex flex-row justify-between items-center w-full"></div>
          <p className="text-sm text-gray-600">
            *By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
          <button className="btn btn-primary w-full mt-4" type="submit">Sign Up</button>
          </form>
          <div className="text-xs text-gray-500 mt-2 flex flex-row">
            Already have an account?
            <Link href="/login">
              <p className="text-primary">Login</p>
            </Link>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col px-5 py-3 space-y-3 justify-center items-center">
          <div className="flex flex-col items-center justify-center w-full">
            <Image
              src="/logo.png"
              alt="BD Chefs"
              width={120}
              height={121}
              className="relative  before:absolute before:top-0 before:left-0 before:bg-[url('/image/placeholder.jpg')] before:bg-cover before:bg-no-repeat before:w-28 before:h-28 before:bg-[-53px 0px]"
            />
            <Image
              src="/image/logo_name.png"
              alt="BD Chefs"
              width={100}
              height={50}
              className="relative  before:absolute before:top-0 mb-5 before:left-0 before:bg-[url('/image/placeholder.jpg')] before:bg-cover before:bg-no-repeat before:w-28 before:h-28 before:bg-[-53px 0px]"
            />
          </div>
          <form action={signin}>
            <div className="flex flex-col space-y-3 items-center justify-center w-full">
              <p className="text-primary text-xl font-bold w-full flex flex-row items-start">
                Sign In
              </p>

              <label className="input input-bordered flex w-full items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Phone Number"
                  name="phone"
                />
              </label>

              <label className="input input-bordered input-ghost flex w-full items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                  name="password"
                />
              </label>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <p className="text-xs text-gray-500 mt-2">Forgot Password?</p>
            </div>
            <p className="text-sm text-gray-600">
              *By continuing, you agree to our Terms of Service and Privacy
              Policy
            </p>
            <button className="btn btn-primary w-full mt-4" type="submit">
              Login
            </button>
          </form>
          <div className="text-xs text-gray-500 mt-2 flex flex-row">
            {"Don't have an account?"}
            <Link href="/login?new=true">
              <p className="text-primary">Register</p>
            </Link>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}
