const courses = [
  {
    id: 1,
    title: "Tehnologii Avansate de Programare",
    slug: "~dangota/",
    authorId: 5,
    category: "JavaScript",
  },
  {
    id: 2,
    title: "Asigurarea calitatii programelor",
    slug: "~iuliapopa/d/ct.html",
    authorId: 6,
    category: "Software Testing",
  },
  {
    id: 3,
    title: "Procesarea numerica a semnalelor ",
    slug: "/~mtrusca/pns.html",
    authorId: 7,
    category: "Numerical Filters",
  },
  {
    id: 4,
    title: "Sisteme evoluate pentru transmisia informatiei",
    slug: "~avramc/",
    authorId: 8,
    category: "Wireless comunication",
  },
];

const authors = [
  { id: 1, name: "Honoriu Valean" },
  { id: 2, name: "Liviu Miclea" },
  { id: 3, name: "Petru Dobra" },
  { id: 4, name: "Adina Astilean" },
  { id: 5, name: "Dan Gota" },
  { id: 6, name: "Iulia Stefan" },
  { id: 7, name: "Mirela Dobra" },
  { id: 8, name: "Camelia Avram" },
  { id: 9, name: "Tiberiu Letia" },
  { id: 10, name: "Mihai Hulea" },
  { id: 11, name: "Alexandru Mitrea" },
  { id: 12, name: "Levente Tamas" },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
};
