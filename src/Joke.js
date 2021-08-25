import React, { Component } from 'react'
import './Joke.css'

class Joke extends Component {
    upvote = () => {
        console.log('upvote!')
        this.props.handleVote(this.props.id, 1)
    }

    downvote = () => {
        this.props.handleVote(this.props.id, -1)
    }

    getRating = () => {
        if (this.props.votes >= 15) {
            return {color: 'rgb(25, 160, 25)', emoji: 'rolling_on_the_floor_laughing'}
        } else if (this.props.votes >= 12) {
            return {color: '#8bc34a', emoji: 'laughing'}
        } else if (this.props.votes >= 9) {
            return {color: '#cddc39', emoji: 'smiley'}
        } else if (this.props.votes >= 6) {
            return {color: '#ffeb3b', emoji: 'slightly_smiling_face'}
        } else if (this.props.votes >= 3) {
            return {color: '#ffc107', emoji: 'neutral_face'}
        } else if (this.props.votes >= 0) {
            return {color: '#ff9800', emoji: 'confused'}
        } else {
            return {color: '#f44336', emoji: 'rage'}
        }
    }



    render() {
        const rating = this.getRating()
        return (
            <div className="Joke">
                <div className="Joke-buttons">
                    <i onClick={this.upvote} className="fas fa-arrow-up"></i>
                    <span style={{ borderColor: rating.color }}>
                        {this.props.votes}
                    </span>
                    <i onClick={this.downvote} className="fas fa-arrow-down"></i>
                </div>
                <div className="Joke-text">
                    {this.props.text}
                </div>
                <div className="Joke-emoji">
                    <i className={`em em-${rating.emoji}`} aria-label="NEUTRAL FACE"></i>
                </div>
            </div>
        )
    }
}

export default Joke