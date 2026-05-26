var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "probset-6-solutions-127a",
  "level": "1",
  "url": "#probset-6-solutions-127a",
  "type": "Article",
  "number": "",
  "title": "Problem Set 6 Solutions",
  "body": " Problem Set 6 Solutions    MAT 127A SQ 2026        Problem 1 (Abbott Exercise 3.2.11(a)): Prove .   Solution:    Let and denote the limit points of and respectively. We need to prove that   First, notice that . Indeed, if , then for any , we know that   The same argument works with in place of . We now need to show that . Let . Applying the definition of limit point, this means that for every , there exists such that . Since there are infinitely many such , one of the following is true: either there exist infinitely many such that or there exist infinitely many such that . If the former holds, then . Indeed, for any , there exists some such that so that . If the latter alternative holds, then with a nearly identical proof.   (Bonus) No. Take for every . Then so that   yet      Problem 2 (Abbott Exercise 3.3.1): Show that if is compact and nonempty, then and both exist and are elements of .   Solution: If is compact, then it is closed and bounded. The fact that it is bounded means that it is both bounded above and below, so and exist. To show , notice that for every , there exists such that   This implies . Therefore, since is closed (using Theorem 3.2.8, for example). To show , we use the fact that for every there exists such that   This means , so since is closed.   Problem 3:    Prove that if and , then .   Use part (a) to help you complete Abbott Exercise 3.3.8(a) .     Solution:    Let . Using the facts that and , we can an integer such that   and an integer such that   Set . For any , we can use the triangle inequality to get   Therefore, .   Since , for every there exists such that   This means . By definition there must exist points and such that . This gives us sequences and of points in and respectively. Since is compact, we can extract a subsequence that converges to some point . We can now examine the subsequence and use the compactness of to get a further subsequence that converges to some point . Since subsequences of convergent subsequences converge to the same limit, we also know that and . Part (i) of this problem immediately implies that   Since , , and , we know that so that .     Problem 4: Let be a finite set. You may assume that   where .   Prove that is compact using the definition directly.   Prove that is compact by showing that it is closed and bounded.   Prove that is compact by showing that every open subcover of has a finite subcover.     Solution:    Let . We need to show that has a convergent subsequence with limit in . Since is finite, we claim there must be some element of , call it for some satisfying such that for infinitely many values of . Indeed, otherwise would only take the values each finitely many times, resulting in a finite number of terms total. But is an infinite list of numbers, so this cannot occur. If we let denote the index of the -th occurrence of in the sequence , then the subsequence since it is just a constant sequence with value .   To show that is bounded, we can simply choose as our bound. To show that is closed, notice that   This is a union of open intervals, hence is open. Since is open, we can conclude that is closed.   Let be an open cover of . The fact that means that for every , there exists some open set indexed by such that . Therefore, so that the collection is an open subcover of .    "
},
{
  "id": "probset-6-solutions-127a-3",
  "level": "2",
  "url": "#probset-6-solutions-127a-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 1 (Abbott Exercise 3.2.11(a)): "
},
{
  "id": "probset-6-solutions-127a-4",
  "level": "2",
  "url": "#probset-6-solutions-127a-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-6-solutions-127a-6",
  "level": "2",
  "url": "#probset-6-solutions-127a-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 2 (Abbott Exercise 3.3.1): "
},
{
  "id": "probset-6-solutions-127a-7",
  "level": "2",
  "url": "#probset-6-solutions-127a-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-6-solutions-127a-12",
  "level": "2",
  "url": "#probset-6-solutions-127a-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 3: "
},
{
  "id": "probset-6-solutions-127a-14",
  "level": "2",
  "url": "#probset-6-solutions-127a-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "probset-6-solutions-127a-16",
  "level": "2",
  "url": "#probset-6-solutions-127a-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem 4: "
},
{
  "id": "probset-6-solutions-127a-20",
  "level": "2",
  "url": "#probset-6-solutions-127a-20",
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
