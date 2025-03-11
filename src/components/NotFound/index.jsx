import { Button } from "@components/Shared";
import styles from "./NotFound.module.css";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.notFound}>
      <h1 className={`display-title ${styles.largeText}`}>404</h1>
      <h2 className={`sub-title ${styles.smallText}`}>Page Not Found</h2>
      <p className={`paragraph-text ${styles.descriptionText}`}>
        Oops! The page you are looking for does not exist.
      </p>
      <Button className={styles.homeBtn} onClick={() => navigate("/")}>
        Go Home
      </Button>
    </section>
  );
};

export default NotFound;
