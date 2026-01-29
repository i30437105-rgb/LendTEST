/* ============================================
   Hero Card — Tilt effect on mouse move
   ============================================ */
(function() {
    const card = document.querySelector('.hero-card');
    if (!card) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', function() {
        card.style.transform = 'rotate(-2deg)';
    });
})();

/* ============================================
   Counter animation — count up with formatting
   ============================================ */
(function() {
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('.counter').forEach(function(el) {
        var target = parseInt(el.dataset.target, 10);
        if (isNaN(target)) return;

        if (prefersReduced) {
            el.textContent = target;
            return;
        }

        el.textContent = '0';
        var pause = 2000;
        var stepDelay = 1000;

        function pulse() {
            el.style.transform = 'scale(1.3)';
            el.style.color = '#1a1a2e';
            setTimeout(function() {
                el.style.transform = 'scale(1)';
                el.style.color = '';
            }, 300);
        }

        function runCycle() {
            var current = 0;
            el.textContent = '0';

            function tick() {
                current++;
                el.textContent = current;
                pulse();
                if (current < target) {
                    setTimeout(tick, stepDelay);
                } else {
                    setTimeout(function() {
                        el.textContent = '0';
                        el.style.color = '';
                        runCycle();
                    }, pause);
                }
            }

            setTimeout(tick, stepDelay);
        }

        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    runCycle();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.5 });

        observer.observe(el);
    });
})();
