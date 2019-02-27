let a = 5,
    b = 2;

function cs2() {
    let c = 0;

    return function () {
        c++;
        console.log(c);
        console.log(a);
        return function () {
            console.log(c);
            console.log(b);
        }
    }
}

let d = cs2();

d();