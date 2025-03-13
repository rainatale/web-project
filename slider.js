
const images = [
    "imageSlider1.jpg=Image+1",
    "imageSlider1.jpg=Image+1",
    "iimageSlider1.jpg=Image+1",
    "imageSlider1.jpg=Image+1"
  ];
  

  let currentIndex = 0;


  const sliderImage = document.getElementById('sliderImage');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
 
  function updateImage() {
    sliderImage.src = images[currentIndex];
  }
  

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = images.length - 1; 
    }
    updateImage();
  });
  
  
  nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; 
    }
    updateImage();
  });
  