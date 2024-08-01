import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { useState } from "react";
import EditForm from "../EditForm/EditForm";

Modal.setAppElement("#root");

export default function Contact({ id, name, number }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function confirmDelete() {
    dispatch(deleteContact(id));
    closeModal();
  }

  function cancelDelete() {
    closeModal();
  }

  return (
    <>
      {isEdit ? (
        <EditForm id={id} setIsEdit={setIsEdit} name={name} number={number} />
      ) : (
        <div className={css.contact}>
          <div className={css.contact_container}>
            <IoPerson />
            {name}
          </div>
          <div className={css.contact_container}>
            <FaPhone />
            {number}
          </div>
        </div>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <p className={css.modal_title}>
          Are you sure you want to delete this contact?
        </p>
        <div className={css.modal_btn_container}>
          <button
            className={css.modal_btn}
            type="button"
            onClick={confirmDelete}
          >
            Yes
          </button>
          <button
            className={css.modal_btn}
            type="button"
            onClick={cancelDelete}
          >
            No
          </button>
        </div>
      </Modal>

      <div className={css.btn_container}>
        {!isEdit && (
          <button
            className={css.contact_btn}
            type="button"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
        {isEdit ? (
          <button
            className={css.contact_btn}
            type="button"
            onClick={() => setIsEdit(false)}
          >
            Cancel
          </button>
        ) : (
          <button className={css.contact_btn} type="button" onClick={openModal}>
            Delete
          </button>
        )}
      </div>
    </>
  );
}
