var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head
    }

    let res = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return res;
};