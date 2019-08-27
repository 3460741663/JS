<template>
<!-- 容器组件 -->
  <Menu>
    <template v-for="menu in data">
      <MenuItem :key="menu.id" v-if="!menu.children">
        {{ menu.title }}
      </MenuItem>
      <ReSubMenu v-else :key="menu.id" :data="menu">
      </ReSubMenu>
    </template>
  </Menu>
</template>

<script>
import Menu from './Menu'
import MenuItem from './MenuItem'
import ReSubMenu from './ReSubMenu'
export default {
  name: 'MenuList',
  props: {
    data: {
      type: Array,
      default: () => ([])
    }
  },
  components: {
    Menu,
    MenuItem,
    ReSubMenu
  },
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>

</style>