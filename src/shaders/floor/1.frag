precision mediump float;
uniform vec2 u_resolution;


void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    float strength = floor(st.x * 10.0) / 10.0;
    gl_FragColor = vec4(vec3(strength),1.0);
}