import React from 'react'
import { useParams } from 'react-router-dom';
import Car from '../components/Car';
import './all.css'
function About() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];

  const {id}=useParams()

const car=cars.find(car=>{return car.id==id})
console.log(car)


  return (
    <div style={{color:"black"}}>This is About page  with car 
    <Car name={car.brand} key={car.id}/>
    </div>
  )
}

export default About