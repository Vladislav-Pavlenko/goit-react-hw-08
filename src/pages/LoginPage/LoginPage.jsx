import DocumentTitle from "../../components/DocumentTitle";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <div>
      <DocumentTitle>Log In</DocumentTitle>
      <h1
        style={{
          fontSize: 62,
          color: "orange",
          textAlign: "center",
          padding: "20px 0",
        }}
      >
        Log In PhoneBook
      </h1>
      <LoginForm />
    </div>
  );
}
