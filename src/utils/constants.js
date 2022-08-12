// Данные для плиток лабиринта
const cells = [
  {
    id: "cell1",
    title: "A1",
    siblings: ["cell2", "cell4"],
    coordinates: { x: 1, y: 1 }
  },
  {
    id: "cell2",
    title: "B1",
    siblings: ["cell1", "cell3", "cell5"],
    coordinates: { x: 2, y: 1 }
  },
  {
    id: "cell3",
    title: "C1",
    siblings: ["cell2", "cell6"],
    coordinates: { x: 3, y: 1 }
  },
  {
    id: "cell4",
    title: "A2",
    siblings: ["cell1", "cell5", "cell7"],
    coordinates: { x: 1, y: 2 }
  },
  {
    id: "cell5",
    title: "B2",
    siblings: ["cell2", "cell4", "cell6", "cell8"],
    coordinates: { x: 2, y: 2 }
  },
  {
    id: "cell6",
    title: "C2",
    siblings: ["cell3", "cell5", "cell9"],
    coordinates: { x: 3, y: 2 }
  },
  {
    id: "cell7",
    title: "A3",
    siblings: ["cell4", "cell8"],
    coordinates: { x: 1, y: 3 }
  },
  {
    id: "cell8",
    title: "B3",
    siblings: ["cell5", "cell7", "cell9"],
    coordinates: { x: 2, y: 3 }
  },
  {
    id: "cell9",
    title: "C3",
    siblings: ["cell6", "cell8"],
    coordinates: { x: 3, y: 3 }
  }
]

// Разметка для лабиринта
const tipsTop = [
  { data: "A" },
  { data: "B" },
  { data: "C" },
]
const tipsLeft = [
  { data: "1" },
  { data: "2" },
  { data: "3" },
]

// Количество шагов
const stepsCount = 10;

// константы для Редакса
const CHANGE_STARTING_POINT = 'CHANGE_STARTING_POINT';
const CLEAR_STARTING_POINT = 'CLEAR_STARTING_POINT';

const CHANGE_FINAL_POINT = 'CHANGE_FINAL_POINT';
const CLEAR_FINAL_POINT = 'CLEAR_FINAL_POINT';

const GET_ALL_POINTS = 'GET_ALL_POINTS';
const CLEAR_ALL_POINTS = 'CLEAR_ALL_POINTS';

const GET_ALL_ARROWS = 'GET_ALL_ARROWS';
const CLEAR_ALL_ARROWS = 'CLEAR_ALL_ARROWS';

const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

const SELECTED_CELL = 'SELECTED_CELL';
const CLEAR_SELECTED_CELL = 'CLEAR_SELECTED_CELL';


export {
  cells,
  tipsTop,
  tipsLeft,
  stepsCount,
  CHANGE_STARTING_POINT,
  CLEAR_STARTING_POINT,
  CHANGE_FINAL_POINT,
  CLEAR_FINAL_POINT,
  GET_ALL_POINTS,
  CLEAR_ALL_POINTS,
  GET_ALL_ARROWS,
  CLEAR_ALL_ARROWS,
  OPEN_MODAL,
  CLOSE_MODAL,
  SELECTED_CELL,
  CLEAR_SELECTED_CELL
}
