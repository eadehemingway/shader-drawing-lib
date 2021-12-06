precision mediump float;
uniform vec2 u_resolution;

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy;

  float strength = distance(st, vec2(0.5, 0.0));

  gl_FragColor = vec4(vec3(strength), 1.0);
}