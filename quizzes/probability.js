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
            "q": "If events $A$ and $B$ are statistically independent",
            "a": [
                {"option": "One's occurrence does not affect the other", "correct": true},
                {"option": "They cannot both occur", "correct": false},
                {"option": "Their conditional probabilities are zero", "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> They can still both occur but P(A|B)=P(A)</p>",
            "incorrect": "<p><span>No.</span> Try again.</p>" // no comma here
        },
        { // Question 2
            "q": "If $P(A|B)>0$ then event $B$ occurred first and $A$ second",
            "a": [
                {"option": "True", "correct": false},
                {"option": "False", "correct": false},
                {"option": "Don't know", "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> We only know that B happens, and are looking for the probability of A.</p>",
            "incorrect": "<p><span>No.</span> Try again.</p>" // no comma here
        },
        { // Question 3
            "q": "If $P(A U B) = P(A) + P(B) - P(A)P(B)$ then what are events $A$ and $B$?",
            "a": [
                {"option": "Mutually exclusive", "correct": false},
                {"option": "Statistically independent", "correct": true},
                {"option": "Both", "correct": false}
            ],
            "correct": "<p><span>Correct!</span>The third term in the addition rule is the intersection, and when it's equal to the product of the two events they're independent.</p>",
            "incorrect": "<p><span>No.</span> Try again.</p>"
        }
    ]
};
