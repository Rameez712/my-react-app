import  React from 'react';
import ReactDOM from 'react-dom/client';

//-- how do i pass props from comment.js to here

function UserInfo(props){
    return(
        <div className="UserInfo">
                <img className="Avatar"
                    src={props.avatarUrl}
               alt={props.name} />
          <div className="UserInfo-name">
            {props.name}
          </div>
        </div>
    );
}

export default UserInfo;
