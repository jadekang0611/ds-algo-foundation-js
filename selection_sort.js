function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // index of the smallest element
    for (let j = i + 1; j < arr.length; j++) {
      // now set j to get a comparing element
      if (arr[minIndex] > arr[j]) {
        // minIndex 를 이용한 병렬에 들어있던 원소가 j에 위치한 원소보다 클 경우에는 minIdex는 j가 된다.
        minIndex = j;
      }
    }
    // j와 minIndex를 이용해서 스와핑하기
    // const array = [8, 9, 1, 3, 10, 2, 4];
    // 가장 앞으로 최소 원소를 보내는 것
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.log(arr);
}

export { selectionSort };
