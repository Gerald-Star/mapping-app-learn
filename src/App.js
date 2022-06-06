import React from 'react'
import {jokeSets} from './JokesData.js'
import Joke from './Joke.js'


// to make an array of elements (eg. jokeElements) 
//that returns when you call it use .map() nethod
// start with const
export default function App() {

  const jokeElements = jokeSets.map(joke => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })



  return (
    <div>

      {jokeElements}
    </div>
  )
}

