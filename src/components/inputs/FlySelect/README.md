Basic (Options = Array):
```js
<FlySelect options={['Test 1', 'Test 2']} onChange={() => console.log('onChange')} value="Test 1" />
```

Basic (Options = Object):
```js
<FlySelect options={{
    'a': 'Example A',
    'b': 'Example B',
}} onChange={() => console.log('onChange')} value="b" />
```

Has secondary text and various option icons:
```js
<div>
    <FlySelect style={{width: '350px'}} options={{
        'a': {
            label: 'Example A',
            secondaryText: 'This is a test',
            download: true,
        },
        'c': {
        	label: 'Example B',
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 13h10a1 1 0 1 0 0-2H13V1a1 1 0 0 0-2 0v10H1a1 1 0 1 0 0 2h10v10a1 1 0 1 0 2 0z"></path></svg>,
		},
    }} onChange={() => console.log('onChange')} value="a" />
</div>
```

Placeholder:
```js
<FlySelect options={[
    'Example C',
    'Example D',
]} onChange={() => console.log('onChange')} placeholder="Select Something!" />
```

Constrained Width:
```js
<div style={{width: '150px'}}>
    <FlySelect options={[
        'Example C Testing 123',
        'Example D Testing 123',
    ]} onChange={() => console.log('onChange')} placeholder="Select Something!" />
</div>
```

Using an Avatar within a form FlySelect:
```js
import Avatar from '../../media/Avatar';

<div>
	<div className="FormRow">
		<div className="FormField">			
			<FlySelect 
				style={{width: '350px'}} 
				options={{
					'a': {
						label: 'Me',
						icon: (
							<Avatar
								size="s"
								src="https://getflywheel.com/wp-content/uploads/2015/02/flyheadshots-4-copy.jpg"
								type="user"
							/>
						),
					},
					'c': {
						label: 'Flywheel',
						icon: (
							<Avatar
								size="s"
								src="https://avatars2.githubusercontent.com/u/2371558?s=400&v=4"
								type="team"
							/>
						),
					},
				}} 
				onChange={() => console.log('onChange')} 
				value="a" 
			/>
		</div>
	</div>
</div>


