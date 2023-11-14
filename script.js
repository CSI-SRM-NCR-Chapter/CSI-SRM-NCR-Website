// NavBar
const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener('click', function () {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  }
  else {
    menu.classList.add('hidden');
  }
})

// Leads 
const cards = document.querySelectorAll('.card');

cards.forEach(el => {
  el.addEventListener('mouseenter', () => {
    const eleInfo = el.querySelector('.card__information');
    el.classList.toggle('card--active');

    if (!el.classList.contains('card--active'))
      eleInfo.classList.toggle('card__information--collapse')
    else
      setTimeout(() => eleInfo.classList.toggle('card__information--collapse'), 270);
  });
});

// Form Submission 
// function submitForm(formId) {
//   const form = document.getElementById(formId);
//   form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const data = new FormData(form);
//     const action = e.target.action;
//     fetch(action, {
//       method: 'POST',
//       body: data,
//     })
//       .then(() => {
//         // alert("Success!");
//         // Display the success popup
//         // const successPopup = document.getElementById('successPopup');
//         // successPopup.style.display = 'block';

//         // // Hide the popup after a delay (e.g., 3 seconds)
//         // setTimeout(() => {
//         //     successPopup.style.display = 'none';
//         // }, 3000);

//         const successPopup = document.getElementById('successPopup');
//         successPopup.style.display = 'flex'; // Use 'flex' to center content vertically
//         setTimeout(() => {
//           successPopup.style.display = 'none';
//         }, 5000);
//       })
//       .catch(error => {
//         console.error('Error!', error.message);
//       });
//   });
// }

// window.addEventListener("load", function () {
//   submitForm('register-form');
//   submitForm('contact-form');
// });


function submitForm(formId) {
  const form = document.getElementById(formId);
  const loadingSpinner = document.getElementById('loadingSpinner');

  form.addEventListener("submit", function (e) {
      e.preventDefault();
      loadingSpinner.classList.remove('hidden'); // Show the loading spinner

      const data = new FormData(form);
      const action = e.target.action;

      fetch(action, {
          method: 'POST',
          body: data,
      })
      .then(() => {
          // Hide the loading spinner
          loadingSpinner.classList.add('hidden');

          // Display the success popup
          const successPopup = document.getElementById('successPopup');
          successPopup.style.display = 'flex'; // Use 'flex' to center content vertically

          // Hide the popup after a delay (e.g., 5 seconds)
          setTimeout(() => {
              successPopup.style.display = 'none';
          }, 5000);
      })
      .catch(error => {
          console.error('Error!', error.message);

          // Hide the loading spinner on error
          loadingSpinner.classList.add('hidden');
      });
  });
}

window.addEventListener("load", function () {
  submitForm('register-form');
  submitForm('contact-form');
});