precision mediump float;
uniform vec2 u_resolution;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    // verticle lines
    float vert_white_blocks = 0.0;
    float left_white_block_one = step(0.7, 1.0 - st.x);
    float right_white_block_one = step(0.25, st.x);
    vert_white_blocks = left_white_block_one
                        * right_white_block_one;

    float left_white_block_two = step(0.2, 1.0 - st.x);
    float right_white_block_two = step(0.75, st.x);
    vert_white_blocks += left_white_block_two
                        * right_white_block_two;

    // horizontal lines
    float horz_white_blocks = 0.0;
    float bottom_white_block_one = step(0.7, 1.0 - st.y);
    float top_white_block_one = step(0.25, st.y);
    horz_white_blocks = bottom_white_block_one
                        * top_white_block_one;

    float bottom_white_block_two = step(0.15, 1.0 - st.y);
    float top_white_block_two = step(0.80, st.y);
    horz_white_blocks += bottom_white_block_two
                        * top_white_block_two;


   float color = vert_white_blocks + horz_white_blocks;

    gl_FragColor = vec4(vec3(color),1.0);
}