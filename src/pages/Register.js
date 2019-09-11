import React, {
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
import { Actions } from 'react-native-router-flux';

export default class Register extends Component <{}> {

    goBack() {
        Actions.pop();
    }

    render() {
        return(
          <Container>
            <Form>
            <FormItem floatingLabel>
              <Label>Email</Label>
              <Input />
            </FormItem>
            <FormItem floatingLabel>
              <Label>Name</Label>
              <Input />
            </FormItem>
            <FormItem floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry={true}/>
            </FormItem>
            </Form>
            <Button
            title = 'Register'
            full primary style={{ paddingBottom: 4, paddingTop: 4, marginStart: 6, marginEnd: 6 }}
            onPress={this.goBack}>
              <Text>Register</Text>
            </Button>
          </Container>
        );
      }
}