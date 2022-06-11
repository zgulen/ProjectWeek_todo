//* ======================================================
//*                     TODO APP
//* ======================================================
//? Selectors
const btn = document.getElementById('todo-button');
const todoInput = document.getElementById('todo-input');
const todoUl = document.getElementById('todo-ul');

//? Baslangicta input aktif olsun
window.onload = function () {
  todoInput.focus();
};

//? Add Buton Event'inin tanimanmasi
btn.addEventListener('click', (e) => {
  if (!todoInput.value) {
    alert('Please enter your todo');
  } else {
    todoUl.innerHTML += `
    <li>
      <i class="fa fa-check"></i>
      <p>${todoInput.value}</p>
      <i class="fa fa-trash"></i>
    </li>`;
    todoInput.value = '';
  }
});

//? Klavyeden enter tusuna basilmasi ile add butonunun click fonksiyonunun cagrilmasi
todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    btn.click();
  }
});

//? delete ve ok butonları için event tanimlamasi
todoUl.addEventListener('click', (e) => {
  //!Event, sil butonlarının birisinden geldi ise
  if (e.target.classList.contains('fa-trash')) {
    //? ilgili li elementini silerek DOM'u güncelle
    e.target.parentElement.remove();
  }

  //!Event, silme veya ok butonlarından geldi ise
  if (e.target.classList.contains('fa-check')) {
    //? ilgili li elementinde checked adinda bir class varsa bunu sil
    if (e.target.parentElement.classList.contains('checked')) {
      e.target.parentElement.classList.remove('checked');
    } else {
      //? ilgili li elementinde checked adinda bir class yoksa ekle
      e.target.parentElement.classList.add('checked');
    }
  }
});
