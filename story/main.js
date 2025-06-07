// Wait until the full DOM is loaded before running scripts
window.addEventListener("DOMContentLoaded", () => {
  // Register ScrollTrigger plugin from GSAP
  gsap.registerPlugin(ScrollTrigger);

  const header = document.querySelector("header");

  // ==========================
  // Mobile Menu Toggle
  // ==========================

  // Toggles mobile nav visibility on hamburger click
  function toggleMobileNav() {
    document.getElementById("mobileMenu").classList.toggle("show");
  }

  // Expose function globally to use in inline HTML
  window.toggleMobileNav = toggleMobileNav;

  // ==========================
  // Initial Page Load Animations
  // ==========================

  function runInitialAnimations() {
    // Create a timeline with default easing
    const onLoadTl = gsap.timeline({ defaults: { ease: "power2.out" } });

    onLoadTl
      // Animate header border width expansion
      .to(
        "header",
        {
          "--border-width": "100%",
          duration: 3,
        },
        0
      )
      // Fade in hero heading
      .to(
        ".hero-content h1",
        {
          opacity: 1,
          duration: 1,
        },
        0
      )
      // Animate text stroke to solid color
      .to(
        ".hero-content h1",
        {
          delay: 0.5,
          duration: 1.2,
          color: "var(--sienna)",
          "-webkit-text-stroke": "0px var(--sienna)",
        },
        0
      )
      // Slide in each line of the heading from the right
      .from(
        ".hero-content .line",
        {
          x: 100,
          delay: 1,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        0
      )
      // Reveal the photo wrapper
      .to(
        ".hero-photo-wrapper",
        {
          opacity: 1,
          scale: 1,
          delay: 1.5,
          duration: 1.3,
          ease: "power3.out",
        },
        0
      );
  }

  // ==========================
  // Reusable Scroll-Based Animation Setup
  // ==========================

  function pinAndAnimate({
    trigger,
    endTrigger,
    pin,
    animations,
    markers = false,
    headerOffset = 0,
  }) {
    // Define scroll end position with header offset
    const end = `top top+=${headerOffset}`;

    // Create a GSAP timeline connected to ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start: `top top+=${headerOffset}`,
        endTrigger,
        end,
        scrub: true,
        pin,
        pinSpacing: false,
        markers: markers, // for debugging
        invalidateOnRefresh: true, // ensures recalculation on resize
      },
    });

    // Loop through each animation object
    animations.forEach(({ target, vars, position = 0 }) => {
      tl.to(target, vars, position);
    });
  }

  // ==========================
  // ScrollTrigger Configurations for Desktop & Mobile
  // ==========================

  function setupScrollAnimations() {
    const headerOffset = header.offsetHeight - 1;

    // Use matchMedia to handle responsive behaviors
    ScrollTrigger.matchMedia({
      // Desktop scroll animations
      "(min-width: 769px)": function () {
        // 1. photo animates on scroll from hero to intro
        pinAndAnimate({
          trigger: ".hero",
          endTrigger: ".section-intro",
          pin: ".hero-photo-wrapper",
          animations: [
            { target: ".hero-photo", vars: { rotate: 0, scale: 0.8 } },
          ],
          headerOffset,
        });

        // 2. photo shifts right during the intro section
        pinAndAnimate({
          trigger: ".section-intro",
          endTrigger: ".timeline-entry:nth-child(2)",
          pin: ".hero-photo-wrapper",
          animations: [
            { target: ".hero-photo", vars: { rotate: 0, scale: 0.7 } },
            { target: ".hero-photo-wrapper", vars: { x: "30%" } },
          ],
          markers: false,
          headerOffset,
        });

        // 3. photo shifts right again during the third timeline entry (odd)
        pinAndAnimate({
          trigger: ".timeline-entry:nth-child(2)",
          endTrigger: ".timeline-entry:nth-child(3)",
          pin: ".hero-photo-wrapper",
          animations: [
            { target: ".hero-photo", vars: { rotate: 0, scale: 0.7 } },
            { target: ".hero-photo-wrapper", vars: { x: "-25%" } },
          ],
          markers: false,
          headerOffset,
        });

        
        // 4. photo shifts left for the fourth timeline entry (even)
        pinAndAnimate({
          trigger: ".timeline-entry:nth-child(3)",
          endTrigger: ".timeline-entry:nth-child(4)",
          pin: ".hero-photo-wrapper",
          animations: [
            { target: ".hero-photo", vars: { rotate: 0, scale: 0.7 } },
            { target: ".hero-photo-wrapper", vars: { x: "30%" } },
          ],
          markers: false,
          headerOffset,
        });

        pinAndAnimate({
          trigger: ".timeline-entry:nth-child(4)",
          endTrigger: ".timeline-entry:nth-child(5)",
          pin: ".hero-photo-wrapper",
          animations: [
            { target: ".hero-photo", vars: { rotate: 0, scale: 0.7 } },
            { target: ".hero-photo-wrapper", vars: { x: "-25%" } },
          ],
          markers: false,
          headerOffset,
        });

        pinAndAnimate({
          trigger: ".timeline-entry:nth-child(5)",
          endTrigger: ".timeline-entry:nth-child(6)",
          pin: ".hero-photo-wrapper",
          animations: [
            { target: ".hero-photo", vars: { rotate: 0, scale: 0.7 } },
            { target: ".hero-photo-wrapper", vars: { x: "30%" } },
          ],
          markers: false,
          headerOffset,
        });

        pinAndAnimate({
          trigger: ".timeline-entry:nth-child(6)",
          endTrigger: ".timeline-entry:nth-child(7)",
          pin: ".hero-photo-wrapper",
          animations: [
            { target: ".hero-photo", vars: { rotate: 0, scale: 0.7 } },
            { target: ".hero-photo-wrapper", vars: { x: "-25%" } },
          ],
          markers: false,
          headerOffset,
        });

        pinAndAnimate({
          trigger: ".timeline-entry:nth-child(7)",
          endTrigger: ".timeline-entry:nth-child(8)",
          pin: ".hero-photo-wrapper",
          animations: [
            { target: ".hero-photo", vars: { rotate: 0, scale: 0.7 } },
            { target: ".hero-photo-wrapper", vars: { x: "30%" } },
          ],
          markers: false,
          headerOffset,
        });

        pinAndAnimate({
          trigger: ".timeline-entry:nth-child(8)",
          endTrigger: ".timeline-entry:nth-child(9)",
          pin: ".hero-photo-wrapper",
          animations: [
            { target: ".hero-photo", vars: { rotate: 0, scale: 0.7 } },
            { target: ".hero-photo-wrapper", vars: { x: "-25%" } },
          ],
          markers: false,
          headerOffset,
        });

        pinAndAnimate({
          trigger: ".timeline-entry:nth-child(9)",
          endTrigger: ".timeline-entry:nth-child(10)",
          pin: ".hero-photo-wrapper",
          animations: [
            { target: ".hero-photo", vars: { rotate: 0, scale: 0.7 } },
            { target: ".hero-photo-wrapper", vars: { x: "30%" } },
          ],
          markers: false,
          headerOffset,
        });



      },

      // Mobile fallback animation (no scroll-based logic)
      "(max-width: 768px)": function () {
        gsap.to(".hero-photo-wrapper", {
          opacity: 1,
          duration: 1,
          delay: 0.5,
        });
      },
    });
  }

  // ==========================
  // Init Everything on Load
  // ==========================

  runInitialAnimations(); // Load-in animations
  setupScrollAnimations(); // Scroll-based animations

  // Final recalculation for all ScrollTriggers
  ScrollTrigger.refresh();
});


