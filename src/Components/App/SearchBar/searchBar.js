import React from 'react';
import './searchBar.css';


export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    search(){
        this.props.onSearch(this.state.searchTerm)
    }
    handleTermChange(e){
        this.setState({searchTerm: e.target.value})
    }
    render(){
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" 
                onChange={this.handleTermChange}/>
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    }
}