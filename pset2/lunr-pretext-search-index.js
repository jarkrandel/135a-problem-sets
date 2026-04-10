var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-2-127a",
  "level": "1",
  "url": "#probset-2-127a",
  "type": "Article",
  "number": "",
  "title": "Problem Set 2",
  "body": " Problem Set 2    MAT 127A SQ 2026  Due Friday, April 17th at 11:59PM      Problems    Abbott Exercise 2.2.2. Verify, using the definition of convergence of a sequence, that the following sequences converge to the proposed limit.   .  .  .   Remark: In this problem, Abbott tells you what the limit of the sequence is. How would you figure out what the limit should be yourself?   Remember the general strategy. Bound above by something algebraically simple in terms of , then set this upper bound to be and find a lower bound on that makes this work. Then write a formal proof.     Abbott Exercise 2.3.3. (Squeeze Theorem) Show that if for all , and if , then as well.   Try using the definition of convergence and remember that if and only if , and likewise for and in place of .     Abbott Exercise 2.3.10. Consider the following list of conjectures. Provide a short proof for those that are true and a counterexample for any that are false.   If , then .  If , then .  If and , then .  If and for all , then .       Limits of convergent sequences are unique. Let be a sequence of real numbers and let . Suppose that .   Prove that is unique by applying Theorem 1.2.6 to prove that if is any real number such that , then .  Prove that is unique by contradiction: suppose that there exists such that in addition to , and derive a contradiction.    For part (a), can be bounded above using and the triangle inequality. For part (b), implies , yet must get arbitrarily close to both and .     Optional. Abbott Exercise 2.3.11. (Cesaro Means)   Show that if is a convergent sequence, then the sequence given by the averages also converges to the same limit.  Give an example to show that it is possible for the sequence of averages to converge even if does not.      "
},
{
  "id": "ps2-prob1",
  "level": "2",
  "url": "#ps2-prob1",
  "type": "Problem",
  "number": "1",
  "title": "",
  "body": "  Abbott Exercise 2.2.2. Verify, using the definition of convergence of a sequence, that the following sequences converge to the proposed limit.   .  .  .   Remark: In this problem, Abbott tells you what the limit of the sequence is. How would you figure out what the limit should be yourself?   Remember the general strategy. Bound above by something algebraically simple in terms of , then set this upper bound to be and find a lower bound on that makes this work. Then write a formal proof.  "
},
{
  "id": "ps2-prob2",
  "level": "2",
  "url": "#ps2-prob2",
  "type": "Problem",
  "number": "2",
  "title": "",
  "body": "  Abbott Exercise 2.3.3. (Squeeze Theorem) Show that if for all , and if , then as well.   Try using the definition of convergence and remember that if and only if , and likewise for and in place of .  "
},
{
  "id": "ps2-prob3",
  "level": "2",
  "url": "#ps2-prob3",
  "type": "Problem",
  "number": "3",
  "title": "",
  "body": "  Abbott Exercise 2.3.10. Consider the following list of conjectures. Provide a short proof for those that are true and a counterexample for any that are false.   If , then .  If , then .  If and , then .  If and for all , then .    "
},
{
  "id": "ps2-prob4",
  "level": "2",
  "url": "#ps2-prob4",
  "type": "Problem",
  "number": "4",
  "title": "",
  "body": "  Limits of convergent sequences are unique. Let be a sequence of real numbers and let . Suppose that .   Prove that is unique by applying Theorem 1.2.6 to prove that if is any real number such that , then .  Prove that is unique by contradiction: suppose that there exists such that in addition to , and derive a contradiction.    For part (a), can be bounded above using and the triangle inequality. For part (b), implies , yet must get arbitrarily close to both and .  "
},
{
  "id": "ps2-prob5",
  "level": "2",
  "url": "#ps2-prob5",
  "type": "Problem",
  "number": "5",
  "title": "",
  "body": "  Optional. Abbott Exercise 2.3.11. (Cesaro Means)   Show that if is a convergent sequence, then the sequence given by the averages also converges to the same limit.  Give an example to show that it is possible for the sequence of averages to converge even if does not.    "
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
