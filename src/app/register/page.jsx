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
} from "@heroui/react";
import { authClient } from "../lib/auth-client";

export default function Register() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    const form = Object.fromEntries(formData);

    console.log(form);
    // alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);

    const { data: session, error } = await authClient.signUp.email({
      name: form.name, // required
      email: form.email, // required
      password: form.password, // required
      callbackURL: "/",
    });
    console.log(error);
    //
  };

  return (
    <>
      <h1 className="">Hi, from Register</h1>
      <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
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
        {/* <TextField name="ImgeUrl" type="text">
          <Label>Your Profile Image Url</Label>
          <Input placeholder="Your Profile Image Url" />
          <FieldError />
        </TextField>*/}

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
            <FaCheck />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </>
  );
}
