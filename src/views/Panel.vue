<!-- 页面编辑页布局 -->
<template>
  <div class="container">
    <div class="container-header">
      <div class="container-header-left">
        <div class="container-header-left-l">
          <img :src="Logo_IMG" class="icon-img" />
          <span>低代码开发平台</span>
        </div>
        <div class="container-header-left-r">
          <div class="container-header-left-r-left">
            <div class="icon">
              <div :class="flog ? 'item active-bg' : 'item'" @click="changeDesignSize(true)">
                <el-tooltip content="PC模式" placement="bottom" effect="light">
                  <el-icon :size="18">
                    <Monitor/>
                  </el-icon>
                </el-tooltip>
              </div>
              <div :class="flog ? 'item' : 'item active-bg'" @click="changeDesignSize(false)">
                <el-tooltip content="Phone模式" placement="bottom" effect="light">
                  <el-icon :size="18">
                    <Cellphone/>
                  </el-icon>
                </el-tooltip>
              </div>
            </div>
            <div class="input">
              <el-input-number v-model="designSizeWidth" class="mx-4" :min="768" :max="1920" controls-position="right"
                               @change="handleChange" v-if="flog"/>
              <el-input-number v-model="designSizeWidth" class="mx-4" :min="320" :max="650" controls-position="right"
                               @change="handleChange" v-else/>
            </div>
          </div>
          <div class="container-header-left-r-right">
            <el-button-group>
              <el-tooltip content="撤销" placement="bottom" effect="light">
                <el-button plain icon="RefreshLeft" :disabled="undoButton" @click="executeUndoAct"/>
              </el-tooltip>
              <el-tooltip content="恢复" placement="bottom" effect="light">
                <el-button plain icon="RefreshRight" :disabled="redoButton" @click="executeRedoAct"/>
              </el-tooltip>
            </el-button-group>
          </div>
        </div>
      </div>
      <div class="container-header-right">
        <el-button @click="setPage">页面配置</el-button>
        <el-button @click="resetPage" type="danger">重置页面</el-button>
        <el-button-group style="margin: 0 5px">
          <el-button @click="() => $router.push('/import')"><import-outlined />&nbsp;导入JSON</el-button>
          <el-button @click="() => $router.push('/export')"><export-outlined />&nbsp;导出JSON</el-button>
        </el-button-group>
        <el-button type="primary" @click="$router.push('/preview')">预览</el-button>
      </div>
    </div>
    <div class="container-content">
      <div class="container-content-left" :class="drawerFlog ? 'out-active' : ''">
        <div class="container-content-left-l">
          <div class="container-content-left-l-top">
            <el-tooltip content="组件" placement="right" effect="light">
              <div class="item" @click="out(1)">
                <el-icon :size="16" color="#555555">
                  <Menu/>
                </el-icon>
              </div>
            </el-tooltip>
<!--            <el-tooltip content="自定义组件" placement="right" effect="light">-->
<!--              <div class="item" @click="out(2)">-->
<!--                <el-icon :size="16">-->
<!--                  <User/>-->
<!--                </el-icon>-->
<!--              </div>-->
<!--            </el-tooltip>-->
          </div>
          <div class="container-content-left-l-bottom">
<!--            <el-tooltip content="帮助" placement="right" effect="light">-->
<!--              <div class="item">-->
<!--                <el-icon :size="16">-->
<!--                  <Help/>-->
<!--                </el-icon>-->
<!--              </div>-->
<!--            </el-tooltip>-->
            <el-tooltip content="更多" placement="right" effect="light">
              <div class="item">
                <el-icon :size="16" color="#555">
                  <More/>
                </el-icon>
              </div>
            </el-tooltip>
          </div>
        </div>
        <div class="container-content-left-r">
          <Components v-show="drawerFlog && type == 1"/>
          <div v-show="drawerFlog && type == 2">
            自定义组件
          </div>
          <div v-show="drawerFlog && type == 3">
            页面结构
          </div>
        </div>
      </div>
      <div class="container-content-middle">
        <DrawingBroad/>
      </div>
      <div class="container-content-right">
        <ComponentsOptions/>
      </div>
    </div>
  </div>
  <PageStyle :flog="isSetPage" />
</template>
<script setup lang="ts">
import {computed, ref} from 'vue';
import DrawingBroad from '@/views/layout/DrawingBroad.vue';
import Components from '@/views/layout/Components.vue';
import ComponentsOptions from '@/views/layout/ComponentsOptions.vue';
import {storeToRefs} from "pinia";
import {userMainStore} from "@/store/index";
import PageStyle from '@/components/style/PageStyle.vue'; // 引入
import Logo_IMG from "@/assets/image/logo.png";

const mainStore = userMainStore();
const {tree, statePoint, stateStack} = storeToRefs(mainStore); // 解构并使数据动态化
let designSizeWidth = ref(Number(tree.value.container.width));

//控制设计尺寸
let flog = ref(true)

const undoButton = computed(() => {
  return statePoint.value < 0;
})
const redoButton = computed(() => {
  return statePoint.value === stateStack.value.length - 1;
})

function changeDesignSize(nFlog: boolean): void {
  flog.value = nFlog;
  if (flog.value) {
    tree.value.mode = "PC"
    designSizeWidth.value = 768;
    tree.value.container.width = "768";
  } else {
    tree.value.mode = "Phone"
    designSizeWidth.value = 375;
    tree.value.container.width = "375";
    tree.value.container.height = "750";
  }
}

function executeUndoAct(): void {
  mainStore.executeUndo()
}

function executeRedoAct(): void {
  mainStore.executeRedo()
}

function resetPage(): void {
  mainStore.resetCurrentPage()
}

function handleChange(prev: number | undefined): void {
  tree.value.container.width = String(prev as number);
}

//控制右侧组件库是否打开
let drawerFlog = ref(false);
let type = ref(0);

function out(num: number): void {
  if (type.value === num) {
    drawerFlog.value = !drawerFlog.value;
  } else if (!drawerFlog.value) {
    drawerFlog.value = true
  }
  type.value = num;
}

let isSetPage = ref(false);

function setPage(){
  isSetPage.value = !isSetPage.value;
}

</script>

<script lang="ts">
import {defineComponent} from 'vue';
import {
  ImportOutlined,
  ExportOutlined
} from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    ImportOutlined,
    ExportOutlined
  },
});
</script>

<style scoped lang="scss">
.out-active {
  width: 400Px !important;
  min-width: 400Px;
}

.container {
  width: 100%;
  min-width: 1280Px;
  height: 100vh;
  background-color: #edeff3;

  &-header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 5px;
    background-color: #ffffff;

    &-left {
      display: flex;
      flex: 6;
      justify-content: space-evenly;
      align-items: center;

      &-l {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex: 5;

        .icon-img {
          margin-left: 5px;
          width: 30px;
          height: 30px;
          object-fit: contain;
        }

        span {
          font-size: 20px;
          font-weight: bolder;
          margin-left: 10px;
          background-color: #21D4FD;
          background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }
      }

      &-r {
        display: flex;
        flex: 5;
        justify-content: space-between;

        &-left {
          display: flex;
          width: 220px;
          justify-content: space-between;

          .icon {
            display: flex;
            width: 100px;
            justify-content: space-evenly;
            align-items: center;
            margin-right: 10px;
            cursor: pointer;

            .item {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 36px;
              height: 36px;
              margin: auto 2px;
              border-radius: 4px;
            }
          }

          .input {
            display: flex;
            align-items: center;
          }
        }

        &-right {
          display: flex;
          align-items: center;
          margin-right: 10px;
        }
      }

    }

    &-right {
      flex: 4;
      display: flex;
      justify-content:space-evenly;
      align-items: center;
    }
  }

  &-content {
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    justify-content: space-between;

    &-left {
      display: flex;
      width: 50px;
      min-width: 48Px;
      height: 100%;
      border-top: 1px solid #CDD0D6;
      background-color: #ffffff;

      &-l {
        width: 50px;
        min-width: 48Px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        &-top,
        &-bottom {

          .item {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            min-width: 40px;
            min-width: 40px;
            margin: 5px;
            text-align: center;
            border-radius: 4px;
            cursor: pointer;

            &:hover {
              background-color: #f2f2f2;
            }
          }
        }
      }

      &-r {
        display: flex;
        flex: 1;
        justify-content: center;
      }

    }


    &-middle {
      flex-grow: 1;
      margin: 10px;
      background-color: #ffffff;
      overflow: hidden;
    }

    &-right {
      width: 400px;
      min-width: 360Px;
      height: 100%;
      overflow-y: scroll;
      border-top: 1px solid #CDD0D6;
      background-color: #ffffff;
    }
  }
}

.active-bg {
  background-color: #f2f2f2;
}

.drawer-header {
  font-size: 28px;
}

.drawer {
  &-title {
    font-size: 24px;
    color: #000;
    font-weight: bold;
  }
}
</style>
