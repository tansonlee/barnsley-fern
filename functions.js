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
