import { DateRangePicker, DateRange  } from 'react-date-range';
import React from 'react';

class MyDateRange extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            selection:{
                startDate: new Date(),
                endDate: new Date()
            }
        }
    }
    
    handleSelect(ranges) {
        return({
            selection: {
                startDate: ranges[startDate],
                endDate: ranges[endDate]
            }
        })
    }

    render(){
        const selectionRange = {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }

        return(
            <DateRange
                ranges={[selectionRange]}
                // onChange={this.handleSelect}
                onChange={item => this.setState([item.selection])}
                editableDateInputs={true}
                showSelectionPreview={true}
                months={2}
                direction="horizontal"
                showDateDisplay={false}
                showMonthAndYearPickers={false}
                // showMonthArrow={false}
                />
        )
    }
}

export default MyDateRange;