import React, {
    Fragment, 
    Component
  } from 'react';
  
  import {
    AppRegistry,
    StyleSheet,
    View,
    StatusBar
  } from 'react-native';
  
  import {
    Container,
    Header,
    Button,
    Text,
    Body,
    Form,
    Item as FormItem,
    Input,
    Label,
    Title,
  } from 'native-base';

  import {
      Actions
  } from 'react-native-router-flux';

  export default class Login extends Component <{}> {

    register(){
        Actions.register();
    }

    render() {
        return(
    
          <Container>
          <Form>
            <FormItem floatingLabel>
              <Label>Email</Label>
              <Input />
            </FormItem>
            <FormItem floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} />
            </FormItem>
            <Button
            title = 'Login'
            full light primary style={{ paddingBottom: 4, paddingTop: 4, marginTop: 4, marginBottom: 4, marginStart: 6, marginEnd: 6 }}>
              <Text>Login</Text>
            </Button>
            <Button
            onPress = {this.register} title = 'Register' 
            full light primary style={{ marginStart: 6, marginEnd: 6 }}>
              <Text>Register</Text>
            </Button>
          </Form>
        </Container>
        );
      }
  }