import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FacebookIcon from '@mui/icons-material/Facebook';
import PageviewIcon from '@mui/icons-material/Pageview';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import MessageIcon from '@mui/icons-material/Message';
import { BarChart } from '@mui/x-charts/BarChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';






const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];





const data = [
  { label: 'Group A', value: 400, color: '#0088FE' },
  { label: 'Group B', value: 300, color: '#00C49F' },
  { label: 'Group C', value: 300, color: '#FFBB28' },
  { label: 'Group D', value: 200, color: '#FF8042' },
];

const sizing = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  legend: { hidden: true },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};








function Services() {
  return (
    <div>
      <br/>
      <Row>
        <Col sm={3} className='face'>Analytics</Col>
        <Col sm={3} className='my'><FacebookIcon style={{color:'blue'}}/> facebook.com/companyname</Col>
        <Col sm={2} className='small'><PageviewIcon style={{color:'white'}}/><input type='text' placeholder='Search'></input></Col>
        <Col sm={2} className='insta'>New Company</Col>
        <Col sm={2} className='you' style={{}}><center><QrCodeScannerIcon style={{color:'white'}}/><NotificationsActiveIcon style={{color:'white'}}/></center></Col>
       <h1></h1>
      </Row>
      <br/><br/>
        <Row>
        <Col sm={4} className='like'>
        <div className='how'>
        <p style={{margin:'10%'}}>Total Likes<br/>23.0000K</p>
        
        <ChartContainer
      width={300}
      height={150}
      series={[{ type: 'line', data: pData }]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          stroke: '#8884d8',
          strokeWidth: 2,
        },
        [`& .${markElementClasses.root}`]: {
          stroke: '#8884d8',
          scale: '0.6',
          fill: '#fff',
          strokeWidth: 2,
        },
      }}
      disableAxisListener
    >
      <LinePlot />
      <MarkPlot />
    </ChartContainer>
    
      <span style={{margin:'10%',color:'white'}}>Female</span>
      <span style={{padding:'29px',color:'white'}}>Male</span>
      <span style={{padding:'30px',color:'white'}}>Other</span>
      <br/>
      <span style={{margin:'10%',color:'white'}}>%20</span>
      <span style={{padding:'50px',color:'white'}}>%50</span>
      <span style={{padding:'15px',color:'white'}}>%30</span>
      </div>
      <div id='line'>
      <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={600}
      height={300}
    />
    </div>
      </Col>
        <Col sm={3}>
        <div className='tata'>
       <span style={{margin:'5%',color:'white'}}>Pending Messages</span><br/>
       <span style={{margin:'5%',color:'white'}}>20.K</span>
       <span style={{float:'right',color:'white'}}><MoreHorizSharpIcon style={{color:'white'}}/></span>
       
       <PieChart
       series={[
        {
          outerRadius: 80,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 14,
        },
      }}
      {...sizing}
    />
       <span style={{margin:'10%',color:'white'}}>Female</span>
      <span style={{padding:'29px',color:'white'}}>Male</span>
      <span style={{padding:'30px' ,color:'white'}}>Other</span>
      <br/>
      <span style={{margin:'10%',color:'white'}}>%60</span>
      <span style={{padding:'50px' ,color:'white'}}>%30</span>
      <span style={{padding:'15px' ,color:'white'}}>%10</span>
       
       </div>
       
        </Col>
          
        <Col sm={5}>
        <div id='banna'>
        <div className='mess'>
         <p style={{marginLeft:'15%',fontSize:'30px'}}>3.K</p> 
         <MessageIcon style={{color:'white',marginLeft:'15%',position:'relative',top:'-15',fontSize:'30px'}}/>
         </div>
         <div className='comme'>
         <p style={{marginLeft:'3%'}}>Comments</p>
         <input type='range' style={{width:'290px',marginLeft:'3%'}}></input>
         </div>
        </div>
        <div id='band'>
        <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
      />
     </div>
     <div id='bann'>
        <div className='mes'>
         <p style={{marginLeft:'15%',fontSize:'30px'}}>10.K</p> 
         <MessageIcon style={{color:'white',marginLeft:'15%',position:'relative',top:'-15',fontSize:'30px'}}/>
         </div>
         <div className='comm'>
         <p style={{marginLeft:'3%'}}>Likes Shared</p>
         <input type='range' style={{width:'290px',marginLeft:'3%'}}></input>
         </div>
        </div>
        </Col>
      </Row>
       <Row>
        <Col sm={12}>
        <div className='line'>
       
  
  </div>
        </Col>
       </Row>
    </div>
  );
}

export default Services;