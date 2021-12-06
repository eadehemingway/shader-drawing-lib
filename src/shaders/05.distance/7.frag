precision mediump float;
uniform vec2 u_resolution;

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy;

  float strength = 0.15 / (distance(vec2(st.x, (st.y - 0.5) * 5.0 + 0.5), vec2(0.5)));
  strength *= 0.15 / (distance(vec2(st.y, (st.x - 0.5) * 5.0 + 0.5), vec2(0.5)));

  gl_FragColor = vec4(vec3(strength), 1.0);
}