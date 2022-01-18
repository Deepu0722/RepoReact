import React from 'react'
const DataTable = (props) => {
 let contact = props.contact;
 let texts = {
     name : 'Name'
 }
 return(
     <table>
         <tbody>   
                 
            <tr><td>{texts.name} :</td><td>{contact.fname} </td></tr>
            {/* <tr><td>LName:</td><td>{contact.lname}</td></tr>
            <tr><td>DoB:</td><td>{contact.DoB}</td></tr>
            <tr><td>Phone:</td><td>{contact.Phone}</td></tr> */}
           
        </tbody>
      
     </table>
 )

}

export default DataTable