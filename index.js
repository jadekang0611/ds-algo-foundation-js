import Stack_Demo from "./stack.js";
import Queue_Demo from "./queue.js";
import Heap_Demo from "./heap.js";
import { selectionSort } from "./selection_sort.js";

Stack_Demo();
Queue_Demo();
Heap_Demo();

/* 1) 선택 정렬의 수행시간 측정 */
// 0 ~ 999까지의 정수 30000개를 담은 배열생성
let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));

// getTime(): 1970-01-01 부터의 시간차를 ms 단위로 계산
let startTime = new Date().getTime();
selectionSort(arr);
let endTime = new Date().getTime();

console.log("선택 정렬 소요 시간:", endTime - startTime, "ms.");
