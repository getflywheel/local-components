### macOS:

```js
const { NavLink } = require('react-router-dom');
const { VerticalNavItem, WorkspaceSwitcher } = require('./VerticalNav');
const userData = true;
const isTeam = false;

<div>
    <VerticalNav location={{ pathname: '' }}>
    	<WorkspaceSwitcher
			routeTo="/main/users"
			tooltip="Login"
			workspaces={[
				{
					id: 1,
					isActive: true,
					isTeam: false,
					src: "https://get.pxhere.com/photo/avatar-people-person-business-user-man-character-set-icon-portrait-profile-pictograph-hairstyle-jacket-suit-sunglasses-handsome-head-face-design-concept-symbol-smile-formal-elements-eyewear-vision-care-gentleman-male-shoulder-outerwear-necktie-businessperson-facial-hair-glasses-clip-art-human-behavior-white-collar-worker-neck-1447673.jpg"
				},
				{
					id: 2,
					isTeam: true,
					src: "https://upload.wikimedia.org/wikipedia/commons/1/10/Y_Combinator_Logo.png"
				},
				{
					id: 3,
					isTeam: true,
					isOwner: true,
					src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSRpQpaGpT1tDSZFY5KCxnC91NG3FYR56Fg3sjoQFaJfupST6Wbg"
				},
				{
					id: 4,
					isTeam: true,
					src: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Windscreen_defrost.png"
				},
			]}
		>
		</WorkspaceSwitcher>
		<VerticalNavItem
			tooltip="Local Sites"
			routeTo="/main/site-info"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.08 32"><path d="M4.08 13a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm4 1a1 1 0 1 0-1-1 1 1 0 0 0 1 1zm3 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1zm-6-8h22a1 1 0 0 0 0-2h-22a1 1 0 0 0 0 2zm4-4h14a1 1 0 0 0 0-2h-14a1 1 0 0 0 0 2zm23 9v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h26.08a3 3 0 0 1 3 3zM2 11v5h28.08v-5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1zm28.08 18V18H2v11a1 1 0 0 0 1 1h26.08a1 1 0 0 0 1-1z"></path></svg>
		</VerticalNavItem>
		<VerticalNavItem
			tooltip="Connect to Flywheel"
			routeTo="/main/flywheel"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="27" viewBox="0 0 32 27"><path d="M6 21H5c-2.8 0-5-2.2-5-5 0-2.1 1.3-3.9 3.1-4.6-.1-.5-.1-.9-.1-1.4C3 4.5 7.5 0 13 0c2.9 0 5.6 1.2 7.5 3.4.8-.3 1.6-.4 2.5-.4 5 0 9 4 9 9 0 3.7-2.2 7-5.6 8.3-.5.2-1.1 0-1.3-.6-.2-.5 0-1.1.6-1.3 2.7-1.1 4.4-3.6 4.4-6.5 0-3.9-3.1-7-7-7-.8 0-1.7.2-2.5.5-.4.2-.9 0-1.2-.3C17.8 3.1 15.5 2 13 2c-4.4 0-8 3.6-8 8 0 .6.1 1.2.2 1.8.1.3 0 .5-.1.8s-.4.4-.7.5C3 13.3 2 14.6 2 16c0 1.7 1.3 3 3 3h1c.6 0 1 .4 1 1s-.4 1-1 1zM16 27c-.2 0-.3 0-.4-.1l-6-3c-.5-.2-.7-.8-.4-1.3.2-.5.8-.7 1.3-.4l5.6 2.8 5.6-2.8c.5-.2 1.1 0 1.3.4.2.5 0 1.1-.4 1.3l-6 3c-.3.1-.4.1-.6.1z"></path><path d="M16 14.5c-.4 0-.8-.2-1.1-.4-.1-.1-.1-.2-.2-.2 0-.1-.1-.2-.1-.3 0-.1-.1-.2-.1-.3V13v-.3c0-.1 0-.2.1-.3 0-.1.1-.2.1-.3.1-.1.1-.2.2-.2l.2-.2c.1-.1.2-.1.3-.1.1 0 .2-.1.3-.1h.6c.1 0 .2 0 .3.1.1 0 .2.1.3.1.1.1.2.1.2.2l.2.2c0 .1.1.2.1.3 0 .1.1.2.1.3v.6c0 .1 0 .2-.1.3 0 .1-.1.2-.1.3-.1.1-.1.2-.2.2-.3.2-.7.4-1.1.4zM16 23c-.2 0-.3 0-.4-.1l-4-2c-.5-.2-.7-.8-.4-1.3.2-.5.8-.7 1.3-.4l3.6 1.8 3.6-1.8c.5-.2 1.1 0 1.3.4.2.5 0 1.1-.4 1.3l-4 2c-.3.1-.4.1-.6.1zM16 19c-.2 0-.3 0-.4-.1l-2-1c-.5-.2-.7-.8-.4-1.3.2-.5.8-.7 1.3-.4l1.6.8 1.6-.8c.5-.2 1.1 0 1.3.4.2.5 0 1.1-.4 1.3l-2 1c-.3.1-.4.1-.6.1z"></path></svg>
		</VerticalNavItem>
		<VerticalNavItem
			className='VerticalNavItem_Addons'
			tooltip="Add-ons"
			routeTo="/main/marketplace"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.605 33.977"><path d="M22.271 31.146l-1.932-.518a2.946 2.946 0 0 1-2.121-3.675l.104-.386a2.106 2.106 0 0 1 .82-1.127 2.226 2.226 0 0 0 .819-1.126 2.127 2.127 0 0 0-.288-1.63 2.09 2.09 0 0 0-1.538-.827 1.91 1.91 0 0 0-1.96 1.131 2.155 2.155 0 0 0 .042 1.772 2.106 2.106 0 0 1 .147 1.385l-.078.29a2.946 2.946 0 0 1-3.675 2.121l-1.932-.518a2.946 2.946 0 0 1-2.121-3.675l1.036-3.864-1.352-.363a4 4 0 0 1-2.771.293 4.1 4.1 0 0 1-2.632-2.155 3.932 3.932 0 0 1-.015-3.421 4.058 4.058 0 0 1 3.92-2.263A3.932 3.932 0 0 1 9.7 14.314l1.449.389.518-1.932a2.946 2.946 0 0 1 3.675-2.121l2.898.777.363-1.352a4 4 0 0 1-.293-2.771 4.1 4.1 0 0 1 2.155-2.632 3.932 3.932 0 0 1 3.421-.015 4.058 4.058 0 0 1 2.263 3.92 3.932 3.932 0 0 1-1.724 2.955l-.389 1.449 2.898.777a2.946 2.946 0 0 1 2.121 3.675l-.518 1.932 1.352.363a3.932 3.932 0 0 1 3.421-.015 3.971 3.971 0 0 1 .539 6.875 3.75 3.75 0 0 1-3.261.575 4 4 0 0 1-2.253-1.64l-1.352-.362-1.036 3.864a2.946 2.946 0 0 1-3.675 2.121zm-3.206-11.214a3.893 3.893 0 0 1 2.828 4.9 4 4 0 0 1-1.64 2.253l-.103.386a.945.945 0 0 0 .707 1.225l1.932.518a.945.945 0 0 0 1.225-.707l1.036-3.864a2.006 2.006 0 0 1 2.45-1.414l1.352.363a2.106 2.106 0 0 1 1.127.82 2.226 2.226 0 0 0 1.126.819 2.127 2.127 0 0 0 1.63-.288 2.007 2.007 0 0 0 .827-1.538 1.91 1.91 0 0 0-1.131-1.96 2.155 2.155 0 0 0-1.772.042 2.106 2.106 0 0 1-1.385.147l-1.256-.337a2.006 2.006 0 0 1-1.414-2.45l.518-1.932a.945.945 0 0 0-.707-1.225l-2.898-.777a2.006 2.006 0 0 1-1.414-2.45l.363-1.352a2.106 2.106 0 0 1 .82-1.127 2.155 2.155 0 0 0 .923-1.512 1.91 1.91 0 0 0-1.132-1.96 2.09 2.09 0 0 0-1.745-.054 2.575 2.575 0 0 0-1.091 1.364 2.226 2.226 0 0 0 .146 1.385 2.106 2.106 0 0 1 .147 1.386l-.363 1.352a2.006 2.006 0 0 1-2.45 1.414l-2.898-.777a.945.945 0 0 0-1.225.707l-.518 1.932a2.006 2.006 0 0 1-2.45 1.414l-1.352-.363a2.106 2.106 0 0 1-1.127-.82 2.155 2.155 0 0 0-1.512-.923 1.91 1.91 0 0 0-1.96 1.132 2.09 2.09 0 0 0-.054 1.745 2.36 2.36 0 0 0 1.364 1.091 2.226 2.226 0 0 0 1.385-.146 2.106 2.106 0 0 1 1.386-.147l1.352.363a2.006 2.006 0 0 1 1.414 2.45l-1.036 3.864a.945.945 0 0 0 .707 1.225l1.932.518a.945.945 0 0 0 1.225-.707l.104-.386a3.971 3.971 0 0 1 3.905-5.684 1.7 1.7 0 0 1 .702.085z"></path></svg>
		</VerticalNavItem>
		<VerticalNavItem type="filler" />
		<VerticalNavItem
			navLinkActiveClassName="none"
			routeTo="/main/add-site"
        	tooltip="Add Local Site"
			type="addsite"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 13h10a1 1 0 1 0 0-2H13V1a1 1 0 0 0-2 0v10H1a1 1 0 1 0 0 2h10v10a1 1 0 1 0 2 0z"></path></svg>
		</VerticalNavItem>
    </VerticalNav>
</div>
```

### Windows:

_Note the lack of top padding._

```js
<div className="__OsWindows" style={{ height: '300px' }}>
    <VerticalNav location={{ pathname: '' }}>
		<FlyTooltip
			content="Local Sites"
			position="right"
			hoverIntent={true}
		>
			<a>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.08 32"><path d="M4.08 13a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm4 1a1 1 0 1 0-1-1 1 1 0 0 0 1 1zm3 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1zm-6-8h22a1 1 0 0 0 0-2h-22a1 1 0 0 0 0 2zm4-4h14a1 1 0 0 0 0-2h-14a1 1 0 0 0 0 2zm23 9v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h26.08a3 3 0 0 1 3 3zM2 11v5h28.08v-5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1zm28.08 18V18H2v11a1 1 0 0 0 1 1h26.08a1 1 0 0 0 1-1z"></path></svg>
			</a>
		</FlyTooltip>
    </VerticalNav>
</div>
```
