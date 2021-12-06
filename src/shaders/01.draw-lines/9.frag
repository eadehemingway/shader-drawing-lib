precision mediump float;
uniform vec2 u_resolution;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    float bottom_white_block = step(0.7, 1.0 - st.y);
    float top_white_block = step(0.35, st.y);
    float horizontal_line = bottom_white_block + top_white_block;

    float left_white_block = step(0.7, 1.0 - st.x);
    float right_white_block = step(0.35, st.x);
    float vertical_line = left_white_block + right_white_block;

   float color = horizontal_line * vertical_line;

    gl_FragColor = vec4(vec3(color),1.0);
}