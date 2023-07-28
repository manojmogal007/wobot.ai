import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  const [color,setcolor]=useState({ first:false,second:false,third:false,forth:false,fifth:false})
  return (
    <div className="App">
      <div className='container'>
        <div className='rotate'>
          <div classname='rotateone'></div>
          <div classname='rotatetwo'></div>
        </div>
      </div>
      <div className='company-logo'>
        <img src='https://app.wobot.ai/assets/images/wobot-logo.png'></img>
      </div>
       <div className='main-cont'>
       <div className='inputs-section'>
            <div className='custom-logo'>
              <svg  viewBox="0 0 52 48">
                <rect className='first'></rect>
                <rect className='second'></rect>
                <rect className='third'></rect>
              </svg>
            </div>
            <div className='highlight'>
              <h3>It's a delight to have you onboard</h3>
              <p className='sentence'>Help us know you better.</p>
              <p>(This is how we optimize wobot as per your business needs)</p>
              
            </div>
            <div className='inputs'>
                <label>Your name</label><br/>
                <input placeholder='e.g. John Smith'></input><br/>
                <label>Company name</label><br/>
                <input placeholder='e.g. Alpha Inc'></input><br/>
                <label>Industry</label><br/>
                <select>
                  <option>Select</option>
                </select>
                <label>Number of Locations</label>
                <div className='locations'>
                  <span onClick={()=>setcolor({ first:true,second:false,third:false,forth:false,fifth:false})} style={{backgroundColor:color.first?'rgb(55, 102, 232)':'rgb(207, 204, 204)',color:color.first?'white':'black'}}>1-20</span>
                  <span onClick={()=>setcolor({ first:false,second:true,third:false,forth:false,fifth:false})} style={{backgroundColor:color.second?'rgb(55, 102, 232)':'rgb(207, 204, 204)',color:color.second?'white':'black'}}>21-50</span>
                  <span onClick={()=>setcolor({ first:false,second:false,third:true,forth:false,fifth:false})} style={{backgroundColor:color.third?'rgb(55, 102, 232)':'rgb(207, 204, 204)',color:color.third?'white':'black'}}>51-200</span>
                  <span onClick={()=>setcolor({ first:false,second:false,third:false,forth:true,fifth:false})} style={{backgroundColor:color.forth?'rgb(55, 102, 232)':'rgb(207, 204, 204)',color:color.forth?'white':'black'}}>201-500</span>
                  <span onClick={()=>setcolor({ first:false,second:false,third:false,forth:false,fifth:true})} style={{backgroundColor:color.fifth?'rgb(55, 102, 232)':'rgb(207, 204, 204)',color:color.fifth?'white':'black'}}>500+</span>
                </div>
                <button>Get Started</button>
              </div>
        </div>
        <div className='terms'>
          <p>Terms of use | Privacy policy</p>
        </div>
       </div>
    </div>
  );
}

export default App;
