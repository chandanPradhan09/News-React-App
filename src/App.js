import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import NewsCard from "./components/NewsCard";

function App() {
  const url = "https://newsapi.org/v2/everything?q=";
  const apiKey = "1d1916fed89f41fb9652ba0e32f7db08";
  const li = document.querySelectorAll("li");
  let curentNav = null;
  li.forEach((ele)=>{
    ele.addEventListener("click",()=>{
      fetchNews(ele.innerText);
      curentNav?.classList.remove("text-blue-600");
      curentNav = ele;
      curentNav.classList.add("text-blue-600"); 
    })
  })
  const searchFunction=()=>{
    const btn = document.querySelector("#btn");
    btn.addEventListener("click",()=>{
      const search = document.querySelector('#search').value;
      if(search === undefined) return;
      fetchNews(search);
      curentNav = null;
    })
  }
  const [news,setNews] = useState([]);
  async function fetchNews(query){
    const res =  await fetch(`${url}${query}&apiKey=${apiKey}`);
    const newsData = await res.json();
    setNews(newsData.articles);
  }
  useEffect(()=>{
    fetchNews("Odisha");
    searchFunction();
  },[])
  return (
    <div className="App">
      <NavBar />
      <div className="cardContainer pt-20 flex flex-wrap justify-around gap-6">
      {news.map((ele)=>{
        if(ele.urlToImage!==null){
        return <NewsCard key={ele.url} url={ele.url} title={ele.title} img={ele.urlToImage} disc={ele.description}/>
        }
      })}
      </div>
    </div>
  );
}

export default App;