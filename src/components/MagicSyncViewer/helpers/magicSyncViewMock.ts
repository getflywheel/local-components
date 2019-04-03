import { IDataItem } from '../MagicSyncViewer';

export type ConnectDirectionType = 'push' | 'pull';

export function randomDate () {
	const pastDate = new Date();
	pastDate.setDate(pastDate.getDate()-5);
	return randomDateRange(pastDate, new Date());
}

export function randomDateRange (start: Date, end: Date) {
	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export let idGenCountObjects: number = 0;

interface MockDataNode {
	name: string,
	files: (string | MockDataNode)[];
}

type MockDataType = string | MockDataNode;

export function parseMockFiles (mockData: MockDataNode[], data: IDataItem[] = []): IDataItem[] {
	mockData.forEach((childData: MockDataType) => {
		const filename: string = typeof(childData) === 'string' ? String(childData) : (childData as MockDataNode).name;
		const newFileOrDirectory: IDataItem = {
			index: ++idGenCountObjects,
			filename,
			localDate: filename.length === 13 ? undefined : randomDate(), // mock deleted files
			locked: filename.length === 20,
			flywheelDate: filename.length === 14 ? undefined : randomDate(), // mock added files
			selected: filename.length !== 18 && filename.length !== 20,
		};

		if (typeof(childData) === 'object') {
			newFileOrDirectory.children = [];
			parseMockFiles(childData.files as MockDataNode[], newFileOrDirectory.children);
		}

		data.push(newFileOrDirectory);
	});

	return data;
}

export const mockDataFiles: any[] = [
	{
		name: 'wp-admin',
		files: [
			{
				name: 'css',
				files: [
					{
						name: 'colors',
						files: [
							{
								name: 'blue',
								files: ['colors-rtl.css', 'colors-rtl.min.css', 'colors.css', 'colors.min.css', 'colors.scss'],
							},
							{
								name: 'coffee',
								files: ['colors-rtl.css', 'colors-rtl.min.css', 'colors.css', 'colors.min.css', 'colors.scss'],
							},
							{
								name: 'ectoplasm',
								files: ['colors-rtl.css', 'colors-rtl.min.css', 'colors.css', 'colors.min.css', 'colors.scss'],
							},
							{
								name: 'light',
								files: ['colors-rtl.css', 'colors-rtl.min.css', 'colors.css', 'colors.min.css', 'colors.scss'],
							},
							{
								name: 'midnight',
								files: ['colors-rtl.css', 'colors-rtl.min.css', 'colors.css', 'colors.min.css', 'colors.scss'],
							},
							{
								name: 'ocean',
								files: ['colors-rtl.css', 'colors-rtl.min.css', 'colors.css', 'colors.min.css', 'colors.scss'],
							},
							{
								name: 'sunrise',
								files: ['colors-rtl.css', 'colors-rtl.min.css', 'colors.css', 'colors.min.css', 'colors.scss'],
							},
							'_admin.scss', '_mixins.scss', '_variables.scss',
						],
					},
					'about-rtl.css', 'about-rtl.min.css', 'about.css', 'about.min.css', 'admin-menu-rtl.css', 'admin-menu-rtl.min.css', 'admin-menu.css', 'admin-menu.min.css', 'code-editor-rtl.css', 'code-editor-rtl.min.css', 'code-editor.css', 'code-editor.min', 'color-picker-rtl.css', 'color-picker-rtl.min.css', 'color-picker.css', 'color-picker.min.css', 'common-rtl.css', 'common-rtl.min.css', 'common.css', 'common.min.css', 'customize-controls-rtl.css', 'customize-controls-rtl.min.css', 'customize-controls.css', 'customize-controls.min.css', 'customize-nav-menus-rtl.css', 'customize-nav-menus-rtl.min.css', 'customize-nav-menus.css', 'customize-nav-menus.min.css', 'customize-widgets-rtl.css', 'customize-widgets-rtl.min.css', 'customize-widgets.css', 'customize-widgets.min.css', 'dashboard-rtl.css', 'dashboard-rtl.min.css', 'dashboard.css', 'dashboard.min.css', 'deprecated-media-rtl.css', 'deprecated-media-rtl.min.css', 'deprecated-media.css', 'deprecated-media.min.css', 'edit-rtl.css', 'edit-rtl.min.css', 'edit.css', 'edit.min.css', 'farbtastic-rtl.css', 'farbtastic-rtl.min.css', 'farbtastic.css', 'farbtastic.min.css', 'forms-rtl.css', 'forms-rtl.min.css', 'forms.css', 'forms.min.css', 'ie-rtl.css', 'ie-rtl.min.css', 'ie.css', 'ie.min.css', 'install-rtl.css', 'install-rtl.min.css', 'install.css', 'install.min.css', 'l10n-rtl.css', 'l10n-rtl.min.css', 'l10n.css', 'l10n.min.csslist-tables-rtl.css', 'list-tables-rtl.min.css', 'list-tables.css', 'list-tables.min.css', 'login-rtl.css', 'login-rtl.min.css', 'login.css', 'login.min.css', 'media-rtl.css', 'media-rtl.min.css', 'media.css', 'media.min.css', 'nav-menus-rtl.css', 'nav-menus-rtl.min.css', 'nav-menus.css', 'nav-menus.css', 'revisions-rtl.css', 'revisions-rtl.min.css', 'revisions.css', 'revisions.min.css', 'site-icon-rtl.css', 'site-icon-rtl.min.css', 'site-icon.css', 'site-icon.min.css', 'themes-rtl.css', 'themes-rtl.min.css', 'themes.css', 'themes.min.css', 'widgets-rtl.css', 'widgets-rtl.min.css', 'widgets.css', 'widgets.min.css', 'wp-admin-rtl.css', 'wp-admin-rtl.min.css', 'wp-admin.css', 'wp-admin.min.css',
				],
			},
			{
				name: 'images',
				files: [
					'align-center-2x.png', 'arrows.png', 'generic.png', 'loading.gif', 'menu-2x.png', 'resize-2x.gif', 'stars-2x.png', 'wpspin_light.gif', 'align-center.png', 'browser-rtl.png', 'icons32-2x.png', 'marker.png', 'menu-vs-2x.png', 'resize-rtl-2x.gif', 'stars.png', 'xit-2x.gif', 'align-left-2x.png', 'browser.png', 'icons32-vs-2x.png', 'mask.png', 'menu-vs.png', 'resize-rtl.gif', 'w-logo-blue.png', 'xit.gif', 'align-left.png', 'bubble_bg-2x.gif', 'icons32-vs.png', 'media-button-2x.png', 'menu.png', 'resize.gif', 'w-logo-white.png', 'yes.png', 'align-none-2x.png', 'bubble_bg.gif', 'icons32.png', 'media-button-image.gif', 'no.png', 'se.png', 'wheel.png', 'align-none.png', 'comment-grey-bubble-2x.png', 'imgedit-icons-2x.png', 'media-button-music.gif', 'post-formats-vs.png', 'sort-2x.gif', 'wordpress-logo-white.svg', 'align-right-2x.png', 'comment-grey-bubble.png', 'imgedit-icons.png', 'media-button-other.gif', 'post-formats.png', 'sort.gif', 'wordpress-logo.png', 'align-right.png', 'date-button-2x.gif', 'list-2x.png', 'media-button-video.gif', 'post-formats32-vs.png', 'spinner-2x.gif', 'wordpress-logo.svg', 'arrows-2x.png', 'date-button.gif', 'list.png', 'media-button.png', 'post-formats32.png', 'spinner.gif', 'wpspin_light-2x.gif',
				],
			},
			{
				name: 'includes',
				files: [
					'admin-filters.php', 'class-plugin-installer-skin.php', 'class-wp-filesystem-ftpsockets.php', 'class-wp-site-icon.php', 'image-edit.php', 'plugin.php', 'admin.php', 'class-plugin-upgrader-skin.php', 'class-wp-filesystem-ssh2.php', 'class-wp-terms-list-table.php', 'image.php', 'post.php', 'ajax-actions.php', 'class-plugin-upgrader.php', 'class-wp-importer.php', 'class-wp-theme-install-list-table.php', 'import.php', 'revision.php', 'bookmark.php', 'class-theme-installer-skin.php', 'class-wp-internal-pointers.php', 'class-wp-themes-list-table.php', 'list-table.php', 'schema.php', 'class-automatic-upgrader-skin.php', 'class-theme-upgrader-skin.php', 'class-wp-links-list-table.php', 'class-wp-upgrader-skin.php', 'media.php', 'screen.php', 'class-bulk-plugin-upgrader-skin.php', 'class-theme-upgrader.php', 'class-wp-list-table-compat.php', 'class-wp-upgrader-skins.php', 'menu.php', 'taxonomy.php', 'class-bulk-theme-upgrader-skin.php', 'class-walker-category-checklist.php', 'class-wp-list-table.php', 'class-wp-upgrader.php', 'meta-boxes.php', 'template.php', 'class-bulk-upgrader-skin.php', 'class-walker-nav-menu-checklist.php', 'class-wp-media-list-table.php', 'class-wp-users-list-table.php', 'misc.php', 'theme-install.php', 'class-core-upgrader.php', 'class-walker-nav-menu-edit.php', 'class-wp-ms-sites-list-table.php', 'comment.php', 'ms-admin-filters.php', 'theme.php', 'class-file-upload-upgrader.php', 'class-wp-ajax-upgrader-skin.php', 'class-wp-ms-themes-list-table.php', 'continents-cities.php', 'ms-deprecated.php', 'translation-install.php', 'class-ftp-pure.php', 'class-wp-automatic-updater.php', 'class-wp-ms-users-list-table.php', 'credits.php', 'ms.php', 'update-core.php', 'class-ftp-sockets.php', 'class-wp-comments-list-table.php', 'class-wp-plugin-install-list-table.php', 'dashboard.php', 'nav-menu.php', 'update.php', 'class-ftp.php', 'class-wp-community-events.php', 'class-wp-plugins-list-table.php', 'deprecated.php', 'network.php', 'upgrade.php', 'class-language-pack-upgrader-skin.php', 'class-wp-filesystem-base.php', 'class-wp-post-comments-list-table.php', 'edit-tag-messages.php', 'noop.php', 'user.php', 'class-language-pack-upgrader.php', 'class-wp-filesystem-direct.php', 'class-wp-posts-list-table.php', 'export.php', 'options.php', 'widgets.php', 'class-pclzip.php', 'class-wp-filesystem-ftpext.php', 'class-wp-screen.php', 'file.php', 'plugin-install.php',
				],
			},
			{
				name: 'js',
				files: [
					{
						name: 'widgets',
						files: [
							'custom-html-widgets.js', 'media-audio-widget.js', 'media-gallery-widget.js', 'media-image-widget.js', 'media-video-widget.js', 'media-widgets.js', 'text-widgets.js', 'custom-html-widgets.min.js', 'media-audio-widget.min.js', 'media-gallery-widget.min.js', 'media-image-widget.min.js', 'media-video-widget.min.js', 'media-widgets.min.js', 'text-widgets.min.js'
						],
					},
					'accordion.js', 'customize-controls.js', 'editor.min.js', 'link.js', 'plugin-install.min.js', 'tags-suggest.js', 'user-suggest.min.js', 'accordion.min.js', 'customize-controls.min.js', 'farbtastic.js', 'link.min.js', 'post.js', 'tags-suggest.min.js', 'code-editor.js', 'customize-nav-menus.js', 'gallery.js', 'media-gallery.js', 'post.min.js', 'tags.js', 'widgets.js', 'code-editor.min.js', 'customize-nav-menus.min.js', 'gallery.min.js', 'media-gallery.min.js', 'postbox.js', 'tags.min.js', 'widgets.min.js', 'color-picker.js', 'customize-widgets.js', 'image-edit.js', 'media-upload.js', 'postbox.min.js', 'theme-plugin-editor.js', 'word-count.js', 'color-picker.min.js', 'customize-widgets.min.js', 'image-edit.min.js', 'media-upload.min.js', 'revisions.js', 'theme-plugin-editor.min.js', 'word-count.min.js', 'comment.js', 'dashboard.js', 'inline-edit-post.js', 'media.js', 'revisions.min.js', 'theme.js', 'wp-fullscreen-stub.js', 'comment.min.js', 'dashboard.min.js', 'inline-edit-post.min.js', 'media.min.js', 'set-post-thumbnail.js', 'theme.min.js', 'wp-fullscreen-stub.min.js', 'common.js', 'edit-comments.js', 'inline-edit-tax.js', 'nav-menu.js', 'set-post-thumbnail.min.js', 'updates.js', 'xfn.js', 'common.min.js', 'edit-comments.min.js', 'inline-edit-tax.min.js', 'nav-menu.min.js', 'svg-painter.js', 'updates.min.js', 'xfn.min.js', 'custom-background.js', 'editor-expand.js', 'iris.min.js', 'password-strength-meter.js', 'svg-painter.min.js', 'user-profile.js', 'custom-background.min.js', 'editor-expand.min.js', 'language-chooser.js', 'password-strength-meter.min.js', 'tags-box.js', 'user-profile.min.js', 'custom-header.js', 'editor.js', 'language-chooser.min.js', 'plugin-install.js', 'tags-box.min.js', 'user-suggest.js'
				],
			},
			{
				name: 'maint',
				files: [
					'repair.php',
				],
			},
			{
				name: 'network',
				files: [
					'about.php', 'edit.php', 'menu.php', 'plugins.php', 'settings.php', 'site-new.php', 'site-users.php', 'theme-install.php', 'update.php', 'user-new.php', 'admin.php', 'freedoms.php', 'plugin-editor.php', 'privacy.php', 'setup.php', 'site-settings.php', 'sites.php', 'themes.php', 'upgrade.php', 'users.php', 'credits.php', 'index.php', 'plugin-install.php', 'profile.php', 'site-info.php', 'site-themes.php', 'theme-editor.php', 'update-core.php', 'user-edit.php',
				],
			},
			{
				name: 'user',
				files: [
					'about.php', 'admin.php', 'credits.php', 'freedoms.php', 'index.php', 'menu.php', 'privacy.php', 'profile.php', 'user-edit.php',
				],
			},
			'about.php', 'credits.php', 'edit-link-form.php', 'index.php', 'load-styles.php', 'ms-delete-site.php', 'options.php', 'revision.php', 'upgrade-functions.php', 'admin-ajax.php', 'edit-tag-form.php', 'install-helper.php', 'ms-edit.php', 'network.php', 'plugin-editor.php', 'setup-config.php', 'upgrade.php', 'admin-footer.php', 'custom-background.php', 'edit-tags.php', 'install.php', 'media-new.php', 'ms-options.php', 'options-discussion.php', 'plugin-install.php', 'term.php', 'upload.php', 'admin-functions.php', 'custom-header.php', 'edit.php', 'media-upload.php', 'ms-sites.php', 'options-general.php', 'plugins.php', 'theme-editor.php', 'admin-header.php', 'customize.php', 'export.php', 'link-add.php', 'media.php', 'ms-themes.php', 'options-head.php', 'post-new.php', 'theme-install.php', 'user-edit.php', 'admin-post.php', 'edit-comments.php', 'freedoms.php', 'link-manager.php', 'menu-header.php', 'ms-upgrade-network.php', 'options-media.php', 'post.php', 'themes.php', 'user-new.php', 'admin.php', 'edit-form-advanced.php', 'images', 'link-parse-opml.php', 'menu.php', 'ms-users.php', 'options-permalink.php', 'press-this.php', 'tools.php', 'users.php', 'async-upload.php', 'edit-form-blocks.php', 'import.php', 'link.php', 'moderation.php', 'my-sites.php', 'options-reading.php', 'privacy.php', 'update-core.php', 'widgets.php', 'comment.php', 'edit-form-comment.php', 'load-scripts.php', 'ms-admin.php', 'nav-menus.php', 'options-writing.php', 'profile.php', 'update.php',
		],
	},
	{
		name: 'wp-content',
		files: [
			{
				name: 'plugins',
				files: [
					'index.php',
				],
			},
			{
				name: 'themes',
				files: [
					{
						name: 'twentynineteen',
						// todo - crum
						files: [
							'',
						],
					},
					{
						name: 'twentyseventeen',
						// todo - crum
						files: [
							'',
						],
					},
					{
						name: 'twentysixteen',
						// todo - crum
						files: [
							'',
						],
					},
					'index.php',
				],
			},
			{
				name: 'upgrade',
				files: [],
			},
			{
				name: 'uploads',
				files: [
					{
						name: '2019',
						files: [
							{
								name: '02',
								files: [],
							},
							{
								name: '03',
								files: [],
							},
						],
					},
				],
			},
			'index.php',
		],
	},
	{
		name: 'wp-includes',
		files: [
			{
				name: 'blocks',
				files: [
					'archives.php', 'block.php', 'categories.php', 'latest-comments.php', 'latest-posts.php', 'shortcode.php',
				],
			},
			{
				name: 'certificates',
				files: [
					'ca-bundle.crt',
				],
			},
			{
				name: 'css',
				files: [
					{
						name: 'dist',
						files: [
							{
								name: 'block-library',
								files: [
									'editor-rtl.css', 'editor-rtl.min.css', 'editor.css', 'editor.min.css', 'style-rtl.css', 'style-rtl.min.css', 'style.css', 'style.min.css', 'theme-rtl.css', 'theme-rtl.min.css', 'theme.css', 'theme.min.css',
								],
							},
							{
								name: 'components',
								files: [
									'style-rtl.css', 'style-rtl.min.css', 'style.css', 'style.min.css',
								],
							},
							{
								name: 'edit-post',
								files: [
									'style-rtl.css', 'style-rtl.min.css', 'style.css', 'style.min.css',
								],
							},
							{
								name: 'editor',
								files: [
									'editor-styles-rtl.css', 'editor-styles-rtl.min.css', 'editor-styles.css', 'editor-styles.min.css', 'style-rtl.css', 'style-rtl.min.css', 'style.css', 'style.min.css',
								],
							},
							{
								name: 'format-library',
								files: [
									'style-rtl.css', 'style-rtl.min.css', 'style.css', 'style.min.css',
								],
							},
							{
								name: 'list-reusable-blocks',
								files: [
									'style-rtl.css', 'style-rtl.min.css', 'style.css', 'style.min.css',
								],
							},
							{
								name: 'nux',
								files: [
									'style-rtl.css', 'style-rtl.min.css', 'style.css', 'style.min.css',
								],
							},
						],
					},
					'admin-bar-rtl.css', 'admin-bar-rtl.min.css', 'admin-bar.css', 'admin-bar.min.css', 'buttons-rtl.css', 'buttons-rtl.min.css', 'buttons.css', 'buttons.min.css', 'customize-preview-rtl.css', 'customize-preview-rtl.min.css', 'customize-preview.css', 'customize-preview.min.css', 'dashicons.css', 'dashicons.min.css', 'editor-rtl.css', 'editor-rtl.min.css', 'editor.css', 'editor.min.css', 'jquery-ui-dialog-rtl.css', 'jquery-ui-dialog-rtl.min.css', 'jquery-ui-dialog.css', 'jquery-ui-dialog.min.css', 'media-views-rtl.css', 'media-views-rtl.min.css', 'media-views.css', 'media-views.min.css', 'wp-auth-check-rtl.css', 'wp-auth-check-rtl.min.css', 'wp-auth-check.css', 'wp-auth-check.min.css', 'wp-embed-template-ie.css', 'wp-embed-template-ie.min.css', 'wp-embed-template.css', 'wp-embed-template.min.css', 'wp-pointer-rtl.css', 'wp-pointer-rtl.min.css', 'wp-pointer.css', 'wp-pointer.min.css',
				],
			},
			{
				name: 'customize',
				files: [
					'class-wp-customize-background-image-control.php', 'class-wp-customize-background-image-setting.php', 'class-wp-customize-background-position-control.php', 'class-wp-customize-code-editor-control.php', 'class-wp-customize-color-control.php', 'class-wp-customize-cropped-image-control.php', 'class-wp-customize-custom-css-setting.php', 'class-wp-customize-date-time-control.php', 'class-wp-customize-filter-setting.php', 'class-wp-customize-header-image-control.php', 'class-wp-customize-header-image-setting.php', 'class-wp-customize-image-control.php', 'class-wp-customize-media-control.php', 'class-wp-customize-nav-menu-auto-add-control.php', 'class-wp-customize-nav-menu-control.php', 'class-wp-customize-nav-menu-item-control.php', 'class-wp-customize-nav-menu-item-setting.php', 'class-wp-customize-nav-menu-location-control.php', 'class-wp-customize-nav-menu-locations-control.php', 'class-wp-customize-nav-menu-name-control.php', 'class-wp-customize-nav-menu-section.php', 'class-wp-customize-nav-menu-setting.php', 'class-wp-customize-nav-menus-panel.php', 'class-wp-customize-new-menu-control.php', 'class-wp-customize-new-menu-section.php', 'class-wp-customize-partial.php', 'class-wp-customize-selective-refresh.php', 'class-wp-customize-sidebar-section.php', 'class-wp-customize-site-icon-control.php', 'class-wp-customize-theme-control.php', 'class-wp-customize-themes-panel.php', 'class-wp-customize-themes-section.php', 'class-wp-customize-upload-control.php', 'class-wp-widget-area-customize-control.php', 'class-wp-widget-form-customize-control.php',
				],
			},
			{
				name: 'fonts',
				files: [
					'dashicons.eot', 'dashicons.svg', 'dashicons.ttf', 'dashicons.woff',
				],
			},
			{
				name: 'ID3',
				files: [
					'getid3.lib.php', 'getid3.php', 'license.commercial.txt', 'license.txt', 'module.audio-video.asf.php', 'module.audio-video.flv.php', 'module.audio-video.matroska.php', 'module.audio-video.quicktime.php', 'module.audio-video.riff.php', 'module.audio.ac3.php', 'module.audio.dts.php', 'module.audio.flac.php', 'module.audio.mp3.php', 'module.audio.ogg.php', 'module.tag.apetag.php', 'module.tag.id3v1.php', 'module.tag.id3v2.php', 'module.tag.lyrics3.php', 'readme.txt',
				],
			},
			{
				name: 'images',
				files: [
					{
						name: 'crystal',
						files: [
							'archive.png', 'audio.png', 'code.png', 'default.png', 'document.png', 'interactive.png', 'license.txt', 'spreadsheet.png', 'text.png', 'video.png',
						],
					},
					{
						name: 'media',
						files: [
							'archive.png', 'audio.png', 'code.png', 'default.png', 'document.png', 'interactive.png', 'spreadsheet.png', 'text.png', 'video.png',
						],
					},
					{
						name: 'smilies',
						files: [
							'frownie.png', 'icon_arrow.gif', 'icon_biggrin.gif', 'icon_confused.gif', 'icon_cool.gif', 'icon_cry.gif', 'icon_eek.gif', 'icon_evil.gif', 'icon_exclaim.gif', 'icon_idea.gif', 'icon_lol.gif', 'icon_mad.gif', 'icon_mrgreen.gif', 'icon_neutral.gif', 'icon_question.gif', 'icon_razz.gif', 'icon_redface.gif', 'icon_rolleyes.gif', 'icon_sad.gif', 'icon_smile.gif', 'icon_surprised.gif', 'icon_twisted.gif', 'icon_wink.gif', 'mrgreen.png', 'rolleyes.png', 'simple-smile.png',
						],
					},
					{
						name: 'wlw',
						files: [
							'wp-comments.png', 'wp-icon.png', 'wp-watermark.png',
						],
					},
					'admin-bar-sprite-2x.png', 'admin-bar-sprite.png', 'arrow-pointer-blue-2x.png', 'arrow-pointer-blue.png', 'blank.gif', 'down_arrow-2x.gif', 'down_arrow.gif', 'icon-pointer-flag-2x.png', 'icon-pointer-flag.png', 'rss-2x.png', 'rss.png', 'spinner-2x.gif', 'spinner.gif', 'toggle-arrow-2x.png', 'toggle-arrow.png', 'uploader-icons-2x.png', 'uploader-icons.png', 'w-logo-blue.png', 'wpicons-2x.png', 'wpicons.png', 'wpspin-2x.gif', 'wpspin.gif', 'xit-2x.gif', 'xit.gif',
				],
			},
			{
				name: 'IXR',
				files: [
					'class-IXR-base64.php', 'class-IXR-client.php', 'class-IXR-clientmulticall.php', 'class-IXR-date.php', 'class-IXR-error.php', 'class-IXR-introspectionserver.php', 'class-IXR-message.php', 'class-IXR-request.php', 'class-IXR-server.php', 'class-IXR-value.php',
				],
			},
			{
				name: 'js',
				// todo - crum
				files: [
					'',
				],
			},
			{
				name: 'pomo',
				// todo - crum
				files: [
					'',
				],
			},
			{
				name: 'random_compat',
				// todo - crum
				files: [
					'',
				],
			},
			{
				name: 'Requests',
				// todo - crum
				files: [
					'',
				],
			},
			{
				name: 'rest-api',
				// todo - crum
				files: [
					'',
				],
			},
			{
				name: 'SimplePie',
				// todo - crum
				files: [
					'',
				],
			},
			{
				name: 'Text',
				// todo - crum
				files: [
					'',
				],
			},
			{
				name: 'theme-compat',
				// todo - crum
				files: [
					'',
				],
			},
			{
				name: 'widgets',
				// todo - crum
				files: [
					'',
				],
			},
			'admin-bar.php', 'atomlib.php', 'author-template.php', 'blocks.php', 'bookmark-template.php', 'bookmark.php', 'cache.php', 'canonical.php', 'capabilities.php', 'category-template.php', 'category.php', 'class-IXR.php', 'class-feed.php', 'class-http.php', 'class-json.php', 'class-oembed.php', 'class-phpass.php', 'class-phpmailer.php', 'class-pop3.php', 'class-requests.php', 'class-simplepie.php', 'class-smtp.php', 'class-snoopy.php', 'class-walker-category-dropdown.php', 'class-walker-category.php', 'class-walker-comment.php', 'class-walker-nav-menu.php', 'class-walker-page-dropdown.php', 'class-walker-page.php', 'class-wp-admin-bar.php', 'class-wp-ajax-response.php', 'class-wp-block-parser.php', 'class-wp-block-type-registry.php', 'class-wp-block-type.php', 'class-wp-comment-query.php', 'class-wp-comment.php', 'class-wp-customize-control.php', 'class-wp-customize-manager.php', 'class-wp-customize-nav-menus.php', 'class-wp-customize-panel.php', 'class-wp-customize-section.php', 'class-wp-customize-setting.php', 'class-wp-customize-widgets.php', 'class-wp-dependency.php', 'class-wp-editor.php', 'class-wp-embed.php', 'class-wp-error.php', 'class-wp-feed-cache-transient.php', 'class-wp-feed-cache.php', 'class-wp-hook.php', 'class-wp-http-cookie.php', 'class-wp-http-curl.php', 'class-wp-http-encoding.php', 'class-wp-http-ixr-client.php', 'class-wp-http-proxy.php', 'class-wp-http-requests-hooks.php', 'class-wp-http-requests-response.php', 'class-wp-http-response.php', 'class-wp-http-streams.php', 'class-wp-image-editor-gd.php', 'class-wp-image-editor-imagick.php', 'class-wp-image-editor.php', 'class-wp-list-util.php', 'class-wp-locale-switcher.php', 'class-wp-locale.php', 'class-wp-matchesmapregex.php', 'class-wp-meta-query.php', 'class-wp-metadata-lazyloader.php', 'class-wp-network-query.php', 'class-wp-network.php', 'class-wp-oembed-controller.php', 'class-wp-post-type.php', 'class-wp-post.php', 'class-wp-query.php', 'class-wp-rewrite.php', 'class-wp-role.php', 'class-wp-roles.php', 'class-wp-session-tokens.php', 'class-wp-simplepie-file.php', 'class-wp-simplepie-sanitize-kses.php', 'class-wp-site-query.php', 'class-wp-site.php', 'class-wp-tax-query.php', 'class-wp-taxonomy.php', 'class-wp-term-query.php', 'class-wp-term.php', 'class-wp-text-diff-renderer-inline.php', 'class-wp-text-diff-renderer-table.php', 'class-wp-theme.php', 'class-wp-user-meta-session-tokens.php', 'class-wp-user-query.php', 'class-wp-user.php', 'class-wp-walker.php', 'class-wp-widget-factory.php', 'class-wp-widget.php', 'class-wp-xmlrpc-server.php', 'class-wp.php', 'class.wp-dependencies.php', 'class.wp-scripts.php', 'class.wp-styles.php', 'comment-template.php', 'comment.php', 'compat.php', 'cron.php', 'date.php', 'default-constants.php', 'default-filters.php', 'default-widgets.php', 'deprecated.php', 'embed-template.php', 'embed.php', 'feed-atom-comments.php', 'feed-atom.php', 'feed-rdf.php', 'feed-rss.php', 'feed-rss2-comments.php', 'feed-rss2.php', 'feed.php', 'formatting.php', 'functions.php', 'functions.wp-scripts.php', 'functions.wp-styles.php', 'general-template.php', 'http.php', 'kses.php', 'l10n.php', 'link-template.php', 'load.php', 'locale.php', 'media-template.php', 'media.php', 'meta.php', 'ms-blogs.php', 'ms-default-constants.php', 'ms-default-filters.php', 'ms-deprecated.php', 'ms-files.php', 'ms-functions.php', 'ms-load.php', 'ms-network.php', 'ms-settings.php', 'ms-site.php', 'nav-menu-template.php', 'nav-menu.php', 'option.php', 'pluggable-deprecated.php', 'pluggable.php', 'plugin.php', 'post-formats.php', 'post-template.php', 'post-thumbnail-template.php', 'post.php', 'query.php', 'registration-functions.php', 'registration.php', 'rest-api.php', 'revision.php', 'rewrite.php', 'rss-functions.php', 'rss.php', 'script-loader.php', 'session.php', 'shortcodes.php', 'spl-autoload-compat.php', 'taxonomy.php', 'template-loader.php', 'template.php', 'theme.php', 'update.php', 'user.php', 'vars.php', 'version.php', 'widgets.php', 'wlwmanifest.xml', 'wp-db.php', 'wp-diff.php',
		],
	},
	'index.php', 'license.txt', 'readme.html', 'wp-activate.php', 'wp-blog-header.php', 'wp-comments-post.php', 'wp-config-sample.php', 'wp-config.php', 'wp-cron.php', 'wp-links-opml.php', 'wp-load.php', 'wp-login.php', 'wp-mail.php', 'wp-settings.php', 'wp-signup.php', 'wp-trackback.php', 'xmlrpc.php',
];
