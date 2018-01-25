/*
* @Author: hfren
* @Date:   2018-01-23 15:19:24
* @Last Modified by:   hfren
* @Last Modified time: 2018-01-23 16:05:48
*/

/**
 * 多级取值，传入多个对象，一级一级遍历，上一次的value是下一次的key
 * @Author   rhf
 * @DateTime 2018-01-23
 * @return   {[type]}   [description]
 */
function multistepFetch(key, obj1, obj2, obj3) {
    let args    = Array.apply(null, arguments);
    let value   = undefined;
    for (let i = 1; i < args.length; i++) {
        value = args && args[i] && args[i][key] || undefined;
        value === undefined && break;
    }
    return value;
}