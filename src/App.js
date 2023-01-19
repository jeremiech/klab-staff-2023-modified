import React, { Fragment } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Uploader from './im-uploader/Uploader'
import KGallery from './klab-staff/gallery/KGallery'
import Home from './klab-staff/homek/Home'
import Listing from './klab-staff/listK/Listing'
import NavbarKlb from './klab-staff/menu/NavbarKlb'
import Register from './klab-staff/registration-form/Register'
function App() {
  return (
  //  <Router>
  //   <Routes>
  //     <Route path='/' element={<NavbarKlb />}>
  //     <Route index element={<Home />}/>
  //     <Route path='/add-new' element={<Register />}/>
  //     <Route path="/list" element={<Listing />} />
  //     <Route path='/gallery' element={<KGallery />}/>


  //     </Route>
  //   </Routes>
  //  </Router>

  <Fragment>
    <Uploader/>
  </Fragment>
    )
}

export default App