let pollTitle = document.querySelector("#poll__title");
let pollAnswers= document.querySelector("#poll__answers");

let xhr = new XMLHttpRequest();
xhr.open('GET','https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4){
    let poll = JSON.parse(xhr.responseText).data;
    pollTitle.textContent = poll.title;
    poll.answers.forEach(answer => {
      let btn = document.createElement("button");
      btn.className = "poll__answer";
      btn.textContent = answer;
      btn.addEventListener("click",() =>alert("Спасибо, ваш голос засчитан!"))
      pollAnswers.appendChild(btn);
    });
  }
}