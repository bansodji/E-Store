import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import Header from './components/Header';

const App = () => {

  const light = {
    colors: {
      theme1: "#fb5d5c",
      theme2: "#fab75d",
      theme2a: "#fab65d57",
      body: "#f1f1f1",
      surface: "#fff",
      surface_50: "#ffffff6d",
      heading: "#1d2127",
      heading_: "#fff",
      text: "#1d2127",
      white: "#fff",
      black: "#000",
      gold: "#BE9E44",
      gold_: "#9964151c",
      sun: "#feca57",
      moon: "#2c3e50",
      active: "#000",
      footer: "#101317",
      grey: "#3f4043",
    },
    button: {
      btn_bg_1: "#101317",
      btn_1: "#fff",
    },
    other: {
      boxShadow: "0px 0px 3.6px rgba(0, 0, 0, 0.017),0px 0px 10px rgba(0, 0, 0, 0.025),0px 0px 24.1px rgba(0, 0, 0, 0.033),0px 0px 80px rgba(0, 0, 0, 0.05)",
      boxShadow2: "0 2px 5px rgba(0,0,0,.1)",
      transitionFast: "300ms",
      transitionMed: "600ms",
      transitionSlow: "1s",
      layout: "120px",
    },
    screen: {
      lg: "992px",
      md: "768px",
      sm: "576px",
    }
  }

  const dark = {
    colors: {
      theme1: "#f1584a",
      theme2: "#fab75d",
      theme2a: "#fab65d57",
      body: "#1d2127",
      surface: "#2e323a",
      surface_50: "#2e323a6d",
      // heading: "#d1d7e0",
      heading: "#fff",
      heading_: "#1d2127",
      text: "#aaaeb6",
      white: "#fff",
      black: "#000",
      gold: "#BE9E44",
      gold_: "#9964151c",
      sun: "#f5f6fa",
      moon: "#f5f6fa",
      active: "#fff",
      footer: "#101317",
      grey: "#3f4043",
    },
    button: {
      btn_bg_1: "#fff",
      btn_1: "#101317",
    },
    other: {
      boxShadow: "0px 0px 3.6px rgba(0, 0, 0, 0.017),0px 0px 10px rgba(0, 0, 0, 0.025),0px 0px 24.1px rgba(0, 0, 0, 0.033),0px 0px 80px rgba(0, 0, 0, 0.05)",
      boxShadow2: "0 2px 5px rgba(0,0,0,.1)",
      transitionFast: "300ms",
      transitionMed: "600ms",
      transitionSlow: "1s",
      layout: "120px",
    },
    screen: {
      lg: "992px",
      md: "768px",
      sm: "576px",
    }
  }

  const [theme, setTheme] = useState(light);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App;