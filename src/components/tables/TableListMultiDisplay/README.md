Basic:

```js
<TableListMultiDisplay
					header={
						<>
							<strong style={{ width: "10%" }}>Title 1</strong>
							<strong style={{ width: "30%" }}>Title 2</strong>
							<strong style={{ width: "30%" }}>Title 3</strong>
							<strong style={{ width: "20%" }}>Title 4</strong>
						</>
					}
					repeatingContent={(item, index, updateItem) => (
						<>
							<div>{item.prop1}</div>

							<div>
								{item.prop2}
							</div>

							<div>
								{item.prop3}
							</div>

							<div>
								<p>
									{item.prop4}
								</p>
							</div>
						</>
					)}
					onSubmit={console.log("Submitted!")}
					submitLabel={"Submit"}
					data={this.state.myRepeatingContentArray}
				/>
```