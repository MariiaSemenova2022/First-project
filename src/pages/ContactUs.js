import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
   if (!name || !email) return;
   setUser({name:name, email:email, message:message });
   navigate('/dashboard');
  };

   return (
    <section className='section'>
    <iframe className='map' src="https://www.google.com/maps/embed/v1/place?q=Morden,+Манитоба,+Канада&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        <form className='form' onSubmit={handleSubmit}>
        <h4 className='contact'>Contact Us</h4>
        <div className='form-row'>
          <input
            type='text'
            className='form-input'
            id='name'
            placeholder='Name*'
            value size="30"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        
          <label htmlFor='email' className='form-label'>
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            placeholder='Email*'
            value size='30'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br></br>
        <label htmlFor='email' className='form-label'>
            </label>
          <textarea
            type='message'
            className='form-input'
            id='message'
            placeholder="Message*"
            rows="10"
            cols="80"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
       
       <button class="button" type="submit">Send Message</button>

      </form>
    </section>
  );
};

export default ContactUs;