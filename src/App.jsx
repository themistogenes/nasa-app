import { useState } from "react"
import Main from "./components/Main"
import SideBar from "./components/SideBar"
import Footer from "./components/Footer"

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <Main />
      {
        showModal && (
          <SideBar 
            handleToggleModal={handleToggleModal}
          >
          </SideBar>
        )
      }
      <Footer handleToggleModal={handleToggleModal} />
    </>
  )
}

export default App