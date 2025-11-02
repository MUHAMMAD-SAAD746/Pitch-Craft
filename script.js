// const apiKey = "YOUR_GEMINI_API_KEY";

document.getElementById("pitchForm").addEventListener("submit", function (e) {
    e.preventDefault();
    generatePitch();
});

function generatePitch() {
    const idea = document.getElementById("idea").value.trim();
    const tone = document.getElementById("tone").value;
    const language = document.getElementById("language").value;

    if (!idea || !tone || !language) {
        alert("Please fill all fields!");
        return;
    }

    // Simulated AI output for now
    const pitchData = {
        startup_name: idea.split(" ")[0] + "X",
        tagline: "Turning ideas into reality",
        elevator_pitch: `${idea} is a ${tone.toLowerCase()} solution built to simplify lives.`,
        problem_statement: "People struggle to manage this issue efficiently.",
        solution_statement: `${idea} solves it through modern design and smart technology.`,
        target_audience: "Entrepreneurs, students, and innovators.",
        hero_message: "Build smarter, dream bigger with Pitch Craft.",
        color_palette: ["#0077b6", "#00b4d8", "#caf0f8"],
        logo_concept: "A creative blend of light bulb and rocket."
    };

    // Display result
    document.getElementById("startup-name").innerText = pitchData.startup_name;
    document.getElementById("tagline").innerText = pitchData.tagline;
    document.getElementById("elevator").innerText = pitchData.elevator_pitch;
    document.getElementById("problem").innerText = pitchData.problem_statement;
    document.getElementById("solution").innerText = pitchData.solution_statement;
    document.getElementById("audience").innerText = pitchData.target_audience;
    document.getElementById("hero").innerText = pitchData.hero_message;
    document.getElementById("colors").innerText = pitchData.color_palette.join(", ");
    document.getElementById("logo").innerText = pitchData.logo_concept;

    document.getElementById("result-section").classList.remove("hidden");
}

// Buttons (for later)
document.getElementById("saveBtn").addEventListener("click", function () {
    alert("This will save the pitch locally (feature coming soon).");
});

document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("result-section").classList.add("hidden");
    document.getElementById("pitchForm").reset();
});

// Download PDF
document.getElementById("downloadBtn").addEventListener("click", function () {
    const resultSection = document.getElementById("result-card");
    const opt = {
        margin:       0.5,
        filename:     'PitchCraft_Report.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(resultSection).save();
});



// -------------------------
// LOGIN MODAL FUNCTIONALITY
// -------------------------

const loginModal = document.getElementById("loginModal");
const loginForm = document.getElementById("loginForm");
const closeModal = document.querySelector(".close");

// Show login modal on page load
loginModal.style.display = "flex";

// Close modal when clicking X
closeModal.onclick = () => loginModal.style.display = "none";

// Sample credentials
const validUser = { username: "admin", password: "12345" };

// Handle login
loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if(username === validUser.username && password === validUser.password){
        alert("Login successful!");
        loginModal.style.display = "none";
    } else {
        alert("Invalid username or password!");
    }
});

