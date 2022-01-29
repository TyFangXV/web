import React from 'react';
import styles from '../../styles/components/menu/bar.module.css';

interface VerticalBarProps {
  children: React.ReactNode,
  clip_path : string,
  background_image : string,
}


export const VerticalBar = ({clip_path, children, background_image}:VerticalBarProps) => {  
  return (
    <div className={styles.right_vertical_bar} style={{clipPath : clip_path, backgroundImage : background_image}}>
      <div className={styles.right_vertical_bar_black_screen} style={{clipPath : clip_path}}>
        {children}
      </div>
    </div>
  );
};


