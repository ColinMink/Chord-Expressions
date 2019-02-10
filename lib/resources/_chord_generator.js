const Chord = require('./Chord.js');
const Note = require('./Note.js');


Chord.symbol = {
    triads: [
        "",
        "m",
        "dim",
        "+",
        "sus2",
        "sus4"
    ],
    extensions: [
        "6",
        "7",
        "9",
        "11",
        "13",
        "maj7",
        "maj9",
        "maj11",
        "maj13"
    ],
    mods: [
        "b2",
        "#4",
        "b5",
        "#5",
        "13",
        "maj7",
        "maj9",
        "maj11",
        "maj13"
    ],
    // True if triad symbol can be simply concatenated [triad + extension]
    simpleExtend = symbol => {
        return (symbol === "") || (symbol === "+");
    },
    // True if we need [triad + "-" + extension]
    dashSeparate = symbol => {
        return (symbol === "m") || (symbol === "dim");
    },
    // True if [extension + triad]
    reverseOrder = symbol => {
        return (symbol === "sus2") || (symbol === "sus4");
    },
}



/* Generating Chord symbols to feed to the parser to get generated chord objects */

function createTriads(note) {
    let triads = {};
    Chord.symbol.triads.forEach(triad => {
      triads[triad] = new Chord(note + triad);
    }); 
    return triads;
    
    // do adds and mods before returning
}

function modTriad(triad) {
    
    
}

function extendTriad(triad) {
    let extensions = {};
    Chord.symbol.extensions.forEach(extension => {
        if (Chord.symbol.simpleExtend(triad)) {
            triad.extensions[extension] = new Chord(triad.notation + extension);
        }
        else if(Chord.symbol.dashSeparate(triad)) {
            extensions[extension] = new Chord(triad.notation + "-" + extension);
        }
        else if(Chord.symbol.reverseOrder(triad)) {
            extensions[extension] = new Chord(extension + triad.notation);
        }
    }); 
    return extensions;
    
    // do adds and mods beforereturning
}

// mod: every non-root note in every direction and each permutation thereof. No exceptions
//  - generate all combinations from of non-root chord tones i.e. list of (b_ct, #_ct) tones and combinations
// add: every interval that doesn't existin the chord. and render it both ways if not natural (#4, b5 vs just 4)

[
    "",
    "6",
    "7",
    "9",
    "11",
    "13",
    "maj7",
    "maj9",
    "maj11",
    "maj13",
    
    "m",
    "m6",
    "m7",
    "m9",
    "m11",
    "m13",
    "m-maj7",
    "m-maj9",
    "m-maj11",
    "m-maj13",
    
    "+",
    "+6",
    "+7",
    "+9",
    "+11",
    "+13",
    "+maj7",
    "+maj9",
    "+maj11",
    "+maj13",
    
    /* dim Triad (1,b3,b5) */
    "dim",
    /* dim Seven 1,b3,b5,bb7 */
    "dim7",
    /* 1,b3,b5,bb7 + extension */
    "dim9",
    "dim11",
    "dim13"
    /* half dim Seven 1,b3,b5,b7 */
    "ø7",
    /* 1,b3,b5,b7 + extensions */
    "ø9",
    "ø11",
    "ø13",
    /* dim-maj Seven 1,b3,b5,7 */
    "dim-maj7",
    /* 1,b3,b5,7 + extensions */
    "dim-maj9",
    "dim-maj11",
    "dim-maj13",
    
    "sus2",
    "6sus2",
    "7sus2",
    "9sus2",
    "11sus2",
    "13sus2",
    "maj7sus2",
    "maj9sus2",
    "maj11sus2",
    "maj13sus2",
    
    "sus4",
    "6sus4",
    "7sus4",
    "9sus4",
    "11sus4",
    "13sus4",
    "maj7sus4",
    "maj9sus4",
    "maj11sus4",
    "maj13sus4",
]

function modExtension(chord) {
    let mods = [
        "b9",
        "#9",
        "b11",
        "#11",
        "b13",
        "#13"
    ];
    
}

//main man
function createChords () {
    let chords = {};
    
    let triads = Note.list.forEach(note => {
        chords[note] = createTriads(note);
    });
 
    
}





//chords["A"]["minor"].extensions["maj7"]
//chords["A"]["minor"].mod["b2, b3"]