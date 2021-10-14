import React, { Component } from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class TabContent extends Component {
    render() {
        const selected = this.props.tab.selected === this.props.id
        return (
            <div id={this.props.id}
                className={`tab-pane ${selected ? 'active' : ''}`}
            >{ /*id ligado ao target do id no tabAction*/}
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab })
export default connect(mapStateToProps)(TabContent)