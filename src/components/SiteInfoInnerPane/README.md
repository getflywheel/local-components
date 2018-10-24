Basic:

```js
const { TableList, TableListRow } = require('../TableList');

<SiteInfoInnerPane>
    <TableList>
        <li className="SiteInfoEnvironment">
            <TableList stripes={false}>
                <TableListRow label="Local Environment" className="LocalEnvironment">
                    Testing&nbsp;<span className="--Color--Gray75">5.0.0</span>
                </TableListRow>

                <TableListRow label="Web Server">nginx</TableListRow>
                <TableListRow label="PHP Version">11.2</TableListRow>
                <TableListRow label="MySQL Version">10.0</TableListRow>
            </TableList>
        </li>
        <TableListRow label="Label">Some Content</TableListRow>
        <TableListRow label="Another Label">More Content</TableListRow>
        <TableListRow label="And Another Label">Some More Content</TableListRow>
    </TableList>
</SiteInfoInnerPane>
```

With `<InnerPaneSidebar />`:

```js
const { TableList, TableListRow } = require('../TableList');
const { InnerPaneSidebar, InnerPaneSidebarHeader, InnerPaneSidebarContent } = require('../InnerPaneSidebar');

<SiteInfoInnerPane>
    <TableList>
        <li className="SiteInfoEnvironment">
            <TableList stripes={false}>
                <TableListRow label="Local Environment" className="LocalEnvironment">
                    Testing&nbsp;
                    <span className="--Color--Gray75">5.0.0</span>
                </TableListRow>

                <TableListRow label="Web Server">nginx</TableListRow>
                <TableListRow label="PHP Version">11.2</TableListRow>
                <TableListRow label="MySQL Version">10.0</TableListRow>
            </TableList>
        </li>
        <TableListRow label="Label">Some Content</TableListRow>
        <TableListRow label="Another Label">More Content</TableListRow>
        <TableListRow label="And Another Label">Some More Content</TableListRow>
    </TableList>

    <InnerPaneSidebar>
        <InnerPaneSidebarHeader title="Notes" />

        <InnerPaneSidebarContent>
            <EmptyArea border={false}>
                No notes added<br />
                to this site<br /><br />
                <Button className="__GrayOutline">+ Add Site</Button>
            </EmptyArea>
        </InnerPaneSidebarContent>
    </InnerPaneSidebar>
</SiteInfoInnerPane>
```
