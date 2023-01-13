import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Header from "../component/header/Header";
import Singelpost from "../component/posts/Singelpost";

const App = () => {

    return (
        <Fragment>
            <Header />
            <Singelpost />
            <ToastContainer />
        </Fragment >
    )

}

export default App