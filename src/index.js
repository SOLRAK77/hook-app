import React from 'react';
import ReactDOM from 'react-dom';
//import { CounterApp } from './components/01-useState/CounterApp';
//import { CounterWithHooks } from './components/01-useState/CounterWithHooks';
//import {HookApp} from './HookApp'
//import {SimpleForm} from './components/02-useEffect/SimpleForm'
//import {FormWithCustomHook} from './components/02-useEffect/FormWithCustomHook'
//import {MultipleHooks} from './components/03-HookExamples/MultipleHooks'
//import {FocusScreen} from './components/04-useRef/FocusScreen'
//import {RealExampleRef} from './components/04-useRef/RealExampleRef'
//import {Layout} from './components/05-useLayoutEffect/Layout'
//import {Memorize} from './components/06-useMemory/Memorize'
//import {MemoHook} from './components/06-useMemory/MemoHook'
//import {CallBackHook} from './components/06-useMemory/CallBackHook'
//import {Padre} from './components/07-tarea-memo/Padre'
import {TodoApp} from './components/08-useReducer/TodoApp'

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);
