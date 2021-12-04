import oneFragShader from "./shaders/1.frag";
import twoFragShader from "./shaders/2.frag";
import vertShader from "./shaders/vert.vert";
import { createHtml } from "./createHtml";
import "./style.css";

const fragShaders = [oneFragShader, twoFragShader];

const REGL = require("regl");

fragShaders.forEach((frag)=> {
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

