quiz1 = {
    "info": {
        "name":    "", // Should be empty with emacs-reveal
        "main":    "",
        "level1":  "Excellent!", // 80-100%
        "level2":  "Well done!", // 60-79%
        "level3":  "You may need to re-read some parts.", // 40-59%
        "level4":  "Did you just jump here?",             // 20-39%
        "level5":  "Please restart from the beginning."   // 0-19%, no comma here
    },
    "questions": [
        { // Question 1
            "q": "Which histogram would you choose?",
            "a": [
                {"option": "Either", "correct": false},
                {"option": "None", "correct": false},
                {"option": "Left", "correct": false},
                {"option": "Middle", "correct": true},
                {"option": "Right", "correct": false}// no comma here
            ],
            "correct": "<p><span>Correct!</span> No over- or under-smoothing.</p>",
            "incorrect": "<p><span>No.</span> Try again.</p>" // no comma here
        }
    ]
}
