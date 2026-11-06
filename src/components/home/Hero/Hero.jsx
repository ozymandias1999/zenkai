import HeroContent from "./HeroContent"
import HeroFeatures from "./HeroFeatures"

import styles from "./Hero.module.css"


export default function Hero () {
    return(
    <section className={styles.hero}>
        <img className={styles.heroBackground} src="./public/images/hero/heroBack.png" alt="" aria-hidden="true"/>
        <div className={styles.heroComposition}>
            <HeroContent/>
            <HeroFeatures/>
        </div>
    </section>
    )
}