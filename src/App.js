import logo from './logo.svg';
import styles from './styles.module.scss';
import heroImage from './images/image-hero-desktop.png'

function App() {
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
                  </div>
                  <div className={styles.imageWrapper}>
                      <div className={styles.imageContainer}>
                          <img src={heroImage} alt="" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
