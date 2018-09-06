import React, {Component} from 'react';
import {CapitalLetter} from '../HOCs/CapitalLetter';

class BlockTitle {
    render(){

        return(
            <span>{this.props.children}</span>
        )
    }
}

export default CapitalLetter(BlockTitle);
