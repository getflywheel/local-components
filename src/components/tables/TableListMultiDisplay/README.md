TableListMultiDisplay lets you pass in an array of data that needs to be displayed as rows in a table. Unlike TableListRepeater, it does not include buttons for the user to add and delete rows. The action button is hidden by default but can be shown with the `noActionButton={false}` prop.

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
					noActionButton={false}
					data={[
						{prop1:"Fiat", prop2:"100", prop3:"100", prop4:"100"},
						{prop1:"Chevy", prop2:"100", prop3:"100", prop4:"100"}
					]}
				/>
```
```
