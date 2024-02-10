import React from 'react'
import './Answer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faList,
  faBell,
  faCalendar,
  faPlus,
  faAngleRight,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
function Answer() {
  return (
    <div className="mainpage1">
        <div className='sidebar1'>
        <div className="first1">
        <h2 className='h1'>N</h2>
        <h2>Profile</h2>
      </div>
      <div className="two1">
        <div className='ite'>
          <FontAwesomeIcon icon={faHome} className='icon' />
          <p><b>Home</b></p>
        </div>
        <div className='items1'>
          <FontAwesomeIcon icon={faList} className='icon' />
          <p><b>Following</b></p>
        </div>
        <div className='ite1'>
          <FontAwesomeIcon icon={faBell} className='icon' />
          <p><b>Notification</b></p>
        </div>
        <div className='ite2'>
          <FontAwesomeIcon icon={faCalendar} className='icon' />
          <p><b>Spaces</b></p>
        </div>
        <div className='ite3'>
          <p><b>Try Quora</b></p>
          <FontAwesomeIcon icon={faPlus} className='icon' />
        </div>
        <div className='ite4'>
          <p><b>Add Question</b></p>
          <FontAwesomeIcon icon={faAngleRight} className='icon' />
        </div>
      </div>
      <div className='content1'>
        <div className='header1'>
            
        </div>
      </div>
        </div>
       
    </div>
  )
}

export default Answer
