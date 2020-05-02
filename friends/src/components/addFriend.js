import React, {useState} from 'react';
import axiosWithAuth from '../api/axiosAuth';

const AddFriend = () => {
    const [newFriend, setNewFriend] = useState({pic:'', name:'', age:'', email:''});

    const handleChange = (e) => {
        setNewFriend({...newFriend, [e.target.name]:e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        setNewFriend({ pic:"", name:"", age:"", email:"" });
        axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
            .then(res => console.log(res.newFriend))
      };
    return (
        <div className="newForm">
            <h1>Add Your Own Friend!</h1>
            <form onSubmit={handleSubmit}>
                <input type='text'
                name='pic'
                placeholder='Enter picture URL...'
                onChange={handleChange}
                value={newFriend.pic}/>
                <input type='text'
                name='name'
                placeholder='Friends Name...'
                onChange={handleChange}
                value={newFriend.name}/>
                <input type='text'
                name='age'
                placeholder='Friends Age...'
                onChange={handleChange}
                value={newFriend.age}/>
                <input type='text'
                name='email'
                placeholder='Friends Email...'
                onChange={handleChange}
                value={newFriend.email}/>
                <input type='submit'/>
            </form>
        </div>
    );
}

export default AddFriend;


