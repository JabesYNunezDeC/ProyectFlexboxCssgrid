window.onload = () => {

document.querySelector('.menusign').addEventListener('click',() =>{
	document.querySelector('.navegacion').classList.toggle('show');
});

ScrollReveal().reveal('.targeta');

ScrollReveal().reveal('.newstand', { delay: 500 });
ScrollReveal().reveal('.sectioncardone', { delay: 500 });
ScrollReveal().reveal('.sectioncardtwo', { delay: 500 });

}