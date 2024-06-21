import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Playlist from './components/playlist'


function App() {

  return (
    <>
    <Header/>
    <Playlist/>
    </>
  )
}

export default App
