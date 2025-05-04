const data =[
    {title:"Play to Delta Client", p:"come in Funtime"},
    {title:"Ban to 4.3.1", p:"come in Funtime"},
    {title:"come in Funtime", p:"come in Funtime"},
    {title:"Play to Wexside client", p:"Ban to 4.3.1"},
    {title:"Play to Nursultan Client", p:"come in Funtime"},
]
const todoLists = document.getElementById("todo_lists")


const input = document.querySelector('#todo_input')
document.querySelector('#btn_sumbit').addEventListener('click',()=>{
    const inputData = input.value
    input.value = ""
    
     const todo_el = document.createElement('div')
     todo_el.classList.add("todo_item")
     todo_el.classList.add("hover_effect")
     const hover = document.querySelector(".hover_effect")
     hover.addEventListener("click",()=>{
        
     })


     const todo_content_el = document.createElement('div')
     todo_el.appendChild(todo_content_el)

     const todo_input_el = document.createElement('input')
     todo_input_el.classList.add('text')
     todo_input_el.type = "text"
     todo_input_el.value = inputData?inputData:data[Math.floor(Math.random()*data.length)].title
     todo_input_el.setAttribute("readonly","readonly")

     todo_content_el.appendChild(todo_input_el)

     const todo_actions_el = document.createElement('div')
     todo_actions_el.classList.add("action_items")

     const todo_done_el = document.createElement('i')
     todo_done_el.classList.add("fa_solid")
     todo_done_el.classList.add("fa_check")

     const todo_edit_el = document.createElement('i')
     todo_edit_el.classList.add("fa_solid")
     todo_edit_el.classList.add("fa_check")
     
     const todo_delete_el = document.createElement('i')
     todo_delete_el.classList.add("fa_solid")
     todo_delete_el.classList.add("fa_check")

     todoLists.appendChild(todo_actions_el)
     todoLists.appendChild(todo_edit_el)
     todoLists.appendChild(todo_delete_el)
     console.log(todo_el)
     document.querySelector(".todo_lists").appendChild(todo_el)

})