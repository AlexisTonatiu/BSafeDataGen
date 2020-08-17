// 1. Requerir el modulo
const customTitlebar = require('custom-electron-titlebar');

// 2. Se crea la barra personalizada 
//    para que jale necesitamos decirle que color debe tener
//    
let MyTitleBar = new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex('#232323')
});

// 3. Acutalizar barra de titulo
MyTitleBar.updateTitle('B-Safe Data Gen');
////////////////////////////////////////////////////////////
const fs = require('fs');
const btnGuardar = document.getElementById('btnGuardar');
const btnRep = document.getElementById('btnRep');
var ejercicio = document.getElementById('select-3960');
var estado = document.getElementById('select-e739');
var ejec = document.getElementById('select-c1f1');
var fileName = document.getElementById('text-7c3a');
const path = '../../BSafe/data/train/';
let ws;
var cont;

const SerialPort = require('serialport')
const ReadLine = SerialPort.parsers.Readline;
const csv = require('fast-csv');
var csvStream = csv.format({ headers: true });
var guardarArchivo = false;
var rep = false;

var imu1 = document.getElementById('imu1');
var imu2 = document.getElementById('imu2');
const THREE = require('three');
const scene = new THREE.Scene();
const scene2 = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(50, 135 / 198, 0.1, 1000);
var camera2 = new THREE.PerspectiveCamera(50, 135 / 198, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({ antialias: true });
var renderer2 = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor('rgb(23,23,23)');
renderer2.setClearColor('rgb(23,23,23)');
renderer.setSize(135, 198);
renderer2.setSize(135, 198);
imu1.appendChild(renderer.domElement);
imu2.appendChild(renderer2.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
geometry.faces[0].color.setHex(0xeb7a34);
geometry.faces[1].color.setHex(0xeb7a34);
geometry.faces[2].color.setHex(0x5e5e5e);
geometry.faces[3].color.setHex(0x5e5e5e);
geometry.faces[4].color.setHex(0x34eb61);
geometry.faces[5].color.setHex(0x34eb61);
geometry.faces[6].color.setHex(0xeb7a34);
geometry.faces[7].color.setHex(0xeb7a34);
geometry.faces[8].color.setHex(0x34eb61);
geometry.faces[9].color.setHex(0x34eb61);
geometry.faces[10].color.setHex(0x232323);
geometry.faces[11].color.setHex(0x232323);
geometry.colorsNeedUpdate = true;
console.log(geometry.faces.length)
var material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, vertexColors: true });
var material2 = new THREE.MeshToonMaterial({ color: 0xFFFFFF, vertexColors: true });
var light = new THREE.PointLight(0xFFFFFF, 1, 100);
var light2 = new THREE.PointLight(0xFFFFFF, 1, 100);
var cube = new THREE.Mesh(geometry, material);
var cube2 = new THREE.Mesh(geometry, material2);
light.position.set(10, 0, 25);
light2.position.set(10, 0, 25);
camera.position.z = 4;
camera2.position.z = 4;

scene.add(light);
scene.add(cube);
scene2.add(light2);
scene2.add(cube2);

renderer.render(scene, camera);
renderer2.render(scene2, camera2);

const puerto = new SerialPort('COM3', { baudRate: 115200 });
const parser = puerto.pipe(new ReadLine({ delimeter: "s\r\n" }));

var ctxEMG1 = document.getElementById('canvEMG1').getContext('2d');
var ctxEMG2 = document.getElementById('canvEMG2').getContext('2d');
var ctxEMG3 = document.getElementById('canvEMG3').getContext('2d');
var ctxEMG4 = document.getElementById('canvEMG4').getContext('2d');
var ctxEMG5 = document.getElementById('canvEMG5').getContext('2d');
var ctxEMG6 = document.getElementById('canvEMG6').getContext('2d');
var ctxFlex1 = document.getElementById('canvFlex1').getContext('2d');
var ctxFlex2 = document.getElementById('canvFlex2').getContext('2d');
var ctxFlex3 = document.getElementById('canvFlex3').getContext('2d');

console.log(canvEMG1.height);
console.log(canvFlex1.height);

ctxEMG1.lineWidth = .1;
ctxEMG1.strokeStyle = 'rgb(57, 204, 165)';
ctxEMG1.lineJoin = ctxEMG1.lineCap = 'round';

ctxEMG2.lineWidth = .1;
ctxEMG2.strokeStyle = 'rgb(57, 204, 165)';
ctxEMG2.lineJoin = ctxEMG2.lineCap = 'round';

ctxEMG3.lineWidth = .1;
ctxEMG3.strokeStyle = 'rgb(57, 204, 165)';
ctxEMG3.lineJoin = ctxEMG3.lineCap = 'round';

ctxEMG4.lineWidth = .1;
ctxEMG4.strokeStyle = 'rgb(57, 204, 165)';
ctxEMG4.lineJoin = ctxEMG4.lineCap = 'round';

ctxEMG5.lineWidth = .1;
ctxEMG5.strokeStyle = 'rgb(57, 204, 165)';
ctxEMG5.lineJoin = ctxEMG5.lineCap = 'round';

ctxEMG6.lineWidth = .1;
ctxEMG6.strokeStyle = 'rgb(57, 204, 165)';
ctxEMG6.lineJoin = ctxEMG6.lineCap = 'round';

ctxFlex1.lineWidth = .1;
ctxFlex1.strokeStyle = 'rgb(218, 37, 91)';
ctxFlex1.lineJoin = ctxFlex1.lineCap = 'round';

ctxFlex2.lineWidth = .1;
ctxFlex2.strokeStyle = 'rgb(31, 125, 231)';
ctxFlex2.lineJoin = ctxFlex2.lineCap = 'round';

ctxFlex3.lineWidth = .1;
ctxFlex3.strokeStyle = 'rgb(220, 143, 20)';
ctxFlex3.lineJoin = ctxFlex3.lineCap = 'round';

ctxEMG1.fillStyle = 'rgb(23, 23, 23)';
ctxEMG2.fillStyle = 'rgb(23, 23, 23)';
ctxEMG3.fillStyle = 'rgb(23, 23, 23)';
ctxEMG4.fillStyle = 'rgb(23, 23, 23)';
ctxEMG5.fillStyle = 'rgb(23, 23, 23)';
ctxEMG6.fillStyle = 'rgb(23, 23, 23)';
ctxFlex1.fillStyle = 'rgb(23, 23, 23)';
ctxFlex2.fillStyle = 'rgb(23, 23, 23)';
ctxFlex3.fillStyle = 'rgb(23, 23, 23)';

var sliceWidth = canvEMG1.width * 0.1 / 10;
var sliceHeight = canvFlex1.height * 0.1 / 10;
x = 0;
y = 0;

parser.on('data', function (data) {
    var datos = data.split(',');
    if (datos.length == 14) {
        //console.log(datos);
        if (x >= canvEMG1.width) {
            x = 0;
            ctxEMG1.beginPath();
            ctxEMG1.moveTo(0, canvEMG1 / 2);
            ctxEMG2.beginPath();
            ctxEMG2.moveTo(0, canvEMG3 / 2);
            ctxEMG3.beginPath();
            ctxEMG3.moveTo(0, canvEMG3 / 2);
            ctxEMG4.beginPath();
            ctxEMG4.moveTo(0, canvEMG4 / 2);
            ctxEMG5.beginPath();
            ctxEMG5.moveTo(0, canvEMG5 / 2);
            ctxEMG6.beginPath();
            ctxEMG6.moveTo(0, canvEMG6 / 2);

        }

        if (y >= canvFlex1.height) {
            y = 0;
            ctxFlex1.beginPath();
            ctxFlex1.moveTo(canvFlex1 / 2, 0);
            ctxFlex2.beginPath();
            ctxFlex2.moveTo(canvFlex2 / 2, 0);
            ctxFlex3.beginPath();
            ctxFlex3.moveTo(canvFlex3 / 2, 0);
        }

        ctxEMG1.lineTo(x, ((-datos[0]) * canvEMG1.height / 12) + (canvEMG1.height / 2) + 10);
        ctxEMG2.lineTo(x, ((-datos[1]) * canvEMG2.height / 12) + (canvEMG2.height / 2) + 10);
        ctxEMG3.lineTo(x, ((-datos[2]) * canvEMG3.height / 12) + (canvEMG3.height / 2) + 10);
        ctxEMG4.lineTo(x, ((-datos[3]) * canvEMG4.height / 12) + (canvEMG4.height / 2) + 10);
        ctxEMG5.lineTo(x, ((-datos[4]) * canvEMG5.height / 12) + (canvEMG5.height / 2) + 10);
        ctxEMG6.lineTo(x, ((-datos[5]) * canvEMG6.height / 12) + (canvEMG6.height / 2) + 10);
        ctxFlex1.lineTo(((((-datos[7]) * canvFlex1.width / 15) + (canvFlex1.width / 2)) / -12) - 40, y);
        ctxFlex2.lineTo(((((-datos[8]) * canvFlex2.width / 15) + (canvFlex2.width / 2)) / 10) + 20, y);
        ctxFlex3.lineTo(((((-datos[8]) * canvFlex3.width / 15) + (canvFlex3.width / 2)) / 10) + 20, y);
        console.log((((-datos[7]) * canvFlex2.width / 15) + (canvFlex2.width / 2)) / -12) ;
        
        ctxEMG1.stroke();
        ctxEMG2.stroke();
        ctxEMG3.stroke();
        ctxEMG4.stroke();
        ctxEMG5.stroke();
        ctxEMG6.stroke();
        ctxFlex1.stroke();
        ctxFlex2.stroke();
        ctxFlex3.stroke();

        ctxEMG1.fillRect(x, 0, sliceWidth, canvEMG1.height);
        ctxEMG1.fillRect(x + 1, 0, sliceWidth, canvEMG1.height);
        ctxEMG2.fillRect(x, 0, sliceWidth, canvEMG2.height);
        ctxEMG2.fillRect(x + 1, 0, sliceWidth, canvEMG2.height);
        ctxEMG3.fillRect(x, 0, sliceWidth, canvEMG3.height);
        ctxEMG3.fillRect(x + 1, 0, sliceWidth, canvEMG3.height);
        ctxEMG4.fillRect(x, 0, sliceWidth, canvEMG4.height);
        ctxEMG4.fillRect(x + 1, 0, sliceWidth, canvEMG4.height);
        ctxEMG5.fillRect(x, 0, sliceWidth, canvEMG5.height);
        ctxEMG5.fillRect(x + 1, 0, sliceWidth, canvEMG5.height);
        ctxEMG6.fillRect(x, 0, sliceWidth, canvEMG6.height);
        ctxFlex1.fillRect(0, y, canvFlex1.width, sliceHeight);
        ctxFlex1.fillRect(0, y + 1, canvFlex1.width, sliceHeight);
        ctxFlex2.fillRect(0, y, canvFlex2.width, sliceHeight);
        ctxFlex2.fillRect(0, y + 1, sliceHeight, canvFlex2.width);
        ctxFlex3.fillRect(0, y, canvFlex3.width, sliceHeight);
        ctxFlex3.fillRect(0, y + 1, canvFlex3.width, sliceHeight);

        cube.rotation.x = datos[8] / 10;
        cube.rotation.y = datos[9] / 10;
        cube.rotation.z = datos[10] / 10;

        cube2.rotation.x = datos[11] / 10;
        cube2.rotation.y = datos[12] / 10;
        cube2.rotation.z = datos[13].replace('s', '') / 10;

        renderer.render(scene, camera);
        renderer2.render(scene2, camera2);
        x += sliceWidth;
        y += sliceHeight;

        if (guardarArchivo) {

            csvStream.write({
                dato: cont, bicep1: datos[0], bicep2: datos[1], dorsal1: datos[2], dorsal2: datos[3],
                trapecio1: datos[4], trapecio2: datos[5], flex1: datos[6], flex2: datos[7], flex3: datos[7],
                x1: datos[8], y1: datos[9], z1: datos[10], x2: datos[11], y2: datos[12], z2: datos[13].replace('s', ''),
                ejercicio: ejercicio.value, ejecucion: ejec.value, repeticion: rep, estado_: estado.value
            });

            cont++;
            rep = false;
        }
    }

});

btnGuardar.onclick = () => {
    guardarArchivo = !guardarArchivo;
    if (guardarArchivo) {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path, { recursive: true }, err => { });
        }
        cont = 0;
        ws = fs.createWriteStream(path + fileName.value + '.csv', { flag: 'a', includeEndRowDelimiter: true });
        csvStream = csv.format({ headers: true });
        csvStream.pipe(ws).on('end', () => { });
    } else {
        csvStream.end();
    }
}

btnRep.onclick = () => {
    rep = !rep;
    console.log('repeticion');
}