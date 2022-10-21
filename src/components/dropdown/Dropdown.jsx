import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/userSlice';
import './Dropdown.css';
const data = [{id: 0, label: "Istanbul, TR (AHL)"}, {id: 1, label: "Paris, FR (CDG)"}];

const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  }
  const isSignedIn = localStorage.getItem("userToken")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <div className='dropdown'>
      <div className='dropdown-header' onClick={toggleDropdown}>
        {selectedItem ? items.find(item => item.id == selectedItem).label : "Welcome, buddy!"}
        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && 'open'}`}>
        
          <div className="dropdown-item" onClick={() => {
            console.log("CLICKED")
            dispatch(logout())
            navigate("/auth")
          }} >
              {isSignedIn && <span>Log out</span>}
            
          </div>
        
      </div>
    </div>
  )
}

export default Dropdown;