import React from 'react';
import logo from './logo.svg';
import './App.css';

// potenial change, click to change language of website/ hover to translate

function Content() {
  return (
    <div className="Content">
      <div className="card">
        <div className="card-body">
        <h4 className="card-title">Who am I?</h4>
        <p className="card-text">
        My name is Angie Ta, and I am a web/iOS developer, and aspiring polyglot.
        </p>
        </div>
      </div>
      <div className="card">
        <h4 className="card-title">Card title</h4>
        <div className="card-body">
        <p className="card-text">Some example text. Some example text.</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
