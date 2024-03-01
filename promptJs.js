        //GETTING VALUES FROM PROMPT KEYBOARD
        //let name=prompt("Please write your name.") //An input is received from the user by typing prompt.
        //console.log(name)

        //EXAMPLE
        // var num1="123"   //added Number 1 and Number 2 not mathematically but textually, that is, strings, and wrote them side by side because we defined them textually in parentheses.
        // var num2=123
        // let total=num1+num2
        // console.log(total)

        //Here, the result is 246 because it is written mathematically, not in quotes. If we are going to do the above operation, we need to apply transformation.
        // var num1=123
        // var num2=123
        // var total=num1+num2
        // console.log(total)

        //TRANSFORMATION
        // var num1="123"
        // var num2=123
        // let num3=parseInt(num1) // We made a definition called let number3 and converted the string expression number1 into an integer expression with parseInt, as a result, we found the result 246 in the addition operation. 
        // const total=num2+num3
        // alert(total)

        //ONE MORE EXAMPLE OF ANOTHER METHOD
        // var num1="123.33"
        // var num2=123
        // let num3=parseFloat(sayi1)
        // const total=num2+num3
        // document.write(total)
        // alert(typeof(num3)) //When we asked about its type, said that it was number, that is, float, that is, double.

        //THERE IS ALSO AN EASY CONVERSION METHOD
        // var num1="123"
        // let num2="123"
        // var num3=+num1
        // let num4=+num2
        // const total=num3+num4
        // alert(total)

        //MULTIPLICATION OPERATIONS ARE CARRIED OUT WITHOUT THE NEED FOR ROTATION
        // var num1="123"
        // console.log(num1*2)
        // ANSWER = 246

        //IF THERE IS A STRING EXPRESSION, i.e. a LETTER, IN ADDITION TO THE NUMERICAL EXPRESSION, WE WILL OUTPUT NAN (NOT A NUMBER).
        // var num1="123a"
        // console.log(num1*2)
        // ANSWER = NaN ( NOT A NUMBER)

        //HOW CAN WE CONVERT A VALUE WE RECEIVE FROM THE KEYBOARD?
        // let num1=+prompt("Please write a number1: ")
        // let num2=+prompt("Please write a number2: ") //With the +prompt statement, we notify the user that a number should be received. If we define a variable with let or const, we do not need to use var let or const again.
        // var total=num1+num2
        // alert(total)

        //OTHERWISE
        // let num1=parseFloat(prompt("Please enter a number")) // In this way, we can convert the string expression we receive from the user into a number.
        // let num2=parseInt(prompt("Please enter a number"))
        // var total=num1+num2
        // alert(total)