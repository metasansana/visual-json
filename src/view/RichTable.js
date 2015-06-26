import React from 'react';
import Table from './Table';
/**
 * RichTable
 */
class RichTable extends Table {

    initializeData(data){

        data = Table.prototype.initializeData(data).
            map(function(rowData, i){
                rowData.___checkBox =
                    React.createElement('input', {type:'checkbox',onChange:this.rowSelected.bind(this, i)});
                return rowData;
            }.bind(this));

        return data;
    }

    initializeColumns(columns) {

        var box = React.createElement('input',{type:'checkbox', onChange:this.columnClicked.bind(this)});
        columns = Table.prototype.initializeColumns(columns);
        columns.unshift({name:'___checkBox', label:box, nosort:true});
        return columns;

    }

    columnClicked(){


    }

    rowSelected(index){

        var rowIndex = this.state.rowsSelected.indexOf(index);
        var rowsSelected = this.state.rowsSelected.slice();

        (rowIndex > -1)? rowsSelected.splice(rowIndex, 1) : rowsSelected.push(index);

        this.setState({rowsSelected:rowsSelected}, function() {
            this.props.onRowSelected && this.props.onRowSelected(index, rowsSelected);
        }.bind(this));


    }

}

RichTable.propTypes = {
    onRowSelected: React.PropTypes.func,
    onAllRowsSelected: React.PropTypes.func
};

export default RichTable;
