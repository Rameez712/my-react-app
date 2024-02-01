import React from 'react';
import UserInfo from './UserInfo'; 
import Date from './Date';

function formatDate(date) {
  return date.toLocaleDateString();
}
  
  function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo 
        name={props.author.name} 
        avatarUrl={props.author.avatarUrl}
        />
        <div className="Comment-text">
          {props.text}
        </div>
        {/* <Date date={props.date} /> */}
      </div>
    );
  }

  export default Comment;
  


  