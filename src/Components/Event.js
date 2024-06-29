import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';



function Event(){
    const [name, setName] = useState('');
        const [description, setDescription] = useState('');
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          const eventData = { name, description };
      
          // Get existing events from local storage, or initialize an empty array
          const existingEvents = JSON.parse(localStorage.getItem('events') || '[]');
      
          // Add the new event to the array
          existingEvents.push(eventData);
      
          // Store the updated array back in local storage
          localStorage.setItem('events', JSON.stringify(existingEvents));
      
          // Optionally, clear the form fields after submission
          setName('');
          setDescription('')
        };
    
    return (
        <div>
            <nav className="flex justify-between">
                <ul className="flex space-x-4">
                    <li>
                        <button className="nav-button hover:glow bg-blue-500 text-white font-bold py-2 px-4 rounded">Home</button>
                    </li>
                    <li>
                        <Link to="/event">
                        <button className="nav-button hover:glow bg-blue-500 text-white font-bold py-2 px-4 rounded">Events</button></Link>
                    </li>
                    <li>
                        <button className="nav-button hover:glow bg-blue-500 text-white font-bold py-2 px-4 rounded">Marketplace</button>
                    </li>
                    <li>
                        <button className="nav-button hover:glow bg-blue-500 text-white font-bold py-2 px-4 rounded">Discussions</button>
                    </li>
                </ul>
                <div className="logout-box">
                    <button className="logout-button hover:glow bg-red-500 text-white font-bold py-2 px-4 rounded">Logout</button>
                </div>
            </nav>
        <div className="text-center mt-20 font-bold">
            Are you organizing an event?
        </div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Event Name:</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description:</label>
        <textarea 
          id="description" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Create Event
      </button>
    </form></div>);
        
        

    
        

}
export default Event;