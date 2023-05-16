import './App.css';
import { Cabecalho } from './Cabecalho/Cabecalho';
import { Card } from './Card/Card';
import { Carrossel } from './Carrossel/Carrossel';
import { Infor } from './Infor/Infor';
import { useState } from 'react';
import { Login } from './Login/Login';


function App() {

    const [isAuth, setIsAuth] = useState(false)

    return (
        <div className="App">
            <Cabecalho />
            <Card />
            <Carrossel />
            <Infor />
        </div>
    );
}

export default App;
