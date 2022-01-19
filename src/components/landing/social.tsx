import Link from "next/link";
import React from "react";
import styles from '../../styles/components/landing/social.module.css'

const Social = () => {
    return (
        <div className={styles.container}>
            <ul>
                <li><Link href="https://github.com/TyFangXV">Github</Link></li>
                <li><Link href="https://www.youtube.com/channel/UCID3fhfAkONRI_9fADzoiXQ">YouTube</Link></li>
                <li><Link href="https://discord.gg/gcJ2n3peR7">Discord</Link></li>
            </ul>
        </div>
    )
}


export default Social;