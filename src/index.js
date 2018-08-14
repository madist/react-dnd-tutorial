import React from 'react';
import ReactDOM from 'react-dom';
import Board from './component/Board';
import {observe} from './common/game';
const rootElement = document.getElementById('root');
observe(knightPosition =>  ReactDOM.render(
<Board knightPosition={knightPosition} />, rootElement));