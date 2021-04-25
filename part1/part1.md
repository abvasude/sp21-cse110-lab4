# Part 1a
1. values added: 20 -> no errors
2. final result: 20 -> no errors
3. values added: 20 -> no errors
4. ERROR: This is because the let keyword makes the variable (result) created limited so that it cannot be accessed beyond its scope
5. ERROR: Because we use the const keyword, we are unable to change the value of result. Therefore the line result = num1 + num2 will result in an error so line 9 will never run.
6. ERROR: Because we use the const keyword, we are unable to change the value of result. Therefore the line result = num1 + num2 will result in an error so line 13 will never run.

# Part 1b
1. Line 12 will run and the output will be prices.length. This is because the keyword given to "i" is var. In this case, the output is 3.
2. Line 13 will run and the output will be the final iteration's value of discountedPrice. This is because the keyword given to discountedPrice is var and therefore is given global/function scope. The output is 150.
3. Line 14 will successfully output the finalPrice because the keyword assigned to the variable finalPrice is of type var. The output is 150.
4. This function will provide an output of an array of discounted prices. We are given a list of prices and we discount all of the given prices and add them to the array. The output will be [50, 100, 150].
5. let i only defines the variable i in the scope of the for loop so it is not accessible beyond it. As a result, there will be an error.
6. There will be an error because discountedPrice is defined within the for loop and since there is a keyword let, the variable does not exist beyond the scope of each iteration of the for loop.
7. Since let finalPrice is defined within the function but outside any loops or statements, finalPrice's value can be accessible. Therefore, the output is 150.
8. The function will return an array of discounted prices. Both finalPrice and discounted are defined within the function but outside of any loops or statements so the syntax is correct. In addition, all of the scopes are met so there will be no errors. The output will be [50, 100, 150].
9. i is not defined in the scope of the function because it is defined only in the for loop so there is an error.
10. Length in defined within the scope of the function. In addition, the length is never seen to be changed, therefore, it is allowable and will not cause any errors. The output is 3.
11. The output will be an array of discountedPrices. Even though we define a const array, it does not mean that we cannot add any elements to the array. As a result, the function will not result in an error and all variables are defined appropriately in their relative scopes. The output is [50, 100, 150]
12. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]

13. A 32            Concatenation of a string '3' with 2.  
    B 1             Converts '3' to 3 and subtracts by 2  
    C 3             null is given the value of 0  
    D 3null         null is concatenated with '3'  
    E 4             true is given the value of 1 so 1+3 = 4  
    F 0             false is given the value of 0 and so is null, so 0 + 0 = 0.  
    G 3undefined    concatenates '3' with undefined  
    H NaN           undefined is NaN so subtracting undefined from '3' results in undefined  
14. A true          '2' becomes a number so 2 > 1  
    B false         The first char '2' is greater than first char of '12'  
    C true          2 == '2' is true because '2' gets converted to 2  
    D false         2 is not of the same type as '2' so false  
    E false         true is given the value of 1 which is not equal to 1.  
    F true          Boolean(2) is the equivalent of true because 2 is a value.   
15. Double equals checks equality (even by changing types need be) however, triple equality checks equality and if the types are the same. 
16. Check the file part1b-question16.js
17. First, we go through modifyArray and then we iterate through each element of array and we push its callback. In other words, we perofmr doSomething to each element of the array which basically multiplies that element by 2. Then, we add that value to newArr. As a result, newArr returns a list with the double of each element's original value.
18. Check the file part1b-question18.js
19. 1
    4
    3
    2