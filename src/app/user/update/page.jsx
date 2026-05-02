"use client";

import { authClient } from "@/app/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Spinner,
  TextField,
} from "@heroui/react";
import { useState } from "react";

// <div className="bg-background relative z-40 w-full min-h-[50dvh] flex items-center justify-center">
//   <Spinner size="xl" />
// </div>

export default function Update() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    await authClient.updateUser({
      image: data.image,
      name: data.name,
    });

    setIsLoading(false);
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <section>
      <div className="cssContainer">
        <h1 className="text-center mb-10">Update your user info</h1>

        <Form
          className="flex w-full max-w-96 flex-col gap-4"
          onSubmit={onSubmit}
        >
          {/* Image URL input*/}
          <TextField name="image" type="text">
            <Label>New User Image URL</Label>
            <Input placeholder="https://www.yourimage.com" />
            <FieldError />
          </TextField>

          {/* Name input*/}
          <TextField minLength={4} name="name" type="text">
            <Label>New User Name</Label>
            <Input placeholder="Enter your new user name" />
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit" className={"w-full mt-4"}>
              {isLoading && <Spinner color="current"></Spinner>}
              Update
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
}
