import React from 'react';
import '../styles/App.css';

class AddTableButton extends React.Component {
    render() {
        return (
            <button className="add-table-button" onClick={this.props.onClick}>
                Add Table
            </button>
        )
    }
}

export default AddTableButton;
