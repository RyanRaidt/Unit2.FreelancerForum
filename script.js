const names = ["Alice", "Bob", "Carol", "David"];

const occupations = ["Writer", "Teacher", "Programmer", "Designer"];

const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
];

function renderFreelancers() {
  const freelancersList = document.getElementById("freelancerList");
  freelancersList.innerHTML = "";

  freelancers.forEach((freelancer) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${freelancer.name}</td>
            <td>${freelancer.occupation}</td>
            <td>$${freelancer.price}</td>
        `;
    freelancersList.appendChild(row);
  });
}

function calculateAveragePrice() {
  if (freelancers.length === 0) return 0;
  const total = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price, 0);
  return Math.round(total / freelancers.length);
}
function updateAveragePrice() {
  const averagePrice = calculateAveragePrice();
  document.getElementById(
    "averagePrice"
  ).textContent = `Average Starting Price: $${averagePrice}`;
}
function generateFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = Math.floor(Math.random() * 100) + 20;
  const newFreelancer = {
    name: randomName,
    occupation: randomOccupation,
    price: randomPrice,
  };
  freelancers.push(newFreelancer);
}
setInterval(() => {
  generateFreelancer();
  renderFreelancers();
  updateAveragePrice();
}, 5000);
