import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 5,
            body:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleSubmit(e){
        e.preventDefault();
        const review = {
            rating: this.state.rating,
            body: this.state.body,
            listing_id: this.props.listing.id,
            guest_id: this.props.currentUser,
        }
        this.props.createReview(review)
            
    }

    update(field, value) {
        return e => {this.setState({[field]: e.target.value})}
    }

    render() {
        
        return (
            <div className="review-form-container">
                <form className="review-form" onSubmit={this.handleSubmit}>
                    <label > Rating
                        <input className="rating" type="number" value={this.state.rating} onChange={this.update("rating")} />
                    </label>
                    <label >Review
                        <textarea className="review" onChange={this.update('body')} cols="30" rows="10"></textarea>
                    </label>
                    <button >Submit</button>
                </form>
            </div>
        )
    }
}

export default withRouter(ReviewForm);