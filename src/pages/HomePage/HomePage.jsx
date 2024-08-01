import { FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";
import vladislavImg from "../../img/vladislav.png";
import css from "./HomePage.module.css";
export default function HomePage() {
  return (
    <section className={css.hero}>
      <div className={css.hero_info}>
        <h1 className={css.hero_info_title}>
          Hi, I&#8217;m
          <span className={css.hero_info_title_span}>
            {" "}
            Vladislav Pavlenko
          </span>{" "}
          <br />a Front-End Developer
        </h1>
        <p className={css.hero_info_description}>
          This application was created using a stack of technologies: HTML, CSS,
          JS, React, Redux and using the libraries react-persist, react-helmet,
          react-icons, axios. It interacts with the backend to receive user data
          using the Rest API technology, provides the following functionality:
          login, registration, adding, deleting, and editing contacts.
        </p>
        <h3 className={css.hero_info_contacs_title}>Contacts me</h3>
        <ul className={css.hero_info_conatacts_list}>
          <li className={css.hero_info_item}>
            <a
              className={css.hero_info_link}
              href="https://t.me/v_pavl_v"
              target="blank"
            >
              <FaTelegram className={css.hero_info_icon} size={50} />
            </a>
          </li>
          <li className={css.hero_info_item}>
            <a
              className={css.hero_info_link}
              href="https://www.linkedin.com/in/vladislav-pavlenko-aa1a792b4/"
              target="blank"
            >
              <FaLinkedin className={css.hero_info_icon} size={50} />
            </a>
          </li>
          <li className={css.hero_info_item}>
            <a
              className={css.hero_info_link}
              href="https://github.com/Vladislav-Pavlenko"
              target="blank"
            >
              <FaGithub className={css.hero_info_icon} size={50} />
            </a>
          </li>
        </ul>
      </div>
      <div className={css.hero_img_frame}>
        <img
          className={css.hero_img}
          src={vladislavImg}
          alt="Vladislav Pavlenko"
        />
      </div>
    </section>
  );
}
