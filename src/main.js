function internetConnection() {
  return {
    isOnline: navigator.onLine,
    init() {
      this.checkConnection();
      window.addEventListener("online", () => this.checkConnection());
      window.addEventListener("offline", () => this.checkConnection());
    },
    checkConnection() {
      this.isOnline = navigator.onLine;
      document.getElementById("modal").style.display = this.isOnline
        ? "none"
        : "flex";
      document.getElementById("modal-message").textContent = this.isOnline
        ? ""
        : "You are offline. Please check your internet connection.";
    },
  };
}
window.onload = () => {
  const connection = internetConnection();
  connection.init();
};

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
