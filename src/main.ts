import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {createPinia} from 'pinia'
import 'amfe-flexible'
import './style.css'
import App from './App.vue'
import router from "./router/index";
import vue3TsJsoneditor from 'vue3-ts-jsoneditor';

// 注册自定义组件
import BaseText from "@/components/base/BaseText.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseImage from "@/components/base/BaseImage.vue";
import BaseLink from "@/components/base/BaseLink.vue";
import BaseVideo from "@/components/base/BaseVideo.vue";

import ButtonStyle from "@/components/style/ButtonStyle.vue";
import TextStyle from "@/components/style/TextStyle.vue";
import ImageStyle from "@/components/style/ImageStyle.vue";
import LinkStyle from "@/components/style/LinkStyle.vue";
import VideoStyle from "@/components/style/VideoStyle.vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
const pinia = createPinia();

app.component("BaseText", BaseText);
app.component("BaseButton", BaseButton);
app.component("BaseImage", BaseImage);
app.component("BaseLink", BaseLink);
app.component("BaseVideo", BaseVideo);

app.component("ButtonStyle", ButtonStyle);
app.component("TextStyle", TextStyle);
app.component("ImageStyle", ImageStyle);
app.component("LinkStyle", LinkStyle);
app.component("VideoStyle", VideoStyle);

app.use(vue3TsJsoneditor)
app.use(pinia);
app.use(ElementPlus);
app.use(router);
app.mount('#app');