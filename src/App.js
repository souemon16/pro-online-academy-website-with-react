import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Courses from './Components/Courses/Courses';
import { useState } from 'react';
import fakeData from '../src/fakeData/courses';
import Extra from './Components/Extra/Extra';
import Footer from './Components/Footer/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [course, setCourse] = useState(fakeData);

  const handleAddCourses = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
    console.log('added')
  }
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Shop cart={cart}></Shop>
      {course.map(courseValue => <Courses handleAddCourses={handleAddCourses} course={courseValue}></Courses>)}
      <Extra></Extra>
      <Footer></Footer>
    </div>
  );
}

export default App;
