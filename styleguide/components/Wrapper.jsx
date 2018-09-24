import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ShadowDOM from 'react-shadow';
import { MemoryRouter } from 'react-router-dom';

export default class Wrapper extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        onError: PropTypes.func.isRequired,
    };

    componentDidCatch(error) {
        this.props.onError(error);
    }

    render() {
        return <ShadowDOM include={['style.css']}>
            <div>
                <div id="styleguide-container" style={{ position: 'relative' }}>
                    {/*wrap every component with router, even if not needed, so it doesn't have to be included in individual component examples*/}
                    <MemoryRouter>
                        {this.props.children}
                    </MemoryRouter>
                </div>
            </div>
        </ShadowDOM>;
    }
}
