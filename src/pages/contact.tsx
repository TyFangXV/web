import { NextPage } from 'next';
import { useRecoilState } from 'recoil';
import MenuScreen from '../components/menu/menuscreen';
import { isMenuOpen } from '../state/menu';
import styles from '../styles/contact.module.css';
import { FiMenu } from 'react-icons/fi';

const Contact: NextPage = () => {
  const [menuOpen, setMenuOpen] = useRecoilState(isMenuOpen);
  return (
    <div className={styles.container}>
        <h1 className={styles.message}>Message or find me in these platform</h1>
    </div>
  );
};

export default Contact;
