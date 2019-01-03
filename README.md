基础操作方法封装
```typescript
/**
 * 仿造php的array_columns函数
 * @param arr
 * @param column
 * @returns {Array}
 */
export declare function array_columns(arr: any, column: string, unique?: boolean): string[];
/**
 * 取唯一值
 * @param arr
 */
export declare function array_unique(arr: string[] | any): {}[];
/**
 * 设置对象中的某个键的值为对象的键
 * @param arr
 * @param column
 */
export declare function array_key_set(arr: Object | Object[], column: string, more?: boolean): any;
/**
 * 树形结构对象生成函数
 * @param arr
 * @param config
 * @param pvalue
 */
export declare function array_tree(arr: any[], config?: {
    pfield: string;
    ufield: string;
    sub_name: string;
}, pvalue?: number): any;

```