function showAlert(message) {
  alert(message);
}

function showProductDetail(name, price, description) {
  document.getElementById("modal-title").innerText = name;
  document.getElementById("modal-price").innerText = price;
  document.getElementById("modal-desc").innerText = description;

  document.getElementById("product-detail-modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("product-detail-modal").classList.add("hidden");
}

window.onclick = function (event) {
  const modal = document.getElementById("product-detail-modal");
  if (event.target == modal) {
    modal.classList.add("hidden");
  }
};
