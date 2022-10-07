import React,{useState} from 'react'

function Book() {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName:'',
    numberOfSeats: '',
    comments: '',
    calendar: ''
  });

  function handleChange (event) {
    setFormData({...formData, [event.target.name]:[event.target.value]})
  }

  function handleSubmit (event) {
    event.preventDefault();
    alert(`Thank you ${formData.firstName}.Your reservation has been confirmed`);
    setFormData({
      firstName: '',
      secondName: '',
      numberOfSeats: '',
      comments: '',
      calendar: ''
    })
  }
  const text = "text"
  const cale= "date"
  const needToKnow = "The Dine has taken significant precautions to protect the health and safety of our guests and staff. MOH mandates, guests are no longer required to wear a mask upon arrival. For specific seating requests, please call The Dine. We will always do our best to accommodate the requests however larger parties will need to call to make reservations. Parking is available directly above us in the garage or there is plenty of on street parking. Reservations will be held for 15 minutes before being released to walk-ins. Please call 423-266-1121 if you are running late."
  return (
    <div className="bookerT">
      <div>
      <div >
        <h3 className='bookNotice'>
        We look forward to welcoming you to The Dine
        </h3>
      </div>
      <div className='forms'>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label'>First Name
            <input 
            type={text} 
            className="inputBox"
            placeholder='John'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            >
              </input><br></br>
            </label>
          </div>
          <div>
            <label className='label'> Second Name
            <input 
            type={text} 
            className="inputBox" 
            placeholder='Doe'
            name='secondName'
            value={formData.secondName}
            onChange={handleChange}
            ></input><br></br>
            </label>
          </div>
          <div>
            <label className='label'> Number of Seats
            <input 
            type={text} 
            className="inputBox" 
            placeholder="10000"
            name='numberOfSeats'
            value={formData.numberOfSeats}
            onChange={handleChange}
            ></input><br></br>
            </label>
          </div>
          <div>
            <label className='label'> Comments
            <input type={text} 
            className="inputBox" 
            placeholder='eg:allergies'
            name='comments'
            value={formData.comments}
            onChange={handleChange}
            ></input><br></br>
            </label>
          </div>
          <div>
            <label className='label'> Date
            <input 
            type={cale} 
            className="inputBox"
            name='calendar'
            value={formData.calendar}
            onChange={handleChange}
            ></input><br></br>
            </label>
          </div>
          <div className='button'>
             <button type='submit' >Submit</button><br></br>
          </div>
        </form>
      </div>
      <div className='reservations'>
        <h3 className="to">Need-to-Know</h3>
        <p className='needToKnow'>{needToKnow}</p>
      </div>
      </div>
    </div>
  )
}

export default Book