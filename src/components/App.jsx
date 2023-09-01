import React from 'react';
import { AppBar, Tab, Tabs } from '@mui/material';


function App() {
  return (
      <AppBar position="static">
        <Tabs>
          <a href="/" />
          <a href="/contacto" />
          <a href="/acerca-de" />
        </Tabs>
      </AppBar>
  );
}

export default App;
