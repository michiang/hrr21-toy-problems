//Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.

function rockPaperPermutation (roundCount) {
  var result = [];
  var options = ["r", "p", "s"];
  //use recursion
  //base case...
  //Q: What are we pushing to the result array every execution? A: a string of combinations
  //start off with an empty string (which will then be pushed to result array)
  //What do we know? length of the string will always equal the number of rounds being executed
  //If these two are ever equal, push the string to the result array (base case)

  //recursive:
  //Need to iterate through options and get all possible combinations relative to the current option being compared to
  //loop through options and concatenate each combination of options to the string
  //
  if (roundCount) {
  var recursive = function(string) {
    if (string.length === roundCount) {
      result.push(string);
      return;
    }
      for (var i = 0; i < options.length; i++) {
        // "rr" (i = 1), "rp", "rs", hit the end of options array, exit, "pr" 
        console.log(string);
        recursive (string + options[i]);
      }
    }
     recursive('');
  }
  return result;
}

console.log(rockPaperPermutation(2));
