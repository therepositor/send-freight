import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Main from '../Components/Main'
import ReturnToPreviousPage from '../Components/ReturnToPreviousPage'
const Index = () => (
        <BrowserRouter>
            <Header />
            <ReturnToPreviousPage />
            <Main />
            <Footer />
        </BrowserRouter>
    )


export default Index
