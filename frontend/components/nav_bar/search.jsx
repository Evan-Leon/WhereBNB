import React from 'react';
import {withRouter} from 'react-router';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    update(){
        
       return e => this.setState({search: e.currentTarget.value })
    }

    handleSubmit(e){
        debugger
        e.preventDefault();
        
        let search = this.state.search ;
        search = search.toLowerCase();
        this.props.history.push(`/search/${search}`)
    }

    render(){
        
        return(
            <div className="search-bar-box">
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input type="text" className="search-text" placeholder="Start your search" value={this.state.search} onChange={this.update()} />
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Search);