/**
 * Created by Administrator on 2016/7/20.
 */

"use strict";
function BinarySearch(key,arr) {
    var start=0,
        end=arr.length-1;
    while (start<end){
        var mid=Math.floor((end-start)/2)+start;
        if(key<arr[mid]){
            end=mid-1;
        } else if (key>arr[mid]){
            start=mid+1;
        } else {
            return mid;
        }
    }
    return -1;
}