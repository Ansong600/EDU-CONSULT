import React, { useState } from 'react'
import '../App.css'
import { Button } from './Button'
import './hero-section.css'

function HeroSection() {
    

    return (
        <div className='hero-container'>
            
            <div className='hero-btns'>
                
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn-large' buttonColor='blue'>
                   
                    Apply Now
                </Button>
            </div>

            
        </div>

            

       

    );
}

export default HeroSection