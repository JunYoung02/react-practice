import React from 'react';
import noodle from '../img/noodle.png';
import './Food.css';
import {Link} from 'react-router-dom';


const menu = {
    noodle:{
        name:'신라면',
        price:'2500원',
    },
    rice:{
        name:'볶음밥',
        price:'3000원',
    },
};
function Food(){
    return(
        <div className='menu-grid'>
            <div className='menu1'>
                <Link to="/review"><img src={noodle} alt='면 요리'/></Link>
                <p className='food-name'>{menu.noodle.name}</p>
                <p className='price'>{menu.noodle.price}</p>
            </div>
            <div className='menu2'>
                <a href='/'><img src={noodle} alt='면 요리'/></a>
                <p className='food-name'>{menu.rice.name}</p>
                <p className='price'>{menu.rice.price}</p>
            </div>
            <div className='menu3'>
                <a href='/'><img src={noodle} alt='면 요리'/></a>
                <p className='food-name'>신라면</p>
                <p className='price'>2500원</p>
            </div>
            <div className='menu4'>
                <a href='/'><img src={noodle} alt='면 요리'/></a>
                <p className='food-name'>신라면</p>
                <p className='price'>2500원</p>
            </div>
            <div className='menu5'>
                <a href='/'><img src={noodle} alt='면 요리'/></a>
                <p className='food-name'>신라면</p>
                <p className='price'>2500원</p>
            </div>
            <div className='menu6'>
                <a href='/'><img src={noodle} alt='면 요리'/></a>
                <p className='food-name'>신라면</p>
                <p className='price'>2500원</p>
            </div>
        </div>
    );
}

export default Food;