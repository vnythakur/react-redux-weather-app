import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchWeather} from '../action/index';


class SearchBar extends Component{

	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
		this.onSearchChange = this.onSearchChange.bind(this);
		this.onNewSearch = this.onNewSearch.bind(this);
	}

	onSearchChange(event){
		this.setState({term: event.target.value});
	}

	onNewSearch(event){
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term: ''});
	}

	render() {
		return (
			<div className="container">
				<div className="row">
				  <div className="col-md-6 col-md-offset-3">
					  <form className="input-group" onSubmit={this.onNewSearch}>
							<input onChange={this.onSearchChange} value={this.state.term} type="text" className="form-control" />
							<span className="input-group-btn">
								<input type="submit" className="btn btn-default" value="submit" />
							</span>
						</form>
					</div>
				</div>
			</div>
		)
	}

}


const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);