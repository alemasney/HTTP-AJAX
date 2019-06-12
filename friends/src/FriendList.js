import React from 'react';

class FriendList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: this.props.friends,
        };
    }

    render() {
        return (
            <div>
                <h1>Friends</h1>
                {this.props.friends.map( friend => (
                    <div key={friend.id}>
                        <h2>{friend.name}</h2>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                ))}
                <form>
                    <input type="text" name="name" placeholder="Name"></input>
                    <input type="text" name="age" placeholder="Age"></input>
                    <input type="text" name="email" placeholder="Email"></input>
                    <button type="submit">POST</button>
                </form>
            </div>
        )
   }
    
 }

 export default FriendList;