function charCounter(string, letter) {
    var letter_count = 0
    for (var letter_spot = 0; letter_spot <= string.length; letter_spot++) {
        if (string.charAt(letter_spot) == letter) {
          letter_count += 1;
        }
      }
      console.log(letter_count)

}

charCounter('tyler kowalewski', 'w')