import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import { Container } from 'semantic-ui-react'

ReactDOM.render(
  <React.StrictMode>
    <Container fluid>
      <Menu />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);
