import React, {useState} from 'react';
import './App.css';
import { MyteHeader } from './components/MyteHeader/MyteHeader'

import { GlobalProvider} from './context/GlobalContext'
import { MytePostList } from './components/MytePostList/MytePostList';
import { MytePage } from './components/MytePage/MytePage';

function App() {


  return (
    <GlobalProvider>
      <MyteHeader  ></MyteHeader>
      <MytePostList></MytePostList>
      <MytePage></MytePage>
    </GlobalProvider>
  );
}

export default App;
