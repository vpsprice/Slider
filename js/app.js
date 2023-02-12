const slider = document.querySelector('.worksSlider'),
      prevBtn = document.querySelector('.btn__prev'),
      nextBtn = document.querySelector('.btn__next'),
      dots = document.querySelectorAll('.dots__btn', '.number__link')
      navSlide = document.querySelectorAll('.number__link')
let position = 0,
    dotIndex = 0
const nextSlide = () => {                       
  if (position < ((dots.length-1) * 1571)){     
    position += 1571                            
    dotIndex++                                  
  } else  {                                     
    position = 0
    dotIndex = 0                                
  }
  slider.style.left = -position + 'px'          
  activeSlide(dotIndex)                         
}
const prevSlide = () => {                        
  if (position > 0){
    position -= 1571
    dotIndex--
  } else  {
    position = (dots.length-1) * 1571     
    dotIndex = (dots.length-1)
  }
  slider.style.left = -position + 'px'
  activeSlide(dotIndex)

}
const activeSlide = (index) => { 
  for (let dot of dots){
    dot.classList.remove('active')
  }
  for (let nav of navSlide){
    nav.classList.remove('active__nav')
  }
  dots[index].classList.add('active')
  navSlide[index].classList.add('active__nav')
}
nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    position = 1571 * index
    slider.style.left = -position + 'px'
    dotIndex = index
    activeSlide(dotIndex)
  })
})
navSlide.forEach((nav, index) => {
  nav.addEventListener('click', () => {
    position = 1571 * index
    slider.style.left = -position + 'px'
    dotIndex = index
    activeSlide(dotIndex)

  })
})