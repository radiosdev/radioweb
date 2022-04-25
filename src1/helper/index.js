export const DEFAULT_URL = "https://olombongo-api.dev.alheios.com.br"
// export const DEFAULT_URL = "http://localhost:5001"

export const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dczlvff19/upload';
export const DEFAULT_TITLE = "Olombongo"
export const DEFAULT_USER_STRUCT = { id: 0 }

export const DEFAULT_ANIMATION_TIME = 200;

// export const INDINGO = "#6558f5";
export const INDINGO = "#2272b8"

// export const DEFAULT_APP_COLOR = "#905edb"
export const DEFAULT_APP_COLOR = "#2272b8"

export const DEFAULT_VIEW_COLOR_RED = "rgb(189, 24, 35)"

export const DEFAULT_VIEW_COLOR = "rgb(34, 114, 184)"
// export const DEFAULT_VIEW_COLOR = "rgb(101, 88, 245)"

export const DEFAULT_VIEW_COLOR_ALPHA = "rgb(111, 158, 199)"
// export const DEFAULT_VIEW_COLOR_ALPHA = "rgb(186, 180, 250)"

export const DEFAULT_LIKE_COLOR = "#e82653"
export const DEFAULT_BLUE = "#00a1db"
export const DEFAULT_LINEAR_LAYOUT = ['#2272b8', '#377ebd', '#5186b5']
export const DEFAULT_LINEAR_LAYOUT2 = ['#fff', '#f6f6f6', '#f1f1f1']

export const NUMBER_MASK = ["+", /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/]
export const LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export const TEAM = [
    { name: 'Yuri', function: 'Programador', image: 'https://cdn.ourcrowd.com/wp-content/uploads/2021/10/David-Maman.png' },
    { name: 'Lucas', function: 'Programador', image: 'https://cdn.ourcrowd.com/wp-content/uploads/2021/10/Michael-Markzon.png' },
    { name: 'Diago', function: 'Programador', image: 'https://cdn.ourcrowd.com/wp-content/uploads/2021/10/Omer-Levy.png' },
]

export const CATEGORYS = [
    { id: 1, name: "Esportes", icon: 'running' },
    { id: 2, name: "Startups", icon: 'medal' },
    { id: 3, name: "Fintech", icon: 'search-dollar' },
    { id: 4, name: "IA", icon: 'brain' },
    { id: 5, name: "Musica", icon: 'music' },
]

export const YEARS = [
    { id: 1, name: 2018 },
    { id: 2, name: 2019 },
    { id: 3, name: 2020 },
    { id: 4, name: 2021 },
]

export function isEmail(email) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
        return false;
    }
    return true
}

export function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const refreshToken = async (callback) => {

    console.log(`${DEFAULT_URL}user/refresh`)

    try {

        const response = await fetch(`${DEFAULT_URL}user/refresh`, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        });

        const responseJson = await response.json();
        callback(responseJson)

    } catch (e) {
        console.log(e)
    }

}