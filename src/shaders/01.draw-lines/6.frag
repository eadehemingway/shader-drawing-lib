precision mediump float;
uniform vec2 u_resolution;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    float left_white_block = step(0.7, 1.0 - st.x);
    color = vec3( left_white_block  );

    gl_FragColor = vec4(color,1.0);
}