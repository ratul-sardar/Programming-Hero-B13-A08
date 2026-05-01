"use client";

import { FaCheck } from "react-icons/fa";
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

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const form = Object.fromEntries(formData);

    const { data: session, error } = await authClient.signUp.email({
      name: form.name, // required
      email: form.email, // required
      image: form.ImgeUrl,
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
      toast.success("Registration successfull", {
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
            <h1 className="text-center mb-10">Register</h1>
            <Form
              className="flex w-full max-w-96 flex-col gap-4"
              onSubmit={onSubmit}
            >
              {/* Name Feild*/}
              <TextField isRequired name="name" type="text">
                <Label>Your name</Label>
                <Input placeholder="Your name" />
                <FieldError />
              </TextField>

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

              {/* Image Url Feild*/}
              <TextField name="ImgeUrl" type="text">
                <Label>Your Profile Image Url</Label>
                <Input placeholder="Your Profile Image Url" />
                <FieldError />
              </TextField>

              {/* Password Feild*/}
              <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }
                  if (!/[0-9]/.test(value)) {
                    return "Password must contain at least one number";
                  }
                  return null;
                }}
              >
                <Label>Password</Label>
                <Input placeholder="Enter your password" />
                <Description>
                  Must be at least 8 characters with 1 uppercase and 1 number
                </Description>
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
