import React, { Component } from 'react';

export default class ItemListContainer extends Component {
    render() {
        return (
            <h1>
                {this.props.nombre}
            </h1>
        )
    }
}