'use strict';

const fs = require('fs');

let characters = fs.readFileSync('keylog.txt', 'utf8').trim().split('\n');
let graph = {}; // 노드들간의 관계
let total = []; // 유니크한 요소들
var Q = []; // queue

// 파일로부터 노드들간의 관계 생성
characters.forEach(function(ch) {
  for (var i = 0; i < ch.length-1; i++) {
    graph[ch[i]] = [...new Set((graph[ch[i]] || []).concat([ch[i+1]]))];
    total = [...new Set(total.concat([ch[i], ch[i+1]]))];
  }
})

function solve(c, q, count) {
  if (count >= total.length) console.log(q.join('')); 

  for (var g in graph[c]) {
    q.push(graph[c][g])
    solve(graph[c][g], q, count+1);
    q.pop();
  }
}

for (var c in graph) {
  Q.push(c)
  solve(c, Q, 1);
  Q.pop()
}

