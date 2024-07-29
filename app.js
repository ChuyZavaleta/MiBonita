let colors_hojas = ["#4F6F52", "#739072"];
let colors_petalos = [ "#b34646", "#E7EAB5", "#DEBACE", "#A2CDCD", "BC9F8B" ];

let s = 120;
let grosorMarco = 45;
let anchoMarco, altoMarco;
let anchoGrid, altoGrid;

var w = window.innerWidth;
var h = window.innerHeight;  

function setup() {
    createCanvas(w, h);
    background(255);

    anchoMarco = width - s;
    altoMarco = height - s;

    anchoGrid = anchoMarco - grosorMarco * 3;
    altoGrid = altoMarco - grosorMarco * 3;

    noFill();
    stroke(0);
    strokeWeight(grosorMarco);
    rectMode(CENTER);
    rect(width / 2, height / 2, width - s, height - s);

    fill(255);
    noStroke();
    textAlign(CENTER);
    textFont("Playwrite AR");
    textSize(15);
    text('Vanessa Figueiraz', width/2, s/2 + 4);
    textSize(10);
    text('Con todo el amor del que mucho te quiere y', width/2, height - (s/2 + 3));
    text('del que espera quererte más..', width/2, height - (s/2 - 12));

    noStroke();
    fill("#FFDBC3");
    rectMode(CENTER);
    rect(width / 2, height / 2, anchoGrid, altoGrid);

    strokeWeight(1);
    stroke(0);

    let minX = s / 2 + (grosorMarco * 3 / 2);
    let maxX = width - (s / 2 + (grosorMarco * 3 / 2));

    let minY = s / 2 + (grosorMarco * 3 / 2);
    let maxY = height - (s / 2 + (grosorMarco * 3 / 2));

    for (let x = minX; x <= maxX; x += 20) {
        for (let y = minY; y <= maxY; y += 20) {

            if (random(1) > 0.5) {
                for (let i = 0; i < 15; i++) {
                    fill(colors_hojas[int(random(colors_hojas.length))]);
                    push();
                    translate(x + random(-10, 10), y + random(-10, 10));
                    rotate(random(TWO_PI));
                    scale(random(0.5, 1));
                    drawComponent();
                    pop();
                }
            }

            let n = int(random(5, 15))

            for (let j = 0; j < n; j++) {
                if (random(1) < 0.1) {
                    fill(colors_petalos[int(random(colors_petalos.length))]);

                    let dx = random(-10, 10);
                    let dy = random(-10, 10);

                    for (let k = 0; k <= 20; k++) {
                        push();
                        translate(x + dx, y + dy);
                        rotate(random(TWO_PI));
                        scale(random(0.5, 1));
                        drawComponent();
                        pop();
                    }

                    fill("#F8B400");
                    ellipse(x + dx, y + dy, 5, 5);
                }
            }
        }
    }
}

function mousePressed() {
    setup();
}

function drawComponent() {
    beginShape();
    curveVertex(0, 0);
    curveVertex(0, 0);
    curveVertex(2, 6);
    curveVertex(6, 12);
    curveVertex(12, 12);
    curveVertex(12, 6);
    curveVertex(6, 2);
    curveVertex(0, 0);
    curveVertex(0, 0);
    endShape();
}
