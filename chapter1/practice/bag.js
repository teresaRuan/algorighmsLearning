"use strict";
/*1.3.4 matching parentheses*/
function patternOpt(str){
    let arrPat=Array.from(str.trim());
    let patStack=[];
    let re=true;
    arrPat.forEach(function(val){
        var result=true;
        switch (val){
            case '[':
            case '(':
            case '{':
                patStack.push(val);
                break;
            case ']':
                if(patStack.pop()!='[')result=false;
                break;
            case ')':
                if(patStack.pop()!='(')result=false;
                break;
            case '}':
                if(patStack.pop()!='{')result=false;
                break;
        }
        if(!result){
            re=false;
            return;
        }
    });
       return re;
}
console.log(patternOpt(')'));
/*1.3.9 complete parentese*/
function comParentese(str){
    let arrPat=Array.from(str.trim());
    let optStack=[],
        dataStack=[];
    arrPat.forEach(function(val){
        switch (val){
            case '+':
            case '-':
            case '/':
            case '*':
            case 'sqrt':
                optStack.push(val);
                break;
            case ')':
                var a=dataStack.pop();
                var b=dataStack.pop();
                var o=optStack.pop();
                dataStack.push('('+b+o+a+')');
                break;
            default:
                dataStack.push(val);
        }
    });
    return dataStack[0];
}
console.log(comParentese('1+2)*3-4)*5-6)))'));
/**/