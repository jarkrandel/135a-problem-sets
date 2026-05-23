var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-7-127a",
  "level": "1",
  "url": "#probset-7-127a",
  "type": "Article",
  "number": "",
  "title": "Problem Set 7",
  "body": " Problem Set 7    MAT 127A SQ 2026  Due Friday, May 29th at 11:59PM      Problems    Abbott Exercise 3.4.5. Let and be nonempty subsets of . Show that if there exist disjoint open sets and with and , then and are separated.   Suppose . Then a limit point of is in , which brings points of arbitrarily close to it. This should contradict the assumption that and sit inside disjoint open sets.     Abbott Exercise 4.2.5. Use Definition 4.2.1 to supply a proper proof for the following limit statements.   .  .  .  .       Abbott Exercise 4.2.7. Let and assume that is a bounded function on in the sense that there exists satisfying for all . Show that if , then as well.      Abbott Exercise 4.2.9. The statement certainly makes intuitive sense. To construct a rigorous definition in the challenge-response style of Definition 4.2.1 for an infinite limit statement of this form, replace the arbitrarily small challenge with an arbitrarily large challenge .  Definition: means that for all we can find a such that whenever , it follows that .   Show in the sense of the previous definition.  Construct a definition for the statement . Show .  What would a rigorous definition for look like? Give an example of such a limit.       Optional. Abbott Exercise 4.2.10. Introductory calculus courses typically refer to the right-hand limit of a function as the limit obtained by letting approach from the right-hand side.   Give a proper definition in the style of Definition 4.2.1 for the right-hand and left-hand limit statements and .  Prove that if and only if both the right-hand and left-hand limits equal .      "
},
{
  "id": "ps7-prob1",
  "level": "2",
  "url": "#ps7-prob1",
  "type": "Problem",
  "number": "1",
  "title": "",
  "body": "  Abbott Exercise 3.4.5. Let and be nonempty subsets of . Show that if there exist disjoint open sets and with and , then and are separated.   Suppose . Then a limit point of is in , which brings points of arbitrarily close to it. This should contradict the assumption that and sit inside disjoint open sets.  "
},
{
  "id": "ps7-prob2",
  "level": "2",
  "url": "#ps7-prob2",
  "type": "Problem",
  "number": "2",
  "title": "",
  "body": "  Abbott Exercise 4.2.5. Use Definition 4.2.1 to supply a proper proof for the following limit statements.   .  .  .  .    "
},
{
  "id": "ps7-prob3",
  "level": "2",
  "url": "#ps7-prob3",
  "type": "Problem",
  "number": "3",
  "title": "",
  "body": "  Abbott Exercise 4.2.7. Let and assume that is a bounded function on in the sense that there exists satisfying for all . Show that if , then as well.   "
},
{
  "id": "ps7-prob4",
  "level": "2",
  "url": "#ps7-prob4",
  "type": "Problem",
  "number": "4",
  "title": "",
  "body": "  Abbott Exercise 4.2.9. The statement certainly makes intuitive sense. To construct a rigorous definition in the challenge-response style of Definition 4.2.1 for an infinite limit statement of this form, replace the arbitrarily small challenge with an arbitrarily large challenge .  Definition: means that for all we can find a such that whenever , it follows that .   Show in the sense of the previous definition.  Construct a definition for the statement . Show .  What would a rigorous definition for look like? Give an example of such a limit.    "
},
{
  "id": "ps7-prob5",
  "level": "2",
  "url": "#ps7-prob5",
  "type": "Problem",
  "number": "5",
  "title": "",
  "body": "  Optional. Abbott Exercise 4.2.10. Introductory calculus courses typically refer to the right-hand limit of a function as the limit obtained by letting approach from the right-hand side.   Give a proper definition in the style of Definition 4.2.1 for the right-hand and left-hand limit statements and .  Prove that if and only if both the right-hand and left-hand limits equal .    "
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
