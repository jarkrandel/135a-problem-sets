var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-1-127a",
  "level": "1",
  "url": "#probset-1-127a",
  "type": "Article",
  "number": "",
  "title": "Problem Set 1",
  "body": " Problem Set 1    MAT 127A SQ 2026  Due Friday, April 10th at 11:59PM      Problems    Abbott Example 1.2.5 and Exercise 1.2.6. Look up Example 1.2.5 in the textbook, and then complete Exercise 1.2.6. This is very important for everything, so please work to understand it.   Verify the triangle inequality in the special case where and have the same sign.  Find an efficient proof for all cases at once by first demonstrating . For part (b), you can use the fact that is increasing: for positive real numbers and , if and only if .  Prove for all , , , and .  Prove .    For part (b), a good general strategy for proving an inequality is to start with the left-hand side and do a sequence of algebraic manipulations or simple inequalities, such as , until you arrive at the right-hand side. For part (d), remember that for some positive is the same as , so you can prove each inequality separately.     Abbott Exercise 1.3.6. Given sets and , define . Follow these steps to prove that if and are nonempty and bounded above, then .   Let and . Show is an upper bound for .  Now let be an arbitrary upper bound for , and temporarily fix . Show .  Finally, show .  Construct another proof of this same fact using Lemma 1.3.8.    For part (d), to get an element of within of , take elements of and separately that are sufficiently close to and and then add them.     Abbott Exercise 1.3.9.   If , show that there exists an element that is an upper bound for .  Give an example to show that this is not always the case if we only assume .       Abbott Exercise 1.4.4. Let be real numbers and consider the set . Show . Begin by justifying the fact that exists.   Try using Lemma 1.3.8. What about in particular makes this work?     Optional. Abbott Exercise 1.3.10. The Cut Property of the real numbers is the following: If and are nonempty, disjoint sets with and for all and , then there exists such that whenever and whenever .   Use the Axiom of Completeness to prove the Cut Property.  Show that the implication goes the other way; that is, assume possesses the Cut Property and let be a nonempty set that is bounded above. Prove exists.  Give a concrete example showing that the Cut Property is not a valid statement when is replaced by .       Optional. Abbott Exercise 1.4.7. Finish the proof of Theorem 1.4.5 by showing that the assumption leads to a contradiction of the fact that .     "
},
{
  "id": "ps1-prob1",
  "level": "2",
  "url": "#ps1-prob1",
  "type": "Problem",
  "number": "1",
  "title": "",
  "body": "  Abbott Example 1.2.5 and Exercise 1.2.6. Look up Example 1.2.5 in the textbook, and then complete Exercise 1.2.6. This is very important for everything, so please work to understand it.   Verify the triangle inequality in the special case where and have the same sign.  Find an efficient proof for all cases at once by first demonstrating . For part (b), you can use the fact that is increasing: for positive real numbers and , if and only if .  Prove for all , , , and .  Prove .    For part (b), a good general strategy for proving an inequality is to start with the left-hand side and do a sequence of algebraic manipulations or simple inequalities, such as , until you arrive at the right-hand side. For part (d), remember that for some positive is the same as , so you can prove each inequality separately.  "
},
{
  "id": "ps1-prob2",
  "level": "2",
  "url": "#ps1-prob2",
  "type": "Problem",
  "number": "2",
  "title": "",
  "body": "  Abbott Exercise 1.3.6. Given sets and , define . Follow these steps to prove that if and are nonempty and bounded above, then .   Let and . Show is an upper bound for .  Now let be an arbitrary upper bound for , and temporarily fix . Show .  Finally, show .  Construct another proof of this same fact using Lemma 1.3.8.    For part (d), to get an element of within of , take elements of and separately that are sufficiently close to and and then add them.  "
},
{
  "id": "ps1-prob3",
  "level": "2",
  "url": "#ps1-prob3",
  "type": "Problem",
  "number": "3",
  "title": "",
  "body": "  Abbott Exercise 1.3.9.   If , show that there exists an element that is an upper bound for .  Give an example to show that this is not always the case if we only assume .    "
},
{
  "id": "ps1-prob4",
  "level": "2",
  "url": "#ps1-prob4",
  "type": "Problem",
  "number": "4",
  "title": "",
  "body": "  Abbott Exercise 1.4.4. Let be real numbers and consider the set . Show . Begin by justifying the fact that exists.   Try using Lemma 1.3.8. What about in particular makes this work?  "
},
{
  "id": "ps1-prob5",
  "level": "2",
  "url": "#ps1-prob5",
  "type": "Problem",
  "number": "5",
  "title": "",
  "body": "  Optional. Abbott Exercise 1.3.10. The Cut Property of the real numbers is the following: If and are nonempty, disjoint sets with and for all and , then there exists such that whenever and whenever .   Use the Axiom of Completeness to prove the Cut Property.  Show that the implication goes the other way; that is, assume possesses the Cut Property and let be a nonempty set that is bounded above. Prove exists.  Give a concrete example showing that the Cut Property is not a valid statement when is replaced by .    "
},
{
  "id": "ps1-prob6",
  "level": "2",
  "url": "#ps1-prob6",
  "type": "Problem",
  "number": "6",
  "title": "",
  "body": "  Optional. Abbott Exercise 1.4.7. Finish the proof of Theorem 1.4.5 by showing that the assumption leads to a contradiction of the fact that .   "
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
