
import React,{ useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  async function LoadData(){
    setLoading(true)
    const res = await fetch('https://rickandmortyapi.com/api/character')
    console.log(res)
    // fetch('https://rickandmortyapi.com/api/character')
    // .then(res => {
    //   setLoading(false)
    //   console.log(res,loading)
    // })
    // console.log(loading)
  }
  useEffect( () => {
    LoadData()
  }, [])

  return <h1>Hello {name}</h1>;
}

export default App;
