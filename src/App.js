import styles from './App.module.css';
import Nav from "./componentes/celu/nav/nav"
import Home from "./componentes/celu/home/home"
import Navpc from "./componentes/pc/navpc/nav"
import Homepc from "./componentes/pc/homepc/home"

function App() {
  return (
    <div className="App">
      <Nav className={styles.navcelu}></Nav>
      <Home className={styles.homecelu}/>
      <Navpc className={styles.navpc}></Navpc>
      <Homepc className={styles.homepc}/>
    </div>
  );
}

export default App;
