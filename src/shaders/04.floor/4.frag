precision mediump float;
uniform vec2 u_resolution;

float random(vec2 st){ // one standard random func
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec2 gridUv = vec2(floor(st.x * 10.0) / 10.0, floor(st.y * 10.0) / 10.0);
    float strength = random(gridUv);
    gl_FragColor = vec4(vec3(strength), 1.0);
}