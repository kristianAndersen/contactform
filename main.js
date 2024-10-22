import './styles/main.css'

import {subjectClick} from './components/subjectClick.js'
import { inputListeners } from './components/inputListners.js';
document.addEventListener('DOMContentLoaded', () => {

  subjectClick();
  inputListeners()


})