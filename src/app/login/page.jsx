"use client";

import { FaCheck, FaEye, FaGoogle } from "react-icons/fa";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Spinner,
} from "@heroui/react";
import { authClient } from "../lib/auth-client";
import { Bounce, toast } from "react-toastify";
import { useState } from "react";
import Image from "next/image";
import { IoMdEyeOff } from "react-icons/io";

export default function Login() {
  // To check if the its in loading state
  const [isLoading, setIsLoading] = useState(false);

  // Google login function
  const googleSignIn = async () => {
    setIsLoading(true);

    const data = await authClient.signIn.social({
      provider: "google",
    });

    setIsLoading(false);
  };

  // On Submit Function
  const onSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const form = Object.fromEntries(formData);

    const { data: session, error } = await authClient.signIn.email({
      email: form.email, // required
      password: form.password, // required
      callbackURL: "/",
    });

    setIsLoading(false);

    if (error) {
      console.log(error);
      // Toast message using React Toastify
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.success("Login successfull", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    //
  };

  return (
    <>
      <section className="">
        <div className="cssContainer md:flex-row">
          {/* Left Panel*/}
          <div>
            <h1 className="text-center mb-10">Login</h1>
            <Form
              className="flex w-full max-w-96 flex-col gap-4"
              onSubmit={onSubmit}
            >
              {/* Email Feild*/}
              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Please enter a valid email address";
                  }
                  return null;
                }}
              >
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
              </TextField>

              {/* Password Feild*/}
              <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
              >
                <Label>Password</Label>
                <Input placeholder="Enter your password" />
                <Description></Description>
                <FieldError />
              </TextField>

              {/* Submit Button*/}
              <div className="flex gap-2">
                <Button type="submit">
                  {isLoading ? (
                    <Spinner color="current"></Spinner>
                  ) : (
                    <FaCheck />
                  )}
                  Submit
                </Button>
                <Button type="reset" variant="secondary">
                  Reset
                </Button>
              </div>
            </Form>
            <p className="text-center mt-5">Or</p>
            <Button
              onClick={googleSignIn}
              variant="outline"
              className={"border-2 border-blue-500 text-blue-500 w-full mt-4 "}
            >
              {isLoading ? <Spinner color="current"></Spinner> : <FaGoogle />}
              Login with Google
            </Button>
          </div>

          {/* Right Panel*/}
          <div>
            <Image
              src={"Farm.svg"}
              alt="Image of a Firm"
              width={450}
              height={450}
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
}
