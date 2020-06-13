import React, {useState, useEffect} from 'react';
import Header from '../components/MenuHeader';
import ProfileForm from "../components/ProfileForm";
import ScreenContainer from '../components/Screen';
import { useRecoilValue } from 'recoil';
import { user } from '../store/users';

const Profile = () => {
    // use recoil state value
    const businessDetails = useRecoilValue(user);


    return (
        <ScreenContainer>
            <Header icon="backArrow" title="Profile" />
            <ProfileForm 
            userDetails={businessDetails}
            />
        </ScreenContainer >
    );
}

export default Profile;