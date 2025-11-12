let feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words
let wordCount = feedback.split(" ").length;

// Check if it includes negative words
if (feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor")) {
  console.log("Feedback Summary: Needs Improvement");
} else {
  console.log("Feedback Summary: Positive Feedback");
}

console.log(`Word Count: ${wordCount}`);
