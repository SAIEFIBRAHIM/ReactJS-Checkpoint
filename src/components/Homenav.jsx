import React from 'react'
import '../css/Homenav.css'
import "bootstrap/dist/css/bootstrap.min.css";
import logoc from '../img/logoc.png'
import Button from 'react-bootstrap/esm/Button';

const Homenav = () => {
  return (
    <div className='homenav'>
        
        <h2 className='txt'><img className='logoc' src={logoc} alt='Mypicture'></img>Hello! I am Saief Brahim. I work as interface and front end developer. I have passion for pixel perfect, minimal and easy to use interfaces.<Button className='btnc' variant="light">Hire me</Button></h2>
    </div>
  )
}

export default Homenav