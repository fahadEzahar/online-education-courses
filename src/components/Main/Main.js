import React from 'react';
import Data from '../../Data/Data'
import { useState } from 'react';
import Courses from '../Courses/Courses';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
    const OnlineCourses = Data;
    const [courses,setCourses] = useState(OnlineCourses);
    const [cart,setCart] = useState([]);
    const addCourse = (courses) =>{
        const newCart = [...cart,courses]; 
        setCart(newCart);
    }
    const totalPrice = cart.reduce((sum,current)=> sum + current.price,0);
    return (
        <div className="container-fluid px-2">
            <div className="row">
                <div className="col-md-9 row">
                        {
                            courses.map(courses => <Courses addCourse={addCourse} courses={courses}></Courses>)
                        }
                </div>
                <div className="col-md-3">
                    <h2 className="text-center">Course Added: <FontAwesomeIcon icon={faShoppingCart} />  {cart.length} </h2>
                        {
                            cart.map(cart => <Cart cartItem={cart}></Cart>)
                        }
                    <button type="button" className="btn btn-success btn-block"> Checkout <span className="badge badge-light">$ {totalPrice}</span>
                    </button>    
                </div>
            </div>    
        </div>
    );
};

export default Main;