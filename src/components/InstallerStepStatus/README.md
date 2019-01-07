```js
<div style={{ width: '50px', height: '70px', position: 'relative' }}>
    <InstallerStepStatus />
</div>
```

In Progress:

```js
<div style={{ width: '50px', height: '70px', position: 'relative' }}>
    <InstallerStepStatus inProgress={true} />
</div>
```

In Progress (Requires Attention):

```js
<div style={{ width: '50px', height: '70px', position: 'relative' }}>
    <InstallerStepStatus inProgress={true} requiresAttention={true} />
</div>
```

Ready:

```js
<div style={{ width: '50px', height: '70px', position: 'relative' }}>
    <InstallerStepStatus ready={true}  />
</div>
```
