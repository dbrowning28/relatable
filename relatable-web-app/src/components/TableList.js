import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';

class TableList extends React.Component {
    static propTypes = {
        tableData: PropTypes.arrayOf(PropTypes.object),
        isTableDataLoading: PropTypes.bool
    };
    
    render() {
        const { isTableDataLoading, tableData } = this.props;
        if (isTableDataLoading) {
            return (
                <p>Loading...</p>
            )
        }
        
        const tableDataRows = tableData.map(table => (
            <tr key={table.id.toString()}>
                <td>{table.name}</td>
                <td>{table.description}</td>
                <td>{table.status === 'ready' ? 'View Analysis' : 'Loading...'}</td>
            </tr>
        ));
        return (
            <div className="table-list">
                <table>
                    <thead>
                        <tr>
                            <th>Table Name</th>
                            <th>Table Description</th>
                            <th>Analysis</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableDataRows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TableList;
