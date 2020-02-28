import * as _ from 'lodash'
/**
 * 仿造php的array_columns函数
 * @param arr
 * @param column
 * @returns {Array}
 */
export function array_columns(arr: any, column: string, unique = false) {
    let a: string[] = [];
    _.forOwn(arr, (v: any, k) => {
        if (unique) {
            if (a.indexOf(v[column]) == -1) {
                a.push(v[column])
            }
        } else {
            a.push(v[column])
        }
    })
    return a;
}

/**
 * 取唯一值
 * @param arr
 */
export function array_unique(arr: string[] | any) {
    return _.uniq(arr)
}
/**
 * 设置对象中的某个键的值为对象的键
 * @param arr 
 * @param column 
 */
export function array_key_set(arr: Object | Object[], column: string, more: boolean = false) {
    let a: any = {};
    _.forOwn(arr, (v: any, k) => {
        if (more) {
            if (!a[v[column]]) {
                a[v[column]] = [];
            }
            a[v[column]].push(v);
        } else {
            a[v[column]] = v;
        }
    })
    return a;
}
/**
 * 树形结构对象生成函数
 * @param arr 
 * @param config 
 * @param pvalue 
 */
export function array_tree(arr: any[], config: { pfield: string, ufield: string, sub_name: string } = { pfield: 'PID', ufield: 'ID', sub_name: 'Child' }, pvalue = 0) {
    let rs: any = {};
    for (let i = 0; i < arr.length; i++) {
        let o = arr[i]
        if (o[config.pfield] == pvalue) {
            o[config.sub_name] = array_tree(arr, config, o[config.ufield]);
            rs[o[config.ufield]] = o;
        }
    }
    //无限层级怎么算？
    return Object.values(rs);
}

const delays: { [index: string]: { i: number, cb: Function } } = {}
/**
 * 延迟方法
 * @param name 延迟名称
 * @param tout 延时时间
 * @param cb 回调函数
 */
export function delay_cb(name: string, tout: number, cb: Function) {
    if (!delays[name]) {
        delays[name] = { i: 1, cb }
    } else {
        delays[name].i++;
    }
    setTimeout(() => {
        if (0 == --delays[name].i) {
            cb();
        }
    }, tout)
}