
//Method to close and open the Game categories in the Sidebar
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;

    const isOpen = getComputedStyle(content).display === 'flex';

    if (isOpen) {
      btn.textContent = btn.textContent.slice(0, -1) + "▶";
      content.style.display = 'none';
    }else {
      btn.textContent = btn.textContent.slice(0, -1) + "▼";
      content.style.display = 'flex';
    }
  });
});
