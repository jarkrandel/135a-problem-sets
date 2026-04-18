var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-3-127a",
  "level": "1",
  "url": "#probset-3-127a",
  "type": "Article",
  "number": "",
  "title": "Problem Set 3",
  "body": " Problem Set 3    MAT 127A SQ 2026  Due Friday, April 24th at 11:59PM      Problems    Let be a sequence such that and for all .   Use induction to prove that and for all .  Let and let be a sequence of real numbers. Prove that if , then the sequence defined by satisfies as well.  Prove that converges and use the result of part (b) to find its limit .    For part (a), for the increasing part use the recursive definition to write and in terms of and respectively. For part (b), use the fact that to get an that works.     Abbott Exercise 2.5.1. Give an example of each of the following, or argue that such a request is impossible.   A sequence that has a subsequence that is bounded but contains no subsequence that converges.  A sequence that does not contain or as a term but contains subsequences converging to each of these values.  A sequence that contains subsequences converging to every point in the infinite set .  A sequence that contains subsequences converging to every point in the infinite set , and no subsequences converging to points outside of this set.    For part (d), make each element of the set appear infinitely often. Repeat larger and larger parts of the set over time.     Abbott Exercise 2.5.5. Assume is a bounded sequence with the property that every convergent subsequence of converges to the same limit . Show that must converge to .   What if this were not true?     Abbott Exercise 2.6.3. If and are Cauchy sequences, then one easy way to prove that is Cauchy is to use the Cauchy Criterion. By Theorem 2.6.4, and must be convergent, and the Algebraic Limit Theorem then implies is convergent and hence Cauchy.   Give a direct argument that is a Cauchy sequence that does not use the Cauchy Criterion or the Algebraic Limit Theorem.  Do the same for the product .       Optional. Let be an enumeration of the rational numbers. Prove that for any , there exists a subsequence such that .      Optional. Abbott Exercise 2.4.7. (Limit Superior) Let be a bounded sequence.   Prove that the sequence defined by converges.  The limit superior of , or , is defined by , where is the sequence from part (a). Provide a reasonable definition for and briefly explain why it always exists for any bounded sequence.  Prove that for every bounded sequence, and give an example of a sequence for which the inequality is strict.  Show that if and only if exists. In this case, all three share the same value.      "
},
{
  "id": "ps3-prob1",
  "level": "2",
  "url": "#ps3-prob1",
  "type": "Problem",
  "number": "1",
  "title": "",
  "body": "  Let be a sequence such that and for all .   Use induction to prove that and for all .  Let and let be a sequence of real numbers. Prove that if , then the sequence defined by satisfies as well.  Prove that converges and use the result of part (b) to find its limit .    For part (a), for the increasing part use the recursive definition to write and in terms of and respectively. For part (b), use the fact that to get an that works.  "
},
{
  "id": "ps3-prob2",
  "level": "2",
  "url": "#ps3-prob2",
  "type": "Problem",
  "number": "2",
  "title": "",
  "body": "  Abbott Exercise 2.5.1. Give an example of each of the following, or argue that such a request is impossible.   A sequence that has a subsequence that is bounded but contains no subsequence that converges.  A sequence that does not contain or as a term but contains subsequences converging to each of these values.  A sequence that contains subsequences converging to every point in the infinite set .  A sequence that contains subsequences converging to every point in the infinite set , and no subsequences converging to points outside of this set.    For part (d), make each element of the set appear infinitely often. Repeat larger and larger parts of the set over time.  "
},
{
  "id": "ps3-prob3",
  "level": "2",
  "url": "#ps3-prob3",
  "type": "Problem",
  "number": "3",
  "title": "",
  "body": "  Abbott Exercise 2.5.5. Assume is a bounded sequence with the property that every convergent subsequence of converges to the same limit . Show that must converge to .   What if this were not true?  "
},
{
  "id": "ps3-prob4",
  "level": "2",
  "url": "#ps3-prob4",
  "type": "Problem",
  "number": "4",
  "title": "",
  "body": "  Abbott Exercise 2.6.3. If and are Cauchy sequences, then one easy way to prove that is Cauchy is to use the Cauchy Criterion. By Theorem 2.6.4, and must be convergent, and the Algebraic Limit Theorem then implies is convergent and hence Cauchy.   Give a direct argument that is a Cauchy sequence that does not use the Cauchy Criterion or the Algebraic Limit Theorem.  Do the same for the product .    "
},
{
  "id": "ps3-prob5",
  "level": "2",
  "url": "#ps3-prob5",
  "type": "Problem",
  "number": "5",
  "title": "",
  "body": "  Optional. Let be an enumeration of the rational numbers. Prove that for any , there exists a subsequence such that .   "
},
{
  "id": "ps3-prob6",
  "level": "2",
  "url": "#ps3-prob6",
  "type": "Problem",
  "number": "6",
  "title": "",
  "body": "  Optional. Abbott Exercise 2.4.7. (Limit Superior) Let be a bounded sequence.   Prove that the sequence defined by converges.  The limit superior of , or , is defined by , where is the sequence from part (a). Provide a reasonable definition for and briefly explain why it always exists for any bounded sequence.  Prove that for every bounded sequence, and give an example of a sequence for which the inequality is strict.  Show that if and only if exists. In this case, all three share the same value.    "
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
