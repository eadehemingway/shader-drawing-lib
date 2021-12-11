precision mediump float;
uniform vec2 u_resolution;

#pragma glslify: cnoise = require('glsl-noise/classic/2d')

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy;

  float strength = cnoise(st * 10.0);

  gl_FragColor = vec4(vec3(strength), 1.0);
}