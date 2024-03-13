import React from 'react'
import { Provider } from 'react-redux'
import store from './store/configStore'
import 'react-toastify/dist/ReactToastify.css';
import './styles/main.scss'
import { createRoot } from "react-dom/client";
import AppRouter from './router/AppRouter'

const jsx = (
    <Provider store={store}>
         <AppRouter />
    </Provider>

)

const domNode = document.getElementById("app")
createRoot(domNode).render(jsx)

