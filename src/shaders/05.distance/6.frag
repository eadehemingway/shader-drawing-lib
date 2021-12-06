precision mediump float;
uniform vec2 u_resolution;

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy;

  float starting_y = (st.y - 0.5) * 5.0 + 0.5;
  vec2 starting_coords = vec2(st.x, starting_y);
  float strength = 0.15 / (distance(starting_coords, vec2(0.5)));

  gl_FragColor = vec4(vec3(strength), 1.0);
}