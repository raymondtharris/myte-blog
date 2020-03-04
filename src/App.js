import React, {useState} from 'react';
import './App.css';
import { MyteHeader } from './components/MyteHeader/MyteHeader'

import { GlobalProvider} from './context/GlobalContext'
import { MytePostList } from './components/MytePostList/MytePostList';

function App() {


  return (
    <GlobalProvider>
      <MyteHeader  ></MyteHeader>
      <MytePostList></MytePostList>
    </GlobalProvider>
  );
}

export default App;
