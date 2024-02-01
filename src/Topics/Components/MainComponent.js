import React from 'react';
import ReactDOM from 'react-dom/client';
import Comment from './Comment';

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };

 
  function MainComponent (){
    return(
      <>
        <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      <div>
      <button onclick="shoot()">Take the Shot!</button>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
      </>
    );
  }
  
  export default MainComponent;

