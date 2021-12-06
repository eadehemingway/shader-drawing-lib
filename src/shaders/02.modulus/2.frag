precision mediump float;
uniform vec2 u_resolution;


void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    float offset = 0.5;
    float strength = mod(st.y * 2.0 + offset, 1.0);

    gl_FragColor = vec4(vec3(strength),1.0);
}