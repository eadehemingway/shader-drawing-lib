precision mediump float;
uniform vec2 u_resolution;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0); // at this point it is black

    vec3 green = vec3(0.0, 1.0, 0.0);
    float one_above_step = step(0.1,st.x);
    float one_below_step = 1.0 - step(0.1,st.x);


    color = vec3( one_below_step * green );

    gl_FragColor = vec4(color + one_above_step, 1.0);
}