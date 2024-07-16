import React from 'react';

class ClassComponent1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'bhanu',
      email: 'bhanu@gmail.com'
    };
    this.setName = this.setName.bind(this);
    this.setEmail = this.setEmail.bind(this);
  }

  setName() {
    this.setState({ name: 'tejaswini' });
  }

  setEmail() {
    this.setState({ email: 'tejaswini@gmail.com' });
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>Email: {this.state.email}</p>
        <button onClick={this.setName}>Set Name</button>
        <button onClick={this.setEmail}>Set Email</button>
      </div>
    );
  }
}

export default ClassComponent1;
