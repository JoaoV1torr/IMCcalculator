import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImcComponent from './components/ImcComponent'

function App() {
  return (
    <div className="App">
      <h1>Bem-vindo à Calculadora de IMC</h1>
      <ImcComponent />
    </div>
  );
}


export default App
