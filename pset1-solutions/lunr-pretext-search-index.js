var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-1-solutions-127a",
  "level": "1",
  "url": "#probset-1-solutions-127a",
  "type": "Article",
  "number": "",
  "title": "Problem Set 1 Solutions",
  "body": " Problem Set 1 Solutions    MAT 127A SQ 2026        Problem 1 (Abbott Example 1.2.5 and Exercise 1.2.6): Look up Example 1.2.5 in the textbook, and then complete Exercise 1.2.6. This is very important for everything, so please work to understand it.  Verify the triangle inequality in the special case where and have the same sign. Find an efficient proof for all cases at once by first demonstrating . For part (b), you can use the fact that is increasing. Prove for all , , , and . Prove .   Solution:    If and have the same sign, then they are either both positive or both negative. If both are positive, then is also positive, so   In particular, . If they are both negative, then is negative, so    Notice that   Since is an increasing function and , we get .   We use the delightful trick of adding zero to get   Applying the triangle inequality twice, we get    Recall that, by the definition of the absolute value,   So it suffices to prove both and .  Let's begin with the first inequality, and let's use Abbott's suggestion. The triangle inequality gives   Rearranging this gives . The second inequality follows by using the same strategy with and flipped. Indeed, the triangle inequality gives   so that rearranging gives      Problem 2 (Abbott Exercise 1.3.6): Given sets and , define . Follow these steps to prove that if and are nonempty and bounded above then .  Let and . Show is an upper bound for . Now let be an arbitrary upper bound for , and temporarily fix . Show . Finally, show . Construct another proof of this same fact using Lemma 1.3.8.   Solution: Remember our big picture strategy for proving that the supremum of some set (in this case ) is equal to some number (in this case ): We must show that is an upper bound for , then we must show that it is less than or equal to any other upper bound.   To show that is an upper bound for , we must show that it is greater than or equal to any element in . So, let . By definition, there exist and such that . Since is an upper bound for and is an upper bound for , we know that and . Adding these inequalities gives     and we want to show . Since is the least upper bound for , we know that it is less than or equal to any upper bound, so we would be done if we could show that is an upper bound for ! By the definition of as an upper bound for , we know that   Rearranging this gives   proving that is in fact an upper bound for . Since is the least upper bound for , we know that    We still need to prove the lesser part: For any upper bound of , . Rearranging the conclusion of the previous part, (and using the fact that it holds for any fixed ) we see that   This proves that is an upper bound for , and so satisfies . Therefore, as desired.   Here's the idea: We can apply Lemma 1.3.8 to and separately to find elements of and very very close to and separately. This means is very close to , which we can use to prove satisfies the condition in Lemma 1.3.8 for .   By Lemma 1.3.8, it suffices to prove the following statement: For every , there exists an element such that . Towards a proof of this, fix . Applying Lemma 1.3.8 to the sets and with constant , we see that there exist and such that and . Adding these together, we see that   as desired.    Problem 3 (Abbott Exercise 1.3.9): If , show that there exists an element that is an upper bound for . Give an example to show that this is not always the case if we only assume .   Solution:    Since , we know that . Therefore, we can use Lemma 1.3.8 to get the existence of such that   Since is an upper bound for , this means that   which shows that is an upper bound for .   Let . Then , yet no element of is an upper bound for . Indeed, for any , so that the element ( is just the average of and ) satisfies     Problem 4 (Abbott Exercise 1.4.4): Let be real numbers and consider the set . Show . Begin by justifying the fact that exists.   Solution:   First of all, since , we know that for all . This shows that is an upper bound for . On the other hand, the density of in implies that there exists , showing that is nonempty. Therefore, exists by the Axiom of Completeness.  Using Lemma 1.3.8, in order to show that is the least upper bound it suffices to show that for any , there exists an element satisfying . Towards a proof of this last statement, fix some such that . Using the density of in , we know that there exists satisfying . Since clearly , we know .   You could also try to prove that is the least upper bound using contradiction: Towards a proof by contradiction, suppose that there exists an upper bound of such that . By the density of in , there exists a rational such that . This means , implying . The fact that is an upper bound for means giving the contradiction   "
},
{
  "id": "probset-1-solutions-127a-3",
  "level": "2",
  "url": "#probset-1-solutions-127a-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 1 (Abbott Example 1.2.5 and Exercise 1.2.6): "
},
{
  "id": "probset-1-solutions-127a-5",
  "level": "2",
  "url": "#probset-1-solutions-127a-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-1-solutions-127a-7",
  "level": "2",
  "url": "#probset-1-solutions-127a-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 2 (Abbott Exercise 1.3.6): "
},
{
  "id": "probset-1-solutions-127a-9",
  "level": "2",
  "url": "#probset-1-solutions-127a-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-1-solutions-127a-11",
  "level": "2",
  "url": "#probset-1-solutions-127a-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 3 (Abbott Exercise 1.3.9): "
},
{
  "id": "probset-1-solutions-127a-13",
  "level": "2",
  "url": "#probset-1-solutions-127a-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-1-solutions-127a-15",
  "level": "2",
  "url": "#probset-1-solutions-127a-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 4 (Abbott Exercise 1.4.4): "
},
{
  "id": "probset-1-solutions-127a-16",
  "level": "2",
  "url": "#probset-1-solutions-127a-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
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
