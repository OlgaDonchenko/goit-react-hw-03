import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

export default function ContactForm({ onSubmit }) {
  const initialValues = {
    id: "",
    name: "",
    number: "",
  };

  const phoneRegExp = /^\d{3}-\d{2}-\d{2}$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name cannot exceed 50 characters")
      .required("Is required"),
    number: Yup.string()
      .matches(phoneRegExp, "Invalid phone number, use format 111-11-11")
      .required("Is required"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      ...values,
      id: nanoid(),
    };
    onSubmit(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <div className={css.box}>
          <label htmlFor="name">Name:</label>
          <Field className={css.text} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="div" />
        </div>
        <div className={css.box}>
          <label htmlFor="number">Number:</label>
          <Field className={css.text} type="text" name="number" />
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="div"
          />
        </div>
        <button className={css.btn} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}
