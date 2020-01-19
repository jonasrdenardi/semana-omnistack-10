import React, {useState,useEffect} from 'react';
import api from './services/api'

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

function App() {
  const [devs, setDevs] = useState([]);
  // 1 param: qual função precisa executar, 2 param quando a função precisa executar

  useEffect(() =>{
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }
    loadDevs();
  },[]);
  
async function handleDevAdd(data) {
  const response  = await api.post('/devs', data)

  setDevs([...devs, response.data])
}

  return (
    <div id="app">
      <aside>
        <strong>Cadastar</strong>
        <DevForm onSubmit={handleDevAdd}/>
      </aside>
      
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
          
        </ul>
      </main>
    </div>
  );
}

export default App;
