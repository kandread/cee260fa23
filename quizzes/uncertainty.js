quiz = {
    "info": {
        "name":    "", // Should be empty with emacs-reveal
        "main":    "What type of uncertainty do you primarily expect in...",
        "level1":  "Excellent!", // 80-100%
        "level2":  "Well done!", // 60-79%
        "level3":  "You may need to re-read some parts.", // 40-59%
        "level4":  "Did you just jump here?",             // 20-39%
        "level5":  "Please restart from the beginning."   // 0-19%, no comma here
    },
    "questions": [
        { // Question 1
            "q": "Measurements of air temperature",
            "a": [
                {"option": "Aleatory", "correct": false},
                {"option": "Epistemic", "correct": false},
                {"option": "Both", "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> Variability in air temperature and accuracy in measurements</p>",
            "incorrect": "<p><span>No.</span> Try again.</p>" // no comma here
        },
        { // Question 2
            "q": "Simulating flood hazard of a particular river",
            "a": [
                {"option": "Aleatory", "correct": false},
                {"option": "Epistemic", "correct": true},
                {"option": "Both", "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> Uncertainty in data and mathematical model describing flood hazard.</p>",
            "incorrect": "<p><span>No.</span> Try again.</p>" // no comma here
        },
        { // Question 3
            "q": "Temperature response to CO2 emissions",
            "a": [
                {"option": "Aleatory", "correct": true},
                {"option": "Epistemic", "correct": false},
                {"option": "Both", "correct": false}
            ],
            "correct": "<p><span>Correct!</span>Natural variability in relationship between temperature and CO2</p>",
            "incorrect": "<p><span>No.</span> Try again.</p>"
        }
    ]
};
