import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div>
            <h1>Exercice 131</h1>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='/donnee'>Données</Link>
            </div>
        </div>
        <div>
            <Outlet />
        </div>
        
    </div>
  )
}

export default Home