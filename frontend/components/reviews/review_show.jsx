import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCity, faCalendarAlt, faClipboard, faHandSparkles, faStar, faMedal, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { format, formatDistanceStrict, addDays } from 'date-fns';

class ReviewShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            reviews: ''
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        
    }

    componentDidMount(){
        
        this.props.fetchUserReviews()
            .then(reviews => this.setState({reviews}))

    }

    componentDidUpdate(prevProps, prevState) {
        

        if (prevState.reviews.length !== this.state.reviews.length) {
            this.setState({
                reviews: this.state.reviews
            })
        } else if (prevProps.reviews.length !== this.props.reviews.length) {
            this.props.fetchUserReviews(this.props.listingId)
                .then(reviews => this.setState({ reviews }))
        }
    }
   

    handleDelete(e){
        e.preventDefault()
        
        this.props.deleteReview(e.target.value)
        // .then(() => this.props.fetchReviews(this.props.currentUser))
        this.setState({deleted:true})
    }

    handleEdit(e){
        e.preventDefault();
        
        this.props.updateFilter('edit-review', [e.target.value])
        this.props.openModal('edit-review')
    }

    render(){
        
        let {reviews} = this.props;
        debugger
        if (!reviews) return null;
        
;        return(

                <div className="review-show-out-container">
                     <h1 className="review-show-title">{this.props.userName.firstName} {this.props.userName.lastName} Reviews</h1>
                    <div className="review-show-container">
                    
                    {Object.values(reviews).map((rev, i) =>(
                        <div key={i} className="review-show-box">
                            <div className="user-title-container">
                                <li className="listing-title-rev">{rev.listing.title}</li>
                                <div className="rev-title-show">
                                    <li><FontAwesomeIcon className="city-icon" icon={faCity} /> </li>
                                    <li>{rev.listing.city}</li>
                                </div>
                                <div className="rev-date-show-container">
                                    <li><FontAwesomeIcon className="calendar-icon" icon={faCalendarAlt} /> </li>
                                    <li className="rev-date-show">{format(new Date(rev.createdAt), 'MMMM yyyy')}</li>
                                </div>

                                <div className="rev-date-show-container">
                                    <li><FontAwesomeIcon className="star-icon" icon={faStar} /> </li>
                                    <li className="rev-rating-show">{rev.rating}</li>
                                </div>
                    
                                <li className="rev-body-show" > {rev.body} </li>
                                
                                       
                                        
                                 <div className="edit-delete-btns-container">
                                         <button className="edit-delete-btns" value={rev.id} onClick={this.handleDelete}>Delete Review</button>
                                     <button className="edit-delete-btns" value={rev.id} onClick={this.handleEdit}>Edit Review</button>
                                 </div>
                                </div>
                                    
                        </div>
                    ) )}
                     </div>
                </div>
               
            
        )
    }


}

export default ReviewShow;