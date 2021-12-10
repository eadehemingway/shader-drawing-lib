import oneFragShader from "./shaders/1.frag";
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

const frag_groups = [{
    frags: floor_frags,
    src: "floor.png"
},
{
    frags: mod_frags,
    src: "mods.png"

},
{
    frags: abs_frags,
    src: "abs.png"

},{
    frags: draw_frags,
    src: "draw.png"

},{
    frags: distance_frags,
    src: "distance.png"

},{
    frags: atan_frags,
    src: "atan.png"

},{
    frags: noise_frags,
    src: "noise.png"

},{
    frags: splat_frags,
    src: "splat.png"

}
];



frag_groups.forEach(obj=> {
    const button = document.createElement("button");
    button.addEventListener("click", ()=> {
        clearDom();
        createShaders(obj.frags);
    });
    const img = document.createElement("img");
    img.src = `./images/${obj.src}`;

    button.appendChild(img);
    document.querySelector(".nav").appendChild(button);
});

const REGL = require("regl");
function createShaders(frags){
    frags.forEach((frag, i)=> {
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

}

