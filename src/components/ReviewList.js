import React, { Component } from 'react';
import ReviewForm from './ReviewForm'
import { Rating } from '@mui/material';

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        };

        this.addComment =this.addComment.bind(this);
    }

    addComment(comment) {
        this.setState({ comments: [...this.state.comments, comment] })
    }

    render() {
        return(
            <div className='container'>
                {this.state.comments.map(function(comment, index) {
                    return <div key={index}> {comment.userReview}</div>
                })}
                <ReviewForm
                rating addComment={(comment) => 
                this.addComment(comment)} />
            </div>
        )
    }
}