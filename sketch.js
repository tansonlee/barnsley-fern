let pt;

function setup() {
	createCanvas(500, 500);
	pt = createVector(0, 0);
	background(0);
}

function draw() {
	// iterate 200 times per frame
	for (let i = 0; i < 200; i++) {
		drawPoint(pt);
		pt = nextPoint(pt);
	}
}

const nextPoint = v => {
	const r = random();
	let next;

	if (r < 0.01) {
		// 1% chance
		next = f1(v);
	} else if (r < 0.86) {
		// 85% chance
		next = f2(v);
	} else if (r < 0.93) {
		// 7% chance
		next = f3(v);
	} else {
		// 7% chance
		next = f4(v);
	}

	return next;
};

const drawPoint = pt => {
	// domain of the functions: -2.182 < x < 2.6558
	const x = map(pt.x, -2.182, 2.6558, 0, width);

	// range of the functions: 0 <= y < 9.9983
	const y = map(pt.y, 0, 9.9983, height, 0);

	// fill colour based on its x, y location on the canvas
	const r = map(y, 0, height, 0, 255);
	const g = map(x, 0, width, 0, 255);
	const b = map(y, 0, height, 255, 0);

	stroke(r, g, b);
	strokeWeight(1);
	point(x, y);
};
