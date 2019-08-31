import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './container.css';

import AddressForm from '../components/template';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className="mainContainer">
        <AddressForm/>
      </Container>
    </React.Fragment>
  );
}
