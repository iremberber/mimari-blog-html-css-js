window.addEventListener('resize', function() {
    adjustFontSize();
  });
  
  // Yazı boyutunu ayarlayan bir fonksiyon
  function adjustFontSize() {
    var textElement = document.getElementById('smallheader');
    var textElement2 = document.getElementById('bigtitle');
    var windowWidth = window.innerWidth;
  
    if (windowWidth <= 400) {
      // Telefon görüntüsü için yazı boyutunu ayarla
      textElement.style.fontSize = '12px';
      textElement2.style.fontSize = '60px';
    } else {
      // Bilgisayar görüntüsü için varsayılan yazı boyutunu ayarla
      textElement.style.fontSize = '25px';
      textElement2.style.fontSize = '77px';
    }
  }
  
  // Sayfa yüklendiğinde yazı boyutunu ayarlamak için çağırın
  adjustFontSize();



  $(document).ready(function() {
    $('.slider').slick({
      // Slick Slider ayarları
      dots: true,
      autoplay: false,
      nextArrow: false,
      prevArrow: false,
      responsive: [
        {
          breakpoint: 768, // 768 piksel ve daha küçük ekranlar için ayarlar
          settings: {
            // Slick Slider'ın mobil görünüm ayarları
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992, // 992 piksel ve daha küçük ekranlar için ayarlar
          settings: {
            // Slick Slider'ın tablet görünüm ayarları
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1200, // 1200 piksel ve daha küçük ekranlar için ayarlar
          settings: {
            // Slick Slider'ın masaüstü görünüm ayarları
            slidesToShow: 3,
            slidesToScroll: 1,

          }
        }
      ]
    });
  });


