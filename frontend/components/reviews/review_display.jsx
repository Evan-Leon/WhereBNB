import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faClipboardList, faHandSparkles, faStar, faMedal, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { format, formatDistanceStrict, addDays } from 'date-fns';

class ReviewDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            reviews: ''
        }
    }

    componentDidMount(){
        
        this.props.fetchReviews(this.props.listingId)
            .then(reviews => this.setState({reviews}))

    }

    render(){
        
        const {reviews} = this.state.reviews;

        
        if (!reviews) return null;
        
        // let review_num = reviews.length;
        // let counter = 0;
        // let ratings = reviews.forEach(review => counter += review.rating)
        // let avg_rating = [counter/review_num]
        // let round_rating = Math.round(avg_rating * 100)/100
        
;        return(
            <div className="review-container">
                <h3 className="review-title">  <FontAwesomeIcon icon={faStar} className="star"/> {this.props.roundRating} ({this.props.reviewNum} reviews)</h3>
                {/* <div className="review-box">
                    <div className='act-review'>
                        <h4 className="title-review"> <FontAwesomeIcon className="user-rev" icon={faUserCircle}  /> Amazing Home</h4>
                        <p className="review-body">Loved it! Everything about it was just perfect and the host and the location were great!</p>
                    </div>
                </div> */}
                <div className='actual-reviews'>
                    
                    
                        
                        {
                            
                            Object.values(reviews).map((review, i) => (
                                <div className="review-display-container" key={i}>
                                    <div className="user-title-container">
                                        <li className="user-rev" ><FontAwesomeIcon className="rev-user-icon"  icon={faUserCircle}  />{review.guest.first_name} </li>
                                        <li className="rev-date">{format(new Date(review.createdAt),'MMMM yyyy' )}</li>
                                    </div>
                                    <li > {review.body} </li>
                                </div>
                            ))
                        }
                    
                </div>
            </div>
        )
    }


}

export default ReviewDisplay;