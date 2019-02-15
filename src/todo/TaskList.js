import React,{Component} from 'react'

class TaskList extends Component {
   render() {
       if ( this.props.tasks )
           return (<ul > {
                   this.props.tasks.map((item) => (
                       <li key={item.id}> <b>Name:</b> {item.task} <br/> <b>Page:</b> {item.page} <br/> <b>Director:</b> {item.director}<br/></li>
                   ))
               }
           </ul>)
   }
}

export default TaskList