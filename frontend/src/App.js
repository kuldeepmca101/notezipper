import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import { BrowserRouter } from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';
import MainPage from './screens/MainPage';

const App = () => {

  return <>
    <BrowserRouter>
      <Header />
      <main>
        <MainPage />
      </main>
      <Footer />
    </BrowserRouter>
  </>
}

export default App;
