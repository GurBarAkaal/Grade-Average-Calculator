// GRADE CALCULATOR BY HARSHWEEN MULTANI

// EVENT LISTENER
document.getElementById("btn").addEventListener("click", calculateAverage);
// EVENT FUNCTION
function calculateAverage() {
  let css1 = +document.getElementById("css1").value;
  let sp1 = +document.getElementById("sp1").value;
  let sp2 = +document.getElementById("sp2").value;
  let css2 = +document.getElementById("css2").value;
  let pa = +document.getElementById("pa").value;
  //PROCESS
  let testWeight = +document.getElementById("testWeight").value;
  let testWeightIndividual = +document.getElementById("testWeightIndividual")
    .value;
  let testScore = +document.getElementById("testScore").value;
  // Validate that weights are within a valid range
  if (
    testWeight < 0 ||
    testWeight > 100 ||
    testWeightIndividual < 0 ||
    testWeightIndividual > 100
  ) {
    alert("Weights should be between 0 and 100.");
    return;
  }

  // Validate that the score is within a valid range
  if (testScore < 0 || testScore > 100) {
    alert("Test score should be between 0 and 100.");
    return;
  }

  // Calculate Output
  let weightedAverage =
    (css1 * (1 - testWeight / 100) +
      sp1 * (1 - testWeight / 100) +
      sp2 * (1 - testWeight / 100) +
      css2 * (1 - testWeight / 100) +
      pa * (1 - testWeight / 100)) *
      (1 - testWeightIndividual / 100) +
    testScore * (testWeightIndividual / 100);

  document.getElementById("sentence").innerHTML = weightedAverage.toFixed(2);
}
