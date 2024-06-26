import React from 'react';

import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import SearchIcon from '@mui/icons-material/Search';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import { BarChart } from '@mui/x-charts/BarChart';



const pData = [2400, 1398, -9800, 3908, 4800, -3800, 4300];
const uData = [4000, -3000, -2000, 2780, -1890, 2390, 3490];

const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];




function About() {
  return (
    <div>
        <Row>
          <Col sm={6}>
          <p>About Dashboard</p>
          </Col>
          <Col sm={2}>
          <button  className='btn btn-primary'>Buy&Sell</button>
          </Col>
          <Col sm={2}>
          <div id='bell'>
          <SearchIcon/>
         <NotificationImportantIcon/>
         </div>
          </Col>
          <Col sm={2}>
          <PeopleAltRoundedIcon style={{marginLeft:'70%',color:'white',fontSize:'30px'}}/>
          </Col>
        </Row>
        <div className='pie'>
        <BarChart
      width={900}
      height={500}
      series={[
        { data: pData, label: 'pv', id: 'pvId', stack: 'stack1' },
        { data: uData, label: 'uv', id: 'uvId', stack: 'stack1' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
    </div>
    </div>
  );
}

export default About;