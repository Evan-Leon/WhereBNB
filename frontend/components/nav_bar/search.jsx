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

    handleSubmit(e){

    }

    render(){
        return(
            <div className="search-bar-box">
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text" className="search-text" placeholder="Start your search" value={this.state.search} onChange={this.update} />
                </form>
            </div>
        )
    }
}

export default Search;