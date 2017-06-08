import React from 'react'
import FormValidator from "validate-js"

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
          <input name="req" id="req"/>
          <input name="alphanumeric" id="alphanumeric"/>
          <input name="password" id="password" type="password"/>
          <input name="password_confirm" id="password_confirm" type="password"/>
          <input name="email" id="email"/>
          <input name="minlength" id="minlength"/>
          <button className="button-primary" type="submit" name="submit">Submit</button>
        </form>
      </div>  