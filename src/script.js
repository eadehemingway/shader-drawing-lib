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
import elevenFragShader from "./shaders/11.frag";
import twelveFragShader from "./shaders/12.frag";
import thirteenFragShader from "./shaders/13.frag";
import fourteenthFragShader from "./shaders/14.frag";
import fourteenAndHalfFragShader from "./shaders/14.5.frag";
import fifteenthFragShader from "./shaders/15.frag";
import sixteenthFragShader from "./shaders/16.frag";
import seventeenthFragShader from "./shaders/17.frag";
import eighteenth from "./shaders/18.frag";
import nineteenth from "./shaders/19.frag";
import twenty from "./shaders/20.frag";
import twentyone from "./shaders/21.frag";
import twentytwo from "./shaders/22.frag";
import twentythree from "./shaders/23.frag";
// import twentyfour from "./shaders/24.frag";
// import twentyfive from "./shaders/25.frag";
// import twentysix from "./shaders/26.frag";
// import twentyseven from "./shaders/27.frag";
// import twentyeight from "./shaders/28.frag";
import vertShader from "./shaders/vert.vert";
import { createHtml } from "./createHtml";
import "./style.css";

const fragShaders = [
    // oneFragShader,
    // twoFragShader,
    // threeFragShader,
    // fourFragShader,
    // fiveFragShader,
    // sixFragShader,
    // sevenFragShader,
    // eightFragShader,
    // nineFragShader,
    // tenFragShader,
    // elevenFragShader,
    // twelveFragShader,
    thirteenFragShader,
    fourteenthFragShader,
    fourteenAndHalfFragShader,
    fifteenthFragShader,
    // sixteenthFragShader,
    // seventeenthFragShader,
    // eighteenth,
    // nineteenth,
    // twenty,
    // twentyone,
    // twentytwo,
    twentythree
];

const REGL = require("regl");

fragShaders.forEach((frag, i)=> {
    const canvas = createHtml(frag, i);
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

