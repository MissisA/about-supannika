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
