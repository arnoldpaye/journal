# Classification

## Model Evaluation and Selection
- What is accuracy?

### Metrics for Evaluation Classifier Performance
- Tuples evently distributed and unbalanced

Classifier evaluation measures:
- Accuracy (recongnition rate)
- Sensitivity (recall)
- Specificity
- Precision
- F1
- Fbetha

Terminology:
- Positive tuples: tuples of the main class of interest
- Negative tuples: all other tuples
- P: number of positive tuples
- N: number of negative tuples
- True positives (TP)
- True negatives (TN)
- False positives (FP)
- False negatives (FN)

accuracy = (TP + TN) / (P + N)

sensitivity = TP / P

specificity = TN / N

precision = TP / (TP + FP)

recall = TP / (TP + FN) = TP / P

Summary:
- The accuracy measure works best when the data classes are fairly distributed
- Sensitivity, specificity, precision, F and Fbetha are better suited to the class imbalanced problem