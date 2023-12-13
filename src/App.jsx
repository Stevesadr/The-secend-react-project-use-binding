import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)
  const rest=[
    {id:1 , name:"laptop1",price:100},
    {id:2 , name:"laptop2",price:200},
    {id:3 , name:"laptop3",price:300},
    {id:4 , name:"laptop4",price:400},
  ]
  return (
    <div>
      <Form/>
      {/* {
          rest.map((item) => {
          return <Card key={item.id} data={item}/>
        })
      } */}
    </div>
  )
}

export default App
