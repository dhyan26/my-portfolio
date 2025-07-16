
window.onload = () => {
  const header = document.querySelector("header");
  const greeting = document.createElement("p");
  const hour = new Date().getHours();
  if (hour < 12) {
    greeting.textContent = "Good Morning!";
  } else if (hour < 18) {
    greeting.textContent = "Good Afternoon!";
  } else {
    greeting.textContent = "Good Evening!";
  }
  header.appendChild(greeting);
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message Sent! Thank you for contacting me.");
    form.reset();
  });
});


const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑ Top";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px";
scrollBtn.style.display = "none";
scrollBtn.style.background = "#000";
scrollBtn.style.color = "#fff";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "5px";
scrollBtn.style.cursor = "pointer";
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

