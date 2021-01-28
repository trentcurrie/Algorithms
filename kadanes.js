// Initialize:
//     max_so_far = 0
//     max_ending_here = 0
// Loop for each element of the array
//   (a) max_ending_here = max_ending_here + a[i]
//   (b) if(max_so_far < max_ending_here)
//             max_so_far = max_ending_here
//   (c) if(max_ending_here < 0)
//             max_ending_here = 0
//       return max_so_far

function kadanesAlgorithm(array) {
  // Write your code here.
	let answer = array[0]
	let currentMax = array[0]
	for(let i = 1; i<array.length;i++){
		currentMax = Math.max(array[i], currentMax + array[i])
		answer = Math.max(currentMax, answer)
	}
	return answer
}

//[3, 4, -6, 7, 8]

// i = 1,2,3,4
// array[i] = 4,-6,7,8
// currentMax = 3, 7, 1, 8, 16
// answer = 3, 7, 7,8,16

//answer = 16