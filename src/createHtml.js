
const multiTileWrapper = document.querySelector(".multi-tile-wrapper");

function createHtml(frag, index){

    const canvas = document.createElement("canvas");

    const text = document.createElement("code");
    text.textContent = frag;
    const pre = document.createElement("pre");
    pre.appendChild(text);

    const wrapper = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = `Fragment #${index}`;
    wrapper.appendChild(title);
    wrapper.className = "frag-shader-wrapper";
    wrapper.appendChild(pre);
    wrapper.appendChild(canvas);

    multiTileWrapper.appendChild(wrapper);
    return canvas;

}

export { createHtml };