const form = document.getElementById("budgetForm");
const result = document.getElementById("result");
const budgetOutput = document.getElementById("budgetOutput");
const materialSelect = document.getElementById("material");

console.log(material);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const material = form.material.value;
  const qt_chapas = form.qt_chapas.value;
  const area = form.area.value;
  const price = form.price.value;

  const total = area * price;

  budgetOutput.textContent = `O orçamento para ${qt_chapas} chapas de ${material} é R$ ${total.toFixed(
    2
  )}`;
  result.style.display = "block";
});

const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", function () {
  form.reset();
  budgetOutput.textContent = "";
  result.style.display = "none";
});

materialSelect.addEventListener("change", function () {
    const selectedMaterial = materialSelect.value;
    const priceInput = document.getElementById("price");
    const qt_chapas = document.getElementById("qt_chapas");
    qt_chapas.value = "";

  switch (selectedMaterial) {
    case "granite":
        qt_chapas.value = 10; // Default stock for granite
        priceInput.value = 1500;
        break;
    case "marble":
        qt_chapas.value = 12; // Default stock for marble
        priceInput.value = 2000;
        break;
    case "quartz":
        qt_chapas.value = 8; // Default stock for quartz
        priceInput.value = 2500;
        break;
    default:
        priceInput.value = "";
  }
});
