import React from 'react';
import Header from '../components/MenuHeader';
import RegistrationForm from "../components/registrationForm";
import ScreenContainer from '../components/Screen';

const registration = () => {

    return (
        <ScreenContainer>
            <Header icon="backArrow" title="Registration" />
            <RegistrationForm />
        </ScreenContainer >
    );
}

export default registration;