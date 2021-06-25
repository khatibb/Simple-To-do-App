import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'

class App extends Component {
  state={
    todos:[
      {
        id:1,
        title:'take out the trash',
        completed:false
        },
      {
        id:2,
        title:'develop something',
        completed:false
        },

        {
          id:3,
          title:'go to the gym',
          completed:false
          }
    ]
  }

//toggle complete 
 markComplete= (id)=>{
   console.log(id)
   this.setState(
     {
       todos:this.state.todos.map(todo=> {
         if(todo.id===id){
            todo.completed=!todo.completed
         }
         return todo
       })
     }
   )
 } 

 //just dont return items with ca
 delTodo=(id)=>{
   console.log(id)
   this.setState({
     todos:[...this.state.todos.filter(todo=> todo.id !==id)]
   })
 }


 addTodo =  (title)=>{

   const newTodo ={
     id:4,
     title:title,
     complete:false
   }
   this.setState({todos: [...this.state.todos,newTodo]})
 }

  render() {
  
return (
      <div className="App">
    <div className="container">

    <Header/>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos = {this.state.todos} markComplete={this.markComplete}
        delTodo={this.delTodo}/>


    </div>

      </div>
    );
  }
}

export default App;
