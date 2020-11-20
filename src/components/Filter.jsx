import React, { Component } from 'react'

class Filter extends Component {
    render() {
        return (
            <div className="filter">
                 <div className="filter-result">{this.props.count} Games</div>
                 <div className="filter-sort">
                     Order {" "}
                 <select value={this.props.sort} onChange={this.props.sortProducts}>
                     <option value="latest">Latest</option>
                     <option value="highest">Highest</option>
                     <option value="lowest">Lowest</option>
                 </select>
                 </div>
            </div>
        )
    }
}

export default  Filter;