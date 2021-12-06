import oneFragShader from "./shaders/1.frag";
import { floor_frags } from "./shaders/04.floor";
import { mod_frags } from "./shaders/02.modulus";
import { abs_frags } from "./shaders/03.abs";
import { draw_frags } from "./shaders/01.draw-lines";
import { distance_frags } from "./shaders/05.distance";
import { atan_frags } from "./shaders/06.atan";

import vertShader from "./shaders/vert.vert";
import { createHtml } from "./createHtml";
import "./style.css";

const fragShaders = [
    // oneFragShader,
    // ...draw_frags,
    // ...mod_frags,
    // ...abs_frags,
    // ...floor_frags,
    // ...distance_frags,
    ...atan_frags
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

