import logo from './logo.svg';
import styles from './styles.module.scss';
import heroImage from './images/image-hero-desktop.png'
import heroImageMobile from './images/image-hero-mobile.png'
import {ReactComponent as Audiophile} from "./images/client-audiophile.svg";
import {ReactComponent as Databiz} from "./images/client-databiz.svg";
import {ReactComponent as Maker} from "./images/client-maker.svg";
import {ReactComponent as Meet} from "./images/client-meet.svg";
import {useScreenWidth} from "./hooks/useScreenWidth";

function App() {
    const [isTabletResolution, isMobileResolution] = useScreenWidth();
  return (
    <div className={styles.appWrapper}>
      <div className={styles.appContainer}>
        <div className={styles.headerWrapper} />
          <div className={styles.mainContentWrapper}>
              <div className={styles.mainContentContainer}>
                  <div className={styles.learnMoreWrapper}>
                      <div className={styles.learnMoreContainer}>
                          <div className={styles.title}>
                              Make remote work
                          </div>
                          <div className={styles.description}>
                              Get your team in sync, no matter your location. Streamline processes,
                              create team rituals, and watch productivity soar.
                          </div>
                          <div className={styles.learnMoreButton}>
                            Learn more
                          </div>
                      </div>
                      <div className={styles.companiesIconsWrapper}>
                            <Audiophile />
                            <Databiz />
                            <Meet />
                            <Maker />
                      </div>
                  </div>
                  <div className={styles.imageWrapper}>
                      <div className={styles.imageContainer}>
                          <img src={isTabletResolution || isMobileResolution ? heroImageMobile : heroImage} alt="" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
