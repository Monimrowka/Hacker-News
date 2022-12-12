import './App.css';
import data from "./data.json"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import ArticlesList from './Components/ArticlesList';


function App() {
  console.log(data.hits);
  return (
    <>
    <Navbar />
    <ArticlesList />
    <Footer />
    </>
  );
}

export default App;
