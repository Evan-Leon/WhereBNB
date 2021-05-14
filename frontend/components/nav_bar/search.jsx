import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: '',
        }
    }
    update(){
        return e => this.setState({search: e.currentTarget.value })
    }

    render(){
        return(
            <div className="search-bar-box">
                <form action="">
                    <input type="text" className="search-text" value={this.state.search} onChange={this.update} />
                </form>
            </div>
        )
    }
}

export default Search;