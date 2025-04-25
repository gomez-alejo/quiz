// Importación de React y hooks necesarios para manejar el estado
import React, { useState } from 'react';
// Importación de los estilos CSS y las preguntas desde un archivo de datos externo
import './App.css';
import questions from './data/questions'; // Importando las preguntas

// Componente principal de la aplicación
const App = () => {
  // Declaración de los estados utilizando el hook useState
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Índice de la pregunta actual
  const [score, setScore] = useState(0); // Puntaje total
  const [isCompleted, setIsCompleted] = useState(false); // Estado para determinar si el quiz ha finalizado
  const [backgroundColor, setBackgroundColor] = useState('#fff'); // Color de fondo inicial (blanco)

  // Función para manejar la respuesta seleccionada
  const handleAnswer = (isCorrect) => {
    // Si la respuesta es correcta, se suma 5 puntos al puntaje
    if (isCorrect) {
      setScore(score + 5);
    }

    // Cambiar el color de fondo del contenedor de preguntas de forma aleatoria
    const colors = ['#f0f8ff', '#ffe4e1', '#d3f8e2', '#f5e5c7', '#e2d1f7', '#f9e2e2']; 
    setBackgroundColor(colors[Math.floor(Math.random() * colors.length)]); // Selección aleatoria de color de fondo

    // Verificar si aún hay preguntas para mostrar
    if (currentQuestionIndex + 1 < questions.length) {
      // Si hay más preguntas, avanzamos a la siguiente
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Si no hay más preguntas, se marca como finalizado el quiz
      setIsCompleted(true);
    }
  };

  // Función para reiniciar el quiz
  const handleReset = () => {
    setScore(0); // Reiniciar puntaje
    setCurrentQuestionIndex(0); // Reiniciar índice de preguntas
    setIsCompleted(false); // Marcar que el quiz no está completado
    setBackgroundColor('#fff'); // Reiniciar color de fondo al inicial
  };

  return (
    <div className="app">
      {/* El contenedor principal de la tarjeta del quiz */}
      <div className="quiz-card" style={{ backgroundColor }}>
        {/* Mostrar las preguntas y respuestas si el quiz no está completado */}
        {!isCompleted ? (
          <div>
            <h1>Quiz React</h1> {/* Título del quiz */}
            <h2>{questions[currentQuestionIndex].question}</h2> {/* Mostrar la pregunta actual */}
            {/* Contenedor de las opciones de respuesta */}
            <div className="options">
              {/* Mapeamos las opciones y creamos un botón para cada una */}
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index} // Asignamos una key única por cada opción
                  className="option-button"
                  // Al hacer clic, verificamos si la opción es la correcta
                  onClick={() => handleAnswer(option === questions[currentQuestionIndex].answer)}
                >
                  {option} {/* Mostrar la opción */}
                </button>
              ))}
            </div>
          </div>
        ) : (
          // Si el quiz está completado, mostrar el resultado
          <div className="result">
            <h2>¡Has completado el quiz!</h2> {/* Mensaje final */}
            <p>Tu puntaje es: {score}</p> {/* Mostrar el puntaje final */}
            {/* Botón para reiniciar el quiz */}
            <button className="reset-button" onClick={handleReset}>Reiniciar Quiz</button>
          </div>
        )}
      </div>
    </div>
  );
};

// Exportamos el componente para que pueda ser usado en otras partes de la aplicación
export default App;
