import react,{useState} from 'react'

import DataTable from './component/task1';

function App() { 
  const cList=[
    {
        fname: 'John',
        lname: 'M',
        DoB: '05/90',
        Email: 'hello1@gmail.com',
        Phone: '9027376873'
    }, {
        fname: 'Jerry',
        lname: 'K',
        DoB: '09/99',
        Email: 'hello2@gmail.com',
        Phone: '9027376872'
    }, {
        fname: 'Tom',
        lname: 'J',
        DoB: '07/95',
        Email: 'hello3@gmail.com',
        Phone: '9027346873'
    }
]
const[contactList, updatedList] = useState(cList)
function addContact(){

}
function deletContact(e){
  console.log(e.target.getAttribute('contact'))
  let contactKey = e.target.getAttribute('contact')
  updatedList(contactList.filter(contact => contact.fname != contactKey
             ))
}
function viewContact(e){}
  return (
    <div className="App">
      
      <ul>
      <button onClick={addContact()}>Add</button>
        {
           contactList.map((contact, index) => {
           return(
           <li>
               <button onClick={deletContact} contact={contact.fname}>Delete</button>
               <button onClick={viewContact} contact={contact.fname}>View</button>
               <DataTable contact={contact} key={contact.fname}></DataTable> 
          
          </li>
           )
            
        })} 
     </ul>
 
    </div>
  )
}

export default App;
