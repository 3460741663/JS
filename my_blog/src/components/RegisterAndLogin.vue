<template>
  <div>
    <el-dialog title="登录" :visible="dialogVisible" @close="cancel">
      <el-form label-width="80px">
        <el-form-item label="邮箱">
          <el-input v-model="params.email"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="params.password"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component, Emit } from 'vue-property-decorator'
@Component
export default class RegisterAndLogin extends Vue{
  @Prop({ default: false }) visible!: boolean

  private params: any = {
    email: '',
    password: ''
  }
  get  dialogVisible(): boolean {
    console.log(this.visible + '____')
    return this.visible
  }
  @Emit()
  private cancel(): boolean{
    return false
  }
}
</script>

<style scoped>

</style>
