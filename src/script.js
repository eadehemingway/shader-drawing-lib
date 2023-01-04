import { floor_frags } from "./shaders/floor";
import { mod_frags } from "./shaders/modulus";
import { abs_frags } from "./shaders/abs";
import { draw_frags } from "./shaders/draw-lines";
import { distance_frags } from "./shaders/distance";
import { atan_frags } from "./shaders/atan";
import { noise_frags } from "./shaders/noise";
import { splat_frags } from "./shaders/splat";
import vertShader from "./shaders/vert.vert";
import { createHtml, clearDom } from "./createHtml";
import "./style.css";

const frag_groups = [
  {
    frags: draw_frags,
    src: "draw.png",
    lable: "draw lines",
  },
  {
    frags: mod_frags,
    src: "mods.png",
    lable: "mod",
  },
  {
    frags: floor_frags,
    src: "floor.png",
    lable: "floor",
  },

  {
    frags: abs_frags,
    src: "abs.png",
    lable: "abs",
  },
  {
    frags: distance_frags,
    src: "distance.png",
    lable: "distance",
  },
  {
    frags: atan_frags,
    src: "atan.png",
    lable: "atan",
  },
  {
    frags: splat_frags,
    src: "splat.png",
    lable: "splat",
  },
  {
    frags: noise_frags,
    src: "noise.png",
    lable: "noise",
  },
];
// set up nav bar
frag_groups.forEach((obj) => {
  const button = document.createElement("button");
  button.addEventListener("click", () => {
    clearDom();
    createShaders(obj.frags);
  });
  const img = document.createElement("img");
  img.src = `./images/${obj.src}`;
  button.setAttribute("title", obj.lable);
  button.appendChild(img);
  document.querySelector(".nav").appendChild(button);
});

const REGL = require("regl");

function createShaders(frags) {
  frags.forEach((frag, i) => {
    const canvas = createHtml(frag, i);
    const regl = REGL({ canvas });

    regl({
      attributes: {
        position: [
          [-1, -1],
          [1, -1],
          [1, 1],
          [1, 1],
          [-1, 1],
          [-1, -1],
        ], // full quad triangles
      },
      uniforms: {
        u_resolution: (context) => [
          context.drawingBufferWidth,
          context.drawingBufferHeight,
        ],
      },
      count: 6,
      vert: vertShader,
      frag: frag,
    })();
  });
}

createShaders(frag_groups[0].frags);
