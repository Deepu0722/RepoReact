
import React, {Component} from 'react';


class ModalPopup extends Component {
    constructor(props){
     super(props)
     this.state = {
        fname: '',
        lname: '',
        DoB: '',
        Email: '',
        Phone: ''
     }
    }
    handleChange = (event) => {
        this.setState({
           [event.target.name] : event.target.value
        })
          console.log(this.state)
     }

    submitHandler = (event) =>{
        event.preventDefault()
        let x = this.state
        console.log(`Submit handler: ${x}`)

        this.props.passChildData(x)
        
    }

    render(){
    
     let conDetails   = this.state;
     
     return(
         <div> 
             <form onSubmit={this.submitHandler}>
            {  
              
              Object.keys(conDetails).map((item) => {
                   return (
                       <div>
                           <label>{item}</label> <input type='text' name={item} value={item.values} onChange={this.handleChange}/>
                       </div>
                   ) 
                //    <div> {item} {item.values} </div>
               })
              
            }
            <input type='submit' /> 
            </form>
         </div>
     )
 }
}

export default ModalPopup;

