/** 버블 정렬은 가장 큰 원소 또는 가장 작은 원소가 벙렬의 가장 오른쪽으로 가지만 선택 정렬은 가장 크거나 작은 원소가 왼쪽으로 간다.
 * 그리고 이미 정렬된 배열에 대해서도 모든 비교가 필요하므로, 선택 정렬과 마찬가지로 굉장히 비효율적인 정렬 알고리즘이다.
 *
 *
 *  */

function bubbleSort_desc(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    // n번째거는 테스팅을 안해도 되므로.
    // the outer loop is for the selected pair?
    for (let j = 0; j < i; j++) {
      // 내림차순 예시
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

function bubbleSort_asc(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    // n번째거는 테스팅을 안해도 되므로.
    // the outer loop is for the selected pair?
    for (let j = 0; j < i; j++) {
      // 내림차순 예시
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
