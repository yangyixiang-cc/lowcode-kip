export default {
    createDomID(len: any) {
        return Number(Math.random().toString().substr(3, len)).toString(36)
    },
    deepCopy(obj: Object | Array<any>): Object | Array<any> {
        /**
         * 深拷贝一个对象或数组
         *
         * @param { Object | Array } obj 要拷贝的对象或数组
         *
         * @return { Object | Array } copyObj 返回拷贝的对象或数组
         */
        let copyObj = Array.isArray(obj) ? [] : {}
        for (let key in obj) {
            if (typeof obj[key] === 'object') {
                if (obj[key] instanceof Array) {
                    copyObj[key] = []
                } else {
                    copyObj[key] = {}
                }
                copyObj[key] = this.deepCopy(obj[key])
            } else {
                copyObj[key] = obj[key]
            }
        }
        return copyObj
    },
    parseTime(time: any, cFormat: any): any {
        if (arguments.length === 0) {
            return null
        }
        const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
        let date
        if (typeof time === 'object') {
            date = time
        } else {
            if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
                time = parseInt(time)
            }
            if ((typeof time === 'number') && (time.toString().length === 10)) {
                console.log('is number')
                time = time * 1000
            }
            date = new Date(time)
        }
        const formatObj = {
            y: date.getFullYear(),
            m: date.getMonth() + 1,
            d: date.getDate(),
            h: date.getHours(),
            i: date.getMinutes(),
            s: date.getSeconds(),
            a: date.getDay()
        }
        const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result: any, key: any): any => {
            let value = formatObj[key]
            // Note: getDay() returns 0 on Sunday
            if (key === 'a') {
                return ['日', '一', '二', '三', '四', '五', '六'][value]
            }
            if (result.length > 0 && value < 10) {
                value = '0' + value
            }
            return value || 0
        })
        return time_str
    },
    arrayEquals(a: Array<any>, b: Array<any>): boolean {
        /**
         * 判断两个数组是否相等
         *
         * @param {Array} a 数组a
         * @param {Array} b 数组b
         *
         * @return {boolean} 比较的结果
         */
        return a.length === b.length && a.sort().toString() === b.sort().toString();
    }
}
