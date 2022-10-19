const { mouse, left, right, up, down } = require("@nut-tree/nut-js");

(async () => {
  await mouse.move(left(500));
  await mouse.move(up(500));
  await mouse.move(right(500));
  await mouse.move(down(500));
})();
