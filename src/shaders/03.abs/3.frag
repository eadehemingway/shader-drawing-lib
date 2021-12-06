precision mediump float;
uniform vec2 u_resolution;


void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    float strength = min(abs(st.y - 0.5), abs(st.x - 0.5));

    gl_FragColor = vec4(vec3(strength),1.0);
}