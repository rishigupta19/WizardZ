function page1Animation() {
  var tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button", {
    y: -40,
    opacity: 0,
    duration: 0.7,
    delay: 0.5,
    stagger: 0.1,
  });

  gsap.from("nav h1 i", {
    rotate: 360,
    duration: 1,
    opacity: 0,
    delay: 0.5,
  });

  tl.from(".center-part1 h1", {
    x: -200,
    opacity: 0,
    duration: 0.5,
  });

  tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });

  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.3,
  });

  tl.from(
    ".center-part2 img",
    {
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3"
  ); // "-=0.5" means 0.5 seconds before the previous animation ends.

  tl.from(".section1bottom img", {
    opacity: 0,
    duration: 0.6,
    y: 30,
    stagger: 0.15,
  });
}

page1Animation();

function page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 85%",
      end: "top 0",
      scrub: 2,
    },
  });

  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });

  tl2.from(
    ".elem.line1.left",
    {
      opacity: 0,
      x: -300,
      duration: 1,
    },
    "animation1"
  );

  tl2.from(
    ".elem.line1.right",
    {
      opacity: 0,
      x: 300,
      duration: 1,
    },
    "animation1"
  );

  tl2.from(
    ".elem.line2.left",
    {
      opacity: 0,
      x: -300,
      duration: 1,
    },
    "animation2"
  );

  tl2.from(
    ".elem.line2.right",
    {
      opacity: 0,
      x: 300,
      duration: 1,
    },
    "animation2"
  );
}

page2Animation();

function page3Animation() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3",
      scroller: "body",
      start: "top 30%",
      end: "top -20%",
      scrub: 2,
    },
  });

  tl3.from(".proposal-part1 h1, .proposal-part1 p", {
    opacity: 0,
    x: -50,
    duration: 2,
    delay: 1,
    stagger: 1,
  });

  tl3.from(".proposal-part1 button", {
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  tl3.from(
    ".proposal-part2 img",
    {
      opacity: 0,
      duration: 2,
      delay: 1,
    },
    "-=0.5"
  );

  tl3.from(".services h3, .services p", {
    y: 30,
    opacity: 0,
    duration: 3,
    delay: 1,
    stagger: 1,
  });

  tl3.from(".news p", {
    x: -100,
    opacity: 0,
    duration: 6,
    delay: 5,
    stagger: 1,
  });

  tl3.from(".news h3", {
    y: 50,
    opacity: 0,
    duration: 1,
  });
}

page3Animation();

function footerAnimation() {
  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer",
      scroller: "body",
      start: "top 90%",
      end: "top 80%",
      scrub: 2,
    },
  });

  tl4.from(".footer h3", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  tl4.from(".socialmedia div", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "back.out(1.7)",
  });
}

footerAnimation();
