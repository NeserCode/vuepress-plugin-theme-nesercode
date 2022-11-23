export interface themeData {
	footer?: {
		display: Boolean
		copyright?: String
		year?: String
		themeInfoDisplay?: Boolean
	}
	adminInfo?: {
		avatar?: String | Boolean
		username?: String | Boolean
		moto?: String | Boolean
		display: Boolean
	}
	subSidebar?: [
		{
			sidebarDepth?: Number
		},
		Boolean
	]
	readingTime?: Boolean
	readingLine?: String | Boolean
	giscusOptions?: {
		repo: `${string}/${string}`
		repoId: string
		category: string
		categoryId: string
		mapping: "url" | "title" | "og:title" | "pathname"
		strict: boolean
		reactions: boolean
		metadata: boolean
		position: "top" | "bottom"
		term?: string
		theme:
			| "light"
			| "light_high_contrast"
			| "light_protanopia"
			| "dark"
			| "dark_high_contrast"
			| "dark_protanopia"
			| "dark_dimmed"
			| "transparent_dark"
			| "preferred_color_scheme"
			| `${string}.css`
			| `https://${string}`
		darkTheme?:
			| "light"
			| "light_high_contrast"
			| "light_protanopia"
			| "dark"
			| "dark_high_contrast"
			| "dark_protanopia"
			| "dark_dimmed"
			| "transparent_dark"
			| "preferred_color_scheme"
			| `${string}.css`
			| `https://${string}`
		lang:
			| "de"
			| "en"
			| "es"
			| "fr"
			| "gsw"
			| "id"
			| "it"
			| "ja"
			| "ko"
			| "pl"
			| "ro"
			| "ru"
			| "tr"
			| "vi"
			| "zh-CN"
			| "zh-TW"
		loading?: boolean
	}
}
