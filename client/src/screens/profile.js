import React from 'react';
import Header from '../components/MenuHeader';
import ProfileForm from "../components/ProfileForm";
import ScreenContainer from '../components/Screen';

const Profile = () => {

    return (
        <ScreenContainer>
            <Header title="Profile" />
            <ProfileForm />
        </ScreenContainer >
    );
}

export default Profile;