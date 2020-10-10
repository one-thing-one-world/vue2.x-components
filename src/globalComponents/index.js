import Vue from 'vue'
import picturePreview from '@/globalComponents/picturePreview/picturePreview'
import iframeView from '@/globalComponents/iframeView/iframeView'
import bottomToolBar from '@/globalComponents/bottomToolBar/bottomToolBar'
import informIcon from '@/globalComponents/informIcon/informIcon'
import lockScreen from '@/globalComponents/lockScreen/lockScreen'
import trend from '@/globalComponents/trend/trend' 
import progressBar from '@/globalComponents/progressBar/progressBar'
import editText from '@/globalComponents/editText/editText'

Vue.component('editText',editText)
Vue.component('progressBar',progressBar)
Vue.component('trend',trend)
Vue.component('lockScreen',lockScreen)
Vue.component('informIcon',informIcon)
Vue.component('bottomToolBar',bottomToolBar)
Vue.component('iframeView',iframeView) 
Vue.component('picturePreview',picturePreview) 