function reverseDegree(arr) {
  return mergeSortCounting(arr, 0, arr.length - 1, []);
}

function mergeSortCounting(arr, left, right, tmp) {
  if (left >= right) return 0;

  let mid = Math.floor((left + right) / 2);
  let l = mergeSortCounting(arr, left, mid, tmp);
  let r = mergeSortCounting(arr, mid + 1, right, tmp);
  let m = merge(arr, left, mid, right, tmp);
  return l + m + r;
}

function merge(arr, l, m, r, tmp) {
  let count = 0;
  let i = l,
    j = m + 1,
    k = 0;

  while (i <= m && j <= r) {
    if (arr[i] <= arr[j]) {
      tmp[k++] = arr[i++];
    } else {
      count += m - i + 1; //统计 l到m 之间，比 a[j] 大的元素个数
      tmp[k++] = arr[j++];
    }
  }
  while (i <= m) {
    //处理剩下的
    tmp[k++] = arr[i++];
  }
  while (j <= r) {
    //处理剩下的
    tmp[k++] = arr[j++];
  }
  for (i = 0; i < r - m; ++i) {
    // 从tmp拷回arr
    arr[l + i] = tmp[i];
  }
  return count;
}

console.log(reverseDegree([2, 4, 3, 1, 5, 6]));
// 4 (2,1) (4,3) (4,1) (3,1)
