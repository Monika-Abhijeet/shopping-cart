import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";

const ui = (
  <div>
    <h1>Signup</h1>
    <Form>
      <TextField label="First Name" name="firstName" type="text" />
      <TextField label="Last Name" name="lastName" type="text" />
      <TextField label="email" name="email" type="email" />
      <TextField label="age" name="age" type="number" />
      <TextField label="password" name="password" type="password" />
      <TextField
        label="Confirm Password Name"
        name="confirmPassword"
        type="password"
      />

      <button type="submit">Register</button>
    </Form>
  </div>
);

function RegisterUser(values) {
  const userDetails = values;
  console.log(userDetails);
}

const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email().required(),
    age: Yup.number().required(),
    password: Yup.string()
      .min(6, " password should be min 6 characters")
      .required(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "password should match")
      .required(),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        RegisterUser(values);
      }}
    >
      {(formik) => <div>{ui}</div>}
    </Formik>
  );
};

export default Signup;
