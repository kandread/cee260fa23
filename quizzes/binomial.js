quiz = {
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
            "q": "From past records, a factory produces 90% functional chips. If $X$ describes the number of functional chips out of 100 produced in a single day, would $X$ be a binomial variable?",
            "a": [
                {"option": "Yes", "correct": false},
                {"option": "No", "correct": true},
                {"option": "Don't know", "correct": false}
            ],
            "correct": "<p><span>Correct!</span> We cannot assume independence.</p>",
            "incorrect": "<p><span>No.</span> Try again.</p>" // no comma here
        },
        {
            "q": "If $X_1$ and $X_2$ are binomial variables with $(n_i,p)$, is their sum a binomial variable and what parameters does it have?",
            "a": [
                {"option": "Yes. $((n_1+n_2)/2, p)", "correct": false},
                {"option": "Yes. $(n_1+n_2, p)", "correct": true},
                {"option": "No.", "correct": false}
            ],
            "correct": "<p><span>Correct!</span> $n_1+n_2$ independent trials.</p>",
            "incorrect": "<p><span>No.</span> Try again.</p>" // no comma here
        }
    ]
};
