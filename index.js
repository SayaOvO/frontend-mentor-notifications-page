document.addEventListener("DOMContentLoaded", () => {
  const markAsRead = document.querySelector(".mark-as-read");
  const allUnreadNotifications = document.querySelectorAll(
    ".notification-content.unread",
  );

  markAsRead.addEventListener("click", () => {
    allUnreadNotifications.forEach((notification) => {
      console.log("hmm?", notification);
      notification.classList.remove("unread");
    });
  });
});
