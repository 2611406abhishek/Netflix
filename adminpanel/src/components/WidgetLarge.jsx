import React from 'react'
import '../style/WidgetLarge.css';
import myimg from '../Images/Eagle.jpg';
const WidgetLarge = () => {

    const Button = (props) =>{
           return  <button className={'widgetLgButton ' + props.type}>{props.type}</button>
    }
  return (
    <div className='widgetLg'>
        <h3 className='widgetLgTitle'>Latest Transaction</h3>
        <table className='widgetLgTable'>
          <tbody>
             <tr className='widgetLgTr'>
                <th className='widgetLgTh'>Customer</th>
                <th className='widgetLgTh'>Date</th>
                <th className='widgetLgTh'>Amount</th>
                <th className='widgetLgTh'>Status</th>
             </tr>
             <tr className='widgetLgTr'>
               <td className='widgetLgUser'>
                 <img src={myimg} alt="" className="widgetLgImg"/>
                 <span className='widgetLgName'>Abhishek soni</span>
               </td>
               <td className='WidgetLgDate'>2 Jun 2022</td>
               <td className='WidgetLgAmount'>$500.00</td>
               <td className='WidgetLgStatus'> <Button type="Approved"/> </td>

             </tr> 
             <tr className='widgetLgTr'>
               <td className='widgetLgUser'>
                 <img src={myimg} alt="" className="widgetLgImg"/>
                 <span className='widgetLgName'>Abhishek soni</span>
               </td>
               <td className='WidgetLgDate'>2 Jun 2022</td>
               <td className='WidgetLgAmount'>$500.00</td>
               <td className='WidgetLgStatus'> <Button type="Declined"/> </td>

             </tr> 
             <tr className='widgetLgTr'>
               <td className='widgetLgUser'>
                 <img src={myimg} alt="" className="widgetLgImg"/>
                 <span className='widgetLgName'>Abhishek soni</span>
               </td>
               <td className='WidgetLgDate'>2 Jun 2022</td>
               <td className='WidgetLgAmount'>$500.00</td>
               <td className='WidgetLgStatus'> <Button type="Pending"/> </td>

             </tr> 
             <tr className='widgetLgTr'>
               <td className='widgetLgUser'>
                 <img src={myimg} alt="" className="widgetLgImg"/>
                 <span className='widgetLgName'>Abhishek soni</span>
               </td>
               <td className='WidgetLgDate'>2 Jun 2022</td>
               <td className='WidgetLgAmount'>$500.00</td>
               <td className='WidgetLgStatus'> <Button type="Approved"/> </td>

             </tr> 
             </tbody>
        </table>
    </div>
  )
}

export default WidgetLarge;