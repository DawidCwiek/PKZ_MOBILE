import React from "react";
import { Button, View, Alert } from "react-native";
import { Formik } from "formik";
import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput
} from "react-native-formik";
import { compose } from "recompose";
import styled from "styled-components";
import { TextField } from "react-native-material-textfield";
import axios from "axios";
import qs from "qs";
import { REMOTE_HOST } from "../configApi";

const MyInput = compose(
  handleTextInput,
  withNextInputAutoFocusInput
)(TextField);

const Form = withNextInputAutoFocusForm(View);

const Main = styled.View`
  background-color: #ffd829;
  width: 100%;
  height: 100%;
`;

const FormWrapper = styled.View`
  background-color: white;
  width: 90%;
  margin: auto;
  border-radius: 10px;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.3);
`;

const StyledFrom = styled(Form)`
  margin: 20px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  font-weight: 600;
  margin: 10px auto;
`;

const authenticate = (email, password, navigation) => {
  const data = { email, password };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: `${REMOTE_HOST}/auth/login`,
    data: qs.stringify(data)
  };

  return axios(options)
    .then(payload => {
      if (payload.data.home.store) {
        navigation.navigate("Menu", {
          token: payload.data.auth_token,
          store: payload.data.home.store
        });
      } else {
        Alert.alert("Error", "You do not have permission to continue!");
      }
    })
    .catch(() => {
      Alert.alert("Error", "Incorrect e-mail or password!");
    });
};

const LoginScreen = ({ navigation }) => {
  return (
    <Main>
      <FormWrapper>
        <StyledText>Sing in</StyledText>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={({ email, password }) =>
            authenticate(email, password, navigation)
          }
        >
          {props => (
            <StyledFrom>
              <MyInput label="Email" name="email" type="email" />
              <MyInput label="Password" name="password" type="password" />
              <Button onPress={props.handleSubmit} title="SUBMIT" />
            </StyledFrom>
          )}
        </Formik>
      </FormWrapper>
    </Main>
  );
};

export default LoginScreen;
