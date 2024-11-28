document.getElementById('submit-btn').addEventListener('click', () => {
    const correctAnswers = {
      q1: "JavaScript",
      q2: "Hypertext Markup Language",
      q3: "Cascading Style Sheets",
      q4: "<h1>",
      q5: "console.log()"
    };
  
    let score = 0;
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
  
    // Проверяем ответы
    for (let question in correctAnswers) {
      const userAnswer = form[question].value;
      if (userAnswer === correctAnswers[question]) {
        score++;
      }
    }
  
    // Отображаем результат
    const totalQuestions = Object.keys(correctAnswers).length;
    if (score === totalQuestions) {
      resultDiv.textContent = `Отлично! Вы ответили правильно на все ${totalQuestions} вопросов! 🎉`;
    } else if (score > 0) {
      resultDiv.textContent = `Хорошо! Вы ответили правильно на ${score} из ${totalQuestions} вопросов.`;
    } else {
      resultDiv.textContent = `Увы! Вы не ответили правильно ни на один вопрос. Попробуйте снова!`;
    }
  });
  