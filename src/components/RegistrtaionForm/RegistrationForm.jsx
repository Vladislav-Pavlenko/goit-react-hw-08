import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const emailId = useId();
  const passId = useId();
  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "To short")
      .max(50, "To long")
      .required("Required"),
    email: Yup.string()
      .min(3, "To short")
      .max(50, "To long")
      .required("Required"),
    password: Yup.string()
      .min(7, "To short")
      .max(50, "To long")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    try {
      dispatch(register(values));
    } catch (err) {
      console.log(err);
    }

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameId}>
          <p className={css.paragraph}>Username</p>
          <Field className={css.input} type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="span" />
        </label>
        <label className={css.label} htmlFor={emailId}>
          <p className={css.paragraph}>Email</p>
          <Field className={css.input} type="email" name="email" id={emailId} />
          <ErrorMessage name="email" component="span" />
        </label>
        <label className={css.label} htmlFor={passId}>
          <p className={css.paragraph}>Password</p>
          <Field
            className={css.input}
            type="password"
            name="password"
            id={passId}
          />
          <ErrorMessage name="password" component="span" />
        </label>
        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
