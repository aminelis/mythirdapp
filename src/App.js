import './App.css';
import React from 'react';
import { Component } from 'react';



class App extends Component {
  state = {
    person: {
      fullName: 'Amine Al assir',
      bio: 'Description.',
      imgSrc: '/images/Me.jpg',
      profession: 'Developer'
    },
    show: true,
    intervalId: null,
    timeElapsed: 0
  };

  componentDidMount() {
    const intervalId = setInterval(this.updateTimeElapsed, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateTimeElapsed = () => {
    this.setState(prevState => ({
      timeElapsed: prevState.timeElapsed + 1
    }));
  };

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };


  render() {
    const { person,show} = this.state;
    

    return (
      <div className="container">
        <button className="btn btn-primary" onClick={this.toggleShow}>
          Toggle Show
        </button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}
        
      </div>
    );
  }
}

export default App;
