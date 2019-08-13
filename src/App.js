import React, { Component } from 'react';
import Movements from './components/Movements';
import Format from './components/Format';
import Header from './components/Header';
import Title from './components/Title';
import RecommendedWeight from './components/RecommendedWeight';
import Comments from './components/Comments';
import Program from './Program/Program';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      format: {
        type: "for time",
        time: null,
        rounds: 4
      },
      description: "",
      movements: [
        {
          reps: "30 seconds",
          exercise: "burpees"
        },
        {
          reps: "30 seconds",
          exercise: "rest"
        },
        {
          reps: "30 seconds",
          exercise: "dumbbell thrusters"
        },
        {
          reps: "30 seconds",
          exercise: "rest"
        },
      ],
      recommendedWeight: {
        male: "45 lbs",
        female: "30 lbs"
      },
      comments: "Post reps completed to comments."
    }
  }

  render() {
    const { format, movements, recommendedWeight, comments } = this.state;
    return (
      <div className="App">
        <Header />
        <Program />
        <Title />
        <hr className="hr-cyan"></hr>
        <Format 
          rounds={format.rounds}
          type={format.type}
          time={format.time} 
        />
        <Movements 
          movements={movements} 
        />
        <RecommendedWeight rx={recommendedWeight}/>
        <Comments comments={comments} />
    </div>
    );
  };
};

export default App;
