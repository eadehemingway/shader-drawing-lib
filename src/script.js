import oneFragShader from "./shaders/1.frag";
import twoFragShader from "./shaders/2.frag";
import vertShader from "./shaders/vert.vert";
import "./style.css";

const fragShaders = [oneFragShader, twoFragShader];
const multiTileWrapper = document.querySelector(".multi-tile-wrapper");

const REGL = require("regl");

fragShaders.forEach((frag)=> {
    const canvas = document.createElement("canvas");

    const text = document.createElement("code");
    text.textContent = frag;
    const pre = document.createElement("pre");
    pre.appendChild(text);

    const wrapper = document.createElement("div");
    wrapper.className = "frag-shader-wrapper";
    wrapper.appendChild(pre);
    wrapper.appendChild(canvas);

    multiTileWrapper.appendChild(wrapper);

    const regl = REGL({ canvas });

    regl({
        attributes: {
            position: [[-1, -1], [1, -1], [1, 1], [1, 1], [-1, 1], [-1, -1]] // full quad triangles
        },
        uniforms: {
            u_resolution: (context) => [
                context.drawingBufferWidth,
                context.drawingBufferHeight,
            ]
        },
        count: 6,
        vert: vertShader,
        frag: frag,
    })();
});

