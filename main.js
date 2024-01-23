document.addEventListener("DOMContentLoaded", main);

function main() {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const faqContainer = document.querySelector(".faq-content");

  hamburgerButton.addEventListener("click", handleMobileMenuPress);
  faqContainer.addEventListener("click", (e) =>
    handleFaqContainerPress(e, faqContainer)
  );
}

function handleMobileMenuPress() {
  const mobileMenu = document.querySelector(".mobile-menu");

  mobileMenu.classList.toggle("active");
}

function handleFaqContainerPress(e, faqContainerRef) {
  const faqGroupHeader = e.target.closest(".faq-group-header");

  if (faqGroupHeader === null) return;

  const faqGroupHeaderIcon = faqGroupHeader.querySelector("i");

  const faqGroup = faqGroupHeader.parentElement;
  const faqGroupBody = faqGroup.querySelector(".faq-group-body");

  // toggle icons
  faqGroupHeaderIcon.classList.toggle("fa-plus");
  faqGroupHeaderIcon.classList.toggle("fa-minus");

  // toggle body open status
  faqGroupBody.classList.toggle("open");

  const allFaqGroups = faqContainerRef.querySelectorAll(".faq-group");

  // close other open faq body and toggle their icon
  allFaqGroups.forEach((currFaqGroup) => {
    if (currFaqGroup !== faqGroup) {
      const icon = currFaqGroup.querySelector(".faq-group-header i");
      const body = currFaqGroup.querySelector(".faq-group-body");

      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");

      body.classList.remove("open");
    }
  });
}
