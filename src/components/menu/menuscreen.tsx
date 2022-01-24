import React from 'react';
import styles from '../../styles/components/menu/menuscreen.module.css';
import { motion, useAnimation } from 'framer-motion';
import { FiMenu } from 'react-icons/fi';
import { isMenuOpen } from '../../state/menu';
import { useRecoilState } from 'recoil';
import { LeftVerticalBar, RightVerticalBar } from './bars';

const MenuScreen = () => {
    const [menuOpen, setMenuOpen] = useRecoilState(isMenuOpen);
    const startAnimationControls = useAnimation();
    const endAnimationControls = useAnimation();

    startAnimationControls.start({
        y: menuOpen ? 0 : '-100%',
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
        },
    })

  return (
    <motion.div
      className={styles.container}
      animate={startAnimationControls}
      transition={{ duration: 10, ease: "easeIn" }}
    >
        <span className={styles.topRight} style={{ marginTop: '2%', marginRight: '1%' }}>
          <FiMenu
            className={styles.menu_btn}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </span>
        <div className={styles.menu_btn_container}>
          <RightVerticalBar/>
          <LeftVerticalBar/>          
        </div>


    </motion.div>
  );
};


/*

        <div className={styles.menu_btn_container}>
          <RightVerticalBar/>
          <li>sd</li>
          <li>sd</li>
          <li>sd</li>
        </div>
*/

export default MenuScreen;
