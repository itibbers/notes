# 算法

[[TOC]]

## 算法分类

个人觉得主要分为以下三类：

- 贪心：暴力破解、枚举，求局部最优解
- 分治：拆解思想，原问题分成很多相同的子问题，划星星
- 动态规划（BFS、DFS、Backtrack、DP）：递归为主，有分治思想在。

## 排序算法

### 冒泡排序

```js
Array.prototype.bubbleSort = function() {
  const len = this.length
  for (let i = len; i >= 2; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (this[j] > this[j + 1]) {
        [this[j], this[j + 1]] = [this[j + 1], this[j]]
      }
    }
  }
  return this
}
```

![img](./images/bubbleSort.gif)

### 选择排序

```js
Array.prototype.selectSort = function() {
    const len = this.length
    for(let i = 0; i < len - 1; i++) {
        for(let j = i ; j < len; j++) {
            if(this[j] < this[i]) {
                [this[i], this[j]] = [this[j], this[i]]
            }
        }
    }
    return this
}
```

### 插入排序

```js
Array.prototype.insertSort = function() {
  for (let i = 1; i < this.length; i++) {
    for (let j = i; j > 0; j--) {
      if (this[j] < this[j - 1]) {
        [this[j], this[j - 1]] = [this[j - 1], this[j]]
      } else {
        break
      }
    }
  }
  return this
}
```

### 快速排序

```js
Array.prototype.quickSort = function() {
  const len = this.length
  if (len < 2) return this
  const mid = this[0], left = [], right = []
  for (let i = 1; i < len; i++) {
    const iv = this[i]
    iv < mid ? left.push(iv) : right.push(iv)
  }
  return left.quickSort().concat(mid, right.quickSort())
}
```

`Array.prototype.sort()`在数组元素数量小于等于10时使用冒泡排序，否则使用快速排序。

