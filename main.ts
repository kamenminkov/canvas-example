const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;

const SUN_RADIUS = 50;
const EARTH_RADIUS = 5;
const ORBIT_RADIUS = 200;

const INTERVAL = 1;
const ANGLE_INCREMENT = 0.01;

init();

function init() {
	const canvas = document.getElementById("canvas") as HTMLCanvasElement;
	const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

	const sunX = 250;
	const sunY = 250;

	let angle = 0;

	let earthX: number;
	let earthY: number;

	setInterval(() => {
		angle = angle >= 2 * Math.PI ? 0 : angle + ANGLE_INCREMENT;

		earthX = sunX + ORBIT_RADIUS * Math.cos(angle);
		earthY = sunY + ORBIT_RADIUS * Math.sin(angle);

		ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

		drawSun(ctx, sunX, sunY, SUN_RADIUS);
		drawEarth(ctx, earthX, earthY, EARTH_RADIUS);
	}, INTERVAL);
}

function drawSun(
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	radius: number
) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2);
	ctx.closePath();
	ctx.fillStyle = "yellow";
	ctx.fill();
}

function drawEarth(
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	radius: number
) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2);
	ctx.closePath();
	ctx.fillStyle = "blue";
	ctx.fill();
}
