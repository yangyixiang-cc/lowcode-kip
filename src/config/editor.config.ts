import componentConfig from "@/config/component.config";
import Skeleton_IMG from "@/assets/svg/Skeleton.svg";
import Button_IMG from "@/assets/svg/Button.svg";
import Image_IMG from "@/assets/svg/image.svg";
import Mentions_IMG from "@/assets/svg/Mentions.svg";
import Video_IMG from "@/src/assets/image/Video.png";


// 右侧组件列表
interface componentType {
    label: string,
    svg: string,
    key: string,
    type: "base" | "common" | "layout" | "other",
    component: string,
    config: Object
}

/**
 * base 基础组件
 * common 共用组件
 * layout 布局组件
 * other 其他组件
 */
class createEditorConfig {

    componentList: Array<componentType> = [];

    componentMap = new Map<string, Object>();

    //注册组件
    public register(item: componentType): void {
        this.componentList.push(item);
        this.componentMap.set(item.key, item);
    }
}

const registerConfig = new createEditorConfig();

registerConfig.register({
    label: 'Text 文本',
    svg: Skeleton_IMG,
    key: 'BaseText',
    type: 'base',
    component: 'TextStyle',
    config: componentConfig['BaseText']
});

registerConfig.register({
    label: 'Button 按钮',
    svg: Button_IMG,
    key: 'BaseButton',
    type: 'base',
    component: 'ButtonStyle',
    config: componentConfig['BaseButton']
});

registerConfig.register({
    label: 'Image 图片',
    svg: Image_IMG,
    key: 'BaseImage',
    type: 'base',
    component: 'ImageStyle',
    config: componentConfig['BaseImage']
});

registerConfig.register({
    label: 'Link 链接',
    svg: Mentions_IMG,
    key: 'BaseLink',
    type: 'base',
    component: 'LinkStyle',
    config: componentConfig['BaseLink']
});

registerConfig.register({
    label: 'Video 视频',
    svg: Video_IMG,
    key: 'BaseVideo',
    type: 'base',
    component: 'VideoStyle',
    config: componentConfig['BaseVideo']
});

export default registerConfig;
