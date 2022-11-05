import React, { useEffect, useState } from 'react';
import styles from '../../styles/components/menu/bar.module.css';

interface VerticalBarProps {
  children: React.ReactNode,
  OnClick?: () => void,
  clip_path : string,
  background_image : string,
}

/*

      <div onClick={OnClick} className={styles.right_vertical_bar_mobile} style={{backgroundImage : background_image}}>
         <div className={styles.right_vertical_bar_mobile_black_screen}>
            {children}           
         </div>
       </div>

*/

export  const VerticalBar = ({clip_path, children, background_image, OnClick}:VerticalBarProps) => { 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 480);


    window.addEventListener("resize" , () =>  setIsMobile(window.innerWidth < 480));
    
  }, [])


  return (
    <div  onClick={OnClick} className={isMobile ? styles.right_vertical_bar_mobile : styles.right_vertical_bar} style={{clipPath : clip_path, backgroundImage : background_image}}>
      <div className={isMobile ? styles.right_vertical_bar_mobile_black_screen: styles.right_vertical_bar_black_screen} style={{clipPath : clip_path}}>
        {children}
      </div>
    </div>
  ); 
};


