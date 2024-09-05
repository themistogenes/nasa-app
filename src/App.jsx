import { useState } from "react"
import Main from "./components/Main"
import SideBar from "./components/SideBar"
import Footer from "./components/Footer"

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Main />
      {
        showModal && (<SideBar></SideBar>)
      }
      <Footer />
    </>
  )
}

export default App