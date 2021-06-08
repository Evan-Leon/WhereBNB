import React from 'react';
import {DateRange} from 'react-date-range';

class BookingForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checkIn: new Date(),
            checkOut: new Date()
        }

        this.handleSelect = this.handleSelect.bind(this);
        this.updateDates = this.updateDates.bind(this);
    }


    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.props.action(this.state) 
    // }

    handleSelect(e) {
        e.preventDefault();
        let booking = {
            check_in: this.state.checkIn,
            check_out: this.state.checkOut,
            guest_id: this.props.currentUser,
            listing_id: this.props.listing.id
        }
        debugger
        this.props.createBooking(booking)
            .then(booking => console.log(booking))
        
      
    }

    updateDates(e) {
        let { startDate, endDate } = e.selection;
        debugger
        this.setState({
            checkIn: startDate,
            checkOut: endDate
        })
    }

    render(){

        // const { listing } = this.props;
        debugger
        let selectionRange = {
            startDate: this.state.checkIn,
            endDate: this.state.checkOut,
            key: 'selection',
        }

        // if (this.props.listing.checkIn){
        //     dateRange = {
        //         startDate: new Date(this.state.checkIn.toString().slice(0,10)) ,
        //         endDate: new Date(this.state.checkOut.toString().slice(0,10)),
        //         key: 'selection',
        //     }
        // }
        
        return(
            <div className="booking-form-container">
                <form onSubmit={this.handleSelect} className="">
                    <DateRange
                        ranges={[selectionRange]}
                        onChange={this.updateDates}
                        // onChange={e}
                        editableDateInputs={true}
                        showSelectionPreview={true}
                        months={2}
                        direction="horizontal"
                        showDateDisplay={false}
                        showMonthAndYearPickers={false}
                        // showMonthArrow={false}
                        />
                    <button type="submit" value={this.props.formType}>Submit</button>
                </form>
            </div>
        )
    }
}

export default BookingForm;