import Header from "@/components/Header";
import './globals.css';
import Nav from "@/components/Nav";
import Results from "../components/Results";
import requests from "../util/request";

export const metadata = {
  title: 'My Page Title'
}

export default async function Home() {
  //const data = await getData()
  console.log('data')
  return (
    <div className=''>
      <Header />
      <Nav />
      <Results />
    </div>
  )
}

 export async function getData() {

  const request = await fetch(`https://pixabay.com/api/?key=24999944-6be4bc65b802a1a3a3a92517d&q=flowers&image_type=photo&pretty=true`

  )
  return res.json()
}
