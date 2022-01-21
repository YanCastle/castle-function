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
export function array_tree(arr: any[], config: { pfield: string, ufield: string, sub_name: string, remove_null?: boolean, root?: boolean } = { pfield: 'PID', ufield: 'ID', sub_name: 'Child', remove_null: false }, pvalue = 0) {
    let parr = [...arr]
    config.root = false
    let ufs = array_key_set(parr, config.pfield, true),
        usedPIDs: number[] = [], n = 0;
    while (n++ < 1000) {
        let nPIDs = [...usedPIDs]
        for (let k in ufs) {
            let x = ufs[k]
            for (let o of x) {
                if (ufs[o[config.ufield]]) {
                    if (!usedPIDs.includes(o[config.ufield]))
                        usedPIDs.push(o[config.ufield])
                    o[config.sub_name] = ufs[o[config.ufield]]
                } else if (!config.remove_null) {
                    o[config.sub_name] = []
                }
            }
        }
        if (nPIDs.length == usedPIDs.length) {
            for (let x of nPIDs) {
                delete ufs[x]
            }
            return Object.values(ufs);
        }
    }
}

const delays: { [index: string]: { i: number, cb: Function, t: any, tout: any } } = {}
/**
 * 延迟方法
 * @param name 延迟名称
 * @param tout 延时时间
 * @param cb 回调函数
 */
export function delay_cb(name: string, tout: number, cb: Function) {
    if (!delays[name]) {
        delays[name] = {
            i: 1,
            cb,
            tout,
            t: -1
        };
    } else {
        delays[name].i++;
    }
    if (tout != delays[name].tout) {
        delays[name].i = 1
        clearTimeout(delays[name].t)
    }
    delays[name].t = setTimeout(() => {
        if (--delays[name].i <= 0) {
            cb();
        }
    }, tout);
}

/**
 * 延时
 * @param time
 */
export function delay(time = 1000) {
    return new Promise((s) => { setTimeout(s, time); });
}
/**
 * 延时
 * @param time
 */
export function timeout(time = 1000) {
    return delay(time);
}
/**
 * uuid
 * @param key
 */
export function uuid(key = '') {
    let s: any = [];
    let hexDigits = "0123456789abcdef";
    for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";
    return s.join("");
}
//# sourceMappingURL=index.js.map