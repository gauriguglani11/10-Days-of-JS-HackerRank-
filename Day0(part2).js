Task

Variables named firstInteger,firstDecimal and firstString  are declared for you in the editor below. 
You must use the (+)  operator to perform the following sequence of operations:

1. Convert secondInteger to an integer (Number type), then sum it with firstInteger and print the result on a new line using console.log.
2. Convert secondDecimal to a floating-point number (Number type), then sum it with firstDecimal and print the result on a new line using console.log.
3. Print the concatenation of firstString and secondString on a new line using console.log. Note that firstString  must be printed first.

Output Format

Print the following three lines of output:

1.On the first line, print the sum of firstInteger and the integer representation of secondInteger .
2. On the second line, print the sum of firstDecimal and the floating-point representation of secondDecimal.
3. On the third line, print firstString  concatenated with secondString . You must print firstString before secondString .

Sample Input 0

12
4.32
is the best place to learn and practice coding!

Sample Output 0

16
8.32
HackerRank is the best place to learn and practice coding!



CODE:

function performOperation(secondInteger, secondDecimal, secondString) {
   
   const firstInteger = 4;
    console.log(firstInteger + (+secondInteger));
    
    const firstDecimal = 4.0;
    console.log(firstDecimal + (+secondDecimal));

   
    const firstString = 'HackerRank ';
    console.log(firstString + secondString);
	}

