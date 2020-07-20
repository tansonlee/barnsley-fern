let pt;

function setup() {
	createCanvas(500, 500);
	pt = createVector(0, 0);
	background(0);
}

function draw() {
	for (let i = 0; i < 200; i++) {
		drawPoint(pt);
		pt = nextPoint(pt);
	}
}

const f1 = v => {
	const nextX = 0;
	const nextY = 0.16 * v.y;
	return createVector(nextX, nextY);
};

const f2 = v => {
	const nextX = 0.85 * v.x + 0.04 * v.y;
	const nextY = -0.04 * v.x + 0.85 * v.y + 1.6;
	return createVector(nextX, nextY);
};

const f3 = v => {
	const nextX = 0.2 * v.x - 0.26 * v.y;
	const nextY = 0.23 * v.x + 0.22 * v.y + 1.6;
	return createVector(nextX, nextY);
};

const f4 = v => {
	const nextX = -0.15 * v.x + 0.28 * v.y;
	const nextY = 0.26 * v.x + 0.24 * v.y + 0.44;
	return createVector(nextX, nextY);
};

const nextPoint = v => {
	const r = random();
	let next;

	if (r < 0.01) {
		next = f1(v);
	} else if (r < 0.86) {
		next = f2(v);
	} else if (r < 0.93) {
		next = f3(v);
	} else {
		next = f4(v);
	}

	return next;
};

const drawPoint = pt => {
	const x = map(pt.x, -2.182, 2.6558, 0, width);
	const y = map(pt.y, 0, 9.9983, height, 0);

	const r = map(y, 0, height, 0, 255);
	const g = map(x, 0, width, 0, 255);
	const b = map(y, 0, height, 255, 0);

	stroke(r, g, b);
	strokeWeight(1);
	point(x, y);
};
