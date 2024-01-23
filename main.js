document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");

  faqContainer.addEventListener("click", (e) => {
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

    const allFaqGroups = faqContainer.querySelectorAll(".faq-group");

    // close other open faq body and toggle icon
    allFaqGroups.forEach((currFaqGroup) => {
      if (currFaqGroup !== faqGroup) {
        const icon = currFaqGroup.querySelector(".faq-group-header i");
        const body = currFaqGroup.querySelector(".faq-group-body");

        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");

        body.classList.remove("open");
      }
    });
  });
});
