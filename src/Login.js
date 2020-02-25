import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class LoginForm extends React.Component{

  render(){
    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column  className="login-form" style={{ maxWidth: 450 }}>
          <Header as='h1' color='orange' textAlign='center'>
            <Image src='/favicon.ico' /> Log-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input required fluid icon='user' iconPosition='left' placeholder='E-mail address' />
              <Form.Input required
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />
    
              <Button color='orange' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href='#'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

export default LoginForm