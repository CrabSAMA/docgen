# bigDataMenu

大数据头部菜单

## Props


|Name|Description|Type|Required|Value|Default|Since|
|---|---|---|---|---|---|---|
|systemTitle|必填，配置系统名称|`String`|`false`|-|-|-|
|logo|必填，配置系统的logo|`String`|`false`|-|-|-|
|homeUrl|必填，点击系统名称和icon时返回首页|`String`|`false`|-|-|-|
|isShowHomeHeader|非必填，是否展示头部|`Boolean`|`false`|-|true|-|
|isShowSearch|非必填，是否显示搜索框|`Boolean`|`false`|-|false|-|
|isShowPersonCenter|非必填，是否显示【个人中心】|`Boolean`|`false`|-|false|-|
|isShowAdviceBtn|非必填，是否显示【反馈】|`Boolean`|`false`|-|false|-|
|isShowKnowledgeBtn|非必填，是否显示【知识库】按钮|`Boolean`|`false`|-|false|-|
|backgroundColor|非必填，配置菜单的背景色|`String`|`false`|-|rgba(38, 42, 54, 1)|-|
|size|侧边栏菜单尺寸|`String`|`false`|small, mini, middle|small|-|
|mode|侧边栏菜单模式|`String`|`false`|horizontal, vertical|horizontal|0.0.18|
|headMenuApi|头部菜单请求地址，默认请求pmc对应的登录接口|`String`|`false`|-|-|0.0.22|
|logoutApi|登出请求地址，默认请求pmc对应的登出接口|`String`|`false`|-|-|0.0.22|
|loginUrl|登录页面URL，默认返回dsp的登录页面|`String`|`false`|-|-|0.0.22|
|logoutCallBack|登出后回调方法|`Function`|`false`|-|-|-|
|systemName|系统展示的名称|`Object`|`false`|-|{"show_name_cn":"","show_name_en":""}|-|
|languageChangeCallback|选择语言后的回调方法|`Function`|`false`|-|-|-|
|isShowHeadMenu|是否展示头部菜单|`Boolean`|`false`|-|true|-|
|isShowVersion|是否展示版本|`Boolean`|`false`|-|false|-|
|isShowLocation|是否展示 Location|`Boolean`|`false`|-|false|-|
|version|版本|`String`|`false`|-|old|-|
|settingUrl|？？？|`String`|`false`|-|-|-|
|storeNamespaced|？？？|`String`|`false`|-|-|-|




## Events


|Event Name|Description|Parameters|
|---|---|---|
|menuWidthChange|折叠菜单时触发，返回当前菜单的width|`number` 当前菜单的width|




## Slots


|Name|Description|Default Slot Content|
|---|---|---|
|location|location slot|-|




