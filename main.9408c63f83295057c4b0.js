(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,t,a){},QfWi:function(e,t,a){"use strict";a.r(t);a("L1EO");function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function e(e){this.selector=e.selector,this.targetDate=e.targetDate}var t,a,r;return t=e,(a=[{key:"time",get:function(){var e=Date.parse(this.targetDate)-new Date;return{days:Math.floor(e/864e5),hours:Math.floor(e%864e5/36e5),mins:Math.floor(e%36e5/6e4),secs:Math.floor(e%6e4/1e3)}}}])&&n(t.prototype,a),r&&n(t,r),e}(),o={userDate:document.querySelector('input[type="datetime-local"]'),day:document.querySelector('span[data-value="days"]'),hour:document.querySelector('span[data-value="hours"]'),min:document.querySelector('span[data-value="mins"]'),sec:document.querySelector('span[data-value="secs"]')},u=function(e){return new r({selector:"#timer-1",targetDate:e})};setInterval((function(){o.day.textContent=u(o.userDate.value).time.days,o.hour.textContent=u(o.userDate.value).time.hours,o.min.textContent=u(o.userDate.value).time.mins,o.sec.textContent=u(o.userDate.value).time.secs}),1e3)}},[["QfWi",1]]]);
//# sourceMappingURL=main.9408c63f83295057c4b0.js.map