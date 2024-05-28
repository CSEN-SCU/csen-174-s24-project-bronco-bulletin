import React from 'react';
import { Sidebar } from './Components/Sidebar';
import { Board } from './Components/Board';
import { Header } from '../../components/Header';

function Home() {

  return (
    <div>
      <Header />
      <div id='page'>
        <Sidebar />
        <Board/>
      </div>
    </div>
  );
}

export default Home;
