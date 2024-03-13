import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import Dashboard from '../components/dashboard/Dashboard'
const AppRouter = () => {
 
  return (
    <Router>
      <Fragment>
      <ToastContainer
              position="top-center"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
        />
         

        <Routes>
          <Route exact path="/" element={<Dashboard />} /> 
        </Routes>
      </Fragment>
    </Router>
  )
}

export default AppRouter