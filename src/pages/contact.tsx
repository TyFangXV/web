import { NextPage } from 'next';
import Github from '../components/contact/github';
import Linkedin from '../components/contact/linkedin';
import styles from '../styles/contact.module.css';

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.message}>Message or find me in these platform</h1>

      <div className={styles.social}>
        <Linkedin/>
        <Github/>
      </div>
    </div>
  );
};

export default Contact;
