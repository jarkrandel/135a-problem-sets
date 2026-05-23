var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-5-solutions-127a",
  "level": "1",
  "url": "#probset-5-solutions-127a",
  "type": "Article",
  "number": "",
  "title": "Problem Set 5 Solutions",
  "body": " Problem Set 5 Solutions    MAT 127A SQ 2026        Problem 1 (Abbott Exercise 3.2.2): Let and . Answer the questions about limit points, openness\/closedness, isolated points, and closure for each set.   Solution:    Let and denote the sets of limit points of and respectively. We have and .    is neither open nor closed: contains no intervals, so it cannot be open. On the other hand, does not contain its limit point , so it is not closed.   is also neither open nor closed. The density of the irrationals mean any neighborhood of an element of contains some irrational point which is not an element of by definition. On the other hand, has many irrational limit points that it does not contain, so it is not closed.   We claim every point of is isolated except for 1. Indeed, is the union of the elements of two sequences that pick out the elements corresponding to odd and even integers in the definition of : and . The former sequence converges to -1 while the latter converges to 1. This shows that is not isolated. On the other hand, if is such that , then also so that has positive distance from the limits of and . This means there exists a neighborhood of that contains at most finitely many points of . Therefore, we can shrink this neighborhood so that it contains no points of besides , showing is isolated.   contains no isolated points by the density of the rationals.    and .     Problem 2 (Abbott Exercise 3.2.5): Prove Theorem 3.2.8.   Solution: First, suppose that is closed and let be a Cauchy sequence such that for all . Since is a Cauchy sequence, for some . Our goal is to show that using the fact that is closed, i.e., it contains its limit points. If there exists an such that , then . If instead for every , then is a limit point of so that . This completes the proof of the forward direction.  Now, suppose that every Cauchy sequence converges to a point in . Recall that is closed if it contains its limit points, so we must show that every limit point of is in . Let be a limit point of . Then there exists a sequence such that and for all . The fact that converges means that it's a Cauchy sequence whose terms are all contained in , so our hypothesis implies that its limit is contained in . That is, as desired.   Problem 3 (Abbott Exercise 3.2.7): Given , let be the set of all limit points of .    Intuition: In order to show that is closed, we must show that contains all of its limit points. In other words, we must show that any point that is a limit point of limit points of is itself a limit point of . The idea is that we can produce elements of arbitrarily close to by first getting a limit point of very close to , then using that limit point to get an element of very close to it. We must be a bit careful to ensure that this element is not actually equal to .   Proof: Let be a limit point of . In order to show that is a limit point of , we must show that   So, let . Since is a limit point of , we know that   Let . Since , we know that . The fact that is a limit point of then implies that   Let . The fact that implies , so , while the fact that implies . The triangle inequality implies   This shows that .   Let be a limit point of . If is also a limit point of , then part (a) means that . On the other hand, if is not a limit point of , then there exists such that . This means that for any , . Since is a limit point of , this means   so that is a limit point of .  For proof of Theorem 3.2.12, observe that contains its limit points, so is closed. On the other hand, any closed set contains its limit points, so .     Problem 4: Neighborhoods of points are a special case of neighborhoods of sets . Let be nonempty. For any , define the distance of to by   If is finite, this is just the minimal distance of to a point in . Given , we use this to define the open -neighborhood of by    Show that if is such that , then there exists such that .   Prove that is open.     Solution:    Let . By properties of infima, there exists an element such that   This element has the form for some , proving the first claim.   Intuition: If , then there is some room around to fit a neighborhood of points such that as well. We can prove the last part using a nice point from part (a) to upper bound the distance with the help of the triangle inequality.    Proof: Let . This means that , and part (a) implies that there exists such that . Let . We claim that . Indeed, let . Then   In particular, this means that , showing that .    "
},
{
  "id": "probset-5-solutions-127a-3",
  "level": "2",
  "url": "#probset-5-solutions-127a-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 1 (Abbott Exercise 3.2.2): "
},
{
  "id": "probset-5-solutions-127a-4",
  "level": "2",
  "url": "#probset-5-solutions-127a-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-5-solutions-127a-6",
  "level": "2",
  "url": "#probset-5-solutions-127a-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 2 (Abbott Exercise 3.2.5): "
},
{
  "id": "probset-5-solutions-127a-7",
  "level": "2",
  "url": "#probset-5-solutions-127a-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-5-solutions-127a-9",
  "level": "2",
  "url": "#probset-5-solutions-127a-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 3 (Abbott Exercise 3.2.7): "
},
{
  "id": "probset-5-solutions-127a-10-1-1",
  "level": "2",
  "url": "#probset-5-solutions-127a-10-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Intuition: "
},
{
  "id": "probset-5-solutions-127a-10-1-2",
  "level": "2",
  "url": "#probset-5-solutions-127a-10-1-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Proof: "
},
{
  "id": "probset-5-solutions-127a-11",
  "level": "2",
  "url": "#probset-5-solutions-127a-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 4: "
},
{
  "id": "probset-5-solutions-127a-16",
  "level": "2",
  "url": "#probset-5-solutions-127a-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-5-solutions-127a-17-2-2",
  "level": "2",
  "url": "#probset-5-solutions-127a-17-2-2",
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
