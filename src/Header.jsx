import React from 'react';
import useOnlineStatus from './useOnlineStatus';
import{Link} from "react-router-dom"

function Home() {

    const status=useOnlineStatus();

  return (
    <div className='head-wrapper'>
    <div>Online status: {!status?"offline":"online"}</div>
    <div>Home</div>
    <Link to="/Grocery">Grocery</Link>
    </div>
  )
}

export default Home