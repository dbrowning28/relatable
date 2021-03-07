import React from 'react';
import PropTypes from 'prop-types';
import AddTableModal from './AddTableModal.js';
import TableList from './TableList.js';
import '../styles/App.css';

class App extends React.Component {
  static propTypes = {
    isModalActive: PropTypes.bool,
    onCloseModal: PropTypes.func
  };
  
  constructor(props) {
    super(props);
    this.state = {
      isTableDataLoading: false,
      tableData: []
    }
  }

  componentDidMount() {
    // fetch existing table data and update table data state value
    this.setState({ isTableDataLoading: true });
    setTimeout(() => this.setState({
      isTableDataLoading: false,
      tableData: [
        {
          id: 1,
          name: 'Table 1',
          description: 'My first table',
          status: 'ready' 
        },
        {
          id: 2,
          name: 'Table 2',
          description: 'My second table',
          status: 'ready'
        }
      ]
    }), 5000)
  }

  addTable = (name, description) => {
    this.setState((prevState) => ({
      tableData: prevState.tableData.concat([{
        id: prevState.tableData.length + 1,
        name,
        description,
        status: 'loading'
      }])
    }));
  }

  render() {
    const { isModalActive, onCloseModal } = this.props;
    const { isTableDataLoading, tableData } = this.state;

    return (
      <div className="App-body">
        {isModalActive &&
          <AddTableModal 
            onCloseModal={onCloseModal} 
            onAddTable={this.addTable}
          />}
        <TableList 
          isTableDataLoading={isTableDataLoading}
          tableData={tableData}
        />
      </div>
    )
  }
}

export default App;
