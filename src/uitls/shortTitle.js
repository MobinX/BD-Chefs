//if the name is long more then 5 aphabets then splice and add ...
export function shortTitle(title, length = 5) {
    if (title.length > length) {

    return title.split("").slice(0, length).join("") + "...";
  }
  return title;
}