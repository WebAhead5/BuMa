import React, {useState, useEffect} from 'react';
import Header from '../components/MenuHeader';
import ProfileForm from "../components/ProfileForm";
import ScreenContainer from '../components/Screen';
import { useRecoilValue } from 'recoil';
import { user } from '../store/users';

const Profile = () => {
    // use recoil state value
    const businessDetails = useRecoilValue(user);
    // temporarily hard coded state for test
    // const [businessDetails, setBusinessDetails] = useState({
    //     id: '3',
    //     first_name: 'khaled',
    //     last_name: 'agbaria',
    //     email: 'Email@yahoo.com',
    //     username: 'Username',
    //     password: 'Password',
    //     phone:'0000',
    //     business_name:'Buma',
    //     business_logo:'../img/logo.png',
    //     crn:'000000',
    //     business_address:'######'
    //   });

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