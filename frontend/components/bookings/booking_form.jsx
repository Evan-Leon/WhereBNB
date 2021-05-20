import React from 'react'

class BookingForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.booking;

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state) 
    }

    update(selection) {

    }

    render(){

        return(
            <div className="booking-form-container">
                <form onSubmit={handleSubmit} className="">
                    {/* <input type="date" className="check-in" onChange={this.update('checkIn')} />
                    <input type="date" className="check-out" onChange={this.update('checkOut')} />
                    <input type="dropdown" className="guest-num" onChange={this.update('guestNum')} /> */}
                    <DateRange
                        ranges={[selectionRange]}
                        // onChange={this.handleSelect}
                        onChange={this.update(selection)}
                        editableDateInputs={true}
                        showSelectionPreview={true}
                        months={2}
                        direction="horizontal"
                        showDateDisplay={false}
                        showMonthAndYearPickers={false}
                        // showMonthArrow={false}
                        />
                    <button type="submit" value={this.props.formType}></button>
                </form>
            </div>
        )
    }
}

export default BookingForm;