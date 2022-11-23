import { generateThemeOptions } from "../share/utils.js"

export const useThemePlugin =
	(options) =>
		(app) => {
			return {
				name: `theme-plugin-nesercode`,

				onInitialized: async (app) => {
					const tagMap = new Map()
					// 依据内容时间进行排序，也可以在这一步过滤掉不符的内容
					const articleSort = (a, b) =>
						a.frontmatter.date > b.frontmatter.date ? -1 : 1
					let articles = app.pages.sort((a, b) => articleSort(a, b))
					// 排除非文章页面
					articles = articles.filter((item) => item.path.startsWith("/blog/"))
					// 处理置顶文章
					articles = articles.sort((a, b) => {
						if (
							(a.frontmatter.isPinned || a.frontmatter.pinned) &&
							(b.frontmatter.isPinned || b.frontmatter.pinned)
						)
							return articleSort(a, b)
						else if (a.frontmatter.isPinned || a.frontmatter.pinned) return -1
						else if (b.frontmatter.isPinned || b.frontmatter.pinned) return 1
						else return articleSort(a, b)
					})

					articles.forEach((item, index) => {
						// 处理上一页下一页，在主题模板中可以读取到这个数据
						if (index !== 0) {
							const { path, title } = articles[index - 1]
							articles[index].data.prev = { path, title }
						}
						if (index !== articles.length - 1) {
							const { path, title } = articles[index + 1]
							articles[index].data.next = { path, title }
						}
					})

					await app.writeTemp(
						"articles.js",
						`export const acticles = ${JSON.stringify(articles)}`
					)
				},

				extendsPage: (page) => {
					page.data.themeDataPlugin = generateThemeOptions(options ?? null)
				},
			}
		}
