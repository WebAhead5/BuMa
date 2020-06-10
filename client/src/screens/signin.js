import React from 'react';
import Header from '../components/MenuHeader';
import ScreenContainer from '../components/Screen';
import SignInForm from '../components/SignIn';

const Signin = () => {

    return (
        <ScreenContainer>
            <Header title="Sign in" />
            <SignInForm/>
        </ScreenContainer >
    );
}

export default Signin;