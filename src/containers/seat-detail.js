import React, { Component } from 'react';
import {connect} from 'react-redux';

class SeatDetail extends Component {
    render() {
        if (!this.props.seat) {
            return <div>Select a Seat to get started.</div>
        }

        return (
            <div>
                <h3>Details for the Seat:</h3>
                <div className="seat">You select the Number: {this.props.seat.number}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        seat: state.activeSeat
    };
}

export default connect(mapStateToProps)(SeatDetail);