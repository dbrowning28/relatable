import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';

class AppHeader extends React.Component {
  static propTypes = {
      onAddTable: PropTypes.func,
      isModalActive: PropTypes.bool
  };
  
  render() {
    const { onAddTable, isModalActive } = this.props;
    return (
      <header className="App-header">
        <a href="#top" className="App-logo">
          <span className="App-logo-rela">rela</span>
          <span className="App-logo-table">table</span>
        </a>
        <button className="add-table-button" onClick={onAddTable} disabled={isModalActive}>
          Add Table
        </button>
      </header>
    );
  }
}

export default AppHeader;
