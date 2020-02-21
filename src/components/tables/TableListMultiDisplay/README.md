Basic:

```js
const { Fragment } = require('react');

const header = (
    <Fragment>
        <strong className="TableListRowHeader__SeparatorRight" style={{ width: '33%' }}>Column 1</strong>
        <strong style={{ width: '33%' }}>Column 2</strong>
        <strong style={{ width: '33%' }}>Column 3</strong>
    </Fragment>
);

const repeatingContent = (item, index, updateItem) => (
    <Fragment>
        <div className="TableListRowHeader__SeparatorRight TableListRow__Input">
            <input placeholder="Column 1" value={item.column1} onChange={(e) => {
                item.column1 = e.target.value;
                updateItem(item);
            }}/>
        </div>

        <div className="TableListRow__Input">
            <input placeholder="I am a dumb input and won't store data."/>
        </div>

        <div>
            <FlySelect placeholder="– Select Something –" value={item.column3} options={['Test 1', 'Test 2']}
                       onChange={(value) => {
                           item.column3 = value;
                           updateItem(item);
                       }}/>
        </div>
    </Fragment>
);

<TableListRepeater header={header} repeatingContent={repeatingContent}
                      onSubmit={() => console.log('onSubmit')}
                      submitLabel="Submit This Stuff!"
                      labelSingular="Item"
                      itemTemplate={{
                          column1: '',
                          column3: 'Test 2',
                      }}/>
```

No Submit:
```js
const { Fragment } = require('react');

const header = (
    <Fragment>
        <strong className="TableListRowHeader__SeparatorRight" style={{ width: '33%' }}>Column 1</strong>
        <strong style={{ width: '33%' }}>Column 2</strong>
        <strong style={{ width: '33%' }}>Column 3</strong>
    </Fragment>
);

const repeatingContent = (item, index, updateItem) => (
    <Fragment>
        <div className="TableListRowHeader__SeparatorRight TableListRow__Input">
            <input placeholder="Column 1" value={item.column1} onChange={(e) => {
                item.column1 = e.target.value;
                updateItem(item);
            }}/>
        </div>

        <div className="TableListRow__Input">
            <input placeholder="I am a dumb input and won't store data."/>
        </div>

        <div>
            <FlySelect placeholder="– Select Something –" value={item.column3} options={['Test 1', 'Test 2']}
                       onChange={(value) => {
                           item.column3 = value;
                           updateItem(item);
                       }}/>
        </div>
    </Fragment>
);

<TableListRepeater header={header} repeatingContent={repeatingContent}
                          labelSingular="Item"
                          onChange={() => console.log('onChange')}
                          itemTemplate={{
                              column1: '',
                              column3: 'Test 2',
                          }}/>
```

No Header:
```js
const { Fragment } = require('react');

const repeatingContent = (item, index, updateItem) => (
    <Fragment>
        <div className="TableListRowHeader__SeparatorRight TableListRow__Input">
            <input placeholder="Column 1" value={item.column1} onChange={(e) => {
                item.column1 = e.target.value;
                updateItem(item);
            }}/>
        </div>

        <div className="TableListRow__Input">
            <input placeholder="I am a dumb input and won't store data."/>
        </div>

        <div>
            <FlySelect placeholder="– Select Something –" value={item.column3} options={['Test 1', 'Test 2']}
                       onChange={(value) => {
                           item.column3 = value;
                           updateItem(item);
                       }}/>
        </div>
    </Fragment>
);

<TableListRepeater repeatingContent={repeatingContent}
                      onSubmit={() => console.log('onSubmit')}
                      submitLabel="Submit This Stuff!"
                      labelSingular="Item"
                      itemTemplate={{
                          column1: '',
                          column3: 'Test 2',
                      }}/>
```
