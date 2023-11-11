import Header from "@/components/Header";
import './globals.css';
import Nav from "@/components/Nav";
import Results from "../components/Results";
import requests from "../util/request";

export const metadata = {
  title: 'My Page Title'
}

export default async function Home(props) {
  const data = await getData()
  console.log(data);
  return (
    <div className=''>
      <Header />
      <Nav />
      <Results results={props} />
    </div>
  )
}

export async function getData(context) {
  const genre = context.query.genre;

  const request = await fetch(`https://www.themoviedb.org${request[genre]?.url || requests.fetchTrending.url
    }`

  )
  return res.json()
}
