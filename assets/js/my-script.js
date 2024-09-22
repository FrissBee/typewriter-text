'use strict';

(() => {
  // =========================
  // 	DOM
  const DOM = {};
  DOM.demo_2 = document.querySelector('typewriter-text.demo-2');
  DOM.demo_4 = document.querySelector('typewriter-text.demo-4');
  DOM.demo_6 = document.querySelector('typewriter-text.demo-6');
  DOM.demo_8 = document.querySelector('typewriter-text.demo-8');
  DOM.demo_9 = document.querySelector('typewriter-text.demo-9');

  DOM.btnToggle = document.querySelector('button.btn-toggle');

  // =========================
  // 	VARS
  const textArray_1 = ['Hello world!', 'How are you?', 'Nice to see you here.'];
  const textArray_2 = ['First Line...', 'Line two!', 'Line three?', 'Line four.'];

  const individualArray_1 = [
    { char: 'H', before: '<span style="font-size: 44px">', after: '</span>' },
    { char: 'E', before: '<span style="color: green; font-size: 16px">', after: '</span>' },
    { char: 'l', before: '<i style="color: red">', after: '</i>' },
    { char: 'l', before: '<i style="color: red">', after: '</i>' },
    { char: 'O', before: '<span style="font-size: 14px">', after: '</span>' },
    { char: ' ', before: '', after: '' },
    { char: 'W', before: '<span style="color: red">', after: '</span>' },
    { char: 'O', before: '<span style="color: green; font-size: 16px">', after: '</span>' },
    { char: 'R', before: '<span style="font-size: 32px">', after: '</span>' },
    { char: 'L', before: '<span style="font-size: 14px">', after: '</span>' },
    { char: 'D', before: '<b>', after: '</b>' },
    { char: '!', before: '<span style="color: red; font-size: 44px">', after: '' },
  ];

  const individualArray_2 = [
    { char: 'H', before: '<u>', after: '</u>' },
    { char: 'o', before: '<u>', after: '</u>' },
    { char: 'w', before: '<u>', after: '</u>' },
    { char: ' ', before: '', after: '' },
    { char: 'a', before: '<b><span style="color: brown; font-family: Courier New, Courier, monospace;">', after: '</span></b>' },
    { char: 'r', before: '<b><span style="color: green; font-family: Courier New, Courier, monospace;">', after: '</span></b>' },
    { char: 'e', before: '<b><span style="color: brown; font-family: Courier New, Courier, monospace;">', after: '</span></b>' },
    { char: ' ', before: '', after: '' },
    { char: 'y', before: '<i>', after: '</i>' },
    { char: 'o', before: '<i>', after: '</i>' },
    { char: 'u', before: '<i>', after: '</i>' },
    { char: '?', before: '<b>', after: '</b>' },
  ];

  const individualArray_A = [individualArray_1];
  const individualArray_B = [individualArray_1, individualArray_2];

  let toggle = false;

  // =========================
  // 	INIT
  const init = () => {
    DOM.demo_2.setMultipleLines(textArray_1);
    DOM.demo_4.setMultipleLines(textArray_1);
    DOM.demo_6.setMultipleLines(textArray_1);

    DOM.btnToggle.addEventListener('click', (e) => {
      DOM.demo_6.setMultipleLines(toggle === false ? textArray_2 : textArray_1);
      toggle = !toggle;
      e.currentTarget.classList.toggle('btn-primary');
      e.currentTarget.classList.toggle('btn-success');
    });

    DOM.demo_8.setMultipleLines(individualArray_A);
    DOM.demo_9.setMultipleLines(individualArray_B);
  };

  init();
})();
