import hButton from './hButton/index'
import hTest from './hTest/index'

const components = [hButton, hTest]

function install(Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { install, hButton, hTest }

export default {
  install,
  hButton,
  hTest
}
