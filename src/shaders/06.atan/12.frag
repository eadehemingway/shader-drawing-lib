precision mediump float;
uniform vec2 u_resolution;

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy;


  gl_FragColor = vec4(st, 0.0, 1.0);
}