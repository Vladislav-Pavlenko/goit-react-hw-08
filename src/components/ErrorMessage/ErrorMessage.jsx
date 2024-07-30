import errorImage from "../../assets/error-img.svg";
import css from "./ErrorMessage.module.css";
export default function ErrorMessage() {
  return <img src={errorImage} alt="error 400" className={css.img} />;
}
