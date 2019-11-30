import React, { useState, useEffect } from 'react';

import { MainLayout } from 'modules/layouts';
import DashBoardPageLayout from './Layout';
import data from './airline-data';

const DashBoardPage = () => {

    return (
      <MainLayout>
        <DashBoardPageLayout data={data[0].airlineData} />
      </MainLayout>
    );
}


export default DashBoardPage;