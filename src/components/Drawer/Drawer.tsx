import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Drawer.sass';

export default class Drawer extends React.Component {
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
            <div className={classnames(styles.DrawerContainer)}>
                <div
					className={classnames(
						styles.Drawer,
						this.props.className,
						{
							[styles.Drawer__Show]: this.props.show,
							[styles.Drawer__DisableAnimation]:  this.state.disableAnimation,
							[styles.Drawer__AlignLeft]: this.props.align === 'left',
							[styles.Drawer__AlignCenter]: this.props.align === 'center' || !this.props.align,
							[styles.Drawer__AlignRight]: this.props.align === 'right',
						}
                	)}
				>
                    {this.props.children}
                </div>
            </div>
        );
    }

}


