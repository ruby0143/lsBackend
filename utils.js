
const pTypes = [{
    "p1": "Your self-assessment places you in the top left quadrant, as a Runway Leader. This signals the need for growth in your actualization areas - communication and connection. Just as a reminder, we are all on a continuous journey to move further up and to the right as we grow and develop as leaders.",
    "p2": "As a Runway Leader, you have big ideas and dreams, but are not making the kind of progress you would like to see against those goals. You will benefit greatly from leveraging exercises that help you articulate and accelerate the path to their goals.",
    "title": "a Runway Leader"
},
{
    "p1": "Your self-assessment places you in the bottom left quadrant, as an Undiscovered Leader. This signals the need for growth in your actualization areas - communication and connection. Just as a reminder, we are all on a continuous journey to move further up and to the right as we grow and develop as leaders.",
    "p2": "As an undiscovered leader, you are at the very beginning of your journey and asking the fundamental questions: Am I a leader? What do I have special to offer the world? You are either searching for the answers to these questions or you have answers, but are yet to do anything to actualize the answers. Ahead of you is a wonderful journey of self-discovery and confidence building.",
    "title": "an Undiscovered Leader"
},
{
    "p1": "Your self-assessment places you in the top right quadrant, as an In-Flight Leader. This signals you are exhibiting and feeling a certain level of confidence in both the visualization and actualization areas. Just as a reminder, we are all on a continuous journey to move further up and to the right as we grow and develop as leaders.",
    "p2": "As an In-Flight Leader, you are operating effectively as a leader in your current roles. All the while, it is critical you find and seize opportunities to further develop as a leader so you can take your leadership into new spheres - be it the boardroom, entrepreneurship, or beyond.  You are also well-positioned to coach and advise developing leaders.",
    "title": "an In-Flight Leader"
},
{
    "p1": "Your self-assessment places you in the bottom right quadrant, as a Low-Flying Leader. This signals that there is improvement to be made principally in the visualization area (capability and culture).  Just as a reminder, we are all on a continuous journey to move further up and to the right as we grow and develop as leaders.",
    "p2": "As a Low-Flying Leader, you are on the move and making progress but have yet to maximize or optimize your impact. You are experiencing success but are not progressing towards your BHAG (big hairy audacious goal).  You are generally playing it safe.  As you develop on their leadership journey, you will dream bigger or differently and begin to go after your treasure.",
    "title": "a Low-Flying Leader"
}]
function constructMailBody(name, x, y) {
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
        `<html>

        <body>
            <div style="line-height:2.0">
                <p style="text-align:center">
                    <img width="185px" height="100px" src="cid:unique@nodemailer.com"></img>
                </p>
        
                <br></br>
                <h2 style="text-align:center;font-weight:700;font-size:20px">${name}, your results show you are <span
                        style="color:maroon"> ${pTypes[index].title} </span></h2>
                <br> </br>
                <p style="margin:20px;text-align:center">
                    <img width="600px" height="500px" src="cid:quadrants@nodemailer.com"> </img>
                </p>
                <div style="margin:auto">
                    <p style="font-size:16px; font-weight:300 ;margin:10px; text-align:justify ">${pTypes[index].p1}</p>
                    <br></br>
                    <p style="font-size:16px; font-weight:300; margin:10px; text-align:justify">${pTypes[index].p2}</p>
                </div>
        
                <p style="margin:10px;padding:25px">
                <h3 style="text-align:center;font-weight:700;font-size:20px">Steps to Begin</h3>
                <div style="font-size:16px;font-weight:300;padding:10px">
                    The key to building your Leadership Capital can only be unlocked by doing the internal work of reflection
                    and unpacking your hidden assets. Here are two simple prompts to help you begin the process of introspection
                    and awareness of your assets.
                    <ul>
                        <li>Reflect on your leadership journey thus far. Where are you on your journey, and what progress have
                            you
                            already made?</li>
                        <li>Write a biography of yourself without letting modesty or self-consciousness get in the way. Don’t
                            worry about what you write being published or read by anyone - it won’t be unless you want it to!
                            Write boldly
                            rather than tamping down any of your assets, accomplishments, and aspirations. This can be a first
                            step to
                            more confidently and authentically telling your story.
                        </li>
                </div>
                <br></br>
                <div style="font-size:16px;font-weight:300;padding:10px">
                    If you are ready to take your Leadership Capital to the next level, you can reach out to us at <span
                        style="color:blue">nxgencoachnetwork.com/connect</span>. We look forward to the prospect of helping you
                    make progress on this journey.
                </div>
                <div style="margin:10px;margin-top:30px;font-weight:700;font-size:16px">
                    Best Wishes,<br></br>
                    NxGen COACH Network Team
                </div>
                </p>
            </div>
        </body>
        
        </html>`

    return message;
}

module.exports = { constructMailBody }