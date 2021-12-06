precision mediump float;
uniform vec2 u_resolution;
#define PI 3.1415926535897932384626433832795


void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy;

  float angle = atan(st.x - 0.5, st.y - 0.5) / (PI * 2.0) + 0.5;
  float radius = 0.25;
  radius += sin(angle * 100.0) * 0.02;
  float strength = step(0.01, abs(distance(st, vec2(0.5)) - radius)); // from circle drawing ( the same)

  gl_FragColor = vec4(vec3(strength), 1.0);
}