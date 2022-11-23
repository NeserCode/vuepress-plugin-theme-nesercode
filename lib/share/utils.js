import defaultThemeOptions from "./defaultThemeOptions.js"

const assign = (a, b) => Object.assign(a, b)

export function generateThemeOptions(options) {
	if (options === null) return defaultThemeOptions

	const {
		adminInfo,
		footer,
		subSidebar,
		readingTime,
		readingLine,
		giscusOptions,
	} = options
	return {
		footer: assign(defaultThemeOptions.footer, footer ?? {}),
		adminInfo: assign(defaultThemeOptions.adminInfo, adminInfo ?? {}),
		subSidebar: !!subSidebar,
		readingTime: !!readingTime,
		readingLine: !!readingLine,
		giscusOptions: assign(
			defaultThemeOptions.giscusOptions,
			giscusOptions ?? {}
		),
	}
}
