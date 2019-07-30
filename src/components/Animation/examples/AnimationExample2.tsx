import * as React from 'react';
import * as styles from './AnimationExample2.scss';
import { Animate } from 'react-move';
import Button from '../../Button';

interface IState {
	doShowModal: boolean;
}

export default class AnimationExample2 extends React.Component<any, IState> {
	constructor (props: any) {
		super(props);

		this.state = {
			doShowModal: false,
		};
	}

	protected _hideModal = () => {
		this.setState({
			doShowModal: false,
		});
	}

	protected _showModal = () => {
		this.setState({
			doShowModal: true,
		});
	}

	render () {
		return (
			<div className={styles.Example}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Proin sed libero enim sed faucibus. Sed cras ornare arcu dui vivamus arcu felis bibendum ut.
					Scelerisque eu ultrices vitae auctor eu augue ut. Risus nec feugiat in fermentum posuere urna nec tincidunt.
					Tortor dignissim convallis aenean et tortor. Sagittis vitae et leo duis ut.
				</p>
				<p>
					Integer vitae justo eget magna fermentum iaculis eu.
					Orci phasellus egestas tellus rutrum tellus pellentesque.
					Non pulvinar neque laoreet suspendisse.
					A arcu cursus vitae congue mauris rhoncus aenean vel.
					Quam pellentesque nec nam aliquam sem.
					Eu consequat ac felis donec.
					Sit amet nisl purus in.
					Integer vitae justo eget magna fermentum iaculis eu.
					Eget nulla facilisi etiam dignissim diam.
					Ut venenatis tellus in metus vulputate eu scelerisque.
					Montes nascetur ridiculus mus mauris.
					Integer vitae justo eget magna fermentum iaculis.
					Cursus in hac habitasse platea dictumst.
				</p>
				<Button
					className="__Green"
					onClick={this._showModal}
				>
					Show Modal
				</Button>
				<br />
				<br />
				<Animate
					show={this.state.doShowModal}
					start={{
						y: [100],
					}}
					enter={{
						y: [0],
					}}
					// update={d => ({
					// 	height: [40],
					// 	opacity: [1],
					// })}
					leave={{
						y: [100],
					}}
				>
					{({ y }) => {
						return (
							<div
								className={styles.Modal}
								style={{
									transform: `translateY(${y}%)`,
								}}
							>
								<p>
									Hello Modal Content!
								</p>
								<br />
								<Button
									className=""
									onClick={this._hideModal}
								>
									Hide Modal
								</Button>
							</div>
						);
					}}
				</Animate>
			</div>
		);
	}
}