import {api} from "../api";

const form = document.querySelector('.search-form'),
  searchInput = document.querySelector('.search-bar'),
  output = document.querySelector('#output');


const createModal = (statusText) => {
  const modalWindow = document.createElement('div');
  modalWindow.className = 'modal';
  modalWindow.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>${statusText}!!!!!!</p>
          </div>
    `;
  document.body.appendChild(modalWindow)
};

// const closeModal = event => {
//   const target = event.target;
//
//     if (target.classList.contains('modal') || target.classList.contains('close') ||
//       event.keyCode === 27) {
//
//         document.querySelector('.modal').style.display = '';
//   }
// };

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  try {
    const data = await api.users.getUserRepos(searchInput.value);

    data.forEach(item => {
      output.innerHTML += `
                        <div class="output-wrap">
                            <h3>${item.name}</h3>
                            <a href="${item.html_url}" class="output-link">${item.html_url}</a>
                        </div>`;
    });
    searchInput.value = '';
  } catch (e) {
    createModal(e.message);
  }
});


