import Navbar from './components/Navbar';
import './App.css'
import MainCard from './components/MainCard';
import DealsCards from './components/DealsCards';
import KnowMore from './components/KnowMore';
import StatsBanner from './components/StatsBanner';

function App() {


  return (
    <>
     <Navbar />
     <MainCard />
     <DealsCards />
     <KnowMore />
     <StatsBanner/>
    </>
  )
}

export default App;
