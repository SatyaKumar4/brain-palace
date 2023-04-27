import React from 'react'
import dummy from '../assets/dummy-profile.png';

export default function PagesNavBar() {
    return (
        <div className='pagesnav-container'>
            <div><p>PagesName</p></div>
            <div>
                <img src={dummy} alt="profile pic" className="nav-profile-pic" ></img>
                <div className="drop-down-content">
                    <p>My profile</p>
                    <p>Log out</p>
                </div>
            </div>
        </div>

    )
}
