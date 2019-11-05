/* ============================================================================
https://practice.geeksforgeeks.org/problems/count-the-triplets/0

Given an array of distinct integers. The task is to count all the triplets
  such that sum of two elements equals the third element.

Input:
The first line of input contains an integer T denoting the number of test cases.
Then T test cases follow.
  Each test case consists of two lines.
    First line of each test case contains an Integer N denoting size of array and
    the second line contains N space separated elements.

Output:
For each test case, print the count of all triplets, in new line.
If no such triplets can form, print "-1".

Constraints:
1 <= T <= 100
3 <= N <= 105
1 <= A[i] <= 106

Example:
Input:
2
4
1 5 3 2
3
3 2 7
Output:
2
-1

Explanation:
Testcase 1: There are 2 triplets: 1 + 2 = 3 and 3 +2 = 5

*/

const data = [
  '2',
  '4',
  '1 5 3 2',
  '3',
  '3 2 7'
]

let testCaseCount = -1
const readTestCaseCount = () => {
  if (testCaseCount < 0){
    testCaseCount = parseInt(data[0], 10)
  }
  return testCaseCount
}

const parseIntB10 = (str) => parseInt(str, 10)

const toIntArray = (strArray) => {
  return strArray.map(parseIntB10)
}

const readTestCase = (n) => {
  if (n >= readTestCaseCount() ) {
    throw new Error('Requested test case does not exist')
  }
  const testLineIndex = (n * 2) + 1
  const N = parseIntB10(data[testLineIndex].trim())
  const testData = data[testLineIndex + 1].trim().split(' ')
  return {
    N,
    Data: toIntArray(testData)
  }
}

const equalsNeither = (x, lhs, rhs) => {
  return x != lhs && x != rhs
}
const doOneTestCase = (testCase) => {
  let result = 0
  const n = testCase.N
  const data = testCase.Data
  // run the pairs
  for (let lhs = 0; lhs < n -1; lhs ++) {
    for (let rhs = lhs + 1; rhs < n; rhs++) {
      for (let i = 0; i < n; i++) {
        if (equalsNeither(i, lhs, rhs)) {
          if (data[lhs] + data[rhs] === data[i]) {
            result++
          }
        }
      }
    }
  }
  result = result > 0 ? result : -1
  console.log('result : ', result)
}

for (let x = 0; x < readTestCaseCount(); x++ ) {
  doOneTestCase(readTestCase(x))
}