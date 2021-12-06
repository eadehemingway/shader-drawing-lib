precision mediump float;
uniform vec2 u_resolution;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    float right_white_block = step(0.1,st.x);
    float top_white_block = step(0.1,st.y);

    color = vec3( right_white_block * top_white_block );

    gl_FragColor = vec4(color,1.0);
}