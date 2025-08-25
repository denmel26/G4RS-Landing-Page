 function openModal(element) {
      const img = element.querySelector('img');
      const title = element.querySelector('span').innerText;
      document.getElementById('modalImage').src = img.src;
      document.getElementById('modalTitle').innerText = title;
      document.getElementById('imageModal').style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('imageModal').style.display = 'none';
    }

    window.onclick = function(event) {
      const modal = document.getElementById('imageModal');
      if (event.target === modal) {
        closeModal();
      }
    }
