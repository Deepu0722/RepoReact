import react, { useState } from 'react';
import ReactModal from 'react-modal';
import DataTable from './component/dataTable';
import ModalPopup from './component/modal-popup';
import ViewComp from './component/view-popup'

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
const [viewList, setViewList] = useState(contactList)
const [viewContactModalIsOpen, setViewContactModalIsOpen] = useState(false)
let texts = {
  addBtn: 'Add New Contact',
  deleteBtn: 'Delete',
  viewBtn: 'View',
  closeBtn: 'close',
  addHeader: 'Enter Contact Details'
}

function deletContact(e){
 // console.log(e.target.getAttribute('contact'))
  let contactKey = e.target.getAttribute('contact')
  updatedList(contactList.filter(contact => contact.fname !== contactKey))
}
function viewContact(e){
  setViewContactModalIsOpen(true) 
  let contactKey = e.target.getAttribute('contact')
  setViewList(viewList.filter(contact => contact.fname === contactKey))
 
}
function getChildData(datafromChild){
  // console.log(`DATA ON SUBMIT from child: ${datafromChild}`)
  contactList.push(datafromChild)
  cList.push(datafromChild);
  setModalIsOpen(false)
}
 function onCloseHandler(){
   setModalIsOpen(false)
 }

  return (
    <div className="App">
      
      <ul>
        <button onClick={()=> setModalIsOpen(true)}>{texts.addBtn}</button>
        {
           contactList.map((contact, index) => {
           return(
           <li> 
               <table>
                 <tbody>
                   <tr>
                       <td>
                       <DataTable contact={contact} key={contact.fname}/></td>
                       <td><button onClick={deletContact} contact={contact.fname}>{texts.deleteBtn}</button></td>
                       <td> <button onClick={viewContact} contact={contact.fname}>{texts.viewBtn}</button></td>
                     </tr>
                 </tbody>
                 </table>   
           </li>
           )
           })
        } 
     </ul>
      <ReactModal isOpen={modalIsOpen} style={{ overlay:{background: 'grey'}, content:{color:'blue'} }}>
          <h1>{texts.addHeader}</h1>
          <ModalPopup passChildData = {getChildData} ></ModalPopup>
          <button onClick={onCloseHandler}>close</button>
     </ReactModal>
     <ReactModal isOpen={viewContactModalIsOpen} style={{overlay:{background:'grey'},content:{color:'Orange'}}}>
         <ViewComp viewData = {viewList}></ViewComp>
         <button onClick={()=> setViewContactModalIsOpen(false)}>{texts.closeBtn}</button>
     </ReactModal>
   </div>
  )
}

export default App;
