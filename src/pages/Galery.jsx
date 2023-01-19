import React from 'react'
import { useParams } from 'react-router-dom'
import './all.css'

function Galery() {
const {id}=useParams();


  return (
    <div>this is Galery {`ID: ${id}`}</div>
  )
}

export default Galery