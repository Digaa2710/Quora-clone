import React from 'react'
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
import './Myself.css';
function Myselfpart() {
  return (
    <div className='mainpage'>
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
    </div>
    <div className="content">
    <div class='header'>
    <div>
        <h1 className='name'>Quora</h1>
    </div>
    <div className='some'>
        
          <FontAwesomeIcon icon={faSearch} className='change' />
        
        <input type='text' placeholder="Search for Anything... " />
        <p className='search'>Search</p>
        </div>
    </div>
    <div className='box1'>
        <div className='box2'>
            <div className='profile'>
            <h1 className='part'>N</h1>
            <div className='profile1'>
    <h1>Niharika Patel</h1>
    <h4 className='brown'>python developer at XYZ</h4>
    </div>
            </div>
            <div className='more'>
                <div>
                <ul className="more1">
                    <li className='red'>Profile</li>
                    <li>Question</li>
                    <li>Answers</li>
                    <li>Posts</li>
                        </ul>
                </div>
                <div>
                <ul className='more2'>
        <li>Following</li>
        <li>Followers</li>
        <li>Edits</li>
        <li>Activity</li>
            </ul>
                </div>
            </div>
        </div>
        <div className='box4'>
        <div className='box'>
<h1>Credentials & </h1>
<h1>Highlights</h1>
<p className='color'><b>Has worked in Mc Donalds</b></p>
<p className='color1'><b>Has been part of various</b> </p>
<p className='color2'><b>Active in extra curriculars</b></p>
<p className='color3'><b>Birth year-1982</b></p>
</div>
<div className='box5'>
    <h1>Knows About</h1>
    <p className='d'><b>Cooking</b></p>
    <p className='d'><b>Banking</b></p>
    <p className='d1'><b>Filing</b></p>
    <p className='d2'><b>Coding</b></p>
</div>
</div>
    </div>
   </div>
  </div>
  )
}

export default Myselfpart
