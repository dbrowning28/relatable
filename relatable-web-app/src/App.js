import React from 'react';
import AppHeader from './components/AppHeader.js';
import AppBody from './components/AppBody.js';
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalActive: false
    }
  }

  render() {
    const { isModalActive } = this.state;

    return (
      <div className="App">
        <AppHeader 
          onAddTable={() => this.setState({ isModalActive: true })}
          isModalActive={isModalActive}
        />
        <AppBody 
          onCloseModal={() => this.setState({ isModalActive: false })}
          isModalActive={isModalActive}
        />
      </div>
    )
  }
}

export default App;
