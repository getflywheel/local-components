import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ShadowDOM from 'react-shadow';

export default class Wrapper extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        onError: PropTypes.func.isRequired,
    };

    componentDidCatch(error) {
        this.props.onError(error);
    }

    render() {
        return <ShadowDOM include={['style.css', 'dist/boom.css']}>
            <div>
                <div id="styleguide-container" style={{ position: 'relative' }}>
                    {this.props.children}
                </div>
            </div>
        </ShadowDOM>;
    }
}
