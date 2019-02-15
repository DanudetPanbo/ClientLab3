import React, {Component}  from 'react';

class InputTask extends Component {

   state = {task:'' , page:'', director:''}

   handleChange = (e) => {
       this.setState({ [e.target.name] : e.target.value });
       console.log(e.target.value)
   }

   render() {
       return (
           <div>
               <input type="hidden" name="id" value={this.props.id} /><br/>
               Name:
               <input type="text" name="task" onChange={this.handleChange} /> <br/>
               Page: 
               <input type="number" name="page" onChange={this.handleChange} /> <br/>
               Director:  
               <input type="text" name="director" onChange={this.handleChange} /> <br/>
               <button onClick={() => this.props.addTask(this.state.task,this.state.page,this.state.director)}>Add</button>
           </div>
       )
   }
}

export default InputTask