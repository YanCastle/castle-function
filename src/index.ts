import * as _ from 'lodash'
/**
 * 仿造php的array_columns函数
 * @param arr
 * @param column
 * @returns {Array}
 */
export function array_columns(arr: any, column: any, unique = false) {
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
