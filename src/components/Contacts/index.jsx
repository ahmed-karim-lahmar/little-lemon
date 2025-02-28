import { IconCard } from "@components/Shared";
import styles from "./Contacts.module.css";
import phone from "@assets/phone.svg";
import mail from "@assets/mail.svg";

const Contacts = () => {
  return (
    <div className={`overlayed ${styles.contacts}`}>
      <h2 className={`sub-title ${styles.title}`}>
        Make a Reservation or Just Walk in to our Restaurant
      </h2>
      <div className={styles.info}>
        <IconCard icon={phone} className={styles.card}>
          <p>55 555 555</p>
          <p>56 666 666</p>
        </IconCard>
        <IconCard icon={mail} className={styles.card}>
          <p>reservation@littlelemon.com</p>
        </IconCard>
      </div>
    </div>
  );
};

export default Contacts;
