import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 5,
            body:'',
            reviewed: false
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
            .then(this.setState({body: '', reviewed: true}));
            
    }

    update(field, value) {
        return e => {this.setState({[field]: e.target.value})}
    }

    render() {
        if (!this.state.reviewed){
        return (
            <div className="review-form-container">
                <h3 className="review-form-box-title">Leave a review:</h3>
                <form className="review-form" onSubmit={this.handleSubmit}>
                    <div className="rating-container">
                        <label className="rating-title" htmlFor="rating-input" > Rating </label>
                        <input className="rating" id="rating-input" type="number" max='5' min="0" value={this.state.rating} onChange={this.update("rating")} />
                    </div>
                    <div className="review-text-container">
                        <label htmlFor="text-area" className="review-title-box" >Review</label>
                        <textarea id='text-area' className="review-text-area" value={this.state.body} onChange={this.update('body')} cols="30" rows="5"></textarea>
                        
                    </div>
                    <button className="review-sub" >Submit review</button>
                </form>
            </div>
        )}else{
            return (
                <div className="review-form-container">
                    <h3 className="review-form-box-title">Leave a review:</h3>
                    <form className="review-form" onSubmit={this.handleSubmit}>
                        <div className="rating-container">
                            <label className="rating-title" htmlFor="rating-input" > Rating </label>
                            <input className="rating" id="rating-input" type="number" max='5' min="0" value={this.state.rating} onChange={this.update("rating")} />
                        </div>
                        <div className="review-text-container">
                            <label htmlFor="text-area" className="review-title-box" >Review</label>
                            <textarea id='text-area' className="review-text-area" value={this.state.body} onChange={this.update('body')} cols="30" rows="5"></textarea>

                        </div>
                        <button className="review-sub" disabled >Reviewed</button>
                    </form>
                </div>
            )
        }
    }
}

export default withRouter(ReviewForm);