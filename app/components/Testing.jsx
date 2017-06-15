import React from 'react'
import FormValidator from "validate-js"

/*
const rules = {
  name: {
          display: 'required',
          rules: 'required'
      }, {
          name: 'alphanumeric',
          rules: 'alpha_numeric'
      }, {
          name: 'password',
          rules: 'required'
      }, {
          name: 'password_confirm',
          display: 'password confirmation',
          rules: 'required|matches[password]'
      }, {
          name: 'email',
          rules: 'valid_email',
          depends: function() {
              return Math.random() > .5;
          }
      }, {
          name: 'minlength',
          display: 'min length',
          rules: 'min_length[8]'
      }], function(errors, event) {
          if (errors.length > 0) {
            var errorString = '';

            for (var i = 0, errorLength = errors.length; i < errorLength; i++) {
              errorString += errors[i].message + '<br />';
            }
            el.innerHTML = errorString
          }
      });   
      */

export class NicsForm extends React.Component ::
  constructor() ::
    super()
    this.state = {rules}

  render() ::
    return @
      <div>
        <form name="example_form" action="#" method="POST">
          <div className="row"></div>
            <label> Req </label>
            <input name="req" id="req"/>
          <div className ="row"></div>
            <label> Alphanumeric </label>
            <input name="alphanumeric" id="alphanumeric"/>
          <div className="row"></div>
            <label> Password </label>
            <input name="password" id="password" type="password"/>
          <div className="row"></div>
            <label> Password Confirm </label>  
            <input name="password_confirm" id="password_confirm" type="password"/>
          <div className="row"></div>
            <label> Email </label>  
            <input name="email" id="email"/>
          <div className="row"></div>
            <label> Min Length </label>  
            <input name="minlength" id="minlength"/>
          <div className="row"></div>
            <button className="button-primary" type="submit" name="submit">Submit</button>
        </form>
      </div>  
export default class Testing extends React.Component ::
  constructor() ::
    super()
    var validator = new FormValidator('example_form', [{
          name: 'req',
          display: 'required',
          rules: 'required'
      }, {
          name: 'alphanumeric',
          rules: 'alpha_numeric'
      }, {
          name: 'password',
          rules: 'required'
      }, {
          name: 'password_confirm',
          display: 'password confirmation',
          rules: 'required|matches[password]'
      }, {
          name: 'email',
          rules: 'valid_email',
          depends: function() {
              return Math.random() > .5;
          }
      }, {
          name: 'minlength',
          display: 'min length',
          rules: 'min_length[8]'
      }], function(errors, event) {
          if (errors.length > 0) {
            var errorString = '';

            for (var i = 0, errorLength = errors.length; i < errorLength; i++) {
              errorString += errors[i].message + '<br />';
            }
            el.innerHTML = errorString
          }
      });   

  render() ::
    return @
      <div>
        The website for this is <a href="http://rickharrison.github.io/validate.js/">validate-js</a>
        <form name="example_form" action="#" method="POST">
          <div className="row"></div>
            <label> Req </label>
            <input name="req" id="req"/>
          <div className ="row"></div>
            <label> Alphanumeric </label>
            <input name="alphanumeric" id="alphanumeric"/>
          <div className="row"></div>
            <label> Password </label>
            <input name="password" id="password" type="password"/>
          <div className="row"></div>
            <label> Password Confirm </label>  
            <input name="password_confirm" id="password_confirm" type="password"/>
          <div className="row"></div>
            <label> Email </label>  
            <input name="email" id="email"/>
          <div className="row"></div>
            <label> Min Length </label>  
            <input name="minlength" id="minlength"/>
          <div className="row"></div>
            <button className="button-primary" type="submit" name="submit">Submit</button>
        </form>
      </div>  
