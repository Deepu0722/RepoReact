import React from 'react'
const DataTable = (props) => {
    console.log(props.contact);
 let contact = props.contact;
 return(
     <table>
         <tbody>   
                 
            <tr><td>FName:</td><td>{contact.fname}</td></tr>
            <tr><td>LName:</td><td>{contact.lname}</td></tr>
            <tr><td>DoB:</td><td>{contact.DoB}</td></tr>
            <tr><td>Phone:</td><td>{contact.Phone}</td></tr>
           
        </tbody>
      
     </table>
 )

}

export default DataTable