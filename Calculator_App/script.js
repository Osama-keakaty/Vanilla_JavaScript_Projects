const input = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
input.forEach((e) => {
    e.addEventListener("click", () => {
        if (e.value === "DE") {
            result.value = result.value.slice(0, -1);
            console.log(result.value);

        } else if (e.value === "AD") {
            result.value = "";
        } else if (e.value === "=") {
            try {
                if (result.value == "") {
                    alert("enter your mathematical expressions");
                } else {
                    // TODO evel is Library evaluates the mathematical expressions;
                    let number = eval(result.value);
                    result.value = number
                }

            } catch (error) {
                alert("repeat your expression");
                result.value = "";

            }

        } else {
            result.value = result.value + e.value;
        }
    });
});

result.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        try {
            if (result.value == "") {
                alert("enter your mathematical expressions");
            } else {
                let number = eval(result.value);
                result.value = number
            }

        } catch (error) {
            alert("repeat your expression");
            result.value = "";
        }
    }
});
