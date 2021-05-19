import React from 'react'

class BookingForm extends React.Component {
    constructor(props){
        super(props);
    }



    render(){

        return(
            <div className="booking-form-container">
                <form onSubmit={handleSubmit} className="">
                    <input type="date" className="check-in" onChange={this.update('checkIn')} />
                    <input type="date" className="check-out" onChange={this.update('checkOut')} />
                    <input type="dropdown" className="guest-num" onChange={this.update('guestNum')} />
                    <button type="submit" value={this.props.formType}></button>
                </form>
            </div>
        )
    }
}