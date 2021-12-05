precision mediump float;
uniform vec2 u_resolution;


void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    // x bar (from before)
    float strength_x = step(0.8, mod(st.y * 10.0, 1.0));
    strength_x *= step(0.4, mod(st.x * 10.0, 1.0));

    // y bar
    float strength_y = step(0.4, mod(st.y * 10.0, 1.0));
    strength_y *= step(0.8, mod(st.x * 10.0, 1.0));

    float strength = strength_x + strength_y;
    gl_FragColor = vec4(vec3(strength),1.0);
}