anime({
    targets: 'div',
    translateY: '-10rem',
    translateX: '10rem',
    scale: [.30, .7],
    delay: function(el, index) {
      return index * 80;
    },
    direction: 'alternate',
    loop: true
  });