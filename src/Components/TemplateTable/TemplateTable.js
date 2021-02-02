import React, { Component } from 'react';
import MaterialTable from "material-table";
import utilsData from '../../Utilities/data-util-functions.js';
import utilsOptions from '../../Utilities/table-options-util-function.js';
import '../TemplateTable/TemplateTable.css'
// const data = require('../../Data/trades_data.json');


class TradesTable extends Component {

    state = { tableData: [] };

    //set table data from json
    componentDidMount() {
        const data = require(`../../Data/${this.props.data_file}`);
        this.setState({ tableData: data });
    }
    //set table title
    getTitle = (title) => {
        return  title;
    }

    //table headers 
    getHeaders = (key) => {
        // let key = "trades_keys";
        let keys = utilsData().getKeys(key);

        let headers = keys.map(key => {
            let titleValue = utilsData().setTitleValue(key);
            let fieldValue = key;

            return { title: titleValue, field: fieldValue };
        })

        return headers;
    }

    //get table rows data
    getRows = (key) => {
        const { tableData } = this.state;
        // let key = "trades_keys";
        let filteredData = utilsData().getFilteredDataByKeys(tableData,key);

        return filteredData;
    }

    render() {
        const {title,table_key}= this.props
        return (
            <MaterialTable 
                title={this.getTitle(title)}
                columns={this.getHeaders(table_key)}
                data={this.getRows(table_key)}
                options={utilsOptions().setOptions()}
            />
        );
    }

}
export default TradesTable;