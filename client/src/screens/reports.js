import React from 'react';
import MenuHeader from '../components/MenuHeader';
import ReportsList from "../components/ReportsEntry";
import ScreenContainer from '../components/Screen';

const Reports = () => {
        return (
            <ScreenContainer>
                <MenuHeader icon="backArrow" title="Reports" />
                <ReportsList />
            </ScreenContainer>
        );
}
 
export default Reports;