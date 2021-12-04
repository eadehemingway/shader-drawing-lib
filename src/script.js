import oneFragShader from "./shaders/1.frag";
import twoFragShader from "./shaders/2.frag";
import vertShader from "./shaders/vert.vert";
import "./style.css";

const fragShaders = [oneFragShader, twoFragShader];

const REGL = require("regl");
const canvases = document.querySelectorAll("canvas");

canvases.forEach((canvas, i)=> {
    const regl = REGL({ canvas });
    regl({
        attributes: {
            position: [[-1, -1], [1, -1], [1, 1], [1, 1], [-1, 1], [-1, -1]] // full quad triangles
        },
        count: 6,
        vert: vertShader,
        frag: fragShaders[i],
    })();
});

