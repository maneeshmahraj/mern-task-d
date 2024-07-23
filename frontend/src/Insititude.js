

import React from 'react'
import { Link, Outlet} from 'react-router-dom';
const Insititude = () => {
  return (
    <>
  <div className='insi-data'>
  <h2 className='heading-teacher2'>Wecome to insititude</h2>

  <div className='insitute'>
   
       
   <ul>
                 
       <li><Link to="insert" className='link22'>Insert</Link></li>
       <li><Link to="display" className='link22'>Display</Link></li>
       <li><Link to="update" className='link22'>Update</Link></li>
       
   </ul>

</div>
<div className='data-item'>
<Outlet/>
</div>
  </div>
   
    </>
  )
}

export default Insititude