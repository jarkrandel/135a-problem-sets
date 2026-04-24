var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "topics",
  "level": "1",
  "url": "topics.html",
  "type": "Section",
  "number": "1",
  "title": "Topics",
  "body": " Topics  The Midterm will cover all of the material discussed in lecture up until Friday, April 24. It will consist of 1 problem listing some conceptual True or False questions and 3 problems similar in style to homework\/discussion problems. There will be 1 problem from each category of topics below:    Suprema\/Infima: Know how to prove that the supremum of a given set is equal to some value. To do this, first, prove that the value is an upper bound. Then prove that it is less than or equal to any other upper bound (for infimum, replace upper with lower and less than with greater than). This can often be done directly (See Example 1.3.7), but sometimes proof by contradiction or a usage of Lemma 1.3.8 is helpful in proving the \"least\" part.    Convergence of sequences by definition: Know how to prove that a sequence converges to a given value using the - definition directly for either an explicitly defined sequence (like in Problem Set 2 problem 1) or for a sequence defined in terms of other sequences as in the proof of the Algebraic Limit Theorem. Know how to show a sequence diverges via the definition or divergence criterion.    Subsequences \/ Convergence Criteria \/ Basics of Series: Know the statements of the Monotone Convergence Theorem, Bolzano-Weierstrass, and the Cauchy Criterion. Know how to apply the MCT and BW and work with monotone \/ Cauchy sequences and subsequences. Know the definition of series, how to determine convergence\/divergence using the definition for basic examples, and know the basic properties of series.    "
},
{
  "id": "topics-3-1-1",
  "level": "2",
  "url": "topics.html#topics-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Suprema\/Infima: "
},
{
  "id": "topics-3-2-1",
  "level": "2",
  "url": "topics.html#topics-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Convergence of sequences by definition: "
},
{
  "id": "topics-3-3-1",
  "level": "2",
  "url": "topics.html#topics-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Subsequences \/ Convergence Criteria \/ Basics of Series: "
},
{
  "id": "practice-midterm",
  "level": "1",
  "url": "practice-midterm.html",
  "type": "Problems",
  "number": "2",
  "title": "Practice midterm",
  "body": " Practice midterm   Here's a couple of practice problems to give you an idea of what to expect.     Consider the sequence given by   Prove that converges to directly using the - definition of the limit.    Notice that   Therefore, for any , if we know that is large enough so that , then we will have . By rearranging to solve for , if and only if . So, we should choose in our proof.  Proof: Let . Let satisfy (such an integer exists by the Archimedean Property). Then for any , the above work shows that       Let be nonempty and bounded above. Define   Prove that . You may assume that and .    Let and to simplify notation. We need to show that is the least upper bound for . First, we show it is an upper bound. For any and , we know that and since is an upper bound for and is an upper bound for . Therefore, for any and ,   This shows that is an upper bound. Now, we show it is the least upper bound. We can do this directly. Let be an upper bound for . Then for any and   This gives   for any fixed and for all . This shows that is an upper bound for , hence since is the least upper bound. Rearranging this, we get   for any , meaning that is an upper bound for . Since is the least upper bound for , we get , hence . This shows is the least upper bound for .      Determine whether the following statements are True or False.   There exists a Cauchy sequence with an unbounded subsequence.  If and are convergent sequences such that , , and for all , then .  The set of all rational numbers with for some is dense in .  If has a subsequence that does not converge, then does not converge.  The series converges.       False. Every Cauchy sequence converges by the Cauchy Criterion, and hence is bounded. Every subsequence of a bounded sequence is bounded.    False. The statement is true by the Order Limit Theorem if is replaced with , but for this statement we can use and as a counterexample since .    True. We have no restriction on the numerators, and the denominators get arbitrarily large. This is enough for density by the proof of density.    True. The contrapositive of this statement is: If converges, then every subsequence converges. We proved that every subsequence of a convergent sequence converges to the same limit, so this is true.    False. The series consisting of odd terms is , while the even terms is . The sum of even terms converges while the sum of odd terms diverges to , implying the whole series diverges to .        Let be an increasing sequence such that for all and there exists a subsequence of that is bounded.   Prove that is bounded.  Use the result of part (a) to prove that converges.  Let be such that . Prove that for all . Hint: proof by contradiction is one way of doing this.       Since is bounded, there exists such that for all . Since for all , we know that for all . Given any fixed , we can find so that   using the fact that is increasing.    Since is increasing and bounded, it converges by the Monotone Convergence Theorem.    Towards a proof by contradiction, suppose that for some . Then , and the fact that means that there exists such that for all . On the other hand, the fact that is increasing means that for all , meaning for all . So, for any , we get   a contradiction.      "
},
{
  "id": "practice-problem-1",
  "level": "2",
  "url": "practice-midterm.html#practice-problem-1",
  "type": "Problem",
  "number": "2.1",
  "title": "",
  "body": "  Consider the sequence given by   Prove that converges to directly using the - definition of the limit.    Notice that   Therefore, for any , if we know that is large enough so that , then we will have . By rearranging to solve for , if and only if . So, we should choose in our proof.  Proof: Let . Let satisfy (such an integer exists by the Archimedean Property). Then for any , the above work shows that    "
},
{
  "id": "practice-problem-2",
  "level": "2",
  "url": "practice-midterm.html#practice-problem-2",
  "type": "Problem",
  "number": "2.2",
  "title": "",
  "body": "  Let be nonempty and bounded above. Define   Prove that . You may assume that and .    Let and to simplify notation. We need to show that is the least upper bound for . First, we show it is an upper bound. For any and , we know that and since is an upper bound for and is an upper bound for . Therefore, for any and ,   This shows that is an upper bound. Now, we show it is the least upper bound. We can do this directly. Let be an upper bound for . Then for any and   This gives   for any fixed and for all . This shows that is an upper bound for , hence since is the least upper bound. Rearranging this, we get   for any , meaning that is an upper bound for . Since is the least upper bound for , we get , hence . This shows is the least upper bound for .   "
},
{
  "id": "practice-problem-3",
  "level": "2",
  "url": "practice-midterm.html#practice-problem-3",
  "type": "Problem",
  "number": "2.3",
  "title": "",
  "body": "  Determine whether the following statements are True or False.   There exists a Cauchy sequence with an unbounded subsequence.  If and are convergent sequences such that , , and for all , then .  The set of all rational numbers with for some is dense in .  If has a subsequence that does not converge, then does not converge.  The series converges.       False. Every Cauchy sequence converges by the Cauchy Criterion, and hence is bounded. Every subsequence of a bounded sequence is bounded.    False. The statement is true by the Order Limit Theorem if is replaced with , but for this statement we can use and as a counterexample since .    True. We have no restriction on the numerators, and the denominators get arbitrarily large. This is enough for density by the proof of density.    True. The contrapositive of this statement is: If converges, then every subsequence converges. We proved that every subsequence of a convergent sequence converges to the same limit, so this is true.    False. The series consisting of odd terms is , while the even terms is . The sum of even terms converges while the sum of odd terms diverges to , implying the whole series diverges to .     "
},
{
  "id": "practice-problem-4",
  "level": "2",
  "url": "practice-midterm.html#practice-problem-4",
  "type": "Problem",
  "number": "2.4",
  "title": "",
  "body": "  Let be an increasing sequence such that for all and there exists a subsequence of that is bounded.   Prove that is bounded.  Use the result of part (a) to prove that converges.  Let be such that . Prove that for all . Hint: proof by contradiction is one way of doing this.       Since is bounded, there exists such that for all . Since for all , we know that for all . Given any fixed , we can find so that   using the fact that is increasing.    Since is increasing and bounded, it converges by the Monotone Convergence Theorem.    Towards a proof by contradiction, suppose that for some . Then , and the fact that means that there exists such that for all . On the other hand, the fact that is increasing means that for all , meaning for all . So, for any , we get   a contradiction.     "
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
