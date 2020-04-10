export function getDateToday() {
  let today = new Date();
  let date = today.toLocaleString("en-US", { month: "long", day: "numeric" });

  return `${date}, ${today.toLocaleTimeString()}`;
}

export function getExpirationDate(state = "freeze") {
  let today = new Date();

  let newDate;
  if (state === "freeze")
    newDate = new Date(today.setMonth(today.getMonth() + 3));
  else newDate = new Date(today.setDate(today.getDate() + 3));
  let date = newDate.toLocaleString("en-US", { month: "long", day: "numeric" });

  return `${date}, ${newDate.toLocaleTimeString()}`;
}
