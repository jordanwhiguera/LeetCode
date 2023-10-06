function hIndex(citations) {
  //sort from larger number to smaller number
  //we sort this way because the numbers before the current number will have at least the citation amount of current number.
  //EX:[6,5,3,1,0], 1 paper with at least 6 citation, 2 papers with at least 3, 3 paper with at least 3, 4 with at least 4 citations....
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    //we do i+1 because we start at 0 index.
    //checking if # of citations of current paper is < the number of papers
    //in the above example,at index 2, there are 3 papers(i+1)with at least 3 citations. But if numbers of citations of current paper is < number of papers, that cant be h index. at index 3 , if statements fails, so return 3.
    if (citations[i] < i + 1) {
      return i;
    }
  }
  //This only happens if have array like[5,5,5,5,5]. 5 papers with 5 citations
  return citations.length;
}
