import * as keys  from '../Data/config.js';

//get keys/columns to display as columns in table
const getKeys = (key) => {
    return keys[key];
}

//convert epoch to date
const getTradeDate = (trade_date) => {

    let utcSeconds = trade_date;
    let date = new Date(0);
    //console.log(date);
    date.setUTCSeconds(utcSeconds);

    return date;
}

//capitalize only first letter
const capitalizeFirstLetter=(key)=>
{
    return key.charAt(0).toUpperCase() + key.slice(1);
}
//capitalize first letter and remove underscore
const setTitleValue=(key)=>
{
    return capitalizeFirstLetter(key).replace("_", " ");
}

//set date
const setTradeDate=(obj,key,value)=>{

    let date = getTradeDate(value);
    obj[key] = date.toLocaleDateString();
    return obj;
}
//get data to display in table accordingly to required keys((columns)),age calculculted by birthdate
const getFilteredDataByKeys = (tableData,key) => {
    let keys = getKeys(key);

    let result =
        tableData.map(item => {
            let obj = {};

            keys.forEach(key => {

                if (key === "trade_date" || key === "time") {
                    obj = setTradeDate(obj,key,item[key]);
                    return;
                }
                if (item.hasOwnProperty(key))
                    obj[key] = item[key];
            })
            return obj;
        });

    return result;
}
export default function utils() {
	return {
        getKeys,
        getTradeDate,
        setTradeDate,
        capitalizeFirstLetter,
        setTitleValue,
		getFilteredDataByKeys
	};
}