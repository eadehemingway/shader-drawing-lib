precision mediump float;
uniform vec2 u_resolution;

float drawLine(float value, float pct, float thickness){
    float side_one = step(pct, 1.0 - value);
    float other_pct = 1.0 - pct - thickness;
    float side_two = step(other_pct, value);
    float white_line = side_one * side_two;
    return white_line;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    float vert_white_lines = drawLine(st.x, 0.7, 0.05);
    vert_white_lines += drawLine(st.x, 0.2, 0.05);

    float horiz_white_lines = drawLine(st.y, 0.7, 0.05);
    horiz_white_lines += drawLine(st.y, 0.15, 0.05);

   float color = vert_white_lines + horiz_white_lines;
    gl_FragColor = vec4(vec3(color),1.0);
}