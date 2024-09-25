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
  DOM.demo_10_b = document.querySelector('typewriter-text.demo-10-b');
  DOM.demo_10_c = document.querySelector('typewriter-text.demo-10-c');
  DOM.demo_14 = document.querySelector('typewriter-text.demo-14');
  DOM.demo_15 = document.querySelector('typewriter-text.demo-15');

  DOM.btnToggle = document.querySelector('button.btn-toggle');

  // =========================
  // 	VARS
  const textArray_1 = ['Hello world!', 'How are you?', 'Nice to see you here.'];
  const textArray_2 = ['First Line...', 'Line two!', 'Line three?', 'Line four.'];

  const icon_1 = /* html */ `<svg xmlns="http://www.w3.org/2000/svg" style="height: 24px; width: 24px; fill: brown; margin-top: -14px" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg>`;

  const img_1 = /* html */ `<img class="bounce" src="./images/heart.png" alt="" style="height: 50px; width: 50px; margin-top: -14px" />`;

  const individualArray_1 = [
    { char: '<span style="font-size: 44px">H</span>', intervalTime: '400' },
    { char: '<span style="color: green; font-size: 16px">E</span>', intervalTime: '100' },
    { char: '<i style="color: red">l</i>', intervalTime: '400' },
    { char: '<i style="color: red">l</i>', intervalTime: '100' },
    { char: '<span style="font-size: 14px">O</span>', intervalTime: '400' },
    { char: ' ', intervalTime: '10' },
    { char: icon_1, intervalTime: '100' },
    { char: ' ', intervalTime: '10' },
    { char: '<span style="color: red; font-size: 44px">W</span>', intervalTime: '100' },
    { char: '<span style="color: green; font-size: 16px">O</span>', intervalTime: '400' },
    { char: 'R', intervalTime: '100' },
    { char: '<span style="font-size: 14px">L</span>', intervalTime: '400' },
    { char: '<b>D</b>', intervalTime: '400' },
    { char: '<span style="color: red; font-size: 44px">!</span>', intervalTime: '100' },
    { char: ' ', intervalTime: '10' },
    { char: img_1, intervalTime: '3000' },
    { char: '', intervalTime: '200' },
  ];

  const individualArray_2 = [
    { char: '<u>H</u>', intervalTime: '400' },
    { char: '<u>o</u>', intervalTime: '' },
    { char: '<u>w</u>', intervalTime: '' },
    { char: ' ', intervalTime: '' },
    { char: '<b><span style="color: brown; font-family: Courier New, Courier, monospace;">a</span></b>', intervalTime: '' },
    { char: '<b><span style="color: green; font-family: Courier New, Courier, monospace;">r</span></b>', intervalTime: '' },
    { char: '<b><span style="color: brown; font-family: Courier New, Courier, monospace;">e</span></b>', intervalTime: '' },
    { char: ' ', intervalTime: '' },
    { char: '<i>y</i>', intervalTime: '' },
    { char: '<i>o</i>', intervalTime: '' },
    { char: '<i>u</i>', intervalTime: '' },
    { char: '<b>?</b>', intervalTime: '' },
  ];

  const individualArray_A = [individualArray_1];
  const individualArray_B = [individualArray_1, individualArray_2];

  let toggle = false;

  const textArray_3 = ['We have a large selection.', 'Over 25 varieties of ice cream.'];

  const img_2 = /* html */ `<img class="bounce-2" src="./images/sunday.png" alt="" style="height: 50px; width: 50px; margin-top: -44px; margin-left: 20px" />`;

  const individualArray_3 = [
    { char: 'Try', intervalTime: '400' },
    { char: ' ', intervalTime: '100' },
    { char: 'our', intervalTime: '400' },
    { char: ' ', intervalTime: '100' },
    { char: '<i style="color: brown"><b>newest</b></i>', intervalTime: '400' },
    { char: ' ', intervalTime: '100' },
    { char: 'ice', intervalTime: '400' },
    { char: ' ', intervalTime: '100' },
    { char: 'cream', intervalTime: '400' },
    { char: ' ', intervalTime: '100' },
    { char: img_2, intervalTime: '4000' },
    { char: '', intervalTime: '200' },
  ];

  const individualArray_C = [individualArray_3];

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

    DOM.demo_10_b.setMultipleLines(textArray_3);
    DOM.demo_10_c.setMultipleLines(individualArray_C);

    DOM.demo_14.setMultipleLines(textArray_1);

    DOM.demo_15.setMultipleLines(individualArray_A);
  };

  init();
})();
