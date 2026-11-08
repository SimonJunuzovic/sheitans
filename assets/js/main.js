/* Sheitans landing: neon demons and the menu screen. */
(function () {
  /* Ten demons, d1 to d10. Each: [lit color, outline path, face path (eyes, then smirk)].
     All lines straight, every corner sharp, nothing filled. None is shaped like an object. */
  var D = {
    /* d1: the logo demon. Matches the app icon exactly. Medium. */
    d1:  ['#A855F7', 'M50 214 L58 120 L74 86 L48 8 L70 34 L90 79.85 L100 76 L110 79.85 L130 34 L152 8 L126 86 L142 120 L150 214 L124 196 L100 214 L76 196 Z',
          'M73.4 118 L95.2 125.8 L76.5 132.1 Z M126.8 114.5 L105 125.4 L125.2 130.1 Z M74 156 L100 166 L132 146 L120 166 L100 178 L84 170 Z'],
    /* d2: squat imp, stubby horns, big diamond eyes, small crooked grin. Cheeky. */
    d2:  ['#FF7A1A', 'M40 214 L40 146 L66 104 L58 72 L84 104 L116 104 L142 72 L134 104 L160 146 L160 214 L118 200 L100 214 L82 200 Z',
          'M66 144 L78 130 L90 144 L78 158 Z M110 144 L122 130 L134 144 L122 158 Z M84 176 L102 182 L124 168 L112 190 L94 188 Z'],
    /* d3: crown of three spikes, hard slit eyes, saw-tooth grin. Menacing. */
    d3:  ['#FF2E4D', 'M58 110 L66 46 L82 82 L100 22 L118 82 L134 46 L142 110 L152 214 L126 202 L100 214 L74 202 L48 214 Z',
          'M66 128 L96 142 L70 140 Z M134 128 L104 142 L130 140 Z M64 164 L76 176 L84 166 L92 180 L100 168 L108 180 L116 166 L124 176 L138 160 L122 194 L80 194 Z'],
    /* d4: kite-shaped wisp, short horns, happy caret eyes, small smile. Friendly. */
    d4:  ['#FFE14D', 'M100 64 L119.7 87 L136 44 L128.3 97 L160 134 L100 214 L40 134 L71.7 97 L64 44 L80.3 87 Z',
          'M70 134 L81 118 L92 134 L81 128 Z M108 134 L119 118 L130 134 L119 128 Z M84 158 L102 166 L120 152 L110 172 L94 172 Z'],
    /* d5: wide brute with swept-back horns, heavy brows, fanged mouth. Menacing. */
    d5:  ['#FF2E4D', 'M30 124 L62 92 L34 72 L22 36 L48 64 L80 92 L120 92 L152 64 L178 36 L166 72 L138 92 L170 124 L150 214 L120 204 L100 214 L80 204 L50 214 Z',
          'M54 124 L94 138 L88 148 L58 136 Z M146 124 L106 138 L112 148 L142 136 Z M58 164 L142 164 L130 178 L122 172 L114 192 L106 176 L94 176 L86 192 L78 172 L70 178 Z'],
    /* d6: little sprout, one crooked horn, a wink. Least scary. */
    d6:  ['#3D6BFF', 'M56 116 L92 89.8 L104 40 L108 89.8 L144 116 L152 166 L132 214 L68 214 L48 166 Z',
          'M70 140 L80 124 L90 140 L80 156 Z M108 142 L132 134 L110 148 Z M86 176 L102 182 L124 168 L114 186 L96 188 Z'],
    /* d7: lopsided shard, one long horn and one short, mismatched eyes, zigzag smirk. Medium. */
    d7:  ['#A855F7', 'M56 214 L48 132 L80 90 L62 22 L98 86.5 L122 81.9 L148 46 L132 80 L158 120 L152 214 L128 198 L104 214 L80 200 Z',
          'M64 130 L100 138 L70 150 Z M114 128 L142 120 L130 140 Z M72 172 L92 164 L104 176 L120 160 L138 166 L122 186 L104 190 L86 184 Z'],
    /* d8: winged head, angry slanted bar eyes, crooked grin with one fang. Menacing. */
    d8:  ['#FF7A1A', 'M100 92 L132 98 L176 66 L162 120 L148 214 L124 200 L100 214 L76 200 L52 214 L38 120 L24 66 L68 98 Z',
          'M64 128 L96 136 L92 146 L60 138 Z M136 128 L104 136 L108 146 L140 138 Z M64 162 L100 172 L138 154 L128 172 L120 170 L114 190 L106 175 L86 178 Z'],
    /* d9: tall slim one with antennae horns, small diamond eyes, tidy V grin. Friendly. */
    d9:  ['#3D6BFF', 'M70 214 L66 122 L82 94 L118 94 L134 122 L130 214 L114 204 L100 214 L86 204 Z M88 94 L72 50 M112 94 L128 50',
          'M72 30 L78 40 L72 50 L66 40 Z M128 30 L134 40 L128 50 L122 40 Z M78 134 L86 124 L94 134 L86 144 Z M106 134 L114 124 L122 134 L114 144 Z M82 162 L100 170 L118 158 L100 182 Z'],
    /* d10: shield body, double horns, flat angry brows, wide toothy crescent. Menacing. */
    d10: ['#FFE14D', 'M48 100 L38 38 L76 100 L92 100 L100 68 L108 100 L124 100 L162 38 L152 100 L156 162 L100 214 L44 162 Z',
          'M60 122 L96 122 L86 140 Z M140 122 L104 122 L114 140 Z M58 152 L100 170 L142 148 L132 170 L120 164 L114 184 L100 178 L86 186 L80 168 L68 170 Z']
  };
  document.querySelectorAll('[data-demon]').forEach(function (el) {
    var d = D[el.getAttribute('data-demon')];
    if (!d) return;
    var ash = !!el.closest('[data-neon="random"]');
    var cls = 'demon' + (el.hasAttribute('data-lit') ? ' lit' : '') + (ash ? ' ash' : '');
    el.innerHTML = '<svg class="' + cls + '" viewBox="0 0 200 220" style="--c:' + d[0] + '" aria-hidden="true"><path class="o" d="' + d[1] + '"/><path class="f" d="' + d[2] + '"' + (d[3] ? ' transform="' + d[3] + '"' : '') + '/></svg>';
    el.setAttribute('aria-hidden', 'true');
  });

  /* Random neon: pick a resting drawing at random, light it in one of five colors, let it go out. */
  var wall = document.querySelector('[data-neon="random"]');
  if (wall) {
    var COLORS = ['#3D6BFF', '#A855F7', '#FF2E4D', '#FF7A1A', '#FFE14D'];
    var pieces = Array.prototype.slice.call(wall.querySelectorAll('.demon.ash'));
    var lastColor = null, lastPiece = null, MAX_LIT = 3;
    var rand = function (a, b) { return a + Math.random() * (b - a); };
    var pickColor = function () {
      var c; do { c = COLORS[Math.floor(Math.random() * COLORS.length)]; } while (c === lastColor);
      lastColor = c; return c;
    };
    var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (calm) {
      pieces.slice().sort(function () { return Math.random() - 0.5; }).slice(0, 3).forEach(function (p) {
        p.style.setProperty('--c', pickColor());
        p.classList.add('on');
      });
    } else {
      var lightOne = function () {
        var idle = pieces.filter(function (p) { return !p.classList.contains('on') && !p.classList.contains('out') && p !== lastPiece; });
        var litCount = pieces.length - pieces.filter(function (p) { return !p.classList.contains('on'); }).length;
        if (idle.length && litCount < MAX_LIT) {
          var p = idle[Math.floor(Math.random() * idle.length)];
          lastPiece = p;
          p.style.setProperty('--c', pickColor());
          p.classList.add('on');
          setTimeout(function () {
            p.classList.remove('on');
            p.classList.add('out');
            setTimeout(function () { p.classList.remove('out'); }, 520);
          }, rand(2200, 4200));
        }
        setTimeout(lightOne, rand(450, 1400));
      };
      setTimeout(lightOne, 300);
    }
  }

  /* Menu screen: burger opens it, Close or Escape shuts it. */
  var screen = document.getElementById('menu-screen');
  var burger = document.getElementById('burger');
  if (!screen || !burger) return;
  var main = document.getElementById('menu-main');
  var howto = document.getElementById('menu-howto');
  var hint = document.getElementById('menu-hint');
  function show(view) {
    main.hidden = view !== 'main';
    howto.hidden = view !== 'howto';
  }
  function open(view) {
    screen.hidden = false;
    document.body.classList.add('locked');
    burger.setAttribute('aria-expanded', 'true');
    show(view || 'main');
    hint.textContent = '';
    document.getElementById('menu-close').focus();
  }
  function close() {
    screen.hidden = true;
    document.body.classList.remove('locked');
    burger.setAttribute('aria-expanded', 'false');
    burger.focus();
  }
  burger.addEventListener('click', function () { open('main'); });
  document.getElementById('menu-close').addEventListener('click', close);
  document.getElementById('menu-login').addEventListener('click', function () { hint.textContent = 'Log in opens at launch. Your demons can wait.'; });
  document.getElementById('menu-save').addEventListener('click', function (e) { e.preventDefault(); show('howto'); });
  document.getElementById('menu-back').addEventListener('click', function () { show('main'); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !screen.hidden) close(); });
})();
