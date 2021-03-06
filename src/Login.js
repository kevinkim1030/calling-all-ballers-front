import React from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'

class LoginForm extends React.Component{

  state = {
    email: "",
    username: "",
    password: "",
    passwordConfirmation: ""
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
      password: "",
      passwordConfirmation: ""
    })
  }


  render(){
    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' className="basketballpic">
        <Grid.Column  className="login-form" style={{ maxWidth: 450 }}>
          <Header as='h1' color='orange' textAlign='center'>
            <Image src='/favicon.ico' /> Calling All Ballers <Image src='/favicon.ico' />
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input 
                name="email"
                value={this.state.email}
                onChange={(e) => this.onChange(e)}
                required 
                fluid 
                icon='user' 
                iconPosition='left' 
                placeholder='E-mail address' 
                />
              <Form.Input 
                name="username"
                value={this.state.username}
                onChange={(e) => this.onChange(e)}
                required
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
                required
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />
              <Form.Input 
                name="passwordConfirmation"
                value={this.state.passwordConfirmation}
                onChange={(e) => this.onChange(e)}
                required
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password Confirmation'
                type='password'
              />
              <Button onClick={this.loginData} color='orange' fluid size='large'>
                Login/Sign Up
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default LoginForm