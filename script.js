document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("mobile-open"));
  }

  const form = document.getElementById("enquiryForm");
  if (form) {
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");
    const pkg = params.get("package");
    const productInput = document.getElementById("product");
    if (productInput && (product || pkg)) productInput.value = product || pkg;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // IMPORTANT: Replace this placeholder with your WhatsApp number.
      // Use country code without + or spaces, e.g. 91XXXXXXXXXX
      const WHATSAPP_NUMBER = "917411441962";

      const name = document.getElementById("name").value.trim();
      const mobile = document.getElementById("mobile").value.trim();
      const service = document.getElementById("service").value;
      const item = document.getElementById("product").value.trim();
      const location = document.getElementById("location").value.trim();
      const message = document.getElementById("message").value.trim();

      const text =
`Hello Viraj CCTV & Computer Services,

I would like to make an enquiry.

Name: ${name}
Mobile: ${mobile}
Service: ${service}
Product/Package: ${item || "Not specified"}
Location: ${location || "Not specified"}
Requirement: ${message || "Please contact me."}`;

      if (WHATSAPP_NUMBER.includes("X")) {
        alert("Please replace WHATSAPP_NUMBER in script.js with your WhatsApp Business number before publishing.");
        return;
      }

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    });
  }
});
