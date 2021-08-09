const btnScore = document.getElementById('calculate-score')

btnScore.addEventListener('click', function() {
    
    const inputScore = document.getElementById('score').value;
    const targetArray = inputScore.split(',');

    let total = 0;
    const count = targetArray.length;

    for (let i = 0; i < count; i++) {
        let score = parseInt(targetArray[i]);
            total = total + score

            console.log(total)
    }

    const totalScore = total / count;
    const outputScore = totalScore.toFixed(1)
    const orderDESC = targetArray.sort(function(a, b){return b-a});



    document.getElementById('target').innerText = orderDESC;
    document.getElementById('result').innerText = outputScore;


    const finalGrade = document.getElementById('finalGrade')
    if (totalScore >= 90) {
        finalGrade.innerText = "A"
    }else if (totalScore <=90 && totalScore >= 80){
        finalGrade.innerText = "B"
    }else if (totalScore <=80 && totalScore >= 70){
        finalGrade.innerText = "C"
    }else if (totalScore <=70 && totalScore >= 60){
        finalGrade.innerText = "D"
    }else if (totalScore < 60){
        finalGrade.innerText = "F"
    }

})
    
