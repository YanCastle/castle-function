// import { array_tree } from './'
// let d = [
//     {
//         "UnitID": 5395,
//         "Title": "表面装饰事业部",
//         "CUID": 13362,
//         "CTime": "2021-09-09 09:40:21",
//         "UGID": 6638,
//         "Type": 0,
//         "PUnitID": 21,
//         "OType": "",
//         "OID": 0,
//         "TUnitID": 21,
//         "DID": 75778,
//         "Admin": 1
//     },
//     {
//         "DID": 75789,
//         "UnitID": 6013,
//         "Title": "综合管理部",
//         "PUnitID": 5395,
//         "Type": 0,
//         "AUID": 0,
//         "CUID": 5547,
//         "GID": 0,
//         "UGID": 7277,
//         "Admin": 1
//     },
//     {
//         "DID": 75792,
//         "UnitID": 6015,
//         "Title": "技术部",
//         "PUnitID": 5395,
//         "Type": 0,
//         "AUID": 0,
//         "CUID": 5547,
//         "GID": 0,
//         "UGID": 7281,
//         "Admin": 1
//     },
//     {
//         "DID": 75794,
//         "UnitID": 6019,
//         "Title": "生产管理部",
//         "PUnitID": 5395,
//         "Type": 0,
//         "AUID": 0,
//         "CUID": 5547,
//         "GID": 0,
//         "UGID": 7285,
//         "Admin": 1
//     },
//     {
//         "DID": 76080,
//         "UnitID": 6017,
//         "Title": "质量管理部",
//         "PUnitID": 5395,
//         "Type": 0,
//         "AUID": 0,
//         "CUID": 5547,
//         "GID": 0,
//         "UGID": 7283,
//         "Admin": 1
//     },
//     {
//         "DID": 82914,
//         "UnitID": 6180,
//         "Title": "喷涂一班",
//         "PUnitID": 6019,
//         "Type": 0,
//         "AUID": 0,
//         "CUID": 5547,
//         "GID": 0,
//         "UGID": 7470,
//         "Admin": 1
//     }
// ]
// let dr = (array_tree(d, { ufield: 'UnitID', pfield: 'PUnitID', sub_name: 'Subs' }))
// // console.log(JSON.stringify(dr))
// d = [
//     { UnitID: 1, PUnitID: 0 },
//     { UnitID: 2, PUnitID: 1 },
//     { UnitID: 3, PUnitID: 1 },
//     { UnitID: 4, PUnitID: 2 },
// ]
// dr = (array_tree(d, { ufield: 'UnitID', pfield: 'PUnitID', sub_name: 'Subs' }))
// // // debugger
// // console.log(JSON.stringify(dr))
// // d = { "d": [{ "UID": 3638, "DID": 70841, "UnitID": 47, "GID": 188, "Title": "小件事业部", "PUnitID": 21, "Type": 0, "UGID": 4412, "AUID": 334, "CUID": 1 }, { "UID": 3638, "DID": 73673, "UnitID": 5583, "GID": 188, "Title": "爱熙注塑事业部", "PUnitID": 21, "Type": 0, "UGID": 6833, "AUID": 0, "CUID": 13362 }, { "UID": 3638, "DID": 71643, "UnitID": 5929, "GID": 188, "Title": "工程科", "PUnitID": 47, "Type": 0, "UGID": 7191, "AUID": 0, "CUID": 15598 }, { "DID": 72276, "UnitID": 5930, "Title": "美菱经营体", "PUnitID": 47, "Type": 0, "AUID": 0, "CUID": 15598, "GID": 188, "UGID": 7192 }, { "DID": 72333, "UnitID": 5935, "Title": "一工段", "PUnitID": 47, "Type": 0, "AUID": 0, "CUID": 15598, "GID": 188, "UGID": 7197 }], "c": 200, "i": "", "e": "" }.d

// // dr = (array_tree(d, { ufield: 'UnitID', pfield: 'PUnitID', sub_name: 'Subs' }))
// // // debugger
// // console.log(JSON.stringify(dr))