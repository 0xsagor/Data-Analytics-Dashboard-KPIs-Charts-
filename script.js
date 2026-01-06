const data = {
  users: 12450,
  revenue: 38200,
  conversion: 4.7,
  monthly: [3200, 4100, 3900, 5200, 6100, 7400]
};

document.getElementById("users").innerText = data.users;
document.getElementById("revenue").innerText = "$" + data.revenue;
document.getElementById("conversion").innerText = data.conversion + "%";

const ctx = document.getElementById("chart").getContext("2d");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan","Feb","Mar","Apr","May","Jun"],
    datasets: [{
      label: "Revenue",
      data: data.monthly
    }]
  }
});
