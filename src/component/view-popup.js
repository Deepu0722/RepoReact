import react, {Component} from 'react'

class ViewComp extends Component{
  constructor(props){
      super(props)
  }
 render(){
   let contactList = (this.props.viewData)[0]
      return(
         <div>
          <table>
            <tbody>
             {
                Object.entries(contactList).map(([keyx , i]) => {
                   return (
                    <tr><td>{keyx}</td><td>{i}</td></tr>
                   )     
               })
            }
            </tbody>
          </table>
        </div>
     )
 }
}
export default ViewComp
