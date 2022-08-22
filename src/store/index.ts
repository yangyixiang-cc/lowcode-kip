import {defineStore} from 'pinia';
import config from "@/config/editor.config";
import data from "@/config/data.json";
import cArgs from "@/config/component.config";
import utils from "@/utils/tools"
import {ElMessage} from "element-plus/es";

export const userMainStore = defineStore('mainStore', {
    state: () => ({
        list: config.componentList,
        tList: [],
        stateStack: [],
        statePoint: -1,
        tree: data,
        componentArgs: cArgs
    }),
    actions: {
        saveCurrentPage(): void {
            /**
             * 保存当前页面快照
             */
            if (this.statePoint !== this.stateStack.length - 1 || this.statePoint === -1) {
                this.clearStackTop();
            }
            this.stateStack.push(this.tList.concat())
            this.statePoint = this.stateStack.length - 1
        },
        executeUndo(): void {
            /**
             * 执行Undo操作
             */
            this.statePoint--;
            if (this.statePoint < 0) {
                this.tList = []
                return
            }
            this.tList = (this.stateStack[this.statePoint] as []).concat();
        },
        executeRedo(): void {
            /**
             * 执行Redo操作
             */
            if (this.statePoint === this.stateStack.length - 1) return;
            this.statePoint++;
            this.tList = (this.stateStack[this.statePoint] as []).concat();
        },
        clearStackTop(): void {
            /**
             * 清空当前指针指向的状态栈顶元素
             */
            this.stateStack.splice(this.statePoint + 1)
        },
        updateConfig(conf: Object, index: number): void {
            /**
             * 更新tList中对应组件的配置并保存页面快照
             *
             * @param {Object} conf 配置参数的Object对象
             * @param {number} index 组件在tList中的位置
             */
            let tList = utils.deepCopy(this.tList)
            tList[index]['config'] = utils.deepCopy(conf);
            this.tList = utils.deepCopy(tList) as [];
            this.saveCurrentPage()
        },
        resetCurrentPage(): void {
            /**
             * 重置tList并保存页面快照
             */
            this.tList = [];
            this.saveCurrentPage();
        },
        setTreeJson(jsonObj: Object): void {
            this.tree = utils.deepCopy(jsonObj);
            this.tList = utils.deepCopy(jsonObj['components']) as [];
            this.saveCurrentPage()
            ElMessage({
                type: 'success',
                message: '导入JSON成功'
            })
        },
        deleteComponent(index: number): void {
            /**
             * 删除tList中对应组件的action
             *
             * @param {number} index 组件在tList中的位置
             */
            let tList = utils.deepCopy(this.tList)
            tList.splice(index, 1)
            this.tList = utils.deepCopy(tList) as [];
            this.saveCurrentPage()
        }
    }
});