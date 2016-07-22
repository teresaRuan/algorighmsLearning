
"use strict";
"use utf-8";
/*Stack*/
function evaluate(strExp){
    var arrExp=strExp.replace(/^\s$/g,'').split('');
    arrExp=arrExp.reverse();
    var optStack=[],
        valStack=[],
        len=arrExp.length-1;
    while (len--){
        var s=arrExp[len];
        switch (s){
            case '+':
            case '-':
            case '/':
            case '*':
            case 'sqrt':
                optStack.push(s);
                break;
            case '(':
                break;
            case ')':
                var a=valStack.pop();
                var b=valStack.pop();
                var o=optStack.pop();
                valStack.push(eval(a+o+b));
                break;
            default:
                valStack.push(s);
        }
    }
    return valStack.pop();
}

function evaluate2(strExp){
    let arrExp=Array.from(strExp.trim()),
        optStack=[],
        dataStack=[];
    arrExp.forEach(function(val){
        switch (val){
            case '+':
            case '-':
            case '/':
            case '*':
            case 'sqrt':
                optStack.push(val);
                break;
            case '(':
                break;
            case ')':
                var a=dataStack.pop();
                var b=dataStack.pop();
                var o=optStack.pop();
                dataStack.push(eval(a+o+b));
                break;
            default:
                dataStack.push(val);
        }
    });
    return dataStack.pop();
}
console.log(evaluate('(1+((2+3)*(4*5)))'));
console.log(evaluate2('(1+((2+3)*(4*5)))'));
/**/
/*背包是一种不支持从中删除元素的集合数据类型*/