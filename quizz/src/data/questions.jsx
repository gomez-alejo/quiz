// data/questions.js
const questions = [
    {
      question: "¿Qué es un componente de orden superior (HOC) en React?",
      options: [
        "Un componente que recibe props y las pasa a otros componentes",
        "Un patrón para modificar un componente sin modificar su código original",
        "Un hook de estado",
        "Un tipo de componente renderizado condicionalmente"
      ],
      answer: "Un patrón para modificar un componente sin modificar su código original"
    },
    {
      question: "¿Qué es la reconciliación en React?",
      options: [
        "El proceso de comparar y actualizar el DOM virtual con el real",
        "El proceso de eliminar componentes obsoletos",
        "La función que se llama cuando se monta un componente",
        "Un algoritmo para manejar la carga de datos"
      ],
      answer: "El proceso de comparar y actualizar el DOM virtual con el real"
    },
    {
      question: "¿Cuál es la diferencia entre un componente controlado y uno no controlado en React?",
      options: [
        "Un componente controlado maneja su propio estado, mientras que un no controlado depende del DOM",
        "Un componente controlado utiliza props, mientras que un no controlado no las usa",
        "No hay diferencia, ambos son lo mismo",
        "Un componente controlado es más eficiente en términos de rendimiento"
      ],
      answer: "Un componente controlado maneja su propio estado, mientras que un no controlado depende del DOM"
    },
    {
      question: "¿Qué hace el hook `useRef` en React?",
      options: [
        "Hace que un componente se vuelva funcional",
        "Permite acceder directamente al DOM de un componente",
        "Permite crear referencias a props",
        "Usa valores de un componente en otros componentes"
      ],
      answer: "Permite acceder directamente al DOM de un componente"
    },
    {
      question: "¿Cuál es la principal ventaja de usar `React.memo()`?",
      options: [
        "Optimizar el rendimiento al evitar renderizados innecesarios de componentes funcionales",
        "Hacer que un componente tenga un estado persistente",
        "Reducir el tamaño del archivo de JavaScript",
        "Evitar la renderización de componentes hijos"
      ],
      answer: "Optimizar el rendimiento al evitar renderizados innecesarios de componentes funcionales"
    },
    {
      question: "¿Qué es el Context API de React?",
      options: [
        "Un hook para manejar el estado global en una aplicación React",
        "Una herramienta para enviar solicitudes HTTP",
        "Un método para manejar errores en React",
        "Un mecanismo para compartir datos entre componentes sin usar props"
      ],
      answer: "Un mecanismo para compartir datos entre componentes sin usar props"
    }
  ];
  
  export default questions;
  