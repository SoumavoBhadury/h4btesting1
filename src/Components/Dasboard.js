import React from 'react'
import { Link } from 'react-router-dom';



function Dashboard() {
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
                        <Link to="/marketplace">
                        <button className="nav-button hover:glow bg-blue-500 text-white font-bold py-2 px-4 rounded">Marketplace</button></Link>
                    </li>
                    <li>
                        <Link to="/discussion">
                        <button className="nav-button hover:glow bg-blue-500 text-white font-bold py-2 px-4 rounded">Discussions</button></Link>
                    </li>
                </ul>
                <div className="logout-box">
                    <button className="logout-button hover:glow bg-red-500 text-white font-bold py-2 px-4 rounded">Logout</button>
                </div>
            </nav>
        
        <div className="bg-gray-800 p-8 rounded-lg">
        <div className="flex justify-around">
          <div className="bg-gray-700 p-6 rounded-md text-center">
            <div className="h-32 w-32 bg-gray-600 rounded-md mb-4"></div> {/* Image Placeholder */}
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md">Events You're Joining</button>
          </div>
          <div className="bg-gray-700 p-6 rounded-md text-center">
            <div className="h-32 w-32 bg-gray-600 rounded-md mb-4"></div> {/* Image Placeholder */}
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md">Events You're Hosting</button>
          </div>
        </div></div></div>
      
    );
}




export default Dashboard;
