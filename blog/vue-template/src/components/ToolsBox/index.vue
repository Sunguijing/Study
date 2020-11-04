<template>
  <div class="tool_box">
    <ul>
      <li @click="changeCon">修改文案</li>
      <li>
        <p>修改颜色</p>
        <el-color-picker v-model="color1" @change="changeColor"></el-color-picker>
      </li>
      <li>
        <p>修改字号</p>
        <div><input type="text" placeholder="请输入字体大小" @blur="changefontSize($event)"></div>
      </li>
      <li>
        <p>修改背景</p>
        <el-color-picker v-model="color1" @change="changeBg"></el-color-picker>
      </li>
      <li>
        <p>添加样式</p>
        <div><textarea type="text" placeholder="请输入添加样式" @blur="addCss($event)" v-model="textareaVal"></textarea></div>
      </li>
      <li>
        <p>修改背景图片</p>
        <el-upload
          action="https://www.superjy.cn/public/?s=App.Crm_activity.Upload"
          list-type="picture-card"
          :before-upload="beforeUpload"
          :on-success="successFn">
          <i class="el-icon-plus"></i>
        </el-upload>


      </li>
      
    </ul>
    <div>
      <el-button type="primary" plain @click="closeToolsBox">关闭</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      require: true
    }
  },
  data(){
    return {
      color1: this.item.style.color,
      fileList: [],
      dialogImageUrl: '',
      textareaVal: ''
    }
  },
  mounted(){

  },
  methods: {
    changeCon(){ // 修改内容
      this.item.isStart = true;
      this.$emit('updata:item', this.item);
    },
    changefontSize(e){ // 修改字体大小
      this.item.style.fontSize = e.target.value;
      this.$emit('updata:item', this.item);
      console.log(this.item);
    },
    changeColor(){  // 修改文字颜色
      this.item.style.color = this.color1;
      this.$emit('updata:item', this.item);
    },
    changeBg(){ // 修改背景
      this.item.style.background = this.color1;
      this.$emit('updata:item', this.item);
    },
    closeToolsBox(){ // 关闭工具栏
      this.$emit('ctrlShow', false);
    },

    beforeUpload(file){
      if (file.size > 100 * 1024 * 1024) {
        console.log('上传文件过大', file.size)
        return false   //必须返回false
      }
    },
    successFn(response, file, fileList){ // 处理图片
      console.log('上传成功：', response, file, fileList);
      this.item.style.background = 'url(' + file.url + ')';
      console.log(this.item);
      this.$emit('updata:item', this.item);
    },
    addCss(){ // 失焦的时候获取里面内容并解析  处理自定义的样式
      console.log(this.textareaVal);
      // 解析字符串
      let con = this.textareaVal;
      let conArr = con ? con.split(';') : '';
      if(conArr !== ''){
        conArr.map( item => {
          try {
            let itemcss1 = item.split(':')[0];
            let itemcss2 = item.split(':')[1];
            this.item.style[itemcss1] = itemcss2;
          } catch {
            console.log('填写格式不正确！')
          }
        })
      }
    }
  }
}
</script>

<style>

</style>