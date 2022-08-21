// 组件的属性 写好的组件需要在这里填写
export default {
    'BaseText': {
        title: '文本',
        domId: '',
        domName: '',
        base: {
            val: '默认文本',
        },
        style: [
            {
                type: 'Font Size',
                label: '字号',
                attr: 'fontSize',
                val: '16px'
            },
            {
                type: 'Font Weight',
                label: '字体粗细',
                attr: 'fontWeight',
                val: 'normal'
            },
            {
                type: 'Under Line',
                label: '下划线',
                attr: 'textDecoration',
                val: 'none'
            },
            {
                type: 'Color',
                label: '字体颜色',
                attr: 'color',
                val: '#333333',
            },
            {
                type: 'Background Color',
                label: '背景颜色',
                attr: 'backgroundColor',
                val: '#ffffff'
            },
            {
                type:'Text Align',
                label: '对齐方式',
                attr: 'textAlign',
                val: 'left'
            }
        ]
    },
    'BaseButton': {
        title: '按钮',
        domId: '',
        domName: '',
        base: {
            type: '',
            text: 'Button',
            shape: '',
            icon: '',
            plain: false,
            disabled: false,
            size: 'default'
        },
        style: [
            {
                type: 'Alignment',
                label: '对齐方式',
                attr: 'text-align',
                val: 'left',
                isNecessary: false
            }
        ],
        clickAction: {
            type: 'Click Message',
            label: '按钮点击提示信息',
            message: 'Congrats, this is a success message.',
            messageType: 'success',
            showClose: false
        },
    },
    'BaseImage': {
        title: '图片',
        domId: '',
        domName: '',
        base: {
            width: 200,
            height: 200,
            alt:'',
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            fit: 'fill',
            alignment: 'left'
        },
        style: []
    },
    'BaseLink': {
        title: '按钮',
        domId: '',
        domName: '',
        base: {
            type: 'primary',
            text: '百度一下，你就知道',
            icon: true,
            disabled: false,
            size: 'default'
        },
        style: [
            {
                type: 'Alignment',
                label: '对齐方式',
                attr: 'text-align',
                val: 'left',
            }
        ],
        clickAction: {
            url: 'https://www.baidu.com'
        },
    },
    'BaseVideo': {
        title: '视频',
        domId: '',
        domName: '',
        base: {
            url: 'https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4',
            // url: 'https://prod-streaming-video-msn-com.akamaized.net/c633cd32-92ef-447f-876c-54c5c1a57484/d5a4b96f-01b4-4519-8470-62484e0b1b5b.mp4',
            width: 480,
            height: 270,
        },
        style: []
    }
}
