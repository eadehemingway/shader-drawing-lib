import oneFragShader from "./shaders/1.frag";
import twoFragShader from "./shaders/2.frag";
import threeFragShader from "./shaders/3.frag";
import fourFragShader from "./shaders/4.frag";
import fiveFragShader from "./shaders/5.frag";
import sixFragShader from "./shaders/6.frag";
import sevenFragShader from "./shaders/7.frag";
import eightFragShader from "./shaders/8.frag";
import nineFragShader from "./shaders/9.frag";
import tenFragShader from "./shaders/10.frag";
import vertShader from "./shaders/vert.vert";
import { createHtml } from "./createHtml";
import "./style.css";

const fragShaders = [
    oneFragShader,
    twoFragShader,
    threeFragShader,
    fourFragShader,
    fiveFragShader,
    sixFragShader,
    sevenFragShader,
    eightFragShader,
    nineFragShader,
    tenFragShader
];

const REGL = require("regl");

fragShaders.forEach((frag)=> {
    console.log("cunt");
    const canvas = createHtml(frag);
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

