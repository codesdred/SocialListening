import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider, cookieStorageManager } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';  // for light and dark theme
import {mode} from '@chakra-ui/theme-tools';
import { BrowserRouter } from 'react-router-dom';

const styles = {
  global:(props) => ({
    body:{
      bg:mode("gray.100", "#000")(props),
      color:mode("gray.800", "whiteAlpha.900")(props)
    },
  }),
};

//Theme
const config = {
  initialColorMode: "light",
  useSystemColorMode: 'false',
};

// Extend the theme
const theme = extendTheme({config, styles});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
          <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
