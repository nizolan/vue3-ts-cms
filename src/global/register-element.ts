import { App } from 'vue'

import 'element-plus/dist/index.css'
import {
  ElAside,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElTabPane,
  ElTabs
} from 'element-plus'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const components = [
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu
]

export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }

  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
