import React from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'

class LoginForm extends React.Component{

  state = {
    email: "",
    username: "",
    password: ""
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  loginData = () => {
    let loginData = this.state
    this.props.onSubmit(loginData)
    this.setState({
      email: "",
      username: "",
      password: ""
    })
  }


  render(){
    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' className="basketballpic">
        <Grid.Column  className="login-form" style={{ maxWidth: 450 }}>
          <Header as='h1' color='orange' textAlign='center'>
            <Image src='/favicon.ico' /> Log-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input 
                name="email"
                value={this.state.email}
                onChange={(e) => this.onChange(e)}
                // required 
                fluid 
                icon='user' 
                iconPosition='left' 
                placeholder='E-mail address' 
                />
              <Form.Input 
                name="username"
                value={this.state.username}
                onChange={(e) => this.onChange(e)}
                // required
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Username'
                type='username'
              />
              <Form.Input 
                name="password"
                value={this.state.password}
                onChange={(e) => this.onChange(e)}
                // required
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />
              <Button onClick={this.loginData} color='orange' fluid size='large'>
                Login/Sign Up
              </Button>
              {/* <br></br>
              <Button onClick={this.props.onSignUp} color='orange' fluid size='large'>
                Sign Up
              </Button> */}
            </Segment>
          </Form>
          {/* <Message>
            New to us? <a href='#'>Sign Up</a>
          </Message> */}
        </Grid.Column>
      </Grid>
    )
  }
}

export default LoginForm