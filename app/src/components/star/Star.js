import React, { Component } from 'react';
import StarRating from 'react-native-star-rating';

class GeneralStarExample extends Component {

    render() {
        let { disabled = false, rating = 0, size = 40 } = this.props
        return (
            <StarRating
                starSize={size}
                disabled={disabled}
                maxStars={5}
                fullStarColor={'#ffcc00'}
                rating={rating}
                selectedStar={(ratingStar) => { this.props.onStarRatingPress(ratingStar) }}
            />
        );
    }
}

export default GeneralStarExample