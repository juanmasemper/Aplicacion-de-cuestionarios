import type { Question } from '../types';

const questions: Question[] = [
  {
    id: 'q1',
    text: '¿Cuál es la capital de Francia?',
    answers: [
      { id: 'a', text: 'Londres' },
      { id: 'b', text: 'Berlín' },
      { id: 'c', text: 'París' },
      { id: 'd', text: 'Madrid' },
    ],
    correctAnswerId: 'c',
  },
  {
    id: 'q2',
    text: '¿Cuántos planetas tiene el sistema solar?',
    answers: [
      { id: 'a', text: '7' },
      { id: 'b', text: '8' },
      { id: 'c', text: '9' },
      { id: 'd', text: '10' },
    ],
    correctAnswerId: 'b',
  },
  {
    id: 'q3',
    text: '¿Qué elemento químico tiene el símbolo "O"?',
    answers: [
      { id: 'a', text: 'Oro' },
      { id: 'b', text: 'Osmio' },
      { id: 'c', text: 'Oxígeno' },
      { id: 'd', text: 'Oganesón' },
    ],
    correctAnswerId: 'c',
  },
  {
    id: 'q4',
    text: '¿En qué año llegó el ser humano a la Luna por primera vez?',
    answers: [
      { id: 'a', text: '1965' },
      { id: 'b', text: '1967' },
      { id: 'c', text: '1969' },
      { id: 'd', text: '1971' },
    ],
    correctAnswerId: 'c',
  },
  {
    id: 'q5',
    text: '¿Cuál es el océano más grande del mundo?',
    answers: [
      { id: 'a', text: 'Atlántico' },
      { id: 'b', text: 'Índico' },
      { id: 'c', text: 'Ártico' },
      { id: 'd', text: 'Pacífico' },
    ],
    correctAnswerId: 'd',
  },
  {
    id: 'q6',
    text: '¿Cuántos lados tiene un hexágono?',
    answers: [
      { id: 'a', text: '5' },
      { id: 'b', text: '6' },
      { id: 'c', text: '7' },
      { id: 'd', text: '8' },
    ],
    correctAnswerId: 'b',
  },
  {
    id: 'q7',
    text: '¿Quién escribió "Don Quijote de la Mancha"?',
    answers: [
      { id: 'a', text: 'Lope de Vega' },
      { id: 'b', text: 'Francisco de Quevedo' },
      { id: 'c', text: 'Miguel de Cervantes' },
      { id: 'd', text: 'Garcilaso de la Vega' },
    ],
    correctAnswerId: 'c',
  },
  {
    id: 'q8',
    text: '¿Cuál es el animal terrestre más rápido?',
    answers: [
      { id: 'a', text: 'León' },
      { id: 'b', text: 'Guepardo' },
      { id: 'c', text: 'Caballo' },
      { id: 'd', text: 'Avestruz' },
    ],
    correctAnswerId: 'b',
  },
  {
    id: 'q9',
    text: '¿Cuántos cromosomas tiene una célula humana normal?',
    answers: [
      { id: 'a', text: '23' },
      { id: 'b', text: '44' },
      { id: 'c', text: '46' },
      { id: 'd', text: '48' },
    ],
    correctAnswerId: 'c',
  },
  {
    id: 'q10',
    text: '¿Qué lenguaje de programación creó Guido van Rossum?',
    answers: [
      { id: 'a', text: 'Ruby' },
      { id: 'b', text: 'Java' },
      { id: 'c', text: 'Python' },
      { id: 'd', text: 'Perl' },
    ],
    correctAnswerId: 'c',
  },
];

export default questions;
