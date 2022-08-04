class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  console.log("Traversing the list after deleting dups: \n");
  while (head !== null) {
    console.log(`(${head["val"]})`);
    head = head["next"];
  }

  return head;
}
const node0 = new ListNode(1, null);
const node1 = new ListNode(1, node0);
const node2 = new ListNode(2, node1);
const node3 = new ListNode(3, node2);
deleteDuplicates(node3);
