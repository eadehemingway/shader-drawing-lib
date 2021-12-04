import fragShader from "./frag.frag";
import vertShader from "./vert.vert";

const REGL = require("regl");

const canvas = document.querySelector("canvas");

const regl = REGL({ canvas });


const drawTriangle = regl({

    attributes: {
        position: [[-1, -1], [1, -1], [1, 1], [1, 1], [-1, 1], [-1, -1]] // full quad triangles
    },
    count: 6,
    vert: vertShader,
    frag: fragShader,



});


function render(){
    const green = [0.2, 0.5, 0.4, 1.0]; // arbitrary background
    regl.clear({ color: green });
    drawTriangle();
}

regl.frame(render);
