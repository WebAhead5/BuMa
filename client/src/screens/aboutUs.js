import React from 'react';
import Header from '../components/MenuHeader';
import TeamCards from "../components/teamMembers";
import ScreenContainer from '../components/Screen';

const aboutUs = () => {
        return (
            <ScreenContainer>
                <Header title="About Us" />
                <TeamCards />
            </ScreenContainer>
        );
}
 
export default aboutUs;