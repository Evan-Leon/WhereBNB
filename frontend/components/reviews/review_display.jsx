import React from 'react';

class ReviewDisplay extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const {reviews} = this.props;

        debugger
        if (!reviews) return null;
        
        let review_num = reviews.length;
        let counter = 0;
        let ratings = reviews.forEach(review => counter += review.rating)
        let avg_rating = [counter/review_num]
;        return(
            
            <div>
                    <p>{review_num} {avg_rating}</p>
                    <ul className="list-indexes">
                        
                        {
                            Object.values(reviews).map((review, i) => (
                                
                                <li key={i}>{review.body}</li>
                            ))
                        }
                    </ul>
            </div>
        )
    }


}

export default ReviewDisplay;