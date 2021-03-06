import React, { Component } from "react";
import CardList from "./CardList";
import Scroll from "./Scroll";
import SearchBox from "./SearchBox";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

//considered a smart component because it has state

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ""
		};
	}

	componentDidMount() {
		fetch(`https://jsonplaceholder.typicode.com/users`)
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}

	onSearchChange = event => {
		this.setState({ searchfield: event.target.value });
		console.log(event.target.value);
	};

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});

		return !robots.length ? (
			<h1>Loading ...</h1>
		) : (
			<div className="tc">
				<h1 className="heading">Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange} />

				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots} />;
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

export default App;
