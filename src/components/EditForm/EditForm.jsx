import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import css from "./EditForm.module.css";
import { editContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

export default function EditForm({ id, setIsEdit, name, number }) {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();
  const showToast = (message) => {
    toast(message);
  };
  const PhoneSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "To short")
      .max(50, "To long")
      .required("Required"),
    number: Yup.string()
      .min(3, "To short")
      .max(50, "To long")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    try {
      dispatch(
        editContact({
          id: id,
          value: {
            name: values.name,
            number: values.number,
          },
        })
      );
    } catch (err) {
      console.log(err);
    }

    actions.resetForm();
    setIsEdit(false);
  };
  return (
    <>
      <Formik
        initialValues={{ name, number }}
        validationSchema={PhoneSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.form_container}>
            <label className={css.label} htmlFor={nameId}>
              <Field
                className={css.input}
                type="text"
                name="name"
                id={nameId}
              />
              <ErrorMessage name="name" render={(msg) => showToast(msg)} />
            </label>

            <label className={css.label} htmlFor={numberId}>
              <Field
                className={css.input}
                type="tel"
                name="number"
                id={numberId}
              />
              <ErrorMessage name="number" render={(msg) => showToast(msg)} />
            </label>
          </div>
          <button className={css.button} type="submit">
            Ok
          </button>
        </Form>
      </Formik>
    </>
  );
}
