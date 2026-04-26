var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-3-solutions-127a",
  "level": "1",
  "url": "#probset-3-solutions-127a",
  "type": "Article",
  "number": "",
  "title": "Problem Set 3 Solutions",
  "body": " Problem Set 3 Solutions    MAT 127A SQ 2026        Problem 1: Let be a sequence such that and    Use induction to prove that and for all .   Now, a lemma: Let and be a sequence of real numbers. Prove that if , then the sequence defined by satisfies as well.   Prove that converges and use the result of (b) to find its limit .     Solution:    We know and , so the base case of the induction holds. Now, suppose that the claim is true for some . We want to use this to show that it holds for . Notice that   using the inductive hypothesis that . This shows that . Also, we have   using the inductive hypothesis that .   To prove , let and let such that implies . We claim that this suffices. Indeed, for any , since .   Since is bounded above and increasing, the Monotone Convergence Theorem implies that it converges to some real number . Using (b) and the Algebraic Limit Theorem, we can conclude that   which says , implying .    Problem 2 (Abbott Exercise 2.5.1): Give an example of each of the following, or argue that such a request is impossible. A sequence that has a subsequence that is bounded but contains no subsequence that converges. A sequence that does not contain or as a term but contains subsequences converging to each of these values. A sequence that contains subsequences converging to every point in the infinite set . A sequence that contains subsequences converging to every point in the infinite set , and no subsequences converging to points outside of this set.   Solution:    Impossible by Bolzano-Weierstrass.   Use the sequence    Use the sequence   gotten by repeatedly concatenating the first elements of the set for every .   Impossible. Any such sequence must have 0 as a limit of a subsequence. Indeed, for any , there are infinitely many such that . To get a subsequence converging to 0 using this fact, we can inductively choose an increasing sequence such that . To see this fact holds, let be such that and let be a subsequence converging to . There are infinitely many such that , meaning and . So, there are infinitely many such that as desired.    Problem 3 (Abbott Exercise 2.5.5): Assume is a bounded sequence with the property that every convergent subsequence of converges to the same limit . Show that must converge to .   Solution: One strategy is to use proof by contradiction: If the sequence does not converge to , then we can find infinitely many terms outside of a neighborhood of . These form a subsequence of that, by Bolzano-Weierstrass, converge to some number not equal to .    Proof: Towards a contradiction, assume that does not converge to . Being careful with the quantifiers, this means that there exists such that for all , there exists some such that . Applying this condition once (say, with ), we receive an integer such that . Applying this condition with , we receive an integer such that . Continuing in this fashion, we receive a subsequence such that   Since is bounded, is bounded, and Bolzano-Weierstrass implies that itself has a subsequence that converges to . This contradicts the fact that for all , completing the proof.  Problem 4 (Abbott Exercise 2.6.3): If and are Cauchy sequences, then one easy way to prove that is Cauchy is to use the Cauchy Criterion. By Theorem 2.6.4, and must be convergent, and the Algebraic Limit Theorem then implies is convergent and hence Cauchy. Give a direct argument that is a Cauchy sequence that does not use the Cauchy Criterion or the Algebraic Limit Theorem. Do the same for the product .   Solution:    Let . We need to produce an such that imply . Using the fact that and are Cauchy, we can find such that   and   We claim that is an admissible choice of . Indeed, for any , the triangle inequality gives    Let's recall some algebra used in bounding the difference of products. Recall   where we used the triangle inequality in the final line. Since and are Cauchy, they are bounded, so we can replace the and with uniform bounds. The differences can clearly be made small as well, leading to the result. Let's implement this plan.   Proof: Let . We need to produce such that imply . Since and are Cauchy, they are bounded. This means there exist constants such that   and   Using the definition of Cauchy, we can also find such that   and   We choose . To verify that this works, let and observe that     "
},
{
  "id": "probset-3-solutions-127a-3",
  "level": "2",
  "url": "#probset-3-solutions-127a-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 1: "
},
{
  "id": "probset-3-solutions-127a-6",
  "level": "2",
  "url": "#probset-3-solutions-127a-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-3-solutions-127a-8",
  "level": "2",
  "url": "#probset-3-solutions-127a-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 2 (Abbott Exercise 2.5.1): "
},
{
  "id": "probset-3-solutions-127a-10",
  "level": "2",
  "url": "#probset-3-solutions-127a-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-3-solutions-127a-12",
  "level": "2",
  "url": "#probset-3-solutions-127a-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 3 (Abbott Exercise 2.5.5): "
},
{
  "id": "probset-3-solutions-127a-13",
  "level": "2",
  "url": "#probset-3-solutions-127a-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-3-solutions-127a-14",
  "level": "2",
  "url": "#probset-3-solutions-127a-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Proof: "
},
{
  "id": "probset-3-solutions-127a-17",
  "level": "2",
  "url": "#probset-3-solutions-127a-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 4 (Abbott Exercise 2.6.3): "
},
{
  "id": "probset-3-solutions-127a-19",
  "level": "2",
  "url": "#probset-3-solutions-127a-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-3-solutions-127a-20-2-4",
  "level": "2",
  "url": "#probset-3-solutions-127a-20-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Proof: "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
