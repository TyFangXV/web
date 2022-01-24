import Image from 'next/image';
import React from 'react';
import styles from '../../styles/components/menu/bar.module.css';
import { IoLogoAppleAppstore } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';
export const RightVerticalBar = () => {
  return (
    <div className={styles.right_vertical_bar}>
      <div className={styles.right_vertical_bar_black_screen}></div>
      <p className={styles.title}>store</p>
      <IoLogoAppleAppstore className={styles.icon} />
    </div>
  );
};

export const LeftVerticalBar = () => {
  return (
    <div className={styles.left_vertical_bar}>
      <div className={styles.left_vertical_bar_black_screen}></div>
        <p className={styles.title}>contact</p>          
      <BsFillTelephoneFill className={styles.icon} />
    </div>
  );
};
