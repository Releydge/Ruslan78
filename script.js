document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const query = document.getElementById("searchInput").value.toLowerCase();
    if (query.length < 4 || query.value == typeof 4) {
      alert("Введений номер не вірний! Мало цифр!");
    } else {
      fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
          const results = data.filter((item) =>
            item.name.toLowerCase().includes(query)
          );
          displayResults(results);
        });
    }
  });

function displayResults(results) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";
  if (results.length > 0) {
    results.forEach((result) => {
      const resultItem = document.createElement("div");
      resultItem.classList = "res-item";
      resultItem.innerHTML = `${result.name} </br> 
      ${result.info} </br></br>`;
      resultsDiv.appendChild(resultItem);
    });
  } else {
    resultsDiv.textContent = "Нічого не знайдено";
  }
}

document.getElementById("searchInput").addEventListener("click", () => {
  document.getElementById("searchInput").value = "";
});
