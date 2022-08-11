const cells = [
  {
    id: "cell1",
    siblings: ["cell2", "cell4"],
    coordinates: {x: 1, y: 1}
  },
  {
    id: "cell2",
    siblings: ["cell1", "cell3", "cell5"],
    coordinates: {x: 2, y: 1}
  },
  {
    id: "cell3",
    siblings: ["cell2", "cell6"],
    coordinates: {x: 3, y: 1}
  },
  {
    id: "cell4",
    siblings: ["cell1", "cell5", "cell7"],
    coordinates: {x: 1, y: 2}
  },
  {
    id: "cell5",
    siblings: ["cell2", "cell4", "cell6", "cell8"],
    coordinates: {x: 2, y: 2}
  },
  {
    id: "cell6",
    siblings: ["cell3", "cell5", "cell9"],
    coordinates: {x: 3, y: 2}
  },
  {
    id: "cell7",
    siblings: ["cell4", "cell8"],
    coordinates: {x: 1, y: 3}
  },
  {
    id: "cell8",
    siblings: ["cell5", "cell7", "cell9"],
    coordinates: {x: 2, y: 3}
  },
  {
    id: "cell9",
    siblings: ["cell6", "cell8"],
    coordinates: {x: 3, y: 3}
  }
]

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

export { cells, tipsTop, tipsLeft }