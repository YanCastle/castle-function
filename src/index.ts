import * as _ from 'lodash'
import * as day from 'dayjs'

declare let window: any
const YMD = 'YYYY-MM-DD'
/**
 * 默认的日期格式
 */
export const DateFMT = {
    /**
     * 年月日
     */
    YMD: YMD,
    YMDHm: YMD + ' HH:mm',
    YMDHms: YMD + ' HH:mm:ss'
}
export function format_date(date: string | number | Date, fmt: string = DateFMT.YMDHm) {
    return day(date).format(fmt)
}

/**
 * base64 to File
 * @param dataurl
 * @param filename
 */
export function dataurl_to_file(dataurl: string, filename: string): File | undefined {
    //将base64转换为文件
    if ("string" == typeof dataurl && dataurl.length > 0) {
        var arr: any[] = dataurl.split(","),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }
    throw new Error("非法DataURL")
}

/**
 * 数组比较，同时返回不在A中的和不在B中的和两边都在的
 * @param a
 * @param b
 * @returns
 */
export function compare_array<T>(a: T[], b: T[]) {
    let rs: { Both: T[]; NotA: T[]; NotB: T[] } = {
        Both: _.intersection(a, b),
        NotA: _.difference(b, a),
        NotB: _.difference(a, b)
    }
    return rs
}
/**
 * 加载脚本
 * @param url 
 * @param check 
 * @returns 
 */
export async function load_script(url: string, check: string) {
    if (window[check]) {
        return window[check]
    }
    let scr = document.createElement('script')
    scr.src = url
    document.body.appendChild(scr)
    while (true) {
        await timeout(100)
        if (window[check]) {
            return window[check]
        }
    }
}
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
            let p = Object.values(ufs);
            if (p.length == 1) { return p[0] }
            return p;
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