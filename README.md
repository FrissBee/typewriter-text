# Typewriter Text

With the _Typewriter Text_ you can display a text where the individual letters are displayed one after the other.

The speed at which the individual letters are displayed can be specified.

The text can be displayed once or endlessly.

One or more lines of text can be displayed.

The HTML tag in which the text is to be displayed can be freely selected, e.g.: `div`, `span`, `p`, `h1` - `h6`.

Each individual letter can also be individually designed with CSS, e.g. if a letter should have a different color, or individual words or letters should be italicized or underlined.

The repo contains various examples. See the files `index.html` and `assets\js\my-script.js`.

## Preview

[You can view the demo here](https://typewriter-text.frissbee.de/).

## Description

Implement the _Typewriter Text_ in your project:

**1. Step - download and add**

Download or clone the repo and add the file `typewriter-text_1.1.0.js` into your project.

**2. Step - implementation**

Include the `typewriter-text_1.1.0.js` file in the corresponding HTML or PHP file with `<script src="./path-to-the-file/typewriter-text_1.1.0.js" defer></script>` in the `<head>`-Tag

**3. Step - insert the typewriter-text HTML tag**

Insert the `<typewriter-text></typewriter-text>` tag in the desired HTML or PHP file at the desired position.

Add a desired HTML element within this tag in which the text is to be displayed, e.g.: div, span, p, h1 - h6.

**4. Step - customize**

Use the attributes an functions (see below) to customize the _Typewriter Text_.

## Quick view

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Typing Text</title>

    <!-- 1. Insert the "typewriter-text.js" file -->
    <script src="./path-to-the-file/typewriter-text_1.1.0.js" defer></script>

    <!-- 2. Insert your JavaScript file - if necessary -->
    <script src="./path-to-the-file/my-script.js" defer></script>
  </head>
  <body>
    <main>
      <!--3.  Insert the "typewriter-text" tag -->
      <typewriter-text class="demo-1" displayed-text="Hello world!">
        <!-- 4. Add the desired HTML tag in which the text is to be displayed, e.g.: div, span, p, h1 - h6. -->
        <h3 class="my-custom-style-class"></h3>
      </typewriter-text>
    </main>
  </body>
</html>
```

## All attributes

- `displayed-text`

  The text to be displayed. If several lines of text are to be displayed, use the `setMultipleLines()` function. **Do not use this attribute if several text lines are set with the function `setMultipleLines()`.**

- `set-position`

  This can be used to set the position of the text to `left` (default), `center` and `right`.

- `is-endless`

  If the attribute is set, the text is repeated endlessly.

  A value does not have to be specified.

- `interval-time`

  The speed at which the individual letters are to be displayed is specified in milliseconds, e.g.: `interval-time=“200”` means a delay of 200 milliseconds.

  Default value: "200"

- `hold-line`

  If the text line is displayed in full, it can continue to be displayed for the specified time via `hold-line`. This time is calculated according to `interval-time` \* `hold-line`.

  Default value: "0"

- `delay-time`

  If the text should only be displayed after a certain time, i.e. with a delay. The value is specified in milliseconds, e.g.: `delay-time=“2000”` means a delay of 2 seconds.

  Default value: "0"

- `is-individual`

  Every single letter can be individually designed with CSS. To activate this, add this attribute.

  A value does not have to be specified.

  The text must then be passed with the function `setMultipleLines()`. **Do not use the `displayed-text` attribute in this case.**

  The passed array must have a certain structure:

  ```js
  // One Line:
  const array_1 = [
    [
      { char: '<span style="font-size: 44px">H</span>', intervalTime: '400' },
      { char: '<span style="color: green; font-size: 16px">E</span>', intervalTime: '100' },
      // and so on...
    ],
  ];

  // Multiple Lines:
  const array_1 = [
    [
      { char: '<span style="font-size: 44px">H</span>', intervalTime: '400' },
      { char: '<span style="color: green; font-size: 16px">E</span>', intervalTime: '100' },
      // and so on...
    ],
    [
      { char: '<u>H</u>', intervalTime: '400' },
      { char: '<u>o</u>', intervalTime: '' },
      { char: '<u>w</u>', intervalTime: '' },
      // and so on...
    ],
    // and so on...
  ];
  ```

  The `intervalTime` key can be used to determine the `interval-time` attribute for each individual letter in milliseconds. If the string is empty, the interval time is not changed.

  **See examples 8 and 9.**

- `is-cursor`

  If the attribute is set, the cursor is displayed.

  A value does not have to be specified.

- `style-cursor`

  This attribute is for styling the cursor. The value is CSS, e.g: `style-cursor="width: 3px; background: rgb(17, 119, 150); border-radius: 2px;"`

  This gives you complete control over the design of the cursor.

  To change the speed at which the cursor flashes, enter the CSS value `animation: blink 700ms infinite;` with the corresponding milliseconds.

- `is-reverse`

  If the attribute is set, the text is removed letter by letter after it has been displayed.

  **The attribute `is-endless` must also be set for this.**

  A value does not have to be specified.

  **See examples 13 - 15.**

## Functions

**setMultipleLines()**

If you want to display more than one line of text, use the `setMultipleLines()` function. Pass the function an array with the desired text lines.

Here is an example:

```js
const typewriterText = document.querySelector('typewriter-text');

const textArray = ['Hello world!', 'How are you?', 'Nice to see you here.'];

typewriterText.setMultipleLines(textArray);
```

**To design the individual letters with CSS and HTML tags, see the attribute `is-individual`.**

## Design with CSS

If you want to have more influence on the design, you can do this in your CSS file with the pseudo-element `::part()`.

You can design:

- `container-typewriter-text`

Here a simple example:

```css
typewriter-text::part(container-typewriter-text) {
  background-color: rgb(231, 231, 231);
  padding: 14px 10px 10px;
  border-radius: 4px;
  text-align: center;
}
```
