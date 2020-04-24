Basic:
```js
<div style={{ contain: 'strict', height: '32px' }}>
    <WindowsToolbar title="Local Storybook" onMinimize={() => console.log('onMinimize')}
                onMaximize={() => console.log('onMaximize')} onQuit={() => console.log('onQuit')} resizable={true} />
</div>
```

With Menu:
```js
<div style={{ contain: 'strict', height: '32px' }}>
    <WindowsToolbar title="Local Storybook" onMinimize={() => console.log('onMinimize')}
			onShowMenu={() => console.log('onShowMenu')} onMaximize={() => console.log('onMaximize')} onQuit={() => console.log('onQuit')}/>
</div>
```

With Back:
```js
<div style={{ contain: 'strict', height: '32px' }}>
    <WindowsToolbar title="Local Storybook" onMinimize={() => console.log('onMinimize')}
			onBack={() => console.log('onBack')} onMaximize={() => console.log('onMaximize')} onQuit={() => console.log('onQuit')}/>
</div>
```
