document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function (e) {

    const targetId = this.getAttribute('href');

    if(targetId.length > 1){

      e.preventDefault();

      const target = document.querySelector(targetId);

      if(target){

        target.scrollIntoView({
          behavior:'smooth'
        });

      }

    }

  });

});

const cards = document.querySelectorAll(
  ".property-card, .feature-box, .booking-card, .stay-card, .developer-card"
);

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.classList.add("show-card");

    }

  });

},{
  threshold:0.15
});

cards.forEach(card => {

  card.classList.add("hidden-card");

  observer.observe(card);

});