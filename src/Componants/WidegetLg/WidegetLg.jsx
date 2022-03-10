import React from 'react'
import './WidegetLg.css'
export default function WidegetLg() {
    return (
        <div className='widegetLg'>
            <h3 className="widegetTitle">Last Transaction</h3>
            <table className='widegetLgTable'>
                <tr className='widegetLgTr'>
                    <th className="widegetLgTh">Customer</th>
                    <th className="widegetLgTh">Date</th>
                    <th className="widegetLgTh">Amount</th>
                    <th className="widegetLgTh">Status</th>
                    

                </tr>
                <tr className='widegetLgTr'>
                <td className='widegetLgTd'>
                   <img  className='widegetimg' src='https://i.picsum.photos/id/1001/367/267.jpg?hmac=h9_xzQEoMCgh9gDWOgnNnsEC9eTnf3j2BTfKXt8uu6U' height='40px' />
                   <span className="widegetName"> Sunsan Carol</span>
                </td>
                <td className="widegetDate">02 Nov 2021</td>
                <td className="widegetLgAmount">$122.00</td>
                <td className="widegetLgStatus">
                    <button  className='wifegetBtn' type='Approved'>Approved</button>
                </td>

                </tr>
                <tr className='widegetLgTr'>
                <td className='widegetLgTd'>
                   <img  className='widegetimg' src='https://i.picsum.photos/id/1006/367/267.jpg?hmac=xmzaRyrKqJTmb6ExuddltvgqSQ9pLopBEhiiIAofVwU' height='40px' />
                   <span className="widegetName"> Sunsan Carol</span>
                </td>
                <td className="widegetDate">02 Nov 2021</td>
                <td className="widegetLgAmount">$122.00</td>
                <td className="widegetLgStatus">
                    <button  className='wifegetBtn' type='Approved'>Declined</button>
                </td>

                </tr>
                <tr className='widegetLgTr'>
                <td className='widegetLgTd'>
                   <img  className='widegetimg' src='https://i.picsum.photos/id/1011/367/267.jpg?hmac=DiajkYnQXUMcq-NjU4MUCAIielJRvpwQK4ZRtL_ycmE' height='40px' />
                   <span className="widegetName"> Sunsan Carol</span>
                </td>
                <td className="widegetDate">02 Nov 2021</td>
                <td className="widegetLgAmount">$122.00</td>
                <td className="widegetLgStatus">
                    <button  className='wifegetBtn' type='Approved'>Pending</button>
                </td>

                </tr>
                <tr className='widegetLgTr'>
                <td className='widegetLgTd'>
                   <img  className='widegetimg' src='https://i.picsum.photos/id/1021/367/267.jpg?hmac=Com4ty_AQAGdXDh2E-s8hBqQ0ZgtB519_eVnh4Z5slY' height='40px' />
                   <span className="widegetName"> Sunsan Carol</span>
                </td>
                <td className="widegetDate">02 Nov 2021</td>
                <td className="widegetLgAmount">$122.00</td>
                <td className="widegetLgStatus">
                    <button  className='wifegetBtn' type='Approved'>Approved</button>
                </td>

                </tr>
                
            </table>
            
        </div>
    )
}
