
const pTypes = [{
    "p1": "Your self-assessment places you in the upper left quadrant, signaling that there is improvement to be made in the actualization area (communication and connection).",
    "p2": "Just as a reminder, we are all on a continuous journey to move further up and to the right as we grow and develop as leaders.  We look forward to discussing ways that we can help you make progress on this journey.",
    "title": "runway leader"
},
{
    "p1": "Your self-assessment places you in the lower left quadrant, signaling there is improvement to be made in both the visualization and actualization areas.",
    "p2": "Just as a reminder, we are all on a continuous journey to move further up and to the right.  We look forward to discussing ways that we can help you make progress on this journey.",
    "title": "undiscovered leader"
},
{
    "p1": "Your self-assessment places you in the upper right quadrant, signaling that you are exhibiting and feeling a certain level of confidence in both the visualization and actualization areas.",
    "p2": "Just as a reminder, we are all on a continuous journey to move further up and to the right as we grow and develop as leaders. We look forward to discussing ways that we can help you make progress on this journey. ",
    "title": "in-flight leader"
},
{
    "p1": "Your self-assessment places you in the lower right quadrant, signaling that there is improvement to be made principally in the visualization area (capability and culture).",
    "p2": "Just as a reminder, we are all on a continuous journey to move further up and to the right as we grow and develop as leaders.  We look forward to discussing ways that we can help you make progress on this journey",
    "title": "low-flying leader"
}]
function constructMailBody(name, x, y, imgUrl) {
    let index;
    if (x <= 5) {
        if (y > 5) {
            index = 0;
        }
        else {
            index = 1;
        }
    }
    else {
        if (y > 5) {
            index = 2;
        }
        else {
            index = 3;
        }
    }

    const message =
        `<div> 
        <img src="" alt="" />
        <br></br>
<h2 style="text-align:center;font-weight:400">${name}, <span style= "color:red;"> your result </span>(<span style="color:red">•</span>) shows you are a <span style="font-weight:700">${pTypes[index].title}</span>.</h2>
        <br > </br>
<div style="margin:20px">
        <img src=${imgUrl} alt="chart.png" > </img>
</div>
        <div style="margin:auto">
            <p style="font-size:16px; font-weight:300 ;margin:10px; text-align:justify ">${pTypes[index].p1}</p>
             <br></br>
            <p style="font-size:16px; font-weight:300; margin:10px; text-align:justify">${pTypes[index].p2}</p>
        </div>
        <br></br>
        <br></br>
        <p style="text-align:center">To begin your journey with us,drop a mail to <span style="color:blue">connect@nxgencoachnetwork.com</span></p>
    </div>`

    return message;
}

module.exports = { constructMailBody }