let subjectCount = 8;

function marks(m) {
    if (m >= 90) return 10;
    else if (m >= 80) return 9;
    else if (m >= 70) return 8;
    else if (m >= 60) return 7;
    else if (m >= 50) return 6;
    else if (m >= 45) return 5;
    else if (m >= 40) return 4;
    else return 0;
}


function addSubject() {
    subjectCount++;
    const container = document.getElementById('additional-subjects');
    if (!container) {
        console.error("Additional subjects container not found");
        return;
    }
    
    const newSubjectDiv = document.createElement('div');
    newSubjectDiv.className = 'additional-subject';
    newSubjectDiv.id = `subject-${subjectCount}`;
    newSubjectDiv.innerHTML = `
        <label for="sub${subjectCount}">Subject ${subjectCount} Marks: </label>
        <input type="text" id="sub${subjectCount}">
        <label for="credit${subjectCount}">Credits: </label>
        <select name="Credits" id="credit${subjectCount}">
            <option value="" selected>-- Select --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
    `;
    newSubjectDiv.style.opacity = '0';
    newSubjectDiv.style.transform = 'translateY(-20px)';
    container.appendChild(newSubjectDiv);
    setTimeout(() => {
        newSubjectDiv.style.opacity = '1';
        newSubjectDiv.style.transform = 'translateY(0)';
    }, 10);
}


function removeSubject() {
    console.log(`Attempting to remove subject ${subjectCount}`);
    if (subjectCount <= 8) {
        alert("Cannot remove original subjects! Minimum 8 subjects required.");
        console.log("Cannot remove: at minimum subject count");
        return;
    }

    const container = document.getElementById('additional-subjects');
    if (!container) {
        console.error("Additional subjects container not found");
        return;
    }

    const lastSubject = document.getElementById(`subject-${subjectCount}`);
    if (lastSubject) {
        container.removeChild(lastSubject);
        subjectCount--;
        console.log(`Removed subject ${subjectCount + 1}`);
    } else {
        console.error(`Could not find subject-${subjectCount} to remove`);
    }
}

function calculate() {
    var totalMarks = 0;
    var totalCredits = 0;

    for (var i = 1; i <= subjectCount; i++) {
        var sub = parseInt(document.getElementById("sub" + i).value);
        var credit = parseInt(document.getElementById("credit" + i).value);

        if (!isNaN(sub) && !isNaN(credit)) {
            totalMarks += marks(sub) * credit;
            totalCredits += credit;
        }
    }

    var sgpa = totalCredits > 0 ? (totalMarks / totalCredits).toFixed(3) : "N/A";
    document.getElementById("result").value = sgpa;
}
