import React, { useState } from 'react'
import './ContactForm.css'
import Button from '../Button/Button'
import {MdMessage} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'

const ContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  // const onSubmitViaCall = () => {
  //   console.log("im from call support")
  // }

  const onSubmit = (e) => {
    e.preventDefault();

    setName( e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  }


  return (
    
    <section className='container'>
      <div className='contactform'>
        <div className='topbttn'>
        <Button text=" VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
        <Button 
        // onClick={onSubmitViaCall}
        text=" VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>
        </div>
        <Button isOutline={true} text=" VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>}/>


        <form onSubmit={onSubmit}>
          <div className='formcontrol'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name'/>
            </div>

            <div className='formcontrol'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email'/>
            </div>

            <div className='formcontrol'>
            <label htmlFor='text'>Text</label>
            <textarea name='text' rows='8'/>
            </div>         
          
            <div className='submit'>
            <Button 
            
            text=" SUBMIT"/>
            </div>
        </form>
      </div>

     
      <div className='contactimg'>
        <img src="./images/contactlady.svg" alt="contactlady"/>
      </div>
    </section>
    
  )
}

export default ContactForm