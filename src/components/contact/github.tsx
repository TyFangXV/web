/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import styles from '../../styles/components/contact/gh.module.css'
import axios from 'axios'

export interface gh {
    login:               string;
    id:                  number;
    node_id:             string;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          string;
    received_events_url: string;
    type:                string;
    site_admin:          boolean;
    name:                string;
    company:             string;
    blog:                string;
    location:            string;
    email:               null;
    hireable:            boolean;
    bio:                 string;
    twitter_username:    null;
    public_repos:        number;
    public_gists:        number;
    followers:           number;
    following:           number;
    created_at:          Date;
    updated_at:          Date;
}


const Github:React.FC = () => {
    const [userData, setUserData] = useState<gh>({} as gh);

    useEffect(() => {
            axios.get("https://api.github.com/users/TyfangXV")
            .then(data => setUserData(data.data))
            .catch(err => console.log)
    }, [])

    return(
        <div className={styles.container}>
            <section className={styles.section}>
                   <img src={"/GitHub-Emblem.png"} alt="logo"width={85} height={50} className={styles.logo}/>
            </section>
            <section className={styles.body}>
                {
                    userData.login ? (
                       <>
                         <img src={userData.avatar_url} alt='pfp' className={styles.pic}/>
                         <h1>@{userData.login}</h1>
                         <p>{userData.bio}</p>
                         <p className={styles.company}>{userData.company}</p>

                         <button className={styles.button}>
                            View Profile
                         </button>
                       </>
                    ) : (
                        <div>
                            <h1>failed to fetch data</h1>
                        </div>
                    )
                }
            </section>
        </div>
    )
}

export default Github;