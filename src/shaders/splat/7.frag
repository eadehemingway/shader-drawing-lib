precision mediump float;
uniform vec2 u_resolution;

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy;

  st = vec2(
    st.x + sin(st.y * 30.0) * 0.1,
    st.y + sin(st.x * 30.0) * 0.1
  );

  float strength = 1.0 - step(0.01, abs(distance(st, vec2(0.5)) - 0.25));

  gl_FragColor = vec4(vec3(strength), 1.0);
}