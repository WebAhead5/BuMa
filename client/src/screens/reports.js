import React from 'react';
import MenuHeader from '../components/MenuHeader';
import Reports from "../components/ReportsEntry";
import ScreenContainer from '../components/Screen';

const reports = () => {
        return (
            <ScreenContainer>
                <MenuHeader icon="backArrow" title="Reports" />
                <Reports />
            </ScreenContainer>
        );
}
 
export default reports;