precision mediump float;
uniform vec2 u_resolution;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    //verticle lines
    float white_blocks_around_vertical_lines = 0.0;
    float left_white_block_one = step(0.7, 1.0 - st.x);
    float right_white_block_one = step(0.35, st.x);
    white_blocks_around_vertical_lines = left_white_block_one + right_white_block_one;

    float left_white_block_two = step(0.2, 1.0 - st.x);
    float right_white_block_two = step(0.85, st.x);
    white_blocks_around_vertical_lines *= left_white_block_two + right_white_block_two;

    // horizontal lines
    float white_blocks_around_horizontal_lines = 0.0;
    float bottom_white_block_one = step(0.7, 1.0 - st.y);
    float top_white_block_one = step(0.35, st.y);
    white_blocks_around_horizontal_lines = bottom_white_block_one + top_white_block_one;

    float bottom_white_block_two = step(0.15, 1.0 - st.y);
    float top_white_block_two = step(0.90, st.y);
    white_blocks_around_horizontal_lines *= bottom_white_block_two + top_white_block_two;


   float color = white_blocks_around_vertical_lines
                * white_blocks_around_horizontal_lines;

    gl_FragColor = vec4(vec3(color),1.0);
}