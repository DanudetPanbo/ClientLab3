import React, {Component} from 'react';
import './App.css';
import TaskList from './todo/TaskList'
import InputTask from "./todo/InputTask";

class App extends Component {

   state = {
       tasks: [{id: 1, task: 'Do homework' , page:25, director: 'John' },
               {id: 2, task: 'Read book', page:45, director: 'John'}],
       id:3
   }

   addTask = (task,page,director) => {
       this.setState({
                tasks: [...this.state.tasks, {id: this.state.id,task,page,director }],
                id: this.state.id+1  })
   }

   render() {   


       return (
           <div className="App">
               <h1>Todo</h1>
               <TaskList tasks={this.state.tasks}/>
               <InputTask addTask={this.addTask} id={this.state.id}/>
               <br/>
               
           </div>
       );
   }
}

export default App;