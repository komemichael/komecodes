export const drawImageProp = ({ ctx, img, x, y, w, h, offsetX, offsetY } = {}) => {
    if (typeof x !== "number") x = 0;
    if (typeof y !== "number") y = 0;
    if (typeof w !== "number") w = ctx.canvas.width;
    if (typeof h !== "number") h = ctx.canvas.height;
    if (typeof offsetX !== "number") offsetX = 0.5;
    if (typeof offsetY !== "number") offsetY = 0.5;

    if (offsetX < 0) offsetX = 0;
    if (offsetY < 0) offsetY = 0;
    if (offsetX > 1) offsetX = 1;
    if (offsetY > 1) offsetY = 1;

    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r, // new prop. width
        nh = ih * r, // new prop. height
        cx,
        cy,
        cw,
        ch,
        ar = 1;

    if (nw < w) ar = w / nw;
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;
    nw *= ar;
    nh *= ar;

    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
}

export const HANGMAN_SHAPES = [
    {type: 'line', shape_data: {x: 100, y: 130, line_end_positions: [{x: 100, y: 150}] }},
    {type: 'circle', shape_data: {x: 100, y: 100, radius: 30}},
    {type: 'line', shape_data: {x: 100, y: 150, line_end_positions: [{x: 150, y: 150}] }},
    {type: 'line', shape_data: {x: 100, y: 150, line_end_positions: [{x: 50, y: 150}] }},
    
    {type: 'line', shape_data: {x: 100, y: 150, line_end_positions: [{x: 100, y: 250}] }},

    {type: 'line', shape_data: {x: 100, y: 250, line_end_positions: [{x: 50, y: 300}] }},
    {type: 'line', shape_data: {x: 100, y: 250, line_end_positions: [{x: 150, y: 300}] }},

    
    {type: 'line', shape_data: {x: 200, y: 50, line_end_positions: [{x: 200, y: 350}] }},
    {type: 'line', shape_data: {x: 200, y: 350, line_end_positions: [{x: 50, y: 350}] }},
    {type: 'line', shape_data: {x: 200, y: 50, line_end_positions: [{x: 100, y: 50}] }},

    
    {type: 'line', shape_data: {x: 100, y: 50, line_end_positions: [{x: 100, y: 70}] }},
];