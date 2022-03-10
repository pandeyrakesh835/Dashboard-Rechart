import React  from 'react'
import './App.css'
import Chart from './Componants/Chart/Chart';
import FeaturedInfo from './Componants/FeaturedInfo/FeaturedInfo';
import Sidebar from './Componants/Sidebar/Sidebar';

import Topbar from './Componants/Topbar';
import WidegetLg from './Componants/WidegetLg/WidegetLg';
import WidegetSm from './Componants/WidegetSm/WidegetSm';


 function App() {
  return (
    <div>
      <Topbar/>
  <div className='container'>
    <Sidebar />
    <FeaturedInfo />
   

    <Chart/>
    <div className='homeWidegeSm'>

<WidegetSm/>
<WidegetLg/>
    </div>
  </div>
  
     </div>
  )
}
export default App;