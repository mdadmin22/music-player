import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Pages/Home.tsx'
import Layout from './components/Header/Layout.tsx'
import PlaybackBar from './components/Bars/PlayBackBar.tsx'
import PlaylistForm from './components/Pages/PlayListForm.tsx'

function Main () {
  
  const [isPlaylistFormOpen, setisPlaylistFormOpen] =  useState (true);

    return(
    <React.StrictMode>
    
    <Layout children={undefined} onButtonClick={true} />
    
    {!isPlaylistFormOpen ? <Home /> :   <PlaylistForm onSubmit={function (_title: string, _description: string, _privacy: string): void {
      throw new Error('Function not implemented.')
    } } onCancel={function (): void {
      throw new Error('Function not implemented.')
    } } />}
    
    <PlaybackBar />
    </React.StrictMode>
  )
} 

ReactDOM.createRoot(document.getElementById('root')!).render(  
  <Main/>
)
