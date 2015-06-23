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
                    React.createElement('input', {type:'checkbox',onChange:this.rowClicked.bind(this, i)});
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

    rowClicked(index){

        var rowIndex = this.state.indexOf(index);
        var crowsClicked = this.state.rowsClicked.slice();

        (rowIndex > -1)? rowsClicked.splice(rowIndex, 1) : rowsClicked.push(index);

        this.setState({rowsClicked:rowsClicked}, function() {
            this.props.onRowClicked && this.props.onRowClicked(index, rowsClicked);
        }.bind(this));


    }

}

RichTable.propTypes = {
    onRowClicked: React.PropTypes.func,
    onAllRowsClicked: React.PropTypes.func
};

export default RichTable;
