var nextEvent = 0;
var isEvent = false;

var width;
var height;

var events = [
    light,
    water,
    ground,
    vegetation,
    celestialBodies,
    fishAndBirds,
    creatures,
    man,
    sources
];

window.onload = function() {
    width = window.innerWidth;
    height = window.innerHeight;
}

window.onresize = function() {
    width = window.innerWidth;
    height = window.innerHeight;
}

// Set up the triggers for the click
window.onclick = function() {
    // Play the next event if there is another
    // and the last one isn't still playing
    if (nextEvent <= events.length && !isEvent) {
        isEvent = true;
        events[nextEvent++]();
    }
}

async function light() {
    const wordSpeed = 300;

    // Let there be light
    $("#GodLight").html("Let");
    await sleep(wordSpeed);
    $("#GodLight").html("Let there");
    await sleep(wordSpeed);
    $("#GodLight").html("Let there be");
    await sleep(wordSpeed);
    $("#GodLight").html("Let there be light");
    await sleep(500);
    $("#light").css("visibility", "visible");
    $("#GodLight").css("visibility", "hidden");
    await sleep(400);
    $("#thumb").addClass("make_visible");
    await sleep(1000);
    $("#thumb").removeClass("make_visible");
    $("#thumb").addClass("make_hidden");
    await sleep(400);

    // Slide over light
    $("#light").addClass("light_slide");
    await sleep(1000);

    // Label day/night
    $("#dark_cage").css("visibility", "visible");
    $("#light_cage").css("visibility", "visible");

    isEvent = false;
}

async function water() {
    $("#dark_cage").css("visibility", "hidden");
    $("#light_cage").css("visibility", "hidden");
    $("#light").addClass("to_water");
    await sleep(1000);
    
    $("#firmament").css("visibility", "visible");
    $("#firmament").addClass("firmament_grow");
    await sleep(1000);

    isEvent = false;
}

async function ground() {
    $("#firmament").css("visibility", "hidden");
    $("#light").addClass("flatten");
    await sleep(1000);
    $("#ground").addClass("grow_ground");
    await sleep(1000);

    isEvent = false;
}

async function vegetation() {
    $(".tree").addClass("show_trees");
    isEvent = false;
}

async function celestialBodies() {
    $("#day").addClass("create_day");
    $("#stars").addClass("set_stars");
    await sleep(1000);
    $("#sun").css("visibility", "visible");
    $("#moon").css("visibility", "visible");

    isEvent = false;
}

async function fishAndBirds() {
    $("#fish").css("visibility", "visible");
    $("#bird1").css("visibility", "visible");
    $("#bird2").css("visibility", "visible");
    isEvent = false;
}

async function creatures() {
    $("#cow").css("visibility", "visible");
    $("#pig").css("visibility", "visible");
    isEvent = false;
}

async function man() {
    $("#man").css("visibility", "visible");
    isEvent = false;
}

function sources() {
    $("#source").css("visibility", "visible");
    isEvent = false;
}