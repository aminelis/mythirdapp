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
    shows: false,
    mountedTime: null
  };

  componentDidMount() {
    this.setState({ mountedTime: new Date() });

    // Update the component's mountedTime every second
    this.interval = setInterval(() => {
      this.setState({ mountedTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>

        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Person" />
            <p>{person.profession}</p>
          </div>
        )}

        <p>Component mounted at: {mountedTime && mountedTime.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;
