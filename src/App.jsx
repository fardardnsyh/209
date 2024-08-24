import './App.css'
import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/home/home'
import InvoiceDetail from './pages/invoice-detail/invoice-detail'
import Login from './pages/login/login'
import Register from './pages/register/regster'
import Company from './pages/company/company'
import ThemeContext from './contexts/themesContext'
import { useState, useEffect } from 'react'
import Profile from './pages/profile/profile'
import CompagniesList from './pages/company-list/CompangiesList'
import EmailConfirm from './pages/email-confirm/EmailConfirm'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import ChangePassword from './pages/changePassword/changePassword'
import PrivateWrapper from './private-root/PrivateRoot'
import { useDispatch, useSelector, Provider } from "react-redux";
import { store, persistor } from "./redux/store/store";
import { PersistGate } from 'redux-persist/integration/react'
import PageNotFound from './pages/pageNotFound/page404'
import Emailverification from './pages/email-verification/emailVerification'
import EmailConfirmPrivateRoute from './private-root/PrivateEmailConfirm'
import Anonymous from './private-root/AnonymousRoot'
import EmailPasswordConfirm from './pages/email-password-confirm/EmailPasswordConfirm'
import AdministratorPrivateRoot from './private-root/AdministratoRoute'
import Statistics from './components/statistics/Statistics'

function App() {
  sessionStorage.removeItem('user');
  localStorage.removeItem('mode');

  const isAuthenticated = true

  return (
    <>
      <div>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <div className='w-full bg-[#f5f6ff] flex justify-center items-center overflow-hidden'>
              <Router>
                <Routes>      
                  <Route element={<Anonymous />}>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/email-verification/:token" element={<Emailverification />} />
                    <Route path="/forgotPassword" element={<ForgotPassword />} />
                    <Route path="/changePassword/:token" element={<ChangePassword />} />
                    <Route path="/email-confirm" element={<EmailConfirm />} />
                    <Route
                      path="/email-password-confirm" element={
                        <EmailConfirmPrivateRoute>
                          <EmailPasswordConfirm />
                        </EmailConfirmPrivateRoute>
                      }
                    />
                  </Route>      

                  <Route path='*' element={<PageNotFound />}/>
                  <Route path="/" element={<PrivateWrapper isAuthenticated={isAuthenticated} />}>

                    <Route element={<AdministratorPrivateRoot/>}>
                      <Route path='/home' element={<Home/>} />
                      <Route path='/statitics' element={<Statistics/>} />
                    </Route>  


                    {/* <Route path='/home' element={<Home/>} /> */}
                    <Route path='/profile' element={<Profile/>} />
                    <Route path='/company-list' element={<CompagniesList/>} />
                    <Route path='/company/:id_number/details' element={<Company/>} />
                    <Route path='/invoice/:id_number' element={<InvoiceDetail/>}/>
                  </Route>
                </Routes>
              </Router>
            </div>
          </PersistGate>
        </Provider>
      </div>
    </>
  )
}

export default App
