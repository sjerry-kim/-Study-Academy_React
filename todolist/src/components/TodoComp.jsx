import { useReducer } from "react";
import TodoItemComp from "./TodoItemComp";

const initstate = {
  // todoItem의 형태를 확인 : 현재 1개의 todo값만 가지고 있음
  todoitem : {
    done : true,
    todo : "확인",
    id : 1
  },
  // 배열을 통해서 여러개의 todolist 사용
  todolist : [
    {
      done : true,
      todo : "첫 번째 할 일",
      id : 1
    },
    {
      done : true,
      todo : "두 번째 할 일",
      id : 2
    }
  ], 
  // todoItem을 넣을 공간
  // todo값을 입력받을 todoInput
  todoInput : "",
  countAll : 2,
}

function reducer(state, action){
  switch (action.type){
    case "checked" :
      return {...state, 
        todoitem : {
          ...state.todoitem,
          done: !state.todoitem.done
        }
      }
    case "todoInput" :
      return {...state, todoInput : action.payload}
    case "checkedlist" :
      // 리스트 안에서 객체 하나를 찾아서 그 객체의 done을 !값으로 바꾸어줌
      // 객체 하나를 찾는 방법 : id값을 통해 찾음
      const newTodoList = state.todolist.map((todoitem)=>{
        if(todoitem.id == action.id){
          todoitem = {
            ...todoitem,
            done : !todoitem.done
          }
        }
        return todoitem;
        /*
        const newTodoList2 = state.todolist.map((todoitem)=>(todoitem.id == action.id? {...todoitem, done: !todoitem.done}: todoitem))
        */
      })
      return {...state, todolist : newTodoList}
    case "deletelist":
      // id값을 가져와서, id값과 같은 객체를 제외하고 배열 생성
      const newTodolist = state.todolist.filter((todoitem)=>(todoitem.id != action.id))
      return {...state, todolist : newTodolist}
    case "todoAdd" :
      // todo 객체를 만들어서, todolist에 연결하여 새로운 배열을 만듦
      const newTodolist3 = state.todolist.concat({
        done : false,
        todo : state.todoInput,
        id :  state.countAll+1,
      })
      return {...state, todolist : newTodolist3, countAll : state.countAll+1}
    default : // 다른 값이 들어왔을 때 현재 state를 유지하고 오류를 알림
      console.error("존재하지 않는 action타입 입니다")
      return state;
  }
}

const TodoComp = () => {
  const [state, dispatch] = useReducer(reducer , initstate)

  return (
    <div>
      <input type="text" onChange={
        (e)=>{dispatch({type: "todoInput", payload : e.target.value})}
        } />
      <button onClick={()=>{dispatch({type: "todoAdd"})}}>+</button>
      
      <ul>
      <li>
        {/** TodoItem - 체크여부, 할일, id값(삭제에 필요) */}
        <input type="checkbox" 
            checked={state.todoitem.done} 
            onClick={()=>{dispatch({type: "checked"})}} />
            {state.todoitem.todo}
        <button>X</button>
      </li>
        {/* TodoItemComp를 만들어서 map을 통해서 내용 출력 */}
        {state.todolist.map((todoitem)=>(<TodoItemComp key={todoitem.id} todoitem={todoitem} dispatch={dispatch}/>))}
      </ul>
    </div>
  );
}

export default TodoComp;