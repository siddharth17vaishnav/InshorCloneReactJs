import { useState,useEffect} from 'react';
import './App.css';
import Navinshorts from './components/Navinshorts';
import axios from 'axios';
import NewsContent from './NewsContent/NewsContent';
import apikey from './data/config';
import { Category } from '@material-ui/icons';
import Footer from './Footer/Footer';

function App() {

  const [category,setCategory] = useState("general");
  const [newsArray,setNewsArray] = useState([])
  const [newsResults,setNewsResults]=useState();
  const [loadmore, setLoadmore] = useState(20);

  const newsApi = async()=>{
    try{
      const proxyurl = "cors-anywhere.herokuapp.com/";
        const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}&pageSize=${loadmore}`);
        setNewsArray(news.data.articles);
        setNewsResults(news.data.totalResults);
        console.log(news);
      }
    
    catch(error){
      console.log(error);
    }
  }
  
    useEffect(() => {
      newsApi(); //eslint-disable-next-line
      } 
    , [newsResults,category,loadmore]);

  return (
    <div className="App">
      <Navinshorts setCategory={setCategory}/>
      <NewsContent 
      setLoadmore={setLoadmore}
      loadmore={loadmore}
      newsArray={newsArray}
      newsResults={newsResults}
      />
      <Footer/>
    </div>
  );
}

export default App;


