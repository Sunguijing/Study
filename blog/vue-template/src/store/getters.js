const getters = {
  sidebar: state => state.app.sidebar,  // 侧边栏
  device: state => state.app.device,  // 
  token: state => state.user.token,
  avatar: state => state.user.avatar,  // 头像
  name: state => state.user.name  // 姓名
}
export default getters
