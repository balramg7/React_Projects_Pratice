import styles from './Navigation.module.css';
const Navigation = () => {
  return (
    <main>
      <nav className={`${styles.navigation} container`}>
        <div className="logo">
          <img src="\images\Frame.png" alt="logo" />
        </div>

        <ul>
          <li href="#">Home</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
      </nav>
    </main>
  );
};

export default Navigation;
