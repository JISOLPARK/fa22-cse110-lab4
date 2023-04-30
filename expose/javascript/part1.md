## Question 1:
The line 9 prints out the statement "values added: 20"

## Question 2: 
The line 13 prints out the statement "final result: 20"

## Question 3: 
The line 9 prints out the same statement as before "values added: 20"

## Question 4: 
The line 13 returns an error because of the let declaration. We cannot access the varible let outside the block scope, and since line 13 is outside the block it was declared in, it cannot access let, so it will thrown an error trying to print out the final result message. 

## Question 5: 
The line 9 will throw an error because in line 7 we are trying to reassign the constant variable result again. Therefore, the code will return an error. 

## Question 6:
The line 13 will throw an error because const variable is declared in the if block, and since line 13 is outside this block we cannot access the variable result and will throw an error. 
 