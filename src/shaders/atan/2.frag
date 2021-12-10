precision mediump float;
uniform vec2 u_resolution;

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy;

  float angle = atan(st.x - 0.5, st.y - 0.5);
  float strength = angle;

  gl_FragColor = vec4(vec3(strength), 1.0);
}