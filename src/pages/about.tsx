/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import React from "react";
import styles from '../styles/About.module.css'


const About: NextPage = () => {
    return(
        <div className={styles.container}>
            <div style={{display : "flex"}}>
                <div style={{display : "flex", justifyContent: "flex-start"}} className={styles.box}>
                    <span className={styles.divider}/>
                    <p className={styles.heading}>About-me</p>
                </div>
                <div style={{display : "flex", justifyContent: "flex-end"}} className={styles.box}>
                    <div className={styles.bio}>
                        <p>I am Drex, a 16-year-old high school tech enthusiast.</p>
                        <hr />
                        <p> 
                        I'm a front-end developer that knows Typescript and has a level of proficiency in Kotlin and C#.<br/><br/>
                        I’m keen to learn new things and can work out a solution or fresh concept at any moment<br/><br/>
                        I am eager to be a member of any team, providing fantastic ideas to the team and being skilled at converting a concept into a reality. and is always willing to assist anyone in need while seeking guidance from others.<br/>
                        </p>  


                        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=TyFangXV&langs_count=5&theme=nightowl" alt="stats"/>                      
                    </div>

                </div>  
            </div>
        </div>
    )
}


export default About;