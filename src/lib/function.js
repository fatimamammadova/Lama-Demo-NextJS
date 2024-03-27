export function formatDate(time) {
  const date = new Date(time);
  const day = String(date.getDate()).padStart(2, "0"); // Convert to string before padStart
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}
