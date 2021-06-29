import React from 'react';
import { withRouter } from 'react-router-dom';

class EditReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 5,
            body: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount(){
        debugger
        this.props.fetchReview(Number(this.props.reviewId[0]))
            .then(() => {debugger} )
            debugger
    }

    handleSubmit(e) {
        e.preventDefault();
        const review = {
            rating: this.state.rating,
            body: this.state.body,
            listing_id: this.props.listing.id,
            guest_id: this.props.currentUser,
        }
        this.props.updateReview(review)
            .then(this.props.closeModal());

    }

    update(field, value) {
        return e => { this.setState({ [field]: e.target.value }) }
    }

    render() {
        let {review} = this.props;
        
        if (!review) return null

        return (
            <div className="review-form-container">
                <h3 className="review-form-box-title">Leave a review:</h3>
                <form className="review-form" onSubmit={this.handleSubmit}>
                    <div className="rating-container">
                        <label className="rating-title" htmlFor="rating-input" > Rating </label>
                        <input className="rating" id="rating-input" type="number" max='5' min="0" value={review.rating} onChange={this.update("rating")} />
                    </div>
                    <div className="review-text-container">
                        <label htmlFor="text-area" className="review-title-box" >Review</label>
                        <textarea id='text-area' className="review-text-area" value={review.body} onChange={this.update('body')} cols="30" rows="5"></textarea>

                    </div>
                    <button className="review-sub" >Submit review</button>
                </form>
            </div>
        )
    }
}

export default withRouter(EditReview);