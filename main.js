


const solutionsBox = document.querySelector('.solutions-box');
const itemLeft = document.querySelectorAll('.item-left');
const onePlaceBoxLinks = document.querySelectorAll('.one-place-box ul li a');
const down = document.querySelectorAll('.questions .questions-box .questions-item .down');
const up = document.querySelectorAll('.questions .questions-box .questions-item .up');
const textHide = document.querySelectorAll('.text-hide');

// PRIKAZIVANJE STRELICE DOLE KOD KLIKA
down.forEach((d,i)=> {
    d.addEventListener('click', function(e){
        console.log(e);
        console.log(i);
        e.target.style.display = 'none';
        up[i].style.display= 'block';
        textHide[i].style.display = 'block';
    })
})

// PRIKAZIVANJE STRELICE GORE KOD KLIKA
up.forEach((d,i)=> {
    d.addEventListener('click', function(e){
        console.log(e);
        console.log(i);
        e.target.style.display = 'none';
        down[i].style.display= 'block';
        textHide[i].style.display = 'none';
    })
})


// TAMNI BACKGROUND KOD KLIKA NA LINK
onePlaceBoxLinks.forEach(link=> {
link.classList.remove('active');
link.addEventListener('click', function(e){
    e.preventDefault();
   onePlaceBoxLinks.forEach(a=> {
    a.classList.remove('active');
   })
    e.target.classList.add('active');
})
})

// ANIMACIJA SA LIJEVE STRANE
const observBox = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.remove('item-left', entry.isIntersecting);
            entry.target.classList.add('process-box-item', entry.isIntersecting);
            if(!entry.isIntersecting) entry.target.classList.remove('process-box-item', entry.isIntersecting);
        if(entry.isIntersecting) observBox.unobserve(entry.target)
        })

}, {
    threshold: 0.3,
})


itemLeft.forEach(left => {
    observBox.observe(left)
})

// ANIMACIJA POJAVLJIVANJA SEKCIJE 
const showItems = function(entries, observer){
    const [entry]= entries;
    if (entry.isIntersecting) {
        entry.target.classList.remove('hide-items');
    }
   
}

const observer = new IntersectionObserver(
    showItems, {
       root:null,
       threshold: 0.40, 
    });

observer.observe(solutionsBox);



