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
    return rs;
}
// let rs = array_tree([
//     { PID: 5, ID: 6 },
//     { PID: 2, ID: 4 },
//     { PID: 0, ID: 1 },
//     { PID: 0, ID: 2 },
//     { PID: 2, ID: 3 },
//     { PID: 4, ID: 5 },
//     { PID: 4, ID: 7 },
//     { PID: 4, ID: 9 },
//     { PID: 9, ID: 10 },
//     { PID: 10, ID: 15 },
// ])  
// debugger