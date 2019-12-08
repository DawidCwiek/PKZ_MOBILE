import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import styled from 'styled-components';
import AuthTemplate from '../templates/AuthTemplate';
import { Formik, Form, Field } from 'formik';
import Heading from '../components/atoms/Heading';
import StyledButton from '../components/atoms/StyledButton';




const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled.TextInput`
  
  margin: 0 0 20px 0;
  height: 50px;
  width: 300px;
`;

const StyledHeading = styled(Heading)`
  margin: 0 0 30px 0;
`;

const LoginPage = () => {
    return(
        <AuthTemplate>
            <StyledHeading>Sign in</StyledHeading>
            <View>
                <StyledInput placeholder = "Email" />
                <StyledInput placeholder = "Password" />
                <StyledButton title = "Submit"/>
            </View>
        </AuthTemplate>
    );
}

export default LoginPage;

