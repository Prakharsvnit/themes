import React from 'react';
import {  ThemeProvider, Button } from '@material-ui/core';
import { createTheme } from '@mui/material/styles';
import { red,blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500]
    },
    secondary: {
      main: blue[500]
    }
  }
});

const Example = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
    </ThemeProvider>
  );
}

export default Example;
