import React from 'react';
import styles from '../../styles/components/menu/bar.module.css';

interface VerticalBarProps {
  children: React.ReactNode,
  OnClick?: () => void,
  clip_path : string,
  background_image : string,
}


export const VerticalBar = ({clip_path, children, background_image, OnClick}:VerticalBarProps) => { 
  
  if(window.innerWidth < 480){
    return(
      <div onClick={OnClick} className={styles.right_vertical_bar_mobile} style={{backgroundImage : background_image}}>
         <div className={styles.right_vertical_bar_mobile_black_screen}>
            {children}           
         </div>
       </div> 
    )
  }else{
    return (
      <div  onClick={OnClick} className={styles.right_vertical_bar} style={{clipPath : clip_path, backgroundImage : background_image}}>
        <div className={styles.right_vertical_bar_black_screen} style={{clipPath : clip_path}}>
          {children}
        </div>
      </div>
    );    
  }

   

};


