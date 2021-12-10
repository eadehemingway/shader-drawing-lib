

const multiTileWrapper = document.querySelector(".multi-tile-wrapper");

function createHtml(frag, index){

    const canvas = document.createElement("canvas");
    canvas.width = 500;
    canvas.height = 500;
    const text = document.createElement("code");
    text.textContent = frag;
    const pre = document.createElement("pre");
    pre.appendChild(text);

    const wrapper = document.createElement("div");
    const left = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = `Fragment #${index + 1}`;
    left.appendChild(title);
    wrapper.className = "frag-shader-wrapper";
    left.appendChild(pre);
    wrapper.appendChild(left);
    wrapper.appendChild(canvas);

    multiTileWrapper.appendChild(wrapper);
    return canvas;

}

function clearDom(){
    multiTileWrapper.innerHTML = "";
}

export { createHtml, clearDom };