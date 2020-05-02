import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../api/axiosAuth';
import AddFriend from '../components/addFriend';
import './Friends.css';
// import {Link} from 'react-router-dom';

const Friends = (props) => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => setFriends(res.data))
        .catch(error => console.error(error))
    }, [])
        return (
            <div className="container">
                <h1>Friends Characters</h1>
                <AddFriend/>
            <div class="friends">
                {friends.map(friend => {
                 return (   
            <div className="friendCards"> 
                <img src={friend.pic}/>
                <h2>{friend.name}</h2>
                <h3>{friend.age}</h3>
                <h3>{friend.email}</h3>
            </div>
                )})}
                </div>
                
                
            </div>
        );
}

export default Friends;