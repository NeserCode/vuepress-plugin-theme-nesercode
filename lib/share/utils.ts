import type { useThemePluginOptions } from "../node"
import defaultThemeOptions from "./defaultThemeOptions"

function assign(a: any, b: any) {
	return Object.assign(a, b)
}

export function generateThemeOptions(
	options: useThemePluginOptions | null
): Object {
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
