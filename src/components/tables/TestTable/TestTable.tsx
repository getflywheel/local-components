import * as React from "react";

export default class TestTable extends React.Component {
	render() {
		let text = "hello";

		return (
			<div>
				{text}
				<p>{text}</p>
			</div>
		);
	}
}
