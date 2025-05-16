barba.init({
  transitions: [{
    name: 'fade-slide',
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0,
        rotateY: 90,
        duration: 0.6
      });
    },
    enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0,
        rotateY: -90,
        duration: 0.6
      });
    }
  }]
});