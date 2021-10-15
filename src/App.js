import { Route,Switch } from 'react-router-dom';
import './styles/App.css';
import Accueil from './pages/Accueil';
import Galerie from './pages/Galerie';
import Tarifs_Prestations from './pages/Tarifs et Prestations';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './coponents/NavBar';
import LogoCharle from './coponents/LogoCharle'; 
import './styles/NavBar.scss'
import InstaFacebook from './coponents/InstaFacebook';




export default function App() {
  return (
    <div className="background">
      <InstaFacebook/>
     <LogoCharle/>
     <NavBar/>
      <Switch>
      <Route path="/" exact>
        <Accueil/>
      </Route>
      <Route path="/Galerie" >
        <Galerie/>
      </Route>
      <Route path="/Tarifs_Prestations">
        <Tarifs_Prestations/>
      </Route>
      <Route path="/Contact" >
        <Contact/>
      </Route>
      </Switch>
    </div>
  )
};