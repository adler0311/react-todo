import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

class App extends Component {
  id=3
  state= {
    input: '',
    todos: [
      {id:0, text: '리액트 소개1', checked: false, color: 'rgb(0,0,0)'},
      {id:1, text: '리액트 소개2', checked: true, color: 'rgb(0,0,0)'},
      {id:2, text: '리액트 소개3', checked: false, color: 'rgb(0,110,255)'},
    ],
    colors: ['#343a40', '#f03e3e', '#12b886', '#228ae6'],
    selected: '#000000'
  }

  // componentWillMount() {
  //   if (localStorage.todos) {
  //     this.setState({
  //       todos: JSON.parse(localStorage.todos)
  //     })
  //   }
  // }
  //
  // componentDidUpdate(prevProps, prevState) {
  //   if (JSON.stringify(prevState.todos) !== JSON.stringify(this.state.todos)) {
  //     localStorage.todos = JSON.stringify(this.state.todos);
  //   }
  // }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = ()=>{
    const {input,todos} = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color: this.state.selected
      })
    });
  }

  handleKeyPress = (e)=> {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const {todos} = this.state;

    const index  =todos.findIndex(todo=>todo.id===id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id)=>{
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo=>todo.id!==id)
    })
  }

  handleSelect = (e)=> {
    this.setState({
      selected: e.target.style.background
    });
  }

  render() {
    const {input, todos, colors, selected} = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelect
      } = this;

    return(
        <TodoListTemplate form={<Form
            color={selected}
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
              />}

              palette={<Palette
                colors={colors}
                onSelect={handleSelect}
                selected={selected}
                 />}
              >

          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
        </TodoListTemplate>
    );
  }
}

export default App;
