precision mediump float;
uniform vec2 u_resolution;

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy;

  float strength = 1.0 - step(0.01, abs(distance(st, vec2(0.5)) - 0.25));

  gl_FragColor = vec4(vec3(strength), 1.0);
}