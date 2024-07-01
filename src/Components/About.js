import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchIcon from '@mui/icons-material/Search';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
  { value: 5, label: 'A' },
  { value: 10, label: 'B' },
  { value: 15, label: 'C' },
  { value: 20, label: 'D' },
];

const size = {
  width: 400,
  height: 200,
};




function About() {
  return (
    <div>
        <Row>
          
          <Col sm={6} className='about'>
         <p>About Dashboard</p>
          </Col>
          <Col sm={2} className='about'>
          <button  className='btn btn-primary'>Buy&Sell</button>
          </Col>
          <Col sm={2} className='about'>
          <div id='bell'>
          <SearchIcon/>
         <NotificationImportantIcon/>

         </div>
          </Col>
          <Col sm={2} className='about'>
          <PeopleAltRoundedIcon style={{marginLeft:'70%',color:'white',fontSize:'30px'}}/>
          
          </Col>
        </Row>
        <Row>
        
          <Col sm={12} className='pie' style={{backgroundColor:'skyblue',width:'1100px'}}>
        <BarChart
      series={[
        { data: [4, 2, 5, 4, 1], stack: 'A', label: 'Series A1' },
        { data: [2, 8, 1, 3, 1], stack: 'A', label: 'Series A2' },
        { data: [14, 6, 5, 8, 9], label: 'Series B1' },
      ]}
      barLabel={(item, context) => {
        if ((item.value ?? 0) > 10) {
          return 'High';
        }
        return context.bar.height < 60 ? null : item.value?.toString();
      }}
      width={1100}
      height={400}
      />
      </Col>
      </Row>
   
    <Row>
          
          <Col sm={4} >
            <p style={{position:'relative',top:'70px'}}>Top tokens</p>
            <p style={{position:'relative',top:'70px'}}>Rippl </p><br/>
            <p style={{position:'relative',top:'70px'}}>Ethereom <br/>ETH</p>
            <p style={{position:'relative',top:'70px'}}>Solana <br/>SOL</p>
          </Col>
          <Col sm={4} >
          <p style={{position:'relative',top:'70px',color:'blue'}}>See all</p>
          <p style={{position:'relative',top:'70px'}}>$0.4831 <br/>26.66%</p>
          <p style={{position:'relative',top:'70px'}}>$2,45.31<br/>15.66%</p>
          <p style={{position:'relative',top:'70px'}}>$132.83<br/>5.66%</p>
  
          </Col>
          <Col sm={4} id='how' style={{position:'relative',top:'70px'}}>
          <PieChart
      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 45,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
          </Col>
      
        </Row>
    
    </div>
  );
}

export default About;