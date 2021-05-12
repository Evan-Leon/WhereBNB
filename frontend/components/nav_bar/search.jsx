import React from 'react';

class Search extends React.Component{


    render(){
        return(
            <div className="search-bar-box">
                <form action="">
                    <input type="text" className="search-text" value="Search..." />
                </form>
            </div>
        )
    }
}

export default Search;