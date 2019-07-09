import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
let quizData = require('./quiz_data.json');

class Quiz extends Component{
  constructor(props){
    super(props);
    this.state={
      quiz_position: 1
    }
  }
  render(){
    let pos=this.state.quiz_position-1
    return(<div>
        <QuizQuestion quiz_question={quizData.quiz_questions[pos]}/>
      </div>
    );
  }
}

export default Quiz;
