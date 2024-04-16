import React, { useState } from 'react'

import "./todo.css"
import Todoitem from './Todoitem'

const todo = [
    {
      todo: "Buy groceries",
      completed: "false",
      category: "Home"
    },
    {
      todo: "Finish report",
      completed: "false",
      category: "Work"
    },
    {
      todo: "Go to the gym",
      completed: "false",
      category: "Health"
    },
    {
      todo: "Call mom",
      completed: "false",
      category: "Personal"
    },
    {
      todo: "Pay bills",
      completed: "false",
      category: "Finance"
    },
    {
      todo: "Read a book",
      completed: "false",
      category: "Personal"
    },
    {
      todo: "Clean the house",
      completed: "false",
      category: "Home"
    },
    {
      todo: "Attend meeting",
      completed: "false",
    category: "Work"
    },
    {
      todo: "Take out the trash",
      completed: "false",
      category: "Home"
    },
    {
      todo: "Schedule dentist appointment",
      completed: "false",
      category: "Personal"
    }
  ]


export default function TodoList() {   
const [todoList,setTodoList] = useState(todo)
const [newTodo,setNewTodo] = useState()
const [newTodoCategory,setNewTodoCategory] = useState("")
const [selectedCategory,setSelectedCategory] = useState("All")
// console.log(todoList)

function deleteTodo(item){
  const newTodos =todoList.filter((el)=>el.todo!==item.todo)
  setTodoList(newTodos)
}
function addTodo(event){
  event.preventDefault()
  setTodoList([...todoList, {todo :newTodo,
  category:newTodoCategory,completed:false}])
  setNewTodo("")
  
}
// function colorchange(i){
//   {(i.completed) ? "background-color: green" : "background-color: red"}
// }

function handleCategoryChange(event){
  setSelectedCategory(event.target.value)
}
const filterdTodos = todoList.filter((item)=>{
  return selectedCategory === "All"|| item.category === selectedCategory
})


 
  return (
   <div className='main'   >
    <div className='select'>
      <select onChange={handleCategoryChange}      >
        <option value ="All">All</option>
        <option value ="Personal">Personal</option>
        <option value ="Home">Home</option>
        <option value ="Health">Health</option>
        <option value ="Work">Work</option>
        <option value ="Finance">Finance</option>
      </select>
    </div>




         <form className='form' onSubmit={addTodo}>
                <input className='input' type='text'value={newTodo}
                 onChange={(event)=>{
                 setNewTodo(event.target.value)
                 console.log(event.target.value)
                 
                 }} />

<div className='category'>
    <select   value={newTodoCategory}
    onChange={(event)=>{setNewTodoCategory(event.target.value)}}    >
        <option value ="">Select Category</option>
        <option value ="Personal">Personal</option>
        <option value ="Home">Home</option>
        <option value ="Health">Health</option>
        <option value ="Work">Work</option>
        <option value ="Finance">Finance</option>
      </select>
    </div>



                <button className='add'>Add Todo</button>

              </form>


    {filterdTodos.map(function(i){
        return (
             
            <div className="heading" key={i.todo}>
              
                <h3 className='list'>{i.todo} 
                   <div className='delete'>
                    {i.category}
         <button className='btn'onClick={()=>{deleteTodo(i)}}>
                     <svg width = "30px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
</svg></button>

                   </div> 
               </h3>
            </div>
            
        );
    })}
   
   </div>

  );
}


//1st step --Display all todos,category and add delete button
// 2nd step -enable delete button
// 3rd step-- How to add new todo
// 4th step -- How to display the selected category --filteredTodos.map
// 5th step --adding category to new todo










