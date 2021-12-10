precision mediump float;
uniform vec2 u_resolution;

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  // the "- 0.25" bit makes the zero values go below zero
  // which then makes the abs create white space in the center
  float strength = distance(st, vec2(0.5)) - 0.25;
  strength = abs(strength);


  gl_FragColor = vec4(vec3(strength), 1.0);
}