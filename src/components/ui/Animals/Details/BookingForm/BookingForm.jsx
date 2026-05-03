"use client";

import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { Bounce, toast } from "react-toastify";

// name, email, phone, address

export default function BookingForm() {
  const onSubmit = (e) => {
    const formData = new FormData(e.currentTarget);
    const data = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    toast.success("Your booking request was recorded", {
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
  };
  return (
    <Form className="w-full max-w-100" onSubmit={onSubmit}>
      <Fieldset>
        <Fieldset.Legend className="text-xl mb-4">Book now</Fieldset.Legend>
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="Shopify Bashar" />
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="shopifybashar@example.com" />
            <FieldError />
          </TextField>
          <TextField isRequired name="phone" type="tel">
            <Label>Phone Number</Label>
            <Input placeholder="+88018121212......" />
            <FieldError />
          </TextField>
          <TextField isRequired name="address" type="text">
            <Label>Address</Label>
            <Input placeholder="Your Address" />
            <FieldError />
          </TextField>
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit">Confirm Booking</Button>
          <Button
            type="reset"
            variant="secondary"
            className={"bg-accent-soft-hover hover:opacity-80"}
          >
            Reset
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
  );
}
