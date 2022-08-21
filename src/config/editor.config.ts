import componentConfig from "@/config/component.config";

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
    svg: '../src/assets/svg/Skeleton.svg',
    key: 'BaseText',
    type: 'base',
    component: 'TextStyle',
    config: componentConfig['BaseText']
});

registerConfig.register({
    label: 'Button 按钮',
    svg: '../src/assets/svg/Button.svg',
    key: 'BaseButton',
    type: 'base',
    component: 'ButtonStyle',
    config: componentConfig['BaseButton']
});

registerConfig.register({
    label: 'Image 图片',
    svg: '../src/assets/svg/image.svg',
    key: 'BaseImage',
    type: 'base',
    component: 'ImageStyle',
    config: componentConfig['BaseImage']
});

registerConfig.register({
    label: 'Link 链接',
    svg: '../src/assets/svg/Mentions.svg',
    key: 'BaseLink',
    type: 'base',
    component: 'LinkStyle',
    config: componentConfig['BaseLink']
});

registerConfig.register({
    label: 'Video 视频',
    svg: '../src/assets/image/Video.png',
    key: 'BaseVideo',
    type: 'base',
    component: 'VideoStyle',
    config: componentConfig['BaseVideo']
});

export default registerConfig;
