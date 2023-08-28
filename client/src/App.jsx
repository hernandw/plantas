import AppRouter from "./components/AppRouter"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import React, {useState} from 'react'
import { MyContext } from "./context/MyContext"
import { productos } from './data/getDataProduct'

const App = () => {
const [dataProducts, setDataProducts] = useState(productos);
 return (
    <div>
    <MyContext.Provider value={{ dataProducts, setDataProducts }}>
    <NavBar />
    <AppRouter />
    <Footer />
    </MyContext.Provider>
    </div>
  )
}

export default App