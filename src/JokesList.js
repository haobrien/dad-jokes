import React, { Component } from 'react'
import axios from 'axios'
import './JokesList.css'
import Joke from './Joke'
import { v4 as uuid } from 'uuid'
import './shake.css'

class JokesList extends Component {
    static defaultProps = {
        numJokesToGet: 10
    }

    constructor(props) {
        super(props)
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem("jokes") || '[]'),
            isLoading: false
        }
        this.handleVote = this.handleVote.bind(this)
        this.getJokes = this.getJokes.bind(this)
    }

    handleClick = () => {
        this.setState({ isLoading: true }, this.getJokes)
    }

    async getJokes() {
        let newJokes = []
        while (newJokes.length < this.props.numJokesToGet) {
            let res = await axios.get('https://icanhazdadjoke.com', {
                headers: { Accept: 'application/json' }
            })
            newJokes.push({
                text: res.data.joke,
                votes: Math.floor(Math.random() * 30 - 5),
                id: uuid()
            })
        }
        this.setState(cur => {
            let oldJokes = cur.jokes.slice(0, 40)
            return { jokes: [...newJokes, ...oldJokes], isLoading: false }
        }, () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
        )
    }

    componentDidMount() {
        if (this.state.jokes.length === 0) this.getJokes()
    }

    handleVote(id, delta) {
        console.log('vote!')
        this.setState(cur => ({
            jokes: cur.jokes.map(j =>
                (j.id === id)
                    ? { ...j, votes: (j.votes + delta) }
                    : j
            )
        }), () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
        )
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className="JokesList-spinner">
                    <i className="far fa-8x fa-laugh fa-spin" />
                    <h1 className="JokesList-title">Loading...</h1>
                </div>
            )
        }
        return (
            <div className="JokesList">
                <div className="JokesList-sidebar">
                    <h1 className="JokesList-title">
                        <span>Dad</span> Jokes
                    </h1>
                    <img alt="crying laughing emoji" src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
                    <button className="JokesList-getmore" onClick={this.handleClick}>
                        More Jokes
                    </button>
                </div>
                <div className="JokesList-jokes">
                    {this.state.jokes.map(j => (
                        <Joke
                            votes={j.votes}
                            text={j.text}
                            id={j.id}
                            key={j.id}
                            handleVote={this.handleVote} />
                    ))}
                </div>
            </div>
        )
    }
}

export default JokesList