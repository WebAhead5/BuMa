import React from 'react';
//import BackButton from '../components/BackArrow';
import Header from '../components/MenuHeader';
import TeamCards from "../components/teamMembers";

const aboutUs = () => {
        return (
            <div>
                <Header title="About Us" />
                <TeamCards />
            </div>
        );
}
 
export default aboutUs;