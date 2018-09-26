import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Drawer extends Component {
    static propTypes = {
        align: PropTypes.oneOf(['left','center', 'right']),
        children: PropTypes.node.isRequired,
        show: PropTypes.bool,
    };

    constructor(props) {
        super(props);

        this.state = {
            disableAnimation: true
        };
    };

    componentWillReceiveProps (nextProps) {
        if(nextProps.show) {
            this.setState({
                disableAnimation: false
            });
        }
    }

    render () {
        return (
            <div className={classnames({ 'DrawerContainer': true })}>
                <div className={classnames(
                    {
                        'Drawer': true,
                        '--show': this.props.show,
                        '--disableAnimation':  this.state.disableAnimation,
                        '--alignLeft': this.props.align === 'left',
                        '--alignCenter': this.props.align === 'center' || !this.props.align,
                        '--alignRight': this.props.align === 'right',
                    },
                    this.props.className
                )}>
                    {this.props.children}
                </div>
            </div>
        );
    }

}


