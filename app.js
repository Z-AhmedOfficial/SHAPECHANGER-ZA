function shape1() {
    var a = document.getElementById('mydiv');
    a.style.borderRadius = '50%';
    a.style.width = '400px';
    a.style.height = '400px';
    a.style.backgroundColor = 'black';
    a.style.border = 'none';
    a.style.clipPath = '';
}

function shape2() {
    var b = document.getElementById('mydiv');
    b.style.borderRadius = '';
    b.style.width = '800px';
    b.style.height = '400px';
    b.style.backgroundColor = 'blue';
    b.style.border = 'none';
    b.style.borderLeft = '';
    b.style.borderRight = '';
    b.style.borderBottom = '';
    b.style.borderBottomLeftRadius = '';
    b.style.borderBottomRightRadius = '';
    b.style.clipPath = '';
}

function shape3() {
    var c = document.getElementById('mydiv');
    c.style.width = '200px';
    c.style.height = '200px';
    c.style.backgroundColor = 'red';
    c.style.border = 'none';
    c.style.borderLeft = '100px solid transparent';
    c.style.borderRight = '100px solid transparent';
    c.style.borderBottom = '200px solid red';
    c.style.borderBottomLeftRadius = '5%';
    c.style.borderBottomRightRadius = '5%';
    c.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
}
