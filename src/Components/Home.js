import React, {useState} from 'react'
import HomeAbout from './HomeAbout';

function Home() {
  const [formData, setFormData] = useState({
    comment:""
  });
  function handleChange (event) {
    setFormData({
      ...formData,
      [event.target.name]:event.target.value
    });
  }

  function handleSubmit (event) {
    event.preventDefault();
    fetch("https://restaurantone.herokuapp.com/feedback", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        comment:formData.comment
      })
    });
    setFormData({comment:'' })
  }

  return (
    <div className='home'>
      <div className='homePage'>
        <h3 className='welcome-note'>
          THE DINE
        </h3>
        <h2 className='slogan'>
          WHERE EVERY FLAVOUR TELLS A STORY
        </h2>
      </div>
      <>
      <HomeAbout/>
      </>
      <div className="feedback">
        <h3  className='feedback-notice'>Tell Us How You Dined</h3>
        <form onClick={handleSubmit}>
          <label className='hhh'> We Value Your Feedback, It Helps Us Serve You Well
            <input 
            type={"text"} 
            className="input"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            ></input>
          </label>
          <div className='button'>
          <button  type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home