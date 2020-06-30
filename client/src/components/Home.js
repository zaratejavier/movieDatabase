import React, { useState, useEffect } from "react"
import { Header } from "semantic-ui-react"
import axios from "axios"

const Home = () => {
  // <Header as='h3' textAlign='center'>Movie DataBase</Header>

  const [genres, setGenres] = useState([])

  useEffect(() => {
    axios.get('/api/genres')
      .then(res => {
        setGenres(res.data)
      })
  }, [])
  
  const renderGeners = () => {
    return genres.map(genre => (
      <div>{genre.name}</div>
    ))
  }

  return (
    <div>
      {renderGeners()}
    </div>
  )
}

export default Home