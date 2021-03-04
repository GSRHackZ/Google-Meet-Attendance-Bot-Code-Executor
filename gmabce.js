// ==UserScript==
// @name         Google Meet Attendance Bot Code Executor
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Executes code sent by bot when on google meets.
// @author       GSRHackZ
// @match        *://*/*
// @grant        none
// @icon         https://i.ibb.co/YPzxbqv/google-meets-ai-removebg-preview.png
// ==/UserScript==

let urlParams = new URLSearchParams(window.location.search);
let phrase=urlParams.get("phrase");
let acrState=urlParams.get("acr");
let wait=Number(urlParams.get("wait"));
let min=Number(urlParams.get("min"));
let on=urlParams.get("on");
let usedChats=[];


function getCount(){
    if(document.getElementsByClassName("wnPUne N0PJ8e")[0]!==undefined){
        return Number(document.getElementsByClassName("wnPUne N0PJ8e")[0].innerText);
    }
}

function botSay(phrase,wait){
    setTimeout(function(){
        document.getElementsByClassName("uArJ5e UQuaGc kCyAyd QU4Gid foXzLb ")[1].click();
        document.getElementsByClassName("KHxj8b tL9Q4c")[0].value=phrase;
        let send=document.getElementsByClassName("uArJ5e Y5FYJe cjq2Db IOMpW Cs0vCd RDPZE")[0];
        send.setAttribute("aria-disabled",false);
        send.click();
    },wait)
}



function acr(){
    setInterval(function(){
        if(document.getElementsByClassName("uArJ5e UQuaGc kCyAyd QU4Gid foXzLb ")[1]!==undefined){
            document.getElementsByClassName("uArJ5e UQuaGc kCyAyd QU4Gid foXzLb ")[1].click();
        }
        let arr=[];
        let chats=document.getElementsByClassName("oIy2qc");
        for(let i=0;i<chats.length;i++){
            arr.push(chats[i].innerText)
        };
        let uniq = arr
        .map((name) => {
            return {
                count: 1,
                name: name
            }
        })
        .reduce((a, b) => {
            a[b.name] = (a[b.name] || 0) + b.count
            return a
        }, {})

        let duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1);
        for(let i=0;i<duplicates.length;i++){
            if(!usedChats.includes(duplicates[i])){
                botSay(duplicates[i],1);
                usedChats.push(duplicates[i]);
            }
        }
    },100)
}


function leave(min){
    let check=setInterval(function(){
        if(getCount()<=min){
            console.log("Leaving!");
            window.close();
        }
    },100)
    }

let check=setInterval(function(){
    if(getCount()!==undefined){
        if(getCount()!==0&&on){
            C4H();
            clearInterval(check);
        }
    }
},100)


function C4H(){
    botSay(phrase,Number(wait*1000));
    leave(min);
    if(acrState!==null){
        acr();
    }
}




