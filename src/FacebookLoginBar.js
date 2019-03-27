import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class FacebookLoginBar extends Component {
  responseFacebook(data)  {
    if (data.name) {
      this.props.userId(data.name)
    }
  }
  
  render() {
    return (
      <div>
        <div className="App">
          <FacebookLogin
            appId="823471304679064"
            autoLoad={true}
            fields="name,email,picture"
            callback={(resp) => this.responseFacebook(resp)} />
        </div> 
      </div>
    )
  }
}
