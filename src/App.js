import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Trending from './pages/Trending';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { ProductContext } from './context/productContext';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Category from './pages/Category';
import { CategoryContext } from './context/categoryContext';
import ItemsByCategory from './pages/ItemsByCategory';

const App = () => {
  const products = useContext(ProductContext);
  const categories = useContext(CategoryContext);


  const lightTheme = {
    colors: {
      theme1: "#fb5d5c",
      theme2: "#fab75d",
      theme3: "#333333",
      theme2a: "#fab65d57",
      body: "#f1f1f1",
      surface: "#fff",
      surface_50: "#ffffff6d",
      heading: "#1d2127",
      heading_: "#fff",
      text: "#636e72",
      white: "#fff",
      black: "#000",
      black_: "#1d2127",
      gold: "#BE9E44",
      gold_: "#9964151c",
      sun: "#FDB813",
      moon: "#2c3e50",
      active: "#000",
      footer: "#101317",
      grey: "#3f4043",
      lightBorder: "#e2e8f0",
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
      xs: "400px",
    }
  }

  const darkTheme = {
    colors: {
      theme1: "#f1584a",
      theme2: "#fab75d",
      theme3: "#333333",
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
      black_: "#1d2127",
      gold: "#BE9E44",
      gold_: "#9964151c",
      sun: "#FDB813",
      moon: "#f5f6fa",
      active: "#fff",
      footer: "#101317",
      grey: "#3f4043",
      lightBorder: "#e2e8f0",
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

  const isLight = useSelector(state => state.theme);
  const [theme, setTheme] = useState(isLight ? lightTheme : darkTheme);

  useEffect(() => {
    setTheme(isLight ? lightTheme : darkTheme);
  }, [isLight]);

  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop/>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home data={products}/>} />
        <Route exact path="/shop" element={<Shop data={products}/>} />
        <Route exact path="/trending" element={<Trending data={products}/>} />
        <Route exact path="/category" element={<Category/>} />
        <Route exact path="/category/:name" element={<ItemsByCategory/>} />
        <Route path="*" element={<Home data={products}/>} />
      </Routes>
      <Footer/>
    </ThemeProvider>
  )
}

export default App;