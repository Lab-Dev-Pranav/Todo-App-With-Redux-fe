const STORAGE_KEY = "todos";
const DATE_KEY = "todos_date";

export function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  localStorage.setItem(DATE_KEY, new Date().toDateString());
}

export function loadTodos() {
  const savedTodos = localStorage.getItem(STORAGE_KEY);
  const savedDate = localStorage.getItem(DATE_KEY);
  const today = new Date().toDateString();

  if (savedTodos && savedDate === today) {
    return JSON.parse(savedTodos);
  }
  return [];
}
