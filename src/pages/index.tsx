import type { NextPage } from 'next'
import Name from '../components/landing/name'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <span className={styles.middle}>
        <Name/>        
      </span>

    </div>
  )
}

export default Home
