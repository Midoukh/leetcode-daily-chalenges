class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const addTwoNumbers = (l1: ListNode, l2: ListNode): ListNode => {
  let dummyNode = new ListNode(0);
  //   {
  //       val: 0,
  //       next: null
  //   }

  let newHead = dummyNode;

  let carry = 0;

  while (l1 || l2) {
    let valueList1 = l1 ? l1.val : 0;
    let valueList2 = l2 ? l2.val : 0;

    //carry?
    //7 +
    //5
    //2 here the carry is 1 or Math.floor((7+5)/10)
    //sum = (7+5) % 10
    //carry = 1 and sum = 2
    let sum = valueList1 + valueList2 + carry;

    carry = Math.floor(sum / 10);

    sum = sum % 10;

    newHead.next = new ListNode(sum);

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;

    newHead = newHead.next;
  }

  if (carry > 0) newHead.next = new ListNode(carry);

  return dummyNode.next;
};
