import React, { Component } from 'react';

class AccountDropDown extends Component {
  constructor(props) {
      super(props);
      this.state = {
        user: null,
      };
    }

  render() {
    return (
      <ul>
        <button className="account" onClick={this.handleDropDownClick.bind(this)}>
          <li>{this.props.user.name}</li>
        </button>
      </ul>
    );
  }

  handleDropDownClick(){
    alert('click')
  }
}

export default AccountDropDown;
