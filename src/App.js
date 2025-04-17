import React, { useState } from 'react'
import Navbar from './components/new-mag/navbar';
import Newsboard from './components/new-mag/newsboard';

const App = () => {

  const [category, setcategory] = useState("general");


  return (
    <div>
      <Navbar setcategory= {setcategory}/>
      <Newsboard category={category}/>



    </div>
  )
}

export default App