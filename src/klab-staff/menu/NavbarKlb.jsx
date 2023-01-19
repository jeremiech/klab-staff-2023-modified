import React, { Fragment } from 'react'
import {BiPlusMedical} from 'react-icons/bi'
import { Link, Outlet } from 'react-router-dom'
import {MdPictureAsPdf} from 'react-icons/md'
import {GrDocumentCsv} from 'react-icons/gr'
import './nav.css'
function NavbarKlb() {
  return (
<Fragment>
    <nav>
       <div className='right-nav'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-new"><BiPlusMedical/>New </Link></li>
            <li><Link to="/list">View List</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>

        </ul>
       </div>
       <div className="left-nav">
        <MdPictureAsPdf />
        <GrDocumentCsv />
       </div>
    </nav>
    <Outlet/>
</Fragment>

    )
}

export default NavbarKlb