import React, { Component } from 'react';

import classes from './Card.module.css';
import CardBody from './CardBody/CardBody';
import CardHeader from './CardHeader/CardHeader';

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false
        }
    }

    showMenu = () => {
        const show = !this.state.showMenu
        this.setState({showMenu: show})
    }

    render() {
        return (
            <div className={classes.Card}>
                <CardHeader
                    id={this.props.id}
                    type={this.props.type}
                    title={this.props.name}
                    history={this.props.history}
                    deleted={this.props.deleted}
                    menuClicked={this.showMenu}
                    
                />
                <CardBody
                    id={this.props.id}
                    type={this.props.type}
                    info={this.props.body}
                    history={this.props.history}
                    showMenu={this.state.showMenu}
                    sendClicked={this.props.sendEmail}
                />
            </div>
        );
    }
}

export default Card;
