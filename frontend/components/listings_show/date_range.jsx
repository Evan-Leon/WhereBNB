import { DateRangePicker } from 'react-date-range';
import React from 'react';

class DateRange extends React.Component {
    
    handleSelect(ranges) {
        console.log(ranges);
    }

    render(){
        const selectionRange = {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }

        return(
            <DateRangePicker 
                ranges={[selectionRange]}
                // onChange={this.handleSelect}
                onChange={(e) => {debugger}}
                />
        )
    }
}

export default DateRange;