import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ProductProvider } from './context/productContext';
import { FilterProvider } from './context/filterContext';
import { CategoryProvider } from './context/categoryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ProductProvider>
      <FilterProvider>
        <CategoryProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CategoryProvider>
      </FilterProvider>
    </ProductProvider>
  </Provider>
);
