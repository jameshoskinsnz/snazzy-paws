const modal = document.querySelector('#priceModal');
const openBtn = document.querySelector('#openModal');
const closeBtn = document.querySelector('#closeModal');

openBtn.onclick = () => modal.showModal(); // Opens it
closeBtn.onclick = () => modal.close();    // Closes it