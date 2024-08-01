import DocumentTitle from "../../components/DocumentTitle";
import RegistrationForm from "../../components/RegistrtaionForm/RegistrationForm";
export default function RegistrationPage() {
  return (
    <div>
      <DocumentTitle>Registration</DocumentTitle>
      <h1
        style={{
          fontSize: 62,
          color: "orange",
          textAlign: "center",
          padding: "20px 0",
        }}
      >
        Registration PhoneBook
      </h1>
      <RegistrationForm />
    </div>
  );
}
