function answer1() {
    document.getElementById('answer1').innerHTML = 5 + 6
}

function answer2() {
    document.getElementById('answer2').innerHTML = 13 * 27
}

function answer3() {
    window.alert(972/23)
}

function answer4() {

    let a,b,c;
    a = 100;
    b = 899;
    c = a + b;
    document.getElementById('answer4').innerHTML = c
}

function answer5() {
    document.getElementById('answer5').innerHTML = 5 + 6
}

function answer6() {
    document.getElementById('answer6').innerHTML = 13 * 27
}

function answer7() {
    window.alert(972/23)
}

function answer8() {
    let a, b, c;
    a = 100;
    b = 899;
    c = a + b;
    document.getElementById('answer8').innerHTML = a + b
}


// ANSWER 9 TO ANSWER 16 NOT YET DONE
// ANSWER 9 TO ANSWER 16 NOT YET DONE
// ANSWER 9 TO ANSWER 16 NOT YET DONE
// ANSWER 9 TO ANSWER 16 NOT YET DONE


function answer9() {
    let age = document.getElementById('first1').value;
    let partyage = (age < 18) ? "lagot ka sa mama mo":"pwede na"
        document.getElementById('answer9').innerHTML = partyage

}


function answer10() {
    let first = Number(document.getElementById('first2').value);
    let second = Number(document.getElementById('second2').value);
    let answer = first + second;
        document.getElementById('answer10').innerHTML = answer;
        
}

function answer11(){
    let first = Number(document.getElementById('first3').value);
    let second = Number(document.getElementById('second3').value);
    let answer = first - second;
        document.getElementById('answer11').innerHTML = answer
}

function answer12() {
    let first = Number(document.getElementById('first4').value);
    let second = Number(document.getElementById('second4').value);
    let answer = first * second
        document.getElementById('answer12').innerHTML = answer
}

function answer13() {
    let first = document.getElementById('first5').value;
    let second = document.getElementById('second5').value;
    let answer = document.getElementById('answer13').innerHTML = first + second
}


function answer14() {
    let age = document.getElementById('first6').value;
    let answer = (age < 18) ? "isusumbong kita sa mama mo":"sige pasok";
        document.getElementById('answer14').innerHTML = answer
}

function answer15() {
    let first = Number(document.getElementById('first7').value);
    let second = Number(document.getElementById('second7').value);
        document.getElementById('answer15').innerHTML = 
}

// ANSWER 9 TO ANSWER 16 NOT YET DONE
// ANSWER 9 TO ANSWER 16 NOT YET DONE
// ANSWER 9 TO ANSWER 16 NOT YET DONE
// ANSWER 9 TO ANSWER 16 NOT YET DONE


function myFunction() {
    const me = {
        firstName : "Prince Jareb",
        middleName : "",
        lastName : "Lumbres",
        fullName: function (){
            return this.firstName + this.middleName + this.lastName;
        }
    };

        document.getElementById('demo1').innerHTML = me.fullName();

    
}