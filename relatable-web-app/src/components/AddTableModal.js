import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';

class AddTableModal extends React.Component {
    static propTypes = {
        onCloseModal: PropTypes.func,
        onAddTable: PropTypes.func
    };
    
    constructor(props) {
        super(props);
        this.state = {
          fileName: '',
          fileDescription: ''
        }
        this.fileInput = React.createRef();
    }

    handleSubmit = (event) => {
        const { onAddTable, onCloseModal } = this.props; 
        const { fileName, fileDescription } = this.state;
        event.preventDefault();

        onAddTable(fileName, fileDescription);
        onCloseModal();
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    render() {
        const { onCloseModal } = this.props;
        return (
            <div className="add-table-modal">
                <header className="add-table-modal-header"> 
                    <h2>Add Table</h2>
                    <button onClick={onCloseModal}>X</button>
                </header>
                <form className="add-table-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="fileName" 
                        placeholder="Enter your Table Name" 
                        maxLength={100}
                        value={this.state.fileName} 
                        onChange={this.handleInputChange} />
                        <br></br>
                    <textarea 
                        name="fileDescription" 
                        placeholder="Enter a Description for your Table"
                        maxLength={1000}
                        value={this.state.fileDescription} 
                        onChange={this.handleInputChange} />
                    <br></br>
                    <input 
                        type="file"
                        name="file" 
                        placeholder="Update your CSV Table to Analyze"
                        ref={this.fileInput} accept=".csv" />
                    <br></br>
                    <input type="submit" value="Add Table"/>
                </form>
            </div>
        )
    }
}

export default AddTableModal;
