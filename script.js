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

function calculate() {
    var totalMarks = 0;
    var totalCredits = 0;

    for (var i = 1; i <= 8; i++) {
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