import React from 'react';
import MenuHeader from '../components/MenuHeader';
import TeamCards from "../components/teamMembers";

const aboutUs = () => {
        return (
            <div>
                <MenuHeader icon="backArrow" title="About Us" />
                <TeamCards />
            </div>
        );
}
 
export default aboutUs;