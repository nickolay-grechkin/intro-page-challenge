import logo from './logo.svg';
import styles from './styles.module.scss';
import heroImage from './images/image-hero-desktop.png'

function App() {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.appContainer}>
        <div className={styles.headerWrapper} />
          <div className={styles.mainContentWrapper}>
              <div className={styles.learnMoreContainer}>

              </div>
              <div className={styles.imageWrapper}>
                  <div className={styles.imageContainer}>
                      <img src={heroImage} alt="" />
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
