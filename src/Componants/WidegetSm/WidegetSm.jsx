import { Visibility } from '@material-ui/icons'
import React from 'react'
import './WidegetSm.css'


export default function WidegetSm() {
    return (
        <>
        <div className='widegetSm '>
           <span className='widegedTitle '> New Join Members</span>
           <ul className="widesmList">
               <li className="widegedListItem">
                   <img  className='omen' src='https://media.istockphoto.com/photos/beautiful-middleaged-blonde-woman-in-classical-clothing-portrait-on-a-picture-id1317640215?b=1&k=20&m=1317640215&s=170667a&w=0&h=UpM4rSgd0bW53XisHBUQfpvY64garefI-OK7hm9cVCI=' height='40px' />
                   <div className='annakiler'>
                       <span className="anakilerName"> Anna Keller</span>
                       <span className="anakilerTitle"> Software Engineer</span>
                   </div>
                   <button className='btnAnna'>
                       <Visibility className='wideSmIcon'/>
                       Display 
                   </button>
               </li>
           </ul>
           {/* <span className='widegedTitle '>New Join Members</span> */}
           <ul className="widesmList">
               <li className="widegedListItem">
                   <img  className='omen' src='https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60' height='40px' />
                   <div className='annakiler'>
                       <span className="anakilerName"> Anna Keller</span>
                       <span className="anakilerTitle"> Software Engineer</span>
                   </div>
                   <button className='btnAnna'>
                       <Visibility/>
                       Display 
                   </button>
               </li>
           </ul>
           {/* <span className='widegedTitle '>New Join Members</span> */}
           <ul className="widesmList">
               <li className="widegedListItem">
                   <img  className='omen' src='https://images.unsplash.com/1/macbook-air-all-faded-and-stuff.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60' height='40px' />
                   <div className='annakiler'>
                       <span className="anakilerName"> Anna Keller</span>
                       <span className="anakilerTitle"> Software Engineer</span>
                   </div>
                   <button className='btnAnna'>
                       <Visibility/>
                       Display 
                   </button>
               </li>
           </ul>
           <ul className="widesmList">
               <li className="widegedListItem">
                   <img  className='omen' src='https://images.unsplash.com/photo-1532618403260-5aeffed45f6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60' height='40px' />
                   <div className='annakiler'>
                       <span className="anakilerName"> Anna Keller</span>
                       <span className="anakilerTitle"> Software Engineer</span>
                   </div>
                   <button className='btnAnna'>
                       <Visibility/>
                       Display 
                   </button>
               </li>
           </ul>
           <ul className="widesmList">
               <li className="widegedListItem">
                   <img  className='omen' src='https://images.unsplash.com/photo-1527685216219-c7bee79b0089?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60' height='40px' />
                   <div className='annakiler'>
                       <span className="anakilerName"> Anna Keller</span>
                       <span className="anakilerTitle"> Software Engineer</span>
                   </div>
                   <button className='btnAnna'>
                       <Visibility/>
                       Display 
                   </button>
               </li>
           </ul>
        </div>
     
        </>
    )
}
