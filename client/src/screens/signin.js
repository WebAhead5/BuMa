import React from 'react';
import Header from '../components/MenuHeader';
import ScreenContainer from '../components/Screen';
import SigninForm from '../components/SignIn';
import SiginForm from '../components/SignIn';

const Signin = () => {

    return (
        <ScreenContainer>
            <Header title="Sign in" />
            <SiginForm/>
        </ScreenContainer >
    );
}

export default Signin;