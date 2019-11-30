import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import { DashBoardPage } from 'modules/pages';
import './App.css';

const App: React.FC = () => {
  // useEffect(() => {
  //   axios.get('/api/hello')
  //     .then(res => setState(res.data))
  // }, [])

  const [state, setState] = useState('')

  return (
    <div>
      {/* <p>{state}</p> */}
      <DashBoardPage />
    </div>
  )
}

export default App;
