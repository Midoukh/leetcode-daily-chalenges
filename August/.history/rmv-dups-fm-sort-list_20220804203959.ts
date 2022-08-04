class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let current = head || new ListNode();
  let visited = new Set([current["val"]]);

  while (current["next"]) {
    let nextNode = current["next"];
    if (visited.has(nextNode["val"])) {
      current["next"] = nextNode["next"];
    } else {
      visited.add(nextNode["val"]);
      current = nextNode;
    }
  }

  return head;
}
const node0 = new ListNode(1, null);
const node1 = new ListNode(1, node0);
const node2 = new ListNode(2, node1);
const node3 = new ListNode(3, node2);
deleteDuplicates(node3);
