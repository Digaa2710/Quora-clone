import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Body2.css'
function QuoraBody2() {
    const[menu,setMenu]=useState("Profile")
  return (
    <div className='Navbar'>
      <div className='nav-menu'>
        <li onClick={()=>{setMenu("Profile")}}>Profile{menu==="Profile"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("1 Answer")}}>1 Answer{menu==="1 Answer"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("1 Question")}}>1 Question{menu==="1 Question"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("0 Posts")}}>0 Posts{menu==="0 Posts"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("0 Follower")}}>0 Followers{menu==="0 Follower"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Following")}}>Following{menu==="Following"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Edits")}}>Edits{menu==="Edits"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Activity")}}>Activity{menu==="Activity"?<hr/>:<></>}</li>
        
      </div>
      <div className='new3'>
      <h4 >Profile</h4>
      <div className='new4'>
      <h4 >Most Recent</h4>
      
      <FontAwesomeIcon icon={faCaretDown}  />
      </div>
    
      </div>
      <div className="question">hi</div>
    </div>
  )
}

export default QuoraBody2
