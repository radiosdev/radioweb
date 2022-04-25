

export const DEFAULT_ANIMATION_TIME = 200;

// export const INDINGO = "#6558f5";
export const INDINGO = '#2272b8';

// export const DEFAULT_APP_COLOR = "#905edb"
export const DEFAULT_APP_COLOR = '#2272b8';

export const DEFAULT_VIEW_COLOR_RED = 'rgb(189, 24, 35)';

export const DEFAULT_VIEW_COLOR = 'rgb(34, 114, 184)';
// export const DEFAULT_VIEW_COLOR = "rgb(101, 88, 245)"

export const DEFAULT_VIEW_COLOR_ALPHA = 'rgb(111, 158, 199)';
// export const DEFAULT_VIEW_COLOR_ALPHA = "rgb(186, 180, 250)"

export const DEFAULT_LIKE_COLOR = '#e82653';
export const DEFAULT_BLUE = '#00a1db';
export const DEFAULT_LINEAR_LAYOUT = ['#2272b8', '#377ebd', '#5186b5'];
export const DEFAULT_LINEAR_LAYOUT2 = ['#fff', '#f6f6f6', '#f1f1f1'];

export const NUMBER_MASK = [
	'+',
	/\d/,
	/\d/,
	/\d/,
	' ',
	/\d/,
	/\d/,
	/\d/,
	' ',
	/\d/,
	/\d/,
	/\d/,
	' ',
	/\d/,
	/\d/,
	/\d/,
];



export const TIMES = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];



export function isEmail(email) {
	let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
	if (reg.test(email) === false) {
		return false;
	}
	return true;
}

export function currencyFormat(num) {
	return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}


