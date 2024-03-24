let currentPage = 1;

document.querySelectorAll(".arrowButton").forEach((button) => {
  button.addEventListener("click", function () {
    currentPage++;
    if (currentPage > 10) {
      currentPage = 1;
    }
    showPage(currentPage);
  });
});

function showPage(pageNumber) {
  document.querySelectorAll(".page").forEach((page) => {
    page.style.display = "none";
  });
  document.getElementById(`page${pageNumber}`).style.display = "block";
}
