import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithHooks } from './components/01-useState/CounterWithHooks';
//import {HookApp} from './HookApp'

ReactDOM.render(
  <CounterWithHooks />,
  document.getElementById('root')
);
