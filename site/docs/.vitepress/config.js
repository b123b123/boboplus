export default {
	themeConfig: {
		siteTitle: "boboplus",
		nav: [
			{ text: "指南", link: "/guild/" },
			{ text: "组件", link: "/components/button/" },
		],
		socialLinks: [{ icon: "github", link: "https://github.com/b123b123/boboplus" }],
		sidebar: {
			"/guild/": [
				{
					text: "基础",
					items: [
						{
							text: "安装",
							link: "/guild/installation/index.md",
						},
						{
							text: "快速开始",
							link: "/guild/quickstart.md",
						},
					],
				},
				{
					text: "进阶",
					items: [
						{
							text: "进阶一",
							link: "/guild/more/moreone.md",
						},
					],
				},
			],
			"/components/": [
				{
					text: "基础组件",
					items: [
						{
							text: "Button",
							link: "/components/button/index.md",
						},
					],
				},
			],
		},
	},
};
