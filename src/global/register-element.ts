import { App } from 'vue'

import 'element-plus/dist/index.css'
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElIcon,
  ElInput,
  ElLink,
  ElTabPane,
  ElTabs
} from 'element-plus'

const components = [
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElCheckbox,
  ElLink
]

export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
