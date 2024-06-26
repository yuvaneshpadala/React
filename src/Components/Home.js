import React from 'react';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import { BarChart } from '@mui/x-charts/BarChart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import TuneIcon from '@mui/icons-material/Tune';
function Home() {
  return (
    <div>
     <br/>
      <input type='text' id='input'placeholder='Search'/><PersonSearchIcon id='search'/>
      
      <FavoriteBorderIcon id='ico'/>
      <BookmarkBorderIcon id='ico'/>
      <TuneIcon id='ico'/>
     
         <br/>   <br/>
         <div className='box'>
          <div className='name'>
         <p style={{color:'red',float:'right',position:'relative',top:'50px'}}><i>$19,645/45,742</i></p>
         </div>
      <p style={{marginLeft:'10px'}}>43%<br/><small>Income Goal<br/>progress to month</small></p>
      <div className='nam'>
     <input type='range' style={{width:'290px'}}></input>
     </div>
      </div>
      <div className='order'>
      <h1><b><span style={{color:'red'}}>W</span>elcome <span style={{color:'red'}}>R</span>acheal</b></h1>
      <p>Welcome Racheal</p>
      <br/>
      </div>
                                 
      <Row>
        <Col sm={4} className='hello'>
        <div className='blue'>
       < AccountBalanceWalletIcon id='icon'/>
          <p>TOTAL BALANCE <br/><b>$2000</b></p>
         
          
          </div>
        </Col>
        <Col sm={4} className='hello'>
        <div className='blue'>
        <PresentToAllIcon id='icon'/>
          <p id='con'>SENT <br/><b>$2000</b></p>
          
          </div>
        </Col>
        <Col sm={4} className='hello'>
          <div className='blue'>
          <CreateNewFolderIcon id='icon'/>
          <p>RECEIVED<br/><b>$2000</b></p> 
          
          </div>
        </Col>
      </Row>
      <br/><br/>
      <Row>
        <Col sm={6} className='white'>
        <div className='yyy'>
        <BarChart 
      xAxis ={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />
    <div className='check'>
   <input type='checkbox'></input>
   <label>Closing Balance</label>
   </div>
        </div>
        </Col>
        <Col sm={6} >
           <div className='red'>
       
          
          <Row>
            <Col sm={8} className='fl'>
            <p><b>Transaction History</b></p>
            <div className='right'>
            <p><b>RECENT</b></p>
          <p><AccountCircleIcon/><i>M&J Homes </i><br/><small>3rd may2022</small> </p>
            <p><AccountCircleIcon/><i>Afritech</i> <br/> 27th Apr 2022</p>
            <p><AccountCircleIcon/><i>Mira Construction </i> <br/>5th apr 2022</p>
            <p><SubscriptionsIcon /><i>Subscriptions </i> <br/>30th mar 2022</p>
            </div>
            </Col>
            
          <Col sm={4} className='flo'>
           <div className='flot'>
          <p><b>See all</b></p>
          <p style={{color:'red'}}>-$500</p><br/>
          <p>+$2000</p><br/>
          <p>+$300</p><br/>
          <p style={{color:'red'}}>-$50</p>
          </div>
          </Col>
          </Row>
          </div>
        </Col>
        
      </Row>
      
         
     
      
    </div>
  );
}

export default Home;
