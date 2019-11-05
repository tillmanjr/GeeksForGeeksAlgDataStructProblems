/* ============================================================================
https://practice.geeksforgeeks.org/problems/subarray-with-given-sum/0#ExpectOP

Given an unsorted array A of size N of non-negative integers,
find a continuous sub-array which adds to a given number S.

Input:
The first line of input contains an integer T denoting the number of test cases.
Then T test cases follow. Each test case consists of two lines.
  The first line of each test case is N and S,
    where N is the size of array and
          S is the sum.
  The second line of each test case contains N space separated integers denoting
    the array elements.

Output:
For each testcase, in a new line, print the starting and ending positions(1 indexing)
of first such occuring subarray from the left if sum equals to subarray, else print -1.

Constraints:
1 <= T <= 100
1 <= N <= 107
1 <= Ai <= 1010

Example:
Input:
2
5 12
1 2 3 7 5
10 15
1 2 3 4 5 6 7 8 9 10
Output:
2 4
1 5

Explanation :
Testcase1: sum of elements from 2nd position to 4th position is 12
Testcase2: sum of elements from 1st position to 5th position is 15


*/

// 3rd test case added by me
const data = [
  '3',
  '5 12',
  '1 2 3 7 5',
  '10 15',
  '1 2 3 4 5 6 7 8 9 10',
  '10 15',
  '10 9 8 7 6 5 4 3 2 1'
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
  const nsArray = data[testLineIndex].trim().split(' ')
  const testData = data[testLineIndex + 1].trim().split(' ')
  return {
    N: parseInt(nsArray[0], 10),
    S: parseInt(nsArray[1], 10),
    Data: toIntArray(testData)
  }
}

const runTestCase = (testCase) => {
  let lagPos = 0
  let leadPos = 0
  let data = testCase.Data
  let runningSum = data[0]
  let sum = testCase.S
  while (runningSum != sum) {
    if (runningSum < sum) {
      leadPos ++
      runningSum += data[leadPos]
    }
    if (runningSum > sum) {
      runningSum = runningSum - data[lagPos]
      lagPos ++
    }
  }
  console.log(`${lagPos + 1} ${leadPos + 1}`)
}

for (let x = 0; x < readTestCaseCount(); x++ ) {
  runTestCase(readTestCase(x))
}
