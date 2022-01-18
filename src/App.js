import react, { useState } from 'react';
import ReactModal from 'react-modal';
import DataTable from './component/task1';
import ModalPopup from './component/modal-popup';

ReactModal.setAppElement('#root');
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
const [modalIsOpen, setModalIsOpen] = useState(false)


function deletContact(e){
  console.log(e.target.getAttribute('contact'))
  let contactKey = e.target.getAttribute('contact')
  updatedList(contactList.filter(contact => contact.fname !== contactKey))
}
function getChildData(datafromChild){
  console.log(`DATA ON SUBMIT from child: ${datafromChild}`)
  contactList.push(datafromChild);
}
function viewContact(e){}
  return (
    <div className="App">
      
      <ul>
        <button onClick={()=> setModalIsOpen(true)}>Add</button>
        {
           contactList.map((contact, index) => {
           return(
           <li>
               <button onClick={deletContact} contact={contact.fname}>Delete</button>
               <button onClick={viewContact} contact={contact.fname}>View</button>
               <DataTable contact={contact} key={contact.fname}></DataTable> 
           </li>
           )
           })
        } 
     </ul>
      <ReactModal isOpen={modalIsOpen} style={
       { overlay:{background: 'grey'}, content:{color:'blue'} }
       }>
       <h1>Add Contact</h1>
       <ModalPopup passChildData = {getChildData} ></ModalPopup>
       <button onClick={()=> setModalIsOpen(false)}>close</button>
     </ReactModal>
     <ReactModal isOpen={false} style={{overlay:{background:'grey'},content:{color:'Orange'}}}>
        
     </ReactModal>
     
     
    </div>
  )
}

export default App;
