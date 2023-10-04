import React from "react";
import { BrowserRouter as Router, Route, Routes as ReactRoutes} from "react-router-dom";
import Portfolio from './views/portfolio';

const Routes = () => {
    return (
        <Router>
            <ReactRoutes>
                <Route path="/" element={<Portfolio />}/>
            </ReactRoutes>
        </Router>
    )
}


export default Routes;