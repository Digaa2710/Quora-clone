import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPenToSquare, faPeopleGroup,  faSearch,faPlus,faGlobe,faCaretDown,faCalendar,faList, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-regular-svg-icons'
import './Quora.css';
import { useNavigate } from 'react-router-dom';

function QuoraHeader() {
    const [isSidebarVisible, setSidebarVisibility] = useState(false);
    const navigate = useNavigate();
    const toggleSidebar = () => {
        setSidebarVisibility(!isSidebarVisible);

      };
      const goToMyself = () => {
        
        navigate('/Profile');
      };
      const goToAnswer=()=>{
        navigate('/Answer')
      }
    
  return (
    

    <div className='qHeader'>
        
      <div className='qHeader-content'>
      {isSidebarVisible && (

        <div className='sidebar'>
         
            <div className="first">
         <h2 className='h'>N</h2>
            <h2 className="t" onClick={goToMyself}>Profile</h2>
            </div>
         <div className="two">
         <div className='item'>
      <FontAwesomeIcon icon={faHome} className='icon' />
      <p><b>Home</b></p>
    </div>
    <div className='items'>
      <FontAwesomeIcon icon={faList} className='icon' />
      <p><b>Following</b></p>
    </div>
    <div className='item1'>
      <FontAwesomeIcon icon={faBell} className='icon' />
      <p><b>Notification</b></p>
    </div>
    <div className='item2'>
      <FontAwesomeIcon icon={faCalendar} className='icon' />
      <p><b>Spaces</b></p>
    </div>
    <div className='item3'>
    <p><b>Try Quora</b></p>
      <FontAwesomeIcon icon={faPlus} className='icon' />
      
    </div>
    <div className='item4'>
    <p onClick={goToAnswer}><b>Add Question</b></p>
      <FontAwesomeIcon icon={faAngleRight} className='icon' />
      
    </div>
            </div>
        </div>
        
      )}
        <h1 className='title'>Quora</h1>
        <div className='home'>
        <FontAwesomeIcon icon={faHome}  />
        
        <FontAwesomeIcon icon={faPenToSquare}  />
        <FontAwesomeIcon icon={faPeopleGroup}  />
        <FontAwesomeIcon icon={faBell}  />
        </div>
        <div className='new'>
        <span>
          <FontAwesomeIcon icon={faSearch} size='1.5x'/>
        </span>
        <input type='text' placeholder="Search Quora" className='next' />
        </div>
        <div className='new1'>
            <span>
            <h4>Try Quora</h4>
            </span>
            <FontAwesomeIcon icon={faPlus} size='1.5x' />
        </div>
       <div className='letter' onClick={toggleSidebar}>
        <h1>N</h1>
       </div>
      <div className='home'>
      <FontAwesomeIcon icon={faGlobe}  />
      </div>
      <div className='new2'>
            <span>
            <h4>Add Question</h4>
            </span>
            
            <FontAwesomeIcon icon={faCaretDown} size='1.5x' />
        </div>
      </div>
      
    </div>
  );
}

export default QuoraHeader;
