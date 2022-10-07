import React from 'react'

function MenuPage({meal}) {
  return (
    <div>
        <div className='breakfast'>
          <div className='breakfast-1'>
            <h2 className='header'>{meal.meal}</h2>
            <p className='food'>~{meal.one}~</p>
            <p className='food'>~{meal.two}~</p>
            <p className='food'>~{meal.three}~</p>
            <p className='food'>~{meal.four}~</p>
            <p className='food'>~{meal.five}~</p>
          </div>
          <div className='border'>
          </div>
          <div className='breakfast-2'>
            <h2 className='header'>{meal.meal}</h2>
            <p className='food'>~{meal.six}~</p>
            <p className='food'>~{meal.seven}~</p>
            <p className='food'>~{meal.eight}~</p>
            <p className='food'>~{meal.nine}~</p>
            <p className='food'>~{meal.ten}~</p>
          </div>
        </div>
    </div>
  )
}

export default MenuPage