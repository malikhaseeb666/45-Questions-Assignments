var userName = ["mahad", "ali", "usman", "admin", "zeeshan"];
userName.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a state report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for loging in again."));
    }
});
