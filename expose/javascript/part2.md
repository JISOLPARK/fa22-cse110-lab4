## Question 1: 
At line 12, the code will print out the variable i after it has finished executing the for loop. It should be 3. 

## Question 2: 
At line 13, the code will print out the variable discountedPrices which is 150. 

## Question 3: 
At line 14, the code will print out the varibel finalPrice which is the 150. 

## Question 4: 
This function will return the arrays of the final prices. This is because discountedPrice is calculated (line 7) which is then used to calculate finalPrice(line 8) then this value is pushed to the array discounted. So it will return the array [50,100,150].

## Question 5: 
Line 12 will cause an error in the code because i is declared with let, meaning that it is only accessible in the block scope and since line 12 is not in the for loop, the variable is not accessible. 

## Question 6: 
Line 13 will cause an error in the code because similar to question 5, discountedPrice is declared with let meaning it is only accesible in that block scope. Since line 13 is outside the following block, an error will prompt. 

## Question 7: 
At line 14, it will print out the finalPrice which is 150. 

## Question 8: 
The function will return [50,100,150] which is the same return value as question 4 because the logic of the function did not change only the declaration of the variables.

## Question 9: 
Line 11 will give an error because variable i is declared with let meaning that it is only accessible in that block and since line 11 does not fall within that block, you cannot access it.

## Question 10:
At line 12, it will print out the length of the array prices which is 3. 

## Question 11: 
The function will return [50,100,150] because the discountedPrice is being calculated (line 7) and then pushed to the discounted array (line 8). 

## Question 12:
A. student.name
B. student["Grad Year"]
C. student.greeting()
D. student.["Favorite Teaacher"]
E. student.courseLoad[0]

## Question 13: 
### A
'3'+2 will give string '32' because it will concatenate the string and integer value together. 
### B
'3'-2 will give number 1 because the string 3 is converted to integer 3 and 2 is subtracted from it which is 1. 
### C
3 + null will give number 3. Here, null is equivalent to 0 so 3 + 0 = 3. 
### D
'3' + null will give '3null' this is because null is converted into string 'null' so the two strings will be concatenated. 
### E
true + 3  will give 4. True is treated as 1 so it is 1 + 3 = 4. 
### F
false + null will give 0. null and false are both converted to numbers and they are both equal to 0. So it is 0 + 0 = 0. 
### G
'3' + undefined will give the string '3undefined'. Similar to D, undefined is converted to a string so two strings are concatenated together. 
### H
'3' - undefined will give NaN (not a number). Undefined is converted to NaN so you cannot subtract string from it. 

## Question 14
### A
'2' > 1 will give true because '2' is converted to a number 2 and 2 > 1 expression is true. 
### B
'2' < '12' will give false. Since it is string comparison, each character will be compared with each other, therefore, '2' < '1' is false. 
### C
2 == '2' will give true because the string '2' becomes a number and 2 == 2 is true. 
### D
2 === '2' will give false because === checks for equal type and since a number and string are not the same type, it is false.
### E
true == 2 will give false. true evaulates to number 1 so therefore 1 == 2 is false. 
### F
true == Boolean(2) will be true. This is because Boolean(2) gives the value true so therefore true == true is true. 

## Question 15
Like explained earlier, === checks for equal type so '3' === '2' is true even though the number in the string is different because it is string === string. The operation == checks for the value itself meaning '2' == 2 is true because '2' string is converted to the number so therefore the following expression equals 2 == 2. 

### Question 17
The result of the function will be [2,4,6]. The doSomething function is being called as a parameter in the modifyArray function. In the modifyArray, it loops through the length of the array (first input of the modifyArray) and the entries of the array goes through doSomething function which times 2 to the number. Then, this value is pushed to the newArr array. 

### Question 19
The output of the code is 1 4 3 2.