import * as React from 'react';
import * as styles from './AnimationExample.scss';
import { NodeGroup } from 'react-move';
import Button from '../../Button';

interface IState {
	items: number[];
}

export default class AnimationExample extends React.Component<any, IState> {
	protected _count: number = 0;

	constructor (props: any) {
		super(props);

		this.state = {
			items: this.makeItems(),
		};
	}

	shuffle (array: any[]) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	removeItem = (index: number) => {
		index = index || 0;
		this.setState({
			items: this.state.items.filter((_, i) => i !== index),
		});
	}

	addOne = () => {
		this.setState(state => {
			const items = [this._count++].concat(state.items);

			return {
				items,
			};
		});
	}

	makeItems () {
		let items = [];
		for (let i = 0; i < 10; i++) {
			items.push(this._count++);
		}
		return items;
	}

	render () {
		let { items } = this.state;

		return (
			<div>
				<Button
					className="__Green"
					onClick={this.addOne}
				>
					Insert First
				</Button>
				<Button
					className="__Red"
					onClick={() => this.removeItem(0)}
				>
					Remove First
				</Button>
				<NodeGroup
					data={items}
					keyAccessor={d => d}
					start={d => ({
						height: [0],
						opacity: [0],
					})}
					enter={d => ({
						height: [40],
						opacity: [1],
					})}
					update={d => ({
						height: [40],
						opacity: [1],
					})}
					leave={d => ({
						height: [0],
						opacity: [0],
					})}
				>
					{(group) => (
						<div className={styles.List}>
							{group.map((node, index) => (
								<div
									className={styles.List_Row}
									key={node.key}
									style={{
										height: `${node.state.height}px`,
										opacity: node.state.opacity,
									}}
								>
									<div className={styles.List_Row_Content}>
										{node.key}
									</div>
								</div>
							))}
						</div>
					)}
				</NodeGroup>
			</div>
		);
	}
}