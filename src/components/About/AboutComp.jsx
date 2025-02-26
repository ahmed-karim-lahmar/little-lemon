import styles from "./AboutComp.module.css";

const About = () => {
  return (
    <section className={`${styles.about}`}>
      <div className="about">
        <h1 className={`${styles.title} display-title`}>Little Lemon</h1>
        <h2 className={`${styles.subtitle} sub-title`}>Chicago</h2>
        <p className={`${styles.description} paragraph-text`}>
          <span>We are a family owned </span>
          <span>Mediterranean restaurant, focused on </span>
          <span>traditional recipes served with a </span>
          modern twist.
        </p>
      </div>
      <div className={styles.owners}>
        <img src="/Adrian.png" alt="Adrian's Picture" />
        <img src="/Mario.png" alt="Mario's Picture" />
      </div>
    </section>
  );
};

export default About;
