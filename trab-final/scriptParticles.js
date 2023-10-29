particlesJS("particles-js", {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 440 } },
      color: { value: "#003de7" },
      shape: {
        type: "circle",
        stroke: { width: 1.5, color: "#2F384F" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 9.962498886306022,
          opacity_min: 1,
          sync: false
        }
      },
      size: {
        value: 2.5,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 200,
        color: "#292C33",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "top-right",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: false, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 250, line_linked: { opacity: 0.9 } },
        bubble: { distance: 1500, size: 500, duration: 10, opacity: 1, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });