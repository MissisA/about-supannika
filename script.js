function scrollToHome() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToProject() {
  document.querySelector(".project").scrollIntoView({ behavior: "smooth" });
}

function scrollToSkills() {
  // แก้เป็น selector ที่ถูกต้องของ section skills ที่คุณมี
  document.querySelector(".skills").scrollIntoView({ behavior: "smooth" });
}

function scrollToCertificates() {
  // แก้เป็น selector ที่ถูกต้องของ section certificates ที่คุณมี
  document.querySelector(".certificates").scrollIntoView({ behavior: "smooth" });
}

function scrollToActivities() {
  // แก้เป็น selector ที่ถูกต้องของ section activities ที่คุณมี
  document.querySelector(".activities").scrollIntoView({ behavior: "smooth" });
}

function scrollToFooter() {
  document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
}

let certIndex = 0;
const slider = document.getElementById("certificateSlider");

  function updateCertSlider() {
    const slide = slider.children[0];
    const slideWidth = slide.getBoundingClientRect().width;
    const offset = certIndex * slideWidth;
    slider.style.transform = `translateX(-${offset}px)`;
  }

  function nextCert() {
    const total = slider.children.length;
    certIndex = (certIndex + 1) % total;
    updateCertSlider();
  }

  function prevCert() {
    const total = slider.children.length;
    certIndex = (certIndex - 1 + total) % total;
    updateCertSlider();
  }

  // เรียกเมื่อโหลดหน้าเสร็จ
  window.addEventListener("load", updateCertSlider);

  // เรียกเมื่อเปลี่ยนขนาดจอ
  window.addEventListener("resize", updateCertSlider);

const toggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("menu-mobile");

toggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const mobileButtons = mobileMenu.querySelectorAll("button");
mobileButtons.forEach(button => {
  button.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});