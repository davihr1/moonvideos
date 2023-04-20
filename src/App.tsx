import { useState } from "react";
import Banner from "./Components/Banner";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Modal } from "./Components/Modal";

export function App() {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenModal() {
    setIsOpen(true)
  }
  function handleCloseModal() {
    setIsOpen(false)
  }

  return (
    <div className="dark:bg-galaxy-500 w-screen h-screnn flex flex-col items-center justify-center">

      <Header />
      <Banner />

      <Home title="Lançamentos" link="https://www.themoviedb.org/t/p/original/7bkSmPJr4v3iyQ276MB228KswAu.jpg" 
      modal={handleOpenModal}
      />

      { isOpen === false ? <></> : <Modal close={handleCloseModal}/>
        }
    </div>
  )
}