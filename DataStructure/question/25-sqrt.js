// 二分查找
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = parseInt((left + right) / 2);
    const midVal = nums[mid];
    if (midVal === target) return mid;
    if (midVal > target) right--;
    if (midVal < target) left++;
  }
  return -1;
};

// 求平方根
// 使用二分查找，取左右两个数的中间值作为游标去寻找最接近的平方根数，当左边的数大于右边的数时，返回右边的数减1当有小数点的话向下取整
function sqrt(x) {
  let lo = 0,
    value = x,
    mid;
  // 设置精度
  while (lo - value <= 0) {
    mid = Math.ceil((lo + value) / 2);
    if (mid * mid == x) return mid;
    if (mid * mid < x) {
      lo = mid + 1;
    } else {
      value = mid - 1;
    }
  }
  return value;
}

const v = 18;
console.log("res", sqrt(v));
