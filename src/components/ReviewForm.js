import React, { useState } from "react";
import { Button, Card, Form } from 'react-bootstrap';
import StarRating from "./Stars";



class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            userComment: '',
        }

        this.submitComment = this.submitComment.bind(this);
        this.handleClick = this.handleClick.bind(this);   
    }

    resetComment() {
        this.setState({
          userComment: ''
        });
      }
    
      submitComment(event) {
          event.preventDefault();
        this.props.addComments(this.state);
        this.resetReview();
      }
    

      handleClick(e) {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        console.log(name + " " + value);
        this.setState({
          [name]: value
        });
      }

        render() {
            return (
                              
              <Form className="reviewForm">
              <Form.Group className="mb-3" >
                <Form.Label>Reviews</Form.Label>
                <Form.Control as="textarea" id="userReview" name="userReview" onChange={this.handleChange} placeholder='Add a Review Here' rows={3} value={this.userReview}/>
              </Form.Group>
              <StarRating />
              <div className="d-grid gap-2">
                <Button variant="primary" onClick={this.submitReview}>Submit Review</Button>
              </div>
              <input type='hidden' name='movieId' id='movieId' value={this.id}/>
              <input type='hidden' id='showMovieId' placeholder={this.id}/>
              </Form>
              )
        }
    }

export default ReviewForm
