quiz2 = {
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
            "q": "Which of the following is true?",
            "a": [
                {"option": "The mean, median and mode are never equal", "correct": false},
                {"option": "The median and mode can be equal but the mean is never equal to them", "correct": false},
                {"option": "The mean, median and mode are always equal", "correct": false},
                {"option": "The mean, median and mode can all be equal to each other", "correct": true}// no comma here
            ],
            "correct": "<p><span>Correct!</span> True for symmetric distributions.</p>",
            "incorrect": "<p><span>No.</span> Try again.</p>" // no comma here
        }
    ]
}
