import * as React from 'react';
import PropTypes from 'prop-types';
import { MemoryRouter } from 'react-router-dom';

export default class Wrapper extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        onError: PropTypes.func.isRequired,
    };

    componentDidCatch(error) {
        this.props.onError(error);
    }

    render() {
        return <div>
                <div id="styleguide-container" className="Theme__Light" style={{ position: 'relative' }}>
                    {/*wrap every component with router, even if not needed, so it doesn't have to be included in individual component examples*/}
                    <MemoryRouter>
                        {this.props.children}
                    </MemoryRouter>
                </div>
            </div>;
    }
}
