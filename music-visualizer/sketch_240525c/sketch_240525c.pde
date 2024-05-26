let song;
let fft;
let currentVisualization = 'bars';
let songNameDiv;
let bgSpeed = 15; // Default background speed
let isSongLoaded = false;
let colorOffset = 0;

function preload() {
    // No default song
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('visualizer');
    fft = new p5.FFT();
    songNameDiv = select('#songName');
    songNameDiv.html('Upload Song');

    select('#fullScreenBtn').mousePressed(toggleFullScreen);
    select('#saveBtn').mousePressed(saveCanvasImage);
}

function draw() {
    document.body.style.animationDuration = `${bgSpeed}s`;
    background(0, 0, 0, 0); // Transparent background to see the gradient
    colorOffset += 0.5; // Increase to speed up color change

    if (currentVisualization === 'bars') {
        drawBars();
    } else if (currentVisualization === 'waveform') {
        drawWaveform();
    } else if (currentVisualization === 'particles') {
        drawParticles();
    }
}

function drawBars() {
    let spectrum = fft.analyze();
    noStroke();
    for (let i = 0; i < spectrum.length; i++) {
        let x = map(i, 0, spectrum.length, 0, width);
        let h = -height + map(spectrum[i], 0, 255, height, 0);
        fill(color((i + colorOffset) % 350, 100, 360));
        rect(x, height, width / spectrum.length / 2, h);
    }
}

function drawWaveform() {
    let waveform = fft.waveform();
    noFill();
    strokeWeight(1);
    beginShape();
    for (let i = 0; i < waveform.length; i += 4) { // Increment i by 4 instead of 1
        let x = map(i, 0, waveform.length, 0, width);
        let y = map(waveform[i], -1, 1, 0, height);
        if (waveform[i] >= 0) {
            stroke(0); // Black for positive values
        } else {
            stroke(255, 255, 0); // Yellow for negative values
        }
        vertex(x, y);
    }
    endShape();
}

function drawParticles() {
    let spectrum = fft.analyze();
    noStroke();
    for (let i = 0; i < spectrum.length; i++) {
        let angle = map(i, 0, spectrum.length, 0, TWO_PI);
        let radius = map(spectrum[i], 0, 255, 0, width / 2);
        let x = width / 2 + radius * cos(angle);
        let y = height / 2 + radius * sin(angle);
        fill(color((i + colorOffset) % 360, 300, 250, 100, 400, 200));
        ellipse(x, y, 2, 2);
    }
}

function togglePlay() {
    if (song && song.isPlaying()) {
        song.pause();
    } else if (song) {
        song.play();
    }
}

function setVolume(volume) {
    if (song) {
        song.amp(volume);
    }
}

function changeVisualization(mode) {
    currentVisualization = mode;
}

function toggleFullScreen() {
    let fs = fullscreen();
    fullscreen(!fs);
}

function saveCanvasImage() {
    save('visualization.png');
}

document.getElementById('fileInput').addEventListener('change', function(event) {
    let file = event.target.files[0];
    let url = URL.createObjectURL(file);
    if (song) {
        song.stop();
    }
    song = loadSound(url, () => {
        song.play();
        songNameDiv.html(file.name);
        isSongLoaded = true;

        // Reset visualization for new song
        bgSpeed = 15; // Adjust as needed for tempo-based change
    });
});
