import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen,faBriefcase, faGraduationCap, faLocationDot,faCalendar} from '@fortawesome/free-solid-svg-icons';
import {faEye} from '@fortawesome/free-regular-svg-icons'
import './Body.css'
function QuoraBody() {
  return (
    <div className='main1'>
      <div className='main2'>
        <h1>N</h1>
      </div>
      <div className='main3'>
        <h1>Nihirika Patel</h1>
        <h4 className='credits'>Add Profile Credentials</h4>
        <h4 className='credits' >0 followers 0 following</h4>
      </div>
      <div className='main'>
      <div className='main4'>
        <span>
        <h3>Credentials and Highlights</h3>
        </span>
        <FontAwesomeIcon icon={faPen}  />

        </div>
        
        <div className='main5'>
            <span>
            <FontAwesomeIcon icon={faBriefcase}/>
            </span>
            <h4>Add employment credential</h4>
        </div>
        <div className='main6'>
            <span>
            <FontAwesomeIcon icon={faGraduationCap}/>
            </span>
            <h4>Add education credential</h4>
        </div>
        <div className='main7'>
            <span>
            <FontAwesomeIcon icon={faLocationDot}/>
            </span>
            <h4>Add location credential</h4>
        </div>
        <div className='main8'>
            <span>
            <FontAwesomeIcon icon={faEye}/>
            </span>
            <h4>648 content views <span className='dif'>22 this month</span></h4>
        </div>
        <div className='main9'>
            <span>
            <FontAwesomeIcon icon={faCalendar}/>
            </span>
            <h4>Joined October <span className='dif'>2022</span></h4>
        </div>
        
      </div>
    </div>
  )
}

export default QuoraBody
