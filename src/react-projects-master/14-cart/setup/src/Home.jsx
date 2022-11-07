import React, {useContext} from 'react'
import CartContainer from './CartContainer'
import Navbar from './Navbar'
import { AppContext } from './context'

function Home() {
      const {loading} = useContext(AppContext)
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
     <main>
        <Navbar/>
        <CartContainer/>
     </main>
  )
}

export default Home